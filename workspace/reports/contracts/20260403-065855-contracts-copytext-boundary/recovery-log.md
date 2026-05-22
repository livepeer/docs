# Recovery Log

- batch: contracts-copytext-boundary
- purpose: patch CopyText client boundary for contracts routes
- files:
  - snippets/components/elements/text/Text.jsx
- restore: copy files from this batch's `files/` tree back to repo path
- proof-gates:
  - git diff --check on touched files
  - scoped contracts validators
