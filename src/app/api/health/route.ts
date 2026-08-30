import { NextResponse } from 'next/server';
import { HealthStatus } from '@/interfaces/telemetry';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const healthData: HealthStatus = {
    status: 'healthy',
    uptimeSeconds: typeof process !== 'undefined' && process.uptime ? process.uptime() : 0,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '0.1.0',
    environment: process.env.NODE_ENV || 'development',
  };

  return NextResponse.json(healthData, { status: 200 });
}
