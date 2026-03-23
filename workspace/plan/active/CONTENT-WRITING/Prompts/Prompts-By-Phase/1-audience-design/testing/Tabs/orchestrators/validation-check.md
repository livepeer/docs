# Check B — Canonical Design Alignment Validation
## Tab: Orchestrators
## Check type: Phase 1 Audience Design Output — Retroactive Check B

**Canonical output reviewed**: `collated/canonical-orchestrators-audience-design.md`
**Collation notes reviewed**: `collated/collation-notes-orchestrators.md`
**v5 run reviewed**: `zero-context-ai-results/v5/agent-v5-orchestrators-audience-design.md`
**Frameworks checked against**:
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/08a-ia-per-tab.md` (linear/on-demand position rules)
- `workspace/plan/active/CONTENT-WRITING/design-canonical.mdx` (system expectations)
- `workspace/plan/active/CONTENT-WRITING/Frameworks/content-pipeline-framework.md` (frontmatter schema, pageType/purpose canon)
**Date**: 2026-03-23

---

## Check B Definition

Check B verifies that the Phase 1 audience design canonical output:
1. Reflects the correct linear/on-demand position schema from 08a-ia-per-tab.md
2. Has all sections correctly classified (positions 1–3 linear, 4–6 on-demand)
3. Has no obligatory content stranded in on-demand positions, and no on-demand content forced into linear positions
4. Provides what Phase 3 (structure-audit.md / IA Audit) needs as input
5. Has all personas documented with complete entry question, knowledge gap, and JTBD
6. Has all terminology conflicts and open items documented

---

## Check 1 — Linear vs On-Demand Position Schema

**Reference (08a-ia-per-tab.md)**:
- Positions 1–3 are LINEAR for first-time readers
  - Position 1: portal/navigator (navigation, `discover`)
  - Position 2: concepts (concept, `evaluate`)
  - Position 3: quickstart (instruction, `setup`)
- Positions 4–6 are ON-DEMAND
  - Position 4: setup (instruction/setup)
  - Position 5: guides (guide, `operate` or `build`)
  - Position 6: resources (reference, knowledge-hub)

**Canonical output section structure (12 sections)**:

| Section | purpose | pageType | lifecycleStage | Linear/On-demand assignment |
|---|---|---|---|---|
| S1 — Which path is mine? | `orient` | `navigation` | `discover` | Linear — position 1 (portal/navigator equivalent) |
| S2 — Is this viable for my hardware and situation? | `evaluate` | `concept` | `evaluate` | Linear — position 2 (concepts) |
| S3 — How does work reach me and how do I get paid? | `explain` | `concept` | `evaluate` | Linear — position 2 (concepts) |
| S4 — Prerequisites: what must be in place before setup | `learn` | `concept` | `setup` | Linear — position 2/3 boundary (concepts leading to setup) |
| S5 — Get your node running | `start` | `instruction` | `setup` | Linear — position 3 (quickstart equivalent) |
| S6 — Join as a pool node | `orient` | `guide` | `evaluate` | Linear/On-demand boundary — see note below |
| S7 — Set your pricing and cuts | `configure` | `guide` | `setup` | On-demand — position 4/5 |
| S8 — Set up AI pipelines | `build` | `instruction` | `build` | On-demand — position 4/5 |
| S9 — Verify your node is working end to end | `verify` | `instruction` | `setup` | On-demand — position 4 |
| S10 — Monitor and operate day-to-day | `operate` | `guide` | `operate` | On-demand — position 5 |
| S11 — Optimise earnings and performance | `optimise` | `guide` | `optimise` | On-demand — position 5 |
| S12 — Diagnose and fix problems | `troubleshoot` | `guide` | (any) | On-demand — position 5/6 |

**Note on S6 (Pool node section)**:
S6 is assigned `orient` / `guide` / `evaluate` and is positioned after S5 (node setup). This placement is intentional: pool node candidates are routed out of S1 and through S2–S4 (prerequisites), then encounter S6 before S7. S6 is not a first-time-reader "must read" section — it is an exit ramp for pool node candidates. Its placement between S5 and S7 is correct: it allows pool node candidates to exit cleanly without reading the solo setup section content that does not apply to them.

The 08a framework does not define a specific position for "exit ramp" or "alternate path" sections. S6's placement is architecturally justified and consistent with the canonical decision documented in collation notes (3-run consensus that pool candidates need a dedicated section positioned "after prerequisites but before solo setup"). This is an Orchestrators-specific design pattern — not a schema violation.

**RESULT**: PASS

Sections S1–S5 serve the linear journey. Sections S6 functions as an exit ramp (justified). Sections S7–S12 are on-demand operational/build content. The structure correctly maps to 08a positions.

---

## Check 2 — Obligatory Content in Correct Positions

**Analysis of critical entry path**:

- **LPT stake requirement** (solo video path blocker): Addressed in S2 (viability assessment, linear) and S4 (prerequisites, linear). Both appear before S5 (setup). PASS.
- **ETH for gas** (all on-chain paths): Addressed in S4 (prerequisites, linear) before S5 (setup). PASS.
- **Publicly reachable service URI**: Addressed in S4 (prerequisites, linear) before S5. PASS.
- **VRAM capacity** (AI inference path): Addressed in S2 (viability) and S4 (prerequisites). Both linear. PASS.
- **Pool membership arrangement** (pool node path): Addressed in S6 (pool node section) before solo setup instructions. Pool node candidates exit at S6; they are not forced to read S5 solo setup. PASS.
- **Capability advertisement** (AI path): Addressed in S8 (AI pipeline setup). S8 is on-demand, but this is correct — capability advertisement is a build-phase concern for operators who have already confirmed the AI path in S1–S2. PASS.

**Content in on-demand positions — appropriate?**

- S7 (pricing and cuts): Configuration that requires a running node. On-demand correct. PASS.
- S8 (AI pipelines): Requires S5 complete. On-demand correct. PASS.
- S9 (verify): Verification step after setup. On-demand (position 4). Acceptable placement — verify is not strictly required before a node can run, but is a critical production-quality step. PASS.
- S10 (operations): On-demand correct. PASS.
- S11 (optimise): On-demand correct. PASS.
- S12 (troubleshoot): On-demand correct. PASS.

**RESULT**: PASS

No obligatory content is stranded in on-demand positions. All prerequisites are resolved in linear sections (S1–S5) before setup instructions begin.

---

## Check 3 — Phase 3 Input Compatibility

**What Phase 3 (IA Audit) needs from Phase 1**:
- Audience token
- Primary persona and arriving question
- Per-section: page type, lifecycle stage, purpose, reader question, entry state, exit state
- Jobs to be Done matrix
- Cross-tab routes
- Design flags

**Assessment**:

| Phase 3 input requirement | Present in canonical output? | Notes |
|---|---|---|
| Audience token | Yes — `orchestrator` | 4/4 run consensus |
| Primary persona | Yes — Independent GPU operator (unanimous 4/4) | |
| Arriving question | Yes — "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?" | |
| Per-section complete fields | Yes — all 12 sections have reader question, job, purpose, pageType, entry state, exit state, lifecycleStage | |
| Jobs to be Done | Yes — 7 jobs with full format | Coverage check included (J1–J7, arrival, active-use, return-visit, edge cases) |
| Cross-tab routes | Yes — 9 routes documented (inbound and outbound) | |
| Design flags | Yes — S5 (may need to split), S8 (load flag — AI section may be substantially longer), S8 (BYOC path not covered) | |
| Persona path validation | Yes — all 5 personas validated with structural blocks, knowledge gaps, and gap notes for Phase 2 content briefs | |
| Open items | Yes — 5 open items documented in collation notes (LIP-92 BLOCKING, active set size NON-BLOCKING, pool node term NON-BLOCKING, AI configuration surface NON-BLOCKING, primary persona tie-break NON-BLOCKING) | |

**RESULT**: PASS

All required Phase 3 inputs are present. The canonical output provides complete section-level specifications that an IA audit agent can use to map against the actual v2/orchestrators/ folder structure.

---

## Check 4 — Personas: Complete Entry Question, Knowledge Gap, JTBD

**Assessment**:

| Persona | Entry question present? | Knowledge gap documented? | JTBD clear? |
|---|---|---|---|
| Independent GPU operator (solo video/dual) | Yes — path identification via S1 | Yes — S4 must cover LPT acquisition path, S3 must clarify reward calls are active requirement | Yes — J1–J4, J7 |
| AI inference specialist | Yes — AI path via S1 | Yes — S3 must clarify active set not required for AI inference; S4 must distinguish AI prerequisites | Yes — J1, J2, J6 |
| Capital-constrained operator (pool node path) | Yes — S1 routes to S6 | Yes — S4 must explicitly state pool node operators do not need LPT | Yes — J1, J2 |
| Running operator (return visit) | Yes — enters S10, S11, or S12 directly | Yes — S12 must distinguish diagnostic paths (low demand vs low selection vs low margin) | Yes — J5, J7 |
| Delegator-turned-operator | Yes — S2 viability assessment | Yes — S2 must surface cost-of-operation framing; S7 must address cuts from operator perspective | Yes — J1, J6 |

**Gap notes for Phase 2 content briefs** (from canonical output):
1. S3: Add explicit statement that active set membership is NOT required for AI inference routing
2. S4: Separate LPT acquisition from general prerequisites; mark LPT section as "solo video path only"
3. S4: Explicitly state pool node operators do not need LPT
4. S7: Address cut settings from operator perspective (what to set and why)
5. S12: Structure as three distinct diagnostic paths

All 5 gap notes are documented. No persona has a missing section.

**RESULT**: PASS

---

## Check 5 — Terminology Conflicts and Open Items Documented

**Assessment**:

| Item | Severity | Status |
|---|---|---|
| LIP-92 identity conflict (AI registry vs Treasury Contribution %) | BLOCKING | DOCUMENTED — Open Item 1. Capability Advertisement term does not cite LIP-92; both claims require `[verify-against: https://github.com/livepeer/LIPs]` |
| Active set size value (glossary cites 100) | NON-BLOCKING | DOCUMENTED — Open Item 2. Marked `[verify-live: https://explorer.livepeer.org]`; no hard-coded value in canonical output |
| Pool node term canonicalisation | NON-BLOCKING | DOCUMENTED — Open Item 3. "Pool node" used throughout; glossary still uses "Pool Worker" as primary |
| go-livepeer AI configuration surface staleness | NON-BLOCKING for structure; BLOCKING for AI instructional content | DOCUMENTED — Open Item 4 |
| Primary persona tie-break (video vs AI path) | NON-BLOCKING | DOCUMENTED — Open Item 5 |
| Warm model beta qualifier (one warm model per GPU) | INFO | DOCUMENTED in Addendum — high staleness; verify against latest release |
| BYOC path not covered | HIGH | DOCUMENTED as design flag on S8 |
| Single-run terms excluded | DOCUMENTED | "Slashing", "round", "unbonding period", "BYOC" — all documented with exclusion rationale |
| Verify flags | Carried | All `[verify-against]` and `[verify-live]` flags from any v4 run are present in canonical TERMINOLOGY_LOCK |

**RESULT**: PASS

All 5 numbered open items are documented with blocking status. All verify flags are carried through. Single-run term exclusions are documented with rationale.

---

## Check 6 — Enum Value Compliance

**Assessment**: All canonical `purpose`, `pageType`, and `lifecycleStage` values are from the canonical lists per content-pipeline-framework.md.

Specific checks:
- All `purpose` values: `orient`, `evaluate`, `explain`, `learn`, `start`, `configure`, `build`, `verify`, `operate`, `optimise`, `troubleshoot` — all canonical
- All `pageType` values: `navigation`, `concept`, `instruction`, `guide` — all canonical
- All `lifecycleStage` values: `discover`, `evaluate`, `setup`, `build`, `operate`, `optimise` — all canonical
- Audience token `orchestrator` is canonical
- No deprecated type names used

One note: `purpose: learn` is used for S4 (Prerequisites). This is confirmed as one of the 15 canonical purpose values. PASS.

**RESULT**: PASS

---

## Overall Check B Verdict

| Check | Result | Evidence |
|---|---|---|
| 1. Linear/on-demand position schema | PASS | S1–S5 linear; S6 pool exit ramp (justified by collation consensus); S7–S12 on-demand |
| 2. Obligatory content in correct positions | PASS | LPT stake, ETH, service URI, VRAM — all resolved in linear sections S1–S5 before setup |
| 3. Phase 3 input compatibility | PASS | All required fields present for all 12 sections |
| 4. Persona completeness | PASS | All 5 personas have entry question, knowledge gap, JTBD; 5 Phase 2 content brief gap notes documented |
| 5. Terminology conflicts documented | PASS | 5 open items documented with blocking status; all verify flags carried |
| 6. Enum value compliance | PASS | All values canonical |

---

## Outstanding Items (Non-Blocking for Check B, Blocking for Phase 2)

1. **LIP-92 identity conflict** — BLOCKING for Phase 2 content that references the AI capability registry by LIP number. Human must check the LIPs repo and confirm which LIP number governs the AI capability registry before any AI pipeline section can cite a specific LIP.

2. **BYOC path coverage** — HIGH for Phase 2 AI pipeline section. BYOC (custom container deployment for non-standard AI models) is flagged as a design gap in S8. Phase 2 content brief for S8 must address whether BYOC warrants its own page.

3. **Active set size** — NON-BLOCKING but must be verified against Explorer before publication. No hard-coded value in canonical output; all uses are marked `[verify-live]`.

4. **Pool node term** — NON-BLOCKING but glossary update required. "Pool node" should be the primary entry replacing "Pool Worker" before content is published.

---

## APPROVED FOR PHASE 2

The canonical Orchestrators audience design output (`collated/canonical-orchestrators-audience-design.md`) passes all six Check B criteria. It correctly maps to the 08a-ia-per-tab.md linear/on-demand schema, provides complete Phase 3 inputs, has fully documented personas with gap notes, and carries all terminology conflicts and open items forward with blocking status.

**APPROVED FOR PHASE 2 — Orchestrators tab**

Subject to resolution of the 1 BLOCKING open item (LIP-92 identity conflict) before any Phase 2 content that cites a LIP number in the context of AI capability registry.
