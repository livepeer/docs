# About Tab — Completion Plan

> Status: DRAFT — awaiting approval before execution
> Date: 2026-05-02
> Owner: Alison
> Thread: About

<CustomDivider />

## TL;DR

You are not as far away as it feels. The tab has **almost everything you need already written.** What's blocking you is:

1. Nav still points at parallel drafts (`concepts1/`, `protocol2/`, `network2/`) sitting in a "Deprecated" group in `docs.json` — half-moved, never finished
2. Three pages exist on disk but were never added to nav (Roles & Participants, Architecture Stack, Concepts Overview)
3. Six actual content gaps — small stubs, not full pages

**Real work to ship the tab to "stub-complete":** ~1 day. **Then** content pass (separate, multi-day, page-by-page).

<CustomDivider />

## The actual state

### Tab in `docs.json`

The tab is named **"Protocol"** (not "About") but uses the `v2/about/` URL prefix. Current groups:

```
Protocol (tab)
├── Protocol and Network          [portal, navigator]
├── Concepts                      [3 pages]
├── Livepeer Protocol             [7 pages]
├── Livepeer Network              [5 pages]
├── Deprecated                    [old concepts1, protocol2, network2 — still in nav!]
├── Guides                        [5 pages + 3 EMPTY subgroups]
└── Resources                     [faq, glossary, knowledge-hub, EMPTY compendium, reference]
```

The Deprecated group is the smoking gun. You moved the canonical pages out, but never deleted the deprecated bucket from nav. Until that bucket is gone, every reader sees both the new IA *and* the old drafts.

### Files on disk vs nav

83 active MDX files under `v2/about/` (excluding archive and `_workspace/`). The current nav cites ~38 of them. The rest are either:
- Drafts in `concepts1/`, `protocol2/`, `network2/` (still in Deprecated nav group — must be removed)
- Drafts in `concepts/`, `protocol/x-*`, `network/` that were never promoted into nav (must be promoted or archived)

<CustomDivider />

## Your proposed IA — reconciled against reality

Legend: ✅ exists in nav · 🟡 exists on disk, not in nav · ❌ does not exist · 🔄 needs rename/merge

### Concepts

| Slot | Status | File on disk | Notes |
|---|---|---|---|
| Overview | 🟡 | `v2/about/concepts/about-livepeer.mdx` | Already in nav. Rename slot label to "Overview" |
| Capabilities | ✅ | `v2/about/concepts/livepeer-capabilities.mdx` | |
| Livepeer Stack | 🟡 | `v2/about/concepts/architecture-stack.mdx` | Exists but NOT in nav. Rename slot or use as-is |
| Roles & Participants | 🟡 | `v2/about/concepts/roles-and-participants.mdx` | Exists but NOT in nav |

Also on disk in `concepts/`: `livepeer-architecture.mdx`, `livepeer-protocol-and-network.mdx`. **Decision needed:** archive these two, or fold their content into the four canonical pages above.

### Protocol

| Slot | Status | File on disk | Notes |
|---|---|---|---|
| Overview: Design & Evolution | ✅ | `protocol/overview.mdx` + `protocol/design.mdx` | Two pages. Decide: merge into one, or keep as Overview + Design |
| Core Mechanisms | ✅ | `protocol/mechanisms.mdx` | |
| Token & Economics | ✅ | `protocol/livepeer-token.mdx` | Rename slot to "Token & Economics" |
| Governance & Treasury | ✅ | `protocol/governance-and-treasury.mdx` | |
| Architecture | ✅ | `protocol/architecture.mdx` | |
| Blockchain Contracts | ✅ | `protocol/blockchain-contracts.mdx` | |
| Development & Deployment | ❌ | — | **STUB NEEDED** |
| Security | ❌ | — | **STUB NEEDED** |

Also on disk in `protocol/`: `actors.mdx`, `x-design-philosophy.mdx`, `x-livepeer-token.mdx`, `x-treasury.mdx`. **Decision needed:** delete the `x-*` drafts (alternate writes that lost), and decide whether `actors.mdx` belongs in Protocol or Network (it's currently orphaned in nav under "Actor Profiles" inside Deprecated).

### Network

| Slot | Status | File on disk | Notes |
|---|---|---|---|
| Overview: Design, Participants | ✅ | `network/design.mdx` | Rename slot to "Overview" |
| Job Pipelines | ✅ | `network/job-pipelines.mdx` | |

Already in nav beyond your proposed IA: `marketplace-model`, `architecture`, `interfaces`. **Decision needed:** are these in or out? Recommendation: keep `marketplace-model` and `architecture` in (they earn their slots); move `interfaces` to Resources/Reference.

Also on disk in `network/`: `actors.mdx`, `mechanics.mdx`, `economic-model.mdx`, `growth-model.mdx`, `demand-side.mdx`, `supply-side.mdx`, plus `livepeer-actors/{delegators,end-users,gateways,orchestrators}.mdx`. The actor profiles already live under `delegators/`, `gateways/`, etc. tabs — these are duplicates. **Decision needed:** archive all of these except whichever of `mechanics.mdx` / `economic-model.mdx` you want to keep as a deep-dive.

### Guides

| Slot | Status | File on disk | Notes |
|---|---|---|---|
| Tooling → Explorer & Metrics | 🔄 | `guides/network-metrics.mdx` | Page exists. Group "Network Metrics" in nav is empty — promote the page into it, or delete the empty group |
| Changelogs → Go-Livepeer | ❌ | — | **STUB NEEDED** |
| Changelogs → Protocol | ❌ | — | **STUB NEEDED** |
| Changelogs → LIPs | ❌ | — | **STUB NEEDED** |

Empty group "Opportunities" in current nav — **decision needed:** keep, fill, or delete.

Existing extras in `guides/`: `evaluating-livepeer`, `contributor-orientation`, `gateways-vs-orchestrators`, `technical-roadmap`. These overlap with `resources/knowledge-hub/` (same filenames). **Decision needed:** one home each — recommend keeping in `resources/knowledge-hub/`, removing duplicates from `guides/`.

### Resources

Already populated: faq, glossary, knowledge-hub (4), reference (3). Empty group "Compendium" — recommend deleting.

`resources/livepeer-glossary.mdx` is a duplicate of `resources/glossary.mdx` — **decision needed:** keep one, archive the other.

<CustomDivider />

## Total content gaps (real stubs needed)

Six pages. That's it.

1. `v2/about/protocol/development-and-deployment.mdx`
2. `v2/about/protocol/security.mdx`
3. `v2/about/guides/changelogs/go-livepeer.mdx`
4. `v2/about/guides/changelogs/protocol.mdx`
5. `v2/about/guides/changelogs/lips.mdx`
6. (Optional) `v2/about/guides/changelogs/index.mdx` — a parent landing page

Plus three nav-only adds (pages exist, just not wired):
- Roles & Participants
- Livepeer Stack (rename of architecture-stack)
- Concepts Overview (rename of about-livepeer in nav)

<CustomDivider />

## Plan — phased

Each phase has a gate. Don't start the next one until the previous gate passes.

### Phase 0 — Lock the IA (you decide, ~30 min)

**You answer these eight questions, recorded in the decision registry. Then nothing else moves.**

1. Tab name: rename "Protocol" → "About"? (Recommend yes — your IA calls it About)
2. Concepts: keep four pages exactly as you proposed (Overview, Capabilities, Stack, Roles)? Archive `livepeer-architecture` and `livepeer-protocol-and-network`?
3. Protocol Overview: one page or two (Overview + Design)?
4. Protocol extras: archive `x-design-philosophy`, `x-livepeer-token`, `x-treasury`, `actors`?
5. Network: keep `marketplace-model` and `architecture` in nav? Archive everything else under `network/` except `design`, `job-pipelines`, and those two?
6. Network actor profiles: archive (live elsewhere) — confirm?
7. Guides: drop the duplicates (`evaluating`, `contributor`, `gateways-vs-orch`, `technical-roadmap`) — keep only in Resources?
8. Empty groups: delete Compendium, Opportunities. Keep Network Metrics group with the existing page promoted into it. Keep Changelogs (will fill in Phase 2).

**Gate:** All eight answered, written to `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`.

### Phase 1 — Consolidate (Claude executes, ~2 hours)

Once Phase 0 is locked:

1. Move `concepts1/`, `concepts2/`, `protocol2/`, `network2/` → `v2/about/_workspace/deprecated/`
2. Move `network/` and `protocol/` files marked archive in Phase 0 → `_workspace/deprecated/`
3. Delete the "Deprecated" group from `docs.json`
4. Promote `roles-and-participants.mdx` and `architecture-stack.mdx` (or whatever you renamed it) into the Concepts group
5. Apply renames decided in Phase 0
6. Run move-detect hook + `docs-path-sync` to catch redirects

**Gate:** `node operations/scripts/dispatch/governance/server-lifecycle.js restart v2/about` passes. No 404s on internal links pointing into about/.

### Phase 2 — Stub the six gaps (Claude executes, ~1 hour)

Each stub follows page-authoring skill conventions: frontmatter (title, description, lastVerified, pageType), one-paragraph intro stating the page's value proposition, three section headings with TODO markers, "Last verified" footer.

Stubs:
- `protocol/development-and-deployment.mdx` — how go-livepeer is built, released, deployed; client diversity; release cadence
- `protocol/security.mdx` — threat model, audit history, slashing/penalties, dispute resolution, bug bounty
- `guides/changelogs/index.mdx` — landing page linking the three streams
- `guides/changelogs/go-livepeer.mdx` — link to/embed of go-livepeer release notes
- `guides/changelogs/protocol.mdx` — protocol contract changes timeline
- `guides/changelogs/lips.mdx` — Livepeer Improvement Proposals index

**Gate:** All six render in `restart v2/about`. Smoke test passes:
```
node operations/tests/integration/mdx-component-runtime-smoke.js \
  --routes /v2/about/protocol/development-and-deployment,/v2/about/protocol/security,/v2/about/guides/changelogs/go-livepeer,/v2/about/guides/changelogs/protocol,/v2/about/guides/changelogs/lips
```

### Phase 3 — Final nav lock + verify (Claude executes, ~30 min)

1. Re-write the About tab section of `docs.json` from scratch, matching the locked IA
2. Run full-tab smoke test on all 22 final pages
3. Run move-detect to catch stale references in `.txt`, `sitemap.xml`, `llms.txt`
4. Update master tracker row

**Gate:** Smoke passes. No stale references. Render-verify hook PASSED on every changed file.

### Phase 4 — Content pass (separate threads, multi-day)

Once Phases 0–3 ship, the tab is **stub-complete and navigable.** Then content quality goes page-by-page through the existing content-pipeline-pass-a / pass-b skills. Order recommendation:

1. Concepts (4 pages) — these are the entry door, do them first
2. Protocol Overview + Mechanisms — second-most-trafficked
3. Network Overview + Job Pipelines — third
4. Stubs from Phase 2 — fill with real content
5. Everything else

This is **not in scope for this thread.** Spin a new content thread per page.

<CustomDivider />

## What I need from you to start

Just answer Phase 0's eight questions. That's the only blocker.

Recommendation if you want me to default-pick: I can propose answers for all eight, and you reply "go" or "redirect on Q3, Q5". Faster than answering them cold.

<CustomDivider />

## Files referenced

- `docs.json` — current nav
- `v2/about/**/*.mdx` — content
- `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` — where Phase 0 decisions get logged
- `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` — Mintlify constraints (read before any MDX edits)
- `ai-tools/ai-skills/page-authoring/SKILL.md` — stub format for Phase 2

<CustomDivider />

## Status row for master tracker

```
| About | Phase 0 plan ready (8 decisions for Alison). Audit done — 6 real stubs needed, 4 nav consolidations, 0 content rewrites in scope | Active — awaiting Phase 0 approval | 2026-05-02 |
```
