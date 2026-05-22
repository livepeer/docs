# Repo Root Governance Audit

Date: 2026-04-05
Repo: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`
Scope: static audit of every current repo-root file and directory
Mode: audit and report only, no implementation

## Outcome

The repo root is not currently governed by one coherent contract.

The main problem is not just root clutter. The bigger problem is governance drift between:

- actual on-disk root state
- `.allowlist`
- root-governance policy docs
- agent-governance policy docs
- generated-artifact manifests
- validator expectations
- README and repo-config docs

That means the repo can look "governed" while the enforcement, documentation, and actual tree disagree.

If the goal is a production-ready, clean, governed root with no agent or human sprawl, the fix should be a root-governance system redesign, not another one-off cleanup pass.

## Executive Summary

The current root has four different classes of entries:

1. legitimate fixed-path root contracts that should stay
2. legitimate subsystem roots that are acceptable but need explicit taxonomy
3. legacy exceptions that should have a sunset plan
4. local or tracked drift that should not be at root at all

The repo already contains the right ideas:

- root entries should be intentional: `docs-guide/policies/root-allowlist-governance.mdx`
- agent roots should be thin and fixed-path: `docs-guide/policies/agent-governance-framework.mdx`
- generated artifacts should be classified by manifest: `docs-guide/policies/generated-artifact-and-hook-governance.mdx`

But those ideas are not aligned in implementation.

### Highest-priority governance defects

1. `.allowlist` is wrong today.
   It includes nonexistent entries like `.env.example`, `Dockerfile`, and `\_dep-docs`, and it still includes `.cursorrules` even though the validator forbids it. See `.allowlist`, `operations/tests/unit/root-allowlist-format.test.js`, and `docs-guide/policies/root-allowlist-governance.mdx`.

2. Policy pages contradict each other.
   `docs-guide/policies/root-allowlist-governance.mdx` says `.mintlify` was removed and "not implemented", while `docs-guide/policies/agent-governance-framework.mdx` says `.mintlify/Assistant.md` is implemented and current.

3. The root generated-artifact contract is incomplete.
   `tools/config/runtime/generated-artifacts.json` governs `docs-index.json`, but it does not declare `llms.txt` or `sitemap-ai.xml`, even though workflows and docs treat them as governed root artifacts.

4. Documentation about root locations is stale.
   `docs-guide/repo-ops/config/repo-config-map.mdx` still says `.env.example` lives at repo root. `README.md` still links to removed `contribute/CONTRIBUTING/README.md`.

5. Root drift already includes tracked tool output and empty placeholders.
   `.playwright-cli/` is present at root and contains a tracked page-capture YAML file plus ignored console logs. `repo-catalog.mdx` is a tracked zero-byte file.

## Audit Basis

This audit is based on the current root inventory and these canonical or enforcement surfaces:

- `AGENTS.md`
- `.github/AGENTS.md`
- `README.md`
- `.allowlist`
- `.githooks/pre-commit`
- `.gitignore`
- `.mintignore`
- `docs-guide/policies/root-allowlist-governance.mdx`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/generated-artifact-and-hook-governance.mdx`
- `docs-guide/repo-ops/config/repo-config-map.mdx`
- `docs-guide/repo-ops/maps/enforcement-map.mdx`
- `docs-guide/tooling/ai-tools.mdx`
- `tools/config/runtime/generated-artifacts.json`
- `operations/tests/unit/root-allowlist-format.test.js`

No validators were executed for this audit. Findings are from file and tree inspection only.

## Current Root Inventory

### Observed root entries

- `.DS_Store`
- `.allowlist`
- `.augment`
- `.cache`
- `.claude`
- `.codex`
- `.cursor`
- `.cursorrules`
- `.editorconfig`
- `.env`
- `.git`
- `.gitattributes`
- `.githooks`
- `.github`
- `.gitignore`
- `.mintignore`
- `.mintlify`
- `.playwright-cli`
- `.prettierrc`
- `.vscode`
- `.windsurf`
- `AGENTS.md`
- `LICENSE`
- `Makefile`
- `README.md`
- `SECURITY.md`
- `ai-tools`
- `api`
- `docs-guide`
- `docs-index.json`
- `docs.json`
- `llms.txt`
- `operations`
- `repo-catalog.mdx`
- `robots.txt`
- `sitemap-ai.xml`
- `snippets`
- `style.css`
- `tools`
- `v1`
- `v2`
- `workspace`

### Root entry matrix

| Entry | Current state | Recommended class | Recommendation |
|---|---|---|---|
| `.DS_Store` | untracked local OS noise, ignored | forbidden root artifact | remove locally and keep ignored |
| `.allowlist` | tracked | canonical root contract | keep at root |
| `.augment` | tracked | native adapter root | keep at root |
| `.cache` | untracked local cache, not generally ignored at root | forbidden local artifact | ignore broadly or relocate; do not govern as root |
| `.claude` | tracked | native adapter root | keep at root |
| `.codex` | tracked | operational root contract | keep at root while Codex contract depends on fixed path |
| `.cursor` | tracked | native adapter root | keep at root |
| `.cursorrules` | tracked thin legacy stub | legacy exception | remove from allowlist; keep only behind explicit sunset policy if still required |
| `.editorconfig` | tracked | standard root config | keep at root |
| `.env` | untracked local secret file, ignored | local compatibility surface, not governed root | tolerate untracked only; do not treat as canonical root entry |
| `.git` | system-managed worktree metadata | VCS metadata | out of governance scope |
| `.gitattributes` | tracked | standard root config | keep at root |
| `.githooks` | tracked | repo entrypoint / enforcement root | keep at root |
| `.github` | tracked | platform-required root | keep at root |
| `.gitignore` | tracked | standard root config | keep at root |
| `.mintignore` | tracked | Mintlify runtime root contract | keep at root |
| `.mintlify` | tracked, contains `Assistant.md` | tool-native root | keep at root |
| `.playwright-cli` | tracked root output folder with captured page YAML and ignored logs | forbidden root tool output | remove from root and reroute browser captures to governed workspace output paths |
| `.prettierrc` | tracked | standard root config | keep at root |
| `.vscode` | tracked | editor config root | keep at root if intentionally maintained; keep minimal |
| `.windsurf` | tracked | native adapter root | keep at root |
| `AGENTS.md` | tracked | canonical root contract | keep at root |
| `LICENSE` | tracked | platform-standard root file | keep at root |
| `Makefile` | tracked | repo entrypoint | keep at root |
| `README.md` | tracked | platform-standard root file | keep at root |
| `SECURITY.md` | tracked | platform-standard root file | keep at root |
| `ai-tools` | tracked mixed subsystem | restructure candidate | split by concern over time; do not keep growing as a root catch-all |
| `api` | tracked | public/runtime subsystem root | keep at root |
| `docs-guide` | tracked | internal governance and repo-docs root | keep at root |
| `docs-index.json` | tracked generated artifact | public machine-readable root artifact, conditional | keep only if its public/runtime contract is ratified and documented; otherwise retire or relocate |
| `docs.json` | tracked | canonical runtime root contract | keep at root |
| `llms.txt` | tracked generated artifact | public machine-readable root artifact, conditional | keep only if intentionally curated as public contract and fully governed |
| `operations` | tracked | implementation and automation root | keep at root |
| `repo-catalog.mdx` | tracked zero-byte placeholder | orphan root artifact | retire or move to the correct catalog subtree |
| `robots.txt` | tracked root web contract | public root artifact | keep at root if custom override is intentional |
| `sitemap-ai.xml` | tracked generated artifact | public machine-readable root artifact, conditional | keep only if intentionally governed as public root contract |
| `snippets` | tracked | shared runtime/content root | keep at root |
| `style.css` | tracked | Mintlify runtime root contract | keep at root |
| `tools` | tracked | repo tooling root | keep at root |
| `v1` | tracked | legacy content root | keep at root while freeze remains policy |
| `v2` | tracked | current content root | keep at root |
| `workspace` | tracked | governed working/reporting root | keep at root |

## Findings

### 1. The allowlist is not the truth

`.allowlist` currently contains entries that do not exist:

- `.env.example`
- `Dockerfile`
- `\_dep-docs`

See `.allowlist:7-11`, `.allowlist:54-61`, and the validator rule that every allowlist entry must exist at repo root in `operations/tests/unit/root-allowlist-format.test.js:110-117`.

It also contains `.cursorrules` at `.allowlist:46-50`, but the validator explicitly treats `.cursorrules` as forbidden in `operations/tests/unit/root-allowlist-format.test.js:20-29`.

This means the repo currently has a broken contract between:

- the allowlist
- the validator
- the agent-governance policy

That is a systemic defect, not a clerical one.

### 2. Root-governance policy is stale and internally contradictory

`docs-guide/policies/root-allowlist-governance.mdx` is not describing the live root anymore.

Examples:

- It claims `.mintlify` was removed from the allowlist and "not implemented" at `docs-guide/policies/root-allowlist-governance.mdx:137`.
- It lists `llms-full.txt`, `lpd`, and `tests/` in the governed root inventory at `docs-guide/policies/root-allowlist-governance.mdx:94-104`, but those root entries are not present now.
- It still references older root clutter like `docs/`, `docs.json.bak`, and `mint-debug.log` at `docs-guide/policies/root-allowlist-governance.mdx:111-127`, which are not part of the current root.

This policy page is currently an archive of past states mixed with current rules. It should be purely normative and current.

### 3. Agent-governance policy and allowlist policy disagree about current root adapters

`docs-guide/policies/agent-governance-framework.mdx` says the following are implemented and current:

- `.cursorrules` as a thin legacy stub: `docs-guide/policies/agent-governance-framework.mdx:58-60`
- `.mintlify/Assistant.md` as implemented chat assistant context: `docs-guide/policies/agent-governance-framework.mdx:61-63`

But the root-governance and validator layer say:

- `.mintlify` is forbidden in `.allowlist`: `operations/tests/unit/root-allowlist-format.test.js:20-29`
- `.cursorrules` is forbidden in `.allowlist`: `operations/tests/unit/root-allowlist-format.test.js:20-29`
- `.mintlify` is "not implemented": `docs-guide/policies/root-allowlist-governance.mdx:137`

That is a direct policy collision.

### 4. Generated root artifacts are governed inconsistently

The generated-artifact policy says artifacts should be classified by manifest and hooks should only act on manifest-declared outputs: `docs-guide/policies/generated-artifact-and-hook-governance.mdx:12-19`, `docs-guide/policies/generated-artifact-and-hook-governance.mdx:31-40`, and `docs-guide/policies/generated-artifact-and-hook-governance.mdx:69-83`.

But `tools/config/runtime/generated-artifacts.json` only declares `docs-index.json` at `tools/config/runtime/generated-artifacts.json:5-23`.

It does not declare:

- `llms.txt`
- `sitemap-ai.xml`

That is a governance gap because both are treated elsewhere as repo-governed root artifacts:

- workflows catalog and enforcement docs refer to them
- docs pages describe them as generated deliverables
- root inventory and root policy discuss them as root artifacts

Root artifacts cannot be "authoritative" in prose and "undefined" in the manifest at the same time.

### 5. `.gitignore` conflicts with the generated-artifact contract

`.gitignore` ignores `docs-index.json` and `llms-full.txt` at `.gitignore:114-115`.

But `tools/config/runtime/generated-artifacts.json:5-23` classifies `docs-index.json` as `committed_authoritative` with `commit_policy: required`.

That mismatch is a governance smell. Even if Git still tracks `docs-index.json`, the ignore rule communicates the wrong contract.

### 6. Root documentation points to removed or moved locations

`README.md` still links contributors to `contribute/CONTRIBUTING/README.md` at `README.md:51`, but that root path does not exist now.

`docs-guide/repo-ops/config/repo-config-map.mdx` still says `.env.example` lives at the repo root at `docs-guide/repo-ops/config/repo-config-map.mdx:38-41` and `docs-guide/repo-ops/config/repo-config-map.mdx:117`, but the actual template currently lives at `docs-guide/repo-ops/config/.env.example`.

The result is that root docs are not safe to use as operational truth.

### 7. Root already contains tracked tool output and placeholders

`.playwright-cli/` is present at root and currently includes:

- ignored console logs
- a tracked page capture file: `.playwright-cli/page-2026-03-31T13-10-28-299Z.yml`

That is not a governed runtime or source file. It is tool output and belongs under a local, ignored workspace bucket.

`repo-catalog.mdx` is a tracked zero-byte file. It has no root justification and behaves like an orphan placeholder.

## Root Cause

The root problem is duplicated governance without one machine-readable source of truth.

Today, root rules are split across:

- `.allowlist`
- `operations/tests/unit/root-allowlist-format.test.js`
- `docs-guide/policies/root-allowlist-governance.mdx`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/repo-ops/config/repo-config-map.mdx`
- `tools/config/runtime/generated-artifacts.json`
- `README.md`

Each surface partially describes root policy, but none of them own the whole model.

That guarantees drift.

## Recommended Root Taxonomy

The root should be governed by class, not by ad hoc historical decisions.

### Class A: fixed-path platform contracts

These stay at root because the platform, GitHub, Git, editors, or tooling convention expects them there.

- `.allowlist`
- `.gitattributes`
- `.githooks`
- `.github`
- `.gitignore`
- `.editorconfig`
- `.prettierrc`
- `.vscode`
- `README.md`
- `LICENSE`
- `SECURITY.md`
- `Makefile`
- `AGENTS.md`

### Class B: docs runtime and public web contracts

These stay at root only because the docs runtime or the public URL contract requires root placement.

- `docs.json`
- `.mintignore`
- `style.css`
- `robots.txt`
- approved public machine-readable root artifacts only

The approved machine-readable root artifacts should be a very small, explicit set:

- `docs-index.json` only if it has named consumers and remains justified
- `llms.txt` only if it is intentionally curated and published
- `sitemap-ai.xml` only if it has a justified public contract beyond platform defaults

If an artifact does not meet that bar, it should not live at root.

### Class C: tool-native adapter roots

These may stay because the tool expects a fixed discovery path at repo root.

- `.augment`
- `.claude`
- `.codex`
- `.cursor`
- `.mintlify`
- `.windsurf`

These should stay thin. They should never become a dumping ground for repo policy copies or tool output.

### Class D: canonical repo subsystem roots

These are large, intentional top-level product or governance trees.

- `v1`
- `v2`
- `snippets`
- `api`
- `tools`
- `operations`
- `docs-guide`
- `workspace`

### Class E: legacy exceptions with a sunset

These may exist temporarily but must be explicitly marked as exceptions.

- `.cursorrules`

This class should be kept as small as possible and should have an owner and retirement date.

### Class F: forbidden root artifacts

These must never be allowed at root.

- caches
- logs
- browser captures
- backup files
- temp files
- ad hoc reports
- empty placeholders
- copied exports
- local-only scratch files

Examples from the current tree:

- `.DS_Store`
- `.cache`
- `.playwright-cli`
- `repo-catalog.mdx`

## Recommended Placement Matrix

This is the documentation the repo is currently missing.

| Item type | Canonical home |
|---|---|
| public docs pages | `v2/**` |
| frozen legacy docs | `v1/**` |
| shared components, MDX snippets, shared data, assets | `snippets/**` |
| OpenAPI specs | `api/**` |
| scripts and automation code | `operations/scripts/**` |
| tests and validators | `operations/tests/**` |
| repo tooling binaries, config, wrappers, local dev helpers | `tools/**` |
| tool config files | `tools/config/**` |
| internal governance and maintainer docs | `docs-guide/**` |
| workspace plans, reports, temporary governed outputs | `workspace/**` |
| local-only reports and captures | `workspace/reports/_local/**` |
| agent runtime adapters with fixed tool discovery paths | dedicated root adapter dirs only |

### Special treatment: `ai-tools/`

`ai-tools/` is the biggest root structure smell that is still intentional.

It currently mixes:

- human docs pages
- canonical skill templates
- generated packs
- rule material
- registry data

That is too many concerns for one root subtree.

Recommended target split:

- human-facing AI tooling docs: `docs-guide/tooling/ai/**` or routed equivalents
- runtime skill and registry assets: `tools/ai/**`
- generated packs and exports: `tools/generated/ai/**` or another clearly derived subtree

Recommendation:

- do not expand `ai-tools/` further
- plan a deliberate split by concern
- keep compatibility shims only where route or tool consumption requires them

## Recommended Governance Model

### 1. Create one canonical machine-readable root registry

Recommendation:

- add a machine-readable root-governance manifest, for example `tools/config/runtime/root-governance.json`

That manifest should define, for every allowed root entry:

- path
- class
- owner
- reason it is allowed at root
- whether root placement is fixed-path, public-URL, or temporary
- lifecycle status: active, legacy-exception, pending-removal
- if generated: generator, inputs, consumers, and publication contract

This should become the single source of truth.

### 2. Make `.allowlist` a projection, not the primary model

`.allowlist` should remain the simple hook input, but it should be derived from or validated against the canonical root registry.

That removes the current problem where `.allowlist` quietly drifts away from:

- validators
- policy docs
- actual root state

### 3. Generate or validate the docs from the same registry

These surfaces should all derive from the same root registry or be validated against it:

- `.allowlist`
- `docs-guide/policies/root-allowlist-governance.mdx`
- `docs-guide/repo-ops/config/repo-config-map.mdx`
- root section in `README.md`
- root validator expectations

If one of those changes without the others, CI should fail.

### 4. Treat public machine-readable artifacts as a named root class

Do not let generated root files exist in a grey area.

The repo should explicitly define:

- which public machine-readable files are allowed at root
- why they exist
- what consumes them
- what generates them
- how freshness is checked

If that cannot be answered for a file, it should not be a root file.

### 5. Add a root admission rule

No new root file or directory should be allowed unless it passes one of these tests:

- fixed-path platform discovery
- public root URL contract
- repo entrypoint contract
- temporary approved exception with owner and sunset date

Anything else must go under an existing governed subtree.

## Documentation Recommendation

The repo does not need more scattered docs. It needs cleaner ownership.

### Recommended doc ownership

`docs-guide/policies/root-allowlist-governance.mdx`

- normative policy only
- allowed root classes
- admission criteria
- exception policy
- forbidden artifact policy
- no stale inventories or historical snapshots mixed into the normative contract

`docs-guide/repo-ops/config/repo-config-map.mdx`

- factual current-path map only
- must not list nonexistent root files
- should point to actual env template location

`README.md`

- short human orientation only
- high-level root layout summary
- no stale moved-path links
- link out to the canonical policy pages

`tools/config/runtime/generated-artifacts.json`

- full machine-readable contract for every committed generated artifact that lives at root

### Recommended documentation additions

Add one root placement matrix section to the canonical root policy.

It should answer, directly:

- where scripts live
- where tool configs live
- where internal docs live
- where reports live
- where public docs live
- where generated artifacts live
- what is explicitly banned from root

That is the missing practical guidance the current docs do not provide cleanly enough.

## Phased Plan

### Phase 1: contract reconciliation

Goal: make the governance surfaces describe the same root before moving anything.

Actions:

- reconcile `.allowlist` with actual allowed root entries
- reconcile `operations/tests/unit/root-allowlist-format.test.js` with actual approved adapter roots
- reconcile `docs-guide/policies/root-allowlist-governance.mdx` with current policy, removing stale inventories and past-state noise
- reconcile `docs-guide/policies/agent-governance-framework.mdx` with the actual approved legacy exception set
- fix stale root references in `README.md` and `docs-guide/repo-ops/config/repo-config-map.mdx`
- add missing generated root artifacts to `tools/config/runtime/generated-artifacts.json` or explicitly retire them

Acceptance criteria:

- no documented contradiction remains between allowlist, validator, policy docs, and manifest

### Phase 2: remove forbidden root drift

Goal: eliminate artifacts that have no legitimate root contract.

Actions:

- remove `.playwright-cli` from root and reroute captures to `workspace/reports/_local/**`
- remove or relocate `repo-catalog.mdx`
- ensure `.cache` and similar local tool outputs are ignored or redirected
- preserve `.env` only as local untracked compatibility, not as governed repo root state

Acceptance criteria:

- root contains no tool output, caches, logs, placeholders, or backup artifacts

### Phase 3: ratify the public machine-readable root artifact set

Goal: decide what public root artifacts are genuinely part of the docs platform contract.

Actions:

- evaluate `docs-index.json`
- evaluate `llms.txt`
- evaluate `sitemap-ai.xml`
- confirm `robots.txt`

For each file, decide:

- keep at root as public contract
- move to a different publication mechanism
- retire

Acceptance criteria:

- every remaining generated root artifact has an owner, generator, consumer list, and freshness enforcement

### Phase 4: legacy exception reduction

Goal: shrink special-case root surfaces.

Actions:

- decide whether `.cursorrules` is still required
- if yes, keep as an explicit legacy exception with sunset date
- if no, retire it and remove it from governance surfaces
- plan the concern-based split of `ai-tools/`

Acceptance criteria:

- all legacy root exceptions are either retired or explicitly documented with an owner and sunset

### Phase 5: automate anti-drift enforcement

Goal: stop root drift from coming back.

Actions:

- add one canonical root registry
- validate `.allowlist`, policy docs, README root map, and validator expectations against it
- fail CI when a new root entry appears without registry approval

Acceptance criteria:

- root policy becomes self-consistent and self-enforcing

## Recommended Target Root

This is the target root shape I would recommend after reconciliation.

### Keep at root

- `.allowlist`
- `.augment`
- `.claude`
- `.codex`
- `.cursor`
- `.editorconfig`
- `.gitattributes`
- `.githooks`
- `.github`
- `.gitignore`
- `.mintignore`
- `.mintlify`
- `.prettierrc`
- `.vscode`
- `.windsurf`
- `AGENTS.md`
- `LICENSE`
- `Makefile`
- `README.md`
- `SECURITY.md`
- `api`
- `docs-guide`
- `docs.json`
- `operations`
- `robots.txt`
- `snippets`
- `style.css`
- `tools`
- `v1`
- `v2`
- `workspace`

### Keep only if ratified as explicit public root contracts

- `docs-index.json`
- `llms.txt`
- `sitemap-ai.xml`

### Keep only as temporary legacy exception

- `.cursorrules`

### Remove from root

- `.DS_Store`
- `.cache`
- `.playwright-cli`
- `repo-catalog.mdx`

### Restructure target

- `ai-tools`

## Final Recommendation

Do not treat this as a one-time root cleanup.

The correct fix is:

1. define one canonical machine-readable root taxonomy
2. make `.allowlist`, docs, and validators derive from it
3. ratify a very small public root artifact set
4. remove tool output and placeholders from root permanently
5. shrink legacy exceptions instead of normalising them

That will produce a root that is:

- smaller
- more intentional
- easier to review
- harder to drift
- safer for both humans and agents

Without that redesign, any cleanup will regress because the repo still has multiple competing definitions of what the root is allowed to contain.
