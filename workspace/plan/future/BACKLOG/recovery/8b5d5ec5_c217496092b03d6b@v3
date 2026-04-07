# Orchestrators Tab Page Inventory

Generated: 2026-03-24
Source of truth: `v2/orchestrators/_workspace/canonical/IA.mdx` (ia-data.json)
Scope: All live `.mdx` files in `v2/orchestrators/` excluding `_workspace/` and `x-deprecated/` directories.

## Counts

| Metric | Count |
|---|---|
| IA table entries | 73 |
| Live .mdx files (excl. _workspace, x-deprecated) | 88 |
| Files mapped to IA | 73 |
| Orphans (live file, not in IA) | 16 |
| Gaps (IA entry with empty description) | 42 |
| Duplicates (same topic, multiple files) | 4 pairs |
| Deprecated pageType values | 5 files |

---

## Decision Log

### S1: Start Here — portal.mdx (2026-03-24)

**Verdict:** NEEDS WORK — fixed what I could, flags remain

**Changes made:**
- `pageType: landing` → `pageType: navigation`
- `purpose: landing` → `purpose: orient`
- "idle GPU downtimes" → "idle GPU downtime" (uncountable noun)

**Flags for human:**
- `docker pull livepeer/go-livepeer:master` — is `:master` the correct tag?
- Missing 6 taxonomy frontmatter fields (complexity, lifecycleStage, industry, niche, informationType, veracityStatus) — batch operation across all pages?
- Dead Gateway Portal commented-out code at bottom — remove?
- Long TODO comment block at top — still needed?

---

### S1: Start Here — navigator.mdx (2026-03-24)

**Verdict:** NEEDS WORK — fixed what I could, flags remain

**Changes made:**
- `pageType: landing` → `pageType: navigation` (per D-NAV-01 locked decision)
- `purpose: orientation` → `purpose: orient` (standard enum)
- Removed banned construction "This page routes to..." → entity-led rewrite
- "workers" → "pool nodes" (deprecated term fix)

**Flags for human:**
- "AIServiceRegistry" claim — needs verification (is this the actual registry name?)
- "minimal LPT" — how minimal? Should state actual number or range
- Links to deprecated `join-a-pool.mdx` — switch to `new-join-a-pool.mdx`?
- Missing 6 taxonomy frontmatter fields — same batch question as portal
- "Orchestrators carry governance weight" accordion — verify this is still accurate post-treasury changes

---

### S2: Concepts — role.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 6/10 — fixed 3 issues

**Changes made:**
- `pageType: overview` → `pageType: concept`
- `purpose: overview` → `purpose: explain`
- "Pool worker" → "Pool node" (deprecated term)
- "differ significantly" → "differ at every level" (banned word)

**Flags for human:**
- Line ~151: Verify "Q3 2024" as AI subnet launch date
- Page lacks concrete earnings numbers — is this the right place for them or do cross-refs to Incentive Model suffice?

---

### S2: Concepts — capabilities.mdx (2026-03-24)

**Verdict:** PASS — 8/10 — no content fixes needed

**Issues:** Missing 6 taxonomy frontmatter fields (batch operation). Headings "How Capabilities Are Advertised" and "How Gateways Select Orchestrators" could be tighter (→ "Capability Advertisement", "Gateway Selection").

**Flags for human:**
- TODO at line ~172: Confirm pipeline list against current AI subnet

---

### S2: Concepts — architecture.mdx (2026-03-24)

**Verdict:** PASS — 8/10 — no content fixes needed

**Issues:** Missing 6 taxonomy frontmatter fields (batch operation).

**Flags for human:**
- Verify AIServiceRegistry contract address `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5`
- Tab title "Combined (solo)" — decide if "Combined" triggers deprecated term rule in deployment context (my view: no, because the deprecated "Combined/Hybrid" refers to workload mode, not process layout)

---

### S2: Concepts — incentive-model.mdx (2026-03-24)

**Verdict:** PASS — 9/10 — highest-scoring page so far

**Issues:** Missing 6 taxonomy frontmatter fields only (batch operation).

**Flags for human:**
- TODOs at lines ~171 and ~274 for fee cut distribution and reward-call gas cost
- Verify GPU reference list (RTX 3090, 4090, A100, H100) is current

---

### S3: Quickstart — guide.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 7/10 — fixed voice issues

**Changes made:**
- "The quickstart runs two off-chain smoke tests" → entity-led rewrite (removed doc-as-subject)
- "Both tests are on the same page" → removed self-reference

**Flags for human:**
- Heading "What you need" → consider "Prerequisites" for consistency

---

### S3: Quickstart — video-transcoding.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 7/10 — fixed voice + constructions

**Changes made:**
- "Two smoke tests on this page" → "Two smoke tests follow" (removed self-reference)
- "Use this page to verify hardware" → entity-led rewrite
- "Install the toolkit before continuing when this check fails" → removed conditional construction
- "when you switch to the Ollama-based LLM path" → removed conditional construction

**Flags for human:**
- go-livepeer version string `v0.8.x` — needs verification
- All "expected log" strings need verification against current go-livepeer output
- TODO in source about local inference endpoint path — unresolved
- `pageType: quickstart` — deprecated alias for `instruction` (quickstart variant)

---

### S3: Quickstart — tutorial.mdx (2026-03-24)

**Verdict:** DECISION NEEDED — 5/10 — possible redundant page

**No changes made.** This page is a thin routing page (3 links, minimal content) that duplicates the routing function of guide.mdx. It has wrong pageType (`tutorial` but contains no procedural steps), missing `purpose` field, and self-referential voice.

**Decision needed:** Keep, merge into guide.mdx, or remove? My recommendation: remove. The guide.mdx overview already provides the same routing with more context.

---

### S3: Quickstart — AI-prompt-start.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 7/10 — fixed voice, flags remain

**Changes made:**
- "This quickstart extends an existing transcoding node. It covers..." → entity-led rewrite

**Flags for human:**
- `pageType: guide` — this is procedural (step-by-step), should be `instruction` (quickstart variant)?
- VRAM tier routing table — verify values are current for each pipeline
- Docker image tag `:master` — should this be `:stable`?
- Page assumes on-chain node but lives in quickstart section (off-chain) — scope mismatch. Does this page belong in quickstart or in setup/guides?
- `status: review` — is this page ready for `current`?

---

### S4: Setup — all 7 pages (2026-03-24)

**Verdict:** NEEDS WORK — avg 7.5/10 — all mechanical fixes applied

**Changes made (all 7 pages):**
- `pageType: how_to` → `pageType: instruction` (6 pages) + `pageType: overview` → `pageType: instruction` (guide.mdx)
- Deprecated `purpose: how_to` → appropriate values per page

**Additional fixes:**
- test.mdx: "this page is complete" → "verification is complete" (self-reference)
- r-monitor.mdx: "~24 hours" → "~22 hours" (consistency)
- r-monitor.mdx: Fixed logic error in reward-call troubleshooting list

**Flags for human:**
- configure.mdx + connect-and-activate.mdx: missing `purpose` field entirely
- go-livepeer version `v0.8.9` — verify current
- VRAM claim "~12-18 GB" for SDXL-Lightning — verify
- Reward cut (10%) / fee cut (95%) recommendations — verify still standard
- `if [condition]` in troubleshooting context — exempt from banned construction rule?

---

### S5: Operator Considerations — operator-rationale.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 5/10 — heavy fixes applied

**Changes made:**
- Removed corrupt bytes (`glrw\npwrfs`) before frontmatter
- "pool worker" → "pool node" (10 instances, including keyword)
- "significantly" removed (3 instances) — replaced with quantified alternatives
- "Use this page to choose that path" → entity-led rewrite (removed self-reference)

**Flags for human:**
- Verify active-set size, ABR bandwidth figures, Arbitrum gas ranges, electricity costs
- `if [condition]` constructions at lines ~277 and ~289 — lower priority, evaluation context

---

### S5: Operator Considerations — business-case.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 7/10 — fixed 3 issues

**Changes made:**
- "hybrid" → "dual mode" (deprecated term)
- "Use this page to decide" → entity-led rewrite
- Self-reference removed

**Flags for human:**
- `if [condition]` at line ~188 — in explanatory prose, borderline
- TODOs: commercial operator revenue framing, named pool operators

---

### S5: Operator Considerations — operator-impact.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 7/10 — fixed 1 issue

**Changes made:**
- "meaningfully different" → "structurally different" (banned word)

**Flags for human:**
- Verify poll creation cost (100 LPT), polling period (~10 rounds), quorum threshold (33.33%)
- Verify Livepeer Foundation launch date "2025"
- `if [condition]` at line ~256

---

### S5: Operator Considerations — requirements.mdx (2026-03-24)

**Verdict:** NEEDS WORK — 7/10 — fixed 3 issues

**Changes made:**
- "significantly lower" → quantified ("drops to low single-digit concurrent sessions")
- "Pool worker" → "Pool node"
- "combined single-machine" → "single-machine" (removed ambiguous deprecated term)
- "Use this page as" → entity-led rewrite

**Flags for human:**
- Verify NVENC consumer-card session cap, CUDA min version, test-stream URL, port numbers
- "combined" usage — removed the ambiguous instance but the concept (all-on-one-machine) is valid

---

### S12: Tutorials — 6 pages (2026-03-24)

**Verdict:** EXCELLENT — avg 8.9/10. Highest-quality section alongside S9-S11.

**Changes made:**
- ai-earning-quickstart.mdx: "late-2025 ETH rates" → "recent ETH rates" (stale temporal reference)

**Flags for human:**
- byoc-cpu-smoke-test.mdx: Docker `--network host` + `-p 8000:8000` conflict (contradictory flags)
- zero-to-first-reward.mdx: unverified `0.90` constant in reward formula
- full-ai-pipeline-tutorial.mdx: inaccurate claim about remote signer handling settlement (off-chain mode has no settlement)
- realtime-ai-tutorial.mdx: unexplained `-v 6` flag, pricing unit unclear (per frame vs per pixel)
- All 6 pages have FACT CHECK comments needing human verification

---

### S13: Resources + Technical Reference — 8 pages (2026-03-24)

**Verdict:** MIXED — 3/10 to 8.5/10. Two problem pages, rest acceptable.

**Changes made:**
- faq.mdx: "This page covers" → entity-led rewrite; "Pool worker" → "Pool node" in accordion title
- glossary.mdx: "pool worker" → "pool node"
- cli-flags.mdx: removed erroneous keywords ("straight", "chatgpt") → replaced with ("go-livepeer", "gRPC")

**Problem pages:**
- community-pools.mdx (3/10): stub with placeholder content, banned "etc.", SVG og:image, exposed internal note
- cli-flags.mdx (6/10): content doesn't match title (no actual CLI flags list), emoji in content, tables need structural fixes

**Cross-cutting:** All 8 resource pages have tables missing `<thead>`/`<tbody>` wrappers. 6 of 8 are `status: review`. Batch table fix needed.

---

### Roadmap and Funding — 2 pages (2026-03-24)

**Verdict:** STUBS — both 2/10, correctly marked `status: draft`. No content to assess.

- funding-and-support.mdx: stub, blocked on SPE programme details
- orchestrator-profiles.mdx: stub, blocked on operator profile source material

---

### S9-S11: Config, Monitoring, Advanced — 12 pages (2026-03-24)

**Verdict:** EXCELLENT — avg 9.1/10. Four perfect 10/10 pages. Strongest sections in the tab.

**Changes made:**
- capacity-planning.mdx: "This page covers" → entity-led rewrite
- explorer-operations.mdx: "pool worker" → "pool node" (2 instances)
- troubleshooting.mdx: "broadcaster" → "gateway" (3 instances)
- gateway-relationships.mdx: "meaningfully" → removed (banned word derivative)
- gateway-orchestrator-interface.mdx: "This page explains" → entity-led rewrite
- pool-operators.mdx: "This page is for" → entity-led rewrite

**Perfect pages:** ai-model-management.mdx, reward-call-tuning.mdx, operator-toolbox.mdx, metrics-and-alerting.mdx, scale-operations.mdx

**Flags for human:**
- metrics-and-alerting.mdx: "Prometheus Metrics Reference" card links to itself — placeholder for future standalone page?
- FACT CHECK comments throughout (all properly formatted) need human verification before publication

---

### S8: Staking and Earning — all 6 pages (2026-03-24)

**Verdict:** GOOD — avg 8.3/10

**Changes made:**
- "Use this page" self-references removed from 4 pages (payments, payment-receipts, delegate-operations, network-participation)
- Also pre-fixed "Use this page" on workload-options, metrics-and-alerting, reward-call-tuning (S7/S9/S10)

**All 7 "Use this page" instances across the entire tab now fixed.**

**Flags for human:**
- payments.mdx and payment-receipts.mdx have heavy content overlap — merge or sharply delineate scope?
- payment-receipts.mdx: missing `purpose` field, `status: draft`, 2 open FACT CHECK comments, pageType `concept` questionable (reads more like `guide`)
- earning-model.mdx: cross-ref links labelled "Payments" point to payment-receipts — mislabelled
- LIP-89 date, LIP-91/92 numbers, inflation figures all need verification
- Explorer screenshots reference `/v1/images/` paths — verify still current

---

### S7: Workloads and AI — all 9 pages (2026-03-24)

**Verdict:** GOOD — avg 8.3/10. Highest-quality section in the tab.

**Changes made:**
- workload-options.mdx: "significantly" removed, "Understanding" rewritten, "broadcaster" → rephrased
- video-transcoding-operations.mdx: "broadcaster" → rephrased, "pool workers" → "pool nodes"
- model-demand-reference.mdx: "significantly" removed, "Understanding the market" heading → "Market pricing"
- model-hosting.mdx: "significantly slower" → "5-10x slower" (quantified)

**Top pages:** realtime-ai-setup.mdx (9.5/10), diffusion-pipeline-setup.mdx (9/10), llm-pipeline-setup.mdx (9/10)

**Flags for human:**
- ai-inference-operations.mdx: "network supplies" list has wrong voice (items read as imperatives, not noun phrases) + duplicate "Batch AI Setup" card
- VRAM inconsistencies across pages: SAM2 (6 GB vs 12-24 GB), audio-to-text (3 GB vs 12 GB), RTX 2060 (6 GB vs 8 GB)
- 3 pages missing `purpose` field (llm-pipeline-setup, audio-and-vision-pipelines, model-hosting)
- 3 pages in `status: draft` (llm-pipeline-setup, audio-and-vision-pipelines, model-hosting)
- diffusion-pipeline-setup.mdx contains LLM and audio/vision content that overlaps with dedicated pages — scope decision needed
- "late 2025" pricing data on model-demand-reference.mdx may be stale

---

### S6: Deployment Details — all 6 pages (2026-03-24)

**Verdict:** Mixed — 2/10 to 8/10. One page (old join-a-pool.mdx) is unsalvageable.

**Changes made:**
- setup-options.mdx: `pageType: overview` → `navigation`, `purpose: orientation` → `orient`
- dual-mode-configuration.mdx: `pageType: how_to` → `instruction`, `purpose: setup` → `configure`
- siphon-setup.mdx: "pool worker" → "pool node"
- new-join-a-pool.mdx: "pool worker"/"Pool Worker"/"Pool worker" → "pool node"/"Pool Node"/"Pool node" (all instances)

**Duplicate decision:** `new-join-a-pool.mdx` (7/10) is canonical. `join-a-pool.mdx` (2/10) should be deprecated — wrong voice, banned words, US spellings, wrong pageType.

**Flags for human:**
- Rename `new-join-a-pool.mdx` → `join-a-pool.mdx` and move old to `x-deprecated/`?
- Old file has a "Pool Due Diligence Checklist" accordion worth merging into new file
- orchestrator-transcoder-setup.mdx: `purpose: guide` needs migration
- siphon-setup.mdx: `purpose: guide` needs migration
- All SME TODOs on dual-mode-configuration.mdx (VRAM figures, earnings estimates)

---

### Orphan/Duplicate Decisions (2026-03-24)

**Orphans (16 files):** All are `x-` or `dep-` prefixed, not in navigation, not in IA. No action — they remain in their current locations, excluded from the live site.

**Duplicate decisions:**
| Pair | Decision |
|---|---|
| `join-a-pool.mdx` (2/10) vs `new-join-a-pool.mdx` (7/10) | `new-join-a-pool.mdx` is canonical. Old file should be deprecated when ready. |
| `resources/glossary.mdx` vs `compendium/glossary.mdx` | Both in IA in different sections — keep both, different scope. |
| `troubleshooting.mdx` vs `x-troubleshooting.mdx` | Orphan is placeholder. No action. |
| `payments.mdx` vs `x-payments.mdx` | Orphan is placeholder. No action. |
| `setup/guide.mdx` vs `setup/s-guide.mdx` | `s-guide.mdx` is orphan legacy. No action. |
| `setup/test.mdx` vs `setup/x-test.mdx` | `x-test.mdx` is orphan placeholder. No action. |

**pageType decisions Alison overrode:**
- `quickstart/guide.mdx`: Claude set `instruction` → Alison kept `overview`
- `quickstart/video-transcoding.mdx`: Claude set `instruction` → Alison kept `quickstart`

These are Alison's calls. Recorded here so future sessions don't re-litigate.

---

## Complete Page Inventory

### Start Here

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 1 | `portal.mdx` | Start Here | Portal | navigation | desc, kw, og, aud, purp | ✅ Fixed pageType+purpose; FLAGS: docker tag, missing taxonomy fields |
| 2 | `navigator.mdx` | Start Here | Navigator | navigation | desc, kw, og, aud, purp | ✅ Fixed pageType+purpose+voice+terms; FLAGS: AIServiceRegistry, join-a-pool link |

### Concepts

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 3 | `concepts/role.mdx` | Concepts | Role | overview | desc, kw, og, aud, purp | pageType is `overview` but IA role is concept; IA description empty |
| 4 | `concepts/capabilities.mdx` | Concepts | Capabilities | concept | desc, kw, og, aud, purp | IA description empty |
| 5 | `concepts/architecture.mdx` | Concepts | Architecture | concept | desc, kw, og, aud, purp | IA description empty |
| 6 | `concepts/incentive-model.mdx` | Concepts | Incentive Model | concept | desc, kw, og, aud, purp | IA description empty |

### Quickstart

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 7 | `quickstart/guide.mdx` | Quickstart | Overview | overview | desc, kw, og, aud, purp | -- |
| 8 | `quickstart/video-transcoding.mdx` | Quickstart | Verify Your Hardware | quickstart | desc, kw, og, aud, purp | Deprecated pageType `quickstart` |
| 9 | `quickstart/tutorial.mdx` | Quickstart | Tutorial | tutorial | desc, kw, og, aud, purp | -- |
| 10 | `quickstart/AI-prompt-start.mdx` | Quickstart | AI Prompt: Orchestrator Setup | guide | desc, kw, og, aud | Missing `purpose` |

### Setup

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 11 | `setup/guide.mdx` | Setup | Setup Overview | overview | desc, kw, og, aud, purp | -- |
| 12 | `setup/rcs-requirements.mdx` | Setup | Prerequisites | how_to | desc, kw, og, aud, purp | -- |
| 13 | `setup/rs-install.mdx` | Setup | Install | how_to | desc, kw, og, aud, purp | -- |
| 14 | `setup/configure.mdx` | Setup | Configure | how_to | desc, kw, og, aud | Missing `purpose` |
| 15 | `setup/connect-and-activate.mdx` | Setup | Connect | how_to | desc, kw, og, aud | Missing `purpose` |
| 16 | `setup/test.mdx` | Setup | Verify | how_to | desc, kw, og, aud, purp | -- |
| 17 | `setup/r-monitor.mdx` | Setup | Monitor | how_to | desc, kw, og, aud, purp | IA description empty |

### Operator Considerations

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 18 | `guides/operator-considerations/operator-rationale.mdx` | Operator Considerations | Operator Rationale | guide | desc, kw, og, aud, purp | IA sidebarTitle empty; IA description empty; file has corrupt bytes before frontmatter (`glrw\npwrfs`) |
| 19 | `guides/operator-considerations/business-case.mdx` | Operator Considerations | Business Case | guide | desc, kw, og, aud, purp | IA description empty |
| 20 | `guides/operator-considerations/operator-impact.mdx` | Operator Considerations | Operator Impact | guide | desc, kw, og, aud, purp | IA description empty |
| 21 | `guides/operator-considerations/requirements.mdx` | Operator Considerations | Requirements | reference | desc, kw, og, aud, purp | IA description empty |

### Deployment Details

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 22 | `guides/deployment-details/setup-options.mdx` | Deployment Details | Setup Options | overview | desc, kw, og, aud, purp | -- |
| 23 | `guides/deployment-details/siphon-setup.mdx` | Deployment Details | Siphon Setup | guide | desc, kw, og, aud, purp | IA description empty |
| 24 | `guides/deployment-details/dual-mode-configuration.mdx` | Deployment Details | Dual Mode | how_to | desc, kw, og, aud, purp | IA description empty |
| 25 | `guides/deployment-details/orchestrator-transcoder-setup.mdx` | Deployment Details | O-T Split | guide | desc, kw, og, aud, purp | IA description empty |
| 26 | `guides/deployment-details/join-a-pool.mdx` | Deployment Details | Join a Pool | quickstart | desc, kw, og, aud, purp | **DUPLICATE** of new-join-a-pool.mdx; deprecated pageType `quickstart`; no `status` |
| 27 | `guides/deployment-details/new-join-a-pool.mdx` | Deployment Details | Join a Pool | guide | desc, kw, og, aud, purp | **DUPLICATE** of join-a-pool.mdx; IA description empty |

### Workloads and AI

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 28 | `guides/ai-and-job-workloads/workload-options.mdx` | Workloads and AI | Workload Options | concept | desc, kw, og, aud, purp | IA description empty |
| 29 | `guides/ai-and-job-workloads/video-transcoding-operations.mdx` | Workloads and AI | Video Transcoding | guide | desc, kw, og, aud, purp | IA description empty; missing `status` in frontmatter |
| 30 | `guides/ai-and-job-workloads/ai-inference-operations.mdx` | Workloads and AI | AI Inference | concept | desc, kw, og, aud, purp | IA description empty |
| 31 | `guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` | Workloads and AI | Diffusion Setup | guide | desc, kw, og, aud, purp | IA description empty |
| 32 | `guides/ai-and-job-workloads/llm-pipeline-setup.mdx` | Workloads and AI | LLM Setup | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |
| 33 | `guides/ai-and-job-workloads/realtime-ai-setup.mdx` | Workloads and AI | Cascade Setup | guide | desc, kw, og, aud, purp | IA description empty |
| 34 | `guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx` | Workloads and AI | Audio & Vision | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |
| 35 | `guides/ai-and-job-workloads/model-demand-reference.mdx` | Workloads and AI | Model Reference | reference | desc, kw, og, aud, purp | IA description empty |
| 36 | `guides/ai-and-job-workloads/model-hosting.mdx` | Workloads and AI | Model Hosting | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |

### Staking and Earning

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 37 | `guides/staking-and-rewards/earning-model.mdx` | Staking and Earning | Earning Model | concept | desc, kw, og, aud, purp | IA description empty |
| 38 | `guides/staking-and-rewards/reward-mechanics.mdx` | Staking and Earning | Reward Mechanics | guide | desc, kw, og, aud, purp | IA description empty |
| 39 | `guides/payments-and-pricing/payment-receipts.mdx` | Staking and Earning | Payment Receipts | concept | desc, kw, og, aud | IA description empty; missing `purpose` |
| 40 | `guides/payments-and-pricing/payments.mdx` | Staking and Earning | Payments | concept | desc, kw, og, aud, purp | IA description empty |
| 41 | `guides/staking-and-rewards/delegate-operations.mdx` | Staking and Earning | Delegate Operations | guide | desc, kw, og, aud, purp | IA description empty |
| 42 | `guides/staking-and-rewards/network-participation.mdx` | Staking and Earning | Network Participation | guide | desc, kw, og, aud, purp | IA description empty |

### Config and Optimisation

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 43 | `guides/config-and-optimisation/pricing-strategy.mdx` | Config and Optimisation | Pricing Strategy | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |
| 44 | `guides/config-and-optimisation/capacity-planning.mdx` | Config and Optimisation | Capacity Planning | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |
| 45 | `guides/config-and-optimisation/ai-model-management.mdx` | Config and Optimisation | Model Management | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |
| 46 | `guides/config-and-optimisation/reward-call-tuning.mdx` | Config and Optimisation | Reward Tuning | how_to | desc, kw, og, aud | IA description empty; missing `purpose` |

### Monitoring and Tools

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 47 | `guides/monitoring-and-tooling/operator-toolbox.mdx` | Monitoring and Tools | Operator Toolbox | reference | desc, kw, og, aud, purp | IA description empty |
| 48 | `guides/monitoring-and-tooling/explorer-operations.mdx` | Monitoring and Tools | Explorer Guide | guide | desc, kw, og, aud, purp | IA description empty |
| 49 | `guides/monitoring-and-tooling/metrics-and-alerting.mdx` | Monitoring and Tools | Metrics & Alerting | guide | desc, kw, og, aud, purp | IA description empty |
| 50 | `guides/monitoring-and-tooling/troubleshooting.mdx` | Monitoring and Tools | Troubleshooting | guide | desc, kw, og, aud, purp | IA description empty; missing `status` |

### Advanced Operations

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 51 | `guides/advanced-operations/gateway-relationships.mdx` | Advanced Operations | Gateway Relationships | concept | desc, kw, og, aud, purp | IA description empty |
| 52 | `guides/advanced-operations/gateway-orchestrator-interface.mdx` | Advanced Operations | Gateway Interface | how_to | desc, kw, og, aud | IA description empty; deprecated pageType `how_to`; missing `purpose` |
| 53 | `guides/advanced-operations/pool-operators.mdx` | Advanced Operations | Pool Operators | guide | desc, kw, og, aud, purp | IA description empty |
| 54 | `guides/advanced-operations/scale-operations.mdx` | Advanced Operations | Scale Operations | concept | desc, kw, og, aud, purp | IA description empty |

### Roadmap and Funding

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 55 | `guides/roadmap-and-funding/funding-and-support.mdx` | Roadmap and Funding | Funding & Support | guide | desc, kw, og, aud | Missing `purpose` |
| 56 | `guides/roadmap-and-funding/orchestrator-profiles.mdx` | Roadmap and Funding | Operator Profiles | guide | desc, kw, og, aud | Missing `purpose` |

### Tutorials

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 57 | `guides/tutorials/byoc-cpu-smoke-test.mdx` | Tutorials | BYOC Smoke Test | tutorial | desc, kw, og, aud | IA description empty; missing `purpose` |
| 58 | `guides/tutorials/zero-to-first-reward.mdx` | Tutorials | Zero to Reward | tutorial | desc, kw, og, aud | IA description empty; missing `purpose` |
| 59 | `guides/tutorials/ai-earning-quickstart.mdx` | Tutorials | AI Quickstart | tutorial | desc, kw, og, aud | IA description empty; missing `purpose` |
| 60 | `guides/tutorials/add-ai-to-video-node.mdx` | Tutorials | Add AI to Video | tutorial | desc, kw, og, aud | IA description empty; missing `purpose` |
| 61 | `guides/tutorials/full-ai-pipeline-tutorial.mdx` | Tutorials | Full AI Pipeline | tutorial | desc, kw, og, aud | IA description empty; missing `purpose` |
| 62 | `guides/tutorials/realtime-ai-tutorial.mdx` | Tutorials | Realtime AI | tutorial | desc, kw, og, aud | IA description empty; missing `purpose` |

### Resources

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 63 | `resources/faq.mdx` | Resources | FAQ | reference | desc, kw, og, aud, purp | IA description empty |
| 64 | `resources/glossary.mdx` | Resources | Glossary | glossary | desc, kw, og, aud, purp | **DUPLICATE** of compendium/glossary.mdx; pageType `glossary` not standard |
| 65 | `resources/community-guides.mdx` | Resources | Community Guides | reference | desc, kw, og, aud, purp | -- |
| 66 | `resources/community-pools.mdx` | Resources | Community Pools | reference | desc, kw, og, aud, purp | -- |

### Technical Reference

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 67 | `resources/technical/cli-flags.mdx` | Technical Reference | CLI Flags | reference | desc, kw, og, aud, purp | -- |
| 68 | `resources/technical/x-contract-addresses.mdx` | Technical Reference | Livepeer Contract Addresses | landing | desc, kw, og, aud, purp | Deprecated pageType `landing`; placeholder description |
| 69 | `resources/gpu-support.mdx` | Technical Reference | GPU Support | reference | desc, kw, og, aud, purp | -- |
| 70 | `resources/arbitrum-rpc.mdx` | Technical Reference | Arbitrum RPCs | reference | desc, kw, og, aud, purp | -- |
| 71 | `resources/arbitrum-exchanges.mdx` | Technical Reference | Exchanges & Bridges | reference | desc, kw, og, aud, purp | -- |

### Compendium

| # | File Path | IA Section | Sidebar Title | Current pageType | Frontmatter Fields Present | Issues |
|---|---|---|---|---|---|---|
| 72 | `resources/compendium/glossary.mdx` | Compendium | Glossary | reference | desc, kw, og, aud, purp | **DUPLICATE** of resources/glossary.mdx |

### IA-Mapped Total: 72 files across 73 IA entries

Note: IA entry `guide.mdx` appears twice (Quickstart and Setup), mapping to `quickstart/guide.mdx` and `setup/guide.mdx` respectively. IA entry `glossary.mdx` appears twice (Resources and Compendium), mapping to `resources/glossary.mdx` and `resources/compendium/glossary.mdx` respectively. All 73 IA entries have a corresponding live file.

---

## Orphans (15 live files NOT in IA)

Files present on disk but absent from the IA table. These need a decision: add to IA, deprecate, or remove.

| # | File Path | Sidebar Title | Current pageType | Status | Notes |
|---|---|---|---|---|---|
| O1 | `concepts/composable/orchestratorRole.mdx` | Orchestrator Role | (none) | (none) | Mermaid diagram component; no pageType, no audience, no purpose |
| O2 | `guides/advanced-operations/dep-guide.mdx` | Guide | overview | draft | `dep-` prefix indicates deprecated; old Advanced Operations landing |
| O3 | `guides/tutorials/byoc-cpu-tutorial.mdx` | BYOC CPU tutorial | (none) | (none) | Legacy tutorial; no pageType, no audience, no purpose, no status |
| O4 | `guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx` | (none) | (none) | stub | Stub; missing kw, og, aud, purp, pageType |
| O5 | `guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx` | (none) | (none) | stub | Stub; missing kw, og, aud, purp, pageType |
| O6 | `guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx` | (none) | (none) | stub | Stub; missing kw, og, aud, purp, pageType |
| O7 | `index.mdx` | Orchestrators Index | overview | (none) | Generated TOC page; no og, no audience, no purpose, no status |
| O8 | `quickstart/dep-x-setup-paths.mdx` | Get Started | overview | current | `dep-x-` prefix indicates deprecated; superseded by navigator.mdx |
| O9 | `setup/s-guide.mdx` | Guide | overview | (none) | Legacy setup guide; no status; superseded by setup/guide.mdx |
| O10 | `setup/x-test.mdx` | Test | landing | draft | `x-` prefix indicates placeholder/experimental; deprecated pageType `landing` |
| O11 | `resources/technical/x-changelog.mdx` | X-changelog | landing | draft | `x-` prefix placeholder; deprecated pageType `landing`; placeholder content |
| O12 | `resources/technical/x-support-status.mdx` | Support Status | guide | draft | `x-` prefix placeholder |
| O13 | `resources/technical/x-troubleshooting.mdx` | Troubleshooting | landing | draft | `x-` prefix placeholder; deprecated pageType `landing`; duplicate topic with monitoring-and-tooling/troubleshooting.mdx |
| O14 | `resources/x-guides.mdx` | Guides | reference | review | `x-` prefix placeholder; missing kw, og; index/hub page for guides |
| O15 | `resources/x-help.mdx` | X-help | landing | draft | `x-` prefix placeholder; deprecated pageType `landing`; placeholder content |
| O16 | `resources/x-payments.mdx` | Payments | overview | review | `x-` prefix placeholder; duplicate topic with payments-and-pricing/payments.mdx |

---

## Duplicates Found

| # | File A | File B | Topic | Recommendation |
|---|---|---|---|---|
| D1 | `guides/deployment-details/join-a-pool.mdx` (pageType: quickstart) | `guides/deployment-details/new-join-a-pool.mdx` (pageType: guide, status: current) | Join a Pool | `new-join-a-pool.mdx` appears to be the canonical replacement. `join-a-pool.mdx` uses deprecated pageType `quickstart` and has no `status` field. Recommend deprecating `join-a-pool.mdx`. |
| D2 | `resources/glossary.mdx` (pageType: glossary) | `resources/compendium/glossary.mdx` (pageType: reference) | Glossary | Both in IA (Resources vs Compendium sections). Clarify whether both are intended or one should be consolidated. |
| D3 | `guides/monitoring-and-tooling/troubleshooting.mdx` | `resources/technical/x-troubleshooting.mdx` | Troubleshooting | `x-troubleshooting.mdx` is an orphan placeholder. Recommend removing. |
| D4 | `guides/payments-and-pricing/payments.mdx` | `resources/x-payments.mdx` | Payments | `x-payments.mdx` is an orphan placeholder. Recommend removing. |
| D5 | `setup/guide.mdx` | `setup/s-guide.mdx` | Setup overview | `s-guide.mdx` is a legacy orphan. Recommend deprecating. |
| D6 | `setup/test.mdx` | `setup/x-test.mdx` | Setup verification | `x-test.mdx` is an orphan placeholder. Recommend deprecating. |

---

## Gaps Found (IA entries with empty description)

42 of 73 IA entries have no description. These are listed by section.

### Concepts (3 of 4 empty)
- `role.mdx` -- description empty
- `capabilities.mdx` -- description empty
- `architecture.mdx` -- description empty
- `incentive-model.mdx` -- description empty

### Setup (1 of 7 empty)
- `r-monitor.mdx` -- description empty

### Operator Considerations (4 of 4 empty)
- `operator-rationale.mdx` -- description empty (also missing sidebarTitle in IA)
- `business-case.mdx` -- description empty
- `operator-impact.mdx` -- description empty
- `requirements.mdx` -- description empty

### Deployment Details (3 of 6 empty)
- `siphon-setup.mdx` -- description empty
- `dual-mode-configuration.mdx` -- description empty
- `orchestrator-transcoder-setup.mdx` -- description empty
- `new-join-a-pool.mdx` -- description empty

### Workloads and AI (8 of 9 empty)
- `workload-options.mdx` -- description empty
- `video-transcoding-operations.mdx` -- description empty
- `ai-inference-operations.mdx` -- description empty
- `diffusion-pipeline-setup.mdx` -- description empty
- `llm-pipeline-setup.mdx` -- description empty
- `realtime-ai-setup.mdx` -- description empty
- `audio-and-vision-pipelines.mdx` -- description empty
- `model-demand-reference.mdx` -- description empty
- `model-hosting.mdx` -- description empty

### Staking and Earning (6 of 6 empty)
- `earning-model.mdx` -- description empty
- `reward-mechanics.mdx` -- description empty
- `payment-receipts.mdx` -- description empty
- `payments.mdx` -- description empty
- `delegate-operations.mdx` -- description empty
- `network-participation.mdx` -- description empty

### Config and Optimisation (4 of 4 empty)
- `pricing-strategy.mdx` -- description empty
- `capacity-planning.mdx` -- description empty
- `ai-model-management.mdx` -- description empty
- `reward-call-tuning.mdx` -- description empty

### Monitoring and Tools (4 of 4 empty)
- `operator-toolbox.mdx` -- description empty
- `explorer-operations.mdx` -- description empty
- `metrics-and-alerting.mdx` -- description empty
- `troubleshooting.mdx` -- description empty

### Advanced Operations (4 of 4 empty)
- `gateway-relationships.mdx` -- description empty
- `gateway-orchestrator-interface.mdx` -- description empty
- `pool-operators.mdx` -- description empty
- `scale-operations.mdx` -- description empty

### Tutorials (6 of 6 empty)
- `byoc-cpu-smoke-test.mdx` -- description empty
- `zero-to-first-reward.mdx` -- description empty
- `ai-earning-quickstart.mdx` -- description empty
- `add-ai-to-video-node.mdx` -- description empty
- `full-ai-pipeline-tutorial.mdx` -- description empty
- `realtime-ai-tutorial.mdx` -- description empty

### Resources (1 of 4 empty)
- `faq.mdx` -- description empty

**Note:** All 42 gap pages DO have descriptions in their file frontmatter. The gap is that the IA table (ia-data.json) has not been backfilled with those descriptions. The frontmatter descriptions are the source; the IA JSON needs syncing.

---

## Pages with Deprecated pageType Values

| # | File Path | Current pageType | Issue |
|---|---|---|---|
| 1 | `navigator.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 2 | `portal.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 3 | `quickstart/video-transcoding.mdx` | `quickstart` | `quickstart` is a section name, not a pageType |
| 4 | `guides/deployment-details/join-a-pool.mdx` | `quickstart` | `quickstart` is a section name, not a pageType |
| 5 | `resources/technical/x-contract-addresses.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 6 | `resources/technical/x-changelog.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 7 | `resources/technical/x-troubleshooting.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 8 | `resources/x-help.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 9 | `setup/x-test.mdx` | `landing` | `landing` is a layout mode, not a content pageType |
| 10 | `resources/glossary.mdx` | `glossary` | `glossary` is not a standard pageType; should be `reference` |
| 11 | `concepts/role.mdx` | `overview` | IA maps this to Concepts section; pageType should be `concept` |

**Standard pageType values observed:** `concept`, `guide`, `how_to`, `tutorial`, `reference`, `overview`
**Non-standard values found:** `landing` (7 files), `quickstart` (2 files), `glossary` (1 file)

---

## Additional Issues

### Corrupt frontmatter
- `guides/operator-considerations/operator-rationale.mdx` -- File starts with `glrw\npwrfs` before the `---` frontmatter delimiter. Needs cleanup.

### Missing `status` field
- `concepts/composable/orchestratorRole.mdx` (orphan)
- `guides/deployment-details/join-a-pool.mdx`
- `guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- `guides/monitoring-and-tooling/troubleshooting.mdx`
- `guides/tutorials/byoc-cpu-tutorial.mdx` (orphan)
- `index.mdx` (orphan)
- `setup/s-guide.mdx` (orphan)

### Missing `purpose` field (in IA-mapped files only)
- `quickstart/AI-prompt-start.mdx`
- `setup/configure.mdx`
- `setup/connect-and-activate.mdx`
- `guides/advanced-operations/gateway-orchestrator-interface.mdx`
- `guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
- `guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- `guides/ai-and-job-workloads/model-hosting.mdx`
- `guides/payments-and-pricing/payment-receipts.mdx`
- `guides/config-and-optimisation/pricing-strategy.mdx`
- `guides/config-and-optimisation/capacity-planning.mdx`
- `guides/config-and-optimisation/ai-model-management.mdx`
- `guides/config-and-optimisation/reward-call-tuning.mdx`
- `guides/roadmap-and-funding/funding-and-support.mdx`
- `guides/roadmap-and-funding/orchestrator-profiles.mdx`
- All 6 tutorial files

---

## Self-Test Verification

| Check | Result |
|---|---|
| Glob count matches file list | 88 files found by `find`, 88 processed |
| Every IA entry has a file or is flagged | All 73 IA entries have corresponding live files |
| Every live file has an IA mapping or is flagged as orphan | 72 files mapped + 16 orphans = 88 total |
| Frontmatter read for every file | All 88 files had frontmatter extracted |
| Duplicate pairs verified by reading both files | join-a-pool.mdx / new-join-a-pool.mdx both exist and cover same topic |
| Corrupt frontmatter verified | operator-rationale.mdx line 1-2 confirmed as `glrw\npwrfs` |

### Count reconciliation
- IA entries: 73
- Live files mapped to IA: 72 unique files (guide.mdx and glossary.mdx each map to 2 IA entries in different sections)
- Orphans: 16 files
- Total live files: 72 + 16 = 88 (matches glob)
