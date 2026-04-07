# Check Report — `v2/orchestrators/setup/test.mdx`

**Date:** 2026-03-24
**Checker:** Quality Check Agent (Batch 5 protocol, all P1–P40 learnings applied)
**File:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/orchestrators/setup/test.mdx`

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Verify Your Setup'` | PASS | Subject-first, clear |
| `sidebarTitle` | Yes | `'Verify'` | PASS | |
| `description` | Yes | `'Verify the orchestrator is on-chain, processing jobs, and healthy - video transcoding test, AI inference test, Explorer check, and basic monitoring confirmation.'` | FAIL | Uses hyphen-dash separator ` - ` in place of colon or comma; 162 chars — exceeds 160-char limit (check 1.11). Count: "Verify the orchestrator is on-chain, processing jobs, and healthy - video transcoding test, AI inference test, Explorer check, and basic monitoring confirmation." = 163 characters. |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type value. Must migrate to `pageType: instruction` + `pageVariant: quickstart` is wrong here — correct mapping is `how_to` → `pageType: instruction` (no required variant). See checks.mdx §1.2 |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token |
| `purpose` | Yes | `how_to` | FAIL | (a) Deprecated alias — `how_to` is not in the 15-value canonical purpose set. Closest match: `verify`. Correct fix: `purpose: verify`. See checks.mdx §1.4 |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | `[livepeer, orchestrator, verify, test, health check, monitoring, Prometheus]` | FAIL | Generic keywords: `livepeer`, `orchestrator` are not searcher-intent-aligned (check 1.13). Stronger candidates: `verify livepeer orchestrator node`, `livepeer GPU health check`, `Prometheus metrics go-livepeer` |
| OG image block | Yes | All 5 fields present with correct path | PASS | |
| `veracityStatus` | No | — | FAIL | Required field missing. `status: current` is present — per checks.mdx §1.8, `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Two TODO/REVIEW comments exist in body (lines 175, 218). Field must be added as `unverified` at minimum |
| `industry` | No | — | FAIL | Required field. No value present. Concrete fix: `industry: [technical, livepeer]` |
| `niche` | No | — | FAIL | Required field. No value present. Concrete fix: `niche: [infrastructure, protocol]` |
| `status` | Yes | `current` | INFO | Coherent only if `veracityStatus: verified`. Currently incoherent — see cross-category connection CC-1 |
| `lastVerified` | Yes | `'2026-03-16'` | INFO | Present; credibility depends on `veracityStatus` |

**Frontmatter summary:** 9 fields fail or are missing. PASS fields: `title`, `sidebarTitle`, `audience`, OG block (4 of 14 evaluated). Core taxonomy (`pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`) all missing or deprecated.

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. 5 of 10 required fields absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type value. Fix: `pageType: instruction` (no `pageVariant` required for plain how_to → instruction migration per Frameworks.mdx §1.1 table) |
| 1.3 | `pageVariant` valid if present | N/A | Field not present |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `how_to` is not in the canonical 15-value set. Error type: (a) invalid value — not a valid purpose alias in either old or new schema. Best-fit fix: `purpose: verify` |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Concrete fix: `complexity: intermediate` (page assumes installed node, GPU confirmed, Arbitrum wallet funded — not beginner; not advanced) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Concrete fix: `lifecycleStage: setup` (reader is completing first-time setup and confirming it worked) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Body contains 2 TODO/REVIEW comment blocks (lines 175, 218). `status: current` is incoherent without `veracityStatus`. Fix: add `veracityStatus: unverified` — the content has not been independently verified and carries open TODO flags |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required per checks.mdx §1.1. Concrete fix: `industry: [technical, livepeer]` |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required per checks.mdx §1.1. Concrete fix: `niche: [infrastructure, protocol]` |
| 1.11 | `description` well-formed | FAIL | (1) Length: 163 characters — exceeds 160-char maximum. (2) Separator ` - ` reads as typographic ambiguity; use `,` or `:`. Concrete fix: `'Confirm the orchestrator is on-chain, processing jobs, and exposing monitoring signals: video transcoding, AI inference, Explorer, and Prometheus.'` (147 chars) |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | FAIL | `livepeer` and `orchestrator` are too generic (check 1.13). `health check` is generic. `verify` is the page title verb. Concrete fix: replace with `[verify livepeer orchestrator, GPU transcoding test, AI inference smoke test, Prometheus metrics go-livepeer, livepeer node health check, reward call verification]` |

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings detected. `organised`, `optimise` not used but no violations found. "Monitoring" spelled correctly throughout |
| 2.2 | Zero banned words | PASS | See Banned Construction Scan below for full candidate list |
| 2.3 | Zero banned phrases | PASS | No banned phrases detected. Opener in Tip component is direct instruction, not filler |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. One probable value-claim `can` found: line 119 "a gateway (or another node as gateway) pointed at the orchestrator" — PASS. Line 381: "The second cause is price above gateway caps - check current rates" — PASS (factual). Line 379: "Confirm it is enabled" — PASS. Full scan below |
| 2.5 | Opening order correct | PASS | Tip opens with imperative instruction. First prose sentence leads with outcome: "Finish setup by confirming the node is on-chain..." — outcome first |
| 2.6 | Paragraph discipline | PASS | Paragraphs are tight. Each section step leads with action, ends with expected result or next step |
| 2.7 | Audience register correct | PASS | Operational, hardware-aware, commands-first. Correct for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no "the network rewards you", no hedged earnings |
| 2.9 | No passive value statements | PASS | No unquantified value claims. Performance references are concrete |
| 2.10 | No hedging openers | PASS | Tip is imperative, not hedged |
| 2.11 | Terminology consistent | PASS | `reward cut / fee cut` used correctly in table. `orchestrator`, `gateway`, `LPT`, `Arbitrum` consistent |

---

## Category 3 — Section Naming & Headings

**Note:** `Related Pages` heading is exempt per learnings.md P16 and checks.mdx §3.1 — treated as invisible. No such heading exists on this page.

Headings to score (H2 level visible headings only — StyledStep titles are component labels, not H2 headings in the structural sense, but they are visible text that should be assessed for clarity):

Structural H2 headings: `Quick-reference checklist`, `Common issues`, `Setup complete`

StyledStep titles (visible text assessed separately from H2 score table): `Check node status`, `Verify on Livepeer Explorer`, `Verify port 8935 is publicly reachable`, `Test video transcoding (video and dual mode)`, `Test AI inference (AI and dual mode)`, `Confirm reward calling is active`, `Verify basic monitoring`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Setup complete` fails — see Heading Score Table. All others pass |
| 3.2 | No banned or weak standalone heading terms | FAIL | `Setup complete` uses `complete` as a closing label — not banned but weak. See score table |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | Headings are interpretable in isolation |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | FAIL | `'Verify Your Setup'` — second-person `Your` is a weak form. Stronger: `'Setup Verification'` or `'Verify Your Node'`. `Setup` is in the Avoid list (check 3.2) but as a *standalone* term; here it is qualified, so BORDERLINE |
| 3.7 | Sounds like editorial choice | PASS | Most headings read as deliberate labels, not bureaucratic defaults |

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Quick-reference checklist | 4 | 3 | 4 | 4 | 4 | 19 | FAIL (1pt below threshold) |
| Common issues | 3 | 3 | 4 | 4 | 5 | 19 | FAIL (1pt below threshold) |
| Setup complete | 2 | 2 | 3 | 3 | 4 | 14 | FAIL |

**Score rationale:**

- `Quick-reference checklist`: Precision 4 (names what it is but "checklist" is generic); Depth 3 (does not signal what makes it a quick reference vs the main content above); Stability 4 (survives content changes); Clarity 4; Conciseness 4. Total 19/25. One point below threshold.
  - Concrete fix: `Quick-Reference Checks` or `Verification Checklist`
- `Common issues`: Precision 3 (issues of what?); Depth 3; Stability 4; Clarity 4; Conciseness 5. Total 19/25. One below threshold.
  - Concrete fix: `Node Setup Issues` or `Verification Failures`
- `Setup complete`: Precision 2 (states closure, not content); Depth 2 (no intellectual signal); Stability 3; Clarity 3; Conciseness 4. Total 14/25.
  - Concrete fix: Remove as an H2 entirely — the content below is a Note + CardGroup (navigation). The Note text says it all. Alternatively rename to `Next Steps` — but `Next Steps` is in the Avoid list. Best fix: remove the heading and use only the Note + CardGroup. The `<CustomDivider />` before it already provides visual separation.

---

## Category 4 — Page Structure & Content Architecture

Navigation sequence from docs.json (lines 2857–2866):
`setup/guide` → `setup/rcs-requirements` → `setup/rs-install` → `setup/configure` → `setup/connect-and-activate` → **`setup/test`** → `setup/r-monitor`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: verify all applicable checks for the configured node mode |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator verify that their node is on-chain, processing jobs, and healthy before moving to operational guides." Sentence holds |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | Previous page: `connect-and-activate` (activation completed). This page assumes activation done — correct. Next page: `r-monitor` (full monitoring setup). This page routes to Monitoring at end — correct handoff |
| 4.4 | No dead ends | PASS | CardGroup at bottom routes to 4 Guides. LinkArrow references throughout provide escape paths |
| 4.5 | Prerequisites stated or linked | PASS | Opening Tip instructs reader to "run every check that applies to the configured node mode." Prerequisites are implicit in the setup sequence but the Tip + opening sentence are sufficient for a reader arriving from `connect-and-activate` |
| 4.6 | Out-of-scope clear | PASS | Full monitoring setup explicitly deferred: "Full monitoring setup (Grafana, alerting, DCGM exporter) is in Metrics and Alerting." |
| 4.7 | Information type per section correct | PASS | Page `purpose: verify` (current value `how_to` → should be `verify`). Primary permitted types: `procedural, factual`. All step content is procedural (commands + expected outputs) or factual (table of Explorer fields). Correct |
| 4.8 | No content duplication from adjacent sections | PASS | Verification steps are distinct from installation (rs-install) and configuration (configure). No overlap detected |
| 4.9 | Section orientation page present | N/A | Section-level check; `setup/guide` is the Setup orientation page — not this page's responsibility |
| 4.10 | Cross-tab links at journey intersections | INFO | No explicit cross-tab links to About or Delegators. However, per project state, cross-tab linking is a tab-level gap logged separately (2026-03-24 session log). Not a per-page FAIL for this page |

---

## Category 5 — Layout, Components & Template

Page `pageType: how_to` (deprecated) → maps to `instruction`. Evaluating against `instruction` template requirements.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | Uses StyledSteps/StyledStep (instructions), tables (reference), AccordionGroup (troubleshooting), CardGroup (next steps) — matches instruction pattern |
| 5.2 | Required sections present | PASS | For `instruction`: Prerequisites (implicit via Tip + sequence), Steps (StyledSteps), Next Steps (CardGroup). All present |
| 5.3 | Only approved components used | NOT-TESTED | Component approval catalog (`docs-guide/catalog/components-catalog.mdx`) not read. Components used: `CustomDivider`, `LinkArrow`, `StyledTable/TableRow/TableCell`, `StyledSteps/StyledStep`, `Tip`, `Note`, `AccordionGroup/Accordion`, `CardGroup/Card`. These appear consistently across other setup pages and are likely approved |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`. Two TODO/REVIEW comment blocks exist (lines 175, 218) — these are MDX comments `{/* TODO: ... */}` and do not render visibly, but they represent open verification items (see check 6.5, cross-category CC-1) |
| 5.5 | Information type → component mapping | PASS | Procedural → StyledSteps/Step; reference table → StyledTable; multi-condition issues → AccordionGroup; navigation → CardGroup. All correct |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed locally. No unclosed tags, no import errors detected by static scan. All imports match used components |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` and `purpose: how_to` are deprecated values (see Cat 1) |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS on this page |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | All imports are named correctly, PascalCase, from correct snippet paths |

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | NOT-TESTED | Key claims requiring source verification: (1) "round ~22 hours" — cited at lines 79, 202, 375. NOT-TESTED: not confirmed against current Livepeer protocol round duration. (2) "top-100 threshold" (line 79) — active set size. NOT-TESTED. (3) "500-2,000 wei per pixel" typical range — referenced at configure.mdx, not on this page. (4) "temperature above 85°C" GPU threshold (line 272). NOT-TESTED |
| 6.2 | Code/commands tested | NOT-TESTED | All 12+ code blocks (curl, docker compose, ffmpeg, ffprobe, nvidia-smi commands) are NOT-TESTED. Risk: HIGH — ffmpeg stream test requires a gateway pointing at the node; procedure may not work standalone |
| 6.3 | No deprecated API usage | NOT-TESTED | `localhost:7935/status`, `localhost:8935/text-to-image`, `livepeer_cli` commands. NOT-TESTED against current go-livepeer version |
| 6.4 | Numbers are real | NOT-TESTED | `~22 hours` round duration, `85°C` GPU threshold, `100%` VRAM pressure threshold. NOT-TESTED against authoritative source |
| 6.5 | REVIEW flags for unverified claims | FAIL | Two open TODO comment blocks exist: (1) Line 175: `{/* TODO: Confirm the current direct orchestrator endpoint for text-to-image inference. */}` — this is an open factual gap. (2) Line 218: `{/* TODO: Confirm the current success log line for a reward call in go-livepeer. */}` — open technical gap. Both must be resolved before `status: current` is valid |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` field absent. With 2 open TODO flags and untested procedures, the correct value is `veracityStatus: unverified`. See CC-1 |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references on this page |
| 6.8 | Source staleness check | INFO | `tools.livepeer.cloud/ai/network-capabilities` (line 99, 347, 381) is an external live URL. Staleness risk: MEDIUM — UI may change |
| 6.9 | No open-ended research tasks | FAIL | Both TODO comments are open-ended. Fix required before publication: resolve line 175 (confirm endpoint) and line 218 (confirm log line) with named sources |

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed: `"v2/orchestrators/setup/test"` at docs.json line 2865 |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/setup/test.mdx`, matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check — portal is `setup/guide`, not this page |
| 7.4 | No structural orphans | PASS | Page is reachable from docs.json navigation |
| 7.5 | Audience journey complete | PASS | Position in Setup section is logical. Previous: `connect-and-activate`. Next: `r-monitor`. Journey from setup/guide → … → test → r-monitor is complete |
| 7.6 | Cross-tab graduation paths | INFO | No graduation links to Gateways or About. This is a page-level check; cross-tab gap is a tab-level concern already logged |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/setup/` — publishable lane, correct |
| 7.8 | File naming conventions | PASS | `test.mdx` — no required prefix for this content type. Acceptable |
| 7.9 | `_workspace/` TTL compliance | N/A | This file is in the publishable lane |

---

## Category 8 — Links & Rendering

Internal links on this page:
1. `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (lines 33, 274)
2. `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` (line 370)
3. `/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning` (line 379)
4. `https://explorer.livepeer.org/orchestrators` (line 63)
5. `https://tools.livepeer.cloud/ai/network-capabilities` (line 99)
6. `https://explorer.livepeer.org` (line 210)
7. `/v2/orchestrators/guides/staking-and-rewards/earning-model` (line 394 card)
8. `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (line 397 card)
9. `/v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` (line 400 card)
10. `/v2/orchestrators/guides/ai-and-job-workloads/workload-options` (line 403 card)

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 7 internal links verified against docs.json: `metrics-and-alerting` ✓ (line 2932), `troubleshooting` ✓ (line 2933), `reward-call-tuning` ✓ (line 2924), `earning-model` ✓ (line 2910), `pricing-strategy` ✓ (line 2921), `operator-toolbox` ✓ (line 2930), `workload-options` ✓ (line 2896). All 7/7 confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | External links not fetched: `explorer.livepeer.org`, `tools.livepeer.cloud`. Risk LOW — known live domains |
| 8.3 | All snippet imports resolve | PASS | 4 imports: `CustomDivider`, `LinkArrow`, `StyledTable/TableRow/TableCell`, `StyledSteps/StyledStep` — all from existing snippet paths |
| 8.4 | All images load | N/A | No images on page (OG image is frontmatter only) |
| 8.5 | Page renders without error | NOT-TESTED | Not executed. Static review: imports match usage, no unclosed JSX detected |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Two `{/* TODO: ... */}` comment blocks at lines 175 and 218. These do not render visibly but are in a publishable file. They represent open verification tasks that block `status: current` |

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off in the file or session logs specific to this page |
| 9.2 | All consuming decisions in registry | INFO | No unusual structural decisions detected. Standard instruction page pattern |
| 9.3 | Gate prerequisites met | FAIL | Tab-level: IA not approved, terminology not locked, content scan in progress (CLAUDE.md gate table). Page-level fixes should not be considered final until tab gates open |
| 9.4 | Phase ordering respected | INFO | Cannot confirm without session history for this file |
| 9.5 | Findings gathered before fixes | INFO | Findings-first protocol is the purpose of this report |
| 9.6 | Feedback routed | INFO | Pending this report completion |

---

## Banned Construction Scan

Scope: all body prose, headings, Tip, Note, Warning, table cells, card descriptions, CustomDivider middleText props, Accordion titles.

CustomDivider middleText props on this page: `"Verification Checks"`, `"Quick Reference"`, `"Common Issues"` — none contain banned constructions.

Accordion titles: `"No transcoding output"`, `"AI inference request returns error"`, `"Explorer listing delay"`, `"Reward-call visibility"`, `"No jobs after 48 hours"` — none contain banned constructions.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|----------------|--------------|----------------|-------|
| 30 | "Run every check that applies to the configured node mode." | — | No banned pattern | No |
| 33 | "Finish setup by confirming the node is on-chain..." | — | No banned pattern | No |
| 41 | "Verify the node process is running and the CLI port is responding:" | — | No banned pattern | No |
| 49 | "If no response: the node is not running, or the cliAddr is bound to a different port." | `if` | conditional caveat (diagnostic branch) | No |
| 111 | "A connection timeout means the firewall is blocking the port - gateways cannot route work to an unreachable node." | — | factual consequence statement | No |
| 113 | "If the port is blocked: check firewall rules..." | `if` | conditional caveat (diagnostic) | No |
| 119 | "Send a test stream to confirm transcoding works on-chain. Use a gateway (or another node as gateway) pointed at the orchestrator, then ffmpeg:" | — | procedural | No |
| 152 | "For this test to work, a gateway must be routing the RTMP stream to the orchestrator. If running a standalone orchestrator without a local gateway, skip this test..." | `if` | conditional caveat (scope branch) | No |
| 159 | "Ensure the warm model has finished loading before testing (watch logs for "Warm model loaded"):" | — | procedural | No |
| 183 | "Expected: `verify-output.png: PNG image data` with a non-zero file size." | — | factual expectation | No |
| 195 | "If the runner is in a restart loop, check its logs:" | `if` | conditional caveat (diagnostic) | No |
| 202 | "Reward calling distributes LPT inflation to the orchestrator each round (~22 hours). Confirm it is enabled:" | — | factual + procedural | No |
| 208 | "The startup command should omit `-reward=false`. Its absence means automatic calling is enabled." | — | factual | No |
| 220 | "Missing reward calls after a round usually mean the node was offline during round initialisation, the Arbitrum ETH balance is too low for gas, or the startup command includes `-reward=false`." | — | factual diagnostic | No |
| 226 | "Confirm Prometheus metrics are exposed. This requires `-monitor` in the startup command (add it if missing and restart):" | — | procedural | No |
| 263 | "For AI nodes, also check `ai_request_count` and `ai_request_latency_seconds`." | — | procedural | No |
| 272 | "Watch for temperature above 85°C (inadequate cooling) or memory utilisation at 100% (VRAM pressure for AI workloads)." | — | factual threshold | No |
| 370 | "Check the GPU was detected at startup (`Transcoding on Nvidia GPU` in logs). Confirm the `-nvidia` flag matches the GPU device ID. Confirm port 8935 is open from external machines. Check the orchestrator logs for error messages on job receipt." | — | procedural | No |
| 375 | "Confirm the activation transaction succeeded on Arbiscan. Check the service URI is set and reachable. Verify the stake bonding transactions (both `approve` and `bond`) confirmed. Recent activations appear on Explorer after the next round, because the active set updates once per round (~22 hours)." | — | factual | No |
| 381 | "The #1 cause is port 8935 not reachable from the internet. Re-test from an external machine. The second cause is price above gateway caps - check current rates on tools.livepeer.cloud and compare. Third: not in the active set (for video jobs) - check rank on Explorer. AI jobs route by capability, not stake, so ensure capabilities appear on tools.livepeer.cloud." | — | factual diagnostic | No |
| 390–391 | "The node is now on-chain, processing jobs, and verified. The setup section is complete. Pricing optimisation, delegation strategy, workload selection, and long-term monitoring are covered in the Guides section." | `are covered in` | weak passive voice | BORDERLINE |

**Banned word scan (candidates):**
- `effectively` — NOT FOUND
- `essentially` — NOT FOUND
- `basically` — NOT FOUND
- `meaningful` / `meaningfully` — NOT FOUND
- `significant` / `significantly` — NOT FOUND
- `real` (as intensifier) — NOT FOUND
- `various` — NOT FOUND
- `several` — NOT FOUND
- `obviously` — NOT FOUND
- `clearly` — NOT FOUND
- `simply` — NOT FOUND

**Result: PASS on all banned words.** No violations found.

**BORDERLINE flag:** Line 390–391 Note text: "Pricing optimisation, delegation strategy, workload selection, and long-term monitoring are covered in the Guides section." — `are covered in` is a mild passive. Not a checked banned construction, but borderline. Concrete fix: "Pricing optimisation, delegation strategy, workload selection, and monitoring are in the Guides section."

**Additional flag — em-dash prohibition (P30):**
- Line 111: "A connection timeout means the firewall is blocking the port - gateways cannot route work" — hyphen-dash ` - ` (space-hyphen-space) used as separator. Not a true em-dash (`—`) but typographically ambiguous. BORDERLINE — check if this is intentional project style or an error.
- Line 381: Multiple ` - ` separators used in Accordion body. Same pattern.
- Frontmatter `description` line 4: uses ` - ` as a list separator. Same pattern.

These are hyphens with spaces, not em-dashes. The project rule prohibits em-dashes (`—`). Scanning specifically for `—`: NOT FOUND. **Em-dash rule: PASS.** The ` - ` separators are a style concern but not an em-dash violation.

---

## Spelling/Typo Check

Scan of all visible text: headings, step titles, prose, table cells, accordion titles, card descriptions, code block filenames, CustomDivider labels.

- `Arbiscan` — correct branding
- `Prometheus` — correct capitalisation
- `RTMP`, `HLS`, `JSON` — correct
- `livepeer_cli` — correct format
- `aiModels.json` — correct
- `ByteDance/SDXL-Lightning` — model ID (not a typo check item)
- `verify-output.png` — correct
- `ai-runner-container-name` — correct placeholder format
- `docker compose` — correct (not `docker-compose` — new syntax)
- `ffprobe` — correct spelling
- `ultrafast` — correct (ffmpeg preset name)
- `zerolatency` — correct (ffmpeg tune name)
- `testsrc=size=1280x720:rate=30` — correct ffmpeg syntax
- Step title "Verify port 8935 is publicly reachable" — correct
- Accordion title "Reward-call visibility" — correct
- Card "Staking and Earning" — consistent with target page title check needed but no visible typo

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `instruction` pageType? | Notes |
|-----------|-------|----------------------------------------|-------|
| `CustomDivider` | Yes | NOT-TESTED (catalog not read) | Used consistently across all setup pages. Likely approved |
| `LinkArrow` | Yes | NOT-TESTED | Used for inline cross-page links. Functional |
| `StyledTable / TableRow / TableCell` | Yes | NOT-TESTED | Appropriate for reference data in instructions |
| `StyledSteps / StyledStep` | Yes | NOT-TESTED | `Steps/Step` is in Preferred column for `instruction`. Styled variant — likely approved custom wrapper |
| `Tip` | Yes | Consistent with instruction pattern | `instruction` preferred: Tip, Warning, Check |
| `Note` | Yes | Consistent with instruction pattern | |
| `AccordionGroup / Accordion` | Yes | NOT-TESTED | `Accordion` is preferred for `guide`; for `instruction` it is not in the explicit Preferred column per checks.mdx matrix but is used here for troubleshooting sub-section. BORDERLINE |
| `CardGroup / Card` | Yes | NOT-TESTED | `instruction` matrix does not list CardGroup in Preferred. Used here for Next Steps. Common pattern across pages |

**Component check is NOT-TESTED for approval status** (catalog file not read). No obvious forbidden components present.

---

## Cross-Category Connections

```
Root Cause CC-1: veracityStatus absent + status: current + 2 open TODO flags
Affects: Cat 1.8 + Cat 6.5 + Cat 6.6 + Cat 6.9 + Cat 8.6 + Cat 9.3
Fix: (1) Add `veracityStatus: unverified` to frontmatter. (2) Resolve TODO at line 175 (confirm /text-to-image endpoint) and line 218 (confirm reward call log line) before changing to `veracityStatus: verified`. (3) Either change `status: current` to `status: draft` immediately, or resolve TODOs + test procedures first, then set `veracityStatus: verified`.
```

```
Root Cause CC-2: Deprecated frontmatter values in both pageType and purpose
Affects: Cat 1.2 + Cat 1.4 + Cat 5.7
Fix: Change `pageType: how_to` → `pageType: instruction`. Change `purpose: how_to` → `purpose: verify`. No other changes required by this migration.
```

```
Root Cause CC-3: Missing taxonomy fields (complexity, lifecycleStage, industry, niche)
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.9 + Cat 1.10
Fix: Add all four fields:
  complexity: intermediate
  lifecycleStage: setup
  industry: [technical, livepeer]
  niche: [infrastructure, protocol]
```

---

## Blocking Decisions

No blocking decisions. Page purpose, audience, and scope are clear and unambiguous. All findings are actionable without human decision.

---

## Verdict

**NEEDS WORK**

**Fail count:** 14 failures across 9 categories.

**Critical fixes (blocking publication):**
1. CC-1: Add `veracityStatus: unverified`; resolve 2 TODO flags before setting `current`
2. CC-2: Migrate `pageType: how_to` → `instruction`; `purpose: how_to` → `verify`
3. CC-3: Add `complexity`, `lifecycleStage`, `industry`, `niche`
4. Fix `description` — exceeds 160 chars; use proposed replacement (147 chars)

**Non-blocking fixes:**
5. `keywords` — replace with searcher-intent keywords (see Cat 1.13)
6. Heading `Setup complete` — remove H2 or replace (score 14/25)
7. `Quick-reference checklist` and `Common issues` — 19/25, 1pt below threshold each
8. Note text at line 390 — minor passive voice (BORDERLINE)
9. Title `'Verify Your Setup'` — second-person weak; consider `'Setup Verification'`

**No critical voice/copy violations. No broken internal links. Navigation position correct.**
