# Quickstart & Verification Guide

**Feature**: Disable Inactive Project Link
**Spec**: `specs/003-disable-inactive-project-link/spec.md`

## Verification Scenarios

### Scenario 1: Active Project Link
1. Render `<ProjectCard>` with `is_active: true`.
2. Verify the "Ver o projeto" button is rendered as active.
3. Verify clicking the button attempts navigation to the project production URL.

### Scenario 2: Inactive Project Link
1. Render `<ProjectCard>` with `is_active: false`.
2. Verify the "Ver o projeto" button has disabled visual styling (`styles.disabled`, `aria-disabled="true"`).
3. Attempt to click the button and verify navigation is prevented.

## Run Verification Commands

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run unit tests
npm test
```
