import {
  Registry,
  Counter,
  Histogram,
  collectDefaultMetrics,
} from 'prom-client';

interface GlobalMetricsStore {
  registry?: Registry;
  httpRequestsTotal?: Counter<string>;
  httpRequestDurationHistogram?: Histogram<string>;
  telemetryPageviewsTotal?: Counter<string>;
  telemetryClicksTotal?: Counter<string>;
  contactFormSubmissionsTotal?: Counter<string>;
  defaultMetricsCollected?: boolean;
}

const globalStore = globalThis as unknown as {
  __PROMETHEUS_METRICS_STORE__?: GlobalMetricsStore;
};

if (!globalStore.__PROMETHEUS_METRICS_STORE__) {
  globalStore.__PROMETHEUS_METRICS_STORE__ = {};
}

const store = globalStore.__PROMETHEUS_METRICS_STORE__;

if (!store.registry) {
  store.registry = new Registry();
}

const registry = store.registry;

if (!store.defaultMetricsCollected && typeof process !== 'undefined' && process.versions?.node) {
  try {
    collectDefaultMetrics({
      register: registry,
      prefix: 'nodejs_',
    });
  } catch {
    // Ignore metric collection failure in test/mock environments
  }
  store.defaultMetricsCollected = true;
}

if (!store.httpRequestsTotal) {
  store.httpRequestsTotal = new Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests processed',
    labelNames: ['method', 'route', 'status'],
    registers: [registry],
  });
}

if (!store.httpRequestDurationHistogram) {
  store.httpRequestDurationHistogram = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'HTTP request execution duration in seconds',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
    registers: [registry],
  });
}

if (!store.telemetryPageviewsTotal) {
  store.telemetryPageviewsTotal = new Counter({
    name: 'telemetry_pageviews_total',
    help: 'Total pageviews recorded by client telemetry',
    labelNames: ['route'],
    registers: [registry],
  });
}

if (!store.telemetryClicksTotal) {
  store.telemetryClicksTotal = new Counter({
    name: 'telemetry_clicks_total',
    help: 'Total interaction clicks tracked by client telemetry',
    labelNames: ['target', 'category'],
    registers: [registry],
  });
}

if (!store.contactFormSubmissionsTotal) {
  store.contactFormSubmissionsTotal = new Counter({
    name: 'contact_form_submissions_total',
    help: 'Total contact form submissions tracked',
    labelNames: ['status'],
    registers: [registry],
  });
}

export const httpRequestsTotal = store.httpRequestsTotal;
export const httpRequestDurationHistogram = store.httpRequestDurationHistogram;
export const telemetryPageviewsTotal = store.telemetryPageviewsTotal;
export const telemetryClicksTotal = store.telemetryClicksTotal;
export const contactFormSubmissionsTotal = store.contactFormSubmissionsTotal;

export function getMetricsRegistry(): Registry {
  return registry;
}

export function getMetricsContentType(): string {
  return registry.contentType;
}

export async function getMetricsText(): Promise<string> {
  return registry.metrics();
}
