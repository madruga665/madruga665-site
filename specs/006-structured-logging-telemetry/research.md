# Technical Research: Structured Logging and Telemetry for Observability

**Feature Branch**: `006-structured-logging-telemetry`
**Created**: 2026-08-30
**Status**: Completed

---

## 1. Structured Logging Architecture (Loki / Promtail Ingestion)

### Context & Goal
The application runs as a standalone Next.js 15 Docker container on a VPS. Host-level agents (Promtail / Docker log drivers) capture container `stdout`/`stderr` and forward streams to Loki for aggregation and Grafana exploration.

### Decision
Implement a zero-dependency, type-safe structured JSON logger (`src/lib/logger.ts`) emitting single-line JSON strings to `process.stdout` (for `debug`, `info`, `warn`) and `process.stderr` (for `error`).

### Rationale
- **Zero Bundle & Runtime Bloat**: Native implementation uses standard `process.stdout.write` / `console.log` with JSON serialization, avoiding large external dependencies and native C++ bindings that complicate Next.js standalone multi-stage Alpine builds.
- **Log Splitting Prevention**: Multi-line error stack traces and metadata objects are serialized into a single-line JSON payload, ensuring Promtail ingests every error as a single log record rather than broken fragments.
- **Full App Router & Edge Compatibility**: Runs cleanly across Server Components, Route Handlers, Middleware, and background helpers without worker thread conflicts.
- **Structured Fields**: Enforces mandatory baseline fields (`timestamp`, `level`, `service`, `event`, `message`, `requestId`, `durationMs`, `context`, `error`).

### Alternatives Considered
- **Pino**: High throughput, but introduces bundling quirks with Next.js Turbopack/standalone builds and worker threads. Unnecessary complexity for personal portfolio traffic volume.
- **Winston**: Large dependency tree, slower startup, verbose configuration, and sub-optimal standalone container bundling.

---

## 2. Client-Side Telemetry (Pageviews & User Clicks)

### Context & Goal
Capture visitor page transitions and key engagement clicks (e.g. "Download Resume", project GitHub/live links, social links, contact submissions) with zero performance degradation or UI input delay.

### Decision
1. **Route Transition Pageviews**: Use Next.js App Router hooks (`usePathname`, `useSearchParams`) inside a dedicated client component (`<PageViewTracker />`) wrapped in `<Suspense fallback={null}>` within `<TelemetryProvider />`. Deduplicate consecutive identical path triggers with a React `useRef`.
2. **Interaction Click Tracking**: Use declarative HTML data attributes (`data-track-click="[identifier]"`, `data-track-category="[category]"`, `data-track-label="[label]"`) combined with a single global event delegation listener on `document` attached by `<TelemetryProvider />`.
3. **Transmission Pipeline**: Use `navigator.sendBeacon` (with `Blob` JSON payload) with fallback to `fetch('/api/telemetry', { method: 'POST', keepalive: true })`.
4. **Fire-and-Forget Error Handling**: All dispatch operations execute asynchronously in `try/catch` and catch rejection silently without blocking UI state or navigation.

### Rationale
- **Declarative & Low Coupling**: Adding tracking to buttons or links requires only adding standard `data-track-*` attributes. No wrapper component hierarchy or prop drilling needed.
- **Navigation Safety**: `sendBeacon` and `keepalive: true` guarantee data transmission even when users click an external link or close the browser tab.
- **App Router Best Practice**: Wrapping route hooks in `Suspense` ensures static pages are not de-optimized to client-side rendering during build.

### Alternatives Considered
- **Per-Component `onClick` Hooks**: High code repetition, couples UI component logic tightly with analytics implementation, and risks forgetting click tracking on new components.
- **Synchronous `fetch` / Axios Calls**: Can delay page unloads or introduce micro-stutter during rapid user interactions.

---

## 3. Privacy, Security & PII Protection

### Context & Goal
Ensure visitor privacy, avoid collecting personally identifiable information (PII), and strictly adhere to privacy standards.

### Decision
1. **Ephemeral Anonymous Session ID**: Generate an in-memory or `sessionStorage` UUID (`crypto.randomUUID()`) per browser session. Resets automatically when the browser tab closes. No long-lived cookies, fingerprinting, or IP logging.
2. **Form Payload Sanitization**: Contact form telemetry records strictly operational metrics (`event: 'contact_form_submitted'`, `status: 'success' | 'failure'`, `durationMs: number`). User input values (`name`, `email`, `message`) are never forwarded to telemetry or server logs.
3. **URL Query Param Scrubbing**: Strip sensitive query parameters (`token`, `auth`, `key`, `password`, `email`) before emitting pageview route strings.

### Rationale
- Complies with WCAG, GDPR/LGPD principles by ensuring no personal data is stored in monitoring databases.

### Alternatives Considered
- **Persistent LocalStorage Tracking Cookies**: Invasive, requires cookie consent banners, and unnecessary for portfolio visitor trends.

---

## 4. Metrics & Health Endpoint Architecture (Prometheus / Grafana)

### Context & Goal
Expose Prometheus scrape metrics and uptime health checks for monitoring server status, HTTP request rates, latency distributions, and aggregate interaction counters.

### Decision
1. **Health Endpoint (`/api/health`)**: Lightweight JSON endpoint returning `{ status: 'healthy', uptime: process.uptime(), timestamp: string, version: string }` with HTTP 200.
2. **Metrics Endpoint (`/api/metrics`)**: Prometheus exposition endpoint using `prom-client` with a global singleton registry (`globalThis.__PROMETHEUS_REGISTRY__`).
3. **Prometheus Metrics Registered**:
   - Node.js default process metrics (`process_cpu_user_seconds_total`, `process_resident_memory_bytes`, `nodejs_eventloop_lag_seconds`, `process_uptime_seconds`).
   - `http_requests_total{method, route, status}` (Counter).
   - `http_request_duration_seconds{method, route, status}` (Histogram with standard latency buckets).
   - `telemetry_pageviews_total{route}` (Counter).
   - `telemetry_clicks_total{target, category}` (Counter).
   - `contact_form_submissions_total{status}` (Counter).

### Rationale
- `prom-client` is the battle-tested standard for Node.js Prometheus exposition, handling histogram calculations and text formatting natively.
- Global singleton registry prevents metric re-registration errors during Next.js App Router hot reloads and request lifecycle invocations.

### Alternatives Considered
- **Custom Prometheus Text Formatter**: High maintenance burden, error-prone histogram quantile math, and lacks Node.js process metrics collection.

---

## 5. Docker & VPS Deployment Flow

### Context & Goal
Run the Next.js application in production on a VPS with Prometheus, Promtail, Loki, and Grafana.

### Architecture Flow
1. **Next.js Standalone Container**: Emits single-line JSON logs to `stdout`/`stderr`.
2. **Docker JSON Log Driver**: Writes logs to host Docker log paths.
3. **Promtail**: Scrapes container logs, extracts JSON labels (`level`, `event`, `service`, `path`), and streams to Loki.
4. **Prometheus**: Periodically scrapes `http://<app-container>:3000/api/metrics`.
5. **Grafana**: Visualizes logs from Loki and metrics from Prometheus in unified dashboards.
6. **Docker Healthcheck**: Added to `Dockerfile` calling `wget -q --spider http://localhost:3000/api/health || exit 1`.
