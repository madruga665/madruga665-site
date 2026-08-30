import { NextResponse } from 'next/server';
import { TelemetryEventSchema } from '@/interfaces/telemetry';
import { logger } from '@/lib/logger';
import {
  telemetryPageviewsTotal,
  telemetryClicksTotal,
  contactFormSubmissionsTotal,
} from '@/lib/metrics';

export async function POST(req: Request) {
  try {
    const rawBody = await req.json();
    const parseResult = TelemetryEventSchema.safeParse(rawBody);

    if (!parseResult.success) {
      logger.warn('Received invalid telemetry payload', {
        event: 'telemetry.validation_error',
        context: { errors: parseResult.error.format() },
      });

      return NextResponse.json(
        {
          error: 'Invalid telemetry payload',
          details: parseResult.error.issues,
        },
        { status: 400 }
      );
    }

    const event = parseResult.data;

    switch (event.eventType) {
      case 'pageview': {
        logger.info('Pageview telemetry event recorded', {
          event: 'telemetry.pageview',
          path: event.route,
          context: {
            eventId: event.eventId,
            sessionId: event.sessionId,
            referrer: event.referrer,
            screenResolution: event.screenResolution,
            language: event.language,
          },
        });
        telemetryPageviewsTotal.inc({ route: event.route });
        break;
      }

      case 'click': {
        logger.info('Click interaction telemetry event recorded', {
          event: 'telemetry.click',
          path: event.route,
          context: {
            eventId: event.eventId,
            sessionId: event.sessionId,
            targetId: event.targetId,
            category: event.category,
            label: event.label,
            href: event.href,
          },
        });
        telemetryClicksTotal.inc({
          target: event.targetId,
          category: event.category,
        });
        break;
      }

      case 'form_submission': {
        logger.info('Form submission telemetry event recorded', {
          event: 'telemetry.form_submission',
          path: event.route,
          context: {
            eventId: event.eventId,
            sessionId: event.sessionId,
            formId: event.formId,
            status: event.status,
            durationMs: event.durationMs,
            errorCode: event.errorCode,
          },
        });
        contactFormSubmissionsTotal.inc({ status: event.status });
        break;
      }
    }

    return NextResponse.json({ received: true }, { status: 202 });
  } catch (error) {
    logger.error('Failed to process telemetry event', {
      event: 'telemetry.error',
      error,
    });
    return NextResponse.json(
      { error: 'Internal telemetry processing error' },
      { status: 500 }
    );
  }
}
