# Generated Artifact Hook Governance Remediation Plan

## Summary

This report converts the generated-artifact governance recommendations into an implementation sequence for repo-wide follow-up. The first wave lands the manifest, targeted hook enforcement, and policy documentation. Follow-up tasks expand manifest coverage and reduce remaining hardcoded behavior in generators and governance scripts.

## Implemented First Wave

Owner: docs

1. Added `tools/config/generated-artifacts.json` as the canonical manifest for hook-managed generated artifacts.
2. Added `tools/lib/generated-artifacts.js` to validate manifest structure, match repo paths, and classify staged files.
3. Refactored `.githooks/pre-commit` to:
   - block forbidden staged ephemeral outputs
   - gate `docs-index.json` through manifest-based source matching
   - fail with a targeted command instead of auto-staging `docs-index.json`
4. Filtered `generate-docs-index.js --staged` through manifest-declared source scope so unrelated docs such as `docs-guide/**` no longer trigger docs-index churn.
5. Added durable policy documentation in `docs-guide/policies/generated-artifact-and-hook-governance.mdx`.

## Remaining Remediation Sequence

### 1. Expand manifest coverage

- Owner: docs
- Target files: `tools/config/generated-artifacts.json`, `tools/scripts/*`, `tests/unit/*`
- Goal: cover remaining hook-managed or generator-managed artifacts that still rely on implicit path rules.
- Acceptance check: every generated artifact touched by hooks has a manifest entry and no hook branch contains ad hoc path regexes for generated outputs.

### 2. Remove hardcoded generated-file sets from banner enforcement

- Owner: docs
- Target files: `tools/scripts/enforce-generated-file-banners.js`, `tools/lib/generated-file-banners.js`
- Goal: make banner enforcement fully manifest-driven for non-i18n generated MDX instead of combining manifest data with dynamic legacy discovery.
- Acceptance check: the banner enforcer can enumerate governed generated MDX targets from manifest contract only.

### 3. Split committed report pages from local report scratch space

- Owner: docs
- Target files: `.gitignore`, `tasks/reports/**`, report generators that currently emit ad hoc outputs
- Goal: formalize which reports are canonical committed artifacts and which must move to ignored local-only buckets.
- Acceptance check: local audit/scratch outputs stop showing up as staged noise in normal workflows.

### 4. Add manifest-aware CI checks

- Owner: docs
- Target files: `tests/run-pr-checks.js`, `.github/workflows/*`
- Goal: ensure CI enforces required committed artifacts, warns on advisory generated artifacts, and ignores local-only outputs consistently with hook policy.
- Acceptance check: CI behavior matches `commit_policy` and `ci_policy` for manifest entries.

### 5. Audit write-and-stage eligibility

- Owner: docs
- Target files: `tools/config/generated-artifacts.json`, `.githooks/pre-commit`
- Goal: prove whether any artifact genuinely qualifies for `hook_policy=write_and_stage`.
- Acceptance check: every `write_and_stage` entry has a dedicated deterministic bounded-diff test; otherwise the policy remains `check_only`.

### 6. Normalize generator delta strategies

- Owner: docs
- Target files: generator entrypoints declared in the manifest
- Goal: ensure `delta_strategy` is implemented, not merely documented.
- Acceptance check: staged source changes only affect their declared artifact set, and full-regeneration generators stay in `check_only`.

## Deferred Follow-Up Risks

- `tasks/reports/**` currently contains both canonical checked-in reports and local-style “latest” files. The first wave blocks accidental staging under hook-managed paths but does not yet separate canonical from disposable report inventory.
- Banner enforcement still relies on dynamic file discovery for some generated MDX outputs.
- Other generators outside `docs-index.json` are still implicitly governed by conventions rather than strict manifest enforcement.

## Practical Rules

1. Do not bypass hook failures caused by generated-artifact freshness unless the manifest or generator is wrong.
2. Do not restage large generated diffs automatically in `pre-commit`.
3. Treat generated diffs outside declared source scope as governance defects.
4. Keep report-only outputs out of the source-of-truth path.
5. If a generated artifact needs to be committed, make that explicit in the manifest instead of relying on convention.
