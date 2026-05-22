# Section summary: guides/local-development + guides/ top (A12)

**Pages in scope**: 7 (all CONTENT — no EMPTY-STUBS)
**Pages reviewed**: 7
**Review date**: 2026-05-11
**Reviewer**: agent A12

## Per-page verdicts

| Page | Verdict | Severity (C/H/M/I) | Top critical finding |
|---|---|---|---|
| `guides/local-development/overview.mdx` | MAJOR | 0/7/5/4 | `pageType: overview` non-canonical (1.2); frontmatter incomplete; Related Pages `<CardGroup>` not `<Columns>` + bare `title=`; code blocks missing icon+title; `<RELEASE_VERSION>` placeholder unresolved (2.D3) |
| `guides/local-development/local-gateway.mdx` | MAJOR | 0/8/5/3 | `pageType: how_to` non-canonical; no `## Verification` section; no error-state coverage (2.D4); all 4 code blocks bare; Related Pages format wrong |
| `guides/local-development/local-orchestrator.mdx` | MAJOR | 0/8/6/3 | `pageType: how_to` non-canonical; Standalone vs Full modes are sequential H2s should be Tabs (5.14); AI-Only is a Full-Mode sub-state misfiled as separate H2; no Prerequisites; 5 code blocks bare |
| `guides/local-development/local-testnet.mdx` | MAJOR | 0/7/7/3 | Raw `<Steps>` not `<StyledSteps>` (5.21 — 13 Step instances); 3 raw markdown tables; 13 code blocks have `icon` but no `title=`; `<Info>` carries primary content; EN-DASH on line 34 |
| `guides/overview.mdx` | MAJOR | 0/5/7/5 | 26 navigation cards bare `title=` not `<CustomCardTitle>` (5.22); `<Info>` carries primary content (2.D7); zero cross-tab links; `pageType: guide` mismatched with content (should be `navigation`) |
| `guides/production-hardening-checklist.mdx` | MAJOR | 0/7/5/4 | Duplicate `<CustomDivider />` lines 35+37 (5.26 — render bug); "$0.019 per megapixel" pricing claim sourceless (6.4); 2 raw markdown tables; no Related Pages footer |
| `guides/help.mdx` | MAJOR | 0/5/6/5 | Line 123 broken-in-spirit link `[bug bounties](/v2/developers/resources/reference/apis)` — APIs page has no bug bounty content; 3 Accordions missing `icon` (5.19); 2 raw markdown tables; no Related Pages footer |

## Verdict distribution

- PASS: 0
- MINOR: 0
- MODERATE: 0
- MAJOR: 7
- NEEDS WORK: 0
- EMPTY-STUB: 0

## Severity totals across pages reviewed

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 47 |
| MEDIUM | 41 |
| INFO | 27 |

## Top issues by frequency in this section

### 1. Related Pages format wrong (6/7 pages) — checks 5.17 + 5.22

`local-development/overview.mdx` (line 122), `local-gateway.mdx` (line 115), `local-orchestrator.mdx` (line 146), `local-testnet.mdx` (line 272), and `guides/overview.mdx` (5 CardGroups, 26 cards) all use `<CardGroup cols={2}>` instead of `<Columns cols={2}>`. Cards use bare `title="..."` attributes instead of `<CustomCardTitle icon="..." title="..." horizontal />`. `production-hardening-checklist.mdx` and `help.mdx` have NO Related Pages footer at all (only inline closing prose pointer). `guides/overview.mdx` has the worst exposure — 26 cards in 5 CardGroups, all bare-title.

### 2. Frontmatter incomplete (5/7 pages) — checks 1.1, 1.4, 1.6, 1.7, 1.8, 5.7

Missing combination of `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`:
- `local-development/overview.mdx`: missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Has legacy `status: current`.
- `local-gateway.mdx`: same — missing all 4 + legacy `status: current`.
- `local-orchestrator.mdx`: same — missing all 4 + legacy `status: current`.
- `local-testnet.mdx`: most complete; only missing `veracityStatus`. `lifecycleStage: operate` should be `build`.
- `guides/overview.mdx`: missing `veracityStatus`. Legacy `status: current`. `lifecycleStage: operate` should be `discover`.
- `production-hardening-checklist.mdx`: missing `veracityStatus`. Legacy `status: current`.
- `help.mdx`: missing `veracityStatus`. Legacy `status: current`.

0/7 pages declare `veracityStatus`. 6/7 pages carry legacy `status: current` field. 3/7 pages have non-canonical `pageType` values (`overview`, `how_to`).

### 3. Non-canonical pageType values (3/7 pages) — checks 1.2 + 5.7

- `local-development/overview.mdx` line 21: `pageType: overview` — not in canonical set. Use `concept` + `pageVariant: overview` OR `navigation`.
- `local-gateway.mdx` line 21: `pageType: how_to` — non-canonical. Use `instruction`.
- `local-orchestrator.mdx` line 21: `pageType: how_to` — non-canonical. Use `instruction` (or `guide` given the two-mode body).

Canonical set: `concept | tutorial | guide | instruction | navigation | reference | resource`.

### 4. Code blocks missing `icon` + `title` (5/7 pages with code) — check 5.20

Blocks bare or partially compliant:
- `local-development/overview.mdx`: 3 bare blocks (80, 94, 108). None have `icon` or `title`.
- `local-gateway.mdx`: 4 bare blocks (55, 69, 87, 98).
- `local-orchestrator.mdx`: 5 bare blocks (45, 64, 84, 102, 130).
- `local-testnet.mdx`: 13 blocks — all have `icon="terminal"` ✓ but all missing `title=`. Partial PASS.
- `guides/overview.mdx`: no code blocks.
- `production-hardening-checklist.mdx`: no code blocks.
- `help.mdx`: no code blocks.

Total bare or partial blocks: 25. Only `local-testnet.mdx` shows any awareness of the icon+title rubric.

### 5. Zero cross-tab links (6/7 pages) — checks 4.10 + 7.6

Every page's Related Pages cards or pointers stay inside `developers/`. Pages where ≥3 cross-tab graduations are expected and absent:
- `local-development/overview.mdx`: 3 Related Pages cards, 0 cross-tab.
- `local-gateway.mdx`: 3 cards, 0 cross-tab.
- `local-orchestrator.mdx`: 4 cards, 0 cross-tab.
- `local-testnet.mdx`: 4 cards (2 to About-tab + 2 to GitHub repos) — partial; missing Orchestrators tab.
- `guides/overview.mdx`: 26 cards, 0 cross-tab.
- `production-hardening-checklist.mdx`: 0 Related Pages, single closing pointer; 0 cross-tab.
- `help.mdx`: 0 Related Pages, single closing pointer; 0 cross-tab.

The most natural graduations missing across the section: `/v2/orchestrators/setup/...` (operator side of the orchestrator-gateway pair), `/v2/gateways/setup/connect` (canonical multi-OS gateway setup that the local-dev pages are the development edition of), `/v2/about/...` (protocol orientation for OSS contributors), `/v2/solutions/portal` (for readers evaluating managed vs self-host).

### 6. Raw markdown tables not `<StyledTable>` (4/7 pages) — checks 5.23 + 5.24

- `local-testnet.mdx`: 3 raw tables (96-100 Hardhat config; 122-136 Deployed components 13 rows; 187-192 Flag purposes). Worst case.
- `production-hardening-checklist.mdx`: 2 raw tables (41-45 Gateway selection; 77-83 Warm models per pipeline). Both load-bearing reference data.
- `help.mdx`: 2 raw tables (37-48 Channel reference 10 rows; 108-115 GitHub issues 6 rows).
- `local-development/overview.mdx`: 1 `<StyledTable>` PASS.
- `local-gateway.mdx`, `local-orchestrator.mdx`, `guides/overview.mdx`: no tables.

Total raw tables to convert: 7.

### 7. `<CustomDivider />` placement violations (6/7 pages) — check 5.26

- `local-development/overview.mdx`: opening Markdown HR `---` (line 35) instead of `<CustomDivider />`; no divider before Related Pages (line 120).
- `local-gateway.mdx`: opening Markdown HR `---` (line 35); no divider before Related Pages (line 113).
- `local-orchestrator.mdx`: opening Markdown HR `---` (line 35); no divider before Related Pages (line 144).
- `local-testnet.mdx`: no opening divider before intro (line 31).
- `guides/overview.mdx`: no opening divider before intro (line 31).
- `production-hardening-checklist.mdx`: **DUPLICATE `<CustomDivider />` on lines 35 + 37** — render bug.
- `help.mdx`: no opening divider before intro (line 31).

Only `local-testnet.mdx` has divider before Related Pages (line 266). `production-hardening-checklist.mdx` duplicate is the only outright render-error.

### 8. `<Note>` / `<Info>` carries primary content (3/7 pages) — check 2.D7

- `local-testnet.mdx` line 138 `<Info>`: carries decision-relevant `LivepeerTokenFaucet` gating info.
- `guides/overview.mdx` lines 33-35 `<Info>`: carries load-bearing editorial claim about source authority and maintained vs community content.
- `help.mdx` lines 84-86 `<Note>`: carries Discord-vs-Forum channel-choice guidance.

### 9. Verification sections missing (instruction pages) — check 5.2

`local-gateway.mdx`: no `## Verification` H2; Step 5 ("Test with a stream") implicitly verifies but lacks log-line / curl proof.
`local-orchestrator.mdx`: no `## Verification`; Step 4 ("Test BYOC container") is narrative direction not testable command.
`local-testnet.mdx`: no `## Verification`; Step 8 asserts orchestrator "enters the active set" without a query command.

instruction matrix (`_packet/component-matrix.md` lines 73-79) declares Verification as Required for instruction pageType.

### 10. Error-state coverage missing (3/7 pages) — check 2.D4 + 4.19

`local-gateway.mdx`, `local-orchestrator.mdx`, `local-testnet.mdx`: zero error-state handling despite procedural content. Common first-time-user failures (keystore decryption, RPC refused, deposit revert, contract compile error, port collision, malformed aiModels.json) are not addressed. No `<AccordionGroup>` "Common errors" section on any of the three procedural pages.

### 11. Versions unpinned (4/7 pages) — checks 2.D3 + 6.8

- `local-development/overview.mdx`: `<RELEASE_VERSION>` placeholder lines 96, 101, 109 unresolved.
- `local-gateway.mdx`: no go-livepeer tag pinned.
- `local-orchestrator.mdx`: `v0.7.x` cited (line 128) — strongest version pin in the section, but standalone/full mode commands not tagged.
- `local-testnet.mdx`: `delta` branch (lines 57, 263) — branch not tag. No go-livepeer tag pinned. Hardhat version not pinned.

### 12. Closing prose pointer + Related Pages dual handoff (4/7 pages) — check 5.16

`local-development/overview.mdx` (line 118 + 122), `local-gateway.mdx` (line 111 + 115), `local-orchestrator.mdx` (line 142 + 146), `local-testnet.mdx` (line 268 + 272) — all 4 violate "one or the other, never both". Rule reads strictly; in practice, the closing prose tends to repeat one of the Related Pages targets.

### 13. Raw `<Steps>` not `<StyledSteps>` (1/7 pages) — check 5.21

`local-testnet.mdx` lines 52 + 148: 2 raw `<Steps>` blocks, 13 raw `<Step>` instances. Other procedural pages (`local-gateway.mdx`, `local-orchestrator.mdx`) correctly use `<StyledSteps>`. local-testnet is the outlier.

### 14. Deprecated `Broadcaster` term — INFO (5/7 pages, legitimate technical reference)

Every local-dev page (`overview`, `local-gateway`, `local-orchestrator`, `local-testnet`) and `production-hardening-checklist.mdx` + `help.mdx` reference `broadcaster` as the go-livepeer CLI mode/flag (`-broadcaster`). This is structurally necessary — the binary's runtime mode is named `broadcaster` in the go-livepeer source. The canonical protocol noun is `Gateway`. Pages should disambiguate at first use ("the go-livepeer `-broadcaster` CLI mode runs the binary as a Gateway"). Currently INFO; if upstream renames the flag, propagate.

## Cross-page duplication and link gaps in this section

- **OVERLAP: `livepeer` start commands**: `local-gateway.mdx` lines 69-78, `local-orchestrator.mdx` lines 46-52 / 65-76 / 102-112, `local-testnet.mdx` lines 172-182 / 199-209. Same flag scaffolding across 4 pages. Could be a shared snippet `snippets/composables/livepeer-command-snippets.mdx`.
- **OVERLAP: `aiModels.json` example**: `local-orchestrator.mdx` lines 84-93 duplicates the same example shown on `byoc/overview.mdx` and `byoc-architecture.mdx` (per build-compute summary). Should pull from `snippets/data/byoc/aiModels-example.json`.
- **OVERLAP: Install instructions**: `local-development/overview.mdx` lines 90-114 likely duplicate go-livepeer install in Orchestrators tab. Should link.
- **OVERLAP: Production checklist BYOC section**: `production-hardening-checklist.mdx` lines 99-105 overlap `byoc-production.mdx`. Should link.
- **OVERLAP: TicketBroker deposit funding**: `local-gateway.mdx` lines 84-92 overlaps `guides/payments/eth-escrow-and-deposits.mdx`. Link rather than duplicate.
- **OVERLAP: Help channel inventory**: `help.mdx` channel reference table (37-48) repeats body sections (52-118). Acceptable as overview + drill-down.

### Link gaps unique to this section

- **`help.mdx` line 123 broken-in-spirit link**: `[bug bounties](/v2/developers/resources/reference/apis)` — APIs page has no bug bounty content. Source page `bug-bounties.mdx` exists only in `_workspace/new files/files7/`. HIGH.
- **`local-development/overview.mdx`** + 3 sibling pages: `<RELEASE_VERSION>` placeholder unresolved; no go-livepeer tag pinned.
- **`local-testnet.mdx` line 263 `<Warning>`**: references "the current delta branch" without anchor; should link `https://github.com/livepeer/protocol/tree/delta`.
- **`production-hardening-checklist.mdx` line 111**: "$0.019 per megapixel" pricing claim has no source link. Reader's launch budget decision rides on this number.
- **Foundry `cast`** (`local-testnet.mdx`): used 3× as prerequisite tool but never named in Prerequisites and never linked to Foundry book.
- **Hardhat**: used throughout `local-testnet.mdx` but never linked to Hardhat docs.
- **`migrations.config.ts`**: cited 6× in `local-testnet.mdx` without link.
- **`livepeer/go-livepeer` repo**: never linked inline from any of the 4 local-dev pages despite all 4 being about running this binary.
- **`livepeer_cli`**: named in `local-gateway.mdx` (lines 85, 88, 89, 114) without link to its reference.
- **Discord channel deep-links**: `help.mdx` lists channels but doesn't deep-link (uses `https://discord.gg/livepeer` invite URL for every row).
- **Discord `#builders`** named in `production-hardening-checklist.mdx` line 144 — no link.

## Special-focus brief checks (results)

- **REWRITE-STUB Studio refs verified cleaned**:
  - `production-hardening-checklist.mdx` (brief flagged 4 Studio refs): **0 found**. PASS.
  - `help.mdx` (brief flagged 2 Studio refs): **0 found**. PASS.
  - `guides/overview.mdx` (brief flagged "developer-guides.mdx clean source"): **0 Studio refs found**. PASS.

- **2.D2 every command/CLI flag has example** (local-dev): mixed. All flags shown in code examples on `local-gateway.mdx`, `local-orchestrator.mdx`, `local-testnet.mdx`. `<RELEASE_VERSION>` placeholder on overview leaves install command non-runnable.

- **4.5 Prerequisites (Docker, Go version, npm)**:
  - `local-development/overview.mdx`: no Prerequisites section.
  - `local-gateway.mdx`: PASS — has `## Prerequisites` with 3 items.
  - `local-orchestrator.mdx`: FAIL — no Prerequisites.
  - `local-testnet.mdx`: PASS — Node.js v18+, yarn, Go 1.21+, git, Ethereum wallet (5 items, comprehensive). Missing `cast` (Foundry).

- **4.17 every code block has language tag**: 100% PASS across all pages with code. All `bash` / `json`. INFO: none have TESTED labels.

- **5.20 icon+title metadata**: see Issue #4 above. 25 bare or partial blocks across 4 pages.

- **5.21 StyledSteps for procedural**: 2/3 procedural pages PASS (`local-gateway.mdx`, `local-orchestrator.mdx`). 1/3 FAIL (`local-testnet.mdx` — raw `<Steps>` × 2).

- **Upstream repo links** (livepeer/go-livepeer, livepeer/protocol):
  - `livepeer/protocol` linked in `local-testnet.mdx` (lines 55, 279, 263). PASS.
  - `livepeer/go-livepeer` linked in `local-testnet.mdx` Related Pages (line 282) and clone command (line 151). PASS for local-testnet.
  - Other 3 local-dev pages: 0 `livepeer/go-livepeer` inline links despite being entirely about running this binary. FAIL.
  - `protocol/tree/delta` (lines 57, 263 on local-testnet) — branch reference not anchored.

- **EM-DASH (2.12)**: zero `—` characters across all 7 pages. PASS strict.
- **EN-DASH (`–`, 2.12 spirit)**: 2 found.
  - `local-testnet.mdx` line 34 `<Tip>`: "applies – swap".
  - `guides/overview.mdx` line 6 (description): "Livepeer – from first API call".

- **Studio framing (project rule 3)**: all 7 pages clean. 0 Studio refs found.

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)

The OSS contributor persona — subsumed under developer audience per brief — has a clear 4-stage journey:

1. **Orient**: "Should I run local infra?" — delivered by `guides/local-development/overview.mdx`.
2. **First-stack**: "Get a local binary running" — delivered by `local-gateway.mdx` or `local-orchestrator.mdx`.
3. **End-to-end**: "Run a full local protocol" — delivered by `local-testnet.mdx`.
4. **Productionise**: "Get launch-ready" — delivered by `production-hardening-checklist.mdx`.

The journey works at the page-title level. But every page below the orient fails to deliver verification proofs. After running each procedure, the reader is told the system is "ready" or has "entered the active set" without a command to confirm. The section ships steps without success markers. The most complete page (`local-testnet.mdx`) ends with "your orchestrator enters the active set and can call `reward()`" — no `cast call` to prove it.

**Section-level fix:**
- Add `## Verification` H2 to all 3 procedural pages (`local-gateway`, `local-orchestrator`, `local-testnet`). Each Verification section ships 2-3 explicit commands: a status query, a log-line grep pattern, and an end-to-end probe (curl / cast call / RTMP push + manifest check).
- Replace narrative direction in step bodies ("Verify the container processes frames" → "Run `curl -X POST http://127.0.0.1:8000/health` expecting `{\"status\":\"ok\"}`").
- Convert `production-hardening-checklist.mdx` 30+ checkbox items into `<StyledTable>` rows with columns Item / Why / Verify command / Doc link.

### Layer 2 — Composition (section level)

Five systemic composition violations across the section:

1. **Related Pages format**: `<CardGroup>` not `<Columns>`; bare `title=` not `<CustomCardTitle>`. Affects 5/7 pages (the 4 local-dev pages + guides/overview). One-pass propagation fix.
2. **Code block icon+title**: 25 blocks bare across 4 pages. One-pass propagation with sensible default `icon="terminal"` + per-block `title=` (filename hint).
3. **Raw markdown tables**: 7 tables to convert to `<StyledTable>` across 3 pages.
4. **CustomDivider placement**: 5 pages need opening divider (5 places); 4 pages need divider before Related Pages (4 places); `production-hardening-checklist.mdx` needs duplicate removed.
5. **`<Tabs>` opportunities missed**: `local-orchestrator.mdx` Standalone/Full modes should be Tabs. `local-development/overview.mdx` install instructions should be Linux/macOS/Windows Tabs. `local-testnet.mdx` Hardhat-vs-Sepolia could be Tabs.

**Section-level fix:**
- A single propagation pass across all 7 pages:
  - Replace 5 Related Pages CardGroups with `<Columns cols={2}>` + `<CustomCardTitle horizontal>` per card. Add cross-tab graduation card to each.
  - Add `icon` + `title` to 25 code blocks (or 13 missing-title only on `local-testnet`).
  - Convert 7 raw markdown tables to `<StyledTable>`.
  - Fix CustomDivider placement on 6 pages.
  - Convert `local-orchestrator.mdx` Standalone/Full to Tabs.
  - Convert `local-testnet.mdx` raw `<Steps>` × 2 to `<StyledSteps>`.
- 26 navigation cards on `guides/overview.mdx` get `<CustomCardTitle>` treatment as a separate pass (larger surface area).

### Layer 3 — Cross-page integration (section level)

Zero cross-tab graduation across 6/7 pages. The local-development subgroup is the OSS contributor's entry point — graduation paths to Orchestrators (where the operator side of the broadcaster-orchestrator pair lives) and Gateways (where the canonical multi-OS gateway setup lives) are the most relevant cross-tab handoffs. Currently absent.

Within `developers/`, several missing chains:
- `local-gateway.mdx` doesn't link `local-orchestrator.mdx` as sibling pair.
- `local-orchestrator.mdx` duplicates broadcaster commands instead of linking `local-gateway.mdx`.
- `guides/overview.mdx` has no card to `local-development/overview.mdx` despite being a sibling group.
- `production-hardening-checklist.mdx` has overlapping content with `byoc-production.mdx` and `ai-authentication.mdx` without linking.

Three external link / repo gaps recur:
- `livepeer/go-livepeer` repo: never linked inline from `local-development/overview`, `local-gateway`, `local-orchestrator` (3 pages entirely about this binary).
- `livepeer_cli`: never linked to its reference doc.
- `tools.livepeer.cloud`: never referenced where it would resolve a help question.

**Section-level fix:**
- Every Related Pages footer (once it exists / is reformatted) should carry at least 1 of 4 cards as a cross-tab link. Canonical 4-card pattern for local-development:
  - 1 sibling page within local-development
  - 1 graduation to `/v2/orchestrators/setup/...`
  - 1 graduation to `/v2/gateways/setup/...`
  - 1 graduation to `/v2/about/protocol/...` (for OSS contributors interested in the protocol)
- For `production-hardening-checklist.mdx`: graduate to `/v2/gateways/setup/monitor`, `/v2/orchestrators/setup/...`, `/v2/about/economics/...` (pricing source).
- For `help.mdx`: graduate to `/v2/community/...` (community tab if exists) or Foundation contact.
- Add inline `<LinkArrow href="https://github.com/livepeer/go-livepeer">go-livepeer source</LinkArrow>` on first mention on each local-dev page.
- Anchor `delta` branch (`local-testnet.mdx` lines 57, 263) to `https://github.com/livepeer/protocol/tree/delta`.
- Fix `help.mdx` line 123 broken-in-spirit link.

### Layer 4 — Veracity (section level)

Three veracity gaps repeat across the section:

1. **Versions unpinned across the local-dev subgroup.** `<RELEASE_VERSION>` placeholder on overview; no go-livepeer tag pinned on local-gateway or local-orchestrator; `delta` branch (not tag) on local-testnet; Hardhat / Foundry versions unpinned. Only `local-orchestrator.mdx` line 128 cites `v0.7.x` — the strongest pin in the section.
2. **`production-hardening-checklist.mdx` pricing claim sourceless.** Line 111: "$0.019 per megapixel" — drives reader's launch budget. No source link, no date. SLO thresholds (5% / 1%, lines 129-130) same — sourceless.
3. **`veracityStatus` field absent on all 7 pages.** 0/7 declare. 6/7 carry legacy `status: current` instead.

**Section-level fix:**
- Add `veracityStatus: unverified` to all 7 pages.
- Pin every install / build command with a tag + `{/* REVIEW: confirm latest tag */}` placeholder. Standardise on `go-livepeer v0.7.x` or the current stable across the 4 local-dev pages.
- Replace `<RELEASE_VERSION>` placeholder (local-development/overview.mdx lines 96, 101, 109) with `{LIVEPEER_LATEST_TAG}` pulled from `snippets/data/developers/go-livepeer-version.json` — or hard-code current tag with REVIEW placeholder.
- Source or remove the "$0.019 per megapixel" pricing claim in `production-hardening-checklist.mdx`. If retained, link to a pricing reference + add `lastVerified` annotation.
- Add `TESTED: YYYY-MM-DD with go-livepeer vX.Y.Z` JSX comment above every code block once tested.

### Layer 5 — Product-forward depth (section level)

The section reads as procedure documentation — not as a product. Missing signals across all 7 pages:

- **Maturity/version badge**: no `<Badge>` showing tested go-livepeer version on any local-dev page.
- **Effort estimates**: no "30 minutes from clone to active orchestrator" on any procedural page.
- **What it costs**: `local-gateway.mdx` mentions "0.01-0.1 ETH covers typical testing" but no source.
- **What's the typical failure**: no error-state coverage (see Issue #10).
- **What success looks like in the logs**: no log-line patterns to grep for (see Layer 1).
- **Who else does this**: no examples of contributors / projects running local stacks.
- **What's NEW**: no signal of recent changes (PR #3641 per-second compute referenced nowhere; v0.7.x AI-in-binary cited only on `local-orchestrator.mdx`).

`guides/overview.mdx` is the most product-shaped page in the section but reads as a Notion table of contents — no "first move", no priority, no recently-updated surface.

`help.mdx` is a Notion-style links page — table + body + closing pointer. Missing: triage guidance, "what to include in your question" templates, recent-activity signals.

**Section-level fix:**
- Add `<Badge>` near title on every local-dev page: "go-livepeer {LATEST_TAG} — tested {DATE}" driven by a snippet.
- Add a 1-line "Expected effort" callout on each procedural page intro.
- Add §"Common errors" `<AccordionGroup>` to all 3 procedural pages (`local-gateway`, `local-orchestrator`, `local-testnet`) with 3-4 `<Accordion icon>` items each covering the typical first-time failures.
- Add hero "First time? Start here" block on `guides/overview.mdx` with single primary CTA.
- Replace `help.mdx` `<Note>` Discord-vs-Forum with a comparison `<StyledTable>` with columns Channel / Latency / Searchability / Best for.
- Add "Get faster help" template on `help.mdx` showing what to include in a question.

## Prioritised section remediation

| # | Step | Pages affected | Effort |
|---|---|---|---|
| 1 | **Canonicalise pageType across the section**: `local-development/overview.mdx` → `concept` + `pageVariant: overview`; `local-gateway.mdx` → `instruction`; `local-orchestrator.mdx` → `instruction`; `guides/overview.mdx` → `navigation`. Other 3 already canonical. | 4 | S |
| 2 | **Add missing frontmatter fields across the section**: add `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` where missing. Remove legacy `status: current` from 6 pages. | 7 | M |
| 3 | **Convert all Related Pages CardGroups to `<Columns cols={2}>` + `<CustomCardTitle horizontal />`**: 5 pages have CardGroup format; 26 cards on guides/overview.mdx; 2 pages have no Related Pages at all (production-hardening, help). Add ≥1 cross-tab graduation card per page. | 7 | L |
| 4 | **Add `icon` + `title` to all 25 bare code blocks across 4 pages**. `local-testnet.mdx` already has `icon`; just add `title=`. Suggested filenames per page in respective per-page reviews. | 4 | M |
| 5 | **Convert all 7 raw markdown tables to `<StyledTable>`**: 3 on local-testnet, 2 on production-hardening, 2 on help. | 3 | M |
| 6 | **Fix CustomDivider placement on 6 pages**: opening divider where missing; before Related Pages where missing; delete duplicate on `production-hardening-checklist.mdx` lines 35+37. | 6 | S |
| 7 | **Add `## Verification` H2 to 3 procedural pages**: `local-gateway.mdx` (after StyledSteps), `local-orchestrator.mdx` (after StyledSteps Step 4), `local-testnet.mdx` (after Step 8). Each ships 2-3 explicit verification commands. | 3 | M |
| 8 | **Add `## Common Errors` `<AccordionGroup>` to 3 procedural pages**: 3-4 `<Accordion icon>` items per page covering typical first-time failures (keystore decryption, RPC refused, deposit revert, contract compile error, port collision, malformed aiModels.json). | 3 | L |
| 9 | **Pin versions**: replace `<RELEASE_VERSION>` placeholder; pin go-livepeer tag; pin Hardhat; add `cast` (Foundry) to local-testnet Prerequisites. Long-term: create `snippets/data/developers/go-livepeer-version.json`. | 4 | M |
| 10 | **Add inline upstream-repo links on first mention** across local-dev pages: `livepeer/go-livepeer`, `livepeer/protocol/tree/delta`, `livepeer_cli`, `tools.livepeer.cloud`. | 4 | M |
| 11 | **Convert `local-orchestrator.mdx` Standalone/Full modes to `<Tabs>`**; fold AI-Only into Full Mode as `<Accordion icon>`. Convert `local-development/overview.mdx` install instructions to Linux/macOS/Windows `<Tabs>` (add Windows path). Consider Hardhat/Sepolia Tabs on `local-testnet.mdx`. | 3 | L |
| 12 | **Convert `local-testnet.mdx` raw `<Steps>` × 2 to `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`**. 13 Step instances. | 1 | L |
| 13 | **Fix `help.mdx` line 123 broken-in-spirit link** `[bug bounties](/v2/developers/resources/reference/apis)`. Either drop link, point to a published bug-bounties page, or migrate `_workspace/new files/files7/bug-bounties.mdx` to `v2/developers/resources/`. | 1 | S-M |
| 14 | **Add `icon` prop to 3 Accordions on `help.mdx`** (lines 60, 68, 76). Retitle from ALL-CAPS to title-case. | 1 | S |
| 15 | **Source or remove `production-hardening-checklist.mdx` "$0.019 per megapixel" pricing claim** (line 111). Add LinkArrow + `lastVerified` annotation, or rephrase to "see Pricing page" link. Also source 5% / 1% SLO thresholds (lines 129-130). | 1 | M |
| 16 | **Promote 3 `<Note>` / `<Info>` blocks carrying primary content** to prose or `<Tip>`: `local-testnet.mdx` line 138, `guides/overview.mdx` lines 33-35, `help.mdx` lines 84-86. | 3 | S |
| 17 | **Replace EN-DASHes** on `local-testnet.mdx` line 34 (`<Tip>`) and `guides/overview.mdx` line 6 (description) with comma. | 2 | S |
| 18 | **Remove dual handoffs** (closing prose pointer + Related Pages) on 4 pages: `local-development/overview.mdx`, `local-gateway.mdx`, `local-orchestrator.mdx`, `local-testnet.mdx`. Keep Related Pages; delete closing prose. | 4 | S |
| 19 | **Add `<Badge>` maturity signal** near title on local-dev pages (e.g. `go-livepeer v0.7.x — tested 2026-05-XX`) and `production-hardening-checklist.mdx` ("Last reviewed YYYY-MM-DD"). | 5 | M |
| 20 | **Add `## Prerequisites` to `local-orchestrator.mdx`** (missing entirely): go-livepeer installed, Docker, Python 3.10+, GPU+CUDA, BYOC container code/image. | 1 | S |
| 21 | **Replace inline duplicate broadcaster command on `local-orchestrator.mdx` (lines 102-112) with `<LinkArrow>`** to `local-gateway.mdx#start-the-broadcaster`. | 1 | S |
| 22 | **Add a `local-development/overview.mdx` "Activation moment" `<AccordionGroup>`** below the decision matrix — 5 accordions (one per scenario) each containing a 3-line copy-paste command sequence. | 1 | L |
| 23 | **Hero block on `guides/overview.mdx`**: "New to Livepeer? Start with AI Quickstart" + single CTA above the first CardGroup. Add a 6th CardGroup for cross-tab graduations. | 1 | M |
| 24 | **Convert `help.mdx` Discord-vs-Forum `<Note>` (lines 84-86) to a small comparison `<StyledTable>`**. Add a "Get faster help" `<Tip>` with question-template (error / repro / stack / tried). | 1 | M |
| 25 | **Drop generic keywords** ("livepeer", "developer", "guides", "developers") across all 7 pages. | 7 | S |

**Section verdict:** All 7 pages MAJOR. Section-wide remediation work is high-volume but mostly mechanical (frontmatter, format conversions, missing components) — a single coordinated pass across the section would shift most pages to MINOR or MODERATE. Layer 1 (verification) and Layer 5 (product depth) require more thinking than mechanical work.
