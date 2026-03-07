# Skill Spec Contract (Phase 1, Decision-Locked)

## Purpose

Define the canonical authoring and validation contract for all Livepeer Docs skills in Phase 1, with explicit pass/fail and warning criteria that agents can run against each `SKILL.md`.

This contract is strict by design and favors root-cause governance over ad hoc exceptions.

## Scope

This contract applies to all skill surfaces:

- canonical templates in `ai-tools/ai-skills/templates/*.template.md`
- synced local skills generated from canonical templates
- plugin-contained skills under `livepeer-docs-<domain>/skills/<skill-name>/`

## Canonical Sources

- Source-of-truth policy: `docs-guide/source-of-truth-policy.mdx`
- Design framework deliverables reference: `v2/internal/rfp/reports/livepeer-docs-v2-report.md` (D1-D7)

## Normative Rules

### Rule 1: Frontmatter Schema

`SKILL.md` frontmatter must include:

- `name` (required)
- `description` (required)
- `license` (optional)

No other frontmatter keys are permitted.

### Rule 2: Skill Naming Convention

Standalone skill names must match:

- `livepeer-docs-<domain>`
- regex: `^livepeer-docs-[a-z0-9]+(?:-[a-z0-9]+)*$`

Plugin-contained skill names must match:

- `<domain-specific-name>`
- regex: `^[a-z0-9]+(?:-[a-z0-9]+)*$`

### Rule 3: Description Convention

`description` must:

- use third-person phrasing
- include at least one positive trigger
- include at least one negative trigger

`description` target length is 50-200 characters. This is a warning-level advisory, not a blocking failure.

### Rule 4: SKILL.md Length Limit

`SKILL.md` must not exceed 500 lines.

If content exceeds this limit, move non-core detail into `references/`.

### Rule 5: Reference File Contract

If `references/` exists, it must satisfy all requirements:

- markdown only: `references/*.md`
- one level deep only under the skill root (no nested folders)
- references are JIT-loaded
- `SKILL.md` must include explicit "When to load" pointers for each reference

### Rule 6: v1 Scripts Guardrail

`scripts/` is forbidden for v1 skills in Phase 1.

Phase 1 v1 skills are instruction-only.

### Rule 7: Plugin Structure Contract

Plugin-contained skills must use this path:

- `livepeer-docs-<domain>/skills/<skill-name>/`

### Rule 8: Source-of-Truth Alignment

Each skill must include a `Canonical docs-guide source` section that points to at least one domain-appropriate canonical docs-guide file from policy-owned sources.

Preferred canonical files include:

- `docs-guide/README.mdx`
- `docs-guide/feature-guides/feature-map.mdx`
- `docs-guide/feature-guides/architecture-map.mdx`
- `docs-guide/lpd.mdx`
- `docs-guide/quality-testing/quality-gates.mdx`
- `docs-guide/feature-guides/automation-pipelines.mdx`
- `docs-guide/feature-guides/content-system.mdx`
- `docs-guide/feature-guides/data-integrations.mdx`
- `docs-guide/source-of-truth-policy.mdx`

### Rule 9: Design Framework Alignment (Component Library Skills)

Any skill covering component-library workflows must include a `Design Framework Dependencies` subsection and explicitly cite applicable D1-D7 deliverables.

Deliverables:

- D1: `docs-guide/README.mdx`
- D2: `docs-guide/feature-guides/feature-map.mdx`
- D3: `docs-guide/feature-guides/architecture-map.mdx`
- D4: `docs-guide/lpd.mdx`
- D5: `docs-guide/quality-testing/quality-gates.mdx`
- D6: `docs-guide/feature-guides/automation-pipelines.mdx`
- D7: `docs-guide/feature-guides/content-system.mdx`

The subsection must state which deliverable(s) are required for the skill and why.

### Rule 10: Verification Section

Every skill must include a `Verification` section with concrete pass/fail checks and expected evidence.

## Compliance Checklist (Per SKILL.md)

| Check ID | Rule | Severity | How to verify | Pass criteria | Evidence |
|---|---|---|---|---|---|
| C01 | Frontmatter includes `name` and `description` | Blocking | Inspect frontmatter keys in `SKILL.md` | Both keys exist and are non-empty | Frontmatter lines |
| C02 | Frontmatter allows only `name`, `description`, optional `license` | Blocking | List all frontmatter keys | No extra keys | Frontmatter key list |
| C03 | Standalone name uses `livepeer-docs-<domain>` regex | Blocking | Read `name` and evaluate naming mode | Standalone names match required pattern | Name line + regex check output |
| C04 | Plugin-contained names use `<domain-specific-name>` regex | Blocking | Read `name` and plugin path | Name and path both conform | Name line + path match output |
| C05 | `description` contains positive and negative triggers, third person | Blocking | Regex-check trigger words and pronouns | Positive + negative trigger signals found; no first/second person framing | `description` line + regex results |
| C06 | `description` length target 50-200 chars | Warning | Character count on description text | Length in range, else warn only | `wc -m` output |
| C07 | `SKILL.md` is 500 lines max | Blocking | Line count with `wc -l` | `<= 500` lines | `wc -l` output |
| C08 | References are one-level `references/*.md` only | Blocking | Find and regex-check reference paths | All refs match `references/<file>.md`; no nested dirs; no `.mdx` | `find` + `rg` path output |
| C09 | `SKILL.md` includes explicit "When to load" pointers for references | Blocking | Search SKILL.md text for pointers and filenames | Every reference has explicit load timing guidance | pointer lines in `SKILL.md` |
| C10 | v1 skills do not contain `scripts/` directories | Blocking | Search v1 skill paths for `scripts` | No v1 skill `scripts/` found | `find` output |
| C11 | `Canonical docs-guide source` section exists with policy-aligned path | Blocking | Search for section header and docs-guide path | Section exists and cites at least one canonical file | section lines in `SKILL.md` |
| C12 | Component-library skills include D1-D7 dependency mapping | Blocking (conditional) | Detect component-library scope, then search dependency subsection | If component-library scope is present, D1-D7 mapping and selected dependencies exist | subsection lines in `SKILL.md` |
| C13 | `Verification` section exists with pass/fail checks and evidence | Blocking | Search for `Verification` header and check content | Section exists and defines check + evidence expectations | section lines in `SKILL.md` |

## Agent Verification Procedure (Deterministic)

Use this procedure for each target skill directory.

```bash
SKILL_DIR="<path-to-skill-folder>"
SKILL_FILE="$SKILL_DIR/SKILL.md"
```

1. Confirm target files exist.

```bash
test -f "$SKILL_FILE"
find "$SKILL_DIR" -maxdepth 2 -type d | sed -n '1,80p'
```

2. Extract and inspect frontmatter keys.

```bash
sed -n '1,80p' "$SKILL_FILE" | rg -n '^---$|^[a-zA-Z0-9_-]+:'
sed -n '1,80p' "$SKILL_FILE" | rg -n '^[a-zA-Z0-9_-]+:' | rg -v '^[0-9]+:(name|description|license):'
```

3. Validate naming and description conventions.

```bash
sed -n '1,80p' "$SKILL_FILE" | rg -n '^name:'
sed -n '1,80p' "$SKILL_FILE" | rg -in '^description:.*\\b(use|run|apply|create|maintain|generate|enforce|sync|triage|audit|author)\\b'
sed -n '1,80p' "$SKILL_FILE" | rg -in '^description:.*\\b(not|avoid|unless|except|without|do not)\\b'
sed -n '1,80p' "$SKILL_FILE" | rg -in '^description:.*\\b(i|we|you|our|your)\\b'
sed -n '1,80p' "$SKILL_FILE" | rg '^description:' | sed 's/^description:[ ]*//' | wc -m
```

4. Enforce `SKILL.md` line limit.

```bash
wc -l "$SKILL_FILE"
```

5. Validate references contract.

```bash
find "$SKILL_DIR/references" -type f 2>/dev/null | sed -n '1,200p'
find "$SKILL_DIR/references" -type f 2>/dev/null | rg -n -v '/references/[^/]+\\.md$'
rg -n 'When to load|when to load' "$SKILL_FILE"
```

6. Enforce v1 scripts guardrail (repo-level check).

```bash
find v1 -type d -path '*/skills/*/scripts' | sed -n '1,120p'
```

7. Validate source-of-truth and dependency sections.

```bash
rg -n 'Canonical docs-guide source|docs-guide/' "$SKILL_FILE"
rg -n 'Design Framework Dependencies|D1|D2|D3|D4|D5|D6|D7' "$SKILL_FILE"
```

8. Validate Verification section.

```bash
rg -n '^## Verification$|^### Verification$|^Verification$|pass/fail|evidence' "$SKILL_FILE"
```

Interpretation:

- Any output indicating a blocking rule failure is non-compliant.
- Warning-only checks (currently C06) must be logged but do not block sign-off.

## Human Sign-off Gate (Required Before Phase 2)

Phase 2 is blocked until this section is completed with decision `APPROVED`.

If decision is `CHANGES_REQUIRED`, Phase 1 remains open and all blocking findings must be resolved before re-review.

```md
## Phase 1 Sign-off

- Reviewer:
- Date (YYYY-MM-DD):
- Decision: APPROVED | CHANGES_REQUIRED
- Notes:
```

