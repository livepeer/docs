# Developers — Collation Notes

**Synthesised from**:
- `claude-webv4-developers-audience-design.md`
- `chatgpt-v4-developers-audience-design.md`

**Date**: 2026-03-23

---

## Terminology Conflicts

No definition conflicts were found. The following near-conflicts were resolved by applying decision rules:

**Near-conflict 1 — Gateway**
Both runs agreed that Gateway is not a generic reverse proxy and means the demand-side network actor. Claude's run was more precise: it added "manages payment channels, selects orchestrators, and routes jobs" and crucially distinguished the managed-surface developer path (never sees this complexity) from the protocol-builder path (does). ChatGPT's run said "routes jobs, handles payment flow, and selects Orchestrators." Substantively identical; Claude's version is more precise for the developer audience because it names the hosted-vs-operated distinction. Canonical version: Claude's definition extended with ChatGPT's framing where additive.

**Near-conflict 2 — Orchestrator**
Both runs agreed Orchestrator is not a workflow scheduler and is the GPU compute node. Near-identical definitions; no conflict.

**Near-conflict 3 — LPT**
Both runs agreed LPT is not an API payment mechanism and is the staking/governance token. Claude's run explicitly said "developers pay through the gateway in standard currency" — this precision is carried into the canonical lock.

**Near-conflict 4 — BYOC**
Claude's run did not include a BYOC definition in its explicit TERMINOLOGY_LOCK entry list (it listed the term but not a definition block for it). ChatGPT's run defined it explicitly: "not just 'bring any container'; it refers to packaging custom AI workloads to run through Livepeer's compute path." Single-run definition — included because BYOC is central to a high-Impact persona path (Custom Model Porter / Protocol integrator) with no substitute term. [2-run consensus for the term itself; definition from ChatGPT only — carry `[verify-against: https://github.com/livepeer/go-livepeer]`.]

**Near-conflict 5 — AI Gateway API**
Both runs agreed it is a product-level integration surface, not a generic API label, and that it is draft-sensitive and requires verification. Both carried `[verify-against]` flags. No conflict; flags carried through.

**Near-conflict 6 — Pipeline**
Claude's run included an explicit definition of "pipeline" as a named workload type identified by its input/output modality — a parameter in an API call, not a custom-constructed model chain. ChatGPT's run did not include a standalone "pipeline" definition entry but used the term consistently in the same sense. Single-run definition — included because the ML-vs-Livepeer meaning divergence is a real entry blocker for AI pipeline builder / Interactive Media Builder personas with no substitute term.

**Near-conflict 7 — Livepeer Studio**
ChatGPT's run included an explicit definition: "not the network itself; it is a managed developer surface for accessing video and AI capabilities without running Gateway infrastructure." Claude's run used the term throughout but did not define it in the term-list block. Single-run definition — included because "Studio vs gateway" is the foundational product surface disambiguation for the primary persona path. `[2-run consensus for the term; definition from ChatGPT — carry `[verify-against: https://github.com/livepeer/livepeer-js]`.]`

**Near-conflict 8 — PyTrickle / Trickle Streaming Protocol**
Claude's run included `PyTrickle` and `Trickle Streaming Protocol` in its TERMINOLOGY_LOCK term list. ChatGPT's run did not list these as TERMINOLOGY_LOCK entries but referenced PyTrickle in its suggested sources. Single-run terms — PyTrickle is included (central to the Interactive Media Builder / low-latency AI path with no substitute); Trickle Streaming Protocol excluded from canonical lock (the underlying protocol name is not required to be defined separately from PyTrickle for a developer-facing lock; no functional distinction in any section).

**Near-conflict 9 — NaaP**
Claude's run flagged a conflict: glossary says "Network-as-a-Product", veracity-sources.md says verify in Notion. ChatGPT's run did not include NaaP in its TERMINOLOGY_LOCK. Single-run flag — included in Open Items as NON-BLOCKING (neither run requires NaaP to be cited in any section definition; it is a product-brand label, not a technical term any section depends on).

**Near-conflict 10 — Arbitrum**
ChatGPT's run included `Arbitrum` in its TERMINOLOGY_LOCK. Claude's run did not. Single-run term — excluded from canonical lock. Arbitrum is the chain Livepeer runs on, but no section requires a definition of Arbitrum for the developer audience (the audience is not expected to interact with Arbitrum directly; the LPT definition covers the relevant protocol-layer context). Noted in Excluded Sections context where relevant.

**Terms with verify flags present in one run only — all carried through per Phase 2.2**:
Claude's run did not attach explicit `[verify-against]` URL flags in the TERMINOLOGY_LOCK list (it used prose flags in the Addendum instead). ChatGPT's run attached explicit `[verify-against: URL]` flags for: BYOC, Livepeer Studio, Livepeer.js, AI Gateway API, ComfyStream, Text-to-Image, Image-to-Video, Live-video-to-video, Model ID, Warm model, Cold start. All flags are carried into the canonical lock per collation rule: a flag from one run is sufficient.

---

## Excluded Personas

**Evaluating PM / Technical Lead** (Claude's run only; rank 4, score 5)
Appeared in: `claude-webv4-developers-audience-design.md`
Excluded because: consensus score = 1; does not meet the single-run exception. The exception requires Impact = 3; this persona scored Impact = 2. The concern this persona raises (feasibility assessment, cost model overview) is covered within Section 2 (Map the surface / How the network works) and Section 8/Protocol section — a non-building reader can traverse those sections without a dedicated persona path.

**Protocol Toolmaker** (ChatGPT's run only; rank 4, score 5)
Note: this archetype is NOT excluded. It maps to Claude's run "Protocol integrator" (rank 3, score 6). They share the same arriving state: building tooling, extensions, or protocol-adjacent integrations; familiar with on-chain concepts; needs a source map. Consensus score = 2 (both runs included an equivalent archetype). Included in canonical personas as "Protocol integrator / toolmaker" with the more descriptive name from ChatGPT's run and the more specific entry vector / scores from Claude's run.

---

## Excluded Sections

**Section 9 "Connect auth, events, and internal systems"** (ChatGPT's run, S9)
Appeared in: `chatgpt-v4-developers-audience-design.md`
Excluded from the primary canonical section list because: consensus score = 1. Its function (connecting auth, webhooks, callbacks) is partially covered within Job 3/4 (build the product flow) and is well represented in the on-demand category "Auth, token, and playback-control patterns" / "Webhook and callback behaviour" in both runs. However, this section is flagged in Open Items as NON-BLOCKING — because ChatGPT's run gave `purpose: integrate` for this function, and `integrate` is a canonical purpose value; if Phase 2 content work reveals that auth/webhook wiring cannot adequately be handled within the build sections, this section should be reinstated.

**Section 10 "Verify release readiness"** (ChatGPT's run, S10) — merged
Appeared in: `chatgpt-v4-developers-audience-design.md`
Not excluded but merged with Section 11 "Diagnose failures by layer" into a single canonical section: "Monitor, troubleshoot, and verify." Claude's run covered the same job in a single "Monitor and troubleshoot" section (S7). ChatGPT split it into three sections (S10 verify, S11 diagnose, S12 tune). The merged approach serves the same jobs without requiring 3 separate sections for what is functionally one lifecycle stage. The `verify` and `troubleshoot` and `optimise` purposes are all preserved in the canonical structure — see Structural Disagreements below.

**Section 8 "Build protocol-adjacent tools and extensions"** (ChatGPT's run, S8)
Appeared in: `chatgpt-v4-developers-audience-design.md`
Not excluded but merged with the canonical "Understand the protocol" section (Claude's S8). Both sections serve Job 7 / "deeper protocol understanding and tooling" for the Protocol integrator archetype. ChatGPT's version emphasised the toolmaking side (`purpose: build`, `pageType: guide`); Claude's emphasised conceptual explanation (`purpose: explain`, `pageType: concept`). See Structural Disagreements #3 below.

---

## Structural Disagreements

### Disagreement 1 — Section granularity: monitor/troubleshoot/verify as 1 section vs 3

**What each run said**:
- Claude's run: a single section (S7 "Monitor and troubleshoot"), `purpose: troubleshoot`, `pageType: guide`, serving Job 6 (errors, latency, cold start resolution), lifecycleStage `troubleshoot`.
- ChatGPT's run: three sections — S10 "Verify release readiness" (`purpose: verify`, `pageType: instruction`, lifecycleStage `operate`), S11 "Diagnose failures by layer" (`purpose: troubleshoot`, `pageType: guide`, lifecycleStage `troubleshoot`), S12 "Tune latency, quality, and cost" (`purpose: optimise`, `pageType: guide`, lifecycleStage `optimise`).

**Canonical decision**: Merge into one section with a split-flag. Canonical: "Monitor, troubleshoot, and verify" — `purpose: troubleshoot`, `pageType: guide`, lifecycleStage `troubleshoot`. The `[⚠ Design flag: may need to split into verify (pre-release) / troubleshoot (live failures) / optimise (tuning) sub-sections]` is carried through.

**Reasoning**: The three-section split from ChatGPT's run presupposes that verification, diagnosis, and tuning are meaningfully distinct reader journeys for this audience. That may be true in content detail, but at the audience design level (which determines page existence and ordering, not page content), all three are triggered by the same arriving state: a live or near-live build encountering correctness, reliability, or performance concerns. Splitting them at this level would require three separate page stubs each serving a subset of Job 7. The section count would reach 11 (within range but near the top), and more critically the three sections would all share the same entry state and persona. This is a design flag for Phase 2 — at content design time, the human designer should evaluate whether these become one page with three sections, or three pages. Not canonicalising the split now avoids constraining that decision prematurely. `verify` and `optimise` as purposes are noted in the design flag so they are not lost.

### Disagreement 2 — Video and AI as separate build sections vs a unified "product flow" section

**What each run said**:
- Claude's run: two dedicated sections — S4 "Build a video integration" (`purpose: build`, `pageType: tutorial`) and S5 "Build an AI integration" (`purpose: build`, `pageType: tutorial`), each with distinct entry states, exit states, and jobs.
- ChatGPT's run: two sections that map similarly — S4 "Build application video flows" (`purpose: build`, `pageType: tutorial`) and S5 "Build application AI flows" (`purpose: build`, `pageType: tutorial`) — structurally equivalent to Claude's approach.

**Canonical decision**: Two separate build sections — video and AI — is confirmed by both runs. No disagreement at the structural level. Minor naming difference resolved in favour of Claude's naming (more descriptive of what the reader is doing) with ChatGPT's framing ("application flow" emphasis) noted for Phase 2 content guidance.

**Reasoning**: Both runs independently concluded that video and AI represent distinct implementation paths with different SDKs, mental models, and entry states. This convergence is strong evidence the split is correct.

### Disagreement 3 — Protocol section: concept explanation vs toolmaking guide

**What each run said**:
- Claude's run: S8 "Understand the protocol" — `purpose: explain`, `pageType: concept`, entry state is a developer who wants to reason about the network or build tooling. Exit state: can describe orchestrator selection, LPT role, on-chain interface locations.
- ChatGPT's run: two sections — S8 "Build protocol-adjacent tools and extensions" (`purpose: build`, `pageType: guide`) and an implicit concept layer handled within S2 "Map the surface you are building against." The toolmaking section's exit state is more action-oriented: has identified the relevant code/contract/governance surface.

**Canonical decision**: Single protocol section, `purpose: explain`, `pageType: concept`, with the action-oriented exit state from ChatGPT's S8. The toolmaking function is a design-flag candidate for splitting in Phase 2.

**Reasoning**: The decision hinges on whether the Protocol integrator arrives to understand the network or to build something against it. Both things are true — but at audience design level, the protocol section must first orient them (what is the network doing; where are the surfaces) before they can act. Claude's `purpose: explain` is correct for the primary job. ChatGPT's more action-oriented exit state is better (it replaces "can describe" with "has identified the relevant surface for the tool or extension they want to build") — but the `purpose: build` and `pageType: guide` from ChatGPT's S8 assume the reader has already been oriented. If the concept section and the toolmaking guide are separate, the concept section has no exit route to the toolmaking guide in the section structure. Merging them with an explain purpose and a concrete exit state avoids a dead-end path for the Protocol integrator. The design flag is carried for Phase 2.

### Disagreement 4 — Surface mapping / network explanation: position and purpose

**What each run said**:
- Claude's run: S2 "How the network works (for builders)" — `purpose: explain`, `pageType: concept`, positioned before account setup, lifecycleStage `evaluate`.
- ChatGPT's run: S2 "Map the surface you are building against" — `purpose: explain`, `pageType: concept`, positioned before the first working request, lifecycleStage `evaluate`. Functionally near-identical but ChatGPT's framing is more action-oriented ("what am I integrating with") vs Claude's ("what is the network doing").

**Canonical decision**: Confirmed as S2, `purpose: explain`, `pageType: concept`, lifecycleStage `evaluate`. Reader question from ChatGPT's run is more specific to the developer's immediate concern.

**Reasoning**: Both runs placed this section second and gave it identical enum values. The only difference is the emphasis of the reader question. ChatGPT's "What am I integrating with, and what does each layer own?" is more directly actionable for the primary persona (Fast Feature Shipper / API integrator) who needs to know which surface they are touching, not a general explanation of the network. Claude's phrasing is more appropriate for the Protocol integrator persona. The canonical question should serve the primary persona; the secondary audience can draw what they need from the same section. Canonical question: ChatGPT's version.

### Disagreement 5 — Real-time / custom section: single section vs two sections

**What each run said**:
- Claude's run: single S6 "Go real-time or custom" — `purpose: build`, `pageType: guide`, carrying a `[⚠ Design flag: may need to split]` because it spans both evaluation content (BYOC vs hosted) and build-path content (PyTrickle / ComfyStream implementation).
- ChatGPT's run: two sections — S6 "Build a live interactive media loop" (`purpose: build`, `pageType: guide`) and S7 "Bring your own model or container" (`purpose: configure`, `pageType: guide`). These cleanly separate the low-latency interactive media path from the custom compute packaging path.

**Canonical decision**: OPEN ITEM — see Open Items #1. Both approaches are defensible; with only 2 runs and direct disagreement, this cannot be canonicalised without human resolution.

**Reasoning**: Claude's design flag explicitly anticipated this split. ChatGPT's run independently arrived at the split. However, the split produces a section count of 9 (with the merged monitor section) vs Claude's 9 with a flagged section. The key unresolved question is whether Interactive Media Builder and Custom Model Porter are different enough in their arriving states to require separate sections, or whether a single guide with routing content is adequate. This is a content design decision that audience design alone cannot resolve — it depends on how much the implementation paths diverge in practice. Flagged as BLOCKING because whichever decision is made changes the section count and the persona path validation for two personas.

---

## Single-Run Flags

### PyTrickle — terminology lock inclusion
Appeared in Claude's run only as an explicit TERMINOLOGY_LOCK entry. Included in canonical lock because PyTrickle is the primary SDK for the low-latency / real-time AI video path and no other term in either run covers this path. The Interactive Media Builder persona has no substitute entry point without it. `[verify-against: https://github.com/livepeer/pytrickle]` carried from ChatGPT's suggested source (which referenced the repo without locking the term).

### Pipeline (Livepeer-specific meaning) — terminology lock inclusion
Appeared in Claude's run only as an explicit definition. Included because the ML-vs-Livepeer meaning divergence is a genuine entry blocker for AI pipeline builder / Interactive Media Builder personas.

### NaaP acronym conflict flag
Appeared in Claude's run only. Carried into Open Items as NON-BLOCKING. ChatGPT's run did not mention NaaP; absence is not confirmation the issue does not exist.

### Section "Connect auth, events, and internal systems" (ChatGPT S9)
Single-run section. Not included in canonical structure because the job is partially served by the on-demand category set and the build sections. Carried into Open Items as NON-BLOCKING for Phase 2 review.

---

## Open Items (require human resolution before Phase 2)

### 1. Real-time vs custom compute: one section or two — BLOCKING

The two runs disagreed on whether the low-latency interactive media path (PyTrickle / live-video-to-video) and the custom compute packaging path (BYOC / ComfyStream) belong in one section or two.

- Claude's run: one section "Go real-time or custom" with a split-flag.
- ChatGPT's run: two sections — "Build a live interactive media loop" and "Bring your own model or container."

**Resolution path**: Human designer reviews whether Interactive Media Builder and Custom Model Porter share enough setup prerequisites (both need a working AI integration before this section) to be served by a single guide with two tracks, or whether their divergent exit states (real-time pipeline prototype vs packaged custom container) require separate pages. Check against Phase 2 content scope for both personas. If split: canonical section count reaches 9 (within range). If unified: carry the split-flag from Claude's run.

### 2. "Connect auth, events, and internal systems" — section inclusion decision — NON-BLOCKING

ChatGPT's run included a dedicated section (S9) for connecting auth, events, webhooks, and callbacks into the product stack (`purpose: integrate`, `pageType: guide`). Claude's run did not include this section; those concerns are addressed within the build sections and on-demand category set.

Note: `integrate` is a canonical purpose value. The question is not whether this function is valid, but whether it warrants a dedicated section.

**Resolution path**: Phase 2 content designer reviews whether auth/webhook connection is adequately handled within the video and AI build sections, or whether the integration wiring is complex enough (e.g., playback tokens, Studio webhooks, callback schemas) to require a dedicated section. If a dedicated section is added, section count reaches 9 or 10 (within range). Decision must be made before the build sections are drafted, as it affects where auth content lives.

### 3. NaaP acronym expansion — NON-BLOCKING

Claude's run flagged: glossary says "Network-as-a-Product"; `veracity-sources.md` says verify against Notion. ChatGPT's run did not mention NaaP.

No section in the canonical structure cites NaaP as a required term, so this does not block section-level content work. However, if any section or callout in Phase 2 uses the NaaP label, the expansion must be verified before publication.

**Resolution path**: Check the Livepeer Notion workspace (NaaP pages) for the authoritative expansion. Update the canonical TERMINOLOGY_LOCK entry once resolved. Do not use the glossary expansion without Notion verification.

### 4. AI Gateway API — name stability — NON-BLOCKING

Both runs flagged AI Gateway API as draft-sensitive and requiring verification. The exact name, endpoint structure, and versioning must be confirmed against `https://github.com/livepeer/livepeer-ai-js` before any section cites the API by name.

**Resolution path**: Phase 2 content reviewer checks the livepeer-ai-js repo for the current stable product name and endpoint pattern. If the name has changed, update all section reader questions and exit states in Sections 3, 4 (AI flows), and the equivalent of Section 5/6 that reference it.

### 5. Studio path vs self-hosted gateway path — disambiguation scope — NON-BLOCKING

Claude's run noted that Section 3 (Get access / first working result) must make the Studio path explicit and distinguish Studio vs self-hosted gateway. Neither run fully specified the decision logic for how a developer knows which to use.

**Resolution path**: Phase 2 content designer specifies, within the disambiguation section (S1), the criteria for choosing Livepeer Studio vs operating gateway infrastructure. This decision point should surface before Section 3 — readers should arrive at Section 3 already knowing which path they are on.

---

## Run Quality Notes

### Claude Web v4 (`claude-webv4-developers-audience-design.md`)

**Key strength**: Terminology precision. Claude's run produced the most careful analysis of network-specific term conflicts — particularly the Gateway/Pipeline/LPT disambiguation notes, which explicitly name what a developer would assume from the general-software meaning and then correct it. The Pipeline definition (named workload type vs chained model operations) is a specific, accurate correction that ChatGPT's run missed entirely. This level of domain-differentiation thinking is the most valuable input for tabs where Livepeer terminology is most likely to produce false-familiarity errors in developer readers.

**Key weakness**: Section granularity — Claude's run under-split the operational end of the journey. The single "Monitor and troubleshoot" section collapses three materially different reader tasks (pre-release verification, live failure diagnosis, performance tuning), each of which has a distinct entry state and success criterion. The design flag was correct, but the run did not follow through on the split. This means the canonical structure inherits an ambiguous section that must be resolved in Phase 2.

### ChatGPT v4 (`chatgpt-v4-developers-audience-design.md`)

**Key strength**: Section exit-state specificity. ChatGPT's sections consistently produced concrete, action-oriented exit states. For example, S7 "Bring your own model or container" exits with "Has packaged the workload and chosen the correct execution path for it" — a verifiable binary outcome. S10 "Verify release readiness" exits with "Has completed a release-readiness verification pass for the chosen path." These are more testable as content success criteria than Claude's equivalents, which tended toward "can describe" or "can articulate" formulations in 3 of 9 sections.

**Key weakness**: Protocol section handling. ChatGPT's run split protocol-adjacent work across two sections (S2 surface mapping + S8 toolmaking) in a way that leaves the Protocol Toolmaker persona without a clear conceptual grounding section — S2 is written for the primary persona (Fast Feature Shipper) and S8 jumps directly to toolmaking. A protocol-level developer arriving without a prior working integration would reach S8 with insufficient orientation. This is a structural gap that Claude's single protocol section (S8 "Understand the protocol") avoided by keeping concept and toolmaking together.

### Model pairing recommendation

For follow-on tabs of similar complexity (multiple distinct developer sub-paths, heavy SDK/API terminology, risk of false-familiarity errors from overlap with general software concepts), **Claude should run first to produce the TERMINOLOGY_LOCK and persona disambiguation**, because its false-familiarity analysis (the Pipeline definition, the Gateway managed-vs-operated distinction, the LPT billing correction) is the hardest input to recover if it is absent — ChatGPT's run did not attempt it. **ChatGPT should run second** to stress-test the section structure and produce concrete exit states, because its exit-state specificity and willingness to split sections at the operational end of the journey complement Claude's tendency to under-granularise post-build stages. The combination — Claude for terminology and arriving-state analysis, ChatGPT for section exit precision and operational granularity — produces a more complete synthesis than either run alone. This pairing is most valuable on tabs where the audience has sub-paths with genuinely different success criteria (Gateways, Orchestrators likely fit this profile).
