# Recovery Log

- batch: scrollable-diagram-redesign
- purpose: replace client-state diagram wrapper with deterministic server-safe zoom shell for contracts routes
- files:
  - snippets/components/displays/diagrams/ZoomableDiagram.jsx
- restore: copy file from this batch's `files/` tree back to repo path
- proof-gates:
  - git diff --check on touched files
  - scoped blockchain/contracts probes
