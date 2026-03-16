---
name: docs-source-verification
version: "1.0"
description: Verify Livepeer Docs claims against ranked primary sources, record evidence, assess freshness risk, classify contradictions, and downgrade unsupported content before publication.
tier: 2
invoke_when:
  - "verify these docs claims"
  - "check whether this page is factually accurate"
  - "research authoritative sources for this docs content"
primary_paths:
  - "v2"
  - "docs-guide/policies/source-of-truth-policy.mdx"
  - "tools/scripts/docs-fact-registry.js"
  - "tools/scripts/docs-page-research.js"
  - "tasks/research/claims"
  - "tasks/reports"
primary_commands:
  - "node tools/scripts/docs-fact-registry.js --validate --registry tasks/research/claims"
  - "node tools/scripts/docs-page-research.js --page [path] --report-md /tmp/docs-page-research.md --report-json /tmp/docs-page-research.json"
---

SKILL: Docs Source Verification

Goal
Verify documentation claims against primary sources, preserve only supportable statements, and leave a clear evidence trail for unresolved facts.

Constraints
- Prefer official docs, code, release notes, GitHub issues or PRs, governance proposals, milestone posts, and public product pages over secondary summaries.
- Use absolute dates when verifying time-sensitive claims.
- Keep exact evidence notes for what was verified, rewritten conservatively, or removed.
- If a claim cannot be verified, do not preserve it in confident language.
- Distinguish current terminology from historical terminology when a concept or page name has changed.

Canonical docs-guide source
- `docs-guide/policies/source-of-truth-policy.mdx`
- `docs-guide/policies/quality-gates.mdx`

When to load references
- Load `references/source-priority.md` before researching so source ranking and acceptance rules stay consistent.
- Load `references/claim-ledger.md` while verifying claims so each statement gets an explicit verified, conflicted, time-sensitive, unverified, or historical-only outcome.

Workflow
1. Extract factual claims from the target page or diff, especially dated numbers, product behavior, workflows, support statements, and pricing or limit language.
2. Rank candidate sources using the source hierarchy, preferring primary sources first.
3. Verify each claim and record the result in the repo-native fact registry with source, date checked, and outcome.
4. When relevant, check GitHub and forum directly instead of relying on repo wording alone.
5. Rewrite unverifiable claims conservatively or remove them if the page would otherwise mislead readers.
6. Return the verified set, conflicted set, time-sensitive set, and unresolved set with exact follow-up needs.

Deliverable Format
- Claim-family ledger summarizing each material claim and its status.
- Recommended page edits with source-backed wording.
- Explicit unresolved list naming the missing owner, system, or source.
- Explicit note when a stale term or renamed concept is still present in active pages.

Failure Modes / Fallback
- If only secondary sources exist, keep the language clearly qualified and mark it for follow-up.
- If multiple primary sources conflict, prefer the most current authoritative source and note the conflict.
- If a current state cannot be verified but historical evidence exists, keep the historical fact and mark the current state unresolved.
- If the page contains too many weak claims to repair safely, recommend scope reduction instead of speculative rewriting.

Validation Checklist
- [ ] Every retained high-risk claim has a cited primary or clearly authoritative source.
- [ ] Time-sensitive statements were checked against a current source and rewritten with concrete dates when needed.
- [ ] Unsupported or contradictory claims were downgraded, removed, or logged as unresolved.
- [ ] The output includes a reusable evidence trail rather than only prose comments.
