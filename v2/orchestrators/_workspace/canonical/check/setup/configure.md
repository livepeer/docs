# Check Report — `v2/orchestrators/setup/configure.mdx`

**Date:** 2026-03-24
**Checker:** Quality Check Agent (Batch 5 protocol, all P1–P40 learnings applied)
**File:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/orchestrators/setup/configure.mdx`

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Configuring Your Orchestrator'` | FAIL | Second-person `Your`. Acceptable for setup pages but BORDERLINE against heading rules. See Cat 3.6 |
| `sidebarTitle` | Yes | `'Configure'` | PASS | Concise |
| `description` | Yes | `'Set the go-livepeer flags needed to run as an Orchestrator - GPU selection, pricing, session limits, networking, and AI worker configuration.'` | PASS | Subject-first. Length: 143 characters — within 160-char limit. Note: ` - ` separator (hyphen with spaces) used in place of colon. Not an em-dash. Style concern; not a rules violation |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type value. Fix: `pageType: instruction` |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token |
| `purpose` | Yes | (absent — field not present in frontmatter) | FAIL | `purpose` field is entirely absent. Required. Per page content, correct value: `purpose: configure` |
| `complexity` | No | — | FAIL | Required field missing. Concrete fix: `complexity: intermediate` |
| `lifecycleStage` | No | — | FAIL | Required field missing. Concrete fix: `lifecycleStage: setup` |
| `keywords` | Yes | `[livepeer, go-livepeer, orchestrator, configuration, flags, pricePerUnit, maxSessions, serviceAddr, nvidia, AI worker, CLI]` | FAIL | Mixed quality. `go-livepeer`, `pricePerUnit`, `maxSessions`, `serviceAddr`, `nvidia` are strong (flag-name searches). `livepeer`, `orchestrator`, `configuration`, `CLI` are too generic. Concrete fix: Replace generic entries: `[go-livepeer orchestrator flags, pricePerUnit wei per pixel, maxSessions livepeer, serviceAddr configuration, -nvidia GPU transcoding, AI worker aiModels.json, livepeer orchestrator startup command]` |
| OG image block | Yes | All 5 fields present with correct path | PASS | |
| `veracityStatus` | No | — | FAIL | Required field missing. `status: current` is present — per checks.mdx §1.8, `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Four REVIEW comment blocks exist in the file body. Field must be added. Correct current value: `veracityStatus: unverified` |
| `industry` | No | — | FAIL | Required field. Concrete fix: `industry: [technical, livepeer]` |
| `niche` | No | — | FAIL | Required field. Concrete fix: `niche: [infrastructure, hardware]` |
| `status` | Yes | `current` | INFO | Incoherent without `veracityStatus: verified`. See CC-1 |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Present; credibility depends on `veracityStatus` resolution |

**Purpose field note:** The `purpose` field does not appear in the frontmatter at all (unlike `test.mdx` where it was set to `how_to`). This is a missing-field failure, not a deprecated-alias failure. Per the page content (configure go-livepeer flags), the correct value is `purpose: configure`.

**Frontmatter summary:** 9 failures or absences. PASS fields: `sidebarTitle`, `description`, `audience`, OG block (4 of 14 evaluated).

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. 6 of 10 required fields absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is deprecated. Fix: `pageType: instruction` (no `pageVariant` required for this migration) |
| 1.3 | `pageVariant` valid if present | N/A | Not present |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Error type: (c) missing — field not set at all. Fix: `purpose: configure` |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Concrete fix: `complexity: intermediate` (page assumes go-livepeer installed and GPU confirmed — not beginner; not advanced) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Concrete fix: `lifecycleStage: setup` |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Four REVIEW comment blocks in body (lines 78, 97, 444, 471). Fix: `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Concrete fix: `industry: [technical, livepeer]` |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Concrete fix: `niche: [infrastructure, hardware]` |
| 1.11 | `description` well-formed | PASS | Subject-first, 143 chars, no self-reference. The ` - ` separator is a style concern, not a rule violation |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | FAIL | Partially good. Replace generic entries as described in Frontmatter Table above |

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | FAIL | Line 171: "**significantly** slower and not competitive on the network" — `significantly` is a banned word (see Cat 2.2). Additionally checking UK spellings: `optimise` not used but no violations found. `recognised` etc. not applicable. Line 232: "Setting this in ETH rather than wei results in a price **orders of magnitude** below market rate" — `rather than` is a banned phrase (checks.mdx §3.2 via Frameworks.mdx §2.1). See CC-3 |
| 2.2 | Zero banned words | FAIL | Line 171: `significantly` — banned word (intensifier). Context: "CPU transcoding, which is **significantly** slower and not competitive on the network." Fix: delete `significantly` → "CPU transcoding, which is slower and not competitive on the network." The sentence is stronger without it |
| 2.3 | Zero banned phrases | FAIL | Line 232: `rather than` — banned phrase. Context: "Setting this in ETH **rather than** wei results in..." Fix: "Setting this in ETH results in a price orders of magnitude below market rate. Use wei." (separate the two points) |
| 2.4 | Zero banned constructions | FAIL | Line 49: "This page covers the go-livepeer flags needed to run as an Orchestrator." — `This page covers` is a banned self-referential construction (checks.mdx §2.4). See Banned Construction Scan and CC-2 |
| 2.5 | Opening order correct | FAIL | Line 49: "This page covers the go-livepeer flags needed to run as an Orchestrator. By the end, a working startup command is ready and each flag is understood." — Opens with self-description, not value/outcome. Fix: delete opening sentence; open with "By the end, a working startup command is ready and each flag is understood." Or better: remove both and open with the first Step, using the Prerequisites block as orientation |
| 2.6 | Paragraph discipline | PASS | Individual paragraphs within steps are tight and lead-sentence focused |
| 2.7 | Audience register correct | PASS | Operational, flag-focused, hardware-specific. Correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no hedged earnings |
| 2.9 | No passive value statements | PASS | Value claims are concrete (specific flags and effects) |
| 2.10 | No hedging openers | FAIL | Same as 2.5 — opening sentence is hedged self-description. See CC-2 |
| 2.11 | Terminology consistent | PASS | `gateway`, `orchestrator`, `Arbitrum One`, `LPT`, `reward call` consistent throughout |

---

## Category 3 — Section Naming & Headings

**Note:** `Related Pages` heading exempt per learnings.md P16 — treat as invisible. No such heading on this page.

H2 headings on this page: `Essential Flags`, `Full Startup Command`, `Adding AI Inference`, `Variants`, `Next Steps`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Next Steps` fails — in Avoid list. See score table |
| 3.2 | No banned or weak standalone heading terms | FAIL | `Next Steps` is in the Avoid list per checks.mdx §3.2. Fix: rename to `Continue Setup` or remove and use CardGroup only with no heading |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | `Essential Flags`, `Full Startup Command`, `Adding AI Inference`, `Variants` are interpretable in isolation |
| 3.5 | Heading names concept, not examples | PASS | `Variants` names the concept (deployment variants), not specific examples |
| 3.6 | Title well-formed | FAIL | `'Configuring Your Orchestrator'` — second-person `Your` per project style concern. Also `Configuring` is a gerund (weak action form). Stronger: `'Orchestrator Configuration'` or `'Configure go-livepeer'`. BORDERLINE — the title is comprehensible and not banned. Flagging as HIGH rather than CRITICAL |
| 3.7 | Sounds like editorial choice | PASS | `Essential Flags`, `Full Startup Command`, `Adding AI Inference` read as deliberate editorial labels |

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Essential Flags | 4 | 4 | 4 | 5 | 4 | 21 | PASS |
| Full Startup Command | 5 | 4 | 5 | 5 | 4 | 23 | PASS |
| Adding AI Inference | 4 | 3 | 4 | 5 | 4 | 20 | PASS (borderline) |
| Variants | 3 | 3 | 4 | 4 | 5 | 19 | FAIL |
| Next Steps | 2 | 2 | 3 | 4 | 5 | 16 | FAIL |

**Score rationale:**

- `Essential Flags`: Precision 4 (flags for what?); Depth 4 (signals required vs optional); Stability 4; Clarity 5; Conciseness 4. Total 21/25. PASS.
- `Full Startup Command`: Precision 5; Depth 4; Stability 5; Clarity 5; Conciseness 4. Total 23/25. PASS.
- `Adding AI Inference`: Precision 4 (clear task); Depth 3 (doesn't signal that this is optional extension); Stability 4; Clarity 5; Conciseness 4. Total 20/25. Borderline PASS.
- `Variants`: Precision 3 (variants of what?); Depth 3 (no signal of what type of variants — Docker, systemd, config file); Stability 4; Clarity 4; Conciseness 5. Total 19/25. FAIL. Concrete fix: `Deployment Variants` (22/25 projected) or `Docker and systemd Setup` (too specific, less stable).
- `Next Steps`: Precision 2 (no domain signal); Depth 2 (generic closure); Stability 3; Clarity 4; Conciseness 5. Total 16/25. FAIL. In the Avoid list per check 3.2. Fix: either remove H2 entirely (CardGroup provides navigation without needing a heading) or rename to `Activate Your Node`.

---

## Category 4 — Page Structure & Content Architecture

Navigation sequence from docs.json (lines 2857–2866):
`setup/guide` → `setup/rcs-requirements` → `setup/rs-install` → **`setup/configure`** → `setup/connect-and-activate` → `setup/test` → `setup/r-monitor`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: configure the go-livepeer startup command |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator set every required go-livepeer flag and produce a working startup command." Sentence holds |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | Previous: `rs-install` (go-livepeer installed, GPU detected). This page assumes installation done — correct. Prerequisite mentions `rs-install` and benchmarking from requirements, which was the page before that. Next: `connect-and-activate`. This page sets `-ethAcctAddr` and `-ethUrl` but defers on-chain activation to the next page — correct handoff |
| 4.4 | No dead ends | PASS | Next Steps CardGroup links to `connect-and-activate`, `activate` (via card), and `cli-flags`. Main body also links inline to `setup-options`, `requirements` |
| 4.5 | Prerequisites stated or linked | FAIL | Prerequisites block (lines 53–55) links to `rs-install` (✓) and `sc-connect` (line 54) and `requirements` (line 55). `sc-connect` resolves to `v2/orchestrators/setup/sc-connect` — see link verification below. This path is NOT in docs.json. See Cat 8.1 |
| 4.6 | Out-of-scope clear | PASS | AI inference deferred to a separate Accordion. Alternate deployments deferred to `setup-options`. On-chain activation deferred to `connect-and-activate`. Scope boundaries clear |
| 4.7 | Information type per section correct | PASS | Page `purpose` should be `configure`. Permitted primary types: `procedural, technical, factual`. All content is flags + commands (technical/procedural) + flag effects (factual). Correct |
| 4.8 | No content duplication from adjacent sections | INFO | The `-maxSessions` formula (hardware limit, bandwidth limit) appears here and is referenced in `requirements`. Duplication risk LOW — this page uses it operationally, requirements page defines it. Acceptable |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | INFO | No cross-tab links. Tab-level gap — logged separately |

---

## Category 5 — Layout, Components & Template

Page `pageType: how_to` (deprecated) → maps to `instruction`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | Uses Steps/Step, StyledTable, Accordion/AccordionGroup, CardGroup — matches instruction pattern |
| 5.2 | Required sections present | PASS | For `instruction`: Prerequisites (lines 53–55 explicit block), Steps (Steps component), Next Steps (CardGroup lines 481–491). All present |
| 5.3 | Only approved components used | NOT-TESTED | Components used: `LinkArrow`, `StyledTable/TableRow/TableCell`, `CustomDivider`, `Steps/Step`, `Accordion/AccordionGroup`, `CardGroup/Card`, `Note`, `Warning`. Catalog not read — NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`. Four REVIEW comment blocks are MDX comments (not rendered). They represent open SME queries |
| 5.5 | Information type → component mapping | PASS | Procedural (flags) → Steps; reference lookup → StyledTable; variants → AccordionGroup; navigation → CardGroup. Correct |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed. Static review: imports match usage. Note: page uses native `<Steps>` / `<Step>` (not `StyledSteps`) — different from test.mdx. Both are imported from snippets on test.mdx; here `<Steps>` appears to be a Mintlify native component (no import). Check for render consistency |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` is deprecated |
| 5.8 | CSS uses custom properties only | PASS | Two `CustomDivider` props use inline style: `style={{margin: "-1rem 0 -1rem 0"}}` and `style={{margin: "-1rem 0 -2rem 0"}}`. These use numeric values, not hex colours or hardcoded theme values. Margin values are layout adjustments, not theme-breaking. BORDERLINE — margin values are hardcoded numbers, not `var(--spacing)`. Flag as INFO |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | FAIL | Page uses `<Steps>` and `<Step>` without importing them (lines 63, 65, etc.). In Mintlify, `Steps`/`Step` may be globally available native components. If so, no import needed — PASS. If they require import (as with the styled variants), this is a missing import. NOT-TESTED — cannot confirm without running the build. Risk: MEDIUM |

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | NOT-TESTED | Key claims: (1) "A typical starting price is 500-2,000 wei per pixel" (line 229) — NOT-TESTED against current market data. (2) "Bandwidth limit: available symmetric bandwidth (Mbps) ÷ 6 Mbps per stream × 0.8 margin" (line 204) — NOT-TESTED formula. (3) `arbitrum-one-mainnet` as the network flag value (line 68) — NOT-TESTED. (4) `arb-mainnet.g.alchemy.com` Alchemy endpoint format (line 93) — NOT-TESTED |
| 6.2 | Code/commands tested | NOT-TESTED | All code blocks (livepeer flags, Docker run commands, systemd unit, nvidia-smi) NOT-TESTED. Risk HIGH for Docker run examples — volume paths and flag ordering must be correct |
| 6.3 | No deprecated API usage | NOT-TESTED | Open REVIEW comment at line 78: `{/* REVIEW: Confirm current testnet network flag value - arbitrum-one-rinkeby is deprecated. Rick to advise replacement. */}` — explicitly flags a potentially deprecated value. Risk: MEDIUM |
| 6.4 | Numbers are real | NOT-TESTED | `500-2,000 wei per pixel` price range, `÷ 6 Mbps per stream` bandwidth formula, `0.8 margin`, default port `8935`/`8936`. NOT-TESTED |
| 6.5 | REVIEW flags for unverified claims | FAIL | Four open REVIEW comment blocks: (1) Line 78: testnet flag deprecated — `arbitrum-one-rinkeby` replacement not confirmed. (2) Line 97: same testnet flag reference inline. (3) Line 444: ETH passphrase flag name (`-ethPassword`) not confirmed. (4) Line 471: native `-config` flag — may not exist. All four are named SME (Rick) but no resolution recorded |
| 6.6 | `veracityStatus` honest | FAIL | Field absent + 4 open REVIEW flags. Fix: `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | INFO | `tools.livepeer.cloud` price reference (line 229) — external live URL. Staleness risk MEDIUM. `livepeer/go-livepeer:master` Docker image tag (line 353) — using `master` rather than a pinned version. Staleness risk HIGH in production context. The page itself notes "Pin to a specific tag in production" for `-aiRunnerImage` — same advice should apply to the Docker image tag in the Docker run example |
| 6.9 | No open-ended research tasks | FAIL | All 4 REVIEW items are named-SME but unresolved. They are concrete enough (specific flag names, specific person) but not closed. Each one needs a resolution written inline before `status: current` is valid |

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed: `"v2/orchestrators/setup/configure"` at docs.json line 2863 |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/setup/configure.mdx`, matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check |
| 7.4 | No structural orphans | PASS | Reachable from docs.json navigation |
| 7.5 | Audience journey complete | PASS | Position is correct: rs-install → configure → connect-and-activate. Reader builds startup command here, then activates on next page |
| 7.6 | Cross-tab graduation paths | INFO | No cross-tab links. Tab-level gap — logged separately |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/setup/` — publishable lane |
| 7.8 | File naming conventions | PASS | `configure.mdx` — no required prefix. Acceptable |
| 7.9 | `_workspace/` TTL compliance | N/A | Publishable lane |

---

## Category 8 — Links & Rendering

Internal links on this page:
1. `/v2/orchestrators/setup/rs-install` (line 53) — Prerequisites block
2. `/v2/orchestrators/setup/sc-connect` (line 54) — Prerequisites block
3. `/v2/orchestrators/guides/deployment-details/requirements` (line 55) — Prerequisites block
4. `/v2/orchestrators/guides/deployment-details/setup-options` (line 160) — Step 4 inline
5. `/v2/orchestrators/guides/deployment-details/requirements` (line 202) — Step 6 inline
6. `https://tools.livepeer.cloud/ai/network-capabilities` (line 229) — Step 7
7. `#adding-ai-inference` (line 187) — Step 5 Note anchor link
8. `#adding-ai-inference` (line 214) — Step 6 Note anchor link
9. `/v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` (line 373) — AI Accordion inline
10. `/v2/orchestrators/setup/sc-connect` (line 482 Card) — Next Steps
11. `/v2/orchestrators/setup/activate` (line 485 Card) — Next Steps
12. `/v2/orchestrators/resources/technical/cli-flags` (line 488 Card) — Next Steps

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | **Broken links found:** (1) `/v2/orchestrators/setup/sc-connect` (lines 54, 482) — NOT in docs.json. docs.json Setup group contains: `guide`, `rcs-requirements`, `rs-install`, `configure`, `connect-and-activate`, `test`, `r-monitor` — no `sc-connect` entry. BROKEN. (2) `/v2/orchestrators/setup/activate` (line 485 Card) — NOT in docs.json. Same setup group reviewed. No `activate` entry. BROKEN. (3) `/v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` (line 373) — `workloads-and-ai` group not found in docs.json. Guides under orchestrators use `ai-and-job-workloads/` not `workloads-and-ai/`. BROKEN. (4) `/v2/orchestrators/guides/deployment-details/requirements` (lines 55, 202) — `requirements` not found in docs.json deployment-details group (contains `setup-options`, `siphon-setup`, `dual-mode-configuration`, `orchestrator-transcoder-setup`, `join-a-pool`). BROKEN. **Valid links confirmed:** `rs-install` ✓ (line 2862), `setup-options` ✓ (line 2885), `cli-flags` ✓ (line 2976) |
| 8.2 | All external links live | NOT-TESTED | `tools.livepeer.cloud` — not fetched. Risk LOW |
| 8.3 | All snippet imports resolve | PASS | `LinkArrow`, `StyledTable/TableRow/TableCell`, `CustomDivider` all imported from existing snippet paths. `Steps`/`Step` used natively (no import) — see Cat 5.10 |
| 8.4 | All images load | N/A | No images |
| 8.5 | Page renders without error | NOT-TESTED | Not executed. Risk: MEDIUM (native vs styled Steps, broken links may cause render warnings) |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Four `{/* REVIEW: ... */}` comment blocks (lines 78, 97, 444, 471) — open SME queries in a publishable file. See CC-1 |

**Broken link summary (4 broken):**
- `/v2/orchestrators/setup/sc-connect` — fix: update to `/v2/orchestrators/setup/connect-and-activate` (the page that exists in docs.json at line 2864)
- `/v2/orchestrators/setup/activate` — fix: same as above, or confirm if a separate activate page was moved into `connect-and-activate`
- `/v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` — fix: path should likely be `/v2/orchestrators/guides/ai-and-job-workloads/` + correct slug (no `batch-ai-setup` page visible in docs.json ai-and-job-workloads group — needs SME confirmation of target)
- `/v2/orchestrators/guides/deployment-details/requirements` — fix: check if this was renamed. No `requirements` page in deployment-details. Nearest: `rcs-requirements` in setup group (`v2/orchestrators/setup/rcs-requirements`). Confirm with SME.

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off |
| 9.2 | All consuming decisions in registry | INFO | No unusual structural decisions detected |
| 9.3 | Gate prerequisites met | FAIL | Tab-level: IA not approved, terminology not locked (CLAUDE.md gate table). Same as test.mdx |
| 9.4 | Phase ordering respected | INFO | Cannot confirm without session history |
| 9.5 | Findings gathered before fixes | INFO | This report is the findings-first step |
| 9.6 | Feedback routed | INFO | Pending report completion |

---

## Banned Construction Scan

Scope: all visible text including body prose, headings, Tip, Note, Warning, table cells, card descriptions, CustomDivider middleText props, Accordion titles, Step titles.

CustomDivider middleText props: `"Essential Flags"`, `"Full Command"`, `"Adding AI Inference"`, `"Variants"` — no banned constructions. Note: CustomDivider has additional `style` props — these are not visible text.

Step titles (visible): `Set the network`, `Connect to Arbitrum RPC`, `Set the Ethereum account (optional)`, `Enable Orchestrator and Transcoder mode`, `Select the GPU`, `Set the session limit`, `Set the price`, `Set the service address` — no banned constructions.

Accordion titles: `AI worker flags`, `Docker - full Orchestrator in a container`, `systemd service`, `Config file pattern` — `Docker - full Orchestrator in a container` contains ` - ` separator (same style concern as description; not an em-dash).

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|----------------|--------------|----------------|-------|
| 49 | "This page covers the go-livepeer flags needed to run as an Orchestrator. By the end, a working startup command is ready and each flag is understood." | `This page covers` | banned construction (self-reference) | YES — FAIL |
| 61 | "These flags must be set every time go-livepeer starts as an Orchestrator." | — | factual | No |
| 71 | "Tells go-livepeer which network to connect to. The default is `offchain` - without this flag the node does not participate in the Livepeer protocol at all." | `if` (implicit) | procedural/factual | No |
| 109 | "If omitted, go-livepeer creates a new account and prompts for a passphrase to encrypt the keystore." | `if` | conditional caveat (option branch) | No |
| 125 | "`-orchestrator` enables the on-chain protocol role - the node participates in job routing, makes reward calls, and is visible to Gateways." | — | factual | No |
| 128–129 | "`-transcoder` enables local GPU transcoding - the node processes jobs using its GPU. Use both together for the standard combined setup where one machine handles all roles." | — | factual/procedural | No |
| 170–171 | "Omitting this flag falls back to CPU transcoding, which is **significantly** slower and not competitive on the network." | `significantly` | banned word | YES — FAIL |
| 187–188 | "For AI-only operation (no video transcoding), `-transcoder` is not required but `-nvidia` is still needed to expose the GPU to AI runner containers." | `can` not present; conditional factual | conditional caveat | No |
| 199 | "Sets the maximum concurrent transcoding sessions the node accepts. The default is 10. Set it to the **minimum of the hardware limit and the bandwidth limit**." | — | procedural | No |
| 229–232 | "Setting this in ETH **rather than** wei results in a price orders of magnitude below market rate. Setting it too high means Gateways route jobs to lower-priced Orchestrators instead." | `rather than` | banned phrase | YES — FAIL |
| 251–266 | "Declares the public address at which Gateways reach the Orchestrator... **Common mistakes:**..." | — | factual/technical | No |
| 291–300 | "On first run with a new account (omitting `-ethAcctAddr`), go-livepeer prompts for a passphrase to create and encrypt a new keystore. This passphrase is required on every subsequent start." | — | factual | No |
| 343–345 | "**When running in Docker**, the AI Orchestrator needs access to the Docker socket to manage AI runner containers:" | — | conditional factual (deployment variant) | No |
| 362–365 | "The AI Orchestrator uses port **8936** by default to avoid conflict with a transcoding Orchestrator on the same machine (which uses 8935). Set `-serviceAddr` accordingly." | — | factual | No |
| 367–370 | "With Docker-out-of-Docker, the `-aiModelsDir` path must be a path on the **host machine**, not inside the container. Docker uses this path to mount model files into AI runner containers it spawns." | `not inside the container` | `not [X]` construction | BORDERLINE — the positive statement follows immediately and is the actionable instruction. The `not` is needed here for precision to prevent a common error. Flag as BORDERLINE |
| 372–373 | "For the full guide to configuring `aiModels.json` and receiving the first AI job, see [Batch AI Setup link]." | — | navigational | No |
| 402–403 | "Mount `~/.lpData/` so the keystore and data persist between container restarts. Without this mount, a new ETH account is created on every run." | `Without this mount` | `not [X]` variant | BORDERLINE — same pattern as above. Negative consequence stated to prevent error. Flag as BORDERLINE |
| 468–469 | "In a systemd unit file, this requires an `ExecStart` wrapper shell script rather than calling the binary directly - systemd does not perform shell expansion in `ExecStart`." | `rather than` | banned phrase (second instance) | YES — FAIL |

**Banned word scan (candidates):**
- `effectively` — NOT FOUND
- `essentially` — NOT FOUND
- `basically` — NOT FOUND
- `meaningful` / `meaningfully` — NOT FOUND
- `significant` / `significantly` — FOUND: line 171. FAIL
- `real` (as intensifier) — NOT FOUND
- `various` — NOT FOUND
- `several` — NOT FOUND
- `obviously` — NOT FOUND
- `clearly` — NOT FOUND
- `simply` — NOT FOUND

**Summary of construction violations found:**
1. Line 49: `This page covers` — FAIL
2. Line 171: `significantly` — FAIL
3. Line 232: `rather than` — FAIL
4. Line 469: `rather than` (second instance) — FAIL

**BORDERLINE (human review):**
- Line 368: `not inside the container` — negative construction used to prevent a common error. The positive statement follows. Human review recommended before fixing
- Line 402: `Without this mount` — same pattern

---

## Spelling/Typo Check

Scan of all visible text: headings, step titles, prose, table cells, accordion titles, card descriptions, code block filenames, CustomDivider labels.

- `pricePerUnit` — correct camelCase
- `maxSessions` — correct camelCase
- `serviceAddr` — correct camelCase
- `ethAcctAddr` — correct camelCase
- `ethUrl` — correct camelCase
- `aiModels.json` — correct
- `aiModelsDir` — correct
- `aiRunnerImage` — correct
- `aiWorker` — correct
- `orchestrator-transcoder` — correct hyphenation
- `keystore` — correct
- `passphrase` — correct
- `daemon-reload` — correct
- `WantedBy=multi-user.target` — correct systemd syntax
- `ExecStart` — correct systemd key
- `Restart=on-failure` — correct
- `RestartSec=10` — correct
- Card title "Connect to Arbitrum" — correct
- Card title "Activate on the network" — correct
- Card title "CLI reference" — correct

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `instruction` pageType? | Notes |
|-----------|-------|----------------------------------------|-------|
| `LinkArrow` | Yes | NOT-TESTED (catalog not read) | Inline cross-page link component |
| `StyledTable / TableRow / TableCell` | Yes | NOT-TESTED | Appropriate for flag reference tables |
| `CustomDivider` | Yes | NOT-TESTED | Section separator; has inline `style` props |
| `Steps / Step` (native Mintlify) | Yes | PASS — Steps is in Preferred for `instruction` | No import — native Mintlify component. Consistent with instruction pattern |
| `Accordion / AccordionGroup` | Yes | NOT-TESTED | Used for optional/variant content. Not in explicit Preferred column for `instruction` per checks.mdx matrix |
| `CardGroup / Card` | Yes | NOT-TESTED | Used for Next Steps. Not in explicit Preferred column for `instruction` |
| `Note` | Yes | PASS — Note is in Preferred for `instruction` | |
| `Warning` | Yes | PASS — Warning is in Preferred for `instruction` | |

**Component check is NOT-TESTED for approval status** (catalog not read). No obviously forbidden components present. `Accordion` and `CardGroup` usage appears consistent with other setup pages.

---

## Cross-Category Connections

```
Root Cause CC-1: veracityStatus absent + status: current + 4 open REVIEW flags
Affects: Cat 1.8 + Cat 6.5 + Cat 6.6 + Cat 6.9 + Cat 8.6 + Cat 9.1
Fix: (1) Add `veracityStatus: unverified` to frontmatter. (2) Resolve REVIEW comments at lines 78, 97 (testnet flag — Rick), 444 (passphrase flag — Rick), 471 (native config flag — Rick). (3) Either change `status: current` → `status: draft` now, or resolve all 4 REVIEW items + test procedures, then set `veracityStatus: verified`.
```

```
Root Cause CC-2: Self-referential opening construction
Affects: Cat 2.4 + Cat 2.5 + Cat 2.10
Fix: Delete line 49: "This page covers the go-livepeer flags needed to run as an Orchestrator." Delete line 50: "By the end, a working startup command is ready and each flag is understood." Replace with Prerequisites block as the opening orientation, removing the prose intro entirely. The CustomDivider + Prerequisites block is sufficient orientation.
```

```
Root Cause CC-3: Deprecated frontmatter values in pageType; purpose field absent
Affects: Cat 1.2 + Cat 1.4 + Cat 5.7
Fix: Change `pageType: how_to` → `pageType: instruction`. Add `purpose: configure`. No other migration steps required.
```

```
Root Cause CC-4: Missing taxonomy fields (purpose, complexity, lifecycleStage, industry, niche)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.9 + Cat 1.10
Fix: Add five fields:
  purpose: configure
  complexity: intermediate
  lifecycleStage: setup
  industry: [technical, livepeer]
  niche: [infrastructure, hardware]
```

```
Root Cause CC-5: 4 broken internal links
Affects: Cat 4.5 + Cat 8.1
Broken links and proposed fixes:
  /v2/orchestrators/setup/sc-connect → /v2/orchestrators/setup/connect-and-activate
  /v2/orchestrators/setup/activate → /v2/orchestrators/setup/connect-and-activate (confirm scope merge with SME)
  /v2/orchestrators/guides/workloads-and-ai/batch-ai-setup → path unknown; SME must confirm target page slug
  /v2/orchestrators/guides/deployment-details/requirements → likely /v2/orchestrators/setup/rcs-requirements; confirm with SME
```

---

## Blocking Decisions

No blocking decisions on page purpose, audience, or scope — these are clear. However, CC-5 links require SME confirmation before fixes can be fully executed:

```
Blocking Decision BD-1: What is the correct target for the AI batch setup link?
Options: [A] /v2/orchestrators/guides/ai-and-job-workloads/[slug] / [B] Different path / [C] Remove link if target page not yet published
If A: Update line 373 to the confirmed slug
If C: Replace LinkArrow with inline text noting the guide is forthcoming
Owner: Alison / Rick
```

```
Blocking Decision BD-2: Has setup/sc-connect been merged into setup/connect-and-activate?
Options: [A] Yes — redirect all sc-connect references to connect-and-activate / [B] No — sc-connect exists but is not in nav (orphan)
If A: Update lines 54 and 482
If B: Add sc-connect to docs.json or merge content into connect-and-activate
Owner: Alison
```

```
Blocking Decision BD-3: Has setup/activate been merged into setup/connect-and-activate?
Options: [A] Yes — update line 485 card to /v2/orchestrators/setup/connect-and-activate / [B] No — create separate activate page
Owner: Alison
```

---

## Verdict

**NEEDS WORK**

**Fail count:** 17 failures across 9 categories.

**Critical fixes (blocking publication):**
1. CC-1: Add `veracityStatus: unverified`; resolve 4 REVIEW flags before changing to `current`
2. CC-3: Migrate `pageType: how_to` → `instruction`; add `purpose: configure`
3. CC-4: Add `complexity`, `lifecycleStage`, `industry`, `niche`
4. CC-5: Fix 4 broken internal links (requires BD-1, BD-2, BD-3 decisions)
5. CC-2: Remove self-referential opening (lines 49–50) — `This page covers` banned construction

**Non-blocking fixes:**
6. `significantly` at line 171 — delete (Cat 2.2)
7. `rather than` at lines 232 and 469 — rewrite both (Cat 2.3)
8. `Variants` heading — rename to `Deployment Variants` (score 19/25)
9. `Next Steps` heading — remove or rename to `Activate Your Node` (score 16/25, in Avoid list)
10. `livepeer/go-livepeer:master` Docker tag in AI example — add note to pin in production (Cat 6.8)
11. `keywords` — improve specificity (Cat 1.13)

**No banned words beyond `significantly`. 7/12 internal links verified clean. 4 broken links requiring SME confirmation before full fix.**
