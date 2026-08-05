# Tasks: Neobrutalism Toast Notifications Styling

**Input**: Design documents from `/specs/005-neobrutalism-toast-notifications/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests included for styling integration and build verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Includes exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verification of style infrastructure and design tokens

- [x] T001 Verify Neobrutalism design tokens in `src/styles/neobrutalism.scss`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Verify ToastContainer layout integration

- [x] T002 [P] Verify `react-toastify` container setup in `src/layouts/PortifolioLayout/index.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Visual Consistency of Toast Notifications (Priority: P1) 🎯 MVP

**Goal**: Apply Neobrutalism styling (3px black border, 4px hard shadow, green/red/blue/yellow fills, black text) to all toast notifications.

**Independent Test**: Trigger a toast notification (e.g. submit contact form) and verify it renders with Neobrutalism border, shadow, variant background color, and black text.

### Implementation for User Story 1

- [x] T003 [P] [US1] Create Neobrutalism toast override stylesheet `src/styles/toaster.scss` targeting `.Toastify__toast`, variant classes (`--success`, `--error`, `--info`, `--warning`), and progress bars
- [x] T004 [US1] Import `src/styles/toaster.scss` into `src/styles/global.scss`

**Checkpoint**: At this point, User Story 1 (Neobrutalism toast appearance) is fully functional and visually testable.

---

## Phase 4: User Story 2 - High Contrast & Accessibility for Notifications (Priority: P2)

**Goal**: Ensure close buttons, text contrast, and focus states meet WCAG 2.2 AA accessibility standards under Neobrutalism guidelines.

**Independent Test**: Inspect toast close button and focus states with keyboard navigation (`Tab` / `Enter`) to confirm high contrast and visible focus outline.

### Implementation for User Story 2

- [x] T005 [US2] Add high-contrast close button (`.Toastify__close-button`) and `:focus-visible` focus ring styles in `src/styles/toaster.scss`

**Checkpoint**: User Stories 1 AND 2 are complete.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Build verification and quality checks

- [x] T006 [P] Run TypeScript type safety check with `npx tsc --noEmit`
- [x] T007 [P] Run Jest test suite with `npm run test`
- [x] T008 Run production build with `npm run build` to verify CSS compilation
- [x] T009 Execute quickstart validation scenarios from `specs/005-neobrutalism-toast-notifications/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup.
- **User Story 1 (Phase 3)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion.
- **Polish (Phase 5)**: Depends on User Story 1 and 2 completion.

### Parallel Opportunities

- T002 (Foundational container verification) can run in parallel.
- T003 (SCSS override creation) can run in parallel.
- T006 (Type check) and T007 (Jest test suite) can run in parallel in Polish phase.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 & Phase 2.
2. Complete Phase 3 (US1: `toaster.scss` creation and import).
3. Visually verify Neobrutalism toasts.

### Incremental Delivery
1. Implement US1 (`toaster.scss` base styles).
2. Implement US2 (Accessibility & close button focus styles).
3. Run verification pipeline (Phase 5).
