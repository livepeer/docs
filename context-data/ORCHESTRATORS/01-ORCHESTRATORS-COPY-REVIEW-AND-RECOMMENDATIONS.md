# V2 Orchestrators Section — Copy Review and Recommendations (2026)

Per-page review of the v2 Orchestrators section in nav order. Uses v2/ABOUT and docs/ABOUT context data, the V1→V2 mapping report, and the Gateways quickstart layout as references. For each page: accuracy (2026), context relevance, upgrade suggestions, IA, style, completeness, media/code audit, and modularisation.

---

## Summary

| Page | Accuracy | Complete | IA note | Priority |
|------|----------|----------|---------|----------|
| orchestrators-portal | OK | Broken links | Fix hrefs | High |
| about/overview | OK | Yes | Fix join-a-pool path | Medium |
| about/orchestrator-functions | OK | BYOC/AI empty | — | Medium |
| about/architecture | OK | ComingSoon | — | Low |
| about/economics | OK | ComingSoon | — | Low |
| quickstart/overview | OK | Yes | Fix join-a-pool path | Medium |
| quickstart/join-a-pool | OK | Yes | — | — |
| quickstart/orchestrator-setup | **Wrong content** | No | Replace body | **Critical** |
| setting-up/overview | Placeholder | No | Expand | High |
| hardware-requirements | Placeholder | No | Fill from context | High |
| orchestrator-stats | Placeholder | No | Rename or split | High |
| quickstart-add-your-gpu | **Missing** | — | Create | **Critical** |
| data-centres-* (×3 nav) | Placeholder | No | Split Testing/Network/Monitor | High |
| advanced-setup/* | **Empty** | No | Fill all 5 | **Critical** |
| tools, community-pools | Stub | Partial | Fill | Medium |
| orchestrator-guides, resources, community-and-help | Placeholder/empty | No | Fill | Medium |
| references/faq | Placeholder | No | Expand | High |
| references/cli-flags | OK | Yes | Remove "Chatgpt" from description | Low |

---

## 1. Orchestrator Knowledge Hub

### 1.1 orchestrators-portal.mdx

- **Accuracy (2026):** Copy is correct. “GPUs for AI Video”, “Run – Provide – Earn”, go-livepeer Docker pull are current.
- **Context (ABOUT/ORCHESTRATORS):** run_an_orchestrator_overview (dual-market: video vs AI) could feed a short “Video vs AI” callout on the portal.
- **Upgrades:** Add one sentence: “Orchestrators earn from protocol rewards (LPT) and job fees (ETH).” Link to About economics.
- **IA:** Fix broken links:
  - `./about-orchestrators/orchestrator-functions/ai-pipelines` → `./advanced-setup/ai-pipelines`
  - `./orchestrator-tools/tooling-hub` → `./orchestrator-tools-and-resources/orchestrator-tools`
  - `./guides-and-resources/orchestrator-guides` → `./orchestrator-tools-and-resources/orchestrator-guides`
  - `./references/orchestrator-references` → `./references/faq` or a references index if added.
- **Style:** Portal hero and Cards are consistent. Remove commented-out code before publish.
- **Complete?** No — links 404.
- **Media:** Add 30–60s “What is an Orchestrator?” video (e.g. Livepeer YouTube) if available; otherwise a simple diagram (gateway → orchestrator → GPU).
- **Code:** `CustomCodeBlock` for `docker pull` is good. No modularisation needed.
- **Recommendation:** Fix all hrefs; add one economics sentence; remove comments.

---

### 1.2 about-orchestrators/overview.mdx

- **Accuracy:** Correct. Orchestrator role, types (transcoding, AI, BYOC), pool vs own node.
- **Context:** livepeer_network_actors (ABOUT) and orchestrator_overview (ORCHESTRATORS) align. “core partnr” → “core partner” (typo).
- **Upgrades:** Add 1–2 sentences on dual-market (video = stake-weighted, AI = price/latency) from run_an_orchestrator_overview; link to economics.
- **IA:** Cards point to `../setting-up-an-orchestrator/join-a-pool` and `../setting-up-an-orchestrator/data-centre-setup`. join-a-pool lives under **quickstart** in nav. Fix: first Card → `../quickstart/join-a-pool`; second → `../setting-up-an-orchestrator/data-centre-setup` (correct).
- **Style:** Good. Tip for BYOC is clear.
- **Complete?** Yes, minus typo and path fix.
- **Media:** Optional: diagram “Orchestrator types (Transcoding | AI | BYOC)” or link to architecture diagram.
- **Recommendation:** Fix typo, fix join-a-pool href to `../quickstart/join-a-pool`, add dual-market sentence + link.

---

### 1.3 about-orchestrators/orchestrator-functions.mdx

- **Accuracy:** Correct. Compute (transcoding, AI, custom), delegation, governance, example services.
- **Context:** orchestrator_functions context and ABOUT Network actors align.
- **Upgrades:** Fill **BYOC** and **AI Models** (2–3 sentences each); link to Developers BYOC and ai-pipelines. Fix “Orcestrators” in comment (or remove comment).
- **IA:** Diagram import from `05_GPUS` works (snippet exists). Consider moving diagram to `05_ORCHESTRATORS` for consistency later.
- **Style:** Good. Example services (Daydream, Embody, Sarah) add concrete value.
- **Complete?** No — BYOC and AI Models subsections empty.
- **Media:** OrchestratorRole diagram is strong. Optional: screenshot of Explorer “Orchestrator capabilities”.
- **Recommendation:** Populate BYOC and AI Models; fix/remove comment; optional diagram move.

---

### 1.4 about-orchestrators/architecture.mdx

- **Accuracy:** Mermaid flow (Source → Gateway → Orchestrator → Transcoder/AI Worker → back) is correct for 2026.
- **Context:** livepeer_technical_architecture and job_lifecycle (ABOUT) align.
- **Upgrades:** Remove or replace ComingSoonCallout when page is finalised; add 2–3 sentence caption under diagram (who assigns jobs, what “verification” means).
- **IA:** Good. Keep as About; link from Setting up overview.
- **Style:** Diagram in code block is fine; consider extracting to snippet for reuse.
- **Complete?** Partial — ComingSoon; caption would complete.
- **Media:** Diagram is the main media. Optional: link to Protocol contracts (References) for verification details.
- **Recommendation:** Add caption; remove ComingSoon when ready; optionally extract Mermaid to snippet.

---

### 1.5 about-orchestrators/economics.mdx

- **Accuracy:** SFA model, LPT stake, protocol rewards + service fees, costs (GPU, bandwidth, energy, delegation rewards) are correct for 2026.
- **Context:** orchestrators_about_orchestrators_economics and docs/ABOUT Protocol economics align.
- **Upgrades:** Remove ComingSoon when content is finalised. Add one sentence on video vs AI revenue (video: inflation + tickets; AI: usage fees, no stake-weight routing). Link to rewards-and-fees and staking-LPT.
- **IA:** Good. Cross-link to Advanced (rewards-and-fees, staking-LPT).
- **Style:** Bullets and structure are clear. Avoid duplicate “Protocol rewards” bullets (merge).
- **Complete?** Partial — ComingSoon; small duplication.
- **Media:** Optional: simple “Revenue streams” diagram (LPT inflow / ETH inflow / costs).
- **Recommendation:** Deduplicate; add video vs AI sentence and links; remove ComingSoon when ready.

---

## 2. Quickstart

### 2.1 quickstart/overview.mdx

- **Accuracy:** Pool vs own node, decision tree are correct.
- **Context:** join_a_pool and run_an_orchestrator_overview align.
- **Upgrades:** None critical. Optional: “Video vs AI” one-liner (pool/own node applies to both).
- **IA:** Cards point to `../setting-up-an-orchestrator/join-a-pool` and `../setting-up-an-orchestrator/data-centre-setup`. join-a-pool is under quickstart. Fix: first Card → `./join-a-pool`; second → `../setting-up-an-orchestrator/data-centre-setup`.
- **Style:** Decision tree is clear. Good.
- **Complete?** Yes after href fix.
- **Media:** Optional: flowchart “Pool vs Own node” as image.
- **Recommendation:** Fix first Card to `./join-a-pool`.

---

### 2.2 quickstart/join-a-pool.mdx

- **Accuracy:** Pools, comparison table, steps (Choose pool, Connect GPU, Aggregation, Earn), off-chain payouts — all correct for 2026.
- **Context:** join_a_pool context data and Titan Node reference align.
- **Upgrades:** Add “Rquires” → “Requires” in Bare Metal Cons. Optional: link to Community Pools page for discovery.
- **Style:** StyledSteps, DynamicTable, Accordions are appropriate. Good.
- **Complete?** Yes.
- **Media:** Optional: “How pool aggregation works” diagram (one orchestrator, many GPUs).
- **Code:** Inline table and Accordions are fine. No need to move to snippet unless reused elsewhere.
- **Recommendation:** Fix typo; optional Community Pools link.

---

### 2.3 quickstart/orchestrator-setup.mdx — **CRITICAL**

- **Accuracy:** **Wrong page.** Body is protocol contracts (Controller, BondingManager, RoundsManager, TicketBroker, Minter, Token, Governance). This belongs in About or References, not “Add your GPU to Livepeer”.
- **Context:** V1 get-started and CONTEXT DATA orchestrator_installation + orchestrator_configuration define correct content: run livepeer, list GPUs, key flags, fund account, activate.
- **Upgrades:** **Replace entire body** with “Add your GPU” quickstart: (1) Prerequisites (GPU, Arbitrum RPC, install), (2) List GPUs (`nvidia-smi -L`), (3) Run livepeer (Docker or binary) with -orchestrator -transcoder -network -ethUrl -pricePerUnit -serviceAddr, (4) Fund with ETH + LPT, (5) Activate (livepeer_cli or Explorer). Use Steps, CustomCodeBlock, and Cards to Install guide, Connect to Arbitrum, CLI flags, FAQ. See Gateways quickstart pattern (Views by OS optional in a follow-up).
- **IA:** This page is the main “run your own node” quickstart. Nav label “Orchestrator Setup” is correct; content must match.
- **Style:** After rewrite: use Steps, code blocks, Tip/Note/Warning. Remove ComingSoonCallout when live.
- **Complete?** No — wrong content.
- **Media:** Add “First-run checklist” or diagram: Install → Configure → Run → Activate.
- **Code:** Use snippet for livepeer command and flags (e.g. snippets/data/orchestrators/commands.jsx) for DRY with install-go-livepeer and quickstart-add-your-gpu.
- **Recommendation:** Replace body with Add your GPU steps; move contracts to a References “Protocol contracts” page or About.

---

## 3. Run an Orchestrator (Setting up)

### 3.1 setting-up-an-orchestrator/overview.mdx

- **Accuracy:** N/A — placeholder (“Setting up an Orchestrator” only).
- **Context:** run_an_orchestrator_overview (dual-market), orchestrator_ia_setup (checklist), CONTEXT DATA installation/configuration.
- **Upgrades:** Expand to 1–2 short paragraphs: what “run an orchestrator” means (video + optional AI), and a **checklist**: Hardware → Install go-livepeer → Connect to Arbitrum → Configure (pricing, serviceAddr) → Test → Monitor. Each item links to the corresponding child page. Optional: table “Video vs AI” (stake required, reward calls, etc.) from run_an_orchestrator_overview.
- **IA:** This is the parent of Setup Checklist, Installation, Configuration, Testing, Network Integration, Monitor & Optimise. Ensure links match docs.json (and fix docs.json if some point to wrong/missing pages).
- **Style:** Short intro + checklist (bullets or Accordion) + Cards to key pages.
- **Complete?** No.
- **Recommendation:** Fill from context; add checklist and links.

---

### 3.2 hardware-requirements.mdx

- **Accuracy:** N/A — placeholder (“Hardware Requirements” only).
- **Context:** orchestrator_hardware_requirements.md has full structure: minimum, recommended (video), AI-optimised, storage, network, power/cooling, data centre vs home, scaling, monitoring, mistakes, checklist.
- **Upgrades:** Port context data into MDX. Use tables for min/recommended/AI specs; use Accordions for “Data centre vs home”, “Common mistakes”, “Checklist”. Add Note: “Stake does NOT determine AI routing” (from context).
- **IA:** Correct under Setup Checklist.
- **Style:** Tables + short sections; Tip for “development vs production”.
- **Complete?** No.
- **Media:** Optional: “Recommended GPU tiers” (e.g. RTX 3060 → 4080 → A100).
- **Recommendation:** Fill from orchestrator_hardware_requirements context; add tables and checklist.

---

### 3.3 orchestrator-stats.mdx

- **Accuracy:** N/A — placeholder (“Orchestrator Stats” only). Nav uses this as **Installation** target; content is not about installation.
- **Context:** orchestrator_stats_monitoring.md and orchestrator_installation.md (installation) are separate.
- **Upgrades:** **Either:** (A) Rename page to “Orchestrator stats and monitoring” and fill with monitoring content (Prometheus, Explorer, metrics), and **create** a new **install-go-livepeer.mdx** for Installation; **or** (B) Replace this page with install-go-livepeer content and move “stats” to a dedicated monitor page. Recommendation: (A) — create install-go-livepeer.mdx; fill this page with monitoring/stats; update docs.json so Installation → install-go-livepeer.
- **IA:** Currently “Installation” points here; that’s wrong. Installation should point to install-go-livepeer (new). This page can become “Monitor & optimise” or “Orchestrator stats”.
- **Complete?** No.
- **Recommendation:** Create install-go-livepeer; repurpose or fill this as monitoring/stats; fix docs.json.

---

### 3.4 quickstart-add-your-gpu-to-livepeer (MISSING)

- **Path:** docs.json expects `setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer`. Folder does not exist. Create folder and file.
- **Context:** V1 get-started, orchestrator_configuration (context), and quickstart/orchestrator-setup (once fixed) overlap. This page is the **Configuration** step: connect to Arbitrum, set pricePerUnit, serviceAddr, transcoding options, AI models config (optional).
- **Content:** (1) Intro: “After installing go-livepeer, configure network, pricing, and capabilities.” (2) Connect to Arbitrum (ETH_URL, optional wallet); (3) Core flags (serviceAddr, pricePerUnit, pixelsPerUnit, -orchestrator, -transcoder); (4) Optional: transcodingOptions.json, aiModels.json (reuse orch-config.mdx content); (5) Verification checklist; (6) Cards to Install, Connect to Arbitrum (dedicated page), CLI flags, FAQ.
- **Style:** Steps, CustomCodeBlock, Accordion for flag groups; same as Gateways config.
- **Recommendation:** Create file and nested folder; amalgamate V1 set-pricing, connect-to-arbitrum essentials, and orch-config snippet.

---

### 3.5 data-centres-and-large-scale-hardware-providers.mdx

- **Accuracy:** N/A — placeholder (“Data Centres & Large Scale Hardware Providers” only). Nav uses this for **Testing**, **Network Integration**, and **Monitor & Optimise** (three different concepts).
- **Context:** enterprise-and-data-centres, data-centre-setup, orchestrator_testing_validation, orchestrator_network_integration, orchestrator_stats_monitoring.
- **Upgrades:** **Split:** (1) Keep this page for **data centre / large-scale** only (expand from enterprise context). (2) Create **testing-and-validation.mdx** (benchmark, assess capabilities from V1). (3) Create **connect-to-arbitrum.mdx** for Network Integration (RPC, hosted vs self-hosted). (4) Create **monitor-and-optimise.mdx** (metrics, Prometheus, Explorer, alerts). Then update docs.json so Testing → testing-and-validation, Network Integration → connect-to-arbitrum, Monitor & Optimise → monitor-and-optimise.
- **IA:** One page should not serve three nav items. Split as above.
- **Complete?** No.
- **Recommendation:** Expand this page for data centres only; add three new pages; update docs.json.

---

### 3.6 data-centre-setup.mdx

- **Accuracy:** N/A — placeholder (“Data Centre Setup” only).
- **Context:** enterprise-and-data-centres, data centre section of hardware requirements.
- **Upgrades:** Fill with: when to choose data centre vs pool vs home; prerequisites (static IP, SLA, cooling); steps (provision, install go-livepeer, connect, register); link to data-centres-and-large-scale-hardware-providers and install-go-livepeer.
- **Style:** Steps + Cards.
- **Complete?** No.
- **Recommendation:** Fill from context; link to install and hardware.

---

### 3.7 orch-config.mdx

- **Accuracy:** aiModels.json and transcodingOptions.json examples are useful; password.txt is on-chain setup.
- **Context:** orchestrator_configuration, V1 set-pricing, AI models config.
- **Upgrades:** Add frontmatter (title, description, keywords). Present as “Example configuration snippets” and link from quickstart-add-your-gpu and configuration docs. Optional: move to snippet and import.
- **IA:** Could live under Configuration as “Example config files” or be merged into quickstart-add-your-gpu.
- **Style:** CustomCodeBlock and Badge are good. Fix JSON (single quotes → double for valid JSON).
- **Complete?** Partial — no frontmatter; invalid JSON.
- **Recommendation:** Add frontmatter; fix JSON quotes; link from config page or merge into it.

---

## 4. Advanced

### 4.1–4.5 staking-LPT, rewards-and-fees, delegation, ai-pipelines, run-a-pool.mdx

- **Accuracy:** N/A — all five files are **empty**.
- **Context:** orchestrators_advanced_setup_staking_lpt, rewards_and_fees_advanced_orchestrator_guide, orchestrators_advanced_setup_delegation, orchestrators_advanced_setup_ai_pipelines, orchestrators_advanced_setup_run_a_pool (and V1 configure-reward-calling, set-pricing, vote, dual-mine, o-t-split; V1 AI orchestrator guides).
- **Upgrades:** Fill each from context data and V1:
  - **staking-LPT:** Why stake, bonding flow, self vs delegated stake, video vs AI (stake for video; not for AI routing); link to Explorer, BondingManager.
  - **rewards-and-fees:** LPT inflation vs ETH fees; reward cut and fee share; video vs AI revenue; link to economics, CLI flags for pricePerUnit.
  - **delegation:** What delegators do; how to attract delegators (reward cut, fee share); link to staking and rewards.
  - **ai-pipelines:** Prerequisites (Top 100 optional for AI, 16GB+ VRAM, Docker, CUDA 12.x); enable AI (-enableAI); models config (aiModels.json); BYOC/ComfyStream link to Developers; on-chain registration if needed; link to orchestrator-guides for benchmarking.
  - **run-a-pool:** What a pool is (one orchestrator, many GPUs); operator responsibilities; how to list (Community Pools); link to join-a-pool.
- **IA:** Correct under Advanced. Portal “Advanced Orchestrator Information” links to ai-pipelines — ensure that path is correct (advanced-setup/ai-pipelines).
- **Complete?** No — all empty.
- **Recommendation:** Fill all five from context + V1; use Steps and tables where appropriate.

---

## 5. Orchestrator Tools & Resources

### 5.1 orchestrator-tools.mdx

- **Accuracy:** Stub. “Explorer”, “Cloud.tools”, “Community Tools”, “google sheet” — need real links and short descriptions.
- **Upgrades:** Add Explorer URL (explorer.livepeer.org), Cloud tools URL if public, and link to Community Pools / Titan or forum for community tools. Replace “google sheet here” with actual link or remove if N/A.
- **Complete?** No.
- **Recommendation:** Add real links; remove placeholder Note or replace with “To add your tool, see …”.

---

### 5.2 community-pools.mdx

- **Accuracy:** Note about due diligence and join-a-pool is correct. “Automation from google sheet” is vague.
- **Upgrades:** Add 1–2 sentences: “Community-run pools are listed below. Inclusion is not endorsement.” Add Titan Node Card with href. If sheet automation exists, keep Note; else remove.
- **Complete?** Partial.
- **Recommendation:** Add Titan Card; clarify automation or remove.

---

### 5.3 orchestrator-guides.mdx

- **Accuracy:** Empty.
- **Upgrades:** Fill with: list of guides (benchmark transcoding, assess capabilities, monitor metrics, migrate to Arbitrum, troubleshoot) as Cards or list with short descriptions; link to V1 guides or to new Testing/Monitor/Migration pages when created.
- **Recommendation:** Populate from V1 guides list; link to new pages.

---

### 5.4 orchestrator-resources.mdx

- **Accuracy:** Placeholder (“Orchestrator Resources” only).
- **Upgrades:** List: Explorer, Protocol GitHub, Forum (LIPs, scripts), Whitepaper, community Discord/Forum. Cards with icon and href.
- **Recommendation:** Fill with standard resources + community links.

---

### 5.5 orchestrator-community-and-help.mdx

- **Accuracy:** Placeholder (“Orchestrator Community & Help” only).
- **Upgrades:** Discord, Forum, GitHub (go-livepeer, protocol), “Get help” (link to FAQ, Discord). Optional: “Report a bug” link.
- **Recommendation:** Fill with community links and FAQ link.

---

## 6. References

### 6.1 references/faq.mdx

- **Accuracy:** N/A — placeholder (“FAQ” only).
- **Context:** orchestrators_references_faq.md has full Q&A (what is orchestrator, on-chain vs off-chain, job assignment, rewards, video vs AI, etc.).
- **Upgrades:** Port FAQ context into MDX. Use Accordions per question or H2 per topic. Add “Troubleshooting” subsection or link to troubleshoot page if created.
- **Complete?** No.
- **Recommendation:** Fill from orchestrators_references_faq; add Troubleshooting link.

---

### 6.2 references/cli-flags.mdx

- **Accuracy:** OpenAPI-derived reference, CLI↔proto table, capability matrix are correct and useful for 2026.
- **Context:** Matches protocol gRPC and on-chain params.
- **Upgrades:** Remove “Straight from Chatgpt” from description in frontmatter (unprofessional). Add link to install-go-livepeer and quickstart-add-your-gpu for “where to use these”.
- **Style:** Good. Tables and YAML block are clear.
- **Complete?** Yes.
- **Recommendation:** Fix description; add “See also” links.

---

## 7. Code and modularisation

- **Portal/orchestrator-setup:** Prefer snippet for shared livepeer commands (e.g. `snippets/data/orchestrators/commands.jsx` or `flags.jsx`) so install, quickstart, and config pages stay DRY.
- **orchestrator-functions:** Diagram lives in 05_GPUS; consider copy to 05_ORCHESTRATORS for consistency.
- **orch-config:** Move JSON examples to snippet (e.g. `aiModelsExample`, `transcodingOptionsExample`) and import in MDX; ensures valid JSON and reuse.
- **Tables:** DynamicTable is used well in join-a-pool; reuse for hardware tiers, video vs AI, and FAQ-style tables where appropriate.
- **Imports:** Use `/snippets/...` consistently; fix any invalid paths so `mint validate` passes.

---

## 8. Media and external resources

| Page / topic | Suggestion |
|--------------|------------|
| Portal | “What is an Orchestrator?” (Livepeer YouTube or blog) |
| About overview | Diagram: Orchestrator types (Transcoding | AI | BYOC) |
| Architecture | Mermaid already present; optional link to Protocol repo |
| Economics | Simple “Revenue streams” diagram |
| Join a pool | “Pool aggregation” diagram (one orchestrator, many GPUs) |
| Orchestrator setup (quickstart) | “First-run checklist” or short video |
| Hardware | “GPU tiers” (e.g. min / recommended / AI) |
| Install | Official go-livepeer releases; Docker Hub link |
| Staking / rewards | Explorer screenshot; Token Flows or forum post for mechanics |
| AI pipelines | Link to ComfyStream/BYOC docs; optional model-card screenshot |
| FAQ | — |
| CLI flags | — |

Use only official or clearly attributed community links; avoid broken or outdated videos.

---

## 9. IA improvements

1. **docs.json:**  
   - **Installation:** Point to `install-go-livepeer` (new), not orchestrator-stats.  
   - **Configuration:** Point to `quickstart-add-your-gpu-to-livepeer` (create under setting-up-an-orchestrator/setting-up-an-orchestrator/).  
   - **Testing:** Point to `testing-and-validation` (new).  
   - **Network Integration:** Point to `connect-to-arbitrum` (new).  
   - **Monitor & Optimise:** Point to `monitor-and-optimise` (new) or repurposed orchestrator-stats.

2. **Portal links:** Fix as in §1.1 so all Cards resolve.

3. **About/Quickstart Cards:** Use `../quickstart/join-a-pool` (or `./join-a-pool` from quickstart/overview) for “Join a pool”.

4. **Duplicate FAQ:** docs.json lists references/faq twice (Technical References and On-Chain Reference); keep one or clarify intent.

5. **Nested folder:** Create `setting-up-an-orchestrator/setting-up-an-orchestrator/` only if keeping current docs.json structure; otherwise add a single “configuration” page under setting-up-an-orchestrator and update docs.json.

---

*Review uses: v2 Orchestrators pages (all in nav order), docs/ORCHESTRATORS/CONTEXT DATA, docs/ABOUT/CONTEXT DATA (Protocol, Network), V1 orchestrator guides, 00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md, Gateways quickstart layout, ABOUT and DEVELOPERS style guides.*
