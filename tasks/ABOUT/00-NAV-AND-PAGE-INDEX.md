# About Section — Nav Order & Page Index

Source: `docs.json` (About tab). Use this order for reviews and IA.

---

## Nav order (docs.json)

### Group 1: About Livepeer
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 1 | `v2/pages/01_about/about-portal` | ✅ about-portal.mdx | Portal; all cards currently link to livepeer-network/overview (wrong). |
| 2 | `v2/pages/01_about/core-concepts/livepeer-overview` | ✅ | |
| 3 | `v2/pages/01_about/core-concepts/livepeer-core-concepts` | ✅ | Duplicate content blocks; broken image ref. |
| 4 | `v2/pages/01_about/core-concepts/mental-model` | ✅ | Stray `*/}` in Examples (syntax). |

### Group 2: Livepeer Protocol
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 5 | `v2/pages/01_about/livepeer-protocol/overview` | ✅ | |
| 6 | `v2/pages/01_about/livepeer-protocol/core-mechanisms` | ✅ | |
| 7 | `v2/pages/01_about/livepeer-protocol/livepeer-token` | ✅ | |
| 8 | `v2/pages/01_about/livepeer-protocol/governance-model` | ✅ | |
| 9 | `v2/pages/01_about/livepeer-protocol/treasury` | ✅ | |
| 10 | `v2/pages/01_about/livepeer-protocol/protocol-economics` | ✅ | |
| 11 | `v2/pages/01_about/livepeer-protocol/technical-architecture` | ✅ | |

### Group 3: Livepeer Network
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 12 | `v2/pages/01_about/livepeer-network/overview` | ✅ | Very short; placeholder feel. |
| 13 | `v2/pages/01_about/livepeer-network/actors` | ✅ | Good content; opens with fragment. |
| 14 | `v2/pages/01_about/livepeer-network/job-lifecycle` | ✅ | |
| 15 | `v2/pages/01_about/livepeer-network/marketplace` | ✅ marketplace.mdx | Created from CONTEXT DATA/Network/livepeer_marketplace.md. |
| 16 | `v2/pages/01_about/livepeer-network/technical-architecture` | ✅ technical-architecture.mdx | Created from CONTEXT DATA/Network/livepeer_technical_stack.md. |
| 17 | `v2/pages/01_about/livepeer-network/interfaces` | ✅ interfaces.mdx | Created from CONTEXT DATA/Network/livepeer_interfaces.md; nav fixed (was interfaces?). |

Existing files in `livepeer-network/` not in nav: `supply-side.mdx`, `scaling.mdx`, `fee-flow.mdx`, `demand-side.mdx`, `livepeer-actors/*` (orchestrators, gateways, end-users, delegators).

### Group 4: Resources
| # | Page path | File exists | Notes |
|---|-----------|-------------|--------|
| 18 | `v2/pages/01_about/resources/livepeer-whitepaper` | ✅ | |
| 19 | `v2/pages/01_about/resources/livepeer-glossary` | ✅ | |
| 20 | `v2/pages/01_about/resources/blockchain-contracts` | ✅ | |
| 21 | `v2/pages/01_about/resources/technical-roadmap` | ✅ | |
| 22 | `v2/pages/01_about/resources/gateways-vs-orchestrators` | ✅ | |

---

## Other 01_about pages (not in About nav)

- `tab-index.mdx`
- `faq-about.mdx` — **Not a FAQ.** Contains IA blueprint / structural notes (“Good. This is the right moment to fix the IA…”). Should be replaced with real FAQ or moved to internal.
- `about-livepeer/moved/*` — Moved content; clarify if linked anywhere.

---

## Context data locations

- **v2/pages/01_about/_contextData_/**  
  - `deep-research-report.md` (style guide + core mechanism overview, ELI5, mermaid)  
  - `deep-research-report (IA).md`  
  - `protocol-frameworks-report.mdx.md` (six-part framework, mental model, layered stack)

- **docs/ABOUT/CONTEXT DATA/**  
  - `Protocol/` — livepeer_core_mechanisms.md, livepeer_governance_model.md, livepeer_protocol_economics.md, livepeer_technical_architecture.md, livepeer_treasury.md, livepeer_token.md, deep-research-report*.md  
  - `Network/` — livepeer_network_overview.md, livepeer_network_actors.md, livepeer_job_lifecycle.md, livepeer_marketplace.md, livepeer_interfaces.md, livepeer_technical_stack.md  
  - `Resources_References/livepeer_about_section_references.md` — canonical refs, metrics, external links  
  - `livepeer_ia_protocol_report.md`, `livepeer_docs_rebuild.md`

Use these for accuracy checks, upgrade ideas, and ensuring copy aligns with canonical framing (protocol vs network, actors, rounds, Arbitrum, Confluence).
