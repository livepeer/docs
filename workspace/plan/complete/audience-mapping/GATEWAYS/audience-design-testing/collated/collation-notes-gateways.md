# Gateways — Collation Notes

**Synthesised from**:
  - `chatgpt-v4-gateways-audience-design.md`
  - `claude-web-v4-gateways-audience-design.md`
  - `perplexity-TAB_ Gateways_TASK_ Execute the audience-design-br.md`
**Date**: 2026-03-23

---

## Terminology Conflicts

### DEFINITION CONFLICT: NaaP acronym expansion

- **ChatGPT**: Uses "Network as a Platform (NaaP)" consistently throughout.
- **Claude Web**: Flags explicitly that the glossary heading says "Network as a Platform" but the glossary body says "Network-as-a-Product" — notes this as an internal inconsistency and marks it `[verify-against: github.com/livepeer/naap]`.
- **Perplexity**: Flags the same acronym/expansion mismatch ("Network as a Platform" vs "Network-as-a-Product") and excludes NaaP from the TERMINOLOGY_LOCK pending resolution, also marking `[verify-against: https://github.com/livepeer/naap]`.

**Canonical decision**: NaaP is included in the canonical lock under "Network as a Platform" (the heading form, which is consistent across all three runs) with the definition drawn from ChatGPT's most complete formulation. The `[verify-against: https://github.com/livepeer/naap]` flag is carried through. The acronym expansion "Network-as-a-Product" appearing in the glossary body is flagged here as a potential authoring error requiring human resolution before any content page uses the full expansion.

**Human action required**: Confirm canonical full-form expansion of NaaP against the livepeer/naap repo readme or a primary source before use in content.

---

### DEFINITION CONFLICT: BYOC acronym expansion

- **Claude Web**: Notes that the glossary entry defines BYOC as "Bring-Your-Own-Container" while standard usage and the Product Context block treat it as "Bring Your Own Compute." Excludes from lock.
- **Perplexity**: Notes the same expansion conflict ("Bring-Your-Own-Container" vs "Bring Your Own Compute") and excludes from lock.
- **ChatGPT**: Does not mention BYOC.

**Canonical decision**: BYOC is excluded from the canonical TERMINOLOGY_LOCK. The expansion conflict cannot be resolved from provided sources. BYOC appears to be an orchestrator-side concept (custom container deployment for AI pipelines) that gateways consume via capability targeting rather than configure directly. If BYOC gateway-side configuration emerges in content writing, it must be verified against the go-livepeer repo before introduction.

**Human action required**: Confirm canonical BYOC expansion and scope (gateway vs orchestrator side) against go-livepeer repo and AI docs before including in any audience design or content page.

---

## Excluded Personas

### The Off-Chain Explorer (Perplexity only — consensus 1)

**Appeared in**: Perplexity run only (named "The Off-Chain Explorer" — an operator wanting to experiment with gateway routing without ETH or Arbitrum involvement).

**Excluded because**: Consensus score = 1; did not meet the single-run exception (Impact = 2, not 3; and the path is substantially covered by the Self-Hosted Gateway Launcher off-chain variant). The concern this persona raises — surfacing that off-chain is a valid production path and that a community remote signer is available — is covered within S5 (Off-chain gateway quickstart) as a content-authoring requirement.

---

### The Hosted Service User (Perplexity only — consensus 1)

**Appeared in**: Perplexity run only (named "The Hosted Service User" — a visitor who wants an API endpoint and does not want to run infrastructure).

**Excluded because**: Consensus score = 1; Vol = 3 but Depth = 1 and Impact = 2, and the path is a routing-out, not a setup path. This archetype's entire experience is handled by S1 (Disambiguation), which routes them out of the tab. No section content is required for them. Perplexity's note that authors risk over-serving this persona with content that belongs in Solutions or Developers is carried as an authoring note in S1.

**Authoring note for S1**: The disambiguation section must be explicit that gateway-as-a-service users are routed out of the Gateways tab at S1 — they do not have a setup path here.

---

### The Return Operator (ChatGPT only — consensus 1)

**Appeared in**: ChatGPT run only (named "Existing operator improving cost, routing, and reliability" with a return-visit framing). Claude Web's "The Return Operator" had consensus = 1 as a standalone persona with Vol = 1, Depth = 2, Impact = 2.

**Excluded as a distinct persona because**: The return-visit need is fully subsumed by the Existing Operator Tuning Production archetype (consensus 3/3), which captures the same arriving state. The single-run persona adds no distinct path, section, or section requirement beyond what the consensus archetype already requires (self-contained sections for direct deep-link access). The concern is addressed in the Persona Path Validation entry for Existing Operator Tuning Production.

---

### The Protocol-Native Operator (ChatGPT only — consensus 1)

**Appeared in**: ChatGPT run only (Rank 2, named "The Protocol-Native Operator" — an experienced orchestrator operator adding a gateway). Vol = 2, Depth = 3, Impact = 2.

**Excluded as a distinct canonical persona because**: Consensus score = 1; the path overlaps substantially with the Self-Hosted Gateway Launcher (off-chain variant), since protocol-native operators choosing an off-chain gateway mode arrive with deeper go-livepeer familiarity but the same setup requirements. The concern this persona raises — that experienced operators should be routed quickly past fundamentals — is addressed as a content-authoring note: S1 and S2 should include a "skip to setup" routing signal for readers with existing go-livepeer experience. This is a section-level authoring requirement, not a structural gap requiring a new section or a new persona entry.

---

### The AI Pipeline Tester (Claude Web only — consensus 1)

**Appeared in**: Claude Web only (Rank 4, named "The AI Pipeline Tester" — a developer migrating from a hosted gateway to self-hosted to access specific AI pipelines or custom models). Vol = 2, Depth = 2, Impact = 2.

**Excluded as a distinct canonical persona because**: Consensus score = 1; Impact = 2, which does not meet the single-run exception threshold. The path is covered within the Builder Graduating from API Use persona (consensus 3/3), which captures the same arriving motivation (hosted → self-hosted graduation) and the same setup path. The concern this persona raises — cold-start latency in S8 (AI pipeline routing) — is carried as a design flag on that section.

---

## Excluded Sections

### Network architecture (Perplexity S3 — consensus 1 as standalone section)

**Appeared in**: Perplexity run only as a distinct section ("Network architecture" — end-to-end job flow from request to payment). Claude Web and ChatGPT folded this content into the "What a gateway does" concept section.

**Excluded as a standalone section because**: Consensus = 1 for the standalone form; its function (building a working mental model of the end-to-end flow) is served by S2 (What a gateway does) in the canonical structure. The specific content requirement Perplexity identified — that the reader needs to trace a job from request → orchestrator selection → execution → payment — is carried as a content-authoring note for S2: S2 must include the end-to-end job flow, not just the gateway's isolated role definition.

---

### Scaling the deployment (Claude Web S12 — consensus 1 as standalone section)

**Appeared in**: Claude Web only ("Scaling your gateway deployment" — how to add capacity when reaching performance ceilings). Vol/Depth/Impact not independently scored.

**Excluded because**: Consensus = 1; the function is addressed within S11 (Running the gateway in production) and S13 (NaaP / platform operation) at the appropriate depth for this stage of the content set. Horizontal/vertical scaling decisions for an operational gateway are either (a) an operational concern handled within S11's "operate" guidance or (b) a platform-extension concern handled within S13. If content writing determines that scaling requires dedicated treatment beyond what S11/S13 can absorb, this section should be revisited.

---

### Monitoring and observability (Perplexity S11 and Claude Web S9 — consensus 2 as standalone)

**Appeared in**: Claude Web (S9: "Operating a gateway in production") and Perplexity (S11: "Monitoring and observability") as partially distinct sections; ChatGPT folded monitoring into the general operating section.

**Merged into**: S11 (Running the gateway in production) in the canonical structure. The monitoring-specific content (Prometheus metrics, alert thresholds, what signals a problem) is included within S11 per the Phase 4.5 rule (2-run sections merged into the most similar existing section when their function is not otherwise uncovered). The design flag on S11 explicitly notes this section may need to split during detailed design if content load is assessed as too heavy for a single section.

---

### Verifying the setup / Configuring for production (Perplexity S5/S6 — consensus 1 as standalone stages)

**Appeared in**: Perplexity linear journey stages 5–6 as distinct named stages. Not represented as independent sections in the other two runs.

**Not included as standalone sections because**: The verification and production-configuration functions are covered within the quickstart sections (S4/S5) and the routing/pricing configuration sections (S6/S7). The stages are part of the linear journey narrative but do not require their own sections in the structure.

---

## Structural Disagreements

### Section count: 10 vs 12 vs 13

- **ChatGPT**: 10 sections — most compact; folded network architecture into the concept section; no standalone troubleshooting section; NaaP handled in a single "Turning a gateway into a service" section.
- **Claude Web**: 12 sections — added standalone troubleshooting (S10), standalone NaaP (S11), and standalone scaling (S12); provided the most granular persona path validation.
- **Perplexity**: 13 sections (1 above target) — added standalone monitoring/observability (S11), standalone troubleshooting (S12), and standalone dual mode (S9); also flagged S13 (multi-tenant platform) as needing a split.

**Canonical decision**: 13 sections, with reasoning preserved from the runs that justified above-target counts. The dual-mode section (S9) is included because both Claude Web and Perplexity identified it as serving a distinct job with a separate OS constraint (Perplexity consensus, ChatGPT implicit in dual mode coverage). The monitoring content is merged into S11 rather than being a standalone, per the 2-run majority. The design flag on S11 (potential split) and S13 (potential split) are carried from the relevant runs.

---

### Self-identification decision: dedicated section vs routing callout

All three runs independently reached the same decision: a dedicated disambiguation section is required as the first content section. No split exists; this is a 3/3 consensus for the stronger design pattern (dedicated section over a routing callout). The canonical decision follows.

---

### Payment section placement: before or after node concept

- **ChatGPT**: Places payment model content as Section 4 ("Payments, discovery, and supplier trust model"), after operating mode choice (S3) and before the quickstart (S5).
- **Claude Web**: Places payment configuration as Section 5 ("Payment configuration and funding"), after both quickstarts (S3/S4).
- **Perplexity**: Places payment model and funding as Section 4 ("Payment model and funding"), before the quickstarts (S5/S6).

**Canonical decision**: Payment model and funding prerequisite (S3 in canonical structure) precedes both quickstarts, following ChatGPT and Perplexity's structure. Rationale: the on-chain quickstart has a hard entry blocker (ETH on Arbitrum) that must be resolved before setup instructions begin; placing the payment concept section after the quickstart creates a silent blocker. Claude Web's placement was overridden. The canonical section notes this explicitly: S3 must resolve the payment prerequisite before either quickstart can proceed.

---

### Separate on-chain and off-chain quickstarts vs merged quickstart

- **ChatGPT**: Two standalone quickstart sections (S3 on-chain, S4 off-chain).
- **Claude Web**: Two standalone quickstart sections (S3 on-chain, S4 off-chain).
- **Perplexity**: Two standalone quickstart sections (S5 on-chain, S6 off-chain).

**Canonical decision**: Two parallel quickstart sections (S4 and S5 in canonical structure). Unanimous across all three runs. The on-chain and off-chain paths have distinct pre-steps, install flags, and connectivity patterns that cannot be merged without a branching instruction structure that degrades both paths.

---

### Troubleshooting as a standalone section vs embedded in operating section

- **ChatGPT**: No standalone troubleshooting section; diagnostic content folded into operating section.
- **Claude Web**: Standalone troubleshooting section (S10).
- **Perplexity**: Standalone troubleshooting section (S12).

**Canonical decision**: Standalone troubleshooting section (S12 in canonical structure) — 2-run consensus (Claude Web + Perplexity). The return-operator use case requires a self-contained diagnostic path accessible without re-reading prior sections. ChatGPT's approach of folding troubleshooting into operating content was overridden; return operators doing incident diagnosis should not need to locate embedded troubleshooting guidance within a broader operating section.

---

## Single-Run Flags

### GatewayHost CLI flag (ChatGPT only)

**Included because**: ChatGPT's run flagged `GatewayHost` as a gateway-relevant CLI flag noted in a recent tagged go-livepeer release. While only one run included it, the source citation (go-livepeer releases page) is a primary source and the term has no substitute in other runs. It is included in the canonical TERMINOLOGY_LOCK as a `[single-run: ChatGPT only]` entry with `[verify-against: https://github.com/livepeer/go-livepeer/releases]`. The exact semantics are flagged as unconfirmed pending tagged source review.

---

### Cold-start latency content requirement (Claude Web only)

**Claude Web** identified that S8 (AI pipeline routing) must explicitly address cold-start latency for readers migrating from hosted gateways. This content requirement was flagged as a single-run observation but is substantively correct — cold-start latency is a real characteristic difference between hosted and self-hosted gateway deployments. It is carried as a design flag on S8 regardless of the single-run origin. Prefix: `[single-run flag — verify]`.

---

### NaaP path must be visible in S1 (Claude Web only — explicit as authoring requirement)

**Claude Web** explicitly stated that if NaaP is not named in S1, the Platform Reseller persona has no clear path forward. Perplexity implied the same requirement through the persona path validation. This is carried as a content-authoring requirement for S1 rather than a structural flag, and is noted in the Persona Path Validation entry.

---

### Community remote signer endpoint reference in S5 (Claude Web only — explicit)

**Claude Web** explicitly identified `signer.eliteencoder.net` as a community-hosted remote signer endpoint that must be referenced in the off-chain quickstart, noting it is community-hosted infrastructure whose availability should be verified before any page referencing it goes live. This is a single-run flag carried as a content-authoring requirement for S5. `[single-run flag — verify: confirm endpoint availability and correct address before S5 authoring begins]`.

---

## Open Items (require human resolution before Phase 2)

### 1. NaaP acronym expansion — BLOCKING

The full-form expansion of "NaaP" is inconsistent in the source glossary ("Network as a Platform" vs "Network-as-a-Product"). The canonical document uses "Network as a Platform" but this has not been verified against a primary source. **Content writing must not use the full expansion in any published page until this is resolved.**

**Resolution path**: Check the livepeer/naap repo readme or a canonical primary source for the authoritative expansion. Update TERMINOLOGY_LOCK accordingly.

---

### 2. BYOC scope and expansion — NON-BLOCKING (gateway relevance unclear)

BYOC's acronym expansion is inconsistent ("Bring Your Own Compute" vs "Bring-Your-Own-Container") and its gateway-side relevance is not established from the provided sources. Excluded from the lock.

**Resolution path**: Check go-livepeer repo and AI docs for canonical BYOC expansion and determine whether BYOC is a gateway-operator concept or exclusively an orchestrator-side concept before deciding whether to include it in any gateway content.

---

### 3. S13 (NaaP / multi-tenant platform) split decision — NON-BLOCKING for Phase 2 input, but affects section count

Two runs (Perplexity and Claude Web) independently flagged S13 as likely needing to split into two pages during detailed design: (a) "Which multi-tenant architecture is right for me?" (`evaluate`, `guide`) and (b) "Implementing NaaP / clearinghouse" (`build`, `instruction`). The canonical document carries the design flag on S13 but does not pre-split, keeping the section count at 13. If the split is confirmed, the section count rises to 14 — outside the 8–12 range.

**Resolution path**: Review S13 scope during Phase 2 section design. If the evaluate + build load cannot be handled in a single section without degrading one purpose, split and note the count override with reasoning.

---

### 4. Dual mode section (S9) — potential merge into S6/S7 — NON-BLOCKING

ChatGPT handled dual mode as a configuration variant within the routing/pricing sections. Claude Web and Perplexity both gave it a standalone section. The canonical structure includes S9 as standalone (2/3 consensus), but if dual-mode configuration is substantially simpler in practice, it could be reduced to a subsection of S6 or S7, bringing the section count to 12 (within target range).

**Resolution path**: Assess dual-mode configuration complexity during content writing. If the configuration steps are a small variant on single-mode operation, collapse into S6/S7 and remove S9.

---

### 5. Community remote signer endpoint (signer.eliteencoder.net) — BLOCKING for S5 authoring

Claude Web explicitly identified this community-hosted endpoint as required in S5 but flagged its availability as unverified infrastructure. No other run verified the endpoint.

**Resolution path**: Verify the endpoint is live, maintained, and appropriately characterised before S5 authoring begins. If the endpoint is unavailable or unsuitable, identify an alternative path for off-chain readers who have no existing signer.

---

### 6. Weight factor CLI flag names — VERIFY BEFORE USE IN S7

Three flag names (`selectRandWeight`, `selectStakeWeight`, `selectPriceWeight`) are referenced in Claude Web's addendum as subject to change between go-livepeer releases. They are not included in the canonical TERMINOLOGY_LOCK but will be needed in S7 content.

**Resolution path**: Verify current flag names and accepted values against the latest tagged go-livepeer release before S7 authoring begins. Do not use flag names from glossary or older documentation without checking the release notes.

---

## Run Quality Notes

### ChatGPT (v4)

**Strengths**: Clean, compact structure (10 sections); strong jobs-to-be-done formulation; clear entry blocker identification; good cross-tab routing rationale; GatewayHost flag was a useful primary-source catch not present in other runs.

**Weaknesses**: Persona set was the smallest (4) and slightly less granular in entry vector specificity; no standalone troubleshooting section (which two other runs identified as necessary for return operators); payment placement was the only structural decision that was overridden in collation.

**Notable**: Best overall compactness-to-coverage ratio. Useful as a tightness reference for Phase 2 section design.

---

### Claude Web (v4)

**Strengths**: Most complete TERMINOLOGY_LOCK (22 terms with full table format, verification flags, and network-specific meaning explanations); most thorough persona path validation (6 personas, each with structural block and knowledge gap analysis); explicitly flagged the NaaP acronym inconsistency; carried the most specific content-authoring requirements (ETH pre-step, cold-start latency, off-chain production-path framing, community signer endpoint, skip-fundamentals callout); standalone troubleshooting section well-justified.

**Weaknesses**: Section count reached 12 (upper boundary); the scaling section (S12) was a single-run addition that required exclusion. Two addendum flags (NaaP acronym inconsistency, weight factor flag name staleness) were substantively important but required collation to confirm they should be carried forward.

**Notable**: Best persona path validation depth. Recommended for Phase 2 as the primary reference for content-authoring requirements and knowledge gap identification.

---

### Perplexity (v4)

**Strengths**: Cleanest separation of on-demand categories (10 items, most specific); most explicit handling of the Hosted Service User archetype (routing-out scenario); dual mode section inclusion was well-argued; S13 design flag was independently confirmed by both this run and Claude Web; consistent alignment with the other runs on all major structural decisions.

**Weaknesses**: Section count hit 13 (one above target); network architecture as a standalone section (S3) was an overconstruction that the other two runs handled more efficiently within the concept section; the Off-Chain Explorer persona was a single-run addition with insufficient differentiation from the off-chain variant of the primary persona.

**Notable**: Best on-demand section specification. Useful for ensuring the reference/return-visit job category is fully covered in Phase 2 on-demand content planning.
