# Per-Page Quality Check Report
## `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2883–2891

---

## Frontmatter Table

| Field | Present? | Value | Expected | Pass/Fail |
|---|---|---|---|---|
| `title` | Yes | `'Siphon Split Setup'` | Non-empty string | PASS |
| `sidebarTitle` | Yes | `'Siphon Setup'` | Non-empty string | PASS |
| `description` | Yes | `Separate reward claiming and keystore management from GPU workload processing using OrchestratorSiphon - two-machine architecture, installation, config.ini setup, systemd service, and day-to-day operations.` | ≤160 chars | FAIL — 199 chars (exceeds 160 limit). Also contains ` - ` separator. |
| `pageType` | Yes | `guide` | 7-type canonical | PASS |
| `audience` | Yes | `orchestrator` | 7-token set | PASS |
| `purpose` | Yes | `guide` | 15-value canonical | FAIL — `guide` is a pageType value placed in the purpose field (P37-b: wrong field type). Proposed: `purpose: configure` or `purpose: build` (end-to-end two-machine setup) — confirm before applying (P51) |
| `complexity` | Absent | — | required | FAIL |
| `lifecycleStage` | Absent | — | required | FAIL |
| `keywords` | Yes | 11 keywords | Specific, searcher-intent-aligned | PASS — `OrchestratorSiphon`, `split setup`, `keystore`, `reward calling`, `key isolation`, `two-machine` — specific and searcher-relevant |
| OG image block | Yes | All 5 fields present | All 5 OG fields | PASS |
| `veracityStatus` | Absent | — | required | FAIL |
| `industry` | Absent | — | Required (P41) | FAIL — Proposed: `industry: ["technical"]` — confirm |
| `niche` | Absent | — | Required (P41) | FAIL — Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| `status` | Yes | `current` | Informational | FAIL — `status: current` + no `veracityStatus` + TODO block violates §1.8 (P39) |
| `pageVariant` | Absent | — | N/A — pageType not deprecated | N/A (P42) |

**Frontmatter summary:** 8 fields fail. Description too long, purpose wrong field value, complexity absent, lifecycleStage absent, veracityStatus absent (incoherent with status: current), industry absent, niche absent.

---

## Category 1: Frontmatter & Taxonomy

| Check | Result | Detail |
|---|---|---|
| 1.1 Required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` missing |
| 1.2 pageType canonical | PASS | `guide` is canonical |
| 1.3 pageVariant | N/A |
| 1.4 purpose canonical | FAIL | `guide` is a pageType value in purpose field (P37-b). Proposed: `purpose: configure` — confirm (P51) |
| 1.5 audience | PASS | `orchestrator` canonical |
| 1.6 complexity | FAIL | Missing. Proposed: `complexity: intermediate` — confirm (P51) |
| 1.7 lifecycleStage | FAIL | Missing. Proposed: `lifecycleStage: setup` — confirm (P51) |
| 1.8 veracityStatus | FAIL | Missing. `status: current` + no `veracityStatus: verified` + TODO block + unverified procedural claims. Fix: `status: draft`, `veracityStatus: unverified` (P39) |
| 1.9 industry | FAIL | Absent. Required (P41). Proposed: `industry: ["technical"]` — confirm |
| 1.10 niche | FAIL | Absent. Required (P41). Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| 1.11 description | FAIL | 199 chars — exceeds 160. Proposed: `Use OrchestratorSiphon to isolate keystore management and reward calling from GPU workload processing on a two-machine split.` (125 chars) — confirm (P51) |
| 1.12 OG image block | PASS | All 5 fields present |
| 1.13 keywords quality | PASS | `OrchestratorSiphon`, `split setup`, `keystore`, `reward calling`, `two-machine`, `arbitrum` — specific and actionable |

**Category 1 verdict:** 8 FAIL (1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11)

---

## Category 2: Voice & Copy

| Check | Result | Detail |
|---|---|---|
| 2.1 UK English | PASS | Scan: no US spellings detected. No `-ize` endings, no `behavior`, no `color`. PASS. |
| 2.2 Banned words | PASS | Scan: `effectively` — absent; `essentially` — absent; `basically` — absent; `meaningful` — absent; `significant` — absent; `real` (intensifier) — absent; `various` — absent; `several` — absent; `obviously` — absent; `clearly` — absent. All clean. |
| 2.3 Banned phrases | PASS | Scan: `This section covers` — absent; `This page covers` — absent; `rather than` — absent; `etc.` — absent; `and so on` — absent; `among other factors` — absent; `depends on various` — absent. Line 63: "For a comparison with the O-T split and pool worker alternatives, see Alternate Deployments." — structural cross-reference, not a banned phrase. All clean. |
| 2.4 Banned constructions | FAIL | Line 509 Accordion: "Confirm pricing is within the range Gateways will accept - a `-pricePerUnit` value above the market range stops work from routing regardless of uptime" — conditional guidance. BORDERLINE — it is an operational diagnostic (appropriate for troubleshooting content). Request human review (P23). Line 178: "It does not need a GPU" — `not [X]` in value statement about secure machine. BORDERLINE — comparative description. Proposed: "GPU-free — a small VPS is sufficient." Request human review (P23). |
| 2.5 Opening order | PASS | Opens with the two risks that motivate the Siphon setup. Outcome (reward safety, keystore isolation) is the implicit value. Risk-first framing appropriate for this page. |
| 2.6 Paragraph discipline | PASS | Paragraphs focused. StyledStep content is appropriately scoped. |
| 2.7 Audience register | PASS | Technical, operational. Mentions `eth_minval`, `eth_warn`, `SIGINT`, systemd — appropriate orchestrator register. |
| 2.8 Prohibited phrases | PASS | No `easy to set up`, no `the network rewards you for`. PASS. |
| 2.9 No passive value statements | PASS | "A missed reward round is permanent LPT loss" (line 49) — direct factual claim. Reward safety framed concretely. |
| 2.10 No hedging openers | PASS | Opens with risk statement, not caveat. |
| 2.11 Terminology | PASS | `OrchestratorSiphon`, `reward calling`, `keystore`, `fee withdrawal`, `service URI`, `Arbitrum One` — domain terms correct throughout. |

**Category 2 verdict:** 1 FAIL (2.4 BORDERLINE)

---

## Category 3: Section Naming & Headings

**Note:** `Related Pages` heading is excluded from scoring per P16.

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `Architecture` | 3 | 2 | 4 | 4 | 5 | 18 | FAIL |
| `When to Use This Setup` | 2 | 2 | 4 | 3 | 4 | 15 | FAIL |
| `Prerequisites` | 4 | 3 | 5 | 5 | 5 | 22 | PASS |
| `Part 1 - Secure Machine: Install OrchestratorSiphon` | 4 | 3 | 4 | 4 | 2 | 17 | FAIL |
| `Part 2 - GPU Machine: Install go-livepeer in Transcoder Mode` | 4 | 3 | 4 | 4 | 1 | 16 | FAIL |
| `Verifying the Split is Working` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Day-to-Day Operations` | 3 | 3 | 4 | 4 | 4 | 18 | FAIL |
| `Adding a Second GPU Machine` | 4 | 4 | 4 | 5 | 4 | 21 | PASS |
| `Troubleshooting` | 3 | 3 | 5 | 5 | 5 | 21 | PASS |
| `Related Pages` | EXEMPT | — | — | — | — | — | EXEMPT |

**Note on Part 1/Part 2 headings:** These include subtitle text after ` - ` making them the longest headings in the set. They score lowest on Conciseness (1–2) as a result.

| Check | Result | Detail |
|---|---|---|
| 3.1 All headings ≥20/25 | FAIL | 6 headings below threshold: `Architecture` (18), `When to Use This Setup` (15), `Part 1 - Secure Machine…` (17), `Part 2 - GPU Machine…` (16), `Verifying the Split is Working` (17), `Day-to-Day Operations` (18). |
| 3.2 No banned/weak terms | FAIL | `When to Use This Setup` — "When to Use" is a question-adjacent form. Not in explicit banned list but scores 15/25 and is Avoid-tier phrasing. |
| 3.3 No contrast labels | PASS | No `X vs Y` headings. |
| 3.4 Domain-anchor rule | FAIL | `Architecture` — no domain anchor. `Day-to-Day Operations` — generic. Both lack domain specificity in isolation. |
| 3.5 Heading names concept | PASS | `Adding a Second GPU Machine` names the specific task. `Troubleshooting` names the content type. |
| 3.6 Title well-formed | PASS | `Siphon Split Setup` — 3 words, concept-derived. |
| 3.7 Expert editorial | FAIL | `When to Use This Setup`, `Architecture`, `Day-to-Day Operations` are generic labels. `Part 1 -` and `Part 2 -` are procedural labels that reduce score. |

**Category 3 verdict:** 4 FAIL (3.1, 3.2, 3.4, 3.7)

---

## Category 4: Page Structure & Content Architecture

| Check | Result | Detail |
|---|---|---|
| 4.1 One purpose, one audience | PASS | Single audience (orchestrator), single job: set up OrchestratorSiphon on a two-machine split. |
| 4.2 Purpose statement | PASS | "This page lets an orchestrator install and configure OrchestratorSiphon on a secure machine and go-livepeer in transcoder mode on a GPU machine." |
| 4.3 PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json sequence (lines 2883–2891): `setup-options` → **`siphon-setup`** → `dual-mode-configuration` → `orchestrator-transcoder-setup`. Previous: `setup-options` (orientation — reader has chosen Siphon path). Next: `dual-mode-configuration` (different configuration topic). Adjacency acceptable. PASS. |
| 4.4 No dead ends | PASS | Related Pages links to Alternate Deployments, O-T Split Setup, Earnings, Reward Calling. Clear exits. |
| 4.5 Prerequisites stated | PASS | Prerequisites table (lines 136–171) covers secure machine and GPU machine requirements explicitly: OS, runtime, network, Ethereum, stake. Complete. |
| 4.6 Out-of-scope clear | PASS | `When to Use This Setup` section explicitly compares Siphon use case with combined go-livepeer and tells the reader when NOT to use Siphon. |
| 4.7 Information type per section | PASS | With `purpose: configure`, permitted types: `procedural`, `technical`, `factual`. Architecture (structural/conceptual), Prerequisites (factual), Part 1 Steps (procedural), Part 2 Steps (procedural), Verify (procedural/factual), Day-to-Day (procedural), Scaling (procedural), Troubleshooting (procedural/analytical). All aligned. |
| 4.8 No content duplication | PASS | Architecture and setup steps are specific to Siphon. No verbatim duplication from adjacent pages. |
| 4.9 Section orientation | N/A |
| 4.10 Cross-tab links | N/A |

**Category 4 verdict:** 0 FAIL

---

## Category 5: Layout, Components & Template

| Check | Result | Detail |
|---|---|---|
| 5.1 Correct template | PASS | `guide` template: Architecture overview → Use cases (CardGroup) → Prerequisites → Steps (StyledSteps) × 2 parts → Verify → Day-to-Day → Troubleshooting (AccordionGroup) → Related Pages. Matches guide template. |
| 5.2 Required sections present | PASS | Overview (Architecture), H2 sections with steps, Related Pages present. Prerequisites section present. |
| 5.3 Approved components only | NOT-TESTED | `ScrollableDiagram`, `CardGroup`, `Card`, `StyledSteps`, `StyledStep`, `StyledTable`, `CustomDivider`, `LinkArrow`, `AccordionGroup`, `Accordion`, `Tip`, `Note`, `Warning` used. Custom components not verified against component approval file (P22). |
| 5.4 Avoided components absent | FAIL | TODO block at lines 32–38 in MDX comment. Not rendered but status/veracity incoherence still applies (F-12). |
| 5.5 Information type → component | PASS | Architecture → `ScrollableDiagram`/Mermaid. Prerequisites → `StyledTable`. Steps → `StyledSteps`. Decision cards → `CardGroup`. Troubleshooting → `AccordionGroup`. Correct mapping. |
| 5.6 MDX renders clean | PASS | All imports present and used. JSX properly closed. StyledSteps, AccordionGroup correctly structured. |
| 5.7 No old-schema frontmatter | FAIL | `purpose: guide` — pageType value in purpose field (P37-b). |
| 5.8 CSS custom properties | PASS | No inline styles with hardcoded values detected. |
| 5.9 Generated file banner | N/A |
| 5.10 Component naming/import conventions | PASS | All PascalCase, all imports used. No dead imports detected. |

**Category 5 verdict:** 2 FAIL (5.4, 5.7)

---

## Category 6: Veracity & Factual Accuracy

| Check | Result | Detail |
|---|---|---|
| 6.1 Every factual claim citable | FAIL | (1) "~22 hours on Arbitrum" for round duration (Mermaid diagram + line 438) — NOT-TESTED against protocol specs. (2) `eth_warn`, `eth_minval`, `lpt_threshold`, `eth_threshold` values in config.ini example — illustrative values; no source. (3) "1 vCPU, 512 MB RAM is sufficient" for secure machine (line 174) — NOT-TESTED against OrchestratorSiphon hardware requirements. (4) `https://arb1.arbitrum.io/rpc` as the Arbitrum One RPC endpoint (line 261) — NOT-TESTED for current validity. |
| 6.2 Code/commands tested | FAIL | `git clone https://github.com/Stronk-Tech/OrchestratorSiphon.git` — external repo; NOT-TESTED. `pip install web3 eth-utils setuptools` — dependency list NOT-TESTED against current OrchestratorSiphon requirements. `python3 -m pip install --break-system-packages web3 eth-utils setuptools` — Ubuntu 24.04+ path NOT-TESTED. systemd service file — NOT-TESTED against current systemd conventions. `livepeer -transcoder -orchAddr <this-machine-hostname>:8935 -nvidia 0 -maxSessions 10 -network arbitrum-one-mainnet` — NOT-TESTED. |
| 6.3 No deprecated API usage | NOT-TESTED | go-livepeer `-transcoder`, `-orchAddr`, `-nvidia`, `-maxSessions`, `-network`, `-aiModels` flags — NOT-TESTED against current release. OrchestratorSiphon Python API — NOT-TESTED. |
| 6.4 Numbers are real | FAIL | "~22 hours on Arbitrum" round duration at line 438 — NOT-TESTED. `1 vCPU, 512 MB RAM` — NOT-TESTED. config.ini threshold values are illustrative with no warning to the reader that these are not recommended defaults. |
| 6.5 REVIEW flags for unverified claims | FAIL | TODO block (lines 32–38) covers formatting verification only (Mermaid colours, StyledTable, UK spelling, StyledSteps sequence). No REVIEW flags for the substantive factual claims (round duration, hardware requirements, config thresholds, repo dependency list). |
| 6.6 veracityStatus honest | FAIL | Missing. `status: current` + procedural content + no REVIEW flags on substantive claims. Fix: `status: draft`, `veracityStatus: unverified` (P39). |
| 6.7 Authoritative vs AI-generated | PASS | No glossary references. |
| 6.8 Source staleness | FAIL | (1) `https://github.com/Stronk-Tech/OrchestratorSiphon` — third-party community repo. No Livepeer control over its maintenance. High staleness risk. (2) Python dependency list (`web3 eth-utils setuptools`) — specific versions not pinned; dependency requirements change with new releases. (3) `https://arb1.arbitrum.io/rpc` — public RPC endpoint; high staleness risk. |
| 6.9 No open-ended research tasks | FAIL | "Use the official go-livepeer binary for reward management whenever the Siphon source review does not meet your security standard." (lines 276–277) — conditional recommendation introducing an open-ended security evaluation task for the reader without a resolution path. "Siphon resumes automatically" (line 498) — behavioural claim NOT-TESTED with no source cited. |

**Category 6 verdict:** 7 FAIL (6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9), 1 NOT-TESTED (6.3)

---

## Category 7: Navigation & Information Architecture

| Check | Result | Detail |
|---|---|---|
| 7.1 Page in docs.json | PASS | `v2/orchestrators/guides/deployment-details/siphon-setup` present at docs.json line 2886. |
| 7.2 Navigation matches file system | PASS | File exists at declared path. |
| 7.3 Tab entry portal | N/A |
| 7.4 No structural orphans | PASS | Page reachable via Deployment Details group. |
| 7.5 Audience journey complete | PASS | Entry from setup-options (Siphon path chosen), complete installation steps, exits to O-T Split, Earnings, Reward Calling. |
| 7.6 Cross-tab graduation | PASS | No cross-tab links required at this page. |
| 7.7 File in correct lane | PASS | In `v2/orchestrators/guides/deployment-details/`. |
| 7.8 File naming conventions | PASS | `siphon-setup.mdx` — descriptive, no invalid prefix. |
| 7.9 _workspace/ TTL | N/A |

**Category 7 verdict:** 0 FAIL

---

## Category 8: Links & Rendering

| Check | Result | Detail |
|---|---|---|
| 8.1 Internal links resolve | PASS | (1) `/v2/orchestrators/guides/deployment-details/setup-options` — PRESENT docs.json line 2885. PASS. (2) `/v2/orchestrators/setup/rs-install` — PRESENT docs.json (confirmed). PASS. (3) `/v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` — PRESENT docs.json line 2888. PASS. (4) `/v2/orchestrators/guides/staking-and-rewards/earning-model` — PRESENT docs.json line 2910. PASS. (5) `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` — PRESENT docs.json line 2911. PASS. All internal links verified. |
| 8.2 External links live | NOT-TESTED | `https://github.com/Stronk-Tech/OrchestratorSiphon` — NOT-TESTED. `https://explorer.livepeer.org/accounts/<address>/orchestrating` — template URL, NOT-TESTED. `https://arb1.arbitrum.io/rpc` — NOT-TESTED. |
| 8.3 Snippet imports resolve | PASS | `Links.jsx`, `Steps.jsx`, `Tables.jsx`, `Divider.jsx`, `ZoomableDiagram.jsx` — standard paths. |
| 8.4 Images load | N/A |
| 8.5 Renders clean | PASS | JSX well-formed. All components properly closed. StyledSteps within Part 1 and Part 2 correctly structured. |
| 8.6 No TODO/TBD | PASS | TODO block at lines 32–38 — MDX comment, not rendered. Status/veracity incoherence logged in F-12. |

**Category 8 verdict:** 0 FAIL, 1 NOT-TESTED (8.2 external links)

---

## Category 9: Process & Governance

| Check | Result | Detail |
|---|---|---|
| 9.1 Human sign-off | FAIL | `status: current` + no `veracityStatus` + unresolved TODO. |
| 9.2 Consuming decisions | NOT-TESTED |
| 9.3 Gate prerequisites | FAIL | Tab pre-IA-approval. |
| 9.4 Phase ordering | NOT-TESTED |
| 9.5 Findings before fixes | PASS |
| 9.6 Feedback routed | N/A |

**Category 9 verdict:** 2 FAIL (9.1, 9.3)

---

## Banned Construction Scan

| Location | Text | Type | Classification | Canonical Fix |
|---|---|---|---|---|
| Lines 117–124 | CardGroup titles: "Use Siphon when..." and "Use combined go-livepeer when..." | Conditional framing in Card titles | BORDERLINE — Card titles are visible text (P20 scope). `when...` pattern is a conditional framing without resolution. However, in a decision card context, this is an orientation pattern, not a value claim. Request human review (P23). | Proposed if FAIL: Card title "Use Siphon when..." → "Siphon Setup Conditions" + move conditions to body text |
| Line 509 | "a `-pricePerUnit` value above the market range stops work from routing regardless of uptime" | `if [condition]` | BORDERLINE — conditional diagnostic in troubleshooting accordion. Appropriate for troubleshooting context. Request human review (P23). | State as threshold: "-pricePerUnit above the Gateway buy-side range prevents job routing regardless of uptime." |
| Line 178 | "It does not need a GPU" | `not [X]` | BORDERLINE — comparative description of secure machine. | Proposed: "GPU-free — a small VPS is sufficient." |
| Scanning all `can/may/could/might`: line 58: "...or goes offline for maintenance **without interrupting** reward claims." — PASS (positive framing). No `can/may` value claims found. | | | | |

---

## Heading Score Table (Full Breakdown)

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `Architecture` | 3 | 2 | 4 | 4 | 5 | 18 | FAIL |
| `When to Use This Setup` | 2 | 2 | 4 | 3 | 4 | 15 | FAIL |
| `Prerequisites` | 4 | 3 | 5 | 5 | 5 | 22 | PASS |
| `Part 1 - Secure Machine: Install OrchestratorSiphon` | 4 | 3 | 4 | 4 | 2 | 17 | FAIL |
| `Part 2 - GPU Machine: Install go-livepeer in Transcoder Mode` | 4 | 3 | 4 | 4 | 1 | 16 | FAIL |
| `Verifying the Split is Working` | 3 | 3 | 4 | 4 | 3 | 17 | FAIL |
| `Day-to-Day Operations` | 3 | 3 | 4 | 4 | 4 | 18 | FAIL |
| `Adding a Second GPU Machine` | 4 | 4 | 4 | 5 | 4 | 21 | PASS |
| `Troubleshooting` | 3 | 3 | 5 | 5 | 5 | 21 | PASS |
| `Related Pages` | EXEMPT | — | — | — | — | — | EXEMPT |

**Rename proposals (validated against check 3.2 prohibited list — P18):**

- `Architecture` → `Siphon Split Architecture` (domain anchor added; scores 22)
- `When to Use This Setup` → `Siphon vs Combined Setup` (comparison framing; scores 20; BORDERLINE per check 3.3 — but cleaner than current heading)
- `Part 1 - Secure Machine: Install OrchestratorSiphon` → `Secure Machine Setup` (concise; scores 21)
- `Part 2 - GPU Machine: Install go-livepeer in Transcoder Mode` → `GPU Machine Setup` (parallel pattern; scores 21)
- `Verifying the Split is Working` → `Split Verification` (scores 22)
- `Day-to-Day Operations` → `Ongoing Operations` (slightly better; scores 21)

---

## Spelling / Typo Check

Visible text scanned. `RequestsDependencyWarning` — correct Python warning class name. `orchSiphon` — consistent service name. `SIGINT` — correct signal name. `journalctl` — correct. `systemctl` — correct. `UTC--` keystore filename format — correct. `arb1.arbitrum.io` — correct domain format. No typos detected.

---

## Component Matrix

| Component | Used? | Preferred for `guide`? | Notes |
|---|---|---|---|
| `StyledSteps` / `StyledStep` | Yes | Yes — procedural | Correct for installation steps |
| `ScrollableDiagram` | Yes | NOT-TESTED | Custom diagram component (P22) |
| `CardGroup` / `Card` | Yes | Yes | Use-case decision cards + Related Pages |
| `StyledTable` | Yes | Yes | Architecture and prerequisites tables |
| `AccordionGroup` / `Accordion` | Yes | Yes — troubleshooting | Correct |
| `CustomDivider` | Yes | NOT-TESTED | Common element |
| `LinkArrow` | Yes | NOT-TESTED | Common element |
| `Tip` | Yes | OK for guide | Appropriate Tip usage |
| `Note` | Yes | Yes | Config and security notes |
| `Warning` | Yes | Yes — security warning | Keystore warning appropriate |

---

## Cross-Category Connections

| Connection | Categories | Finding IDs |
|---|---|---|
| `purpose: guide` wrong field + `status: current` + TODO + no veracityStatus | 1.4, 1.8, 5.7, 9.1 | F-12 — root cause |
| 6 headings below threshold | 3.1, 3.2, 3.4, 3.7 | F-01 through F-06 |
| Third-party repo (OrchestratorSiphon) — staleness risk | 6.8, 8.2 | F-11 |
| Python dependency list no pinned versions | 6.1, 6.8 | F-13 |
| Arbitrum public RPC endpoint — staleness risk | 6.1, 6.8 | F-14 |
| Round duration "~22 hours" claim uncited | 6.1, 6.4 | F-15 |

---

## Finding Registry

| ID | Severity | Category | Description | Canonical Fix |
|---|---|---|---|---|
| F-01 | MEDIUM | 3.1, 3.4 | `Architecture` (18/25) | Rename to `Siphon Split Architecture` |
| F-02 | HIGH | 3.1, 3.2 | `When to Use This Setup` (15/25) | Rename to `Siphon vs Combined Setup` |
| F-03 | MEDIUM | 3.1 | `Part 1 - Secure Machine: Install OrchestratorSiphon` (17/25) | Rename to `Secure Machine Setup` |
| F-04 | MEDIUM | 3.1 | `Part 2 - GPU Machine: Install go-livepeer in Transcoder Mode` (16/25) | Rename to `GPU Machine Setup` |
| F-05 | MEDIUM | 3.1 | `Verifying the Split is Working` (17/25) | Rename to `Split Verification` |
| F-06 | MEDIUM | 3.1, 3.4 | `Day-to-Day Operations` (18/25) | Rename to `Ongoing Operations` |
| F-07 | HIGH | 1.4 | `purpose: guide` — pageType value in purpose field | Proposed: `purpose: configure` — confirm |
| F-08 | HIGH | 1.8, 6.6 | `status: current` + no `veracityStatus` + TODO block | Fix: `status: draft`, `veracityStatus: unverified` (P39) |
| F-09 | HIGH | 1.1, 1.6 | `complexity` absent | Proposed: `complexity: intermediate` — confirm |
| F-10 | HIGH | 1.1, 1.7 | `lifecycleStage` absent | Proposed: `lifecycleStage: setup` — confirm |
| F-11 | MEDIUM | 6.8, 8.2 | OrchestratorSiphon is a third-party community repo — staleness risk | Add note near GitHub card: "OrchestratorSiphon is a community tool. Verify the repository is actively maintained before deploying to production." |
| F-12 | CRITICAL | 1.4, 1.8, 5.7, 9.1 | Status/purpose/veracity incoherence — root cause | Fix: `purpose: configure`, `status: draft`, `veracityStatus: unverified` |
| F-13 | MEDIUM | 6.1, 6.8 | Python dependencies not pinned to versions | Add note: "Versions shown are illustrative. Check the OrchestratorSiphon `requirements.txt` for pinned versions." — or add REVIEW flag |
| F-14 | MEDIUM | 6.1, 6.8 | `arb1.arbitrum.io/rpc` is a public RPC endpoint — may change | Add note: confirm current Arbitrum One RPC from official Arbitrum docs; or use a note pointing to the Arbitrum RPC resource page |
| F-15 | MEDIUM | 6.1, 6.4 | "~22 hours on Arbitrum" for round duration — uncited | Add REVIEW flag: `{/* REVIEW: round duration ~22 hours — verify against protocol docs or livepeer.js constants */}` |
| F-16 | HIGH | 1.1, 1.9 | `industry` absent | Proposed: `industry: ["technical"]` — confirm |
| F-17 | HIGH | 1.1, 1.10 | `niche` absent | Proposed: `niche: ["infrastructure", "web3"]` — confirm |
| F-18 | MEDIUM | 1.11 | Description 199 chars — exceeds 160 | Proposed: `Use OrchestratorSiphon to isolate keystore management and reward calling from GPU workload processing on a two-machine split.` (125 chars) — confirm |

---

## Blocking Decisions

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| BD-1 | Confirm correct `purpose` value: `configure` (mapping options to requirements) vs `build` (end-to-end implementation procedure) | F-07 fix execution | Alison |
| BD-2 | Verify Python dependency list against current OrchestratorSiphon requirements.txt; confirm round duration `~22 hours`; confirm `arb1.arbitrum.io/rpc` is current | F-13, F-14, F-15 — veracity pass | SME + Alison |

---

**Verdict Summary:** 24 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4 (BORDERLINE), 3.1, 3.2, 3.4, 3.7, 5.4, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3. All internal links verified PASS — solid navigation. Content is well-structured with complete prerequisite coverage and thorough troubleshooting coverage. Failures are: taxonomy (missing fields, deprecated purpose), heading structure (6 below threshold), and veracity (no REVIEW flags on substantive claims, third-party repo staleness). No REWRITE required.
