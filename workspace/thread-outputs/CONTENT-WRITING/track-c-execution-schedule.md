# Track C — Execution Schedule

**Generated:** 2026-04-30
**Outcome:** Three tabs (About, Developers, Delegators) shipped by tomorrow. No cutting corners.

---

## Math

| Tab | Nav pages (docs.json) | Files on disk | Orphans / deprecated | In-scope this cycle |
|---|---|---|---|---|
| About | ~25 | 41 | 16 | 25 |
| Developers | ~32 | 70 | 13 + 5 (deprecated) | 32 |
| Delegators | ~24 | 25 | 0 | 24 |
| **Total** | **~81** | **136** | **34** | **81** |

**Time per page (no shortcuts):**
- WRITE on claude.ai: 10–15 min/page (read brief, paste pack refs, generate, eyeball)
- Pass B (frontmatter + MDX components): 5–8 min/page
- Render verify + smoke test: 2–3 min/page

**Per-page total:** ~20 min end-to-end. **× 81 pages = ~27 hours of work.**

That doesn't fit one human-day plus tomorrow morning. Two ways to fit it without cutting corners:

---

## The two-lane model

### Lane 1 — claude.ai (you)

Highest-stakes pages where audience nuance, terminology, voice register, and multi-audience handling matter. These are the pages where you specifically asked for claude.ai's quality.

### Lane 2 — agent-driven (me)

Clear-brief, mechanical pages where the source-of-truth file is sufficient and there is no judgement call: reference pages, glossary, contract-address pages, navigation pages. Each page goes through the same pack — but I run it via an Agent invocation here, not on claude.ai. Same voice rules, same self-check, same checks.mdx gate.

This is parallelism, not corner-cutting. Every page goes through the same 8-file pack and the same checks.mdx. The packaging guarantees the bar; the lane just controls who runs the inference.

---

## Recommended split

### About (25 pages)

**Lane 1 — claude.ai (8 pages, 2 hours)**
1. `portal.mdx` — landing, multi-audience routing
2. `livepeer-overview.mdx` — orientation, voice-critical
3. `core-concepts.mdx` — concept hub
4. `mental-model.mdx` — concept-heavy, narrative-critical
5. `livepeer-network/overview.mdx` — concept hub
6. `livepeer-network/actors.mdx` — multi-audience overview
7. `livepeer-protocol/overview.mdx` — concept hub
8. `livepeer-protocol/economics.mdx` — economics, voice-critical

**Lane 2 — agent (17 pages, ~3 hours)**
- All other livepeer-network/* (5)
- All other livepeer-protocol/* (6)
- Resources (5): whitepaper, glossary, blockchain-contracts, technical-roadmap, compendium glossary
- index.mdx (1)

### Developers (32 pages)

**Lane 1 — claude.ai (8 pages, 2 hours)**
1. `portal.mdx` — landing, builder/dev split
2. `developer-journey.mdx` — orientation
3. `concepts/developer-stack.mdx` — concept hub
4. `concepts/ai-on-livepeer.mdx` — voice-critical, multi-product
5. `get-started/setup-paths.mdx` — disambiguation, navigation pattern
6. `build/byoc.mdx` — flagship build doc
7. `build/sdk-gateway.mdx` — flagship build doc
8. `build/workload-fit.mdx` — decision-support, voice-critical

**Lane 2 — agent (24 pages, ~4 hours)**
- Concepts (3): video-on-livepeer, running-a-gateway, oss-stack
- Get Started (4): video-quickstart, transcoding-quickstart, ai-quickstart, comfystream-quickstart
- Build (2): comfystream, model-support
- Guides (4): developer-guides, resources, contribution-guide, developer-help
- Opportunities (5): overview, grants-and-programmes, rfps-and-proposals, oss-contributions, bug-bounties
- Resources (6): sdks, apis, awesome-livepeer, wiki, deepwiki, compendium glossary

### Delegators (24 pages)

**Lane 1 — claude.ai (8 pages, 2 hours)**
1. `portal.mdx` — landing, three-path routing
2. `concepts/overview.mdx` — concept hub
3. `concepts/mechanics.mdx` — bonding mechanics, voice-critical
4. `concepts/tokenomics.mdx` — economics, voice-critical
5. `delegation/overview.mdx` — section landing
6. `delegation/choose-an-orchestrator.mdx` — highest-friction page (per IA design)
7. `delegation/delegate-your-lpt.mdx` — first-delegation tutorial
8. `delegation/delegation-economics.mdx` — economics, dependency-disclosure-heavy

**Lane 2 — agent (16 pages, ~3 hours)**
- Concepts (1): purpose
- Delegation (4): about-delegation, bridge-lpt-to-arbitrum, manage-your-delegation
- Guides — Governance (3): overview, model, processes
- Guides — Treasury (3): overview, proposals, allocations
- Resources (5): glossary, exchanges, lpt-eth-usage, delegator-videos-and-blogs, contracts, protocol-parameters

---

## Today's runbook

| Time | You | Me |
|---|---|---|
| Now | (waiting on packs) | 4 agents running: 3 packs + checks.mdx. ~30–60 min |
| Pack delivery | Upload Pack 1 (About) to claude.ai project A. Upload Pack 2 (Developers) to project B. Upload Pack 3 (Delegators) to project C. | Spot-check pack quality. Fix anything obviously broken. |
| Page 1, lane 1 | About `portal.mdx` WRITE on claude.ai | About lane 2 page 1 — agent dispatched |
| Rolling | Paste each Lane 1 output back to me. Move to next page in priority list. | For each pasted output: run checks.mdx. Pass → Pass B → render-verify → ship. Fail → annotated re-prompt back to you. In parallel: my own lane 2 agents producing pages, going through same gate. |
| End of today | Lane 1 priority pages done (~24 pages). | Lane 2 pages mostly done (~57 pages). |
| Tomorrow AM | (Optional) Anything that didn't make it last night. | Cross-tab references resolved, full-tab render check, PR merge to docs-v2. |

---

## Exemplar pages (for `04-exemplars.md` in each pack)

**Universal exemplars (any tab):**
- `.claude/references/` — anything tagged "voice-exemplar" or "pattern-exemplar"
- `docs-guide/standards/voice-and-copy.mdx` — has positive samples per audience

**Per-tab exemplar candidates (pack agents will pick the best 3-5):**

About: `v2/orchestrators/portal.mdx` (multi-path routing pattern), `v2/orchestrators/concepts/protocol.mdx` (concept density), `v2/about/resources/livepeer-glossary.mdx` if recently rewritten.

Developers: `v2/orchestrators/setup/connect.mdx` (recently shipped, code-first density), `v2/orchestrators/setup/monitor.mdx` (technical-density exemplar), `v2/api-reference/` if any pages have current voice.

Delegators: `v2/delegators/delegation/delegation-economics.mdx` (canonical rebuild April 6, should have current voice), `v2/orchestrators/concepts/economics.mdx` if it exists, `v2/delegators/concepts/mechanics.mdx`.

---

## Open questions

1. **About multi-audience model** — pack uses "primary per page, secondary flagged inline" as the shipping rule. Confirm or override.
2. **Orphan pages** (16 in About, 13 in Developers, 0 in Delegators) — out of scope this cycle? AUDIT mode in next cycle?
3. **Deprecated pages in `v2/about/_workspace/deprecated/` and `v2/developers/x-deprecated/`** — ignore or archive properly?
4. **Lane 2 authority** — am I authorised to run agent-driven WRITE on lane 2 pages, or do you want every page to go through claude.ai?
