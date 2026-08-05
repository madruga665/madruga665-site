# Feature Specification: Neobrutalism Toast Notifications Styling

**Feature Branch**: `005-neobrutalism-toast-notifications`

**Created**: 2026-08-04

**Status**: Draft

**Input**: User description: "estilizar toaster para ficar no mesmo estilo do restante da aplicação, com neobrutalism"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visual Consistency of Toast Notifications (Priority: P1)

As a site visitor, when a toast notification appears (e.g. after submitting the contact form), I want the toast notification to reflect the site's Neobrutalism design language (thick black borders, hard un-blurred box shadow, vibrant background colors, high contrast typography) so that all visual popups feel cohesive with the rest of the application.

**Why this priority**: Toast notifications currently use standard/default library styles which clash with the site's custom Neobrutalism design system.

**Independent Test**: Can be tested by triggering a toast notification (e.g., submitting a message on the contact page or invoking a toast function) and visually inspecting the rendered toast container and items.

**Acceptance Scenarios**:

1. **Given** a success or error notification is triggered, **When** the toast appears on the screen, **Then** it renders with a 3px solid black border, 4px hard offset shadow, bold typography, and appropriate Neobrutalism accent background colors (e.g. green for success, red for error).
2. **Given** multiple toasts are active, **When** they stack or dismiss, **Then** each toast maintains consistent Neobrutalism styling, close button contrast, and smooth entry/exit behavior.

---

### User Story 2 - High Contrast & Accessibility for Notifications (Priority: P2)

As a user with visual sensitivities or screen readers, I want toast notifications to maintain high color contrast (black text on vibrant/solid background fills), readable font weights, and clear close buttons so that feedback remains easy to read and dismiss.

**Why this priority**: High contrast and WCAG 2.2 AA accessibility compliance are required by the project constitution.

**Independent Test**: Can be tested using accessibility tools or manual keyboard interaction to ensure the toast notification text meets minimum color contrast standards and close buttons are focusable/interactive.

**Acceptance Scenarios**:

1. **Given** a toast notification is displayed, **When** inspected for contrast, **Then** all text elements have high contrast against the toast background.
2. **Given** a keyboard user navigates to dismiss a toast, **When** focusing on the close icon/button, **Then** it displays a clear focus ring compliant with Neobrutalism focus styles.

---

### Edge Cases

- How does the toast style handle long notification messages?
  - Toast containers expand vertically while maintaining fixed borders and padding without text truncation or overflow clipping.
- What happens on mobile or small viewports?
  - Toast notifications scale down padding and margin appropriately to fit narrow mobile screens without breaking hard shadow boundaries.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Toast notifications MUST adopt the Neobrutalism design language using project CSS variables (`--neo-border`, `--neo-shadow`, `--neo-border-radius`, `--neo-color-text-main`).
- **FR-002**: Success toasts MUST render with Neobrutalism green accent fill (`--neo-accent-green`), black text, and 3px solid black border with hard box shadow.
- **FR-003**: Error toasts MUST render with Neobrutalism red accent fill (`--neo-accent-red`), black text, and 3px solid black border with hard box shadow.
- **FR-004**: Info and warning toasts MUST render with corresponding Neobrutalism accent fills (`--neo-accent-blue` / `--neo-accent-yellow`), black text, and black borders.
- **FR-005**: Close buttons on toast notifications MUST be styled with high contrast black color and interactive hover/focus states matching Neobrutalism UI standards.
- **FR-006**: Toast progress bars (if visible) MUST use solid high-contrast colors matching the Neobrutalism theme palette.

### Key Entities

- **Toast Notification UI**: Visual overlay component displaying feedback messages to the user with specific severity variants (success, error, info, warning).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of toast notifications displayed in the application match the Neobrutalism design tokens (3px solid black border, 4px un-blurred hard shadow, black text).
- **SC-002**: Color contrast ratio for text inside all toast variants meets or exceeds WCAG 2.2 Level AA requirements (at least 4.5:1 contrast ratio).
- **SC-003**: Toast styling changes do not introduce visual regression or break existing form submission workflows.

## Assumptions

- `react-toastify` (or equivalent toast library) remains the active notification package in the project.
- Global toast styling overrides will be declared in a dedicated SCSS file (e.g., `src/styles/toaster.module.scss` or `src/styles/toaster.scss`) integrated into the global theme.
