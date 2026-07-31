# Glossary Boundary — Decision Log

> Locked boundary between public and internal glossaries.
> Format: ID | Decision | Scope | Decided by | Date | Status | Unblocks | Supersedes

<CustomDivider />

## Decisions

| ID | Decision | Scope | Decided by | Date | Status | Unblocks | Supersedes |
|---|---|---|---|---|---|---|---|
| D-GLOS-01 | Single canonical glossary corpus at `operations/scripts/generators/content/data/glossary-terms.json` is the source of truth for both public (`v2/resources/glossary.mdx`) and internal (`docs-guide/reference/internal-glossary.mdx`) glossaries. Each term carries `audience: [public, internal]`, `lifecycle: proposed \| approved \| published \| retired`, `definitions: { public, internal }`, `tabs`, `lastVerified`, `owners`, `aliases`. The existing `generate-glossary.js` extends to emit both audience views. A new `check-glossary-overlap.js` validator enforces the boundary. | terminology | Alison Haire | 2026-05-04 | locked | Phase 5 glossary unification; TERMINOLOGY-COLLATE workspace closure | — |

<CustomDivider />

## Boundary Rules

| Term type | Lives in | Examples |
|---|---|---|
| Protocol terms | Public glossary (`audience: [public, internal]`) | Orchestrator, Gateway, Treasury, Active set |
| Video / AI / web3 terms | Public glossary | Transcoding, Manifest, Realtime AI, On-chain |
| Component taxonomy | Internal glossary (`audience: [internal]`) | elements, wrappers, displays |
| Script taxonomy | Internal glossary | validator, remediator, dispatch |
| Governance terminology | Internal glossary | Canonical source, Source of truth, Authority tier |
| Pipeline stages | Internal glossary | P0..P6, gate, rolling issue |
| Tab-scoped resource terms | `v2/{tab}/resources/glossary.mdx` (auto-fanned from corpus) | Section-local |

A term marked `audience: [public, internal]` MUST have both `definitions.public` and `definitions.internal` populated; the public definition explains the concept to a reader, the internal definition explains it to a contributor or agent in repo terms.

A term marked `audience: [internal]` only is invisible to the public glossary build.

The validator (`check-glossary-overlap.js`) flags:

1. Terms in both audiences with conflicting definitions (must reconcile or version)
2. Public-glossary references in `v2/**` to terms that have `lifecycle: proposed` or are missing from the corpus
3. Aliases that collide with primary terms across the corpus
4. Terms in `workspace/plan/active/TERMINOLOGY-COLLATE/` not flagged `lifecycle: proposed` in the corpus within 30 days of first appearance (auto-archive otherwise)

<CustomDivider />

## Lifecycle

```
proposed → approved → published → retired
```

- **proposed:** authored in TERMINOLOGY-COLLATE workspace; not emitted by generators
- **approved:** signed off; emitted to internal glossary
- **published:** emitted to both public and internal glossaries
- **retired:** removed from emission; entry kept in corpus with `supersedes` pointer if applicable

Only `approved` and `published` terms emit. The TERMINOLOGY-COLLATE workspace becomes a one-way staging area: when a term flips to `approved`, its workspace file deletes and the audit-glossary-gaps script closes the gap.

<CustomDivider />

## Rationale

Verified 2026-05-04. Three glossary surfaces exist today: `docs-guide/docs-glossary.md` (8,614 bytes internal; last commit 2026-04-07; carries no frontmatter at all, just an H1 title and an in-content metadata table), `v2/resources/glossary.mdx` (355,961 bytes public; mtime 2026-05-04), and per-tab `v2/{tab}/resources/glossary.mdx` files. The corpus at `operations/scripts/generators/content/data/glossary-terms.json` is 4,035,097 bytes (mtime 2026-04-15). `workspace/plan/active/TERMINOLOGY-COLLATE/` holds 34 work-in-progress files (verified 2026-05-04).

The internal glossary lacks frontmatter entirely (no `lastVerified`, no `audience`, no `lifecycle` signal). The public glossary regenerates from a separate path. Workspace files have no documented exit path to either glossary.

A single corpus with audience filtering is the only pattern that prevents future drift. One generator, two outputs, one validator. Lifecycle codifies the path from work-in-progress to published.

<CustomDivider />

## Reversal Criteria

Splitting the corpus back into separate sources requires a new decision plus a migration plan that handles the per-tab fan-out and the cross-link validator. Reversion is technically possible but would be a regression.

<CustomDivider />

## Affects

- `operations/scripts/generators/content/reference/generate-glossary.js` (extended Phase 5 to emit internal output)
- `operations/scripts/generators/content/data/glossary-terms.json` (schema extended Phase 5 with audience, lifecycle, definitions, owners)
- `docs-guide/docs-glossary.md` (deleted Phase 5; replaced by `docs-guide/reference/internal-glossary.mdx`)
- `operations/scripts/validators/content/veracity/check-glossary-overlap.js` (created Phase 5)
- `workspace/plan/active/TERMINOLOGY-COLLATE/` (lifecycle gate added Phase 5)
- `operations/governance/config/ownerless-governance-surfaces.json` (new `glossary-corpus` surface entry Phase 5)

<CustomDivider />

## Related

- Master decision index: `docs-guide/decisions/registry.md`
- Structure decision log: `docs-guide/decisions/docs-guide-structure.md`
- Approved plan: `~/.claude/plans/hmm-so-there-needs-tender-valley.md`
