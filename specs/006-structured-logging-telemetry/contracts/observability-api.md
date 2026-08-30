# Contract: Health & Prometheus Observability Endpoints

**Feature Branch**: `006-structured-logging-telemetry`
**Created**: 2026-08-30

---

## 1. GET `/api/health`

### Description
Lightweight health check probe for Docker container `HEALTHCHECK`, load balancers, and uptime monitors.

### Request
- **Method**: `GET`
- **Headers**: None required

### Response
- **Status**: `200 OK` (when operational), `503 Service Unavailable` (if failing critical subsystems)
- **Headers**: `Content-Type: application/json`
- **Payload Schema**:
  ```json
  {
    "status": "healthy",
    "uptimeSeconds": 1420.35,
    "timestamp": "2026-08-30T20:30:00.000Z",
    "version": "0.1.0",
    "environment": "production"
  }
  ```

---

## 2. GET `/api/metrics`

### Description
Prometheus scrape target exposing system, HTTP runtime, and telemetry metrics in standard Prometheus text exposition format (version 0.0.4).

### Request
- **Method**: `GET`
- **Headers**: None required (or optional Bearer token if configured via `PROMETHEUS_AUTH_SECRET`)

### Response
- **Status**: `200 OK`
- **Headers**: `Content-Type: text/plain; version=0.0.4; charset=utf-8`
- **Example Exposition Body**:
  ```text
  # HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
  # TYPE process_cpu_user_seconds_total counter
  process_cpu_user_seconds_total 1.25

  # HELP process_resident_memory_bytes Resident memory size in bytes.
  # TYPE process_resident_memory_bytes gauge
  process_resident_memory_bytes 74842112

  # HELP http_requests_total Total number of HTTP requests processed.
  # TYPE http_requests_total counter
  http_requests_total{method="GET",route="/api/domain/home",status="200"} 42
  http_requests_total{method="POST",route="/api/telemetry",status="202"} 118

  # HELP http_request_duration_seconds HTTP request duration in seconds.
  # TYPE http_request_duration_seconds histogram
  http_request_duration_seconds_bucket{le="0.005",method="GET",route="/api/domain/home",status="200"} 12
  http_request_duration_seconds_bucket{le="0.05",method="GET",route="/api/domain/home",status="200"} 38
  http_request_duration_seconds_bucket{le="+Inf",method="GET",route="/api/domain/home",status="200"} 42
  http_request_duration_seconds_sum{method="GET",route="/api/domain/home",status="200"} 0.842
  http_request_duration_seconds_count{method="GET",route="/api/domain/home",status="200"} 42

  # HELP telemetry_pageviews_total Total pageview events recorded.
  # TYPE telemetry_pageviews_total counter
  telemetry_pageviews_total{route="/portifolio/home"} 65
  telemetry_pageviews_total{route="/portifolio/projetos"} 40
  telemetry_pageviews_total{route="/portifolio/experiencia"} 22
  telemetry_pageviews_total{route="/portifolio/contato"} 18

  # HELP telemetry_clicks_total Total interaction clicks tracked.
  # TYPE telemetry_clicks_total counter
  telemetry_clicks_total{category="cta",target="download-resume"} 14
  telemetry_clicks_total{category="project",target="github-repo-link"} 27
  telemetry_clicks_total{category="project",target="live-preview-link"} 31
  telemetry_clicks_total{category="social",target="linkedin-profile"} 9

  # HELP contact_form_submissions_total Total contact form submissions.
  # TYPE contact_form_submissions_total counter
  contact_form_submissions_total{status="success"} 5
  contact_form_submissions_total{status="failure"} 0
  ```
