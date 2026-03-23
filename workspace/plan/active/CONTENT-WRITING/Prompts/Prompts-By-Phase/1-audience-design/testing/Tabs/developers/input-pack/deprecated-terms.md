# Livepeer — Deprecated and Conflicted Terms

**Purpose**: Terms that have been renamed, deprecated, or have conflicting definitions across files. Content prompts must use the correct current term.
**Sources**: `tasks/plan/active/TERMINOLOGY-COLLATE/research.md` (Known Issues), per-tab glossaries
**Generated**: 2026-03-20

---

## Deprecated Role Terms

| Old term | Status | Current term | Notes |
|---|---|---|---|
| Broadcaster | **Deprecated** | Gateway (operator) | "Broadcaster" appears in the Whitepaper and go-livepeer codebase because those predate the rename. When reading the Whitepaper, treat "Broadcaster" as the deprecated term for what is now called a Gateway. Never use "Broadcaster" in new documentation. |
| Pool worker | **Renamed** | Pool node | Old term may still appear in older docs and community posts. Use "Pool node" in all new content. |
| Combined mode | **Deprecated, ambiguous** | (no single replacement) | "Combined mode" referred to running both video and AI workloads on one node, but was used inconsistently. Use "Dual mode" or "Dual-workload configuration" instead. |
| Hybrid | **Deprecated, informal** | Dual mode | Informal term for running both video and AI. Use "Dual mode" only. |
| Transcoder | **Partially deprecated** | Varies by context | In go-livepeer, "Transcoder" refers to the worker process in an O-T split. In general protocol descriptions, "Orchestrator" is the current preferred term. Do not use "Transcoder" as a synonym for "Orchestrator." |

---

## Conflicting Definitions (resolve before using)

| Term | Conflict | Resolution |
|---|---|---|
| pageType enum | Old 12-type set (landing, overview, tutorial, quickstart, how_to, concept, reference, faq, troubleshooting, changelog, glossary, guide) vs new 7-type set (navigation, concept, tutorial, guide, instruction, reference, resource) | New 7-type set is canonical per `tasks/plan/active/CONTENT-WRITING/framework.md`. The old values are deprecated aliases. |
| purpose enum | Format-mirroring 16-value set vs intent-based 15-value set | Intent-based 15-value set is canonical (orient, explain, choose, start, build, configure, operate, troubleshoot, optimize, integrate, verify, compare, reference, learn, update). |
| audience tokens | Old 9-token set (developer, gateway-operator, orchestrator, delegator, platform-builder, community, internal, general, everyone) vs new 10-token set | New set is canonical: added `founder`, renamed `platform-builder` → `builder`. |
| "Network Participant" | Flagged with "..?" in livepeer-glossary.mdx — unclear if distinct from Protocol Actor | Avoid using "Network Participant" as a defined term until resolved. Use specific role labels (Orchestrator, Gateway, Delegator, Developer) instead. |
| DePIN | Appears twice in livepeer-glossary.mdx | Single definition: Decentralized Physical Infrastructure Networks — an infrastructure model where physical hardware is contributed to a decentralised network for shared use. |
| RTMP | Appears twice in livepeer-glossary.mdx | Single definition: use the one from classified-by-tab.md. |

---

## High-Staleness Terms (verify before using)

These terms are current but their values can change via governance or release — always verify against live state.

| Term | Why it can change | Where to verify |
|---|---|---|
| Active set size (100) | Could change via governance | [Explorer](https://explorer.livepeer.org) |
| Unbonding period | Set by governance | [Explorer](https://explorer.livepeer.org) (read from BondingManager) |
| Target bonding rate (50%) | Set by governance | [Delegator yield guide](https://docs.livepeer.org/delegators/guides/yield-calculation) + LIPs |
| Inflation adjustment rate (0.00005% per round) | Set by governance | [Delegator yield guide](https://docs.livepeer.org/delegators/guides/yield-calculation) + LIPs |
| Treasury reward cut rate | Set by governance (LIP-92) | [LIPs repo](https://github.com/livepeer/LIPs) |
| AI pipeline types and model IDs | Change with releases | [go-livepeer releases](https://github.com/livepeer/go-livepeer) + [AI docs](https://docs.livepeer.org/ai/introduction) |
| CLI flag names and defaults | Change between go-livepeer releases | [CLI reference](https://docs.livepeer.org/references/go-livepeer/cli-reference) + latest tagged release |

---

## Draft Terms (incomplete definitions — do not use without verifying)

From `glossary-index.md` Section 4:

| Term | Issue |
|---|---|
| AI Video | No external reference; definition thin |
| Ephemeral Compute | Context thin |
| Inflation Model | Overlaps with Dynamic Inflation — use "Dynamic Inflation" instead |
| AI Gateway API | In active development; API shape may change |
| veLPT (Vote-Escrowed LPT) | Proposal not yet implemented — do not describe as existing |
| Active Set Election | Overlaps with Active Set — use "Active Set" unless referring specifically to the election mechanism |
