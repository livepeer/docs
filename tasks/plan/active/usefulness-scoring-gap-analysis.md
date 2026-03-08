# Usefulness Scoring Gap Analysis

## Primary Gaps Addressed By Cutover

1. Accuracy-verification coupling in audit pipeline
- Previous audit flow mixed verification behavior into usefulness execution.
- Cutover removes this dependency and runs usefulness as the primary concern.

2. Single-rubric scoring mismatch
- Previous scoring logic did not enforce purpose-specific expectations.
- Cutover moves to purpose-aware rubric by page type.

3. Audience metadata inconsistency
- Existing content includes mixed audience formats (scalar, list, CSV, synonyms).
- Cutover introduces canonical normalization and deterministic fallback.

4. Journey signal incompleteness
- Prior outputs lacked explicit persona-step completion/blocker reporting.
- Cutover adds journey checker with glob matching and next-step adjacency checks.

5. Agent/human score coupling
- Prior logic produced limited divergence.
- Cutover adds independent agent criteria focused on extractability and structure.

## Known Risks And Mitigations

- Risk: drift between rubric prompt keys and prompt modules.
  - Mitigation: startup config validator checks prompt-key parity.

- Risk: journey config accidentally reintroduces `v2/platforms/**`.
  - Mitigation: hard validation rejects any `v2/platforms/**` pattern.

- Risk: free-tier daily limits cause partial Tier 2 runs.
  - Mitigation: model rotation + per-day usage tracking + cache resume.

- Risk: deprecations silently ignored.
  - Mitigation: removed flags fail fast with migration message.

- Risk: baseline CSV path with space breaks shell logic.
  - Mitigation: safe `path.join` and explicit existence checks.

## Expected Outcome
- A single usefulness-focused audit entrypoint that is purpose-aware by default,
  reports quality independently, supports zero-cost LLM operation, and produces
  stable JSON/CSV outputs for downstream consumers.
