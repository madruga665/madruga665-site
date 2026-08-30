import {
  PageViewEvent,
  ClickInteractionEvent,
  FormSubmissionEvent,
  TelemetryEvent,
} from '@/interfaces/telemetry';

const SESSION_STORAGE_KEY = 'telemetry_session_id';

export function getSessionId(): string {
  if (typeof window === 'undefined') {
    return '00000000-0000-0000-0000-000000000000';
  }

  try {
    let sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sessionId) {
      sessionId =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : 'anon-' + Math.random().toString(36).substring(2, 15);
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
    }
    return sessionId;
  } catch {
    return '00000000-0000-0000-0000-000000000000';
  }
}

export function sendTelemetryEvent(event: TelemetryEvent): void {
  if (typeof window === 'undefined') return;

  const url = '/api/telemetry';
  const payload = JSON.stringify(event);

  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([payload], { type: 'application/json' });
      const sent = navigator.sendBeacon(url, blob);
      if (sent) return;
    }

    if (typeof fetch === 'function') {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Fail silently without disrupting user interaction
  }
}

export function trackPageView(pathname: string, searchParamsString = ''): void {
  if (typeof window === 'undefined') return;

  const route = searchParamsString ? `${pathname}?${searchParamsString}` : pathname;
  const event: PageViewEvent = {
    eventId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'evt-' + Math.random().toString(36).substring(2, 15),
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    eventType: 'pageview',
    route,
    referrer: typeof document !== 'undefined' && document.referrer ? document.referrer : null,
    screenResolution:
      typeof window !== 'undefined' && window.screen
        ? `${window.screen.width}x${window.screen.height}`
        : undefined,
    language: typeof navigator !== 'undefined' ? navigator.language : undefined,
  };

  sendTelemetryEvent(event);
}

export function trackClick(params: {
  targetId: string;
  category: string;
  label: string;
  href?: string | null;
  route?: string;
}): void {
  if (typeof window === 'undefined') return;

  const currentRoute =
    params.route || (typeof window !== 'undefined' ? window.location.pathname : '/');

  const event: ClickInteractionEvent = {
    eventId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'evt-' + Math.random().toString(36).substring(2, 15),
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    eventType: 'click',
    route: currentRoute,
    targetId: params.targetId,
    category: params.category,
    label: params.label,
    href: params.href ?? null,
  };

  sendTelemetryEvent(event);
}

export function trackFormSubmission(params: {
  formId: 'contact_form';
  status: 'success' | 'failure';
  durationMs: number;
  errorCode?: string;
  route?: string;
}): void {
  if (typeof window === 'undefined') return;

  const currentRoute =
    params.route || (typeof window !== 'undefined' ? window.location.pathname : '/');

  const event: FormSubmissionEvent = {
    eventId: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'evt-' + Math.random().toString(36).substring(2, 15),
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    eventType: 'form_submission',
    route: currentRoute,
    formId: params.formId,
    status: params.status,
    durationMs: Math.max(0, params.durationMs),
    errorCode: params.errorCode,
  };

  sendTelemetryEvent(event);
}
