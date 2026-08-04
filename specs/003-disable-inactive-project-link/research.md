# Phase 0: Research & Technical Decisions

**Feature**: Disable Inactive Project Link
**Spec**: `specs/003-disable-inactive-project-link/spec.md`

## 1. Technical Decisions

### Decision 1: `is_active` Data Flow & Notion Integration
- **Decision**: Add `is_active?: boolean` to `Project` domain entity, `ProjectSerealized` interface, and map Notion `is_active` checkbox property in `ProjectMapper`.
- **Rationale**: Notion database properties contain custom checkbox fields (`props.is_active?.checkbox`). Defaulting to `true` when `props.is_active` is undefined ensures full backward compatibility for existing database items.
- **Alternatives Considered**:
  - *Infer active status from `production` URL presence*: Rejected because a project might have a production URL listed while being temporarily offline/inactive (`is_active = false`).

### Decision 2: `LinkButton` Disabled State & Accessibility
- **Decision**: Extend `LinkButton` component with optional `disabled?: boolean` prop. When `disabled` is `true`, render a `<button disabled aria-disabled="true">` or `<a className={styles.disabled}>` with `pointer-events: none` and `onClick={(e) => e.preventDefault()}`.
- **Rationale**: Reusing `LinkButton` with a `disabled` variant ensures visual consistency across the Neobrutalism design system while enforcing WCAG 2.2 AA accessibility standards.
- **Alternatives Considered**:
  - *Hiding the "Ver o projeto" button completely*: Rejected because keeping the button visible in a disabled state provides clearer context to users that a live demo exists but is currently inactive.

## 2. Best Practices & Design Patterns
- **Neobrutalism Disabled Styling**: Disabled buttons strip interactive hard box-shadows (`box-shadow: none`), set `opacity: 0.5` or `0.6`, set `cursor: not-allowed`, and prevent hover/active transform animations (`transform: none`).
- **Strict TypeScript Types**: Update `Project` and `ProjectSerealized` types explicitly without using `any`.
