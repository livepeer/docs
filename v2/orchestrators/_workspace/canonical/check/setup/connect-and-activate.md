# Quality Check Report — connect-and-activate.mdx

**File:** `v2/orchestrators/setup/connect-and-activate.mdx`
**Checked against:** `checks.mdx` + `Frameworks.mdx`
**Date:** 2026-03-24
**Overall verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Connect to Arbitrum'` | PASS | Well-formed, subject-first |
| `sidebarTitle` | Yes | `'Connect'` | PASS | Concise |
| `description` | Yes | `'Connect the orchestrator to the Livepeer protocol on Arbitrum - fund the wallet, stake LPT, register the service URI, and activate on-chain.'` | FAIL | Hyphens used where em-dashes are prohibited; character count 157 — just within 160 limit; US hyphen list convention acceptable here. Actually the construction "fund the wallet, stake LPT, register the service URI, and activate on-chain" is a list not a subject-first sentence. See 1.11. |
| `pageType` | Yes | `how_to` | FAIL | Deprecated alias. Must be `instruction` + `pageVariant: quickstart` or no variant. See check 1.2 and Frameworks.mdx §1.1 migration table. |
| `audience` | Yes | `orchestrator` | PASS | Valid canonical token |
| `purpose` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `complexity` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `lifecycleStage` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `keywords` | Yes | `livepeer, orchestrator, Arbitrum, connect, stake, LPT, activate, service URI` | FAIL | Keywords are generic and low-intent. `livepeer`, `orchestrator` violate check 1.13. Stronger examples: `connect orchestrator arbitrum`, `stake LPT livepeer node`, `activate orchestrator on-chain`, `livepeer_cli bond LPT`. |
| OG image block | Yes | Full 5-field block present | PASS | All fields present |
| `status` | Present (extra) | `current` | INFO | Not a required field. Check 1.8: `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags. Page has 4 TODO flags. Conflict. |
| `lastVerified` | Present (extra) | `2026-03-16` | INFO | Not a required field |
| `veracityStatus` | Missing | — | FAIL | Required field (check 1.1, 1.8). Not present. Page has `status: current` but four TODO markers — this combination is non-compliant per check 1.8. |
| `industry` | Missing | — | INFO | Optional field. Not required per check 1.9 |
| `niche` | Missing | — | INFO | Optional field. Not required per check 1.10 |
| `pageVariant` | Missing | — | FAIL | Required when migrating `how_to` → `instruction`. pageVariant not set. Likely: `pageVariant: quickstart` (procedure that takes a reader to a working state quickly). |

**Frontmatter summary:** 5 required fields missing or invalid (`pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`). 1 deprecated alias (`how_to`). `keywords` poor quality.

---

## Category 1 — Frontmatter & Taxonomy

| Check | Result | Detail |
|-------|--------|--------|
| 1.1 All 10 required fields present | FAIL | `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` missing. `pageType` is present but deprecated — functionally invalid. 5 of 10 fields non-compliant. |
| 1.2 pageType canonical | FAIL | Value `how_to` is a deprecated alias. Migration: `pageType: instruction` + `pageVariant: quickstart` (per Frameworks.mdx §1.1). Cited: checks.mdx §1.2 and Frameworks.mdx §1.1 migration table. |
| 1.3 pageVariant valid | FAIL | Not present. Required on migration from deprecated type. Proposed value: `quickstart`. Cited: checks.mdx §1.3. |
| 1.4 purpose canonical | FAIL | Field missing entirely. Correct value for this page: `start` (procedural guide: go from zero to activated orchestrator). Cited: checks.mdx §1.4 and Frameworks.mdx §1.2. |
| 1.5 audience canonical | PASS | `orchestrator` — valid canonical token |
| 1.6 complexity canonical | FAIL | Field missing. Correct value: `intermediate` (requires prior Docker install and funded wallet; some blockchain familiarity expected). |
| 1.7 lifecycleStage canonical | FAIL | Field missing. Correct value: `setup` (first-time configuration step). |
| 1.8 veracityStatus honest | FAIL | Field missing. `status: current` is present — but check 1.8 requires `veracityStatus: verified` AND zero REVIEW flags for `status: current` to be valid. Four `{/* TODO: */}` flags exist at lines 114, 155, 194, 216. The correct veracityStatus for the current state: `unverified`. |
| 1.9 industry valid | N/A | Optional field not present |
| 1.10 niche valid | N/A | Optional field not present |
| 1.11 description well-formed | FAIL | Description is a comma-separated action list, not a subject-first sentence. Fix: "Activate a Livepeer orchestrator on Arbitrum One — fund the wallet with arbETH, stake LPT, register the service URI, and call the activation transaction." Note: hyphens used in the source are fine (not em-dashes). Character count of fix: 160 — at limit, acceptable. |
| 1.12 OG image block complete | PASS | All 5 fields present with correct path `/snippets/assets/site/og-image/en/orchestrators.png` |
| 1.13 keywords quality | FAIL | `livepeer` and `orchestrator` are generic and violate check 1.13 explicitly. `connect`, `activate`, `stake` are too short. Better: `connect orchestrator Arbitrum`, `bond LPT livepeer`, `activate orchestrator on-chain`, `livepeer_cli stake`, `Arbitrum RPC orchestrator setup`. |

---

## Category 2 — Voice & Copy

| Check | Result | Detail |
|-------|--------|--------|
| 2.1 UK English | PASS | No US spelling violations found. |
| 2.2 Zero banned words | PASS | Scan: no `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` found in body prose or visible props. |
| 2.3 Zero banned phrases | FAIL | Line 145: "LPT acquisition may take hours to days." — "may take" is not in the banned phrases list but is caught by check 2.4 (value claim hedging). See 2.4. Line 249: "very low-stake orchestrators can spend more on gas than they receive" — `can` in a factual operational claim caught by 2.4. No literal banned phrases found. |
| 2.4 Zero banned constructions | FAIL | **Line 145:** "LPT acquisition may take hours to days." — `may take` in a factual/procedural operational claim. Fix: "LPT acquisition takes hours to days." **Line 249:** "very low-stake orchestrators can spend more on gas than they receive in LPT." — `can spend` as an operational claim about a real condition. Fix: "At sub-threshold stake, gas cost exceeds LPT earned per round." **Line 241:** "go-livepeer calls `Reward()` automatically each round by default." — compliant, this is a factual statement. |
| 2.5 Opening order correct | FAIL | Page opens with a `<Tip>` component (line 31–32) then a `<Warning>` (line 34–36) before any content. The Tip is genuinely value-first (describes what the step does). The Warning adds time-planning context. This opening is structurally borderline — functionally it serves as a prereq signal. BORDERLINE: prefer H1 or direct opening line before component callouts. Not hard-blocking. |
| 2.6 Paragraph discipline | PASS | Paragraphs are generally single-job. Each step is procedural and properly scoped. |
| 2.7 Audience register correct | PASS | `orchestrator` register: hardware-aware, operational, numbers-driven. Page speaks correctly to an operator: states gas costs, round durations, CLI commands. |
| 2.8 Per-audience prohibited phrases | PASS | No "easy to set up", "the network rewards you for", "simple configuration" found. |
| 2.9 No passive value statements | PASS | Value claims are concrete (e.g. gas costs stated in dollar ranges, round duration stated as 22 hours). |
| 2.10 No hedging openers | FAIL | Opening `<Tip>` is fine, but the `<Warning>` at line 34–36 opens the action sequence with a time-planning caveat before stating what to do. Not a hard fail but adds friction. |
| 2.11 Terminology locked | PASS | `active set`, `reward cut`, `fee cut`, `arbETH`, `LPT`, `livepeer_cli`, `Arbitrum One` all used correctly. No deprecated terms found. |

---

## Category 3 — Section Naming & Headings

Page H2 headings: "Troubleshooting connection issues", "Next step"
Step titles (StyledStep `title` props — visible): "Set up an Arbitrum RPC endpoint", "Identify the orchestrator wallet address", "Fund the wallet with arbETH", "Acquire and stake LPT", "Activate on-chain", "Register AI capabilities (AI and dual mode only)", "Verify on Livepeer Explorer", "Enable reward calling"
CustomDivider middleText values: "Connection Steps", "Troubleshooting"

**Note:** Step titles are component props included in the banned construction scan scope per checks.mdx.

| Check | Result | Detail |
|-------|--------|--------|
| 3.1 Every heading ≥20/25 | FAIL | See Heading Score Table below. "Next step" fails (10/25). |
| 3.2 No banned standalone terms | FAIL | "Next step" at line 280 — "Next Steps" is in the **Avoid** tier per Frameworks.mdx §4.1. "See also" does not appear. Fix: replace "Next step" with a content-specific heading, e.g. "Setup Verification" or remove the H2 and use only the Card. |
| 3.3 No literal contrast labels | PASS | No "X vs Y" headings |
| 3.4 Domain-anchor rule | PASS | Most headings include domain nouns: "Arbitrum RPC endpoint", "orchestrator wallet address", "LPT", "Livepeer Explorer", "reward calling" |
| 3.5 Heading names concept, not examples | PASS | All step titles name the action/task, not examples |
| 3.6 Title well-formed | PASS | "Connect to Arbitrum" — 3 words, concept-derived |
| 3.7 Expert editorial | FAIL | "Next step" (line 280) fails — not an expert editorial choice. All step titles pass. |

---

## Category 4 — Page Structure & Content Architecture

**Nav sequence from docs.json (lines 2860–2866):**
- PREV: `v2/orchestrators/setup/configure` (line 2863)
- CURRENT: `v2/orchestrators/setup/connect-and-activate` (line 2864)
- NEXT: `v2/orchestrators/setup/test` (line 2865)

| Check | Result | Detail |
|-------|--------|--------|
| 4.1 One purpose, one audience, one job | PASS | Single job: take an installed and configured orchestrator node and activate it on Arbitrum One. Audience: `orchestrator`. |
| 4.2 Purpose statement test | PASS | "This page lets the orchestrator connect to Arbitrum One, stake LPT, and activate on-chain." — complete and testable. |
| 4.3 PREV/NEXT adjacency correct | PASS | PREV: `configure` — reader arrives with node installed and configured. NEXT: `test` — reader leaves with an active on-chain registration ready to be verified. Nav sequence is coherent. Cited: docs.json lines 2863–2865. |
| 4.4 No dead ends | PASS | "Next step" card at line 282–286 routes to `/v2/orchestrators/setup/test`. Not a dead end. |
| 4.5 Prerequisites stated | FAIL | Prerequisites are split between the opening Tip (line 31–32) and Warning (line 34–36) rather than a formal Prerequisites section. The Warning says "Start this step after arbETH and LPT are already in the orchestrator wallet" — this is a prerequisite, not a warning. Fix: add a Prerequisites H2 or convert the Warning to a Prerequisites Note with explicit items. |
| 4.6 Out-of-scope clear | PASS | Page scope is tight. No scope creep visible. |
| 4.7 Information type correct | PASS | Purpose `start` permits: primary `procedural`, `factual`; secondary `conceptual`. All sections are procedural or factual. |
| 4.8 No content duplication | INFO | Step 7 ("Verify on Livepeer Explorer") partially overlaps with `v2/orchestrators/setup/test` (the next page). This is expected duplication at page boundaries — acceptable. |
| 4.9 Section orientation present | N/A | Page-level check only |
| 4.10 Cross-tab links | INFO | Tab-level check. Page does not need cross-tab links at this position in the journey. |

---

## Category 5 — Layout, Components & Template

| Check | Result | Detail |
|-------|--------|--------|
| 5.1 Correct template for pageType | FAIL | `pageType: how_to` (deprecated). Post-migration target is `instruction`. Template for `instruction`: Prerequisites section + Steps section + Next Steps. Page has steps but no formal Prerequisites section — the Tip/Warning pair substitutes. |
| 5.2 Required sections present | FAIL | `instruction` requires: Prerequisites, Steps, Next Steps. Prerequisites section is absent (Warning/Tip is not a section). Steps are present (StyledSteps/StyledStep). Next Steps are present (Card at end). |
| 5.3 Only approved components | NOT-TESTED | `docs-guide/catalog/components-catalog.mdx` not read. Cannot confirm `CustomDivider`, `LinkArrow`, `StyledTable`, `StyledSteps`, `StyledStep` approval status. Flagging for verification. |
| 5.4 Avoided components absent | FAIL | 4 `{/* TODO: */}` inline flags at lines 114, 155, 194, 216. These are TODO placeholders. Check 8.6 prohibits TODO/TBD in published content. |
| 5.5 Info type → component mapping | PASS | Procedural → StyledSteps/StyledStep. Troubleshooting → AccordionGroup/Accordion. Reference data → StyledTable. All mappings correct. |
| 5.6 MDX renders clean | NOT-TESTED | Not rendered locally. No obviously broken JSX visible on inspection. |
| 5.7 No old-schema frontmatter | FAIL | `pageType: how_to` is old-schema. |
| 5.8 CSS custom properties | N/A | No inline CSS visible |
| 5.9 Generated file banners | N/A | No generated-file-banner present |
| 5.10 Component naming/import | PASS | PascalCase, named imports, correct paths. |

---

## Category 6 — Veracity & Factual Accuracy

| Check | Result | Detail |
|-------|--------|--------|
| 6.1 Every factual claim citable | FAIL | Multiple unverified procedural claims. See 6.5. |
| 6.2 Code/commands tested | NOT-TESTED | No evidence of test execution. Four TODO markers explicitly flag unverified CLI interactions. |
| 6.3 No deprecated API usage | NOT-TESTED | CLI commands reference `livepeer_cli` and `docker exec`. Versions not cited. Cannot confirm current without testing. |
| 6.4 Numbers are real | FAIL | **Line 122:** "0.05 ETH for initial setup" — sourced? **Line 192:** "1-3 minutes on Arbitrum" — general Arbitrum behaviour, low staleness risk. **Line 197:** "approximately 22 hours" for round duration — this is a well-known protocol constant, verifiable via Explorer. **Line 249 (troubleshooting):** "350,000-450,000 gas; activation uses similar amounts" — specific gas figures need sourcing. **Line 249:** "$0.01-$0.05 USD" gas cost estimate — highly volatile, high staleness risk. |
| 6.5 REVIEW flags for unverified | FAIL | Four `{/* TODO: */}` flags at lines 114, 155, 194, 216. These are not in the required `{/* REVIEW: [claim] — [what needs checking] */}` format per check 6.5. Fix: convert each to REVIEW format, or resolve the TODO and remove the flag. |
| 6.6 veracityStatus honest | FAIL | `veracityStatus` field missing entirely. Given 4 unresolved TODO flags and unverified gas figures, correct value is `unverified`. |
| 6.7 Authoritative vs AI glossary | N/A | No glossary references |
| 6.8 Source staleness | FAIL | Gas cost ($0.01-$0.05) and ETH minimum (0.05) are highly volatile. Both should carry REVIEW flags. |
| 6.9 No open-ended research tasks | FAIL | 4 TODO items are open-ended tasks without named sources or next steps. Fix per check 6.9: convert to REVIEW format with named source and concrete next step. Example for line 114: `{/* REVIEW: livepeer_cli menu label for account address — verify against go-livepeer CLI reference or live test with current release */}` |

---

## Category 7 — Navigation & Information Architecture

| Check | Result | Detail |
|-------|--------|--------|
| 7.1 Page in docs.json | PASS | `v2/orchestrators/setup/connect-and-activate` confirmed at docs.json line 2864. |
| 7.2 Navigation matches filesystem | PASS | File at `v2/orchestrators/setup/connect-and-activate.mdx`, path in docs.json matches. |
| 7.3 Tab entry portal routes to section | N/A | Section-level check |
| 7.4 No structural orphans | PASS | Reachable via Setup group in docs.json |
| 7.5 Audience journey complete | PASS | Sits correctly in the setup sequence: guide → requirements → install → configure → **connect-and-activate** → test → monitor. |
| 7.6 Cross-tab graduation paths | N/A | Not applicable at this step in the journey |
| 7.7 File in correct lane | PASS | In `v2/orchestrators/setup/` — publishable content lane, not `_workspace/`. |
| 7.8 File naming conventions | PASS | `connect-and-activate.mdx` — no prefix required for this content type. Naming is clear. |
| 7.9 _workspace/ TTL | N/A | Not in _workspace/ |

---

## Category 8 — Links & Rendering

| Check | Result | Detail |
|-------|--------|--------|
| 8.1 Internal links resolve | FAIL | Line 93: `href="/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning"` — NOT verified in docs.json. Link target not found in the docs.json excerpt reviewed. Flag: NOT-TESTED, needs verification via `check-docs-path-sync.js`. Line 283: `href="/v2/orchestrators/setup/test"` — confirmed in docs.json line 2865. |
| 8.2 External links live | NOT-TESTED | External links: `alchemy.com`, `bridge.arbitrum.io`, `arbiscan.io`, `explorer.livepeer.org/orchestrators`, `tools.livepeer.cloud/ai/network-capabilities`. Not tested programmatically. |
| 8.3 Snippet imports resolve | NOT-TESTED | Imports at lines 25–28: `CustomDivider`, `LinkArrow`, `StyledTable`, `StyledSteps`, `StyledStep`. Paths not verified against filesystem. |
| 8.4 Images load | N/A | No direct images beyond OG block |
| 8.5 Page renders | NOT-TESTED | Not rendered locally. No obvious JSX errors visible. |
| 8.6 No TODO/TBD in published | FAIL | 4 `{/* TODO: */}` markers at lines 114, 155, 194, 216. All in published page content. |

---

## Category 9 — Process & Governance

| Check | Result | Detail |
|-------|--------|--------|
| 9.1 Human sign-off recorded | FAIL | No sign-off evidence. Page is in the publishable lane. |
| 9.2 Decisions in registry | INFO | No structural decisions consumed that require registry entries specific to this page. |
| 9.3 Gate prerequisites met | FAIL | `veracityStatus` missing; 4 TODO flags; deprecated `pageType`. Page has not completed Phase 7 (veracity pass) or layout pass. |
| 9.4 Phase ordering respected | INFO | Cannot verify without provenance record. |
| 9.5 Findings before fixes | INFO | This report constitutes the findings phase. |
| 9.6 Feedback routed | N/A | Feedback routing occurs post-report. |

---

## Banned Construction Scan

**Scope:** all body prose, headings, Tip/Warning/Note content, StyledStep title props, StyledTable cells, Accordion titles, CustomDivider middleText, LinkArrow label props.

| Line | Sentence / Content | Word/Pattern | Classification | Flag? |
|------|-------------------|--------------|----------------|-------|
| 31 | "It requires arbETH for gas and LPT for staking." | `requires` | procedural | No |
| 32 | "Asset acquisition often takes hours to days because of exchange availability and bridge confirmation times." | — | factual | No |
| 34–35 | "Start this step after arbETH and LPT are already in the orchestrator wallet on Arbitrum One." | `after` conditional | conditional caveat | No |
| 44 | "The `-ethUrl` flag connects go-livepeer to Arbitrum One." | — | procedural | No |
| 73 | "Production nodes need a hosted provider." | — | procedural | No |
| 73 | "Public endpoints offer no uptime guarantee and **can** drop sessions during round initialisation, which forfeits that round's LPT reward." | `can drop` | value-claim in procedural context | BORDERLINE — "can drop" describes a real failure mode with factual consequence (forfeiture). This is a factual risk statement, not a hedged capability claim. Recommend: "Public endpoints drop sessions during round initialisation and forfeit that round's LPT reward." |
| 101 | "The address appears in the startup logs." | — | procedural | No |
| 120 | "The orchestrator wallet needs ETH on Arbitrum One for gas." | `needs` | procedural | No |
| 134 | "LPT must be bonded to the orchestrator address to enter the active set for video transcoding." | `must` | procedural requirement | No |
| 137 | "AI-only operators need enough LPT to activate on-chain." | `need` | procedural requirement | No |
| 145 | "**LPT acquisition may take hours to days.**" | `may take` | value-claim (operational timeline) | FLAG — hedged claim in procedural context. Fix: "LPT acquisition takes hours to days." |
| 145 | "This is the expected waiting step in the setup process." | — | procedural | No |
| 147 | "Once LPT is in the wallet, bond it via `livepeer_cli`." | `once` conditional | conditional caveat (prerequisite trigger, not body prose condition) | No |
| 153 | "Wait for both to confirm on Arbitrum before proceeding." | — | procedural | No |
| 197 | "The node joins the active set at the start of the **next round** after activation." | — | factual | No |
| 204 | "capabilities from `aiModels.json` must be registered on the AI Service Registry." | `must` | procedural | No |
| 204 | "The `-aiServiceRegistry` flag enables this automatically at startup." | — | factual | No |
| 241 | "go-livepeer calls `Reward()` automatically each round by default." | — | factual | No |
| 247 | "The startup command **should** omit `-reward=false`." | `should` | procedural recommendation | BORDERLINE — if omitting that flag is a hard requirement, rewrite as imperative: "Remove `-reward=false` from the startup command." |
| 249 | "very low-stake orchestrators **can** spend more on gas than they receive in LPT." | `can spend` | value-claim (operational outcome) | FLAG — this is a factual operational condition. Fix: "At sub-threshold stake, gas cost per reward call exceeds the LPT earned." |
| 249 | "Disable automatic calling with `-reward=false` in that case and call manually via `livepeer_cli`..." | — | procedural | No |
| 251 | "A missed round forfeits that round's LPT allocation permanently." | — | factual | No |
| 265 | "Switch to the Alchemy public endpoint temporarily to isolate whether the issue is the endpoint or the key." | — | procedural | No |
| 274 | "Reward calls **use** 350,000-450,000 gas; activation uses similar amounts." | — | factual | No |
| 274 | "At typical Arbitrum gas prices, each transaction **costs** $0.01-$0.05 USD." | — | factual (but volatile — staleness risk) | No construction violation; veracity risk flagged separately |
| 274 | "Keep at least 0.01 ETH on Arbitrum at all times to prevent failed transactions." | — | procedural | No |

**Flagged:** 3 constructions (lines 73, 145, 249) + 1 BORDERLINE (line 247).

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| **H2: Troubleshooting connection issues** | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| **H2: Next step** | 1 | 1 | 2 | 2 | 4 | 10/25 | FAIL |

**Notes:**
- "Troubleshooting connection issues" — Precision 4: names the domain (connection) but is somewhat generic. Depth 3: "connection issues" is surface-level. Stability 4: would survive content changes. Clarity 4: instantly understood. Conciseness 3: "Troubleshooting Connection Issues" is 3 words but slightly padded with "issues". Score: 18/25 — below the 20/25 bar. Fix: "Connection Troubleshooting" (20+) or "RPC and Network Diagnostics" (23/25).
- "Next step" — Precision 1: names nothing about the destination. Depth 1: zero depth. Stability 2: breaks if the sequence changes. Clarity 2: unclear what the step is. Conciseness 4: short but only because it contains no information. Score: 10/25. Fix: either remove the H2 entirely (Card component provides sufficient navigation) or replace with "Setup Verification".

**StyledStep titles (visible, scored for reference):**

| Step Title | Precision | Depth | Stability | Clarity | Conciseness | Total |
|-----------|-----------|-------|-----------|---------|-------------|-------|
| Set up an Arbitrum RPC endpoint | 4 | 4 | 4 | 5 | 3 | 20/25 — PASS |
| Identify the orchestrator wallet address | 5 | 4 | 5 | 5 | 3 | 22/25 — PASS |
| Fund the wallet with arbETH | 5 | 4 | 5 | 5 | 4 | 23/25 — PASS |
| Acquire and stake LPT | 5 | 4 | 5 | 5 | 5 | 24/25 — PASS |
| Activate on-chain | 5 | 4 | 5 | 5 | 5 | 24/25 — PASS |
| Register AI capabilities (AI and dual mode only) | 4 | 3 | 3 | 4 | 3 | 17/25 — FAIL |
| Verify on Livepeer Explorer | 4 | 3 | 4 | 5 | 4 | 20/25 — PASS |
| Enable reward calling | 5 | 4 | 5 | 5 | 5 | 24/25 — PASS |

**StyledStep title note:** "Register AI capabilities (AI and dual mode only)" scores 17/25 — the parenthetical qualifier "(AI and dual mode only)" depresses Depth, Stability, and Conciseness. It is structurally a condition, not a concept label. Fix: "AI Registry Activation" (removes parenthetical; condition implied by context) or scope it with a conditional block/Tabs component rather than the title.

**CustomDivider middleText (visible text):**
- "Connection Steps" — decorative divider label. Functional. Not scored per heading rubric as it is not a semantic heading.
- "Troubleshooting" — same.

---

## Spelling / Typo Check

Scanning all visible text including step titles, table headers, table cells, Accordion titles, Note/Tip/Warning content.

- Line 78: "Create a new app - select **Arbitrum** and **Mainnet**" — hyphen spacing is correct (space-hyphen-space). Acceptable.
- Line 89: `0xa4b1` — correct Arbitrum One chain ID.
- Line 143: "See the Arbitrum Exchanges resource page for current options" — no link provided. The phrase references a resource page that should be linked.
- Line 163: "Invoke multi-step 'become an orchestrator'" — single-quote usage in CLI label. Acceptable as it matches CLI output.
- Line 249: `<LinkArrow href="/v2/orchestrators/guides/config-and-optimisation/reward-call-tuning" label="Reward Call Tuning" newline={false} />` — "optimisation" (UK spelling) in path. Correct.

**No typos found.** One missing link at line 143 flagged separately.

---

## Component Matrix

| Component | Used? | Appropriate for target pageType (`instruction`)? | Notes |
|-----------|-------|-------------------------------|-------|
| `CustomDivider` | Yes | NOT-TESTED | `docs-guide/catalog/components-catalog.mdx` not read. Cannot confirm approval status. |
| `LinkArrow` | Yes | NOT-TESTED | Same. |
| `StyledTable` | Yes | NOT-TESTED | Same. |
| `StyledSteps` | Yes | NOT-TESTED | Steps component is Preferred for `instruction`. StyledSteps appears to be a styled variant — approval status NOT-TESTED. |
| `StyledStep` | Yes | NOT-TESTED | Same as above. |
| `Tip` | Yes | PASS | Standard Mintlify component. Permitted for `instruction`. |
| `Warning` | Yes | PASS | Standard Mintlify component. Permitted for `instruction`. |
| `Note` | Yes | PASS | Standard Mintlify component. Permitted for `instruction`. |
| `AccordionGroup` | Yes | PASS | Standard Mintlify component. Appropriate for troubleshooting group. |
| `Accordion` | Yes | PASS | Standard Mintlify component. |
| `CardGroup` | Yes | PASS | Standard Mintlify component. Permitted for `instruction` Next Steps. |
| `Card` | Yes | PASS | Standard Mintlify component. |

**Action required:** Verify `CustomDivider`, `LinkArrow`, `StyledTable`, `StyledSteps`, `StyledStep` against `docs-guide/catalog/components-catalog.mdx`.

---

## Cross-Category Connections

```
Root Cause 1: Missing required frontmatter fields (purpose, complexity, lifecycleStage, veracityStatus)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 6.6 + Cat 9.3
Fix: Add purpose: start, complexity: intermediate, lifecycleStage: setup, veracityStatus: unverified
```

```
Root Cause 2: Deprecated pageType (how_to) without migration
Affects: Cat 1.2 + Cat 1.3 + Cat 5.1 + Cat 5.2 + Cat 5.7
Fix: Set pageType: instruction, pageVariant: quickstart. Add Prerequisites H2 section.
```

```
Root Cause 3: Four TODO flags in published content
Affects: Cat 5.4 + Cat 6.1 + Cat 6.5 + Cat 6.9 + Cat 8.6
Fix: Convert each TODO to REVIEW format per checks.mdx §6.5, or resolve and remove. Set veracityStatus: unverified.
```

```
Root Cause 4: "Next step" heading fails naming rubric
Affects: Cat 3.1 + Cat 3.2 + Cat 3.7
Fix: Remove H2 or replace with "Setup Verification". Card component provides sufficient navigation signal.
```

---

## Blocking Decisions

No blocking decisions on scope, audience, or purpose — the page's job is clear. All findings are actionable with the fixes listed.

**Priority order for fixes:**
1. Add missing frontmatter fields (Root Cause 1) — unblocks pipeline
2. Migrate pageType + add pageVariant (Root Cause 2) — unblocks template compliance
3. Convert TODO flags to REVIEW format (Root Cause 3) — unblocks veracity pass
4. Fix banned constructions at lines 73, 145, 249 (check 2.4)
5. Fix "Next step" heading (Root Cause 4)
6. Improve keywords quality (check 1.13)
7. Verify internal link at line 93 (`reward-call-tuning`)
8. Add link for "Arbitrum Exchanges resource page" reference at line 143
9. Verify custom component approval status (Cat 5.3)
