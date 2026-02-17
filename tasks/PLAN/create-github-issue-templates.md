# Task: Create GitHub Issue Templates

## Objective

Create GitHub issue templates for the livepeer/docs repository that automatically apply the `docs-v2` and `help wanted` labels as mentioned in the README.

## Current State

- **Issue templates DO NOT exist** in `.github/ISSUE_TEMPLATE/`
- README.md states: "THESE TEMPLATES ARE IN THE GITHUB AND WILL TAG as `DOCS-V2` `help-requested`"
- Governance documentation references templates but they don't exist locally
- Only `pull_request_template.md` exists in `.github/`

## Required Templates

Based on governance.mdx and README.md, create the following templates:

1. **Bug Report** (`bug_report.md`)
   - For broken links, incorrect information, formatting issues
   - Auto-label: `docs-v2`, `help wanted`, `type: bug`

2. **Feature Request** (`feature_request.md`)
   - For new content, improvements, enhancements
   - Auto-label: `docs-v2`, `help wanted`, `type: enhancement`

3. **Question** (`question.md`)
   - For clarifications, how-to questions
   - Auto-label: `docs-v2`, `help wanted`, `type: question`

4. **Documentation Request** (`documentation_request.md`) - Optional
   - For missing documentation, unclear explanations
   - Auto-label: `docs-v2`, `help wanted`, `type: documentation`

## Template Structure

Each template should:
- Use GitHub issue template YAML frontmatter
- Include `name`, `description`, `labels` fields
- Auto-apply `docs-v2` and `help wanted` labels
- Include relevant form fields for the issue type
- Reference the style guide and contribution guidelines

## Verification

After creating templates:
1. Verify templates appear in GitHub UI at `https://github.com/livepeer/docs/issues/new/choose`
2. Verify labels are automatically applied when using templates
3. Verify labels exist in the repository:
   - `docs-v2` (or `DOCS-V2` - check exact case)
   - `help wanted` (or `help-requested` - check exact label name)
   - Standard labels: `type: bug`, `type: enhancement`, `type: question`, `type: documentation`

## Labels to Verify

Check the actual labels in the GitHub repo:
- `docs-v2` / `DOCS-V2` (exact case)
- `help wanted` / `help-requested` / `help-wanted` (exact name)
- `priority: critical`, `priority: high`, `priority: medium`, `priority: low`
- `type: bug`, `type: enhancement`, `type: documentation`, `type: question`
- `area: ai`, `area: developers`, `area: orchestrators`, `area: gateways`, `area: about`, `area: resources`
- `status: needs-triage`, `status: in-progress`, `status: blocked`, `status: needs-info`
- `good first issue`

## Deliverables

- [ ] Create `.github/ISSUE_TEMPLATE/` directory
- [ ] Create `bug_report.md` template
- [ ] Create `feature_request.md` template
- [ ] Create `question.md` template
- [ ] Verify labels exist in GitHub repo
- [ ] Update README.md if label names differ from documentation
- [ ] Test templates in GitHub UI
- [ ] Document template usage in README.md

## References

- [GitHub Issue Templates Documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- README.md line 9: "THESE TEMPLATES ARE IN THE GITHUB AND WILL TAG as `DOCS-V2` `help-requested`"
- `v2/pages/09_internal/governance.mdx` - Issue template references
- `README.md` - GitHub Issues section

## Estimated Time

1-2 hours (including verification and testing)
