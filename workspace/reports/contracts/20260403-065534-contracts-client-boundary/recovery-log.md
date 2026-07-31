# Recovery Log

- batch: contracts-client-boundary
- purpose: patch non-MDX contracts-surface client component boundaries and missing imports
- files:
  - snippets/components/wrappers/tables/SearchTable.jsx
  - snippets/components/wrappers/tables/Table.jsx
  - snippets/components/integrators/feeds/ContractVerifier.jsx
  - snippets/components/integrators/embeds/DataEmbed.jsx
- restore: copy files from this batch's `files/` tree back to repo paths
- proof-gates:
  - git diff --check on touched files
  - node operations/tests/unit/lpd-scoped-mint-dev.test.js
  - scoped contracts validators / direct route probes
