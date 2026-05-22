# Review: comfystream-as-byoc.mdx

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `how_to` (NON-CANONICAL — should be `instruction`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 6,704
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 22) |
| 1.4 | purpose | FAIL | Missing |
| 1.5 | audience | PASS | |
| 1.6 | complexity | FAIL | Missing |
| 1.7 | lifecycleStage | FAIL | Missing |
| 1.8 | veracityStatus | FAIL | Missing |
| 1.11 | description well-formed | PASS | "How to register a ComfyStream instance as a BYOC container with a Livepeer orchestrator..." 144 chars, opens "How to" — borderline |
| 1.12 | OG block | PASS | |
| 1.13 | keywords | PASS | `aiModels.json`, `trickle`, `capability registration` — specific |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.3 | banned phrases | MIXED | Line 40: "This page assumes a ComfyStream instance is already running..." — "This page" self-reference, banned per 2.3 |
| 2.4 | banned constructions | FAIL | Line 40 self-reference |
| 2.D1 | Code-first | PASS | First section after Requirements is StyledSteps with code |
| 2.D2 | API methods | PASS | |
| 2.D3 | Versions explicit | MIXED | go-livepeer flags shown but no orchestrator version pin; ComfyStream startup command unpinned (no Docker tag) |
| 2.D4-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | |
| 3.1 | Score ≥20/25 | PASS | "Requirements" (22), "Registering with the Orchestrator" (23), "Dynamic Parameters" (24), "Remote Deployments" (23), "Related Pages" (exempt) |
| 3.2 | Banned/weak | PASS | |
| 3.3-3.10 | | PASS | |
| 3.6 | Title well-formed | PASS | "ComfyStream as BYOC" — 3 words |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | PASS | §"Requirements" section (line 44) |
| 4.6 | Out-of-scope | PASS | |
| 4.7-4.9 | | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4.11 | Discord test | PASS | |
| 4.12 | Page size | PASS | 6.7 KB |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | MIXED | Cloudflare Tunnel vs LAN trade-off named; no production-vs-development boundary |
| 4.16-4.20 | | PASS / N/A | |
| 5.1 | Correct template | FAIL | pageType non-canonical |
| 5.2 | Required sections | MIXED | Prerequisites + StyledSteps + Related present; Verification step inside StyledSteps (line 94 "Verify registration") — acceptable but a dedicated H2 would scan better |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | PASS | StyledSteps used |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `pageType: how_to`; `status: current` (line 24) |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | PASS | |
| 5.15 | Data imports | FAIL | aiModels.json schema hardcoded inline (lines 71-81); should pull from `snippets/data/orchestrator/aimodels-template.json` or similar |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 127 ("Your ComfyStream instance is now a registered BYOC capability...") AND CardGroup at line 129 |
| 5.17 | Related Pages format | MIXED | `<CardGroup cols={2}>` not `<Columns cols={2}>`; Cards with `arrow horizontal` props, not `<CustomCardTitle>` wrapper |
| 5.18 | Tab icon | N/A | |
| 5.19 | Accordion icon | N/A | |
| 5.20 | Code block icon+title | FAIL | All 3 code blocks (lines 60, 71, 88) missing `icon` + `title` |
| 5.21 | StyledSteps | PASS | Correct usage line 56 |
| 5.22 | Nav cards CustomCardTitle | FAIL | |
| 5.23 | StyledTable | N/A | No tables |
| 5.24-5.25 | | PASS | |
| 5.26 | CustomDivider | MIXED | No `<CustomDivider />` import; markdown `---` used |
| 5.27 | Mermaid | N/A | |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | "advertises capability via the AI Service Registry on-chain" (line 92) — no link to the registry contract or its address |
| 6.2 | Code TESTED | NOT-TESTED | |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | FAIL | Missing |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | MIXED | go-livepeer flag `-orchestrator -aiModels` shown but no version pin |
| 6.9-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2531 |
| 7.2-7.5 | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | PASS | |
| 8.1 | Internal | PASS | |
| 8.2 | External | NOT-TESTED | `tools.livepeer.cloud/ai/network-capabilities` referenced not curl-tested |
| 8.3-8.6 | | PASS / N/A | |
| 9-10 | | NOT-TESTED / PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "ComfyStream as BYOC" | PASS | |
| sidebarTitle | Yes | "ComfyStream as BYOC" | PASS | |
| description | Yes | "How to register a ComfyStream..." | PASS | |
| pageType | Yes | how_to | FAIL | Non-canonical → `instruction` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Not imported (markdown `---`) | Required | Should import |
| `<StyledSteps>` / `<StyledStep>` | Yes | Required (instruction) | EXEMPLARY |
| Fenced code with icon+title | No | Required | 3 missing |
| `<Columns cols={2}>` Related Pages | No | Required | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav cards | |
| `<Tip>` (header CTA) | Yes (line 32) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: aiModels.json schema example (lines 71-81) likely overlaps with `byoc/byoc-quickstart.mdx` or `byoc/byoc-architecture.mdx` (orchestrator-config pages). Should share the snippet.
- **OVERLAP**: `--host 0.0.0.0 --port 8188` ComfyStream startup command (line 60) overlaps with `comfystream-quickstart.mdx` and `workflow-authoring.mdx`.
- **LINK GAPS**: "AI Service Registry on-chain" (line 92) — no link to the registry contract. `tools.livepeer.cloud/ai/network-capabilities` (line 95) — no link. go-livepeer repo not linked. `aiModels.json` reference doc not linked.
- **STRANDED**: Reader who completes registration has no link to "what to test next" beyond Related Pages cards — could link to a load-testing or monitoring page.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned phrases | 1 | line 40: "This page assumes a ComfyStream instance is already running and accessible." |
| Self-reference | 1 | line 40 — see above |

## Heading Score Table

| Heading | Total |
|---|---|
| Requirements | 22 |
| Registering with the Orchestrator | 23 |
| Dynamic Parameters | 24 |
| Remote Deployments | 23 |
| Related Pages | exempt |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 60 | bash | ✗ | ✗ | NOT-TESTED | python server/app.py |
| 71 | json | ✗ | ✗ | — | aiModels.json schema |
| 88 | bash | ✗ | ✗ | NOT-TESTED | livepeer -orchestrator |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page completes the registration but doesn't show the reader they have actually earned the capability. "Verify registration" Step 4 (line 94) names the dashboard URL but the rest of the verification is one-line generic ("send a test request"). A reader who registers needs a concrete test command to issue against the gateway.
- **Fix step:** Inside Step 4, add a concrete curl test: a complete `live-video-to-video` POST against the gateway with the `comfystream` model_id, showing expected JSON response and gateway log lines. Also add a §"Verification" H2 after the StyledSteps with: "Your orchestrator is registered when... (a) registry dashboard shows it, (b) gateway picks it for routing, (c) test request returns 200".
- **Source/exemplar:** `pytrickle-quickstart.mdx` Step 7 "Verify the output" — sibling page has a concrete verification command to mirror.

### Layer 2 — Composition
- **Gap:** pageType non-canonical (1.2, 5.7); code blocks missing icon+title (5.20); Related Pages uses CardGroup (5.17); page has no `<CustomDivider />` JSX (uses markdown). No diagram showing how the orchestrator-ComfyStream-gateway connection works once registered — would benefit from a Mermaid sequence diagram tying the on-chain registry to gateway routing.
- **Fix step:** Change `pageType: how_to` → `pageType: instruction`. Add icon+title to code blocks. Convert Related Pages to Columns + CustomCardTitle. Add a Mermaid sequence diagram in §"Registering with the Orchestrator" showing the registration → on-chain advert → gateway discovery loop.
- **Source/exemplar:** `pytrickle-quickstart.mdx` for icon+title pattern; `MermaidColours.jsx` for the diagram.

### Layer 3 — Cross-page integration
- **Gap:** "AI Service Registry on-chain" (line 92) is a strong factual claim with no link — there's a smart contract address somewhere. `tools.livepeer.cloud/ai/network-capabilities` (line 95) referenced 3 times in this section — should be a clickable link. No graduation to "self-host gateway" (`/v2/gateways/setup/connect`) or "earn-fees" docs (`/v2/orchestrators/...`).
- **Fix step:** Add inline link: line 92 → `[AI Service Registry contract](https://arbiscan.io/address/REVIEW:address)`. Line 95 → `[tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities)`. Add ≥3 cross-tab graduation cards: `/v2/orchestrators/setup/connect` (orchestrator perspective), `/v2/gateways/setup/connect`, `/v2/about/network/architecture`.
- **Source/exemplar:** Arbiscan; `tools.livepeer.cloud`.

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus` missing. aiModels.json schema not linked to a schema file. go-livepeer `-aiModels` flag not linked to source. ComfyStream startup command unpinned.
- **Fix step:** Add `veracityStatus: unverified` (until pinning). Add link to `aiModels.json` schema doc in go-livepeer repo. Pin ComfyStream version: `livepeer/comfystream:<tag>` in `python server/app.py` Docker variants.
- **Source/exemplar:** `livepeer/go-livepeer/cmd/livepeer/starter` for flags; `livepeer/ai-runner/aiModels.json`.

### Layer 5 — Product-forward depth
- **Gap:** Page treats BYOC registration as a config task. No mention of: payment configuration (`price_per_unit: 0` in the example — should reader leave it 0 or set a real number?), how orchestrators get paid for BYOC traffic, what happens if the container crashes (does the orchestrator deregister?), operational monitoring. The `warm: true` flag is silent — meaning?
- **Fix step:** Add §"Pricing and payment" with one paragraph: "`price_per_unit: 0` means off-chain testing only. For paid jobs, set wei-per-second pricing — see [per-second compute](path)". Add §"Operational concerns" with: container crash recovery, health checks (link to `/health` endpoint per frame-processor.mdx line 254), how to monitor frame counts. Inline-define `warm: true` ("Orchestrator preloads container at startup; without this, first request triggers cold-start").
- **Source/exemplar:** `frame-processor.mdx` line 254 already documents `/health`; per-second-compute page exists at `/v2/developers/guides/payments/per-second-compute`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. `pageType: how_to` non-canonical (1.2); 4 required frontmatter fields missing (1.1, 1.4, 1.6, 1.7, 1.8).
2. All 3 code blocks missing `icon` + `title` (5.20).
3. Related Pages: both in-prose closing paragraph (line 127) and CardGroup (line 129) present (5.16); CardGroup not Columns (5.17); plain Cards (5.22).
4. Self-reference + banned phrase at line 40 ("This page assumes...") — 2.3, 2.4.
5. Zero cross-tab graduation links (4.10, 7.6); AI Service Registry on-chain claim has no contract link (6.10).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: how_to` → `pageType: instruction` | 22 | HIGH | S | check 1.2 |
| 2 | Add missing frontmatter: `purpose: build`, `complexity: intermediate`, `lifecycleStage: operate`, `veracityStatus: unverified` | 23-25 | HIGH | S | check 1.1+1.8 |
| 3 | Reword line 40: replace "This page assumes a ComfyStream instance..." with subject-led "Before registration, a ComfyStream instance must already be running and reachable from the orchestrator. See [Workflow Authoring]..." | 40 | HIGH | S | check 2.3+2.4 |
| 4 | Add `icon` + `title` to every code block: bash → `icon="terminal" title="start.sh"`; json → `icon="code" title="aiModels.json"` | 60, 71, 88 | HIGH | S | check 5.20 |
| 5 | Convert `<CardGroup cols={2}>` (line 129) to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 129-166 | HIGH | M | check 5.17+5.22 |
| 6 | Delete closing prose at line 127 ("Your ComfyStream instance is now a registered BYOC capability...") | 127 | HIGH | S | check 5.16 |
| 7 | Add ≥3 cross-tab graduation cards: `/v2/orchestrators/setup/connect`, `/v2/gateways/setup/connect`, `/v2/about/network/architecture` | new cards | HIGH | S | check 4.10+7.6 |
| 8 | Add concrete verification curl inside Step 4 ("Verify registration") at line 94, plus a §"Verification" H2 after StyledSteps | 94 / new H2 | HIGH | M | layer 1; pytrickle-quickstart.mdx Step 7 |
| 9 | Add inline link to AI Service Registry contract: line 92 → `[AI Service Registry](REVIEW:contract-address-url)` | 92 | MEDIUM | S | check 6.10 |
| 10 | Add inline link to `[tools.livepeer.cloud/ai/network-capabilities](https://tools.livepeer.cloud/ai/network-capabilities)` first mention | 95 | MEDIUM | S | check 6.10 |
| 11 | Import `<CustomDivider />` and replace markdown `---` (lines 36, 42, 52, 101, 111, 123) | imports + 6 rules | MEDIUM | S | check 5.26 |
| 12 | Remove legacy `status: current` field | 24 | MEDIUM | S | check 5.7 |
| 13 | Add §"Pricing and payment" + §"Operational concerns" before Related Pages | new H2s | MEDIUM | M | layer 5 |
| 14 | Add Mermaid sequence diagram in §"Registering" showing orchestrator-ComfyStream-gateway registration loop | new at line 56 | INFO | M | check 5.27 |
| 15 | Label code blocks TESTED / NOT-TESTED with reason | 3 code blocks | INFO | S | check 6.2 |
| 16 | Pin ComfyStream Docker tag where shown | 60 | INFO | S | check 6.8 |
