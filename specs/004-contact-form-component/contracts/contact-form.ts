/**
 * Component and API Contracts for Contact Form Component
 */

import { formData } from '@/interfaces/contactPage';

/**
 * Interface contract for ContactForm component
 */
export interface ContactFormProps {
  /** Optional container class name for custom layout */
  className?: string;
  /** Optional callback fired after successful form submission and reset */
  onSuccess?: () => void;
}

/**
 * API Contract for POST /api/domain/contact
 */
export interface ContactApiPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
