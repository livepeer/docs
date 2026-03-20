# Workflow Router

Use this router first when the request mentions page accuracy, validity, stale claims, source checking, or broad content review.

## Decision Table

| Situation | Load next | Why |
|---|---|---|
| Single page contains factual or dated claims | `docs-source-verification` | The first risk is truth, not style |
| User asks for a review of edited docs or a PR diff | `docs-change-review` | The task needs contradiction findings and a factual verdict |
| A verified or conflicted claim family appears in more than one page | `docs-impact-propagation` | The repo needs cross-page consistency, not a page-local fix |
| Accuracy, review, and downstream consistency are all in scope | Load all three in that order | Verification should happen before propagation and verdict |

## Default Sequence

1. Extract the target page or changed files.
2. Verify risky claims and gather source evidence.
3. Decide whether any claim family is verified, conflicted, or time-sensitive.
4. Propagate that claim family to dependent pages.
5. Review the resulting page or diff for factual contradictions and return a verdict.

## What Counts As Risky

- Product or protocol behavior
- Limits, pricing, support, availability, or status language
- Dates, roadmaps, release claims, deprecation claims
- Governance or funding process statements
- Architecture or workflow descriptions that may have drifted
- Any statement whose current truth depends on GitHub, forum, release, or current ecosystem signals
