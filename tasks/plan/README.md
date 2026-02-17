# Docs PLAN — Master index and parallel-agent execution

This folder contains agent briefs for finishing the Livepeer docs. **8 tasks completed**, **17 tasks remaining** (10 original + 7 from gap analysis). Each brief is a self-contained task. Run them with **parallel Cursor agents**: one agent per task, one branch per task, report + PR on completion.

**Gap analysis:** For a comparison of the full AI Task List vs PLAN and a plan for **missing or incomplete items** (imports script, UK spelling, glossary, References section, internal tab link, pre-commit full browser verification, platform ownership, etc.), see **[AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md](AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md)**.

---

## How to run (parallel agents)

1. **MANDATORY: Read Style Guide First** — Before starting any task, read:
   - `v2/pages/07_resources/documentation-guide/style-guide.mdx` - Production-grade styling guidelines and Mintlify gotchas
   - `v2/pages/07_resources/documentation-guide/component-library.mdx` - Component reference
   - **Critical:** Use CSS Custom Properties (`var(--accent)`) only. Never use `ThemeData` or hardcode colors.

2. **Pick one task** — Open the task file (e.g. [01-components-consolidate.md](01-components-consolidate.md)). Only one agent per task.
3. **Create the branch** — The agent creates it. From **`docs-v2-preview`** (the main branch in this fork), run: `git checkout docs-v2-preview && git pull && git checkout -b <branch>` with the branch from the table below (e.g. `git checkout -b docs-plan/01-components-consolidate`). Do not use a branch that another agent is using.
4. **Do the work** — Follow the task's Objective, Scope, and Deliverables in that brief. **Follow style guide rules.**
5. **Write the report** — In the same branch, create the report file under [reports/](reports/) (e.g. `reports/01-components-consolidate-report.md`). Include: **Work done**, **Testing**, **Limitations / follow-ups**.
6. **Open a PR** — Open a pull request from your branch **into `docs-v2-preview`**. In the PR description, link to this task brief and to the report (or paste a short summary).

**Parallelism:** Multiple agents can run at once (different tasks = different branches). Avoid running 01, 02, 03 in parallel (all touch components). Audits (13–16) and writing tasks (09–12, 18) are ideal for parallel runs.

---

## Task → branch → report

| # | Task brief | Branch | Report |
|---|------------|--------|--------|
| 03 | [03-component-library-wiki.md](03-component-library-wiki.md) | `docs-plan/03-component-library-wiki` | [reports/03-component-library-wiki-report.md](reports/03-component-library-wiki-report.md) |
| 04 | [04-ai-setup-guides-network-nodes.md](04-ai-setup-guides-network-nodes.md) | `docs-plan/04-ai-setup-guides-network-nodes` | [reports/04-ai-setup-guides-network-nodes-report.md](reports/04-ai-setup-guides-network-nodes-report.md) |
| 06 | [06-separate-data-and-components-mdx.md](06-separate-data-and-components-mdx.md) | `docs-plan/06-separate-data-and-components-mdx` | [reports/06-separate-data-and-components-mdx-report.md](reports/06-separate-data-and-components-mdx-report.md) |
| 07 | [07-break-long-pages-into-sections.md](07-break-long-pages-into-sections.md) | `docs-plan/07-break-long-pages-into-sections` | [reports/07-break-long-pages-into-sections-report.md](reports/07-break-long-pages-into-sections-report.md) |
| 08 | [08-automation-and-scripts.md](08-automation-and-scripts.md) | `docs-plan/08-automation-and-scripts` | [reports/08-automation-and-scripts-report.md](reports/08-automation-and-scripts-report.md) |
| 09 | [09-ai-guides-in-repo.md](09-ai-guides-in-repo.md) | `docs-plan/09-ai-guides-in-repo` | [reports/09-ai-guides-in-repo-report.md](reports/09-ai-guides-in-repo-report.md) |
| 11 | [11-mintlify-ai-investigation.md](11-mintlify-ai-investigation.md) | `docs-plan/11-mintlify-ai-investigation` | [reports/11-mintlify-ai-investigation-report.md](reports/11-mintlify-ai-investigation-report.md) |
| 12 | [12-contribution-guide-full-and-stretch.md](12-contribution-guide-full-and-stretch.md) | `docs-plan/12-contribution-guide-full-and-stretch` | [reports/12-contribution-guide-full-and-stretch-report.md](reports/12-contribution-guide-full-and-stretch-report.md) |
| 17 | [17-per-page-resources-and-media.md](17-per-page-resources-and-media.md) | `docs-plan/17-per-page-resources-and-media` | [reports/17-per-page-resources-and-media-report.md](reports/17-per-page-resources-and-media-report.md) |
| 18 | [18-other-suggestions.md](18-other-suggestions.md) | `docs-plan/18-other-suggestions` | [reports/18-other-suggestions-report.md](reports/18-other-suggestions-report.md) |
| 19 | [19-automate-snippets-inventory.md](19-automate-snippets-inventory.md) | `docs-plan/19-automate-snippets-inventory` | [reports/19-automate-snippets-inventory-report.md](reports/19-automate-snippets-inventory-report.md) |
| 21 | [21-fix-automations-workflows.md](21-fix-automations-workflows.md) | `docs-plan/21-fix-automations-workflows` | [reports/21-fix-automations-workflows-report.md](reports/21-fix-automations-workflows-report.md) |
| 19 | [19-automate-snippets-inventory.md](19-automate-snippets-inventory.md) | `docs-plan/19-automate-snippets-inventory` | [reports/19-automate-snippets-inventory-report.md](reports/19-automate-snippets-inventory-report.md) |
| 21 | [21-fix-automations-workflows.md](21-fix-automations-workflows.md) | `docs-plan/21-fix-automations-workflows` | [reports/21-fix-automations-workflows-report.md](reports/21-fix-automations-workflows-report.md) |

---

## Optional priority (for ordering when not all run in parallel)

- **P0 (audits / RFP):** ✅ 13, 14, 15, 16 — Completed
- **P1 (content & structure):** ✅ 01, 02, 10 — Completed | **Remaining:** 03, 12 — Component library and contribution guide
- **P2 (automation & polish):** ✅ 05 — Completed | **Remaining:** 06, 07, 08, 09, 11, 17, 18, 19, 21 — Styling, data separation, automation, AI, media, suggestions

---

## Completed

| # | Task brief | Branch | Report | Status |
|---|------------|--------|--------|--------|
| 01 | [01-components-consolidate.md](complete/01-components-consolidate.md) | `docs-plan/01-components-consolidate` | [complete/01-components-consolidate-report.md](complete/01-components-consolidate-report.md) | ✅ Complete |
| 02 | [02-components-audit-unused.md](complete/02-components-audit-unused.md) | `docs-plan/02-components-audit-unused` | [complete/02-components-audit-unused-report.md](complete/02-components-audit-unused-report.md) | ✅ Complete |
| 05 | [05-homogenise-styling.md](complete/05-homogenise-styling.md) | `docs-plan/05-homogenise-styling` | [complete/05-homogenise-styling-report.md](complete/05-homogenise-styling-report.md) | ✅ Complete |
| 10 | [10-documentation-guide-resources.md](complete/10-documentation-guide-resources.md) | `docs-plan/10-documentation-guide-resources` | [complete/10-documentation-guide-resources-report.md](complete/10-documentation-guide-resources-report.md) | ✅ Complete |
| 13 | [13-audit-repeated-content.md](complete/13-audit-repeated-content.md) | `docs-plan/13-audit-repeated-content` | [complete/13-audit-repeated-content-report.md](complete/13-audit-repeated-content-report.md) | ✅ Complete |
| 14 | [14-audit-v1-to-v2-coverage.md](complete/14-audit-v1-to-v2-coverage.md) | `docs-plan/14-audit-v1-to-v2-coverage` | [complete/14-audit-v1-to-v2-coverage-report.md](complete/14-audit-v1-to-v2-coverage-report.md) | ✅ Complete |
| 15 | [15-audit-v2-missing-incomplete.md](complete/15-audit-v2-missing-incomplete.md) | `docs-plan/15-audit-v2-missing-incomplete` | [complete/15-audit-v2-missing-incomplete-report.md](complete/15-audit-v2-missing-incomplete-report.md) | ✅ Complete |
| 16 | [16-rfp-goals-assessment.md](complete/16-rfp-goals-assessment.md) | `docs-plan/16-rfp-goals-assessment` | [complete/16-rfp-goals-assessment-report.md](complete/16-rfp-goals-assessment-report.md) | ✅ Complete |

**Note:** Task 14 includes additional supplementary reports in the `complete/` folder.

---

## New tasks (22–28, from gap analysis)

Task briefs created from [AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md](AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md). Run from `docs-v2-preview`; one branch per task, report + PR on completion.

| # | Task brief | Branch | Report |
|---|------------|--------|--------|
| 22 | [22-page-imports-check-script.md](22-page-imports-check-script.md) | `docs-plan/22-page-imports-check-script` | [reports/22-page-imports-check-script-report.md](reports/22-page-imports-check-script-report.md) |
| 23 | [23-glossary-maintenance.md](23-glossary-maintenance.md) | `docs-plan/23-glossary-maintenance` | [reports/23-glossary-maintenance-report.md](reports/23-glossary-maintenance-report.md) |
| 24 | [24-audit-repo-files-removal.md](24-audit-repo-files-removal.md) | `docs-plan/24-audit-repo-files-removal` | [reports/24-audit-repo-files-removal-report.md](reports/24-audit-repo-files-removal-report.md) |
| 25 | [25-fill-references-section.md](25-fill-references-section.md) | `docs-plan/25-fill-references-section` | [reports/25-fill-references-section-report.md](reports/25-fill-references-section-report.md) |
| 26 | [26-internal-tab-link.md](26-internal-tab-link.md) | `docs-plan/26-internal-tab-link` | [reports/26-internal-tab-link-report.md](reports/26-internal-tab-link-report.md) |
| 27 | [27-pre-commit-full-browser-verification.md](27-pre-commit-full-browser-verification.md) | `docs-plan/27-pre-commit-full-browser-verification` | [reports/27-pre-commit-full-browser-verification-report.md](reports/27-pre-commit-full-browser-verification-report.md) |
| 28 | [28-platform-ownership-and-studio-fill.md](28-platform-ownership-and-studio-fill.md) | `docs-plan/28-platform-ownership-and-studio-fill` | [reports/28-platform-ownership-and-studio-fill-report.md](reports/28-platform-ownership-and-studio-fill-report.md) |
