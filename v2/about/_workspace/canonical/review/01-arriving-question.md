## The Arriving Question — What brings readers to About?

**Primary arriving question (unified across all personas):**
> "What is Livepeer, how does it all fit together, and is this relevant to what I'm trying to do?"

---

## Per-Audience Variants

| Arriving audience | Their specific question | Arriving state | Primary need |
|---|---|---|---|
| **Founder / Product Evaluator** | "Can Livepeer provide the compute infrastructure my product needs?" | Aware of Livepeer from external article, search, or Solutions tab | Build-vs-buy evaluation: tech + economics + governance + sustainability |
| **Token / Network Researcher** | "Is this a credible, durable protocol to stake LPT with?" | Researching via Messari, Dune, CoinGecko, search "Livepeer tokenomics" | Inflation model, reward distribution, governance weight, economic trajectory |
| **GPU Operator Candidate** | "Can I earn meaningful money running my hardware on this network?" | From Discord, forum, search "Livepeer orchestrator" | Role mechanics, stake requirements, hardware fit, earning model, market viability |
| **Developer / API Evaluator** | "Is the API stack mature enough to build a product on?" | From search "Livepeer AI", developer community referral | Architectural understanding of network access, API/SDK maturity, integration points |
| **Ecosystem Newcomer** | "What is this ecosystem and how do I participate?" | From Discord, Twitter/X, podcast, community referral | Legible narrative of what Livepeer does, who runs it, how to get involved |
| **OSS / Protocol Contributor** | "Is this protocol's architecture worth my time contributing to?" | From GitHub, DeepWiki, Foundation referral, ecosystem team | Protocol design rationale, contract architecture, governance model, upgrade mechanics |
| **Web3 R&D Researcher** | "How does this system achieve trustless coordination at scale — where are the trade-offs?" | Academic research, whitepaper search, comparative protocol analysis | Protocol design depth, cryptoeconomic primitives, trust model, performance characteristics |

---

## Research Evidence

### Source 1: Canonical audience design (3-run AI synthesis)
All three AI runs (canonical-about-audience-design.md) identified five arriving audience types with consensus Vol/Depth/Impact scoring of 9/9 (Product evaluator, Token researcher) down to 7/9 (Developer, Newcomer). The "arriving question" is the synthesis of all per-audience questions.

### Source 2: Tab analysis (01-tab-about.md)
Reading of actual About content confirmed:
- The portal uses six undifferentiated cards (too vague)
- No navigator.mdx exists to conditionally route by arriving intent
- Arriving personas cannot identify themselves without reading significant content first

### Source 3: Index collation (index.md)
Five earlier audience design runs (ChatGPT v4, Claude Web v4, Agent v5) all produced variants of the arriving question. Consensus: readers arrive asking "what is this" → "does it apply to me" → "where do I go next."

### Source 4: First-principles sitemap (FIRST-PRINCIPLES-SITEMAP.md, section 6)
EVALUATOR persona journey explicitly names the complete question sequence for discovery stage: "What is Livepeer" → "How does it work" → "What's been built" → "Who governs" → "How do I verify."

### Source 5: Missing personas from canonical research
OSS Contributor and Web3 R&D Researcher were systematically absent from all AI audience design runs but are explicitly served by About's existing technical content (core-mechanisms.mdx, blockchain-contracts.mdx, governance-model.mdx). These personas are real and their arriving questions are distinct from orientation-level ones.

---

## Synthesis

**The arriving question unifies all personas:** Everyone entering About is in the `discover` lifecycleStage and needs to answer "What is this whole thing?" before they can decide if and how to participate.

**The variation is in depth and emphasis:**
- Founders need enough depth on governance and economic sustainability to make build-vs-buy decisions
- Token researchers need complete economic model coverage (both ETH fee and LPT inflation flows)
- GPU operators need to understand the network topology and their role within it
- Developers need enough protocol understanding to use the APIs intelligently
- Newcomers need accessible framing that connects to community/ecosystem participation
- Contributors need technical depth on architecture, design decisions, and upgrade mechanics
- Researchers need complete cryptoeconomic model coverage and justification for design choices

**The arriving moment is characterized by:**
- Curiosity about Livepeer but no working mental model
- Surface understanding from external sources (blog, search, referral) but cannot explain it accurately
- Seeking a model to trust, not marketing copy
- Trying to determine relevance before committing further time

---

## Success Criteria

The arriving question is answered when the reader can:
1. Define "what Livepeer does" in 1-2 sentences (protocol layer + network layer + application layer)
2. Name the key actors and explain each one's role
3. Trace how a compute job moves from request to completion
4. Explain how money flows (both ETH fees and LPT inflation)
5. Describe the governance model and who controls the protocol
6. Assess whether About is the right tab for their specific intent, or whether they should route to a role tab

---

## Verdict

**APPROVE** — The arriving question accurately reflects why real visitors come to About. The per-audience variants are well-documented and serve as routing heuristics. The research consensus is strong across multiple independent runs.

---

## Review Questions

1. Is this arriving question accurate for your Discord/community experience? Do people arrive asking exactly this?
2. Should OSS Contributor and Web3 R&D Researcher arriving questions be weighted differently — these are depth-focused, not orientation-focused?
3. Is the distinction between "orientation personas" (founders, developers, newcomers, operators) and "depth personas" (researchers, contributors) the right frame?

---