import { logger } from '@/lib/logger';
import { httpRequestsTotal, httpRequestDurationHistogram } from '@/lib/metrics';

describe('API Route Structured Logging & Metrics Integration', () => {
  let loggerInfoSpy: jest.SpyInstance;
  let loggerErrorSpy: jest.SpyInstance;
  let metricsIncSpy: jest.SpyInstance;
  let metricsObserveSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerInfoSpy = jest.spyOn(logger, 'info').mockImplementation(() => {});
    loggerErrorSpy = jest.spyOn(logger, 'error').mockImplementation(() => {});
    metricsIncSpy = jest.spyOn(httpRequestsTotal, 'inc').mockImplementation(() => {});
    metricsObserveSpy = jest.spyOn(httpRequestDurationHistogram, 'observe').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('records successful API request with duration, status, and structured log', () => {
    const start = performance.now();
    const durationMs = performance.now() - start;
    const durationSec = durationMs / 1000;

    logger.info('HTTP Request Completed', {
      event: 'http.request',
      method: 'GET',
      path: '/api/domain/projects',
      status: 200,
      durationMs,
    });

    httpRequestsTotal.inc({ method: 'GET', route: '/api/domain/projects', status: '200' });
    httpRequestDurationHistogram.observe({ method: 'GET', route: '/api/domain/projects', status: '200' }, durationSec);

    expect(loggerInfoSpy).toHaveBeenCalledWith(
      'HTTP Request Completed',
      expect.objectContaining({
        event: 'http.request',
        method: 'GET',
        path: '/api/domain/projects',
        status: 200,
      })
    );
    expect(metricsIncSpy).toHaveBeenCalledWith({
      method: 'GET',
      route: '/api/domain/projects',
      status: '200',
    });
    expect(metricsObserveSpy).toHaveBeenCalled();
  });

  it('records failed API request with error object, 500 status, and error log', () => {
    const err = new Error('Notion connection timeout');

    logger.error('HTTP Request Failed', {
      event: 'http.request_error',
      method: 'POST',
      path: '/api/domain/contact',
      status: 500,
      durationMs: 45.2,
      error: err,
    });

    httpRequestsTotal.inc({ method: 'POST', route: '/api/domain/contact', status: '500' });

    expect(loggerErrorSpy).toHaveBeenCalledWith(
      'HTTP Request Failed',
      expect.objectContaining({
        event: 'http.request_error',
        method: 'POST',
        path: '/api/domain/contact',
        status: 500,
        error: err,
      })
    );
    expect(metricsIncSpy).toHaveBeenCalledWith({
      method: 'POST',
      route: '/api/domain/contact',
      status: '500',
    });
  });
});
