# Research: Neobrutalism.com Component Design System

**Feature**: `002-neobrutalism-com-components`
**Date**: 2026-08-03

## Research Topic 1: Neobrutalism.com Token System Integration

### Decision
Structure neobrutalism.com design tokens using SCSS variables in `src/styles/colors.module.scss` and CSS custom properties in `src/styles/neobrutalism.scss`, setting Electric Pink (`#FF70A6`) as the primary signature accent color.

### Rationale
- **neobrutalism.com Alignment**: `neobrutalism.com` specifies crisp 3px solid black borders (`border: 3px solid #000`), hard un-blurred box shadows (`4px 4px 0px #000`), and a `6px` border-radius.
- **Electric Pink Primary Accent**: As chosen during clarification, `#FF70A6` serves as the primary accent color for action buttons, active navigation badges, and hero highlights, delivering high energy and clear contrast over dark canvas backgrounds (`#0b0f19`).

### Alternatives Considered
- *Lime Green (`#A3E635`)*: Evaluated during clarification but rejected in favor of Electric Pink `#FF70A6`.
- *Inline CSS*: Rejected per Constitution Principle II.

---

## Research Topic 2: Interactive Component Micro-Interactions

### Decision
Apply hardware-accelerated CSS translation transforms (`transform: translate(-2px, -2px)`) with shadow expansion (`box-shadow: 6px 6px 0px #000`) on hover, and active pressed effects (`transform: translate(2px, 2px); box-shadow: 2px 2px 0px #000`).

### Rationale
- Matches the signature tactile button behavior featured in neobrutalism.com UI components.
- Runs at 60fps on modern render engines.

---

## Research Topic 3: Accessibility & Motion Standards

### Decision
1. Maintain >=4.5:1 contrast ratio across text elements over Electric Pink and accent backgrounds.
2. Enforce `@media (prefers-reduced-motion: reduce)` rules to suppress translation transforms for users requesting reduced motion.
3. Apply prominent 3px focus rings (`outline: 3px solid #000; outline-offset: 3px`).
