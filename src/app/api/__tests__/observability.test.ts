import { GET as getHealth } from '../health/route';
import { GET as getMetrics } from '../metrics/route';

describe('Observability API Endpoints', () => {
  it('GET /api/health returns healthy JSON status payload', async () => {
    const res = await getHealth();
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.status).toBe('healthy');
    expect(typeof body.uptimeSeconds).toBe('number');
    expect(typeof body.timestamp).toBe('string');
    expect(body.version).toBe('0.1.0');
    expect(typeof body.environment).toBe('string');
  });

  it('GET /api/metrics returns Prometheus text exposition metrics', async () => {
    const res = await getMetrics();
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toContain('text/plain');

    const text = await res.text();
    expect(text).toContain('http_requests_total');
  });
});
