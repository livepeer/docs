# Per-Page Quality Check — `v2/orchestrators/quickstart/video-transcoding.mdx`

**Reviewer:** Agent (per-page quality check)
**Date:** 2026-03-24
**Verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Value (as written) | Status |
|---|---|---|
| `title` | `Video Transcoding Quickstart` | Present |
| `sidebarTitle` | `Video Transcoding` | Present |
| `description` | `Run go-livepeer as a transcoding orchestrator: create your wallet, configure your node, register, and verify.` | Present |
| `pageType` | `quickstart` | **FAIL — deprecated value** |
| `pageVariant` | *(absent)* | **FAIL — required when migrating from deprecated type** |
| `purpose` | *(absent)* | **FAIL — missing required field** |
| `audience` | `orchestrator` | Pass |
| `complexity` | *(absent)* | **FAIL — missing required field** |
| `lifecycleStage` | *(absent)* | **FAIL — missing required field** |
| `veracityStatus` | *(absent)* | **FAIL — missing required field** |
| `industry` | *(absent)* | Missing (optional but pipeline-expected) |
| `niche` | *(absent)* | Missing (optional but pipeline-expected) |
| `keywords` | `livepeer`, `orchestrators`, `quickstart`, `transcoding`, `go-livepeer` | **FAIL — generic terms, not searcher-intent-aligned** |
| OG image block | `'og:image': /snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` | **FAIL — incomplete; 4 of 5 OG fields missing** |

---

## Category 1 — Frontmatter & Taxonomy

### 1.1 Required fields present

**CRITICAL** — checks.mdx §1.1

5 of 10 required fields are absent: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, and the OG image block is incomplete (only `og:image` present; `og:title`, `og:description`, `og:site_name`, `og:type` or equivalent block absent).

Fix:
```yaml
purpose: start
complexity: intermediate
lifecycleStage: setup
veracityStatus: unverified
industry:
  - technical
  - broadcast
niche:
  - infrastructure
  - video
```

---

### 1.2 `pageType` deprecated value

**CRITICAL** — checks.mdx §1.2, Frameworks.mdx §1.1

`pageType: quickstart` is a deprecated 12-type value. Per the migration table:

| Old | New | pageVariant |
|---|---|---|
| `quickstart` | `instruction` | `quickstart` |

Fix:
```yaml
pageType: instruction
pageVariant: quickstart
```

---

### 1.3 `pageVariant` absent

**HIGH** — checks.mdx §1.3

When migrating from `quickstart` to `instruction`, `pageVariant: quickstart` must be set. Field is entirely absent from frontmatter.

Fix: add `pageVariant: quickstart` alongside `pageType: instruction`.

---

### 1.4 `purpose` absent

**CRITICAL** — checks.mdx §1.4

`purpose` field missing. For a step-sequence page taking a reader from zero to a running transcoding node, the correct value is `start` (reader process: "arrive at zero → follow steps → reach working state → know next step").

Fix: `purpose: start`

---

### 1.5 `audience` — PASS

`orchestrator` is a valid 7-token audience value.

---

### 1.6 `complexity` absent

**HIGH** — checks.mdx §1.6

Field missing. Given the page requires Docker, CLI invocation, and Arbitrum RPC setup, `intermediate` is the correct value.

Fix: `complexity: intermediate`

---

### 1.7 `lifecycleStage` absent

**HIGH** — checks.mdx §1.7

Field missing. The reader is in the `setup` stage (first-time installation and configuration).

Fix: `lifecycleStage: setup`

---

### 1.8 `veracityStatus` absent

**CRITICAL** — checks.mdx §1.8

Field missing entirely. Page contains procedural content (`docker-compose.yml`, CLI commands, port numbers, flag defaults) — all at "very high" veracity standard. Until tested, correct value is `unverified`.

Fix: `veracityStatus: unverified`

---

### 1.11 `description` — character count

**PASS** — "Run go-livepeer as a transcoding orchestrator: create your wallet, configure your node, register, and verify." = 106 chars, subject-first, no self-reference, UK English. Within 160-char limit.

---

### 1.12 OG image block — incomplete

**HIGH** — checks.mdx §1.12

Only `og:image` is present as a single key. The full 5-field OG block is absent. Per checks.mdx §1.12, all 5 OG fields must be present with correct fallback path.

Fix: add the standard OG block (consult site-wide OG block pattern for exact fields).

---

### 1.13 Keywords — generic and non-searcher-intent

**MEDIUM** — checks.mdx §1.13

Current keywords: `livepeer`, `orchestrators`, `quickstart`, `transcoding`, `go-livepeer` — these are the title restated, not searcher-intent terms. Per checks.mdx §1.13: "Bad: `'livepeer', 'orchestrator'`. Good: `'run livepeer orchestrator node', 'GPU transcoding setup', 'AI inference pipeline livepeer'`."

Fix — replace with intent-aligned terms:
```yaml
keywords:
  - run go-livepeer orchestrator
  - livepeer transcoding node setup
  - docker orchestrator quickstart
  - register orchestrator livepeer
  - arbitrum-one-mainnet orchestrator
```

---

## Category 2 — Voice & Copy

### 2.1 UK English

**PASS** — No US spellings detected in visible prose.

---

### 2.2 Banned words scan

**PASS** — None of `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` are present.

---

### 2.3 Banned phrases scan

Line 22: `"This is the canonical quickstart for running a transcoding orchestrator."`

**HIGH** — checks.mdx §2.3, Frameworks.mdx §3.3

This is a self-referential page-description opener ("This is the canonical..."). It describes the document rather than leading with content. Per voice principle "Entity-led voice": the subject of a sentence is the system, node, user, or action — not the documentation.

Fix: Delete line 22 entirely and open with Step 2 content directly (the imported `<EthAccountSetup />` snippet contains Step 1), or replace with a single sentence that leads with the operator outcome: "A Livepeer transcoding orchestrator earns fees by processing video segments; these steps take you from zero to a registered, verifiable node."

---

### 2.4 Banned constructions

Line 95 (inside `<Note>`): `"If you are running CPU-only transcoding, remove GPU-specific runtime settings."`

**MEDIUM** — checks.mdx §2.4

The construction `if [condition]` in body prose. Per the banned constructions rule, conditions in body prose should be resolved as a direct requirement statement.

Fix: "CPU-only transcoding: remove `deploy.resources.reservations.devices` from the compose file. The `NVIDIA_VISIBLE_DEVICES` env var is also unnecessary."

---

Line 145: `"Once both services are running, verify an end-to-end transcoding session."`

**MEDIUM** — checks.mdx §2.4

"Once" is a conditional time-gate construction equivalent to `if [condition]`. State the action directly.

Fix: "With both services running, verify an end-to-end session."

---

### 2.5 Opening order

Line 22: `"This is the canonical quickstart for running a transcoding orchestrator."`

**HIGH** — checks.mdx §2.5

Opening sentence describes the document, not the reader benefit. The page opens with a self-classification, not with value, outcome, or fact. Per checks.mdx §2.5: "Introduction opens with subject, not caveat or self-reference."

Fix: Remove or replace as described in §2.3 above.

---

### 2.9 Passive value statements

**PASS** — No unquantified value claims detected. The page is procedural and does not make comparative earnings claims.

---

### 2.10 Hedging openers

Lines 22: self-referential opener (flagged above in 2.5). No hedging caveats detected.

---

### 2.11 Terminology

Line 63: `"Use this compose template as a baseline and replace placeholders."`

**INFO** — Observation only. "Baseline" is acceptable; "placeholders" is plain technical language. No deprecated terms detected in body prose. Docker-compose flags use correct CLI terminology (`-network=arbitrum-one-mainnet`, `-orchestrator`, etc.).

---

## Category 3 — Section Naming & Headings

**Note:** `Related Pages` heading (line 167) is EXEMPT from all heading checks per checks.mdx §3.1 and §3.2.

### Heading Score Table

| Heading | Line | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass (≥20) |
|---|---|---|---|---|---|---|---|---|
| Step 2: Prerequisites | 26 | 4 | 3 | 5 | 5 | 5 | **22** | Yes |
| Step 3: Configure and run | 61 | 3 | 2 | 4 | 4 | 4 | **17** | No — FAIL |
| Step 4: Register as an orchestrator | 106 | 4 | 3 | 5 | 5 | 3 | **20** | Yes (borderline) |
| Step 5: Verify your node | 133 | 4 | 3 | 5 | 5 | 5 | **22** | Yes |
| Testing end-to-end with a Gateway | 143 | 3 | 2 | 4 | 4 | 4 | **17** | No — FAIL |

---

#### Step 3: Configure and run — FAIL (17/25)

**MEDIUM** — checks.mdx §3.1

- Precision (3): "Configure and run" names two generic actions without naming what is being configured or run. Could apply to any software installation step.
- Depth (2): No domain noun. Misses the governing concept (Docker Compose deployment, node bring-up).
- Stability (4): Will survive content changes.
- Clarity (4): Understood, but generic.
- Conciseness (4): Short, but generic.

Fix: `Node Deployment` or `Run the Node` — both score higher. Preferred: `Node Deployment` (Precision 5, Depth 4, Stability 5, Clarity 5, Conciseness 5 = 24/25).

---

#### Testing end-to-end with a Gateway — FAIL (17/25)

**MEDIUM** — checks.mdx §3.1, §3.3

- Precision (3): Describes what to do but not what is being demonstrated.
- Depth (2): No governing concept. "Testing" is a gerund action label, not a concept name.
- Stability (4): Stable but generic.
- Clarity (4): Clear but wordy.
- Conciseness (4): 5 words but contains redundancy ("end-to-end with a Gateway").

Additionally, this heading is borderline on check 3.3 (literal contrast label check): it names participants rather than the governing concept.

Fix: `End-to-End Session Validation` (Precision 5, Depth 4, Stability 5, Clarity 5, Conciseness 4 = 23/25).

---

### 3.6 Title well-formed

**PASS** — `video-transcoding` → `Video Transcoding Quickstart` in `title`, `Video Transcoding` in `sidebarTitle`. "Video Transcoding" is concept-derived, 2 words, no banned forms. `sidebarTitle` is 2 words and clean.

---

### 3.2 Banned terms check

**PASS** — No `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next` in any heading.

---

## Category 4 — Page Structure & Content Architecture

### 4.1 One purpose, one job

**PASS** — The page has one job: take an orchestrator from zero to a registered, verifiable transcoding node. All sections serve that job. The "Testing end-to-end" section at line 143 expands scope slightly (involves a second service, gateway), but is framed as an optional verification step rather than a separate purpose.

---

### 4.2 Purpose statement test

**PASS** — Can state: "This page lets the orchestrator run go-livepeer as a registered transcoding node on Arbitrum One." Scope is clear.

---

### 4.3 PREV/NEXT adjacency

**INFO — navigate by position in docs.json**

Nav sequence (docs.json lines 2850–2853):
1. `v2/orchestrators/quickstart/guide` (PREV)
2. `v2/orchestrators/quickstart/video-transcoding` (THIS)
3. `v2/orchestrators/quickstart/tutorial` (NEXT)
4. `v2/orchestrators/quickstart/AI-prompt-start`

- PREV (`guide`): The quickstart guide page should orient the reader to the quickstart section and explain which path to take. Reader arriving from `guide` should be primed to follow the video transcoding path. **Cannot confirm without reading `guide.mdx` — flag for adjacency check.**
- NEXT (`tutorial`): Reader leaving this page should know they can proceed to the full tutorial for deeper setup. The page's "Related Pages" cards do not link to `tutorial` — they link to `job-types`, `install-go-livepeer`, and `cli-flags`. No explicit handoff to NEXT page exists.

**MEDIUM** — checks.mdx §4.3 — no explicit handoff to the NEXT page in the nav sequence (`tutorial`).

---

### 4.4 No dead ends

**MEDIUM** — checks.mdx §4.4

The page has a "Related Pages" section and a gateway cross-link card, but no explicit "next step" for the orchestrator's journey after verifying. The reader who completes this page doesn't know whether to go to `tutorial`, `setup/guide`, or `resources`. The related pages cards point at reference and setup pages — not the natural continuation.

Fix: Add a clear "next step" card pointing to `v2/orchestrators/quickstart/tutorial` or `v2/orchestrators/setup/guide`.

---

### 4.5 Prerequisites stated or linked

**INFO** — Prerequisites are present in the Step 2 table (lines 28–59). However, they assume the reader has completed "Step 1" (ETH account setup), which is injected via `<EthAccountSetup />`. The step numbering starts at Step 2 — Step 1 is implicit inside the imported snippet. This is acceptable if the snippet renders as Step 1, but should be verified.

---

### 4.8 Content duplication

**INFO** — The page shares flags (`-network=arbitrum-one-mainnet`, `-orchestrator`, `-transcoder`) with the setup section. This is expected for a quickstart (self-contained). Not flagged as a problem unless the setup section explicitly says "see the quickstart."

---

## Category 5 — Layout, Components & Template

**Note:** `docs-guide/catalog/components-catalog.mdx` was not read. Component approval status is NOT-TESTED per instruction.

### 5.1 Template for `instruction` / `quickstart` variant

Per checks.mdx §5.2 component matrix, `instruction` pages require: `Prerequisites`, `Steps`. Present: Prerequisites (Step 2 table), Steps (Step 3, 4, 5 via `StyledSteps`/`StyledStep`). Both required sections are present.

**PASS** (conditional on pageType migration — once `pageType: instruction` + `pageVariant: quickstart` are set).

---

### 5.2 Required sections

- Prerequisites: **PASS** (line 26–59)
- Steps: **PASS** (Steps 3–5 with `StyledSteps`/`StyledStep` components)
- Next Steps: **ABSENT** — no explicit "Next Steps" section. "Related Pages" is present but serves as cross-links, not a directional next step.

**MEDIUM** — checks.mdx §5.2 — instruction/quickstart template requires a clear Next Steps section or equivalent directional card.

---

### 5.3 Approved components

Components used:
- `StyledSteps`, `StyledStep` — imported from `/snippets/components/layout/steps.jsx`
- `CustomCodeBlock` — imported from `/snippets/components/content/code.jsx`
- `StyledTable`, `TableRow`, `TableCell` — imported from `/snippets/components/wrappers/tables/Tables.jsx`
- `EthAccountSetup` — imported from `/snippets/pages/08_SHARED/eth-account-setup.mdx`
- `Note` — Mintlify native
- `Card`, `CardGroup` — Mintlify native

Component catalog not read → **NOT-TESTED**.

---

### 5.6 MDX render — CRITICAL import path broken

**CRITICAL** — checks.mdx §5.6, §8.3

Line 19: `import EthAccountSetup from '/snippets/pages/08_SHARED/eth-account-setup.mdx'`

The file at `/snippets/pages/08_SHARED/eth-account-setup.mdx` **does not exist**. The snippet exists at `/snippets/composables/pages/shared/eth-account-setup.mdx` (confirmed by file system check).

This is a broken import — the page will fail to render in production.

Fix:
```jsx
import EthAccountSetup from '/snippets/composables/pages/shared/eth-account-setup.mdx'
```

---

### 5.7 Old-schema frontmatter

**CRITICAL** — checks.mdx §5.7

`pageType: quickstart` is a deprecated 12-type value (see Category 1 findings). Must be migrated.

---

## Category 6 — Veracity & Factual Accuracy

### 6.1 Factual claims

The page contains the following procedural and factual claims requiring verification:

| Claim | Line(s) | Information type | Risk |
|---|---|---|---|
| `image: livepeer/go-livepeer:master` | 71 | technical | HIGH — `master` tag is a moving target; should pin to a tagged release |
| `restart: unless-stopped` | 72 | procedural | Low — standard Docker behaviour |
| Port `8935` (orchestrator) | 52, 74–75 | factual | Medium — verify current default |
| Port `7935` (metrics optional) | 52, 75 | factual | Medium — verify current default |
| `-pricePerUnit=1000` | 87 | technical | HIGH — default value may be outdated; needs cross-reference with CLI flags reference |
| `-pixelsPerUnit=1000000000000` | 88 | technical | HIGH — needs cross-reference with CLI flags reference |
| `-maxSessions=10` | 89 | technical | Medium — default value |
| `-blockRewardCut 5.0` | 124 | technical | HIGH — high-staleness term per Frameworks.mdx §3.4 |
| `-feeShare 10.0` | 125 | technical | HIGH — high-staleness; fee share default may differ |
| `livepeer_cli -cmd status` | 138 | technical | HIGH — CLI flag format; verify `cmd` syntax is current |
| Explorer link `https://explorer.livepeer.org/orchestrators` | 141 | factual | Medium — verify URL is live and current |

**CRITICAL** — checks.mdx §6.1, §6.6

The page contains `technical` and `procedural` information types, both at "very high" veracity standard. `veracityStatus` is absent from frontmatter (finding in Category 1). When set, it must be `unverified` until all claims above are tested.

---

### 6.2 Code/commands tested

**CRITICAL** — checks.mdx §6.2

No evidence that the `docker-compose.yml` template, `docker compose up -d`, `livepeer_cli`, or `curl http://localhost:7935/status` commands have been executed and verified. All procedural content is at "very high" standard.

Add `{/* REVIEW: [claim] — [what needs checking] */}` markers inline for each unverified command block.

Suggested REVIEW flags:
- After line 92 (docker-compose block): `{/* REVIEW: go-livepeer:master — pin to a tagged release; master is a moving target and unpinned deploys will drift */}`
- After line 104 (docker compose up): `{/* REVIEW: docker compose up — needs execution test in correct environment to confirm container starts */}`
- After line 138 (curl + cli status): `{/* REVIEW: livepeer_cli -cmd status — verify -cmd flag syntax is current in latest tagged release */}`

---

### 6.3 Deprecated API usage

**HIGH** — checks.mdx §6.3, Frameworks.mdx §3.4

Line 71: `image: livepeer/go-livepeer:master` — using the `master` tag pins to an unversioned moving target. This is not a deprecated API flag, but is a high-risk unpinned dependency. All documentation should reference a stable tagged release.

Fix: Replace with `image: livepeer/go-livepeer:<LATEST_STABLE_TAG>` and add a note that the latest release tag can be found at the go-livepeer GitHub releases page.

---

### 6.4 Numbers are real

**HIGH** — checks.mdx §6.4

`-pricePerUnit=1000` and `-pixelsPerUnit=1000000000000` at lines 87–88 are presented as baseline defaults without a source citation. Per Frameworks.mdx §3.4 ("CLI flag names and defaults" is a high-staleness term). These values need cross-referencing against the CLI flags reference page or the go-livepeer codebase defaults.

---

### 6.8 Source staleness

**HIGH** — checks.mdx §6.8

`-blockRewardCut` and `-feeShare` defaults (lines 124–125) are high-staleness values per Frameworks.mdx §3.4. The page presents `5.0` and `10.0` as example values with no caveat that these are illustrative, not recommended defaults. A reader running this verbatim sets themselves at potentially non-competitive fee levels.

Fix: Add an INFO callout: "These values are illustrative. Set `blockRewardCut` and `feeShare` based on your target positioning — see the pricing strategy guide."

---

## Category 7 — Navigation & Information Architecture

### 7.1 Page in docs.json

**PASS** — `v2/orchestrators/quickstart/video-transcoding` is at docs.json line 2851.

---

### 7.2 Navigation matches file system

**PASS** — File exists at `v2/orchestrators/quickstart/video-transcoding.mdx`.

---

### 7.7 File in correct lane

**PASS** — File is in `v2/orchestrators/quickstart/` (publishable lane). Not in `_workspace/`.

---

### 7.8 File naming conventions

**PASS** — `video-transcoding.mdx` uses kebab-case, no deprecated prefixes, no `-index.mdx` suffix.

---

## Category 8 — Links & Rendering

### 8.1 Internal links

| Link text | Path | Status |
|---|---|---|
| Livepeer Explorer | `https://explorer.livepeer.org/orchestrators` | External — NOT-TESTED (verify live) |
| Gateway Quickstart (Card) | `/v2/gateways/quickstart/gateway-setup` | PASS — confirmed in docs.json line 2588 |
| Orchestrator Job Types (Card) | `../concepts/job-types` | **CRITICAL — file does not exist** |
| Install go-livepeer (Card 1) | `/v2/orchestrators/setup/install-go-livepeer` | **CRITICAL — file does not exist** |
| Connect to Arbitrum (Card 2) | `/v2/orchestrators/setup/install-go-livepeer` | **CRITICAL — same broken path as above + duplicate href** |
| CLI flags reference (Card) | `../resources/cli-flags` | **HIGH — file exists at `resources/technical/cli-flags.mdx`, path resolves to `resources/cli-flags.mdx` which does not exist** |

---

### 8.1 — CRITICAL: `../concepts/job-types` does not exist

**CRITICAL** — checks.mdx §8.1

Line 170–172:
```
<Card title="Orchestrator Job Types" icon="layer-group" href="../concepts/job-types" arrow>
  Compare transcoding, realtime AI, and batch AI paths.
</Card>
```

No file at `v2/orchestrators/concepts/job-types.mdx`. This is a dead link.

Fix: Update `href` to the correct existing concepts page (e.g., `../concepts/capabilities` or `../concepts/role`) or remove the card until the target page exists.

---

### 8.1 — CRITICAL: `/v2/orchestrators/setup/install-go-livepeer` does not exist

**CRITICAL** — checks.mdx §8.1

Lines 173–177:
```
<Card title="Install go-livepeer" ... href="/v2/orchestrators/setup/install-go-livepeer" ...>
<Card title="Connect to Arbitrum" ... href="/v2/orchestrators/setup/install-go-livepeer" ...>
```

No file at `v2/orchestrators/setup/install-go-livepeer.mdx`. The install file is `v2/orchestrators/setup/rs-install.mdx` (confirmed by file system check). Both cards use the same broken path.

Additionally, both cards pointing to the same broken URL is likely a copy error — "Connect to Arbitrum" should point to a different page.

Fix:
- "Install go-livepeer" card: `href="/v2/orchestrators/setup/rs-install"`
- "Connect to Arbitrum" card: locate the correct Arbitrum connection page (e.g., `setup/configure` or a resources page) and update accordingly.

---

### 8.1 — HIGH: `../resources/cli-flags` resolves incorrectly

**HIGH** — checks.mdx §8.1

Line 179:
```
<Card title="CLI flags reference" ... href="../resources/cli-flags" ...>
```

From `v2/orchestrators/quickstart/`, `../resources/cli-flags` resolves to `v2/orchestrators/resources/cli-flags.mdx`. The actual file is at `v2/orchestrators/resources/technical/cli-flags.mdx`.

Fix: `href="../resources/technical/cli-flags"` or use the absolute path `/v2/orchestrators/resources/technical/cli-flags`.

---

### 8.3 Snippet import broken

**CRITICAL** — checks.mdx §8.3

Line 19: `import EthAccountSetup from '/snippets/pages/08_SHARED/eth-account-setup.mdx'`

Directory `/snippets/pages/08_SHARED/` does not exist. File exists at `/snippets/composables/pages/shared/eth-account-setup.mdx`.

This will cause a build failure.

Fix: `import EthAccountSetup from '/snippets/composables/pages/shared/eth-account-setup.mdx'`

---

## Category 9 — Process & Governance

### 9.1 Human sign-off

**INFO** — No evidence of human sign-off in the file. This is expected at the current stage (pre-veracity-pass).

---

### 9.3 Gate prerequisites

**INFO** — Per `tab-status.md`, Orchestrators tab is at "Content Scan in progress / IA Draft only." No content pass gate is open. This page is being checked as part of the pre-gate quality audit. Gate compliance is a pipeline-level flag, not a page-level fix.

---

## Banned Construction Scan — Full Pass

Scanning all visible text including component props, heading text, Note content, and card descriptions.

| Location | Text | Construction | Verdict |
|---|---|---|---|
| Line 22 | `"This is the canonical quickstart for running a transcoding orchestrator."` | `This [verb]` self-reference | **FLAG — HIGH** |
| Line 63 | `"Use this compose template as a baseline and replace placeholders."` | `Use this [noun]` instruction (borderline; acceptable imperative) | OK |
| Line 95 | `"If you are running CPU-only transcoding, remove GPU-specific runtime settings."` | `if [condition]` in body prose | **FLAG — MEDIUM** |
| Line 117 | `"Use Invoke multistep wizard in CLI, or run flags directly:"` | Acceptable imperative | OK |
| Line 145 | `"Once both services are running, verify an end-to-end transcoding session."` | `Once [condition]` temporal gate | **FLAG — MEDIUM** |
| Line 149 | `"Configure gateway routing to your orchestrator service URI:"` | Acceptable imperative | OK |
| Line 156 | `"Use the gateway quickstart ingest flow."` | Acceptable imperative | OK |
| Line 164 | `"Use this to run gateway-side setup and stream validation."` | `Use this to [verb]` self-referential card description | **FLAG — INFO** |
| Line 171 | `"Compare transcoding, realtime AI, and batch AI paths."` | Acceptable card description | OK |

---

## Spelling & Typo Check

All visible text scanned:

| Location | Text | Issue |
|---|---|---|
| Line 22 | `canonical quickstart` | No typo. |
| Line 26 | `Step 2: Prerequisites` | No typo. |
| Line 61 | `Step 3: Configure and run` | No typo. |
| Line 106 | `Step 4: Register as an orchestrator` | No typo. |
| Line 133 | `Step 5: Verify your node` | No typo. |
| Line 143 | `Testing end-to-end with a Gateway` | Capitalised "Gateway" inconsistent with lowercase "orchestrator" elsewhere. **INFO.** |
| Line 149 | `orchestrator service URI` | "URI" all-caps — correct. |
| Line 156 | `ingest flow` | Correct. |
| Line 164 | `gateway-side` | Hyphenated correctly. |
| Line 171 | `realtime AI` | Consistent with project usage — no issue. |
| Line 173 | `go-livepeer` | Consistent lowercase — correct. |

No spelling errors detected. One capitalisation inconsistency noted (INFO).

---

## Component Matrix

| Component | Used | Template requires | Status |
|---|---|---|---|
| `StyledSteps` / `StyledStep` | Yes (lines 108–131, 147–161) | Steps/Step | NOT-TESTED (catalog not read) |
| `CustomCodeBlock` | Yes (lines 65–92, 100–104, 110–114, 119–129, 135–139) | CodeGroup or equivalent | NOT-TESTED |
| `StyledTable` / `TableRow` / `TableCell` | Yes (lines 28–59) | Table | NOT-TESTED |
| `EthAccountSetup` (MDX import) | Yes (line 24) | N/A — composable snippet | BROKEN IMPORT (see §8.3) |
| `Note` (Mintlify native) | Yes (lines 94–96) | Permitted for instruction | NOT-TESTED |
| `Card` / `CardGroup` | Yes (lines 163–182) | Permitted for related/next-step | NOT-TESTED |

Component approval status requires reading `docs-guide/catalog/components-catalog.mdx`. All statuses above are NOT-TESTED.

---

## Cross-Category Connections

| Finding | Categories | Severity |
|---|---|---|
| `pageType: quickstart` deprecated | 1.2, 5.7 | CRITICAL |
| Broken snippet import (`/snippets/pages/08_SHARED/`) | 5.6, 8.3 | CRITICAL |
| `../concepts/job-types` dead link | 8.1 | CRITICAL |
| `/v2/orchestrators/setup/install-go-livepeer` dead link (×2) | 8.1 | CRITICAL |
| `veracityStatus` absent; procedural content unverified | 1.8, 6.1, 6.2, 6.6 | CRITICAL |
| `purpose`, `complexity`, `lifecycleStage` fields missing | 1.1, 1.4, 1.6, 1.7 | CRITICAL |
| Self-referential opener | 2.3, 2.5 | HIGH |
| `go-livepeer:master` unpinned image | 6.3, 6.8 | HIGH |
| `../resources/cli-flags` incorrect relative path | 8.1 | HIGH |
| Step 3 heading below 20/25 | 3.1 | MEDIUM |
| "Testing end-to-end with a Gateway" heading below 20/25 | 3.1 | MEDIUM |
| No NEXT page handoff | 4.3, 4.4 | MEDIUM |
| No explicit Next Steps section | 5.2 | MEDIUM |
| `blockRewardCut`/`feeShare` defaults presented without caveat | 6.8 | HIGH |
| Keywords generic | 1.13 | MEDIUM |
| OG block incomplete | 1.12 | HIGH |

---

## Blocking Decisions

The following items require human decision before the page can proceed to publication:

| # | Decision | Owner | Blocks |
|---|---|---|---|
| B-1 | Confirm `pageType: instruction` + `pageVariant: quickstart` migration (per D-NAV-01 pattern, overriding any prior pageType choice) | Alison | Category 1, 5 |
| B-2 | Identify correct replacement for `../concepts/job-types` dead link — either the target page must be created or the card must point to an existing page | Alison | Category 8 |
| B-3 | Identify correct target for "Connect to Arbitrum" card (both install cards currently use the same broken path) | Alison | Category 8 |
| B-4 | Confirm `go-livepeer:master` should be replaced with a pinned release tag, and identify which tag should be the documentation default | Alison / SME | Category 6 |
| B-5 | Verify `-pricePerUnit`, `-pixelsPerUnit`, `-blockRewardCut`, `-feeShare` default values are current — or mark as illustrative and add caveat | Alison / SME | Category 6 |
| B-6 | Execute all CLI commands and docker-compose sequence in a live environment to validate procedural content | SME | Category 6 (veracity) |

---

## Summary Verdict

**NEEDS WORK** — 5 CRITICAL blockers (broken import, 2 dead links, deprecated `pageType`, missing `veracityStatus`), 5 HIGH findings (self-referential opener, broken OG block, unpinned docker image, stale flag defaults, incorrect relative link), and multiple MEDIUM findings (2 headings below threshold, no NEXT handoff, missing required template section). The page cannot render in production due to the broken `EthAccountSetup` import path. The three dead card links will 404 on click. No finding requires a structural rewrite — all fixes are targeted edits — but the broken import and dead links must be resolved before this page ships.
