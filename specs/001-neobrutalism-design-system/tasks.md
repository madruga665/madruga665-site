# Tasks: Neobrutalism Design System Redesign

**Input**: Design documents from `specs/001-neobrutalism-design-system/`  
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/ui-contracts.md, quickstart.md  

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish Neobrutalism CSS design tokens and core styling configuration.

- [x] T001 Create Neobrutalism SCSS tokens file in `src/styles/neobrutalism.scss` defining borders (`3px solid #000`), hard box shadows (`4px 4px 0px #000`), border radiuses (`4px`–`8px`), and vibrant accent colors
- [x] T002 [P] Update `src/styles/colors.module.scss` with Neobrutalism accent color variables (`$color-neon-yellow`, `$color-neon-pink`, `$color-neon-teal`, `$color-neon-purple`)
- [x] T003 [P] Import `src/styles/neobrutalism.scss` into `src/styles/global.scss` and configure global focus outline, body background, and accessibility resets

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base SCSS mixins and helper utilities required before component migration.

- [x] T004 Create Neobrutalist utility mixins and helper classes in `src/styles/neobrutalism.scss` (tactile hover `-2px, -2px` offset transform, pressed `2px, 2px` active transform, hard shadow modifiers)
- [x] T005 [P] Update `src/components/Spinner/styles.module.scss` with Neobrutalist high-contrast borders and colors

---

## Phase 3: User Story 1 - Neobrutalism Core Design Tokens & Theme Foundation (Priority: P1) 🎯 MVP

**Goal**: Establish global Neobrutalism theme foundation, typography, canvas structure, and high-contrast accessibility.  
**Independent Test**: Load the root home page and verify all top-level layouts inherit 3px solid borders, hard offset box shadows, and high-contrast color tokens cleanly.

### Implementation & Verification for User Story 1

- [x] T006 [P] [US1] Create unit test in `src/styles/__tests__/theme.test.ts` validating Neobrutalism CSS variable definitions and contrast rules
- [x] T007 [P] [US1] Update root layout structure in `src/app/layout.tsx` to apply Neobrutalist canvas container classes and font weights
- [x] T008 [US1] Update global typography and header styling in `src/styles/global.scss` to use high-contrast Neobrutalist font styling and selection highlights

**Checkpoint**: At this point, the global CSS architecture applies Neobrutalism theme tokens across the entire site layout.

---

## Phase 4: User Story 2 - Neobrutalized Interactive UI Components (Priority: P2)

**Goal**: Transform core UI primitives (Button, LinkButton, Card, WindowCard, Brand, NavLinks) into Neobrutalist UI elements with tactile hover/click effects.  
**Independent Test**: Hover over and click components in browser to observe 2px–4px shadow displacement and active pressed feedback.

### Implementation & Tests for User Story 2

- [x] T009 [P] [US2] Create component test for Neobrutalist Button hover and click interactions in `src/components/Button/__tests__/Button.test.tsx`
- [x] T010 [P] [US2] Update `src/components/Button/styles.module.scss` and `src/components/Button/index.tsx` to apply 3px solid borders, 6px border-radius, hard box shadows, and tactile hover/pressed animations
- [x] T011 [P] [US2] Update `src/components/LinkButton/styles.module.scss` and `src/components/LinkButton/index.tsx` to apply Neobrutalist link button styling
- [x] T012 [P] [US2] Update `src/components/Card/styles.module.scss` and `src/components/Card/index.tsx` to apply 3px solid borders, 8px border-radius, and hard box shadows
- [x] T013 [P] [US2] Update `src/components/WindowCard/styles.module.scss` and `src/components/WindowCard/index.tsx` with Neobrutalism retro window header controls (colored control dots, 3px bottom divider border)
- [x] T014 [P] [US2] Update `src/components/Brand/styles.module.scss` and `src/components/Brand/index.tsx` with bold Neobrutalist logo badge styling
- [x] T015 [P] [US2] Update `src/components/NavLinks/styles.module.scss` and `src/components/NavLinks/index.tsx` with high-contrast active tab badges and hover underline/box effects

**Checkpoint**: Core UI component primitives are now fully Neobrutalized and ready for page composition.

---

## Phase 5: User Story 3 - Full Portfolio Page Redesign & Content Integration (Priority: P3)

**Goal**: Redesign all portfolio sections (Hero, Header, Project Cards, Contact Form, Footer) to present content using the Neobrutalism component patterns.  
**Independent Test**: Navigate through all portfolio sections to verify consistent Neobrutalism visual styling, responsive grids, and error state handling.

### Implementation & Tests for User Story 3

- [x] T016 [P] [US3] Create component test for `ProjectCard` rendering in `src/components/ProjectCard/__tests__/ProjectCard.test.tsx`
- [x] T017 [P] [US3] Update `src/components/ProjectCard/styles.module.scss` and `src/components/ProjectCard/index.tsx` to display project items in high-contrast Neobrutalist card containers with vibrant tag badges
- [x] T018 [US3] Update `src/components/Header/styles.module.scss` and `src/components/Header/index.tsx` with sticky Neobrutalist header bar, 3px solid bottom border, and responsive nav toggle
- [x] T019 [US3] Redesign hero, projects, and skills section layouts in `src/app/page.tsx` and `src/layouts/` to embed Neobrutalist cards and badges
- [x] T020 [US3] Update contact form inputs and textareas in `src/components/` / `src/app/` with 3px solid borders, hard focus shadows, and error state indicators

**Checkpoint**: The entire portfolio site features a unified Neobrutalism design system across all pages and sections.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Quality assurance, accessibility checks, typechecking, and test suite verification.

- [x] T021 [P] Verify WCAG 2.2 AA contrast compliance and `prefers-reduced-motion` CSS behavior across all components in `src/styles/neobrutalism.scss`
- [x] T022 [P] Run `npx tsc --noEmit` and `npm run lint` to ensure zero TypeScript or ESLint errors
- [x] T023 Run full Jest test suite (`npm run test`) and validate scenarios in `specs/001-neobrutalism-design-system/quickstart.md`

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
- **Phase 4 (US2)**: Component tasks T009, T010, T011, T012, T013, T014, and T015 can run in parallel since each component operates in its own directory and module.
- **Phase 5 (US3)**: T016 and T017 (`ProjectCard`) can run in parallel with initial section layout updates.
- **Phase 6**: T021 and T022 can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 & Core Components)
1. Complete Phase 1 (Setup) and Phase 2 (Foundational).
2. Complete Phase 3 (US1) & Phase 4 (US2) core components.
3. Validate Neobrutalist design tokens and button/card component rendering independently on `http://localhost:3000`.

### Full Site Incremental Delivery
1. Roll out updated `Header`, `ProjectCard`, and section layouts in Phase 5 (US3).
2. Run full test suite and accessibility checks in Phase 6.
