# Quickstart Validation Guide: Neobrutalism.com Component Design System

**Feature**: `002-neobrutalism-com-components`
**Date**: 2026-08-03

## Overview

Runnable verification guide to validate the neobrutalism.com component design system.

## Step 1: Automated Verification Commands

```bash
# 1. Typecheck TypeScript files
npx tsc --noEmit

# 2. Run ESLint checks
npm run lint

# 3. Run Jest unit test suite
npm run test -- --watchAll=false
```

## Step 2: Visual Scenarios

Launch dev server:
```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000).
2. Verify primary buttons, call-to-actions, and active navigation badges use Electric Pink (`#FF70A6`) with 3px solid black borders and 4px un-blurred box shadows.
3. Hover and click interactive buttons and cards; confirm 2px–4px shadow displacement and pressed active state animations.
4. Enable `prefers-reduced-motion` in browser developer settings to verify motion transforms are cleanly suppressed.
