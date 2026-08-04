# Phase 1 Quickstart & Validation Guide: Contact Form Component

**Feature Branch**: `004-contact-form-component`
**Date**: 2026-08-04

## Quickstart & Verification Scenarios

### Prerequisite Setup
Ensure dependencies are installed and test environment is ready:
```bash
npm install
```

### Scenario 1: Automated Unit Tests
Run the Jest test suite to verify component extraction and server page rendering:
```bash
npm run test
```
**Expected Outcome**: All unit test suites pass cleanly with 100% pass rate.

### Scenario 2: Type Safety & Compilation Check
Run the TypeScript compiler to verify no missing imports, type mismatches, or invalid prop usages:
```bash
npx tsc --noEmit
```
**Expected Outcome**: Zero type errors reported.

### Scenario 3: Next.js Production Build Verification
Execute production build to verify Server Component rendering and route static/dynamic classification:
```bash
npm run build
```
**Expected Outcome**: 
- `/portifolio/contato` compiles as a Server Component.
- No build warnings or deprecation errors regarding `use client` or `next/head` on server pages.

### Scenario 4: Manual Interactive Verification
Start the development server:
```bash
npm run dev
```
Navigate to `http://localhost:3000/portifolio/contato`:
1. Inspect document source (`CTRL+U` / View Source) to confirm page `<title>Luciano Amâncio - Contato</title>` and structure are pre-rendered in server HTML response.
2. Fill out name, email, message and click **Enviar**.
3. Verify Toast success notification displays, inputs clear, and no page reload occurs.
