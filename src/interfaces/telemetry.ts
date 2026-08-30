import { z } from 'zod';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface StructuredLog {
  timestamp: string;
  level: LogLevel;
  service: string;
  environment: string;
  event: string;
  message: string;
  requestId?: string;
  path?: string;
  method?: string;
  status?: number;
  durationMs?: number;
  context?: Record<string, unknown>;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
}

export const BaseTelemetryEventSchema = z.object({
  eventId: z.string().uuid(),
  timestamp: z.string().datetime(),
  sessionId: z.string().uuid(),
  eventType: z.enum(['pageview', 'click', 'form_submission']),
  route: z.string().min(1).max(500),
  userAgent: z.string().max(1000).optional(),
});

export type BaseTelemetryEvent = z.infer<typeof BaseTelemetryEventSchema>;

export const PageViewEventSchema = BaseTelemetryEventSchema.extend({
  eventType: z.literal('pageview'),
  referrer: z.string().max(1000).nullable().optional(),
  screenResolution: z.string().regex(/^\d+x\d+$/).optional(),
  language: z.string().max(20).optional(),
});

export type PageViewEvent = z.infer<typeof PageViewEventSchema>;

export const ClickInteractionEventSchema = BaseTelemetryEventSchema.extend({
  eventType: z.literal('click'),
  targetId: z.string().min(1).max(100),
  category: z.string().min(1).max(50),
  label: z.string().min(1).max(200),
  href: z.string().url().max(1000).nullable().optional(),
});

export type ClickInteractionEvent = z.infer<typeof ClickInteractionEventSchema>;

export const FormSubmissionEventSchema = BaseTelemetryEventSchema.extend({
  eventType: z.literal('form_submission'),
  formId: z.literal('contact_form'),
  status: z.enum(['success', 'failure']),
  durationMs: z.number().nonnegative(),
  errorCode: z.string().max(50).optional(),
});

export type FormSubmissionEvent = z.infer<typeof FormSubmissionEventSchema>;

export const TelemetryEventSchema = z.discriminatedUnion('eventType', [
  PageViewEventSchema,
  ClickInteractionEventSchema,
  FormSubmissionEventSchema,
]);

export type TelemetryEvent = z.infer<typeof TelemetryEventSchema>;

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  uptimeSeconds: number;
  timestamp: string;
  version: string;
  environment: string;
}
