AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| agent-v5-solutions-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/solutions/zero-context-ai-results/v5/` | Audience, Persona, Journey, IA |
| glossary-solutions.md | `...solutions/input-pack/` | Content |
| veracity-sources.md | `...solutions/input-pack/` | Prompt/Skill |
| deprecated-terms.md | `...solutions/input-pack/` | Content |
| IA.mdx | `v2/solutions/_workspace/canonical/` | IA |
| portal.mdx | `v2/solutions/` | Content, IA |
| master-status.mdx | `SOLUTIONS-SOCIAL-DATA/` | Plan |
| plan.md | `SOLUTIONS-SOCIAL-DATA/` | Plan |
| (collated/ and learnings/ directories) | `...testing/Tabs/solutions/` | **BOTH EMPTY** |

---

# AUDIENCE — Who lands on this tab

**Audience tokens**: `founder` + `builder` (dual)

| Arriving type | Entry vector | Routing need |
|---|---|---|
| **Founder evaluating Livepeer for product** | Home, About, referral, search "Livepeer for [use case]" | Stays — evaluation persona |
| **Builder actively developing with Livepeer** | Developers tab graduation, direct URL | Stays — build persona |
| **Platform user (Daydream, Studio, etc.)** | Product-specific search | Stays — product-specific content |

### Arriving question

> "What can I build with Livepeer, and how do I start?"

---

# PERSONAS — Who this tab actually serves

### Source: agent-v5-solutions-audience-design.md (single run)

| Rank | Persona | Score | Description |
|---|---|---|---|
| 1 | **Video Product Builder** | **9** | Primary. Building video streaming/transcoding product on Livepeer |
| 2 | **Active Builder** | **8** | Return visitor. Already building, needs feature-level depth |
| 3 | **AI Media Builder** | **7** | Building AI inference product (real-time AI video, batch) |
| 4 | **Integration Evaluator** | **7** | Evaluating fit without writing code. May never build |
| 5 | **Ecosystem Explorer** | **3** | Browsing what exists. Low depth, low commitment |

All self-identify as "developers" or "product builders" but cannot resolve to single path without S1 disambiguation.

**What they need from this tab:**
1. What products exist on Livepeer (Daydream, Studio, Frameworks, Streamplace, Embody)
2. What capabilities are available (livestream, VOD, AI pipelines, access control, webhooks)
3. Quickstart to first working result
4. Feature-level build guides
5. Use cases and proof the platform works

---

# JOURNEYS

## Canonical ideal journey (10 stages, v5)

| Position | Stage | lifecycleStage |
|---|---|---|
| 1 | Orienting to platform | `discover` |
| 2 | Understanding how Livepeer works | `discover` |
| 3 | Evaluating fit | `evaluate` |
| 4 | First thing working | `setup` |
| 5 | Implementing livestream | `build` |
| 6 | Implementing VOD | `build` |
| 7 | Securing with access control | `build` |
| 8 | Connecting to system (webhooks) | `build` |
| 9 | Using AI pipelines | `build` |
| 10 | Validating before launch | `operate` |

---

# IA — All section structures found

## Agent v5 — 12-section structure

| # | Section | purpose | pageType |
|---|---|---|---|
| S1 | Platform paths | `orient` | `navigation` |
| S2 | How platform works | `explain` | `concept` |
| S3 | Video capability overview | `evaluate` | `concept` |
| S4 | AI pipeline overview | `evaluate` | `concept` |
| S5 | Quickstart | `start` | `instruction` |
| S6 | Live streaming | `build` | `guide` |
| S7 | Video on demand | `build` | `guide` |
| S8 | Access control | `build` | `instruction` |
| S9 | Webhooks | `build` | `instruction` |
| S10 | AI pipelines start | `start` | `instruction` |
| S11 | AI pipelines build | `build` | `guide` |
| S12 | Use cases | `evaluate` | `resource` |

S3 flagged for potential split (capability checklist vs comparative evaluation).

## IA.mdx (canonical workspace) — minimal sketch

Root → Portal + Navigation. Per-Solution template (Product Overview + Getting Started). Community Updates (automation broken). Resources (refine needed). Marked for refinement.

## Current live structure

portal.mdx: Landing/frame-mode with Starfield hero. Products: Daydream, Studio, Frameworks, Streamplace, Embody. YouTube demo embed. Data-driven component structure.

5 community pages live via automated social data pipeline (YouTube, Discord, GitHub, RSS, Forum per product). SOLUTIONS-SOCIAL-DATA pipeline complete (4 phases done).

---

# OPEN ITEMS

1. **LEAST ADVANCED TAB** — Only 1 AI run. No collation, no learnings, no Check B.
2. **IA.mdx is minimal sketch** — needs full development.
3. **`.env` credentials risk** in SOLUTIONS-SOCIAL-DATA — must verify (actual keys vs template).
4. **~35 external links** to livepeer.studio/docs need path conversion.
5. **76-term glossary** ready. VOD duplicate entries (cosmetic, not conflict).
