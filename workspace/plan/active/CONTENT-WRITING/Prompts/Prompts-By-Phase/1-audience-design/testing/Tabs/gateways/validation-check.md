# Check B — Canonical Design Alignment Validation
## Tab: Gateways
## Check type: Phase 1 Audience Design Output — Retroactive Check B

**Canonical output reviewed**: `collated/canonical-gateways-audience-design.md`
**Collation notes reviewed**: `collated/collation-notes-gateways.md`
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
  - Position 1: portal/navigator (navigation)
  - Position 2: concepts (concept)
  - Position 3: quickstart (instruction)
- Positions 4–6 are ON-DEMAND
  - Position 4: setup (instruction/setup)
  - Position 5: guides (guide)
  - Position 6: resources (reference, knowledge-hub)

**Canonical output section structure (13 sections)**:

| Section | Reader question | purpose | pageType | lifecycleStage | Linear/On-demand assignment |
|---|---|---|---|---|---|
| S1 — Gateway path finder | Path identification | `orient` | `navigation` | `evaluate` | Linear — position 1 equivalent (routing/disambiguation) |
| S2 — What a gateway does | Mental model | `explain` | `concept` | `discover` | Linear — position 2 equivalent (concepts) |
| S3 — Payments, deposits, funding | Payment mechanics | `explain` | `concept` | `evaluate` | Linear — position 2/3 boundary (concepts leading to setup) |
| S4 — On-chain gateway quickstart | First working node | `start` | `instruction` | `setup` | Linear — position 3 equivalent (quickstart) |
| S5 — Off-chain gateway quickstart | First working node (off-chain path) | `start` | `instruction` | `setup` | Linear — position 3 equivalent (parallel path quickstart) |
| S6 — Pricing and cost control | Cost configuration | `configure` | `guide` | `build` | On-demand — position 4/5 (setup/guides) |
| S7 — Orchestrator selection and routing | Routing tuning | `configure` | `guide` | `build` | On-demand — position 5 (guides) |
| S8 — AI pipeline routing | AI workload routing | `configure` | `instruction` | `build` | On-demand — position 4/5 |
| S9 — Dual mode configuration | Dual workload config | `configure` | `instruction` | `build` | On-demand — position 4/5 |
| S10 — Payment operations and deposit management | Deposit management | `operate` | `guide` | `operate` | On-demand — position 5 |
| S11 — Running the gateway in production | Production operations | `operate` | `guide` | `operate` | On-demand — position 5 |
| S12 — Troubleshooting job failures | Diagnostic | `troubleshoot` | `guide` | any | On-demand — position 6 (reference/troubleshoot) |
| S13 — Turning a gateway into a platform (NaaP) | Platform build | `build` | `guide` | `build` | On-demand — position 5 |

**RESULT**: PASS

The canonical section structure correctly maps to the 08a linear/on-demand schema. Sections S1–S5 serve the linear journey (orientation → concept understanding → parallel quickstarts). Sections S6–S13 are on-demand operational and build content. The two parallel quickstarts (S4 and S5) are both correctly placed in the linear position 3 zone — this is the justified exception noted in the canonical output (they cannot be merged without creating a branching instruction structure that blocks one path).

**Note on lifecycleStage**: S1 is assigned `evaluate` in the canonical output rather than `discover`. This is technically correct for Gateways — the path-selection decision in S1 IS evaluative work (choosing between on-chain/off-chain/hosted/NaaP). The 08a framework assigns position 1 as portal/navigator, which is typically `discover`. However, for this tab, S1 is simultaneously a routing section AND an evaluation gate. This is documented in the collation notes and is a deliberate design decision, not an error.

---

## Check 2 — Obligatory Content in Correct Positions

**Question**: Is any content that must be read before the reader can take action stranded in on-demand positions?

**Analysis of critical entry path**:
- The ETH deposit prerequisite is correctly addressed in S3 (linear, before S4 quickstart). A reader cannot proceed without it. PASS.
- The remote signer prerequisite for off-chain is correctly addressed in S3 (linear, before S5 quickstart). PASS.
- NaaP path disambiguation is correctly handled in S1 (linear, first section). PASS.
- Payment mechanics education (S3) correctly precedes both quickstarts (S4, S5). PASS.

**Content in on-demand positions — appropriate?**
- S6 (pricing), S7 (routing), S8 (AI pipelines), S9 (dual mode): All are build/configuration content. A reader can run a basic gateway without these. On-demand placement is correct. PASS.
- S10 (deposit management): Operational content; correct for on-demand. PASS.
- S11 (production operations): Operational content; correct for on-demand. PASS.
- S12 (troubleshooting): Reference/diagnostic; correct for position 6. PASS.
- S13 (NaaP): Advanced build content; correct for on-demand. PASS.

**RESULT**: PASS

No obligatory content is stranded in on-demand positions. All content a first-time reader must have before taking action is in linear positions (S1–S5).

---

## Check 3 — Phase 3 Input Compatibility

**What Phase 3 (structure-audit.md / IA Audit) needs from Phase 1**:
- Audience token for the tab
- Primary persona and arriving question
- Per-section: page type, lifecycle stage, purpose, reader question, entry state, exit state
- Jobs to be Done matrix
- Cross-tab routes
- Design flags requiring attention

**Assessment against canonical Gateways output**:

| Phase 3 input requirement | Present in canonical output? | Notes |
|---|---|---|
| Audience token | Yes — `gateway` | Confirmed across all 3 runs |
| Primary persona | Yes — Self-Hosted Gateway Launcher (unanimous 3/3) | |
| Arriving question | Yes — "I want to route AI or video jobs through Livepeer..." | |
| Per-section complete fields | Yes — all 13 sections have reader question, job, purpose, pageType, entry state, exit state, lifecycleStage | |
| Jobs to be Done | Yes — 7 jobs with full format | Coverage check included in output |
| Cross-tab routes | Yes — 6 routes documented | |
| Design flags | Yes — S8 (cold-start latency flag), S11 (may need to split), S13 (evaluate+build split) | |
| Persona path validation | Yes — all 4 personas validated | |
| Open items | Yes — 2 documented in collation notes (NaaP acronym, BYOC acronym) | |

**RESULT**: PASS

All required Phase 3 inputs are present. The canonical output provides complete section-level specifications that an IA audit agent can use to map against the actual v2/gateways/ folder structure.

---

## Check 4 — Personas: Complete Entry Question, Knowledge Gap, JTBD

**Assessment**:

| Persona | Entry question present? | Knowledge gap documented? | JTBD clear? |
|---|---|---|---|
| Self-Hosted Gateway Launcher (on-chain) | Yes — path ID and prerequisites | Yes — ETH deposit must be surfaced as pre-step in S4 | Yes — J1, J2, J3, J4 |
| Self-Hosted Gateway Launcher (off-chain) | Yes — path ID and prerequisites | Yes — remote signer reference + production validity must be in S5 | Yes — J1, J2, J3, J4 |
| Platform Reseller / NaaP Builder | Yes — S1 must name NaaP path | Yes — NaaP must be introduced architecturally before setup | Yes — J1, J5 |
| Existing Operator Tuning Production | Yes — direct section entry | Yes — S6, S7, S10, S12 must be self-contained | Yes — J3, J4, J7 |
| Builder Graduating from API Use | Yes — stay-hosted vs graduate decision signal | Yes — S1–S2 must include "stay hosted vs graduate" decision | Yes — J1, J2 |

**RESULT**: PASS

All 4 canonical personas have entry vectors, knowledge gaps, and JTBD coverage documented. The persona path validation table provides structural block analysis and identifies specific content requirements per persona. No persona has a missing section in the canonical structure.

---

## Check 5 — Terminology Conflicts and Open Items Documented

**Assessment**:

| Item | Status |
|---|---|
| NaaP acronym conflict (Network as a Platform vs Network-as-a-Product) | DOCUMENTED in collation notes as DEFINITION CONFLICT requiring human resolution |
| BYOC acronym conflict (Bring-Your-Own-Container vs Bring Your Own Compute) | DOCUMENTED in collation notes as DEFINITION CONFLICT; excluded from lock |
| Verify flags carried through | All verify-against and verify-live flags from any run are in the canonical TERMINOLOGY_LOCK |
| GatewayHost CLI flag (single-run term) | DOCUMENTED as single-run: ChatGPT only; included with justification (primary-source-flagged CLI term) |
| Weight factors (selectRandWeight etc) | DOCUMENTED as excluded from lock — note to verify flag names against latest go-livepeer release |
| LPT — gateway relevance | DOCUMENTED — excluded from lock with note on indirect relevance (routing context for S7) |

**RESULT**: PASS

Two definition conflicts requiring human resolution are documented. All verify flags are carried through. Single-run term inclusion/exclusion decisions are documented with reasoning.

---

## Check 6 — Enum Value Compliance

**Assessment**: All canonical `purpose`, `pageType`, and `lifecycleStage` values in the Gateways output are drawn from the canonical 15/7/7 lists per content-pipeline-framework.md.

Specific checks:
- All `purpose` values: `orient`, `explain`, `start`, `configure`, `operate`, `troubleshoot`, `build` — all canonical
- All `pageType` values: `navigation`, `concept`, `instruction`, `guide` — all canonical
- All `lifecycleStage` values: `evaluate`, `discover`, `setup`, `build`, `operate` — all canonical
- No deprecated type names (landing, how_to, overview) used
- Audience token `gateway` is canonical

**RESULT**: PASS

---

## Overall Check B Verdict

| Check | Result | Evidence |
|---|---|---|
| 1. Linear/on-demand position schema | PASS | S1–S5 linear; S6–S13 on-demand; parallel quickstarts justified |
| 2. Obligatory content in correct positions | PASS | ETH prerequisite, remote signer, NaaP path — all in linear sections before action sections |
| 3. Phase 3 input compatibility | PASS | All required fields present for all 13 sections |
| 4. Persona completeness | PASS | All 4 personas have entry question, knowledge gap, JTBD |
| 5. Terminology conflicts documented | PASS | 2 definition conflicts documented; all verify flags carried |
| 6. Enum value compliance | PASS | All values canonical |

---

## Outstanding Items (Non-Blocking for Check B, Blocking for Phase 2)

These items do not fail Check B (which is a structural validation), but must be resolved before Phase 2 can begin:

1. **NaaP acronym expansion** — BLOCKING for Phase 2 content that uses the full NaaP name. Human must confirm "Network as a Platform" vs "Network-as-a-Product" against the livepeer/naap repo before any content page uses the full expansion.

2. **BYOC acronym expansion** — BLOCKING for any Phase 2 content referencing BYOC. The expansion conflict (Bring-Your-Own-Container vs Bring Your Own Compute) must be resolved against go-livepeer repo.

3. **Section count overage** — S9 (Dual mode) at count 13 is flagged as potentially reducible to 12 if dual mode proves to be a configuration note within S6/S7 rather than a standalone section. This is a content-writing determination, not a structural gate.

---

## APPROVED FOR PHASE 2

The canonical Gateways audience design output (`collated/canonical-gateways-audience-design.md`) passes all six Check B criteria. It correctly maps to the 08a-ia-per-tab.md linear/on-demand schema, provides complete Phase 3 inputs, has fully documented personas, and carries all terminology conflicts and open items forward.

**APPROVED FOR PHASE 2 — Gateways tab**

Subject to resolution of the 2 BLOCKING open items (NaaP and BYOC acronym conflicts) before Phase 2 content writing begins.
