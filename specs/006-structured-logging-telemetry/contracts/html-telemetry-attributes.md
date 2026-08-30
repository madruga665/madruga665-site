# Contract: Declarative Telemetry HTML Attributes

**Feature Branch**: `006-structured-logging-telemetry`
**Created**: 2026-08-30

---

## Declarative HTML Data Attributes for User Interaction Tracking

UI components emit user interaction telemetry by including standard HTML data attributes on clickable anchor or button elements.

### Attributes Specification

| Attribute | Required | Example | Description |
|-----------|----------|---------|-------------|
| `data-track-click` | **Yes** | `data-track-click="download-resume"` | Unique semantic identifier for the interactive target. |
| `data-track-category` | **Yes** | `data-track-category="cta"` | Broad category of the interaction (`cta`, `project`, `social`, `navigation`, `form`). |
| `data-track-label` | **Yes** | `data-track-label="Download Curriculo"` | Human-readable description of the element or action. |
| `data-track-href` | No | `data-track-href="https://github.com/..."` | Destination link target (automatically extracted from `href` if omitted). |

---

### Component Integration Examples

#### 1. CTA Resume Download Button (`src/components/LinkButton`)
```tsx
<LinkButton
  url={curriculo}
  target="_blank"
  data-track-click="download-resume"
  data-track-category="cta"
  data-track-label="Download Curriculo"
>
  Download CV
</LinkButton>
```

#### 2. Project Card Action Links (`src/components/ProjectCard`)
```tsx
<LinkButton
  url={project.gitHubRepository}
  target="_blank"
  data-track-click="project-github-link"
  data-track-category="project"
  data-track-label={`GitHub - ${project.title}`}
>
  Ver Código
</LinkButton>
```

#### 3. Navigation Links (`src/components/NavLinks`)
```tsx
<Link
  href={path.path}
  data-track-click={`nav-${path.label.toLowerCase()}`}
  data-track-category="navigation"
  data-track-label={`Nav to ${path.label}`}
>
  {path.label}
</Link>
```
