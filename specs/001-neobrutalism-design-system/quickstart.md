# Quickstart Validation Guide: Neobrutalism Design System

**Feature**: `001-neobrutalism-design-system`
**Date**: 2026-08-03

## Overview

This guide outlines runnable verification steps to validate the Neobrutalism design system implementation across dev builds and automated test suites.

## Prerequisites

- Node.js 18+
- Dependencies installed (`npm install` or `yarn`)

## Step 1: Verification Commands

Run local typechecking, linting, and unit tests:

```bash
# 1. Typecheck TypeScript files
npx tsc --noEmit

# 2. Run ESLint clean check
npm run lint

# 3. Run Jest unit & component tests
npm run test
```

## Step 2: Visual & Interactive Validation Scenarios

Launch the Next.js dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser and execute the following manual tests:

### Scenario 1: Core Theme & Neobrutalism Tokens
1. Inspect any root container or card element using browser Developer Tools.
2. Verify element borders measure `3px solid #000` (or dark neutral), border radius measures `4px`–`8px`, and box shadow offset is `4px 4px 0px #000`.

### Scenario 2: Interactive Element Hover & Active States
1. Hover cursor over primary buttons and project cards.
2. Confirm the component translates up/left by `2px` while shadow displacement increases.
3. Click down on a primary button.
4. Confirm the button translates down/right by `2px` into a tactile pressed state (`box-shadow: 2px 2px 0px #000`).

### Scenario 3: Form Input Focus & Error States
1. Focus into contact form input fields.
2. Verify 3px border and crisp shadow focus effect.
3. Submit invalid form inputs and verify error state indicators.

### Scenario 4: Accessibility & Motion
1. Enable `prefers-reduced-motion` in browser developer settings.
2. Hover over buttons and cards; verify translation transforms are suppressed while visual hover colors remain clear.
