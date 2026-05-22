# Agent Implementation Prompt Guide
**Livepeer Docs Copy Framework — Codex Task**
**Version 1.0 — March 2026**

---

## Before running: manual checks

Complete these before handing to the agent. Failures here will cause the
agent to either overwrite existing content or place files in wrong locations.

**Check 1 — PR template**
Run: `git show docs-v2:.github/pull_request_template.md`
- Exists → agent must APPEND the L5 block, not overwrite
- Does not exist → agent creates the file

**Check 2 — Brief template location**
Confirm the correct path for `content-brief-template.md` with Rick.
Likely `tools/templates/content-brief-template.md` but unconfirmed.
Placeholder `[CONFIRM PATH]` is used in the prompt below — replace before running.

**Check 3 — CI workflow**
Run: `git show docs-v2:.github/workflows/lint-copy.yml`
- Exists → agent must update, not create
- Does not exist → agent creates the file

**Check 4 — ai-tools/ai-skills directory**
Run: `git show docs-v2:ai-tools/ai-skills/`
- Confirm the `docs-copy/` subdirectory does not already exist to avoid
  partial overwrites of any prior skill work

---

## Documents to attach

Provide all five documents to the agent in full:

| Document | Contents |
|---|---|
| Doc 7 | Phase 1: brief template, banned reference files, `lint-copy.js`, PR checklist |
| Doc 9 | Phase 2: `lint-structure.js`, three SKILL.md files, CI workflow |
| Doc 8 | Phase 3: `lint-patterns.js`, `pattern-observer.js`, two SKILL.md files |
| Doc 11 | Root `SKILL.md`, `review-gate.md`, `copy-rules.md`, `invocation-guide.md` |
| Doc 10 | Test suite: `run-all.js`, all fixtures, all expected JSON files |

---

## The prompt

```
Base branch: docs-v2
Pull docs-v2 before creating any files.

---

TASK: Create the copy governance framework files as specified in the
attached documents. Do not modify content. Do not merge files.
One file per path, exactly as written in the source document.

---

STEP 0 — VERIFY BEFORE CREATING ANYTHING

1. Confirm docs-v2 is current.

2. Check whether .github/pull_request_template.md exists.
   - EXISTS: append the L5 checklist block from Doc 7 to the end of the
     existing file. Do not overwrite or remove existing content.
   - DOES NOT EXIST: create the file with the full contents from Doc 7.

3. Check whether .github/workflows/lint-copy.yml exists.
   - EXISTS: replace it with the updated workflow from Doc 9 (P2-E).
   - DOES NOT EXIST: create it from Doc 9 (P2-E).

4. Confirm ai-tools/ai-skills/docs-copy/ does not already contain files.
   If it does, stop and report before proceeding.

If any Step 0 check produces an unexpected result, stop and report.
Do not proceed until resolved.

---

COMMIT 1 — Reference files (must exist before scripts run)

tools/scripts/lib/banned-words.txt
  → Full content from Doc 7, P1-B, "Reference File 1"

tools/scripts/lib/banned-phrases.txt
  → Full content from Doc 7, P1-B, "Reference File 2"

ai-tools/ai-skills/docs-copy/reference/banned-words.txt
  → Same content as tools/scripts/lib/banned-words.txt

ai-tools/ai-skills/docs-copy/reference/banned-phrases.txt
  → Same content as tools/scripts/lib/banned-phrases.txt

Commit message: "feat(copy-framework): add banned word and phrase reference files"

---

COMMIT 2 — Scripts

tools/scripts/lint-copy.js
  → Full file from Doc 7, P1-B

tools/scripts/lint-structure.js
  → Full file from Doc 9, P2-D

tools/scripts/lint-patterns.js
  → Full file from Doc 8, P3-A

tools/scripts/pattern-observer.js
  → Full file from Doc 8, P3-B

Commit message: "feat(copy-framework): add lint scripts"

---

COMMIT 3 — Tests

tests/copy-lint/run-all.js
  → Full file from Doc 10

tests/copy-lint/fixtures/pass/clean-guide.mdx
tests/copy-lint/fixtures/pass/clean-reference.mdx
tests/copy-lint/fixtures/pass/clean-concept.mdx
  → Full fixture contents from Doc 10

tests/copy-lint/fixtures/fail/banned-words.mdx
tests/copy-lint/fixtures/fail/banned-phrases.mdx
tests/copy-lint/fixtures/fail/review-flag.mdx
tests/copy-lint/fixtures/fail/currency.mdx
tests/copy-lint/fixtures/fail/empty-table-cell.mdx
tests/copy-lint/fixtures/fail/missing-frontmatter.mdx
tests/copy-lint/fixtures/fail/accordion-url-only.mdx
tests/copy-lint/fixtures/fail/hedge-note.mdx
tests/copy-lint/fixtures/fail/conditional-if.mdx
tests/copy-lint/fixtures/fail/not-construction.mdx
  → Full fixture contents from Doc 10

tests/copy-lint/expected/banned-words.json
tests/copy-lint/expected/banned-phrases.json
tests/copy-lint/expected/review-flag.json
tests/copy-lint/expected/currency.json
tests/copy-lint/expected/empty-table-cell.json
tests/copy-lint/expected/missing-frontmatter.json
tests/copy-lint/expected/accordion-url-only.json
tests/copy-lint/expected/hedge-note.json
  → Full JSON contents from Doc 10

Commit message: "feat(copy-framework): add test suite with fixtures"

---

COMMIT 4 — SKILL.md files

ai-tools/ai-skills/docs-copy/SKILL.md
  → Full file from Doc 11, "Root: SKILL.md"

ai-tools/ai-skills/docs-copy/skills/copy-rules.md
  → Full file from Doc 11 (copy-rules section)
  Note: this file imports from reference/banned-words.txt and
  reference/banned-phrases.txt committed in Commit 1.

ai-tools/ai-skills/docs-copy/skills/structure-rules.md
  → Full file from Doc 9, P2-A

ai-tools/ai-skills/docs-copy/skills/value-prop-check.md
  → Full file from Doc 9, P2-B

ai-tools/ai-skills/docs-copy/skills/persona-routing.md
  → Full file from Doc 9, P2-C

ai-tools/ai-skills/docs-copy/skills/review-gate.md
  → Full file from Doc 11, "review-gate.md — L5 SKILL"

ai-tools/ai-skills/docs-copy/skills/iteration-diagnostic.md
  → Full file from Doc 8, P3-C

ai-tools/ai-skills/docs-copy/skills/pattern-observer.md
  → Full file from Doc 8, P3-D

ai-tools/ai-skills/docs-copy/reference/invocation-guide.md
  → Full file from Doc 11, "invocation-guide.md"

Commit message: "feat(copy-framework): add SKILL.md files"

---

COMMIT 5 — Brief template and PR checklist

[CONFIRM PATH]/content-brief-template.md
  → Full template from Doc 7, P1-A

.github/pull_request_template.md
  → APPEND or CREATE per Step 0 check 2 above
  → L5 checklist content from Doc 7, P1-D

.github/workflows/lint-copy.yml
  → UPDATE or CREATE per Step 0 check 3 above
  → Full workflow from Doc 9, P2-E

Commit message: "feat(copy-framework): add brief template, PR checklist, CI workflow"

---

VERIFICATION AFTER ALL COMMITS

Run the following and report output:
  node tools/scripts/lint-copy.js tests/copy-lint/fixtures/pass/clean-guide.mdx
  node tools/scripts/lint-copy.js tests/copy-lint/fixtures/fail/banned-words.mdx
  node tests/copy-lint/run-all.js

Expected:
  - clean-guide.mdx → zero errors
  - banned-words.mdx → 4 BANNED_WORD errors, exit code 0 (--warn-only implied)
  - run-all.js → all tests pass, exit code 0

If run-all.js fails: report which fixtures failed and the diff between
expected and actual error IDs. Do not attempt to fix script logic —
report the failure for human review.

---

FORBIDDEN

- Do not modify any existing .mdx content files in v2/
- Do not modify docs.json
- Do not modify navigation-exclusions.json
- Do not modify the .allowlist file
- Do not merge content from multiple source documents into a single file
- Do not reformat or rewrite any file contents
```

---

## Adding new items after deployment

**New banned word or phrase:**
1. Add one line to `tools/scripts/lib/banned-words.txt` or `banned-phrases.txt`
2. Mirror the addition to `ai-tools/ai-skills/docs-copy/reference/` equivalent
3. Add a fail fixture with the new word/phrase
4. Add an expected JSON file for it
5. Run `node tests/copy-lint/run-all.js` to confirm

**New Tier 2 pattern:**
1. Add a pattern object to the `PATTERNS` array in `lint-patterns.js`
2. Add a fail fixture
3. Add expected JSON
4. Run the test suite

No other files require changes. Both scripts import from the reference
files at runtime — there is no compilation or build step.
