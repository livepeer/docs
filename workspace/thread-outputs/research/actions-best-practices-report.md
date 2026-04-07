# GitHub Actions Best Practices Research — report1

> Thread: GitHub Actions Governance
> Generated: 2026-03-30
> Purpose: Establish best-practice baseline before designing governance framework
> Sources: Web research + GitHub official docs + prior repo audit findings

---

## 1. Naming Conventions

### Workflow files
- **kebab-case `.yml`** is the de facto standard. GitHub's own starter-workflows repo uses it exclusively.
- Examples: `ci.yml`, `deploy-staging.yml`, `codeql-analysis.yml`, `update-contract-addresses.yml`
- Avoid: underscores (`sync_ghes.yml`), spaces, mixed case
- **Source:** [GitHub starter-workflows #1497](https://github.com/actions/starter-workflows/issues/1497), [GitHub community discussion #39547](https://github.com/orgs/community/discussions/39547)

### Workflow `name:` field
- Should be human-readable, distinct from filename
- Used in GitHub UI status badges, PR checks, and step summaries
- Pattern: `[Verb] [Object]` — e.g., "Update Contract Addresses", "Check Component Governance"

### Step names
- Every step should have a `name:` for log readability and failure identification
- Pattern: imperative verb — "Checkout repository", "Install dependencies", "Run audit"
- **Source:** [GitHub Actions Style Guide](https://www.agentrulegen.com/options/github-actions/style_guide/gha-conventions)

### Input/output naming
- kebab-case preferred but not strictly enforced (even GitHub's own actions mix styles)
- Be consistent within a workflow
- **Source:** [actionlint issue #450](https://github.com/rhysd/actionlint/issues/450)

---

## 2. Trigger Hygiene

### Principle: narrowest scope possible
- Use path filters to avoid unnecessary runs: `on: push: paths: ['v2/**/*.mdx']`
- Use branch filters to target only relevant branches
- Use `concurrency` groups with `cancel-in-progress: true` for PR workflows to avoid queue buildup

### Trigger type taxonomy (for governance mapping)
| Trigger | Use case | Governance tier |
|---------|----------|-----------------|
| `pull_request` | Validation gates | P2 (required) or P3 (advisory) |
| `push` to main/deploy branch | Post-merge automation | P4 (post-merge) |
| `schedule` (cron) | Data freshness, monitoring | P5 (scheduled) |
| `schedule` + auto-fix | Self-healing pipelines | P6 (self-heal) |
| `workflow_dispatch` | Manual operations | Manual |
| `repository_dispatch` | External event triggers | Event-driven |

### Anti-patterns
- Triggering on all pushes without path filters (wastes minutes)
- Scheduled workflows without failure notification (silent breakage)
- No `concurrency` on PR workflows (queue buildup, stale results)

---

## 3. Reusable Workflows vs Composite Actions

### When to use each
| Feature | Reusable workflow | Composite action |
|---------|-------------------|-----------------|
| Scope | Entire workflow (multi-job) | Single step within a job |
| Invocation | `uses: ./.github/workflows/x.yml` | `uses: ./.github/actions/x` |
| Isolation | Separate job runner | Inline in caller's job |
| Nesting limit | 10 levels, 50 total | 10 levels |
| Best for | Pipeline templates | Shared task templates |

### Best practice: separation of concerns
- **Reusable workflows** = pipeline templates (orchestration logic)
- **Composite actions** = shared task templates (repeated step sequences)
- Don't put job orchestration logic in composite actions
- Don't inline repeated step sequences in multiple workflows

### Enterprise pattern: centralised library
- Dedicated repo or directory for shared workflows/actions
- Version-pinned references (`@v1`, not `@main`)
- **Source:** [GitHub Well-Architected — Scaling Actions Reusability](https://wellarchitected.github.com/library/collaboration/recommendations/scaling-actions-reusability/)

---

## 4. Secret Management

### Least privilege
- Set default token permission to `read` at repo level
- Escalate per-job: `permissions: contents: write` only where needed
- Never grant `write-all` at workflow level

### OIDC over long-lived secrets
- Use OpenID Connect for cloud provider authentication (AWS, GCP, Azure)
- Short-lived tokens, auto-rotated, no stored credentials
- **Source:** [GitHub OIDC docs](https://docs.github.com/en/actions/reference/security/secure-use)

### Environment protection
- Use environment-level secrets for deployment-sensitive credentials
- Require reviewers for production environments
- Rotate secrets on 30–90 day cadence

### Recent incident context
- March 2025: `tj-actions/changed-files` compromised, exposing secrets from 23,000+ repos
- Mitigation: pin third-party actions by SHA, not tag
- **Source:** [Wiz — GitHub Actions Security Guide](https://www.wiz.io/blog/github-actions-security-guide)

---

## 5. Self-Documenting Patterns

### YAML header comments
Standard YAML comments (`#`) at the top of workflow files can serve as machine-readable metadata:
```yaml
# @workflow     update-contract-addresses
# @type         automation
# @concern      content
# @description  Fetches contract addresses from Etherscan/Arbiscan APIs
# @pipeline     P5: cron weekly → fetch-contract-addresses.js → contractAddressesData.jsx
# @scripts      .github/scripts/fetch-contract-addresses.js
# @error        summary + issue
```

### Generated catalogs
- Parse YAML headers or workflow structure to auto-generate catalog pages
- Pattern: generator script reads `.github/workflows/*.yml` → produces catalog MDX
- This repo already does this for scripts (`generate-script-registry.js`) and pages (`generate-docs-guide-indexes.js`)
- **Source:** [GitHub Actions Auto-Docs](https://github.com/marketplace/actions/github-actions-auto-docs)

### Step summaries (`$GITHUB_STEP_SUMMARY`)
- Write Markdown to `$GITHUB_STEP_SUMMARY` for human-readable run reports
- Available in the Actions UI without reading logs
- Use for: audit results, validation reports, data freshness summaries, error details
- **Source:** [GitHub Docs — Workflow commands](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows)

### Agentic workflow documentation (2025+)
- GitHub's Agentic Workflows (`gh aw`) compile `.md` descriptions into executable `.yml`
- Dual structure: Markdown description + YAML workflow
- Emerging pattern — not yet mature for governance adoption but worth monitoring
- **Source:** [The New Stack — GitHub Agentic Workflows](https://thenewstack.io/github-agentic-workflows-overview/)

---

## 6. Error Reporting Patterns

### Tier 1: Summary-only (advisory)
- Write to `$GITHUB_STEP_SUMMARY` with failure details
- No external side effects
- Use for: advisory checks, non-blocking validation

### Tier 2: Issue creation (monitoring)
- On failure, create or update a GitHub issue with:
  - Label: `automation-failure` (or similar)
  - Body: error message, step summary, link to action run
  - Template: `.github/action-issue-template.md`
- Use for: scheduled monitoring, data freshness alerts

### Tier 3: Self-remediation (auto-fix)
- Detect drift → auto-fix → create PR
- Fallback: if fix fails, create issue (Tier 2)
- Patterns:
  - Clean workspace on ENOSPC
  - Retry with legacy peer deps on npm conflicts
  - Re-generate catalogs on staleness detection
- **Source:** [SmartScope — GitHub Actions Self-Healing Workflows](https://smartscope.blog/en/ai-development/github-actions-self-healing-workflows-2025/)

### Error handling mechanics
- `continue-on-error: true` for non-blocking steps
- `if: failure()` for cleanup/notification steps
- `if: always()` for mandatory reporting regardless of outcome
- **Source:** [Ken Muse — Handle Step and Job Errors](https://www.kenmuse.com/blog/how-to-handle-step-and-job-errors-in-github-actions/)

---

## 7. Mermaid Diagrams in Mintlify

### Confirmed: native support
Mintlify renders Mermaid diagrams from standard fenced code blocks:
````
```mermaid
graph LR
  A[Cron trigger] --> B[Workflow]
  B --> C[Script]
  C --> D[Data file]
  D --> E[MDX page]
```
````

### Supported diagram types
- Flowcharts (`graph LR/TD`)
- Sequence diagrams
- Gantt charts
- State diagrams
- All standard Mermaid types

### ELK layout for complex diagrams
For large/complex diagrams, Mintlify supports the ELK layout engine:
```
%%{init: {'flowchart': {'defaultRenderer': 'elk'}}}%%
```
Reduces overlapping and improves readability.

### Interactive features
- Zoom and pan controls appear automatically when diagram height > 120px
- Zoom in/out buttons, directional pan, reset view

### Recommendation for this project
- Use `graph LR` for per-workflow pipeline maps (trigger → workflow → script → data → page)
- Use `graph TD` with ELK for the system-wide dependency overview
- **Source:** [Mintlify — Mermaid Diagrams](https://www.mintlify.com/docs/components/mermaid-diagrams)

---

## 8. YAML Linting with actionlint

### What it checks
- Syntax errors in workflow YAML
- Invalid inputs/outputs
- Missing step descriptions
- Expression validation (`${{ }}`)
- Shell script validation
- Action version pinning

### Integration pattern
- Run as pre-commit hook or PR check
- Can be added as a GitHub Actions workflow itself
- **Source:** [actionlint — GitHub](https://github.com/rhysd/actionlint)

### Recommendation
Add `actionlint` to the CI pipeline as a P3 (PR check, non-blocking initially). Promote to P2 after all existing workflows pass.

---

## 9. GitHub Actions 2026 Security Roadmap

### Key features coming
- **Secure-by-default:** workflow execution rules, policy insights, evaluate mode
- **Organisation-wide rulesets:** consistent policies via repository custom properties
- **Evaluate mode:** rules surfaced but not enforced, allowing impact assessment before activation
- This aligns well with our soft-gate → hard-gate promotion pattern
- **Source:** [GitHub Blog — Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)

---

## 10. Recommendations for This Repo

### Immediate (align with existing patterns)
1. **Adopt YAML header standard** — 11 tags analogous to script JSDoc, parseable by generator
2. **Kebab-case enforcement** — all workflow files already follow this; codify it
3. **Step naming requirement** — every step must have a `name:` field
4. **Path filter hygiene** — audit all push triggers for overly broad scoping

### Short-term (new governance layer)
5. **Generate/verify pairs** — every generator workflow should have a corresponding check workflow
6. **Error reporting tiers** — implement the 3-tier pattern (summary → issue → self-remediation)
7. **actionlint PR check** — add as P3, promote to P2 after baseline passes
8. **Catalog auto-generation** — extend `generate-docs-guide-indexes.js` or create parallel generator for action pages

### Medium-term (framework maturity)
9. **Composite actions for shared patterns** — extract repeated checkout+setup+commit patterns
10. **Secret audit** — verify least-privilege permissions across all workflows
11. **Third-party action pinning** — pin all external actions by SHA after tj-actions incident
12. **Concurrency groups** — add to all PR-triggered workflows

### Long-term (enterprise readiness)
13. **OIDC adoption** — replace long-lived API keys where cloud providers support it
14. **Organisation rulesets** — adopt GitHub's 2026 workflow execution rules when available
15. **Agentic workflow monitoring** — track GitHub's `gh aw` for future documentation-as-code patterns

---

## Sources

- [GitHub Blog — Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [GitHub Well-Architected — Scaling Actions Reusability](https://wellarchitected.github.com/library/collaboration/recommendations/scaling-actions-reusability/)
- [GitHub Docs — Reusing Workflow Configurations](https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations)
- [GitHub Docs — Secure Use Reference](https://docs.github.com/en/actions/reference/security/secure-use)
- [Mintlify — Mermaid Diagrams](https://www.mintlify.com/docs/components/mermaid-diagrams)
- [GitHub Actions Auto-Docs](https://github.com/marketplace/actions/github-actions-auto-docs)
- [SmartScope — Self-Healing Workflows](https://smartscope.blog/en/ai-development/github-actions-self-healing-workflows-2025/)
- [Ken Muse — Handle Step and Job Errors](https://www.kenmuse.com/blog/how-to-handle-step-and-job-errors-in-github-actions/)
- [Wiz — GitHub Actions Security Guide](https://www.wiz.io/blog/github-actions-security-guide)
- [The New Stack — GitHub Agentic Workflows](https://thenewstack.io/github-agentic-workflows-overview/)
- [actionlint](https://github.com/rhysd/actionlint)
- [GitHub community — Naming conventions](https://github.com/orgs/community/discussions/39547)
- [GitHub starter-workflows — kebab-case](https://github.com/actions/starter-workflows/issues/1497)
- [Prior repo audit — SCRIPT WORKFLOW AUDIT (2026-03-23)](workspace/plan/active/SCRIPT%20WORKFLOW%20AUDIT/)
