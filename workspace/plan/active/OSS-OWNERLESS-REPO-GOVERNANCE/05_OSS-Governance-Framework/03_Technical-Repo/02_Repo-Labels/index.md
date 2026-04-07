> **STATUS: PLANNING INPUT — superseded by live-label-inventory.md**
> Label taxonomy proposal from a prior planning session. The live label count (24) differs from the assumed baseline (44) in this document. Use `live-label-inventory.md` for current state and `gap-analysis.md` for the delta.
> Last reviewed: 2026-03-27

---

# Label Proposal

**Full target label set for the livepeer/docs repository with create, keep, rename, and remove actions for every label, plus a phased implementation sequence.**

*Keywords: livepeer, internal, governance, labels, github, proposal, taxonomy, prefixed labels, open source, issue management*-----LABEL PROPOSAL

This page provides the full target label set for `livepeer/docs`. It consolidates the current 44 labels, resolves all conflicts and gaps identified in the audit, and implements the prefixed taxonomy recommended in the OSS Frameworks analysis.Design Principles

1. **Prefixed taxonomy**Every label belongs to a prefix group or is a reserved standard/automation label. No orphan labels.
1. **Colour by group**All labels in a prefix group share a colour family for at-a-glance scanning in the GitHub issue list.
1. **Lowercase with colons**Consistent format `prefix: value` (lowercase, space after colon) across all governed labels.
1. **One per group (mostly)**An issue should have at most one label from each of `type:`, `status:`, `priority:`, and `classification:`. Multiple `area:` and `kind:` labels are allowed.
1. **Template alignment**Every label referenced in issue templates and workflows must exist. Every label that exists should be referenced somewhere.

-----TARGET LABEL SETType Labels

Colour family: purple `#7C3AED`

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `type: bug` | Something is broken or not working as intended |  |
| `type: enhancement` | Improvement or new capability request |  |
| `type: documentation` | Documentation content change (new, update, fix) |  |
| `type: question` | Question or clarification needed |  |

**Removals and merges**

- `type: content` renamed to `type: documentation` (re-label 25 existing items)
- `type: feature` merged into `type: enhancement` (re-label 3 items)
- `type: functionality` merged into `type: enhancement` (0 items)
- `type: tech debt` merged into `type: enhancement` (0 items)

-----Status Labels

Colour family: green `#0E8A16`

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `status: needs-triage` | Awaiting initial maintainer review |  |
| `status: needs-info` | Needs more information from reporter |  |
| `status: backlog` | Triaged; will be worked on as capacity allows |  |
| `status: in-progress` | Actively being worked on |  |
| `status: blocked` | Blocked on external dependency or decision |  |

**Removals and merges**

- `status: triage` merged into `status: needs-triage` (0 items)
- `status: community working on it` replaced by `status: in-progress` + assignee (0 items)
- `status: core contributors working on it` replaced by `status: in-progress` + assignee (1 item)
- `need: decision` removed (non-canonical, 0 items)
- `need: investigation` removed (non-canonical, 0 items)
- `need: more info` replaced by `status: needs-info` (0 items)
- `need: steps to reproduce` replaced by `status: needs-info` (0 items)

-----Priority Labels

Colour family: red-orange gradient

| **Label** | **Description** | **Colour** | **Action** |
| --- | --- | --- | --- |
| `priority: critical` | Security issues, broken critical paths | `#B60205` |  |
| `priority: high` | Important content gaps, user blockers | `#D93F0B` |  |
| `priority: medium` | Standard improvements | `#FBCA04` |  |
| `priority: low` | Nice-to-have enhancements | `#0E8A16` |  |

-----Classification Labels

Colour family: orange `#E67E22`

Classification is separate from priority. Classification captures the severity or impact of the issue as reported. Priority captures the maintainer's scheduling decision (which may differ due to roadmap, staffing, or deadlines).

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `classification: urgent` | Release-blocking, unsafe guidance, or widespread breakage |  |
| `classification: high` | Significant blocker or major user impact |  |
| `classification: moderate` | Meaningful friction with limited scope or workaround |  |
| `classification: minor` | Cosmetic or low-risk localised issue |  |

-----Area Labels

Colour family: blue `#1D76DB`

Area labels map directly to the docs section taxonomy used in `issue-auto-label.yml` and the `docs.json` navigation hierarchy.

| **Label** | **Maps to docs section** | **Action** |
| --- | --- | --- |
| `area: ci-cd` | Tooling, CI/CD, scripts, workflows |  |
| `area: community` | Community section content |  |
| `area: developers` | Developers section content |  |
| `area: gateways` | Gateways section content |  |
| `area: home-about` | Home and About sections |  |
| `area: lpt-governance` | LPT, delegation, governance, treasury |  |
| `area: multiple` | Cross-cutting: affects multiple sections |  |
| `area: orchestrators` | Orchestrators section content |  |
| `area: resources` | Resources and docs guide section |  |
| `area: structure` | Navigation, IA, cross-site structure |  |

**Renames**

- `area: broadcasters` renamed to `area: gateways` (1 item to re-label)
- `area: protocol` renamed to `area: developers` (0 items)
- `area: tokenholders` renamed to `area: lpt-governance` (2 items to re-label)

-----Kind Labels

Colour family: teal `#17A589`

Sub-classification for documentation-specific issue types. These are used by the `issue-auto-label.yml` workflow when the issue form includes a "Kind" field, particularly from the `02_docs_page_issue.yml` template.

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `kind: accessibility-ux` | Accessibility or UX issue |  |
| `kind: broken-media-link` | Broken link, image, or media |  |
| `kind: factual-error` | Incorrect technical information |  |
| `kind: missing-context` | Page lacks necessary context or prerequisites |  |
| `kind: navigation-structure` | Navigation or information architecture issue |  |
| `kind: unclear-instructions` | Instructions are confusing or ambiguous |  |

-----Lifecycle Labels (New)

Colour family: grey `#6C757D`

These labels support the lifecycle management system described in the Repo Management Proposal.

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `lifecycle: stale` | No activity for 90 days; bot will auto-comment | **Create** |
| `lifecycle: frozen` | Parked intentionally; exempt from stale rules | **Create** |

-----Size Labels (New)

Colour family: green gradient

Size labels enable sprint planning by providing a rough effort estimate for each issue.

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `size: XS` | Trivial fix: typo, broken link, one-line change |  |
| `size: S` | Small: a few paragraphs, single page edit |  |
| `size: M` | Medium: new page, significant rewrite, multi-file |  |
| `size: L` | Large: new section, multiple new pages, architectural |  |

-----Scope and Project Labels

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `scope: page` | Issue relates to a specific page |  |
| `docs-v2` | Canonical v2 scope label (all v2 issues) |  |
| `docs-review` | Requires documentation review |  |

**Removals**

- `Docs:v2` merged into `docs-v2` (re-label 17 existing items across issues and PRs, then delete)

-----Community-Standard Labels

These are GitHub conventions used by the community contributor ecosystem. They sit outside the prefix taxonomy.

| **Label** | **Description** | **Action** |
| --- | --- | --- |
| `good first issue` | Good for first-time contributors |  |
| `help wanted` | Open for community contributions |  |
| `wontfix` | Will not be addressed |  |

-----Automation and Integration Labels

These are managed by bots, CI, or external integrations and are exempt from the prefix taxonomy. They must still be documented.

| **Label** | **Managed by** | **Status** | **Action** |
| --- | --- | --- | --- |
| `ai-opened:codex` |  |  |  |
| `dependencies` |  |  |  |
| `javascript` |  |  |  |
| `python` |  |  |  |
| `Docs` |  |  |  |
| `DevEx` |  |  |  |
| `linear` |  |  |  |
| `team: studio` |  |  |  |
| `Epic` |  |  |  |
| `Playback` |  |  |  |

-----Release and Versioning Labels

Managed by release automation. Exempt from prefix taxonomy.

`custom`, `graduate`, `major`, `minor`, `patch`, `prerelease` - all kept as-is.-----REMOVALSLabels to Remove

| **Label** | **Reason** | **Migration** |
| --- | --- | --- |
| `Docs:v2` |  |  |
| `type: content` |  |  |
| `type: feature` |  |  |
| `type: functionality` |  |  |
| `type: tech debt` |  |  |
| `need: decision` |  |  |
| `need: investigation` |  |  |
| `need: more info` |  |  |
| `need: steps to reproduce` |  |  |
| `status: triage` |  |  |
| `status: community working on it` |  |  |
| `status: core contributors working on it` |  |  |
| `area: broadcasters` |  |  |
| `area: protocol` |  |  |
| `area: tokenholders` |  |  |
| `prod success incident` |  |  |

-----SUMMARYSummary Counts

| **Category** | **Current** | **Proposed** |
| --- | --- | --- |
| Total labels |  | 55 |
| Prefix-governed labels |  | 35 |
| Community-standard labels |  | 4 |
| Automation/integration labels |  | 11 |
| Release/versioning labels |  | 6 |
| Labels to remove |  | 17 |
| Labels to create |  | 28 |
| Missing template-required labels |  | **0** |

-----IMPLEMENTATIONImplementation Sequence

1. **Phase 1: Fix template-label mismatches (Day 1)**Create the 27 missing labels that templates and workflows reference. This is zero-risk: no existing issues or workflows are affected. Can be done via `gh` CLI script or manually.
1. **Phase 2: Consolidate duplicates (Week 1)**Merge `Docs:v2` into `docs-v2` (re-label, then delete). Merge `type: content` into `type: documentation`. Merge `type: feature` and `type: functionality` into `type: enhancement`. Rename `area: broadcasters`, `area: protocol`, `area: tokenholders`.
1. **Phase 3: Remove legacy labels (Week 1-2)**Delete the `need:` prefix labels (all zero-use). Delete `status: triage` and the two verbose `status: *working on it` labels. Delete `prod success incident`.
1. **Phase 4: Add new governance labels (Week 2)**Create `lifecycle: stale` and `lifecycle: frozen`. Create `size: XS`, `S`, `M`, `L`. Create `status: in-progress` and `status: blocked`.
1. **Phase 5: Workflow and template sync (Week 2-3)**Update `issue-auto-label.yml` to handle new `area:` labels. Update `feature_internal.yml` to drop `feature` and `triage` labels, use `type: enhancement` + `status: needs-triage`. Add lifecycle management workflow (stale bot). Update `governance.mdx` with label policy and contributor ladder.

**Tip**

A companion `gh` CLI script for bulk label creation, rename, and migration can be generated on request. The script would handle re-labelling existing issues before deleting old labels, ensuring zero data loss.-----

- **OSS Frameworks**Framework analysis and references
- **Repo Management Proposal**Governance enhancements and contributor ladder