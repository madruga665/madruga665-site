import { render, screen, fireEvent } from '@testing-library/react';
import LinkButton from '../index';

describe('LinkButton Component', () => {
  it('renders target URL and is clickable when enabled', () => {
    render(<LinkButton url="https://example.com">Visit Site</LinkButton>);

    const link = screen.getByRole('link', { name: 'Visit Site' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).not.toHaveAttribute('aria-disabled');
  });

  it('renders aria-disabled="true", has disabled style class, and prevents navigation click when disabled', () => {
    render(
      <LinkButton url="https://example.com" disabled>
        Visit Site
      </LinkButton>
    );

    const link = screen.getByRole('link', { name: 'Visit Site' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link.className).toContain('disabled');

    const clickEvent = fireEvent.click(link);
    expect(clickEvent).toBe(false);
  });
});
