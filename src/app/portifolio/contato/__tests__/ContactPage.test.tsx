import { render, screen } from '@testing-library/react';
import ContactPage from '../page';

jest.mock('@/components/ContactForm', () => ({
  ContactForm: () => <div data-testid="contact-form">Mocked ContactForm</div>
}));

jest.mock('@/components/WindowCard', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="window-card">{children}</div>
}));

describe('ContactPage Server Component', () => {
  it('renders WindowCard and ContactForm correctly', () => {
    render(<ContactPage />);
    
    expect(screen.getByTestId('window-card')).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });
});
