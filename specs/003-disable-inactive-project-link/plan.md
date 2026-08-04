# Implementation Plan: Disable Inactive Project Link

**Branch**: `003-disable-inactive-project-link` | **Date**: 2026-08-04 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/003-disable-inactive-project-link/spec.md`

## Summary

Disable the "Ver o projeto" (production URL) action button on project cards whenever a project's `is_active` status flag is `false`. Extend `LinkButton` component to support an optional `disabled?: boolean` property, update `Project` domain entities and mappers to parse Notion database `is_active` checkboxes, and add unit tests to verify disabled behavior and accessibility.

## Technical Context

**Language/Version**: TypeScript 5+ (Strict mode), Node.js 20+

**Primary Dependencies**: Next.js 15 (App Router), React 19, Sass / CSS Modules

**Storage**: Notion API (`@notionhq/client`)

**Testing**: Jest + React Testing Library (`@testing-library/react`)

**Target Platform**: Web (Vercel / Modern Browsers)

**Project Type**: Next.js 15 Web Application (App Router)

**Performance Goals**: Instant client-side state evaluation with 0 layout shift

**Constraints**: Neobrutalism Design System, WCAG 2.2 Level AA accessibility (`aria-disabled="true"`)

**Scale/Scope**: Scope includes `ProjectCard`, `LinkButton`, `Project` entity/mapper, and Jest unit tests

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I (Next.js & React 19 Architecture)**: PASS — `ProjectCard` is a client component; state changes are purely declarative and localized.
- **Principle II (Visual Design System & UX)**: PASS — Disabled `LinkButton` styling uses Neobrutalism design tokens (`opacity: 0.5`, `cursor: not-allowed`, no active shadow or offset).
- **Principle III (Type Safety & Schema Validation)**: PASS — `Project` and `ProjectSerealized` interfaces updated with explicit `is_active?: boolean`.
- **Principle IV (Automated Testing Discipline)**: PASS — Unit tests in `ProjectCard.test.tsx` and `LinkButton.test.tsx` verify disabled rendering and navigation prevention.
- **Principle V (Performance, SEO & Web Accessibility)**: PASS — Includes `aria-disabled="true"` and prevents keyboard focus activation.

**Gate Status**: PASS (No violations).

## Project Structure

### Documentation (this feature)

```text
specs/003-disable-inactive-project-link/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── contracts/           # Phase 1 output
    └── link-button-contract.md
```

### Source Code (repository root)

```text
src/
├── app/
│   └── api/
│       └── domain/
│           └── projects/
│               ├── entities/project.ts
│               └── mappers/project-mapper.ts
├── components/
│   ├── LinkButton/
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   └── ProjectCard/
│       ├── index.tsx
│       ├── styles.module.scss
│       └── __tests__/ProjectCard.test.tsx
└── interfaces/
    └── projectsPage.ts
```

**Structure Decision**: Standard Next.js 15 App Router structure with modular SCSS files and domain entities.

## Complexity Tracking

*No constitution violations. Section left blank.*
