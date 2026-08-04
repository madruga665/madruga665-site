# Component Contract: `LinkButton` & `ProjectCard`

**Feature**: Disable Inactive Project Link
**Spec**: `specs/003-disable-inactive-project-link/spec.md`

## 1. Component Prop Interface

### `LinkButtonProps`
```ts
interface LinkButtonProps {
  url: string;
  variant?: 'yellow' | 'pink';
  disabled?: boolean;
}
```

## 2. Behavioral Rules

| Prop State | DOM Output | Interactive Behavior | Visual State |
|---|---|---|---|
| `disabled={false}` (default) | `<Link href={url} target="_blank">` | Navigates to target URL | Yellow/Pink background, offset shadow, hover/active movement |
| `disabled={true}` | `<Link href="#" className={styles.disabled} aria-disabled="true" onClick={(e) => e.preventDefault()}>` | Prevents navigation, ignores clicks | Muted opacity (`0.5`), `cursor: not-allowed`, no shadow, no movement |

## 3. ProjectCard Integration

In `ProjectCard`:
```tsx
<LinkButton url={project.production} variant="pink" disabled={project.is_active === false}>
  Ver o projeto
</LinkButton>
```
When `project.is_active` is `false`, `LinkButton` receives `disabled={true}`.
