# Section Summary — deployment-details
## `v2/orchestrators/guides/deployment-details/`

**Generated:** 2026-03-24
**Pages covered:** setup-options, siphon-setup, dual-mode-configuration, orchestrator-transcoder-setup, join-a-pool, new-join-a-pool
**Source:** Check reports + critical review reports, all 2026-03-24
**Corrections applied:** P59 (NOT-TESTED ≠ FAIL), P60 (BORDERLINE ≠ FAIL), P55/P69 (Related exempt from 3.2), P64 (unverified is valid; partial does not exist), P65 (phantom fixes excluded), P66/P67 (Frontmatter Table and check table must agree), P74 (em-dash scan covers description, headings, prose)

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|------|---------|----------------------|----------------|
| `setup-options.mdx` | NEEDS WORK | 26 checks (critical review corrected from stated 27; removes 1.3 co-fix per P42) | CRITICAL: `pageType: overview` is a pageVariant used as a pageType — no automatic migration path; `status: current` + `veracityStatus: unverified` prohibited combo in original F-09 fix (P39 violation corrected by review); `purpose: orientation` deprecated alias; 5 missing required fields; `Next Steps` Avoid-tier heading; dead `Quote` import; VRAM figures unverified with no REVIEW flags |
| `dual-mode-configuration.mdx` | NEEDS WORK | 22 checks (critical review corrected from stated 21 — arithmetic error) | `pageType: how_to` deprecated 12-type (instruction migration); `purpose: setup` deprecated alias; 5 missing required fields; RTX 2060 base VRAM listed as 8–12 GB (base model is 6 GB — confirmed factual error); mutable Docker tags `master` and `latest`; 5 headings below threshold including `Why contention is lower than expected` (8/25) |
| `orchestrator-transcoder-setup.mdx` | NEEDS WORK | 25 checks (critical review corrected from stated 25 original list — removes 5.4 misclassification) | 4 confirmed broken internal links; `purpose: guide` wrong-field error; 5 missing required fields; description 231 chars (exceeds 160); 4 headings below threshold; `status: current` + absent `veracityStatus` violates §1.8 |
| `siphon-setup.mdx` | NEEDS WORK | 22 checks (critical review corrected: removes 5.4 misclassification, excludes 2.4 BORDERLINE) | `purpose: guide` wrong-field error; 5 missing required fields; description 199 chars; 6 headings below threshold; third-party OrchestratorSiphon repo staleness; Python dependencies not pinned; `arb1.arbitrum.io/rpc` public endpoint staleness risk; `~22 hours on Arbitrum` round duration uncited |
| `new-join-a-pool.mdx` | NEEDS WORK | 24 checks (critical review corrected: removes 2.3 phantom FAIL, 5.4 misclassification, excludes 2.4 BORDERLINE) | CRITICAL structural: both `join-a-pool` and `new-join-a-pool` in docs.json with identical sidebar title — must resolve BD-DD-01; `new-` filename prefix invalid; `purpose: guide` wrong-field error; 5 missing required fields; description 174 chars; 9 headings below threshold; `pool worker` not defined at first use; third-party Titan Node links |
| `join-a-pool.mdx` | DEPRECATE | 27 checks (critical review corrected from stated 21 — arithmetic off by 6) | **Primary action: deprecation.** Superseded by `new-join-a-pool.mdx` per 2026-03-24 session log. `<Columns>` component used but not imported (render error); `pageType: guide` PASS but `purpose: guide` wrong-field error; duplicate in docs.json; 5 missing required fields; 5 headings below threshold; `X vs Y` heading conflict with sibling report treatment |

**Corrected fail count notes:**
- `setup-options`: original stated "24 checks fail" but list contained 27 IDs; critical review confirms 26 after removing 1.3 as co-fix per P42
- `dual-mode-configuration`: original stated 21 checks; critical review recounts 22 — arithmetic error in original
- `join-a-pool`: original stated 21 checks; critical review recounts 27 — arithmetic off by 6 (likely counted categories not check IDs)
- `siphon-setup`: 2.4 BORDERLINE excluded per P60; 5.4 misclassification removed per critical review (non-rendered MDX comment is not check 5.4 FAIL) — corrected to 22
- `orchestrator-transcoder-setup`: 5.4 misclassification removed — corrected to 25; note: critical review also identifies the `not [X]` adjacent at line 158 as check 2.4 FAIL in the review but check report treats it as PASS — see BD-DD-08
- `new-join-a-pool`: 2.3 phantom FAIL removed (P28 — result column said FAIL, detail concluded PASS); 5.4 misclassification removed; 2.4 BORDERLINE excluded — corrected to 24

**Cross-batch pattern (5.4 misclassification):** Three of six check reports (siphon-setup, orchestrator-transcoder-setup, new-join-a-pool) incorrectly failed check 5.4 ("Avoided components absent") for non-rendered MDX comment blocks. All three critical reviews independently identified and corrected this. This is a systematic pattern for this batch — add to learnings.

---

## 2. Shared Root Causes

### RC-1: `purpose: guide` wrong-field error — four of six pages
**Pages:** siphon-setup, orchestrator-transcoder-setup, join-a-pool, new-join-a-pool
**Pattern:** `guide` is a valid 7-type canonical `pageType`. All four pages place it in the `purpose` field, where it is not a valid value. The 15-value purpose set contains no `guide` entry. This is the P37 type-b error: a valid pageType value placed in the wrong field.
**Impact:** Fails checks 1.4 and 5.7 on all four pages. Blocks check 4.7 (information type mapping) until the correct purpose is confirmed. Proposed replacements per check reports: `configure` (siphon-setup, orchestrator-transcoder-setup), `start` or `configure` (new-join-a-pool), `evaluate` or `start` (join-a-pool) — all require human confirmation before applying.

### RC-2: Missing required frontmatter fields — all six pages
**Fields absent on all six pages:** `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`
**Additional issues:** setup-options also has `pageType: overview` (type-confusion failure), `purpose: orientation` (deprecated alias), weak `keywords`, and self-referential description. dual-mode-configuration has `pageType: how_to` (deprecated 12-type) and `purpose: setup` (deprecated alias).
**Shared proposed values (all require human confirmation):**
- `complexity: intermediate` (dual-mode-configuration, siphon-setup, orchestrator-transcoder-setup); `complexity: beginner` (setup-options, join-a-pool, new-join-a-pool)
- `lifecycleStage: setup` (dual-mode-configuration, siphon-setup, orchestrator-transcoder-setup); `lifecycleStage: evaluate` (setup-options, join-a-pool, new-join-a-pool)
- `veracityStatus: unverified` (all six — all pages contain unverified claims)
- `industry: ["technical"]` (setup-options, siphon-setup, orchestrator-transcoder-setup); `industry: ["technical", "AI"]` (dual-mode-configuration); `industry: ["technical", "economics"]` (join-a-pool, new-join-a-pool)
- `niche: ["infrastructure", "web3"]` (setup-options, siphon-setup, new-join-a-pool); `niche: ["infrastructure", "AI"]` (dual-mode-configuration); `niche: ["infrastructure", "hardware"]` (orchestrator-transcoder-setup); `niche: ["infrastructure", "protocol"]` (join-a-pool)

### RC-3: `status: current` + absent `veracityStatus` incoherence — five of six pages
**Pages:** setup-options, join-a-pool, siphon-setup, orchestrator-transcoder-setup, new-join-a-pool
**Pattern:** `status: current` requires `veracityStatus: verified` per checks.mdx §1.8 and P39. All five pages have `status: current` without `veracityStatus`. All five have TODO blocks or unverified procedural claims. The valid fix for all five is: `status: draft` + `veracityStatus: unverified`.
**P39 violation in original check report:** The setup-options check report recommended `status: current` + `veracityStatus: unverified` as an intermediate state — this is the prohibited combination per P39. The critical review corrected this. Executing agents must use the corrected fix only: `status: draft` + `veracityStatus: unverified`.
**Note on P57:** `status: published` is a non-canonical status value (valid values: `current`, `draft`). It does not appear in this batch but was flagged in prior sections as an independent concern — flag independently if encountered.

### RC-4: Heading quality failures — all six pages
**Pattern:** Every page in this subfolder has multiple headings scoring below 20/25 across the five-dimension rubric. Shared failure modes:
- Generic two-word labels with no domain anchor: `Architecture`, `Setup`, `Troubleshooting`, `Security Considerations`, `Day-to-Day Operations`
- Question-adjacent or preamble headings: `When to Use This Setup`, `Why contention is lower than expected`, `Before You Start`
- Procedural enumeration labels: `Step 1: Choose a Pool`, `Option A: Docker worker (recommended)`, `Part 1 - Secure Machine: Install OrchestratorSiphon`
- Banned-tier headings: `Frequently Asked Questions`, `Next Steps`
- `X vs Y` contrast label: `Pool Worker vs Solo Orchestrator` (present on both join-a-pool and new-join-a-pool — with inconsistent treatment between the two check reports; see Cross-Page Structural Note 5.5)
Total headings below 20/25: 5 (dual-mode) + 4 (setup-options) + 5 (join-a-pool) + 9 (new-join-a-pool) + 6 (siphon-setup) + 4 (orchestrator-transcoder-setup) = 33 heading failures across the subfolder.

### RC-5: Veracity — unverified procedural claims without REVIEW flags — all six pages
**Pattern:** Every page contains procedural commands, CLI flags, or system specifications presented as fact without inline `{/* REVIEW: [claim] — [source] */}` markers. TODO blocks on several pages cover formatting verification tasks, not the substantive veracity claims. `{/* FACT CHECK */}` comments (where present) do not satisfy check 6.5 (P61).
**High-priority unverified claims across pages:**
- RTX 2060 base VRAM 8–12 GB (dual-mode-configuration — confirmed factual error, base model is 6 GB per NVIDIA datasheet)
- VRAM figures in Workload Mode table: Video 4 GB, AI 8–24 GB, Dual 16–24 GB (setup-options — NOT-TESTED)
- go-livepeer CLI flags: `-serviceAddr`, `-transcoder`, `-orchAddr`, `-nvidia`, `-maxSessions`, `-aiWorker`, `-aiModels` — not verified against current release on any page
- Port 8935 reuse for both GW→O and O→T communication (orchestrator-transcoder-setup — SME-gated)
- `~22 hours on Arbitrum` round duration (siphon-setup — uncited)
- Titan Node dashboard URL `app.titan-node.com` (join-a-pool, new-join-a-pool — third-party, high staleness risk)
- `arb1.arbitrum.io/rpc` public RPC endpoint (siphon-setup — high staleness risk)
- Python dependency list for OrchestratorSiphon with no pinned versions (siphon-setup)

### RC-6: Overlong descriptions — four of six pages
**Pages:** setup-options (140 chars, but self-referential opener), siphon-setup (199 chars), orchestrator-transcoder-setup (231 chars), new-join-a-pool (174 chars), join-a-pool (174 chars — same description as new-join-a-pool)
**Pattern:** Only dual-mode-configuration (100 chars) passes check 1.11. The 160-char limit is exceeded on three pages; setup-options passes on length but fails on self-referential opening ("A guide to..."). All descriptions also need em-dash scan per P74 — no em-dashes were found in this batch's descriptions (unlike the staking-and-rewards batch).

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|-------|----------|---------|--------|
| BD-DD-01 | **CRITICAL:** Deprecate `join-a-pool.mdx` and rename `new-join-a-pool.mdx` to `join-a-pool.mdx`. Remove old entry from docs.json. Move old file to `x-deprecated/`. Record in decision-registry.md. (This decision was noted in the 2026-03-24 session log but NOT in decision-registry.md — it must be registered before executing.) | join-a-pool, new-join-a-pool | All content fixes on join-a-pool (moot until deprecated); 7.4, 7.8 on new-join-a-pool; duplicate sidebar entries |
| BD-DD-02 | Determine correct base `pageType` for setup-options: `navigation` (pure routing, CardGroup-centric) vs `guide` (substantive orientation with section summaries). Co-fix `pageVariant: overview` applies to either choice. | setup-options | Check 1.2, 5.1, 5.2 resolution; template compliance |
| BD-DD-03 | Confirm `purpose` value for siphon-setup: `configure` (mapping options to requirements) vs `build` (end-to-end two-machine setup). | siphon-setup | F-07 fix execution |
| BD-DD-04 | Confirm `purpose` value for orchestrator-transcoder-setup: `configure` confirmed? | orchestrator-transcoder-setup | F-02 fix execution |
| BD-DD-05 | Confirm `purpose` value for new-join-a-pool: `start` (zero to working pool-worker) vs `configure`. | new-join-a-pool | F-01 fix execution |
| BD-DD-06 | Confirm `purpose` value for dual-mode-configuration: `configure` vs `start`. | dual-mode-configuration | F-02 fix execution |
| BD-DD-07 | SME sign-off on dual-mode-configuration REVIEW flags: `-serviceAddr` port, `dl_checkpoints.sh` syntax, VRAM figures. RTX 2060 base VRAM (6 GB, not 8–12 GB) is a confirmed factual error — separate from the REVIEW gate but must be corrected regardless. | dual-mode-configuration | F-08 (factual error), F-09 (REVIEW flags); veracity pass |
| BD-DD-08 | SME sign-off on orchestrator-transcoder-setup: port 8935 reuse for GW→O and O→T; file-based `orchSecret` syntax; `-maxSessions` on Orchestrator process. | orchestrator-transcoder-setup | F-09 veracity pass |
| BD-DD-09 | Identify correct link targets for 4 broken links in orchestrator-transcoder-setup: (a) `run-a-pool` → likely `pool-operators` (docs.json line 2941); (b) `large-scale-operations` → likely `scale-operations` (line 2942); (c) `gateways-orchestrators` → likely `gateway-orchestrator-interface` (line 2940); (d) `monitoring-and-tools/troubleshooting` → `monitoring-and-tooling/troubleshooting` (line 2933, typo fix). Candidates (a)–(c) require human confirmation before applying. (d) is a clear typo fix. | orchestrator-transcoder-setup | F-01 (4 broken links); check 8.1 fix |
| BD-DD-10 | Confirm `pageType` migration target for dual-mode-configuration: `instruction` plain vs `instruction + pageVariant: quickstart`. | dual-mode-configuration | F-01 fix execution |
| BD-DD-11 | Verify Python dependency list for siphon-setup against current OrchestratorSiphon `requirements.txt`; confirm `~22 hours on Arbitrum` round duration; confirm `arb1.arbitrum.io/rpc` is current Arbitrum One RPC endpoint. | siphon-setup | F-13, F-14, F-15 veracity resolution |
| BD-DD-12 | Confirm `Pool Worker vs Solo Orchestrator` heading treatment: FAIL per check 3.3 (`X vs Y` literal contrast label) or BORDERLINE (heading names the governing comparison concept). The two sibling check reports (join-a-pool: FAIL; new-join-a-pool: BORDERLINE then PASS) are inconsistent. Apply one ruling to both pages. | join-a-pool (moot if deprecated), new-join-a-pool | Heading fix execution; check 3.3 verdict |
| BD-DD-13 | Confirm VRAM figures for setup-options Workload Mode table (Video: 4 GB, AI: 8–24 GB, Dual: 16–24 GB) against hardware reference. Cross-reference with dual-mode-configuration figures for consistency. | setup-options, dual-mode-configuration | F-09 (setup-options) veracity resolution |

---

## 4. Prioritised Recommendations

Ordered by impact. CRITICAL = blocks pipeline or renders page unpublishable. HIGH = veracity risk, structural problem, or significant taxonomy error. MEDIUM = voice/heading quality. Items marked [BD] require human sign-off before execution.

### CRITICAL

**C-1. Resolve join-a-pool duplication — BD-DD-01** [BD-DD-01]
Both `join-a-pool.mdx` and `new-join-a-pool.mdx` appear in docs.json under identical sidebar titles. This creates two "Join a Pool" entries in the sidebar. `join-a-pool.mdx` has a `<Columns>` component used but not imported (render error on the old file). The 2026-03-24 session log identified `new-join-a-pool.mdx` as canonical. Until BD-DD-01 executes, `join-a-pool.mdx` holds fixes hostage. This must be written to decision-registry.md before executing.
Fix sequence: (a) Register decision in decision-registry.md; (b) remove `v2/orchestrators/guides/deployment-details/join-a-pool` from docs.json; (c) rename old file to `dep-join-a-pool.mdx`; (d) rename `new-join-a-pool.mdx` to `join-a-pool.mdx` and update docs.json entry.

**C-2. Fix `pageType: overview` taxonomy confusion on setup-options** [BD-DD-02]
`overview` is a `pageVariant` value, not a `pageType`. Using it as `pageType` is a type-confusion failure with no automatic migration path. All template and structure checks (5.1, 5.2) are blocked until BD-DD-02 resolves. Check 1.3 (pageVariant) is a co-fix dependency of 1.2, not an independent FAIL — it was incorrectly counted as a separate FAIL in the original check report.
Fix: Resolve BD-DD-02, then apply correct `pageType` with `pageVariant: overview` as co-fix (P42).

**C-3. Fix `pageType: how_to` deprecation on dual-mode-configuration** [BD-DD-10]
`how_to` is a deprecated 12-type alias — must migrate to `pageType: instruction`. Whether to add `pageVariant: quickstart` is BD-DD-10.
Fix: Resolve BD-DD-10, then apply `pageType: instruction` (with or without pageVariant).

**C-4. Fix 4 broken internal links in orchestrator-transcoder-setup** [BD-DD-09]
Three links point to pages that do not exist in docs.json. One is a path typo (`monitoring-and-tools` → `monitoring-and-tooling`). All four are in the Related Pages exit path. The typo fix (d) can be applied immediately without BD sign-off.
Fix: (a) Apply typo fix immediately. (b) Apply BD-DD-09-confirmed replacements for (a)–(c) once approved.

**C-5. Add five missing frontmatter fields — all six pages**
Blocks `veracityStatus` honesty (check 1.8), taxonomy pipeline (checks 1.6, 1.7, 1.9, 1.10), and sign-off tracking (check 9.1) across the entire subfolder.
Fix: Add `complexity`, `lifecycleStage`, `veracityStatus: unverified`, `industry`, `niche` to all six pages with proposed values confirmed by Alison. One batch operation after BD-DD-02 through BD-DD-06 resolve.

**C-6. Fix RTX 2060 base VRAM factual error in dual-mode-configuration**
NVIDIA datasheet confirms RTX 2060 base VRAM is 6 GB. The page lists "8–12 GB" for RTX 2060 / 3060. The RTX 2060 base model row is factually wrong. This is not SME-gated — the primary source is unambiguous.
Fix: Correct the row. Separate the RTX 2060 base (6 GB) from RTX 2060 Super / 3060 (8–12 GB), or reframe the row to exclude the base model. Flag for SME confirmation of exact row values.

### HIGH

**H-1. Fix `purpose: guide` wrong-field error — siphon-setup, orchestrator-transcoder-setup, join-a-pool, new-join-a-pool** [BD-DD-03 through BD-DD-05]
Four pages have the same P37 type-b error. Blocks check 4.7 on all four pages.
Fix: Resolve BDs first, then apply confirmed purpose values.

**H-2. Fix `status: current` + absent `veracityStatus` — five pages** (setup-options, join-a-pool, siphon-setup, orchestrator-transcoder-setup, new-join-a-pool)
Per P39, valid fix is `status: draft` + `veracityStatus: unverified` for all five. The setup-options check report contained a P39 violation (recommended prohibited combination) — use the critical-review-corrected version only.

**H-3. Fix overlong descriptions — siphon-setup (199 chars), orchestrator-transcoder-setup (231 chars), new-join-a-pool (174 chars)**
Proposed trimmed versions exist in the check reports. orchestrator-transcoder-setup F-08 proposed replacement contains an em-dash (`—`) — must use alternative before applying (per P75).
Priority note: orchestrator-transcoder-setup description proposed fix: "Split go-livepeer into separate Orchestrator and Transcoder processes on separate machines — keystore isolation, independent GPU scaling, and stable reward calling." — the em-dash must be replaced with a colon or comma before applying.

**H-4. Fix `purpose: orientation` and description self-reference on setup-options**
`purpose: orientation` is a deprecated alias — fix is `purpose: orient`. Description "A guide to..." is a self-referential document descriptor — fix to subject-first.

**H-5. Fix `purpose: setup` deprecated alias on dual-mode-configuration**
`setup` is a deprecated alias per Frameworks.mdx §1.2. Proposed replacement: `purpose: configure`.

**H-6. Add REVIEW flags to unverified procedural claims — all pages**
No page in this batch has adequate inline REVIEW flags on substantive procedural claims. TODO blocks cover formatting tasks, not veracity. This is the primary veracity pass requirement for the section.
Priority targets: CLI flags on all pages; VRAM figures on dual-mode-configuration and setup-options; Titan Node URLs on join-a-pool and new-join-a-pool; OrchestratorSiphon dependencies and round duration on siphon-setup; port 8935 reuse and `orchSecret` syntax on orchestrator-transcoder-setup.

**H-7. Fix dead `Quote` import in setup-options**
`Quote` is imported but never used in rendered content. Dead import flagged at check 8.3 (F-10 in setup-options check report).

**H-8. Verify `Icon` and `Badge` global availability in setup-options**
Both components are used without explicit imports. If not Mintlify globals, the page will not render (check 5.6 NOT-TESTED risk).

**H-9. Add staleness disclosures for third-party content — siphon-setup, join-a-pool, new-join-a-pool**
OrchestratorSiphon is a community repo. Titan Node dashboard and GitHub repo are third-party. All are high staleness risk per Frameworks.mdx §3.4 (P77 tier: HIGH). Add disclosure notes near references; pin dependency versions or add warning note for siphon-setup.

**H-10. Rename `Frequently Asked Questions` headings — join-a-pool, new-join-a-pool**
Both pages have `Frequently Asked Questions` (banned-tier per check 3.2). Proposed `FAQ` as rename is insufficient per new-join-a-pool critical review — must be domain-specific (`Pool Worker Questions`) or absorbed into preceding sections.

**H-11. Fix `pool worker` undefined at first use — new-join-a-pool**
`pool worker` appears at line 44 without definition. CLAUDE.md lists it as jargon requiring definition at first use on every page. Proposed definition in check report must be placed as `{/* REVIEW: pool worker definition — verify against glossary */}` per P19 before inserting.

### MEDIUM

**M-1. Rename failing headings — all six pages**
33 headings below 20/25 across the subfolder. High-value renames from check reports:
- `Why contention is lower than expected` → `GPU Execution Isolation` (dual-mode, 8/25 — worst in batch)
- `Before You Start` → `Prerequisites` (dual-mode, 18/25)
- `Architecture` → `Siphon Split Architecture` (siphon-setup, 18/25 — domain anchor)
- `When to Use This Setup` → `Siphon Applicability` (siphon-setup, 15/25 — avoids `vs` per critical review)
- `Security Considerations` → `Security Model` (orchestrator-transcoder-setup, 18/25)
- `Next Steps` → restructure as `Related Pages` CardGroup (setup-options, 13/25 — Avoid-tier)
- `Verifying the connection` → `Connection Verification` (orchestrator-transcoder-setup, 18/25)
- All `Step N: [label]` headings on new-join-a-pool → domain-specific nouns (e.g. `Pool Selection`, `Worker Connection`, `Verify Work Arrival`)

**M-2. Improve keywords quality — setup-options, join-a-pool, new-join-a-pool**
Three pages have weak or non-canonical keywords. `video mining`, `passive income`, `titan node` are not searcher-intent-aligned for Livepeer orchestrator docs. Proposed stronger sets in check reports.

**M-3. Move opening Tip block on setup-options**
Page opens with a `Tip` block listing key decisions before any content introduction (checks 2.5, 2.10). Move Tip after the first prose paragraph, or convert to a `Note`.

**M-4. Pin mutable Docker tags in dual-mode-configuration**
`livepeer/go-livepeer:master` and `livepeer/ai-runner:latest` are mutable tags. Pin to specific release tags or add a release-check note.

**M-5. Add staleness disclosures for `arb1.arbitrum.io/rpc` and Python deps in siphon-setup**
Both are high-staleness references without version pinning or last-verified dates.

**M-6. Fix hardcoded hex colour in dual-mode-configuration**
`iconColor="#2d9a67"` in `StyledSteps` — confirm whether this maps to a CSS custom property. If not, replace with `var(--accent)`.

---

## 5. Cross-Page Structural Notes

**5.1 Navigation sequence and section entry point**
The Deployment Details navigation group in docs.json (lines 2883–2891) follows this sequence:
`setup-options` (entry point, position 1) → `siphon-setup` (position 2) → `dual-mode-configuration` (position 3) → `orchestrator-transcoder-setup` (position 4) → `join-a-pool` (position 5) → `new-join-a-pool` (position 6)

`setup-options.mdx` is the section entry page — it is confirmed as position 1 and serves as the orientation page for all deployment paths. All other pages verify PASS on check 4.3 adjacency given this sequence.

**5.2 join-a-pool / new-join-a-pool structural duplicate**
Both pages occupy consecutive positions in docs.json (lines 2889–2890) under identical sidebar title "Join a Pool." The 2026-03-24 session log states `new-join-a-pool.mdx` is canonical and `join-a-pool.mdx` should be deprecated. This decision was NOT written to decision-registry.md. It must be registered before executing. The `<Columns>` import error on `join-a-pool.mdx` (used but not declared) creates a render error risk on the old file and reinforces the deprecation case.

`new-join-a-pool.mdx` has the `new-` filename prefix, which is not a valid naming convention prefix per check 7.8 (valid: `s-`, `r-`, `rs-`, `rcs-`, `x-`, `dep-`). After BD-DD-01 executes, `new-join-a-pool.mdx` must be renamed to `join-a-pool.mdx`.

**5.3 setup-options `pageType: overview` is the section's most critical taxonomy error**
The page that readers encounter first in the Deployment Details section has the most critical taxonomy failure: `pageType: overview` is a pageVariant used as a pageType. This is a type-confusion failure with no automatic migration path. Until BD-DD-02 resolves, the template compliance checks (5.1, 5.2) on setup-options cannot be assessed. All other pages in the section have valid pageTypes (`guide` or — for dual-mode — a deprecated 12-type with a known migration target). setup-options alone has no valid base pageType currently set.

**5.4 `purpose: guide` wrong-field error is a section-wide template default**
Four of six pages have `purpose: guide` — the same wrong-field value. This pattern suggests copy-paste from a template or early content pass. A single search across the deployment-details subfolder would surface all instances, but the replacement value differs per page (configure, start, or evaluate). Resolve BD-DD-03 through BD-DD-06 before batch-applying.

**5.5 `Pool Worker vs Solo Orchestrator` heading — cross-report inconsistency**
`join-a-pool.mdx` check report flags this heading as a check 3.3 FAIL (literal `X vs Y` contrast label, prohibited). `new-join-a-pool.mdx` check report treats the same heading text as BORDERLINE/PASS (heading names the governing comparison concept). Both cannot be correct. BD-DD-12 must resolve this before either page's heading fixes are applied. If `join-a-pool.mdx` is deprecated (BD-DD-01), this inconsistency only affects `new-join-a-pool.mdx`.

**5.6 Broken links in orchestrator-transcoder-setup point to pages that may be planned but do not yet exist**
Four broken links reference `run-a-pool`, `large-scale-operations`, `gateways-orchestrators`, and `monitoring-and-tools/troubleshooting`. The critical review confirms all four against docs.json. The first three appear to be planned pages not yet created — the closest existing docs.json entries are `pool-operators` (line 2941), `scale-operations` (line 2942), and `gateway-orchestrator-interface` (line 2940). The fourth is a path typo. BD-DD-09 must determine whether the first three are link targets that need updating to existing pages, or whether the linked pages need to be created.

**5.7 VRAM figures appear on two pages and must be verified together**
`setup-options` and `dual-mode-configuration` both contain VRAM figures (Workload Mode table on setup-options; resource table on dual-mode-configuration). The figures are not identical — dual-mode-configuration has GPU-class rows; setup-options has a higher-level workload-mode breakdown. The RTX 2060 factual error in dual-mode-configuration must be checked against both pages for consistency. BD-DD-13 and BD-DD-07 should be treated as a joint verification task.

**5.8 Veracity pass scope — third-party content is the highest staleness risk in this section**
Unlike the staking-and-rewards or monitoring-and-tooling sections (which rely on protocol state that changes slowly), the deployment-details section relies heavily on: (a) third-party community tools (OrchestratorSiphon — `siphon-setup`; Titan Node pool — `join-a-pool`, `new-join-a-pool`) and (b) go-livepeer CLI flags that may change between releases (all setup pages). Both are high-staleness categories per Frameworks.mdx §3.4 tier classification. Third-party content should be verified against live sources as a priority; CLI flags need review against the current go-livepeer release notes.

---

## 6. Learnings for Future Batches

The following patterns are not yet captured in learnings.md P1–P77 (or are regressions from earlier learnings).

**L-78: Check 5.4 misclassification for non-rendered MDX comments — systematic in this batch**
Three of six check reports (siphon-setup, orchestrator-transcoder-setup, new-join-a-pool) independently failed check 5.4 ("Avoided components absent") for TODO blocks inside MDX comments. An MDX comment is not a rendered component. Check 5.4 tests rendered output. The correct treatment is: PASS on check 5.4; the underlying status/veracity incoherence logs at checks 1.8 and 9.1. This is the fourth batch where this misclassification has appeared. Add explicit instruction: check 5.4 result must reference rendered output only. MDX comment blocks are not components.

**L-79: `pageType: overview` must be distinguished from deprecated-alias errors**
`overview` is a pageVariant value used as a pageType — a type-confusion failure. It does not belong in the "deprecated alias" category (where a known migration target exists, e.g. `how_to` → `instruction`). The migration from `pageType: overview` requires a human decision on the correct base type. Check reports must characterise this as a blocking decision (BD) with two candidate options, not as a simple alias migration. setup-options was mostly correct on this but the distinction between "deprecated alias" and "type-confusion failure with no automatic migration" needs to be explicit in the check prompt.

**L-80: Proposed description replacements must be counted before stating char counts, and must pass em-dash scan**
orchestrator-transcoder-setup F-08 proposes: "Split go-livepeer into separate Orchestrator and Transcoder processes on separate machines — keystore isolation, independent GPU scaling, and stable reward calling." This contains an em-dash (`—`) in the proposed replacement — a violation of the prohibition being cited. The character count is also not independently verified. Per P74/P75, all proposed replacement text must be checked for: (1) character count accuracy, (2) em-dash absence in description field, and (3) no introduction of banned constructions. This is a regression from P44/P75.

**L-81: `Frequently Asked Questions` rename to `FAQ` is insufficient**
Both join-a-pool and new-join-a-pool check reports proposed `FAQ` as a rename for `Frequently Asked Questions`. The new-join-a-pool critical review correctly identifies this: `FAQ` is a weak rename that does not resolve the underlying issue (generic section label without domain specificity). The correct fix is either to absorb the FAQ content into preceding sections with specific sub-questions, or use a domain-specific label (`Pool Worker Questions`). Add explicit instruction: when a heading is Banned-tier for being a generic FAQ label, the rename must be domain-specific, not just an abbreviation of the same generic form.

**L-82: `purpose: guide` as cross-batch template default — now identified in deployment-details, staking-and-rewards, and operator-considerations**
The `purpose: guide` wrong-field error has now appeared in at least three subfolder batches. This is a section-wide template-default pattern, not an isolated error. The batch check prompts should add a note: "If `purpose: guide` is found in the frontmatter, this is the P37 type-b pattern — valid pageType value in wrong field. The fix is to confirm the correct canonical purpose value for this specific page; do not treat it as a deprecated alias."

**L-83: VRAM figures appear on multiple pages and require joint verification — not page-by-page**
VRAM figures appear on at least two pages in this section (setup-options, dual-mode-configuration) with slight inconsistencies. The RTX 2060 factual error (confirmed 6 GB, not 8–12 GB) propagates risk to any page citing the same figures. When the veracity pass surfaces a factual error in a specific number, all pages in the same section citing that number must be cross-checked together. The summary agent should flag shared veracity claims for joint verification as part of section summary output.

**L-84: Decision-registry.md lag — session log decisions must be registered before they can be acted on**
The `join-a-pool.mdx` deprecation decision appeared in the 2026-03-24 session log but not in decision-registry.md. Two check reports cite the session log as authority for the decision. Per the CLAUDE.md rule: "Decisions made in chat that are not written to the decision registry do not exist." Check reports that reference session log decisions must flag the registry gap as a check 9.2 finding, not treat the session log as a binding decision.

---

_Summary agent: Claude Code (section summary agent) · 2026-03-24_
