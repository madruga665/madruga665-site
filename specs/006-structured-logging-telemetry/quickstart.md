# Quickstart & Verification Guide: Structured Logging and Telemetry

**Feature Branch**: `006-structured-logging-telemetry`
**Created**: 2026-08-30

---

## 1. Prerequisites
- Node.js 20+ (or 24.x)
- Dependencies installed (`npm install`)
- Valid environment configurations in `.env`

---

## 2. Automated Test Verification

Run all automated unit and integration tests covering the structured logger, telemetry providers, route handlers, and Prometheus registries:

```bash
# Run full Jest test suite
npm run test

# Run tests in coverage mode
npm run test:coverage

# Verify ESLint rules
npm run lint
```

---

## 3. Manual End-to-End Verification Scenarios

### Scenario 1: Verify Health Endpoint
```bash
curl -i http://localhost:3000/api/health
```
**Expected Output**:
- HTTP `200 OK`
- JSON payload:
  ```json
  {
    "status": "healthy",
    "uptimeSeconds": 12.3,
    "timestamp": "2026-08-30T...",
    "version": "0.1.0"
  }
  ```

---

### Scenario 2: Verify Telemetry Ingestion & Structured Output
Dispatch a sample pageview and click event via `curl`:

```bash
curl -X POST http://localhost:3000/api/telemetry \
  -H "Content-Type: application/json" \
  -d '{
    "eventId": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    "timestamp": "2026-08-30T20:30:00.000Z",
    "sessionId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "eventType": "pageview",
    "route": "/portifolio/projetos",
    "referrer": "https://google.com"
  }'
```
**Expected Output**:
- HTTP `202 Accepted` with `{"received": true}`.
- Terminal stdout contains a single-line JSON log entry matching the structured log format.

---

### Scenario 3: Verify Prometheus Metrics Exposition
```bash
curl -i http://localhost:3000/api/metrics
```
**Expected Output**:
- HTTP `200 OK` with `Content-Type: text/plain; version=0.0.4`.
- Output contains `http_requests_total`, `telemetry_pageviews_total{route="/portifolio/projetos"}`, and Node.js process metrics.

---

### Scenario 4: Verify Client-Side Navigation & Click Tracking in Browser
1. Start the development server (`npm run dev`).
2. Open `http://localhost:3000` in your browser.
3. Open Browser Developer Tools -> **Network** tab, filter by `/api/telemetry`.
4. Click on navigation links ("Projetos", "Experiência", "Contato").
   - Confirm a `pageview` event is dispatched asynchronously for each route change.
5. Click on an interactive CTA (e.g. "Download CV" or project repo link).
   - Confirm a `click` event with `data-track-click` attributes is dispatched without disrupting navigation.
6. Submit a test message on the contact page.
   - Confirm an interaction event with status `success` or `failure` is dispatched, with zero message body or email leaked.
