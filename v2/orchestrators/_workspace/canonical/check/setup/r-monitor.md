# Check Report: r-monitor.mdx

**File:** `v2/orchestrators/setup/r-monitor.mdx`
**Date:** 2026-03-24
**Checker:** Quality Check Agent (Batch 5 protocols applied)
**docs.json position:** Setup group, position 7 of 7 — PREV: `test` | NEXT: none (last in Setup group) (docs.json lines 2860–2867)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Monitoring Your Orchestrator Setup` | FAIL | Contains "Your" — personal pronoun. Heading standards: name the thing. Fix: `Orchestrator Monitoring` or `Node Monitoring`. Also check 3.6 applies to title. |
| `sidebarTitle` | Yes | `Monitor` | PASS | Appropriate short label. |
| `description` | Yes | `Monitor node health, GPU performance, and earnings with Prometheus and the Livepeer Explorer.` | PASS | Subject-first, under 160 chars (86 chars). UK English. No self-reference. |
| `pageType` | No | MISSING | FAIL | Required field absent (check 1.1). CRITICAL. |
| `audience` | Yes | `orchestrator` | PASS | 7-token canonical value. |
| `purpose` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `complexity` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `lifecycleStage` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `keywords` | Yes | `["livepeer", "orchestrators", "monitoring", "stats", "prometheus", "metrics"]` | FAIL | "livepeer", "orchestrators", "stats" are too generic (check 1.13). Stronger: `"livepeer orchestrator monitoring"`, `"prometheus go-livepeer metrics"`, `"livepeer node health check"`, `"orchestrator GPU monitoring"`. |
| `og:image` | Yes (partial) | `/snippets/assets/site/og-image/fallback.png` with 4 additional OG fields | PASS | All 5 OG fields present: `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. |
| `status` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `veracityStatus` | No | MISSING | FAIL | Required field absent (check 1.1). |
| `industry` | No | MISSING | FAIL | Required field absent. Add: `industry: ["technical", "livepeer"]` |
| `niche` | No | MISSING | FAIL | Required field absent. Add: `niche: ["infrastructure", "hardware"]` |

**Frontmatter summary:** 3 PASS, 10 FAIL. OG block is the one fully correct section. Missing fields: `pageType`, `purpose`, `complexity`, `lifecycleStage`, `status`, `veracityStatus`, `industry`, `niche`. Title has a voice violation. Keywords too generic.

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `pageType`, `purpose`, `complexity`, `lifecycleStage`, `status`, `veracityStatus`, `industry`, `niche`. 8 required fields absent. `pageType` absence is CRITICAL — the page cannot be classified or routed correctly. |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | Field missing. Correct value: `'guide'` — the page orients the reader on what to monitor and how to set up monitoring tools, combining H2 sections with operational overview. Alternative: `'instruction'` if procedural steps are primary. Current content leans toward `guide` (overview + sections, not a single step-by-step task). Human confirmation recommended. See Blocking Decisions. |
| 1.3 | `pageVariant` valid if present | N/A | Field not present. |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field missing. Correct value: `'operate'` — "manage live system day-to-day". The page describes what to track and tools to use once the system is running. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical. |
| 1.6 | `complexity` single canonical value | FAIL | Field missing. Correct value: `'intermediate'` — assumes running node, Prometheus familiarity. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field missing. Correct value: `'operate'` — day-to-day running of a live system. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field missing. Page has an inline comment `{/* Should include community tooling for doing this as well as link to Explorer */}` at line 21 — this is an open scope note indicating incomplete content. Correct value: `unverified`. `status` field is also missing. |
| 1.9 | `industry` array valid if present | FAIL | Field missing. Add: `industry: ["technical", "livepeer"]` |
| 1.10 | `niche` array valid if present | FAIL | Field missing. Add: `niche: ["infrastructure", "hardware"]` |
| 1.11 | `description` well-formed | PASS | 86 chars, subject-first, UK English, no self-reference. |
| 1.12 | OG image block complete | PASS | All 5 fields present and correctly formed. |
| 1.13 | `keywords` field quality | FAIL | "livepeer", "orchestrators", "stats" are not searcher-intent queries. Replace: `"livepeer orchestrator monitoring"`, `"prometheus go-livepeer metrics"`, `"livepeer node GPU monitoring"`, `"orchestrator reward call automation"`, `"livepeer explorer active set"` |

**Category 1 verdict:** 3 PASS, 9 FAIL, 1 N/A.

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings found. Candidates checked: "utilisation" (line 41, UK — PASS), no "optimize", "analyze", "behavior". |
| 2.2 | Zero banned words | PASS | Candidates checked: no "effectively", "essentially", "basically", "meaningful", "significant" (as intensifier), "various", "several", "obviously", "clearly". Full evidence in Banned Construction Scan. |
| 2.3 | Zero banned phrases | PASS | Candidates checked: no "This section covers", "This page covers/explains/walks you through", "rather than", "It is important to note", "among other factors". |
| 2.4 | Zero banned constructions | FAIL | Line 49: `If you do not call **reward()** every round, you stop earning inflation rewards.` — `if [condition]` construction in body prose (inside a Warning block). The Warning block context makes this borderline but the construction still uses the banned pattern. See Banned Construction Scan. Also: line 62: `use or build Grafana dashboards` contains implicit `can` that is resolved as direct instruction — acceptable. |
| 2.5 | Opening order correct | PASS | Line 25: "Operating an orchestrator means keeping the node online, processing jobs correctly, calling rewards each round, and redeeming tickets." — subject-first, outcome-oriented, no caveat. |
| 2.6 | Paragraph discipline | FAIL | The page is extremely thin. Most "paragraphs" are single sentences or a table. The "Prometheus and Grafana" section (line 62) is one paragraph that covers what should be a full procedure. The page ends abruptly with "See also" cards — there is no closing fact, number, or next step beyond navigation cards. The inline comment at line 21 suggests the author knows content is incomplete. |
| 2.7 | Audience register correct | PASS | Operational and technical register. "NVIDIA DCGM exporter" and "Node exporter" are hardware-specific terms used without over-explanation — correct for orchestrator audience. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically", "The network rewards you for", "Easy to set up", "Simple configuration". |
| 2.9 | No passive value statements | PASS | No value claims. Page is descriptive/operational throughout. |
| 2.10 | No hedging openers | PASS | Opens with definition of operator responsibilities, not a caveat. |
| 2.11 | Terminology locked and consistent | FAIL | Line 67: `href="./install-go-livepeer"` — relative path using filename `install-go-livepeer` which does not match the actual file `rs-install.mdx` or its path `v2/orchestrators/setup/rs-install`. This is a broken relative link (see Cat 8). Line 68: `href="../advanced/rewards-and-fees"` — relative path to `../advanced/rewards-and-fees` which does not exist in docs.json (no `advanced` group in orchestrators). See Cat 8. Terminology terms used: "active set" used at line 44, 55 — consistent. "reward cut" not used. "probabilistic micropayments" not referenced — acceptable for a monitoring page. |

**Category 2 verdict:** 7 PASS, 3 FAIL.

---

## Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | See Heading Score Table. "What to track" scores 14/25 (FAIL). "See also" — EXEMPT (treated as "Related Pages" structural element — invisible to this check per check 3.1 and learnings.md P16). |
| 3.2 | No banned or weak standalone heading terms | FAIL | (1) "What to track" — question form using a structure verb. Also, check 3.2 lists **Banned** terms but does not explicitly list "What to track" as banned. However, it violates the principle of naming the thing (CLAUDE.md: "BAD: 'Is reward calling profitable?' — GOOD: 'Reward Call Threshold'"). Fix: `Monitoring Layers` or `Metric Targets`. (2) "See also" — **EXEMPT** per learnings.md (treated as "Related Pages" equivalent structural element). Not scored. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. |
| 3.4 | Domain-anchor rule applied | FAIL | "What to track" has no domain noun — could apply to any system. "Prometheus and Grafana" (line 60) is specific — PASS. "Built-in metrics" (line 27) — PASS, includes domain anchor (built-in to go-livepeer). "Explorer" (line 51) — minimal, but interpreted in context. |
| 3.5 | Heading names concept, not examples | FAIL | "What to track" names an activity, not a concept. "Explorer" names a product but not the concept (what is the section about — network status monitoring? on-chain health?). Fix: `Explorer Monitoring` or `On-Chain Status`. |
| 3.6 | Title well-formed | FAIL | `Monitoring Your Orchestrator Setup` — 4 words but uses personal pronoun "Your" and generic "Setup". Check 3.6: "concept-derived, no banned forms". "Your" is a voice violation. "Setup" is a banned standalone heading term per check 3.2 Avoid tier and CLAUDE.md examples. Fix: `Orchestrator Monitoring` (2 words, concept-derived). |
| 3.7 | Sounds like expert editorial choice | FAIL | "What to track", "Prometheus and Grafana", "Explorer", "Built-in metrics" — a mix of low-signal and product-name headings. "Prometheus and Grafana" names tools without stating the concept. Fix: rename to `Prometheus Setup` or `Metrics Stack`. "Explorer" is minimal but passable in context. |

**Category 3 verdict:** 1 PASS, 5 FAIL, 1 exempt. Multiple heading failures; this category needs significant remediation.

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single audience (orchestrator), single job (set up monitoring for their running node). Purpose is clear. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand what metrics to track and how to set up Prometheus/Explorer monitoring." Valid purpose statement. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | PREV = `test` (docs.json line 2865). A reader who has just tested their node is ready to set up monitoring — correct sequence. NEXT = none — last page in Setup group. The "See also" cards provide forward routing to guides. Acceptable as terminal page. |
| 4.4 | No dead ends | FAIL | The "See also" links include two broken relative paths (see Cat 8). If both links are broken, readers at the end of the Setup group have no working onward route. Additionally, the page itself is thin — the Prometheus/Grafana section gives no actual setup procedure, just a statement to "run Prometheus with a scrape config". There is no scrape config shown, no Grafana dashboard referenced. A reader arriving here expecting to set up monitoring is left without actionable steps. |
| 4.5 | Prerequisites stated or linked | FAIL | No prerequisites section. Page assumes reader has a running orchestrator node but does not state this. The `purpose: operate` pages should note operating prerequisites. Minimum: a note that this follows completion of the Setup flow. |
| 4.6 | Out-of-scope is clear | PASS | Page focuses on monitoring tools and metrics. Does not attempt to cover economics or configuration in depth. |
| 4.7 | Information type per section correct | FAIL | `purpose: operate` permits `procedural` (primary) and `factual` (secondary). The "Prometheus and Grafana" section (line 60–62) is `narrative` — it describes what to do without procedures. `narrative` is not in the permitted types for `operate`. The section says "run Prometheus with a scrape config" but provides no scrape config. For a page claiming `purpose: operate`, this section is underdeveloped. |
| 4.8 | No content duplication from adjacent sections | PASS | No apparent duplication from `rcs-requirements`, `rs-install`, or `configure`. |
| 4.9 | Section orientation page present | N/A | Section-level check. |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check. |

**Category 4 verdict:** 3 PASS, 4 FAIL, 2 N/A. Page is structurally thin — the Prometheus/Grafana section is insufficient for its claimed purpose.

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | FAIL | `pageType` is missing, so correct template cannot be determined. If `guide`: template = Overview + Steps or H2 sections — partially met. If `instruction`: template = Prerequisites + Steps — Prerequisites missing. See Blocking Decisions. |
| 5.2 | Required sections present | FAIL | Prerequisites section absent. No formal "Next Steps" section (replaced by "See also" card group). For either `guide` or `instruction`, prerequisites should be present. |
| 5.3 | Only approved components used | NOT-TESTED | `component-layout-decisions.mdx` not read. Components used: `CustomCodeBlock`, `Warning`, `Columns`, `Card`. Standard components (`Table`) also used inline. `Columns` is not in the standard matrix for any pageType in the quick reference — cannot confirm approval without reading catalog. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon in rendered content. The `{/* Should include... */}` at line 21 is a JSX comment — not rendered. |
| 5.5 | Information type → component mapping correct | FAIL | Table at line 39–46 is appropriate for `reference`-type data. Warning at line 49 is correct for a gate condition. But "Prometheus and Grafana" section is pure prose with no code block for the scrape config — if the intent is to give the reader a working scrape config, a `CustomCodeBlock` is missing. |
| 5.6 | MDX renders clean | PASS (visual) | JSX appears well-formed. No unclosed tags visible. Import on line 23 is valid. |
| 5.7 | No old-schema frontmatter | N/A | `pageType` is missing — cannot check for deprecated values in a missing field. No other deprecated values found in present fields. |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS. |
| 5.9 | Generated file banners intact | N/A | No `generated-file-banner` — hand-authored page. |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports. Import from correct snippets path. |

**Category 5 verdict:** 2 PASS, 3 FAIL, 1 NOT-TESTED, 4 N/A.

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | **NOT-TESTED** on all claims. Key claims: (1) Line 29–30: `http://localhost:7935/metrics` — the metrics endpoint. NOT-TESTED against live go-livepeer with `-monitor=true`. (2) Line 29: `-monitor=true` flag — NOT-TESTED as a valid current CLI flag. (3) Line 41: GPU utilisation, VRAM, temperature via `nvidia-smi` — this is a standard nvidia claim, likely accurate but NOT-TESTED. (4) Line 47: named metrics `livepeer_segment_processed_total`, `livepeer_segment_errors_total`, `livepeer_transcode_latency_seconds` — NOT-TESTED against live Prometheus export. (5) Line 47: "High error rates reduce selection probability" — NOT-TESTED causal claim. |
| 6.2 | Code/commands tested | FAIL | **NOT-TESTED.** The one code block (line 31–35: `http://localhost:7935/metrics`) is untested. The `-monitor=true` flag referenced in prose (line 29) is untested. |
| 6.3 | No deprecated API usage | FAIL (NOT-TESTED) | `-monitor=true` flag referenced in body prose — not confirmed against current go-livepeer v0.8.9 flag documentation. Cannot confirm without testing. |
| 6.4 | Numbers are real | N/A | No version numbers or specific numeric claims beyond the metrics endpoint port `7935`. Port `7935` is a standard go-livepeer default — likely accurate but NOT-TESTED. |
| 6.5 | REVIEW flags for unverified claims | FAIL | Line 21: `{/* Should include community tooling for doing this as well as link to Explorer */}` — this is a content scope note, not a properly formatted REVIEW flag. It signals incomplete content. Correctly formatted: `{/* REVIEW: add community monitoring tools (livepeer-monitoring, community dashboards) and link to Explorer — source: forum.livepeer.org */}`. Additionally, all unverified metric names at line 47 should have REVIEW flags. |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` field is missing. Given multiple NOT-TESTED claims, correct value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | FAIL | Metric names at line 47 (`livepeer_segment_processed_total` etc.) are tied to go-livepeer internals and can change across versions. No staleness flag. Fix: `{/* REVIEW: verify metric names against go-livepeer v0.8.9 Prometheus export — https://github.com/livepeer/go-livepeer/blob/v0.8.9/monitor/monitor.go */}` |
| 6.9 | No open-ended research tasks | FAIL | Line 21 comment `{/* Should include community tooling... */}` is an open-ended task with no named source, no concrete next step, and no timeline. Rephrase as a proper REVIEW flag with a source (see 6.5 fix above). |

**Category 6 verdict:** 0 PASS, 7 FAIL, 2 N/A. All technical/procedural content NOT-TESTED. Open content scope note at line 21 is unresolved.

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Found at docs.json line 2866: `"v2/orchestrators/setup/r-monitor"` |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/setup/r-monitor.mdx`. docs.json path matches. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check. |
| 7.4 | No structural orphans | PASS | In docs.json Setup group. Reachable from navigation. |
| 7.5 | Audience journey complete | FAIL | This is the terminal page in the Setup group. After monitoring setup, the orchestrator needs to know: (1) what to do if something goes wrong, and (2) how to optimise. The "See also" cards are the only routing out — and two of the three card links are broken (see Cat 8). A broken terminal page creates a dead end for the entire Setup journey. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/setup/`. |
| 7.8 | File naming conventions | PASS | Prefix `r-` = reference. Acceptable — page includes a reference table (monitoring layers). However, for a primarily operational guide, `r-` is borderline. Not a blocking issue. |
| 7.9 | _workspace/ TTL compliance | N/A | Not in `_workspace/`. |

**Category 7 verdict:** 4 PASS, 1 FAIL, 3 N/A.

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | Three internal links found in "See also" Cards (lines 67–70). All use relative paths. (1) Line 67: `href="./install-go-livepeer"` — relative path resolves to `v2/orchestrators/setup/install-go-livepeer`. Searched docs.json: NOT FOUND. Actual install page is `v2/orchestrators/setup/rs-install`. **Broken link.** Fix: `href="/v2/orchestrators/setup/rs-install"` (2) Line 68: `href="../advanced/rewards-and-fees"` — relative path resolves to `v2/orchestrators/advanced/rewards-and-fees`. Searched docs.json: NOT FOUND. No `advanced` group exists in the orchestrators navigation. **Broken link.** Fix: Cannot determine correct target without knowing what "rewards-and-fees" maps to in current IA. Candidate: check if content lives in `guides/payments-and-pricing/` or `guides/staking-and-rewards/`. Human confirmation required. (3) Line 69: `href="../resources/faq"` — relative path resolves to `v2/orchestrators/resources/faq`. Searched docs.json for `v2/orchestrators/resources/faq`: **FOUND** in resources group. PASS. |
| 8.2 | All external links live | PASS | One external link: line 53 `https://explorer.livepeer.org` — major Livepeer infrastructure URL. NOT-TESTED via HTTP, but this is the canonical Explorer URL and assumed live. |
| 8.3 | All snippet imports resolve | PASS | Line 23: `import { CustomCodeBlock } from '/snippets/components/content/code.jsx'` — standard path, consistent with rs-install.mdx. |
| 8.4 | All images load | N/A | OG image is frontmatter only. No inline images. |
| 8.5 | Page renders without error | NOT-TESTED | Not run against Mintlify renderer. JSX appears well-formed. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | Line 21 JSX comment is not rendered. No TODO/TBD/Coming Soon in body. |

**Category 8 verdict:** 1 PASS, 1 FAIL, 1 NOT-TESTED, 2 N/A.

**Critical findings:**
- Line 67: `./install-go-livepeer` — broken. Fix: `/v2/orchestrators/setup/rs-install`
- Line 68: `../advanced/rewards-and-fees` — broken. Target unknown. Human confirmation required.

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off recorded. |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed. |
| 9.3 | Gate prerequisites met | FAIL | Tab-status.md shows Orchestrators: IA Draft only, Terminology No, Content Pass No. |
| 9.4 | Phase ordering respected | N/A | Cannot verify. |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | Not yet at feedback stage. |

**Category 9 verdict:** 0 PASS, 2 FAIL, 4 N/A.

---

## Banned Construction Scan

**Scope applied:** body prose, headings, frontmatter description, Notes, Warnings, table cells, card descriptions, component props.

| Line | Sentence / text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| Title | `Monitoring Your Orchestrator Setup` | None matching | Heading — voice issue (not a construction violation) | No (separate issue, Cat 3.6) |
| Description | `Monitor node health, GPU performance, and earnings with Prometheus and the Livepeer Explorer.` | None | Direct instruction | No |
| 25 | "Operating an orchestrator means keeping the node online, processing jobs correctly, calling rewards each round, and redeeming tickets." | None | Factual definition | No |
| 25 | "Monitoring helps you spot failures before they cost you income or reputation." | None | Direct value claim | No |
| 29 | "With `-monitor=true`, go-livepeer exposes Prometheus-compatible metrics at:" | `can`/`may` — none | Factual statement | No |
| 39–46 | Table cells: "GPU utilisation, VRAM, temperature", "go-livepeer health, segment/job success rate", etc. | None | Reference data | No |
| 47 | "Key metrics include: `livepeer_segment_processed_total`..." | None | Reference list | No |
| 47 | "High error rates reduce selection probability." | None | Direct factual claim | No |
| 49 | Warning: "**If** you do not call **reward()** every round, you stop earning inflation rewards. Automate reward calls or use a service that does." | `if [condition]` | **FAIL** — `if` conditional in body prose (inside Warning block). Technically banned construction. However: the Warning block context signals a consequence/gate pattern. This is borderline — the Warning block is a recognised gate mechanism. The construction is still technically `if [condition]`. Flag for human review. Fix option: "Reward() must be called every round. Missed rounds lose inflation rewards — automate or use a service." | **FLAG** (BORDERLINE) |
| 53 | "Use the [Livepeer Explorer](https://explorer.livepeer.org) to check:" | None | Direct instruction | No |
| 62 | "For production, run Prometheus with a scrape config for your node(s), and **use or build** Grafana dashboards." | `can`/`may` — none; `use or build` | `use or build` — not a banned construction, it is an imperative offering two valid paths. | No |
| 62 | "Add **Node exporter** and **NVIDIA DCGM exporter** for host and GPU metrics." | None | Direct instruction | No |
| Card desc (line 67) | `Install go-livepeer` | None | Card title | No |
| Card desc (line 68) | `Rewards and fees` | None | Card title | No |
| Card desc (line 69) | `FAQ` | None | Card title | No |

**Banned word candidates checked against file:**
- `effectively` — 0 occurrences. PASS.
- `essentially` — 0 occurrences. PASS.
- `basically` — 0 occurrences. PASS.
- `meaningful` — 0 occurrences. PASS.
- `significant` — 0 occurrences. PASS.
- `real` (as intensifier) — 0 occurrences. PASS.
- `various` — 0 occurrences. PASS.
- `several` — 0 occurrences. PASS.
- `obviously` — 0 occurrences. PASS.
- `clearly` — 0 occurrences. PASS.

**FAIL constructions (1 BORDERLINE):**
1. Line 49: `if [condition]` in Warning block — BORDERLINE. Recommend human review. Proposed direct-assertion fix: "Reward() must be called every round. Missed rounds forfeit inflation rewards — automate or use a service."

---

## Heading Score Table

**Note:** "See also" heading is exempt from all scoring (treated as "Related Pages" equivalent per learnings.md P16 — total exemption, no row, no N/A). Table headings in the "What to track" table are not H-level headings — not scored. Layer column cell values (**Hardware**, **Application** etc.) are bold table cell labels, not headings — not scored.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Monitoring Your Orchestrator Setup` (title) | 3 | 2 | 3 | 3 | 2 | 13/25 | FAIL |
| `Built-in metrics` | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL (1 below threshold) |
| `What to track` | 2 | 1 | 3 | 3 | 4 | 13/25 | FAIL |
| `Explorer` | 3 | 2 | 4 | 3 | 5 | 17/25 | FAIL |
| `Prometheus and Grafana` | 3 | 2 | 4 | 4 | 4 | 17/25 | FAIL |

**Scoring rationale:**

`Monitoring Your Orchestrator Setup` — **13/25 FAIL** (title)
- Precision 3: Names the domain and the action, but "Setup" is a generic container. What aspect of setup?
- Depth 2: "Setup" signals nothing about scope or depth — monitoring what, at what layer?
- Stability 3: Would survive content changes but would also survive on any monitoring page anywhere.
- Clarity 3: "Your Orchestrator Setup" — the pronoun "Your" and the word "Setup" both weaken signal.
- Conciseness 2: 4 words for what could be "Orchestrator Monitoring" (2 words).
- Fix: `Orchestrator Monitoring` (projected 22/25).

`Built-in metrics` — **19/25 FAIL** (1 below threshold)
- Precision 4: Names what it is — metrics built into go-livepeer.
- Depth 3: "Built-in" implies native vs third-party, but doesn't state what the metrics cover.
- Stability 4: Stable unless the feature moves outside the binary.
- Clarity 4: Clear for the audience.
- Conciseness 4: Concise.
- Fix: `Built-in Metrics Endpoint` or `go-livepeer Metrics` would reach 21+/25.

`What to track` — **13/25 FAIL**
- Precision 2: Names an activity, not a concept. "What to track" is a question/instruction form (CLAUDE.md: bad examples include question forms in headings).
- Depth 1: Zero depth signal — does not hint at the monitoring layers, frameworks, or priorities.
- Stability 3: Stable because it's generic.
- Clarity 3: Clear about the general intent but not actionable.
- Conciseness 4: Short.
- Fix: `Monitoring Layers` (projected 22/25).

`Explorer` — **17/25 FAIL**
- Precision 3: Names the tool but not what you use it for on this page.
- Depth 2: Single word — no depth signal.
- Stability 4: Tied to a product name — stable.
- Clarity 3: Ambiguous without context — Explorer of what?
- Conciseness 5: One word.
- Fix: `Explorer Monitoring` or `On-Chain Status` (projected 21/25).

`Prometheus and Grafana` — **17/25 FAIL**
- Precision 3: Names two tools but not what they do in this context.
- Depth 2: "Prometheus and Grafana" says nothing about scrape configuration, dashboards, or setup.
- Stability 4: Tied to product names.
- Clarity 4: Familiar to the orchestrator audience.
- Conciseness 4: Three words.
- Fix: `Prometheus Setup` or `Metrics Stack` (projected 22/25).

**All 5 scored headings fail.** This is the weakest category on the page.

---

## Spelling/Typo Check

Scanned all visible text: headings, table cells, prose, Warning block, card titles, description, keywords.

- `Prometheus` — consistent capitalisation throughout.
- `Grafana` — consistent.
- `nvidia-smi` (line 41) — lowercase, correct for CLI.
- `livepeer_segment_processed_total` etc. — underscores consistent with Prometheus naming convention.
- `DCGM` (line 62) — correct acronym for NVIDIA DCGM Exporter.
- `reward()` (line 49) — correct function call notation with parentheses.
- `GPU` — consistent throughout.

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for page type (undecided `guide` vs `instruction`)? | Notes |
|-----------|-------|------------------------------------------------------------------|-------|
| `CustomCodeBlock` | Yes | Guide: NOT-TESTED. Instruction: NOT-TESTED. | Single instance for metrics URL (line 31). |
| `Warning` | Yes | Both types: Yes — listed in Preferred for both `guide` and `tutorial`/`instruction`. | Correctly used for a critical operational gate (reward() reminder). |
| `Columns` | Yes | NOT-TESTED | Used at line 66 to wrap the "See also" cards. `Columns` not in the standard matrix. Cannot confirm approval. |
| `Card` | Yes | Guide: Yes — `Card`/`CardGroup` in Preferred for `guide`. NOT-TESTED for instruction. | Used inside `Columns` block. |
| `Table` (markdown) | Yes | Guide: Yes. Instruction: Yes. | Used for "What to track" layer matrix. Appropriate. |

---

## Cross-Category Connections

```
Root Cause CC-1: pageType field missing — cascading classification failure
Affects: Cat 1.1 + Cat 1.2 + Cat 5.1 + Cat 5.2
Fix: Add pageType: 'guide' to frontmatter. (Confirm with human — see Blocking Decisions.)
```

```
Root Cause CC-2: Missing required frontmatter fields (8 fields)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10
Fix: Add to frontmatter block:
     pageType: 'guide'
     purpose: 'operate'
     complexity: 'intermediate'
     lifecycleStage: 'operate'
     status: 'draft'
     veracityStatus: 'unverified'
     industry: ["technical", "livepeer"]
     niche: ["infrastructure", "hardware"]
     (status should be 'draft' not 'current' given open scope note and NOT-TESTED content)
```

```
Root Cause CC-3: Two broken internal links — "See also" routing disabled
Affects: Cat 2.11 + Cat 4.4 + Cat 7.5 + Cat 8.1
Fix 1 (confirmed): Line 67: ./install-go-livepeer → /v2/orchestrators/setup/rs-install
Fix 2 (needs human): Line 68: ../advanced/rewards-and-fees — target path unknown.
     Human must identify correct target in current IA before this can be fixed.
     Candidate paths to check: v2/orchestrators/guides/staking-and-rewards/earning-model
     or v2/orchestrators/guides/payments-and-pricing/payments
```

```
Root Cause CC-4: All headings fail threshold
Affects: Cat 3.1 + Cat 3.2 + Cat 3.4 + Cat 3.5 + Cat 3.6 + Cat 3.7
Fix map:
  Title: "Monitoring Your Orchestrator Setup" → "Orchestrator Monitoring"
  "Built-in metrics" → "go-livepeer Metrics" (or keep, borderline pass at 19)
  "What to track" → "Monitoring Layers"
  "Explorer" → "Explorer Monitoring"
  "Prometheus and Grafana" → "Prometheus Setup"
```

```
Root Cause CC-5: Page content is thin / incomplete
Affects: Cat 2.6 + Cat 4.4 + Cat 4.5 + Cat 4.7 + Cat 5.2 + Cat 6.5
Description: The "Prometheus and Grafana" section has no scrape config, no dashboard links,
             no actual setup steps. The open comment at line 21 confirms known gaps.
             This is a stub-level page masquerading as a complete guide.
Fix: This is a content expansion task. Two options:
     [A] Expand Prometheus section with minimal scrape config example and link to community dashboards
     [B] Acknowledge page as stub, set status: draft, scope expansion as a separate work item
     Human approval required before expansion.
```

---

## Blocking Decisions

```
Blocking Decision 1: pageType ambiguity
Question: Is this page a 'guide' (overview + H2 sections, no mandatory steps sequence)
          or an 'instruction' (step-by-step procedure)?
Current content: more 'guide' — sections describe layers, tools, and what to check.
                 No step sequence. No Prerequisites section.
Options:
  [A] pageType: 'guide' — page describes monitoring tools and strategy, reader implements independently
  [B] pageType: 'instruction' — page should be a step-by-step procedure for setting up monitoring
If A: Add purpose: 'operate', keep H2 section structure, fix headings, note prerequisites implicitly.
If B: Rewrite as step-by-step: Step 1 enable metrics, Step 2 configure Prometheus, Step 3 set up Explorer.
      Requires content expansion (see CC-5).
Recommendation: [A] is the correct choice for current content level. [B] would require a full rewrite.
```

```
Blocking Decision 2: Broken "Rewards and fees" link target
Question: What page should ../advanced/rewards-and-fees map to in the current IA?
Options must be confirmed against docs.json.
Candidate A: /v2/orchestrators/guides/staking-and-rewards/earning-model
Candidate B: /v2/orchestrators/guides/payments-and-pricing/payments
Human must confirm before link can be fixed.
```

---

## Final Verdict

**NEEDS WORK — approaching REWRITE REQUIRED for some sections**

**Blocking issues (fix before any publish consideration):**
1. `pageType` field missing — entire classification of the page is undefined (CC-1)
2. 8 missing required frontmatter fields (CC-2)
3. 2 broken internal links — one confirmed fix, one needs human decision (CC-3)
4. Page content is thin/incomplete — Prometheus section has no actionable procedure (CC-5)
5. All 5 headings fail the 20/25 threshold (CC-4)
6. All technical content NOT-TESTED (Cat 6)

**High-priority fixes (do before content pass):**
7. Title voice violation: "Your Orchestrator Setup" → "Orchestrator Monitoring"
8. Missing prerequisites section
9. Open scope note at line 21 — convert to proper REVIEW flag with named source
10. Keywords too generic — replace with searcher-intent queries

**Low-priority fixes (polish):**
11. Warning block `if [condition]` construction — rephrase as direct assertion (BORDERLINE)
12. `r-` prefix is borderline for this page type; not blocking

**Structural assessment:** Unlike rs-install.mdx, this page has a content problem, not just a frontmatter problem. The Prometheus/Grafana section is a stub. The heading structure is weak throughout. The terminal position in the Setup group amplifies every gap — if this page is thin and the two outbound links are broken, the Setup journey ends in a dead end. The page needs both metadata fixes and content expansion before it can pass a content review.
