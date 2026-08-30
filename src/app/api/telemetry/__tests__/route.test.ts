import { POST } from '../route';
import { logger } from '@/lib/logger';
import {
  telemetryPageviewsTotal,
  telemetryClicksTotal,
  contactFormSubmissionsTotal,
} from '@/lib/metrics';

describe('POST /api/telemetry Route Handler', () => {
  let loggerInfoSpy: jest.SpyInstance;
  let loggerWarnSpy: jest.SpyInstance;
  let pageviewsIncSpy: jest.SpyInstance;
  let clicksIncSpy: jest.SpyInstance;
  let formSubmissionsIncSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
    loggerWarnSpy = jest.spyOn(logger, 'warn').mockImplementation(() => {});
    pageviewsIncSpy = jest.spyOn(telemetryPageviewsTotal, 'inc').mockImplementation(() => {});
    clicksIncSpy = jest.spyOn(telemetryClicksTotal, 'inc').mockImplementation(() => {});
    formSubmissionsIncSpy = jest.spyOn(contactFormSubmissionsTotal, 'inc').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('accepts valid pageview event and increments pageview counter', async () => {
    const payload = {
      eventId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: '2026-08-30T20:30:00.000Z',
      sessionId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      eventType: 'pageview',
      route: '/portifolio/projetos',
      referrer: 'https://google.com',
    };

    const req = new Request('http://localhost:3000/api/telemetry', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(202);
    const body = await res.json();
    expect(body).toEqual({ received: true });

    expect(loggerInfoSpy).toHaveBeenCalledWith(
      'Pageview telemetry event recorded',
      expect.objectContaining({
        event: 'telemetry.pageview',
        path: '/portifolio/projetos',
      })
    );
    expect(pageviewsIncSpy).toHaveBeenCalledWith({ route: '/portifolio/projetos' });
  });

  it('accepts valid click event and increments click counter', async () => {
    const payload = {
      eventId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: '2026-08-30T20:30:00.000Z',
      sessionId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      eventType: 'click',
      route: '/portifolio/home',
      targetId: 'download-resume',
      category: 'cta',
      label: 'Download Curriculo',
      href: 'https://example.com/cv.pdf',
    };

    const req = new Request('http://localhost:3000/api/telemetry', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(202);

    expect(loggerInfoSpy).toHaveBeenCalledWith(
      'Click interaction telemetry event recorded',
      expect.objectContaining({
        event: 'telemetry.click',
        context: expect.objectContaining({
          targetId: 'download-resume',
          category: 'cta',
        }),
      })
    );
    expect(clicksIncSpy).toHaveBeenCalledWith({
      target: 'download-resume',
      category: 'cta',
    });
  });

  it('accepts valid form_submission event and increments submission counter', async () => {
    const payload = {
      eventId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: '2026-08-30T20:30:00.000Z',
      sessionId: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      eventType: 'form_submission',
      formId: 'contact_form',
      route: '/portifolio/contato',
      status: 'success',
      durationMs: 320,
    };

    const req = new Request('http://localhost:3000/api/telemetry', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(202);
    expect(formSubmissionsIncSpy).toHaveBeenCalledWith({ status: 'success' });
  });

  it('returns 400 when payload fails validation schema', async () => {
    const invalidPayload = {
      eventType: 'invalid_type',
    };

    const req = new Request('http://localhost:3000/api/telemetry', {
      method: 'POST',
      body: JSON.stringify(invalidPayload),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe('Invalid telemetry payload');
    expect(loggerWarnSpy).toHaveBeenCalled();
  });
});
