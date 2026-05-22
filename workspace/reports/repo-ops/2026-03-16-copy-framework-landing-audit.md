# Copy-Framework Landing Audit

Date: 2026-03-16  
Repo: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`  
Audited ref: `docs-v2-dev` @ `4837b36e`  
Scope: copy-framework only

## Audit Inputs

Authoritative baseline used for this audit:

- Copy Governance Framework v4.0 task brief from this thread
- Step 0 approved defaults from this thread:
  - remove overlap terms from banned lists where already enforced elsewhere
  - keep frontmatter checks in `lint-structure.js`
  - no docs-guide/tooling manifest entry required for the brief template
- T3 corrections later approved in this thread:
  - phrase-first dedupe in `lint-copy.js`
  - `copy-lint.test.js` merges `lint-copy.js` and `lint-patterns.js` results before expected JSON comparison
  - every fail fixture requires an expected JSON file, including `conditional-if.json` and `not-construction.json`

Branch-truth method:

- audited the branch ref, not working-tree contents
- used `git show docs-v2-dev:<path>` / path existence checks for expected artifacts
- used ancestry checks for the known copy-framework commits
- ignored unrelated dirty working-tree changes in `Docs-v2-dev`

Source commits from this thread:

| Commit | Purpose |
|---|---|
| `479ab394` | add banned word and phrase reference files |
| `04319c91` | add lint scripts with required headers |
| `119a406e` | add copy-lint test suite, fixtures, runner wiring |
| `ac4f576a` | add docs-copy SKILL package docs |
| `3cc97b7f` | add brief template and PR checklist integration |
| `4076d04c` | add copy-governance report directory |
| `1bf7a69e` | fix T3 fixture semantics and phrase-first dedupe |
| `74473da4` | rollout-only scope tuning and pilot reports |

Ancestry result:

All audited copy-framework commits above returned non-ancestor for `docs-v2-dev`.

## Summary

- Core copy-framework landing groups audited: `7`
- Fully landed core groups on `docs-v2-dev`: `0`
- Partially landed core groups on `docs-v2-dev`: `1`
- Missing core groups on `docs-v2-dev`: `6`
- Post-implementation correctness groups landed: `0 / 1`
- Rollout-only follow-up groups landed: `0 / 1`

Bottom line:

- The original copy-framework implementation has **not landed** on `docs-v2-dev`.
- One overlapping artifact exists on-branch: `ai-tools/ai-skills/docs-copy/SKILL.md`, but it arrived through separate commit `e602e725` and does not satisfy the full Commit 4 deliverable set.

## Baseline Deliverable Matrix

| Group | Expected branch evidence | Source commits | Status on `docs-v2-dev` | Notes |
|---|---|---|---|---|
| Reference files | `tools/lib/copy-governance/banned-words.txt`, `tools/lib/copy-governance/banned-phrases.txt`, mirrored copies under `ai-tools/ai-skills/docs-copy/reference/` | `479ab394` | Missing | No `tools/lib/copy-governance/` directory exists on branch. |
| Lint scripts | `tools/scripts/lint-copy.js`, `lint-structure.js`, `lint-patterns.js`, `pattern-observer.js` | `04319c91` | Missing | None of the four scripts exist on branch. |
| Copy-lint suite | `tests/unit/copy-lint.test.js`, `tests/copy-lint-fixtures/**`, `tests/run-all.js` wiring, `tests/run-pr-checks.js` wiring | `119a406e` | Missing | No copy-lint unit test or fixture tree exists; no runner references found. |
| Docs-copy skill package docs | root `SKILL.md`, `README.md`, `reference/invocation-guide.md`, `skills/*` docs | `ac4f576a` | Partial | `SKILL.md` exists, but the rest of the package docs are missing. |
| Brief template | `docs-guide/tooling/content-brief-template.md` | `3cc97b7f` | Missing | No tooling template file on branch. |
| PR template integration | L5 checklist additions in `.github/pull_request_template.md` | `3cc97b7f` | Missing | PR template still shows the pre-framework generic checklist. |
| Report directory | `tasks/reports/copy-governance/.gitkeep` | `4076d04c` | Missing | No copy-governance report directory on branch. |
| T3 correctness fixes | phrase-first dedupe in `lint-copy.js`; merged copy+patterns fixture comparison; required expected JSON completeness | `1bf7a69e` | Missing | Underlying files are absent, so none of the later T3 fixes are present. |
| Rollout-only follow-up | `tools/lib/copy-governance/line-scope.js`, `pattern-scope-ignores.mdx`, pilot baseline/tuned reports | `74473da4` | Missing | None of the rollout tuning artifacts are on branch. |

## Current `docs-v2-dev` Findings

### 1. Core reference and script layer

Missing entirely from the branch ref:

- `tools/lib/copy-governance/banned-words.txt`
- `tools/lib/copy-governance/banned-phrases.txt`
- `ai-tools/ai-skills/docs-copy/reference/banned-words.txt`
- `ai-tools/ai-skills/docs-copy/reference/banned-phrases.txt`
- `tools/scripts/lint-copy.js`
- `tools/scripts/lint-structure.js`
- `tools/scripts/lint-patterns.js`
- `tools/scripts/pattern-observer.js`

Implication:

The copy-framework has no runnable enforcement layer on `docs-v2-dev`.

### 2. Test and fixture layer

Missing entirely from the branch ref:

- `tests/unit/copy-lint.test.js`
- `tests/copy-lint-fixtures/fixtures/pass/**`
- `tests/copy-lint-fixtures/fixtures/fail/**`
- `tests/copy-lint-fixtures/expected/**`

Structural integration is also absent:

- `tests/run-all.js` contains no `copy-lint` / `copyLint` registration
- `tests/run-pr-checks.js` contains no `copy-lint` / `copyLint` registration

Implication:

The T3 fixture suite never landed on `docs-v2-dev`, and branch validation cannot currently exercise copy-framework rules.

### 3. Docs-copy package docs

Present on branch:

- `ai-tools/ai-skills/docs-copy/SKILL.md`

Missing on branch:

- `ai-tools/ai-skills/docs-copy/README.md`
- `ai-tools/ai-skills/docs-copy/reference/invocation-guide.md`
- `ai-tools/ai-skills/docs-copy/skills/copy-rules.md`
- `ai-tools/ai-skills/docs-copy/skills/structure-rules.md`
- `ai-tools/ai-skills/docs-copy/skills/value-prop-check.md`
- `ai-tools/ai-skills/docs-copy/skills/persona-routing.md`
- `ai-tools/ai-skills/docs-copy/skills/review-gate.md`
- `ai-tools/ai-skills/docs-copy/skills/iteration-diagnostic.md`
- `ai-tools/ai-skills/docs-copy/skills/pattern-observer.md`
- `ai-tools/ai-skills/docs-copy/skills/skill-docs.md`

Classification:

- `SKILL.md` is present via separate commit `e602e725 feat(docs-copy): add skill and pack bundles`
- this is overlapping evidence, not proof that the original copy-framework Commit 4 fully landed

### 4. Brief template and PR template integration

Missing:

- `docs-guide/tooling/content-brief-template.md`

Current PR template state:

- `.github/pull_request_template.md` still contains the generic sections `Description`, `Scope`, `Validation`, `Follow-up Tasks`, `Type of Change`, `Testing`, `Checklist`
- no explicit L5 copy-framework checklist integration is present

Implication:

The documentation/process surface of the copy-framework did not land.

### 5. Report directory and rollout extras

Missing:

- `tasks/reports/copy-governance/.gitkeep`
- pilot baseline report
- pilot tuned comparison report
- `tools/lib/copy-governance/line-scope.js`
- `tests/copy-lint-fixtures/fixtures/pass/pattern-scope-ignores.mdx`

Implication:

Neither the original report directory nor the later rollout tuning/reporting artifacts are on branch.

## What Still Needs To Land From This Thread

### Required to satisfy the original copy-framework task

1. **Reference files**
   - land the banned word/phrase lists under `tools/lib/copy-governance/`
   - land the mirrored copies under `ai-tools/ai-skills/docs-copy/reference/`

2. **Core lint scripts**
   - land `lint-copy.js`, `lint-structure.js`, `lint-patterns.js`, `pattern-observer.js`

3. **T3 test suite**
   - land `tests/unit/copy-lint.test.js`
   - land the full `tests/copy-lint-fixtures/` tree
   - wire `copy-lint` into `tests/run-all.js`
   - wire `copy-lint` into `tests/run-pr-checks.js`

4. **Docs-copy package docs**
   - land `README.md`
   - land `reference/invocation-guide.md`
   - land the `skills/*` guidance files
   - keep the already-present `SKILL.md`

5. **Brief template and PR checklist integration**
   - land `docs-guide/tooling/content-brief-template.md`
   - integrate the L5 checklist into `.github/pull_request_template.md`

6. **Report directory**
   - land `tasks/reports/copy-governance/.gitkeep`

7. **T3 correctness fixes on top of the above**
   - apply phrase-first dedupe in `lint-copy.js`
   - require merged `lint-copy + lint-patterns` fixture comparison in `copy-lint.test.js`
   - land `expected/conditional-if.json`
   - land `expected/not-construction.json`
   - ensure `banned-phrases.json` reflects deduped output rather than double-counting

### Rollout-only extras from later work

These are not part of the original must-land core, but were produced later in this thread:

- `tools/lib/copy-governance/line-scope.js`
- `tests/copy-lint-fixtures/fixtures/pass/pattern-scope-ignores.mdx`
- `tasks/reports/copy-governance/2026-03-16-orchestrators-guides-copy-pilot-baseline.md`
- `tasks/reports/copy-governance/2026-03-16-orchestrators-guides-copy-pilot-tuned-comparison.md`
- scope-tuning changes inside `lint-copy.js`, `lint-patterns.js`, and `pattern-observer.js`

## Recommended Landing Order

Strictly for copy-framework only:

1. Land the original core sequence:
   - `479ab394`
   - `04319c91`
   - `119a406e`
   - `ac4f576a`
   - `3cc97b7f`
   - `4076d04c`
2. Immediately apply the T3 correctness fix layer from `1bf7a69e`
3. Only after the core is on-branch, decide whether to land the rollout-only tuning/reporting layer from `74473da4`

## Out of Scope for This Audit

Explicitly excluded from this report:

- page-fix or live copy remediation on orchestrator pages
- agent-governance/runtime-adapter work except where it overlaps the copy-framework artifact set
- unrelated docs-v2-dev working-tree changes
