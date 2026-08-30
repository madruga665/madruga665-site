# Tasks: Structured Logging and Telemetry for Observability

**Input**: Design documents from `specs/006-structured-logging-telemetry/`
**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests**: Included as per project constitution quality gates (Jest + React Testing Library).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure & Dependencies)

**Purpose**: Dependency installation and core shared type definitions

- [x] T001 Install `prom-client` dependency in `package.json`
- [x] T002 [P] Define telemetry and logging TypeScript interfaces and Zod schemas in `src/interfaces/telemetry.ts`

---

## Phase 2: Foundational (Core Logger & Metrics Infrastructure)

**Purpose**: Core logging and metric utilities that MUST be completed before story implementations

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 [P] Implement unit tests for structured JSON logger in `src/lib/__tests__/logger.test.ts`
- [x] T004 Implement zero-dependency structured JSON logger in `src/lib/logger.ts`
- [x] T005 [P] Implement unit tests for Prometheus metrics registry in `src/lib/__tests__/metrics.test.ts`
- [x] T006 Implement Prometheus singleton registry and counters/histograms in `src/lib/metrics.ts`

**Checkpoint**: Foundation ready - structured logger and metrics registry operational.

---

## Phase 3: User Story 1 - Structured Application & Server Logging (Priority: P1) 🎯 MVP

**Goal**: Emit standardized single-line JSON logs to `stdout`/`stderr` from API route handlers and server components for Promtail/Loki ingestion.

**Independent Test**: Execute API route requests and intentional error calls; verify stdout emits valid single-line JSON log objects with duration, path, method, status, and error stack trace without splitting.

### Tests for User Story 1

- [x] T007 [P] [US1] Implement unit and integration tests for API route structured logging in `src/app/api/__tests__/api-logging.test.ts`

### Implementation for User Story 1

- [x] T008 [US1] Integrate structured logging and error tracking into `src/app/api/domain/contact/route.ts`
- [x] T009 [P] [US1] Integrate structured logging into `src/app/api/domain/experiences/route.ts`
- [x] T010 [P] [US1] Integrate structured logging into `src/app/api/domain/home/route.ts`
- [x] T011 [P] [US1] Integrate structured logging into `src/app/api/domain/projects/route.ts`

**Checkpoint**: At this point, User Story 1 is fully functional and all API routes produce structured logs for Loki.

---

## Phase 4: User Story 2 - Automated Pageview Telemetry (Priority: P1)

**Goal**: Automatically capture and dispatch non-blocking pageview telemetry upon page navigation and route changes.

**Independent Test**: Navigate across portfolio routes (`/portifolio/home`, `/portifolio/projetos`, `/portifolio/experiencia`, `/portifolio/contato`) and verify that discrete pageview records are sent to `/api/telemetry` and logged to stdout without blocking UI.

### Tests for User Story 2

- [x] T012 [P] [US2] Implement unit tests for telemetry API route in `src/app/api/telemetry/__tests__/route.test.ts`
- [x] T013 [P] [US2] Implement unit tests for client-side PageViewTracker in `src/components/Telemetry/__tests__/PageViewTracker.test.tsx`

### Implementation for User Story 2

- [x] T014 [US2] Implement `POST /api/telemetry` Route Handler with Zod schema validation, structured logger, and Prometheus counters in `src/app/api/telemetry/route.ts`
- [x] T015 [US2] Implement client-side `<PageViewTracker />` with Next.js App Router hooks (`usePathname`, `useSearchParams`), transition deduplication, and non-blocking beacon dispatch in `src/components/Telemetry/PageViewTracker.tsx`
- [x] T016 [US2] Implement `<TelemetryProvider />` client wrapper component with `<Suspense>` boundary in `src/components/Telemetry/TelemetryProvider.tsx` and export from `src/components/Telemetry/index.ts`
- [x] T017 [US2] Mount `<TelemetryProvider />` in the root layout in `src/app/layout.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 work independently. Pageview tracking is fully automated.

---

## Phase 5: User Story 3 - Interactive Click & CTA Engagement Tracking (Priority: P2)

**Goal**: Capture user engagement clicks on key CTAs, project links, navigation items, and form submissions with zero input delay and no PII collection.

**Independent Test**: Click tracked buttons and links, submit the contact form, and verify that interaction events with `data-track-click` metadata and submission results are logged to stdout and increment Prometheus click metrics.

### Tests for User Story 3

- [x] T018 [P] [US3] Implement unit tests for global click event delegator in `src/components/Telemetry/__tests__/ClickTracking.test.tsx`

### Implementation for User Story 3

- [x] T019 [US3] Add global click event delegation listener to `<TelemetryProvider />` to capture elements with `data-track-click` in `src/components/Telemetry/TelemetryProvider.tsx`
- [x] T020 [P] [US3] Update `src/components/LinkButton/index.tsx` to forward `data-track-*` HTML attributes to anchor elements
- [x] T021 [P] [US3] Add declarative `data-track-*` attributes to project CTAs in `src/components/ProjectCard/index.tsx`
- [x] T022 [P] [US3] Add declarative `data-track-*` attributes to navigation links in `src/components/NavLinks/index.tsx`
- [x] T023 [US3] Add contact form submission telemetry tracking (status and durationMs without user text) in `src/components/ContactForm/index.tsx`

**Checkpoint**: User Stories 1, 2, and 3 are functional. Click and CTA engagement metrics are captured.

---

## Phase 6: User Story 4 - Application Health & Metrics Telemetry (Priority: P3)

**Goal**: Expose `/api/health` and `/api/metrics` endpoints for Prometheus scraping and Docker health checks.

**Independent Test**: Query `http://localhost:3000/api/health` and `http://localhost:3000/api/metrics` via `curl` to verify valid HTTP 200 responses with Prometheus text exposition and uptime data.

### Tests for User Story 4

- [x] T024 [P] [US4] Implement unit tests for health and metrics endpoints in `src/app/api/__tests__/observability.test.ts`

### Implementation for User Story 4

- [x] T025 [P] [US4] Implement `GET /api/health` Route Handler in `src/app/api/health/route.ts`
- [x] T026 [US4] Implement `GET /api/metrics` Prometheus scrape Route Handler in `src/app/api/metrics/route.ts`
- [x] T027 [US4] Add Docker `HEALTHCHECK` instruction to `Dockerfile`

**Checkpoint**: Observability endpoints exposed and ready for Prometheus scraping and Docker health monitoring.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Documentation, validation, and final quality gates

- [x] T028 [P] Update `README.md` with Grafana, Loki, Prometheus, and Promtail VPS integration instructions
- [x] T029 Execute full test suite (`npm run test`), linter (`npm run lint`), and production build (`npm run build`)
- [x] T030 Validate all verification scenarios described in `specs/006-structured-logging-telemetry/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1 (T001, T002). Blocks all user stories.
- **User Story 1 (Phase 3)**: Depends on Phase 2. Can be implemented and verified independently as MVP.
- **User Story 2 (Phase 4)**: Depends on Phase 2 and US1 logger. Implements telemetry ingestion and pageview tracking.
- **User Story 3 (Phase 5)**: Depends on Phase 4 (TelemetryProvider and `/api/telemetry`).
- **User Story 4 (Phase 6)**: Depends on Phase 2 (metrics registry). Can be implemented in parallel with US2/US3.
- **Polish (Phase 7)**: Depends on all user stories being complete.

---

## Implementation Strategy Completed

All 30 initial tasks across phases 1 through 7 have been completed, tested with 100% test pass rate, and validated against quality gates.

---

## Phase 8: Convergence

**Purpose**: Complete remaining telemetry attribute coverage identified during convergence audit

- [x] T031 Add declarative `data-track-*` attributes to Download CV `<LinkButton>` and social links in `src/app/portifolio/home/page.tsx` and landing entry link in `src/app/page.tsx` per FR-004 and US3 (partial)
