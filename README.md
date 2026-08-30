# madruga665-site

Personal portfolio and contact application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and a **Neobrutalism** visual design system. Integrated with **Notion API** as a CMS and instrumented for production observability with **Grafana**, **Loki**, and **Prometheus**.

---

## Tech Stack

- **Framework**: Next.js 15.5+ (App Router, Standalone build)
- **UI Library**: React 19
- **Language**: TypeScript 5+ (Strict mode)
- **Styling**: Sass / SCSS Modules, CSS custom properties (`src/styles/neobrutalism.scss`)
- **CMS**: Notion API (`@notionhq/client`)
- **Forms & Validation**: React Hook Form + Zod
- **Observability**: Structured JSON logging (Loki), `prom-client` metrics (Prometheus), Healthchecks
- **Testing**: Jest + React Testing Library

---

## Available Scripts

```bash
# Start local development server
npm run dev

# Run production build
npm run build

# Start production standalone server
npm start

# Run ESLint linter
npm run lint

# Run Jest automated tests
npm run test

# Run tests with code coverage
npm run test:coverage
```

---

## Observability & Monitoring (Grafana / Loki / Prometheus)

### 1. Structured JSON Logging (Loki / Promtail)
The application emits single-line JSON logs directly to `stdout`/`stderr`. When running in Docker on a VPS, Promtail scrapes container logs and forwards them to Loki.

**Sample Log Entry**:
```json
{
  "timestamp": "2026-08-30T20:30:00.000Z",
  "level": "info",
  "service": "madruga665-site",
  "environment": "production",
  "event": "telemetry.pageview",
  "message": "Pageview telemetry event recorded",
  "path": "/portifolio/projetos",
  "context": { "sessionId": "...", "referrer": null }
}
```

**Promtail Pipeline Example (`promtail-config.yml`)**:
```yaml
scrape_configs:
  - job_name: docker-containers
    docker_sd_configs:
      - host: unix:///var/run/docker.sock
        refresh_interval: 5s
    pipeline_stages:
      - json:
          expressions:
            level: level
            event: event
            service: service
            path: path
      - labels:
          level:
          event:
          service:
          path:
```

### 2. Prometheus Metrics Endpoint (`/api/metrics`)
Prometheus scrapes operational and telemetry metrics from `/api/metrics`:
- `http_requests_total{method, route, status}`
- `http_request_duration_seconds{method, route, status}` (Histogram)
- `telemetry_pageviews_total{route}`
- `telemetry_clicks_total{target, category}`
- `contact_form_submissions_total{status}`
- Node.js default process metrics (CPU, Memory, Event Loop)

**Prometheus Scrape Configuration (`prometheus.yml`)**:
```yaml
scrape_configs:
  - job_name: 'madruga665-site'
    scrape_interval: 15s
    metrics_path: '/api/metrics'
    static_configs:
      - targets: ['localhost:3000']
```

### 3. Healthcheck Endpoint (`/api/health`)
Returns service health and uptime:
```bash
curl http://localhost:3000/api/health
```
```json
{
  "status": "healthy",
  "uptimeSeconds": 142.5,
  "timestamp": "2026-08-30T20:30:00.000Z",
  "version": "0.1.0",
  "environment": "production"
}
```

---

## License

Private repository. Copyright © 2026 madruga665.
