# Dual Mode Orchestrator — Pre-Brief
## Task 1: Findings Summary · Task 2: 10 Questions · Task 3: Page Layout

---

## TASK 1 — Findings Summary

### What exists

**The problem is named and confirmed.** The Copywriting Governance Framework (Document 3, Issue 10.2) explicitly classifies the missing hybrid path as an "L0 failure — majority operator path undocumented." It blocks all further GPU Nodes tab content until resolved. The uploaded L0 Product Exercise provides a thorough analysis confirming the gap.

**The gateway precedent is established.** The glossary defines node type `Dual` (Badge: green) as "both video transcoding and AI inference on a single gateway node." The three-axis deployment model (operational mode / setup type / node type) gives us the vocabulary. Alison's instruction to call this "Dual Mode" aligns with the existing gateway `Dual` node-type badge — the term is ready to use for orchestrators in parallel.

**Terminology conflict to resolve.** The SKILL.md terminology section says the prose form is "dual-workload configuration" (NOT "dual mode" or "dual gateway type"). The gateway glossary uses `Dual` as the badge label. For orchestrators, the question is whether the page title and prose uses "Dual Mode" (matching Alison's instruction), "dual-workload" (matching SKILL.md prose rules), or some hybrid. This needs a decision before the draft.

**The L0 exercise (uploaded) provides a strong product foundation.** It maps:
- 12 assumptions across Value / Usability / Viability / Feasibility axes
- An Opportunity Solution Tree (4 pain points, 10 solutions)
- A 7-stage customer journey map for "Sam" (RTX 4090 ML engineer)
- A phased build plan (3 phases, 10 concrete deliverables)
- 5 open questions requiring SME validation (Explorer data, VRAM thresholds, GPU contention, commercial operator model)

**The IA target state does not yet include this page.** The GPU Nodes IA planning doc defines a target nav with `setup/overview`, `setup/hardware-requirements`, `setup/install-go-livepeer`, `setup/orch-config`, and `setup/publish-offerings` — but no `dual-mode.mdx` or `hybrid-setup.mdx`. The page's nav placement is unresolved.

**Technical substrate is confirmed.** The FAQ research report and existing MDX drafts confirm:
- Single unified go-livepeer binary handles both workloads (AI and mainnet merged, no separate AI build)
- `aiModels.json` + `-pricePerCapability` handles AI capability advertisement alongside standard `-pricePerUnit` transcoding pricing
- Both `capabilities` and `capabilities_prices` fields are broadcast in `OrchestratorInfo`
- `tools.livepeer.cloud` (not `livepeer.tools`, which is down) shows AI-capable operators and warm models
- The `AI-prompt-start` page is a confirmed gap — the "add AI to existing video node" bridge does not yet exist

**Persona coverage.** The page needs to serve primarily Persona A (Solo GPU Operator), Persona C (Infrastructure Engineer), and Persona E (AI Compute Specialist) from the GPU nodes persona set. Persona B (Pool Worker) is out of scope. Persona D (Enterprise) is secondary.

**Content accuracy flags from existing research:**
- Minimum VRAM for dual-mode: confirmed 16GB as "official docs suggest" but Cloud SPE Ollama guide shows 8GB+ viable for LLM. This is unverified for transcoding + AI simultaneously.
- GPU contention between video and AI on a single card: not yet documented anywhere in official sources.
- `-reward=false` flag for split O+T setups is confirmed from v1 docs but may have changed in current release — needs Rick review.
- `AI-prompt-start` page referenced in `ai-workloads-overview.mdx` does not yet exist — it is listed as a Phase 1 gap.

**Copywriting framework requirements for this page:**
- L0 is answerable (the exercise provides the answers)
- L1 persona mapping must be completed before draft
- L2 sequence: value prop before setup steps; hardware prerequisites stated once, not repeated
- L4 banned words checked; no "effectively", "simply", "various", "several", etc.
- L5 gate: no REVIEW flags in decision-critical positions before merge

---

### What the Dual Mode orchestrator page is NOT

Per scope discipline and SKILL.md content boundaries:

| Out of scope | Correct home |
|---|---|
| Pool worker setup | `get-started/join-a-pool.mdx` |
| Pricing strategy depth | `advanced/earnings.mdx` (planned) |
| Full aiModels.json schema | `advanced/ai-pipelines.mdx` |
| O-T split / remote workers | `advanced/run-a-pool.mdx` or BYOC |
| Enterprise data centre setup | `setup/enterprise-and-data-centres.mdx` |
| Pool operation (run-a-pool) | `advanced/run-a-pool.mdx` |

---

## TASK 2 — 10 Questions

**Q1 — Nav placement (IA decision)**
Where does this page live in the GPU Nodes tab nav? The L0 exercise proposes `deployment-details/hybrid-setup.mdx`. The target IA has no such group — the closest candidates are `setup/` (alongside hardware, install, config) or `get-started/` (as a path-selection page). This affects the page's scope and depth. Where should it sit?

**Q2 — Prose terminology (terminology ruling needed)**
The SKILL.md terminology section says `"dual-workload configuration"` is the correct prose form — NOT "dual mode" or "dual gateway type." Alison's instruction says to call this framework "Dual Mode" (as we have for Gateways). Do we:
(a) use "Dual Mode" as the page title and badge label, but "dual-workload" in body prose (paralleling gateway convention), or
(b) use "Dual Mode" throughout (overriding the SKILL.md prose rule for this term)?
This needs a ruling before draft.

**Q3 — VRAM floor (SME: Rick)**
What is the minimum VRAM required to run both video transcoding and at least one AI pipeline simultaneously? The L0 exercise lists four candidates: 8GB, 12GB, 16GB, 24GB. The cloud SPE Ollama guide shows 8GB+ viable for LLM pipelines, but 16GB is the official docs suggestion. Is there a verified floor we can publish without a REVIEW flag?

**Q4 — GPU contention (SME: Rick or community)**
When running video transcoding and AI inference simultaneously on a single card, does NVENC/NVDEC compete with CUDA for VRAM or execution units? Is there a documented workaround (session limits, workload scheduling, GPU partitioning)? This is listed as "Low confidence" in the L0 exercise. Can it be verified before the draft, or does it ship with a REVIEW flag?

**Q5 — The "Add AI to Existing Node" path**
The `ai-workloads-overview.mdx` already contains a Note pointing to `/v2/orchestrators/get-started/AI-prompt-start` for operators adding AI to an existing video node. That page is confirmed not yet to exist (Phase 1 gap). Should this Dual Mode page cover that path (existing video operator upgrading), or should it only cover fresh dual-mode setup, with the upgrade path deferred to `AI-prompt-start`?

**Q6 — Quickstart relationship**
The L0 exercise notes the quickstart already has dual configs in `code.jsx`. Does the Dual Mode page replace the quickstart's dual-config section, supplement it, or link to it as a prerequisite? Is the quickstart a tutorial (learning-oriented) while this is a how-to (task-oriented), and therefore they coexist with different scopes?

**Q7 — Flag set (technical verification)**
The L0 exercise lists `-httpIngest` + `-transcodingOptions` + `-aiServiceRegistry` as the core dual-mode flag combination. Has this been verified against the current go-livepeer release? Are there other flags required (e.g., `-orchSecret`, `-nvidia`, `-aiRunnerExternalUrl`)? Can Rick confirm the minimal verified flag set for a dual-mode node?

**Q8 — Navigator/decision tree dependency**
The L0 exercise proposes reframing the navigator so "both" is the default option. Does the Dual Mode page assume the navigator already routes there (i.e., it's a downstream page), or does it need to self-contain the "should I run dual mode?" decision logic because the navigator hasn't been updated yet?

**Q9 — Persona routing on the page**
The L0 exercise maps two key sub-journeys: (a) new operator starting fresh with dual mode, and (b) existing video operator adding AI. If both paths land on this page, should they be separated via Tabs or an AccordionGroup ("Starting fresh" / "Already running video")? Or should they be sequenced as a single unified flow?

**Q10 — Illustrative examples (numbers policy)**
The copywriting framework bans vague intensifiers and requires numbers where quantities are claimed. The L0 exercise mentions earnings comparisons between hybrid and single-workload operators but flags this as "Low confidence — needs Explorer data analysis." Should the page use illustrative, labelled examples (e.g., "illustrative: ~0.003 ETH per 1,000 AI jobs") or avoid earnings examples entirely until Explorer data is confirmed?

---

## TASK 3 — What I Know and How I Would Lay Out the Page

### What I know about the Dual Mode orchestrator

**The core technical fact:** go-livepeer runs a single unified binary that handles both video transcoding and AI inference. Dual mode is not an advanced configuration — it is two capability registrations on the same node, two pricing configurations, and two Docker containers (go-livepeer + AI Runner). The gateway selection algorithm treats them independently: video jobs use `pricePerUnit` (wei per pixel) and stake weight; AI jobs use `capabilities_prices` per pipeline and model.

**The revenue model:** An operator running Dual Mode earns from two streams simultaneously — ETH transcoding fees (proportional to work volume and stake) and AI inference fees (per job, per pipeline, demand-driven). The L0 exercise notes that Messari data shows top-5 operators by stake earn 40–50% of staking rewards but only ~20% of transcoding fees — pricing strategy and diversification matter more than stake alone at the individual operator level.

**The hardware reality:** Any card capable of AI inference is also capable of video transcoding (NVENC/NVDEC are hardware-fixed). The question is VRAM headroom. A 12–16GB card can run light AI pipelines (text-to-image on a 4–8B diffusion model) alongside transcoding. A 24GB card (RTX 3090, 4090) is the practical dual-mode sweet spot. VRAM contention is a real operational concern that needs a documented strategy — either session limits or workload prioritisation.

**The configuration delta:** An existing video orchestrator becomes a Dual Mode node by:
1. Adding an `aiModels.json` (capability advertisement and pricing)
2. Starting an AI Runner container (the GPU inference process)
3. Passing `-aiServiceRegistry` to point go-livepeer at the runner
4. Setting per-capability pricing alongside existing `-pricePerUnit`

No changes to on-chain registration, staking, or video config are required. This is the core "easy upgrade" message.

**Verification tooling exists:** `curl http://localhost:7935/getNetworkCapabilities | jq` shows what capabilities are advertised. `tools.livepeer.cloud/ai/network-capabilities` shows the operator externally. This gives the page a clean verification loop.

---

### How I Would Lay Out the Page

**Page type:** `how_to`
**Audience:** `orchestrator`
**Proposed path:** `v2/orchestrators/setup/dual-mode.mdx`
**Sidebar title:** `Dual Mode`

---

**Opening (2–3 sentences)**
Positions Dual Mode as the primary operating model. States that adding AI inference to a running video node requires no on-chain changes and no new staking — only an AI Runner container and `aiModels.json`. No throat-clearing.

**Optional `<Note>`:** Points existing operators at the verification commands (for those who came here from the navigator to check they're already running dual mode).

---

**Section 1 — "What Changes" (brief concept framing)**
Not a full concept page — just enough to explain the two revenue streams and the configuration delta. A `<StyledTable>` comparing Video-only / AI-only / Dual Mode across: workload types, revenue source, required config additions, VRAM demand, and OS requirement. This is the page's decision anchor.

---

**Section 2 — "Before You Start" (prerequisites)**
Stated once, clearly. Hardware floor (VRAM), OS requirement (Linux), assumption that a video orchestrator is already running or that the reader is following quickstart. Link to install page. No re-explanation of what has already been covered on linked pages.

---

**Section 3 — Setup Sequence (the core of the page)**
`<StyledSteps>` with 4–5 steps:
1. Prepare the AI Runner container (Docker pull, GPU access confirm)
2. Write `aiModels.json` (minimum working example, annotated)
3. Start go-livepeer with `-aiServiceRegistry` flag
4. Set per-capability pricing alongside `-pricePerUnit`
5. Verify (both transcoding and AI capabilities advertised)

Each step has a code block with a filename/title. Steps 2 and 4 have inline `{/* REVIEW: */}` flags for SME-verified values.

---

**Section 4 — Verification**
Two-command check:
- `curl localhost:7935/getNetworkCapabilities | jq` (local)
- `tools.livepeer.cloud/ai/network-capabilities` (external)
Expected output shown. Brief troubleshooting note with a link to the FAQ for error messages.

---

**Section 5 — Resource Management (brief)**
The VRAM budgeting question. A small `<StyledTable>` or AccordionGroup mapping GPU class to recommended workload combination. Flags the GPU contention risk with a documented mitigation (session limits, or a REVIEW flag if not confirmed). This is the section most likely to need a REVIEW flag pre-merge.

---

**Section 6 — "Optimising for Both Revenue Streams" (brief, forward-pointing)**
Not a deep pricing guide — a 3–4 sentence bridge. States that video pricing and AI pricing are set independently, that AI pricing is per-capability (not per-pixel), and routes to the earnings and pricing pages. Keeps the page focused on setup, not strategy.

---

**Closing `<CardGroup>` (4 cards, 2 cols)**
- Configure Pricing (earnings optimisation)
- AI Pipelines reference (aiModels.json depth)
- Troubleshooting / FAQ
- Gateway Relationships (how your capabilities are discovered)

---

### What the page deliberately does NOT do

- Re-explain on-chain staking or LPT (link to economics page)
- Cover pool workers (separate page)
- Cover BYOC / remote workers (separate page)
- Cover the "when to split to O-T" threshold (separate advanced page)
- Reproduce the full aiModels.json schema (separate reference)

---

### Pre-draft L0 answers (from the exercise)

| L0 Question | Answer |
|---|---|
| Q1 Operator outcome | Adding AI inference to an existing video node turns idle VRAM into a second revenue stream with no on-chain changes required. |
| Q2 Majority path | An operator with a video node already running who adds AI Runner containers — this is the upgrade path, not a fresh install. |
| Q3 Reader's real alternative | Continue running video-only and leave AI inference revenue uncaptured. |
| Q4 Required belief | Your existing video node hardware can serve AI jobs today with a single config addition. |

---

*Pre-brief complete. Awaiting answers to Q1–Q10 before draft proceeds.*
