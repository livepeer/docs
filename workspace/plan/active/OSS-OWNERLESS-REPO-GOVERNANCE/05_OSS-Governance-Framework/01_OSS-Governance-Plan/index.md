> **STATUS: PLANNING INPUT — NOT SOURCE OF TRUTH**
> This document was produced in a prior planning session. It contains proposals, decision flags, and recommendations that have not yet been formally reviewed or approved. Do not treat any section as a current repo policy. Superseded by: `gap-analysis.md` (current state) and `decisions/decision-log.md` (decisions).
> Last reviewed: 2026-03-27

<CustomDivider />

**LIVEPEER DOCS**

**OSS Governance Plan**

AI-First Proposal for Leadership Review

RFP #3071 — Deliverable (iv)

*Public Workflow for Maintenance & Community Contributions*

Prepared by: Wonderland (Alison Haire)

Repository: livepeer/docs (docs-v2 branch)

Date: March 2026

**CONTAINS 7 DECISION FLAGS FOR LEADERSHIP**

*Search for “DECISION REQUIRED” to find all items requiring sign-off*

# **1. Executive Summary**

This proposal addresses RFP #3071 Deliverable (iv): creating a sustainable, AI-first public workflow for maintaining the livepeer/docs repository and enabling community contributions. It is written for leadership review, with seven explicit decision flags requiring sign-off before implementation proceeds.

The core thesis is that OSS governance for a documentation repository in 2026 must be designed with AI agents as first-class participants, not afterthoughts. GitHub Copilot coding agent can now be assigned issues, produce draft pull requests autonomously, and self-review its output. Copilot code review can be configured to automatically review every PR via repository rulesets. These capabilities fundamentally change the economics of documentation maintenance: routine tasks (typo fixes, broken link repairs, frontmatter corrections, style enforcement) can be delegated to AI agents, freeing human maintainers for strategic content decisions.

This proposal covers: the current state of governance infrastructure already built in docs-v2, what remains to be formalised, a complete AI-first governance model, and a phased implementation plan with clear ownership.

## **1.1 What the RFP Requires**

Deliverable (iv) of the Livepeer Foundation Documentation Restructure RFP specifies:

- Work with the Livepeer Foundation’s Technical Director to establish a unified voice and style guide (tone, terminology, formatting, accessibility).
- Create contribution guidelines and PR workflow for community involvement.
- Define and hand over ownership and review process for maintaining quality.
- Integrate multilingual readiness and analytics tracking.
- Provide a clear ticketing system for reporting problems and patching fixes.

## **1.2 What Has Already Been Delivered**

The docs-v2 engagement has already delivered substantial governance infrastructure that exceeds the original RFP scope. This proposal builds on that foundation rather than starting from scratch.

| **Artefact** | **Status** | **Location** |
| --- | --- | --- |
| Style guide (voice, tone, formatting) | Complete | v2/resources/documentation-guide/style-guide.mdx |
| Contribution workflow and PR process | Complete | contribute/CONTRIBUTING/README.md; GIT-HOOKS.md; PR templates |
| CODEOWNERS-based review ownership | Complete | .github/CODEOWNERS |
| Governance model with SLAs | Complete | v2/internal/overview/governance.mdx |
| 8 issue templates with auto-labelling | Complete | .github/ISSUE_TEMPLATE/*.yml |
| Issue auto-label workflow | Complete | .github/workflows/issue-auto-label.yml |
| Discord-to-GitHub issue intake | Complete | .github/workflows/discord-issue-intake.yml |
| Rolling issue index | Complete | .github/workflows/docs-v2-issue-indexer.yml |
| AI agent guidance (AGENTS.md, .cursorrules) | Complete | .github/AGENTS.md; .cursorrules |
| Source-of-truth policy | Complete | docs-guide/source-of-truth-policy.md |
| 58-script test suite; 17 CI workflows | Complete | tools/scripts/; .github/workflows/ |
| Component library documentation | Complete | v2/resources/documentation-guide/component-library/ |

## **1.3 What This Proposal Adds**

Despite the strong foundation, several governance dimensions remain unformalised. This proposal addresses:

- Formalised label governance policy (the label set has drifted; 27 template-required labels are missing).
- Contributor ladder with measurable advancement criteria.
- Lifecycle management (stale issue detection and auto-close).
- AI agent governance policy covering Copilot coding agent, Copilot code review, Codex, Cursor, and Claude.
- Copilot-as-reviewer integration via GitHub repository rulesets.
- Agent-assignable issue classification for routing work to AI vs human contributors.
- Custom instruction files for Copilot code review tailored to this repo.

# **2. Background Research and References**

This section summarises the OSS governance frameworks, AI-agent tooling, and community patterns that inform the proposal. Full framework analysis is available in the companion OSS Governance Frameworks report.

## **2.1 OSS Governance Frameworks Evaluated**

### **Framework 1: Prefixed Label Taxonomy (Sane Labels Model)**

Originating from Dave Lunny’s 2016 article and refined through adoption by freeCodeCamp, Robin, and numerous mid-scale OSS repos. Every label belongs to a prefix group (type:, status:, priority:, area:, kind:). Labels are mutually exclusive within groups and share colour families for visual consistency. Directly automatable via GitHub Actions. Already partially implemented in livepeer/docs via issue-auto-label.yml.

### **Framework 2: GitHub Open Source Guides / Apache Meritocracy**

GitHub’s opensource.guide and the Apache Software Foundation’s model provide a holistic framework covering contributor roles, decision-making, and project lifecycle. Key artefacts: GOVERNANCE.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, CODEOWNERS. Three governance structures identified: BDFL, Meritocracy, and Liberal Contribution.

### **Framework 3: CNCF / Kubernetes SIG-Based Governance**

Kubernetes uses a fully automated, bot-managed label system (Prow) with 500+ labels. Labels are prefixed, machine-applied, and govern merge permissions. Key innovations: lifecycle labels (active, stale, frozen, rotten), SIG-based ownership encoding, and automated issue lifecycle management. Overkill for livepeer/docs at current scale, but lifecycle labels and the docs-SIG pattern are directly transferable.

### **Recommended Hybrid**

Adopt Framework 1 (prefixed taxonomy) + Framework 2 (governance artefacts and contributor lifecycle) + selective Framework 3 (lifecycle labels, docs-SIG ownership pattern). This maps to what livepeer/docs already has partially built.

### **References**

- Lunny, D. (2016). “Sane GitHub Labels”. Medium.
- GitHub (ongoing). “Leadership and Governance”. opensource.guide.
- Apache Software Foundation. “How the ASF Works”. apache.org.
- Kubernetes Community. “governance.md”. github.com/kubernetes/community.
- Linux Foundation (2023). “Recommended Practices for Hosting OSS Projects on GitHub”. Dr Ibrahim Haddad.
- Red Hat (2022). “A guide to open source project governance models”. redhat.com.

## **2.2 AI-First Governance: The 2026 Landscape**

Three GitHub platform capabilities have matured since the original RFP was written in September 2025. They fundamentally change the governance model for documentation repositories:

### **Copilot Coding Agent (GA, all paid plans)**

Assign a GitHub issue to @copilot and it autonomously analyses the repo, creates a branch, writes code, runs tests, self-reviews via Copilot code review, and opens a draft PR requesting human review. It operates in an isolated GitHub Actions environment and can only push to branches it creates (copilot/*). All PRs require human approval before CI/CD runs. Available to Copilot Pro, Pro+, Business, and Enterprise plans.

**Impact on docs governance: **Simple issues (typos, broken links, frontmatter fixes, style violations, label corrections) can be assigned directly to Copilot. The agent reads the issue, examines the repo, makes the fix, and opens a PR. Human review remains mandatory but the authoring load shifts to AI.

### **Copilot Code Review (GA, configurable via rulesets)**

Copilot can be configured as an automatic reviewer on all PRs via GitHub repository rulesets. It analyses the full project context, finds bugs, performance issues, and style violations, and suggests fixes. Custom instruction files (.github/instructions/*.instructions.md) allow repo-specific review criteria. The excludeAgent property controls which agents use which instructions.

**Impact on docs governance: **Every PR — human or AI-generated — gets an automatic first-pass review checking style guide compliance, frontmatter completeness, component usage, and link integrity before a human reviewer ever sees it.

### **Custom Instructions for Agents**

The .github/instructions/ directory supports repo-specific .instructions.md files with applyTo path globs and excludeAgent properties. These allow different instructions for code review vs coding agent, and path-specific rules (e.g. stricter checks for v2/developers/ than v2/internal/).

**Impact on docs governance: **The existing style guide, component immutability rules, UK English requirements, and frontmatter schema can all be encoded as machine-readable instructions that Copilot enforces automatically.

### **References**

- GitHub Docs. “About GitHub Copilot code review”. docs.github.com/en/copilot/concepts/agents/code-review.
- GitHub Docs. “Configuring automatic code review”. docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/configure-automatic-review.
- GitHub Blog (May 2025). “GitHub Copilot: Meet the new coding agent”.
- GitHub Blog (June 2025). “Assigning and completing issues with coding agent”.
- GitHub Changelog (Nov 2025). “Copilot code review and coding agent now support agent-specific instructions”.
- GitHub Blog (Feb 2026). “What’s new with GitHub Copilot coding agent” — model picker, self-review, built-in security scanning.

# **3. Current Contributing and Governance Infrastructure**

A detailed audit of the existing governance assets in livepeer/docs (docs-v2 branch).

## **3.1 Contributing Folder and Documentation**

The contribute/ directory contains:

- contribute/CONTRIBUTING/README.md — full contributor guide covering prerequisites, workflow (fork, branch, commit, PR), style requirements, and testing expectations.
- contribute/CONTRIBUTING/GIT-HOOKS.md — documents the pre-commit hook system that enforces style guide compliance (CSS custom properties, no inline styles, no Tailwind, absolute imports, UK English spelling, frontmatter validation).

The contribute-to-the-docs.mdx page provides a public-facing contributor guide at v2/resources/documentation-guide/contribute-to-the-docs.mdx with small/medium/large change workflows, recognition policy, and links to CODEOWNERS and style guide.

The guidelines.mdx page at v2/community/guides/guidelines.mdx covers values (openness, transparency, constructive disagreement, accountability), moderation escalation paths, and contribution principles (read before you build, keep PRs focused, conventional commits).

## **3.2 Governance Model**

v2/internal/overview/governance.mdx defines:

- Section ownership table mapping docs sections to GitHub teams and individuals (e.g. AI and Gateways owned by @rickstaa, Developers by @livepeer/studio-team and @DeveloperAlly).
- Review quality matrix with five dimensions (clarity, technical accuracy, completeness, UX and IA, style consistency) and must-fix vs optional classification.
- Issue SLAs: critical 24h response / 1 week resolution, high 48h / 2 weeks, medium 1 week / 1 month, low 2 weeks / as capacity.
- Label taxonomy with classification, priority, type, area, status, and kind prefix groups.
- Triage process: initial triage, assignment, work, review, merge.

## **3.3 Automation Layer**

The repository has 17 GitHub Actions workflows. The governance-critical workflows are:

- issue-auto-label.yml — parses issue form bodies by heading (### Area, ### Classification, ### Priority, ### Kind) and applies/removes managed label families. Supports backward compatibility with older issue schemas.
- discord-issue-intake.yml — creates GitHub issues from Discord intake payloads via repository_dispatch, validating schema, enforcing idempotency, and leaving dynamic labelling to the auto-label workflow.
- docs-v2-issue-indexer.yml — maintains a rolling top-level issue index with summary counts, breakdown tables, and issue tables. Runs on issue events and every 6 hours.
- Pre-commit hooks enforce style guide rules: CSS custom properties, UK English, frontmatter, component immutability.

## **3.4 AI Agent Infrastructure (Existing)**

Already in place:

- .github/AGENTS.md — AI assistant rules and safety guidance for coding assistants operating in the repo.
- .cursorrules — Cursor AI rules for the repository.
- ai-opened:codex label — tracks issues and PRs created by AI agents.
- llms.txt guidance — LLM discoverability entry point (tools/ai-rules/llms.txt.information.md).
- Agent-oriented quickstart pages — “Get AI to Set Up the Gateway” written for AI agent consumption.

## **3.5 Identified Gaps**

| **Gap** | **Impact** | **Severity** |
| --- | --- | --- |
| 27 template-required labels missing from repo | Templates reference labels that do not exist; auto-label workflow cannot apply them | High |
| No lifecycle management (stale/frozen/auto-close) | Issues sit indefinitely without triage; issue graveyard risk | Medium |
| No contributor ladder with measurable criteria | Community cannot see path from contributor to maintainer | Medium |
| No label governance policy | Labels created ad hoc; drift has already occurred (44 labels, many inconsistent) | Medium |
| No Copilot code review integration | Every PR requires full human review even for trivial changes | High |
| No agent-assignable issue classification | Cannot filter issues suitable for Copilot vs human | High |
| No custom instruction files for Copilot | Copilot reviews without repo-specific context (style guide, frontmatter, UK English) | Medium |

# **4. Proposed AI-First Governance Model**

This section presents the complete governance model, designed from the ground up with AI agents as first-class participants.

## **4.1 Principle: Agents Are Team Members**

In 2026, AI agents are not experimental add-ons. They are team members with defined roles, responsibilities, and constraints. The governance model treats them accordingly:

- Copilot coding agent is assigned issues from the backlog, just like a human contributor.
- Copilot code review is a mandatory first reviewer on every PR, just like a human reviewer.
- Human maintainers remain the final authority. AI agents cannot approve or merge their own PRs.
- All AI contributions are traceable: commits are co-authored, PRs are labelled, and agent session logs are accessible.
- Custom instructions encode the repo’s style guide, frontmatter requirements, and component rules so agents enforce standards automatically.

| **DECISION REQUIRED: Enable Copilot on livepeer/docs**Copilot coding agent and code review require an active Copilot plan (Business or Enterprise for org repos). The livepeer GitHub org must enable the Copilot policy for the docs repo, and enable the coding agent specifically via repository settings.*Options: Enable for docs repo only / Enable org-wide / Defer***Owner: Rich (Executive Director) / Rick (Technical Director)** |
| --- |

## **4.2 Copilot Code Review: Automatic First-Pass Reviewer**

Configure Copilot as an automatic reviewer on the docs-v2 branch via a GitHub repository ruleset. This means every PR opened against docs-v2 receives an AI review before a human reviewer is tagged.

### **Implementation**

1. Navigate to livepeer/docs > Settings > Rules > Rulesets.
1. Create a new branch ruleset targeting the docs-v2 branch.
1. Enable “Automatically request Copilot code review”.
1. Enable “Review new pushes” so Copilot re-reviews after force-pushes.
1. Enable “Review draft pull requests” to catch errors early.

### **Custom Instructions for Code Review**

Create .github/instructions/ directory with repo-specific review criteria:

- docs-style.instructions.md (applyTo: "v2/**/*.mdx") — enforce UK English, no em-dashes, frontmatter schema (title, sidebarTitle, description, keywords, og:image), Mintlify component usage, CSS custom properties only.
- components.instructions.md (applyTo: "snippets/components/**") — enforce component immutability rule: flag any modification to existing component files.
- general.instructions.md (applyTo: "**") — enforce kebab-case filenames, absolute imports from /snippets/, no inline styles.

| **DECISION REQUIRED: Copilot Review as Blocking or Advisory**Should Copilot code review be a required status check (blocking merge) or advisory only? Blocking ensures all PRs pass AI review but may slow merges if Copilot raises false positives. Advisory provides feedback without gating.*Options: Blocking (recommended for first 3 months, then reassess) / Advisory only / Start advisory, move to blocking***Owner: Rick (Technical Director)** |
| --- |

## **4.3 Copilot Coding Agent: AI as Contributor**

Assign suitable issues to @copilot for autonomous resolution. The agent creates a branch (copilot/*), implements the fix, self-reviews, and opens a draft PR.

### **Issue Classification for Agent Routing**

Not all issues are suitable for AI agents. Introduce a classification system:

| **Classification** | **Label** | **Description** | **Assigned to** |
| --- | --- | --- | --- |
| Agent-ready | agent-ready | Typo, broken link, frontmatter fix, style violation, one-page content edit with clear instructions | Copilot or human |
| Human-required | human-required | New section, multi-page restructure, SME-dependent content, strategic decisions, component creation | Human only |
| Agent-assisted | agent-assisted | First draft by agent, human review and refinement. Medium complexity with clear scope | Copilot drafts, human finishes |

The issue-auto-label.yml workflow can be extended to auto-apply agent-ready to issues that match specific criteria: size: XS or size: S combined with kind: broken-media-link, kind: factual-error, or kind: unclear-instructions.

| **DECISION REQUIRED: Agent Issue Assignment Policy**Who is authorised to assign issues to @copilot? Currently Alison is assigning simple issues to Copilot. Should this be limited to maintainers, or should any contributor be able to assign to Copilot?*Options: Maintainers only / Any contributor with triage access / Open to all***Owner: Rich / Rick** |
| --- |

## **4.4 Contributor Ladder**

Define a clear progression path in governance.mdx with measurable criteria:

| **Role** | **Criteria** | **Permissions** | **AI Agent Equivalent** |
| --- | --- | --- | --- |
| Contributor | 1+ merged PR | Can be assigned issues; acknowledged in changelog | Copilot coding agent (auto-assigned agent-ready issues) |
| Reviewer | 3+ merged PRs in a section; demonstrated style guide adherence | Can review PRs in their section; listed in CODEOWNERS | Copilot code review (automatic, all PRs) |
| Maintainer | 6+ months active; trusted across multiple sections; nominated by existing maintainer | Merge access; can label, triage, and assign to agents; can create labels per policy | N/A (human only) |
| Lead | Foundation-appointed; owns docs strategy | Admin access; can modify governance; final approval on structural changes | N/A (human only) |

| **DECISION REQUIRED: Contributor Ladder Approval**The proposed ladder defines four roles with specific criteria and permissions. Does leadership approve this structure, and should it be published immediately in governance.mdx?*Options: Approve as-is / Modify criteria / Defer until post-launch***Owner: Rich (Executive Director)** |
| --- |

## **4.5 Label Governance Policy**

The full label proposal (55 target labels, 17 removals, 28 creations) is detailed in the companion Label Proposal document. The governance policy to prevent future drift:

1. All labels must belong to a declared prefix group or the reserved community-standard/automation set.
1. New labels require a PR to governance documentation with: rationale, colour specification, workflow impact assessment.
1. Label renames and removals require a migration script that re-labels existing issues before the old label is deleted.
1. Quarterly hygiene review: check for zero-use labels, template-label sync, and colour consistency.
1. Automation labels (dependencies, javascript, python, ai-opened:*) are exempt from prefix rules but must be documented.

## **4.6 Lifecycle Management**

Adopt lifecycle labels from the CNCF model to prevent issue graveyards:

- lifecycle: stale — auto-applied after 90 days of inactivity. Bot posts a comment asking if the issue is still relevant.
- lifecycle: frozen — manually applied to park a valid issue blocked on an external dependency. Exempt from stale rules.
- Auto-close after 30 more days of stale status with no response. Closed with a polite message. Contributors can reopen.

Implementation: use the actions/stale GitHub Action configured to respect lifecycle: frozen as an exemption.

| **DECISION REQUIRED: Stale Issue Timing**The proposed timing is 90 days to stale, then 30 more days to auto-close. Some OSS projects use shorter windows (30/14 days). What timing is appropriate for livepeer/docs?*Options: 90/30 days (recommended) / 60/14 days / 30/14 days / Custom***Owner: Rick (Technical Director)** |
| --- |

## **4.7 AI Governance Policy**

A dedicated section in governance.mdx covering all AI agent interactions with the repository:

### **Agent Labels**

- Extend ai-opened:codex to a prefix group: ai-opened: copilot, ai-opened: codex, ai-opened: cursor, ai-opened: claude.
- Auto-apply via GitHub Actions when the PR author is @copilot or the issue body contains an agent marker.

### **Review Requirements**

- All AI-generated PRs require human approval before CI/CD workflows run (this is GitHub’s default for Copilot agent PRs).
- AI PRs cannot be self-approved: Copilot cannot approve or merge its own work.
- Copilot code review provides first-pass feedback but does not count as the human approval.

### **Quality Standards**

- AI-generated content must pass all pre-commit hooks (style guide, frontmatter, UK English, component rules).
- AI-generated MDX pages must be validated in headless browser before merge.
- AI contributions to technical content (gateway config, orchestrator setup, protocol details) require SME review regardless of agent label.

### **Transparency**

- All Copilot agent commits are co-authored with traceable session logs.
- The docs-v2-issue-indexer includes agent-opened issue counts in its rolling index.
- Quarterly reporting on agent contributions: volume, merge rate, review feedback density.

## **4.8 Custom Copilot Instructions (New Files)**

Create the following instruction files in .github/instructions/:

| **File** | **applyTo** | **Key Rules** |
| --- | --- | --- |
| docs-style.instructions.md | v2/**/*.mdx | UK English, no em-dashes, frontmatter schema, Mintlify globals, CSS custom properties only, semantic heading hierarchy |
| components.instructions.md | snippets/components/** | Component immutability: flag any modification. New components OK, changes to existing forbidden without explicit approval |
| data-files.instructions.md | snippets/data/** | Data file conventions, no hardcoded URLs, variable naming, export patterns |
| ci-workflows.instructions.md | .github/workflows/** | Workflow naming, secret handling, trigger documentation, label family consistency |
| general.instructions.md | ** | Kebab-case files, absolute imports, no inline styles, conventional commits |

| **DECISION REQUIRED: Custom Instruction Scope**Should custom instructions be created for code review only, coding agent only, or both? The excludeAgent property allows differentiation. Recommendation: create shared instructions used by both, with one code-review-only file for blocking-level review criteria.*Options: Both (recommended) / Code review only / Coding agent only***Owner: Rick (Technical Director)** |
| --- |

# **5. AI-First Load Reduction Map**

This section maps every governance process to its AI optimisation opportunity. The goal: reduce human maintainer load by 60–70% on routine tasks while maintaining 100% human authority on strategic decisions.

| **Governance Process** | **Current State** | **AI-First Optimisation** | **Human Role After** |
| --- | --- | --- | --- |
| Issue triage | Manual label application by maintainer | issue-auto-label.yml already parses forms; extend to auto-apply agent-ready label based on size + kind | Spot-check; override agent classification |
| Typo and link fixes | Human opens PR manually | Assign to @copilot; agent opens PR autonomously | Review and merge (30-second task) |
| Frontmatter validation | Pre-commit hook catches locally | Copilot code review flags missing/incorrect frontmatter on every PR automatically | No action unless override needed |
| Style guide enforcement | Pre-commit hook + human review | Copilot code review checks UK English, no em-dashes, CSS custom properties via custom instructions | Review only the edge cases Copilot flags |
| PR first-pass review | Human reviewer reads entire diff | Copilot reviews first; human reviews Copilot’s comments + remaining concerns | Focus on content accuracy, not formatting |
| Stale issue management | None (issues sit indefinitely) | actions/stale bot auto-labels and auto-closes | Freeze valid issues; reopen if needed |
| New contributor onboarding | Read CONTRIBUTING.md | Copilot code review provides inline guidance on first PR; good first issue label guides to agent-ready tasks | Welcome message; point to resources |
| Component usage validation | Human checks manually | components.instructions.md flags immutability violations and incorrect imports | Approve or reject flagged changes |
| SEO/AEO metadata | generate-seo.js run manually | Copilot coding agent assigned issues to run generator and open PR with updated metadata | Review generated metadata for accuracy |
| Label hygiene | Ad hoc | Quarterly automated audit script; Copilot coding agent assigned cleanup issues | Review audit results; approve removals |
| Changelog/release notes | Manual | Copilot generates draft release notes from merged PR descriptions | Edit for tone and accuracy |

# **6. Implementation Plan**

## **Phase 1: Foundation (Week 1)**

Zero-risk, immediate-value changes:

1. Create 27 missing template-required labels via gh CLI script.
1. Create .github/instructions/ directory with five custom instruction files.
1. Add lifecycle: stale and lifecycle: frozen labels.
1. Add size: XS, S, M, L labels.
1. Add agent-ready, human-required, agent-assisted labels.

## **Phase 2: Copilot Integration (Week 2)**

Requires leadership decision on Copilot enablement:

1. Enable Copilot coding agent on livepeer/docs repository.
1. Create branch ruleset for automatic Copilot code review on docs-v2.
1. Test with 3–5 agent-ready issues assigned to @copilot.
1. Validate custom instructions produce useful review feedback.
1. Iterate on instruction files based on review quality.

## **Phase 3: Policy and Documentation (Week 3)**

1. Update governance.mdx with: label governance policy, contributor ladder, AI agent governance section, lifecycle management rules.
1. Update CONTRIBUTING/README.md with: agent-ready issue workflow, how to assign issues to Copilot, expectations for AI-generated PRs.
1. Consolidate duplicate labels (Docs:v2 into docs-v2, type: content into type: documentation).
1. Remove legacy labels (need:* prefix, verbose status labels).
1. Deploy actions/stale workflow with 90/30 day configuration.

## **Phase 4: Handover and Validation (Week 4)**

1. Run full label audit: verify all 55 target labels exist, all templates reference valid labels, zero orphan labels.
1. Document Copilot integration in docs-guide/ for future maintainers.
1. Produce first quarterly agent contribution report.
1. Knowledge transfer session with Rick and Foundation team.

| **DECISION REQUIRED: Timeline and Resourcing**This 4-week plan assumes Alison executes Phases 1, 3, and 4 independently, with Phase 2 requiring Rick or a Foundation admin to enable Copilot settings. Is this timeline acceptable, and who will own the Copilot enablement step?*Options: Approve timeline / Compress to 2 weeks / Extend to 6 weeks***Owner: Rich / Rick** |
| --- |

# **7. Decision Summary**

All seven decisions requiring leadership sign-off, collected for convenience:

| **#** | **Decision** | **Options** | **Owner** | **Recommendation** |
| --- | --- | --- | --- | --- |
| D1 | Enable Copilot on livepeer/docs | Docs repo only / Org-wide / Defer | Rich / Rick | Docs repo only |
| D2 | Copilot review: blocking or advisory | Blocking / Advisory / Start advisory then blocking | Rick | Blocking for 3 months, then reassess |
| D3 | Agent issue assignment policy | Maintainers only / Triage access / Open to all | Rich / Rick | Maintainers only (expand later) |
| D4 | Contributor ladder approval | Approve / Modify / Defer | Rich | Approve and publish |
| D5 | Stale issue timing | 90/30 / 60/14 / 30/14 / Custom | Rick | 90/30 days |
| D6 | Custom instruction scope | Both / Review only / Agent only | Rick | Both agents |
| D7 | Timeline and resourcing | 4 weeks / 2 weeks / 6 weeks | Rich / Rick | 4 weeks |

## **Next Steps**

1. Leadership reviews this proposal and provides decisions on D1–D7.
1. Alison begins Phase 1 (label creation, instruction files) immediately — no decisions required.
1. Upon D1 approval, Alison coordinates with Rick for Phase 2 (Copilot enablement).
1. Governance documentation updates (Phase 3) incorporate all approved decisions.
1. Final handover (Phase 4) includes validated governance system and knowledge transfer.

*End of proposal.*