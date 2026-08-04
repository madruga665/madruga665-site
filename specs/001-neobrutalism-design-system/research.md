# Research: Neobrutalism Design System Redesign

**Feature**: `001-neobrutalism-design-system`
**Date**: 2026-08-03

## Research Topic 1: Neobrutalism CSS Design Token Architecture

### Decision
Implement Neobrutalism tokens as a combination of Sass variables in `src/styles/colors.module.scss` and CSS custom properties in `src/styles/global.scss` / `src/styles/neobrutalism.scss`.

### Rationale
- **High Contrast & Hard Shadows**: Neobrutalism UI (inspired by https://www.neobrutalism.dev/) relies on high-contrast solid borders (`3px solid #000`), hard offset box-shadows (`4px 4px 0px #000`), and defined border-radiuses (`4px`–`8px`).
- **CSS Custom Properties**: Using CSS custom properties (e.g., `--neo-border: 3px solid #000; --neo-shadow: 4px 4px 0px #000; --neo-radius: 6px;`) allows theme variables to be reused across component SCSS modules and easily adapted for dark/light contrast variations.

### Alternatives Considered
- *TailwindCSS*: Rejected because project Constitution specifies Vanilla CSS / SCSS Modules under `src/styles/`, avoiding unnecessary framework migrations.
- *Inline CSS*: Rejected per Constitution Principle II (Inline unmaintainable styles are strictly forbidden).

---

## Research Topic 2: Neobrutalist Component Interaction & Animation Patterns

### Decision
Use CSS hardware-accelerated transforms (`transform: translate(-2px, -2px)`) combined with shadow offset adjustments (`box-shadow: 6px 6px 0px #000`) for hover states, and active pressed effects (`transform: translate(2px, 2px); box-shadow: 2px 2px 0px #000`).

### Rationale
- Provides immediate tactile feedback, making buttons, cards, and links feel responsive and lively.
- `transform` and `box-shadow` changes run efficiently at 60fps on modern render engines.

### Alternatives Considered
- *JS-driven spring animations*: Unnecessary bundle overhead when pure CSS handles state transitions cleanly.

---

## Research Topic 3: Accessibility (WCAG 2.2 AA) & Reduced Motion

### Decision
1. Ensure all Neobrutalist color combinations (vibrant background accents with black text or high-contrast dark backgrounds) maintain a minimum contrast ratio of 4.5:1 for standard text and 3:1 for large text/UI borders.
2. Wrap all translation/shadow movement effects in `@media (prefers-reduced-motion: no-preference)` to respect user accessibility preferences.
3. Provide prominent focus indicators (`outline: 3px solid #000; outline-offset: 3px;`).

### Rationale
Complies with Constitution Principle V (WCAG 2.2 Level AA accessibility compliance).
