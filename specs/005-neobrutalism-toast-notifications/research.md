# Phase 0 Research: Neobrutalism Toast Notifications Styling

**Feature Branch**: `005-neobrutalism-toast-notifications`
**Date**: 2026-08-04

## Research Findings & Architecture Decisions

### Decision 1: Overriding `react-toastify` CSS Classes with SCSS Module / Global Overrides
- **Decision**: Create a dedicated stylesheet `src/styles/toast.scss` (imported into `global.scss` or `PortifolioLayout`) that targets `react-toastify` default container, toast body, progress bar, and close button CSS classes using project Neobrutalism CSS variables (`--neo-border`, `--neo-shadow`, `--neo-border-radius`, `--neo-color-text-main`, `--neo-accent-*`).
- **Rationale**: `react-toastify` exposes class names (`.Toastify__toast`, `.Toastify__toast--success`, `.Toastify__toast--error`, `.Toastify__toast-body`, `.Toastify__close-button`, `.Toastify__progress-bar`). Overriding these selectors globally ensures 100% of toast popups across all pages automatically inherit Neobrutalism aesthetics without modifying individual `toast()` invocation sites.
- **Alternatives Considered**: 
  - *Custom React Toast Component*: Rejected. Requires replacing `react-toastify` across the entire codebase and writing custom toast queue/timer logic from scratch.
  - *Inline CSS objects in ToastContainer*: Rejected. Inline styles cannot target pseudo-classes, progress bar animations, or pseudo-elements cleanly, and violate Constitution Principle II (modular Sass/CSS tokens).

### Decision 2: Color Palette Mapping for Toast Severities
- **Decision**:
  - `toast.success`: Background `--neo-accent-green` (`#4ade80`), border `var(--neo-border)`, box shadow `var(--neo-shadow)`, text `#000000`.
  - `toast.error`: Background `--neo-accent-red` (`#f87171`), border `var(--neo-border)`, box shadow `var(--neo-shadow)`, text `#000000`.
  - `toast.info`: Background `--neo-accent-blue` (`#7dd3fc`), border `var(--neo-border)`, box shadow `var(--neo-shadow)`, text `#000000`.
  - `toast.warn`: Background `--neo-accent-yellow` (`#ffc72c`), border `var(--neo-border)`, box shadow `var(--neo-shadow)`, text `#000000`.
- **Rationale**: Guarantees ultra-high contrast, black typography, and immediate visual recognition adhering to Neobrutalism design rules.

### Decision 3: Close Button and Progress Bar Styling
- **Decision**: Style `.Toastify__close-button` with black color, 100% opacity, bold typography, and a 2px focus ring (`:focus-visible`). Style `.Toastify__progress-bar` with solid black background (`#000000`).
- **Rationale**: Fulfills Constitution Principle V (WCAG 2.2 AA accessibility requirements) and ensures close controls remain prominent and focusable.
