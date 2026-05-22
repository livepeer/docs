# Media Asset Audit Summary

Generated at: 2026-04-07T05:00:38.099Z

## 1. Baseline Counts

- `snippets/assets/` total: 218M
- Video/GIF count: 12
- Large image count (>5 MB): 0
- Tracked Notion backups: 1
- ALREADY_RESOLVED: no

### Exact Command Output

```text
$ du -sh snippets/assets/
218M	snippets/assets/
$ find snippets/assets -type f \( -name '*.mp4' -o -name '*.mov' -o -name '*.gif' -o -name '*.webm' \) | wc -l
      12
$ find snippets/assets -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' \) -size +5M | wc -l
       0
$ git ls-files tools/dev/integrations/notion/data/ | wc -l
       1
```

## 2. Local Asset Totals

- Total binary asset count: 0
- Total size_bytes: 0 (0 B)

## 3. Breakdown By Migration Target

| Migration Target | Count | Size Bytes | Human Size |
| --- | --- | --- | --- |

## 4. Estimated Working Tree Size Reduction

- Potential reduction if all `migrate_*` targets are actioned: 0 bytes (0 B)

## 5. Gitignore Leakage Files

- operations/tests/package-lock.json
- v2/developers/build/byoc.mdx
- v2/developers/build/comfystream.mdx
- v2/developers/build/model-support.mdx
- v2/developers/build/sdk-gateway.mdx
- v2/developers/build/workload-fit.mdx

## 6. Assets Branch Inventory

- Ref: origin/docs-v2-assets
- File count: 341
- Total size_bytes: 387749829 (369.8 MiB)
- Referenced in docs-v2 MDX/JSX: 0

### Recent Commits

- fadb044a2 chore(assets): migrate 6 assets from docs-v2 [migrate-assets-to-branch]
- cc5b38a45 chore(assets): migrate 1 assets from docs-v2 [migrate-assets-to-branch]
- 3f14a55ec chore(assets): migrate 1 assets from docs-v2 [migrate-assets-to-branch]
- a1da97308 chore(assets): migrate legacy tasks/plan binaries from docs-v2 [TASKS-ASSETS]
- 005e82c55 chore(assets): [BLOCK-BAK] migrate .bak files from docs-v2 for safekeeping
- acbf8d55b chore(assets): sync latest orchestrator context plan
- b706e6045 chore(assets): migrate context_data from docs-v2 branch
- 8b247199e chore(assets): sync migrate_cloudinary assets from docs-v2
- d26624c2f docs(assets): add media migration README with CDN path
- af7e8ef86 Clarify purpose of docs-v2-assets branch
- b0fac23ce Trim docs-v2-assets branch to asset-only content
- 8caba753d Merge branch 'docs-v2-dev' into docs-v2
- 7e6cd3c7e fix image link path
- ab252606b assistant update
- 30efa7505 Merge origin/main into docs-v2 to resolve PR conflicts
- 2f2fe525a restructure docs.json to ensure v1 displays as default. add ASSISTANT and gitattributes for large files
- 20bb2d901 update readme
- 683e02e56 update openapi path
- dede28f36 make v1 the default docs for now
- d2875b879 Restructure (#755)

### Files

| Path | Size Bytes | Human Size | Referenced | MDX/JSX References |
| --- | --- | --- | --- | --- |
| .github/AGENTS.md | 3590 | 3.51 KiB | no |  |
| .github/augment-instructions.md | 7938 | 7.75 KiB | no |  |
| .github/CODEOWNERS | 2143 | 2.09 KiB | no |  |
| .github/copilot-instructions.md | 6790 | 6.63 KiB | no |  |
| .github/docs-reviewers.txt | 0 | 0 B | no |  |
| .github/ISSUE_TEMPLATE/docs-review.yml | 984 | 984 B | no |  |
| .github/ISSUE_TEMPLATE/feature_internal.yml | 733 | 733 B | no |  |
| .github/pull_request_template.md | 1430 | 1.40 KiB | no |  |
| .github/README.md | 620 | 620 B | no |  |
| .github/scripts/embed-table.js | 0 | 0 B | no |  |
| .github/scripts/fetch-forum-data.js | 6050 | 5.91 KiB | no |  |
| .github/scripts/fetch-ghost-blog-data.js | 2641 | 2.58 KiB | no |  |
| .github/scripts/fetch-youtube-data.js | 3747 | 3.66 KiB | no |  |
| .github/scripts/gen-table.js | 0 | 0 B | no |  |
| .github/scripts/gen-textareas.js | 0 | 0 B | no |  |
| .github/workflows/auto-assign-docs-reviewers.yml | 0 | 0 B | no |  |
| .github/workflows/broken-links.yml | 467 | 467 B | no |  |
| .github/workflows/build-review-assets.yml | 0 | 0 B | no |  |
| .github/workflows/generate-review-table.yml | 0 | 0 B | no |  |
| .github/workflows/README-test-v2-pages.md | 3815 | 3.73 KiB | no |  |
| .github/workflows/sdk_generation.yaml | 618 | 618 B | no |  |
| .github/workflows/test-suite.yml | 4333 | 4.23 KiB | no |  |
| .github/workflows/test-v2-pages.yml | 7365 | 7.19 KiB | no |  |
| .github/workflows/update-blog-data.yml | 2144 | 2.09 KiB | no |  |
| .github/workflows/update-forum-data.yml | 1176 | 1.15 KiB | no |  |
| .github/workflows/update-ghost-blog-data.yml | 1062 | 1.04 KiB | no |  |
| .github/workflows/update-livepeer-release.yml | 2387 | 2.33 KiB | no |  |
| .github/workflows/update-review-template.yml | 0 | 0 B | no |  |
| .github/workflows/update-youtube-data.yml | 6271 | 6.12 KiB | no |  |
| .nojekyll | 0 | 0 B | no |  |
| context-data/ABOUT/00-NAV-AND-PAGE-INDEX.md | 4133 | 4.04 KiB | no |  |
| context-data/ABOUT/ABOUT-SECTION-COPY-REVIEW.md | 21975 | 21.5 KiB | no |  |
| context-data/ABOUT/ABOUT-SECTION-STYLE-GUIDE.md | 11002 | 10.7 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/livepeer_docs_rebuild.md | 7216 | 7.05 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/livepeer_ia_protocol_report.md | 6446 | 6.29 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Network/livepeer_interfaces.md | 4469 | 4.36 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Network/livepeer_job_lifecycle.md | 4342 | 4.24 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Network/livepeer_marketplace.md | 5117 | 5.00 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Network/livepeer_network_actors.md | 4838 | 4.72 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Network/livepeer_network_overview.md | 5334 | 5.21 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Network/livepeer_technical_stack.md | 4302 | 4.20 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/Core Mechanisms.pdf | 81564 | 79.7 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/deep-research-report (1).md | 26016 | 25.4 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/deep-research-report (2).md | 21757 | 21.2 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/deep-research-report.md | 32981 | 32.2 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/Livepeer Protocol Core Mechanisms (2026).pdf | 83506 | 81.5 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/livepeer_core_mechanisms.md | 6732 | 6.57 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/livepeer_governance_model.md | 5861 | 5.72 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/livepeer_protocol_economics.md | 5686 | 5.55 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/livepeer_technical_architecture.md | 6270 | 6.12 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/livepeer_token.md | 5629 | 5.50 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/livepeer_treasury.md | 5024 | 4.91 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Protocol/OverviewReport.pdf | 868833 | 848.5 KiB | no |  |
| context-data/ABOUT/CONTEXT DATA/Resources_References/livepeer_about_section_references.md | 3890 | 3.80 KiB | no |  |
| context-data/DEVELOPERS/00-NAV-AND-PAGE-INDEX.md | 4819 | 4.71 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/ai_pipelines_overview.md | 3390 | 3.31 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/byoc_pipeline_guide.md | 3350 | 3.27 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/comfy_stream_integration.md | 2825 | 2.76 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/contribution_guide.md | 2893 | 2.83 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/developer_guides_index.md | 2435 | 2.38 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/developer_help.md | 2264 | 2.21 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/developer_programs.md | 2087 | 2.04 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/developer_resources.md | 2629 | 2.57 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_ai_quickstart.md | 2744 | 2.68 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_developer_guide.md | 4208 | 4.11 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_developer_journey.md | 4470 | 4.37 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_developer_partners.md | 3793 | 3.70 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_developer_section_planning.md | 3295 | 3.22 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_rfps.md | 2724 | 2.66 KiB | no |  |
| context-data/DEVELOPERS/CONTEXT DATA/livepeer_video_streaming_quickstart.md | 2450 | 2.39 KiB | no |  |
| context-data/DEVELOPERS/DEVELOPERS-SECTION-COPY-REVIEW.md | 6930 | 6.77 KiB | no |  |
| context-data/DEVELOPERS/DEVELOPERS-SECTION-STYLE-GUIDE.md | 3751 | 3.66 KiB | no |  |
| context-data/LPTOKEN/lptoken_about_mechanics.md | 9538 | 9.31 KiB | no |  |
| context-data/LPTOKEN/lptoken_about_purpose.md | 5145 | 5.02 KiB | no |  |
| context-data/LPTOKEN/lptoken_about_tokenomics.md | 5633 | 5.50 KiB | no |  |
| context-data/LPTOKEN/lptoken_delegation_overview.md | 4623 | 4.51 KiB | no |  |
| context-data/LPTOKEN/lptoken_token_portal.md | 4350 | 4.25 KiB | no |  |
| context-data/LPTOKEN/lptoken_treasury_overview.md | 203 | 203 B | no |  |
| context-data/LPTOKEN/new/about_mechanics.md | 3811 | 3.72 KiB | no |  |
| context-data/LPTOKEN/new/about_overview.md | 4238 | 4.14 KiB | no |  |
| context-data/LPTOKEN/new/about_purpose.md | 4695 | 4.58 KiB | no |  |
| context-data/LPTOKEN/new/about_token_portal.md | 3985 | 3.89 KiB | no |  |
| context-data/LPTOKEN/new/about_tokenomics.md | 4173 | 4.08 KiB | no |  |
| context-data/LPTOKEN/new/delegation_about_delegators.md | 6052 | 5.91 KiB | no |  |
| context-data/LPTOKEN/new/delegation_delegation_guide.md | 4858 | 4.74 KiB | no |  |
| context-data/LPTOKEN/new/delegation_overview.md | 5130 | 5.01 KiB | no |  |
| context-data/LPTOKEN/new/governance_model.md | 4720 | 4.61 KiB | no |  |
| context-data/LPTOKEN/new/governance_overview.md | 4417 | 4.31 KiB | no |  |
| context-data/LPTOKEN/new/governance_processes.md | 5014 | 4.90 KiB | no |  |
| context-data/LPTOKEN/new/treasury_allocations.md | 4849 | 4.74 KiB | no |  |
| context-data/LPTOKEN/new/treasury_overview.md | 3941 | 3.85 KiB | no |  |
| context-data/LPTOKEN/new/treasury_proposals.md | 4567 | 4.46 KiB | no |  |
| context-data/LPTOKEN/ptoken_about_purpose.md | 5024 | 4.91 KiB | no |  |
| context-data/ORCHESTRATORS/00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md | 18772 | 18.3 KiB | no |  |
| context-data/ORCHESTRATORS/01-ORCHESTRATORS-COPY-REVIEW-AND-RECOMMENDATIONS.md | 24529 | 24.0 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_about_orchestrators_economics.md | 11700 | 11.4 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_ai_pipelines.md | 9243 | 9.03 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_delegation.md | 8689 | 8.49 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_run_a_pool.md | 9367 | 9.15 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_staking_lpt (1).md | 4385 | 4.28 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_staking_lpt.md | 4298 | 4.20 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_quickstart_orchestrator_setup.md | 5085 | 4.97 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_references_faq.md | 5928 | 5.79 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/join_a_pool.md | 4562 | 4.46 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_architecture_draft_mdx (1).md | 11350 | 11.1 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_architecture_draft_mdx.md | 11350 | 11.1 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_configuration.md | 3485 | 3.40 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_economics.md | 10094 | 9.86 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_functions (1).md | 5382 | 5.26 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_functions.md | 5382 | 5.26 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_hardware_requirements.md | 4561 | 4.45 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_ia_setup.md | 1138 | 1.11 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_installation.md | 3339 | 3.26 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_network_integration.md | 2750 | 2.69 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_overview.md | 3535 | 3.45 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_stats_monitoring.md | 4357 | 4.25 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrator_testing_validation.md | 3474 | 3.39 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_ai_pipelines.md | 6793 | 6.63 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_delegation.md | 7880 | 7.70 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_rewards_and_fees.md | 8590 | 8.39 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_staking_lpt.md | 12415 | 12.1 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrators_inline.md | 12423 | 12.1 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/rewards_and_fees_advanced_orchestrator_guide.md | 4586 | 4.48 KiB | no |  |
| context-data/ORCHESTRATORS/CONTEXT DATA/run_an_orchestrator_overview.md | 4821 | 4.71 KiB | no |  |
| context-data/ORCHESTRATORS/ORCHESTRATORS-SECTION-STYLE-GUIDE.md | 8832 | 8.63 KiB | no |  |
| context-data/ORCHESTRATORS/README.md | 1114 | 1.09 KiB | no |  |
| context-data/v2-embedded/home/Industry Verticals.pdf | 93057 | 90.9 KiB | no |  |
| context-data/v2-embedded/home/Livepeer 2026 Technical & Product Overview (Internal Long Report).pdf | 246147 | 240.4 KiB | no |  |
| context-data/v2-embedded/home/Livepeer Ecosystem Overview.pdf | 148423 | 144.9 KiB | no |  |
| context-data/v2-embedded/home/Livepeer Ecosystem.pdf | 138914 | 135.7 KiB | no |  |
| context-data/v2-embedded/home/Livepeer TAM_Shannon.pdf | 1271513 | 1.21 MiB | no |  |
| context-data/v2-embedded/lpt/Livepeer Token Portal.pdf | 144847 | 141.5 KiB | no |  |
| context-data/v2-embedded/lpt/LPT-overview.pdf | 115448 | 112.7 KiB | no |  |
| context-data/v2-embedded/orchestrators/Canonical Flow_ Joining An Orchestrator Pool.pdf | 25681 | 25.1 KiB | no |  |
| context-data/v2-embedded/orchestrators/Orchestrator Functions and Services.pdf | 170854 | 166.8 KiB | no |  |
| context-data/v2-embedded/orchestrators/orchestrators-gateways-implementation-plan.mdx | 18743 | 18.3 KiB | no |  |
| README-media-migration.md | 1274 | 1.24 KiB | no |  |
| snippets/assets/data/Architecture_go-livepeer_DeepWiki.htm | 2471519 | 2.36 MiB | no |  |
| snippets/assets/data/DeepWiki_TA-Flows.htm | 2306539 | 2.20 MiB | no |  |
| snippets/assets/data/protocol-overview.html | 4500840 | 4.29 MiB | no |  |
| snippets/assets/domain/00_HOME/Building the Decentralized Generative AI Tech Stack.png | 1855539 | 1.77 MiB | no |  |
| snippets/assets/domain/00_HOME/building-decentralized-generative-ai-tech-stack.png | 1855539 | 1.77 MiB | no |  |
| snippets/assets/domain/00_HOME/Eric Shreck Gif.gif | 70555282 | 67.3 MiB | no |  |
| snippets/assets/domain/00_HOME/evolution.png | 1258801 | 1.20 MiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_about.png | 29736 | 29.0 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_ai_run.png | 42813 | 41.8 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_community.png | 61793 | 60.3 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_delegators.png | 49695 | 48.5 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_developer_logo.png | 49389 | 48.2 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_developer.png | 50254 | 49.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_developer1.png | 35857 | 35.0 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_gateways.png | 53366 | 52.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_gpu.png | 46249 | 45.2 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_help.png | 54358 | 53.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_logo_developer_sml.png | 44791 | 43.7 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_logo_developer.png | 48100 | 47.0 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_logo_new.png | 46934 | 45.8 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_opportunity.png | 55992 | 54.7 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_partner.png | 50040 | 48.9 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_reference.png | 39628 | 38.7 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_research.png | 46896 | 45.8 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_researchers.png | 51095 | 49.9 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_showcase.png | 62463 | 61.0 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_video_stream.png | 40361 | 39.4 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_word_developer.png | 48255 | 47.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_word_NEW.png | 42563 | 41.6 KiB | no |  |
| snippets/assets/domain/00_HOME/industries.png | 1277891 | 1.22 MiB | no |  |
| snippets/assets/domain/00_HOME/Introducing Livepeer Cascade - A Vision For Livepeer’s Future in the Age of Real-Time AI Video.png | 1922117 | 1.83 MiB | no |  |
| snippets/assets/domain/00_HOME/introducing-livepeer-cascade.png | 1922117 | 1.83 MiB | no |  |
| snippets/assets/domain/00_HOME/livepeer logo.png | 9631 | 9.41 KiB | no |  |
| snippets/assets/domain/00_HOME/livepeer_evolution_slide.png | 1258801 | 1.20 MiB | no |  |
| snippets/assets/domain/00_HOME/livepeer_usage_messari.png | 589921 | 576.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Livepeer-Logo-Full-Dark.svg | 2238 | 2.19 KiB | no |  |
| snippets/assets/domain/00_HOME/Livepeer-Logo-Full-Light.svg | 2194 | 2.14 KiB | no |  |
| snippets/assets/domain/00_HOME/LivepeerStats.png | 278312 | 271.8 KiB | no |  |
| snippets/assets/domain/00_HOME/showcase/ /logo | 29051 | 28.4 KiB | no |  |
| snippets/assets/domain/00_HOME/showcase/ nytv.live/logo | 29051 | 28.4 KiB | no |  |
| snippets/assets/domain/00_HOME/showcase/nytv.live/logo | 29051 | 28.4 KiB | no |  |
| snippets/assets/domain/00_HOME/showcase/nytv.live/mediaSrc | 1818228 | 1.73 MiB | no |  |
| snippets/assets/domain/00_HOME/whitepaper_diagram.png | 81014 | 79.1 KiB | no |  |
| snippets/assets/domain/01_ABOUT/ProtocolNodeDiagram.png | 78739 | 76.9 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_90_Youtube.png | 22459 | 21.9 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Blogging.png | 23302 | 22.8 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Calendar.png | 23642 | 23.1 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Discord.png | 4205048 | 4.01 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Events.png | 42337 | 41.3 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Follow.png | 39876 | 38.9 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Forum.png | 32458 | 31.7 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Github.png | 29864 | 29.2 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_LinkedIn.png | 4157537 | 3.96 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Medium.png | 25271 | 24.7 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Meeting.png | 33375 | 32.6 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Newsletter.png | 24830 | 24.2 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Reddit.png | 31064 | 30.3 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Telegram.png | 4271355 | 4.07 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Telegran.png | 27361 | 26.7 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_X (1).png | 31595 | 30.9 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_X.png | 4116182 | 3.93 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Yotube.png | 21987 | 21.5 KiB | no |  |
| snippets/assets/domain/02_COMMUNITY/Hero Images/Hero_Youtube.png | 4220788 | 4.03 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/hero-images/Hero_Discord.png | 4205048 | 4.01 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/hero-images/Hero_LinkedIn.png | 4157537 | 3.96 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/hero-images/Hero_Telegram.png | 4271355 | 4.07 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/hero-images/Hero_X.png | 4116182 | 3.93 MiB | no |  |
| snippets/assets/domain/02_COMMUNITY/hero-images/Hero_Youtube.png | 4220788 | 4.03 MiB | no |  |
| snippets/assets/domain/04_GATEWAYS/code_examples/eliteproxy_launch.example..json | 5361 | 5.24 KiB | no |  |
| snippets/assets/domain/04_GATEWAYS/test-video.mp4 | 11829048 | 11.3 MiB | no |  |
| snippets/assets/domain/04_GATEWAYS/view-dropdown.png | 22358 | 21.8 KiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/girl1.png | 1370296 | 1.31 MiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/girl2.png | 993774 | 970.5 KiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/guy1.png | 1066312 | 1.02 MiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/guy2.png | 1052310 | 1.00 MiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Videos/arealiensreal.mp4 | 11880277 | 11.3 MiB | no |  |
| snippets/assets/domain/SHARED/LivepeerDocsHero.svg | 67960 | 66.4 KiB | no |  |
| snippets/assets/domain/SHARED/LivepeerDocsLogo.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/favicon.png | 12462 | 12.2 KiB | no |  |
| snippets/assets/logo/dark.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logo/light.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logos/dark.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logos/light.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logos/Livepeer-Logo-Full-Dark.svg | 2238 | 2.19 KiB | no |  |
| snippets/assets/logos/Livepeer-Logo-Full-Light.svg | 2194 | 2.14 KiB | no |  |
| snippets/assets/logos/Livepeer-Logo-Full-Theme.svg | 2432 | 2.38 KiB | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol-Dark.svg | 539 | 539 B | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol-Green-Theme.svg | 691 | 691 B | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol-Green.svg | 539 | 539 B | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg | 536 | 536 B | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg | 646 | 646 B | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol.svg | 543 | 543 B | no |  |
| snippets/assets/logos/products/daydream-logo-dark.svg | 5575 | 5.44 KiB | no |  |
| snippets/assets/logos/products/livepeer-studio-logo.svg | 4128 | 4.03 KiB | no |  |
| snippets/assets/logos/products/streamplace-cube.png | 16122 | 15.7 KiB | no |  |
| snippets/assets/logos/products/streamplace-logo.svg | 790 | 790 B | no |  |
| snippets/assets/media/gifs/daydream.gif | 92239994 | 88.0 MiB | no |  |
| snippets/assets/media/heros/hero_about.png | 29736 | 29.0 KiB | no |  |
| snippets/assets/media/heros/hero_community.png | 61793 | 60.3 KiB | no |  |
| snippets/assets/media/heros/hero_delegators.png | 49695 | 48.5 KiB | no |  |
| snippets/assets/media/heros/hero_developer_logo.png | 49389 | 48.2 KiB | no |  |
| snippets/assets/media/heros/hero_developer.png | 50254 | 49.1 KiB | no |  |
| snippets/assets/media/heros/hero_developer1.png | 35857 | 35.0 KiB | no |  |
| snippets/assets/media/heros/hero_gateways.png | 53366 | 52.1 KiB | no |  |
| snippets/assets/media/heros/hero_gpu.png | 46249 | 45.2 KiB | no |  |
| snippets/assets/media/heros/hero_help.png | 54358 | 53.1 KiB | no |  |
| snippets/assets/media/heros/Hero_Livepeer_Full_sml.png | 24716 | 24.1 KiB | no |  |
| snippets/assets/media/heros/Hero_Livepeer_Full.png | 31558 | 30.8 KiB | no |  |
| snippets/assets/media/heros/hero_logo_developer_sml.png | 44791 | 43.7 KiB | no |  |
| snippets/assets/media/heros/hero_logo_developer.png | 48100 | 47.0 KiB | no |  |
| snippets/assets/media/heros/hero_logo_new.png | 46934 | 45.8 KiB | no |  |
| snippets/assets/media/heros/hero_opportunity.png | 55992 | 54.7 KiB | no |  |
| snippets/assets/media/heros/hero_partner.png | 50040 | 48.9 KiB | no |  |
| snippets/assets/media/heros/hero_reference.png | 39628 | 38.7 KiB | no |  |
| snippets/assets/media/heros/hero_researchers.png | 51095 | 49.9 KiB | no |  |
| snippets/assets/media/heros/hero_showcase.png | 62463 | 61.0 KiB | no |  |
| snippets/assets/media/heros/hero_word_developer.png | 48255 | 47.1 KiB | no |  |
| snippets/assets/media/heros/hero_word_NEW.png | 42563 | 41.6 KiB | no |  |
| snippets/assets/media/icons/home-house.gif | 1117207 | 1.07 MiB | no |  |
| snippets/assets/media/icons/smart-house.gif | 1800244 | 1.72 MiB | no |  |
| snippets/assets/media/images/DelegatorImg.avif | 5665 | 5.53 KiB | no |  |
| snippets/assets/media/images/GPU callout.png | 665512 | 649.9 KiB | no |  |
| snippets/assets/media/images/GPUImg.webp | 428448 | 418.4 KiB | no |  |
| snippets/assets/media/images/Livepeer Stats.png | 298069 | 291.1 KiB | no |  |
| snippets/assets/media/images/nytv-logo.png | 29051 | 28.4 KiB | no |  |
| snippets/assets/media/images/showcase/nytv-logo.svg | 7777 | 7.59 KiB | no |  |
| snippets/assets/media/videos/daydream.mp4 | 31365183 | 29.9 MiB | no |  |
| snippets/assets/media/videos/Embody.mp4 | 3251318 | 3.10 MiB | no |  |
| snippets/assets/media/videos/frameworks.mp4 | 5196787 | 4.96 MiB | no |  |
| snippets/assets/media/videos/HeroBackground.mp4 | 47153588 | 45.0 MiB | no |  |
| snippets/assets/media/videos/livepeer-founders-post.mp4 | 3344652 | 3.19 MiB | no |  |
| snippets/assets/media/videos/LivepeerStudio.mp4 | 10327462 | 9.85 MiB | no |  |
| snippets/assets/media/videos/nytv.live.mp4 | 5549779 | 5.29 MiB | no |  |
| snippets/assets/media/videos/nytvlivepromo.mp4 | 1818228 | 1.73 MiB | no |  |
| snippets/assets/media/videos/streamplace.mp4 | 3251318 | 3.10 MiB | no |  |
| snippets/assets/README.mdx | 1193 | 1.17 KiB | no |  |
| snippets/assets/site/favicon.png | 12462 | 12.2 KiB | no |  |
| snippets/assets/site/favicon/apple-touch-icon.png | 1913 | 1.87 KiB | no |  |
| snippets/assets/site/favicon/favicon-96x96.png | 995 | 995 B | no |  |
| snippets/assets/site/favicon/favicon.ico | 15086 | 14.7 KiB | no |  |
| snippets/assets/site/favicon/favicon.svg | 2229 | 2.18 KiB | no |  |
| snippets/assets/site/favicon/site.webmanifest | 437 | 437 B | no |  |
| snippets/assets/site/favicon/web-app-manifest-192x192.png | 2174 | 2.12 KiB | no |  |
| snippets/assets/site/favicon/web-app-manifest-512x512.png | 9980 | 9.75 KiB | no |  |
| snippets/assets/site/images/404-desolate.jpeg | 1599681 | 1.53 MiB | no |  |
| snippets/assets/site/images/layered-image.webp | 118118 | 115.3 KiB | no |  |
| snippets/assets/site/logo/dark.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/site/logo/light.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/site/united-kingdom-flag-icon.svg | 477 | 477 B | no |  |
| tasks-plan-archive/active/CONTENTFILES/builder-opportunity-files.zip | 18851 | 18.4 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/byoc.mdx | 8205 | 8.01 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/community-content-files.zip | 24003 | 23.4 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/dev-guides-files.zip | 18086 | 17.7 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files.zip | 37977 | 37.1 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/ai-configuration.mdx | 11314 | 11.0 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/configuration-flags.mdx | 13008 | 12.7 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/connect-with-offerings.mdx | 9781 | 9.55 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/faq.mdx | 14349 | 14.0 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/gateway-architecture.mdx | 11526 | 11.3 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/gateway-economics.mdx | 9894 | 9.66 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/monitor-and-optimise.mdx | 10086 | 9.85 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/overview.mdx | 8997 | 8.79 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/troubleshooting.mdx | 17594 | 17.2 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/hosting-models.mdx | 9702 | 9.47 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/local-gateways-discord.txt | 29982 | 29.3 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/lpt-content-files.zip | 24003 | 23.4 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/model-support.mdx | 10849 | 10.6 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/notion/NaaP MVP .zip | 809484 | 790.5 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/notion/NaaP MVP 2.zip | 4837 | 4.72 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/notion/network as a product.zip | 3228 | 3.15 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/overview.mdx | 5937 | 5.80 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files.zip | 31923 | 31.2 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/batch-ai.mdx | 3578 | 3.49 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/cloud-spe-gateway.mdx | 3968 | 3.88 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/daydream-gateway.mdx | 4292 | 4.19 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/index.mdx | 1747 | 1.71 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/job-types.mdx | 6314 | 6.17 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/livepeer-studio-gateway.mdx | 3848 | 3.76 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/mnt/user-data/outputs/part2-mdx/orchestrators/about-orchestrators/naap-platform.mdx | 4157 | 4.06 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/naap-platform.mdx | 5077 | 4.96 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/payment-clearinghouse.mdx | 4864 | 4.75 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/realtime-ai.mdx | 9603 | 9.38 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/ai-pipelines-overview.mdx | 9844 | 9.61 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/choosing-a-gateway.mdx | 6406 | 6.26 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/cloud-spe-gateway.mdx | 5761 | 5.63 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/daydream-gateway.mdx | 6465 | 6.31 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/delegator-onboarding.mdx | 8638 | 8.44 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/developer-journey.mdx | 9453 | 9.23 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/gateway-operator-opportunities.mdx | 8765 | 8.56 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/livepeer-studio-gateway.mdx | 6956 | 6.79 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/orchestrator-earnings.mdx | 7902 | 7.72 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/video-streaming-101.mdx | 8348 | 8.15 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/workload-fit.mdx | 8829 | 8.62 KiB | no |  |
| tasks-plan-archive/active/dev-plan1-quick-fixes.docx | 15136 | 14.8 KiB | no |  |
| tasks-plan-archive/active/dev-plan3-overall-updated-plan.docx | 16697 | 16.3 KiB | no |  |
| tasks-plan-archive/active/Developer-Gateway-Enhace-Flow-Plan.docx | 16001 | 15.6 KiB | no |  |
| tasks-plan-archive/active/gateways-restructure.mdx | 13386 | 13.1 KiB | no |  |
| tasks-plan-archive/active/repo-governance-files.zip | 13369 | 13.1 KiB | no |  |
| tests/integration/browser.test.js.bak | 8422 | 8.22 KiB | no |  |
| tests/integration/browser.test.js.bak2 | 8452 | 8.25 KiB | no |  |
| tools/scripts/test-v2-pages.js.bak | 6821 | 6.66 KiB | no |  |
| tools/scripts/test-v2-pages.js.bak2 | 6825 | 6.67 KiB | no |  |
| v1/images/ai/cool-cat-hat-moving.gif | 3375480 | 3.22 MiB | no |  |
| v1/images/stream-health.png | 2423233 | 2.31 MiB | no |  |

## 7. MDX/JSX Files Containing Large Asset References

- None

### Ambiguous Basename-Only Matches

- None

## 8. v1/ Review Items

- None

