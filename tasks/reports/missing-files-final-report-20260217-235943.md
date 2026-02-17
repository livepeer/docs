# Missing Files Comprehensive Report

**Date:** Tue Feb 17 23:59:43 AEDT 2026
**Current Branch:** docs-v2-test
**Current Branch File Count:** 1516

## Summary

- **origin/docs-v2-tests:** 223 files missing from current branch
- **origin/docs-v2-preview:** 4 files missing from current branch

## Analysis

Many files from `origin/docs-v2-tests` appear to be in the old `docs/` directory structure which was reorganized per the migration plan:
- `docs/PLAN/` → `tasks/plan/`
- `docs/CONTRIBUTING/` → `contribute/CONTRIBUTING/`
- `docs/AI_GUIDELINES.md` → `tools/ai-rules/AI_GUIDELINES.md`
- `docs/.augment/` → `tools/ai-rules/`
- `docs/.speakeasy/` → `tools/config/.speakeasy/`
- Root configs → `tools/config/` or root (per README)
- `docs/ABOUT/`, `docs/DEVELOPERS/`, `docs/ORCHESTRATORS/` → These were planning/context files, may have been moved to `tasks/` or removed
- `scripts/` → `tools/scripts/`
- `v2/ai-tools/` → `ai-tools/`

## Files Requiring Investigation

The following files need to be checked to determine if they were moved or deleted:


## Complete File List from origin/docs-v2-tests

```
.cursorrules
.prettierrc.yaml
CONTRIBUTING.md
cspell.json
docs/.augment/.augment-guidelines
docs/.augment/rules/git-safety.md
docs/.augment/rules/imported/AI_GUIDELINES.md
docs/.augment/rules/imported/copilot-instructions.md
docs/.speakeasy/workflow.lock
docs/.speakeasy/workflow.yaml
docs/ABOUT/00-NAV-AND-PAGE-INDEX.md
docs/ABOUT/ABOUT-SECTION-COPY-REVIEW.md
docs/ABOUT/ABOUT-SECTION-STYLE-GUIDE.md
docs/ABOUT/CONTEXT DATA/Network/livepeer_interfaces.md
docs/ABOUT/CONTEXT DATA/Network/livepeer_job_lifecycle.md
docs/ABOUT/CONTEXT DATA/Network/livepeer_marketplace.md
docs/ABOUT/CONTEXT DATA/Network/livepeer_network_actors.md
docs/ABOUT/CONTEXT DATA/Network/livepeer_network_overview.md
docs/ABOUT/CONTEXT DATA/Network/livepeer_technical_stack.md
docs/ABOUT/CONTEXT DATA/Protocol/Core Mechanisms.pdf
docs/ABOUT/CONTEXT DATA/Protocol/Livepeer Protocol Core Mechanisms (2026).pdf
docs/ABOUT/CONTEXT DATA/Protocol/OverviewReport.pdf
docs/ABOUT/CONTEXT DATA/Protocol/deep-research-report (1).md
docs/ABOUT/CONTEXT DATA/Protocol/deep-research-report (2).md
docs/ABOUT/CONTEXT DATA/Protocol/deep-research-report.md
docs/ABOUT/CONTEXT DATA/Protocol/livepeer_core_mechanisms.md
docs/ABOUT/CONTEXT DATA/Protocol/livepeer_governance_model.md
docs/ABOUT/CONTEXT DATA/Protocol/livepeer_protocol_economics.md
docs/ABOUT/CONTEXT DATA/Protocol/livepeer_technical_architecture.md
docs/ABOUT/CONTEXT DATA/Protocol/livepeer_token.md
docs/ABOUT/CONTEXT DATA/Protocol/livepeer_treasury.md
docs/ABOUT/CONTEXT DATA/Resources_References/livepeer_about_section_references.md
docs/ABOUT/CONTEXT DATA/livepeer_docs_rebuild.md
docs/ABOUT/CONTEXT DATA/livepeer_ia_protocol_report.md
docs/AI_GUIDELINES.md
docs/CONTRIBUTING/AGENT-INSTRUCTIONS.md
docs/CONTRIBUTING/GIT-HOOKS.md
docs/CONTRIBUTING/README.md
docs/DEVELOPERS/00-NAV-AND-PAGE-INDEX.md
docs/DEVELOPERS/CONTEXT DATA/ai_pipelines_overview.md
docs/DEVELOPERS/CONTEXT DATA/byoc_pipeline_guide.md
docs/DEVELOPERS/CONTEXT DATA/comfy_stream_integration.md
docs/DEVELOPERS/CONTEXT DATA/contribution_guide.md
docs/DEVELOPERS/CONTEXT DATA/developer_guides_index.md
docs/DEVELOPERS/CONTEXT DATA/developer_help.md
docs/DEVELOPERS/CONTEXT DATA/developer_programs.md
docs/DEVELOPERS/CONTEXT DATA/developer_resources.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_ai_quickstart.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_developer_guide.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_developer_journey.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_developer_partners.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_developer_section_planning.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_rfps.md
docs/DEVELOPERS/CONTEXT DATA/livepeer_video_streaming_quickstart.md
docs/DEVELOPERS/DEVELOPERS-SECTION-COPY-REVIEW.md
docs/DEVELOPERS/DEVELOPERS-SECTION-STYLE-GUIDE.md
docs/DRY-and-cleaner-recommendations.md
docs/DRY-tasks-feasibility-report.md
docs/Dockerfile
docs/LIVEPEER-STUDIO-GAPS-AND-VERACITY.md
docs/LIVEPEER-STUDIO-V1-INVENTORY-AND-IA.md
docs/MDX-ERRORS-AND-FIXES-REPORT.md
docs/Makefile
docs/ORCHESTRATORS/00-V1-TO-V2-IA-MAPPING-AND-RECOMMENDATIONS.md
docs/ORCHESTRATORS/01-ORCHESTRATORS-COPY-REVIEW-AND-RECOMMENDATIONS.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_about_orchestrators_economics.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_ai_pipelines.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_delegation.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_run_a_pool.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_staking_lpt (1).md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_advanced_setup_staking_lpt.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_quickstart_orchestrator_setup.md
docs/ORCHESTRATORS/CONTEXT DATA/05_orchestrators_references_faq.md
docs/ORCHESTRATORS/CONTEXT DATA/join_a_pool.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_architecture_draft_mdx (1).md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_architecture_draft_mdx.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_configuration.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_economics.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_functions (1).md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_functions.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_hardware_requirements.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_ia_setup.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_installation.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_network_integration.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_overview.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_stats_monitoring.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrator_testing_validation.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_ai_pipelines.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_delegation.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_rewards_and_fees.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrators_advanced_setup_staking_lpt.md
docs/ORCHESTRATORS/CONTEXT DATA/orchestrators_inline.md
docs/ORCHESTRATORS/CONTEXT DATA/rewards_and_fees_advanced_orchestrator_guide.md
docs/ORCHESTRATORS/CONTEXT DATA/run_an_orchestrator_overview.md
docs/ORCHESTRATORS/ORCHESTRATORS-SECTION-STYLE-GUIDE.md
docs/ORCHESTRATORS/README.md
docs/PLAN/01-components-consolidate.md
docs/PLAN/02-components-audit-unused.md
docs/PLAN/03-component-library-wiki.md
docs/PLAN/04-ai-setup-guides-network-nodes.md
docs/PLAN/05-homogenise-styling.md
docs/PLAN/06-separate-data-and-components-mdx.md
docs/PLAN/07-break-long-pages-into-sections.md
docs/PLAN/08-automation-and-scripts.md
docs/PLAN/09-ai-guides-in-repo.md
docs/PLAN/10-documentation-guide-resources.md
docs/PLAN/11-mintlify-ai-investigation.md
docs/PLAN/12-contribution-guide-full-and-stretch.md
docs/PLAN/13-audit-repeated-content.md
docs/PLAN/14-audit-v1-to-v2-coverage.md
docs/PLAN/15-audit-v2-missing-incomplete.md
docs/PLAN/16-rfp-goals-assessment.md
docs/PLAN/17-per-page-resources-and-media.md
docs/PLAN/18-other-suggestions.md
docs/PLAN/19-automate-snippets-inventory.md
docs/PLAN/21-fix-automations-workflows.md
docs/PLAN/22-page-imports-check-script.md
docs/PLAN/23-glossary-maintenance.md
docs/PLAN/24-audit-repo-files-removal.md
docs/PLAN/25-fill-references-section.md
docs/PLAN/26-internal-tab-link.md
docs/PLAN/27-pre-commit-full-browser-verification.md
docs/PLAN/28-platform-ownership-and-studio-fill.md
docs/PLAN/AGENT-PREREQUISITES.md
docs/PLAN/AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md
docs/PLAN/COMPLETED-WORK-NOT-IN-UPSTREAM.md
docs/PLAN/README.md
docs/PLAN/TASK-TEMPLATE.md
docs/PLAN/complete/01-components-consolidate-report.md
docs/PLAN/complete/01-components-consolidate.md
docs/PLAN/complete/02-components-audit-unused-report.md
docs/PLAN/complete/02-components-audit-unused.md
docs/PLAN/complete/05-homogenise-styling-report.md
docs/PLAN/complete/05-homogenise-styling.md
docs/PLAN/complete/10-documentation-guide-resources-report.md
docs/PLAN/complete/10-documentation-guide-resources.md
docs/PLAN/complete/13-audit-repeated-content-report.md
docs/PLAN/complete/13-audit-repeated-content.md
docs/PLAN/complete/14-audit-v1-to-v2-coverage-report.md
docs/PLAN/complete/14-audit-v1-to-v2-coverage.md
docs/PLAN/complete/14-consolidate-livepeer-studio-summary.md
docs/PLAN/complete/14-file-organization-summary.md
docs/PLAN/complete/14-final-review-report.md
docs/PLAN/complete/15-audit-v2-missing-incomplete-report.md
docs/PLAN/complete/15-audit-v2-missing-incomplete.md
docs/PLAN/complete/16-rfp-goals-assessment-report.md
docs/PLAN/complete/16-rfp-goals-assessment.md
docs/PLAN/complete/README.md
docs/PLAN/complete/styling-framework-homogenization-report.md
docs/PLAN/errors/component-bugs.md
docs/PLAN/errors/component-recommendations.md
docs/PLAN/errors/component-verification-report.md
docs/PLAN/errors/testing-methodology.md
docs/PLAN/reports/.gitkeep
docs/PLAN/reports/16-rfp-notion-gaps-and-incomplete.md
docs/PLAN/reports/20-automations-workflows-audit-report.md
docs/PLAN/reports/COMPONENT_LIBRARY_STATUS_REPORT.md
docs/PLAN/reports/COMPREHENSIVE-V2-PAGES-AUDIT-REPORT.md
docs/PLAN/reports/COMPREHENSIVE_CHANGE_REPORT.md
docs/PLAN/reports/browser-verification-final.md
docs/PLAN/reports/comprehensive-v2-pages-browser-audit.json
docs/PLAN/reports/mdx-inline-styles-audit.md
docs/PLAN/reports/non-technical-contribution-proposal.md
docs/PLAN/reports/styling-framework-verification.md
docs/PLAN/rfp/01-stakeholder-groups.md
docs/PLAN/rfp/02-onboard-stakeholders-pm.md
docs/PLAN/rfp/03-orchestrator-discord-support.md
docs/PLAN/rfp/04-delegator-video-content.md
docs/PLAN/rfp/05-gateways-foundation-support.md
docs/PLAN/rfp/06-forum-post-rfc.md
docs/PLAN/rfp/07-starter-repos.md
docs/PLAN/rfp/08-realtime-api-coverage.md
docs/PLAN/rfp/09-stakeholder-rewrite-process.md
docs/PLAN/rfp/10-aeo-optimization.md
docs/PLAN/rfp/11-docs-website-integration.md
docs/PLAN/rfp/12-measurable-engagement.md
docs/PLAN/rfp/13-technical-director-style-guide.md
docs/PLAN/rfp/14-handover-ownership.md
docs/PLAN/rfp/15-ticketing-system.md
docs/PLAN/rfp/16-ecosystem-integration.md
docs/PLAN/rfp/17-single-canonical-changelog.md
docs/PLAN/rfp/18-persona-journey-mapping.md
docs/PLAN/rfp/README.md
docs/PLAN/testing-suite-future-tasks.md
docs/ai/worker/api/gateway.openapi.yaml
docs/ai/worker/api/openapi.json
docs/ai/worker/api/openapi.yaml
docs/ai/worker/api/openapi.yaml.backup
docs/docs-v2-rfp-task-list-and-plan.md
docs/experiment/.gitignore
docs/experiment/README.md
docs/experiment/index.html
docs/experiment/server.js
docs/llms.txt.information.md
docs/non-essential-tasks-audit-for-ai-and-community.md
favicon.png
logo/dark.svg
logo/light.svg
openapi.yaml
scripts/README-test-v2-pages.md
scripts/audit-all-v2-pages.js
scripts/check-component-errors.js
scripts/debug-mint-dev.js
scripts/download-linkedin-video.sh
scripts/download-linkedin-with-cookies.sh
scripts/final-verification.js
scripts/find-correct-url.js
scripts/inspect-page.js
scripts/inspect-video-page.js
scripts/test-hook-hardcoded-color.jsx
scripts/test-hook-violation.jsx
scripts/test-v2-pages.js
scripts/test-youtube-pages.js
scripts/verify-all-pages.js
scripts/verify-pages.js
snippets/data/API/cli-http-api.yaml
v2/ai-tools/claude-code.mdx
v2/ai-tools/cursor.mdx
v2/ai-tools/windsurf.mdx
v2/tests/README.mdx
v2/tests/reports/diffs/themeAwareCommit.md
v2/tests/reports/errors/20260112-145047-mdx-errors.md
v2/tests/reports/errors/timeline
```

## Files from origin/docs-v2-preview

```
tasks/plan/merge-content-verification-summary.md
tasks/plan/merge-plan-docs-v2-preview.md
tasks/plan/merge-plan-quick-reference.md
tasks/plan/reports/merge-restoration-summary.md
```

---
**Report Generated:** Wed Feb 18 00:00:12 AEDT 2026
