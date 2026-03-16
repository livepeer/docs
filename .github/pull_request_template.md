## Description

[//]: # (Provide a clear description of what this PR changes and why)

## Scope

[//]: # (Required for codex/* PRs: list in-scope files/prefixes and any explicit out-of-scope exclusions)
[//]: # (Tip: node tools/scripts/create-codex-pr.js --create)

## Validation

[//]: # (Required for codex/* PRs: list exact commands run and notable outcomes)
[//]: # (Tip: node tools/scripts/create-codex-pr.js --create)

## Follow-up Tasks

[//]: # (Required for codex/* PRs: link follow-up issues, or write "none")
[//]: # (Tip: node tools/scripts/create-codex-pr.js --create)

## Type of Change

[//]: # (Check all that apply)

- [ ] Bug fix (fixes an issue)
- [ ] New content (adds new documentation)
- [ ] Content update (improves existing content)
- [ ] Style/formatting fix
- [ ] Information architecture change
- [ ] Other (please describe)

## Related Issues

[//]: # (Link to related GitHub issues)

Fixes #
Related to #

## Changes Made

[//]: # (Describe the specific changes in this PR)

- 
- 
- 

## Testing

[//]: # (Describe how you tested your changes)

- [ ] Tested locally with `npm run dev`
- [ ] Verified all links work
- [ ] Checked formatting and style
- [ ] Reviewed against style guides
- [ ] Screenshots (if UI changes)

## Screenshots (if applicable)

[//]: # (Add screenshots if this PR changes the UI or adds visual content)

## Checklist

[//]: # (Check all that apply)

- [ ] My changes follow the [style guides](../../docs/ABOUT/ABOUT-SECTION-STYLE-GUIDE.md)
- [ ] I've reviewed the [Component Library](../../v2/pages/07_resources/documentation-guide/component-library) for available components
- [ ] I've updated related pages if needed
- [ ] I've checked for broken links
- [ ] My changes are clear and easy to understand
- [ ] I've tested locally
- [ ] I've added/updated keywords and metadata if needed

## Additional Notes

[//]: # (Any additional information, context, or notes for reviewers)

## Copy Governance Gate - L5

Complete before requesting review. Every item must be checked or the PR is not ready.

### Auto-checked by CI (lint-copy.js + lint-structure.js)
- [ ] No Tier 1 banned words or phrases
- [ ] No unresolved `{/* REVIEW: */}` flags in rendered content
- [ ] No non-USD currency outside declared regional scope
- [ ] No empty cells in decision tables
- [ ] `pageType`, `audience`, `lastVerified` present in frontmatter

### Human review required

**Sequence (L2)**
- [ ] Page opens with operator outcome - value kept, no conditionals
- [ ] Majority operator path is featured before variants
- [ ] Introduced paths are developed on-page or linked

**Completeness (L3)**
- [ ] Decision aids (tables, matrices, flowcharts) are complete - no placeholders
- [ ] Every warning or consequence is followed by a prevention action and link
- [ ] Primary actions and URLs appear in body copy (not only in accordions)

**Tone (L4)**
- [ ] No sentence ends on a hedge, disclaimer, or restatement
- [ ] No section ends with a Note that apologises rather than forward-points

**Brief compliance**
- [ ] L0 (Q1-Q4) was completed before drafting
- [ ] L1 persona mapping table was completed before drafting

[//]: # (mdx-safe-markdown:divider)

**If any structural item fails:** fix before requesting review. Do not ask a reviewer to identify the issue.

**If the same section fails review twice:** do not attempt a third fix. Escalate to the documentation lead for L6 diagnostic.
