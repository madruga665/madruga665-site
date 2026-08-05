# Phase 1 Data Model: Neobrutalism Toast Notifications

**Feature Branch**: `005-neobrutalism-toast-notifications`
**Date**: 2026-08-04

## Component Style Tokens & CSS Mappings

### 1. Neobrutalism Toast Tokens

| Toast Variant | CSS Selector | Background Token | Border Token | Shadow Token | Text Token |
|---|---|---|---|---|---|
| Success Toast | `.Toastify__toast--success` | `--neo-accent-green` (#4ade80) | `--neo-border` (3px solid #000) | `--neo-shadow` (4px 4px 0 #000) | `#000000` |
| Error Toast | `.Toastify__toast--error` | `--neo-accent-red` (#f87171) | `--neo-border` (3px solid #000) | `--neo-shadow` (4px 4px 0 #000) | `#000000` |
| Info Toast | `.Toastify__toast--info` | `--neo-accent-blue` (#7dd3fc) | `--neo-border` (3px solid #000) | `--neo-shadow` (4px 4px 0 #000) | `#000000` |
| Warning Toast | `.Toastify__toast--warning` | `--neo-accent-yellow` (#ffc72c) | `--neo-border` (3px solid #000) | `--neo-shadow` (4px 4px 0 #000) | `#000000` |

### 2. Interactive States & Controls

- **Close Button**: `.Toastify__close-button`
  - Color: `#000000`
  - Opacity: `1`
  - Font Weight: `700`
  - Focus Ring: `3px solid #000000` with `2px` offset (`:focus-visible`)
- **Progress Bar**: `.Toastify__progress-bar`
  - Background: `#000000`
  - Height: `4px`
