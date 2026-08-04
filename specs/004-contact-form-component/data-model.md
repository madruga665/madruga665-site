# Phase 1 Data Model: Contact Form Component

**Feature Branch**: `004-contact-form-component`
**Date**: 2026-08-04

## Entities & Interfaces

### 1. `formData` (Contact Form Input Payload)
Represents the user input captured by the form component and submitted to the API.

| Field | Type | Validation Rules | Description |
|---|---|---|---|
| `name` | `string` | Required, non-empty after trim | Full name of the submitter |
| `email` | `string` | Required, valid email format | Email address for feedback response |
| `message` | `string` | Required, non-empty after trim | Message or inquiry body |

```typescript
export interface formData {
  name: string;
  email: string;
  message: string;
}
```

### 2. Component Props Interface (`ContactFormProps`)
Props passed into the `ContactForm` client component if optional initial values or callbacks are provided.

```typescript
export interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}
```
