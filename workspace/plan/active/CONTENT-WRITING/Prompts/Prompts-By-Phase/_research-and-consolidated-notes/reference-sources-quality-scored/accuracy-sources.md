# Accuracy Source Registry

**Sources**: `tools/config/accuracy-source-registry.json` + `tools/config/accuracy-source-weights.json`
**What these are**: Machine-readable registry of authoritative sources, weighted by information type. The human-readable equivalent is `veracity-sources.md` in this folder.
**Use in**: Phase 3 content pass review — when the review step verifies factual claims, it checks against sources in this registry.

---

## Files

| File | What it contains |
|---|---|
| `tools/config/accuracy-source-registry.json` | Registry of all approved sources, mapped to information type. Includes: URL, tier (primary/acceptable), staleness risk, what claim types it authorises. |
| `tools/config/accuracy-source-weights.json` | Weighting of source authority per information type. Used by the LLM evaluator to score content accuracy. |

---

## Relationship to veracity-sources.md

`veracity-sources.md` (in this folder) is the human-readable, curated version. The JSON files are the machine-enforceable version. When they conflict, verify against the current state of the live sources (Explorer, GitHub repos, docs.livepeer.org).

---

## Quick reminder: veracity tiers

- **primary** — must be consulted; use first
- **acceptable** — may support a claim; not sole source
- Avoid: secondary blogs, social posts, community wikis

For parameter values (unbonding period, active set size, reward cut): always verify on-chain via Explorer, not source code — constants can be overridden by governance.
