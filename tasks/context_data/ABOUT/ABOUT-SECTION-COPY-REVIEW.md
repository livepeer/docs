# About Section — Copy Review (2026)

Per-page review: accuracy, context data, upgrades, IA, style, completion, resources/media, code audit, modularisation.  
Pages follow **docs.json** nav order. Context sources: `v2/pages/01_about/_contextData_/` and `docs/ABOUT/CONTEXT DATA/`.

---

## 1. About Portal (`about-portal.mdx`)

**2026 accuracy**  
- “Ethereum Mainnet and Arbitrum Mainnet” + “Since the Confluence upgrade, the protocol primarily runs on Arbitrum” is correct (Confluence live Feb 2022; protocol on Arbitrum).  
- “Gateways (formerly Broadcasters)” is correct.

**Context data**  
- `livepeer_ia_protocol_report.md`: protocol vs network, roles; aligns with portal messaging.  
- `livepeer_about_section_references.md`: use for “Further reading” and explorer/contract links.

**Upgrades**  
- Add one line on AI: e.g. “The network also runs AI inference (generative video, image, LLM) alongside transcoding.”  
- Keep technical but approachable; avoid jargon in the hero (e.g. “transcode” is fine; “probabilistic micropayments” better in Protocol pages).

**IA**  
- Fix card links: all six cards point to `./livepeer-network/overview`. Should be: Core Concepts → `./core-concepts/livepeer-overview`, Mental Model → `./core-concepts/mental-model`, Livepeer Protocol → `./livepeer-protocol/overview`, Livepeer Network → `./livepeer-network/overview`, Glossary → `./resources/livepeer-glossary`, Whitepaper → `./resources/livepeer-whitepaper`.  
- Consider a “Quick links” strip under the hero (Overview, Protocol, Network, Glossary, Whitepaper) for scannability.

**Style**  
- Normalise spacing in imports (e.g. `H5,P` → `H5, P`).  
- Remove commented-out blocks before publish or move to internal.

**Complete?**  
- **No.** Broken card links; optional hero line on AI.

**Resources / media**  
- [Confluence upgrade (Medium)](https://medium.com/livepeer-blog/the-confluence-upgrade-is-live-3b6b342ea71e) — link in “Learn more” or Resources.  
- [Livepeer Explorer](https://explorer.livepeer.org/) — “See the network” CTA.  
- Short hero video or GIF: stream → transcoding → playback (e.g. from Livepeer marketing or a 30s Loom).

**Code audit**  
- Typo: “incenticises” in overview copy (if present) → “incentivises”.  
- Portal imports: 7 lines; consider barrel (see DRY report).  
- `LogoHeroContainer` uses `height="20px"`; other portals use `imgHeight` — normalise prop name.

**Modularise**  
- Extract overview paragraph + “Key concepts” list into a snippet (e.g. `AboutPortalCopy.jsx` or MDX fragment) so portal and other landing pages can reuse.  
- Card grid: consider a data-driven component (e.g. `aboutPortalCards` in a JSON/JS) to avoid link drift.

---

## 2. Livepeer Overview (`core-concepts/livepeer-overview.mdx`)

**2026 accuracy**  
- Protocol on Arbitrum, LPT on L1, network off-chain: correct.  
- DePIN framing and “demand-side / supply-side / protocol” match current positioning.  
- “Rounds” — context data says ~6 hrs in one place, ~21.5 hrs in another; verify current round length (RoundsManager) and state once in docs.

**Context data**  
- `_contextData_/deep-research-report.md`: Executive Summary, ELI5, actors, rounds, Trickle pipeline — use to enrich “Protocol vs Network” and add one short ELI5 paragraph.  
- `livepeer_ia_protocol_report.md`: table of contracts (BondingManager, TicketBroker, RoundsManager, Governor, LivepeerToken); consider adding a “Protocol at a glance” table.

**Upgrades**  
- Add 1–2 sentences on Livepeer AI (beta) and that AI jobs are routed off-protocol (gateway → orchestrator) for 2026 clarity.  
- Replace or supplement “Platforms? Workers?” card with “Developers & platforms” and link to Products/Developers; remove question mark.

**IA**  
- Good separation of Protocol / Network / Protocol vs Network / Actors.  
- “See more on the architectural layers” link to mental-model is correct; add a back-link from mental-model to this page.

**Style**  
- Fix typo “incenticises” → “incentivises”.  
- Remove or collapse the large `<expandable title="Old notes">` block for production; move to internal or delete.

**Complete?**  
- **Mostly.** Needs typo fix, optional ELI5, and cleanup of old notes.

**Resources / media**  
- Mermaid diagram in `deep-research-report.md` (Gateway → Orchestrator → CDN, Delegator → Orchestrator, Rewards) — port into this page.  
- [Token Flows – mechanism design](https://tokenflows.xyz/tutorials/introduction-tutorials/module3/) already linked; keep.  
- [Livepeer Explorer – network stats](https://explorer.livepeer.org/) for “See the network in action”.

**Code audit**  
- `LinkArrow` import from `'snippets/components/...'` (no leading slash); other imports use `/snippets/...` — use consistent path style.  
- QuadGrid + 4 Cards: consider shared “ActorsOverview” component used here and in actors.mdx.

**Modularise**  
- “Protocol vs Network” table + “On-chain vs Off-chain” bullets → reusable snippet (e.g. `ProtocolNetworkComparison.mdx`).  
- Actor cards (Orchestrators, Gateways, Delegators, Platforms) → data-driven component or snippet to keep nav links (e.g. /orchestrators, /gateways) in one place.

---

## 3. Livepeer Core Concepts (`core-concepts/livepeer-core-concepts.mdx`)

**2026 accuracy**  
- On-chain vs off-chain and “Bridge” (ETH deposits, tickets, LPT for staking not payment) are accurate.  
- “Livepeer Protocol = Arbitrum One” and “LPT = Ethereum mainnet” correct.

**Context data**  
- Same as §2; `deep-research-report.md` “Core Mechanism” and protocol/network separation align.  
- Fix: trailing “U” in “on‑chainU” (typo).

**Upgrades**  
- Add one sentence that AI inference is part of the network layer (orchestrators/workers), not a separate “actor type,” for 2026.  
- “Broadcasters” in the Network list: add “(legacy term; see Gateways)” to avoid confusion.

**IA**  
- Duplicate structure: “Overview and separation” + Tabs (Overview, Protocol, Network, Actors) then again “# Overview” and “# Core Concepts” with repeated tables. Consolidate into a single flow: intro → Protocol vs Network table → On-chain vs Off-chain → Actors (reuse from livepeer-overview or actors.mdx).  
- Remove duplicate “# Overview” and “# Livepeer Actors” blocks; keep one canonical version.

**Style**  
- Remove or replace broken image: `../../.gitbook/assets/image (1).png` (missing; placeholder “INSERT LIVEPEER ACTOR DIAGRAM”). Use a diagram from context (mermaid) or link to Explorer.

**Complete?**  
- **No.** Duplicate content, broken image, typo “on‑chainU”.

**Resources / media**  
- Use mermaid “Actors and flow” from context data.  
- Link to “Actors” page and “Mental model” for deeper dives.

**Code audit**  
- Imports: `Protocol`, `Network`, `Actors` from snippets/pages/01_ABOUT/concepts/ — ensure those files exist and paths are correct (case: 01_ABOUT).  
- Tabs: ensure Tab title matches content (Overview vs Protocol vs Network vs Actors).

**Modularise**  
- Replace inline Protocol/Network/Actors copy with the same snippets used in livepeer-overview or dedicated `concepts/protocol.mdx`, `network.mdx`, `actors.mdx` to avoid drift.  
- Single “Protocol vs Network” table component used here and in livepeer-overview.

---

## 4. Mental Model (`core-concepts/mental-model.mdx`)

**2026 accuracy**  
- OSI-like stack and “crypto-economic control plane” are accurate.  
- Layer 7 (Daydream, Streamplace, Studio) and “AI Gateways” are current; “Cascade” appears in context — add if it’s a public product name.

**Context data**  
- `protocol-frameworks-report.mdx.md`: six-part framework and layered stack — aligns; consider citing “canonical stack” in a short intro.  
- `livepeer_ia_protocol_report.md`: Layer 7 examples; confirm Cascade vs “Cascade” naming.

**Upgrades**  
- Add 1–2 sentences on “AI workloads” in Layer 3 (Distributed Execution) and Layer 7 (e.g. Daydream for AI).  
- Fix syntax error: Line ~256 `**Examples:** ... Metaverse/XR video. */}` — remove stray `*/}` (leftover comment close).

**IA**  
- Clear progression Layer 1 → 10.  
- “See More Products & Platforms” and “See the Showcase” links are correct; ensure 010_products and 00_home paths work in production.

**Style**  
- Replace inline `style={{ border: "1px solid #2d9a67", ... }}` with a shared “InfoCard” or theme variable (e.g. `var(--livepeer-green)`) for consistency and light mode.  
- `<Note> image would be good </Note>` — either add an image or remove.

**Complete?**  
- **Mostly.** Syntax fix required; optional Layer 3/7 AI line.

**Resources / media**  
- [OSI model (Wikipedia)](https://en.wikipedia.org/wiki/OSI_model) — already referenced; keep.  
- Diagram: “Stack diagram” (Protocol / Network / Platform layers) as image or mermaid for hero.  
- Video: “What is DePIN?” or “Livepeer in 2 minutes” if available (e.g. YouTube).

**Code audit**  
- Long commented block at end (Lines ~284–428): remove or move to internal doc.  
- Accordion components: ensure `description` prop (with Subtitle/Badge) is consistent; no missing closing tags.

**Modularise**  
- Each Accordion (Layer 1–10) could be driven from a config array (title, OSI label, badges, body) to reduce duplication and ease reorder.  
- Shared “LayerCard” or “StackLayer” component for the green-bordered layer boxes.

---

## 5. Protocol Overview (`livepeer-protocol/overview.mdx`)

**2026 accuracy**  
- “Protocol is on-chain coordination, security and economic layer” and contract roles (BondingManager, RoundsManager, TicketBroker, Governor, Treasury) are correct.  
- Whitepaper 2017 and Confluence/Arbitrum are accurate.  
- Typo: “cyrptoeconomic” → “cryptoeconomic”.

**Context data**  
- `docs/ABOUT/CONTEXT DATA/Protocol/livepeer_core_mechanisms.md`: Bonding flow, parameters, delegation — use to cross-check.  
- `livepeer_ia_protocol_report.md`: Contract table and job routing (transcoding stake-based; AI non-protocol-routed) — add one sentence on AI job routing for 2026.

**Upgrades**  
- Add a single “Protocol at a glance” table (contract → purpose) from context; link to blockchain-contracts for detail.  
- Clarify round duration (e.g. “~6 hours” or “~21.5 hours” per RoundsManager) once confirmed.

**IA**  
- Accordion section map (Core Mechanisms, LPT, Governance, Treasury, Protocol Economics, Technical Architecture) is good; links are correct.  
- Add “Next: Core Mechanisms” or breadcrumb at bottom.

**Style**  
- Fix “cyrptoeconomic” and “its essential” → “it’s essential”.  
- Quote component: keep; ensure FrameQuote and Card for whitepaper are consistent with rest of section.

**Complete?**  
- **Yes** after typo fixes and optional table.

**Resources / media**  
- [Livepeer Whitepaper (GitHub)](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md) — already linked.  
- [Token Flows – Game theory](https://tokenflows.xyz/tutorials/introduction-tutorials/module3/) — already linked.  
- [Governance / LIPs](https://forum.livepeer.org/c/lips/) — add in “Governance” paragraph.

**Code audit**  
- `LinkArrow` from `'snippets/components/...'` (no leading slash) — align with codebase convention.  
- DynamicTable: ensure headerList/itemsList are consistent; consider shared “ContractTable” for protocol pages.

**Modularise**  
- “Protocol Design 101” and “Guiding Principles” could be a shared snippet for protocol intro.  
- Contract list → from a single data file (e.g. `protocolContracts.json`) so overview and blockchain-contracts stay in sync.

---

## 6. Core Mechanisms (`livepeer-protocol/core-mechanisms.mdx`)

**2026 accuracy**  
- Staking, delegation, inflation, slashing, rounds, ticket system align with context and protocol.  
- Context notes that slashing can be disabled/evolving — add a short caveat (“Slashing is part of the design; current status may vary. See governance and LIPs.”).

**Context data**  
- `Protocol/livepeer_core_mechanisms.md`: Bonding flow mermaid, parameters (unbonding 7 days), rewardCut/feeShare — use to validate and add one mermaid diagram.

**Upgrades**  
- Add a simple mermaid “Bonding flow” (User stakes → Select Orchestrator → BondingManager → Eligible for work → Rewards).  
- One sentence on how tickets work (probabilistic payment per segment) without full detail; link to technical-architecture or resources.

**IA**  
- Fits under Protocol; cross-links to livepeer-token, governance-model, protocol-economics are logical.  
- Add “See also: Livepeer Token” and “See also: Protocol Economics” at bottom.

**Style**  
- AccordionGroup: ensure all accordions have titles and bodies; consistent icon use.

**Complete?**  
- **Yes** with optional diagram and slashing caveat.

**Resources / media**  
- [BondingManager (GitHub)](https://github.com/livepeer/protocol/blob/master/contracts/bonding/BondingManager.sol) — link in “Parameters” or “Further reading”.  
- [Explorer – Staking](https://explorer.livepeer.org/) — “Stake or delegate” CTA.

**Code audit**  
- DynamicTable usage: check column alignment and monospaceColumns.  
- ValueResponseField: ensure it’s used consistently with other protocol pages.

**Modularise**  
- Mechanism list (staking, delegation, inflation, slashing, rounds) → shared “MechanismSummary” component or data file for protocol section.

---

## 7–11. Livepeer Protocol (remaining pages)

**livepeer-token, governance-model, treasury, protocol-economics, technical-architecture**  
- Apply same pattern: (1) Verify 2026 facts (Arbitrum, LPT on L1, round length, inflation mechanics). (2) Cross-check with `docs/ABOUT/CONTEXT DATA/Protocol/*.md` and `livepeer_about_section_references.md` for metrics (totalBonded, inflationRate, treasury). (3) Add “See also” and explorer/forum links. (4) Fix any typos and normalise components (DynamicTable, Cards, Accordions). (5) Consider shared “ProtocolPageLayout” or intro snippet for consistency.

---

## 12. Network Overview (`livepeer-network/overview.mdx`)

**2026 accuracy**  
- Gateways, Orchestrators, Delegators roles are correct.  
- Node types (Broadcaster Node, Gateway Node, Orchestrator, Transcoder, AI Worker) match go-livepeer; “LivepeerNode” and “LivpeerServer” typo → “LivepeerServer”.

**Context data**  
- `Network/livepeer_network_overview.md`: session lifecycle (video example), compute separation (video vs AI), key participants table — use to expand this page (add session diagram and “Video vs AI” subsection).

**Upgrades**  
- Add 2–3 short paragraphs from context: “What is the Livepeer Network?”, “Key network participants” table, and one mermaid “Session lifecycle: video example.”  
- Clarify “Broadcaster Node” vs “Gateway Node” (Gateway = broadcaster + AI session manager); add one line on Trickle/segment routing.

**IA**  
- This page is currently very short; it should be the main “Network” entry. Add structure: What is the network? → Node types → Core components → How it fits with protocol (link to Protocol overview).  
- Fix nav: add missing “marketplace” and “technical-architecture” pages under Livepeer Network or remove from docs.json until created.

**Style**  
- Replace generic “Core Components” list with the table from context (Gateway Nodes, Orchestrators, Workers, etc.) for scannability.

**Complete?**  
- **No.** Too thin; typo “LivpeerServer”; needs content from context.

**Resources / media**  
- [go-livepeer](https://github.com/livepeer/go-livepeer) — link for “Orchestrator Node.”  
- Session lifecycle mermaid from context.  
- Optional: short video “From stream to transcoded output” (architecture walkthrough).

**Code audit**  
- PreviewCallout at top: consider moving to frontmatter-driven layout when available.  
- Incomplete “Broadcast Sessions Manager:” and “Orchestrator” / “Transcoder” lines — finish or remove.

**Modularise**  
- “Node types” and “Core components” → shared snippet or table component used in network section.  
- Reuse “Actors” table from actors.mdx or context for consistency.

---

## 13. Actors (`livepeer-network/actors.mdx`)

**2026 accuracy**  
- Three main roles (Orchestrators, Delegators, Gateways) and “Gateways (formerly Broadcasters)” are correct.  
- Confluence and “migrated to Arbitrum” are accurate.  
- “Transcoders now refer simply to the GPU instances attached to Orchestrators” — good clarification.

**Context data**  
- `Network/livepeer_network_actors.md` and context “Key network participants” — align table and role descriptions.  
- `_contextData_/deep-research-report.md`: ELI5 (Uber for video) — consider adding a short “In a nutshell” callout.

**Upgrades**  
- Fix opening: page starts with “and performs actions defined by the system” (fragment). Prepend “A Livepeer actor is any role or entity that participates in the Livepeer protocol or network ” so the first sentence is complete.  
- Add “Role summary” table at top (Actor | Stake | Responsibilities | Earns) from protocol overview or context.

**IA**  
- Good fit under Livepeer Network.  
- Cross-link to livepeer-protocol/overview (Actors and Roles) and to gateways/orchestrators/delegators sections in other tabs.

**Style**  
- Use consistent heading levels (## for main sections, ### for subsections).  
- “Key Role Flow” line: format as a small diagram or bullet list for readability.

**Complete?**  
- **No.** Opening sentence fragment must be fixed.

**Resources / media**  
- [Explorer – Orchestrators](https://explorer.livepeer.org/) — “See active orchestrators.”  
- Diagram: “Actors and flow” (Gateway → Orchestrator → Delegator, with “stake” and “jobs/fees” labels) from context mermaid.

**Code audit**  
- Ensure no broken internal links.  
- “--” on its own line: replace with proper divider component or remove.

**Modularise**  
- Role summary table → shared “ActorsTable” used in protocol overview and here.  
- “Core Actors” and “Role Summary” sections could be driven from a single data structure (e.g. `aboutActors.js`).

---

## 14. Job Lifecycle & remaining Network pages

**job-lifecycle.mdx**  
- Cross-check with `docs/ABOUT/CONTEXT DATA/Network/livepeer_job_lifecycle.md` for 2026 accuracy and add sequence diagram if missing.  
- Ensure video vs AI job paths are both described (or linked to Gateways/Orchestrators docs).

**Missing from nav**  
- `marketplace`, `technical-architecture`, `interfaces?`: either create placeholder pages or remove from docs.json. If created, use `Network/livepeer_marketplace.md`, `livepeer_technical_stack.md`, `livepeer_interfaces.md` from context.

---

## 15–17. (Placeholders for marketplace, technical-architecture, interfaces)

- **Recommendation:** Remove `livepeer-network/marketplace`, `livepeer-network/technical-architecture`, and `livepeer-network/interfaces?` from docs.json until pages exist, or add stub pages that link to “Coming soon” and point to Network overview / Protocol technical-architecture.  
- Context has `livepeer_marketplace.md`, `livepeer_technical_stack.md`, `livepeer_interfaces.md` — use when drafting.

---

## 18–22. Resources (whitepaper, glossary, blockchain-contracts, technical-roadmap, gateways-vs-orchestrators)

**livepeer-whitepaper.mdx**  
- 2026: Accurate; “Livepeer today” and “Key technical shifts (Streamflow, Arbitrum, AI)” are good.  
- Add “Last updated” or “Whitepaper as of 2017; network has evolved (Arbitrum, AI).”  
- Merkle Mine and ICO note: keep; good colour.  
- ExternalContent: ensure GitHub embed or link works; fallback to “View on GitHub” if embed fails.

**livepeer-glossary.mdx, blockchain-contracts.mdx, technical-roadmap.mdx, gateways-vs-orchestrators.mdx**  
- Verify against `Resources_References/livepeer_about_section_references.md` and context Protocol/Network files.  
- Ensure contract addresses and ABIs are 2026 (Arbitrum); link to Arbiscan and Explorer.  
- technical-roadmap: align with public roadmap; add “Current focus (2026)” if available.

**Resources / media (section-wide)**  
- [Explorer](https://explorer.livepeer.org/), [Forum LIPs](https://forum.livepeer.org/c/lips/), [Protocol GitHub](https://github.com/livepeer/protocol), [Streamflow](https://blog.livepeer.org/the-streamflow-upgrade-to-livepeer/), [Daydream](https://blog.livepeer.org/introducing-daydream), [Cascade](https://blog.livepeer.org/introducing-cascade) — use in “Further reading” and inline where relevant.

---

## Summary: completion and priority

| Priority | Item |
|----------|------|
| **P0** | Fix about-portal card links (all point to livepeer-network/overview). |
| **P0** | Fix actors.mdx opening fragment; fix livepeer-core-concepts duplicate content and “on‑chainU”; fix mental-model `*/}`. |
| **P0** | Fix typos: “incenticises”, “cyrptoeconomic”, “its essential”, “LivpeerServer”. |
| **P1** | Remove or fix docs.json entries for missing pages (marketplace, technical-architecture, interfaces?). |
| **P1** | Expand livepeer-network/overview using context data (session lifecycle, participants table). |
| **P1** | Replace or remove broken image in livepeer-core-concepts; remove large commented blocks for production. |
| **P2** | Add ELI5 or “At a glance” where suggested; add mermaid diagrams from context; link Explorer/Forum/contracts. |
| **P2** | faq-about.mdx: replace IA blueprint with real FAQ or move to internal. |

---

*Next: see [ABOUT-SECTION-STYLE-GUIDE.md](./ABOUT-SECTION-STYLE-GUIDE.md) for copy, components, branding, and styling.*
