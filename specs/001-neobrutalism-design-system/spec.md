# Feature Specification: Neobrutalism Design System Redesign

**Feature Branch**: `001-neobrutalism-design-system`

**Created**: 2026-08-03

**Status**: Draft

**Input**: User description: "vamos alterar o estilo do site para usar a https://www.neobrutalism.dev/"

## Clarifications

### Session 2026-08-03

- Q: Neobrutalism Border Radius & Corner Style → A: Option B - Slightly Rounded Corners (`4px`–`8px` border-radius) with thick `3px` solid dark borders across cards, buttons, badges, and inputs.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Neobrutalism Core Design Tokens & Theme Foundation (Priority: P1)

As a site visitor, I want the entire portfolio website to render using a cohesive Neobrutalism visual theme so that the site feels distinctive, modern, high-contrast, and visually engaging.

**Why this priority**: Establishes the foundational CSS/Sass design tokens (colors, solid borders, un-blurred offset shadows, typography) required by all UI elements across the site.

**Independent Test**: Can be verified independently by loading any root page and validating that global variables (vibrant background accents, thick 3px solid borders, hard box-shadow offsets) apply consistently without visual regressions or missing variables.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the site, **When** the home page loads, **Then** all top-level layouts use Neobrutalism design tokens (high-contrast thick borders, vibrant accent colors, and offset box shadows).
2. **Given** a visitor switches or toggles color modes (or views standard light/dark modes), **Then** all Neobrutalism borders and hard shadows adapt smoothly while retaining high contrast readability (WCAG AA compliant).

---

### User Story 2 - Neobrutalized Interactive UI Components (Priority: P2)

As a site visitor, I want all interactive components (buttons, badges, cards, navigation items, and form inputs) to feature tactile Neobrutalism hover and active states so that interacting with the site feels lively and dynamic.

**Why this priority**: Delivers the signature Neobrutalism user experience where buttons translate on click and cards display hard shadow displacement upon hover.

**Independent Test**: Can be tested independently by hovering over and clicking interactive components (buttons, links, inputs) to observe 2px–4px shadow displacement and transform animations.

**Acceptance Scenarios**:

1. **Given** a visitor hovers over a Neobrutalist button or card, **When** mouse cursor enters the element, **Then** the component translates slightly and its hard offset shadow shifts dynamically.
2. **Given** a user clicks a button or submits a form input, **When** active state triggers, **Then** the button compresses down into its shadow with a tactile pressed effect.

---

### User Story 3 - Full Portfolio Page Redesign & Content Integration (Priority: P3)

As a site visitor, I want all portfolio sections (hero, project showcases, skills cards, contact form, and footer) to present content using the Neobrutalism component patterns so that the whole site provides a unified brand identity.

**Why this priority**: Extends the Neobrutalism UI across all specific pages and sections of the portfolio site.

**Independent Test**: Can be tested by navigating through all portfolio pages and verifying every section aligns with Neobrutalism layouts without broken components or legacy unstyled elements.

**Acceptance Scenarios**:

1. **Given** a visitor views the project showcase or skills section, **When** scrolling through the items, **Then** project cards are displayed in high-contrast Neobrutalist containers with clear tags/badges and bold typography.
2. **Given** a visitor fills out the contact form, **When** typing into input fields, **Then** inputs feature Neobrutalism thick borders, distinct focus rings, and clear error state indicators.

---

### Edge Cases

- How does the system handle high-contrast mode or reduced-motion accessibility settings? (Animations and shadow shifts MUST respect `prefers-reduced-motion` media queries).
- How do thick borders and hard shadows behave on small mobile viewports? (Layout grids and padding MUST scale dynamically to prevent horizontal scrolling or shadow clipping).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST establish a central Neobrutalism design system with defined design tokens for borders (e.g., `3px solid #000`), border-radius (`4px`–`8px` slightly rounded corners), hard offset shadows (e.g., `4px 4px 0px #000`), typography, and high-contrast color palettes (vibrant yellow, violet, teal, pink, and high-contrast dark/light neutrals).
- **FR-002**: System MUST convert core UI primitives (Buttons, Cards, Badges, Modals/Alerts, Navigation items, Form Inputs) to follow Neobrutalism specs inspired by neobrutalism.dev.
- **FR-003**: Interactive components MUST provide tactile feedback on hover and focus (e.g., translating element position by 2px and reducing shadow offset on active/pressed state).
- **FR-004**: Form inputs and textareas MUST feature prominent 3px borders, crisp focus indicators, and distinct validation states.
- **FR-005**: All redesigned components MUST remain responsive across mobile (<640px), tablet, and desktop breakpoints without text overlap or clipped hard shadows.
- **FR-006**: The design system MUST maintain WCAG 2.2 AA contrast compliance across all text/background combinations.
- **FR-007**: Components MUST respect `prefers-reduced-motion` media queries by disabling translation transforms for users requesting reduced motion.

### Key Entities

- **Neobrutalist Theme Token**: Configuration structure defining border-width, border-color, shadow-offset, border-radius (`4px`–`8px`), and accent color palettes.
- **Neobrutalist UI Component**: Standardized UI primitive (Button, Card, Badge, Input, Header) applying Neobrutalist design tokens and interactive hover/active states.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of public site pages and interactive UI components adopt Neobrutalism design tokens with zero legacy unstyled elements.
- **SC-002**: 100% of interactive elements pass WCAG 2.2 Level AA color contrast requirements (minimum 4.5:1 ratio for normal text, 3:1 for large text/ui components).
- **SC-003**: All pages achieve Google Lighthouse Accessibility and Best Practices scores of 95+ post-redesign.
- **SC-004**: Interactive components maintain 60fps animation performance during hover and click state transitions on desktop and mobile devices.

## Assumptions

- The redesign will preserve all existing site functionality, routes, and data sources (Notion API integrations, contact form backend logic).
- Sass/CSS Modules or global CSS tokens under `src/styles/` will be used as specified in the project Constitution.
- Neobrutalism inspiration comes from https://www.neobrutalism.dev/ styling patterns (bold borders, hard shadows, vibrant accents, crisp geometry with 4px–8px border radiuses).
