# Orchestrators Section — Style Guide

Canonical guide for **copy**, **components**, **branding**, and **styling** in the v2 Orchestrators section (orchestrators). Use this when creating or editing Orchestrator pages so the section feels consistent and on-brand. Where not specified, follow the [About section style guide](../ABOUT/ABOUT-SECTION-STYLE-GUIDE.md).

---

## 1. Copy and voice

### Tone

- **Technical but approachable.** Explain node setup, staking, and pricing clearly; avoid unnecessary jargon. Define terms on first use (e.g. “active set,” “reward call,” “pricePerUnit,” “pool”).
- **Operator-focused.** Address the reader as “you” (the GPU operator or pool joiner). Use imperative for instructions (“Install go-livepeer,” “Set your pricePerUnit”).
- **2026-accurate.** Use present tense. Reference Arbitrum, Confluence, dual-market (video vs AI), pools, and BYOC as current. Avoid “will” for shipped features.
- **Concise.** Short paragraphs (2–4 sentences). Use bullets and tables for requirements, flags, and comparisons.

### Terminology (consistent across Orchestrators)

| Use | Avoid / clarify |
|-----|------------------|
| **Orchestrator** | Not “transcoder” for the node; “Transcoder” = GPU worker process. |
| **Gateway** | Job-submitting node (not “broadcaster” unless legacy context). |
| **Pool** | Operator-run GPU pool; “join a pool” = contribute GPU to one orchestrator. |
| **Stake / bond / delegate** | “Stake LPT,” “bond to yourself,” “delegate to an orchestrator.” |
| **Active set** | Top N orchestrators by stake (e.g. 100); define once per section. |
| **LPT** | “Livepeer Token” on first use per page; then LPT. |
| **go-livepeer** | The node software; “livepeer” / “livepeer_cli” for binaries. |
| **Video vs AI** | Video = stake-weighted, protocol rewards + tickets; AI = price/latency routed, usage fees. |
| **pricePerUnit / serviceAddr** | CLI flag names; use backticks. |

### Structure per page

- **Opening:** One or two sentences stating what the page covers and who it’s for (e.g. “This page explains how to install go-livepeer for running an orchestrator.”).
- **Body:** Clear headings (H2, H3); one theme per section. Prefer **Steps** for procedures; **tables** for hardware, flags, and comparisons; **Accordions** for “Learn more” or long reference.
- **Closing:** “See also” or “Next” with Cards or LinkArrows to related Orchestrator pages (Install, Configure, FAQ) and to About/Developers where relevant.

### Spelling and grammar

- **US English** for consistency with code and docs.livepeer.org (e.g. “configure,” “optimize”).
- Fix common typos: “partnr” → “partner,” “Rquires” → “Requires,” “Orcestrators” → “Orchestrators.”

---

## 2. Components

### Shared patterns (from About)

- **Callouts:** `<Tip>`, `<Note>`, `<Info>` for asides; `<Warning>` for slashing, key security, or payout caveats; `<Danger>` for critical warnings. Use **PreviewCallout** or **ComingSoonCallout** only where appropriate (e.g. in-progress pages).
- **Cards:** Use for primary CTAs (“Join a pool,” “Run your own node,” “Install go-livepeer,” “CLI flags”). Prefer `horizontal`, `arrow`, and `icon` for links. Keep title and description short.
- **Tables:** Use **DynamicTable** for comparisons (pool vs orchestrator, hardware tiers, video vs AI, flag reference). Avoid inline style objects; use theme or table component.
- **Accordions:** Use for “Finding a pool,” “Due diligence,” flag groups, and long reference content. Keep title concise; body can be bullets or short paragraphs.
- **Steps:** Use **Steps** / **StyledSteps** / **StyledStep** for procedures (install, configure, activate, join a pool). One clear action per step.

### Orchestrator-specific

- **Portal hero:** Same structure as Gateways/About: HeroSectionContainer, HeroImageBackgroundComponent, HeroContentContainer, LogoHeroContainer, PortalHeroContent (title, subtitle, callout, refCardLink, overview). Overview: 2–4 sentences + optional CustomCodeBlock (e.g. `docker pull`).
- **Quickstart / run guides:** Follow Gateways quickstart pattern where applicable: **View** (by OS: Docker, Linux, Windows), **Tabs** (e.g. off-chain / on-chain if needed), **Steps** with **CustomCodeBlock**, **Accordion** for flags or options, **Cards** for “Reference pages” (Install, Config, CLI flags, FAQ). Use snippet-driven code (e.g. `snippets/data/orchestrators/`) for DRY.
- **Code blocks:** Use **CustomCodeBlock** with `language`, `icon`, and optional `filename`. Prefer `bash` for shell commands. For JSON/YAML config, use valid syntax (double quotes for JSON).
- **Diagrams:** Mermaid in code blocks or imported snippet (e.g. orchestratorRole.mdx). Use theme variables for colours where possible.

### Do not

- Rely on `.gitbook/assets` or broken image paths; use `/snippets/assets/` or hosted URLs.
- Leave “INSERT DIAGRAM” or “image would be good” in published copy; add asset or remove.
- Mix import path styles; use `/snippets/...` consistently so mint validate passes.
- Put protocol contract descriptions on a “quickstart” or “add your GPU” page; move those to About or References.

---

## 3. Branding

### Livepeer positioning (Orchestrators)

- **Tagline-style:** “GPUs for AI Video — Run, Provide, Earn” (portal). Orchestrators = GPU compute nodes for the Livepeer network.
- **Product names:** go-livepeer, Livepeer Explorer, Livepeer Token (LPT), BondingManager, TicketBroker. Use “Confluence” when referring to Arbitrum migration.
- **External:** Titan Node (pool example), Discord, Forum, GitHub (go-livepeer, protocol).

### Links and CTAs

- **Primary:** Explorer (explorer.livepeer.org), go-livepeer GitHub, Protocol GitHub, Forum (LIPs, scripts).
- **Internal:** Prefer relative links within orchestrators (e.g. `./quickstart/join-a-pool`, `../setting-up-an-orchestrator/install-go-livepeer`). Use correct paths (quickstart vs setting-up) so Cards don’t 404.
- **Cross-section:** Link to About (economics, network actors), Developers (BYOC, ComfyStream, AI pipelines), Gateways (job flow), Resources (glossary).

### Visual identity

- **Colour:** Use theme variables (e.g. `var(--accent)`, `var(--livepeer-green)`) instead of hardcoded hex.
- **Icons:** Use Mintlify/GitBook set consistently (e.g. `microchip` for node, `swimming-pool` for pool, `rocket` for run, `book` for references).
- **Badges:** Use for “Quick Setup,” “Advanced Setup,” “Developer Level Up,” “on-chain,” “Video,” “AI” where they add clarity.

---

## 4. Styling

- **Spacing and layout:** Follow existing v2 patterns; use Columns for Card grids (e.g. cols={2}).
- **Headings:** H1 from frontmatter title; H2 for main sections; H3 for subsections. No H1 in body.
- **Code:** Monospace; language tag; avoid huge blocks—split into steps or Accordions if long.
- **Lists:** Bullets for short lists; numbered only when order matters (e.g. activation steps).

---

## 5. Differences from About

| Aspect | About | Orchestrators |
|--------|--------|----------------|
| Tone | Explainer (what/how) | Instructional (how to run / join / configure) |
| Audience | Readers learning the protocol | GPU operators, pool joiners, node runners |
| Code | Minimal (contract names, repo names) | Commands, config snippets, CLI flags, JSON/YAML |
| Media | Diagrams, optional hero | Diagrams, optional screenshots (Explorer), video (if available) |
| Callouts | Tip, Note, Danger | Same + Warning for slashing, payouts, key security |
| Steps | Rare | Frequent (install, configure, activate, join pool) |
| Tables | Roles, contracts, comparisons | Hardware, pool vs node, video vs AI, flags |

---

## 6. Checklist for new or revised Orchestrator pages

- [ ] Title and description match the page; keywords include main terms (orchestrator, pool, install, etc.).
- [ ] Opening states audience and goal; Steps used for procedures.
- [ ] Links are relative and correct (quickstart/join-a-pool vs setting-up/join-a-pool).
- [ ] Code blocks use CustomCodeBlock where a shared style is needed; JSON is valid.
- [ ] No “ComingSoon” or “Preview” callout unless page is intentionally in progress.
- [ ] See also / Next links to related Orchestrator pages and cross-section where relevant.
- [ ] Imports use `/snippets/...`; no broken assets.
- [ ] Terminology matches this style guide (Orchestrator, Gateway, pool, stake, LPT, go-livepeer, video vs AI).

---

*This style guide aligns with the About and Developers style guides and the Gateways quickstart layout. Use it together with 00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md and 01-ORCHESTRATORS-COPY-REVIEW-AND-RECOMMENDATIONS.md when creating or updating Orchestrators content.*
