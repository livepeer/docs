# Docs Guide Structure — Decision Log

> Locked decisions for the `docs-guide/` redesign approved 2026-05-04.
> Format: ID | Decision | Scope | Decided by | Date | Status | Unblocks | Supersedes
> All decisions D-DG-01 through D-DG-13 are locked unless explicitly superseded.

<CustomDivider />

## Decisions

| ID | Decision | Scope | Decided by | Date | Status | Unblocks | Supersedes |
|---|---|---|---|---|---|---|---|
| D-DG-01 | Authority tier model is the canonical precedence rule for docs-guide. T0 decisions beat T1 policies beat T2 frameworks beat T3 standards beat T4 contributing. T5 reference is never normative. Encoded in mandatory `authority:` frontmatter field. | docs-guide/ | Alison Haire | 2026-05-04 | locked | All conflict-resolution between governance docs; D-DG-07 contract validator | — |
| D-DG-02 | Top-level structure collapses to 8 folders: `standards/`, `frameworks/`, `policies/`, `decisions/`, `contributing/`, `reference/`, `catalog/`, `_workspace/`. No other top-level folders permitted. | docs-guide/ | Alison Haire | 2026-05-04 | locked | All folder migrations (D-DG-03..05); docs-guide-structure-policy.mdx update | — |
| D-DG-03 | `features/`, `tooling/`, `repo-ops/`, `docs-library/` merge into a single `reference/` folder with sub-namespaces. All four are descriptive look-up surfaces, not normative. | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 3 migrations | — |
| D-DG-04 | `canonical/` folder is retired. `canonical/collation-data/Mintlify/` (3 active files) moves to `reference/external/mintlify/`. `canonical/frontmatter.md` (48-byte stub) is deleted; canonical frontmatter spec stays at `standards/frontmatter.mdx`. `canonical/**/dep-files/**` moves to `_workspace/archive/dep-files/`. | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 3 migrations | — |
| D-DG-05 | `config/*.json` (5 registry/schema files) moves out of `docs-guide/` to `operations/governance/config/`. These are script-consumed registries, not human-readable documentation. A pointer page lives at `reference/repo-ops/config-registries.mdx`. | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 3 migrations; surfaces JSON schema work | — |
| D-DG-06 | `docs-guide/index.mdx` is the single landing page. `docs-guide/source-of-truth-guide.mdx` and `docs-guide/policies/governance-index.mdx` merge into it. Mintlify redirects map both old paths to the new index. | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 1 entry build; `docs.json` update | — |
| D-DG-07 | Mandatory frontmatter for every file in `docs-guide/` (excluding `_workspace/` and `catalog/`): `authority`, `consumer`, `maintenance`, `status`, `lastVerified`, `owner`. Conditional fields per authority tier. Enforced by `check-docs-guide-contract.js`. | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 2 contract validator; all subsequent migrations | — |
| D-DG-08 | Duplicate authority files retire: `docs-guide/policies/script-governance.mdx` (subject duplicate of `frameworks/script-framework.mdx`) and `docs-guide/frameworks/component-governance.mdx` (subject duplicate of `frameworks/component-framework-canonical.mdx`). All incoming references to component-governance.mdx propagate via `/propagate` skill before deletion (live ref count to be measured at execution time). | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 3 deletion + redirects | — |
| D-DG-09 | Suffix discipline: framework files use `-framework.mdx`; policy files use `-policy.mdx`. Renames: `frameworks/ai-tools-governance.mdx` → `frameworks/ai-tools-framework.mdx`; `policies/agent-governance-framework.mdx` → `policies/agent-governance-policy.mdx`. | docs-guide/ | Alison Haire | 2026-05-04 | locked | Phase 3 renames; naming-conventions.mdx update | — |
| D-DG-10 | Per-surface freshness thresholds replace the single `STALE_DAYS = 90` constant in `lint-structure.js`. Thresholds live in `operations/governance/config/ownerless-governance-surfaces.json` under a new `freshness_thresholds` block per surface (soft / hard, in days). | governance pipelines | Alison Haire | 2026-05-04 | locked | Phase 6 freshness implementation; surfaces JSON extension | — |
| D-DG-11 | Root `AGENTS.md` is the single normative agent file. Adapter files (`.claude/CLAUDE.md`, `.github/AGENTS.md`, `.cursor/rules/`, `.windsurf/rules/`, `.augment/rules/`) become pointer-only delegates. Length caps: 25 lines for IDE adapters, 200 lines for Codex isolation, 350 lines for Claude project identity. Parity enforced by `check-adapter-parity.js`. | agent governance | Alison Haire | 2026-05-04 | locked | Phase 9 adapter parity; PR enforcement layer | — |
| D-DG-12 | Pull request template includes a `## Required Reading` section auto-populated by `check-canonical-citation.js` from changed-path globs in `operations/governance/config/required-citations.json`. Merge blocks until the contributor ticks the listed framework. | PR governance | Alison Haire | 2026-05-04 | locked | Phase 9 PR enforcement | — |
| D-DG-13 | `_workspace/02_Design-Specification/` (22 files, verified 2026-05-04) moves to `workspace/plan/archive/2026-Q1-design-spec/`. `_workspace/03_Component-Governance-Framework/` (12 files, verified 2026-05-04) moves to `workspace/plan/active/COMPONENT-GOVERNANCE/legacy/`. Only `_workspace/drafts/` and `_workspace/archive/` (TTL-governed) remain inside `docs-guide/`. | docs-guide/_workspace/ | Alison Haire | 2026-05-04 | locked | Phase 3 migrations; workspace-lifecycle-policy.mdx | — |

<CustomDivider />

## Rationale

The 14-folder layout grew organically and produced overlapping authority (frameworks vs policies for the same subject), stub duplicates (`canonical/frontmatter.md` 48 bytes vs `standards/frontmatter.mdx` 109 lines), and a 40-file internal `_workspace/` leaking into the published surface. Twelve files in `docs-guide/` outside `_workspace/` lacked frontmatter (verified 2026-05-04: includes `GOVERNANCE.md` before this redesign rewrote it, `docs-glossary.md`, four templates under `tooling/`, three under `decisions/` before the contract lands, `frameworks/page-taxonomy-framework.mdx`, `canonical/frontmatter.md`, and `canonical/collation-data/Mintlify/` mirror files). Sixteen files had `lastVerified` more than 30 days stale (verified 2026-05-04). Before this redesign, the `decisions/` folder held one minimal file (`registry.md`) with no generator, validator, or remediator — the single biggest ownerless gap.

Authority tiers solve the conflict-resolution question (who wins when a framework and a policy disagree). The 8-folder collapse removes overlap. The mandatory frontmatter contract makes every file machine-auditable. Per-surface freshness thresholds replace a single 90-day constant that was both too lax for derived data and too strict for locked decisions.

The adapter-parity model fixes drift between root `AGENTS.md` and the IDE-specific rule files. PR-level Required Reading converts canonical truth from advisory to enforced.

<CustomDivider />

## Reversal Criteria

Any decision reverses only with an explicit superseding decision in this same registry plus a `/propagate` pass clearing the path-level effects. Mid-flight redirects, `consumers:` blocks on policies, and `authority:` frontmatter are not optional features once landed; reverting them requires a follow-up redesign sized at least as carefully as the original.

<CustomDivider />

## Affects

- `docs-guide/policies/docs-guide-structure-policy.mdx` (rewritten Phase 0)
- `docs-guide/standards/frontmatter.mdx` (extended in Phase 2 with `authority` field)
- `docs-guide/standards/naming-conventions.mdx` (extended in Phase 2 with suffix discipline)
- `operations/governance/config/ownerless-governance-surfaces.json` (extended in Phase 6)
- `operations/scripts/validators/content/structure/lint-structure.js` (extended in Phase 6)
- `.github/pull_request_template.md` (extended in Phase 9)
- `docs.json` (restructured Phase 1 + Phase 3)
- All 26 `GOVERNANCE.md` markers (rewritten Phase 7 to YAML-front spec)

<CustomDivider />

## Related

- Approved plan: `~/.claude/plans/hmm-so-there-needs-tender-valley.md` (2026-05-04)
- Master decision index: `docs-guide/decisions/registry.md`
- Glossary boundary decision: `docs-guide/decisions/glossary-boundary.md`
- Predecessor plan: `workspace/plan/active/DOCUMENTATION/plan.md` (Phases 1–2 retained; Phases 3–5 superseded by this plan)
