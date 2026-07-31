# Per-Page Quality Check Report
## `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2919–2925

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Reward Call Tuning'` | PASS | |
| `sidebarTitle` | Yes | `'Reward Tuning'` | PASS | |
| `description` | Yes | `'Calculate whether reward calling is profitable at your stake level, configure automatic vs manual calling, and optimise timing to minimise gas costs on Arbitrum.'` | PASS | 156 chars; subject-first; UK English (`optimise`); no self-reference |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. Canonical replacement: `pageType: instruction` |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | No | — | FAIL | Field absent. Proposed: `purpose: optimise` — confirm before applying. Page optimises reward calling on a running system |
| `complexity` | No | — | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying |
| `keywords` | Yes | 8-item array | PASS | `reward calling`, `LPT inflation`, `gas costs`, `Arbitrum`, `reward cut`, `stake threshold`, `-reward flag` — specific and searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct path |
| `industry` | No | — | FAIL | Required per P41. Proposed: `industry: [technical, economics]` — confirm before applying |
| `niche` | No | — | FAIL | Required per P41. Proposed: `niche: [protocol, tokenomics]` — confirm before applying |
| `veracityStatus` | No | — | FAIL | Field absent. `status: current` is present — this combination is incoherent per checks.mdx §1.8 (P39). `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Page has 4 open FACT CHECK flags. Must either change `status` to `draft` OR set `veracityStatus: unverified` and change `status` to `draft` |

**Required field count:** 4/10 canonical fields present. **Critical issue: `status: current` + absent `veracityStatus` + 4 open FACT CHECK flags = incoherent state (P39).**

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. 6 fields absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type alias. Canonical replacement: `pageType: instruction` |
| 1.3 | `pageVariant` valid if present | N/A | Field absent. `how_to → instruction` migration does not require `pageVariant` (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: optimise` — confirm before applying (P51) |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying (P51) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent AND `status: current` — incoherent state per checks.mdx §1.8 and P39. `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Page has 4 open FACT CHECK flags. **Required fix:** change `status: current` to `status: draft` AND add `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Required per P41. Proposed: `industry: [technical, economics]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Required per P41. Proposed: `niche: [protocol, tokenomics]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | 156 chars; subject-first ("Calculate whether reward calling is profitable…"); UK English (`optimise`); no self-reference |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | PASS | `reward calling`, `LPT inflation`, `gas costs`, `Arbitrum`, `reward cut`, `stake threshold`, `-reward flag` are specific and searcher-intent-aligned |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — show all candidates):**
- `effectively` — not found
- `essentially` — not found
- `basically` — not found
- `meaningful` — not found
- `significant` — not found
- `real` (intensifier) — not found
- `various` — not found
- `several` — not found
- `obviously` — not found
- `clearly` — not found

**Banned phrase scan:**
- "This section covers" — not found
- "rather than" — not found
- "etc." / "and so on" — not found
- "can generate" / "may produce" in value claims — not found

**Banned construction candidates (P6):**
- Line 40: "Use this page to calculate profitability, configure the `-reward` flag, choose between automatic and manual calling, and decide when skipping rounds is justified." — `Use this page [verb]` is a banned construction under check 2.4: `This page [verb]` self-reference. "Use this page to X" is equivalent to "This page covers X." FAIL.
- Line 51: "This page covers video transcoding sessions." — wait, this is from capacity-planning.mdx, not this file. Confirmed: not present in reward-call-tuning.mdx.
- Line 133: "**For most operators:** leave automatic calling enabled." — imperative framing, not a banned construction. PASS.
- No `can/may [verb]` in value claims found.
- No `not [X]` as primary value statement found.

**Em-dash scan (P30 — all visible text):**
- Body prose: `~22-hour intervals` uses a hyphen, not em-dash. `~0.00002 ETH` — numerical. No em-dashes found.
- Headings H2/H3: no em-dashes
- `description` field: no em-dashes
- CustomDivider `middleText` props (P20): `"Profitability Threshold"`, `"Automatic vs Manual"`, `"Timing Strategies"`, `"Monitoring"` — no em-dashes. PASS.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout (P54) | PASS | `optimise` (UK) in description. No US `-ize`, `-or`, `-er` endings in prose |
| 2.2 | Zero banned words (P46) | PASS | All 10 banned words scanned; none found |
| 2.3 | Zero banned phrases | PASS | All banned phrases scanned; none found |
| 2.4 | Zero banned constructions | FAIL | Line 40: "Use this page to calculate profitability, configure the `-reward` flag, choose between automatic and manual calling, and decide when skipping rounds is justified." — `This page [verb]` self-reference (equivalent form "Use this page"). Fix: delete the line; the content that follows makes the page purpose clear. Proposed fix: delete line 40 entirely |
| 2.5 | Opening order correct | PASS | Tip leads with consequence ("Every missed reward call is a permanently forfeited LPT allocation"). Body opens with mechanism explanation. Fact-first |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; fact-first leads; no hedge endings |
| 2.7 | Audience register correct | PASS | Gas cost calculations, CLI flags, protocol mechanics. Correct `orchestrator` register |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "The network rewards you for…". Note: line 82 states "By default, go-livepeer calls `Reward()` automatically at the start of each new round. No action required after initial activation." — this is a factual statement about system behaviour, not the prohibited phrase pattern |
| 2.9 | No passive value statements | PASS | Reward call profitability stated with the formula and break-even framing. Concrete mechanism |
| 2.10 | No hedging openers | PASS | Tip is direct; body opens with factual statement about round mechanics |
| 2.11 | Terminology locked and consistent | PASS | `Reward()`, `LPT`, `Arbitrum One`, `reward cut`, `active set`, `-reward=false`, `livepeer_cli` consistent throughout |

**Category 2 verdict: FAIL** — 1 check fails: 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading inventory (exempt: `## Related pages` — P53 note: lowercase `pages` vs exact exempt form `Related Pages`. INFO only — see F-09):**

| Heading | Level | Precision (1–5) | Depth (1–5) | Stability (1–5) | Clarity (1–5) | Conciseness (1–5) | Total | Pass? |
|---------|-------|-----------------|-------------|-----------------|---------------|--------------------|-------|-------|
| Profitability calculation | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Automatic vs manual calling | H2 | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS |
| Automatic calling (default) | H3 | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| Manual calling | H3 | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Timing considerations | H2 | 3 | 2 | 4 | 4 | 4 | 17/25 | FAIL |
| When to skip calling intentionally | H3 | 4 | 3 | 4 | 4 | 2 | 17/25 | FAIL |
| Monitoring reward calls | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Alert for missed rounds | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Check call history | H3 | 4 | 3 | 5 | 4 | 4 | 20/25 | PASS |

Failing headings analysis:
- **"Automatic calling (default)"** (18/25): The "(default)" parenthetical adds noise without signal. The content is about the default automatic mode and its requirements. Low Depth (3) and Conciseness (3). Proposed: `Automatic Calling` — confirm before applying. (The "default" qualifier is covered by the content, not needed in the heading.)
- **"Timing considerations"** (17/25): Generic abstract noun. Low Precision (3) and Depth (2). Does not signal the content — gas timing strategy, round deadline risk, Arbitrum price fluctuation. Proposed: `Timing and Gas Strategy` — confirm before applying.
- **"When to skip calling intentionally"** (17/25): Long, process-verb framing, conditional ("when"). Low Conciseness (2). Proposed: `Skip Conditions` — confirm before applying.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | 3 headings below threshold: "Automatic calling (default)" (18/25), "Timing considerations" (17/25), "When to skip calling intentionally" (17/25) |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms. `Considerations` is not in the check 3.2 prohibited list (Avoid-tier terms are `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`) |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. "Automatic vs manual calling" names the governing concept (the calling mode choice), not just a contrast |
| 3.4 | Domain-anchor rule applied | PASS | "Monitoring reward calls" and "Alert for missed rounds" are interpretable in isolation |
| 3.5 | Heading names the concept, not examples | PASS | "Profitability calculation" not "350,000 gas vs LPT value" |
| 3.6 | Title well-formed | PASS | `Reward Call Tuning` — 3 words, concept-derived, no banned forms |
| 3.7 | Sounds like an expert editorial choice | FAIL | "Timing considerations" and "When to skip calling intentionally" are generic instructional labels. A senior technical editor would anchor to the governing concept |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

Nav sequence from docs.json lines 2919–2925: `pricing-strategy` (pos 1) → `capacity-planning` (pos 2) → `ai-model-management` (pos 3) → `reward-call-tuning` (pos 4, last in group).

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: configure and optimise reward calling on a running orchestrator node |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator calculate reward call profitability, configure automatic vs manual calling, and decide when to skip." — states cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Previous: `ai-model-management` (AI pipeline management) — different concern. This is the last page in the group. Reader completing config-and-optimisation has covered pricing, capacity, AI model management, and now reward calling — the four tunable dimensions of a running orchestrator. Logical sequence |
| 4.4 | No dead ends | PASS | Related pages link to reward mechanics, earning model, metrics-and-alerting, payment-receipts |
| 4.5 | Prerequisites stated or linked | INFO | No explicit prerequisites section. Implicitly requires: node running and in the active set. Round mechanics (22-hour intervals) explained inline. Reasonable for the audience |
| 4.6 | Out-of-scope is clear | PASS | Scope implicit: this is about the reward call mechanism specifically. Fee income handled in payment-receipts (linked) |
| 4.7 | Information type per section correct | PASS | `purpose: optimise` (proposed). Permitted types: `analytical`, `procedural` (primary); `technical`, `evaluative`, `factual` (secondary). Sections: profitability calculation (analytical + factual), automatic/manual calling (procedural + technical), timing (analytical), monitoring (procedural) — all within permitted range |
| 4.8 | No content duplication from adjacent sections | PASS | Reward mechanics (linked) covers the protocol mechanics; this page covers operational configuration. No duplication |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

Component matrix for `pageType: how_to` per `docs-guide/policies/component-layout-decisions.mdx`: Preferred: `Steps`, `Step`, `CodeGroup`, `Warning`, `Check`, `Tip`. Avoid: `Coming Soon`, `PreviewCallout`.
When migrated to `pageType: instruction`: same matrix.

Components used: `CustomDivider`, `LinkArrow`, `StyledTable`/`TableRow`/`TableCell`, `Tip`, `Warning`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | INFO | `how_to` deprecated. When migrated to `instruction`: requires Prerequisites and Steps |
| 5.2 | Required sections present | INFO | No explicit Prerequisites section. Manual calling procedure uses an ordered list (lines 115–118) not inside a `<Steps>` wrapper. `Warning` used for missed-round risk — appropriate |
| 5.3 | Only approved components used | NOT-TESTED | `Tip`, `Warning` approved for `instruction`. `CustomDivider`, `StyledTable`/`TableRow`/`TableCell`, `LinkArrow` are custom components not listed in component-layout-decisions.mdx Preferred or Avoid columns. Per P22: NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`, no rendered TODO/TBD |
| 5.5 | Information type → component mapping correct | PASS | Monitoring data in `StyledTable` not present — no table here. Code blocks for CLI flags (procedural/technical). `Warning` for operational risk. Appropriate |
| 5.6 | MDX renders clean | PASS (inferred) | No unclosed tags; all imports present |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` deprecated (same root cause as check 1.2) |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths |

**Category 5 verdict: FAIL** — 1 check fails: 5.7

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Type | Line | TESTED/NOT-TESTED | Source needed |
|-------|------|------|-------------------|---------------|
| One round ≈ 22 hours on Arbitrum | factual | 38 | NOT-TESTED | go-livepeer source / Livepeer Explorer |
| `Reward()` is a gas transaction on Arbitrum One | factual | 38–39 | NOT-TESTED | Protocol contracts |
| Typical gas used: 350,000–450,000 gas | technical | 53–54 | NOT-TESTED | FACT CHECK flag (line 72): Mehrdad / protocol data |
| Arbitrum gas price: 0.01–0.1 gwei | technical | 55 | NOT-TESTED | FACT CHECK flag (line 72) |
| Approximate ETH cost: 0.0000035–0.000045 ETH | technical | 56 | NOT-TESTED | FACT CHECK flag (line 72) |
| LPT earned formula (your stake / total active stake × round_issuance × 0.90) | factual | 61–63 | NOT-TESTED | Protocol contract source |
| 0.90 = 90% remaining after 10% LIP-89 Treasury allocation | factual | 63 | NOT-TESTED | LIP-89 spec |
| Break-even: "approximately a few thousand LPT" at ~$4 USD and ~0.00002 ETH gas | analytical | 70 | NOT-TESTED | FACT CHECK flag (line 72): requires current figures |
| Prometheus metric name: `livepeer_round_last_claim` | technical | 149 | NOT-TESTED | FACT CHECK flag (line 151): Rick / go-livepeer metrics |
| `livepeer_cli` `Invoke "reward"` option name | technical | 117 | NOT-TESTED | FACT CHECK flag (line 125): Rick / current livepeer_cli menu |
| Explorer shows round success/skip/miss per orchestrator | factual | 155 | NOT-TESTED | Live Explorer test |
| Reward call gas ≈ every 22 hours on Arbiscan | technical | 157 | NOT-TESTED | Live system test |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | 12 claims NOT-TESTED; 4 have FACT CHECK flags. LPT formula (0.90 × round_issuance) requires LIP-89 source for the 10% treasury allocation figure |
| 6.2 | Code/commands tested | NOT-TESTED | `livepeer_cli` `Invoke "reward"` option and `journalctl` grep pattern not verified against current release |
| 6.3 | No deprecated API usage | PASS (inferred) | `-reward=false`, `livepeer_cli`, `journalctl` patterns consistent with other pages. `Reward()` is the on-chain function name |
| 6.4 | Numbers are real | FAIL | Gas cost range (350,000–450,000 gas, 0.01–0.1 gwei) acknowledged unverified in FACT CHECK (line 72). Break-even LPT ("a few thousand") is explicitly hedged. LPT price ($4) is illustrative and unverified |
| 6.5 | REVIEW flags for unverified claims | FAIL | 4 FACT CHECK flags present. Additional claims lacking flags: round duration (22 hours, line 38), LPT formula (lines 61–63), LIP-89 allocation (line 63), Explorer history visibility (line 155) |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent AND `status: current` — P39 violation. `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. 4 open FACT CHECK flags present. Required: change `status: current` to `status: draft`, add `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness check | INFO | LPT/ETH price ratio changes continuously; break-even calculation explicitly noted as illustrative. Gas cost figures have high staleness risk on Arbitrum |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.5, 6.6 fail

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` confirmed at docs.json line 2924 |
| 7.2 | Navigation matches file system | PASS | File at declared path |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from docs.json nav |
| 7.5 | Audience journey complete | PASS | Last in the config-and-optimisation group; logical conclusion of the operator configuration journey |
| 7.6 | Cross-tab graduation paths exist | N/A | No cross-tab links in Related pages. Reward mechanics is within the same tab. Delegators tab is where reward cut settings affect delegators — no link provided. INFO only |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | No incorrect prefix |
| 7.9 | _workspace/ TTL compliance | N/A | Not in _workspace/ |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` — confirmed docs.json line 2911. `/v2/orchestrators/guides/staking-and-rewards/earning-model` — confirmed docs.json line 2910. `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` — confirmed docs.json line 2932. `/v2/orchestrators/guides/payments-and-pricing/payment-receipts` — confirmed docs.json line 2912. All 4 Related pages cards verified |
| 8.2 | All external links live | NOT-TESTED | `https://explorer.livepeer.org/orchestrators` and `https://arbiscan.io/` not tested in static review |
| 8.3 | All snippet imports resolve | PASS | Standard import paths consistent with other pages |
| 8.4 | All images load | PASS | OG image standard path |
| 8.5 | Page renders without error | PASS (inferred) | No unclosed tags; all imports present |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX `{/* */}` — not rendered output |

**Category 8 verdict: PASS**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off recorded. Despite `status: current`, the page has 4 open FACT CHECK flags and missing required frontmatter fields. This indicates `status: current` was set prematurely |
| 9.2 | All consuming decisions in registry | INFO | LIP-89 treasury allocation (10%) is a protocol-level decision. Not a documentation decision per se, but the claim requires citation |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab IA not approved, terminology not locked |
| 9.4 | Phase ordering respected | N/A | Cannot confirm |
| 9.5 | Findings gathered before fixes | N/A | First formal check |
| 9.6 | Feedback routed | N/A | First formal check |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail

---

## Cross-Category Connections

- **C1:** `status: current` + absent `veracityStatus` + 4 FACT CHECK flags (checks 1.8, 6.6) — single P39 violation. Required fix: change `status: current` to `status: draft`, add `veracityStatus: unverified`. These two changes are one logical operation.
- **C2:** Missing `purpose`, `complexity`, `lifecycleStage` (checks 1.1, 1.4, 1.6, 1.7) → affects check 4.7 (evaluated against proposed `purpose: optimise`)
- **C3:** `pageType: how_to` deprecated (checks 1.2, 5.7) → single root cause, one fix
- **C4:** "Use this page to…" self-reference (check 2.4) — standalone fix: delete line 40
- **C5:** 3 headings below threshold (check 3.1) + editorial quality (check 3.7) — same three headings: "Automatic calling (default)", "Timing considerations", "When to skip calling intentionally"
- **C6:** Gas cost figures (checks 6.1, 6.4) + FACT CHECK flags (check 6.5) + missing `veracityStatus` (check 6.6) → single veracity debt requiring SME review

---

## Blocking Decisions

**BD-1 (MEDIUM):** `status: current` is set despite 4 open FACT CHECK flags and missing `veracityStatus`. Requires a decision: either (a) downgrade to `status: draft` immediately, or (b) complete the veracity pass first and then set `status: current` + `veracityStatus: verified`. This decision should be made before publishing.

---

## Verdict Summary

**Overall: NEEDS WORK**

**17 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.1, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1, 9.3**

Category verdicts: Cat 1 FAIL | Cat 2 FAIL | Cat 3 FAIL | Cat 4 PASS | Cat 5 FAIL | Cat 6 FAIL | Cat 7 PASS | Cat 8 PASS | Cat 9 FAIL

---

## Prioritised Fix List

**F-01 — CRITICAL — Fix `status: current` + missing `veracityStatus` (P39 violation)**
`status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Page has 4 open FACT CHECK flags. Required fix: change `status: current` to `status: draft` AND add `veracityStatus: unverified`.
*(Fixes: 1.8, 6.6)*

**F-02 — CRITICAL — Add missing frontmatter fields**
Five fields absent (beyond veracityStatus already covered in F-01):
- Proposed: `purpose: optimise` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: optimise` — confirm before applying
- Proposed: `industry: [technical, economics]` — confirm before applying
- Proposed: `niche: [protocol, tokenomics]` — confirm before applying
*(Fixes: 1.1, 1.4, 1.6, 1.7, 1.9, 1.10)*

**F-03 — HIGH — Migrate `pageType: how_to` to `pageType: instruction`**
Replace `pageType: how_to` with `pageType: instruction`. No `pageVariant` co-fix required.
*(Fixes: 1.2, 5.7)*

**F-04 — HIGH — Delete `This page [verb]` self-reference on line 40**
Line 40: "Use this page to calculate profitability, configure the `-reward` flag, choose between automatic and manual calling, and decide when skipping rounds is justified." — delete this line. The paragraph that follows covers the same scope without self-reference.
*(Fixes: 2.4)*

**F-05 — HIGH — Rename failing headings**
- "Automatic calling (default)" (18/25) → Proposed: `Automatic Calling` — confirm before applying
- "Timing considerations" (17/25) → Proposed: `Timing and Gas Strategy` — confirm before applying
- "When to skip calling intentionally" (17/25) → Proposed: `Skip Conditions` — confirm before applying
*(Fixes: 3.1, 3.7)*

**F-06 — HIGH — Add REVIEW flags to unverified claims lacking them**
Claims without FACT CHECK flags: round duration (22 hours, line 38), LPT formula (lines 61–63), LIP-89 10% allocation (line 63), Explorer history visibility (line 155). Add `{/* REVIEW: [claim] — verify against [source] before publishing */}` inline (P19).
*(Fixes: 6.5)*

**F-07 — MEDIUM — Resolve FACT CHECK at line 72 (gas cost and break-even figures)**
Verify: typical gas used (350,000–450,000), Arbitrum gas price range (0.01–0.1 gwei), break-even stake level. Mehrdad / Livepeer protocol data.
*(Contributes to: 6.1, 6.4)*

**F-08 — MEDIUM — Resolve FACT CHECK at line 125 (livepeer_cli option name)**
Confirm the exact `livepeer_cli` option name/number for manual reward calling in the current release. Rick / current livepeer_cli menu.
*(Contributes to: 6.1, 6.2)*

**F-09 — MEDIUM — Resolve FACT CHECK at line 151 (Prometheus metric name)**
Confirm `livepeer_round_last_claim` is the correct Prometheus metric name in current go-livepeer. Rick / go-livepeer metrics export.
*(Contributes to: 6.1, 6.2)*

**F-10 — INFO — `## Related pages` heading capitalisation**
All four pages in this group use `## Related pages` (lowercase p). The exact exempt form per P16/P53 is `Related Pages` (capital P). Either capitalise to match the approved structural element form, or confirm lowercase is intentional.
