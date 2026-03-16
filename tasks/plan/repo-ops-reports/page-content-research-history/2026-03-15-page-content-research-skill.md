# Page Content Research Skill Recommendation

Date: 2026-03-15

## Recommendation

The best fit for this repo is not one monolithic review skill. It is:

- 1 router skill: `page-content-research-review`
- 3 narrow subskills:
  - `docs-source-verification`
  - `docs-change-review`
  - `docs-impact-propagation`

This matches the repo's existing preference for narrow, triggerable Codex skills and the public pattern the user supplied: review workflow + research bundle + impact layer.

## Why This Fits The Repo

### 1. The repo already treats Codex skills as generated artifacts

Canonical policy already exists in:

- `docs-guide/policies/source-of-truth-policy.mdx`
- `docs-guide/catalog/ai-tools.mdx`

The important local constraint is that Codex skills are not meant to be hand-authored ad hoc in local installs. They are generated from canonical template sources in `ai-tools/ai-skills/templates`.

### 2. The old installer could not carry a real research skill

Before this branch, `tools/scripts/sync-codex-skills.js` only synced:

- `SKILL.md`
- `agents/openai.yaml`

That meant the repo could not canonically install the richer skill shape supported by the broader Agent Skills ecosystem:

- `references/`
- `scripts/`
- `assets/`

That limitation was the real blocker to a deep-research skill in this repo.

### 3. The repo's own skill contract already expected richer skills

`ai-tools/ai-skills/skill-spec-contract.md` already described a `references/` contract, explicit "When to load" pointers, and the expectation that larger skills should keep `SKILL.md` lean by pushing detail into references.

So the gap was not in policy or concept. The gap was in the canonical sync layer.

## Public Patterns Reviewed

The most relevant outside references for this design were:

- Agent Skills specification: `https://agentskills.io/specification`
- GitHub Copilot skill authoring docs: `https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/create-skills`
- Mintlify `skill.md` guidance: `https://www.mintlify.com/blog/skill-md`
- Mintlify AI-native docs guidance: `https://www.mintlify.com/docs/ai-native`
- Metabase `docs-review` skill: `https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/docs-review/SKILL.md`

The consistent pattern across those sources is:

- small main skill file
- deeper references loaded only when needed
- deterministic helpers where repetition matters
- narrow trigger descriptions instead of one giant skill

## Implemented In This Branch

### 1. Managed bundle sync for Codex skills

`tools/scripts/sync-codex-skills.js` now supports companion bundle directories beside a template file:

- `<template-stem>.references/`
- `<template-stem>.scripts/`
- `<template-stem>.assets/`

Those sync into the installed local skill as:

- `references/`
- `scripts/`
- `assets/`

The sync layer now also writes a managed manifest and prunes stale managed bundle files on resync while preserving:

- unmanaged skills
- unmanaged files inside a managed skill

### 2. Unit coverage for bundle-aware sync

`tests/unit/codex-skill-sync.test.js` now covers:

- resource bundle install
- drift detection on managed bundle files
- stale managed file pruning
- preservation of unmanaged local files

### 3. Canonical research skill family

Added template-backed skills:

- `32-page-content-research-review.template.md`
- `33-docs-source-verification.template.md`
- `34-docs-change-review.template.md`
- `35-docs-impact-propagation.template.md`

Each has companion `references/` material so the main skill stays compact and the detailed method loads only when needed.

## Why Claim-Led Propagation Is The Right Model Here

This repo has many structurally related pages, route variants, scoped navigation files, review notes, and domain-specific sections. Hyperlink-led propagation would miss pages that repeat the same truth in different contexts.

The better model for this repo is claim-led propagation:

- identify the changed entity, term, workflow, or limit
- identify the canonical owner page
- locate direct and indirect dependents
- update or queue those pages by dependency, not by nearest route

That is especially important here because the repo already shows signs of:

- duplicated ownership across pages
- metadata drift
- stale route references
- strong local review conventions with uneven factual verification depth

## What This Does Not Solve Yet

This branch creates the correct canonical skill surface, but it does not yet create a full automatic traceability graph for all docs claims.

Still missing for a later phase:

- a repo-native claim inventory or traceability dataset
- deterministic repo scripts that build claim-to-page maps
- scheduled or PR-driven automation that opens follow-up queues automatically
- deeper integration with existing audit outputs so factual verification and content quality can be merged into one report

## Next Best Follow-Up

If the goal is to operationalize this skill family beyond prompt guidance, the next highest-value step is:

1. add a repo-native claim ledger or traceability data source
2. connect `docs-impact-propagation` to that dataset
3. emit a standard report under `tasks/reports/repo-ops/` for unresolved propagation work

That would move the repo from guided research/review to semi-deterministic cross-page maintenance.
