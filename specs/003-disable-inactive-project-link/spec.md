# Feature Specification: Disable Inactive Project Link

**Feature Branch**: `003-disable-inactive-project-link`

**Created**: 2026-08-04

**Status**: Draft

**Input**: User description: "desabilitar o botão de 'ver o projeto' se o is_active for false"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Active Project Link (Priority: P1)

As a portfolio visitor, I want to click on the "Ver o projeto" button of active projects so that I can visit and explore the live application demo.

**Why this priority**: Core navigation flow for visitors inspecting published projects.

**Independent Test**: Can be tested by rendering a project card with `is_active: true` and verifying the "Ver o projeto" button is enabled, clickable, and contains the correct URL target.

**Acceptance Scenarios**:

1. **Given** a project with `is_active` set to `true`, **When** a visitor views the project card, **Then** the "Ver o projeto" button is rendered as enabled and active.
2. **Given** an enabled "Ver o projeto" button, **When** a visitor clicks or triggers the button via keyboard, **Then** the browser navigates to the project production URL.

---

### User Story 2 - Disabled Link for Inactive Projects (Priority: P1)

As a portfolio visitor, I want clear visual and interactive feedback on projects that are inactive so that I know the live demo is unavailable and cannot trigger broken links.

**Why this priority**: Essential UX rule to prevent user confusion and avoid dead end clicks on offline projects.

**Independent Test**: Can be tested by rendering a project card with `is_active: false` and verifying the "Ver o projeto" button is disabled, non-clickable, and styled appropriately.

**Acceptance Scenarios**:

1. **Given** a project with `is_active` set to `false`, **When** a visitor views the project card, **Then** the "Ver o projeto" button is displayed in a disabled visual state.
2. **Given** a project with `is_active` set to `false`, **When** a visitor attempts to click or press Enter/Space on the "Ver o projeto" button, **Then** no navigation occurs and the link remains inactive.

---

### Edge Cases

- **Missing/Undefined `is_active`**: If `is_active` is omitted or undefined in legacy project data, the system defaults to `true` to ensure existing projects remain accessible.
- **Keyboard & Accessibility Focus**: Disabled project buttons must carry `aria-disabled="true"` and appropriate tab index behavior so screen readers and keyboard users understand the link is inactive.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The project card component MUST evaluate the `is_active` property of the target project data.
- **FR-002**: When `is_active` is `false`, the "Ver o projeto" action button MUST be rendered in a disabled state.
- **FR-003**: Disabled "Ver o projeto" buttons MUST prevent click events, pointer events, and navigation attempts.
- **FR-004**: Disabled "Ver o projeto" buttons MUST feature distinct visual styling (e.g., muted opacity, disabled cursor) conforming to Neobrutalism design tokens.
- **FR-005**: When `is_active` is `true` (or undefined), the "Ver o projeto" action button MUST remain fully interactive.
- **FR-006**: The GitHub repository link button MUST remain unaffected by the `is_active` status unless explicitly specified.

### Key Entities *(include if feature involves data)*

- **Portfolio Project Item**: Represents a single project entity containing properties:
  - `id`: Unique identifier
  - `name`: Title of the project
  - `description`: Overview text
  - `image`: Cover image URL
  - `tags`: List of tech stack labels
  - `githubRepository`: Source code URL
  - `production`: Live application URL
  - `is_active`: Boolean flag indicating if live demo is currently active and reachable

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of project cards with `is_active = false` render the "Ver o projeto" button in a non-interactive, disabled state.
- **SC-002**: Zero unauthorized navigations occur when interacting with an inactive project's "Ver o projeto" button.
- **SC-003**: 100% of active projects (`is_active = true`) maintain full functionality without regression.

## Assumptions

- The `is_active` property is boolean (`true` | `false`).
- If `is_active` is undefined, default fallback value is `true`.
- The "Repositório no Github" link is independent and remains active regardless of `is_active` state.
