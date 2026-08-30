import { getMetricsContentType, getMetricsText } from '@/lib/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const metricsText = await getMetricsText();
  const contentType = getMetricsContentType();

  return new Response(metricsText, {
    status: 200,
    headers: {
      'Content-Type': contentType,
    },
  });
}
