# Tasks: Disable Inactive Project Link

**Input**: Design documents from `/specs/003-disable-inactive-project-link/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Exact file paths included in all task descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Update entity definitions and interfaces with `is_active` property

- [X] T001 Update `Project` and `ProjectSerealized` interfaces to include optional `is_active?: boolean` in `src/app/api/domain/projects/entities/project.ts` and `src/interfaces/projectsPage.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Implement Notion mapper for `is_active` and disabled styling for `LinkButton`

- [X] T002 [P] Parse `is_active` checkbox property from Notion API in `src/app/api/domain/projects/mappers/project-mapper.ts`
- [X] T003 [P] Add `.disabled` style rules for disabled state (muted opacity, `cursor: not-allowed`, no hover transforms/shadows) in `src/components/LinkButton/styles.module.scss`
- [X] T004 Implement optional `disabled?: boolean` prop and `aria-disabled="true"` in `src/components/LinkButton/index.tsx`

---

## Phase 3: User Story 1 - View Active Project Link (Priority: P1) 🎯 MVP

**Goal**: Ensure projects marked as active (`is_active = true` or undefined) render an enabled, fully interactive "Ver o projeto" link button.

**Independent Test**: Render `<ProjectCard>` with `is_active: true` and verify the "Ver o projeto" button is active and navigates to the target URL.

### Implementation for User Story 1

- [X] T005 [P] [US1] Add unit test for active project link button in `src/components/ProjectCard/__tests__/ProjectCard.test.tsx`
- [X] T006 [US1] Verify and ensure active projects (`is_active: true` or undefined) pass `disabled={false}` to `LinkButton` in `src/components/ProjectCard/index.tsx`

---

## Phase 4: User Story 2 - Disabled Link for Inactive Projects (Priority: P1)

**Goal**: Disable the "Ver o projeto" button on projects where `is_active` is `false`, preventing click/keyboard navigation and displaying disabled visual feedback.

**Independent Test**: Render `<ProjectCard>` with `is_active: false` and verify the "Ver o projeto" button is rendered with disabled styling and prevents navigation.

### Implementation for User Story 2

- [X] T007 [P] [US2] Create unit tests for `LinkButton` disabled state in `src/components/LinkButton/__tests__/LinkButton.test.tsx`
- [X] T008 [P] [US2] Add unit tests for inactive project card (`is_active: false`) in `src/components/ProjectCard/__tests__/ProjectCard.test.tsx`
- [X] T009 [US2] Pass `disabled={project.is_active === false}` to the production `LinkButton` in `src/components/ProjectCard/index.tsx`

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Validation, linting, and quality gates

- [X] T010 [P] Run TypeScript type checking via `npx tsc --noEmit`
- [X] T011 [P] Execute full unit test suite via `npm test`
- [X] T012 Verify end-to-end functionality against `specs/003-disable-inactive-project-link/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 completion - BLOCKS User Stories
- **User Story 1 (Phase 3)**: Depends on Phase 2 completion
- **User Story 2 (Phase 4)**: Depends on Phase 2 completion (can run in parallel with US1)
- **Polish (Phase 5)**: Depends on all user stories completion

### User Story Dependencies

- **User Story 1 (P1)**: Independent after Foundational phase
- **User Story 2 (P1)**: Independent after Foundational phase

### Parallel Opportunities

- T002 and T003 can be implemented in parallel
- T005, T007, and T008 test tasks can be implemented in parallel
- T010 and T011 validation checks can be executed in parallel

---

## Implementation Strategy

### Incremental Delivery

1. Complete Phase 1 & 2 (Setup & Foundational)
2. Complete Phase 3 (US1 - Active links work as expected)
3. Complete Phase 4 (US2 - Inactive links disabled)
4. Complete Phase 5 (Type check, tests, and quickstart validation)
