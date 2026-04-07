> **STATUS: PLANNING INPUT — NOT SOURCE OF TRUTH**
> Concrete governance recommendations from a prior planning session. Not reviewed or approved. Superseded by: `gap-analysis.md`.
> Last reviewed: 2026-03-27

---

## **title: 'Repo Management Proposal' sidebarTitle: 'Repo Proposal' description: 'Concrete governance recommendations for the livepeer/docs repository, covering label policy, contributor ladder, lifecycle management, and AI agent governance.' keywords: ["livepeer", "internal", "governance", "repo management", "proposal", "contributor ladder", "lifecycle", "labels", "open source"] og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"**

import { CustomDivider } from '/snippets/components/primitives/divider.jsx' import { DisplayCard } from '/snippets/components/display/customCards.jsx' import { BorderedBox } from '/snippets/components/primitives/containers.jsx' import { GotoCard } from '/snippets/components/primitives/links.jsx' import { FlexContainer } from '/snippets/components/primitives/layout.jsx'

This page translates the[ OSS framework analysis](https://www.docstomarkdown.pro/convert-markdown-to-google-docs-online/oss-governance-frameworks) into concrete recommendations for the `livepeer/docs` repository (`docs-v2` branch). It builds on the existing governance infrastructure - which is already advanced - and identifies gaps and improvements.

## **Current State Assessment**

### **What Already Exists (Strong Foundation)**

The `livepeer/docs` repo already has a governance infrastructure that exceeds most open source documentation projects:

### **8 GitHub issue templates with auto-labelling (01_bug_report through feature_internal) CODEOWNERS file mapping review ownership by directory path governance.mdx with ownership model, SLAs, ticketing, and triage process issue-auto-label.yml workflow parsing issue form bodies and applying managed label families discord-issue-intake.yml creating GitHub issues from community Discord reports docs-v2-issue-indexer.yml maintaining a rolling issue index Full pathway: CONTRIBUTING/README.md, GIT-HOOKS.md, PR templates 58-script test suite and 17 CI workflows enforcing quality gates Gaps and Issues Identified**

## **44 labels exist but 27 required labels are missing. Duplicate scoping labels (`Docs:v2` vs `docs-v2`). Legacy `need:` and `status:` labels overlap. Templates reference labels that do not exist in the repo (`type: documentation`, `type: question`, `scope: page`, `docs-review`). No stale/rotten/auto-close mechanism. Issues can sit indefinitely without triage. There is no automated reminder system for issues that have gone cold. Maintainers cannot filter by scope of work for sprint planning. There is no way to distinguish a one-line typo fix from a multi-page content creation effort. The governance doc defines roles but no explicit path from first-time contributor to maintainer. The criteria for advancing between roles are not documented. No documented process for creating, renaming, or retiring labels. Changes happen ad hoc. There is no quarterly review cadence. AI agents (Codex, Cursor, Claude) are creating issues and PRs but the governance model does not explicitly address AI contributions, review requirements, or labelling conventions for machine-generated content. Proposed Governance Enhancements**

### **A. Label Governance Policy**

Add a `LABELS.md` or equivalent section to `governance.mdx`:

### **All labels must belong to a declared prefix group or be in the reserved community-standard set. New labels require a PR to governance documentation with rationale, colour specification, and workflow impact assessment. Label renames and removals require a migration script that re-labels existing issues before the old label is deleted. Check for zero-use labels and template-label sync. Remove or archive labels with no items and no template reference. Automation labels (`dependencies`, `javascript`, `python`, `ai-opened:codex`) are exempt from prefix rules but must be documented. B. Contributor Ladder**

Define a clear progression path in `CONTRIBUTING.md` or `governance.mdx`:

| **Role Criteria Permissions** |
| --- |

| **Contributor** | **Has merged at least one PR** | **Can be assigned issues. Acknowledged in changelog** |
| --- | --- | --- |
| Reviewer | 3+ merged PRs in a section. Demonstrated style guide adherence | Can review PRs in their section. Listed in CODEOWNERS |
| Maintainer | 6+ months active. Trusted across multiple sections. Nominated by existing maintainer | Merge access. Can label and triage. Can create labels per policy |
| Lead | Appointed by Foundation. Owns overall docs strategy | Admin access. Can modify governance. Final approval on structural changes |

### **The contributor ladder should be documented publicly in `governance.mdx` with clear, measurable criteria. This prevents the community perception that maintainership is an informal, closed process. C. Lifecycle Management**

Adopt lifecycle labels from the CNCF model (selective):

### **`lifecycle: stale` is auto-applied after 90 days of inactivity. A bot posts a comment asking whether the issue is still relevant and pings the assignee. `lifecycle: frozen` is manually applied to park an issue that is valid but blocked on an external dependency. Frozen issues are exempt from stale rules. After 30 more days of stale status with no response, the issue is auto-closed with a polite message and labelled `wontfix`. Contributors can reopen if the issue resurfaces. Use the `actions/stale` GitHub Action or a lightweight custom workflow. Configure it to respect the `lifecycle: frozen` label as an exemption. D. Milestone and Sprint Integration**

### **Use GitHub Milestones to group issues into time-bound releases or documentation sprints. Each milestone should have a target date and a brief description of its scope. Add `size:` labels (XS, S, M, L) so maintainers can plan sprints by cumulative effort. A sprint might target "4 x size: S + 1 x size: M" rather than simply "5 issues". The `docs-v2-issue-indexer` workflow can be extended to include milestone breakdowns and size distribution in its rolling index. E. AI Agent Governance**

Given that AI agents (Codex, Cursor, Claude) are actively creating issues and PRs in the repository:

## **AI-generated contributions require explicit governance to prevent quality degradation and maintain community trust. The `ai-opened:codex` label should be extended to a prefix group: `ai-opened: codex`, `ai-opened: cursor`, `ai-opened: claude`. This enables filtering and reporting on AI contributions separately. AI-generated issues must pass the same template validation as human issues. No exemptions from the `issue-auto-label.yml` workflow. AI-generated PRs should be auto-labelled and require human review regardless of CI pass. No merge-on-green for AI PRs. `AGENTS.md` and `.cursorrules` already exist. Add a section to `governance.mdx` covering AI contribution policy, including expectations for AI-generated content quality and review SLAs. Implementation Priority**

**Phase 1 (Immediate)** - Fix the 27 missing labels so templates and workflows function correctly. Zero risk, zero breaking changes.

**Phase 2 (Week 1)** - Consolidate duplicate labels, rename legacy labels, update `governance.mdx` with label policy.

**Phase 3 (Week 2)** - Add lifecycle and size labels. Set up the stale bot. Document the contributor ladder.

**Phase 4 (Week 3)** - Sync all templates and workflows with the new label set. Add AI governance section.

Framework analysis and references Full target label set with create/keep/remove actions