import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../index';
import { onSubmit } from '@/app/portifolio/contato/contact.service';
import { useRouter } from 'next/navigation';

jest.mock('@/app/portifolio/contato/contact.service', () => ({
  onSubmit: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ContactForm Component', () => {
  const mockRefresh = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      refresh: mockRefresh,
    });
  });

  it('renders form fields correctly', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/seu nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/seu email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sua mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('shows error messages when submitting empty form', async () => {
    render(<ContactForm />);
    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/nome obrigatório/i)).toBeInTheDocument();
      expect(screen.getByText(/email obrigatório/i)).toBeInTheDocument();
      expect(screen.getByText(/mensagem obrigatória/i)).toBeInTheDocument();
    });
  });

  it('submits form successfully', async () => {
    (onSubmit as jest.Mock).mockImplementation((data, cb) => cb());
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/seu nome/i), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText(/seu email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/sua mensagem/i), { target: { value: 'Test Message' } });
    
    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { name: 'Test Name', email: 'test@example.com', message: 'Test Message' },
        expect.any(Function)
      );
      expect(mockRefresh).toHaveBeenCalled();
    });
  });
});
