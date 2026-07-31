# .github/workflows/ Governance

**Owner:** @livepeer/docs-team
**Framework:** [GitHub Actions Framework](../../docs-guide/frameworks/github-actions.mdx)
**Standards:** Type prefix in filename, governance comment header, governed script references
**Decisions:** [Decisions Log](../workspace/decisions-log.mdx) (D-ACT-01 through D-ACT-08)
**Status:** Active — 52 workflows, dispatcher model

All workflows are dispatchers. Typed work lives in `operations/scripts/`. The type classification comes from what the script does, not the workflow.

## Pipeline tags
| Tag | Trigger | Authority |
|-----|---------|-----------|
| P2 | PR (required) | Blocks merge |
| P3 | PR (non-required) | Advisory |
| P4 | Push to deploy | Post-merge auto-commit |
| P5 | Schedule (read-only) | Report only |
| P5-auto | Schedule + commit | Writes to repo |
| P6 | Manual dispatch | Explicit trigger |

## Known gaps
- 51/52 workflows lack governance comment headers
- 48 missing actions-library documentation
