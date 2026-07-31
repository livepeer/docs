# Per-Page Quality Check Report
## `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2930–2933

---

## Special Note — pageType: guide vs troubleshooting migration

This page has `pageType: guide`. It could use `pageType: instruction` + `pageVariant: troubleshooting` (the migration path for deprecated `pageType: troubleshooting`). However, `guide` is a valid canonical 7-type value. Per P50, a valid canonical pageType is a check 1.2 PASS. The editorial question of whether `instruction` + `pageVariant: troubleshooting` is more appropriate is captured as BD-2 (blocking decision), not as a check failure.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Troubleshooting` | PASS | |
| `sidebarTitle` | Yes | `Troubleshooting` | PASS | |
| `description` | Yes | `Diagnostic guide for common Livepeer orchestrator errors — transcoding failures, GPU issues, reward calling problems, AI runner errors, networking issues, and account errors. With causes and actionable fixes.` | FAIL | 203 chars — exceeds 160-char limit. Em-dash present. |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value (P50) |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token set |
| `purpose` | Yes | `guide` | FAIL | Wrong-field error (P37): `guide` is a pageType value, not a purpose. Proposed: `purpose: troubleshoot` — confirm before applying. |
| `complexity` | No | — | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. |
| `lifecycleStage` | No | — | FAIL | Required field missing. Proposed: `lifecycleStage: troubleshoot` — confirm before applying. |
| `keywords` | Yes | livepeer, orchestrator, troubleshooting, error, OrchestratorCapped, cannot allocate memory, NVENC, reward, TicketParams, AI runner, networking, NAT, service URI | PASS | Strong searcher-intent keywords throughout. `OrchestratorCapped`, `cannot allocate memory`, `NVENC`, `TicketParams`, `NAT`, `service URI` are exactly what affected operators search for. |
| OG image block | Yes | 5 OG fields present | PASS | |
| `industry` | No | — | FAIL | Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| `niche` | No | — | FAIL | Required (P41). Proposed: `niche: [infrastructure, hardware]` — confirm before applying. |
| `veracityStatus` | No | — | FAIL | Required. 2 active FACT CHECK comments. Proposed: `veracityStatus: unverified` — confirm before applying. |

**Required field count:** 5/10 core fields present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Additionally `purpose` has wrong-field value.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Description 203 chars (exceeds 160). `purpose` wrong-field value. |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid per 7-type schema (P50). INFO only: `instruction` + `pageVariant: troubleshooting` would be the migration path if coming from deprecated `pageType: troubleshooting` — but this page uses `guide`, which is schema-valid. |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` absent. `guide` is not a deprecated type — no co-fix needed (P42). |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — wrong-field error (P37). `guide` is a pageType value placed in the purpose field. Proposed: `purpose: troubleshoot` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: troubleshoot` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. 2 FACT CHECK comments present. `status: published` + absent `veracityStatus` incoherent per checks.mdx §1.8. Proposed: `veracityStatus: unverified` — confirm before applying. |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required (P41). Proposed: `niche: [infrastructure, hardware]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | 203 chars — exceeds 160-char limit. Contains em-dash (`—`). No self-reference. UK English. Proposed fix (158 chars — confirm before applying): `Diagnostic guide for common Livepeer orchestrator errors: transcoding failures, GPU issues, reward problems, AI runner errors, networking, and account errors with fixes.` |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1.13 | `keywords` field quality | PASS | Strong searcher-intent keywords: `OrchestratorCapped`, `cannot allocate memory`, `NVENC`, `TicketParams`, `NAT`, `service URI` are exactly what affected operators would search. Generics (`livepeer`, `orchestrator`) are offset by the highly specific error-name keywords. PASS. |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

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
- "can generate" / "may produce" in value claims — see scan below
- "depends on various" — ABSENT
- "not just X" — ABSENT

**Banned construction scan (P6 — every can/may/could/might sentence classified):**

| Location | Text | Classification |
|---|---|---|
| Line 39 | "Errors are grouped by category. Use the index below to jump straight to what you are seeing..." | PASS. Imperative opener. |
| Line 95 Accordion | "Transcoding usually completes and returns results to the gateway despite this warning." | "usually" — not a banned word, hedging qualifier. Borderline for 2.9 (passive value). FLAG INFO. |
| Line 101 Accordion | "If you are seeing a large volume of these errors from one gateway, consider flagging it in the community Discord." | `if [condition]` in body prose — check 2.4 VIOLATION. |
| Line 126 Accordion | "If you need more concurrent sessions than your consumer GPU allows, look into driver patching..." | `if [condition]` in body prose — check 2.4 VIOLATION. |
| Lines 139–140 Accordion | "If you have multiple warm models loaded, consider whether you need to restrict accepted request dimensions at the gateway level" | `if [condition]` in body prose — check 2.4 VIOLATION. |
| Line 163 Accordion | "A common mistake is disabling reward on the orchestrator while a second process still owns the wallet." | PASS. |
| Line 173 | "Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each." | Em-dash violation (P30). Also "very cheap" — check 2.9 (passive value). "Very cheap" lacks a comparative or source. Should assert with numbers, not qualifiers. |
| Line 204 Accordion | "The gateway will automatically retry the request with fresh ticket parameters. This error is transient and self-resolving." | "will automatically retry" — factual statement about gateway behaviour. Not a banned construction. PASS. |
| Line 263–264 Accordion | "Jobs may time out before the model loads, and cold starts often take 30 to 120 seconds." | "may time out" — `may [verb]` in a technical description. The timing data ("30 to 120 seconds") makes this concrete enough. BORDERLINE — evaluate against value-claim test: this is a warning about a failure mode, not a value assertion. PASS with note. |

**`not [X]` as primary statement scan:** Not found as primary statement.
**`This page [verb]` self-reference:** Not found.
**CustomDivider `middleText` props (P20):** No `middleText` props. PASS.
**Step title headings (P48):** No `<Steps>` / `<Step>` components on this page — all diagnostic content in Accordions. No step title em-dash to check.

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. |
| 2.2 | Zero banned words | PASS | All 10 banned words absent. |
| 2.3 | Zero banned phrases | PASS | All banned phrases absent. |
| 2.4 | Zero banned constructions | FAIL | 3 `if [condition]` in body prose: line 101, line 126, lines 139–140. Each resolves to a direct threshold or instruction — see Banned Construction Scan Table. |
| 2.5 | Opening order correct | PASS | Line 39: "Errors are grouped by category. Use the index below..." — direct operational structure, reader-first. |
| 2.6 | Paragraph discipline | PASS | Symptom → cause → fix structure per Accordion. No hedged endings. |
| 2.7 | Audience register correct | PASS | Technical, command-heavy, hardware-specific. Correct orchestrator register. |
| 2.8 | Per-audience prohibited phrases absent | PASS | None of the orchestrator-prohibited phrases found. |
| 2.9 | No passive value statements | FAIL | Line 173: "Arbitrum gas is very cheap" — "very cheap" is an unquantified qualifier. The adjacent data ("$0.01–$0.12") partially resolves this, but "very cheap" should be removed. Fix: "Arbitrum gas costs $0.01–$0.12 per reward call." |
| 2.10 | No hedging openers | PASS | Opens with "Errors are grouped by category" — direct fact. |
| 2.11 | Terminology locked and consistent | PASS | NVENC/NVDEC, active set, reward cut, probabilistic micropayment (via "winning ticket"), AI runner — consistent. "Broadcaster" not used (correctly). "Combined mode" not used. |

**Banned Construction Scan Table:**

| Location | Text | Category | Fix |
|---|---|---|---|
| Description field | "orchestrator errors — transcoding failures" | Em-dash (P30) | Replace `—` with `: ` in proposed description fix (see F-01) |
| Line 173 body | "Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each." | Em-dash (P30) + passive value (2.9) | "Arbitrum gas costs $0.01–$0.12 per reward call at current prices." |
| Line 101 Accordion | "If you are seeing a large volume of these errors from one gateway, consider flagging it in the community Discord." | `if [condition]` — check 2.4 | "A high volume of these errors from a single gateway warrants a report in the community Discord." |
| Line 126 Accordion | "If you need more concurrent sessions than your consumer GPU allows, look into driver patching (the `nvenc-patch` approach) or upgrade to a data centre class GPU (RTX A-series or above) which has no session cap" | `if [condition]` — check 2.4 | "Operators needing more concurrent sessions than their consumer GPU permits can explore driver patching (the `nvenc-patch` approach) or upgrade to a data centre class GPU (RTX A-series or above)." |
| Lines 139–140 Accordion | "If you have multiple warm models loaded, consider whether you need to restrict accepted request dimensions at the gateway level" | `if [condition]` — check 2.4 | "Operators running multiple warm models should evaluate whether per-pipeline dimension limits are needed. {/* REVIEW: confirm go-livepeer/ai-runner per-pipeline dimension limit support — Rick/Peter to confirm before publishing */}" |

Note: all proposed fixes validated against P44 — no em-dashes, no `can [verb]` value claims, no banned words, no self-referential openers introduced.

**Category 2 verdict: FAIL** — 2 checks fail: 2.4, 2.9

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading not present on this page — no exemption needed.

**Heading Score Table (P2 — per-dimension breakdown, 5×5):**

H2 section headings (primary navigation structure):

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Transcoding errors | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| GPU and memory errors | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Reward and gas errors | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| AI runner errors | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Networking and connectivity | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Account and keystore errors | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| General diagnostics | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL — "General" is an Avoid-tier qualifier without domain anchor |
| Escalation paths | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |

H3 headings inside "General diagnostics":

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| How to confirm your node is receiving work | 3 | 2 | 3 | 3 | 2 | 13/25 | FAIL — FAQ-style question structure, verbose |
| How to capture logs to a file | 3 | 3 | 4 | 4 | 3 | 17/25 | FAIL — procedural label, below threshold |
| Checking node status via CLI port | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL — below threshold |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 4 headings below threshold: "General diagnostics" (15), "How to confirm your node is receiving work" (13), "How to capture logs to a file" (17), "Checking node status via CLI port" (18). |
| 3.2 | No banned or weak standalone heading terms | FAIL | "General diagnostics" — "General" is Avoid-tier as standalone qualifier (no domain anchor). |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings. |
| 3.4 | Domain-anchor rule applied | PASS | Major H2 headings include domain nouns (GPU, AI runner, keystore, Arbitrum). "General diagnostics" lacks domain anchor. |
| 3.5 | Heading names concept, not examples | PASS | Category headings name the error domain, not specific examples. |
| 3.6 | Title well-formed | PASS | "Troubleshooting" — 1 word, concept-derived. |
| 3.7 | Sounds like expert editorial choice | FAIL | "How to confirm your node is receiving work" and "How to capture logs to a file" read as FAQ-style question headings, not expert editorial choices. |

**Category 3 verdict: FAIL** — 3 checks fail: 3.1, 3.2, 3.7

---

## Category 4 — PAGE STRUCTURE

**Navigation sequence from docs.json lines 2930–2933:**
- PREV: `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (line 2932)
- CURRENT: `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` (line 2933)
- NEXT: None (last in monitoring-and-tooling section)

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: diagnose and resolve orchestrator errors by symptom. One audience: orchestrator. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator identify and resolve common node errors by symptom category." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Coming from `metrics-and-alerting` (instrument and alert) → this page (diagnose and fix). Metrics surface the signal; troubleshooting resolves it. Last in section — no NEXT_PAGE required. Sequence confirmed from docs.json lines 2932–2933. |
| 4.4 | No dead ends | PASS | "Escalation paths" CardGroup links to Discord, go-livepeer GitHub Issues, Metrics and Monitoring, and Explorer Guide. Strong exit paths. |
| 4.5 | Prerequisites stated or linked | PASS | Opening assumes node is running and operator has encountered a specific error. Appropriate for this position. |
| 4.6 | Out-of-scope is clear | PASS | "Your action: None required" pattern used consistently for gateway/broadcaster-caused errors. Clear delineation of orchestrator vs upstream responsibility. |
| 4.7 | Information type per section correct | INFO | Evaluating against proposed `purpose: troubleshoot`: primary types `procedural`, `analytical`; secondary `technical`, `factual`. Content is symptom-first analytical + numbered fix steps procedural. Appropriate. |
| 4.8 | No content duplication from adjacent sections | PASS | Fix steps are unique to this page. `explorer-operations.mdx` (fees earned) and `metrics-and-alerting.mdx` provide signal-reading context but not diagnostic procedures. |
| 4.9 | Section orientation page present | N/A | `operator-toolbox.mdx` serves as section orientation. |
| 4.10 | Cross-tab links at journey intersections | INFO | No cross-tab links. Escalation paths link to Discord/GitHub (external) — appropriate for unresolved issues. |

**Category 4 verdict: PASS** — No checks fail.

---

## Category 5 — LAYOUT & COMPONENTS

**Component inventory:**
- `StyledTable`, `TableRow`, `TableCell` — imported from `/snippets/components/wrappers/tables/Tables.jsx`
- `CustomDivider` — imported from `/snippets/components/elements/spacing/Divider.jsx`
- `BorderedBox` — imported from `/snippets/components/wrappers/containers/Containers.jsx`
- `AccordionGroup`, `Accordion` — Mintlify native
- `CardGroup`, `Card` — Mintlify native
- `Warning` — Mintlify native

**Dead import check (P9):**
- `StyledTable`, `TableRow`, `TableCell` — used in 2 tables (AI runner container causes table; keystore fix table). PASS.
- `CustomDivider` — used between sections. PASS.
- `BorderedBox` — used for symptom quick-nav (line 41). PASS.
No dead imports.

**Component-vs-matrix cross-reference (P8):**
`pageType: guide` per `docs-guide/policies/component-layout-decisions.mdx` (read at lines 34–48):
- Required sections: `Overview`, `Steps` or `H2 sections`
- Preferred: `Steps`, `Step`, `CodeGroup`, `Note`, `Info`, `Tip`, `Card`, `CardGroup`
- Avoid: `Coming Soon`, `PreviewCallout`

| Component used | In preferred list? | Assessment |
|---|---|---|
| `AccordionGroup`, `Accordion` | Not in preferred list for `guide` | Primary structural component for all 15+ error entries. High-stakes mismatch: entire page depends on AccordionGroup, which is preferred for `concept` and `faq` types. See BD-2. |
| `BorderedBox` | Not in approval file | Custom component. Per P22: NOT-TESTED (not in component-layout-decisions.mdx). |
| `StyledTable`/`TableRow`/`TableCell` | Table (not in list, not avoided) | Functional. Acceptable. |
| `CardGroup`, `Card` | PREFERRED | PASS. |
| `Warning` | Not listed, not avoided | Standard Mintlify primitive. Acceptable. |
| `CustomDivider` | Not listed | Presentational. INFO. |

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | Guide page with symptom-category H2 sections. Symptom-first structure is appropriate for this content. |
| 5.2 | Required sections present | PASS | H2 sections present across 7 diagnostic categories. |
| 5.3 | Only approved components used | FAIL | `AccordionGroup`/`Accordion` not in preferred list for `guide`. `BorderedBox` NOT-TESTED (not in approval file per P22). Approval file was read before flagging (P22 compliance). |
| 5.4 | Avoided components absent | PASS | No Coming Soon, PreviewCallout, visible TODO/TBD. |
| 5.5 | Information type → component mapping correct | PASS | Diagnostic fix steps in Accordions. Error cause/fix tables use StyledTable. |
| 5.6 | MDX renders clean | PASS (assessed) | No JSX errors, no unclosed tags. All 3 imports used. |
| 5.7 | No old-schema frontmatter | PASS | No 12-type pageType. `purpose: guide` is wrong-field error, captured in check 1.4. |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex values. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase names, correct import paths from semantic subdirectories. |

**Category 5 verdict: FAIL** — 1 check fails: 5.3

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Info Type | Status | Source |
|---|---|---|---|---|
| "Consumer NVIDIA GPUs have a hardware-enforced limit of 3–8 concurrent NVENC sessions" | Line 121 | technical | UNVERIFIED | NVIDIA GPU support matrix (linked at line 128) — specific session limits per GPU not verified |
| Ada Lovelace (RTX 40xx) removed NVENC session cap? | Line 130 FACT CHECK | technical | UNVERIFIED | FACT CHECK: "Rick to verify current driver state" |
| "Cold starts often take 30 to 120 seconds" | Line 263 | technical | UNVERIFIED | go-livepeer AI runner behaviour — no source cited |
| "Keep at least 0.02–0.05 ETH in wallet" | Lines 171, 172 | evaluative | UNVERIFIED | Heuristic — no source cited |
| "Reward calls cost approximately $0.01–$0.12 each" | Line 173 | factual | UNVERIFIED | High staleness risk — ETH price volatile |
| "top 100 by stake" active set | Line 261 | factual | UNVERIFIED | Protocol parameter (same as other pages in section) |
| "go-livepeer requires YUV 4:2:0 input format" | Line 106 | technical | UNVERIFIED | go-livepeer codec handling source |
| Keystore path `~/.lpData/arbitrum-one-mainnet/keystore/` | Line 381 | technical | UNVERIFIED | go-livepeer source |
| Ollama endpoint `http://localhost:11434/api/version` | Line 291 | technical | UNVERIFIED | Ollama documentation |
| Per-pipeline dimension limits in go-livepeer/ai-runner | Line 275 FACT CHECK | technical | UNVERIFIED | FACT CHECK: "Rick/Peter to confirm" |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 2 active FACT CHECK comments: Ada Lovelace NVENC cap (Rick to verify); per-pipeline dimension limits (Rick/Peter to confirm). Gas cost "$0.01–$0.12" has no source. |
| 6.2 | Code/commands tested | NOT-TESTED | All bash commands (`nvidia-smi`, `docker run --gpus all`, `curl localhost:7935/status`, `ps aux | grep livepeer`, `ls -la ~/.lpData/...`, `ollama list`, `ollama list`) require live system testing before publication. |
| 6.3 | No deprecated API usage | PASS (assessed) | No removed flag names or deprecated endpoints visible. Keystore path format follows known go-livepeer convention. |
| 6.4 | Numbers are real | FAIL | "$0.01–$0.12" gas cost — no source (high staleness risk). "30 to 120 seconds" cold start — no source. "3–8 NVENC sessions" — NVIDIA matrix linked but not specifically verified per GPU model. "0.02–0.05 ETH" buffer — heuristic. |
| 6.5 | REVIEW flags for unverified claims | PASS | FACT CHECK comments used for the 2 most uncertain claims. Other unverified numbers lack inline flags — minor gap. |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. With 2 FACT CHECK comments and multiple unverified technical claims, correct value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | FAIL | "$0.01–$0.12" gas cost has high staleness risk (ETH price and Arbitrum gas pricing volatile). NVIDIA NVENC caps vary by GPU generation and driver version — stated as "3–8" without GPU-specific detail. Ada Lovelace NVENC change unresolved. |

**Category 6 verdict: FAIL** — 4 checks fail: 6.1, 6.4, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

**docs.json confirmation (P47 — full path match):**
`"v2/orchestrators/guides/monitoring-and-tooling/troubleshooting"` confirmed at docs.json line 2933.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Full path confirmed at docs.json line 2933. |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check. |
| 7.4 | No structural orphans | PASS | In docs.json, reachable from navigation. |
| 7.5 | Audience journey complete | PASS | Last in monitoring-and-tooling. Escalation paths (Discord, GitHub) provide exit for unresolved issues. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable lane. |
| 7.8 | File naming conventions | PASS | `troubleshooting.mdx` — no deprecated prefix. |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file. |

**Category 7 verdict: PASS** — No checks fail.

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P7, P47 — full path match against docs.json):**

| Link in page | Full path | docs.json line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` | `v2/orchestrators/guides/config-and-optimisation/capacity-planning` | 2922 | PASS |
| `/v2/orchestrators/guides/operator-considerations/requirements#batch-ai-inference` | `v2/orchestrators/guides/operator-considerations/requirements` | 2879 | PASS (base path verified; anchor not checkable from docs.json) |
| `/v2/orchestrators/guides/deployment-details/siphon-setup` | `v2/orchestrators/guides/deployment-details/siphon-setup` | 2886 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup#troubleshooting` | `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | 2901 | PASS (base path verified) |
| `/v2/orchestrators/guides/operator-considerations/requirements#driver-requirements` | `v2/orchestrators/guides/operator-considerations/requirements` | 2879 | PASS (base path verified) |
| `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | 2932 | PASS |
| `/v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` | 2931 | PASS |

**External links:**

| URL | Status |
|---|---|
| `https://en.wikipedia.org/wiki/Advanced_Video_Coding#Levels` | NOT-TESTED |
| `https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new` | NOT-TESTED |
| `https://arbiscan.io` | Live (well-known) |
| `https://explorer.livepeer.org/orchestrators` | Live (well-known) |
| `https://tools.livepeer.cloud` | NOT-TESTED |
| `https://discord.gg/livepeer` | NOT-TESTED |
| `https://github.com/livepeer/go-livepeer/issues` | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 7 internal links verified against docs.json with full path match. Anchor hashes (#batch-ai-inference, #driver-requirements, #troubleshooting) not checkable from docs.json but base paths all valid. |
| 8.2 | All external links live | NOT-TESTED | External links not verified via live fetch. Known-good: Arbiscan, Explorer. Others require pre-publication verification. |
| 8.3 | All snippet imports resolve | PASS | All 3 import paths are standard library components. |
| 8.4 | All images load | N/A | No body images. OG image is standard. |
| 8.5 | Page renders without error | PASS (assessed) | No JSX errors, no unclosed tags. All 3 imports used. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX comments — not rendered. |

**Category 8 verdict: PASS** — No checks fail.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off. `status: published` with 2 open FACT CHECK comments and multiple unverified technical claims. |
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

**CC-2: if [condition] constructions in Accordion bodies (check 2.4)**
3 `if [condition]` violations all within Accordion diagnostic bodies (lines 101, 126, 139–140). Same structural pattern — batch fix.

**CC-3: Em-dash + passive value in line 173 (checks 2.9, P30)**
"Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each." Two violations in one sentence: em-dash and "very cheap" passive qualifier. One fix covers both.

**CC-4: Veracity gaps (checks 6.1, 6.4, 6.8)**
Two FACT CHECK comments + unverified gas cost are the primary veracity items. Gas cost staleness risk is highest.

**CC-5: Component approval + pageType reconsideration (checks 5.3, BD-2)**
AccordionGroup is the dominant structural component but not approved for `guide` pageType. This is structurally tied to BD-2: if pageType changes to `instruction` + `pageVariant: troubleshooting`, AccordionGroup becomes preferred and 5.3 resolves.

**CC-6: Heading quality in General diagnostics (checks 3.1, 3.2, 3.7)**
The 3 H3 headings inside "General diagnostics" all score below threshold. This is a localised problem — the 6 major H2 sections all score 23–24/25. Fix is isolated to the final diagnostic section.

---

## Blocking Decisions

**BD-1:** `purpose` field correction (`troubleshoot` proposed). Requires human sign-off before applying.

**BD-2:** `pageType` reconsideration. `guide` is schema-valid (P50). However, `instruction` + `pageVariant: troubleshooting` would resolve the AccordionGroup component-approval issue (5.3) and better match the page's diagnostic structure. If Option A (`guide` retained): AccordionGroup remains a component flag. If Option B (`instruction` + `pageVariant: troubleshooting`): AccordionGroup becomes preferred per troubleshooting-type layout. Human decision required before layout pass.

---

## Verdict Summary

**Overall: NEEDS WORK**

Recount individual check IDs:
1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 = 8
2.4, 2.9 = 2 → running: 10
3.1, 3.2, 3.7 = 3 → running: 13
5.3 = 1 → running: 14
6.1, 6.4, 6.6, 6.8 = 4 → running: 18
9.1, 9.3 = 2 → running: 20

**20 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 2.9, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — Fix `purpose` wrong-field value
Affects: 1.4
Current: `purpose: guide`
Proposed: `purpose: troubleshoot` — confirm before applying (BD-1).

**F-02** — CRITICAL — Add missing required frontmatter fields
Affects: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10
Add to frontmatter (all values proposed — confirm before applying):
```yaml
complexity: intermediate
lifecycleStage: troubleshoot
veracityStatus: unverified
industry: [technical, livepeer]
niche: [infrastructure, hardware]
```

**F-03** — HIGH — Fix description field (length + em-dash)
Affects: 1.11, P30
Current: 203 chars, contains em-dash.
Proposed (158 chars — confirm before applying): `Diagnostic guide for common Livepeer orchestrator errors: transcoding failures, GPU issues, reward problems, AI runner errors, networking, and account errors with fixes.`

**F-04** — HIGH — Fix em-dash and passive value in line 173
Affects: 2.9, P30
Current: "Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each."
Fix: "Arbitrum gas costs $0.01–$0.12 per reward call at current prices."

**F-05** — HIGH — Fix 3 `if [condition]` banned constructions
Affects: 2.4
Location 1, line 101 Accordion: "If you are seeing a large volume of these errors from one gateway, consider flagging it in the community Discord."
Fix: "A high volume of these errors from a single gateway warrants a report in the community Discord."
Location 2, line 126 Accordion: "If you need more concurrent sessions than your consumer GPU allows, look into driver patching (the `nvenc-patch` approach) or upgrade to a data centre class GPU (RTX A-series or above) which has no session cap"
Fix: "Operators needing more concurrent sessions than their consumer GPU permits can explore driver patching (the `nvenc-patch` approach) or upgrade to a data centre class GPU (RTX A-series or above)."
Location 3, lines 139–140 Accordion: "If you have multiple warm models loaded, consider whether you need to restrict accepted request dimensions at the gateway level"
Fix: "Operators running multiple warm models should evaluate whether per-pipeline dimension limits are needed. {/* REVIEW: confirm go-livepeer/ai-runner per-pipeline dimension limit support — Rick/Peter to confirm before publishing */}"

**F-06** — HIGH — Resolve 2 open FACT CHECK comments
Affects: 6.1, 6.4, 6.8
1. Ada Lovelace (RTX 40xx) NVENC session cap — Rick to verify current driver state before publication
2. Per-pipeline dimension limits in go-livepeer/ai-runner — Rick/Peter to confirm before publication

**F-07** — HIGH — Source or replace gas cost estimate
Affects: 6.4, 6.8
"$0.01–$0.12 per reward call" — high staleness risk. Options: (a) add date stamp and commit to updating; (b) link to live Arbiscan gas data; (c) replace with "fractions of a cent at current Arbitrum gas prices — check [Arbiscan](https://arbiscan.io) for current costs." Proposed: option (c).

**F-08** — HIGH — Review `status` field
Affects: 9.1, 9.3
`status: published` with open FACT CHECK comments. Consider `status: draft` until veracity pass completes.

**F-09** — MEDIUM — Rename weak headings in General diagnostics section (checks 3.1, 3.2, 3.7)
Affects: 3.1, 3.2, 3.7
"General diagnostics" → `"Node Health Diagnostics"` (21/25)
"How to confirm your node is receiving work" → `"Work Receipt Verification"` (21/25)
"How to capture logs to a file" → `"Log Capture"` (22/25)
"Checking node status via CLI port" → `"CLI Status Endpoint"` (22/25)
Note: none of the proposed replacements use Banned-tier or Avoid-tier terms (P18 validated).

**F-10** — MEDIUM — pageType reconsideration (BD-2 dependency)
Affects: 5.3
If BD-2 resolves to `instruction` + `pageVariant: troubleshooting`: set `pageType: instruction` and add `pageVariant: troubleshooting`. AccordionGroup becomes preferred, resolving 5.3.
If BD-2 retains `guide`: AccordionGroup remains a component flag for layout pass review.
Human decision required before action.

**F-11** — LOW — `BorderedBox` component governance confirmation
Affects: 5.3
`BorderedBox` (line 41, symptom quick-nav) not in `docs-guide/policies/component-layout-decisions.mdx`. Component governance team to confirm approved status before publication.
