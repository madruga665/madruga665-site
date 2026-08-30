# Implementation Plan: Structured Logging and Telemetry for Observability

**Branch**: `006-structured-logging-telemetry` | **Date**: 2026-08-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/006-structured-logging-telemetry/spec.md`

## Summary

Implement a production-grade observability and telemetry system for the `madruga665-site` application tailored for a host VPS running Grafana, Loki, and Prometheus. The system consists of:
1. A zero-dependency, type-safe structured JSON logger (`src/lib/logger.ts`) emitting single-line JSON records to `stdout`/`stderr` for Promtail/Loki log stream ingestion.
2. An asynchronous, non-blocking client-side telemetry system (`<TelemetryProvider>`, `<PageViewTracker>`, global click event delegator) dispatching sanitized pageview and interaction click events via `navigator.sendBeacon` and `keepalive` fetch.
3. Next.js 15 App Router Route Handlers for event ingestion (`/api/telemetry`), uptime health probes (`/api/health`), and Prometheus metrics scraping (`/api/metrics`) via `prom-client`.
4. Sanitization and privacy safeguards preventing PII or sensitive form inputs from entering log streams.

---

## Technical Context

**Language/Version**: TypeScript 5.9+ (Strict Mode), Node.js 20+ (Node 20 Alpine in Docker)

**Primary Dependencies**: Next.js 15.5+ (App Router, Standalone output), React 19, `prom-client` (Prometheus metrics), Zod 3+ (runtime schema validation)

**Storage**: In-memory Prometheus metrics registry (`prom-client`), stdout JSON streams to Docker/Loki (no local disk database required)

**Testing**: Jest 29 + React Testing Library (`@testing-library/react`, `@testing-library/dom`), coverage target 100% on new telemetry & logger units

**Target Platform**: Linux VPS (Docker containerized Next.js standalone runner) with host Prometheus, Promtail, Loki, and Grafana

**Project Type**: Fullstack Next.js Web Application + Internal Observability APIs

**Performance Goals**:
- Telemetry dispatch: 0ms main thread blocking (fully asynchronous/fire-and-forget).
- Pageview logging: emitted within 500ms of route transition.
- Health & Metrics API: response time < 100ms.

**Constraints**:
- Single-line JSON log serialization to prevent multi-line stack trace splitting in Loki.
- Zero PII (Personally Identifiable Information) collected or logged.
- Full compatibility with Next.js 15 Server Components and App Router Suspense boundaries.

**Scale/Scope**: ~10 new/updated source files, full unit test coverage.

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

- [x] **I. Modern Next.js & React 19 Architecture**: Server components remain default; telemetry wrapper uses client component leaf nodes with `<Suspense>` boundaries for route hooks (`usePathname`, `useSearchParams`).
- [x] **II. Premium Visual Design System & UX**: Telemetry tracking adds zero UI delay and preserves instant tactile feedback on Neobrutalism components without visual regressions.
- [x] **III. Type Safety & Schema Validation**: Strict TypeScript used across all entities, loggers, and metrics. Telemetry payloads validated at runtime with Zod schemas before processing.
- [x] **IV. Automated Testing Discipline & Quality Gates**: All new logger utilities, telemetry client providers, and API routes will be backed by comprehensive Jest tests (`npm run test`) and pass `npm run lint`.
- [x] **V. Performance, SEO & Web Accessibility**: Asynchronous `sendBeacon`/`keepalive` dispatch avoids impacting Core Web Vitals (LCP, CLS, INP); WCAG 2.2 AA accessibility unaffected.
- [x] **VI. Mandatory Subagent Delegation for Research**: Research subagent dispatched and completed investigation cleanly before final design.

---

## Project Structure

### Documentation (this feature)

```text
specs/006-structured-logging-telemetry/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   ├── telemetry-api.json
│   ├── observability-api.md
│   └── html-telemetry-attributes.md
└── checklists/
    └── requirements.md
```

### Source Code Layout

```text
src/
├── app/
│   ├── api/
│   │   ├── health/
│   │   │   └── route.ts             # Health check probe (/api/health)
│   │   ├── metrics/
│   │   │   └── route.ts             # Prometheus metrics scraper (/api/metrics)
│   │   └── telemetry/
│   │       └── route.ts             # Ingestion route handler (/api/telemetry)
│   ├── layout.tsx                   # Mounts <TelemetryProvider> inside body
│   └── ...
├── components/
│   ├── Telemetry/
│   │   ├── TelemetryProvider.tsx    # Client wrapper & global click event delegator
│   │   ├── PageViewTracker.tsx      # Suspense-wrapped route change tracker
│   │   ├── __tests__/
│   │   │   └── Telemetry.test.tsx   # Telemetry client tests
│   │   └── index.ts
│   ├── LinkButton/
│   │   └── index.tsx                # Supports data-track-* attributes
│   ├── ProjectCard/
│   │   └── index.tsx                # Adds data-track-* attributes to CTAs
│   └── ContactForm/
│       └── index.tsx                # Dispatches form submit interaction metrics
├── interfaces/
│   └── telemetry.ts                 # Shared TypeScript interfaces & Zod schemas
└── lib/
    ├── logger.ts                    # Zero-dependency structured JSON logger
    ├── metrics.ts                   # prom-client singleton registry & counters
    └── __tests__/
        ├── logger.test.ts           # Logger unit tests
        └── metrics.test.ts          # Metrics unit tests
```

**Structure Decision**: Clean separation following the repository's established conventions: reusable client providers in `src/components/Telemetry/`, core logging and metric utilities in `src/lib/`, Route Handlers in `src/app/api/`, and strong typing in `src/interfaces/telemetry.ts`.

---

## Complexity Tracking

> **Constitution Check**: All gates passed without violations. No complexity bypass needed.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None      | N/A        | Standard Next.js 15 & Clean Architecture patterns fully respected |
