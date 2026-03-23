# Orchestrators — Collation Notes

**Synthesised from**: `chatgpt-v4-orchestrators-audience-design.md`, `CLAUDEWEB-v4-orchestrators-audience-design.md`, `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md`, `v4-orchestrators-audience-design-agent.md`
**Date**: 2026-03-23

---

## Terminology Conflicts

- **[DEFINITION CONFLICT: capability advertisement / LIP-92 mapping]** — `CLAUDEWEB-v4-orchestrators-audience-design.md` treats LIP-92 as the AI capability registry reference, while `chatgpt-v4-orchestrators-audience-design.md` says the glossary’s LIP-92 mapping is incorrect and `v4-orchestrators-audience-design-agent.md` treats it as unverified. The term remains in the canonical lock, but the LIP-92 citation path requires human resolution before publication.
- **[DEFINITION CONFLICT: pool node vs pool worker canonical term]** — all runs normalise toward `pool node`, but Claude explicitly notes that the glossary still treats “Pool Worker” as a live alias. The canonical document uses `Pool / Pool Node`, but the final published term should be human-locked.
- **Glossary discrepancy: `go-livepeer` role naming** — the Perplexity run flags the glossary’s use of “Broadcaster” instead of “Gateway.” This was not carried into the canonical lock as a term, but it remains a source-quality issue to resolve upstream.

---

## Excluded Personas

- **Evaluating operator (hardware acquisition decision)** — appeared in `v4-orchestrators-audience-design-agent.md` only; excluded because it does not represent a distinct participation path once the viability/prerequisites concerns are captured inside Sections 2–4. Its concerns are covered by **Is this worth it for my hardware and goals?** and **What do I need before I start?**
- **Pool operator scaling beyond one machine** — appeared as a standalone persona in `chatgpt-v4-orchestrators-audience-design.md`; excluded as a standalone archetype because it overlaps substantially with the broader canonical archetype **Existing operator expanding workload or architecture**.
- **Running operator** — appeared as a standalone persona in `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md`; merged into **Live operator tuning or troubleshooting** because the underlying arriving state and outcome are the same.
- **Solo GPU operator — video transcoding path** and **Solo GPU operator — AI inference path** — appeared as separate top personas in `v4-orchestrators-audience-design-agent.md`; merged into the broader canonical newcomer + AI-first archetypes because the rest of the runs treat the newcomer path more broadly while still retaining a distinct AI-first operator archetype.

---

## Excluded Sections

- **Standalone governance / treasury section** — appeared only in `v4-orchestrators-audience-design-agent.md`; excluded because governance context does not unblock the core operator journey and is better served by concept material already in Sections 2–3 plus the outbound route to **About**.
- **Standalone pool-node-only section** — appeared only in `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md`; merged into **Pools and O-T split: join or scale safely** because the other runs treat pool participation as part of the broader architecture/participation decision.
- **Standalone AI capability-advertisement section** — appeared only in `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md`; merged into **Add AI inference and advertise capabilities** because the other runs combine AI configuration and activation.
- **Standalone “Attract delegators” section** — appeared only in `v4-orchestrators-audience-design-agent.md`; merged into **Set pricing and cuts** and **Optimise work volume, earnings, and delegation** because the function is covered there.

---

## Structural Disagreements

- **Primary persona split**: three runs centre the tab on a broad GPU-ready newcomer / viable-path chooser, while the agent run splits newcomer traffic into separate video and AI top personas and tie-breaks toward video. Canonical decision: keep the broad newcomer as primary, retain AI-first as a separate strong persona, and note the video-vs-AI split as a tie-break issue rather than a structural override.
- **Pool placement**: Perplexity gives pool participation its own evaluate-stage section; Claude and agent thread pool participation through setup/scale material; ChatGPT blends pool into path choice plus later scale architecture. Canonical decision: keep pool participation visible in S1 and resolve it in a dedicated architecture section that covers both joining and scaling.
- **AI activation split**: Perplexity separates workload configuration from capability advertisement; Claude and agent treat them as one activation flow. Canonical decision: merge into one AI section because the job is still distinct but the activation sequence is tightly coupled.
- **Reference surface**: ChatGPT alone creates an explicit operator-reference section, but all runs surface return-visit, exact-parameter lookup, or live-check needs through jobs or on-demand categories. Canonical decision: include the reference section as a flagged single-run inclusion because it is the clearest direct coverage of a critical return-visit job.
- **Section count**: the canonical structure lands at **13 sections**, outside the 8–12 target. This was not forced down because the extra section is the single-run reference surface required to cover return-visit needs cleanly.

---

## Single-Run Flags

- **Operator reference** — included despite appearing as a dedicated section only in `chatgpt-v4-orchestrators-audience-design.md`, because return-visit parameter lookup is a critical job surfaced in that run’s Job 7 and is strongly corroborated by the on-demand/reference needs in the other runs.
- **Potential hardware-purchase guidance** — only `v4-orchestrators-audience-design-agent.md` explicitly raises the hardware-acquisition evaluator as a persona. This was not promoted to a canonical persona, but it should be verified during detailed design to ensure Sections 2–4 contain enough hardware-fit guidance for evaluators.
- **Potential setup-page split for pool-node instructions** — multiple runs imply it, but the sharpest version is in Claude and agent. The canonical structure keeps one setup section and one pool/split section, but this may still need a split in detailed design.
- **Quick-reference location** — only ChatGPT makes the reference layer explicit inside the tab. The canonical structure keeps it, but only as a flagged single-run inclusion.

---

## Open Items (require human resolution before Phase 2)

- Resolve the LIP-92 / capability-registry citation path before any canonical content cites it.
- Lock the canonical published term for pooled participation (`pool node` vs `pool worker` alias handling).
- Decide whether pool-node instructions should remain a labelled sub-path inside setup/architecture content or become a dedicated instruction page during detailed design.
- Decide whether the operator reference belongs inside the Orchestrators tab or should be moved to the universal Resource HUB/reference layer.
- Confirm whether the upstream glossary should be corrected for `go-livepeer` role naming (`Gateway` vs deprecated `Broadcaster`) before Phase 2 content drafting.

---

## Run Quality Notes

- **chatgpt-v4-orchestrators-audience-design.md** — strongest at journey logic, path-first framing, and explicit return-visit/reference behaviour; weaker on AI-first specificity and underdeveloped pool-node setup mechanics.
- **CLAUDEWEB-v4-orchestrators-audience-design.md** — strongest at section craftsmanship, pricing/cuts separation, and concrete persona-path gap analysis; weaker on return-visit/reference surfacing as a first-class section.
- **PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md** — strongest at clean explanatory sequencing and a distinct pool-node evaluate path; weaker on scale architecture and less explicit about long-lived operator reference needs.
- **v4-orchestrators-audience-design-agent.md** — strongest at terminology depth, split-path precision, and edge-case surfacing (VRAM, AI-first, governance, pool-node branching); weaker because it over-expands the scope and pushes the structure toward a more complex, section-heavy model than the other runs.
