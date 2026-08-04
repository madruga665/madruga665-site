# Phase 0 Research: Contact Form Component Extraction

**Feature Branch**: `004-contact-form-component`
**Date**: 2026-08-04

## Research Findings & Architecture Decisions

### Decision 1: Component Extraction Architecture (`ContactForm`)
- **Decision**: Extract all interactive form state, `react-hook-form` logic, Toast notifications, and submit handlers into a new Client Component located at `src/components/ContactForm/index.tsx`.
- **Rationale**: Next.js 15 and React 19 architecture standards require Server Components as default for page routes. Interactivity (hooks like `useForm`, `useRouter`, event handlers) must be scoped strictly to client component leaf nodes.
- **Alternatives Considered**: 
  - *Keeping 'use client' on `page.tsx`*: Rejected. Violates Constitution Principle I (Server Components by default).
  - *Inline Server Actions for form*: Rejected for now to preserve existing client-side `react-toastify` UX and `/api/domain/contact` API endpoint contract.

### Decision 2: Server Component Contact Page & Metadata
- **Decision**: Refactor `src/app/portifolio/contato/page.tsx` into an async Server Component exporting standard Next.js metadata (`export const metadata`).
- **Rationale**: Removes client-side `<Head>` usage (which is deprecated in App Router and incompatible with Server Components), enables server rendering of page shell, title, and SEO tags.
- **Alternatives Considered**: 
  - *Using `next/head` in client component*: Deprecated in Next.js App Router and causes build/runtime warnings.

### Decision 3: Component Styling & File Organization
- **Decision**: Create `src/components/ContactForm/styles.module.scss` for form-specific styles while keeping container layout styles in `src/app/portifolio/contato/styles.module.scss`.
- **Rationale**: Follows project design system conventions under `src/components/` and `src/styles/` per Constitution Principle II.

### Decision 4: Automated Testing Strategy
- **Decision**: Add unit/integration tests for `ContactForm` under `src/components/ContactForm/__tests__/ContactForm.test.tsx` and update page tests under `src/app/portifolio/contato/ContactPage.test.tsx` (or existing test suites).
- **Rationale**: Fulfills Constitution Principle IV requiring automated Jest unit/integration tests for all components.
