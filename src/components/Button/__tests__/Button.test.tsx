import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../index';

describe('Button Component', () => {
  it('renders label correctly', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  it('triggers click handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Clickable" onclick={handleClick} />);
    
    const button = screen.getByRole('button', { name: 'Clickable' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders spinner when loading is true', () => {
    render(<Button label="Loading Button" loading={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'puff-loading');
  });
});
