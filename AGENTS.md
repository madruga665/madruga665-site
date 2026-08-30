# AGENTS.md — madruga665-site Development Guidelines

This document serves as the operational guide and knowledge base for AI coding agents operating on the **madruga665-site** codebase.

---

## 1. Project Overview

**madruga665-site** is a personal portfolio and contact application built with **Next.js 15 (App Router)** and **React 19**, featuring a distinctive **Neobrutalism** visual design system, integration with **Notion API** as a CMS/data source, strict TypeScript type safety, and automated test coverage.

---

## 2. Tech Stack & Key Libraries

- **Framework**: Next.js 15.5+ (App Router)
- **UI Library**: React 19 / React DOM 19
- **Language**: TypeScript 5+ (strict mode enabled)
- **Styling**: Sass / SCSS Modules (`*.module.scss`), CSS custom properties (`src/styles/`)
- **Data Fetching & CMS**: Notion API (`@notionhq/client`), Axios
- **Form & Validation**: React Hook Form + Zod (`@hookform/resolvers/zod` / Zod schemas)
- **Notifications**: React Toastify (custom styled in Neobrutalism theme)
- **Animations & Visuals**: `@tsparticles/react`, `react-wavify`, CSS keyframes
- **Testing**: Jest 29 + React Testing Library (`@testing-library/react`, `@testing-library/jest-dom`)
- **Containerization**: Multi-stage Dockerfile (Node 20 Alpine, standalone Next.js build)

---

## 3. Architecture & Project Layout

```
├── .agents/                    # Agent skills and configurations
├── .specify/                   # Spec Kit configuration, templates, and constitution
├── specs/                      # Feature specifications, plans, and task breakdowns
├── public/                     # Static assets (images, icons, resumes)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API Route Handlers (Clean Architecture / Domain Driven)
│   │   │   ├── domain/         # Domain entities, use cases, mappers, repositories
│   │   │   └── infrastructure/ # External services, Notion integrations
│   │   ├── portifolio/         # Portfolio sub-routes (home, projetos, experiencia, contato)
│   │   ├── layout.tsx          # Root HTML layout and metadata
│   │   ├── page.tsx            # Root landing / redirect page
│   │   └── loading.tsx         # Root loading state
│   ├── components/             # Reusable UI components
│   │   └── ComponentName/      # Component folder containing:
│   │       ├── index.tsx       # Component implementation
│   │       ├── styles.module.scss # Scoped CSS Module
│   │       └── Component.test.tsx # Unit tests
│   ├── helpers/                # Reusable helper functions and utilities
│   ├── hooks/                  # Custom React hooks (e.g. useHighlightPath, useLoadingRoute)
│   ├── interfaces/             # Shared TypeScript types and interfaces
│   ├── layouts/                # Complex layout wrappers (e.g. PortifolioLayout)
│   ├── lib/                    # Shared clients (e.g. notion-client.ts)
│   └── styles/                 # Global styles and design tokens
│       ├── global.scss         # Global resets and root CSS variables
│       ├── neobrutalism.scss   # Neobrutalism design tokens and utility classes
│       ├── colors.module.scss  # Color variables
│       └── toaster.scss        # Toast notification styling overrides
└── package.json                # Dependencies and npm scripts
```

---

## 4. Core Development Principles & Rules

### I. Next.js 15 & React 19 Best Practices
- **Server Components by Default**: All components in `src/app/` MUST be React Server Components unless client-side interactivity, hooks (`useState`, `useEffect`), or browser events (`onClick`, `onChange`) are strictly required.
- **Leaf-Node `"use client"`**: Keep `"use client"` directives scoped to the smallest possible interactive leaf components.
- **Async Metadata & App Router Conventions**: Follow Next.js 15 conventions for async params, searchParams, and metadata generation.

### II. Neobrutalism Design System & UX
- **Design Tokens**: Always use project CSS variables defined in [neobrutalism.scss](file:///home/madruga665/Projetos/madruga665-site/src/styles/neobrutalism.scss):
  - Borders: `var(--neo-border)` (e.g., `3px solid var(--neo-color-black)`)
  - Shadows: `var(--neo-shadow)` (hard, un-blurred offset shadow: `4px 4px 0px var(--neo-color-black)`)
  - Border Radius: `var(--neo-border-radius)` (`4px`)
  - Color Palette: Vibrant contrast accents (`--neo-accent-green`, `--neo-accent-red`, `--neo-accent-blue`, `--neo-accent-yellow`, `--neo-accent-purple`).
- **Interactive Feedback**: Every button, link, and input MUST provide instant tactile hover/active states (offset transform: `translate(2px, 2px)`).
- **Accessibility**: All interfaces must comply with WCAG 2.2 AA (minimum 4.5:1 text contrast, visible focus rings, ARIA attributes).

### III. Strict TypeScript & Validation
- **No `any`**: Explicit type definitions are required for all props, functions, and state.
- **Runtime Validation**: External payloads (Notion responses, form submissions, API requests, environment variables) MUST be validated with **Zod** before processing.
- **Forms**: Implement forms using `react-hook-form` with Zod schema resolvers.

### IV. Testing Discipline & Quality Gates
- Every new component, hook, or API helper MUST have accompanying automated tests with Jest and React Testing Library.
- Test files reside inside the component folder or a `__tests__/` subdirectory (e.g., `ComponentName.test.tsx`).
- Before completing any task or PR, verify that `npm run lint` and `npm run test` execute cleanly without errors.

### V. Mandatory Subagent Delegation for Research & Code Sweeps
- **Codebase Sweeps & Broad Search**: Whenever it is necessary to search across multiple files, perform codebase-wide sweeps, survey directory structures, investigate external documentation, or analyze architectural patterns, the agent **MUST invoke a specialized subagent** (e.g. `research` subagent via `invoke_subagent`).
- **Context Efficiency**: Delegating broad exploration and deep file scanning to subagents keeps the primary conversation context clean, focused, and token-efficient.
- **Synthesized Findings**: The main agent must wait for the subagent's structured report and use those findings to direct technical planning, implementation, or communication with the user.

---

## 5. Domain-Driven Backend Architecture (`src/app/api/`)

API routes follow clean separation of concerns:
- **`entities/`**: Core data models and business rules.
- **`usecases/`**: Application business logic orchestrating repositories.
- **`repositories/`**: Interface definitions and implementations for data access.
- **`mappers/`**: Transform raw Notion or external responses into clean domain entities.
- **`route.ts`**: Next.js Route Handler handling HTTP request parsing, Zod validation, use case invocation, and JSON response output.

---

## 6. Observability & Logging Standards

When implementing or extending logging and telemetry (Loki / Prometheus / Grafana stack):
- **Structured JSON Logs**: Server and API logs must be emitted to `stdout` as standardized JSON objects containing timestamp, log level, event name, and contextual attributes.
- **Client Telemetry**: Pageview and click tracking must dispatch asynchronously to an internal API endpoint without blocking user interaction or leaking PII.
- **Health Checks**: Maintain a lightweight health endpoint (`/api/health` or `/api/metrics`) returning 200 OK for Prometheus uptime probes.

---

## 7. Spec Kit Workflows & Branching

This repository utilizes Spec Kit for structured feature development:
- **`specs/`**: Contains specifications (`spec.md`), technical plans (`plan.md`), task checklists (`tasks.md`), and validation checklists.
- **Feature Branches**: Use sequential numbering or descriptive slugs (e.g. `006-structured-logging-telemetry` or `feature/short-description`).
- **Standard Commands**:
  - `/speckit-specify` — Create or update feature specifications
  - `/speckit-plan` — Generate technical architecture and plan
  - `/speckit-tasks` — Generate granular, dependency-ordered tasks
  - `/speckit-implement` — Execute task-by-task implementation

---

## 8. Common Commands

```bash
# Run local development server
npm run dev

# Run production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run automated tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run test coverage report
npm run test:coverage
```
