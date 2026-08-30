import React from 'react';
import { render } from '@testing-library/react';
import { PageViewTracker } from '../PageViewTracker';
import * as telemetryClient from '../telemetry-client';

const mockUsePathname = jest.fn();
const mockUseSearchParams = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
  useSearchParams: () => mockUseSearchParams(),
}));

describe('PageViewTracker Component', () => {
  let trackPageViewSpy: jest.SpyInstance;

  beforeEach(() => {
    trackPageViewSpy = jest
      .spyOn(telemetryClient, 'trackPageView')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('tracks pageview on mount with current pathname', () => {
    mockUsePathname.mockReturnValue('/portifolio/projetos');
    mockUseSearchParams.mockReturnValue(new URLSearchParams('filter=react'));

    render(<PageViewTracker />);

    expect(trackPageViewSpy).toHaveBeenCalledTimes(1);
    expect(trackPageViewSpy).toHaveBeenCalledWith(
      '/portifolio/projetos',
      'filter=react'
    );
  });

  it('does not re-dispatch if pathname and searchParams remain unchanged on rerender', () => {
    mockUsePathname.mockReturnValue('/portifolio/home');
    mockUseSearchParams.mockReturnValue(new URLSearchParams(''));

    const { rerender } = render(<PageViewTracker />);
    expect(trackPageViewSpy).toHaveBeenCalledTimes(1);

    rerender(<PageViewTracker />);
    expect(trackPageViewSpy).toHaveBeenCalledTimes(1);
  });
});
