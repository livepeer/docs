# 01 — Developers Tab Brief

> Source: `attachments/ia-design.md`, `attachments/content-canonical.md`, `attachments/ia-prereq.md`. Cross-checked against current `v2/developers/` tree (April 2026).

---

## Tab purpose

Route a developer to a working integration, then to production. The Developers tab is a junction — quickstarts, build guides, SDK and API references, and signposts to the Gateways and Orchestrators tabs for infrastructure work. It does not own protocol-participation content (Orchestrators / Delegators) or solution-product narrative (Solutions tab).

**Primary job:** A developer lands, picks a path (AI batch, real-time AI, or video), completes a quickstart, ships a first integration, and knows where to graduate to (production hardening, BYOC, custom gateway).

**Out of scope (link, do not duplicate):**
- Gateway / orchestrator infrastructure setup → Gateways and Orchestrators tabs.
- LPT staking, governance, treasury participation → Delegators / About tabs.
- Solutions product pages (Studio, Daydream, Streamplace) → Solutions tab. Developers references them.
- Token economics, protocol whitepaper → About tab.

---

## Audience split — two registers, one tab

Both registers obey the universal rules in `03`. Pick one per page; never blend.

### `developer` — code-first register

Building things that run on the network. Custom AI containers, BYOC, protocol extensions, contributor work on `go-livepeer` / `ai-runner` / `ComfyStream` / `pytrickle`. Reads code faster than prose. Wants function signatures, error types, env vars, GitHub links.

- Lead with code; prose only where code does not show the thing.
- Function signatures, types, interface definitions are primary content.
- Reference the actual codebase. Link GitHub at the file or function level when relevant.
- Be explicit about versions (`livepeer@3.5.0`, `ai-runner v0.14.1`, `go-livepeer v0.8.10`) and breaking changes.
- Error states and edge cases live in main content, not in trailing notes.

### `builder` — integration-focused register

Building products with Livepeer as infrastructure (Studio API, AI SDKs, hosted gateway). Wants to ship. Has software engineering context but not protocol-level knowledge.

- Lead with integration outcome (what the product or its users get), then mechanism.
- State the exact endpoint or SDK method first, then the surrounding context.
- Working code in JS/TS first, then Python, then Go.
- Show the full request/response cycle, not just "call this endpoint".
- State prerequisites explicitly: which API key type, which SDK version, which plan or rate limit.

### Per-page assignment

The brief in `02-page-briefs.md` names the audience. Most operational pages are `builder`. Deep technical pages (BYOC, contribution, SDK gateway client, OSS stack) are `developer`.

---

## Full page list (current `v2/developers/` nav, April 2026)

32 nav entries across 7 groups. Status column reflects the audit in `attachments/content-scan.md`.

### Hub / Start Here

| Path | Audience | Status |
|---|---|---|
| `v2/developers/portal` | builder | current — copy audit needed |
| `v2/developers/developer-journey` | builder | current |

### Concepts

| Path | Audience | Status |
|---|---|---|
| `v2/developers/concepts/developer-stack` | builder | draft — strong |
| `v2/developers/concepts/ai-on-livepeer` | builder | draft — strong |
| `v2/developers/concepts/video-on-livepeer` | builder | **stub — P0** |
| `v2/developers/concepts/running-a-gateway` | builder | draft — good |
| `v2/developers/concepts/oss-stack` | developer | draft — good |

### Get Started

| Path | Audience | Status |
|---|---|---|
| `v2/developers/get-started/setup-paths` | builder | **stub — P0** |
| `v2/developers/get-started/video-quickstart` | builder | **stub — resolve vs transcoding-quickstart** |
| `v2/developers/get-started/transcoding-quickstart` | builder | current — TD review pending |
| `v2/developers/get-started/ai-quickstart` | builder | current — stakeholder signoff pending on default `model_id` |
| `v2/developers/get-started/comfystream-quickstart` | developer | draft — strong |

### Build (Custom AI Workflows)

| Path | Audience | Status |
|---|---|---|
| `v2/developers/build/workload-fit` | builder | current |
| `v2/developers/build/sdk-gateway` | developer | **stub — P1** |
| `v2/developers/build/model-support` | builder | reference, draft |
| `v2/developers/build/byoc` | developer | draft — needs PyTrickle section |
| `v2/developers/build/comfystream` | developer | draft — strong |

### Guides

| Path | Audience | Status |
|---|---|---|
| `v2/developers/guides/developer-guides` | builder | current — link audit |
| `v2/developers/guides/resources` | builder | current — overlaps with `resources/` |
| `v2/developers/guides/contribution-guide` | developer | current |
| `v2/developers/guides/developer-help` | builder | current — pageType migration (`faq` → `reference`+`compendium`) |

### Opportunities (subgroup of Guides per Notion IA)

| Path | Audience | Status |
|---|---|---|
| `v2/developers/opportunities/overview` | builder | current — audience field non-canonical |
| `v2/developers/opportunities/grants-and-programmes` | builder | current |
| `v2/developers/opportunities/rfps-and-proposals` | builder | current |
| `v2/developers/opportunities/oss-contributions` | developer | current |
| `v2/developers/opportunities/bug-bounties` | developer | current |

### Resources

| Path | Audience | Status |
|---|---|---|
| `v2/developers/resources/sdks` | builder | **stub — P1** |
| `v2/developers/resources/apis` | builder | **stub — P1** |
| `v2/developers/resources/awesome-livepeer` | builder | stub — embed unavailable |
| `v2/developers/resources/wiki` | builder | stub — link error to deepwiki |
| `v2/developers/resources/deepwiki` | builder | current |
| `v2/developers/resources/compendium/glossary` | builder | strong (59 KB) |

---

## Open IA decisions (do not invent answers)

These are flagged in `attachments/ia-design.md` and `attachments/content-canonical.md`. Surface in `## OPEN QUESTIONS` if your page depends on one.

1. **`navigator.mdx` (new)** — proposed in canonical IA but not yet in nav. P0 missing page; pre-quickstart routing layer. If your brief touches portal or setup-paths routing, treat `navigator` as PENDING.
2. **`video-quickstart` vs `transcoding-quickstart`** — both exist; `video-quickstart` is a stub. Recommendation in IA: redirect `video-quickstart` to `transcoding-quickstart`, or split as Studio VOD/asset (video-quickstart) and streaming (transcoding-quickstart). Not yet decided.
3. **S6 split — real-time vs custom-compute (BYOC)** — the canonical IA treats `build/comfystream` (real-time AI on the trickle protocol) and `build/byoc` (custom container for any compute) as **two distinct pages with overlapping mechanics** (both go through PyTrickle, both use the trickle protocol). The split is page-level; do not merge. **Pending decision:** whether `build/comfystream` becomes a child of `build/byoc` (treating ComfyStream as a BYOC variant) or stays peer. Treat as TWO pages until told otherwise. Each gets its own brief in `02`. If a section in either page needs to reference the other, link out — do not duplicate the mechanics.
4. **`opportunities/` path** — files live at `v2/developers/opportunities/`. Some IA proposals nest under `v2/developers/guides/opportunities/`. Use the on-disk path.
5. **Default `model_id` for AI quickstart** — placeholder pending stakeholder signoff. Flag, do not invent.
6. **`@muxionlabs/byoc-sdk` public availability** — referenced in BYOC docs, not in public npm. Flag as `[REVIEW: confirm package availability with MuxionLabs]`.
7. **`developer-help` move to `resources/`** — proposed in canonical layout. Not yet executed. Page lives in `guides/`.

---

## Cross-tab boundaries (state explicitly when relevant)

- **Developers ≠ Gateways.** Developers covers building **with** the gateway (calling it, choosing it, building a client). Gateways covers running one. The handoff page is `concepts/running-a-gateway`.
- **Developers ≠ Orchestrators.** Orchestrators covers running GPU compute and earning fees. Developers covers building workloads that run on orchestrator GPUs. Handoff: `concepts/oss-stack` references protocol-side contributor paths.
- **Developers ≠ Delegators.** No staking content in Developers. The opportunities pages reference SPE proposals and grants, which require LPT — link to Delegators / Token tab for the staking mechanics, do not explain them.
- **Developers ≠ Solutions.** Solutions tab owns Studio, Daydream, Streamplace product pages. Developers links to them as integration targets, never duplicates product narrative.

---

## Domain term lock (always use; never substitute)

| Use | Never |
|---|---|
| LPT | "tokens", "crypto" |
| orchestrator | "miner", "node" generically |
| gateway | "API gateway" |
| reward cut / fee cut | "commission" |
| probabilistic micropayments | "payments" generically |
| on-chain / off-chain | payment MODE — never workload type |
| dual | WORKLOAD config — not a payment type |
| BYOC | "bring your own container" only on first use; abbreviation thereafter |
| trickle | the streaming protocol used by real-time AI; lowercase |
| ComfyStream | proper noun, capitalised both halves |
| PyTrickle | proper noun, exactly this casing |
| `live-video-to-video` | the real-time pipeline; backticked or quoted |
| pool worker | define at first use on every page |
