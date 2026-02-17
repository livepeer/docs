# Local Files Deleted Report

**Date:** 2026-02-17  
**Status:** CRITICAL - Local Files Status  
**Total Local Files Missing from Git: 125
  - 
  - ---
  - 
## Summary

**CRITICAL FINDING:** All 125 files were **UNCOMMITTED local work** - they were NEVER in git commits, so they cannot be restored from git history.

**CORRECTED Status Breakdown:**
- **50 files** exist in original location (untracked, not lost)
- **57 files** were MOVED to new locations (not deleted, just relocated)
- **18 files** are truly missing (uncommitted and lost)

**IMPORTANT:** Most files were MOVED, not deleted. Only 18 files are truly missing.

**Source:** Commit b59f147 (WIP: Save state before merging docs-v2-tests) - but these files were NOT in that commit
  - 
  - ---
  - 
  - ## Files Deleted from Local Branch
  - 
  - The following files existed in the local branch but are now missing:
  - 
  - The following files:
  - .augment/.augment-guidelines
  - .augment/rules/git-safety.md
  - .augment/rules/imported/AI_GUIDELINES.md
  - .augment/rules/imported/copilot-instructions.md
  - .cursor/rules/tasks-directory-structure.mdc
  - .prettierrc.yaml
  - .speakeasy/workflow.lock
  - .speakeasy/workflow.yaml
  - DIFF-REPORT-SUMMARY.md
  - ai/worker/api/gateway.openapi.yaml
  - ai/worker/api/openapi.json
  - ai/worker/api/openapi.yaml.backup
  - favicon.png
  - logo/dark.svg
  - logo/light.svg
  - package.json
  - tasks/PLAN/03-component-library-wiki.md
  - tasks/PLAN/04-ai-setup-guides-network-nodes.md
  - tasks/PLAN/06-separate-data-and-components-mdx.md
  - tasks/PLAN/07-break-long-pages-into-sections.md
  - tasks/PLAN/08-automation-and-scripts.md
  - tasks/PLAN/09-ai-guides-in-repo.md
  - tasks/PLAN/11-mintlify-ai-investigation.md
  - tasks/PLAN/12-contribution-guide-full-and-stretch.md
  - tasks/PLAN/17-per-page-resources-and-media.md
  - tasks/PLAN/18-other-suggestions.md
  - tasks/PLAN/19-automate-snippets-inventory.md
  - tasks/PLAN/21-fix-automations-workflows.md
  - tasks/PLAN/AGENT-PREREQUISITES.md
  - tasks/PLAN/COMPLETED-WORK-NOT-IN-UPSTREAM.md
  - tasks/PLAN/COMPLETION-STATUS-REPORT.md
  - tasks/PLAN/NEW LIST
  - tasks/PLAN/README.md
  - tasks/PLAN/TASK-TEMPLATE.md
  - tasks/PLAN/complete/01-components-consolidate-report.md
  - tasks/PLAN/complete/01-components-consolidate.md
  - tasks/PLAN/complete/02-components-audit-unused-report.md
  - tasks/PLAN/complete/02-components-audit-unused.md
  - tasks/PLAN/complete/05-homogenise-styling-report.md
  - tasks/PLAN/complete/05-homogenise-styling.md
  - tasks/PLAN/complete/10-documentation-guide-resources-report.md
  - tasks/PLAN/complete/10-documentation-guide-resources.md
  - tasks/PLAN/complete/13-audit-repeated-content-report.md
  - tasks/PLAN/complete/13-audit-repeated-content.md
  - tasks/PLAN/complete/14-audit-v1-to-v2-coverage-report.md
  - tasks/PLAN/complete/14-audit-v1-to-v2-coverage.md
  - tasks/PLAN/complete/14-consolidate-livepeer-studio-summary.md
  - tasks/PLAN/complete/14-file-organization-summary.md
  - tasks/PLAN/complete/14-final-review-report.md
  - tasks/PLAN/complete/15-audit-v2-missing-incomplete-report.md
  - tasks/PLAN/complete/15-audit-v2-missing-incomplete.md
  - tasks/PLAN/complete/16-rfp-goals-assessment-report.md
  - tasks/PLAN/complete/16-rfp-goals-assessment.md
  - tasks/PLAN/complete/README.md
  - tasks/PLAN/complete/styling-framework-homogenization-report.md
  - tasks/PLAN/create-github-issue-templates.md
  - tasks/PLAN/errors/component-bugs.md
  - tasks/PLAN/errors/component-recommendations.md
  - tasks/PLAN/errors/component-verification-report.md
  - tasks/PLAN/errors/testing-methodology.md
  - tasks/PLAN/merge-docs-v2-tests-tasks.md
  - tasks/PLAN/migration-plan.md
  - tasks/PLAN/migration/01-root-structure-migration-phase-1-2.md
  - tasks/PLAN/migration/03-snippets-cleanup.md
  - tasks/PLAN/migration/04-scripts-consolidation.md
  - tasks/PLAN/migration/05-v2-cleanup.md
  - tasks/PLAN/migration/06-verify-styles-root.md
  - tasks/PLAN/migration/07-tasks-reorganization.md
  - tasks/PLAN/migration/08-data-content-separation.md
  - tasks/PLAN/migration/09-final-validation.md
  - tasks/PLAN/migration/README.md
  - tasks/PLAN/report/COMPONENT_LIBRARY_STATUS_REPORT.md
  - tasks/PLAN/report/COMPONENT_USAGE_AUDIT_REPORT.md
  - tasks/PLAN/report/COMPREHENSIVE_CHANGE_REPORT.md
  - tasks/PLAN/report/browser-test-report.json
  - tasks/PLAN/report/component-usage-audit.json
  - tasks/PLAN/report/component-usage-audit.txt
  - tasks/PLAN/report/pages-to-test.json
  - tasks/PLAN/reports/.gitkeep
  - tasks/PLAN/reports/20-automations-workflows-audit-report.md
  - tasks/PLAN/reports/AUDIT-STATUS.txt
  - tasks/PLAN/reports/COMPREHENSIVE-V2-PAGES-AUDIT-REPORT.md
  - tasks/PLAN/reports/audit-summary-updated.md
  - tasks/PLAN/reports/audit-summary.md
  - tasks/PLAN/reports/browser-verification-final.md
  - tasks/PLAN/reports/comprehensive-v2-pages-browser-audit.json
  - tasks/PLAN/reports/docs-v2-tests-merge-analysis.md
  - tasks/PLAN/reports/mdx-inline-styles-audit.md
  - tasks/PLAN/reports/missing-files-analysis.md
  - tasks/PLAN/reports/non-technical-contribution-proposal.md
  - tasks/PLAN/reports/page-audit-1771297377437.json
  - tasks/PLAN/reports/page-audit-1771297377471.md
  - tasks/PLAN/reports/repository-audit-summary.md
  - tasks/PLAN/reports/repository-ruleset.md
  - tasks/PLAN/reports/repository-structure-audit.md
  - tasks/PLAN/reports/styling-framework-verification.md
  - tasks/PLAN/scripts/audit-all-pages-simple.js
  - tasks/PLAN/scripts/audit-all-pages.js
  - tasks/PLAN/scripts/audit-component-usage.js
  - tasks/PLAN/scripts/audit-minimal.js
  - tasks/PLAN/scripts/audit-python.py
  - tasks/PLAN/scripts/run-audit-direct.sh
  - tasks/PLAN/scripts/run-audit-now.js
  - tasks/PLAN/scripts/run-audit.sh
  - tasks/PLAN/scripts/test-audit.js
  - tasks/PLAN/testing-suite-future-tasks.md
  - testing/README.md
  - testing/README.mdx
  - testing/WHEN-TESTS-RUN.md
  - testing/config/spell-dict.json
  - testing/fixtures/test-hook-hardcoded-color.jsx
  - testing/fixtures/test-hook-violation.jsx
  - testing/integration/browser.test.js
  - testing/reports/diffs/themeAwareCommit.md
  - testing/reports/errors/20260112-145047-mdx-errors.md
  - testing/reports/errors/timeline
  - testing/run-all.js
  - testing/unit/links-imports.test.js
  - testing/unit/mdx.test.js
  - testing/unit/quality.test.js
  - testing/unit/spelling.test.js
  - testing/unit/style-guide.test.js
  - testing/utils/file-walker.js
  - testing/utils/mdx-parser.js
  - testing/utils/spell-checker.js
  - 
  - ---
  - 
  - ## Impact
  - 
  - **CRITICAL:** Local files deleted means:
  - - Lost work from local branch
  - - Incomplete merge
  - - Missing local improvements
  - - Potential broken references
  - 
  - ---
  - 
  - ## Required Actions
  - 
  - 1. **IMMEDIATE:** Identify all files deleted from local branch
  - 2. **IMMEDIATE:** Restore from local branch history
  - 3. **VERIFY:** Check that all files have content
  - 4. **TEST:** Verify no broken references
  - 5. **COMMIT:** Commit restored files
  - 
  - ---
  - 
  - ## Notes
  - 
  - - Files can be restored from local branch git history (commit b59f147)
  - - Need to check if files were moved or actually deleted
  - - Need to verify if files should exist or were intentionally removed

## Restorability Status

**Files that CAN be restored from git:** 0
0
**Files NOT in git (uncommitted, cannot restore):** 125

### Files NOT in Git (Uncommitted Work - LOST)

- .augment/.augment-guidelines
- .augment/rules/git-safety.md
- .augment/rules/imported/AI_GUIDELINES.md
- .augment/rules/imported/copilot-instructions.md
- .cursor/rules/tasks-directory-structure.mdc
- .prettierrc.yaml
- .speakeasy/workflow.lock
- .speakeasy/workflow.yaml
- DIFF-REPORT-SUMMARY.md
- ai/worker/api/gateway.openapi.yaml
- ai/worker/api/openapi.json
- ai/worker/api/openapi.yaml.backup
- favicon.png
- logo/dark.svg
- logo/light.svg
- package.json
- tasks/PLAN/03-component-library-wiki.md
- tasks/PLAN/04-ai-setup-guides-network-nodes.md
- tasks/PLAN/06-separate-data-and-components-mdx.md
- tasks/PLAN/07-break-long-pages-into-sections.md
- tasks/PLAN/08-automation-and-scripts.md
- tasks/PLAN/09-ai-guides-in-repo.md
- tasks/PLAN/11-mintlify-ai-investigation.md
- tasks/PLAN/12-contribution-guide-full-and-stretch.md
- tasks/PLAN/17-per-page-resources-and-media.md
- tasks/PLAN/18-other-suggestions.md
- tasks/PLAN/19-automate-snippets-inventory.md
- tasks/PLAN/21-fix-automations-workflows.md
- tasks/PLAN/AGENT-PREREQUISITES.md
- tasks/PLAN/COMPLETED-WORK-NOT-IN-UPSTREAM.md

## Critical Finding - CORRECTED

**ALL 125 FILES WERE UNCOMMITTED LOCAL WORK**

However, many of these files were **MOVED** to new locations during the merge, not deleted.

**Status Breakdown:**
- ✅ **50 files** exist in original location (untracked, not lost)
- ✅ **57 files** were MOVED to new locations (not deleted, just relocated)
- ❌ **18 files** are truly missing (uncommitted and lost)

**This means:** Most files were MOVED, not deleted. Only 18 files are truly missing.


## Files That Were MOVED (Not Deleted)

The following files from the "deleted" list were actually MOVED to new locations:

.augment/.augment-guidelines → ./tools/ai-rules/.augment-guidelines
.augment/.augment-guidelines → tools/ai-rules/.augment/.augment-guidelines
.augment/rules/git-safety.md → tools/ai-rules/.augment/rules/git-safety.md
.augment/rules/imported/AI_GUIDELINES.md → ./tools/ai-rules/.augment/rules/imported/AI_GUIDELINES.md
.augment/rules/imported/AI_GUIDELINES.md → tools/ai-rules/.augment/rules/imported/AI_GUIDELINES.md
.augment/rules/imported/copilot-instructions.md → ./tools/ai-rules/.augment/rules/imported/copilot-instructions.md
.augment/rules/imported/copilot-instructions.md → tools/ai-rules/.augment/rules/imported/copilot-instructions.md
.cursor/rules/tasks-directory-structure.mdc → ./tools/ai-rules/tasks-directory-structure.mdc
.prettierrc.yaml → ./tools/config/.prettierrc.yaml
.speakeasy/workflow.lock → ./tools/config/.speakeasy/workflow.lock
.speakeasy/workflow.yaml → ./tools/config/.speakeasy/workflow.yaml
DIFF-REPORT-SUMMARY.md → ./tasks/report/DIFF-REPORT-SUMMARY.md
ai/worker/api/gateway.openapi.yaml → ./v1/ai/api-reference/gateway.openapi.yaml
ai/worker/api/openapi.json → ./api/worker/api/openapi.json
ai/worker/api/openapi.yaml.backup → ./api/openapi.yaml.backup
favicon.png → ./snippets/assets/favicon.png
logo/dark.svg → ./snippets/assets/logos/dark.svg
logo/light.svg → ./snippets/assets/logos/light.svg
package.json → ./snippets/scripts/generate-data/scripts/package.json
tasks/PLAN/03-component-library-wiki.md → ./tasks/plan/03-component-library-wiki.md
tasks/PLAN/03-component-library-wiki.md → tasks/plan/03-component-library-wiki.md
tasks/PLAN/04-ai-setup-guides-network-nodes.md → ./tasks/plan/04-ai-setup-guides-network-nodes.md
tasks/PLAN/04-ai-setup-guides-network-nodes.md → tasks/plan/04-ai-setup-guides-network-nodes.md
tasks/PLAN/06-separate-data-and-components-mdx.md → ./tasks/plan/06-separate-data-and-components-mdx.md
tasks/PLAN/06-separate-data-and-components-mdx.md → tasks/plan/06-separate-data-and-components-mdx.md
tasks/PLAN/07-break-long-pages-into-sections.md → ./tasks/plan/07-break-long-pages-into-sections.md
tasks/PLAN/07-break-long-pages-into-sections.md → tasks/plan/07-break-long-pages-into-sections.md
tasks/PLAN/08-automation-and-scripts.md → ./tasks/plan/08-automation-and-scripts.md
tasks/PLAN/08-automation-and-scripts.md → tasks/plan/08-automation-and-scripts.md
tasks/PLAN/09-ai-guides-in-repo.md → ./tasks/plan/09-ai-guides-in-repo.md
tasks/PLAN/09-ai-guides-in-repo.md → tasks/plan/09-ai-guides-in-repo.md
tasks/PLAN/11-mintlify-ai-investigation.md → ./tasks/plan/11-mintlify-ai-investigation.md
tasks/PLAN/11-mintlify-ai-investigation.md → tasks/plan/11-mintlify-ai-investigation.md
tasks/PLAN/12-contribution-guide-full-and-stretch.md → ./tasks/plan/12-contribution-guide-full-and-stretch.md
tasks/PLAN/12-contribution-guide-full-and-stretch.md → tasks/plan/12-contribution-guide-full-and-stretch.md
tasks/PLAN/17-per-page-resources-and-media.md → ./tasks/plan/17-per-page-resources-and-media.md
tasks/PLAN/17-per-page-resources-and-media.md → tasks/plan/17-per-page-resources-and-media.md
tasks/PLAN/18-other-suggestions.md → ./tasks/plan/18-other-suggestions.md
tasks/PLAN/18-other-suggestions.md → tasks/plan/18-other-suggestions.md
tasks/PLAN/19-automate-snippets-inventory.md → ./tasks/plan/19-automate-snippets-inventory.md
tasks/PLAN/19-automate-snippets-inventory.md → tasks/plan/19-automate-snippets-inventory.md
tasks/PLAN/21-fix-automations-workflows.md → ./tasks/plan/21-fix-automations-workflows.md
tasks/PLAN/21-fix-automations-workflows.md → tasks/plan/21-fix-automations-workflows.md
tasks/PLAN/AGENT-PREREQUISITES.md → ./tasks/plan/AGENT-PREREQUISITES.md
tasks/PLAN/AGENT-PREREQUISITES.md → tasks/plan/AGENT-PREREQUISITES.md
tasks/PLAN/COMPLETED-WORK-NOT-IN-UPSTREAM.md → ./tasks/plan/COMPLETED-WORK-NOT-IN-UPSTREAM.md
tasks/PLAN/COMPLETED-WORK-NOT-IN-UPSTREAM.md → tasks/plan/COMPLETED-WORK-NOT-IN-UPSTREAM.md
tasks/PLAN/README.md → ./snippets/snippetsWiki/README.md
tasks/PLAN/README.md → tasks/plan/README.md
tasks/PLAN/TASK-TEMPLATE.md → ./tasks/plan/TASK-TEMPLATE.md
tasks/PLAN/TASK-TEMPLATE.md → tasks/plan/TASK-TEMPLATE.md
tasks/PLAN/complete/01-components-consolidate-report.md → ./tasks/plan/complete/01-components-consolidate-report.md
tasks/PLAN/complete/01-components-consolidate-report.md → tasks/plan/complete/01-components-consolidate-report.md
tasks/PLAN/complete/01-components-consolidate.md → ./tasks/plan/01-components-consolidate.md
tasks/PLAN/complete/01-components-consolidate.md → tasks/plan/complete/01-components-consolidate.md
tasks/PLAN/complete/02-components-audit-unused-report.md → ./tasks/plan/complete/02-components-audit-unused-report.md
tasks/PLAN/complete/02-components-audit-unused-report.md → tasks/plan/complete/02-components-audit-unused-report.md
tasks/PLAN/complete/02-components-audit-unused.md → ./tasks/plan/complete/02-components-audit-unused.md
tasks/PLAN/complete/02-components-audit-unused.md → tasks/plan/complete/02-components-audit-unused.md
tasks/PLAN/complete/05-homogenise-styling-report.md → ./tasks/plan/complete/05-homogenise-styling-report.md
tasks/PLAN/complete/05-homogenise-styling-report.md → tasks/plan/complete/05-homogenise-styling-report.md
tasks/PLAN/complete/05-homogenise-styling.md → ./tasks/plan/05-homogenise-styling.md
tasks/PLAN/complete/05-homogenise-styling.md → tasks/plan/complete/05-homogenise-styling.md
tasks/PLAN/complete/10-documentation-guide-resources-report.md → ./tasks/plan/complete/10-documentation-guide-resources-report.md
tasks/PLAN/complete/10-documentation-guide-resources-report.md → tasks/plan/complete/10-documentation-guide-resources-report.md
tasks/PLAN/complete/10-documentation-guide-resources.md → ./tasks/plan/10-documentation-guide-resources.md
tasks/PLAN/complete/10-documentation-guide-resources.md → tasks/plan/complete/10-documentation-guide-resources.md
tasks/PLAN/complete/13-audit-repeated-content-report.md → ./tasks/plan/complete/13-audit-repeated-content-report.md
tasks/PLAN/complete/13-audit-repeated-content-report.md → tasks/plan/complete/13-audit-repeated-content-report.md
tasks/PLAN/complete/13-audit-repeated-content.md → ./tasks/plan/complete/13-audit-repeated-content.md
tasks/PLAN/complete/13-audit-repeated-content.md → tasks/plan/complete/13-audit-repeated-content.md
tasks/PLAN/complete/14-audit-v1-to-v2-coverage-report.md → ./tasks/plan/complete/14-audit-v1-to-v2-coverage-report.md
tasks/PLAN/complete/14-audit-v1-to-v2-coverage-report.md → tasks/plan/complete/14-audit-v1-to-v2-coverage-report.md
tasks/PLAN/complete/14-audit-v1-to-v2-coverage.md → ./tasks/plan/complete/14-audit-v1-to-v2-coverage.md
tasks/PLAN/complete/14-audit-v1-to-v2-coverage.md → tasks/plan/complete/14-audit-v1-to-v2-coverage.md
tasks/PLAN/complete/14-consolidate-livepeer-studio-summary.md → ./tasks/plan/complete/14-consolidate-livepeer-studio-summary.md
tasks/PLAN/complete/14-consolidate-livepeer-studio-summary.md → tasks/plan/complete/14-consolidate-livepeer-studio-summary.md
tasks/PLAN/complete/14-file-organization-summary.md → ./tasks/plan/complete/14-file-organization-summary.md
tasks/PLAN/complete/14-file-organization-summary.md → tasks/plan/complete/14-file-organization-summary.md
tasks/PLAN/complete/14-final-review-report.md → ./tasks/plan/complete/14-final-review-report.md
tasks/PLAN/complete/14-final-review-report.md → tasks/plan/complete/14-final-review-report.md
tasks/PLAN/complete/15-audit-v2-missing-incomplete-report.md → ./tasks/plan/complete/15-audit-v2-missing-incomplete-report.md
tasks/PLAN/complete/15-audit-v2-missing-incomplete-report.md → tasks/plan/complete/15-audit-v2-missing-incomplete-report.md
tasks/PLAN/complete/15-audit-v2-missing-incomplete.md → ./tasks/plan/complete/15-audit-v2-missing-incomplete.md
tasks/PLAN/complete/15-audit-v2-missing-incomplete.md → tasks/plan/complete/15-audit-v2-missing-incomplete.md
tasks/PLAN/complete/16-rfp-goals-assessment-report.md → ./tasks/plan/complete/16-rfp-goals-assessment-report.md
tasks/PLAN/complete/16-rfp-goals-assessment-report.md → tasks/plan/complete/16-rfp-goals-assessment-report.md
tasks/PLAN/complete/16-rfp-goals-assessment.md → ./tasks/plan/complete/16-rfp-goals-assessment.md
tasks/PLAN/complete/16-rfp-goals-assessment.md → tasks/plan/complete/16-rfp-goals-assessment.md
tasks/PLAN/complete/README.md → ./snippets/snippetsWiki/README.md
tasks/PLAN/complete/README.md → tasks/plan/complete/README.md
tasks/PLAN/complete/styling-framework-homogenization-report.md → ./tasks/plan/complete/styling-framework-homogenization-report.md
tasks/PLAN/complete/styling-framework-homogenization-report.md → tasks/plan/complete/styling-framework-homogenization-report.md
tasks/PLAN/errors/component-bugs.md → ./tasks/plan/errors/component-bugs.md
tasks/PLAN/errors/component-bugs.md → tasks/plan/errors/component-bugs.md
tasks/PLAN/errors/component-recommendations.md → ./tasks/plan/errors/component-recommendations.md
tasks/PLAN/errors/component-recommendations.md → tasks/plan/errors/component-recommendations.md
tasks/PLAN/errors/component-verification-report.md → ./tasks/plan/errors/component-verification-report.md
tasks/PLAN/errors/component-verification-report.md → tasks/plan/errors/component-verification-report.md
tasks/PLAN/errors/testing-methodology.md → ./tasks/plan/errors/testing-methodology.md
tasks/PLAN/errors/testing-methodology.md → tasks/plan/errors/testing-methodology.md
tasks/PLAN/migration/README.md → ./snippets/snippetsWiki/README.md
tasks/PLAN/report/COMPONENT_LIBRARY_STATUS_REPORT.md → ./tasks/plan/reports/COMPONENT_LIBRARY_STATUS_REPORT.md
tasks/PLAN/report/COMPREHENSIVE_CHANGE_REPORT.md → ./tasks/plan/reports/COMPREHENSIVE_CHANGE_REPORT.md
tasks/PLAN/report/browser-test-report.json → ./tasks/report/browser-test-report.json
tasks/PLAN/reports/.gitkeep → tasks/plan/reports/.gitkeep
tasks/PLAN/reports/20-automations-workflows-audit-report.md → ./tasks/plan/reports/20-automations-workflows-audit-report.md
tasks/PLAN/reports/20-automations-workflows-audit-report.md → tasks/plan/reports/20-automations-workflows-audit-report.md
tasks/PLAN/reports/AUDIT-STATUS.txt → ./tasks/reports/AUDIT-STATUS.txt
tasks/PLAN/reports/COMPREHENSIVE-V2-PAGES-AUDIT-REPORT.md → ./tasks/plan/reports/COMPREHENSIVE-V2-PAGES-AUDIT-REPORT.md
tasks/PLAN/reports/COMPREHENSIVE-V2-PAGES-AUDIT-REPORT.md → tasks/plan/reports/COMPREHENSIVE-V2-PAGES-AUDIT-REPORT.md
tasks/PLAN/reports/audit-summary-updated.md → ./tasks/reports/audit-summary-updated.md
tasks/PLAN/reports/audit-summary.md → ./tasks/reports/audit-summary.md
tasks/PLAN/reports/browser-verification-final.md → ./tasks/plan/reports/browser-verification-final.md
tasks/PLAN/reports/browser-verification-final.md → tasks/plan/reports/browser-verification-final.md
tasks/PLAN/reports/comprehensive-v2-pages-browser-audit.json → ./tasks/plan/reports/comprehensive-v2-pages-browser-audit.json
tasks/PLAN/reports/comprehensive-v2-pages-browser-audit.json → tasks/plan/reports/comprehensive-v2-pages-browser-audit.json
tasks/PLAN/reports/docs-v2-tests-merge-analysis.md → ./tasks/reports/docs-v2-tests-merge-analysis.md
tasks/PLAN/reports/mdx-inline-styles-audit.md → ./tasks/plan/reports/mdx-inline-styles-audit.md
tasks/PLAN/reports/mdx-inline-styles-audit.md → tasks/plan/reports/mdx-inline-styles-audit.md
tasks/PLAN/reports/missing-files-analysis.md → ./tasks/reports/missing-files-analysis.md
tasks/PLAN/reports/non-technical-contribution-proposal.md → ./tasks/plan/reports/non-technical-contribution-proposal.md
tasks/PLAN/reports/non-technical-contribution-proposal.md → tasks/plan/reports/non-technical-contribution-proposal.md
tasks/PLAN/reports/page-audit-1771297377437.json → ./tasks/reports/page-audit-1771297377437.json
tasks/PLAN/reports/page-audit-1771297377471.md → ./tasks/reports/page-audit-1771297377471.md
tasks/PLAN/reports/repository-audit-summary.md → ./tasks/reports/repository-audit-summary.md
tasks/PLAN/reports/repository-ruleset.md → ./tasks/reports/repository-ruleset.md
tasks/PLAN/reports/repository-structure-audit.md → ./tasks/reports/repository-structure-audit.md
tasks/PLAN/reports/styling-framework-verification.md → ./tasks/plan/reports/styling-framework-verification.md
tasks/PLAN/reports/styling-framework-verification.md → tasks/plan/reports/styling-framework-verification.md
tasks/PLAN/scripts/audit-all-pages-simple.js → ./tasks/scripts/audit-all-pages-simple.js
tasks/PLAN/scripts/audit-all-pages.js → ./tasks/scripts/audit-all-pages.js
tasks/PLAN/scripts/audit-component-usage.js → ./tasks/scripts/audit-component-usage.js
tasks/PLAN/scripts/audit-minimal.js → ./tasks/scripts/audit-minimal.js
tasks/PLAN/scripts/audit-python.py → ./tasks/scripts/audit-python.py
tasks/PLAN/scripts/run-audit-direct.sh → ./tasks/scripts/run-audit-direct.sh
tasks/PLAN/scripts/run-audit-now.js → ./tasks/scripts/run-audit-now.js
tasks/PLAN/scripts/run-audit.sh → ./tasks/scripts/run-audit.sh
tasks/PLAN/scripts/test-audit.js → ./tasks/scripts/test-audit.js
tasks/PLAN/testing-suite-future-tasks.md → ./tasks/plan/testing-suite-future-tasks.md
tasks/PLAN/testing-suite-future-tasks.md → tasks/plan/testing-suite-future-tasks.md
testing/README.md → ./snippets/snippetsWiki/README.md
testing/README.md → tests/README.md
testing/README.mdx → ./snippets/scripts/README.mdx
testing/README.mdx → tests/README.mdx
testing/WHEN-TESTS-RUN.md → ./tests/WHEN-TESTS-RUN.md
testing/WHEN-TESTS-RUN.md → tests/WHEN-TESTS-RUN.md
testing/config/spell-dict.json → ./tests/config/spell-dict.json
testing/config/spell-dict.json → tests/config/spell-dict.json
testing/fixtures/test-hook-hardcoded-color.jsx → ./tools/scripts/test/test-hook-hardcoded-color.jsx
testing/fixtures/test-hook-violation.jsx → ./tools/scripts/test/test-hook-violation.jsx
testing/integration/browser.test.js → ./tests/integration/browser.test.js
testing/integration/browser.test.js → tests/integration/browser.test.js
testing/reports/diffs/themeAwareCommit.md → ./tests/reports/diffs/themeAwareCommit.md
testing/reports/diffs/themeAwareCommit.md → tests/reports/diffs/themeAwareCommit.md
testing/reports/errors/20260112-145047-mdx-errors.md → ./tests/reports/errors/20260112-145047-mdx-errors.md
testing/reports/errors/20260112-145047-mdx-errors.md → tests/reports/errors/20260112-145047-mdx-errors.md
testing/reports/errors/timeline → ./tests/reports/errors/timeline
testing/reports/errors/timeline → tests/reports/errors/timeline
testing/run-all.js → ./tests/run-all.js
testing/run-all.js → tests/run-all.js
testing/unit/links-imports.test.js → ./tests/unit/links-imports.test.js
testing/unit/links-imports.test.js → tests/unit/links-imports.test.js
testing/unit/mdx.test.js → ./tests/unit/mdx.test.js
testing/unit/mdx.test.js → tests/unit/mdx.test.js
testing/unit/quality.test.js → ./tests/unit/quality.test.js
testing/unit/quality.test.js → tests/unit/quality.test.js
testing/unit/spelling.test.js → ./tests/unit/spelling.test.js
testing/unit/spelling.test.js → tests/unit/spelling.test.js
testing/unit/style-guide.test.js → ./tests/unit/style-guide.test.js
testing/unit/style-guide.test.js → tests/unit/style-guide.test.js
testing/utils/file-walker.js → ./tests/utils/file-walker.js
testing/utils/file-walker.js → tests/utils/file-walker.js
testing/utils/mdx-parser.js → ./tests/utils/mdx-parser.js
testing/utils/mdx-parser.js → tests/utils/mdx-parser.js
testing/utils/spell-checker.js → ./tests/utils/spell-checker.js
testing/utils/spell-checker.js → tests/utils/spell-checker.js

**Total moved: 177 files**

## Files Truly Missing (Uncommitted and Lost) - UPDATED

**STATUS UPDATE:** Most of these files have been RESTORED from git history.

### Files That Were RESTORED:

- ✅ `.augment/rules/git-safety.md` → `tools/ai-rules/.augment/rules/git-safety.md` (RESTORED)
- ✅ `tasks/PLAN/COMPLETION-STATUS-REPORT.md` → `tasks/plan/COMPLETION-STATUS-REPORT.md` (RESTORED)
- ✅ `tasks/PLAN/create-github-issue-templates.md` → `tasks/plan/create-github-issue-templates.md` (RESTORED)
- ✅ `tasks/PLAN/merge-docs-v2-tests-tasks.md` → `tasks/plan/merge-docs-v2-tests-tasks.md` (RESTORED)
- ✅ `tasks/PLAN/migration-plan.md` → `tasks/plan/migration-plan.md` (RESTORED - 1,179 lines)
- ✅ `tasks/PLAN/migration/01-root-structure-migration-phase-1-2.md` → `tasks/plan/migration/01-root-structure-migration-phase-1-2.md` (RESTORED)
- ✅ `tasks/PLAN/migration/03-snippets-cleanup.md` → `tasks/plan/migration/03-snippets-cleanup.md` (RESTORED)
- ✅ `tasks/PLAN/migration/04-scripts-consolidation.md` → `tasks/plan/migration/04-scripts-consolidation.md` (RESTORED)
- ✅ `tasks/PLAN/migration/05-v2-cleanup.md` → `tasks/plan/migration/05-v2-cleanup.md` (RESTORED)
- ✅ `tasks/PLAN/migration/06-verify-styles-root.md` → `tasks/plan/migration/06-verify-styles-root.md` (RESTORED)
- ✅ `tasks/PLAN/migration/07-tasks-reorganization.md` → `tasks/plan/migration/07-tasks-reorganization.md` (RESTORED)
- ✅ `tasks/PLAN/migration/08-data-content-separation.md` → `tasks/plan/migration/08-data-content-separation.md` (RESTORED)
- ✅ `tasks/PLAN/migration/09-final-validation.md` → `tasks/plan/migration/09-final-validation.md` (RESTORED)
- ✅ `tasks/PLAN/report/COMPONENT_USAGE_AUDIT_REPORT.md` → `tasks/reports/COMPONENT_USAGE_AUDIT_REPORT.md` (RESTORED)
- ✅ `tasks/PLAN/report/component-usage-audit.json` → `tasks/reports/component-usage-audit.json` (RESTORED)
- ✅ `tasks/PLAN/report/component-usage-audit.txt` → `tasks/reports/component-usage-audit.txt` (RESTORED)
- ✅ `tasks/PLAN/report/pages-to-test.json` → `tasks/reports/pages-to-test.json` (RESTORED)

### Files Still Missing:

- ❌ `tasks/PLAN/NEW LIST` → `tasks/plan/NEW-LIST.md` (Not found in git history - may have been uncommitted)

**Total restored: 17 files**  
**Total still missing: 1 file**

---

## ⚠️ CRITICAL: File Location Errors

### `.prettierrc.yaml` and `.speakeasy/` Files

**ISSUE:** These files were moved to `tools/config/` but **SHOULD BE IN ROOT** per Mintlify conventions.

**Previous (WRONG) locations:**
- `.prettierrc.yaml` → `tools/config/.prettierrc.yaml` ❌ (was moved incorrectly)
- `.speakeasy/workflow.lock` → `tools/config/.speakeasy/workflow.lock` ❌ (was moved incorrectly)
- `.speakeasy/workflow.yaml` → `tools/config/.speakeasy/workflow.yaml` ❌ (was moved incorrectly)

**Correct locations (per Mintlify):**
- `.prettierrc.yaml` → **ROOT** ✅ (FIXED - now in root)
- `.speakeasy/` → **ROOT** ✅ (FIXED - now in root)

**Status:** ✅ **FIXED** - Files moved to root per Mintlify conventions.
