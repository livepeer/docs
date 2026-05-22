AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| agent-v5-resource-hub-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/resource-hub/zero-context-ai-results/v5/` | Audience, Journey, IA |
| glossary-resources.md | `...resource-hub/input-pack/` | Content |
| veracity-sources.md | `...resource-hub/input-pack/` | Prompt/Skill |
| deprecated-terms.md | `...resource-hub/input-pack/` | Content |
| resources-portal.mdx | `v2/resources/` | IA, Content |
| (collated/ and learnings/ directories) | `...testing/Tabs/resource-hub/` | **BOTH EMPTY** |

---

# AUDIENCE — Who lands on this tab

**Audience token**: `community` (with cross-audience qualification — serves all audience tokens at reference + evaluate stages)

| Arriving type | Entry vector | Routing need |
|---|---|---|
| **Cross-tab reference seeker** | Arrived from role tab seeking definition/concept clarity | Quick lookup, then returns to origin tab |
| **Protocol researcher** | Web search, whitepapers, external links | Stays — wants primary sources organised |
| **Governance participant** | Forum, community arrival | Wants LIPs and treasury data |
| **New arrival doing orientation** | First landing, exploring | Poor first stop — routes away quickly |

### Arriving question

> "I've seen a term / claim / resource pointer — where do I find the authoritative source?"

---

# PERSONAS — Who this tab actually serves

### Source: agent-v5-resource-hub-audience-design.md (single run)

| Rank | Persona | Description |
|---|---|---|
| 1 | **Cross-Tab Reference Seeker** | Highest volume. Arrives from role tabs seeking term definition or concept clarity. Stays for immediate reference, returns to origin |
| 2 | **Protocol Researcher** | Moderate volume. External entry (web search, whitepapers). Wants primary sources organised |
| 3 | **Governance & Ecosystem Participant** | Moderate volume. Forum/community arrival. Seeks LIPs, treasury data, governance tracking |
| 4 | **New Arrival Doing Orientation** | Moderate raw numbers but lowest depth. Resource Hub is poor first stop — routes away |

Self-identification: "Someone with a question" — not by role. S1 disambiguates by question type, not persona.

Entry blocker: Navigational only (no wallet/stake required). Reader must quickly identify question type (glossary vs primary source vs governance vs curated links).

---

# JOURNEYS

## The Reference Seeker's journey

| Step | What they're doing |
|---|---|
| 1 | Arriving with specific question |
| 2 | Identifying resource type (glossary / primary source / governance / curated links) |
| 3 | Locating specific entry or document |
| 4 | Verifying claim against authoritative source |

On-demand return use: glossary, changelog, LIP index, contract address lookups, AI framework links, video standards references.

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I encounter an unfamiliar term | look up a precise definition | continue reading without guessing |
| J2 | I read a claim about Livepeer | verify it against an authoritative source | trust what I'm reading or flag it |
| J3 | I need a foundational document | find the whitepaper, spec, or upgrade doc | cite or study from primary source |
| J4 | I want to track governance | find LIP index, treasury data, proposal history | participate informed |
| J5 | I need ecosystem resources | find tools, frameworks, community links | discover what exists beyond the docs |
| J6 | I need to cite Livepeer accurately | find the right reference with correct details | publish without errors |
| J7 | I want deep mechanism understanding | find technical specification or architecture doc | study the protocol |

---

# IA — All section structures found

## Agent v5 — 10-section structure

| # | Section | purpose | pageType |
|---|---|---|---|
| S1 | Routing (what kind of resource?) | `orient` | `navigation` |
| S2 | Glossary | `reference` | `reference` |
| S3 | Protocol Primary Sources | `reference` | `reference` |
| S4 | How to Read Livepeer Sources | `explain` | `concept` |
| S5-S8 | Detailed design phase (contracts, changelog, governance/LIP index, external curation) | TBD | TBD |
| S9-S10 | Universal constants (main glossary, FAQ, changelog, site guide) | TBD | TBD |

## Current live structure

resources-portal.mdx: Minimal body — "Resources Portal / All resources and references in one place!" `audience: everyone`, `pageType: landing`. Hub landing only.

**Strongest asset**: 103-term glossary (glossary-resources.md) with domain tagging (livepeer:protocol, livepeer:contract, ai:concept, video:encoding, web3:chain, etc.). Ready for template population.

---

# OPEN ITEMS

1. **EARLY STAGE** — Only 1 AI run. No collation, no learnings, no Check B.
2. **Portal needs expansion** — currently 2-line placeholder.
3. **103-term glossary** is the strongest asset and ready for use.
4. **7 terms diverge from industry defaults** — Gateway, Orchestrator, Round, Delegation, Pipeline, Inflation all have Livepeer-specific meanings that differ from common usage.
