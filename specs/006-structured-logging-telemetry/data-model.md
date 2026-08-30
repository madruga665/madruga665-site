# Data Model: Structured Logging, Telemetry & Observability

**Feature Branch**: `006-structured-logging-telemetry`
**Created**: 2026-08-30
**Status**: Completed

---

## 1. Entities & Schemas

### 1.1 TelemetryEvent (Base Interface)
The base schema representing any client-side interaction or navigation event dispatched to the backend.

```typescript
export interface BaseTelemetryEvent {
  eventId: string;            // UUID v4
  timestamp: string;          // ISO-8601 UTC string (e.g. "2026-08-30T20:30:00.000Z")
  sessionId: string;          // Ephemeral anonymous session UUID (sessionStorage)
  eventType: 'pageview' | 'click' | 'form_submission';
  route: string;              // Current pathname (e.g. "/portifolio/projetos")
  userAgent?: string;         // Browser user agent header (extracted on server)
}
```

---

### 1.2 PageViewEvent
Represents a visitor route transition or initial landing page load.

```typescript
export interface PageViewEvent extends BaseTelemetryEvent {
  eventType: 'pageview';
  referrer: string | null;     // Document referrer (or null if direct/external)
  screenResolution?: string;  // e.g. "1920x1080"
  language?: string;          // e.g. "pt-BR"
}
```

**Validation Rules (Zod)**:
- `eventId`: `z.string().uuid()`
- `timestamp`: `z.string().datetime()`
- `sessionId`: `z.string().uuid()`
- `eventType`: `z.literal('pageview')`
- `route`: `z.string().min(1).max(500)`
- `referrer`: `z.string().max(1000).nullable().optional()`
- `screenResolution`: `z.string().regex(/^\d+x\d+$/).optional()`
- `language`: `z.string().max(20).optional()`

---

### 1.3 ClickInteractionEvent
Represents a user interaction on a tracked UI element (CTA button, project repository link, live preview link, social profile link, navigation toggle).

```typescript
export interface ClickInteractionEvent extends BaseTelemetryEvent {
  eventType: 'click';
  targetId: string;            // Identifier from data-track-click (e.g. "github-repo-link")
  category: string;            // e.g. "cta", "navigation", "social", "project"
  label: string;               // Human-readable label (e.g. "Ver Repositorio", "Download Curriculo")
  href?: string | null;        // Destination URL if the element is an anchor/link
}
```

**Validation Rules (Zod)**:
- `eventId`: `z.string().uuid()`
- `timestamp`: `z.string().datetime()`
- `sessionId`: `z.string().uuid()`
- `eventType`: `z.literal('click')`
- `targetId`: `z.string().min(1).max(100)`
- `category`: `z.string().min(1).max(50)`
- `label`: `z.string().min(1).max(200)`
- `href`: `z.string().url().max(1000).nullable().optional()`

---

### 1.4 FormSubmissionEvent
Represents the result of a contact form submission without capturing user personal data.

```typescript
export interface FormSubmissionEvent extends BaseTelemetryEvent {
  eventType: 'form_submission';
  formId: 'contact_form';
  status: 'success' | 'failure';
  durationMs: number;          // Client submission roundtrip duration
  errorCode?: string;          // Optional error category (e.g. "VALIDATION_ERROR", "API_ERROR")
}
```

**Validation Rules (Zod)**:
- `eventType`: `z.literal('form_submission')`
- `formId`: `z.literal('contact_form')`
- `status`: `z.enum(['success', 'failure'])`
- `durationMs`: `z.number().nonnegative()`
- `errorCode`: `z.string().max(50).optional()`

---

### 1.5 StructuredLog (Server Log Entry)
The standard JSON object emitted to `process.stdout` / `process.stderr` for Loki ingestion.

```typescript
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface StructuredLog {
  timestamp: string;          // ISO-8601 UTC
  level: LogLevel;            // "debug" | "info" | "warn" | "error"
  service: string;            // "madruga665-site"
  environment: string;        // "production" | "development" | "test"
  event: string;              // e.g. "http.request", "telemetry.pageview", "telemetry.click", "notion.query"
  message: string;            // Human-readable summary
  requestId?: string;         // Unique trace ID
  path?: string;              // HTTP path or route
  method?: string;            // HTTP Method
  status?: number;            // HTTP status code
  durationMs?: number;        // Execution time in ms
  context?: Record<string, unknown>; // Safe metadata object
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
}
```

---

### 1.6 HealthStatus
Response payload returned by the `/api/health` monitoring probe.

```typescript
export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  uptimeSeconds: number;
  timestamp: string;
  version: string;
  environment: string;
}
```

---

## 2. State & Data Flow Transitions

```text
[User Action]
     │
     ├── Navigates to route ────► <PageViewTracker> ──┐
     │                                                │
     ├── Clicks [data-track-*] ──► Global Delegator ──┼─► navigator.sendBeacon (or keepalive fetch)
     │                                                │          │
     └── Submits Contact Form ───► trackEvent() ──────┘          ▼
                                                       POST /api/telemetry
                                                                 │
                                                   ┌─────────────┴─────────────┐
                                                   ▼                           ▼
                                            Zod Schema Validation      Prometheus Metrics
                                                   │                   Increment Counters
                                                   ▼                           │
                                         Structured JSON Output                ▼
                                         (process.stdout.write)         GET /api/metrics
                                                   │
                                                   ▼
                                         Docker stdout -> Promtail -> Loki -> Grafana
```
