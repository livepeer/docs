# Pack Guide — Phase 7: Veracity Pass

**Version**: 1.0 — 2026-03-23
**Prompt file**: `veracity-pass.md` (this directory)
**Framework**: `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` (must be LOCKED before running)
**Source library**: `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md`

Read this guide before loading `veracity-pass.md`. The pre-flight steps below are not optional.

---

## When to Run This Pack

### Prerequisites (ALL must be true before this pack runs)

1. **`veracity.md` is LOCKED** — status must read `LOCKED`, not `DRAFT`. Do not run the veracity pass against an unlocked framework. The confidence scoring matrix and auto-resolve rules depend on the locked definitions.

2. **The target page has passed Phase 6** — content-pass.md WRITE or REWRITE mode is complete. The page content is approved. Veracity markers on draft or in-flux content are wasted work.

3. **Phase 8 (naming audit) has completed for this page** — this is critical. Phase 8 may rename sections. Veracity markers are placed by section title context. If section titles change after markers are placed, the markers become orphaned — they appear in the MDX but no longer refer to an identifiable section. Phase 8 must run first, always.

4. **Tab terminology is locked** (Phase 3.5 complete) — or explicitly noted as not yet run. If terminology is unlocked, note this and proceed with caution; some terminology claims may shift after lock.

5. **veracity-library.md is accessible** — the 45-source library must be loaded in context, not recalled from memory. Source tier, update frequency, and staleness risk values must come from the file.

---

## Running Order (Per Page)

Follow this order. Do not skip or reorder steps.

### Step 1: Lock veracity.md (one-time, not per page)

If `veracity.md` is still in DRAFT status:
- Read the file
- Remove DRAFT status header
- Add `Status: LOCKED` and `Version: [date]`
- Make no other changes — locking means the structure is final, not rewriting content
- Human must review and confirm the lock before production runs begin

This step runs once for the project. After it is locked, step 1 is complete for all subsequent pages.

### Step 2: Claim-type analysis review (one-time, not per page)

The Claim-Type Coverage Analysis in `veracity-pass.md` documents the design decisions that shaped the prompt. Before the first production run:
- Human reads the coverage table and the four gap items
- Confirms the gap handling is acceptable (or flags corrections)
- Signs off that the claim-type classification is correct for the content being verified

This step runs once per tab (or once per project if claim types are consistent across tabs). It does not re-run per page.

### Step 3: Load context and run the prompt

For each page:
- Fill the Context Block in `veracity-pass.md` (all fields required)
- Load into context: the page file, veracity-library.md, veracity.md, docs.json, and tab terminology lock
- Run the full prompt (Phase 1 through Phase 6) without interruption
- Do not run in partial mode — a partial veracity pass that sets `veracityStatus` without completing all phases is worse than no pass

### Step 4: Human approval of agent output

After each run, human reviews:
- The Phase 6 Summary (section-level confidence breakdown)
- Every REVIEW marker placed — confirm placement is before the block, not inline
- Governance flags — confirm every governance-controlled value has a REVIEW marker (CRITICAL check)
- `veracityStatus` in frontmatter — confirm it reflects the worst-case section result

See "Human Checkpoint" section below for the specific checklist.

### Step 5: Test runs (required before production)

Before running on production content, complete 3 test runs. See "Test Run Instructions" section below.

### Step 6: Human approval of test run results

After all 3 test runs:
- Review clearance rates (target: ≥90% auto-cleared or clearly flagged)
- Confirm governance values were NEVER auto-resolved across all 3 runs
- Confirm REVIEW markers are all correctly placed (before blocks, not inline)
- Confirm `veracityStatus` values are correct for each test page
- Sign off before production runs begin

### Step 7: Production runs

Run on approved Phase 6 + Phase 8 content. One agent per page is acceptable. Multiple pages can run in parallel (no page is a dependency for another's veracity pass).

---

## Test Run Instructions

### Test page selection criteria

Select 3 pages from `v2/gateways/` that together cover all high-risk claim types:

- **Page 1**: Must contain CLI flag claims (names, defaults, descriptions). Recommended: `v2/gateways/resources/go-livepeer/cli-reference.mdx` or similar. Tests cli-sdk category handling.

- **Page 2**: Must contain governance-controlled values. Any page that references: unbonding period, inflation rate, target bonding rate, active set size, or treasury parameters. Tests the CRITICAL governance NEVER-auto-resolve rule.

- **Page 3**: Must be a mixed-type page — contains at least 3 different information types across sections (e.g. a guide with a narrative intro, conceptual background, procedural steps, and a technical code block). Tests Phase 5 (mixed-type page handling) and Phase 6 (worst-case status derivation).

### What to verify in each test run

For each test run output, check:

1. The Phase 6 Summary exists and is complete
2. The section map accurately identified information types (spot-check 3 sections per page)
3. Governance-controlled values are flagged — none were auto-resolved
4. CLI flag defaults are either auto-resolved with a source note or flagged with a version pin
5. REVIEW markers are placed before blocks, not inline in prose
6. `veracityStatus` in frontmatter matches the worst-case section
7. The Phase 6 "Open Items for Human" list is specific — each item names a claim and a source to check

### Acceptable test run output

- Phase 6 Summary present and complete
- Section map matches content structure
- Zero governance-controlled values auto-resolved
- All REVIEW markers syntactically valid MDX comments
- `veracityStatus` set correctly
- Open items list is actionable (each item checkable in under 2 minutes by a human)

---

## What Good Output Looks Like

A good veracity pass run produces:

1. **A complete Phase 6 Summary** at the end of the output — section breakdown, REVIEW count, auto-resolved count, governance flag count, worst-case status.

2. **REVIEW markers that are actionable** — each one names a specific claim and a specific source to check. Bad: `{/* REVIEW: check this */}`. Good: `{/* REVIEW: default value of -maxSessions is stated as 10 — verify against current go-livepeer release at: https://github.com/livepeer/go-livepeer */}`

3. **Governance values always flagged** — on a page with any governance-controlled parameter, the governance flag count in the summary is non-zero.

4. **Correct `veracityStatus` in frontmatter** — for most pages with any governance, contract, or economic claims, this will be `unverified`. A page returning `verified` on first pass should be questioned — it probably missed some claims.

5. **No changes to prose content** — the only mutations are (a) REVIEW markers added before blocks and (b) `veracityStatus` set in frontmatter. If the agent has rewritten sentences, changed terminology, or altered structure, that is a scope violation.

---

## What Bad Output Looks Like

Reject and re-run if any of the following appear:

| Issue | Severity | Action |
|---|---|---|
| Governance-controlled value (inflation rate, unbonding period, bonding target, active set size, treasury params) has no REVIEW marker | CRITICAL | Reject run. Governance values must ALWAYS be flagged. Investigate why the agent treated this as auto-resolvable. |
| REVIEW marker appears mid-sentence or mid-paragraph (inline) | HIGH | Reject run. Markers must appear on their own line immediately before the flagged block. MDX comment placement inside prose creates rendering risk. |
| `veracityStatus` not updated in frontmatter | HIGH | Reject run. The publication gate depends on this field being current. |
| Phase 6 Summary is missing or incomplete | HIGH | Reject run. Without the summary, human review cannot be efficient. |
| Agent rewrote prose content | HIGH | Reject run. Veracity pass is markers-only. Content changes belong in Phase 6 (content-pass REWRITE mode). |
| No REVIEW markers on a page that contains protocol parameter claims | MEDIUM | Investigate. Either the page genuinely has no specific protocol parameters (possible for a pure narrative page) or the agent missed claims. Check manually. |
| "Open Items for Human" list contains vague items ("check accuracy of this section") | MEDIUM | Note for prompt improvement. Vague items mean the agent could not identify the specific source — this is a coverage gap to record. |
| `veracityStatus: verified` set on first pass for a page with economic or governance claims | MEDIUM | Flag for human review. First-pass verified status is only valid for pure conceptual/narrative pages with no specific parameter claims. |

---

## Known Failure Modes

These are documented failure modes for this pass. The prompt guards against them, but human checkpoints are the backstop.

### 1. Governance-controlled values treated as auto-resolvable (CRITICAL)

**What happens**: The agent reads a claim like "the unbonding period is 7 rounds" and resolves it against the whitepaper or a docs page — both of which may state this value. But the value is on-chain governance-controlled and can be changed by a LIP without the whitepaper being updated. The agent treats a stale docs source as authoritative and marks the claim `verified`.

**Why it matters**: A user reads that the unbonding period is 7 rounds, acts on it, and finds it has changed. This is an active documentation failure, not just a minor inaccuracy.

**What the prompt does**: The confidence scoring matrix explicitly marks all `governance` category claims as NEVER auto-resolvable. The rule is stated three times in different sections.

**What the human must check**: In the Phase 6 Summary, the governance flag count must be non-zero for any page with protocol parameter claims. If it is zero on such a page, the run is rejected.

### 2. REVIEW markers placed inline in prose instead of before the block (HIGH)

**What happens**: Instead of placing the REVIEW marker on a new line before the paragraph, the agent inserts it mid-sentence: "The unbonding period is {/* REVIEW: check this */} 7 rounds."

**Why it matters**: MDX comments inside JSX expressions behave differently from standalone MDX comments. Inline comments can produce rendering artefacts or silently break the page in some MDX renderers. More practically, an inline comment is not easily found by a grep or human scan.

**What the prompt does**: Phase 4 placement rules state that markers must be placed immediately BEFORE the flagged block. The rule is explicit and repeated in the failure mode reference table.

**What the human must check**: Scan all REVIEW markers in the output. Each must appear on its own line before the flagged content.

### 3. Missing REVIEW markers on stale economic data (MEDIUM)

**What happens**: The agent reads a claim about per-pixel pricing or network utilisation and treats it as a stable architectural description rather than live market data. No REVIEW marker is placed.

**Why it matters**: Economic data changes. Specific pricing claims that are presented as current without a staleness flag mislead operators making cost decisions.

**What the prompt does**: The confidence matrix explicitly lists `fee-data-live` and `network-utilisation-metric` as NEVER auto-resolvable. Phase 3 Rule 4 requires a staleness date note on economic claims.

**What the human must check**: If the page contains pricing or utilisation claims, confirm REVIEW markers exist with staleness notes. The marker format for economic data is distinct (includes re-verify schedule).

### 4. veracityStatus not updated in frontmatter (HIGH)

**What happens**: The pass runs, REVIEW markers are placed, the Phase 6 Summary says `unverified` — but the frontmatter still shows `veracityStatus: verified` from a previous run, or the field is absent entirely.

**Why it matters**: The publication gate reads `veracityStatus` from frontmatter. A page blocked from publication will not be blocked if the field is wrong. The entire gate mechanism is bypassed.

**What the prompt does**: Phase 6 explicitly requires the frontmatter to be updated. The field is named and the valid values are listed.

**What the human must check**: After every run, manually confirm the `veracityStatus` field in frontmatter reflects the Phase 6 Summary verdict.

---

## Human Checkpoint: After Test Runs

After completing all 3 test runs, the human performs this specific verification before approving production runs:

- [ ] Governance-controlled values: confirm at least one REVIEW marker with governance flag appears in each test page that has protocol parameter claims. If any governance parameter was auto-resolved on any test page, the prompt must be revised before production.
- [ ] REVIEW marker placement: scan all markers in all 3 test outputs. Confirm every marker appears on its own line before the flagged block. Zero inline markers acceptable.
- [ ] `veracityStatus` frontmatter: confirm the field is set correctly in all 3 test pages. For pages with open governance or economic REVIEW markers, status must be `unverified`.
- [ ] Phase 6 Summary: confirm present and complete in all 3 runs. The summary must include section breakdown, REVIEW count, auto-resolved count, governance flag count, and open items list.
- [ ] Open items actionability: check the "Open Items for Human" list in each summary. Every item must name a specific claim and a specific source. Vague items are a failure mode — record for prompt refinement.
- [ ] No content changes: diff the test output pages against the Phase 6 approved versions. The only diffs allowed are (a) new REVIEW comment lines and (b) the `veracityStatus` frontmatter field.
- [ ] Sign off: record approval in the Decision Registry (`workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`) with date and result.

---

## Does NOT Touch

This pack does not write to or modify:
- `content-pass.md` (Pack 2 owns that file)
- `structure-audit.md`
- `voice-rules.md`
- Phase 1 outputs
- Any `v2/` content pages (the veracity pass edits those pages, but only as the production step — no changes during the test run phase unless explicitly approved)
- `veracity-library.md` (read-only input)
- `information-type.md` (read-only input)
