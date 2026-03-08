# V1 Orchestrator Docs → V2 IA: Mapping and Recommendations

This report reviews all V1 documentation relating to Orchestrators, maps sections to the v2 IA structure, and recommends what belongs where and what is missing. Style guidance uses the **v2 Gateways quickstart layout** as an additional reference alongside the About and Developers style guides.

---

## 1. V1 Orchestrator content inventory

### 1.1 V1 top-level (orchestrators)

| V1 path | Content summary | Note |
|---------|------------------|------|
| `v1/orchestrators/introduction.mdx` | **Misplaced:** Livepeer Studio / developer intro (SDKs, API keys, Cards to developers). | Not orchestrator-specific; likely wrong section. Do **not** migrate as Orchestrator intro. |
| `v1/orchestrators/quick-start.mdx` | **Misplaced:** Studio API key, JS SDK, React player quickstart. | Developer quickstart; not for GPU node operators. Do **not** migrate to Orchestrators. |
| `v1/orchestrators/livepeer-studio-cli.mdx` | (Not read; title suggests Studio CLI.) | Clarify audience: if for broadcasters/developers, keep under Developers or Gateways. |

### 1.2 V1 Orchestrators guides (core)

| V1 path | Content summary | V2 destination (recommended) |
|---------|------------------|------------------------------|
| `v1/orchestrators/guides/get-started.mdx` | Prerequisites, run `livepeer` in orchestrator mode, GPU list (`nvidia-smi`), flags (`-network`, `-ethUrl`, `-orchestrator`, `-transcoder`, `-pricePerUnit`, `-serviceAddr`). | **Quickstart** (orchestrator-setup or new “Run go-livepeer” page) + **Setting up an Orchestrator / Overview**. |
| `v1/orchestrators/guides/install-go-livepeer.mdx` | Binary (Darwin, Linux, Linux GPU, Windows), Docker, build from source; dependencies. | **Setting up an Orchestrator → Installation** (dedicated install page; currently nav points to orchestrator-stats — fix). |
| `v1/orchestrators/guides/connect-to-arbitrum.mdx` | Arbitrum connection: hosted (Infura, Alchemy), self-hosted; supported networks; flags. | **Setting up an Orchestrator** (prereq/configuration) or **References** (network/chain). |
| `v1/orchestrators/guides/configure-reward-calling.mdx` | Reward calls: auto vs manual, `-reward=false`, enable/disable, economics. | **Advanced → Rewards and fees** (rewards-and-fees.mdx). |
| `v1/orchestrators/guides/set-session-limits.mdx` | Session limits for orchestrators. | **Setting up an Orchestrator → Configuration** or **References (CLI flags)**. |
| `v1/orchestrators/guides/set-pricing.mdx` | Price per pixel (Wei), auto-adjust, `livepeer_cli` set config. | **Advanced → Rewards and fees** or **Setting up → Configuration**. |
| `v1/orchestrators/guides/benchmark-transcoding.mdx` | Benchmarking transcoding performance. | **Orchestrator Tools & Resources → Orchestrator guides** or **Setting up → Testing**. |
| `v1/orchestrators/guides/assess-capabilities.mdx` | Assessing node capabilities. | **Setting up → Testing** or **Tools & Resources**. |
| `v1/orchestrators/guides/monitor-metrics.mdx` | Monitoring orchestrator metrics. | **Setting up → Monitor & optimise** (dedicated page; nav currently points to data-centres — fix). |
| `v1/orchestrators/guides/vote.mdx` | Governance voting. | **Advanced** or **About (Governance)**; link from Orchestrators. |
| `v1/orchestrators/guides/dual-mine.mdx` | Dual mining (transcode + other). | **Advanced** or **Tools & Resources**. |
| `v1/orchestrators/guides/o-t-split.mdx` | Orchestrator–transcoder split. | **About (Architecture)** or **Advanced**; reference from Orchestrators. |
| `v1/orchestrators/guides/migrate-to-arbitrum.mdx` | One-time Confluence migration L1→Arbitrum; Explorer migrate; go-livepeer ≥0.5.28. | **References** (migration guide) or **Advanced**; keep for historical/contract-wallet users. |
| `v1/orchestrators/guides/migrate-from-contract-wallet.mdx` | Contract wallet migration. | **References** (migration) or FAQ. |
| `v1/orchestrators/guides/gateway-introspection.mdx` | Gateway introspection (orchestrator view of gateways). | **Setting up** or **References**; useful for ops. |
| `v1/orchestrators/guides/troubleshoot.mdx` | Troubleshooting. | **References → FAQ** or dedicated **Troubleshooting** page. |

### 1.3 V1 AI Orchestrators (`v1/ai/orchestrators/`)

| V1 path | Content summary | V2 destination (recommended) |
|---------|------------------|------------------------------|
| `v1/ai/orchestrators/get-started.mdx` | AI Orchestrator setup; extends mainnet orchestrator guide; prereqs (Top 100, 16GB+ VRAM, Docker, CUDA 12.4, Linux, Python 3.10+). | **Advanced → AI pipelines** (ai-pipelines.mdx) + **Quickstart** (optional “AI quickstart” path). |
| `v1/ai/orchestrators/models-config.mdx` | AI models configuration. | **Advanced → AI pipelines** or **Setting up → Configuration**. |
| `v1/ai/orchestrators/models-download.mdx` | Downloading AI models. | **Advanced → AI pipelines**. |
| `v1/ai/orchestrators/start-orchestrator.mdx` | Starting AI orchestrator. | **Advanced → AI pipelines** or **Setting up**. |
| `v1/ai/orchestrators/ai-worker.mdx` | AI worker component. | **Advanced → AI pipelines**; link to Developers BYOC/ComfyStream. |
| `v1/ai/orchestrators/benchmarking.mdx` | AI benchmarking. | **Tools & Resources → Orchestrator guides**. |
| `v1/ai/orchestrators/onchain.mdx` | On-chain AI (registration, etc.). | **Advanced → AI pipelines** or **References**. |

### 1.4 Other V1 references

- `v1/developers/core-concepts/livepeer-network/orchestrators.mdx` — Conceptual; belongs in **About → Livepeer Network (Actors)** or link from Orchestrators About.

---

## 2. V2 Orchestrators IA (current) and gaps

### 2.1 V2 nav structure (from docs.json)

- **Orchestrator Knowledge Hub:** orchestrators-portal, about-orchestrators/overview, orchestrator-functions, architecture, economics  
- **Quickstart:** quickstart/overview, quickstart/join-a-pool, quickstart/orchestrator-setup  
- **Run an Orchestrator:**  
  - **Orchestrator Setup Guide:** overview → **Setup Checklist** (hardware-requirements) → **Installation** (orchestrator-stats) → **Configuration** (setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer) → **Testing** (data-centres-and-large-scale-hardware-providers) → **Network Integration** (same) → **Monitor & Optimise** (same)  
- **Advanced:** staking-LPT, rewards-and-fees, delegation, ai-pipelines, run-a-pool  
- **Orchestrator Tools & Resources:** orchestrator-tools, community-pools, orchestrator-guides, orchestrator-resources, orchestrator-community-and-help  
- **Technical References:** faq, cli-flags (and duplicate faq under On-Chain Reference)

### 2.2 What exists today (v2 files)

- **Portal, About:** orchestrators-portal.mdx, about-orchestrators/overview, orchestrator-functions, architecture, economics (all exist).  
- **Quickstart:** overview.mdx, join-a-pool.mdx, orchestrator-setup.mdx exist. **Issue:** orchestrator-setup.mdx body is **protocol contracts** (Controller, BondingManager, etc.) — wrong content; should be “Add your GPU” / run go-livepeer steps.  
- **Setting up:** overview.mdx (minimal: “Setting up an Orchestrator”), hardware-requirements.mdx, orchestrator-stats.mdx, data-centre-setup.mdx, data-centres-and-large-scale-hardware-providers.mdx, enterprise-and-data-centres.mdx, publish-offerings.mdx, orch-config.mdx.  
- **Missing path in repo:** `setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer` (nested folder and file not present). Nav points to it for “Configuration”.  
- **Advanced:** staking-LPT, rewards-and-fees, delegation, ai-pipelines, run-a-pool — need to confirm which files exist.  
- **References:** faq.mdx, cli-flags.mdx.

### 2.3 IA and content issues

| Issue | Recommendation |
|-------|-----------------|
| **Installation** points to `orchestrator-stats` | Point to a dedicated **Install go-livepeer** page (create from v1 install-go-livepeer: binary, Docker, source). |
| **Configuration** points to `quickstart-add-your-gpu-to-livepeer` (missing) | Create page or redirect to **orchestrator-setup** (after fixing orchestrator-setup content) or to **data-centre-setup**; or create `quickstart-add-your-gpu-to-livepeer.mdx` with v1 get-started + connect-to-arbitrum + set-pricing essentials. |
| **Testing / Network Integration / Monitor & Optimise** all point to same page (data-centres-and-large-scale-hardware-providers) | Split: **Testing** → benchmark + assess-capabilities content; **Network Integration** → connect-to-arbitrum + gateway-introspection; **Monitor & optimise** → monitor-metrics (new or existing). |
| **quickstart/orchestrator-setup.mdx** contains protocol contracts text | Replace with “Add your GPU” / run go-livepeer quickstart (from v1 get-started); move contracts content to About or References. |
| **overview (setting-up)** is one line | Expand with checklist (hardware → install → connect → configure → test → monitor) and links to child pages. |
| **V1 introduction / quick-start** are developer/Studio content | Do not map to Orchestrators; fix or remove in v1. |

---

## 3. Recommended V2 placement (V1 → V2)

| V1 section | Recommended v2 location | Action |
|------------|-------------------------|--------|
| get-started | quickstart/orchestrator-setup (replace current body) + setting-up/overview | Rewrite orchestrator-setup with Steps (GPU list, run livepeer, key flags); add “See also” Install, Connect, Set pricing. |
| install-go-livepeer | setting-up-an-orchestrator/install-go-livepeer (new) | New page; binary/Docker/source; nav “Installation” → this page. |
| connect-to-arbitrum | setting-up-an-orchestrator/connect-to-arbitrum (new) or references/network-connection | New page or subsection; “Network Integration” → this. |
| configure-reward-calling | advanced-setup/rewards-and-fees | Merge into rewards-and-fees; ensure reward call (auto/manual) and economics are covered. |
| set-session-limits | references/cli-flags or setting-up configuration | Table or subsection under Configuration / CLI flags. |
| set-pricing | advanced-setup/rewards-and-fees + references/cli-flags | Pricing in rewards-and-fees; flag detail in cli-flags. |
| benchmark-transcoding | setting-up benchmark (new) or orchestrator-guides | “Testing” → new benchmark page or guides. |
| assess-capabilities | setting-up testing (new) or guides | Same as above. |
| monitor-metrics | setting-up monitor-and-optimise (new) | “Monitor & optimise” → new page from monitor-metrics. |
| vote | advanced-setup (short page or link to About governance) | Link to About governance; optional short “Vote as orchestrator” page. |
| dual-mine, o-t-split | advanced-setup or about (architecture) | One short page or FAQ entries. |
| migrate-to-arbitrum, migrate-from-contract-wallet | references/migration-guides (new) or FAQ | Keep for users on L1 or contract wallets; single “Migration” page or FAQ. |
| gateway-introspection | setting-up or references | Optional “Gateway introspection” subsection or reference. |
| troubleshoot | references/faq + references/troubleshoot (new) | Expand FAQ; optional dedicated Troubleshoot page. |
| v1/ai/orchestrators/* | advanced-setup/ai-pipelines + (optional) quickstart AI path | Consolidate AI get-started, models-config, models-download, start-orchestrator, ai-worker, benchmarking, onchain into **ai-pipelines.mdx** (and optionally “AI Orchestrator quickstart” under Quickstart). |

---

## 4. Style guide: Gateways quickstart as reference

Use the **v2 Gateways quickstart** layout and patterns for Orchestrator quickstart and run guides.

### 4.1 Layout (from v2/04_gateways/run-a-gateway/quickstart/quickstart-a-gateway.mdx)

- **Tip at top** (e.g. dropdown for OS or “Choose your path”).  
- **Short intro** (“This page will get you…”) + bullet list of what the guide includes (on-chain/off-chain, Docker/binary).  
- **Note** for recommended option (e.g. Docker, Linux for production).  
- **View** (or Tabs) per **platform**: Docker, Linux, Windows.  
  - Each View: heading + icon, optional Accordion (supported hosts, caveats), then **Tabs** for mode (e.g. off-chain vs on-chain).  
  - Inside tabs: **Steps** (e.g. Install, Configure, Run, Verify) with **CustomCodeBlock** and optional **ResponseFieldAccordion** for flags.  
- **Reference pages** section: **Columns** of **Cards** (e.g. “Full installation guide”, “Configuration flags reference”).  
- **Troubleshooting**: Card to FAQ or common issues.  
- **Related pages**: Cards to prerequisites, on-chain setup, full guide, other tab (e.g. Orchestrator).

### 4.2 Components to reuse

- **Steps** + **Step** for procedures.  
- **CustomCodeBlock** (or snippet code component) for commands and config; language and filename.  
- **Accordion** / **ResponseFieldAccordion** for flag groups (required, optional).  
- **Tabs** for mode (e.g. off-chain / on-chain) or OS.  
- **View** for top-level platform (Docker, Linux, Windows).  
- **Card** with arrow, horizontal, icon for CTAs.  
- **Note**, **Tip**, **Warning**, **Danger** for callouts.  
- **Badge** for “Video”, “AI”, “Quick setup”, etc.  
- Data/code in **snippets** (e.g. `snippets/data/gateways/code.jsx`, `flags.jsx`) so the quickstart page stays lean; consider **snippets/data/orchestrators/** for orchestrator-specific code and flags.

### 4.3 Orchestrator quickstart adaptations

- **Paths:** “Join a pool” vs “Run your own Orchestrator” (already in quickstart/overview).  
- **Run your own:** One quickstart page with **View** for Docker / Linux / Windows (and optionally “from source”), each with **Steps**: Install go-livepeer → Connect to Arbitrum → Configure (price, serviceAddr, etc.) → Run → Verify.  
- **Join a pool:** Single flow (link to pool operator docs + minimal local steps).  
- **Reference cards:** “Install go-livepeer (full)”, “Connect to Arbitrum”, “CLI flags”, “Rewards and fees”, “FAQ”.

---

## 5. What information is missing in v2

| Gap | Recommendation |
|-----|----------------|
| **Install go-livepeer** (per-OS, binary + Docker + source) | Add dedicated install page; content from v1 install-go-livepeer. |
| **Connect to Arbitrum** (hosted vs self-hosted, flags) | Add page or section under Setting up / References. |
| **First-run sequence** (GPU check, run command, key flags) | In quickstart/orchestrator-setup (replace protocol contracts). |
| **Reward calling** (auto vs manual, economics) | Ensure in advanced-setup/rewards-and-fees. |
| **Pricing** (price per pixel, auto-adjust) | In rewards-and-fees or Configuration; flags in references/cli-flags. |
| **Session limits** | In cli-flags or Configuration. |
| **Benchmarking / assessing capabilities** | New Testing page(s) or under Orchestrator guides. |
| **Monitoring metrics** | New “Monitor & optimise” page. |
| **Migration (Confluence, contract wallet)** | References (migration-guides or FAQ). |
| **Troubleshooting** | Expand references/faq; optional troubleshoot.mdx. |
| **AI Orchestrator** (models, AI worker, on-chain) | Single consolidated advanced-setup/ai-pipelines page (+ optional AI quickstart). |
| **Governance (vote)** | Short section or link to About; optional “Vote as orchestrator” in Advanced. |
| **Orchestrator-setup page wrong content** | Replace protocol contracts with run steps; move contracts to About or References. |
| **Nav:** “Configuration” / “Testing” / “Monitor & optimise” point to wrong or same page | Create or assign correct pages; fix docs.json. |
| **Missing file** quickstart-add-your-gpu-to-livepeer | Create under setting-up-an-orchestrator (or equivalent path) or redirect nav to orchestrator-setup / data-centre-setup. |

---

## 6. Summary table: V1 → V2 and status

| V1 doc | V2 target | Status |
|--------|-----------|--------|
| get-started | quickstart/orchestrator-setup, setting-up/overview | Replace orchestrator-setup content; expand overview. |
| install-go-livepeer | setting-up/install-go-livepeer (new) | **Missing** — create. |
| connect-to-arbitrum | setting-up/connect-to-arbitrum or references | **Missing** — create or merge. |
| configure-reward-calling | advanced/rewards-and-fees | Merge into rewards-and-fees. |
| set-pricing | advanced/rewards-and-fees, references/cli-flags | Merge + flags. |
| set-session-limits | references/cli-flags or config | Merge or table. |
| benchmark-transcoding, assess-capabilities | setting-up testing / guides | **Missing** — create or add to guides. |
| monitor-metrics | setting-up monitor-and-optimise (new) | **Missing** — create. |
| vote, dual-mine, o-t-split | advanced or references | Short pages or FAQ. |
| migrate-*, gateway-introspection, troubleshoot | references / FAQ | **Missing** or partial — add. |
| v1/ai/orchestrators/* | advanced/ai-pipelines, optional AI quickstart | **Missing** — consolidate. |
| introduction, quick-start (v1 orchestrators) | — | Do **not** migrate (developer/Studio content). |

---

## 7. Suggested next steps

1. **Fix quickstart/orchestrator-setup.mdx:** Replace protocol contracts with “Add your GPU” / run go-livepeer steps (from v1 get-started); add Steps and code blocks; add Reference cards (Install, Connect, CLI flags, FAQ).  
2. **Create missing pages:** install-go-livepeer, connect-to-arbitrum, monitor-and-optimise (or monitor-metrics), migration-guides (or fold into FAQ), and optionally benchmark + assess (or one “Testing” page).  
3. **Fix docs.json:** Point **Installation** to install-go-livepeer; **Configuration** to a real config page (or quickstart-add-your-gpu if created); **Testing** to benchmark/testing content; **Monitor & optimise** to new monitor page; remove duplicate “data-centres” for three groups.  
4. **Consolidate AI:** Single advanced-setup/ai-pipelines.mdx from v1/ai/orchestrators (get-started, models-config, models-download, start-orchestrator, ai-worker, benchmarking, onchain).  
5. **Adopt Gateways quickstart pattern:** For “Run your own Orchestrator”, use View (Docker / Linux / Windows), Tabs (off-chain / on-chain if needed), Steps, CustomCodeBlock, Accordion for flags, Cards for reference links.  
6. **Snippets:** Consider `snippets/data/orchestrators/` for orchestrator code snippets and flag tables (mirror gateways pattern) for DRY and consistency.

---

*Report uses: v1 orchestrator and v1/ai/orchestrator files; v2 orchestrators nav and existing pages; v2 Gateways quickstart (quickstart-a-gateway.mdx and Docker tab) as style/layout reference. Style guides: About section, Developers section, and this Gateways quickstart layout.*
