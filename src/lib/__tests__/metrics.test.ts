import {
  getMetricsRegistry,
  httpRequestsTotal,
  httpRequestDurationHistogram,
  telemetryPageviewsTotal,
  telemetryClicksTotal,
  contactFormSubmissionsTotal,
  getMetricsContentType,
  getMetricsText,
} from '../metrics';

describe('Prometheus Metrics Registry', () => {
  it('returns a valid singleton Prometheus registry', () => {
    const reg1 = getMetricsRegistry();
    const reg2 = getMetricsRegistry();
    expect(reg1).toBeDefined();
    expect(reg1).toBe(reg2);
  });

  it('exposes the standard Prometheus content-type', () => {
    expect(getMetricsContentType()).toContain('text/plain');
  });

  it('increments httpRequestsTotal counter', async () => {
    httpRequestsTotal.inc({ method: 'GET', route: '/api/test', status: '200' });
    const text = await getMetricsText();
    expect(text).toContain('http_requests_total');
    expect(text).toContain('method="GET"');
    expect(text).toContain('route="/api/test"');
  });

  it('observes httpRequestDurationHistogram', async () => {
    httpRequestDurationHistogram.observe(
      { method: 'GET', route: '/api/test', status: '200' },
      0.025
    );
    const text = await getMetricsText();
    expect(text).toContain('http_request_duration_seconds');
  });

  it('increments telemetryPageviewsTotal counter', async () => {
    telemetryPageviewsTotal.inc({ route: '/portifolio/projetos' });
    const text = await getMetricsText();
    expect(text).toContain('telemetry_pageviews_total');
    expect(text).toContain('route="/portifolio/projetos"');
  });

  it('increments telemetryClicksTotal counter', async () => {
    telemetryClicksTotal.inc({ target: 'github-repo-link', category: 'project' });
    const text = await getMetricsText();
    expect(text).toContain('telemetry_clicks_total');
    expect(text).toContain('target="github-repo-link"');
    expect(text).toContain('category="project"');
  });

  it('increments contactFormSubmissionsTotal counter', async () => {
    contactFormSubmissionsTotal.inc({ status: 'success' });
    const text = await getMetricsText();
    expect(text).toContain('contact_form_submissions_total');
    expect(text).toContain('status="success"');
  });
});
