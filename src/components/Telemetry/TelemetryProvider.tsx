'use client';

import React, { Suspense, useEffect } from 'react';
import { PageViewTracker } from './PageViewTracker';
import { trackClick } from './telemetry-client';

interface TelemetryProviderProps {
  children: React.ReactNode;
}

export function TelemetryProvider({ children }: TelemetryProviderProps) {
  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const trackableElement = target.closest<HTMLElement>('[data-track-click]');
      if (!trackableElement) return;

      const targetId = trackableElement.getAttribute('data-track-click');
      if (!targetId) return;

      const category =
        trackableElement.getAttribute('data-track-category') || 'interaction';
      const label =
        trackableElement.getAttribute('data-track-label') ||
        trackableElement.innerText?.trim() ||
        targetId;
      const href =
        trackableElement.getAttribute('data-track-href') ||
        trackableElement.getAttribute('href') ||
        undefined;

      trackClick({
        targetId,
        category,
        label,
        href,
      });
    };

    document.addEventListener('click', handleDocumentClick, { passive: true });

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </>
  );
}
