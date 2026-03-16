# Page Content Research Pilot: Orchestrator Incentives

## Scope

- Target page: `v2/orchestrators/concepts/rcs-incentives.mdx`
- Review mode: full propagation review

## Verified Claims

- Claim: orchestrators earn from two revenue streams, LPT protocol rewards and ETH service fees.
  - Outcome: kept
  - Source: current concept page, related setup/rewards docs, and the existing orchestrator concept cross-links in the repo
  - Checked on: 2026-03-15

- Claim: the incentives concept still owns the economics explanation in the current worktree even though planning material treats `incentive-model` as the intended renamed concept.
  - Outcome: kept
  - Source: `v2/orchestrators/concepts/rcs-incentives.mdx`, `v2/orchestrators/concepts/role.mdx`, `v2/orchestrators/index.mdx`, and IA/review notes
  - Checked on: 2026-03-15

## Findings

- Severity: high
  - File: `v2/orchestrators/concepts/rcs-incentives.mdx`
  - Issue: The repo has active rename drift around this concept. Planning material and review notes refer to `incentive-model`, but the current active concept page, index, and cross-links still use `rcs-incentives`.
  - User impact: Canonical ownership is unclear, which makes propagation and future IA cleanup error-prone.
  - Recommended fix: track this as a conflicted claim in the ledger and surface both the current canonical file and the intended renamed concept until a content migration is actually performed.

- Severity: high
  - File: `v2/orchestrators/concepts/role.mdx`
  - Issue: The role page hard-links to `/v2/orchestrators/concepts/rcs-incentives`, which proves the old concept name is still live in active cross-page navigation.
  - User impact: Any future rename would miss active dependents unless the propagation workflow explicitly tracks stale alias surfaces.
  - Recommended fix: keep role-linked dependents in the propagation queue and mark stale alias surfaces separately.

- Severity: medium
  - File: `v2/orchestrators/concepts/rcs-incentives.mdx`
  - Issue: The page carries strong economic statements, but the broader rename and ownership problem currently poses more risk than the economics prose itself.
  - User impact: Readers can still learn the economics model, but maintainers lack a stable concept contract.
  - Recommended fix: preserve the concept content, but treat rename/ownership normalization as the next structural fix.

## Propagation Queue

- File: `v2/orchestrators/concepts/role.mdx`
  - Dependency: active concept link to the incentives page
  - Action: verify only

- File: `v2/orchestrators/concepts/architecture.mdx`
  - Dependency: related concept card points readers to incentives/economics
  - Action: verify only

- File: `v2/orchestrators/index.mdx`
  - Dependency: generated concept index still exposes the active old concept name
  - Action: verify only

- File: `v2/orchestrators/concepts/incentive-model.mdx`
  - Dependency: intended renamed concept surface from planning material
  - Action: follow-up

## Unresolved Items

- Claim: whether `incentive-model` is only a planned rename or should already exist as the canonical page
  - Missing source or owner: current orchestrator IA decision record or completed migration branch
  - Safe interim wording or action: treat `rcs-incentives.mdx` as current canonical owner and `incentive-model` as intended rename target

- Claim: whether any additional active routes outside the visible concept pages still depend on the old concept name
  - Missing source or owner: broader route and nav audit beyond this pilot
  - Safe interim wording or action: rely on ledger-driven propagation queue until the rename is executed

## Validation

- Commands run: static repo review of concept pages, IA references, and active generated index
- Ledger updated: yes
- Follow-up needed: yes
