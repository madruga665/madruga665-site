# Tasks: Contact Form Component & Server-Side Contact Page

**Input**: Design documents from `/specs/004-contact-form-component/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests included for component and page verification per project testing discipline.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Includes exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verification of prerequisites and target directories

- [x] T001 Verify project structure and target directory `src/components/ContactForm/` exists

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core types and interface definitions

- [x] T002 [P] Verify `ContactFormProps` and `formData` contracts in `src/interfaces/contactPage.ts` and `specs/004-contact-form-component/contracts/contact-form.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Interactive Contact Form Submissions (Priority: P1) 🎯 MVP

**Goal**: Extract all form inputs, validation, and submission logic into a dedicated interactive Client Component (`ContactForm`).

**Independent Test**: Mount `<ContactForm />` in isolation or test suite, verify input fields, validation error messages on empty submit, and success toast on valid submit.

### Tests for User Story 1

- [x] T003 [P] [US1] Create unit tests for `ContactForm` in `src/components/ContactForm/__tests__/ContactForm.test.tsx` verifying field rendering, required validation errors, and form submission

### Implementation for User Story 1

- [x] T004 [P] [US1] Create component styles in `src/components/ContactForm/styles.module.scss`
- [x] T005 [US1] Create interactive Client Component (`'use client'`) `src/components/ContactForm/index.tsx` using `react-hook-form` and Toast notifications

**Checkpoint**: At this point, User Story 1 (`ContactForm` component) is fully functional and testable independently.

---

## Phase 4: User Story 2 - Server-Side Contact Page Shell (Priority: P2)

**Goal**: Refactor the Contact Page (`src/app/portifolio/contato/page.tsx`) into a Server Component without `'use client'`, using App Router metadata.

**Independent Test**: Render `/portifolio/contato` on server, verify page title metadata and layout structure with embedded `<ContactForm />`.

### Tests for User Story 2

- [x] T006 [P] [US2] Create or update page unit test in `src/app/portifolio/contato/__tests__/ContactPage.test.tsx` verifying Server Component layout and child `ContactForm` embedding

### Implementation for User Story 2

- [x] T007 [US2] Refactor `src/app/portifolio/contato/page.tsx` to remove `'use client'`, export `metadata` title, and render `<ContactForm />` inside `WindowCard`

**Checkpoint**: User Stories 1 AND 2 are complete and integrated.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Quality gates, type checking, and production build verification

- [x] T008 [P] Run TypeScript type safety check with `npx tsc --noEmit`
- [x] T009 [P] Run full Jest test suite with `npm run test`
- [x] T010 Run production build with `npm run build` to verify Server Component compilation
- [x] T011 Execute validation scenarios from `specs/004-contact-form-component/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Story 1 (Phase 3)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion (`ContactForm` must exist to embed in `page.tsx`).
- **Polish (Phase 5)**: Depends on User Story 1 and 2 completion.

### Parallel Opportunities

- T002 (Foundational contract verification) can run in parallel.
- T003 (Unit tests for ContactForm) and T004 (ContactForm styles) can run in parallel before T005 implementation.
- T008 (Type check) and T009 (Jest test suite) can run in parallel in Polish phase.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 & Phase 2.
2. Complete Phase 3 (US1: `ContactForm` component).
3. Validate `ContactForm` tests pass independently.

### Incremental Delivery
1. Implement US1 (`ContactForm` component).
2. Implement US2 (Server Component `page.tsx`).
3. Run verification pipeline (Phase 5).
