# Implementation Plan: Neobrutalism Toast Notifications Styling

**Branch**: `005-neobrutalism-toast-notifications` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/005-neobrutalism-toast-notifications/spec.md`

## Summary

Customize `react-toastify` notifications across the application to conform to the Neobrutalism design system tokens defined in `src/styles/neobrutalism.scss`. Create global SCSS overrides targeting toast containers, toast bodies, variant fills (success, error, info, warning), close buttons, and progress bars with 3px solid black borders, 4px hard un-blurred box shadows, and bold high-contrast typography.

## Technical Context

**Language/Version**: TypeScript 5.2+ / Node.js 18+ / React 19 / Next.js 15.5
**Primary Dependencies**: React Toastify (`react-toastify`), Sass
**Storage**: N/A (UI Styling)
**Testing**: Jest + React Testing Library (`npm run test`)
**Target Platform**: Web browsers
**Project Type**: Next.js Web Application
**Performance Goals**: Instant CSS rendering (< 16ms frame), zero runtime JavaScript overhead
**Constraints**: Must use project Neobrutalism CSS tokens (`src/styles/neobrutalism.scss`). High contrast WCAG 2.2 AA compliant.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle I (Modern Next.js Architecture)**: PASS. Layout integration cleanly handled in layout wrapper without extra client state.
- **Principle II (Premium Visual Design System & UX)**: PASS. Uses modular SCSS and centralized Neobrutalism CSS tokens (`src/styles/neobrutalism.scss`).
- **Principle III (Type Safety)**: PASS. TypeScript style configurations.
- **Principle IV (Automated Testing Discipline)**: PASS. Retains existing test coverage and verifies build compilation.
- **Principle V (Performance, SEO & Web Accessibility)**: PASS. Ensures high contrast (black text on solid fills) and accessible focus rings.

## Project Structure

### Documentation (this feature)

```text
specs/005-neobrutalism-toast-notifications/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── contracts/           # Phase 1 output
    └── toast-theme.ts
```

### Source Code Layout

```text
src/
├── styles/
│   ├── neobrutalism.scss    # Design system tokens
│   ├── global.scss          # Global stylesheet importing neobrutalism & toasts
│   └── toaster.scss         # Global SCSS overrides for react-toastify Neobrutalism theme
└── layouts/
    └── PortifolioLayout/
        └── index.tsx        # Layout component rendering ToastContainer
```

**Structure Decision**: Global SCSS customization file `src/styles/toaster.scss` imported in `global.scss` or `PortifolioLayout`.

## Complexity Tracking

> No constitution violations. Table left empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
