# Claim Ledger

Use one row per material claim family.

| Claim family | Risk | Source | Checked on | Outcome | Notes |
|---|---|---|---|---|---|
| Page says X | High | Official docs / repo / release note | YYYY-MM-DD | verified | wording fully supported |
| Page says Y | High | Issue / announcement | YYYY-MM-DD | time-sensitive | source supports narrower or volatile statement |
| Page says Z | High | conflicting pages / issue | YYYY-MM-DD | conflicted | contradictory active wording or evidence |
| Page says W | Medium | none found | YYYY-MM-DD | unverified | remove or follow up with owner |

## Risk Levels

- High: factual error would mislead setup, product choice, pricing, support, governance, or architecture decisions
- Medium: factual error would confuse orientation but not usually break execution
- Low: minor background or narrative detail

## Outcome Rules

- `verified`: wording is materially supported
- `conflicted`: active pages or sources disagree
- `time-sensitive`: claim depends on current conditions and should be treated as volatile
- `unverified`: cannot verify safely in the current pass
- `historical-only`: historical fact supported, current state unresolved

## Structured Ledger Contract

Reusable claim families belong in `tasks/research/claims/*.json`.

Minimum fields per record:

- `claim_id`
- `claim_family`
- `entity`
- `claim_summary`
- `canonical_owner`
- `source_type`
- `source_ref`
- `evidence_date`
- `freshness_class`
- `dependent_pages`
- `status`
