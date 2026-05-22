# Recovery Log

- batch: contracts-shared-client-boundary
- purpose: patch shared contracts-route components using client hooks/browser APIs without client boundaries/imports
- files:
  - snippets/components/wrappers/containers/LazyLoad.jsx
  - snippets/components/displays/diagrams/ZoomableDiagram.jsx
  - snippets/components/wrappers/steps/Steps.jsx
- restore: copy files from this batch's `files/` tree back to repo paths
- proof-gates:
  - git diff --check on touched files
  - scoped contracts validators
