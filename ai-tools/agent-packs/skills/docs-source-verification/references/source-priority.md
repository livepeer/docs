# Source Priority

Use the highest-ranked source available for each claim.

## Preferred Order

1. Repository code, configs, tests, and generated artifacts when the claim is about repo behavior
2. Official product or docs pages
3. Official release notes, changelogs, and status pages
4. Upstream GitHub issues, PRs, discussions, and tags that directly define behavior
5. Official governance proposals, forum decisions, milestone reports, or foundation announcements
6. Historical repo lineage in `v1/**` when the claim is explicitly historical
7. Approved repo context lanes such as `_contextData/**`, `_plans-and-research/**`, `_workspace/research/**`, and `v2/x-archived/**` as supporting context only
8. DeepWiki and other secondary summaries only when primary evidence is unavailable and the output keeps them as corroboration

## Truth Modes

- `repo_behavior`
  - prefer active repo files, code, tests, and current docs
  - do not let open issues outrank current shipped behavior
- `implementation_status`
  - prefer releases and merged PRs, then issues, then forum or context
  - use issues as status evidence, not as a substitute for shipped behavior
- `support_status`
  - prefer official pages and current forum or milestone signals
  - GitHub can support status, but it should not silently outrank current public support surfaces
- `historical_lineage`
  - prefer `v1/**` and archived repo material ahead of context-only notes
  - keep historical evidence clearly separate from present-tense claims

## Acceptance Rules

- Keep a claim unchanged only when the source clearly supports the current wording.
- Rewrite conservatively when the source supports the concept but not the exact wording.
- Mark the claim as conflicted when active evidence disagrees and the current truth is not settled.
- Remove or downgrade the claim when available evidence contradicts it or no authoritative source can support it.
- Use exact dates for any claim tied to recency, launches, funding rounds, or current status.

## Evidence Minimum

Record:

- the claim
- the source used
- the date checked
- the outcome
- any confidence caveat
- whether GitHub or forum were checked when the claim family requires them
- whether the winning evidence was explicit or discovered
