import { LogLevel, StructuredLog } from '@/interfaces/telemetry';

const LOG_LEVEL_SEVERITY: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

const SENSITIVE_KEY_PATTERN =
  /(password|token|secret|authorization|auth|apiKey|api_key|access_key|private_key|secret_key|email)/i;

export interface LogOptions {
  event?: string;
  message?: string;
  requestId?: string;
  path?: string;
  method?: string;
  status?: number;
  durationMs?: number;
  context?: Record<string, unknown>;
  error?: unknown;
}

export function sanitizeContext(
  obj: unknown,
  seen = new WeakSet<object>()
): Record<string, unknown> {
  if (obj === null || typeof obj !== 'object') {
    return {};
  }

  if (seen.has(obj as object)) {
    return { '[Circular]': true };
  }
  seen.add(obj as object);

  const clean: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    if (SENSITIVE_KEY_PATTERN.test(key)) {
      clean[key] = '[REDACTED]';
    } else if (value !== null && typeof value === 'object') {
      if (seen.has(value as object)) {
        clean[key] = '[Circular]';
      } else {
        clean[key] = sanitizeContext(value, seen);
      }
    } else {
      clean[key] = value;
    }
  }

  return clean;
}

export function formatLogEntry(
  options: LogOptions & { level: LogLevel; message: string }
): StructuredLog {
  const {
    level,
    message,
    event = 'application.log',
    requestId,
    path,
    method,
    status,
    durationMs,
    context,
    error,
  } = options;

  let serializedError: StructuredLog['error'] | undefined;

  if (error instanceof Error) {
    serializedError = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  } else if (error && typeof error === 'object') {
    const errObj = error as Record<string, unknown>;
    serializedError = {
      name: String(errObj.name || 'Error'),
      message: String(errObj.message || JSON.stringify(errObj)),
      stack: typeof errObj.stack === 'string' ? errObj.stack : undefined,
    };
  } else if (typeof error === 'string') {
    serializedError = {
      name: 'Error',
      message: error,
    };
  }

  return {
    timestamp: new Date().toISOString(),
    level,
    service: 'madruga665-site',
    environment: process.env.NODE_ENV || 'development',
    event,
    message,
    ...(requestId ? { requestId } : {}),
    ...(path ? { path } : {}),
    ...(method ? { method } : {}),
    ...(status !== undefined ? { status } : {}),
    ...(durationMs !== undefined ? { durationMs } : {}),
    ...(context ? { context: sanitizeContext(context) } : {}),
    ...(serializedError ? { error: serializedError } : {}),
  };
}

class Logger {
  private currentLevel: LogLevel;

  constructor() {
    const envLevel = (process.env.LOG_LEVEL?.toLowerCase() as LogLevel) || 'info';
    this.currentLevel = LOG_LEVEL_SEVERITY[envLevel] !== undefined ? envLevel : 'info';
  }

  public setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return LOG_LEVEL_SEVERITY[level] >= LOG_LEVEL_SEVERITY[this.currentLevel];
  }

  private writeLog(level: LogLevel, message: string, options?: LogOptions): void {
    if (!this.shouldLog(level)) return;

    const entry = formatLogEntry({ ...options, level, message });
    const serialized = JSON.stringify(entry) + '\n';

    if (level === 'error') {
      process.stderr.write(serialized);
    } else {
      process.stdout.write(serialized);
    }
  }

  public debug(message: string, options?: LogOptions): void {
    this.writeLog('debug', message, options);
  }

  public info(message: string, options?: LogOptions): void {
    this.writeLog('info', message, options);
  }

  public warn(message: string, options?: LogOptions): void {
    this.writeLog('warn', message, options);
  }

  public error(message: string, options?: LogOptions): void {
    this.writeLog('error', message, options);
  }
}

export const logger = new Logger();
