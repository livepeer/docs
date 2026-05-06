---
title: About Tab — Canonical Architecture Gap Audit
date: 2026-05-06
type: research/audit
status: draft for review
---

# About Tab — Canonical Architecture Gap Audit

**Outcome:** Identify (1) gaps vs the canonical IA (concepts → protocol → network), (2) persona-question coverage, (3) ≥5 consolidation candidates for Guides + Resources, and (4) what's missing from Guides/Resources to answer the user's listed questions.

Read-only research. No file edits in this session.

---

## 1. TL;DR

The canonical IA you specified is **already wired into `docs.json`** for `concepts/`, `protocol/`, and `network/`. Per-page content is mostly polished. **The gaps are not in the canonical pages themselves — they are in (a) the Network section's missing "Core Mechanisms" page, (b) two empty Guides slots, (c) ~30 deprecated pages still registered in nav under a "DEP" group, and (d) duplicate content scattered across `guides/`, `resources/knowledge-hub/`, and `resources/reference/`.**

The most important *content-writing* gaps:

1. **No LIP / proposal-authoring guide** — Guides "Development" + "Opportunities" groups are empty in nav.
2. **No Builders / Development guide** — DeepWiki has one for `go-livepeer`; we have nothing.
3. **Treasury proposal flow is opaque** — `protocol/governance-and-treasury.mdx` mentions 10% inflation but never explains how proposals are submitted, allocated, or reviewed.
4. **Slashing repeatedly mentioned as "disabled" but never explained** — appears 4× across Protocol pages with no rationale.
5. **No tutorials anywhere** — Guides are reference/explainers, not "do this then that."
6. **Gateway selection / job routing is a black box** — `protocol/architecture.mdx` describes the handshake but not the algorithm.
7. **Network is missing "Core Mechanisms" page** — content scattered across `marketplace`, `architecture`, `metrics`, `participation`.

---

## 2. Canonical IA alignment

User's target IA (matches `docs.json` lines 2117–2150):

| Section | User's canonical | Current docs.json | Delta |
|---|---|---|---|
| **Concepts** | about-livepeer · livepeer-stack · actors-and-capabilities · governance-and-economics | identical | ✅ Match |
| **Protocol** | design · mechanisms · livepeer-token · governance-and-treasury · architecture · blockchain-contracts | identical | ✅ Match |
| **Network** | Network Design · **Core Mechanisms** · Job Pipelines · Marketplace · Architecture · Network Metrics | design · architecture · marketplace-model · job-pipelines · **interfaces** · **participation** · **observability** · metrics | 🔴 Missing `core-mechanisms.mdx`. Extra: interfaces, participation, observability |

### Delta resolution recommendations

| Page | Recommendation | Why |
|---|---|---|
| `network/core-mechanisms.mdx` | **CREATE** — synthesise staking, rewards, settlement, rounds from Network's perspective | User's canonical IA requires it. Currently scattered. |
| `network/interfaces.mdx` | **MOVE to Developers tab** as "Network API Reference" | Developer-audienced (gateway entry, orchestrator handshake, trickle protocol). Belongs near integration docs. |
| `network/participation.mdx` | **SPLIT** | Mixes operational paths (run orch/gateway, delegate) with extension paths (BYOC, SPEs, governance). First 3 belong in Orchestrators / Gateways / Delegators tabs. SPE + governance becomes narrower `network/spes-and-extension.mdx` OR `resources/reference/spes.mdx` |
| `network/observability.mdx` | **SHRINK** — fold the 5-surfaces overview into `architecture.mdx`'s external-observability section; keep `resources/reference/observability.mdx` as a query-pattern reference | Duplicates the architecture page on Explorer/subgraph/capabilities API |

### Title collision

Both `protocol/architecture.mdx` and `network/architecture.mdx` exist. Same with `protocol/design.mdx` + `network/design.mdx`. Different content, but identical sidebar labels create confusion. Recommend disambiguating sidebars: "Protocol Architecture" / "Network Architecture", "Protocol Design" / "Network Design".

---

## 3. Persona Q&A coverage matrix

Mapping every question you listed to a current page + status.

| # | Question | Best home | Current state | Status |
|---|---|---|---|---|
| 1 | What is Livepeer technically? | `concepts/about-livepeer` | Polished, DePIN framing, clear protocol/network split | ✅ |
| 2 | Difference protocol vs network? | `concepts/about-livepeer` + `livepeer-stack` | Polished, defined explicitly | ✅ |
| 3 | What can Livepeer do? | `concepts/actors-and-capabilities` | Polished — video, AI, real-time AI, BYOC + 5 frontiers | ✅ |
| 4 | What is the protocol & what actors does it define? | `protocol/design` | Clear actor table (orch / delegator / gateway) | ✅ |
| 5 | How is it governed? | `protocol/governance-and-treasury` | Voting clear (33% quorum, >50% threshold). Governor execution thin | 🟡 |
| 6 | How is it updated & changed? (LIP process) | (Guides — DOESN'T EXIST) | Only changelog stubs (`go-livepeer.mdx`, `lips.mdx` — both ~25w) | 🔴 |
| 7 | Technical detail / job flow? | `network/job-pipelines` | Polished — 16-state machine, full lifecycle | ✅ |
| 8 | How do I build on it? | Developers tab (out of About) + a `guides/development.mdx` for contributors | `guides/contributor-orientation` is 157w outline | 🔴 |
| 9 | How does it work? | `concepts/livepeer-stack` + `network/architecture` | Polished | ✅ |
| 10 | What defines the network as distinct from product? | `network/design` | Clear (off-chain execution layer) | ✅ |
| 11 | Why the token? | `protocol/livepeer-token` | Polished — "two tokens, two jobs" framing | ✅ |
| 12 | Token utility functions | `protocol/livepeer-token` + `protocol/mechanisms` | Polished | ✅ |
| 13 | Payment separation (LPT vs ETH) | `protocol/livepeer-token` value-flows | Clear | ✅ |
| 14 | Governance structure & voting | `protocol/governance-and-treasury` | Process diagram present; governor mechanics, emergency paths, rollback all thin | 🟡 |
| 15 | Treasury — role in growth | `protocol/governance-and-treasury` | "10% inflation, funds SPEs and public goods" — no detail | 🟡 |
| 16 | Treasury — proposals | (Guides — DOESN'T EXIST) | No proposal-flow page; treasury governance is opaque | 🔴 |
| 17 | Tools & Metrics — Explorer | `guides/network-metrics` (4700w) + `network/observability` | Comprehensive metrics; Explorer guidance light | 🟡 |
| 18 | Tools & Metrics — Metrics Embed | (DOESN'T EXIST) | No "how to embed Livepeer data in your site" page | 🔴 |
| 19 | Builders Guide / GitHub repo guide | (Guides — DOESN'T EXIST) | "Development" group empty in `docs.json` (line 2262) | 🔴 |
| 20 | Contributor paths | `guides/contributor-orientation` | 157w outline; needs filling | 🟡 |
| 21 | How to evaluate Livepeer | `guides/evaluating-livepeer` | Polished (Q1 2026 Messari + 9 AccordionGroup, completed today) | ✅ |
| 22 | Tutorials | (DOESN'T EXIST) | Zero step-by-step tutorials | 🔴 |

**Score: 11 ✅ · 5 🟡 · 6 🔴**

---

## 4. The six 🔴 gaps — recommended fills

| # | Gap | Recommended page | Source material |
|---|---|---|---|
| G1 | LIP / proposal authoring | `guides/lip-authoring.mdx` (NEW) | DeepWiki LIPs/2 (full 10-step lifecycle + 100 LPT burn + Standard vs Treasury distinction); `protocol/governance-and-treasury` Process section |
| G2 | Treasury proposal flow | `guides/treasury-and-proposals.mdx` (NEW) or extend `governance-and-treasury` | LIP-89, LIP-91, LIP-92; Standard LIP vs LivepeerGovernor distinction; current SPEs |
| G3 | Builders / Development guide | `guides/development/` group (NEW) — index + build-from-source + testing + contributing + code-layout | DeepWiki go-livepeer/4-development; mirror Build / Testing / DB / CLI / Config / AI sections |
| G4 | Contributor paths (deep) | `guides/contributor-orientation.mdx` (EXPAND from 157w) | DeepWiki contributor paths; current `network/participation.mdx` SPE-orientation parts |
| G5 | Metrics Embed / Tools | `guides/network-tools-and-metrics.mdx` (NEW) | Existing `guides/network-metrics.mdx` reference + `network/observability` (5 surfaces) + Explorer + Subgraph + Dune query patterns |
| G6 | Tutorials | Tutorial pattern across Guides | None of the above guides should be reference-style; they should be sequenced "do X, then Y" pages |

---

## 5. Consolidation candidates (≥5)

These take **content that already exists in the repo** (or in deprecated/parallel folders) and re-home it into cohesive Guides/Resources entries. Numbered for prioritisation.

### C1. Guides → "Protocol Design & Tradeoff Decisions"
- **Source:** `protocol/design.mdx` (Design Decisions section) · `concepts/governance-and-economics` (tradeoff sections) · `protocol/mechanisms.mdx` cross-cutting commentary · deprecated `protocol2/design-philosophy.mdx` + `protocol/x-design-philosophy.mdx`
- **Target:** `guides/protocol-design-tradeoffs.mdx`
- **Rationale:** You explicitly asked for "Protocol Design & Tradeoff Decisions". Tradeoff narrative is currently scattered across 4 pages and 2 deprecated drafts. Synthesise into one persona-targeted guide; the canonical pages remain reference.

### C2. Guides → "Governance & Voting"
- **Source:** `protocol/governance-and-treasury.mdx` (Process + LIPs sections) + DeepWiki LIP-process (10-step workflow) + `concepts/governance-and-economics` (decision-making section)
- **Target:** `guides/governance-and-voting.mdx`
- **Rationale:** Workflow-style guide for LPT holders. Differs from the canonical `protocol/governance-and-treasury` (which is a concept page). Fills "Governance Model: Governance Structure, Voting" question.

### C3. Guides → "Livepeer Treasury & Proposals"
- **Source:** `protocol/governance-and-treasury.mdx` (Treasury fragment) · DeepWiki LIPs/2 (Treasury vs Standard distinction) · LIP-89/91/92 references · current SPE list from `network/participation.mdx`
- **Target:** `guides/treasury-and-proposals.mdx`
- **Rationale:** Fills 🔴 G2. User asked for "Livepeer Treasury: Role in growth, Proposals". Currently treasury content is two paragraphs.

### C4. Guides → "Builders / Development Guide"
- **Source:** NEW (mirror DeepWiki go-livepeer/4-development structure) · cross-references to `protocol/blockchain-contracts.mdx` (ABIs) · existing changelog stubs as "release process"
- **Target:** `guides/development/` (index + build, testing, contributing, code-layout, AI sub-pages)
- **Rationale:** Fills 🔴 G3 + empty "Development" nav slot. User explicitly flagged this gap.

### C5. Guides → "Network Tools & Metrics"
- **Source:** `guides/network-metrics.mdx` (4723w polished reference) + `network/observability.mdx` (5 surfaces, currently duplicates architecture) + `resources/reference/livepeer-contract-addresses.mdx` cross-link
- **Target:** `guides/network-tools-and-metrics.mdx` (workflow: how to read the network)
- **Rationale:** Combines reference with workflow. Reduces duplication between observability and architecture. Fills G5 + answers Tools & Metrics, Explorer, Metrics Embed.

### C6. Guides → "Contributor Orientation" (expand from outline)
- **Source:** Current `guides/contributor-orientation.mdx` (157w outline) + `network/participation.mdx` first three paths (run-orch, run-gateway, delegate) + `concepts/actors-and-capabilities` actor frontier section
- **Target:** `guides/contributor-orientation.mdx` (expanded; canonical home)
- **Rationale:** Removes scope creep from `participation.mdx` (which mixes 5 paths). Fills 🟡 G4.

### C7. Resources collapse — one Glossary, one Whitepaper, one Roadmap, one Metrics ref, one Contracts ref
- **Source duplicates:**
  - `resources/glossary.mdx` (5736w) ↔ `resources/livepeer-glossary.mdx` (1767w outline)
  - `resources/knowledge-hub/contributor-orientation.mdx` ↔ `guides/contributor-orientation.mdx` (identical)
  - `resources/knowledge-hub/evaluating-livepeer.mdx` (170w) ↔ `guides/evaluating-livepeer.mdx` (polished)
  - `resources/knowledge-hub/gateways-vs-orchestrators.mdx` ↔ `guides/gateways-vs-orchestrators.mdx` (identical)
  - `resources/reference/network-metrics.mdx` (191w stub) ↔ `guides/network-metrics.mdx` (4723w polished)
  - `resources/reference/technical-roadmap.mdx` (77w link-dump) ↔ `guides/technical-roadmap.mdx` (polished)
- **Target:** Delete the shadow copies. Canonical homes: glossary in Resources; everything else in Guides. Resources keeps `faq`, `glossary`, `livepeer-whitepaper`, `livepeer-contract-addresses`.
- **Rationale:** 6 duplicate file pairs. Hides the real content. Trivial to fix mechanically once approved.

### C8. Network → split & re-home
- **Move:** `network/interfaces.mdx` → Developers tab as "Network API Reference"
- **Split:** `network/participation.mdx` → 3 sections move to Orchestrators / Gateways / Delegators; SPE + governance becomes `network/spes.mdx` (narrow scope) or `resources/reference/spes.mdx`
- **Shrink:** `network/observability.mdx` → fold 5-surfaces overview into `network/architecture.mdx`; query patterns + blind spots become `resources/reference/observability.mdx`
- **Add:** `network/core-mechanisms.mdx` (synthesises staking, rewards, settlement, rounds from Network's perspective)
- **Target end-state:** Network IA matches user's canonical 6 pages: Design · Core Mechanisms · Job Pipelines · Marketplace · Architecture · Network Metrics

---

## 6. Cleanup — deprecated nav still registered

`docs.json` lines 2153–2243 register a "Network 1" group + a "DEP" group containing **65 files** that should be archived or hidden:

| Sub-group | Pages | Action |
|---|---|---|
| `Livepeer Network 1` (visible) | network1/{design,marketplace-model,job-pipelines,architecture,interfaces} | Hide from nav; keep in repo as `_workspace/x-archived/` for diff reference |
| `DEP > protocol` | 19 pages (protocol/x-*, protocol2/*) | Archive or delete |
| `DEP > network` | 24 pages (network1/*, network2/*) | Archive or delete |
| `DEP > other` | 18 pages (composables/*, unclassified/*, knowledge-hub duplicates) | Archive |

Two pages currently appear **twice** in the Guides nav: `guides/network-metrics` and `guides/technical-roadmap` (lines 2252 + 2269 and 2268). De-dupe.

---

## 7. Recommended next steps (if approved)

| Order | Action | Type | Approx effort |
|---|---|---|---|
| 1 | De-dupe Guides nav entries; remove duplicate `network-metrics` + `technical-roadmap` rows | docs.json edit | 5 min |
| 2 | Delete 6 shadow files in `resources/knowledge-hub/` + `resources/reference/` (C7) | file ops + docs.json | 15 min |
| 3 | Hide DEP nav group; move `network1/`, `network2/`, `protocol2/`, `concepts/composables/`, `concepts/unclassified/` to `_workspace/x-archived/` | move + propagate | 30 min |
| 4 | Disambiguate sidebar titles for the 2 architecture + 2 design pages (Section 2) | frontmatter edits | 10 min |
| 5 | Create `network/core-mechanisms.mdx` (Section 2 fix; user's canonical IA) | new content | half-day |
| 6 | Split `network/participation.mdx`; move `network/interfaces.mdx` to Developers; shrink `network/observability.mdx` | refactor + propagate | 1 day |
| 7 | Expand `guides/contributor-orientation.mdx` (C6) | content | 0.5 day |
| 8 | Build C1–C5 guides (NEW content + DeepWiki source mirrors) | content | 1–2 days each |
| 9 | Fill 🟡 gaps in `protocol/governance-and-treasury.mdx` (governor execution, slashing rationale, rollback paths) | content | 0.5 day |

---

## 8. Sources cited

- DeepWiki: livepeer/go-livepeer Overview, Development; livepeer/LIPs LIP Process & Governance
- `docs.json` lines 2107–2297 (About tab nav)
- All 8 Network pages, 6 Protocol pages, 4 Concepts pages, 7 Guides files, 9 Resources files
- claude-mem S2068 (today, 12:26pm) — `evaluating-livepeer.mdx` AccordionGroup state
