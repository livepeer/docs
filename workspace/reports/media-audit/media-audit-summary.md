# Media Asset Audit Summary

Generated at: 2026-03-09T10:32:51.949Z

## 1. Baseline Counts

- `snippets/assets/` total: 61M
- Video/GIF count: 5
- Large image count (&gt;5 MB): 0
- Tracked Notion backups: 0
- ALREADY_RESOLVED: no

### Exact Command Output

```text
$ du -sh snippets/assets/
 61M	snippets/assets/
$ find snippets/assets -type f \( -name '*.mp4' -o -name '*.mov' -o -name '*.gif' -o -name '*.webm' \) | wc -l
       5
$ find snippets/assets -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' \) -size +5M | wc -l
       0
$ git ls-files tools/notion/backups/ | wc -l
       0
```

## 2. Local Asset Totals

- Total binary asset count: 167
- Total size_bytes: 107248970 (102.3 MiB)

## 3. Breakdown By Migration Target

| Migration Target | Count | Size Bytes | Human Size |
| --- | --- | --- | --- |
| keep | 165 | 92656247 | 88.4 MiB |
| review | 2 | 14592723 | 13.9 MiB |

## 4. Estimated Working Tree Size Reduction

- Potential reduction if all `migrate_*` targets are actioned: 0 bytes (0 B)

## 5. Gitignore Leakage Files

- .codex/locks-local/789-phase2b-component-migration-2026-03-08T03-08-50-208Z.json

## 6. Assets Branch Inventory

- Ref: origin/docs-v2-assets
- File count: 333
- Total size_bytes: 360578030 (343.9 MiB)
- Referenced in docs-v2 MDX/JSX: 78

### Recent Commits

- a1da9730 chore(assets): migrate legacy tasks/plan binaries from docs-v2 [TASKS-ASSETS]
- 005e82c5 chore(assets): [BLOCK-BAK] migrate .bak files from docs-v2 for safekeeping
- acbf8d55 chore(assets): sync latest orchestrator context plan
- b706e604 chore(assets): migrate context_data from docs-v2 branch
- 8b247199 chore(assets): sync migrate_cloudinary assets from docs-v2
- d26624c2 docs(assets): add media migration README with CDN path
- af7e8ef8 Clarify purpose of docs-v2-assets branch
- b0fac23c Trim docs-v2-assets branch to asset-only content
- 8caba753 Merge branch 'docs-v2-dev' into docs-v2
- 7e6cd3c7 fix image link path
- ab252606 assistant update
- 30efa750 Merge origin/main into docs-v2 to resolve PR conflicts
- 2f2fe525 restructure docs.json to ensure v1 displays as default. add ASSISTANT and gitattributes for large files
- 20bb2d90 update readme
- 683e02e5 update openapi path
- dede28f3 make v1 the default docs for now
- d2875b87 Restructure (#755)
- dc6a50a0 commitMessage: `chore: create Discord announcements file from workflow - ${new Date().toISOString()}`
- ac859515 Update README.md
- c29e8045 Merge fork updates: Enhanced hooks, structure improvements, and upstream sync (#754)

### Files

| Path | Size Bytes | Human Size | Referenced | MDX/JSX References |
| --- | --- | --- | --- | --- |
| .github/AGENTS.md | 3590 | 3.51 KiB | yes | v2/internal/rfp/aims.mdx |
| .github/augment-instructions.md | 7938 | 7.75 KiB | no |  |
| .github/CODEOWNERS | 2143 | 2.09 KiB | yes | docs-guide/governance-guides/component-governance.mdx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/internal/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>v2/cn/developers/guides-and-tools/contribution-guide.mdx<br/>v2/cn/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/developers/guides-and-tools/contribution-guide.mdx<br/>v2/es/developers/guides-and-tools/contribution-guide.mdx<br/>v2/es/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/fr/developers/guides-and-tools/contribution-guide.mdx<br/>v2/fr/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/internal/overview/governance.mdx<br/>v2/internal/rfp/aims.mdx<br/>v2/resources/documentation-guide/contribute-to-the-docs.mdx |
| .github/copilot-instructions.md | 6790 | 6.63 KiB | no |  |
| .github/docs-reviewers.txt | 0 | 0 B | no |  |
| .github/ISSUE_TEMPLATE/docs-review.yml | 984 | 984 B | yes | docs-guide/indexes/templates-index.mdx<br/>v2/cn/docs-guide/indexes/templates-index.mdx<br/>v2/es/docs-guide/indexes/templates-index.mdx<br/>v2/es/docs-guide/templates-index.mdx<br/>v2/fr/docs-guide/indexes/templates-index.mdx<br/>v2/fr/docs-guide/templates-index.mdx |
| .github/ISSUE_TEMPLATE/feature_internal.yml | 733 | 733 B | yes | docs-guide/indexes/templates-index.mdx<br/>v2/cn/docs-guide/indexes/templates-index.mdx<br/>v2/es/docs-guide/indexes/templates-index.mdx<br/>v2/es/docs-guide/templates-index.mdx<br/>v2/fr/docs-guide/indexes/templates-index.mdx<br/>v2/fr/docs-guide/templates-index.mdx |
| .github/pull_request_template.md | 1430 | 1.40 KiB | yes | contribute/CONTRIBUTING.mdx<br/>docs-guide/feature-guides/feature-map.mdx<br/>docs-guide/indexes/templates-index.mdx<br/>v2/cn/docs-guide/feature-guides/feature-map.mdx<br/>v2/cn/docs-guide/feature-map.mdx<br/>v2/cn/docs-guide/indexes/templates-index.mdx<br/>v2/es/docs-guide/feature-guides/feature-map.mdx<br/>v2/es/docs-guide/feature-map.mdx<br/>v2/es/docs-guide/indexes/templates-index.mdx<br/>v2/es/docs-guide/templates-index.mdx<br/>v2/fr/docs-guide/feature-guides/feature-map.mdx<br/>v2/fr/docs-guide/feature-map.mdx<br/>v2/fr/docs-guide/indexes/templates-index.mdx<br/>v2/fr/docs-guide/templates-index.mdx |
| .github/README.md | 620 | 620 B | no |  |
| .github/scripts/embed-table.js | 0 | 0 B | no |  |
| .github/scripts/fetch-forum-data.js | 6050 | 5.91 KiB | yes | docs-guide/indexes/scripts-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/scripts/fetch-ghost-blog-data.js | 2641 | 2.58 KiB | yes | docs-guide/indexes/scripts-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/scripts/fetch-youtube-data.js | 3747 | 3.66 KiB | yes | docs-guide/indexes/scripts-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/scripts/gen-table.js | 0 | 0 B | no |  |
| .github/scripts/gen-textareas.js | 0 | 0 B | no |  |
| .github/workflows/auto-assign-docs-reviewers.yml | 0 | 0 B | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx |
| .github/workflows/broken-links.yml | 467 | 467 B | yes | contribute/CONTRIBUTING.mdx<br/>docs-guide/indexes/workflows-index.mdx<br/>docs-guide/quality-testing/quality-gates.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/build-review-assets.yml | 0 | 0 B | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx |
| .github/workflows/generate-review-table.yml | 0 | 0 B | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx |
| .github/workflows/README-test-v2-pages.md | 3815 | 3.73 KiB | no |  |
| .github/workflows/sdk_generation.yaml | 618 | 618 B | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/test-suite.yml | 4333 | 4.23 KiB | yes | contribute/CONTRIBUTING.mdx<br/>docs-guide/indexes/workflows-index.mdx<br/>docs-guide/quality-testing/infrastructure-principles.mdx<br/>docs-guide/quality-testing/quality-gates.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/quality-testing/quality-gates.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/quality-gates.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/quality-gates.mdx<br/>v2/fr/docs-guide/quality-testing/quality-gates.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/test-v2-pages.yml | 7365 | 7.19 KiB | yes | contribute/CONTRIBUTING.mdx<br/>docs-guide/indexes/workflows-index.mdx<br/>docs-guide/quality-testing/quality-gates.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/quality-testing/quality-gates.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/quality-gates.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/quality-gates.mdx<br/>v2/fr/docs-guide/quality-testing/quality-gates.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/update-blog-data.yml | 2144 | 2.09 KiB | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx |
| .github/workflows/update-forum-data.yml | 1176 | 1.15 KiB | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/update-ghost-blog-data.yml | 1062 | 1.04 KiB | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/update-livepeer-release.yml | 2387 | 2.33 KiB | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
| .github/workflows/update-review-template.yml | 0 | 0 B | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx |
| .github/workflows/update-youtube-data.yml | 6271 | 6.12 KiB | yes | docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/indexes/workflows-index.mdx<br/>v2/cn/docs-guide/workflows-index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/docs-guide/indexes/workflows-index.mdx<br/>v2/es/docs-guide/workflows-index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/indexes/workflows-index.mdx<br/>v2/fr/docs-guide/workflows-index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
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
| context-data/ORCHESTRATORS/CONTEXT DATA/orchestrators_inline.md | 12423 | 12.1 KiB | yes | v2/index.mdx<br/>v2/x-notes/index.mdx |
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
| snippets/assets/domain/00_HOME/Eric Shreck Gif.gif | 70555282 | 67.3 MiB | yes | snippets/data/home/hrefs.jsx<br/>v2/cn/home/mission-control.mdx<br/>v2/cn/home/primer.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/es/home/primer.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/fr/home/primer.mdx<br/>v2/home/mission-control.mdx<br/>v2/home/primer.mdx |
| snippets/assets/domain/00_HOME/evolution.png | 1258801 | 1.20 MiB | yes | snippets/data/home/hrefs.jsx<br/>v2/cn/home/about-livepeer/evolution.mdx<br/>v2/es/home/about-livepeer/evolution.mdx<br/>v2/fr/home/about-livepeer/evolution.mdx<br/>v2/home/about-livepeer/evolution.mdx<br/>v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_about.png | 29736 | 29.0 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_ai_run.png | 42813 | 41.8 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_community.png | 61793 | 60.3 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_delegators.png | 49695 | 48.5 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_developer_logo.png | 49389 | 48.2 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_developer.png | 50254 | 49.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_developer1.png | 35857 | 35.0 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_gateways.png | 53366 | 52.1 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_gpu.png | 46249 | 45.2 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_help.png | 54358 | 53.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_logo_developer_sml.png | 44791 | 43.7 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_logo_developer.png | 48100 | 47.0 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_logo_new.png | 46934 | 45.8 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_opportunity.png | 55992 | 54.7 KiB | yes | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_partner.png | 50040 | 48.9 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_reference.png | 39628 | 38.7 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_research.png | 46896 | 45.8 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_researchers.png | 51095 | 49.9 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_showcase.png | 62463 | 61.0 KiB | yes | snippets/components/_archive/showcaseCards.jsx<br/>snippets/components/data/showcaseCards.jsx<br/>v2/cn/home/mission-control.mdx<br/>v2/cn/home/solutions/verticals.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/es/home/solutions/verticals.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/fr/home/solutions/verticals.mdx<br/>v2/home/mission-control.mdx<br/>v2/home/solutions/verticals.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_video_stream.png | 40361 | 39.4 KiB | yes | v2/home/mission-control.mdx |
| snippets/assets/domain/00_HOME/Hero_Images/hero_word_developer.png | 48255 | 47.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Hero_Images/hero_word_NEW.png | 42563 | 41.6 KiB | no |  |
| snippets/assets/domain/00_HOME/industries.png | 1277891 | 1.22 MiB | no |  |
| snippets/assets/domain/00_HOME/Introducing Livepeer Cascade - A Vision For Livepeer’s Future in the Age of Real-Time AI Video.png | 1922117 | 1.83 MiB | no |  |
| snippets/assets/domain/00_HOME/livepeer logo.png | 9631 | 9.41 KiB | no |  |
| snippets/assets/domain/00_HOME/livepeer_evolution_slide.png | 1258801 | 1.20 MiB | no |  |
| snippets/assets/domain/00_HOME/livepeer_usage_messari.png | 589921 | 576.1 KiB | no |  |
| snippets/assets/domain/00_HOME/Livepeer-Logo-Full-Dark.svg | 2238 | 2.19 KiB | no |  |
| snippets/assets/domain/00_HOME/Livepeer-Logo-Full-Light.svg | 2194 | 2.14 KiB | no |  |
| snippets/assets/domain/00_HOME/LivepeerStats.png | 278312 | 271.8 KiB | yes | snippets/data/home/hrefs.jsx<br/>v2/cn/home/about-livepeer/benefits.mdx<br/>v2/es/home/about-livepeer/benefits.mdx<br/>v2/fr/home/about-livepeer/benefits.mdx<br/>v2/home/about-livepeer/benefits.mdx |
| snippets/assets/domain/00_HOME/showcase/ /logo | 29051 | 28.4 KiB | no |  |
| snippets/assets/domain/00_HOME/showcase/ nytv.live/logo | 29051 | 28.4 KiB | no |  |
| snippets/assets/domain/00_HOME/showcase/nytv.live/logo | 29051 | 28.4 KiB | yes | snippets/automations/showcase/showcaseData.jsx |
| snippets/assets/domain/00_HOME/showcase/nytv.live/mediaSrc | 1818228 | 1.73 MiB | yes | snippets/automations/showcase/showcaseData.jsx |
| snippets/assets/domain/00_HOME/whitepaper_diagram.png | 81014 | 79.1 KiB | no |  |
| snippets/assets/domain/01_ABOUT/ProtocolNodeDiagram.png | 78739 | 76.9 KiB | yes | snippets/data/about/hrefs.jsx<br/>v2/about/livepeer-protocol/technical-architecture.mdx<br/>v2/cn/about/livepeer-protocol/technical-architecture.mdx<br/>v2/es/about/livepeer-protocol/technical-architecture.mdx<br/>v2/fr/about/livepeer-protocol/technical-architecture.mdx |
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
| snippets/assets/domain/04_GATEWAYS/code_examples/eliteproxy_launch.example..json | 5361 | 5.24 KiB | no |  |
| snippets/assets/domain/04_GATEWAYS/test-video.mp4 | 11829048 | 11.3 MiB | yes | v2/gateways/quickstart/views/docker/dockerOffChainTab.mdx<br/>v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx |
| snippets/assets/domain/04_GATEWAYS/view-dropdown.png | 22358 | 21.8 KiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/girl1.png | 1370296 | 1.31 MiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/girl2.png | 993774 | 970.5 KiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/guy1.png | 1066312 | 1.02 MiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Avatars/guy2.png | 1052310 | 1.00 MiB | no |  |
| snippets/assets/domain/10_PRODUCTS/Embody/Videos/arealiensreal.mp4 | 11880277 | 11.3 MiB | yes | snippets/data/solutions/hrefs.jsx<br/>v2/cn/solutions/embody/overview.mdx<br/>v2/es/solutions/embody/overview.mdx<br/>v2/fr/solutions/embody/overview.mdx<br/>v2/solutions/embody/overview.mdx |
| snippets/assets/domain/SHARED/LivepeerDocsHero.svg | 67960 | 66.4 KiB | yes | v2/about/portal.mdx<br/>v2/cn/about/portal.mdx<br/>v2/cn/community/community-portal.mdx<br/>v2/cn/community/livepeer-community/trending-topics.mdx<br/>v2/cn/developers/portal.mdx<br/>v2/cn/solutions/portal.mdx<br/>v2/community/community-portal.mdx<br/>v2/community/livepeer-community/trending-topics.mdx<br/>v2/developers/portal.mdx<br/>v2/es/about/portal.mdx<br/>v2/es/community/community-portal.mdx<br/>v2/es/community/livepeer-community/trending-topics.mdx<br/>v2/es/developers/portal.mdx<br/>v2/es/solutions/portal.mdx<br/>v2/fr/about/portal.mdx<br/>v2/fr/community/community-portal.mdx<br/>v2/fr/community/livepeer-community/trending-topics.mdx<br/>v2/fr/developers/portal.mdx<br/>v2/fr/solutions/portal.mdx<br/>v2/home/trending.mdx<br/>v2/solutions/portal.mdx |
| snippets/assets/domain/SHARED/LivepeerDocsLogo.svg | 3706 | 3.62 KiB | yes | contribute/CONTRIBUTING.mdx<br/>snippets/data/resources/hrefs.jsx<br/>snippets/pages/00_HOME/project-showcase.mdx<br/>snippets/pages/01_ABOUT/concepts/actors.mdx<br/>snippets/pages/01_ABOUT/concepts/network.mdx<br/>snippets/pages/01_ABOUT/concepts/overview.mdx<br/>snippets/pages/01_ABOUT/concepts/protocol.mdx<br/>snippets/pages/05_GPUS/Diagrams/orchestratorRole.mdx<br/>v2/about/core-concepts.mdx<br/>v2/about/core-concepts/concepts/actors.mdx<br/>v2/about/faq-about.mdx<br/>v2/about/livepeer-network/actors.mdx<br/>v2/about/livepeer-network/demand-side.mdx<br/>v2/about/livepeer-network/fee-flow.mdx<br/>v2/about/livepeer-network/interfaces.mdx<br/>v2/about/livepeer-network/job-lifecycle.mdx<br/>v2/about/livepeer-network/livepeer-actors/delegators.mdx<br/>v2/about/livepeer-network/livepeer-actors/end-users.mdx<br/>v2/about/livepeer-network/livepeer-actors/gateways.mdx<br/>v2/about/livepeer-network/livepeer-actors/orchestrators.mdx<br/>v2/about/livepeer-network/marketplace.mdx<br/>v2/about/livepeer-network/overview.mdx<br/>v2/about/livepeer-network/scaling.mdx<br/>v2/about/livepeer-network/supply-side.mdx<br/>v2/about/livepeer-network/technical-architecture.mdx<br/>v2/about/livepeer-overview.mdx<br/>v2/about/livepeer-protocol/core-mechanisms.mdx<br/>v2/about/livepeer-protocol/economics.mdx<br/>v2/about/livepeer-protocol/governance-model.mdx<br/>v2/about/livepeer-protocol/livepeer-token.mdx<br/>v2/about/livepeer-protocol/overview.mdx<br/>v2/about/livepeer-protocol/technical-architecture.mdx<br/>v2/about/livepeer-protocol/treasury.mdx<br/>v2/about/mental-model.mdx<br/>v2/about/resources/blockchain-contracts.mdx<br/>v2/about/resources/gateways-vs-orchestrators.mdx<br/>v2/about/resources/livepeer-glossary.mdx<br/>v2/about/resources/livepeer-whitepaper.mdx<br/>v2/about/x-deprecated/livepeer-token-economics.mdx<br/>v2/cn/about/core-concepts.mdx<br/>v2/cn/about/livepeer-network/actors.mdx<br/>v2/cn/about/livepeer-network/interfaces.mdx<br/>v2/cn/about/livepeer-network/job-lifecycle.mdx<br/>v2/cn/about/livepeer-network/marketplace.mdx<br/>v2/cn/about/livepeer-network/overview.mdx<br/>v2/cn/about/livepeer-network/technical-architecture.mdx<br/>v2/cn/about/livepeer-overview.mdx<br/>v2/cn/about/livepeer-protocol/core-mechanisms.mdx<br/>v2/cn/about/livepeer-protocol/economics.mdx<br/>v2/cn/about/livepeer-protocol/governance-model.mdx<br/>v2/cn/about/livepeer-protocol/livepeer-token.mdx<br/>v2/cn/about/livepeer-protocol/overview.mdx<br/>v2/cn/about/livepeer-protocol/technical-architecture.mdx<br/>v2/cn/about/livepeer-protocol/treasury.mdx<br/>v2/cn/about/mental-model.mdx<br/>v2/cn/about/resources/blockchain-contracts.mdx<br/>v2/cn/about/resources/gateways-vs-orchestrators.mdx<br/>v2/cn/about/resources/livepeer-glossary.mdx<br/>v2/cn/about/resources/livepeer-whitepaper.mdx<br/>v2/cn/community/livepeer-community/community-guidelines.mdx<br/>v2/cn/community/livepeer-community/livepeer-latest-topics.mdx<br/>v2/cn/community/livepeer-community/roadmap.mdx<br/>v2/cn/community/livepeer-connect/events-and-community-streams.mdx<br/>v2/cn/community/livepeer-connect/forums-and-discussions.mdx<br/>v2/cn/community/livepeer-connect/news-and-socials.mdx<br/>v2/cn/community/livepeer-contribute/build-livepeer.mdx<br/>v2/cn/community/livepeer-contribute/contribute.mdx<br/>v2/cn/community/livepeer-contribute/opportunities.mdx<br/>v2/cn/developers/ai-pipelines/byoc.mdx<br/>v2/cn/developers/ai-pipelines/comfystream.mdx<br/>v2/cn/developers/ai-pipelines/overview.mdx<br/>v2/cn/developers/builder-opportunities/bug-bounties.mdx<br/>v2/cn/developers/builder-opportunities/dev-programs.mdx<br/>v2/cn/developers/builder-opportunities/grants-and-programmes.mdx<br/>v2/cn/developers/builder-opportunities/livepeer-rfps.mdx<br/>v2/cn/developers/builder-opportunities/oss-contributions.mdx<br/>v2/cn/developers/builder-opportunities/overview.mdx<br/>v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx<br/>v2/cn/developers/developer-guide.mdx<br/>v2/cn/developers/developer-journey.mdx<br/>v2/cn/developers/developer-tools/dashboards.mdx<br/>v2/cn/developers/developer-tools/livepeer-cloud.mdx<br/>v2/cn/developers/developer-tools/livepeer-explorer.mdx<br/>v2/cn/developers/developer-tools/tooling-hub.mdx<br/>v2/cn/developers/guides-and-resources/contribution-guide.mdx<br/>v2/cn/developers/guides-and-tools/contribution-guide.mdx<br/>v2/cn/developers/guides-and-tools/developer-guides.mdx<br/>v2/cn/developers/guides-and-tools/developer-help.mdx<br/>v2/cn/developers/guides-and-tools/resources.mdx<br/>v2/cn/developers/guides/partner-integrations.mdx<br/>v2/cn/developers/journey-mapping.mdx<br/>v2/cn/developers/quickstart/ai/ai-jobs.mdx<br/>v2/cn/developers/quickstart/video/transcoding-jobs.mdx<br/>v2/cn/developers/technical-references/apis.mdx<br/>v2/cn/developers/technical-references/awesome-livepeer.mdx<br/>v2/cn/developers/technical-references/deepwiki.mdx<br/>v2/cn/developers/technical-references/sdks.mdx<br/>v2/cn/developers/technical-references/wiki.mdx<br/>v2/cn/developers/x-deprecated/builder-opportunities/dev-programs.mdx<br/>v2/cn/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx<br/>v2/cn/developers/x-deprecated/contribution-guide.mdx<br/>v2/cn/developers/x-unstaged/developer-tools/dashboards.mdx<br/>v2/cn/developers/x-unstaged/developer-tools/livepeer-cloud.mdx<br/>v2/cn/developers/x-unstaged/developer-tools/livepeer-explorer.mdx<br/>v2/cn/developers/x-unstaged/developer-tools/tooling-hub.mdx<br/>v2/cn/developers/x-unstaged/partner-integrations.mdx<br/>v2/cn/gateways/about-gateways/gateway-architecture.mdx<br/>v2/cn/gateways/about-gateways/gateway-economics.mdx<br/>v2/cn/gateways/about-gateways/gateway-explainer.mdx<br/>v2/cn/gateways/about-gateways/gateway-functions.mdx<br/>v2/cn/gateways/about/architecture.mdx<br/>v2/cn/gateways/about/economics.mdx<br/>v2/cn/gateways/about/explainer.mdx<br/>v2/cn/gateways/about/functions.mdx<br/>v2/cn/gateways/gateway-tools/explorer.mdx<br/>v2/cn/gateways/gateway-tools/livepeer-tools.mdx<br/>v2/cn/gateways/gateways-portal.mdx<br/>v2/cn/gateways/guides-and-resources/community-guides.mdx<br/>v2/cn/gateways/guides-and-resources/community-projects.mdx<br/>v2/cn/gateways/quickstart/AI-prompt.mdx<br/>v2/cn/gateways/quickstart/gateway-setup.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/ai.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/audio-to-text.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/hardware-info.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/hardware-stats.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/health.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/image-to-image.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/image-to-text.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/image-to-video.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/live-video-to-video.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/llm.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/segment-anything-2.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/text-to-image.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/text-to-speech.mdx<br/>v2/cn/gateways/references/api-reference/AI-API/upscale.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/rebond.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/reward.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/signmessage.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx<br/>v2/cn/gateways/references/api-reference/CLI-HTTP/unbond.mdx<br/>v2/cn/gateways/references/arbitrum-exchanges.mdx<br/>v2/cn/gateways/references/arbitrum-rpc.mdx<br/>v2/cn/gateways/references/cli-commands.mdx<br/>v2/cn/gateways/references/configuration-flags.mdx<br/>v2/cn/gateways/references/livepeer-exchanges.mdx<br/>v2/cn/gateways/references/technical-architecture.mdx<br/>v2/cn/gateways/run-a-gateway/configure/ai-configuration.mdx<br/>v2/cn/gateways/run-a-gateway/configure/configuration-overview.mdx<br/>v2/cn/gateways/run-a-gateway/configure/dual-configuration.mdx<br/>v2/cn/gateways/run-a-gateway/configure/pricing-configuration.mdx<br/>v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx<br/>v2/cn/gateways/run-a-gateway/connect/connect-with-offerings.mdx<br/>v2/cn/gateways/run-a-gateway/connect/discover-offerings.mdx<br/>v2/cn/gateways/run-a-gateway/connect/lp-marketplace.mdx<br/>v2/cn/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/cn/gateways/run-a-gateway/install/docker-install.mdx<br/>v2/cn/gateways/run-a-gateway/install/install-overview.mdx<br/>v2/cn/gateways/run-a-gateway/install/linux-install.mdx<br/>v2/cn/gateways/run-a-gateway/install/windows-install.mdx<br/>v2/cn/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx<br/>v2/cn/gateways/run-a-gateway/requirements/setup.mdx<br/>v2/cn/gateways/run-a-gateway/run-a-gateway.mdx<br/>v2/cn/gateways/run-a-gateway/why-run-a-gateway.mdx<br/>v2/cn/gateways/using-gateways/choosing-a-gateway.mdx<br/>v2/cn/gateways/using-gateways/gateway-providers.mdx<br/>v2/cn/home/about-livepeer/benefits.mdx<br/>v2/cn/home/about-livepeer/ecosystem.mdx<br/>v2/cn/home/about-livepeer/evolution.mdx<br/>v2/cn/home/about-livepeer/roadmap.mdx<br/>v2/cn/home/about-livepeer/vision.mdx<br/>v2/cn/home/get-started.mdx<br/>v2/cn/home/solutions/applications.mdx<br/>v2/cn/home/solutions/showcase.mdx<br/>v2/cn/home/solutions/verticals.mdx<br/>v2/cn/lpt/about/mechanics.mdx<br/>v2/cn/lpt/about/overview.mdx<br/>v2/cn/lpt/about/purpose.mdx<br/>v2/cn/lpt/about/tokenomics.mdx<br/>v2/cn/lpt/delegation/about-delegators.mdx<br/>v2/cn/lpt/delegation/delegation-guide.mdx<br/>v2/cn/lpt/delegation/overview.mdx<br/>v2/cn/lpt/governance/model.mdx<br/>v2/cn/lpt/governance/overview.mdx<br/>v2/cn/lpt/governance/processes.mdx<br/>v2/cn/lpt/resources/exchanges.mdx<br/>v2/cn/lpt/resources/lpt-eth-usage.mdx<br/>v2/cn/lpt/token-portal.mdx<br/>v2/cn/lpt/treasury/allocations.mdx<br/>v2/cn/lpt/treasury/overview.mdx<br/>v2/cn/lpt/treasury/proposals.mdx<br/>v2/cn/orchestrators/about-orchestrators/architecture.mdx<br/>v2/cn/orchestrators/about-orchestrators/economics.mdx<br/>v2/cn/orchestrators/about-orchestrators/orchestrator-functions.mdx<br/>v2/cn/orchestrators/about-orchestrators/overview.mdx<br/>v2/cn/orchestrators/advanced-setup/ai-pipelines.mdx<br/>v2/cn/orchestrators/advanced-setup/rewards-and-fees.mdx<br/>v2/cn/orchestrators/advanced-setup/run-a-pool.mdx<br/>v2/cn/orchestrators/advanced-setup/staking-LPT.mdx<br/>v2/cn/orchestrators/orchestrator-tools-and-resources/community-pools.mdx<br/>v2/cn/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx<br/>v2/cn/orchestrators/orchestrators-portal.mdx<br/>v2/cn/orchestrators/quickstart/join-a-pool.mdx<br/>v2/cn/orchestrators/quickstart/orchestrator-setup.mdx<br/>v2/cn/orchestrators/quickstart/overview.mdx<br/>v2/cn/orchestrators/references/cli-flags.mdx<br/>v2/cn/orchestrators/references/faq.mdx<br/>v2/cn/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx<br/>v2/cn/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx<br/>v2/cn/orchestrators/setting-up-an-orchestrator/overview.mdx<br/>v2/cn/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx<br/>v2/cn/resources/changelog/changelog.mdx<br/>v2/cn/resources/changelog/migration-guide.mdx<br/>v2/cn/resources/documentation-guide/component-library/component-library.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/cn/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/cn/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/cn/resources/documentation-guide/documentation-guide.mdx<br/>v2/cn/resources/documentation-guide/documentation-overview.mdx<br/>v2/cn/resources/documentation-guide/snippets-inventory.mdx<br/>v2/cn/resources/documentation-guide/style-guide.mdx<br/>v2/cn/resources/livepeer-glossary.mdx<br/>v2/cn/resources/resources-portal.mdx<br/>v2/cn/solutions/embody/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/delete.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/update.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/assets/upload.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/multistream/create.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/multistream/delete.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/multistream/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/multistream/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/multistream/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/multistream/update.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/playback/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/playback/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/create-user.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/create.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/delete.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/get-user.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/rooms/update-user.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/sessions/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/sessions/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/sessions/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/signing-keys/create.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/signing-keys/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/signing-keys/update.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/create-clip.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/create.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/delete.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/get-clip.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/terminate.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/streams/update.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/tasks/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/tasks/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/tasks/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/transcode/create.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/transcode/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/viewership/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/webhooks/create.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/webhooks/delete.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/webhooks/get.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/webhooks/overview.mdx<br/>v2/cn/solutions/livepeer-studio/api-reference/webhooks/update.mdx<br/>v2/cn/solutions/livepeer-studio/client-use-cases.mdx<br/>v2/cn/solutions/livepeer-studio/get-started/authentication.mdx<br/>v2/cn/solutions/livepeer-studio/get-started/overview.mdx<br/>v2/cn/solutions/livepeer-studio/reference/overview.mdx<br/>v2/cn/solutions/product-hub.mdx<br/>v2/cn/solutions/streamplace/introduction/streamplace-architecture.mdx<br/>v2/cn/solutions/streamplace/introduction/streamplace-funding-model.mdx<br/>v2/cn/solutions/streamplace/introduction/streamplace-guide.mdx<br/>v2/cn/solutions/streamplace/introduction/streamplace-integration.mdx<br/>v2/cn/solutions/streamplace/introduction/streamplace-provenance.mdx<br/>v2/cn/solutions/streamplace/overview.mdx<br/>v2/community/livepeer-community/community-guidelines.mdx<br/>v2/community/livepeer-community/roadmap.mdx<br/>v2/community/livepeer-connect/events-and-community-streams.mdx<br/>v2/community/livepeer-connect/news-and-socials.mdx<br/>v2/community/livepeer-contribute/build-livepeer.mdx<br/>v2/community/livepeer-contribute/contribute.mdx<br/>v2/community/livepeer-contribute/opportunities.mdx<br/>v2/community/resources/dashboards.mdx<br/>v2/developers/ai-inference-on-livepeer/overview.mdx<br/>v2/developers/ai-inference-on-livepeer/workload-fit.mdx<br/>v2/developers/ai-pipelines/byoc.mdx<br/>v2/developers/ai-pipelines/comfystream.mdx<br/>v2/developers/ai-pipelines/model-support.mdx<br/>v2/developers/ai-pipelines/overview.mdx<br/>v2/developers/ai-pipelines/workload-fit.mdx<br/>v2/developers/builder-opportunities/bug-bounties.mdx<br/>v2/developers/builder-opportunities/grants-and-programmes.mdx<br/>v2/developers/builder-opportunities/livepeer-rfps.mdx<br/>v2/developers/builder-opportunities/oss-contributions.mdx<br/>v2/developers/builder-opportunities/overview.mdx<br/>v2/developers/builder-opportunities/rfps-and-proposals.mdx<br/>v2/developers/developer-guide.mdx<br/>v2/developers/developer-journey.mdx<br/>v2/developers/developer-path.mdx<br/>v2/developers/developer-platforms/builder-hub.mdx<br/>v2/developers/developer-platforms/streamplace/streamplace-architecture.mdx<br/>v2/developers/developer-platforms/streamplace/streamplace-funding-model.mdx<br/>v2/developers/developer-platforms/streamplace/streamplace-guide.mdx<br/>v2/developers/developer-platforms/streamplace/streamplace-integration.mdx<br/>v2/developers/developer-platforms/streamplace/streamplace-provenance.mdx<br/>v2/developers/developer-platforms/streamplace/streamplace.mdx<br/>v2/developers/developer-tools/dashboards.mdx<br/>v2/developers/developer-tools/livepeer-cloud.mdx<br/>v2/developers/developer-tools/livepeer-explorer.mdx<br/>v2/developers/developer-tools/tooling-hub.mdx<br/>v2/developers/guides-and-resources/contribution-guide.mdx<br/>v2/developers/guides-and-tools/contribution-guide.mdx<br/>v2/developers/guides-and-tools/developer-guides.mdx<br/>v2/developers/guides-and-tools/developer-help.mdx<br/>v2/developers/guides-and-tools/resources.mdx<br/>v2/developers/guides/partner-integrations.mdx<br/>v2/developers/journey-mapping.mdx<br/>v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx<br/>v2/developers/moved-to-about-livepeer-protocol/livepeer-protocol/README.mdx<br/>v2/developers/moved-to-about-livepeer-protocol/livepeer-token-economics.mdx<br/>v2/developers/quickstart/ai/ai-jobs.mdx<br/>v2/developers/quickstart/video/transcoding-jobs.mdx<br/>v2/developers/quickstart/video/video-streaming-101.mdx<br/>v2/developers/technical-references/apis.mdx<br/>v2/developers/technical-references/awesome-livepeer.mdx<br/>v2/developers/technical-references/deepwiki.mdx<br/>v2/developers/technical-references/sdks.mdx<br/>v2/developers/technical-references/wiki.mdx<br/>v2/developers/x-deprecated/builder-opportunities/dev-programs.mdx<br/>v2/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx<br/>v2/developers/x-unstaged/developer-tools/livepeer-cloud.mdx<br/>v2/developers/x-unstaged/developer-tools/livepeer-explorer.mdx<br/>v2/developers/x-unstaged/developer-tools/tooling-hub.mdx<br/>v2/developers/x-unstaged/partner-integrations.mdx<br/>v2/es/about/core-concepts.mdx<br/>v2/es/about/livepeer-network/actors.mdx<br/>v2/es/about/livepeer-network/interfaces.mdx<br/>v2/es/about/livepeer-network/job-lifecycle.mdx<br/>v2/es/about/livepeer-network/marketplace.mdx<br/>v2/es/about/livepeer-network/overview.mdx<br/>v2/es/about/livepeer-network/technical-architecture.mdx<br/>v2/es/about/livepeer-overview.mdx<br/>v2/es/about/livepeer-protocol/core-mechanisms.mdx<br/>v2/es/about/livepeer-protocol/economics.mdx<br/>v2/es/about/livepeer-protocol/governance-model.mdx<br/>v2/es/about/livepeer-protocol/livepeer-token.mdx<br/>v2/es/about/livepeer-protocol/overview.mdx<br/>v2/es/about/livepeer-protocol/technical-architecture.mdx<br/>v2/es/about/livepeer-protocol/treasury.mdx<br/>v2/es/about/mental-model.mdx<br/>v2/es/about/resources/blockchain-contracts.mdx<br/>v2/es/about/resources/gateways-vs-orchestrators.mdx<br/>v2/es/about/resources/livepeer-glossary.mdx<br/>v2/es/about/resources/livepeer-whitepaper.mdx<br/>v2/es/community/livepeer-community/community-guidelines.mdx<br/>v2/es/community/livepeer-community/livepeer-latest-topics.mdx<br/>v2/es/community/livepeer-community/roadmap.mdx<br/>v2/es/community/livepeer-connect/events-and-community-streams.mdx<br/>v2/es/community/livepeer-connect/forums-and-discussions.mdx<br/>v2/es/community/livepeer-connect/news-and-socials.mdx<br/>v2/es/community/livepeer-contribute/build-livepeer.mdx<br/>v2/es/community/livepeer-contribute/contribute.mdx<br/>v2/es/community/livepeer-contribute/opportunities.mdx<br/>v2/es/developers/ai-pipelines/byoc.mdx<br/>v2/es/developers/ai-pipelines/comfystream.mdx<br/>v2/es/developers/ai-pipelines/overview.mdx<br/>v2/es/developers/builder-opportunities/bug-bounties.mdx<br/>v2/es/developers/builder-opportunities/dev-programs.mdx<br/>v2/es/developers/builder-opportunities/grants-and-programmes.mdx<br/>v2/es/developers/builder-opportunities/livepeer-rfps.mdx<br/>v2/es/developers/builder-opportunities/oss-contributions.mdx<br/>v2/es/developers/builder-opportunities/overview.mdx<br/>v2/es/developers/builder-opportunities/rfps-and-proposals.mdx<br/>v2/es/developers/developer-guide.mdx<br/>v2/es/developers/developer-journey.mdx<br/>v2/es/developers/developer-path.mdx<br/>v2/es/developers/developer-tools/dashboards.mdx<br/>v2/es/developers/developer-tools/livepeer-cloud.mdx<br/>v2/es/developers/developer-tools/livepeer-explorer.mdx<br/>v2/es/developers/developer-tools/tooling-hub.mdx<br/>v2/es/developers/guides-and-resources/contribution-guide.mdx<br/>v2/es/developers/guides-and-tools/contribution-guide.mdx<br/>v2/es/developers/guides-and-tools/developer-guides.mdx<br/>v2/es/developers/guides-and-tools/developer-help.mdx<br/>v2/es/developers/guides-and-tools/resources.mdx<br/>v2/es/developers/guides/partner-integrations.mdx<br/>v2/es/developers/journey-mapping.mdx<br/>v2/es/developers/quickstart/ai/ai-jobs.mdx<br/>v2/es/developers/quickstart/video/transcoding-jobs.mdx<br/>v2/es/developers/technical-references/apis.mdx<br/>v2/es/developers/technical-references/awesome-livepeer.mdx<br/>v2/es/developers/technical-references/deepwiki.mdx<br/>v2/es/developers/technical-references/sdks.mdx<br/>v2/es/developers/technical-references/wiki.mdx<br/>v2/es/developers/x-deprecated/builder-opportunities/dev-programs.mdx<br/>v2/es/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx<br/>v2/es/developers/x-deprecated/contribution-guide.mdx<br/>v2/es/developers/x-unstaged/partner-integrations.mdx<br/>v2/es/gateways/about-gateways/gateway-architecture.mdx<br/>v2/es/gateways/about-gateways/gateway-economics.mdx<br/>v2/es/gateways/about-gateways/gateway-explainer.mdx<br/>v2/es/gateways/about-gateways/gateway-functions.mdx<br/>v2/es/gateways/about/architecture.mdx<br/>v2/es/gateways/about/economics.mdx<br/>v2/es/gateways/about/explainer.mdx<br/>v2/es/gateways/gateway-tools/explorer.mdx<br/>v2/es/gateways/gateway-tools/livepeer-tools.mdx<br/>v2/es/gateways/gateways-portal.mdx<br/>v2/es/gateways/guides-and-resources/community-guides.mdx<br/>v2/es/gateways/guides-and-resources/community-projects.mdx<br/>v2/es/gateways/guides-and-resources/faq.mdx<br/>v2/es/gateways/quickstart/AI-prompt.mdx<br/>v2/es/gateways/quickstart/gateway-setup.mdx<br/>v2/es/gateways/references/api-reference/AI-API/ai.mdx<br/>v2/es/gateways/references/api-reference/AI-API/audio-to-text.mdx<br/>v2/es/gateways/references/api-reference/AI-API/hardware-info.mdx<br/>v2/es/gateways/references/api-reference/AI-API/hardware-stats.mdx<br/>v2/es/gateways/references/api-reference/AI-API/health.mdx<br/>v2/es/gateways/references/api-reference/AI-API/image-to-image.mdx<br/>v2/es/gateways/references/api-reference/AI-API/image-to-text.mdx<br/>v2/es/gateways/references/api-reference/AI-API/image-to-video.mdx<br/>v2/es/gateways/references/api-reference/AI-API/live-video-to-video.mdx<br/>v2/es/gateways/references/api-reference/AI-API/llm.mdx<br/>v2/es/gateways/references/api-reference/AI-API/segment-anything-2.mdx<br/>v2/es/gateways/references/api-reference/AI-API/text-to-image.mdx<br/>v2/es/gateways/references/api-reference/AI-API/text-to-speech.mdx<br/>v2/es/gateways/references/api-reference/AI-API/upscale.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/rebond.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/reward.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/signmessage.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx<br/>v2/es/gateways/references/api-reference/CLI-HTTP/unbond.mdx<br/>v2/es/gateways/references/arbitrum-exchanges.mdx<br/>v2/es/gateways/references/arbitrum-rpc.mdx<br/>v2/es/gateways/references/cli-commands.mdx<br/>v2/es/gateways/references/configuration-flags.mdx<br/>v2/es/gateways/references/livepeer-exchanges.mdx<br/>v2/es/gateways/references/technical-architecture.mdx<br/>v2/es/gateways/run-a-gateway/configure/ai-configuration.mdx<br/>v2/es/gateways/run-a-gateway/configure/configuration-overview.mdx<br/>v2/es/gateways/run-a-gateway/configure/dual-configuration.mdx<br/>v2/es/gateways/run-a-gateway/configure/pricing-configuration.mdx<br/>v2/es/gateways/run-a-gateway/configure/video-configuration.mdx<br/>v2/es/gateways/run-a-gateway/connect/connect-with-offerings.mdx<br/>v2/es/gateways/run-a-gateway/connect/discover-offerings.mdx<br/>v2/es/gateways/run-a-gateway/connect/lp-marketplace.mdx<br/>v2/es/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/es/gateways/run-a-gateway/install/docker-install.mdx<br/>v2/es/gateways/run-a-gateway/install/install-overview.mdx<br/>v2/es/gateways/run-a-gateway/install/linux-install.mdx<br/>v2/es/gateways/run-a-gateway/install/windows-install.mdx<br/>v2/es/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx<br/>v2/es/gateways/run-a-gateway/requirements/setup.mdx<br/>v2/es/gateways/run-a-gateway/run-a-gateway.mdx<br/>v2/es/gateways/run-a-gateway/why-run-a-gateway.mdx<br/>v2/es/gateways/using-gateways/choosing-a-gateway.mdx<br/>v2/es/gateways/using-gateways/gateway-providers.mdx<br/>v2/es/home/about-livepeer/benefits.mdx<br/>v2/es/home/about-livepeer/ecosystem.mdx<br/>v2/es/home/about-livepeer/evolution.mdx<br/>v2/es/home/about-livepeer/roadmap.mdx<br/>v2/es/home/about-livepeer/vision.mdx<br/>v2/es/home/get-started.mdx<br/>v2/es/home/solutions/applications.mdx<br/>v2/es/home/solutions/showcase.mdx<br/>v2/es/home/solutions/verticals.mdx<br/>v2/es/lpt/about/mechanics.mdx<br/>v2/es/lpt/about/overview.mdx<br/>v2/es/lpt/about/purpose.mdx<br/>v2/es/lpt/about/tokenomics.mdx<br/>v2/es/lpt/delegation/about-delegators.mdx<br/>v2/es/lpt/delegation/delegation-guide.mdx<br/>v2/es/lpt/delegation/overview.mdx<br/>v2/es/lpt/governance/model.mdx<br/>v2/es/lpt/governance/overview.mdx<br/>v2/es/lpt/governance/processes.mdx<br/>v2/es/lpt/resources/exchanges.mdx<br/>v2/es/lpt/resources/lpt-eth-usage.mdx<br/>v2/es/lpt/token-portal.mdx<br/>v2/es/lpt/treasury/allocations.mdx<br/>v2/es/lpt/treasury/overview.mdx<br/>v2/es/lpt/treasury/proposals.mdx<br/>v2/es/orchestrators/about-orchestrators/architecture.mdx<br/>v2/es/orchestrators/about-orchestrators/economics.mdx<br/>v2/es/orchestrators/about-orchestrators/orchestrator-functions.mdx<br/>v2/es/orchestrators/about-orchestrators/overview.mdx<br/>v2/es/orchestrators/advanced-setup/ai-pipelines.mdx<br/>v2/es/orchestrators/advanced-setup/delegation.mdx<br/>v2/es/orchestrators/advanced-setup/rewards-and-fees.mdx<br/>v2/es/orchestrators/advanced-setup/run-a-pool.mdx<br/>v2/es/orchestrators/advanced-setup/staking-LPT.mdx<br/>v2/es/orchestrators/orchestrator-tools-and-resources/community-pools.mdx<br/>v2/es/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx<br/>v2/es/orchestrators/orchestrators-portal.mdx<br/>v2/es/orchestrators/quickstart/join-a-pool.mdx<br/>v2/es/orchestrators/quickstart/orchestrator-setup.mdx<br/>v2/es/orchestrators/quickstart/overview.mdx<br/>v2/es/orchestrators/references/cli-flags.mdx<br/>v2/es/orchestrators/references/faq.mdx<br/>v2/es/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx<br/>v2/es/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx<br/>v2/es/orchestrators/setting-up-an-orchestrator/overview.mdx<br/>v2/es/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx<br/>v2/es/resources/changelog/changelog.mdx<br/>v2/es/resources/changelog/migration-guide.mdx<br/>v2/es/resources/documentation-guide/component-library/component-library.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/es/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/es/resources/documentation-guide/documentation-guide.mdx<br/>v2/es/resources/documentation-guide/documentation-overview.mdx<br/>v2/es/resources/documentation-guide/snippets-inventory.mdx<br/>v2/es/resources/documentation-guide/style-guide.mdx<br/>v2/es/resources/livepeer-glossary.mdx<br/>v2/es/resources/resources-portal.mdx<br/>v2/es/solutions/embody/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/delete.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/update.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/assets/upload.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/multistream/create.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/multistream/delete.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/multistream/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/multistream/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/multistream/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/multistream/update.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/playback/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/playback/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/create-user.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/create.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/delete.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/get-user.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/rooms/update-user.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/sessions/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/sessions/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/sessions/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/signing-keys/create.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/signing-keys/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/signing-keys/update.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/create-clip.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/create.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/delete.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/get-clip.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/terminate.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/streams/update.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/tasks/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/tasks/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/tasks/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/transcode/create.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/transcode/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/viewership/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/webhooks/create.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/webhooks/delete.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/webhooks/get.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/webhooks/overview.mdx<br/>v2/es/solutions/livepeer-studio/api-reference/webhooks/update.mdx<br/>v2/es/solutions/livepeer-studio/client-use-cases.mdx<br/>v2/es/solutions/livepeer-studio/get-started/authentication.mdx<br/>v2/es/solutions/livepeer-studio/get-started/overview.mdx<br/>v2/es/solutions/livepeer-studio/reference/overview.mdx<br/>v2/es/solutions/product-hub.mdx<br/>v2/es/solutions/streamplace/introduction/streamplace-architecture.mdx<br/>v2/es/solutions/streamplace/introduction/streamplace-funding-model.mdx<br/>v2/es/solutions/streamplace/introduction/streamplace-guide.mdx<br/>v2/es/solutions/streamplace/introduction/streamplace-integration.mdx<br/>v2/es/solutions/streamplace/introduction/streamplace-provenance.mdx<br/>v2/es/solutions/streamplace/overview.mdx<br/>v2/fr/about/core-concepts.mdx<br/>v2/fr/about/livepeer-network/actors.mdx<br/>v2/fr/about/livepeer-network/interfaces.mdx<br/>v2/fr/about/livepeer-network/job-lifecycle.mdx<br/>v2/fr/about/livepeer-network/marketplace.mdx<br/>v2/fr/about/livepeer-network/overview.mdx<br/>v2/fr/about/livepeer-network/technical-architecture.mdx<br/>v2/fr/about/livepeer-overview.mdx<br/>v2/fr/about/livepeer-protocol/core-mechanisms.mdx<br/>v2/fr/about/livepeer-protocol/economics.mdx<br/>v2/fr/about/livepeer-protocol/governance-model.mdx<br/>v2/fr/about/livepeer-protocol/livepeer-token.mdx<br/>v2/fr/about/livepeer-protocol/overview.mdx<br/>v2/fr/about/livepeer-protocol/technical-architecture.mdx<br/>v2/fr/about/livepeer-protocol/treasury.mdx<br/>v2/fr/about/mental-model.mdx<br/>v2/fr/about/resources/blockchain-contracts.mdx<br/>v2/fr/about/resources/gateways-vs-orchestrators.mdx<br/>v2/fr/about/resources/livepeer-glossary.mdx<br/>v2/fr/about/resources/livepeer-whitepaper.mdx<br/>v2/fr/community/livepeer-community/community-guidelines.mdx<br/>v2/fr/community/livepeer-community/livepeer-latest-topics.mdx<br/>v2/fr/community/livepeer-community/roadmap.mdx<br/>v2/fr/community/livepeer-connect/events-and-community-streams.mdx<br/>v2/fr/community/livepeer-connect/forums-and-discussions.mdx<br/>v2/fr/community/livepeer-connect/news-and-socials.mdx<br/>v2/fr/community/livepeer-contribute/build-livepeer.mdx<br/>v2/fr/community/livepeer-contribute/contribute.mdx<br/>v2/fr/community/livepeer-contribute/opportunities.mdx<br/>v2/fr/developers/ai-pipelines/byoc.mdx<br/>v2/fr/developers/ai-pipelines/comfystream.mdx<br/>v2/fr/developers/ai-pipelines/overview.mdx<br/>v2/fr/developers/builder-opportunities/bug-bounties.mdx<br/>v2/fr/developers/builder-opportunities/dev-programs.mdx<br/>v2/fr/developers/builder-opportunities/grants-and-programmes.mdx<br/>v2/fr/developers/builder-opportunities/livepeer-rfps.mdx<br/>v2/fr/developers/builder-opportunities/oss-contributions.mdx<br/>v2/fr/developers/builder-opportunities/overview.mdx<br/>v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx<br/>v2/fr/developers/developer-guide.mdx<br/>v2/fr/developers/developer-journey.mdx<br/>v2/fr/developers/developer-path.mdx<br/>v2/fr/developers/developer-tools/dashboards.mdx<br/>v2/fr/developers/developer-tools/livepeer-cloud.mdx<br/>v2/fr/developers/developer-tools/livepeer-explorer.mdx<br/>v2/fr/developers/developer-tools/tooling-hub.mdx<br/>v2/fr/developers/guides-and-resources/contribution-guide.mdx<br/>v2/fr/developers/guides-and-tools/contribution-guide.mdx<br/>v2/fr/developers/guides-and-tools/developer-help.mdx<br/>v2/fr/developers/guides-and-tools/resources.mdx<br/>v2/fr/developers/guides/partner-integrations.mdx<br/>v2/fr/developers/journey-mapping.mdx<br/>v2/fr/developers/quickstart/ai/ai-jobs.mdx<br/>v2/fr/developers/quickstart/video/transcoding-jobs.mdx<br/>v2/fr/developers/technical-references/apis.mdx<br/>v2/fr/developers/technical-references/awesome-livepeer.mdx<br/>v2/fr/developers/technical-references/deepwiki.mdx<br/>v2/fr/developers/technical-references/sdks.mdx<br/>v2/fr/developers/technical-references/wiki.mdx<br/>v2/fr/developers/x-deprecated/builder-opportunities/dev-programs.mdx<br/>v2/fr/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx<br/>v2/fr/developers/x-deprecated/contribution-guide.mdx<br/>v2/fr/developers/x-unstaged/developer-tools/dashboards.mdx<br/>v2/fr/developers/x-unstaged/developer-tools/livepeer-cloud.mdx<br/>v2/fr/developers/x-unstaged/developer-tools/livepeer-explorer.mdx<br/>v2/fr/developers/x-unstaged/developer-tools/tooling-hub.mdx<br/>v2/fr/developers/x-unstaged/partner-integrations.mdx<br/>v2/fr/gateways/about-gateways/gateway-architecture.mdx<br/>v2/fr/gateways/about-gateways/gateway-economics.mdx<br/>v2/fr/gateways/about-gateways/gateway-explainer.mdx<br/>v2/fr/gateways/about-gateways/gateway-functions.mdx<br/>v2/fr/gateways/about/architecture.mdx<br/>v2/fr/gateways/about/economics.mdx<br/>v2/fr/gateways/about/explainer.mdx<br/>v2/fr/gateways/about/functions.mdx<br/>v2/fr/gateways/gateway-tools/explorer.mdx<br/>v2/fr/gateways/gateway-tools/livepeer-tools.mdx<br/>v2/fr/gateways/gateways-portal.mdx<br/>v2/fr/gateways/guides-and-resources/community-guides.mdx<br/>v2/fr/gateways/guides-and-resources/community-projects.mdx<br/>v2/fr/gateways/guides-and-resources/faq.mdx<br/>v2/fr/gateways/quickstart/AI-prompt.mdx<br/>v2/fr/gateways/quickstart/gateway-setup.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/ai.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/audio-to-text.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/hardware-info.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/hardware-stats.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/health.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/image-to-image.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/image-to-text.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/image-to-video.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/live-video-to-video.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/llm.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/segment-anything-2.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/text-to-image.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/text-to-speech.mdx<br/>v2/fr/gateways/references/api-reference/AI-API/upscale.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/rebond.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/reward.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/signmessage.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx<br/>v2/fr/gateways/references/api-reference/CLI-HTTP/unbond.mdx<br/>v2/fr/gateways/references/arbitrum-exchanges.mdx<br/>v2/fr/gateways/references/arbitrum-rpc.mdx<br/>v2/fr/gateways/references/cli-commands.mdx<br/>v2/fr/gateways/references/configuration-flags.mdx<br/>v2/fr/gateways/references/livepeer-exchanges.mdx<br/>v2/fr/gateways/references/technical-architecture.mdx<br/>v2/fr/gateways/run-a-gateway/configure/ai-configuration.mdx<br/>v2/fr/gateways/run-a-gateway/configure/configuration-overview.mdx<br/>v2/fr/gateways/run-a-gateway/configure/dual-configuration.mdx<br/>v2/fr/gateways/run-a-gateway/configure/pricing-configuration.mdx<br/>v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx<br/>v2/fr/gateways/run-a-gateway/connect/connect-with-offerings.mdx<br/>v2/fr/gateways/run-a-gateway/connect/discover-offerings.mdx<br/>v2/fr/gateways/run-a-gateway/connect/lp-marketplace.mdx<br/>v2/fr/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/fr/gateways/run-a-gateway/install/docker-install.mdx<br/>v2/fr/gateways/run-a-gateway/install/install-overview.mdx<br/>v2/fr/gateways/run-a-gateway/install/linux-install.mdx<br/>v2/fr/gateways/run-a-gateway/install/windows-install.mdx<br/>v2/fr/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx<br/>v2/fr/gateways/run-a-gateway/requirements/setup.mdx<br/>v2/fr/gateways/run-a-gateway/run-a-gateway.mdx<br/>v2/fr/gateways/run-a-gateway/why-run-a-gateway.mdx<br/>v2/fr/gateways/using-gateways/choosing-a-gateway.mdx<br/>v2/fr/gateways/using-gateways/gateway-providers.mdx<br/>v2/fr/home/about-livepeer/benefits.mdx<br/>v2/fr/home/about-livepeer/ecosystem.mdx<br/>v2/fr/home/about-livepeer/evolution.mdx<br/>v2/fr/home/about-livepeer/roadmap.mdx<br/>v2/fr/home/about-livepeer/vision.mdx<br/>v2/fr/home/get-started.mdx<br/>v2/fr/home/solutions/applications.mdx<br/>v2/fr/home/solutions/showcase.mdx<br/>v2/fr/home/solutions/verticals.mdx<br/>v2/fr/lpt/about/mechanics.mdx<br/>v2/fr/lpt/about/overview.mdx<br/>v2/fr/lpt/about/purpose.mdx<br/>v2/fr/lpt/about/tokenomics.mdx<br/>v2/fr/lpt/delegation/about-delegators.mdx<br/>v2/fr/lpt/delegation/delegation-guide.mdx<br/>v2/fr/lpt/delegation/overview.mdx<br/>v2/fr/lpt/governance/model.mdx<br/>v2/fr/lpt/governance/overview.mdx<br/>v2/fr/lpt/governance/processes.mdx<br/>v2/fr/lpt/resources/exchanges.mdx<br/>v2/fr/lpt/resources/lpt-eth-usage.mdx<br/>v2/fr/lpt/token-portal.mdx<br/>v2/fr/lpt/treasury/allocations.mdx<br/>v2/fr/lpt/treasury/overview.mdx<br/>v2/fr/lpt/treasury/proposals.mdx<br/>v2/fr/orchestrators/about-orchestrators/architecture.mdx<br/>v2/fr/orchestrators/about-orchestrators/economics.mdx<br/>v2/fr/orchestrators/about-orchestrators/orchestrator-functions.mdx<br/>v2/fr/orchestrators/about-orchestrators/overview.mdx<br/>v2/fr/orchestrators/advanced-setup/ai-pipelines.mdx<br/>v2/fr/orchestrators/advanced-setup/delegation.mdx<br/>v2/fr/orchestrators/advanced-setup/rewards-and-fees.mdx<br/>v2/fr/orchestrators/advanced-setup/run-a-pool.mdx<br/>v2/fr/orchestrators/advanced-setup/staking-LPT.mdx<br/>v2/fr/orchestrators/orchestrator-tools-and-resources/community-pools.mdx<br/>v2/fr/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx<br/>v2/fr/orchestrators/orchestrators-portal.mdx<br/>v2/fr/orchestrators/quickstart/join-a-pool.mdx<br/>v2/fr/orchestrators/quickstart/orchestrator-setup.mdx<br/>v2/fr/orchestrators/quickstart/overview.mdx<br/>v2/fr/orchestrators/references/cli-flags.mdx<br/>v2/fr/orchestrators/references/faq.mdx<br/>v2/fr/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx<br/>v2/fr/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx<br/>v2/fr/orchestrators/setting-up-an-orchestrator/overview.mdx<br/>v2/fr/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx<br/>v2/fr/resources/changelog/changelog.mdx<br/>v2/fr/resources/changelog/migration-guide.mdx<br/>v2/fr/resources/documentation-guide/component-library/component-library.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/fr/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/fr/resources/documentation-guide/documentation-guide.mdx<br/>v2/fr/resources/documentation-guide/documentation-overview.mdx<br/>v2/fr/resources/documentation-guide/snippets-inventory.mdx<br/>v2/fr/resources/documentation-guide/style-guide.mdx<br/>v2/fr/resources/livepeer-glossary.mdx<br/>v2/fr/resources/resources-portal.mdx<br/>v2/fr/solutions/embody/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/delete.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/update.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/assets/upload.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/multistream/create.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/multistream/delete.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/multistream/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/multistream/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/multistream/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/multistream/update.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/playback/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/playback/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/create-user.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/create.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/delete.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/get-user.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/rooms/update-user.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/sessions/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/sessions/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/sessions/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/signing-keys/create.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/signing-keys/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/signing-keys/update.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/create-clip.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/create.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/delete.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/get-clip.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/terminate.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/streams/update.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/tasks/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/tasks/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/tasks/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/transcode/create.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/transcode/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/viewership/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/webhooks/create.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/webhooks/delete.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/webhooks/get.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/webhooks/overview.mdx<br/>v2/fr/solutions/livepeer-studio/api-reference/webhooks/update.mdx<br/>v2/fr/solutions/livepeer-studio/client-use-cases.mdx<br/>v2/fr/solutions/livepeer-studio/get-started/authentication.mdx<br/>v2/fr/solutions/livepeer-studio/get-started/overview.mdx<br/>v2/fr/solutions/livepeer-studio/reference/overview.mdx<br/>v2/fr/solutions/product-hub.mdx<br/>v2/fr/solutions/streamplace/introduction/streamplace-architecture.mdx<br/>v2/fr/solutions/streamplace/introduction/streamplace-funding-model.mdx<br/>v2/fr/solutions/streamplace/introduction/streamplace-guide.mdx<br/>v2/fr/solutions/streamplace/introduction/streamplace-integration.mdx<br/>v2/fr/solutions/streamplace/introduction/streamplace-provenance.mdx<br/>v2/fr/solutions/streamplace/overview.mdx<br/>v2/gateways/_contextData_/docker-install.mdx<br/>v2/gateways/about/architecture.mdx<br/>v2/gateways/about/economics.mdx<br/>v2/gateways/about/explainer.mdx<br/>v2/gateways/about/functions.mdx<br/>v2/gateways/about/overview.mdx<br/>v2/gateways/about/quickstart.mdx<br/>v2/gateways/gateway-tools/explorer.mdx<br/>v2/gateways/gateway-tools/gateway-middleware.mdx<br/>v2/gateways/gateway-tools/livepeer-tools.mdx<br/>v2/gateways/gateways-portal.mdx<br/>v2/gateways/guides-and-resources/community-guides.mdx<br/>v2/gateways/guides-and-resources/community-projects.mdx<br/>v2/gateways/guides-and-resources/faq.mdx<br/>v2/gateways/guides-and-resources/gateway-job-pipelines/byoc.mdx<br/>v2/gateways/guides-and-resources/gateway-job-pipelines/overview.mdx<br/>v2/gateways/payments/overview.mdx<br/>v2/gateways/quickstart/AI-prompt.mdx<br/>v2/gateways/quickstart/gateway-setup.mdx<br/>v2/gateways/references/api-reference/AI-API/ai.mdx<br/>v2/gateways/references/api-reference/AI-API/audio-to-text.mdx<br/>v2/gateways/references/api-reference/AI-API/hardware-info.mdx<br/>v2/gateways/references/api-reference/AI-API/hardware-stats.mdx<br/>v2/gateways/references/api-reference/AI-API/health.mdx<br/>v2/gateways/references/api-reference/AI-API/image-to-image.mdx<br/>v2/gateways/references/api-reference/AI-API/image-to-text.mdx<br/>v2/gateways/references/api-reference/AI-API/image-to-video.mdx<br/>v2/gateways/references/api-reference/AI-API/live-video-to-video.mdx<br/>v2/gateways/references/api-reference/AI-API/llm.mdx<br/>v2/gateways/references/api-reference/AI-API/segment-anything-2.mdx<br/>v2/gateways/references/api-reference/AI-API/text-to-image.mdx<br/>v2/gateways/references/api-reference/AI-API/text-to-speech.mdx<br/>v2/gateways/references/api-reference/AI-API/upscale.mdx<br/>v2/gateways/references/api-reference/AI-Worker/ai-worker-api.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/bond.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/protocolparameters.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/rebond.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/registeredorchestrators.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/reward.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/signmessage.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/status.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx<br/>v2/gateways/references/api-reference/CLI-HTTP/unbond.mdx<br/>v2/gateways/references/api-reference/_delete-all-api.mdx<br/>v2/gateways/references/api-reference/ai-worker-api.mdx<br/>v2/gateways/references/api-reference/hardware-info.mdx<br/>v2/gateways/references/api-reference/hardware-stats.mdx<br/>v2/gateways/references/api-reference/health.mdx<br/>v2/gateways/references/arbitrum-exchanges.mdx<br/>v2/gateways/references/arbitrum-rpc.mdx<br/>v2/gateways/references/cli-commands.mdx<br/>v2/gateways/references/configuration-flags.mdx<br/>v2/gateways/references/contract-addresses.mdx<br/>v2/gateways/references/go-livepeer/cli-reference.mdx<br/>v2/gateways/references/go-livepeer/gpu-support.mdx<br/>v2/gateways/references/go-livepeer/hardware-requirements.mdx<br/>v2/gateways/references/go-livepeer/prometheus-metrics.mdx<br/>v2/gateways/references/livepeer-exchanges.mdx<br/>v2/gateways/references/orchestrator-offerings.mdx<br/>v2/gateways/references/technical-architecture.mdx<br/>v2/gateways/run-a-gateway/configure/ai-configuration.mdx<br/>v2/gateways/run-a-gateway/configure/configuration-overview.mdx<br/>v2/gateways/run-a-gateway/configure/configuration-reference.mdx<br/>v2/gateways/run-a-gateway/configure/dual-configuration.mdx<br/>v2/gateways/run-a-gateway/configure/dual-docker.mdx<br/>v2/gateways/run-a-gateway/configure/pricing-configuration.mdx<br/>v2/gateways/run-a-gateway/configure/video-configuration-view.mdx<br/>v2/gateways/run-a-gateway/configure/video-configuration.mdx<br/>v2/gateways/run-a-gateway/connect/connect-with-offerings.mdx<br/>v2/gateways/run-a-gateway/connect/discover-offerings.mdx<br/>v2/gateways/run-a-gateway/connect/lp-marketplace.mdx<br/>v2/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/gateways/run-a-gateway/install/docker-install.mdx<br/>v2/gateways/run-a-gateway/install/install-overview.mdx<br/>v2/gateways/run-a-gateway/install/linux-install.mdx<br/>v2/gateways/run-a-gateway/install/windows-install.mdx<br/>v2/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx<br/>v2/gateways/run-a-gateway/publish/connect-with-offerings.mdx<br/>v2/gateways/run-a-gateway/requirements/setup.mdx<br/>v2/gateways/run-a-gateway/run-a-gateway.mdx<br/>v2/gateways/run-a-gateway/transcoding.mdx<br/>v2/gateways/run-a-gateway/v1/transcoding-options.mdx<br/>v2/gateways/run-a-gateway/why-run-a-gateway.mdx<br/>v2/gateways/using-gateways/gateway-providers.mdx<br/>v2/home/about-livepeer/benefits.mdx<br/>v2/home/about-livepeer/ecosystem.mdx<br/>v2/home/about-livepeer/evolution.mdx<br/>v2/home/about-livepeer/roadmap.mdx<br/>v2/home/about-livepeer/vision.mdx<br/>v2/home/get-started.mdx<br/>v2/home/get-started/ai-pipelines.mdx<br/>v2/home/get-started/build-on-livepeer.mdx<br/>v2/home/get-started/stream-video.mdx<br/>v2/home/get-started/use-livepeer.mdx<br/>v2/home/solutions/applications.mdx<br/>v2/home/solutions/landscape.mdx<br/>v2/home/solutions/showcase.mdx<br/>v2/home/solutions/verticals.mdx<br/>v2/internal/ally-notes.mdx<br/>v2/internal/definitions.mdx<br/>v2/internal/docs-philosophy.mdx<br/>v2/internal/ecosystem.mdx<br/>v2/internal/internal-overview.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx<br/>v2/internal/layout-components-scripts-styling/pages.mdx<br/>v2/internal/overview/about.mdx<br/>v2/internal/overview/docs-philosophy.mdx<br/>v2/internal/overview/governance.mdx<br/>v2/internal/overview/personas.mdx<br/>v2/internal/overview/strategic-alignment.mdx<br/>v2/internal/references.mdx<br/>v2/internal/rfp/aims.mdx<br/>v2/internal/rfp/deliverables.mdx<br/>v2/internal/rfp/outcomes.mdx<br/>v2/internal/rfp/problem-statements.mdx<br/>v2/internal/rfp/report.mdx<br/>v2/lpt/about/mechanics.mdx<br/>v2/lpt/about/overview.mdx<br/>v2/lpt/about/purpose.mdx<br/>v2/lpt/about/tokenomics.mdx<br/>v2/lpt/delegation/about-delegators.mdx<br/>v2/lpt/delegation/delegation-economics.mdx<br/>v2/lpt/delegation/delegation-guide.mdx<br/>v2/lpt/delegation/getting-started.mdx<br/>v2/lpt/delegation/overview.mdx<br/>v2/lpt/governance/model.mdx<br/>v2/lpt/governance/overview.mdx<br/>v2/lpt/governance/processes.mdx<br/>v2/lpt/resources/delegator-videos-and-blogs.mdx<br/>v2/lpt/resources/exchanges.mdx<br/>v2/lpt/resources/lpt-eth-usage.mdx<br/>v2/lpt/token-portal.mdx<br/>v2/lpt/treasury/allocations.mdx<br/>v2/lpt/treasury/overview.mdx<br/>v2/lpt/treasury/proposals.mdx<br/>v2/orchestrators/about-orchestrators/architecture.mdx<br/>v2/orchestrators/about-orchestrators/economics.mdx<br/>v2/orchestrators/about-orchestrators/job-types.mdx<br/>v2/orchestrators/about-orchestrators/orchestrator-functions.mdx<br/>v2/orchestrators/about-orchestrators/overview.mdx<br/>v2/orchestrators/advanced-setup/ai-pipelines.mdx<br/>v2/orchestrators/advanced-setup/delegation.mdx<br/>v2/orchestrators/advanced-setup/hosting-models.mdx<br/>v2/orchestrators/advanced-setup/rewards-and-fees.mdx<br/>v2/orchestrators/advanced-setup/run-a-pool.mdx<br/>v2/orchestrators/advanced-setup/staking-LPT.mdx<br/>v2/orchestrators/earnings.mdx<br/>v2/orchestrators/orchestrator-journey.mdx<br/>v2/orchestrators/orchestrator-tools-and-resources/community-pools.mdx<br/>v2/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx<br/>v2/orchestrators/orchestrators-portal.mdx<br/>v2/orchestrators/payments/index.mdx<br/>v2/orchestrators/quickstart/batch-ai-quickstart.mdx<br/>v2/orchestrators/quickstart/join-a-pool.mdx<br/>v2/orchestrators/quickstart/orchestrator-setup.mdx<br/>v2/orchestrators/quickstart/overview.mdx<br/>v2/orchestrators/quickstart/realtime-ai-quickstart.mdx<br/>v2/orchestrators/references/cli-flags.mdx<br/>v2/orchestrators/references/faq.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/install-go-livepeer.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/orch-config.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/overview.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/publish-offerings.mdx<br/>v2/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx<br/>v2/resources/changelog/changelog.mdx<br/>v2/resources/changelog/migration-guide.mdx<br/>v2/resources/concepts/brief-history-of-video.mdx<br/>v2/resources/documentation-guide/authoring-standard.mdx<br/>v2/resources/documentation-guide/component-library/component-library.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/resources/documentation-guide/documentation-guide.mdx<br/>v2/resources/documentation-guide/documentation-overview.mdx<br/>v2/resources/documentation-guide/snippets-inventory.mdx<br/>v2/resources/documentation-guide/style-guide.mdx<br/>v2/resources/livepeer-glossary.mdx<br/>v2/resources/media-kit.mdx<br/>v2/resources/references/contract-addresses.mdx<br/>v2/resources/resources-portal.mdx<br/>v2/solutions/embody/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/delete.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/update.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx<br/>v2/solutions/livepeer-studio/api-reference/assets/upload.mdx<br/>v2/solutions/livepeer-studio/api-reference/multistream/create.mdx<br/>v2/solutions/livepeer-studio/api-reference/multistream/delete.mdx<br/>v2/solutions/livepeer-studio/api-reference/multistream/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/multistream/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/multistream/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/multistream/update.mdx<br/>v2/solutions/livepeer-studio/api-reference/playback/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/playback/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/create-user.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/create.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/delete.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/get-user.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx<br/>v2/solutions/livepeer-studio/api-reference/rooms/update-user.mdx<br/>v2/solutions/livepeer-studio/api-reference/sessions/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx<br/>v2/solutions/livepeer-studio/api-reference/sessions/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/sessions/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/signing-keys/create.mdx<br/>v2/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx<br/>v2/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/signing-keys/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/signing-keys/update.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/create-clip.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/create.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/delete.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/get-clip.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/terminate.mdx<br/>v2/solutions/livepeer-studio/api-reference/streams/update.mdx<br/>v2/solutions/livepeer-studio/api-reference/tasks/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/tasks/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/tasks/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/transcode/create.mdx<br/>v2/solutions/livepeer-studio/api-reference/transcode/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx<br/>v2/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx<br/>v2/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx<br/>v2/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx<br/>v2/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx<br/>v2/solutions/livepeer-studio/api-reference/viewership/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/webhooks/create.mdx<br/>v2/solutions/livepeer-studio/api-reference/webhooks/delete.mdx<br/>v2/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx<br/>v2/solutions/livepeer-studio/api-reference/webhooks/get.mdx<br/>v2/solutions/livepeer-studio/api-reference/webhooks/overview.mdx<br/>v2/solutions/livepeer-studio/api-reference/webhooks/update.mdx<br/>v2/solutions/livepeer-studio/client-use-cases.mdx<br/>v2/solutions/livepeer-studio/get-started/authentication.mdx<br/>v2/solutions/livepeer-studio/get-started/overview.mdx<br/>v2/solutions/livepeer-studio/reference/overview.mdx<br/>v2/solutions/product-hub.mdx<br/>v2/solutions/solution-providers.mdx<br/>v2/solutions/streamplace/introduction/streamplace-architecture.mdx<br/>v2/solutions/streamplace/introduction/streamplace-funding-model.mdx<br/>v2/solutions/streamplace/introduction/streamplace-guide.mdx<br/>v2/solutions/streamplace/introduction/streamplace-integration.mdx<br/>v2/solutions/streamplace/introduction/streamplace-provenance.mdx<br/>v2/solutions/streamplace/overview.mdx<br/>v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx<br/>v2/solutions/x-deprecated/developer-platforms/streamplace/streamplace.mdx<br/>v2/x-deprecated/about-livepeer/moved/livepeer-ecosystem.mdx<br/>v2/x-deprecated/about-livepeer/moved/livepeer-evolution.mdx<br/>v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx<br/>v2/x-deprecated/about-livepeer/moved/why-livepeer.mdx<br/>v2/x-deprecated/gateways/references/configuration-flags-old.mdx<br/>v2/x-deprecated/unmatched/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx<br/>v2/x-deprecated/unmatched/09_internal/definitions.mdx<br/>v2/x-deprecated/unmatched/09_internal/ecosystem.mdx<br/>v2/x-deprecated/unmatched/09_internal/references.mdx<br/>v2/x-experimental/copy-trending-at-livepeer.mdx<br/>v2/x-experimental/trending-layout-tests.mdx |
| snippets/assets/favicon.png | 12462 | 12.2 KiB | no |  |
| snippets/assets/logo/dark.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logo/light.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logos/dark.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logos/light.svg | 3706 | 3.62 KiB | no |  |
| snippets/assets/logos/Livepeer-Logo-Full-Dark.svg | 2238 | 2.19 KiB | yes | v2/resources/media-kit.mdx |
| snippets/assets/logos/Livepeer-Logo-Full-Light.svg | 2194 | 2.14 KiB | no |  |
| snippets/assets/logos/Livepeer-Logo-Full-Theme.svg | 2432 | 2.38 KiB | yes | docs-guide/indexes/components-index.mdx<br/>snippets/components/_archive/Portals.jsx<br/>snippets/components/page-structure/portals.jsx<br/>snippets/data/resources/hrefs.jsx<br/>snippets/snippetsWiki/mintlify-behaviour.mdx<br/>v2/cn/docs-guide/components-index.mdx<br/>v2/cn/docs-guide/indexes/components-index.mdx<br/>v2/cn/resources/documentation-guide/component-library/overview.mdx<br/>v2/es/docs-guide/components-index.mdx<br/>v2/es/docs-guide/indexes/components-index.mdx<br/>v2/es/resources/documentation-guide/component-library/overview.mdx<br/>v2/fr/docs-guide/components-index.mdx<br/>v2/fr/docs-guide/indexes/components-index.mdx<br/>v2/fr/resources/documentation-guide/component-library/overview.mdx<br/>v2/resources/documentation-guide/component-library/overview.mdx<br/>v2/resources/media-kit.mdx |
| snippets/assets/logos/Livepeer-Logo-Symbol-Dark.svg | 539 | 539 B | yes | v2/resources/media-kit.mdx |
| snippets/assets/logos/Livepeer-Logo-Symbol-Green-Theme.svg | 691 | 691 B | yes | docs-guide/indexes/components-index.mdx<br/>snippets/components/_archive/Portals.jsx<br/>snippets/components/page-structure/portals.jsx<br/>v2/cn/docs-guide/components-index.mdx<br/>v2/cn/docs-guide/indexes/components-index.mdx<br/>v2/cn/resources/documentation-guide/component-library/overview.mdx<br/>v2/es/docs-guide/components-index.mdx<br/>v2/es/docs-guide/indexes/components-index.mdx<br/>v2/es/resources/documentation-guide/component-library/overview.mdx<br/>v2/fr/docs-guide/components-index.mdx<br/>v2/fr/docs-guide/indexes/components-index.mdx<br/>v2/fr/resources/documentation-guide/component-library/overview.mdx<br/>v2/resources/documentation-guide/component-library/overview.mdx |
| snippets/assets/logos/Livepeer-Logo-Symbol-Green.svg | 539 | 539 B | no |  |
| snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg | 536 | 536 B | yes | docs.json.jsx<br/>snippets/components/_archive/HeroGif.jsx<br/>snippets/components/page-structure/heroGif.jsx<br/>snippets/components/primitives/icons.jsx<br/>v2/resources/media-kit.mdx |
| snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg | 646 | 646 B | yes | docs.json.jsx<br/>snippets/components/_archive/frameMode.jsx<br/>snippets/components/primitives/divider.jsx |
| snippets/assets/logos/Livepeer-Logo-Symbol.svg | 543 | 543 B | yes | snippets/components/primitives/icons.jsx |
| snippets/assets/logos/products/daydream-logo-dark.svg | 5575 | 5.44 KiB | yes | snippets/data/developers/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>v2/cn/solutions/product-hub.mdx<br/>v2/developers/developer-platforms/builder-hub.mdx<br/>v2/es/solutions/product-hub.mdx<br/>v2/fr/solutions/product-hub.mdx<br/>v2/resources/media-kit.mdx<br/>v2/solutions/product-hub.mdx<br/>v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx |
| snippets/assets/logos/products/livepeer-studio-logo.svg | 4128 | 4.03 KiB | yes | snippets/data/developers/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>v2/cn/solutions/product-hub.mdx<br/>v2/developers/developer-platforms/builder-hub.mdx<br/>v2/es/solutions/product-hub.mdx<br/>v2/fr/solutions/product-hub.mdx<br/>v2/resources/media-kit.mdx<br/>v2/solutions/product-hub.mdx<br/>v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx |
| snippets/assets/logos/products/streamplace-cube.png | 16122 | 15.7 KiB | no |  |
| snippets/assets/logos/products/streamplace-logo.svg | 790 | 790 B | yes | snippets/data/developers/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>v2/cn/solutions/product-hub.mdx<br/>v2/developers/developer-platforms/builder-hub.mdx<br/>v2/es/solutions/product-hub.mdx<br/>v2/fr/solutions/product-hub.mdx<br/>v2/resources/media-kit.mdx<br/>v2/solutions/product-hub.mdx<br/>v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx |
| snippets/assets/media/gifs/daydream.gif | 92239994 | 88.0 MiB | yes | v2/x-archived/p1-cleanup/showcaseDataOld.jsx |
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
| snippets/assets/media/images/DelegatorImg.avif | 5665 | 5.53 KiB | yes | v2/cn/resources/documentation-guide/component-library/component-library.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/component-library/component-library.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/component-library/component-library.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/component-library/component-library.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx |
| snippets/assets/media/images/GPU callout.png | 665512 | 649.9 KiB | no |  |
| snippets/assets/media/images/GPUImg.webp | 428448 | 418.4 KiB | yes | v2/cn/resources/documentation-guide/component-library/component-library.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/component-library/component-library.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/component-library/component-library.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/component-library/component-library.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx |
| snippets/assets/media/images/Livepeer Stats.png | 298069 | 291.1 KiB | no |  |
| snippets/assets/media/images/nytv-logo.png | 29051 | 28.4 KiB | yes | snippets/data/resources/hrefs.jsx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx<br/>v2/x-archived/p1-cleanup/showcaseData copy.jsx<br/>v2/x-archived/p1-cleanup/showcaseDataTest.jsx |
| snippets/assets/media/images/showcase/nytv-logo.svg | 7777 | 7.59 KiB | no |  |
| snippets/assets/media/videos/daydream.mp4 | 31365183 | 29.9 MiB | yes | snippets/components/_archive/video.jsx<br/>snippets/data/resources/hrefs.jsx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx |
| snippets/assets/media/videos/Embody.mp4 | 3251318 | 3.10 MiB | no |  |
| snippets/assets/media/videos/frameworks.mp4 | 5196787 | 4.96 MiB | no |  |
| snippets/assets/media/videos/HeroBackground.mp4 | 47153588 | 45.0 MiB | yes | snippets/components/_archive/video.jsx<br/>snippets/components/content/video.jsx<br/>snippets/data/resources/hrefs.jsx<br/>v2/cn/resources/documentation-guide/component-library/component-library.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/component-library/component-library.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/component-library/component-library.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/component-library/component-library.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx |
| snippets/assets/media/videos/livepeer-founders-post.mp4 | 3344652 | 3.19 MiB | yes | snippets/components/_archive/video.jsx<br/>snippets/components/content/video.jsx<br/>snippets/data/home/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>v2/cn/home/about-livepeer/vision.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/es/home/about-livepeer/vision.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/home/about-livepeer/vision.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/home/about-livepeer/vision.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx |
| snippets/assets/media/videos/LivepeerStudio.mp4 | 10327462 | 9.85 MiB | no |  |
| snippets/assets/media/videos/nytv.live.mp4 | 5549779 | 5.29 MiB | no |  |
| snippets/assets/media/videos/nytvlivepromo.mp4 | 1818228 | 1.73 MiB | no |  |
| snippets/assets/media/videos/streamplace.mp4 | 3251318 | 3.10 MiB | no |  |
| snippets/assets/README.mdx | 1193 | 1.17 KiB | yes | docs-guide/feature-guides/content-system.mdx<br/>docs-guide/source-of-truth-policy.mdx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/home/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>snippets/data/unknown/hrefs.jsx<br/>tools/scripts/snippets/README.mdx<br/>v2/cn/docs-guide/feature-guides/content-system.mdx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/docs-guide/source-of-truth-policy.mdx<br/>v2/cn/index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/developers/index.mdx<br/>v2/es/docs-guide/feature-guides/content-system.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/docs-guide/source-of-truth-policy.mdx<br/>v2/es/index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/docs-guide/feature-guides/content-system.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/docs-guide/source-of-truth-policy.mdx<br/>v2/fr/index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/index.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx |
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
| tasks-plan-archive/active/CONTENTFILES/byoc.mdx | 8205 | 8.01 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/table.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>snippets/data/home/hrefs.jsx<br/>snippets/data/orchestrators/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/developers/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/community-content-files.zip | 24003 | 23.4 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/dev-guides-files.zip | 18086 | 17.7 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files.zip | 37977 | 37.1 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/ai-configuration.mdx | 11314 | 11.0 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/configuration-flags.mdx | 13008 | 12.7 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/connect-with-offerings.mdx | 9781 | 9.55 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/content/zoomableDiagram.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/faq.mdx | 14349 | 14.0 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/data/community/hrefs.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>snippets/data/orchestrators/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/community/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx<br/>v2/orchestrators/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/gateway-architecture.mdx | 11526 | 11.3 KiB | yes | v2/cn/index.mdx<br/>v2/es/index.mdx<br/>v2/fr/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/gateway-economics.mdx | 9894 | 9.66 KiB | yes | v2/cn/index.mdx<br/>v2/es/index.mdx<br/>v2/fr/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/monitor-and-optimise.mdx | 10086 | 9.85 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/content/zoomableDiagram.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/overview.mdx | 8997 | 8.79 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/gateway-content-files/troubleshooting.mdx | 17594 | 17.2 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/hosting-models.mdx | 9702 | 9.47 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/table.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/orchestrators/hrefs.jsx<br/>v2/index.mdx<br/>v2/orchestrators/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/local-gateways-discord.txt | 29982 | 29.3 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/lpt-content-files.zip | 24003 | 23.4 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/model-support.mdx | 10849 | 10.6 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/table.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/orchestrators/hrefs.jsx<br/>v2/developers/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/notion/NaaP MVP .zip | 809484 | 790.5 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/notion/NaaP MVP 2.zip | 4837 | 4.72 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/notion/network as a product.zip | 3228 | 3.15 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/overview.mdx | 5937 | 5.80 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files.zip | 31923 | 31.2 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/batch-ai.mdx | 3578 | 3.49 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/cloud-spe-gateway.mdx | 3968 | 3.88 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/daydream-gateway.mdx | 4292 | 4.19 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/index.mdx | 1747 | 1.71 KiB | yes | contribute/CONTRIBUTING.mdx<br/>docs-guide/README.mdx<br/>docs-guide/feature-guides/automation-pipelines.mdx<br/>docs-guide/feature-guides/data-integrations.mdx<br/>docs-guide/feature-guides/feature-map.mdx<br/>docs-guide/governance-guides/component-governance.mdx<br/>docs-guide/indexes/pages-index.mdx<br/>docs-guide/indexes/scripts-index.mdx<br/>docs-guide/lpd.mdx<br/>docs-guide/source-of-truth-policy.mdx<br/>snippets/data/community/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>tools/scripts/snippets/README.mdx<br/>v2/cn/docs-guide/README.mdx<br/>v2/cn/docs-guide/feature-guides/automation-pipelines.mdx<br/>v2/cn/docs-guide/feature-guides/data-integrations.mdx<br/>v2/cn/docs-guide/feature-guides/feature-map.mdx<br/>v2/cn/docs-guide/feature-map.mdx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/lpd.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/docs-guide/source-of-truth-policy.mdx<br/>v2/cn/index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/cn/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/cn/resources/documentation-guide/documentation-guide.mdx<br/>v2/cn/resources/documentation-guide/snippets-inventory.mdx<br/>v2/es/docs-guide/README.mdx<br/>v2/es/docs-guide/feature-guides/automation-pipelines.mdx<br/>v2/es/docs-guide/feature-guides/data-integrations.mdx<br/>v2/es/docs-guide/feature-guides/feature-map.mdx<br/>v2/es/docs-guide/feature-map.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/lpd.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/docs-guide/source-of-truth-policy.mdx<br/>v2/es/index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/es/resources/documentation-guide/documentation-guide.mdx<br/>v2/es/resources/documentation-guide/snippets-inventory.mdx<br/>v2/fr/docs-guide/README.mdx<br/>v2/fr/docs-guide/automation-pipelines.mdx<br/>v2/fr/docs-guide/feature-guides/automation-pipelines.mdx<br/>v2/fr/docs-guide/feature-guides/data-integrations.mdx<br/>v2/fr/docs-guide/feature-guides/feature-map.mdx<br/>v2/fr/docs-guide/feature-map.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/lpd.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/docs-guide/source-of-truth-policy.mdx<br/>v2/fr/index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/fr/resources/documentation-guide/documentation-guide.mdx<br/>v2/fr/resources/documentation-guide/snippets-inventory.mdx<br/>v2/index.mdx<br/>v2/internal/rfp/aims.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/docs-features-and-ai-integrations.mdx<br/>v2/resources/documentation-guide/documentation-guide.mdx<br/>v2/resources/documentation-guide/snippets-inventory.mdx |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/job-types.mdx | 6314 | 6.17 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/data/orchestrators/hrefs.jsx<br/>v2/index.mdx<br/>v2/orchestrators/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/livepeer-studio-gateway.mdx | 3848 | 3.76 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/mnt/user-data/outputs/part2-mdx/orchestrators/about-orchestrators/naap-platform.mdx | 4157 | 4.06 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/naap-platform.mdx | 5077 | 4.96 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/payment-clearinghouse.mdx | 4864 | 4.75 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/realtime-ai.mdx | 9603 | 9.38 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/ai-pipelines-overview.mdx | 9844 | 9.61 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/choosing-a-gateway.mdx | 6406 | 6.26 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/tables.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/cloud-spe-gateway.mdx | 5761 | 5.63 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/daydream-gateway.mdx | 6465 | 6.31 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/delegator-onboarding.mdx | 8638 | 8.44 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/developer-journey.mdx | 9453 | 9.23 KiB | yes | snippets/data/developers/hrefs.jsx<br/>v2/cn/index.mdx<br/>v2/developers/index.mdx<br/>v2/es/index.mdx<br/>v2/fr/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/gateway-operator-opportunities.mdx | 8765 | 8.56 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/tables.jsx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/gateways/index.mdx<br/>v2/index.mdx<br/>v2/x-deprecated/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/livepeer-studio-gateway.mdx | 6956 | 6.79 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/orchestrator-earnings.mdx | 7902 | 7.72 KiB | no |  |
| tasks-plan-archive/active/CONTENTFILES/repo-content-files/video-streaming-101.mdx | 8348 | 8.15 KiB | yes | snippets/components/layout/containers.jsx<br/>snippets/components/layout/tables.jsx<br/>snippets/components/primitives/previewCallouts.jsx<br/>snippets/data/developers/hrefs.jsx<br/>v2/developers/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/CONTENTFILES/workload-fit.mdx | 8829 | 8.62 KiB | yes | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/layout.jsx<br/>snippets/components/layout/table.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/components/primitives/previewCallouts.jsx<br/>snippets/data/developers/hrefs.jsx<br/>v2/developers/index.mdx<br/>v2/index.mdx |
| tasks-plan-archive/active/dev-plan1-quick-fixes.docx | 15136 | 14.8 KiB | no |  |
| tasks-plan-archive/active/dev-plan3-overall-updated-plan.docx | 16697 | 16.3 KiB | no |  |
| tasks-plan-archive/active/Developer-Gateway-Enhace-Flow-Plan.docx | 16001 | 15.6 KiB | no |  |
| tasks-plan-archive/active/gateways-restructure.mdx | 13386 | 13.1 KiB | no |  |
| tasks-plan-archive/active/repo-governance-files.zip | 13369 | 13.1 KiB | no |  |
| tests/integration/browser.test.js.bak | 8422 | 8.22 KiB | no |  |
| tests/integration/browser.test.js.bak2 | 8452 | 8.25 KiB | no |  |
| tools/scripts/test-v2-pages.js.bak | 6821 | 6.66 KiB | no |  |
| tools/scripts/test-v2-pages.js.bak2 | 6825 | 6.67 KiB | no |  |
| v1/images/ai/cool-cat-hat-moving.gif | 3375480 | 3.22 MiB | yes | v1/ai/pipelines/image-to-video.mdx |

## 7. MDX/JSX Files Containing Large Asset References

- contribute/CONTRIBUTING.mdx
- docs-guide/README.mdx
- docs-guide/feature-guides/automation-pipelines.mdx
- docs-guide/feature-guides/content-system.mdx
- docs-guide/feature-guides/data-integrations.mdx
- docs-guide/feature-guides/feature-map.mdx
- docs-guide/governance-guides/component-governance.mdx
- docs-guide/indexes/components-index.mdx
- docs-guide/indexes/pages-index.mdx
- docs-guide/indexes/scripts-index.mdx
- docs-guide/indexes/templates-index.mdx
- docs-guide/indexes/workflows-index.mdx
- docs-guide/lpd.mdx
- docs-guide/quality-testing/infrastructure-principles.mdx
- docs-guide/quality-testing/quality-gates.mdx
- docs-guide/source-of-truth-policy.mdx
- docs.json.jsx
- snippets/automations/showcase/showcaseData.jsx
- snippets/components/_archive/HeroGif.jsx
- snippets/components/_archive/Portals.jsx
- snippets/components/_archive/frameMode.jsx
- snippets/components/_archive/showcaseCards.jsx
- snippets/components/_archive/video.jsx
- snippets/components/content/video.jsx
- snippets/components/content/zoomableDiagram.jsx
- snippets/components/data/showcaseCards.jsx
- snippets/components/layout/containers.jsx
- snippets/components/layout/layout.jsx
- snippets/components/layout/table.jsx
- snippets/components/layout/tables.jsx
- snippets/components/page-structure/heroGif.jsx
- snippets/components/page-structure/portals.jsx
- snippets/components/primitives/divider.jsx
- snippets/components/primitives/icons.jsx
- snippets/components/primitives/links.jsx
- snippets/components/primitives/previewCallouts.jsx
- snippets/data/about/hrefs.jsx
- snippets/data/community/hrefs.jsx
- snippets/data/developers/hrefs.jsx
- snippets/data/gateways/hrefs.jsx
- snippets/data/home/hrefs.jsx
- snippets/data/internal/hrefs.jsx
- snippets/data/orchestrators/hrefs.jsx
- snippets/data/resources/hrefs.jsx
- snippets/data/solutions/hrefs.jsx
- snippets/data/unknown/hrefs.jsx
- snippets/pages/00_HOME/project-showcase.mdx
- snippets/pages/01_ABOUT/concepts/actors.mdx
- snippets/pages/01_ABOUT/concepts/network.mdx
- snippets/pages/01_ABOUT/concepts/overview.mdx
- snippets/pages/01_ABOUT/concepts/protocol.mdx
- snippets/pages/05_GPUS/Diagrams/orchestratorRole.mdx
- snippets/snippetsWiki/mintlify-behaviour.mdx
- tools/scripts/snippets/README.mdx
- v1/ai/pipelines/image-to-video.mdx
- v2/about/core-concepts.mdx
- v2/about/core-concepts/concepts/actors.mdx
- v2/about/faq-about.mdx
- v2/about/livepeer-network/actors.mdx
- v2/about/livepeer-network/demand-side.mdx
- v2/about/livepeer-network/fee-flow.mdx
- v2/about/livepeer-network/interfaces.mdx
- v2/about/livepeer-network/job-lifecycle.mdx
- v2/about/livepeer-network/livepeer-actors/delegators.mdx
- v2/about/livepeer-network/livepeer-actors/end-users.mdx
- v2/about/livepeer-network/livepeer-actors/gateways.mdx
- v2/about/livepeer-network/livepeer-actors/orchestrators.mdx
- v2/about/livepeer-network/marketplace.mdx
- v2/about/livepeer-network/overview.mdx
- v2/about/livepeer-network/scaling.mdx
- v2/about/livepeer-network/supply-side.mdx
- v2/about/livepeer-network/technical-architecture.mdx
- v2/about/livepeer-overview.mdx
- v2/about/livepeer-protocol/core-mechanisms.mdx
- v2/about/livepeer-protocol/economics.mdx
- v2/about/livepeer-protocol/governance-model.mdx
- v2/about/livepeer-protocol/livepeer-token.mdx
- v2/about/livepeer-protocol/overview.mdx
- v2/about/livepeer-protocol/technical-architecture.mdx
- v2/about/livepeer-protocol/treasury.mdx
- v2/about/mental-model.mdx
- v2/about/portal.mdx
- v2/about/resources/blockchain-contracts.mdx
- v2/about/resources/gateways-vs-orchestrators.mdx
- v2/about/resources/livepeer-glossary.mdx
- v2/about/resources/livepeer-whitepaper.mdx
- v2/about/x-deprecated/livepeer-token-economics.mdx
- v2/cn/about/core-concepts.mdx
- v2/cn/about/livepeer-network/actors.mdx
- v2/cn/about/livepeer-network/interfaces.mdx
- v2/cn/about/livepeer-network/job-lifecycle.mdx
- v2/cn/about/livepeer-network/marketplace.mdx
- v2/cn/about/livepeer-network/overview.mdx
- v2/cn/about/livepeer-network/technical-architecture.mdx
- v2/cn/about/livepeer-overview.mdx
- v2/cn/about/livepeer-protocol/core-mechanisms.mdx
- v2/cn/about/livepeer-protocol/economics.mdx
- v2/cn/about/livepeer-protocol/governance-model.mdx
- v2/cn/about/livepeer-protocol/livepeer-token.mdx
- v2/cn/about/livepeer-protocol/overview.mdx
- v2/cn/about/livepeer-protocol/technical-architecture.mdx
- v2/cn/about/livepeer-protocol/treasury.mdx
- v2/cn/about/mental-model.mdx
- v2/cn/about/portal.mdx
- v2/cn/about/resources/blockchain-contracts.mdx
- v2/cn/about/resources/gateways-vs-orchestrators.mdx
- v2/cn/about/resources/livepeer-glossary.mdx
- v2/cn/about/resources/livepeer-whitepaper.mdx
- v2/cn/community/community-portal.mdx
- v2/cn/community/livepeer-community/community-guidelines.mdx
- v2/cn/community/livepeer-community/livepeer-latest-topics.mdx
- v2/cn/community/livepeer-community/roadmap.mdx
- v2/cn/community/livepeer-community/trending-topics.mdx
- v2/cn/community/livepeer-connect/events-and-community-streams.mdx
- v2/cn/community/livepeer-connect/forums-and-discussions.mdx
- v2/cn/community/livepeer-connect/news-and-socials.mdx
- v2/cn/community/livepeer-contribute/build-livepeer.mdx
- v2/cn/community/livepeer-contribute/contribute.mdx
- v2/cn/community/livepeer-contribute/opportunities.mdx
- v2/cn/developers/ai-pipelines/byoc.mdx
- v2/cn/developers/ai-pipelines/comfystream.mdx
- v2/cn/developers/ai-pipelines/overview.mdx
- v2/cn/developers/builder-opportunities/bug-bounties.mdx
- v2/cn/developers/builder-opportunities/dev-programs.mdx
- v2/cn/developers/builder-opportunities/grants-and-programmes.mdx
- v2/cn/developers/builder-opportunities/livepeer-rfps.mdx
- v2/cn/developers/builder-opportunities/oss-contributions.mdx
- v2/cn/developers/builder-opportunities/overview.mdx
- v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx
- v2/cn/developers/developer-guide.mdx
- v2/cn/developers/developer-journey.mdx
- v2/cn/developers/developer-tools/dashboards.mdx
- v2/cn/developers/developer-tools/livepeer-cloud.mdx
- v2/cn/developers/developer-tools/livepeer-explorer.mdx
- v2/cn/developers/developer-tools/tooling-hub.mdx
- v2/cn/developers/guides-and-resources/contribution-guide.mdx
- v2/cn/developers/guides-and-tools/contribution-guide.mdx
- v2/cn/developers/guides-and-tools/developer-guides.mdx
- v2/cn/developers/guides-and-tools/developer-help.mdx
- v2/cn/developers/guides-and-tools/resources.mdx
- v2/cn/developers/guides/partner-integrations.mdx
- v2/cn/developers/journey-mapping.mdx
- v2/cn/developers/portal.mdx
- v2/cn/developers/quickstart/ai/ai-jobs.mdx
- v2/cn/developers/quickstart/video/transcoding-jobs.mdx
- v2/cn/developers/technical-references/apis.mdx
- v2/cn/developers/technical-references/awesome-livepeer.mdx
- v2/cn/developers/technical-references/deepwiki.mdx
- v2/cn/developers/technical-references/sdks.mdx
- v2/cn/developers/technical-references/wiki.mdx
- v2/cn/developers/x-deprecated/builder-opportunities/dev-programs.mdx
- v2/cn/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx
- v2/cn/developers/x-deprecated/contribution-guide.mdx
- v2/cn/developers/x-unstaged/developer-tools/dashboards.mdx
- v2/cn/developers/x-unstaged/developer-tools/livepeer-cloud.mdx
- v2/cn/developers/x-unstaged/developer-tools/livepeer-explorer.mdx
- v2/cn/developers/x-unstaged/developer-tools/tooling-hub.mdx
- v2/cn/developers/x-unstaged/partner-integrations.mdx
- v2/cn/docs-guide/README.mdx
- v2/cn/docs-guide/components-index.mdx
- v2/cn/docs-guide/feature-guides/automation-pipelines.mdx
- v2/cn/docs-guide/feature-guides/content-system.mdx
- v2/cn/docs-guide/feature-guides/data-integrations.mdx
- v2/cn/docs-guide/feature-guides/feature-map.mdx
- v2/cn/docs-guide/feature-map.mdx
- v2/cn/docs-guide/indexes/components-index.mdx
- v2/cn/docs-guide/indexes/pages-index.mdx
- v2/cn/docs-guide/indexes/templates-index.mdx
- v2/cn/docs-guide/indexes/workflows-index.mdx
- v2/cn/docs-guide/lpd.mdx
- v2/cn/docs-guide/pages-index.mdx
- v2/cn/docs-guide/quality-testing/quality-gates.mdx
- v2/cn/docs-guide/source-of-truth-policy.mdx
- v2/cn/docs-guide/workflows-index.mdx
- v2/cn/gateways/about-gateways/gateway-architecture.mdx
- v2/cn/gateways/about-gateways/gateway-economics.mdx
- v2/cn/gateways/about-gateways/gateway-explainer.mdx
- v2/cn/gateways/about-gateways/gateway-functions.mdx
- v2/cn/gateways/about/architecture.mdx
- v2/cn/gateways/about/economics.mdx
- v2/cn/gateways/about/explainer.mdx
- v2/cn/gateways/about/functions.mdx
- v2/cn/gateways/gateway-tools/explorer.mdx
- v2/cn/gateways/gateway-tools/livepeer-tools.mdx
- v2/cn/gateways/gateways-portal.mdx
- v2/cn/gateways/guides-and-resources/community-guides.mdx
- v2/cn/gateways/guides-and-resources/community-projects.mdx
- v2/cn/gateways/quickstart/AI-prompt.mdx
- v2/cn/gateways/quickstart/gateway-setup.mdx
- v2/cn/gateways/references/api-reference/AI-API/ai.mdx
- v2/cn/gateways/references/api-reference/AI-API/audio-to-text.mdx
- v2/cn/gateways/references/api-reference/AI-API/hardware-info.mdx
- v2/cn/gateways/references/api-reference/AI-API/hardware-stats.mdx
- v2/cn/gateways/references/api-reference/AI-API/health.mdx
- v2/cn/gateways/references/api-reference/AI-API/image-to-image.mdx
- v2/cn/gateways/references/api-reference/AI-API/image-to-text.mdx
- v2/cn/gateways/references/api-reference/AI-API/image-to-video.mdx
- v2/cn/gateways/references/api-reference/AI-API/live-video-to-video.mdx
- v2/cn/gateways/references/api-reference/AI-API/llm.mdx
- v2/cn/gateways/references/api-reference/AI-API/segment-anything-2.mdx
- v2/cn/gateways/references/api-reference/AI-API/text-to-image.mdx
- v2/cn/gateways/references/api-reference/AI-API/text-to-speech.mdx
- v2/cn/gateways/references/api-reference/AI-API/upscale.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/rebond.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/reward.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/signmessage.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx
- v2/cn/gateways/references/api-reference/CLI-HTTP/unbond.mdx
- v2/cn/gateways/references/arbitrum-exchanges.mdx
- v2/cn/gateways/references/arbitrum-rpc.mdx
- v2/cn/gateways/references/cli-commands.mdx
- v2/cn/gateways/references/configuration-flags.mdx
- v2/cn/gateways/references/livepeer-exchanges.mdx
- v2/cn/gateways/references/technical-architecture.mdx
- v2/cn/gateways/run-a-gateway/configure/ai-configuration.mdx
- v2/cn/gateways/run-a-gateway/configure/configuration-overview.mdx
- v2/cn/gateways/run-a-gateway/configure/dual-configuration.mdx
- v2/cn/gateways/run-a-gateway/configure/pricing-configuration.mdx
- v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx
- v2/cn/gateways/run-a-gateway/connect/connect-with-offerings.mdx
- v2/cn/gateways/run-a-gateway/connect/discover-offerings.mdx
- v2/cn/gateways/run-a-gateway/connect/lp-marketplace.mdx
- v2/cn/gateways/run-a-gateway/install/community-projects.mdx
- v2/cn/gateways/run-a-gateway/install/docker-install.mdx
- v2/cn/gateways/run-a-gateway/install/install-overview.mdx
- v2/cn/gateways/run-a-gateway/install/linux-install.mdx
- v2/cn/gateways/run-a-gateway/install/windows-install.mdx
- v2/cn/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx
- v2/cn/gateways/run-a-gateway/requirements/setup.mdx
- v2/cn/gateways/run-a-gateway/run-a-gateway.mdx
- v2/cn/gateways/run-a-gateway/why-run-a-gateway.mdx
- v2/cn/gateways/using-gateways/choosing-a-gateway.mdx
- v2/cn/gateways/using-gateways/gateway-providers.mdx
- v2/cn/home/about-livepeer/benefits.mdx
- v2/cn/home/about-livepeer/ecosystem.mdx
- v2/cn/home/about-livepeer/evolution.mdx
- v2/cn/home/about-livepeer/roadmap.mdx
- v2/cn/home/about-livepeer/vision.mdx
- v2/cn/home/get-started.mdx
- v2/cn/home/mission-control.mdx
- v2/cn/home/primer.mdx
- v2/cn/home/solutions/applications.mdx
- v2/cn/home/solutions/showcase.mdx
- v2/cn/home/solutions/verticals.mdx
- v2/cn/index.mdx
- v2/cn/lpt/about/mechanics.mdx
- v2/cn/lpt/about/overview.mdx
- v2/cn/lpt/about/purpose.mdx
- v2/cn/lpt/about/tokenomics.mdx
- v2/cn/lpt/delegation/about-delegators.mdx
- v2/cn/lpt/delegation/delegation-guide.mdx
- v2/cn/lpt/delegation/overview.mdx
- v2/cn/lpt/governance/model.mdx
- v2/cn/lpt/governance/overview.mdx
- v2/cn/lpt/governance/processes.mdx
- v2/cn/lpt/resources/exchanges.mdx
- v2/cn/lpt/resources/lpt-eth-usage.mdx
- v2/cn/lpt/token-portal.mdx
- v2/cn/lpt/treasury/allocations.mdx
- v2/cn/lpt/treasury/overview.mdx
- v2/cn/lpt/treasury/proposals.mdx
- v2/cn/orchestrators/about-orchestrators/architecture.mdx
- v2/cn/orchestrators/about-orchestrators/economics.mdx
- v2/cn/orchestrators/about-orchestrators/orchestrator-functions.mdx
- v2/cn/orchestrators/about-orchestrators/overview.mdx
- v2/cn/orchestrators/advanced-setup/ai-pipelines.mdx
- v2/cn/orchestrators/advanced-setup/rewards-and-fees.mdx
- v2/cn/orchestrators/advanced-setup/run-a-pool.mdx
- v2/cn/orchestrators/advanced-setup/staking-LPT.mdx
- v2/cn/orchestrators/orchestrator-tools-and-resources/community-pools.mdx
- v2/cn/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx
- v2/cn/orchestrators/orchestrators-portal.mdx
- v2/cn/orchestrators/quickstart/join-a-pool.mdx
- v2/cn/orchestrators/quickstart/orchestrator-setup.mdx
- v2/cn/orchestrators/quickstart/overview.mdx
- v2/cn/orchestrators/references/cli-flags.mdx
- v2/cn/orchestrators/references/faq.mdx
- v2/cn/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx
- v2/cn/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx
- v2/cn/orchestrators/setting-up-an-orchestrator/overview.mdx
- v2/cn/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx
- v2/cn/resources/changelog/changelog.mdx
- v2/cn/resources/changelog/migration-guide.mdx
- v2/cn/resources/documentation-guide/automations-workflows.mdx
- v2/cn/resources/documentation-guide/component-library/component-library.mdx
- v2/cn/resources/documentation-guide/component-library/display.mdx
- v2/cn/resources/documentation-guide/component-library/overview.mdx
- v2/cn/resources/documentation-guide/contribute-to-the-docs.mdx
- v2/cn/resources/documentation-guide/docs-features-and-ai-integrations.mdx
- v2/cn/resources/documentation-guide/documentation-guide.mdx
- v2/cn/resources/documentation-guide/documentation-overview.mdx
- v2/cn/resources/documentation-guide/snippets-inventory.mdx
- v2/cn/resources/documentation-guide/style-guide.mdx
- v2/cn/resources/livepeer-glossary.mdx
- v2/cn/resources/resources-portal.mdx
- v2/cn/solutions/embody/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/delete.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/update.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx
- v2/cn/solutions/livepeer-studio/api-reference/assets/upload.mdx
- v2/cn/solutions/livepeer-studio/api-reference/multistream/create.mdx
- v2/cn/solutions/livepeer-studio/api-reference/multistream/delete.mdx
- v2/cn/solutions/livepeer-studio/api-reference/multistream/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/multistream/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/multistream/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/multistream/update.mdx
- v2/cn/solutions/livepeer-studio/api-reference/playback/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/playback/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/create-user.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/create.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/delete.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/get-user.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx
- v2/cn/solutions/livepeer-studio/api-reference/rooms/update-user.mdx
- v2/cn/solutions/livepeer-studio/api-reference/sessions/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx
- v2/cn/solutions/livepeer-studio/api-reference/sessions/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/sessions/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/signing-keys/create.mdx
- v2/cn/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx
- v2/cn/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/signing-keys/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/signing-keys/update.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/create-clip.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/create.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/delete.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/get-clip.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/terminate.mdx
- v2/cn/solutions/livepeer-studio/api-reference/streams/update.mdx
- v2/cn/solutions/livepeer-studio/api-reference/tasks/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/tasks/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/tasks/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/transcode/create.mdx
- v2/cn/solutions/livepeer-studio/api-reference/transcode/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx
- v2/cn/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx
- v2/cn/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx
- v2/cn/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx
- v2/cn/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx
- v2/cn/solutions/livepeer-studio/api-reference/viewership/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/webhooks/create.mdx
- v2/cn/solutions/livepeer-studio/api-reference/webhooks/delete.mdx
- v2/cn/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx
- v2/cn/solutions/livepeer-studio/api-reference/webhooks/get.mdx
- v2/cn/solutions/livepeer-studio/api-reference/webhooks/overview.mdx
- v2/cn/solutions/livepeer-studio/api-reference/webhooks/update.mdx
- v2/cn/solutions/livepeer-studio/client-use-cases.mdx
- v2/cn/solutions/livepeer-studio/get-started/authentication.mdx
- v2/cn/solutions/livepeer-studio/get-started/overview.mdx
- v2/cn/solutions/livepeer-studio/reference/overview.mdx
- v2/cn/solutions/portal.mdx
- v2/cn/solutions/product-hub.mdx
- v2/cn/solutions/streamplace/introduction/streamplace-architecture.mdx
- v2/cn/solutions/streamplace/introduction/streamplace-funding-model.mdx
- v2/cn/solutions/streamplace/introduction/streamplace-guide.mdx
- v2/cn/solutions/streamplace/introduction/streamplace-integration.mdx
- v2/cn/solutions/streamplace/introduction/streamplace-provenance.mdx
- v2/cn/solutions/streamplace/overview.mdx
- v2/community/community-portal.mdx
- v2/community/index.mdx
- v2/community/livepeer-community/community-guidelines.mdx
- v2/community/livepeer-community/roadmap.mdx
- v2/community/livepeer-community/trending-topics.mdx
- v2/community/livepeer-connect/events-and-community-streams.mdx
- v2/community/livepeer-connect/news-and-socials.mdx
- v2/community/livepeer-contribute/build-livepeer.mdx
- v2/community/livepeer-contribute/contribute.mdx
- v2/community/livepeer-contribute/opportunities.mdx
- v2/community/resources/dashboards.mdx
- v2/developers/ai-inference-on-livepeer/overview.mdx
- v2/developers/ai-inference-on-livepeer/workload-fit.mdx
- v2/developers/ai-pipelines/byoc.mdx
- v2/developers/ai-pipelines/comfystream.mdx
- v2/developers/ai-pipelines/model-support.mdx
- v2/developers/ai-pipelines/overview.mdx
- v2/developers/ai-pipelines/workload-fit.mdx
- v2/developers/builder-opportunities/bug-bounties.mdx
- v2/developers/builder-opportunities/grants-and-programmes.mdx
- v2/developers/builder-opportunities/livepeer-rfps.mdx
- v2/developers/builder-opportunities/oss-contributions.mdx
- v2/developers/builder-opportunities/overview.mdx
- v2/developers/builder-opportunities/rfps-and-proposals.mdx
- v2/developers/developer-guide.mdx
- v2/developers/developer-journey.mdx
- v2/developers/developer-path.mdx
- v2/developers/developer-platforms/builder-hub.mdx
- v2/developers/developer-platforms/streamplace/streamplace-architecture.mdx
- v2/developers/developer-platforms/streamplace/streamplace-funding-model.mdx
- v2/developers/developer-platforms/streamplace/streamplace-guide.mdx
- v2/developers/developer-platforms/streamplace/streamplace-integration.mdx
- v2/developers/developer-platforms/streamplace/streamplace-provenance.mdx
- v2/developers/developer-platforms/streamplace/streamplace.mdx
- v2/developers/developer-tools/dashboards.mdx
- v2/developers/developer-tools/livepeer-cloud.mdx
- v2/developers/developer-tools/livepeer-explorer.mdx
- v2/developers/developer-tools/tooling-hub.mdx
- v2/developers/guides-and-resources/contribution-guide.mdx
- v2/developers/guides-and-tools/contribution-guide.mdx
- v2/developers/guides-and-tools/developer-guides.mdx
- v2/developers/guides-and-tools/developer-help.mdx
- v2/developers/guides-and-tools/resources.mdx
- v2/developers/guides/partner-integrations.mdx
- v2/developers/index.mdx
- v2/developers/journey-mapping.mdx
- v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx
- v2/developers/moved-to-about-livepeer-protocol/livepeer-protocol/README.mdx
- v2/developers/moved-to-about-livepeer-protocol/livepeer-token-economics.mdx
- v2/developers/portal.mdx
- v2/developers/quickstart/ai/ai-jobs.mdx
- v2/developers/quickstart/video/transcoding-jobs.mdx
- v2/developers/quickstart/video/video-streaming-101.mdx
- v2/developers/technical-references/apis.mdx
- v2/developers/technical-references/awesome-livepeer.mdx
- v2/developers/technical-references/deepwiki.mdx
- v2/developers/technical-references/sdks.mdx
- v2/developers/technical-references/wiki.mdx
- v2/developers/x-deprecated/builder-opportunities/dev-programs.mdx
- v2/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx
- v2/developers/x-unstaged/developer-tools/livepeer-cloud.mdx
- v2/developers/x-unstaged/developer-tools/livepeer-explorer.mdx
- v2/developers/x-unstaged/developer-tools/tooling-hub.mdx
- v2/developers/x-unstaged/partner-integrations.mdx
- v2/es/about/core-concepts.mdx
- v2/es/about/livepeer-network/actors.mdx
- v2/es/about/livepeer-network/interfaces.mdx
- v2/es/about/livepeer-network/job-lifecycle.mdx
- v2/es/about/livepeer-network/marketplace.mdx
- v2/es/about/livepeer-network/overview.mdx
- v2/es/about/livepeer-network/technical-architecture.mdx
- v2/es/about/livepeer-overview.mdx
- v2/es/about/livepeer-protocol/core-mechanisms.mdx
- v2/es/about/livepeer-protocol/economics.mdx
- v2/es/about/livepeer-protocol/governance-model.mdx
- v2/es/about/livepeer-protocol/livepeer-token.mdx
- v2/es/about/livepeer-protocol/overview.mdx
- v2/es/about/livepeer-protocol/technical-architecture.mdx
- v2/es/about/livepeer-protocol/treasury.mdx
- v2/es/about/mental-model.mdx
- v2/es/about/portal.mdx
- v2/es/about/resources/blockchain-contracts.mdx
- v2/es/about/resources/gateways-vs-orchestrators.mdx
- v2/es/about/resources/livepeer-glossary.mdx
- v2/es/about/resources/livepeer-whitepaper.mdx
- v2/es/community/community-portal.mdx
- v2/es/community/livepeer-community/community-guidelines.mdx
- v2/es/community/livepeer-community/livepeer-latest-topics.mdx
- v2/es/community/livepeer-community/roadmap.mdx
- v2/es/community/livepeer-community/trending-topics.mdx
- v2/es/community/livepeer-connect/events-and-community-streams.mdx
- v2/es/community/livepeer-connect/forums-and-discussions.mdx
- v2/es/community/livepeer-connect/news-and-socials.mdx
- v2/es/community/livepeer-contribute/build-livepeer.mdx
- v2/es/community/livepeer-contribute/contribute.mdx
- v2/es/community/livepeer-contribute/opportunities.mdx
- v2/es/developers/ai-pipelines/byoc.mdx
- v2/es/developers/ai-pipelines/comfystream.mdx
- v2/es/developers/ai-pipelines/overview.mdx
- v2/es/developers/builder-opportunities/bug-bounties.mdx
- v2/es/developers/builder-opportunities/dev-programs.mdx
- v2/es/developers/builder-opportunities/grants-and-programmes.mdx
- v2/es/developers/builder-opportunities/livepeer-rfps.mdx
- v2/es/developers/builder-opportunities/oss-contributions.mdx
- v2/es/developers/builder-opportunities/overview.mdx
- v2/es/developers/builder-opportunities/rfps-and-proposals.mdx
- v2/es/developers/developer-guide.mdx
- v2/es/developers/developer-journey.mdx
- v2/es/developers/developer-path.mdx
- v2/es/developers/developer-tools/dashboards.mdx
- v2/es/developers/developer-tools/livepeer-cloud.mdx
- v2/es/developers/developer-tools/livepeer-explorer.mdx
- v2/es/developers/developer-tools/tooling-hub.mdx
- v2/es/developers/guides-and-resources/contribution-guide.mdx
- v2/es/developers/guides-and-tools/contribution-guide.mdx
- v2/es/developers/guides-and-tools/developer-guides.mdx
- v2/es/developers/guides-and-tools/developer-help.mdx
- v2/es/developers/guides-and-tools/resources.mdx
- v2/es/developers/guides/partner-integrations.mdx
- v2/es/developers/journey-mapping.mdx
- v2/es/developers/portal.mdx
- v2/es/developers/quickstart/ai/ai-jobs.mdx
- v2/es/developers/quickstart/video/transcoding-jobs.mdx
- v2/es/developers/technical-references/apis.mdx
- v2/es/developers/technical-references/awesome-livepeer.mdx
- v2/es/developers/technical-references/deepwiki.mdx
- v2/es/developers/technical-references/sdks.mdx
- v2/es/developers/technical-references/wiki.mdx
- v2/es/developers/x-deprecated/builder-opportunities/dev-programs.mdx
- v2/es/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx
- v2/es/developers/x-deprecated/contribution-guide.mdx
- v2/es/developers/x-unstaged/partner-integrations.mdx
- v2/es/docs-guide/README.mdx
- v2/es/docs-guide/components-index.mdx
- v2/es/docs-guide/feature-guides/automation-pipelines.mdx
- v2/es/docs-guide/feature-guides/content-system.mdx
- v2/es/docs-guide/feature-guides/data-integrations.mdx
- v2/es/docs-guide/feature-guides/feature-map.mdx
- v2/es/docs-guide/feature-map.mdx
- v2/es/docs-guide/indexes/components-index.mdx
- v2/es/docs-guide/indexes/pages-index.mdx
- v2/es/docs-guide/indexes/templates-index.mdx
- v2/es/docs-guide/indexes/workflows-index.mdx
- v2/es/docs-guide/lpd.mdx
- v2/es/docs-guide/pages-index.mdx
- v2/es/docs-guide/quality-gates.mdx
- v2/es/docs-guide/source-of-truth-policy.mdx
- v2/es/docs-guide/templates-index.mdx
- v2/es/docs-guide/workflows-index.mdx
- v2/es/gateways/about-gateways/gateway-architecture.mdx
- v2/es/gateways/about-gateways/gateway-economics.mdx
- v2/es/gateways/about-gateways/gateway-explainer.mdx
- v2/es/gateways/about-gateways/gateway-functions.mdx
- v2/es/gateways/about/architecture.mdx
- v2/es/gateways/about/economics.mdx
- v2/es/gateways/about/explainer.mdx
- v2/es/gateways/gateway-tools/explorer.mdx
- v2/es/gateways/gateway-tools/livepeer-tools.mdx
- v2/es/gateways/gateways-portal.mdx
- v2/es/gateways/guides-and-resources/community-guides.mdx
- v2/es/gateways/guides-and-resources/community-projects.mdx
- v2/es/gateways/guides-and-resources/faq.mdx
- v2/es/gateways/quickstart/AI-prompt.mdx
- v2/es/gateways/quickstart/gateway-setup.mdx
- v2/es/gateways/references/api-reference/AI-API/ai.mdx
- v2/es/gateways/references/api-reference/AI-API/audio-to-text.mdx
- v2/es/gateways/references/api-reference/AI-API/hardware-info.mdx
- v2/es/gateways/references/api-reference/AI-API/hardware-stats.mdx
- v2/es/gateways/references/api-reference/AI-API/health.mdx
- v2/es/gateways/references/api-reference/AI-API/image-to-image.mdx
- v2/es/gateways/references/api-reference/AI-API/image-to-text.mdx
- v2/es/gateways/references/api-reference/AI-API/image-to-video.mdx
- v2/es/gateways/references/api-reference/AI-API/live-video-to-video.mdx
- v2/es/gateways/references/api-reference/AI-API/llm.mdx
- v2/es/gateways/references/api-reference/AI-API/segment-anything-2.mdx
- v2/es/gateways/references/api-reference/AI-API/text-to-image.mdx
- v2/es/gateways/references/api-reference/AI-API/text-to-speech.mdx
- v2/es/gateways/references/api-reference/AI-API/upscale.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/rebond.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/reward.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/signmessage.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx
- v2/es/gateways/references/api-reference/CLI-HTTP/unbond.mdx
- v2/es/gateways/references/arbitrum-exchanges.mdx
- v2/es/gateways/references/arbitrum-rpc.mdx
- v2/es/gateways/references/cli-commands.mdx
- v2/es/gateways/references/configuration-flags.mdx
- v2/es/gateways/references/livepeer-exchanges.mdx
- v2/es/gateways/references/technical-architecture.mdx
- v2/es/gateways/run-a-gateway/configure/ai-configuration.mdx
- v2/es/gateways/run-a-gateway/configure/configuration-overview.mdx
- v2/es/gateways/run-a-gateway/configure/dual-configuration.mdx
- v2/es/gateways/run-a-gateway/configure/pricing-configuration.mdx
- v2/es/gateways/run-a-gateway/configure/video-configuration.mdx
- v2/es/gateways/run-a-gateway/connect/connect-with-offerings.mdx
- v2/es/gateways/run-a-gateway/connect/discover-offerings.mdx
- v2/es/gateways/run-a-gateway/connect/lp-marketplace.mdx
- v2/es/gateways/run-a-gateway/install/community-projects.mdx
- v2/es/gateways/run-a-gateway/install/docker-install.mdx
- v2/es/gateways/run-a-gateway/install/install-overview.mdx
- v2/es/gateways/run-a-gateway/install/linux-install.mdx
- v2/es/gateways/run-a-gateway/install/windows-install.mdx
- v2/es/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx
- v2/es/gateways/run-a-gateway/requirements/setup.mdx
- v2/es/gateways/run-a-gateway/run-a-gateway.mdx
- v2/es/gateways/run-a-gateway/why-run-a-gateway.mdx
- v2/es/gateways/using-gateways/choosing-a-gateway.mdx
- v2/es/gateways/using-gateways/gateway-providers.mdx
- v2/es/home/about-livepeer/benefits.mdx
- v2/es/home/about-livepeer/ecosystem.mdx
- v2/es/home/about-livepeer/evolution.mdx
- v2/es/home/about-livepeer/roadmap.mdx
- v2/es/home/about-livepeer/vision.mdx
- v2/es/home/get-started.mdx
- v2/es/home/mission-control.mdx
- v2/es/home/primer.mdx
- v2/es/home/solutions/applications.mdx
- v2/es/home/solutions/showcase.mdx
- v2/es/home/solutions/verticals.mdx
- v2/es/index.mdx
- v2/es/lpt/about/mechanics.mdx
- v2/es/lpt/about/overview.mdx
- v2/es/lpt/about/purpose.mdx
- v2/es/lpt/about/tokenomics.mdx
- v2/es/lpt/delegation/about-delegators.mdx
- v2/es/lpt/delegation/delegation-guide.mdx
- v2/es/lpt/delegation/overview.mdx
- v2/es/lpt/governance/model.mdx
- v2/es/lpt/governance/overview.mdx
- v2/es/lpt/governance/processes.mdx
- v2/es/lpt/resources/exchanges.mdx
- v2/es/lpt/resources/lpt-eth-usage.mdx
- v2/es/lpt/token-portal.mdx
- v2/es/lpt/treasury/allocations.mdx
- v2/es/lpt/treasury/overview.mdx
- v2/es/lpt/treasury/proposals.mdx
- v2/es/orchestrators/about-orchestrators/architecture.mdx
- v2/es/orchestrators/about-orchestrators/economics.mdx
- v2/es/orchestrators/about-orchestrators/orchestrator-functions.mdx
- v2/es/orchestrators/about-orchestrators/overview.mdx
- v2/es/orchestrators/advanced-setup/ai-pipelines.mdx
- v2/es/orchestrators/advanced-setup/delegation.mdx
- v2/es/orchestrators/advanced-setup/rewards-and-fees.mdx
- v2/es/orchestrators/advanced-setup/run-a-pool.mdx
- v2/es/orchestrators/advanced-setup/staking-LPT.mdx
- v2/es/orchestrators/orchestrator-tools-and-resources/community-pools.mdx
- v2/es/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx
- v2/es/orchestrators/orchestrators-portal.mdx
- v2/es/orchestrators/quickstart/join-a-pool.mdx
- v2/es/orchestrators/quickstart/orchestrator-setup.mdx
- v2/es/orchestrators/quickstart/overview.mdx
- v2/es/orchestrators/references/cli-flags.mdx
- v2/es/orchestrators/references/faq.mdx
- v2/es/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx
- v2/es/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx
- v2/es/orchestrators/setting-up-an-orchestrator/overview.mdx
- v2/es/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx
- v2/es/resources/changelog/changelog.mdx
- v2/es/resources/changelog/migration-guide.mdx
- v2/es/resources/documentation-guide/automations-workflows.mdx
- v2/es/resources/documentation-guide/component-library/component-library.mdx
- v2/es/resources/documentation-guide/component-library/display.mdx
- v2/es/resources/documentation-guide/component-library/overview.mdx
- v2/es/resources/documentation-guide/contribute-to-the-docs.mdx
- v2/es/resources/documentation-guide/docs-features-and-ai-integrations.mdx
- v2/es/resources/documentation-guide/documentation-guide.mdx
- v2/es/resources/documentation-guide/documentation-overview.mdx
- v2/es/resources/documentation-guide/snippets-inventory.mdx
- v2/es/resources/documentation-guide/style-guide.mdx
- v2/es/resources/livepeer-glossary.mdx
- v2/es/resources/resources-portal.mdx
- v2/es/solutions/embody/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/delete.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/update.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx
- v2/es/solutions/livepeer-studio/api-reference/assets/upload.mdx
- v2/es/solutions/livepeer-studio/api-reference/multistream/create.mdx
- v2/es/solutions/livepeer-studio/api-reference/multistream/delete.mdx
- v2/es/solutions/livepeer-studio/api-reference/multistream/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/multistream/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/multistream/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/multistream/update.mdx
- v2/es/solutions/livepeer-studio/api-reference/playback/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/playback/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/create-user.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/create.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/delete.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/get-user.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx
- v2/es/solutions/livepeer-studio/api-reference/rooms/update-user.mdx
- v2/es/solutions/livepeer-studio/api-reference/sessions/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx
- v2/es/solutions/livepeer-studio/api-reference/sessions/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/sessions/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/signing-keys/create.mdx
- v2/es/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx
- v2/es/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/signing-keys/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/signing-keys/update.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/create-clip.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/create.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/delete.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/get-clip.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/terminate.mdx
- v2/es/solutions/livepeer-studio/api-reference/streams/update.mdx
- v2/es/solutions/livepeer-studio/api-reference/tasks/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/tasks/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/tasks/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/transcode/create.mdx
- v2/es/solutions/livepeer-studio/api-reference/transcode/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx
- v2/es/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx
- v2/es/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx
- v2/es/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx
- v2/es/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx
- v2/es/solutions/livepeer-studio/api-reference/viewership/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/webhooks/create.mdx
- v2/es/solutions/livepeer-studio/api-reference/webhooks/delete.mdx
- v2/es/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx
- v2/es/solutions/livepeer-studio/api-reference/webhooks/get.mdx
- v2/es/solutions/livepeer-studio/api-reference/webhooks/overview.mdx
- v2/es/solutions/livepeer-studio/api-reference/webhooks/update.mdx
- v2/es/solutions/livepeer-studio/client-use-cases.mdx
- v2/es/solutions/livepeer-studio/get-started/authentication.mdx
- v2/es/solutions/livepeer-studio/get-started/overview.mdx
- v2/es/solutions/livepeer-studio/reference/overview.mdx
- v2/es/solutions/portal.mdx
- v2/es/solutions/product-hub.mdx
- v2/es/solutions/streamplace/introduction/streamplace-architecture.mdx
- v2/es/solutions/streamplace/introduction/streamplace-funding-model.mdx
- v2/es/solutions/streamplace/introduction/streamplace-guide.mdx
- v2/es/solutions/streamplace/introduction/streamplace-integration.mdx
- v2/es/solutions/streamplace/introduction/streamplace-provenance.mdx
- v2/es/solutions/streamplace/overview.mdx
- v2/fr/about/core-concepts.mdx
- v2/fr/about/livepeer-network/actors.mdx
- v2/fr/about/livepeer-network/interfaces.mdx
- v2/fr/about/livepeer-network/job-lifecycle.mdx
- v2/fr/about/livepeer-network/marketplace.mdx
- v2/fr/about/livepeer-network/overview.mdx
- v2/fr/about/livepeer-network/technical-architecture.mdx
- v2/fr/about/livepeer-overview.mdx
- v2/fr/about/livepeer-protocol/core-mechanisms.mdx
- v2/fr/about/livepeer-protocol/economics.mdx
- v2/fr/about/livepeer-protocol/governance-model.mdx
- v2/fr/about/livepeer-protocol/livepeer-token.mdx
- v2/fr/about/livepeer-protocol/overview.mdx
- v2/fr/about/livepeer-protocol/technical-architecture.mdx
- v2/fr/about/livepeer-protocol/treasury.mdx
- v2/fr/about/mental-model.mdx
- v2/fr/about/portal.mdx
- v2/fr/about/resources/blockchain-contracts.mdx
- v2/fr/about/resources/gateways-vs-orchestrators.mdx
- v2/fr/about/resources/livepeer-glossary.mdx
- v2/fr/about/resources/livepeer-whitepaper.mdx
- v2/fr/community/community-portal.mdx
- v2/fr/community/livepeer-community/community-guidelines.mdx
- v2/fr/community/livepeer-community/livepeer-latest-topics.mdx
- v2/fr/community/livepeer-community/roadmap.mdx
- v2/fr/community/livepeer-community/trending-topics.mdx
- v2/fr/community/livepeer-connect/events-and-community-streams.mdx
- v2/fr/community/livepeer-connect/forums-and-discussions.mdx
- v2/fr/community/livepeer-connect/news-and-socials.mdx
- v2/fr/community/livepeer-contribute/build-livepeer.mdx
- v2/fr/community/livepeer-contribute/contribute.mdx
- v2/fr/community/livepeer-contribute/opportunities.mdx
- v2/fr/developers/ai-pipelines/byoc.mdx
- v2/fr/developers/ai-pipelines/comfystream.mdx
- v2/fr/developers/ai-pipelines/overview.mdx
- v2/fr/developers/builder-opportunities/bug-bounties.mdx
- v2/fr/developers/builder-opportunities/dev-programs.mdx
- v2/fr/developers/builder-opportunities/grants-and-programmes.mdx
- v2/fr/developers/builder-opportunities/livepeer-rfps.mdx
- v2/fr/developers/builder-opportunities/oss-contributions.mdx
- v2/fr/developers/builder-opportunities/overview.mdx
- v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx
- v2/fr/developers/developer-guide.mdx
- v2/fr/developers/developer-journey.mdx
- v2/fr/developers/developer-path.mdx
- v2/fr/developers/developer-tools/dashboards.mdx
- v2/fr/developers/developer-tools/livepeer-cloud.mdx
- v2/fr/developers/developer-tools/livepeer-explorer.mdx
- v2/fr/developers/developer-tools/tooling-hub.mdx
- v2/fr/developers/guides-and-resources/contribution-guide.mdx
- v2/fr/developers/guides-and-tools/contribution-guide.mdx
- v2/fr/developers/guides-and-tools/developer-help.mdx
- v2/fr/developers/guides-and-tools/resources.mdx
- v2/fr/developers/guides/partner-integrations.mdx
- v2/fr/developers/journey-mapping.mdx
- v2/fr/developers/portal.mdx
- v2/fr/developers/quickstart/ai/ai-jobs.mdx
- v2/fr/developers/quickstart/video/transcoding-jobs.mdx
- v2/fr/developers/technical-references/apis.mdx
- v2/fr/developers/technical-references/awesome-livepeer.mdx
- v2/fr/developers/technical-references/deepwiki.mdx
- v2/fr/developers/technical-references/sdks.mdx
- v2/fr/developers/technical-references/wiki.mdx
- v2/fr/developers/x-deprecated/builder-opportunities/dev-programs.mdx
- v2/fr/developers/x-deprecated/builder-opportunities/livepeer-rfps.mdx
- v2/fr/developers/x-deprecated/contribution-guide.mdx
- v2/fr/developers/x-unstaged/developer-tools/dashboards.mdx
- v2/fr/developers/x-unstaged/developer-tools/livepeer-cloud.mdx
- v2/fr/developers/x-unstaged/developer-tools/livepeer-explorer.mdx
- v2/fr/developers/x-unstaged/developer-tools/tooling-hub.mdx
- v2/fr/developers/x-unstaged/partner-integrations.mdx
- v2/fr/docs-guide/README.mdx
- v2/fr/docs-guide/automation-pipelines.mdx
- v2/fr/docs-guide/components-index.mdx
- v2/fr/docs-guide/feature-guides/automation-pipelines.mdx
- v2/fr/docs-guide/feature-guides/content-system.mdx
- v2/fr/docs-guide/feature-guides/data-integrations.mdx
- v2/fr/docs-guide/feature-guides/feature-map.mdx
- v2/fr/docs-guide/feature-map.mdx
- v2/fr/docs-guide/indexes/components-index.mdx
- v2/fr/docs-guide/indexes/pages-index.mdx
- v2/fr/docs-guide/indexes/templates-index.mdx
- v2/fr/docs-guide/indexes/workflows-index.mdx
- v2/fr/docs-guide/lpd.mdx
- v2/fr/docs-guide/pages-index.mdx
- v2/fr/docs-guide/quality-gates.mdx
- v2/fr/docs-guide/quality-testing/quality-gates.mdx
- v2/fr/docs-guide/source-of-truth-policy.mdx
- v2/fr/docs-guide/templates-index.mdx
- v2/fr/docs-guide/workflows-index.mdx
- v2/fr/gateways/about-gateways/gateway-architecture.mdx
- v2/fr/gateways/about-gateways/gateway-economics.mdx
- v2/fr/gateways/about-gateways/gateway-explainer.mdx
- v2/fr/gateways/about-gateways/gateway-functions.mdx
- v2/fr/gateways/about/architecture.mdx
- v2/fr/gateways/about/economics.mdx
- v2/fr/gateways/about/explainer.mdx
- v2/fr/gateways/about/functions.mdx
- v2/fr/gateways/gateway-tools/explorer.mdx
- v2/fr/gateways/gateway-tools/livepeer-tools.mdx
- v2/fr/gateways/gateways-portal.mdx
- v2/fr/gateways/guides-and-resources/community-guides.mdx
- v2/fr/gateways/guides-and-resources/community-projects.mdx
- v2/fr/gateways/guides-and-resources/faq.mdx
- v2/fr/gateways/quickstart/AI-prompt.mdx
- v2/fr/gateways/quickstart/gateway-setup.mdx
- v2/fr/gateways/references/api-reference/AI-API/ai.mdx
- v2/fr/gateways/references/api-reference/AI-API/audio-to-text.mdx
- v2/fr/gateways/references/api-reference/AI-API/hardware-info.mdx
- v2/fr/gateways/references/api-reference/AI-API/hardware-stats.mdx
- v2/fr/gateways/references/api-reference/AI-API/health.mdx
- v2/fr/gateways/references/api-reference/AI-API/image-to-image.mdx
- v2/fr/gateways/references/api-reference/AI-API/image-to-text.mdx
- v2/fr/gateways/references/api-reference/AI-API/image-to-video.mdx
- v2/fr/gateways/references/api-reference/AI-API/live-video-to-video.mdx
- v2/fr/gateways/references/api-reference/AI-API/llm.mdx
- v2/fr/gateways/references/api-reference/AI-API/segment-anything-2.mdx
- v2/fr/gateways/references/api-reference/AI-API/text-to-image.mdx
- v2/fr/gateways/references/api-reference/AI-API/text-to-speech.mdx
- v2/fr/gateways/references/api-reference/AI-API/upscale.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/rebond.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/reward.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/signmessage.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx
- v2/fr/gateways/references/api-reference/CLI-HTTP/unbond.mdx
- v2/fr/gateways/references/arbitrum-exchanges.mdx
- v2/fr/gateways/references/arbitrum-rpc.mdx
- v2/fr/gateways/references/cli-commands.mdx
- v2/fr/gateways/references/configuration-flags.mdx
- v2/fr/gateways/references/livepeer-exchanges.mdx
- v2/fr/gateways/references/technical-architecture.mdx
- v2/fr/gateways/run-a-gateway/configure/ai-configuration.mdx
- v2/fr/gateways/run-a-gateway/configure/configuration-overview.mdx
- v2/fr/gateways/run-a-gateway/configure/dual-configuration.mdx
- v2/fr/gateways/run-a-gateway/configure/pricing-configuration.mdx
- v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx
- v2/fr/gateways/run-a-gateway/connect/connect-with-offerings.mdx
- v2/fr/gateways/run-a-gateway/connect/discover-offerings.mdx
- v2/fr/gateways/run-a-gateway/connect/lp-marketplace.mdx
- v2/fr/gateways/run-a-gateway/install/community-projects.mdx
- v2/fr/gateways/run-a-gateway/install/docker-install.mdx
- v2/fr/gateways/run-a-gateway/install/install-overview.mdx
- v2/fr/gateways/run-a-gateway/install/linux-install.mdx
- v2/fr/gateways/run-a-gateway/install/windows-install.mdx
- v2/fr/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx
- v2/fr/gateways/run-a-gateway/requirements/setup.mdx
- v2/fr/gateways/run-a-gateway/run-a-gateway.mdx
- v2/fr/gateways/run-a-gateway/why-run-a-gateway.mdx
- v2/fr/gateways/using-gateways/choosing-a-gateway.mdx
- v2/fr/gateways/using-gateways/gateway-providers.mdx
- v2/fr/home/about-livepeer/benefits.mdx
- v2/fr/home/about-livepeer/ecosystem.mdx
- v2/fr/home/about-livepeer/evolution.mdx
- v2/fr/home/about-livepeer/roadmap.mdx
- v2/fr/home/about-livepeer/vision.mdx
- v2/fr/home/get-started.mdx
- v2/fr/home/mission-control.mdx
- v2/fr/home/primer.mdx
- v2/fr/home/solutions/applications.mdx
- v2/fr/home/solutions/showcase.mdx
- v2/fr/home/solutions/verticals.mdx
- v2/fr/index.mdx
- v2/fr/lpt/about/mechanics.mdx
- v2/fr/lpt/about/overview.mdx
- v2/fr/lpt/about/purpose.mdx
- v2/fr/lpt/about/tokenomics.mdx
- v2/fr/lpt/delegation/about-delegators.mdx
- v2/fr/lpt/delegation/delegation-guide.mdx
- v2/fr/lpt/delegation/overview.mdx
- v2/fr/lpt/governance/model.mdx
- v2/fr/lpt/governance/overview.mdx
- v2/fr/lpt/governance/processes.mdx
- v2/fr/lpt/resources/exchanges.mdx
- v2/fr/lpt/resources/lpt-eth-usage.mdx
- v2/fr/lpt/token-portal.mdx
- v2/fr/lpt/treasury/allocations.mdx
- v2/fr/lpt/treasury/overview.mdx
- v2/fr/lpt/treasury/proposals.mdx
- v2/fr/orchestrators/about-orchestrators/architecture.mdx
- v2/fr/orchestrators/about-orchestrators/economics.mdx
- v2/fr/orchestrators/about-orchestrators/orchestrator-functions.mdx
- v2/fr/orchestrators/about-orchestrators/overview.mdx
- v2/fr/orchestrators/advanced-setup/ai-pipelines.mdx
- v2/fr/orchestrators/advanced-setup/delegation.mdx
- v2/fr/orchestrators/advanced-setup/rewards-and-fees.mdx
- v2/fr/orchestrators/advanced-setup/run-a-pool.mdx
- v2/fr/orchestrators/advanced-setup/staking-LPT.mdx
- v2/fr/orchestrators/orchestrator-tools-and-resources/community-pools.mdx
- v2/fr/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx
- v2/fr/orchestrators/orchestrators-portal.mdx
- v2/fr/orchestrators/quickstart/join-a-pool.mdx
- v2/fr/orchestrators/quickstart/orchestrator-setup.mdx
- v2/fr/orchestrators/quickstart/overview.mdx
- v2/fr/orchestrators/references/cli-flags.mdx
- v2/fr/orchestrators/references/faq.mdx
- v2/fr/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx
- v2/fr/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx
- v2/fr/orchestrators/setting-up-an-orchestrator/overview.mdx
- v2/fr/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx
- v2/fr/resources/changelog/changelog.mdx
- v2/fr/resources/changelog/migration-guide.mdx
- v2/fr/resources/documentation-guide/automations-workflows.mdx
- v2/fr/resources/documentation-guide/component-library/component-library.mdx
- v2/fr/resources/documentation-guide/component-library/display.mdx
- v2/fr/resources/documentation-guide/component-library/overview.mdx
- v2/fr/resources/documentation-guide/contribute-to-the-docs.mdx
- v2/fr/resources/documentation-guide/docs-features-and-ai-integrations.mdx
- v2/fr/resources/documentation-guide/documentation-guide.mdx
- v2/fr/resources/documentation-guide/documentation-overview.mdx
- v2/fr/resources/documentation-guide/snippets-inventory.mdx
- v2/fr/resources/documentation-guide/style-guide.mdx
- v2/fr/resources/livepeer-glossary.mdx
- v2/fr/resources/resources-portal.mdx
- v2/fr/solutions/embody/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/delete.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/update.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx
- v2/fr/solutions/livepeer-studio/api-reference/assets/upload.mdx
- v2/fr/solutions/livepeer-studio/api-reference/multistream/create.mdx
- v2/fr/solutions/livepeer-studio/api-reference/multistream/delete.mdx
- v2/fr/solutions/livepeer-studio/api-reference/multistream/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/multistream/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/multistream/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/multistream/update.mdx
- v2/fr/solutions/livepeer-studio/api-reference/playback/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/playback/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/create-user.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/create.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/delete.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/get-user.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx
- v2/fr/solutions/livepeer-studio/api-reference/rooms/update-user.mdx
- v2/fr/solutions/livepeer-studio/api-reference/sessions/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx
- v2/fr/solutions/livepeer-studio/api-reference/sessions/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/sessions/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/signing-keys/create.mdx
- v2/fr/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx
- v2/fr/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/signing-keys/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/signing-keys/update.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/create-clip.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/create.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/delete.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/get-clip.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/terminate.mdx
- v2/fr/solutions/livepeer-studio/api-reference/streams/update.mdx
- v2/fr/solutions/livepeer-studio/api-reference/tasks/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/tasks/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/tasks/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/transcode/create.mdx
- v2/fr/solutions/livepeer-studio/api-reference/transcode/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx
- v2/fr/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx
- v2/fr/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx
- v2/fr/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx
- v2/fr/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx
- v2/fr/solutions/livepeer-studio/api-reference/viewership/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/webhooks/create.mdx
- v2/fr/solutions/livepeer-studio/api-reference/webhooks/delete.mdx
- v2/fr/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx
- v2/fr/solutions/livepeer-studio/api-reference/webhooks/get.mdx
- v2/fr/solutions/livepeer-studio/api-reference/webhooks/overview.mdx
- v2/fr/solutions/livepeer-studio/api-reference/webhooks/update.mdx
- v2/fr/solutions/livepeer-studio/client-use-cases.mdx
- v2/fr/solutions/livepeer-studio/get-started/authentication.mdx
- v2/fr/solutions/livepeer-studio/get-started/overview.mdx
- v2/fr/solutions/livepeer-studio/reference/overview.mdx
- v2/fr/solutions/portal.mdx
- v2/fr/solutions/product-hub.mdx
- v2/fr/solutions/streamplace/introduction/streamplace-architecture.mdx
- v2/fr/solutions/streamplace/introduction/streamplace-funding-model.mdx
- v2/fr/solutions/streamplace/introduction/streamplace-guide.mdx
- v2/fr/solutions/streamplace/introduction/streamplace-integration.mdx
- v2/fr/solutions/streamplace/introduction/streamplace-provenance.mdx
- v2/fr/solutions/streamplace/overview.mdx
- v2/gateways/_contextData_/docker-install.mdx
- v2/gateways/about/architecture.mdx
- v2/gateways/about/economics.mdx
- v2/gateways/about/explainer.mdx
- v2/gateways/about/functions.mdx
- v2/gateways/about/overview.mdx
- v2/gateways/about/quickstart.mdx
- v2/gateways/gateway-tools/explorer.mdx
- v2/gateways/gateway-tools/gateway-middleware.mdx
- v2/gateways/gateway-tools/livepeer-tools.mdx
- v2/gateways/gateways-portal.mdx
- v2/gateways/guides-and-resources/community-guides.mdx
- v2/gateways/guides-and-resources/community-projects.mdx
- v2/gateways/guides-and-resources/faq.mdx
- v2/gateways/guides-and-resources/gateway-job-pipelines/byoc.mdx
- v2/gateways/guides-and-resources/gateway-job-pipelines/overview.mdx
- v2/gateways/index.mdx
- v2/gateways/payments/overview.mdx
- v2/gateways/quickstart/AI-prompt.mdx
- v2/gateways/quickstart/gateway-setup.mdx
- v2/gateways/quickstart/views/docker/dockerOffChainTab.mdx
- v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx
- v2/gateways/references/api-reference/AI-API/ai.mdx
- v2/gateways/references/api-reference/AI-API/audio-to-text.mdx
- v2/gateways/references/api-reference/AI-API/hardware-info.mdx
- v2/gateways/references/api-reference/AI-API/hardware-stats.mdx
- v2/gateways/references/api-reference/AI-API/health.mdx
- v2/gateways/references/api-reference/AI-API/image-to-image.mdx
- v2/gateways/references/api-reference/AI-API/image-to-text.mdx
- v2/gateways/references/api-reference/AI-API/image-to-video.mdx
- v2/gateways/references/api-reference/AI-API/live-video-to-video.mdx
- v2/gateways/references/api-reference/AI-API/llm.mdx
- v2/gateways/references/api-reference/AI-API/segment-anything-2.mdx
- v2/gateways/references/api-reference/AI-API/text-to-image.mdx
- v2/gateways/references/api-reference/AI-API/text-to-speech.mdx
- v2/gateways/references/api-reference/AI-API/upscale.mdx
- v2/gateways/references/api-reference/AI-Worker/ai-worker-api.mdx
- v2/gateways/references/api-reference/CLI-HTTP/activateorchestrator.mdx
- v2/gateways/references/api-reference/CLI-HTTP/bond.mdx
- v2/gateways/references/api-reference/CLI-HTTP/cli-http-api.mdx
- v2/gateways/references/api-reference/CLI-HTTP/protocolparameters.mdx
- v2/gateways/references/api-reference/CLI-HTTP/rebond.mdx
- v2/gateways/references/api-reference/CLI-HTTP/registeredorchestrators.mdx
- v2/gateways/references/api-reference/CLI-HTTP/reward.mdx
- v2/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig.mdx
- v2/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx
- v2/gateways/references/api-reference/CLI-HTTP/signmessage.mdx
- v2/gateways/references/api-reference/CLI-HTTP/status.mdx
- v2/gateways/references/api-reference/CLI-HTTP/transfertokens.mdx
- v2/gateways/references/api-reference/CLI-HTTP/unbond.mdx
- v2/gateways/references/api-reference/_delete-all-api.mdx
- v2/gateways/references/api-reference/ai-worker-api.mdx
- v2/gateways/references/api-reference/hardware-info.mdx
- v2/gateways/references/api-reference/hardware-stats.mdx
- v2/gateways/references/api-reference/health.mdx
- v2/gateways/references/arbitrum-exchanges.mdx
- v2/gateways/references/arbitrum-rpc.mdx
- v2/gateways/references/cli-commands.mdx
- v2/gateways/references/configuration-flags.mdx
- v2/gateways/references/contract-addresses.mdx
- v2/gateways/references/go-livepeer/cli-reference.mdx
- v2/gateways/references/go-livepeer/gpu-support.mdx
- v2/gateways/references/go-livepeer/hardware-requirements.mdx
- v2/gateways/references/go-livepeer/prometheus-metrics.mdx
- v2/gateways/references/livepeer-exchanges.mdx
- v2/gateways/references/orchestrator-offerings.mdx
- v2/gateways/references/technical-architecture.mdx
- v2/gateways/run-a-gateway/configure/ai-configuration.mdx
- v2/gateways/run-a-gateway/configure/configuration-overview.mdx
- v2/gateways/run-a-gateway/configure/configuration-reference.mdx
- v2/gateways/run-a-gateway/configure/dual-configuration.mdx
- v2/gateways/run-a-gateway/configure/dual-docker.mdx
- v2/gateways/run-a-gateway/configure/pricing-configuration.mdx
- v2/gateways/run-a-gateway/configure/video-configuration-view.mdx
- v2/gateways/run-a-gateway/configure/video-configuration.mdx
- v2/gateways/run-a-gateway/connect/connect-with-offerings.mdx
- v2/gateways/run-a-gateway/connect/discover-offerings.mdx
- v2/gateways/run-a-gateway/connect/lp-marketplace.mdx
- v2/gateways/run-a-gateway/install/community-projects.mdx
- v2/gateways/run-a-gateway/install/docker-install.mdx
- v2/gateways/run-a-gateway/install/install-overview.mdx
- v2/gateways/run-a-gateway/install/linux-install.mdx
- v2/gateways/run-a-gateway/install/windows-install.mdx
- v2/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx
- v2/gateways/run-a-gateway/publish/connect-with-offerings.mdx
- v2/gateways/run-a-gateway/requirements/setup.mdx
- v2/gateways/run-a-gateway/run-a-gateway.mdx
- v2/gateways/run-a-gateway/transcoding.mdx
- v2/gateways/run-a-gateway/v1/transcoding-options.mdx
- v2/gateways/run-a-gateway/why-run-a-gateway.mdx
- v2/gateways/using-gateways/gateway-providers.mdx
- v2/home/about-livepeer/benefits.mdx
- v2/home/about-livepeer/ecosystem.mdx
- v2/home/about-livepeer/evolution.mdx
- v2/home/about-livepeer/roadmap.mdx
- v2/home/about-livepeer/vision.mdx
- v2/home/get-started.mdx
- v2/home/get-started/ai-pipelines.mdx
- v2/home/get-started/build-on-livepeer.mdx
- v2/home/get-started/stream-video.mdx
- v2/home/get-started/use-livepeer.mdx
- v2/home/mission-control.mdx
- v2/home/primer.mdx
- v2/home/solutions/applications.mdx
- v2/home/solutions/landscape.mdx
- v2/home/solutions/showcase.mdx
- v2/home/solutions/verticals.mdx
- v2/home/trending.mdx
- v2/index.mdx
- v2/internal/ally-notes.mdx
- v2/internal/definitions.mdx
- v2/internal/docs-philosophy.mdx
- v2/internal/ecosystem.mdx
- v2/internal/internal-overview.mdx
- v2/internal/layout-components-scripts-styling/components.mdx
- v2/internal/layout-components-scripts-styling/pages.mdx
- v2/internal/overview/about.mdx
- v2/internal/overview/docs-philosophy.mdx
- v2/internal/overview/governance.mdx
- v2/internal/overview/personas.mdx
- v2/internal/overview/strategic-alignment.mdx
- v2/internal/references.mdx
- v2/internal/rfp/aims.mdx
- v2/internal/rfp/deliverables.mdx
- v2/internal/rfp/outcomes.mdx
- v2/internal/rfp/problem-statements.mdx
- v2/internal/rfp/report.mdx
- v2/lpt/about/mechanics.mdx
- v2/lpt/about/overview.mdx
- v2/lpt/about/purpose.mdx
- v2/lpt/about/tokenomics.mdx
- v2/lpt/delegation/about-delegators.mdx
- v2/lpt/delegation/delegation-economics.mdx
- v2/lpt/delegation/delegation-guide.mdx
- v2/lpt/delegation/getting-started.mdx
- v2/lpt/delegation/overview.mdx
- v2/lpt/governance/model.mdx
- v2/lpt/governance/overview.mdx
- v2/lpt/governance/processes.mdx
- v2/lpt/resources/delegator-videos-and-blogs.mdx
- v2/lpt/resources/exchanges.mdx
- v2/lpt/resources/lpt-eth-usage.mdx
- v2/lpt/token-portal.mdx
- v2/lpt/treasury/allocations.mdx
- v2/lpt/treasury/overview.mdx
- v2/lpt/treasury/proposals.mdx
- v2/orchestrators/about-orchestrators/architecture.mdx
- v2/orchestrators/about-orchestrators/economics.mdx
- v2/orchestrators/about-orchestrators/job-types.mdx
- v2/orchestrators/about-orchestrators/orchestrator-functions.mdx
- v2/orchestrators/about-orchestrators/overview.mdx
- v2/orchestrators/advanced-setup/ai-pipelines.mdx
- v2/orchestrators/advanced-setup/delegation.mdx
- v2/orchestrators/advanced-setup/hosting-models.mdx
- v2/orchestrators/advanced-setup/rewards-and-fees.mdx
- v2/orchestrators/advanced-setup/run-a-pool.mdx
- v2/orchestrators/advanced-setup/staking-LPT.mdx
- v2/orchestrators/earnings.mdx
- v2/orchestrators/index.mdx
- v2/orchestrators/orchestrator-journey.mdx
- v2/orchestrators/orchestrator-tools-and-resources/community-pools.mdx
- v2/orchestrators/orchestrator-tools-and-resources/orchestrator-tools.mdx
- v2/orchestrators/orchestrators-portal.mdx
- v2/orchestrators/payments/index.mdx
- v2/orchestrators/quickstart/batch-ai-quickstart.mdx
- v2/orchestrators/quickstart/join-a-pool.mdx
- v2/orchestrators/quickstart/orchestrator-setup.mdx
- v2/orchestrators/quickstart/overview.mdx
- v2/orchestrators/quickstart/realtime-ai-quickstart.mdx
- v2/orchestrators/references/cli-flags.mdx
- v2/orchestrators/references/faq.mdx
- v2/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum.mdx
- v2/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx
- v2/orchestrators/setting-up-an-orchestrator/install-go-livepeer.mdx
- v2/orchestrators/setting-up-an-orchestrator/orch-config.mdx
- v2/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx
- v2/orchestrators/setting-up-an-orchestrator/overview.mdx
- v2/orchestrators/setting-up-an-orchestrator/publish-offerings.mdx
- v2/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx
- v2/resources/changelog/changelog.mdx
- v2/resources/changelog/migration-guide.mdx
- v2/resources/concepts/brief-history-of-video.mdx
- v2/resources/documentation-guide/authoring-standard.mdx
- v2/resources/documentation-guide/automations-workflows.mdx
- v2/resources/documentation-guide/component-library/component-library.mdx
- v2/resources/documentation-guide/component-library/display.mdx
- v2/resources/documentation-guide/component-library/overview.mdx
- v2/resources/documentation-guide/contribute-to-the-docs.mdx
- v2/resources/documentation-guide/docs-features-and-ai-integrations.mdx
- v2/resources/documentation-guide/documentation-guide.mdx
- v2/resources/documentation-guide/documentation-overview.mdx
- v2/resources/documentation-guide/snippets-inventory.mdx
- v2/resources/documentation-guide/style-guide.mdx
- v2/resources/livepeer-glossary.mdx
- v2/resources/media-kit.mdx
- v2/resources/references/contract-addresses.mdx
- v2/resources/resources-portal.mdx
- v2/solutions/embody/overview.mdx
- v2/solutions/livepeer-studio/api-reference/assets/delete.mdx
- v2/solutions/livepeer-studio/api-reference/assets/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/assets/get.mdx
- v2/solutions/livepeer-studio/api-reference/assets/overview.mdx
- v2/solutions/livepeer-studio/api-reference/assets/update.mdx
- v2/solutions/livepeer-studio/api-reference/assets/upload-via-url.mdx
- v2/solutions/livepeer-studio/api-reference/assets/upload.mdx
- v2/solutions/livepeer-studio/api-reference/multistream/create.mdx
- v2/solutions/livepeer-studio/api-reference/multistream/delete.mdx
- v2/solutions/livepeer-studio/api-reference/multistream/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/multistream/get.mdx
- v2/solutions/livepeer-studio/api-reference/multistream/overview.mdx
- v2/solutions/livepeer-studio/api-reference/multistream/update.mdx
- v2/solutions/livepeer-studio/api-reference/playback/get.mdx
- v2/solutions/livepeer-studio/api-reference/playback/overview.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/create-user.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/create.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/delete.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/get-user.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/get.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/overview.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/remove-user.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/start-egress.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/stop-egress.mdx
- v2/solutions/livepeer-studio/api-reference/rooms/update-user.mdx
- v2/solutions/livepeer-studio/api-reference/sessions/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/sessions/get-clip.mdx
- v2/solutions/livepeer-studio/api-reference/sessions/get.mdx
- v2/solutions/livepeer-studio/api-reference/sessions/overview.mdx
- v2/solutions/livepeer-studio/api-reference/signing-keys/create.mdx
- v2/solutions/livepeer-studio/api-reference/signing-keys/delete.mdx
- v2/solutions/livepeer-studio/api-reference/signing-keys/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/signing-keys/get.mdx
- v2/solutions/livepeer-studio/api-reference/signing-keys/overview.mdx
- v2/solutions/livepeer-studio/api-reference/signing-keys/update.mdx
- v2/solutions/livepeer-studio/api-reference/streams/add-multistream-target.mdx
- v2/solutions/livepeer-studio/api-reference/streams/create-clip.mdx
- v2/solutions/livepeer-studio/api-reference/streams/create.mdx
- v2/solutions/livepeer-studio/api-reference/streams/delete-multistream-target.mdx
- v2/solutions/livepeer-studio/api-reference/streams/delete.mdx
- v2/solutions/livepeer-studio/api-reference/streams/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/streams/get-clip.mdx
- v2/solutions/livepeer-studio/api-reference/streams/get.mdx
- v2/solutions/livepeer-studio/api-reference/streams/overview.mdx
- v2/solutions/livepeer-studio/api-reference/streams/terminate.mdx
- v2/solutions/livepeer-studio/api-reference/streams/update.mdx
- v2/solutions/livepeer-studio/api-reference/tasks/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/tasks/get.mdx
- v2/solutions/livepeer-studio/api-reference/tasks/overview.mdx
- v2/solutions/livepeer-studio/api-reference/transcode/create.mdx
- v2/solutions/livepeer-studio/api-reference/transcode/overview.mdx
- v2/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics.mdx
- v2/solutions/livepeer-studio/api-reference/viewership/get-public-total-views.mdx
- v2/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership.mdx
- v2/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics.mdx
- v2/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics.mdx
- v2/solutions/livepeer-studio/api-reference/viewership/overview.mdx
- v2/solutions/livepeer-studio/api-reference/webhooks/create.mdx
- v2/solutions/livepeer-studio/api-reference/webhooks/delete.mdx
- v2/solutions/livepeer-studio/api-reference/webhooks/get-all.mdx
- v2/solutions/livepeer-studio/api-reference/webhooks/get.mdx
- v2/solutions/livepeer-studio/api-reference/webhooks/overview.mdx
- v2/solutions/livepeer-studio/api-reference/webhooks/update.mdx
- v2/solutions/livepeer-studio/client-use-cases.mdx
- v2/solutions/livepeer-studio/get-started/authentication.mdx
- v2/solutions/livepeer-studio/get-started/overview.mdx
- v2/solutions/livepeer-studio/reference/overview.mdx
- v2/solutions/portal.mdx
- v2/solutions/product-hub.mdx
- v2/solutions/solution-providers.mdx
- v2/solutions/streamplace/introduction/streamplace-architecture.mdx
- v2/solutions/streamplace/introduction/streamplace-funding-model.mdx
- v2/solutions/streamplace/introduction/streamplace-guide.mdx
- v2/solutions/streamplace/introduction/streamplace-integration.mdx
- v2/solutions/streamplace/introduction/streamplace-provenance.mdx
- v2/solutions/streamplace/overview.mdx
- v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx
- v2/solutions/x-deprecated/developer-platforms/streamplace/streamplace.mdx
- v2/x-archived/p1-cleanup/showcaseData copy.jsx
- v2/x-archived/p1-cleanup/showcaseDataOld.jsx
- v2/x-archived/p1-cleanup/showcaseDataTest.jsx
- v2/x-deprecated/about-livepeer/moved/livepeer-ecosystem.mdx
- v2/x-deprecated/about-livepeer/moved/livepeer-evolution.mdx
- v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx
- v2/x-deprecated/about-livepeer/moved/why-livepeer.mdx
- v2/x-deprecated/gateways/references/configuration-flags-old.mdx
- v2/x-deprecated/index.mdx
- v2/x-deprecated/unmatched/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx
- v2/x-deprecated/unmatched/09_internal/definitions.mdx
- v2/x-deprecated/unmatched/09_internal/ecosystem.mdx
- v2/x-deprecated/unmatched/09_internal/references.mdx
- v2/x-experimental/copy-trending-at-livepeer.mdx
- v2/x-experimental/trending-layout-tests.mdx
- v2/x-notes/index.mdx

### Ambiguous Basename-Only Matches

| Basename | Candidate Paths | Source Files |
| --- | --- | --- |
| hero_about.png | snippets/assets/domain/00_HOME/Hero_Images/hero_about.png<br/>snippets/assets/media/heros/hero_about.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_community.png | snippets/assets/domain/00_HOME/Hero_Images/hero_community.png<br/>snippets/assets/media/heros/hero_community.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_delegators.png | snippets/assets/domain/00_HOME/Hero_Images/hero_delegators.png<br/>snippets/assets/media/heros/hero_delegators.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| hero_gateways.png | snippets/assets/domain/00_HOME/Hero_Images/hero_gateways.png<br/>snippets/assets/media/heros/hero_gateways.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_gpu.png | snippets/assets/domain/00_HOME/Hero_Images/hero_gpu.png<br/>snippets/assets/media/heros/hero_gpu.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_opportunity.png | snippets/assets/domain/00_HOME/Hero_Images/hero_opportunity.png<br/>snippets/assets/media/heros/hero_opportunity.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| hero_showcase.png | snippets/assets/domain/00_HOME/Hero_Images/hero_showcase.png<br/>snippets/assets/media/heros/hero_showcase.png | snippets/components/_archive/showcaseCards.jsx<br/>snippets/components/data/showcaseCards.jsx<br/>v2/cn/home/mission-control.mdx<br/>v2/cn/home/solutions/verticals.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/es/home/solutions/verticals.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/fr/home/solutions/verticals.mdx<br/>v2/home/mission-control.mdx<br/>v2/home/solutions/verticals.mdx |
| hero_word_developer.png | snippets/assets/domain/00_HOME/Hero_Images/hero_word_developer.png<br/>snippets/assets/media/heros/hero_word_developer.png | v2/cn/developers/developer-guide.mdx<br/>v2/developers/developer-guide.mdx<br/>v2/es/developers/developer-guide.mdx<br/>v2/fr/developers/developer-guide.mdx |
| cloud-spe-gateway.mdx | tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/cloud-spe-gateway.mdx<br/>tasks-plan-archive/active/CONTENTFILES/repo-content-files/cloud-spe-gateway.mdx | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx<br/>v2/x-deprecated/index.mdx |
| dark.svg | snippets/assets/logo/dark.svg<br/>snippets/assets/logos/dark.svg<br/>snippets/assets/site/logo/dark.svg | snippets/data/developers/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>snippets/snippetsWiki/mintlify-behaviour.mdx<br/>v2/cn/solutions/product-hub.mdx<br/>v2/developers/developer-platforms/builder-hub.mdx<br/>v2/es/solutions/product-hub.mdx<br/>v2/fr/solutions/product-hub.mdx<br/>v2/resources/media-kit.mdx<br/>v2/solutions/product-hub.mdx<br/>v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx |
| daydream-gateway.mdx | tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/daydream-gateway.mdx<br/>tasks-plan-archive/active/CONTENTFILES/repo-content-files/daydream-gateway.mdx | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx<br/>v2/x-deprecated/index.mdx |
| hero_about.png | snippets/assets/domain/00_HOME/Hero_Images/hero_about.png<br/>snippets/assets/media/heros/hero_about.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_community.png | snippets/assets/domain/00_HOME/Hero_Images/hero_community.png<br/>snippets/assets/media/heros/hero_community.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_delegators.png | snippets/assets/domain/00_HOME/Hero_Images/hero_delegators.png<br/>snippets/assets/media/heros/hero_delegators.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| hero_gateways.png | snippets/assets/domain/00_HOME/Hero_Images/hero_gateways.png<br/>snippets/assets/media/heros/hero_gateways.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_gpu.png | snippets/assets/domain/00_HOME/Hero_Images/hero_gpu.png<br/>snippets/assets/media/heros/hero_gpu.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx<br/>v2/internal/layout-components-scripts-styling/components.mdx |
| hero_opportunity.png | snippets/assets/domain/00_HOME/Hero_Images/hero_opportunity.png<br/>snippets/assets/media/heros/hero_opportunity.png | v2/cn/home/mission-control.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/home/mission-control.mdx |
| hero_showcase.png | snippets/assets/domain/00_HOME/Hero_Images/hero_showcase.png<br/>snippets/assets/media/heros/hero_showcase.png | snippets/components/_archive/showcaseCards.jsx<br/>snippets/components/data/showcaseCards.jsx<br/>v2/cn/home/mission-control.mdx<br/>v2/cn/home/solutions/verticals.mdx<br/>v2/es/home/mission-control.mdx<br/>v2/es/home/solutions/verticals.mdx<br/>v2/fr/home/mission-control.mdx<br/>v2/fr/home/solutions/verticals.mdx<br/>v2/home/mission-control.mdx<br/>v2/home/solutions/verticals.mdx |
| hero_word_developer.png | snippets/assets/domain/00_HOME/Hero_Images/hero_word_developer.png<br/>snippets/assets/media/heros/hero_word_developer.png | v2/cn/developers/developer-guide.mdx<br/>v2/developers/developer-guide.mdx<br/>v2/es/developers/developer-guide.mdx<br/>v2/fr/developers/developer-guide.mdx |
| light.svg | snippets/assets/logo/light.svg<br/>snippets/assets/logos/light.svg<br/>snippets/assets/site/logo/light.svg | snippets/snippetsWiki/mintlify-behaviour.mdx |
| Livepeer-Logo-Full-Dark.svg | snippets/assets/domain/00_HOME/Livepeer-Logo-Full-Dark.svg<br/>snippets/assets/logos/Livepeer-Logo-Full-Dark.svg | v2/resources/media-kit.mdx |
| livepeer-studio-gateway.mdx | tasks-plan-archive/active/CONTENTFILES/pay-orc-gate-files/livepeer-studio-gateway.mdx<br/>tasks-plan-archive/active/CONTENTFILES/repo-content-files/livepeer-studio-gateway.mdx | docs-guide/indexes/pages-index.mdx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/tables.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx<br/>v2/x-deprecated/index.mdx |
| logo | snippets/assets/domain/00_HOME/showcase/ /logo<br/>snippets/assets/domain/00_HOME/showcase/ nytv.live/logo<br/>snippets/assets/domain/00_HOME/showcase/nytv.live/logo | docs-guide/indexes/components-index.mdx<br/>docs.json.jsx<br/>snippets/assets/README.mdx<br/>snippets/automations/showcase/showcaseData.jsx<br/>snippets/components/_archive/HeroGif.jsx<br/>snippets/components/_archive/Portals.jsx<br/>snippets/components/_archive/folders/display-examples/image-examples.mdx<br/>snippets/components/_archive/folders/domain-examples/Portals-examples.mdx<br/>snippets/components/_archive/frameMode.jsx<br/>snippets/components/_archive/showcaseCards.jsx<br/>snippets/components/data/showcaseCards.jsx<br/>snippets/components/display/frame-mode.jsx<br/>snippets/components/page-structure/heroGif.jsx<br/>snippets/components/page-structure/portals.jsx<br/>snippets/components/primitives/divider.jsx<br/>snippets/components/primitives/icons.jsx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>snippets/snippetsWiki/mintlify-behaviour.mdx<br/>v2/cn/docs-guide/components-index.mdx<br/>v2/cn/docs-guide/indexes/components-index.mdx<br/>v2/cn/resources/documentation-guide/component-library/component-library.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/cn/resources/documentation-guide/component-library/overview.mdx<br/>v2/cn/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/cn/resources/documentation-guide/snippets-inventory.mdx<br/>v2/cn/solutions/product-hub.mdx<br/>v2/developers/developer-platforms/builder-hub.mdx<br/>v2/es/docs-guide/README.mdx<br/>v2/es/docs-guide/architecture-map.mdx<br/>v2/es/docs-guide/components-index.mdx<br/>v2/es/docs-guide/feature-guides/automation-pipelines.mdx<br/>v2/es/docs-guide/indexes/components-index.mdx<br/>v2/es/docs-guide/source-of-truth-policy.mdx<br/>v2/es/gateways/about-gateways/gateway-explainer.mdx<br/>v2/es/gateways/about/explainer.mdx<br/>v2/es/home/about-livepeer/ecosystem.mdx<br/>v2/es/resources/documentation-guide/component-library/component-library.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/component-library/overview.mdx<br/>v2/es/resources/documentation-guide/component-library/primitives.mdx<br/>v2/es/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/es/resources/documentation-guide/snippets-inventory.mdx<br/>v2/es/solutions/product-hub.mdx<br/>v2/fr/docs-guide/components-index.mdx<br/>v2/fr/docs-guide/indexes/components-index.mdx<br/>v2/fr/resources/documentation-guide/component-library/component-library.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/component-library/overview.mdx<br/>v2/fr/resources/documentation-guide/component-library/primitives.mdx<br/>v2/fr/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/fr/resources/documentation-guide/snippets-inventory.mdx<br/>v2/fr/solutions/product-hub.mdx<br/>v2/internal/rfp/aims.mdx<br/>v2/resources/documentation-guide/component-library/component-library.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/component-library/overview.mdx<br/>v2/resources/documentation-guide/component-library/primitives.mdx<br/>v2/resources/documentation-guide/contribute-to-the-docs.mdx<br/>v2/resources/documentation-guide/snippets-inventory.mdx<br/>v2/resources/media-kit.mdx<br/>v2/solutions/product-hub.mdx<br/>v2/solutions/x-deprecated/developer-platforms/builder-hub.mdx<br/>v2/x-archived/p1-cleanup/showcaseData copy.jsx<br/>v2/x-archived/p1-cleanup/showcaseDataTest.jsx |
| overview.mdx | tasks-plan-archive/active/CONTENTFILES/gateway-content-files/overview.mdx<br/>tasks-plan-archive/active/CONTENTFILES/overview.mdx | contribute/CONTRIBUTING.mdx<br/>docs-guide/README.mdx<br/>docs-guide/indexes/pages-index.mdx<br/>snippets/components/_archive/showcaseCards.jsx<br/>snippets/components/content/code.jsx<br/>snippets/components/content/externalContent.jsx<br/>snippets/components/content/math.jsx<br/>snippets/components/content/quote.jsx<br/>snippets/components/content/release.jsx<br/>snippets/components/content/responseField.jsx<br/>snippets/components/content/video.jsx<br/>snippets/components/content/zoomableDiagram.jsx<br/>snippets/components/data/coingecko.jsx<br/>snippets/components/data/data.jsx<br/>snippets/components/data/embed.jsx<br/>snippets/components/data/showcaseCards.jsx<br/>snippets/components/data/videoData.jsx<br/>snippets/components/display/frame-mode.jsx<br/>snippets/components/layout/cardCarousel.jsx<br/>snippets/components/layout/cards.jsx<br/>snippets/components/layout/containers.jsx<br/>snippets/components/layout/customCards.jsx<br/>snippets/components/layout/layout.jsx<br/>snippets/components/layout/listSteps.jsx<br/>snippets/components/layout/lists.jsx<br/>snippets/components/layout/quadGrid.jsx<br/>snippets/components/layout/searchTable.jsx<br/>snippets/components/layout/table.jsx<br/>snippets/components/layout/tables.jsx<br/>snippets/components/layout/text.jsx<br/>snippets/components/page-structure/heroGif.jsx<br/>snippets/components/page-structure/portals.jsx<br/>snippets/components/primitives/a11y.jsx<br/>snippets/components/primitives/buttons.jsx<br/>snippets/components/primitives/customCardTitle.jsx<br/>snippets/components/primitives/divider.jsx<br/>snippets/components/primitives/icons.jsx<br/>snippets/components/primitives/image.jsx<br/>snippets/components/primitives/links.jsx<br/>snippets/components/primitives/previewCallouts.jsx<br/>snippets/components/primitives/socialLinks.jsx<br/>snippets/components/primitives/spacer.jsx<br/>snippets/components/primitives/text.jsx<br/>snippets/data/about/hrefs.jsx<br/>snippets/data/community/hrefs.jsx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>snippets/data/home/hrefs.jsx<br/>snippets/data/internal/hrefs.jsx<br/>snippets/data/lpt/hrefs.jsx<br/>snippets/data/orchestrators/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>snippets/data/solutions/hrefs.jsx<br/>v2/about/faq-about.mdx<br/>v2/about/index.mdx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/gateways/about-gateways/gateway-explainer.mdx<br/>v2/cn/gateways/about/explainer.mdx<br/>v2/cn/index.mdx<br/>v2/developers/index.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/gateways/about-gateways/gateway-explainer.mdx<br/>v2/es/gateways/about/explainer.mdx<br/>v2/es/index.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/gateways/about-gateways/gateway-explainer.mdx<br/>v2/fr/gateways/about/explainer.mdx<br/>v2/fr/index.mdx<br/>v2/gateways/_contextData_/docker-install-implementation.mdx<br/>v2/gateways/about/explainer.mdx<br/>v2/gateways/index.mdx<br/>v2/index.mdx<br/>v2/internal/index.mdx<br/>v2/lpt/index.mdx<br/>v2/orchestrators/index.mdx<br/>v2/resources/index.mdx<br/>v2/solutions/index.mdx<br/>v2/x-deprecated/index.mdx |
| README.md | .github/README.md<br/>context-data/ORCHESTRATORS/README.md | docs-guide/README.mdx<br/>docs-guide/feature-guides/architecture-map.mdx<br/>docs-guide/feature-guides/content-system.mdx<br/>docs-guide/feature-guides/feature-map.mdx<br/>docs-guide/feature-guides/visual-explainer-workflows.mdx<br/>docs-guide/source-of-truth-policy.mdx<br/>snippets/components/_archive/embed.jsx<br/>snippets/components/_archive/folders/display-examples/embed-examples.mdx<br/>snippets/data/developers/hrefs.jsx<br/>snippets/data/gateways/hrefs.jsx<br/>snippets/data/home/hrefs.jsx<br/>snippets/data/resources/hrefs.jsx<br/>snippets/data/unknown/hrefs.jsx<br/>tools/scripts/snippets/README.mdx<br/>v1/ai/contributors/guides/add-model.mdx<br/>v1/ai/contributors/guides/add-pipeline.mdx<br/>v1/ai/pipelines/text-to-speech.mdx<br/>v2/cn/developers/builder-opportunities/oss-contributions.mdx<br/>v2/cn/developers/quickstart/ai/ai-jobs.mdx<br/>v2/cn/docs-guide/README.mdx<br/>v2/cn/docs-guide/feature-guides/architecture-map.mdx<br/>v2/cn/docs-guide/feature-guides/content-system.mdx<br/>v2/cn/docs-guide/feature-guides/feature-map.mdx<br/>v2/cn/docs-guide/feature-map.mdx<br/>v2/cn/docs-guide/indexes/pages-index.mdx<br/>v2/cn/docs-guide/pages-index.mdx<br/>v2/cn/docs-guide/source-of-truth-policy.mdx<br/>v2/cn/gateways/about-gateways/gateway-explainer.mdx<br/>v2/cn/gateways/about/explainer.mdx<br/>v2/cn/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/cn/index.mdx<br/>v2/cn/resources/documentation-guide/automations-workflows.mdx<br/>v2/cn/resources/documentation-guide/component-library/display.mdx<br/>v2/cn/resources/documentation-guide/snippets-inventory.mdx<br/>v2/developers/builder-opportunities/oss-contributions.mdx<br/>v2/developers/index.mdx<br/>v2/developers/quickstart/ai/ai-jobs.mdx<br/>v2/es/developers/builder-opportunities/oss-contributions.mdx<br/>v2/es/developers/quickstart/ai/ai-jobs.mdx<br/>v2/es/docs-guide/README.mdx<br/>v2/es/docs-guide/architecture-map.mdx<br/>v2/es/docs-guide/feature-guides/content-system.mdx<br/>v2/es/docs-guide/feature-guides/feature-map.mdx<br/>v2/es/docs-guide/feature-map.mdx<br/>v2/es/docs-guide/indexes/pages-index.mdx<br/>v2/es/docs-guide/pages-index.mdx<br/>v2/es/docs-guide/source-of-truth-policy.mdx<br/>v2/es/gateways/about-gateways/gateway-explainer.mdx<br/>v2/es/gateways/about/explainer.mdx<br/>v2/es/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/es/index.mdx<br/>v2/es/resources/documentation-guide/automations-workflows.mdx<br/>v2/es/resources/documentation-guide/component-library/display.mdx<br/>v2/es/resources/documentation-guide/snippets-inventory.mdx<br/>v2/fr/developers/builder-opportunities/oss-contributions.mdx<br/>v2/fr/developers/quickstart/ai/ai-jobs.mdx<br/>v2/fr/docs-guide/README.mdx<br/>v2/fr/docs-guide/architecture-map.mdx<br/>v2/fr/docs-guide/feature-guides/architecture-map.mdx<br/>v2/fr/docs-guide/feature-guides/content-system.mdx<br/>v2/fr/docs-guide/feature-guides/feature-map.mdx<br/>v2/fr/docs-guide/feature-map.mdx<br/>v2/fr/docs-guide/indexes/pages-index.mdx<br/>v2/fr/docs-guide/pages-index.mdx<br/>v2/fr/docs-guide/source-of-truth-policy.mdx<br/>v2/fr/gateways/about-gateways/gateway-explainer.mdx<br/>v2/fr/gateways/about/explainer.mdx<br/>v2/fr/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/fr/index.mdx<br/>v2/fr/resources/documentation-guide/automations-workflows.mdx<br/>v2/fr/resources/documentation-guide/component-library/display.mdx<br/>v2/fr/resources/documentation-guide/snippets-inventory.mdx<br/>v2/gateways/about/explainer.mdx<br/>v2/gateways/run-a-gateway/install/community-projects.mdx<br/>v2/index.mdx<br/>v2/internal/index.mdx<br/>v2/internal/rfp/aims.mdx<br/>v2/resources/documentation-guide/automations-workflows.mdx<br/>v2/resources/documentation-guide/component-library/display.mdx<br/>v2/resources/documentation-guide/snippets-inventory.mdx |

## 8. v1/ Review Items

| Path | Size Bytes | Human Size | Reference Status | MDX/JSX References |
| --- | --- | --- | --- | --- |
| v1/images/blender-poster.png | 5649832 | 5.39 MiB | referenced | v1/sdks/react/migration/3.x/Player.mdx |
| v1/images/waterfalls-poster.png | 8942891 | 8.53 MiB | unreferenced |  |

