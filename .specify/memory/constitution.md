<!--
SYNC IMPACT REPORT
- Version Change: unratified template -> v1.0.0
- Ratification Date: 2026-08-03
- Last Amended Date: 2026-08-03
- Modified Principles:
  * [PRINCIPLE_1_NAME] -> I. Modern Next.js & React 19 Architecture
  * [PRINCIPLE_2_NAME] -> II. Premium Visual Design System & UX
  * [PRINCIPLE_3_NAME] -> III. Type Safety & Schema Validation
  * [PRINCIPLE_4_NAME] -> IV. Automated Testing Discipline & Quality Gates
  * [PRINCIPLE_5_NAME] -> V. Performance, SEO & Web Accessibility
- Added Sections:
  * Technical Stack & System Constraints
  * Development & Review Workflow
- Removed Sections: None
- Templates Status:
  * ✅ .specify/templates/plan-template.md (aligned)
  * ✅ .specify/templates/spec-template.md (aligned)
  * ✅ .specify/templates/tasks-template.md (aligned)
- Deferred Items: None
-->

# madruga665-site Constitution

## Core Principles

### I. Modern Next.js & React 19 Architecture
- Application MUST be structured using Next.js 15 App Router standard paradigms.
- Server Components MUST be used as the default for data fetching and rendering; Client Components (`"use client"`) MUST be strictly scoped to interactive leaf nodes.
- Global state MUST be avoided where local component state, React hooks, or Server State suffice.

### II. Premium Visual Design System & UX
- UI interfaces MUST adhere to a cohesive, high-quality visual style with dark-mode defaults, responsive layouts, clean typography, and smooth micro-animations.
- Styles MUST be organized using modular Sass/CSS Modules or global CSS tokens under `src/styles/`. Unstructured inline styling or arbitrary hardcoded pixel offsets MUST NOT be used.
- Every interactive element MUST provide immediate visual feedback (hover/focus states, loading indicators, error boundaries).

### III. Type Safety & Schema Validation
- All code MUST be written in strict TypeScript; explicit type definitions are required, and use of `any` is forbidden.
- All external inputs (Notion API payloads, HTTP parameters, environment variables, user form submissions) MUST be runtime-validated using Zod schemas before consumption.
- Client-side forms MUST combine `React Hook Form` with Zod schema resolvers to guarantee end-to-end validation.

### IV. Automated Testing Discipline & Quality Gates
- Critical helpers, utilities, complex components, and API integration paths MUST be backed by automated Jest unit/integration tests (`npm run test`).
- Bug fixes MUST include a regression test reproducing the issue before implementing the solution.
- All changes MUST pass strict TypeScript compilation (`tsc --noEmit`), ESLint rules (`npm run lint`), and the full test suite (`npm run test`) prior to pull request approval.

### V. Performance, SEO & Web Accessibility
- All public pages MUST include semantic HTML5 tags, unique title tags, relevant meta descriptions, Open Graph data, and structured data where appropriate.
- Images, fonts, and assets MUST use Next.js built-in optimizations (`next/image`, `next/font`) to ensure fast Core Web Vitals (LCP, CLS, INP).
- Accessibility MUST comply with WCAG 2.2 Level AA standards (proper color contrast, ARIA roles, keyboard navigation support, screen reader compatibility).

## Technical Stack & System Constraints
- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript 5+
- **Styles**: Sass (`src/styles/`), CSS Modules, Vanilla CSS
- **Data Validation & Forms**: Zod + React Hook Form
- **APIs & Integrations**: Notion API (`@notionhq/client`), Axios
- **Testing**: Jest + React Testing Library (`@testing-library/react`)
- **Analytics & Deployment**: Vercel Analytics, Vercel Deployment

## Development & Review Workflow
- **Branch Naming**: Feature branches MUST follow `[###-feature-name]` or `feature/[short-description]`.
- **Pre-Commit Verification**: Run `npm run lint` and `npm run test` locally to verify code quality.
- **Pull Request Review**: PRs MUST include a summary of changes, screenshot/video for visual alterations, and proof of passing automated tests.
- **Incremental Commits**: Commits MUST be focused, atomic, and use descriptive messages (e.g., `feat:`, `fix:`, `docs:`, `test:`).

## Governance

- The Constitution supersedes all informal team habits or individual coding preferences.
- Any amendment to the Constitution requires:
  1. A explicit proposed change with version bump type justification.
  2. Verification that all dependent templates (`plan-template.md`, `spec-template.md`, `tasks-template.md`) are updated to reflect the new principles.
  3. Prepend of a Sync Impact Report documenting the scope of changes.
- **Versioning Policy**: Semantic versioning (MAJOR.MINOR.PATCH):
  - **MAJOR**: Incompatible principle removals or foundational architecture shifts.
  - **MINOR**: Addition of new principles or significant workflow/constraint expansions.
  - **PATCH**: Non-semantic rewordings, typo fixes, or minor clarifications.

**Version**: 1.0.0 | **Ratified**: 2026-08-03 | **Last Amended**: 2026-08-03
