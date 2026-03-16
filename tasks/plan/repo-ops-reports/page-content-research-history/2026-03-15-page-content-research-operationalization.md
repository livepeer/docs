# Page Content Research Skill Operationalization

Date: 2026-03-15

## Outcome

The research skill family is now operationalized beyond template design.

Completed in this branch:

- real Codex install into `~/.codex/skills`
- zero-drift install verification through the canonical sync command
- two pilot workflows with saved outputs under `tasks/reports/repo-ops/`
- first deterministic claim ledger contract
- first deterministic propagation helper and test coverage

## Real Install Proof

The following skills were synced into the real local Codex destination:

- `page-content-research-review`
- `docs-source-verification`
- `docs-change-review`
- `docs-impact-propagation`

Observed installed structure for each skill:

- `SKILL.md`
- `agents/openai.yaml`
- `references/`
- `.codex-sync-manifest.json`

Sequential check passed after install:

```bash
node tools/scripts/sync-codex-skills.js --skills page-content-research-review,docs-source-verification,docs-change-review,docs-impact-propagation
node tools/scripts/sync-codex-skills.js --check --skills page-content-research-review,docs-source-verification,docs-change-review,docs-impact-propagation
```

## Local Compatibility Result

A local search through `~/.codex` did not surface any active tooling that depended on a `SKILL.md`-only install shape. The only `SKILL.md`-related hits outside the skill folders were archived or rules-context references, not active install validators.

No extra portability changes were required beyond the canonical bundle-aware sync work already added in this branch.

## Pilot Workflow Results

### Pilot A: Single-page factual verification

Saved output:

- `tasks/reports/repo-ops/2026-03-15-page-content-research-pilot-operator-support.md`

Page reviewed:

- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`

What the pilot proved:

- the router/source-verification flow can separate supported claims, conservative rewrites, and unresolved current-state claims
- the output contract is reusable for real page review
- support-program pages are good stress tests because they mix verified governance facts with weaker operational/community claims

Main weaknesses found:

- current skill wording needed stronger guidance for historical-vs-current claims
- reusable claims needed a structured storage surface instead of only prose notes

### Pilot B: Cross-page propagation

Saved outputs:

- `tasks/reports/repo-ops/2026-03-15-page-content-research-pilot-support-propagation.md`
- `tasks/reports/repo-ops/2026-03-15-page-content-research-pilot-support-propagation.json`

Entity used:

- `gateway-operator-support`

What the pilot proved:

- the helper can emit a deterministic queue from tracked claims
- the queue distinguishes `update-now` and `verify-only` pages
- unresolved claims produce a real follow-up surface instead of remaining implicit

Main weakness found:

- the first ledger is intentionally narrow and only covers a small set of reusable support claims

## Deterministic Claim Substrate

The first repo-native claim contract now exists in:

- `tasks/reports/repo-ops/page-content-claim-ledger.json`

Minimum implemented record fields:

- `claim_id`
- `entity`
- `claim_summary`
- `canonical_owner`
- `source_type`
- `source_ref`
- `last_verified`
- `dependent_pages`
- `status`

Current statuses in use:

- `verified`
- `needs-review`

## Helper Support

The first helper is:

- `tools/scripts/docs-claim-ledger.js`

Implemented behaviors:

- ledger validation
- claim or entity selection
- deterministic propagation queue emission
- markdown and json report output

Unit coverage:

- `tests/unit/docs-claim-ledger.test.js`

## Skill Tightening Applied From Pilots

The skill family was tightened to reflect the pilot findings:

- source verification now explicitly handles historical evidence when current state is not confirmed
- propagation now consults the tracked claim ledger first
- the router now standardizes saved report sections
- the report template now includes `Validation`
- claim ledger guidance now points to the structured repo-native ledger file

## Remaining Follow-up Toward The End Goal

Next highest-value work after this branch:

1. Expand the claim ledger beyond the gateway operator support surface.
2. Add a second or third domain pilot, ideally in orchestrators or APIs.
3. Connect saved report output and ledger updates more directly so a verification pass can propose ledger changes automatically.
4. Decide whether propagation helper outputs should remain advisory-only or become PR-side artifacts.
5. Only after that, design scheduled or PR-triggered research-impact workflows.

This branch reaches Phase 3 readiness: the skill workflow is operationalized, and propagation has a first deterministic substrate.
