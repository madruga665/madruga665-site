# UI Contracts: Neobrutalism.com Component Design System

**Feature**: `002-neobrutalism-com-components`
**Date**: 2026-08-03

## Component Styling Contracts (neobrutalism.com)

### 1. Button Primitive Contract

```scss
.neo-com-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  border: 3px solid #000000;
  border-radius: 6px;
  background-color: var(--neo-color-accent-primary, #FF70A6);
  color: #000000;
  box-shadow: 4px 4px 0px #000000;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }
}
```

---

### 2. Card Primitive Contract

```scss
.neo-com-card {
  border: 3px solid #000000;
  border-radius: 8px;
  background-color: #1e2b37;
  box-shadow: 5px 5px 0px #000000;
  padding: 1.5rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px #000000;
  }
}
```

---

### 3. Active Nav Link Badge Contract

```scss
.neo-com-nav-active {
  border: 3px solid #000000;
  border-radius: 6px;
  background-color: #FF70A6;
  color: #000000;
  font-weight: 700;
  box-shadow: 3px 3px 0px #000000;
}
```
