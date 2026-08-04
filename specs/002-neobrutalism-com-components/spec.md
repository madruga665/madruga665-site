# Feature Specification: Neobrutalism.com Component Design System

**Feature Branch**: `002-neobrutalism-com-components`

**Created**: 2026-08-03

**Status**: Draft

**Input**: User description: "vamos alterar o estilo do site para usar a https://neobrutalism.com/docs/installation"

## Clarifications

### Session 2026-08-03

- Q: Neobrutalism.com Primary Accent Color Palette → A: Option B - Electric Pink (`#FF70A6`) as the primary signature accent color for buttons, active navigation badges, and hero highlights.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Neobrutalism.com Design Tokens & Theme Foundation (Priority: P1)

As a site visitor, I want the portfolio website to render using the neobrutalism.com visual system (crisp 3px black borders, 4px un-blurred offset box shadows, Electric Pink `#FF70A6` primary accent token, and bold typography) so that the entire site feels cohesive and high-energy.

**Why this priority**: Establishes the foundational design tokens (colors, solid borders, hard box-shadows, typography) required by all UI components across the site.

**Independent Test**: Can be verified independently by loading any root page and validating that global CSS variables (vibrant Electric Pink accents, 3px solid black borders, hard box-shadow offsets) apply consistently across all layouts.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the portfolio site, **When** the page loads, **Then** all top-level layouts inherit neobrutalism.com design tokens (3px solid black borders, hard offset box shadows, and Electric Pink primary accent colors).
2. **Given** a visitor switches or toggles color modes (or views standard light/dark canvas), **Then** all neobrutalism.com borders and hard shadows adapt smoothly while retaining high-contrast readability (WCAG AA compliant).

---

### User Story 2 - Neobrutalism.com Interactive UI Component Library (Priority: P2)

As a site visitor, I want all interactive UI components (Buttons, Cards, Badges, Window Cards, Nav Links, Form Inputs) to adopt neobrutalism.com component patterns with tactile hover and active pressed feedback so that interacting with the site feels dynamic and responsive.

**Why this priority**: Implements neobrutalism.com signature UI controls with pressed button feedback and card shadow displacement.

**Independent Test**: Can be tested independently by hovering over and clicking interactive components (buttons, links, inputs) to observe 2px–4px shadow displacement and transform animations.

**Acceptance Scenarios**:

1. **Given** a visitor hovers over a neobrutalism.com button or card, **When** mouse cursor enters the element, **Then** the component translates slightly and its hard offset shadow shifts dynamically.
2. **Given** a user clicks a button or submits a form input, **When** active state triggers, **Then** the button compresses down into its shadow with a tactile pressed effect (`transform: translate(2px, 2px)`).

---

### User Story 3 - Full Portfolio Page Redesign & Content Integration (Priority: P3)

As a site visitor, I want all portfolio sections (hero section, project showcases, skills cards, contact form, and footer) to present content using the neobrutalism.com component patterns so that the whole site provides a unified brand identity.

**Why this priority**: Extends the neobrutalism.com component system across all specific pages and sections of the portfolio site.

**Independent Test**: Can be tested by navigating through all portfolio pages and verifying every section aligns with neobrutalism.com layouts without broken components or legacy unstyled elements.

**Acceptance Scenarios**:

1. **Given** a visitor views the project showcase or skills section, **When** scrolling through items, **Then** project cards display in high-contrast neobrutalism.com containers with clear tag badges and bold typography.
2. **Given** a visitor fills out the contact form, **When** typing into input fields, **Then** inputs feature 3px black borders, distinct focus rings, and clear error state indicators.

---

### Edge Cases

- How does the system handle high-contrast mode or reduced-motion accessibility settings? (Animations and shadow shifts MUST respect `prefers-reduced-motion` media queries).
- How do thick borders and hard shadows behave on small mobile viewports? (Layout grids and padding MUST scale dynamically to prevent horizontal scrolling or shadow clipping).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST establish a central design system inspired by neobrutalism.com with defined tokens for borders (`3px solid #000`), hard box shadows (`4px 4px 0px #000`), border-radius (`6px`), typography, primary accent color Electric Pink (`#FF70A6`), and supporting accent color palettes (lime green `#A3E635`, electric yellow `#FEF08A`, cyan `#2DD4BF`, purple `#A855F7`).
- **FR-002**: System MUST convert core UI primitives (Buttons, Cards, Badges, Modals/Alerts, Navigation items, Form Inputs) to follow neobrutalism.com component specifications.
- **FR-003**: Interactive components MUST provide tactile feedback on hover and focus (e.g., translating element position by 2px and reducing shadow offset on active/pressed state).
- **FR-004**: Form inputs and textareas MUST feature prominent 3px borders, crisp focus indicators, and distinct validation states.
- **FR-005**: All redesigned components MUST remain responsive across mobile (<640px), tablet, and desktop breakpoints without text overlap or clipped hard shadows.
- **FR-006**: The design system MUST maintain WCAG 2.2 AA contrast compliance across all text/background combinations.
- **FR-007**: Components MUST respect `prefers-reduced-motion` media queries by disabling translation transforms for users requesting reduced motion.

### Key Entities

- **Neobrutalism.com Theme Token**: Configuration structure defining border-width (`3px`), border-color (`#000`), shadow-offset (`4px 4px 0px #000`), border-radius (`6px`), primary accent Electric Pink (`#FF70A6`), and supporting accent color palettes.
- **Neobrutalism.com UI Component**: Standardized UI primitive (Button, Card, Badge, Input, Header) applying neobrutalism.com design tokens and interactive hover/active states.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of public site pages and interactive UI components adopt neobrutalism.com design tokens with zero legacy unstyled elements.
- **SC-002**: 100% of interactive elements pass WCAG 2.2 Level AA color contrast requirements (minimum 4.5:1 ratio for normal text, 3:1 for large text/ui components).
- **SC-003**: All pages achieve Google Lighthouse Accessibility and Best Practices scores of 95+ post-redesign.
- **SC-004**: Interactive components maintain 60fps animation performance during hover and click state transitions on desktop and mobile devices.

## Assumptions

- The redesign will preserve all existing site functionality, routes, and data sources (Notion API integrations, contact form backend logic).
- Sass/CSS Modules or global CSS tokens under `src/styles/` will be used as specified in the project Constitution.
- Neobrutalism inspiration comes from https://neobrutalism.com/ component guidelines (bold 3px borders, hard offset shadows, Electric Pink primary accent, crisp geometry).
