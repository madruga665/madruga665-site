# Feature Specification: Contact Form Component & Server-Side Contact Page

**Feature Branch**: `004-contact-form-component`

**Created**: 2026-08-04

**Status**: Draft

**Input**: User description: "transformar o formulario de contado em um componente e tirar 'use client' da pagina de contato"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Interactive Contact Form Submissions (Priority: P1)

As a site visitor, I want to submit feedback or a message through an interactive contact form on the Contact Page so that the site owner receives my inquiry cleanly with real-time feedback upon submission.

**Why this priority**: Submitting messages is the primary interactive feature on the contact page. The interactive form logic must be encapsulated in a dedicated interactive component while keeping page shell rendering on the server.

**Independent Test**: Can be tested by filling out the name, email, and message fields in the contact form, submitting the form, and confirming validation messages or success notifications trigger appropriately.

**Acceptance Scenarios**:

1. **Given** a visitor is on the Contact Page, **When** they fill in valid name, email, and message and click submit, **Then** the form submits the data, displays a success notification, and resets the input fields.
2. **Given** a visitor leaves required fields empty or enters invalid formats, **When** they click submit, **Then** the form displays field-level validation errors immediately without refreshing the page.

---

### User Story 2 - Server-Side Contact Page Shell (Priority: P2)

As a site visitor or search engine crawler, I want the Contact Page shell (title, headings, layout, and static text) to be rendered on the server as a Server Component so that initial page loads are faster, SEO meta tags render directly in the server response, and client-side JavaScript bundle size is minimized.

**Why this priority**: Moving page-level layout and metadata out of the client bundle enforces Next.js 15 / React 19 architecture principles and improves SEO and page performance.

**Independent Test**: Can be tested by inspecting the rendered HTML response of `/portifolio/contato` to verify server-side metadata and heading tags without requiring client-side JavaScript execution.

**Acceptance Scenarios**:

1. **Given** a request for `/portifolio/contato`, **When** the page renders, **Then** the initial HTML contains the server-rendered title, metadata, layout structure, and embedded contact form component.

---

### Edge Cases

- How does the system handle network submission errors or API timeouts during form submission?
  - The contact form component displays an error notification and retains the user's filled inputs so they do not lose their message.
- What happens if a user submits the form multiple times rapidly?
  - The submit button enters a disabled/loading state during submission to prevent duplicate network calls.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The contact form MUST be extracted into a dedicated, reusable client component (`ContactForm`) containing all form state, field validation, and submit handler logic.
- **FR-002**: The Contact Page (`src/app/portifolio/contato/page.tsx`) MUST NOT include the `'use client'` directive and MUST function as a Server Component.
- **FR-003**: The Contact Page MUST export page metadata (such as page title) using Next.js App Router metadata conventions instead of client-side `<Head>` tags.
- **FR-004**: The contact form MUST validate required fields (name, email, message) and notify the user upon success or failure.
- **FR-005**: The contact form MUST reset field values upon successful submission without requiring a full page refresh.

### Key Entities

- **Contact Message Submission**: Represents user feedback containing the submitter's name, email address, message body, and submission timestamp.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of page-level metadata and static layout elements for `/portifolio/contato` are rendered server-side on initial request.
- **SC-002**: Visitors can submit a contact message and receive visual confirmation in under 3 seconds on standard network connections.
- **SC-003**: Form validation feedback is displayed instantly (< 100ms) upon user interaction or submission attempt.
- **SC-004**: 100% of automated unit tests for the contact page and contact form component pass without regression.

## Assumptions

- The existing API route `/api/domain/contact` (POST) remains the endpoint for handling contact message submissions.
- Form validation rules (required name, required email, required message) remain consistent with existing validation behavior.
- Visual styling of the form and window card container remains visually identical to the current design system.
