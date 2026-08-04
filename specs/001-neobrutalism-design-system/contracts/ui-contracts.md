# UI Contracts: Neobrutalism Design System

**Feature**: `001-neobrutalism-design-system`
**Date**: 2026-08-03

## Component Interfaces & Styles Contracts

### 1. `Button` / `LinkButton` Contract

**CSS Classes / Styling Contract**:
```scss
.neo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  border: 3px solid #000;
  border-radius: 6px;
  background-color: var(--neo-accent, #FEF08A);
  color: #000;
  box-shadow: 4px 4px 0px #000;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000;
  }

  &:focus-visible {
    outline: 3px solid #000;
    outline-offset: 3px;
  }
}
```

---

### 2. `Card` / `ProjectCard` / `WindowCard` Contract

**CSS Classes / Styling Contract**:
```scss
.neo-card {
  border: 3px solid #000;
  border-radius: 8px;
  background-color: var(--neo-card-bg, #1e2b37);
  box-shadow: 5px 5px 0px #000;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px #000;
  }
}

.neo-card-header {
  border-bottom: 3px solid #000;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  font-weight: 800;
}
```

---

### 3. Form Input & Textarea Contract

**CSS Classes / Styling Contract**:
```scss
.neo-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 3px solid #000;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  box-shadow: 3px 3px 0px #000;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 5px 5px 0px #000;
  }

  &.has-error {
    background-color: #ffe6e6;
    border-color: #d9534f;
    box-shadow: 3px 3px 0px #d9534f;
  }
}
```
