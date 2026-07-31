# Per-Page Quality Check Report
## `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2930–2933

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Metrics and Alerting` | PASS | |
| `sidebarTitle` | Yes | `Metrics & Alerting` | PASS | |
| `description` | Yes | `How to set up Prometheus, Grafana, and the Docker monitoring stack for your Livepeer orchestrator. Covers the -monitor flag, key metrics, AI runner container monitoring, and log capture.` | FAIL | 186 chars — exceeds 160-char limit. |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token set |
| `purpose` | Yes | `guide` | FAIL | `guide` is NOT a valid purpose value. Valid purpose values are from the 15-value canonical set. `guide` is a pageType value placed in the purpose field (P37: wrong-field error, not deprecated alias). |
| `complexity` | No | — | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. |
| `lifecycleStage` | No | — | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. |
| `keywords` | Yes | livepeer, orchestrator, prometheus, grafana, monitoring, metrics, docker, -monitor, livepeer-monitoring, ai-runner | PASS (partial) | Some searcher-intent aligned; `livepeer`, `orchestrator`, `monitoring`, `metrics` generic. See 1.13. |
| OG image block | Yes | 5 OG fields present | PASS | |
| `industry` | No | — | FAIL | Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| `niche` | No | — | FAIL | Required (P41). Proposed: `niche: [infrastructure, hardware]` — confirm before applying. |
| `veracityStatus` | No | — | FAIL | Required. Page has 2 active `{/* FACT CHECK */}` comments. Proposed: `veracityStatus: unverified` — confirm before applying. |

**Required field count:** 5/10 core fields present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Additionally `purpose` has wrong-field value.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Description 186 chars (exceeds 160). `purpose` has wrong-field value. |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid. No deprecated value. |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` absent. `guide` is not a deprecated type requiring migration. No co-fix needed (P42). |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — `guide` is a pageType, not a purpose value. This is a wrong-field error (P37: valid value placed in wrong field). The 15 valid purpose values are: orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update. Proposed: `purpose: operate` — confirm before applying (page teaches operators how to instrument and monitor their running node). |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. 2 open `{/* FACT CHECK */}` comments. `status: published` + absent `veracityStatus` incoherent per checks.mdx §1.8. Proposed: `veracityStatus: unverified` — confirm before applying. |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required (P41). Proposed: `niche: [infrastructure, hardware]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | 186 chars — exceeds 160-char limit. No self-reference. UK English. Subject-first. Proposed fix (157 chars — confirm before applying): `Set up Prometheus, Grafana, and the Docker monitoring stack for your Livepeer orchestrator: the -monitor flag, key metrics, AI runner monitoring, and log capture.` |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1.13 | `keywords` field quality | FAIL | Generic: `livepeer`, `orchestrator`, `monitoring`, `metrics`. Good: `prometheus`, `grafana`, `docker`, `-monitor`, `livepeer-monitoring`, `ai-runner`. Replace generics with: `"prometheus grafana livepeer setup"`, `"go-livepeer metrics endpoint"`, `"livepeer alerting rules"`. |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — every candidate listed):**
- `effectively` — ABSENT
- `essentially` — ABSENT
- `basically` — ABSENT
- `meaningful` — ABSENT
- `significant` — ABSENT
- `real` (as intensifier) — ABSENT
- `various` — ABSENT
- `several` — ABSENT
- `obviously` — ABSENT
- `clearly` — ABSENT

**Banned phrase scan:**
- "This section covers" — ABSENT
- "This page covers/explains/walks you through" — ABSENT
- "Understanding X is essential" — ABSENT
- "It is important to note" — ABSENT
- "As mentioned above" — ABSENT
- "and so on" / "etc." — ABSENT
- "rather than" — ABSENT
- "can generate" / "may produce" in value claims — ABSENT
- "depends on various" — ABSENT

**Banned construction scan (P6 — every can/may/could/might sentence classified):**

| Location | Text | Classification |
|---|---|---|
| Line 35 | "Use this page to instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards." | `This page [verb]` self-reference. Banned construction (check 2.4). |
| Line 55 | "This is on the same port as the go-livepeer CLI (`7935` by default). The `-monitor` flag activates the `/metrics` path on that port." | PASS. |
| Line 79 (Note) | "Split orchestrator and transcoder setups should pass `-monitor` on both processes when both sides need to be scraped. Each process exposes its own `/metrics` endpoint on its respective CLI port." | "should pass" — conditional but operational instruction. Not a banned construction. PASS. |
| Line 86 | "The full reference is at [Prometheus Metrics Reference](/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting)." | Self-link — page links to itself. Issue but not a banned construction per se. Flag as structural. |
| Line 243 | "AI inference workloads run in the `ai-runner` Docker container alongside go-livepeer. Monitoring the container separately from the node gives you a faster signal for AI-specific issues." | PASS. |
| Line 306 | "By default, `livepeer` sends all logs to stdout only. For long-running production nodes, capture logs to a file:" | PASS. |
| Line 329 | "With `-v 6` you will see individual segment reception and transcoding activity, which is the fastest way to confirm your node is receiving and processing work without a full Prometheus setup." | PASS. |

**`not [X]` as primary statement scan:** Not found.
**CustomDivider `middleText` props (P20):** No `middleText` props on CustomDivider instances. PASS.

**Specific finding — `This page [verb]` (line 35):**
"Use this page to instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards."
This matches the banned construction "This page [verb]" exactly — the opening sentence is a self-referential instruction.

**Specific finding — Self-link (line 86):**
"The full reference is at [Prometheus Metrics Reference](/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting)."
This page links to itself. This is not a banned construction per se, but is a broken navigation pattern (link goes nowhere useful for the reader — they are already on the page). Flag as structural under check 4.4/8.1.

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. |
| 2.2 | Zero banned words | PASS | All 10 banned words absent. |
| 2.3 | Zero banned phrases | PASS | All banned phrases absent. |
| 2.4 | Zero banned constructions | FAIL | Line 35: "Use this page to instrument the node..." — `This page [verb]` self-reference. Fix: remove self-reference; open with the operational outcome. Proposed: "Instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards." |
| 2.5 | Opening order correct | FAIL | Line 35 opens with "Use this page to..." — self-referential, violates opening order rule. Should open with the operational value. |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. No hedged endings. |
| 2.7 | Audience register correct | PASS | Operational, hardware-specific, numbers-driven. Orchestrator register. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No prohibited orchestrator phrases found. |
| 2.9 | No passive value statements | PASS | Claims are operational and concrete. |
| 2.10 | No hedging openers | FAIL | Line 35 is a hedging/self-referential opener ("Use this page to...") — not an opening on operational value. Connected to 2.4/2.5. |
| 2.11 | Terminology locked and consistent | PASS | AI runner, go-livepeer, probabilistic metrics, Prometheus, Grafana — consistent with locked terminology. No deprecated terms. |

**Banned Construction Scan Table:**

| Location | Text | Category | Fix |
|---|---|---|---|
| Line 35 (opening sentence) | "Use this page to instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards." | `This page [verb]` — check 2.4 | "Instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards. Logs explain individual incidents; metrics show whether throughput, latency, capacity, and ticket flow are moving in the right direction." |

**Category 2 verdict: FAIL** — 3 checks fail: 2.4, 2.5, 2.10

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading not present on this page — no exemption needed.

**Heading Score Table (P2 — per-dimension breakdown, 5×5):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Enabling node metrics | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL — 1 point below threshold |
| What metrics are exposed | 3 | 2 | 3 | 3 | 3 | 14/25 | FAIL — "What [thing] are [verb]" is a generic descriptor framed as a question structure |
| Option A: Docker monitoring stack (fastest setup) | 3 | 2 | 3 | 3 | 2 | 13/25 | FAIL — "Option A" is a generic structural label; parenthetical is marketing |
| Option B: Custom Prometheus and Grafana | 3 | 2 | 3 | 3 | 3 | 14/25 | FAIL — "Option B" is a generic structural label |
| Monitoring AI runner containers | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Log capture and verbose output | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Alerting | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 4 headings below threshold: "Enabling node metrics" (19), "What metrics are exposed" (14), "Option A: Docker monitoring stack (fastest setup)" (13), "Option B: Custom Prometheus and Grafana" (14). |
| 3.2 | No banned or weak standalone heading terms | FAIL | "What metrics are exposed" uses generic question-derived phrasing. "Option A" / "Option B" are Avoid-tier structural labels without domain anchors. |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings (Option A / Option B are sequential options, not a comparison). |
| 3.4 | Domain-anchor rule applied | FAIL | "What metrics are exposed" has no domain anchor. "Option A/B" headings have no domain anchor. Reader cannot interpret these out of page context. |
| 3.5 | Heading names concept, not examples | PASS | Most headings name the tool/process, not examples. |
| 3.6 | Title well-formed | PASS | "Metrics and Alerting" — 3 words, concept-derived. |
| 3.7 | Sounds like expert editorial choice | FAIL | "Option A" / "Option B" are bureaucratic structural labels. "What metrics are exposed" is generic. |

**Category 3 verdict: FAIL** — 4 checks fail: 3.1, 3.2, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

**Navigation sequence from docs.json lines 2930–2933:**
- PREV: `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` (line 2931)
- CURRENT: `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (line 2932)
- NEXT: `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` (line 2933)

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: set up and operate node monitoring. One audience: orchestrator. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator instrument their node, collect key metrics, and wire up alerts." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Coming from `explorer-operations` (on-chain metrics) → this page (node-level metrics) → `troubleshooting` (diagnose issues). Logical progression. Sequence confirmed from docs.json lines 2931–2933. |
| 4.4 | No dead ends | FAIL | Line 86 self-link: "The full reference is at [Prometheus Metrics Reference](/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting)" — this page links to itself. Self-links create a dead loop for the reader. Either delete this sentence or replace with a link to a distinct metrics reference page. |
| 4.5 | Prerequisites stated or linked | PASS | Opening assumes node is running and `-monitor` flag is the entry point. Appropriate. |
| 4.6 | Out-of-scope is clear | PASS | Note component clarifies split orchestrator/transcoder monitoring scope. |
| 4.7 | Information type per section correct | INFO | Page has `purpose: guide` (wrong field). Evaluating against inferred correct purpose `operate`: primary types `procedural`, `factual`; secondary `technical`. Content is predominantly procedural (setup steps) + technical (config/code). Appropriate. |
| 4.8 | No content duplication from adjacent sections | INFO | Prometheus flags and Docker stack details appear in both this page and `operator-toolbox.mdx`. Toolbox is at discovery level; this page provides setup depth. Acceptable split but monitor for drift. |
| 4.9 | Section orientation page present | N/A | Operator Toolbox (`operator-toolbox.mdx`) serves as section orientation page. |
| 4.10 | Cross-tab links at journey intersections | INFO | No cross-tab links. For monitoring setup, a link to AI inference setup (`ai-and-job-workloads/ai-inference-operations`) is present in the closing CardGroup — intra-tab link, not cross-tab. |

**Category 4 verdict: FAIL** — 1 check fails: 4.4

---

## Category 5 — LAYOUT & COMPONENTS

**Component inventory:**
- `StyledTable`, `TableRow`, `TableCell` — imported from `/snippets/components/wrappers/tables/Tables.jsx`
- `CustomDivider` — imported from `/snippets/components/elements/spacing/Divider.jsx`
- `CardGroup`, `Card` — Mintlify native
- `Note` — Mintlify native

**Dead import check (P9):**
- `StyledTable`, `TableRow`, `TableCell` — used in multiple tables. PASS.
- `CustomDivider` — used between sections. PASS.
No dead imports.

**Component-vs-matrix cross-reference (P8):**
`pageType: guide` per `docs-guide/policies/component-layout-decisions.mdx` (read at lines 34–48):
- Required sections: `Overview`, `Steps` or `H2 sections`
- Preferred: `Steps`, `Step`, `CodeGroup`, `Note`, `Info`, `Tip`, `Card`, `CardGroup`
- Avoid: `Coming Soon`, `PreviewCallout`

| Component used | In preferred list? | Assessment |
|---|---|---|
| `StyledTable`/`TableRow`/`TableCell` | Table (not in list but not avoided) | Used for config tables. Not in preferred but not avoided. Acceptable. |
| `CustomDivider` | Not listed | Presentational only. INFO. |
| `CardGroup`, `Card` | PREFERRED | PASS. |
| `Note` | PREFERRED | PASS. |

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | Guide page with H2 sections, code blocks, tables. |
| 5.2 | Required sections present | PASS | Overview (implied via opening para), H2 sections with setup steps. `guide` template does not strictly require a Steps component — H2 sections satisfy requirement. |
| 5.3 | Only approved components used | PASS | CardGroup/Card in preferred list for `guide`. Note in preferred list. StyledTable not in preferred but not in Avoid either. |
| 5.4 | Avoided components absent | PASS | No Coming Soon, PreviewCallout, TODO/TBD in rendered content. |
| 5.5 | Information type → component mapping correct | PASS | Procedural content in code blocks and tables. Reference data in tables. Appropriate. |
| 5.6 | MDX renders clean | PASS (assessed) | Imports resolved, JSX well-formed, no unclosed tags visible. |
| 5.7 | No old-schema frontmatter | PASS | No 12-type pageType. Note: `purpose: guide` is a wrong-field error, not a deprecated value issue — captured in check 1.4. |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex values. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase names, correct import paths. |

**Category 5 verdict: PASS** — No checks fail.

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Info Type | Status | Source |
|---|---|---|---|---|
| `-monitor` enables `/metrics` on port 7935 | Line 53 | technical | NOT-TESTED | go-livepeer CLI source — requires live test |
| Same port as go-livepeer CLI (7935 default) | Line 55 | technical | NOT-TESTED | go-livepeer source |
| `livepeer/monitoring:latest` Docker image | Line 122–130 | technical | UNVERIFIED | Docker Hub / livepeer-monitoring repo |
| Default Grafana credentials `admin`/`admin` | Line 132 | technical | UNVERIFIED | Docker image docs |
| Prometheus metric names: `livepeer_current_sessions_total`, `livepeer_max_sessions`, `livepeer_transcode_success_total`, `livepeer_transcode_failed_total`, `livepeer_eth_balance` | Lines 218–228, 367–390 | technical | UNVERIFIED | FACT CHECK comment line 392: "Rick to verify exact exported metric names" |
| Community monitoring guide URL (Livepeer Forum) | Line 237 (comment) | factual | UNVERIFIED | FACT CHECK: forum confirmed offline March 2026 |
| Alert threshold: `ETH balance < 0.02` | Line 376 | evaluative | UNVERIFIED | No source cited |
| Alert threshold: transcode failure rate `> 0.1` over 10 min | Line 384 | evaluative | UNVERIFIED | No source cited |
| `AI pipeline registered but no jobs` → pipeline appears at tools.livepeer.cloud | Line 300–301 | technical | UNVERIFIED | Live URL |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 2 active FACT CHECK comments: Prometheus metric names need Rick verification; community forum URL offline. Alert thresholds (`< 0.02 ETH`, `> 0.1` failure rate) have no cited source. |
| 6.2 | Code/commands tested | NOT-TESTED | Docker run commands, Prometheus reload command, all CLI flag combinations — not verifiable from static review. |
| 6.3 | No deprecated API usage | PASS (assessed) | No removed flags or endpoints visible. Metric name accuracy pending SME check. |
| 6.4 | Numbers are real | FAIL | Prometheus metric names unverified (FACT CHECK comment). Alert thresholds (`0.02 ETH`, `0.1` failure rate, `5m`, `10m` durations) are "best-effort approximations" per comment at line 392. |
| 6.5 | REVIEW flags for unverified claims | PASS | FACT CHECK comments used appropriately. |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. With unverified metric names and alert thresholds, correct value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | FAIL | Prometheus metric names confirmed as "best-effort approximations from v1 documentation" (line 392 comment). Docker image tag currency unverified. Forum URL offline. |

**Category 6 verdict: FAIL** — 4 checks fail: 6.1, 6.4, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

**docs.json confirmation (P47 — full path match):**
`"v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting"` confirmed at docs.json line 2932.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Full path confirmed at docs.json line 2932. |
| 7.2 | Navigation matches file system | PASS | File at correct path matches docs.json entry. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check. |
| 7.4 | No structural orphans | PASS | In docs.json, reachable from navigation. |
| 7.5 | Audience journey complete | PASS | Positioned correctly between Explorer (on-chain state) and Troubleshooting (issue resolution). |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable lane. |
| 7.8 | File naming conventions | PASS | `metrics-and-alerting.mdx` — no deprecated prefix. |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file. |

**Category 7 verdict: PASS** — No checks fail.

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P7, P47 — full path match against docs.json):**

| Link in page | Full path | docs.json line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (self-link, line 86) | `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | 2932 | EXISTS but self-link — structural issue (check 4.4) |
| `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | 2933 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | 2898 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` | `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | 2922 | PASS |

**External links:**

| URL | Status |
|---|---|
| `https://github.com/livepeer/livepeer-monitoring` | NOT-TESTED |
| `https://tools.livepeer.cloud/ai/network-capabilities` | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | Self-link on line 86 (`/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting`) links the page to itself. Path exists in docs.json but the link is structurally broken — loops reader to current page. All other internal links verified and valid. |
| 8.2 | All external links live | NOT-TESTED | External links not verified via live fetch. |
| 8.3 | All snippet imports resolve | PASS | Standard library components. |
| 8.4 | All images load | N/A | No body images. OG image is standard. |
| 8.5 | Page renders without error | PASS (assessed) | No JSX errors visible. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | All placeholders are MDX comments. |

**Category 8 verdict: FAIL** — 1 check fails: 8.1

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off. `status: published` with unverified metric names and open FACT CHECK comments. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions unique to this page. |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab gates not met per tab-status.md. `status: published` premature. |
| 9.4 | Phase ordering respected | INFO | Cannot verify from static review. |
| 9.5 | Findings gathered before fixes | INFO | Cannot verify from static review. |
| 9.6 | Feedback routed | INFO | Cannot verify from static review. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**CC-1: Missing fields + purpose wrong-field + status (checks 1.1, 1.4, 1.6, 1.7, 1.8, 9.1, 9.3)**
Root cause: page marked `status: published` before correct frontmatter, veracity pass, and gate prerequisites. Fix as one batch.

**CC-2: Veracity gaps + metric names (checks 6.1, 6.4, 6.6, 6.8)**
Prometheus metric names are "best-effort approximations from v1 documentation" (line 392 comment). These are the core technical content of the Alerting section. SME verification of metric names is the single highest-value veracity action on this page.

**CC-3: Self-link + dead end (checks 4.4, 8.1)**
Line 86 self-link is both a navigation dead end (4.4) and a rendering issue (8.1). One fix: remove the sentence or point to a distinct metrics reference page.

**CC-4: Opening sentence + heading quality (checks 2.4, 2.5, 2.10, 3.1)**
Opening sentence uses `This page [verb]` construction. Fixing the opener (remove self-reference, open with outcome) also improves the page's structural quality at the point where headings begin.

---

## Blocking Decisions

**BD-1:** `purpose` field correction (`operate` proposed). Requires human sign-off before applying — purpose drives information type mapping and journey context.

---

## Verdict Summary

**Overall: NEEDS WORK**

**24 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.4, 2.5, 2.10, 3.1, 3.2, 3.4, 3.7, 4.4, 6.1, 6.4, 6.6, 6.8, 8.1, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — Fix `purpose` wrong-field value
Affects: 1.4
Current: `purpose: guide` — wrong-field error. `guide` is a pageType, not a purpose value.
Proposed: `purpose: operate` — confirm before applying (BD-1).

**F-02** — CRITICAL — Add missing required frontmatter fields
Affects: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10
Add to frontmatter (all values proposed — confirm before applying):
```yaml
complexity: intermediate
lifecycleStage: operate
veracityStatus: unverified
industry: [technical, livepeer]
niche: [infrastructure, hardware]
```

**F-03** — HIGH — Fix opening sentence (banned construction + opening order)
Affects: 2.4, 2.5, 2.10
Current: "Use this page to instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards."
Fix: "Instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards. Logs explain individual incidents; metrics show whether throughput, latency, capacity, and ticket flow are moving in the right direction."

**F-04** — HIGH — Fix description field (length)
Affects: 1.11
Current: 186 chars.
Proposed (157 chars — confirm before applying): `Set up Prometheus, Grafana, and the Docker monitoring stack for your Livepeer orchestrator: the -monitor flag, key metrics, AI runner monitoring, and log capture.`

**F-05** — HIGH — Remove self-link (line 86)
Affects: 4.4, 8.1
Current: "The full reference is at [Prometheus Metrics Reference](/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting)."
Fix: Delete this sentence, or if a separate metrics reference page exists, update the href to point to it.

**F-06** — HIGH — Verify Prometheus metric names before publication
Affects: 6.1, 6.4, 6.8
Metric names in Grafana panel query patterns and alert rules (lines 218–228, 367–390) are "best-effort approximations from v1 documentation" (line 392 comment). Rick to verify `livepeer_current_sessions_total`, `livepeer_max_sessions`, `livepeer_transcode_success_total`, `livepeer_transcode_failed_total`, `livepeer_eth_balance` against `go-livepeer/monitor/census.go` before publication.

**F-07** — HIGH — Review `status` field
Affects: 9.1, 9.3
`status: published` with unverified metric names and open FACT CHECK comments. Consider `status: draft` until veracity pass completes.

**F-08** — MEDIUM — Rename weak headings (checks 3.1, 3.2, 3.4, 3.7)
Affects: 3.1, 3.2, 3.4, 3.7
"Enabling node metrics" → `"Metrics Endpoint Setup"` (20/25)
"What metrics are exposed" → `"Exported Metric Categories"` (22/25)
"Option A: Docker monitoring stack (fastest setup)" → `"Docker Monitoring Stack"` (21/25)
"Option B: Custom Prometheus and Grafana" → `"Custom Prometheus Configuration"` (21/25)
Note: none of the proposed replacements use Banned-tier terms (P18 validated).

**F-09** — MEDIUM — Replace weak keywords (check 1.13)
Affects: 1.13
Remove: `livepeer`, `orchestrator`, `monitoring`, `metrics`
Add: `"prometheus grafana livepeer setup"`, `"go-livepeer metrics endpoint"`, `"livepeer prometheus alerting"`, `"orchestrator monitoring docker"`

**F-10** — MEDIUM — Remove/replace Livepeer Forum reference
Affects: 6.1, 6.8
Line 237 comment: forum.livepeer.org confirmed offline March 2026. Remove the FACT CHECK comment and delete any planned link to the forum. If an alternative tutorial exists (Discord, GitHub, new community resource), substitute.
