import { logger, sanitizeContext, formatLogEntry } from '../logger';

describe('Structured JSON Logger', () => {
  let stdoutSpy: jest.SpyInstance;
  let stderrSpy: jest.SpyInstance;

  beforeEach(() => {
    stdoutSpy = jest.spyOn(process.stdout, 'write').mockImplementation(() => true);
    stderrSpy = jest.spyOn(process.stderr, 'write').mockImplementation(() => true);
  });

  afterEach(() => {
    stdoutSpy.mockRestore();
    stderrSpy.mockRestore();
    jest.clearAllMocks();
  });

  it('formats a structured log entry as a valid single-line JSON', () => {
    const entry = formatLogEntry({
      level: 'info',
      event: 'test.event',
      message: 'Test message',
      context: { key: 'value', number: 42 },
      requestId: 'req-123',
      path: '/api/test',
      method: 'GET',
      status: 200,
      durationMs: 15.5,
    });

    expect(entry.service).toBe('madruga665-site');
    expect(entry.level).toBe('info');
    expect(entry.event).toBe('test.event');
    expect(entry.message).toBe('Test message');
    expect(entry.requestId).toBe('req-123');
    expect(entry.path).toBe('/api/test');
    expect(entry.method).toBe('GET');
    expect(entry.status).toBe(200);
    expect(entry.durationMs).toBe(15.5);
    expect(entry.context).toEqual({ key: 'value', number: 42 });
    expect(typeof entry.timestamp).toBe('string');
  });

  it('outputs single-line JSON string to stdout when calling logger.info', () => {
    logger.info('User visited page', {
      event: 'pageview',
      path: '/portifolio/home',
    });

    expect(stdoutSpy).toHaveBeenCalledTimes(1);
    const output = stdoutSpy.mock.calls[0][0];
    expect(output.endsWith('\n')).toBe(true);

    const parsed = JSON.parse(output.trim());
    expect(parsed.level).toBe('info');
    expect(parsed.message).toBe('User visited page');
    expect(parsed.event).toBe('pageview');
    expect(parsed.path).toBe('/portifolio/home');
  });

  it('outputs single-line JSON string to stdout when calling logger.warn', () => {
    logger.warn('Rate limit threshold near', {
      event: 'rate_limit.warning',
    });

    expect(stdoutSpy).toHaveBeenCalledTimes(1);
    const output = stdoutSpy.mock.calls[0][0];
    const parsed = JSON.parse(output.trim());
    expect(parsed.level).toBe('warn');
    expect(parsed.message).toBe('Rate limit threshold near');
  });

  it('outputs single-line JSON string to stderr when calling logger.error with Error object', () => {
    const err = new Error('Database connection failed');
    logger.error('Failed to query database', {
      event: 'notion.query_error',
      error: err,
      context: { pageId: '123' },
    });

    expect(stderrSpy).toHaveBeenCalledTimes(1);
    const output = stderrSpy.mock.calls[0][0];
    const parsed = JSON.parse(output.trim());
    expect(parsed.level).toBe('error');
    expect(parsed.message).toBe('Failed to query database');
    expect(parsed.error).toBeDefined();
    expect(parsed.error.name).toBe('Error');
    expect(parsed.error.message).toBe('Database connection failed');
    expect(typeof parsed.error.stack).toBe('string');
  });

  it('sanitizes context by redacting sensitive keys (password, token, auth, secret, email)', () => {
    const sensitive = {
      userEmail: 'user@example.com',
      token: 'secret-token-value',
      authToken: 'bearer-xyz',
      passwordHash: 'secret-hash',
      apiKey: 'key-12345',
      safeField: 'normal-value',
    };

    const sanitized = sanitizeContext(sensitive);
    expect(sanitized.userEmail).toBe('[REDACTED]');
    expect(sanitized.token).toBe('[REDACTED]');
    expect(sanitized.authToken).toBe('[REDACTED]');
    expect(sanitized.passwordHash).toBe('[REDACTED]');
    expect(sanitized.apiKey).toBe('[REDACTED]');
    expect(sanitized.safeField).toBe('normal-value');
  });

  it('safely handles circular references in context', () => {
    const circular: Record<string, unknown> = { a: 1 };
    circular.self = circular;

    const sanitized = sanitizeContext(circular);
    expect(sanitized.a).toBe(1);
    expect(sanitized.self).toBe('[Circular]');
  });
});
