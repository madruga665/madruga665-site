# Feature Specification: Structured Logging and Telemetry for Observability

**Feature Branch**: `006-structured-logging-telemetry`

**Created**: 2026-08-30

**Status**: Draft

**Input**: User description: "vou add um grafana, loki e prometheus na vps onde esta rodando a aplicação e quero configurar logs estruturados nessa aplicação, quero ter logs de pageview e clicks"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Structured Application & Server Logging (Priority: P1)

As a DevOps engineer and site administrator, I want the web application to emit structured JSON logs (including timestamp, severity level, message, event category, request attributes, and error stack traces) to standard output so that external log collectors (such as Loki via Promtail/Docker log driver) can ingest, parse, index, and query application events seamlessly in Grafana.

**Why this priority**: Structured logging is the foundational requirement for centralizing application observability, debugging production errors, and visualizing runtime health across the monitoring stack.

**Independent Test**: Can be tested by executing API routes, triggering application events and intentional error scenarios, and verifying that stdout outputs valid, parsable JSON records with standard structured schema fields.

**Acceptance Scenarios**:

1. **Given** the application receives an HTTP request or triggers a server action, **When** processing the request, **Then** a structured log entry is emitted with timestamp, level, method, path, status, and duration.
2. **Given** an unhandled exception or API failure occurs, **When** the error is logged, **Then** the log entry includes error type, error message, stack trace, and request context in structured JSON format without breaking parsing.

---

### User Story 2 - Automated Pageview Telemetry (Priority: P1)

As a site owner and analyst, I want the application to automatically capture pageview events whenever a visitor lands on or navigates between pages, so that I can observe traffic volume, popular routes, and navigation flows in Grafana dashboards.

**Why this priority**: Tracking pageviews provides fundamental usage metrics to monitor visitor traffic and assess route-level activity across the site.

**Independent Test**: Can be tested by navigating across different pages (e.g. Home, Projects, Experiences, Contact) and confirming that discrete pageview telemetry events are recorded and logged with accurate route paths and metadata.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to any page on the site, **When** the page transition completes, **Then** a pageview event is logged containing route path, referrer (if available), and anonymous session/client metadata.
2. **Given** a visitor uses client-side navigation between internal links, **When** the route updates without a full page reload, **Then** a new pageview event is captured for the destination route.

---

### User Story 3 - Interactive Click & CTA Engagement Tracking (Priority: P2)

As a site owner and product manager, I want the application to capture user clicks on key interactive elements (such as Call-to-Action buttons, external project links, social media links, and form actions) so that I can measure user engagement and conversion behavior.

**Why this priority**: Tracking user interactions reveals how visitors engage with content, which projects attract interest, and how effectively CTAs convert.

**Independent Test**: Can be tested by clicking on tracked elements (e.g., project preview links, social links, resume download, contact submit) and verifying that corresponding structured click event logs are emitted.

**Acceptance Scenarios**:

1. **Given** a user clicks on a tracked interactive element (e.g. a project link or social media icon), **When** the click event occurs, **Then** an interaction log is emitted containing the element identifier, target label, action type, and current page context.
2. **Given** a user interacts with the contact form, **When** the form is submitted, **Then** an event records the submission outcome (success/failure) without capturing sensitive user message content.

---

### User Story 4 - Application Health & Metrics Telemetry (Priority: P3)

As a site administrator, I want the application to expose health and runtime metrics so that Prometheus and Grafana can scrape availability status, response times, and basic resource telemetry.

**Why this priority**: Health checks and metrics endpoints ensure proactive alerting on downtime or latency anomalies in Prometheus.

**Independent Test**: Can be tested by querying the application's health/metrics endpoint and verifying that uptime status and diagnostic metrics are returned in a format compatible with Prometheus scraping.

**Acceptance Scenarios**:

1. **Given** Prometheus or a monitoring probe queries the health endpoint, **When** the service is operational, **Then** a 200 OK response is returned with uptime, timestamp, and system status indicators.

---

### Edge Cases

- **Network disconnect or client telemetry failure**: If client-side event dispatch fails (due to ad blockers, network glitch, or client offline state), the application MUST fail silently without disrupting user navigation or visual experience.
- **Privacy & PII protection**: Form inputs containing sensitive user personal information (e.g. contact email, message body) MUST NEVER be logged or leaked into telemetry payloads.
- **High-frequency / rapid clicking**: Rapid consecutive clicks on the same element MUST be debounced or handled cleanly to prevent log flooding.
- **Rapid client-side navigation**: Fast route switching MUST capture valid, sequential route transitions without producing duplicate or malformed pageview records.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST output application logs in structured JSON format with standardized fields (timestamp, level, message, event category, and context metadata).
- **FR-002**: System MUST capture pageview events automatically upon initial page load and on client-side route transitions.
- **FR-003**: Pageview logs MUST include route path, referrer (if present), client device/browser category, and an anonymous session identifier.
- **FR-004**: System MUST capture click events on designated interactive components (CTA buttons, project links, navigation links, social profile links).
- **FR-005**: Click event logs MUST record the element identifier, element label/text, action type, and active route pathname.
- **FR-006**: System MUST sanitize all log payloads to ensure zero Personally Identifiable Information (PII) or form content is stored in logs.
- **FR-007**: Client-side telemetry tracking MUST be non-blocking and execute asynchronously without introducing UI lag or delaying navigation.
- **FR-008**: System MUST expose a dedicated health check endpoint providing service status and uptime for external monitoring scrapers (Prometheus/Grafana).

### Key Entities

- **Telemetry Event**: Core schema representing an observable user or system action, with properties for event name (`pageview`, `click`, `error`), timestamp, anonymous session token, and event-specific payload.
- **Pageview Event**: Specialized telemetry entity capturing route pathname, query parameters (sanitized), document title, and referrer.
- **Interaction Event**: Specialized telemetry entity capturing target element ID, component name, CTA label, destination URL (for external links), and click coordinates/category.
- **Structured Log Entry**: Machine-readable log object emitted by backend/API services containing log level (`info`, `warn`, `error`), timestamp, correlation/request ID, execution duration, and message details.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of public route visits generate a valid structured pageview log event within 500ms of route change.
- **SC-002**: 100% of user clicks on designated interactive elements (CTAs, project links, navigation items) produce corresponding interaction telemetry records.
- **SC-003**: 100% of emitted application logs conform to valid JSON format with required base fields, parsable by log ingestion tools without errors.
- **SC-004**: Telemetry tracking introduces zero measurable input delay (0ms blocking time) to user interactions.
- **SC-005**: Zero occurrences of sensitive personal data (e.g., contact form text, email addresses) in telemetry or structured log output.
- **SC-006**: Health and observability endpoint responds to monitoring probes with status 200 in under 100ms.

## Assumptions

- The application is hosted on a VPS where standard container/process output (`stdout`/`stderr`) is collected by Docker/Promtail and shipped to Grafana Loki.
- Client-side interactions and pageviews are sent via a lightweight client utility to an internal Next.js API telemetry route, which standardizes and outputs the event to structured stdout logs for Loki ingestion.
- Prometheus monitors application availability and basic runtime metrics via an exposed HTTP health/metrics endpoint.
- User privacy is preserved by avoiding tracking cookies and relying only on anonymous session identifiers.
