# Workflow Audit Draft: Update Blog and Forum Data

- Source path: `.github/workflows/update-blog-data.yml`
- Workflow family: `data-refresh`
- Cleanup decision: `consolidate`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `authoring`
- Risk level: `high`
- Dispatcher candidate: `page-ship`
- Consolidation target: `future:data-refresh-dispatcher`

## Summary

Update Blog and Forum Data runs on workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Consolidate this workflow under `future:data-refresh-dispatcher` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- action:actions/checkout@v4
- secret:GITHUB_TOKEN
- snippets/data/social-feeds/forumData.jsx
- snippets/data/social-feeds/ghostBlogData.jsx

## Dependants

- dispatcher:page-ship

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Mutates repository state from CI, which raises coordination and safety risk.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- This belongs to a repeating data-refresh pattern and should not stay as an uncoordinated top-level workflow forever.
- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
