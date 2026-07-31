# Phase 5 — Pipeline Test Story (deferred work)

> Created 2026-05-22 at close of Phase 4 (GitHub Actions consolidation).
> Carries Phase 5.1-5.7 testing tasks for the next session.
> Phase 5.8-5.14 (documentation closure) was completed in the closing session.

## Why this exists

Phase 4 shipped 4-tier architecture (53 → 11 workflows). Smoke test passes 66/66. But the pipelines are only *smoke-tested* (architecture works, scripts don't crash) — they have **not been functionally tested** with synthetic violations.

Functional testing is the only proof that a pipeline actually catches and fixes the thing it claims to. Without it, the 8 NEW remediators built in Phase 4 are unproven on real violations.

## Test-story tasks (queued for next session)

### Phase 5.1 — Functional-test harness, foundational pipelines

Build `operations/tests/integration/dispatch-{niche}.test.js` per pipeline with the synthetic-violation cycle:

1. **Setup:** snapshot baseline, write fixture file with known-bad content
2. **Detect:** run dispatcher in detect mode, assert violation found
3. **Repair:** run dispatcher in repair mode, assert violation gone
4. **Verify:** re-run detect, assert clean exit
5. **Teardown:** restore baseline, remove fixture

Foundational 10 pipelines first:
- `dispatch-folder-allowlist` (drop file in `.github/` not on allowlist → detect → archive → verify)
- `dispatch-em-dashes` (write file with em-dash → detect → repair → verify)
- `dispatch-wcag` (write WCAG violation → detect → repair → verify)
- `dispatch-page-integrity` (broken link → detect → repair → verify)
- `dispatch-anchor-usage` (broken anchor → fuzzy-repair → verify)
- `dispatch-lint-structure` (trailing whitespace → detect → repair → verify)
- `dispatch-description-quality` (boilerplate description → repair → verify)
- `dispatch-banned-words` (file with banned word → detect → assert rolling-issue payload)
- `dispatch-governance-map` (missing GOVERNANCE.md → detect → repair → verify)
- `dispatch-jsdoc-headers` (script missing JSDoc tag → detect → repair → verify)

### Phase 5.2 — Remaining pipeline coverage

One test per niche for the remaining ~55 pipelines. Same shape, different fixtures.

### Phase 5.3 — Wire tests into CI

New `validator-governance-check-pipelines.yml` runs on PR touching:
- `operations/scripts/dispatch/**`
- `.github/workflows/dispatch-*.yml`

Runs:
1. `pipeline-smoke-test.js`
2. Per-pipeline functional tests for any pipeline whose dispatcher or atomics changed in the diff

### Phase 5.4 — End-to-end CI dry-run

After merge to docs-v2-dev (or in a test branch), manually trigger each of the 6 `dispatch-{concern}.yml` actions via `workflow_dispatch` with `dry_run: true` to verify CI environment compatibility (Node, checkout, permissions, secrets injection).

### Phase 5.5 — Scheduled-mode dry runs

Trigger each scheduled meta dispatcher (`dispatch-{concern}-scan.js`) to confirm the full audit + repair + verify + rolling-issue cycle works in CI.

### Phase 5.6 — Rolling-issue lifecycle test

Verify `lib/rolling-issue.js` open/update/close cycle:
1. Intentionally introduce a finding (e.g. add a file with em-dashes)
2. Wait for scheduled scan to fire (or trigger manually)
3. Assert rolling issue opened with expected title and labels
4. Fix the finding (run the repair pipeline)
5. Re-run scheduled scan
6. Assert rolling issue closed

### Phase 5.7 — Auto-fix PR creation test

Trigger a `manual-repair` job to verify `peter-evans/create-pull-request@v7` actually opens a PR with:
- Correct title pattern
- Correct labels (concern, auto-generated, needs-review)
- Correct branch naming (`chore/{concern}-repair-{run-id}`)

## Success criteria

- All 65 pipelines have at least one functional test (synthetic-violation cycle proven)
- `pipeline-smoke-test.js` + functional tests run on every PR touching dispatch surface
- All 6 `dispatch-{concern}.yml` actions verified to work in CI environment
- Rolling-issue lifecycle proven end-to-end on at least one pipeline
- Auto-fix PR creation proven end-to-end on at least one manual-repair job

## Estimated effort

- 5.1: ~6-8 hours (10 fixtures + 10 test cases + harness)
- 5.2: ~12-16 hours (55 more tests, same shape)
- 5.3: ~2 hours (new workflow + wire into PR gate)
- 5.4-5.7: ~4-6 hours (manual triggers + observation + writeups)

Total: ~24-32 hours of focused testing work.

## Related artefacts

- Smoke test: `operations/tests/integration/pipeline-smoke-test.js` (66/66 passing as of Phase 4 close)
- Pipeline-mode lib: `tools/lib/governance/pipeline-mode.js`
- Folder-allowlist lib: `tools/lib/governance/folder-allowlist.js`
- Canonical framework: `docs-guide/frameworks/github-actions.mdx`
- Operator guide: `docs-guide/frameworks/dispatch-pipelines.mdx`
- Decisions: `.github/workspace/decisions-log.mdx` (D-ACT-01..10, D-GOV-01..08)

## When to pick this up

Any time. The architecture is stable; test gaps don't block usage but reduce confidence in the repair atomics. Recommended within 2 weeks of Phase 4 close (by 2026-06-05) so the system is fully validated before heavy production use.
