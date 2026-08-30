'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from './telemetry-client';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedRouteRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const queryString = searchParams?.toString() || '';
    const currentFullRoute = queryString ? `${pathname}?${queryString}` : pathname;

    if (lastTrackedRouteRef.current === currentFullRoute) {
      return;
    }

    lastTrackedRouteRef.current = currentFullRoute;
    trackPageView(pathname, queryString);
  }, [pathname, searchParams]);

  return null;
}
