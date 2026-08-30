import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TelemetryProvider } from '../TelemetryProvider';
import * as telemetryClient from '../telemetry-client';

jest.mock('next/navigation', () => ({
  usePathname: () => '/portifolio/home',
  useSearchParams: () => new URLSearchParams(''),
}));

describe('Click Tracking & Event Delegation', () => {
  let trackClickSpy: jest.SpyInstance;
  let trackFormSubmissionSpy: jest.SpyInstance;

  beforeEach(() => {
    trackClickSpy = jest
      .spyOn(telemetryClient, 'trackClick')
      .mockImplementation(() => {});
    trackFormSubmissionSpy = jest
      .spyOn(telemetryClient, 'trackFormSubmission')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('delegates clicks on elements with data-track-click to trackClick', () => {
    render(
      <TelemetryProvider>
        <div>
          <button
            data-track-click="download-cv"
            data-track-category="cta"
            data-track-label="Download Curriculo"
          >
            Download CV
          </button>
          <button>Un-tracked Button</button>
        </div>
      </TelemetryProvider>
    );

    const trackedBtn = screen.getByRole('button', { name: 'Download CV' });
    fireEvent.click(trackedBtn);

    expect(trackClickSpy).toHaveBeenCalledTimes(1);
    expect(trackClickSpy).toHaveBeenCalledWith({
      targetId: 'download-cv',
      category: 'cta',
      label: 'Download Curriculo',
      href: undefined,
    });

    const untrackedBtn = screen.getByRole('button', { name: 'Un-tracked Button' });
    fireEvent.click(untrackedBtn);
    expect(trackClickSpy).toHaveBeenCalledTimes(1);
  });

  it('extracts href from tracked anchor links', () => {
    render(
      <TelemetryProvider>
        <a
          href="https://github.com/madruga665"
          data-track-click="github-profile-link"
          data-track-category="social"
          data-track-label="GitHub Profile"
        >
          GitHub
        </a>
      </TelemetryProvider>
    );

    const link = screen.getByRole('link', { name: 'GitHub' });
    fireEvent.click(link);

    expect(trackClickSpy).toHaveBeenCalledWith({
      targetId: 'github-profile-link',
      category: 'social',
      label: 'GitHub Profile',
      href: 'https://github.com/madruga665',
    });
  });

  it('allows programmatic tracking of form submission events', () => {
    telemetryClient.trackFormSubmission({
      formId: 'contact_form',
      status: 'success',
      durationMs: 250,
      route: '/portifolio/contato',
    });

    expect(trackFormSubmissionSpy).toHaveBeenCalledWith({
      formId: 'contact_form',
      status: 'success',
      durationMs: 250,
      route: '/portifolio/contato',
    });
  });
});
