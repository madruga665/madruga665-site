# Implementation Plan: Neobrutalism Design System Redesign

**Branch**: `001-neobrutalism-design-system` | **Date**: 2026-08-03 | **Spec**: [specs/001-neobrutalism-design-system/spec.md](spec.md)

**Input**: Feature specification from `specs/001-neobrutalism-design-system/spec.md`

## Summary

Redesign the portfolio site UI styling to adopt a Neobrutalism design system inspired by https://www.neobrutalism.dev/. The design system introduces core design tokens including 3px solid dark borders, slightly rounded corners (`4px`–`8px` border-radius), hard un-blurred box shadows (`4px 4px 0px #000`), high-contrast vibrant accent colors, tactile hover/active translation effects, and full WCAG 2.2 AA accessibility compliance.

## Technical Context

**Language/Version**: TypeScript 5.2+, React 19, Next.js 15 (App Router)  
**Primary Dependencies**: Next.js 15, Sass (`sass`), React Hook Form, Zod  
**Storage**: N/A (Notion API for portfolio content)  
**Testing**: Jest, `@testing-library/react`  
**Target Platform**: Responsive Web Browsers (Mobile <640px, Tablet, Desktop)  
**Project Type**: Web Application (Next.js Portfolio Site)  
**Performance Goals**: 60fps CSS hardware-accelerated transitions, 95+ Google Lighthouse Accessibility score  
**Constraints**: Must strictly follow Constitution rules (SCSS Modules under `src/styles/`, no Tailwind, WCAG 2.2 AA contrast ratios, `prefers-reduced-motion` support)  
**Scale/Scope**: ~10 core UI components, 5 portfolio sections  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I: Modern Next.js & React 19 Architecture**: PASS. Server Components remain default, Client Components limited to interactive UI controls.
- **Principle II: Premium Visual Design System & UX**: PASS. High-contrast Neobrutalism SCSS tokens organized in `src/styles/`.
- **Principle III: Type Safety & Schema Validation**: PASS. Component props strictly typed in TypeScript.
- **Principle IV: Automated Testing Discipline & Quality Gates**: PASS. Component rendering and hover/click states tested via Jest/React Testing Library.
- **Principle V: Performance, SEO & Web Accessibility**: PASS. WCAG 2.2 AA contrast verified, `prefers-reduced-motion` supported, Next.js image/font optimizations used.

## Project Structure

### Documentation (this feature)

```text
specs/001-neobrutalism-design-system/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
│   └── ui-contracts.md
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
src/
├── app/                 # Next.js App Router layout & pages
├── components/          # Neobrutalist UI components (Button, Card, WindowCard, etc.)
│   ├── Button/
│   ├── Card/
│   ├── Header/
│   ├── ProjectCard/
│   └── WindowCard/
├── styles/              # Global SCSS, design tokens, animations
│   ├── animations.scss
│   ├── colors.module.scss
│   ├── global.scss
│   └── neobrutalism.scss
└── helpers/

__tests__/               # Jest & React Testing Library tests
```

**Structure Decision**: Single Next.js web application repository with SCSS Modules and global design tokens located in `src/styles/` and component primitives in `src/components/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| *None* | N/A | N/A |
