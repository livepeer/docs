# About Section — Style Guide

Canonical guide for **copy**, **components**, **branding**, and **styling** in the v2 About section (01_about). Use this when creating or editing About pages so the section feels consistent and on-brand.

---

## 1. Copy and voice

### Tone
- **Technical but approachable.** Explain protocol and network concepts clearly; avoid unnecessary jargon. Define terms on first use (e.g. “staking,” “round,” “ticket,” “Gateway”).
- **Confident and current.** Use present tense and 2026-accurate facts (Arbitrum, Confluence, AI network). Avoid “will” for already-shipped features.
- **Concise.** Short paragraphs (2–4 sentences). Use bullets and tables for lists and comparisons. One main idea per paragraph.

### Terminology (consistent across About)
| Use | Avoid / clarify |
|-----|------------------|
| **Gateway** (primary term for job-submitting node) | “Broadcaster” only when noting “formerly Broadcasters” or legacy context. |
| **Orchestrator** | Not “transcoder” for the node role; “Transcoder” = worker/process attached to an Orchestrator. |
| **Delegator** | LPT holders who bond to Orchestrators. |
| **Protocol** (on-chain) | Use for contracts, staking, governance, payments. |
| **Network** (off-chain) | Use for nodes, transcoding, AI inference, job routing. |
| **Stake / bond / delegate** | Use consistently: “stake LPT,” “bond to an Orchestrator,” “delegate.” |
| **LPT** | “Livepeer Token” on first use per page; then LPT. |
| **Confluence** | “Confluence upgrade” when referring to Arbitrum migration (Feb 2022). |
| **Round** | Define once (e.g. “protocol round (~X hours)”); link to RoundsManager or docs. |

### Structure per page
- **Opening:** One or two sentences stating what the page covers and why it matters.
- **Body:** Clear headings (H2, H3); one theme per section. Prefer tables and bullets over long prose for roles, contracts, and comparisons.
- **Progressive depth:** Optional “Executive summary” or “In a nutshell” at top for key pages (Overview, Protocol overview, Network overview); then detail.
- **Closing:** “See also” or “Next” links to related About pages and to Gateways/Orchestrators/Developers where relevant.

### Spelling and grammar
- **UK or US:** Pick one and stick to it (e.g. “decentralised” vs “decentralized”). Current docs mix; recommend **US** for consistency with “docs.livepeer.org” and code (e.g. “BondingManager”).
- **Typos to fix:** “incenticises” → “incentivises”; “cyrptoeconomic” → “cryptoeconomic”; “its essential” → “it’s essential”; “LivpeerServer” → “LivepeerServer”; “on‑chainU” → “on-chain.”

---

## 2. Components

### Shared patterns
- **Callouts:** Use `<Tip>`, `<Note>`, `<Info>` for asides. Reserve `<Danger>` for warnings (e.g. slashing, migration deadlines). Use a single “under construction” pattern (e.g. PreviewCallout) driven by frontmatter or wrapper where possible (see DRY report).
- **Cards:** Use for primary CTAs (e.g. “Read the Whitepaper,” “See Contract Addresses,” “Go to Orchestrators”). Prefer `horizontal` and `arrow` for links. Keep title and description short.
- **Tables:** Use `DynamicTable` or a shared `StyledTable` for contract lists, role summaries, and comparisons. Avoid inline style objects; use theme variables or a table component (see DRY).
- **Accordions:** Use for “Learn more” or long reference content (e.g. protocol mechanisms, stack layers). Keep title concise; body can be bullets or short paragraphs.
- **Quotes:** Use `<Quote>` or `<FrameQuote>` for whitepaper or key protocol statements; attribute clearly.

### About-specific
- **Portal hero:** Same structure across About, Gateways, Orchestrators, etc.: HeroSectionContainer, HeroImageBackgroundComponent (e.g. Starfield), HeroContentContainer, LogoHeroContainer, PortalHeroContent (title, subtitle, refCardLink, overview). Keep overview to 2–4 sentences.
- **Protocol section map:** Accordion grid (e.g. Core Mechanisms, LPT, Governance, Treasury, Protocol Economics, Technical Architecture) with AccordionTitleWithArrow linking to child pages. Reuse pattern on Protocol overview.
- **Stack / mental model:** Use Accordions for each layer; optional Badge for “Protocol,” “Orchestrators,” “Gateways.” Prefer theme colours over hardcoded hex (e.g. `var(--accent)` or `var(--livepeer-green)`).

### Do not
- Rely on `.gitbook/assets` or broken image paths; use `/snippets/assets/` or hosted URLs.
- Leave “INSERT DIAGRAM HERE” or “image would be good” in published copy; add asset or remove.
- Use different import path styles (e.g. `'snippets/...'` vs `'/snippets/...'`); pick one (prefer `/snippets/...`).

---

## 3. Branding

### Livepeer positioning (About section)
- **Tagline-style:** “Decentralized infrastructure for real-time video and AI” or “Open, on-demand AI & media infrastructure.”
- **DePIN:** Use when framing the project (“one of the earliest DePIN projects”); link to a short explainer or blog if needed.
- **Product names:** Use official names: Livepeer Protocol, Livepeer Network, Livepeer Token (LPT), go-livepeer, Daydream, Streamplace, Livepeer Studio. Use “Cascade” only if it’s the current public name (confirm with product).

### Links and CTAs
- **Primary:** Explorer (explorer.livepeer.org), Protocol GitHub (github.com/livepeer/protocol), Forum LIPs (forum.livepeer.org/c/lips/), Whitepaper (github.com/livepeer/wiki/blob/master/WHITEPAPER.md).
- **Secondary:** Contract addresses (docs or Arbiscan), Streamflow blog, Daydream/Cascade posts, Token Flows (tokenflows.xyz) for mechanism design.
- **Internal:** Prefer relative links within 01_about (e.g. `./livepeer-protocol/overview`, `../resources/livepeer-glossary`). Use full path for other tabs (e.g. `/gateways`, `/orchestrators`) as per routing.

### Visual identity
- **Colour:** Use theme variables (e.g. `var(--accent)`, `var(--livepeer-green)`) instead of hardcoded `#2d9a67` or `#b636dd` so light/dark and future themes stay consistent.
- **Icons:** Use Mintlify/GitBook icon set consistently (e.g. `cube` for protocol, `circle-nodes` for network, `coin` for token).
- **Logos:** Use official assets from `/snippets/assets/` (e.g. LivepeerDocsLogo.svg, domain-specific social previews). Do not introduce ad-hoc logos.

---

## 4. Styling

### Layout
- **Portal pages:** Full-width hero; then content in PortalContentContainer. Keep card grids to 2 columns on desktop (e.g. `Columns cols={2}`).
- **Content pages:** Standard doc layout with sidebar. Use H2 for main sections, H3 for subsections; avoid deep nesting (H4 max).
- **Spacing:** Use consistent vertical rhythm (e.g. marginBottom on Dividers and sections). Avoid negative margins except where already in use for visual alignment.

### Inline styles
- **Minimise.** Prefer components (Card, Accordion, Badge, Table) over raw `style={{}}`. Where needed (e.g. layer boxes in mental-model), use a shared “LayerCard” or theme variables.
- **Borders and boxes:** Use theme colour and a shared border-radius (e.g. 8px) so all boxes in About look the same.

### Typography
- **Headings:** Sentence case or title case consistently. No full caps for section titles.
- **Code:** Use backticks for contract names, repo names, and technical terms (e.g. `BondingManager`, `go-livepeer`, `TicketBroker`).
- **Lists:** Use `-` or `*` for unordered lists; numbered lists for steps. Keep list items short (one line where possible).

---

## 5. IA and navigation

### About tab structure (docs.json)
- **About Livepeer:** about-portal, core-concepts (livepeer-overview, livepeer-core-concepts, mental-model).
- **Livepeer Protocol:** overview, core-mechanisms, livepeer-token, governance-model, treasury, protocol-economics, technical-architecture.
- **Livepeer Network:** overview, actors, job-lifecycle; then marketplace, technical-architecture, interfaces only when pages exist.
- **Resources:** livepeer-whitepaper, livepeer-glossary, blockchain-contracts, technical-roadmap, gateways-vs-orchestrators.

### Cross-linking
- From Portal: every card must link to the correct child page (not all to livepeer-network/overview).
- From Protocol overview: link to each Protocol subpage and to Resources (whitepaper, blockchain-contracts).
- From Network overview: link to actors, job-lifecycle, and (if present) marketplace/technical-architecture; link to Gateways/Orchestrators tabs for “Run a node” or “Use the network.”
- From Mental model: link to Products and Showcase; keep paths correct (010_products, 00_home).

### Breadcrumbs and “See also”
- Rely on sidebar for hierarchy. Add inline “See also” at the bottom of long pages (e.g. “See also: Core Mechanisms, Livepeer Token, Governance”).

---

## 6. Context data and accuracy

### When editing About pages
- **Check:** `v2/pages/01_about/_contextData_/` and `docs/ABOUT/CONTEXT DATA/` for canonical phrasing, contract names, and structure (protocol vs network, actors, rounds).
- **Metrics:** Use `livepeer_about_section_references.md` for explorer, inflation, treasury, and contract links; update addresses/ABIs for 2026 (Arbitrum).
- **Diagrams:** Prefer mermaid in repo or snippets over external images so they stay in sync. Use context reports (e.g. deep-research-report.md, protocol-frameworks-report) for flow and stack diagrams.

### 2026 accuracy checklist
- [ ] Protocol on Arbitrum; LPT on Ethereum L1.
- [ ] Confluence and migration referenced correctly (Feb 2022).
- [ ] AI network and “AI jobs” described where relevant (gateway → orchestrator; non-protocol-routed).
- [ ] Round duration and slashing status stated or linked (governance/LIPs).
- [ ] Contract list and links match current deployments (Arbiscan, docs).
- [ ] Product names (Daydream, Streamplace, Studio, Cascade) current and correctly spelled.

---

## 7. Checklist for new or revised About pages

- [ ] Title and description match the page purpose; keywords include main terms (livepeer, protocol/network, topic).
- [ ] First use of “LPT,” “Gateway,” “Orchestrator,” “Delegator” clarified if needed.
- [ ] No broken links (internal or external); card and Accordion links point to the right pages.
- [ ] No placeholder text (“INSERT…”, “image would be good”) left in published copy.
- [ ] Tables and lists use shared components or theme; no duplicated inline styles.
- [ ] “See also” or “Next” links to related About pages and relevant other tabs.
- [ ] Context data and references checked for accuracy and 2026 updates.
- [ ] Spell-check: incentivises, cryptoeconomic, it’s, LivepeerServer, on-chain (no trailing U).

---

*This style guide is part of the About section review. See [00-NAV-AND-PAGE-INDEX.md](./00-NAV-AND-PAGE-INDEX.md) for nav order and [ABOUT-SECTION-COPY-REVIEW.md](./ABOUT-SECTION-COPY-REVIEW.md) for per-page review and code suggestions.*
