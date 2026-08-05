# Phase 1 Quickstart & Validation Guide: Neobrutalism Toast Notifications

**Feature Branch**: `005-neobrutalism-toast-notifications`
**Date**: 2026-08-04

## Quickstart & Verification Scenarios

### Scenario 1: Automated Unit Tests
Run Jest test suite to verify style definitions and layout wrapper rendering:
```bash
npm run test
```
**Expected Outcome**: All tests pass.

### Scenario 2: TypeScript & Build Checks
Verify type safety and CSS import integrity:
```bash
npx tsc --noEmit
npm run build
```
**Expected Outcome**: Zero compilation errors or broken imports.

### Scenario 3: Visual Inspection of Toasts
Start local development server:
```bash
npm run dev
```
1. Navigate to `/portifolio/contato`.
2. Fill and submit the form with valid data.
3. Verify the **Success Toast** appears with:
   - Fundo verde (`#4ade80`)
   - Borda preta sólida de 3px
   - Sombra dura deslocada de 4px (sem desfoque)
   - Texto preto em negrito
   - Botão fechar em preto de alto contraste
4. Trigger an error toast (e.g. submit invalid data or force API failure) and verify **Error Toast** appears with red background (`#f87171`), black border, and hard shadow.
