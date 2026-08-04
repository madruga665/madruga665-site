# Tasks: Neobrutalism.com Component Design System

**Input**: Design documents from `specs/002-neobrutalism-com-components/`  
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/ui-contracts.md, quickstart.md  

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Configure neobrutalism.com SCSS design tokens with Electric Pink primary accent.

- [x] T001 Configure neobrutalism.com SCSS design tokens in `src/styles/neobrutalism.scss` for Electric Pink (`#FF70A6`) primary accent, 3px solid black borders, `4px 4px 0px #000` box shadows, and 6px border-radius
- [x] T002 [P] Update `src/styles/colors.module.scss` with `$color-electric-pink: #FF70A6` and export primary accent variables
- [x] T003 [P] Verify global imports in `src/styles/global.scss` for high-contrast focus rings and `prefers-reduced-motion` guards

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base SCSS mixins and helper utilities for neobrutalism.com pressed animations.

- [x] T004 Define neobrutalism.com utility mixins in `src/styles/neobrutalism.scss` for pressed active state animations (`transform: translate(2px, 2px)`)
- [x] T005 [P] Update `src/components/Spinner/styles.module.scss` to use Electric Pink (`#FF70A6`) spinner border accents

---

## Phase 3: User Story 1 - Neobrutalism.com Design Tokens & Theme Foundation (Priority: P1) 🎯 MVP

**Goal**: Establish global neobrutalism.com theme foundation with Electric Pink primary accent, canvas structure, and WCAG AA contrast.  
**Independent Test**: Load the root home page and verify top-level layout uses 3px black borders, Electric Pink accents, and hard shadows.

### Implementation & Verification for User Story 1

- [x] T006 [P] [US1] Update unit test in `src/styles/__tests__/theme.test.ts` to validate Electric Pink `#FF70A6` variable export and 3px border definitions
- [x] T007 [P] [US1] Update root layout container in `src/app/layout.tsx` to apply neobrutalism.com canvas background and font weights
- [x] T008 [US1] Update text selection highlight in `src/styles/global.scss` to use Electric Pink (`#FF70A6`) with black text

**Checkpoint**: At this point, the global CSS architecture applies neobrutalism.com design tokens across the entire site layout.

---

## Phase 4: User Story 2 - Neobrutalism.com Interactive UI Component Library (Priority: P2)

**Goal**: Update core UI primitives (Button, LinkButton, Card, WindowCard, Brand, NavLinks) to use Electric Pink primary accent and neobrutalism.com pressed feedback.  
**Independent Test**: Hover over and click components in browser to observe Electric Pink accent and 2px–4px shadow displacement.

### Implementation & Tests for User Story 2

- [x] T009 [P] [US2] Update component test in `src/components/Button/__tests__/Button.test.tsx` to verify Button rendering with Electric Pink background
- [x] T010 [P] [US2] Update `src/components/Button/styles.module.scss` to set primary background color to `$color-electric-pink` (`#FF70A6`)
- [x] T011 [P] [US2] Update `src/components/LinkButton/styles.module.scss` to set link button background color to `$color-electric-pink` (`#FF70A6`)
- [x] T012 [P] [US2] Update `src/components/Card/styles.module.scss` to set header subtitle highlight color to Electric Pink
- [x] T013 [P] [US2] Update `src/components/WindowCard/styles.module.scss` to align window header border divider with neobrutalism.com specs
- [x] T014 [P] [US2] Update `src/components/Brand/styles.module.scss` to highlight logo accent spans in Electric Pink (`#FF70A6`)
- [x] T015 [P] [US2] Update `src/components/NavLinks/styles.module.scss` to style active tab badges with `$color-electric-pink` (`#FF70A6`) background

**Checkpoint**: Core UI component primitives are now fully aligned with neobrutalism.com design guidelines.

---

## Phase 5: User Story 3 - Full Portfolio Page Redesign & Content Integration (Priority: P3)

**Goal**: Redesign portfolio pages and section layouts (Hero, Header, Project Cards, Contact Form, Footer) to incorporate Electric Pink neobrutalism.com styling.  
**Independent Test**: Navigate through portfolio pages to verify consistent Electric Pink theme application across all sections.

### Implementation & Tests for User Story 3

- [x] T016 [P] [US3] Update component test in `src/components/ProjectCard/__tests__/ProjectCard.test.tsx` for neobrutalism.com layout validation
- [x] T017 [P] [US3] Update `src/components/ProjectCard/styles.module.scss` to highlight project titles and active buttons with Electric Pink accents
- [x] T018 [US3] Update `src/components/Header/styles.module.scss` with sticky 3px solid black border and Electric Pink active navigation highlights
- [x] T019 [US3] Update hero section CTA button and container highlights in `src/app/styles.module.scss` to use Electric Pink (`#FF70A6`)
- [x] T020 [US3] Update contact form inputs in `src/components/` / `src/app/` with Electric Pink focus rings and 3px black borders

**Checkpoint**: The entire portfolio site features a unified neobrutalism.com design system across all pages and sections.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Quality assurance, accessibility checks, typechecking, and test suite verification.

- [x] T021 [P] Verify WCAG 2.2 AA contrast ratios and `prefers-reduced-motion` guards for Electric Pink text elements in `src/styles/neobrutalism.scss`
- [x] T022 [P] Run `npx tsc --noEmit` and `npm run lint` to ensure zero TypeScript or ESLint errors
- [x] T023 Run full Jest test suite (`npm run test -- --watchAll=false`) and validate scenarios in `specs/002-neobrutalism-com-components/quickstart.md`

---

## Dependencies & Execution Order

### User Story Dependencies

1. **Setup (Phase 1)**: Independent - no dependencies.
2. **Foundational (Phase 2)**: Depends on Setup completion (T001-T003). Blocks all user stories.
3. **User Story 1 (P1)**: Depends on Foundational phase (T004-T005). Establishes theme foundation.
4. **User Story 2 (P2)**: Depends on Foundational phase and US1 design tokens.
5. **User Story 3 (P3)**: Depends on US2 component primitives (Button, Card, WindowCard).
6. **Polish (Phase 6)**: Depends on completion of User Stories 1, 2, and 3.

---

## Parallel Opportunities

- **Phase 1**: T002 and T003 can be executed in parallel once T001 is initialized.
- **Phase 4 (US2)**: Component tasks T009, T010, T011, T012, T013, T014, and T015 can run in parallel.
- **Phase 5 (US3)**: T016 and T017 (`ProjectCard`) can run in parallel with section layout updates.
- **Phase 6**: T021 and T022 can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 & Core Components)
1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (US1) & Phase 4 (US2) core components with Electric Pink accent.
3. Validate neobrutalism.com design tokens and button/card rendering on `http://localhost:3000`.

### Full Site Incremental Delivery
1. Roll out updated `Header`, `ProjectCard`, and section layouts in Phase 5 (US3).
2. Run full test suite and accessibility checks in Phase 6.
