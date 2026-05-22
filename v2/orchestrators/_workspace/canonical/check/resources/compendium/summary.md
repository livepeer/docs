# Section Summary — `resources/compendium`

**Generated:** 2026-03-24
**Summary agent:** Claude Code (summary index agent)
**Learnings applied:** P1–P96
**Pages covered:** 1
**Source files:** `check/resources/compendium/glossary.md` (check report) + `check/resources/compendium/glossary-review.md` (critical review)

---

## 1. Overview Table

| Page | Check Report Fail Count | Critical Review Corrected Count | Critical Review Rating | Primary Issues |
|---|---|---|---|---|
| `compendium/glossary.mdx` | 19 (stated) / 21 (actual) | **22** | MOSTLY RELIABLE | Invalid audience token; 7 missing/invalid frontmatter fields; 4 generic H2 headings; 7 veracity FAILs across all protocol-state figures; AI-generated content with no cross-check; em-dash in description field (BORDERLINE upgraded to FAIL by review) |

---

## 2. Key Findings

### 2.1 Audience token wrong (CRITICAL)

`audience: orchestrator-operator` is not a canonical 7-token value. The correct value is `audience: orchestrator`. This single error cascades into two separate FAIL check IDs (1.5 and 5.7 — same root cause, one fix). This is a recurring pattern in this codebase; the compound token form `orchestrator-operator` appears nowhere in the canonical enum index.

### 2.2 Frontmatter is substantially incomplete (HIGH)

Seven frontmatter issues in total:

- `complexity` absent — proposed: `beginner` (confirm before applying)
- `lifecycleStage` absent — proposed: `discover` (confirm before applying)
- `veracityStatus` absent — must be `unverified` given AI-generated content (checks.mdx §6.7 flag applies to this specific file; see §2.5 below)
- `industry` absent — required field per P41. Proposed: `["technical", "livepeer"]`
- `niche` absent — required field per P41. Proposed: `["protocol", "infrastructure"]`
- `keywords` present but generic (`"livepeer"`, `"glossary"`, `"orchestrators"`, `"terminology"`) — none are searcher-intent-aligned per check 1.13
- `description` em-dash: `"Key terms for Livepeer orchestrator operators — GPU setup…"` — P30 is an absolute prohibition on em-dashes in all visible text including the description field. The check report classified this BORDERLINE; the critical review correctly upgraded it to FAIL (no BORDERLINE category exists for P30 violations per P23). Corrected replacement proposed by critical review: `"Key terms for Livepeer orchestrator operators: GPU setup, AI pipelines, staking, payment mechanics, monitoring, and protocol roles."` (137 chars; colon replaces em-dash)

### 2.3 Veracity: entire page is at-risk (HIGH — all 7 category-6 checks FAIL)

This is the most material finding section. The check report's veracity assessment is accurate and specific:

**Six HIGH-staleness protocol figures with zero REVIEW flags:**

| Claim | Staleness tier | Status |
|---|---|---|
| Active Set = "top 100 orchestrators" | HIGH (governance-changeable) | No source, no REVIEW flag |
| Gas cost = "$0.01–$0.12 per call" | HIGH (fluctuates with Arbitrum gas) | No source, no REVIEW flag |
| Inflation adjustment = "0.00005% per round" | HIGH (governance-changeable) | No source, no REVIEW flag |
| LIP-89 governance: "33% quorum, 10-round period" | HIGH (governance-changeable) | No source, no REVIEW flag |
| Round duration = "~22hrs / 5,760 ETH blocks" | MEDIUM (derivable from chain) | No source, no REVIEW flag |
| Cold start latency = "5 to 90 seconds" | MEDIUM (hardware and model size dependent) | No source, no REVIEW flag |

Per checks.mdx §6.5, only `{/* REVIEW: [specific claim] — [named source] */}` format satisfies the REVIEW flag requirement. The fix list (F-09) proposes exact REVIEW flag text for each claim.

**AI-generated content flag (checks.mdx §6.7):** This file is explicitly named in checks.mdx §6.7 as untrusted: *"Never trust `v2/resources/compendium/glossary.mdx` (AI-generated, unverified) without cross-check."* No cross-check against the authoritative source (`v2/resources/glossary.mdx`) has been performed. `veracityStatus: verified` is not achievable until cross-check is complete. The correct current value is `veracityStatus: unverified`.

**P39 atomicity (F-02):** The check report's F-02 adds `veracityStatus: unverified` without explicitly anchoring the retention of `status: draft`. The critical review correctly flags this as non-atomic per P84. Corrected F-02 fix text: *"Add `veracityStatus: unverified` AND retain `status: draft` (do not change to `status: current`). Both actions are one atomic change."* The source page already has `status: draft`, so there is no wrong-state risk — this is an execution-drift protection only.

### 2.4 Four H2 headings score below 20/25 (HIGH)

| Heading | Score | Failing dimensions | Proposed rename |
|---|---|---|---|
| `AI Terms` | 18/25 | Precision (3), Depth (2) — no domain anchor | `AI Inference Terms` |
| `Video Terms` | 18/25 | Precision (3), Depth (2) — valid on any video platform | `Video Transcoding Terms` |
| `Web3 Terms` | 18/25 | Precision (3), Depth (2) — broad across all web3 | `Blockchain and Token Terms` |
| `Technical Terms` | 19/25 | Precision (3), Depth (2) — catch-all label | `Infrastructure and Protocol Terms` |

All four fail check 3.4 (domain-anchor rule) and check 3.7 (expert editorial choice). All proposed renames validated against check 3.2 prohibited list per P18 — none introduce a banned or avoid-tier term.

### 2.5 Relationship to authoritative glossary (`v2/resources/glossary.mdx`)

This file (`v2/orchestrators/resources/compendium/glossary.mdx`) and the root-level authoritative glossary (`v2/resources/glossary.mdx`) are explicitly distinguished in checks.mdx §6.7. This page is the compendium (AI-generated, untrusted); the other is human-reviewed and authoritative. The relationship has three current implications:

1. `veracityStatus: unverified` is the only honest current value for this page
2. Advancing beyond `unverified` requires a term-by-term cross-check against `v2/resources/glossary.mdx`
3. The footer card to `/v2/resources/livepeer-glossary` correctly signals the scope boundary to readers — this is a PASS finding

### 2.6 Navigation and structure: mostly sound

Category 4 (page structure) and Category 7 (navigation) both PASS. The page is correctly registered in docs.json at lines 2983–2988. The footer CardGroup provides three exit paths. The companion JSON (`glossary-data.json`) was not verified — this is a NOT-TESTED, not a FAIL (P22 logic applies).

### 2.7 Report integrity: three corrections applied by critical review

1. **Verdict count corrected** from stated 19 → actual 21 → corrected total 22 (after check 1.11 BORDERLINE → FAIL upgrade)
2. **Check 1.11 upgraded** from BORDERLINE to FAIL — P30 is absolute, no BORDERLINE pathway exists
3. **F-02 atomicity corrected** — P39 fix must state both actions together (P84)

Also noted (INFO, no FAIL change): BD-1 in the check report included a "Recommended action" line inside the blocking decision block — a P68 violation. The recommendation is correct but the format is wrong. BD sections must end after stating options and consequences.

### 2.8 Process gate status (check 9.3 FAIL)

The Orchestrators tab has not passed IA approval, terminology lock, or content pass gate. This page is in `status: draft` consistently with that state, but the gate-unmet condition is a confirmed check 9.3 FAIL. No content on this page should advance to `status: current` or `veracityStatus: verified` until tab-level gates open.

---

## 3. Blocking Decisions

| BD-ID | Decision required | Blocks |
|---|---|---|
| BD-1 | Confirm `glossary-data.json` exists adjacent to this MDX. If missing, the Note link (line 46) is broken and `check-ai-companions.yml` CI will fail. | Shipping the page |
| BD-2 | Define the cross-check process: which definitions already exist in `v2/resources/glossary.mdx`? Which are compendium-only? Assign ownership of cross-check. | Advancing `veracityStatus` beyond `unverified`; resolving F-10 |
| BD-3 | Assign named primary sources for each HIGH-staleness protocol figure (Active Set size, inflation adjustment rate, LIP-89 governance parameters, gas cost range). CLAUDE.md policy: replace unverifiable numbers with live links (Explorer, Arbiscan). | Closing F-09; closing checks 6.1, 6.4, 6.5, 6.8, 6.9 |

---

## 4. Recommendations

### CRITICAL

- **F-01:** Change `audience: orchestrator-operator` → `audience: orchestrator`. One atomic fix resolves both check 1.5 and check 5.7.

### HIGH

- **F-02 (corrected):** Add `veracityStatus: unverified` AND retain `status: draft` — atomic single action per P84.
- **F-03:** Add `complexity: beginner` — confirm before applying.
- **F-04:** Add `lifecycleStage: discover` — confirm before applying.
- **F-05:** Add `industry: ["technical", "livepeer"]` — confirm before applying.
- **F-06:** Add `niche: ["protocol", "infrastructure"]` — confirm before applying.
- **F-07:** Replace all four keywords with searcher-intent-aligned terms (proposed list in check report F-07; confirm before applying).
- **F-08:** Rename four H2 headings (AI Terms → AI Inference Terms; Video Terms → Video Transcoding Terms; Web3 Terms → Blockchain and Token Terms; Technical Terms → Infrastructure and Protocol Terms) — confirm before applying.
- **F-09:** Add `{/* REVIEW: */}` flags at all six HIGH/MEDIUM staleness protocol figures. Exact flag text in check report F-09. Requires BD-3 (named sources) before flags can be closed.
- **F-10:** Cross-check all definitions against `v2/resources/glossary.mdx` before advancing `veracityStatus`. Requires BD-2.
- **Description fix (Correction 2 from critical review, no existing F-ID in check report — requires new F-13 when remediation is executed):** Replace em-dash in description with colon. Proposed replacement: `"Key terms for Livepeer orchestrator operators: GPU setup, AI pipelines, staking, payment mechanics, monitoring, and protocol roles."` Confirm before applying.

### MEDIUM

- **F-11:** Record human sign-off when page passes content pass + veracity pass gates.
- **F-12:** Do not advance to `status: current` until Orchestrators tab gates open (IA approval, terminology lock, content pass).

### LOW / INFO

- BD-1 format fix: remove "Recommended action:" line from BD-1 body in check report (P68 compliance). No content impact.
- P74 gap: future check runs should explicitly label the three em-dash scan targets (description field, H2/H3 headings, body prose) as separate scan sections even when no violations are found.

---

## 5. Notes

### Relationship to `v2/orchestrators/resources/glossary.mdx` (root-level glossary)

This section should not be confused with `v2/orchestrators/resources/glossary.mdx` (the root-level resources glossary) if one exists. The compendium glossary (`v2/orchestrators/resources/compendium/glossary.mdx`) is the AI-generated version flagged in checks.mdx §6.7. The authoritative cross-check source is `v2/resources/livepeer-glossary` (referenced in footer cards and in checks.mdx §6.7). These are three distinct files with different trust levels.

### AI-generated content flag from checks.mdx §6.7

checks.mdx §6.7 is unusual in that it names this specific file by path as an untrusted source. This is not a general AI-generated-content warning — it is a direct, file-specific trust flag. Any check agent working on this file must apply this flag before assessing `veracityStatus`. The critical review correctly identified this and the check report correctly surfaced it. The flag means:

- `veracityStatus: verified` is not achievable without the BD-2 cross-check being complete
- Every protocol-state definition requires a REVIEW flag with a named primary source
- The page can exist at `status: draft` + `veracityStatus: unverified` indefinitely without triggering P39 incoherence (coherent combination per checks.mdx §1.8)

### Canonical terminology tracking

The check report confirms all locked terminology is used correctly: `reward cut`, `fee cut`, `probabilistic micropayments`, `active set`, `pool worker`, `BYOC`, `LIP-92`. No deprecated terms (`broadcaster`, `hybrid`) found in sampled content. Terminology check 2.11 PASS.

### `glossary-data.json` companion file (BD-1)

The AI discoverability block (lines 23–32) documents that a pre-commit script generates `glossary-data.json` adjacent to this MDX. The Note at line 46 links to `./glossary-data.json`. CI check `check-ai-companions.yml` will fail if the companion is missing or stale. File existence was NOT-TESTED in the check run. BD-1 must be resolved before shipping.

---

## 6. Proposed Learnings

Two candidate patterns from the critical review, cross-checked against P1–P96:

**Candidate A — Self-contradictory stated count with inline parenthetical correction:**
The check report stated "FAIL checks (19):" then immediately added "(Corrected count: 21...)" in a parenthetical on the same line. P26 and P49 cover count/table mismatches but do not specifically cover a case where the stated number and an inline correction disagree within the same sentence. This is a distinct failure mode: the check writer identified the error but corrected only the parenthetical, not the heading. Proposed rule: when self-correcting a count during report finalisation, update the heading number — never leave a stated count and a parenthetical correction in the same sentence. **Assessment:** this may be adequately addressed as a P26 application example rather than a standalone new rule. Recommend noting in learnings as a P26 edge case.

**Candidate B — BORDERLINE applied to absolute prohibitions (P30, P61):**
The check report applied BORDERLINE to check 1.11 for an em-dash in the frontmatter description field. P30 is explicit: it covers all visible text with no exceptions. P23 covers the general case (no exemptions to banned constructions beyond those in checks.mdx/CLAUDE.md), but no rule explicitly states that absolute prohibitions cannot produce BORDERLINE results. The gap is: a checker can apply BORDERLINE to any check by framing it as "unclear whether this qualifies." Proposed rule: *"BORDERLINE classification is only valid when checks.mdx or CLAUDE.md explicitly provides a human-review-required pathway for the finding type. Absolute prohibitions (P30 em-dash, P61 REVIEW format) cannot produce BORDERLINE results — they are FAIL or PASS with no intermediate state."* This would be P97 if adopted.
