# Implementation Plan: Contact Form Component & Server-Side Contact Page

**Branch**: `004-contact-form-component` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/004-contact-form-component/spec.md`

## Summary

Extract the contact form logic, fields, validation, and submission handlers from `src/app/portifolio/contato/page.tsx` into a dedicated interactive Client Component (`src/components/ContactForm/index.tsx`). Remove `'use client'` from the Contact Page so it becomes a pure Server Component using Next.js 15 App Router metadata (`export const metadata`), improving SEO, render performance, and architectural cleanliness.

## Technical Context

**Language/Version**: TypeScript 5.2+ / Node.js 18+ / React 19 / Next.js 15.5
**Primary Dependencies**: Next.js App Router, React 19, React Hook Form, React Toastify, Sass
**Storage**: Notion API (via backend endpoint `/api/domain/contact`)
**Testing**: Jest + React Testing Library (`npm run test`)
**Target Platform**: Vercel / Web browsers
**Project Type**: Next.js Web Application
**Performance Goals**: Fast server-side initial page render (< 300ms), instant client-side validation feedback (< 100ms)
**Constraints**: No `'use client'` on `src/app/portifolio/contato/page.tsx`. `ContactForm` strictly scoped as client component.
**Scale/Scope**: 1 page, 1 new component (`ContactForm`), 1 test suite update.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I (Modern Next.js & React 19 Architecture)**: PASS. Server Components used as default (`page.tsx`), Client Component (`ContactForm`) strictly scoped to interactive form node.
- **Principle II (Premium Visual Design System & UX)**: PASS. Styling uses CSS Modules / Sass under `src/components/ContactForm/styles.module.scss`.
- **Principle III (Type Safety & Schema Validation)**: PASS. Strict TypeScript interfaces for form state and component props.
- **Principle IV (Automated Testing Discipline & Quality Gates)**: PASS. Includes Jest unit tests for `ContactForm` component and `ContactPage`.
- **Principle V (Performance, SEO & Web Accessibility)**: PASS. Page metadata migrated to server-side `export const metadata`.

## Project Structure

### Documentation (this feature)

```text
specs/004-contact-form-component/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── contracts/           # Phase 1 output
    └── contact-form.ts
```

### Source Code Layout

```text
src/
├── app/
│   └── portifolio/
│       └── contato/
│           ├── page.tsx            # Server Component (no 'use client')
│           ├── styles.module.scss  # Container layout styles
│           └── contact.service.ts  # Form submit service helper
├── components/
│   └── ContactForm/
│       ├── index.tsx               # Client Component ('use client')
│       ├── styles.module.scss      # Form field & layout styles
│       └── __tests__/
│           └── ContactForm.test.tsx # Component unit tests
```

**Structure Decision**: Web application component extraction within Next.js App Router structure under `src/components/` and `src/app/`.

## Complexity Tracking

> No constitution violations. Table left empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
