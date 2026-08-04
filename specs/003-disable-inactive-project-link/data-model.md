# Phase 1: Data Model & Schema

**Feature**: Disable Inactive Project Link
**Spec**: `specs/003-disable-inactive-project-link/spec.md`

## 1. Entities

### `Project` (Domain Entity)
- **File**: `src/app/api/domain/projects/entities/project.ts`
- **Attributes**:
  - `name`: `string` (Required)
  - `description`: `string` (Required)
  - `tags`: `string[]` (Required)
  - `githubRepository`: `string` (Required)
  - `production`: `string` (Required)
  - `image`: `string` (Optional)
  - `is_active`: `boolean` (Optional, defaults to `true`)

### `ProjectSerealized` (Interface)
- **File**: `src/interfaces/projectsPage.ts`
- **Attributes**:
  - `id`: `string` (Optional)
  - `name`: `string` (Required)
  - `description`: `string` (Required)
  - `tags`: `Array<string>` (Required)
  - `githubRepository`: `string` (Required)
  - `production`: `string` (Required)
  - `image`: `string` (Optional)
  - `is_active`: `boolean` (Optional, defaults to `true`)

## 2. Data Mapping (Notion API)
- **File**: `src/app/api/domain/projects/mappers/project-mapper.ts`
- **Mapping Logic**:
  ```ts
  const is_active = typeof props.is_active?.checkbox === 'boolean' ? props.is_active.checkbox : true;
  ```
