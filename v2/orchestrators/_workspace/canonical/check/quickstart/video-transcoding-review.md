# Check Report Review — `video-transcoding.md`

**Reviewer:** Critical review agent
**Date:** 2026-03-24
**Subject report:** `v2/orchestrators/_workspace/canonical/check/quickstart/video-transcoding.md`
**Page reviewed:** `v2/orchestrators/quickstart/video-transcoding.mdx`
**Framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Process issue — schema rule without sufficient citation
**Location in report:** Category 1, check 1.3 (`pageVariant` absent)
**What's wrong:** The report raises 1.3 as a separate HIGH finding with its own section, but it is a direct consequence of the 1.2 migration. checks.mdx §1.2 already states "When migrating a deprecated value, also set `pageVariant`" — the need for `pageVariant` follows automatically from the 1.2 finding and is not an independent defect. More critically, listing it as a separate FAIL in the Frontmatter Table (row `pageVariant: absent — FAIL — required when migrating from deprecated type`) double-counts a single root cause. The Cross-Category Connections table also logs it separately from 1.2. This inflates the apparent FAIL count.
**What should have been said/done:** Merge 1.3 into the 1.2 finding as a required co-fix. Remove the standalone `pageVariant` row FAIL from the Frontmatter Table, or cross-reference 1.2 explicitly. Do not log the same fix twice in the Cross-Category Connections table.

---

### Issue 2
**Type:** Process issue — Frontmatter Table schema does not match checks.mdx format
**Location in report:** Frontmatter Table (lines 11–27)
**What's wrong:** checks.mdx §MANDATORY REPORT FORMAT (line 402) specifies the Frontmatter Table must have five columns: `Field | Present? | Value | Pass/Fail | Notes`. The report uses a three-column format: `Field | Value (as written) | Status`. The `Present?` column is missing as a distinct field. The `Status` column conflates Pass/Fail and Notes into a single cell. This means the report does not match the mandatory format defined in the framework it is supposed to be applying.
**What should have been said/done:** Use the five-column schema exactly: Field / Present? / Value (as written) / Pass/Fail / Notes. The current format does not prevent acting on findings, but it is a process non-compliance that would fail a format audit.

---

### Issue 3
**Type:** Process issue — Banned Construction Scan incomplete per framework
**Location in report:** Banned Construction Scan table (lines 606–619)
**What's wrong:** checks.mdx (lines 417–424) requires the Banned Construction Scan table to "list every sentence containing `can`, `may`, `could`, `might`, `should`, plus every `if [condition]` construction and every `not [X]` statement" and to "show the work: list every candidate match considered, even when the result is PASS. A PASS with no candidates listed is not verifiable." The report's scan table includes only four flagged items and does not list the full set of candidates considered. For example:
- Line 56 (inside `<TableCell>`): `"Required only if enabling GPU transcoding"` — contains `if`, not listed.
- Line 141: `"Your orchestrator should appear in the Livepeer Explorer"` — contains `should`, not listed.
These may well be PASS (procedural conditionals / acceptable constructions), but the framework requires they be listed and classified, not silently omitted. The table cannot be verified as complete.
**What should have been said/done:** List all candidate matches. Classify each as `value-claim` / `procedural` / `conditional caveat` / `rhetorical` / `BORDERLINE`. For line 56 and line 141 at minimum, add rows and mark them PASS with classification — this is sufficient. Do not omit candidates that were checked and passed.

---

### Issue 4
**Type:** False positive — severity miscalibration on `pageVariant` absent
**Location in report:** Check 1.3, Frontmatter Table row
**What's wrong:** The report assigns `pageVariant` absent as HIGH severity independent of 1.2. Given that `pageType: quickstart` has not yet been migrated, `pageVariant` being absent is expected — the field is only required after the 1.2 migration is applied. Calling it HIGH before the parent migration is executed misrepresents the dependency. The real severity is that it is a co-fix to 1.2 (CRITICAL), not a standalone HIGH.
**What should have been said/done:** Mark as "required co-fix with 1.2" rather than an independent HIGH finding. Once 1.2 is actioned, 1.3 is resolved simultaneously.

---

### Issue 5
**Type:** False positive — 5.2 flagging `instruction` template requirements against a page not yet migrated
**Location in report:** Check 5.2 (Required sections)
**What's wrong:** Check 5.2 flags that the page lacks a "Next Steps" section, citing the `instruction`/quickstart template requirement. But the report itself notes this is "conditional on pageType migration" in §5.1. The page's current `pageType` is `quickstart` (a deprecated value), not `instruction`. The `instruction` template requirements do not currently apply. The report is evaluating the page against a schema it does not yet have.
**What should have been said/done:** Either evaluate the page against the current (deprecated) `quickstart` type's requirements if those are documented, or mark the finding explicitly as "pending pageType migration — will apply once 1.2 is resolved." Do not assign MEDIUM severity to a template gap that is conditional on a separate migration decision.

---

### Issue 6
**Type:** False positive — `../resources/cli-flags` path resolution
**Location in report:** Check 8.1, `../resources/cli-flags` path entry
**What's wrong:** The report rates this HIGH and states the path resolves to `v2/orchestrators/resources/cli-flags.mdx` which does not exist. This is factually correct about the file not existing at `resources/cli-flags.mdx`. However, checks.mdx (line 493) states: "A link target present in `docs.json` is not broken — verify before flagging." The report does not confirm whether `v2/orchestrators/resources/cli-flags` or `v2/orchestrators/resources/technical/cli-flags` appears in docs.json. The file at `v2/orchestrators/resources/technical/cli-flags.mdx` exists (confirmed via file system). The severity and fix are directionally correct, but the verification step against docs.json was skipped, leaving the finding technically incomplete per framework rules.
**What should have been said/done:** Confirm the docs.json entry (or absence of one) for both paths before assigning severity. The fix proposed (`href="../resources/technical/cli-flags"`) is correct, but the finding should cite the docs.json line that confirms the correct path rather than relying on file system resolution alone.

---

### Issue 7
**Type:** Missed finding — `Related pages` heading capitalisation inconsistency with exempt heading rule
**Location in report:** Check 3.2 Banned terms check / Spelling check
**What's wrong:** The actual heading on line 167 of the page is `## Related pages` (lowercase "pages"). checks.mdx §3.1 and §3.2 grant an exemption to the `Related Pages` heading by that exact name. The heading on the page uses lowercase "pages", not "Pages". The report correctly identifies the heading as exempt and does not flag it for the heading scoring rubric — that part is right. However, the Spelling check section lists it as "no typo" without noting the capitalisation inconsistency between the heading on the page (`Related pages`) and the canonical exempt form named in checks.mdx (`Related Pages`). Whether this matters depends on whether the exemption applies to the lowercase variant — this should have been flagged for clarification, not silently passed.
**What should have been said/done:** Note the capitalisation difference between the page's `Related pages` and the canonically named exempt heading `Related Pages`. Flag as INFO: confirm whether the exemption applies to both cases or only to title-case. Do not silently pass.

---

### Issue 8
**Type:** Vague fix
**Location in report:** Check 1.12 (OG image block incomplete)
**What's wrong:** The fix states "add the standard OG block (consult site-wide OG block pattern for exact fields)." This is not executable per checks.mdx reporting rules (line 469): "Fixes must be executable. No 'add appropriate X'. No 'or as appropriate'. Specify the exact value, line, or action. Another agent must be able to execute the fix with zero additional context." The fix does not name the 5 fields, their values, or where to find the pattern. An agent cannot execute this without additional research.
**What should have been said/done:** Either provide the exact 5 OG fields with correct values (or REVIEW placeholders for page-specific values), or at minimum specify the source file where the site-wide OG block pattern lives (e.g., "copy from `v2/orchestrators/quickstart/guide.mdx` frontmatter OG block"). "Consult site-wide OG block pattern" is not an address.

---

### Issue 9
**Type:** Missed finding — missing checks from the mandatory format
**Location in report:** Categories 1–9
**What's wrong:** checks.mdx §MANDATORY REPORT FORMAT states "every check appears as PASS, FAIL, or N/A with reason — nothing silently skipped." Several numbered checks are entirely absent from the report with no N/A entry:
- 1.9 (`industry` valid) — listed as "Missing (optional)" in the Frontmatter Table but no Category 1 section for check 1.9
- 1.10 (`niche` valid) — same
- 2.6 (paragraph discipline) — no entry
- 2.7 (audience register) — no entry
- 2.8 (per-audience prohibited phrases) — no entry
- 3.3 (no literal contrast labels) — no entry (the "Testing end-to-end with a Gateway" heading is discussed under 3.1 but the 3.3 check is not explicitly evaluated)
- 3.4 (domain-anchor rule) — no entry
- 3.5 (heading names concept not examples) — no entry
- 3.7 (sounds like expert editorial choice) — no entry
- 4.6 (out-of-scope clear) — no entry
- 4.7 (information type per section correct) — no entry
- 4.9 and 4.10 (section-level / tab-level checks) — no entry even as N/A
- 6.5 (REVIEW flags for unverified claims) — handled in 6.2 narrative but no standalone check entry
- 6.7 (authoritative vs AI-generated glossary) — no entry
- 6.9 (no open-ended research tasks) — no entry
- 9.2 (decisions in registry) — no entry
- 9.4 (phase ordering) — no entry
- 9.5 and 9.6 — no entries
**What should have been said/done:** Every skipped check must appear as `N/A — [reason]` or `PASS`. Silently omitting checks makes the report non-verifiable. The most critical omission is 2.8 (per-audience prohibited phrases for orchestrator audience) and 3.3 (literal contrast label check, which the "Testing end-to-end with a Gateway" heading may affect).

---

### Issue 10
**Type:** Severity miscalibration — `livepeer_cli -cmd status` flagged as HIGH in veracity table
**Location in report:** Check 6.1 veracity claims table, line 431
**What's wrong:** The report flags `livepeer_cli -cmd status` (line 138) as HIGH risk with the note "verify `cmd` syntax is current." Looking at the actual page content (line 138): `livepeer_cli -cmd status` — this is a non-standard CLI invocation. The standard Livepeer CLI invocation documented elsewhere is `livepeer_cli` alone (interactive) or with documented subcommands. The `-cmd` flag format is unusual and the risk of this being wrong is real. However, the report assigns HIGH to this and also assigns HIGH to the docker image tag (`master`) and the pricing flag defaults. The `livepeer_cli -cmd status` issue is arguably more critical (it's a fundamental syntax question for the primary verification step) than the pricing defaults. The severity grouping is inconsistent — this should be CRITICAL if the verify-step command itself is unverified, not HIGH.
**What should have been said/done:** Escalate `livepeer_cli -cmd status` to CRITICAL if this is the page's primary verification command and the flag syntax is unverified. A reader who cannot run the verify step cannot confirm the setup worked.

---

### Issue 11
**Type:** False positive — check 4.3 adjacency finding is incompletely reasoned
**Location in report:** Check 4.3 (PREV/NEXT adjacency)
**What's wrong:** The report identifies that the page's "Related Pages" cards do not link to `tutorial` (the NEXT page) and flags this as MEDIUM. This finding is directionally reasonable. However, the report then also says "Cannot confirm without reading `guide.mdx`" for the PREV page — meaning the adjacency check is incomplete. checks.mdx (line 495) states: "Check 4.3 requires reading `docs.json` to confirm the sequence. State the specific docs.json lines consulted." The report does state the docs.json lines (2850–2853) — that part is correct. But the `guide.mdx` was not read, so the PREV direction is marked "cannot confirm." The framework does not permit leaving a check half-done. The report should either read `guide.mdx` to complete the check or explicitly mark the PREV direction as NOT-TESTED.
**What should have been said/done:** Mark the PREV direction as NOT-TESTED with reason "guide.mdx not read." Do not state "cannot confirm" and proceed — the check is either complete or explicitly NOT-TESTED.

---

### Issue 12
**Type:** Missed finding — `2.3` banned phrase check misses `"once X is stable"` pattern analogue
**Location in report:** Check 2.3 (Banned phrases scan)
**What's wrong:** The report gives check 2.3 a PASS and does not list any candidates. However, the banned phrases list in checks.mdx §2.3 includes `"once X is stable"` as a banned pattern. Line 145 of the page reads: `"Once both services are running, verify an end-to-end transcoding session."` — The word "Once" at the start of a conditional sentence is directly analogous to `"once X is stable"`. The report catches this under check 2.4 ("Once" as a temporal gate construction), which is correct. But check 2.3 should have been evaluated first and this line should appear in the 2.3 banned-phrase scan before being captured under 2.4. The 2.3 PASS with no candidates listed is a process violation and the "once" pattern belongs in 2.3 as well as 2.4.
**What should have been said/done:** In check 2.3, list line 145 as a candidate match for `"once X is stable"` pattern. Mark it as already flagged in 2.4 and cross-reference. Do not give a 2.3 PASS with no candidates — the framework explicitly requires showing the work.

---

### Issue 13
**Type:** Vague fix — check 6.3 (`go-livepeer:master`)
**Location in report:** Check 6.3 (Deprecated API usage)
**What's wrong:** The fix states: "Replace with `image: livepeer/go-livepeer:<LATEST_STABLE_TAG>` and add a note that the latest release tag can be found at the go-livepeer GitHub releases page." Using `<LATEST_STABLE_TAG>` as a literal placeholder is itself a vague fix — it tells the executor they need to find the tag but does not provide it. Per checks.mdx reporting rules, the fix must be executable without additional context, or the unresolved element must be labelled as a REVIEW placeholder in the correct format: `{/* REVIEW: go-livepeer latest stable tag — verify at https://github.com/livepeer/go-livepeer/releases before inserting */}`. The fix as written produces a non-functional docker-compose.yml if applied literally.
**What should have been said/done:** Either provide the actual current tag (requires SME input — list as a blocking item requiring SME input) or format the placeholder correctly as a REVIEW marker, not as a placeholder in the fix text itself. Mark this as blocked on B-4 (already listed in the Blocking Decisions table) and remove the vague `<LATEST_STABLE_TAG>` substitution string from the fix.

---

## Summary Verdict

The report is substantive and its core findings are factually accurate where I can verify them: the broken import path (`/snippets/pages/08_SHARED/` does not exist; the file is at `/snippets/composables/pages/shared/eth-account-setup.mdx`), the two dead card links (`../concepts/job-types` — no `job-types.mdx` in `v2/orchestrators/concepts/`; `/v2/orchestrators/setup/install-go-livepeer` — no such file; nearest equivalent is at `v2/orchestrators/setup/rs-install.mdx`), the `../resources/cli-flags` path (correct file is `v2/orchestrators/resources/technical/cli-flags.mdx`), and the deprecated `pageType: quickstart` are all real and correctly identified. The docs.json nav sequence (lines 2850–2853) is correctly cited. The gateway-setup link is confirmed valid.

However, the report has 13 issues: three vague fixes (1.12 OG block, 6.3 docker tag), three process non-compliances (Frontmatter Table schema wrong format, Banned Construction Scan incomplete, mandatory checks silently omitted — this is the most significant process failure), two false positives arising from evaluating post-migration requirements before migration is applied (1.3 and 5.2), double-counting of a single root cause (1.2/1.3), one severity miscalibration (`livepeer_cli -cmd status` should be CRITICAL not HIGH), one incomplete adjacency check (4.3 PREV direction), and two missed findings (2.3 candidates not shown, `Related pages` capitalisation vs canonical exempt form).

**Findings safe to act on as-is:**

- 5.6 / 8.3: Broken `EthAccountSetup` import — confirmed CRITICAL. Fix path is correct.
- 8.1 (`../concepts/job-types`): Dead link — confirmed. `job-types.mdx` does not exist in `v2/orchestrators/concepts/`. Fix: update or remove card.
- 8.1 (`/v2/orchestrators/setup/install-go-livepeer`): Dead link — confirmed. Nearest file is `v2/orchestrators/setup/rs-install.mdx`. Fix is directionally correct; "Connect to Arbitrum" target still needs a human decision.
- 8.1 (`../resources/cli-flags`): Incorrect path — confirmed. Correct path is `../resources/technical/cli-flags`.
- 1.2 + 1.3 (combined): `pageType: quickstart` deprecated, migrate to `instruction` + `pageVariant: quickstart`. Treat as one fix.
- 1.4, 1.6, 1.7, 1.8: Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` — confirmed missing. Proposed values are reasonable; still require Alison sign-off per the project rules.
- 2.3 / 2.5 (opener): Self-referential opener at line 22 — confirmed real. Fix is clear.
- 2.4 (line 95 `if` construction): Real finding, fix is executable.
- 6.8 (`blockRewardCut`/`feeShare`): Presenting illustrative values without caveat — real risk. Fix is reasonable direction but needs SME input on whether an INFO callout is the right component.
- Blocking decisions B-1 through B-6: All legitimate human-decision items.

**Findings that need revision before acting:**

- 1.12 (OG block fix): Not executable — needs exact field list or source file reference.
- 5.2 (Next Steps section): Do not action independently of the 1.2 migration.
- 6.3 docker tag fix: Replace `<LATEST_STABLE_TAG>` with a proper REVIEW placeholder; action blocked on B-4.
- 4.3 PREV adjacency: Mark NOT-TESTED until `guide.mdx` is read.
