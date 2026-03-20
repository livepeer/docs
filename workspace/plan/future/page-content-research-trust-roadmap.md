# Page Content Research Trust Roadmap

## Goal

Build a real page research and fact-check workflow for this repo:

- extract material claims from docs pages and diffs
- verify those claims against ranked current evidence
- detect contradictions across active pages
- classify claims by confidence and freshness risk
- propagate factual review work to all dependent pages

This roadmap assumes facts live in git in a repo-native claim registry until a heavier storage layer is justified.

## Phase 1 - Experimental Manual Research

### Intent

Ship a manual-first research runner that is already useful for real page review, while staying explicit that the system is experimental and advisory.

### Capabilities

- Codex skill family rewritten around factual research rather than link or route hygiene
- Repo-native claim registries split by domain under `tasks/research/claims/`
- Deterministic registry validator
- Manual page research runner that produces:
  - Claims Reviewed
  - Verified Claims
  - Conflicted Claims
  - Time-Sensitive Claims
  - Unverified / Historical Claims
  - Cross-Page Contradictions
  - Propagation Queue
  - Evidence Sources
- Evidence adapters for:
  - repo files
  - official pages
  - GitHub repos/issues/PRs/releases
  - forum topics
  - repo-available Discord/community signals

### Success Criteria

- The runner primarily reports factual and contradiction issues, not structural lint.
- Real page reviews produce verified, conflicted, time-sensitive, and propagation outputs.
- GitHub and forum are actually queried when the claim family requires them.
- At least one real contradiction is found across active pages and backed by evidence.
- Reviewers can act from the report without rediscovering the evidence trail manually.
- The false-positive rate is acceptable for manual use.

## Phase 2 - PR-Time Advisory Integration

### Intent

Turn the proven manual research runner into an optional advisory artifact during local/manual PR preparation.

### Capabilities

- changed-file to claim-family mapping
- non-blocking advisory artifact generation during PR prep
- stable report contract reused from Phase 1
- optional pluggable live Discord/community adapter if repo-available signals are insufficient

### Success Criteria

- PR prep produces useful research artifacts for changed factual pages.
- Failures or missing evidence never block PR preparation.
- Reviewers use the artifact because it adds signal, not noise.
- Discord/community expansion improves evidence without changing report semantics.

## Phase 3 - Scheduled Volatility Scans

### Intent

Proactively revisit volatile or periodic-review claim families without waiting for a manual review request.

### Capabilities

- scheduled research runs for `volatile` and `review-periodic` families
- dated report artifacts
- stale-registry and unresolved-conflict surfacing
- no automatic doc edits

### Success Criteria

- Scheduled scans catch stale factual claims before human review does.
- Noise remains low enough that the reports are not ignored.
- Registry freshness improves over time.

## Phase 4 - Measurement And Trust Hardening

### Intent

Measure whether the system deserves stronger trust rather than assuming it.

### Capabilities

- false-positive and false-negative tracking
- saved pilot outcome notes
- claim-family narrowing or removal when a family proves noisy
- canonical-owner stabilization based on actual review outcomes

### Success Criteria

- Useful warnings materially outnumber noisy ones.
- Known noisy families are corrected, narrowed, or removed.
- Repeated runs on the same clusters are stable and predictable.

## Phase 5 - Selective Trusted Automation

### Intent

Enable stronger PR-time behavior only for claim families that have earned it.

### Capabilities

- confidence tiers by claim family
- stronger PR-time review behavior for high-confidence slices only
- advisory-only behavior retained for lower-confidence slices
- manual override paths remain available

### Success Criteria

- Trusted slices have low noise and clear ownership.
- Reviewers can explain why a slice is trusted.
- Stronger enforcement reduces missed factual drift without adding brittle review churn.

## Phase 6 - Full Trust Target

### Intent

Make the research system a primary factual review and propagation substrate across the repo.

### Capabilities

- broad claim-family coverage across concepts, guides, setup, references, glossary, FAQ, and comparison pages
- mature changed-file to claim-family resolution
- live evidence adapters where justified
- stable claim-led propagation semantics across domains

### Success Criteria

- Reviewers consistently rely on the system.
- False positives are low enough that outputs are not ignored.
- False negatives are uncommon for tracked families.
- Claim-led propagation is materially better than page-by-page review alone.
- Trust is earned by repeated measured performance, not by assertion.

## Guardrails

- Experimental phases must stay explicitly labeled as advisory.
- Missing evidence must remain visible.
- Missing coverage must be treated as a gap, not as silent success.
- Navigation or route issues belong here only when they change factual ownership or contradiction behavior.

## Current Position

The branch is in Phase 1.

What is already true:

- a fact-centric runner exists
- registry validation exists
- GitHub/forum/repo evidence adapters exist
- real orchestrator and gateway pilot reports exist

What still blocks Phase 2:

- broader claim-family coverage
- better contradiction precision on more clusters
- clearer registry maintenance workflow for approving persistence after a research run
