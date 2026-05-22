# Live Label Inventory — livepeer/docs
**Fetched:** 2026-03-27
**Source:** `gh label list --repo livepeer/docs --json name,color,description --limit 100`
**Status:** Phase 1 output — NOT source of truth

---

## Live Labels (49 total)

| Name | Color | Group | Action |
|---|---|---|---|
| `type: bug` | #b60205 | type: | KEEP |
| `type: content` | #d4c5f9 | type: | RENAME → `type: documentation` (25 items to re-label) |
| `type: enhancement` | #a2eeef | type: | KEEP |
| `type: feature` | #d93f0b | type: | DELETE — merge into `type: enhancement` (3 items to re-label first) |
| `status: backlog` | #0e8a16 | status: | KEEP |
| `status: core contributors working on it` | #0e8a16 | status: | DELETE — replace with `status: in-progress` + assignee (1 item) |
| `status: needs-triage` | #f9d0c4 | status: | KEEP |
| `status: needs-routing` | #f9d0c4 | status: | REVIEW — not in planning doc target; see notes |
| `priority: high` | #d93f0b | priority: | KEEP |
| `classification: high` | #d93f0b | classification: | KEEP |
| `area: broadcasters` | #bfdadc | area: | RENAME → `area: gateways` (1 item to re-label) |
| `area: ci-cd` | #ededed | area: | KEEP |
| `area: orchestrators` | #D8AA17 | area: | KEEP |
| `area: tokenholders` | #C8259B | area: | RENAME → `area: lpt-governance` (2 items to re-label) |
| `good first issue` | #7057ff | community-standard | KEEP |
| `help wanted` | #33aa3f | community-standard | KEEP |
| `wontfix` | #ffffff | community-standard | KEEP |
| `docs-v2` | #1d76db | scope/project | KEEP |
| `Docs:v2` | #33ac37 | scope/project | DELETE — merge into `docs-v2` (17 items to re-label first) |
| `ai-opened:codex` | #aaaaaa | automation | KEEP |
| `dependencies` | #0366d6 | automation | KEEP |
| `javascript` | #168700 | automation | KEEP |
| `python` | #2b67c6 | automation | KEEP |
| `Docs` | #bec2c8 | automation | KEEP |
| `DevEx` | #4cb782 | automation | KEEP |
| `linear` | #5E6AD2 | automation | KEEP |
| `team: studio` | #0B0356 | automation | KEEP |
| `Epic` | #3E4B9E | automation | KEEP |
| `Playback` | #FE7817 | automation | KEEP |
| `major` | #ededed | release/versioning | KEEP |
| `graduate` | #ededed | release/versioning | KEEP |
| `minor` | #ededed | release/versioning | KEEP |
| `patch` | #ededed | release/versioning | KEEP |
| `prerelease` | #ededed | release/versioning | KEEP |
| `custom` | #ededed | release/versioning | KEEP |
| `plan-stale` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `error-stale` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `agent-brief` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `backlog` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `handoff` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `analysis` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `execution` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `copilot-candidate` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `needs-human` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `uncategorised` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `tasks-retention` | #ededed | tasks-retention | REVIEW — not in planning doc target; see notes |
| `automated` | #ededed | other | REVIEW — not in planning doc target; see notes |
| `governance` | #ededed | other | REVIEW — not in planning doc target; see notes |

---

## Planning Doc Target Labels NOT yet live (missing)

These 28 labels appear in the planning doc target set but are absent from the live repo.

| Name | Group | Priority | What it unblocks |
|---|---|---|---|
| `type: documentation` | type: | P1 | Replaces `type: content`; required by issue templates |
| `type: question` | type: | P2 | Standard contributor label; used in feature_internal template |
| `status: needs-info` | status: | P1 | Replaces verbose `need: more info` / `need: steps to reproduce`; required by triage workflow |
| `status: in-progress` | status: | P1 | Replaces `status: core contributors working on it`; required by auto-label workflow |
| `status: blocked` | status: | P2 | Needed for blocked issue routing |
| `priority: critical` | priority: | P1 | Needed for security/broken critical path triage |
| `priority: medium` | priority: | P2 | Needed for full priority ladder |
| `priority: low` | priority: | P2 | Needed for full priority ladder |
| `classification: urgent` | classification: | P1 | Needed for release-blocking / unsafe guidance triage |
| `classification: moderate` | classification: | P2 | Needed for full severity ladder |
| `classification: minor` | classification: | P2 | Needed for full severity ladder |
| `area: community` | area: | P2 | Maps to community docs section |
| `area: developers` | area: | P2 | Maps to developers docs section (replaces `area: protocol`) |
| `area: gateways` | area: | P1 | Replaces `area: broadcasters`; template-required |
| `area: home-about` | area: | P2 | Maps to home/about docs section |
| `area: lpt-governance` | area: | P1 | Replaces `area: tokenholders`; template-required |
| `area: multiple` | area: | P2 | Cross-cutting issues routing |
| `area: resources` | area: | P2 | Maps to resources/docs-guide section |
| `area: structure` | area: | P2 | Navigation and IA issues |
| `kind: accessibility-ux` | kind: | P2 | Docs page issue form — kind field |
| `kind: broken-media-link` | kind: | P1 | Docs page issue form — kind field; template-required |
| `kind: factual-error` | kind: | P1 | Docs page issue form — kind field; template-required |
| `kind: missing-context` | kind: | P2 | Docs page issue form — kind field |
| `kind: navigation-structure` | kind: | P2 | Docs page issue form — kind field |
| `kind: unclear-instructions` | kind: | P2 | Docs page issue form — kind field |
| `lifecycle: stale` | lifecycle: | P2 | Stale bot and lifecycle management workflow |
| `lifecycle: frozen` | lifecycle: | P2 | Lifecycle management — exempt from stale rules |
| `scope: page` | scope: | P2 | Page-level issue scoping |

---

## Labels in live set NOT in planning doc target (to review)

These 13 live labels have no equivalent in the planning doc target and require disposition decisions.

| Name | Disposition | Notes |
|---|---|---|
| `status: needs-routing` | INVESTIGATE | Not in planning doc target. Created 2026-03-27 (or recently). If used by an active workflow (e.g., `dispatch-routing.yml`), add to target or replace with `status: needs-triage`. If unused, DELETE. |
| `plan-stale` | INVESTIGATE | All 11 tasks-retention labels share description "tasks/ retention governance" and color `#ededed`. These appear to be internal process labels, not OSS contributor labels. Decision required: are these in-scope for the governed label taxonomy, or should they live in a separate automation namespace? |
| `error-stale` | INVESTIGATE | See `plan-stale` note above. |
| `agent-brief` | INVESTIGATE | See `plan-stale` note above. |
| `backlog` | INVESTIGATE | Conflicts with `status: backlog` (which is already live). Two labels covering the same concept is an inconsistency. Decision required: delete `backlog` in favour of `status: backlog`, or document the distinction. |
| `handoff` | INVESTIGATE | See `plan-stale` note above. |
| `analysis` | INVESTIGATE | See `plan-stale` note above. |
| `execution` | INVESTIGATE | See `plan-stale` note above. |
| `copilot-candidate` | INVESTIGATE | See `plan-stale` note above. |
| `needs-human` | INVESTIGATE | See `plan-stale` note above. |
| `uncategorised` | INVESTIGATE | See `plan-stale` note above. |
| `tasks-retention` | INVESTIGATE | The meta-label for the group above. Same question: in-scope for OSS taxonomy or not? |
| `automated` | INVESTIGATE | No description. Likely automation-managed but not documented. Add to automation/integration section of planning doc, or DELETE if unused. |
| `governance` | INVESTIGATE | No description. Could conflict with the governance framework itself. Decision required: is this a valid label or an artefact? If kept, document managed-by owner and scope. |

---

## Summary

| Metric | Count |
|---|---|
| Live labels (total fetched) | 49 |
| Planning doc target total | 55 |
| Gap — missing from live | 28 |
| Labels to DELETE (confirmed by planning doc) | 3 (`type: feature`, `status: core contributors working on it`, `Docs:v2`) |
| Labels to RENAME (confirmed by planning doc) | 3 (`type: content` → `type: documentation`, `area: broadcasters` → `area: gateways`, `area: tokenholders` → `area: lpt-governance`) |
| Labels to KEEP (confirmed) | 19 |
| Labels requiring REVIEW (not in planning doc target) | 14 (`status: needs-routing` + 11 tasks-retention + `automated` + `governance`) |

---

_Generated by: Claude Code / live `gh label list` output_
_Planning doc source: `05_OSS-Governance-Framework/03_Technical-Repo/02_Repo-Labels/index.md`_
_Next action: Review the 14 INVESTIGATE labels with Alison before Phase 2 implementation_
