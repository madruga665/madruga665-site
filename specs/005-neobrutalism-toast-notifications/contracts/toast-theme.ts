/**
 * Contract definitions for Toast Notification Theme Overrides
 */

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface NeobrutalismToastStyleConfig {
  border: string;
  borderRadius: string;
  boxShadow: string;
  color: string;
  fontFamily: string;
  fontWeight: number;
}

export interface ToastVariantColors {
  success: { bg: string; text: string };
  error: { bg: string; text: string };
  info: { bg: string; text: string };
  warning: { bg: string; text: string };
}
