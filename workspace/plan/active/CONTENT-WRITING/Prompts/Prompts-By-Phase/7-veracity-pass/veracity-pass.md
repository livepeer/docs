# Livepeer Docs — Veracity Pass (Phase 7)

**Version**: 1.0 — 2026-03-23
**Status**: DRAFT — awaiting human approval after test runs
**Pack guide**: `pack-guide.md` in this directory
**Framework**: `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` (LOCKED)
**Source library**: `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md` (45 sources)

---

## Claim-Type Coverage Analysis

> This section documents the design decisions that shaped the veracity pass prompt. It was produced by classifying claim types found in sample Gateways content (`v2/gateways/`) against the 45-source veracity library. This analysis is the prerequisite for building the confidence scoring matrix, auto-resolve rules, and staleness matrix that follow.

### Methodology

Five representative files were sampled from `v2/gateways/`:

1. `v2/gateways/resources/go-livepeer/cli-reference.mdx` — CLI flags and defaults
2. `v2/gateways/guides/payments-and-pricing/x-resources/v2-payments--how-payments-work.mdx` — payment mechanics and contract references
3. `v2/gateways/resources/technical/orchestrator-offerings.mdx` — protobuf data structures, registration parameters
4. `v2/gateways/guides/payments-and-pricing/x-resources/v2-opcon--economics.mdx` — protocol economic model
5. `v2/gateways/resources/technical/arbitrum-rpc.mdx` — RPC endpoint references

Claim types extracted, classified, and mapped to library sources below.

---

### Claim-Type Coverage Table

| # | Claim Type | Example from sample content | Source(s) from veracity-library | Auto-resolvable? | Staleness category | Confidence threshold |
|---|---|---|---|---|---|---|
| 1 | CLI flag name | `-selectRandFreq`, `-maxSessions`, `-orchSecret` | go-livepeer (primary); go-livepeer CLI Reference (primary) | Yes | cli-sdk | 85% |
| 2 | CLI flag default value | `maxSessions` default `10`; `selectRandFreq` default `0.3` | go-livepeer (primary); go-livepeer CLI Reference (primary) | Yes | cli-sdk | 85% |
| 3 | CLI flag description / behaviour | "Maximum number of concurrent transcoding sessions" | go-livepeer (primary); go-livepeer CLI Reference (primary) | Yes | cli-sdk | 85% |
| 4 | Contract address (named contract) | `TicketBroker` contract on Arbitrum | Smart Contract Addresses — Livepeer Docs Reference (primary); Protocol Contracts Repository (primary) | No — NEVER auto-resolve | contract | Never |
| 5 | Contract address (actual hex value) | Any `0x...` address in content | Smart Contract Addresses — Livepeer Docs Reference (primary) | No — NEVER auto-resolve | contract | Never |
| 6 | Governance parameter (inflation rate) | "0.00005% per round" inflation adjustment | LIP Repository (primary); Delegator Yield Calculation Guide (primary) | No — NEVER auto-resolve | governance | Never |
| 7 | Governance parameter (active set size) | Active set maximum (number of active orchestrators) | Livepeer Explorer On-Chain (primary); Protocol Contracts Repository (primary); LIP Repository (primary) | No — NEVER auto-resolve | governance | Never |
| 8 | Governance parameter (target bonding rate) | Target bonding rate 50% | LIP Repository (primary); Delegator Yield Calculation Guide (primary) | No — NEVER auto-resolve | governance | Never |
| 9 | Governance parameter (unbonding period) | Unbonding period in rounds | Protocol Contracts Repository (primary); Livepeer Explorer On-Chain (primary) | No — NEVER auto-resolve | governance | Never |
| 10 | Governance parameter (reward cut / fee share) | `-blockRewardCut=5.0`, `-feeShare=10.0` | LIP Repository (primary); Livepeer Explorer On-Chain (primary) | No — NEVER auto-resolve | governance | Never |
| 11 | Protocol role description | "Gateways do not earn money at the protocol level" | Livepeer Whitepaper (primary); Livepeer Docs v2 (primary) | Yes | conceptual | 90% |
| 12 | Payment mechanism description | "Probabilistic micropayments (PM)"; ticket lottery mechanics | Livepeer Whitepaper (primary); Livepeer Streamflow Spec (primary); Livepeer Docs v2 (primary) | Yes | conceptual | 90% |
| 13 | Protobuf / data structure field | `OrchestratorInfo` message field names and types | go-livepeer (primary) | Yes — verify against current release | cli-sdk | 85% |
| 14 | Protocol architecture claim | "O-T split" — orchestrator/transcoder separation | Livepeer Streamflow Spec (primary); Livepeer Whitepaper (primary) | Yes | conceptual | 95% |
| 15 | Feature availability claim | "AI Processing: Text-to-image, image-to-video, upscaling" | Livepeer AI Documentation (primary); go-livepeer (primary) | Yes — verify against release | feature | 80% |
| 16 | AI pipeline / model type claim | Named pipeline types (text-to-image, segment-anything-2, etc.) | Livepeer AI Documentation (primary); livepeer-ai-js (primary); livepeer-ai-sdks (primary) | Yes — verify against release | feature | 80% |
| 17 | Fee / pricing model description (structural) | "Base Pricing: Per-pixel rates via -pricePerUnit" | go-livepeer (primary); go-livepeer CLI Reference (primary) | Yes | cli-sdk | 85% |
| 18 | Fee / pricing data (live market values) | Actual per-pixel prices charged by orchestrators | Orchestrator Price API (acceptable); Livepeer Explorer On-Chain (primary) | No — re-verify every 90 days or on >20% utilisation change | economic | 80% |
| 19 | Network utilisation / capacity metric | Active orchestrator count, capacity figures | Livepeer Explorer On-Chain (primary); Shtuka Research livepeer-data-geography v1 (primary) | No — re-verify every 90 days or on >20% utilisation change | economic | 80% |
| 20 | Treasury balance / governance proposal state | Treasury balance, proposal vote counts | Community Treasury On-Chain (primary); Livepeer Explorer On-Chain (primary) | No — NEVER auto-resolve (live governance-controlled) | governance | Never |
| 21 | LIP / SPE reference (status of proposal) | "LIP-89 introduced LivepeerGovernor" | LIP Repository (primary) | Yes — historical LIPs (accepted/deployed) are factual; pending LIPs are never auto-resolvable | governance | 90% for accepted; Never for pending |
| 22 | Navigation / site structure reference | "see the Remote Signer guide at /v2/gateways/payments/remote-signers" | docs.json (primary) | Yes — verify path exists in docs.json | structural | 95% |
| 23 | External RPC endpoint / URL | Arbitrum RPC URLs from Chainlist | Arbitrum LPT Bridge Repository (primary); Chainlist (external) | No — RPC endpoints change; always flag with [verify-live] | contract | Never |
| 24 | Version number (software release) | go-livepeer version numbers, SDK versions | go-livepeer (primary); go-livepeer CLI Reference (primary) | No — must pin to stated version; flag if undated | cli-sdk | 85% |
| 25 | Deprecated terminology reference | "Broadcaster" as former term for Gateway | Livepeer Whitepaper (primary) — noted as deprecated | Yes — flag deprecated usage for replacement with current term | conceptual | 90% |

---

### Coverage Gaps Identified

1. **Live market pricing data**: The veracity library has no single authoritative source for real-time per-pixel price data. The Orchestrator Price API (acceptable tier) is the closest. Economic claims about "typical" or "current" pricing MUST be flagged `[verify-live]` regardless of source.

2. **AI model availability by orchestrator**: No authoritative source tracks which specific model IDs are currently active across the network. Capability claims of the form "orchestrators support X model" must always be flagged — verify against Livepeer AI Documentation + Livepeer Explorer.

3. **Hardware requirements for AI workloads**: GPU specs and VRAM requirements evolve. The go-livepeer repo is the closest source but hardware requirements are not formally documented. Flag all hardware requirement claims for human verification.

4. **SPE / grant programme status**: The `workspace/plan/active/CONTENT-WRITING/` area references SPE grant models (`old--spe-grant-model.mdx`). The veracity library has no authoritative source for current SPE programme status. All SPE/funding programme claims must be flagged — verify against current Livepeer Forum announcements.

---

### Staleness Category Definitions (Derived from Claim-Type Analysis)

| Category | Trigger | Examples |
|---|---|---|
| `governance` | Any on-chain parameter set by governance vote | Inflation rate, active set size, unbonding period, target bonding rate, treasury parameters |
| `cli-sdk` | CLI flag names, defaults, API method signatures | `-maxSessions`, `-selectRandFreq`, SDK method signatures, protobuf fields |
| `contract` | Contract addresses, hex values, ABI definitions | `TicketBroker` address, external RPC URLs |
| `economic` | Live market data, utilisation metrics, pricing data | Per-pixel prices, network utilisation %, capacity figures |
| `feature` | Feature availability, AI pipeline types, product capability claims | AI pipeline types, model IDs, BYOC status |
| `conceptual` | Protocol architecture, role descriptions, mechanism explanations | O-T split, probabilistic micropayments, gateway role |

---

---

## Veracity Pass Prompt

**Your task**: Execute the veracity pass on the page provided. Work through all phases in order. Do not summarise instructions. Begin the pre-flight check immediately.

**Scope**: This pass verifies factual accuracy of claims. It does NOT rewrite content, change voice, alter structure, or make layout decisions. Output is the same page with REVIEW markers added and `veracityStatus` set.

---

## Context Block

_Fill all fields before running. Missing fields block the pass._

```
PAGE_PATH:          [absolute path to the .mdx page being verified]
TAB:                [tab name]
PAGE_TYPE:          [concept / tutorial / guide / instruction / navigation / reference / resource]
PURPOSE:            [orient / explain / learn / choose / evaluate / start / build / configure /
                     operate / troubleshoot / verify / integrate / optimise / reference / update]
AUDIENCE:           [gateway / orchestrator / developer / builder / delegator / community / founder]
PRIMARY_CLAIM_CATEGORIES: [list the main staleness categories expected: governance / cli-sdk /
                            contract / economic / feature / conceptual]

VERACITY_LIB:       workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md
VERACITY_FRAMEWORK: workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md
TERMINOLOGY_LOCK:   [path to Phase 3.5 terminology lock for this tab — or "none" if not yet run]
AUDIENCE_DESIGN:    [path to Phase 1 canonical audience design output for this tab]
```

---

## Pre-flight Checks

Confirm ALL of the following before running. This pass must not start if any item is unchecked.

- [ ] Page has passed Phase 6 (WRITE or REWRITE complete) — content is approved
- [ ] Phase 8 (naming audit) has been completed for this page — section titles are final. **Phase 8 must execute BEFORE Phase 7. If naming changes section titles after veracity markers are placed, the markers become orphaned.**
- [ ] `veracity.md` is LOCKED (status is not DRAFT)
- [ ] `veracity-library.md` is loaded in context
- [ ] Tab terminology is locked (or explicitly noted as not yet run)
- [ ] `veracityStatus` field is present (or absent — you will set it)

If Phase 8 has NOT run: stop. Return: "Phase 8 (naming audit) must complete before Phase 7 can run. Veracity markers placed on draft section titles will become orphaned if section titles change."

---

## Phase 1 — Read and Map the Page

Read the full page. For each section, identify:

1. **Section title** (or "intro" for untitled opening content)
2. **Information type** (from the 9 types in `veracity.md`): `factual` / `technical` / `procedural` / `change` / `evaluative` / `structural` / `analytical` / `conceptual` / `narrative`
3. **Veracity standard** derived from information type:
   - `factual`, `technical`, `procedural`, `change` → Very high
   - `evaluative`, `structural` → High
   - `analytical`, `conceptual` → Medium
   - `narrative` → Lower (embedded factual claims inherit Very high)
4. **Claim list**: List every discrete factual claim in the section that requires verification. A claim is any specific statement that could be true or false: a number, a flag name, a default value, an address, a feature description, a protocol parameter, an architecture statement, a role description.

Produce a Section Map:

```
Section: [title]
Information type: [type]
Veracity standard: [Very high / High / Medium / Lower]
Claims to verify:
  - [claim 1]
  - [claim 2]
  ...
```

Repeat for every section. This map drives the next phase.

---

## Phase 2 — Classify Each Claim

For every claim in the Section Map, assign:

1. **Claim type** (from the Claim-Type Coverage Analysis table above):
   - `cli-flag-name`, `cli-flag-default`, `cli-flag-description`
   - `contract-address-named`, `contract-address-hex`
   - `governance-parameter`
   - `protocol-role-description`, `protocol-architecture`
   - `payment-mechanism`
   - `protobuf-data-structure`
   - `feature-availability`, `ai-pipeline-type`
   - `fee-model-structural`, `fee-data-live`
   - `network-utilisation-metric`
   - `treasury-governance-state`
   - `lip-reference`
   - `navigation-structure`
   - `external-rpc-url`
   - `version-number`
   - `deprecated-terminology`
   - `conceptual-claim` (general protocol/architecture explanations)

2. **Staleness category**: `governance` / `cli-sdk` / `contract` / `economic` / `feature` / `conceptual`

3. **Auto-resolvable?** (apply rules from Phase 3 below before deciding)

---

## Phase 3 — Confidence Scoring Matrix and Auto-Resolve Rules

### Confidence Scoring Matrix

Apply this matrix to every claim classified in Phase 2:

| Information type + claim category | Auto-resolve threshold | Notes |
|---|---|---|
| Protocol concepts (stable architecture) — `conceptual` | 95% | O-T split, PM mechanics, role definitions. Flag only if directly contradicts whitepaper |
| CLI flags / SDK API — `cli-sdk` | 85% | Re-verify on every major go-livepeer / SDK release. Auto-resolve if source is current release |
| Protobuf data structures — `cli-sdk` | 85% | Verify field names and types against current go-livepeer release |
| Feature availability — `feature` | 80% | Re-verify on every product release. Flag with staleness note if undated |
| AI pipeline / model types — `feature` | 80% | High staleness risk; always note which release was checked |
| Navigation / structural — `structural` | 95% | Verify path exists in docs.json; auto-resolve if confirmed |
| LIP references (accepted/deployed) — `governance` | 90% | Historical LIPs are factual facts; auto-resolve only if status = accepted and deployed |
| Deprecated terminology — `conceptual` | 90% | Flag the usage; propose canonical replacement term |
| Economic data (structural model) — `conceptual` | 90% | "Gateways pay orchestrators" — stable structural fact |
| **Governance parameters — `governance`** | **NEVER** | **Always flag `[verify-live]`. Never auto-resolve.** |
| **Contract addresses — `contract`** | **NEVER** | **Always flag `[verify-live]`. Never auto-resolve.** |
| **External RPC URLs — `contract`** | **NEVER** | **Always flag `[verify-live]`. RPC endpoint availability changes.** |
| **Live pricing / economic data — `economic`** | **NEVER auto on first pass** | **Re-verify every 90 days or on >20% utilisation change. Always flag with staleness date.** |
| **Treasury / governance proposal state — `governance`** | **NEVER** | **Live on-chain governance. Always flag with `[verify-live]`.** |
| **AI model availability by orchestrator — `feature`** | **NEVER** | **No authoritative source. Always flag.** |

### Auto-Resolve Rules

**Rule 1 — High-confidence auto-resolve**: A claim may be auto-resolved (inline, no REVIEW marker needed) if ALL of the following are true:
- Confidence threshold for its claim type is met
- The source is a primary-tier source from `veracity-library.md`
- The claim does not involve a governance-controlled parameter
- The claim does not involve a contract address, RPC URL, or live economic value
- The source was verified as current (not deprecated, not a stale branch)

When auto-resolving, append a source note in the section map (not in the page prose): `[auto-resolved: source = go-livepeer CLI Reference]`

**Rule 2 — Governance-controlled values are NEVER auto-resolved**: Any value that can be changed by a governance vote (LIP, on-chain parameter) is governance-controlled. Examples: inflation rate, target bonding rate, unbonding period, active set size, treasury parameters, reward cut rate, fee share defaults. These are NEVER auto-resolved regardless of how stable they appear. Always place a REVIEW marker.

**Rule 3 — Contract addresses are NEVER auto-resolved**: Even if the address appears in the official docs reference, contract addresses are placed at `[verify-live]` because protocol upgrades can change them. Exception: well-known stable contracts (BondingManager on Arbitrum) may be noted as "stable since LIP-73" but still require a REVIEW marker.

**Rule 4 — Economic data requires staleness date**: Any claim involving live pricing, utilisation metrics, or capacity figures must carry a staleness date note. If no date is present in the source, add `[verify-live — no date in source]`.

**Rule 5 — Embedded factual claims in narrative sections**: A `narrative` section with embedded numbers, percentages, or protocol parameter values — these embedded factual claims inherit `Very high` veracity standard and are subject to all claim-type rules above.

**Authoritative sources for auto-resolve decisions** (primary tier only):
- go-livepeer GitHub (CLI flags, data structures, release notes)
- go-livepeer CLI Reference (docs.livepeer.org/references/go-livepeer/cli-reference)
- LIP Repository (protocol changes — accepted LIPs only)
- Livepeer Whitepaper + Streamflow Spec (stable architecture)
- Livepeer Docs v2 (this repo — structural claims, navigation)
- Smart Contract Addresses reference (docs.livepeer.org/references/contract-addresses)
- docs.json (navigation structure)

---

## Phase 4 — Place REVIEW Markers

### REVIEW Marker Format

```
{/* REVIEW: [specific claim being flagged] — verify with: [named source from veracity-library.md] */}
```

For governance-controlled values:
```
{/* REVIEW: [claim] — governance-controlled, check on-chain at: [source] */}
```

For live economic / market data:
```
{/* REVIEW: [claim] — economic data, re-verify every 90 days or on >20% utilisation change. Last verified: [date or "unknown"] */}
```

For contract addresses:
```
{/* REVIEW: [contract name / address] — verify on-chain; address may change on protocol upgrades. Source: docs.livepeer.org/references/contract-addresses */}
```

For external URLs / RPC endpoints:
```
{/* REVIEW: [URL/endpoint] — verify-live: external endpoint availability not guaranteed. Source: Chainlist or Arbitrum docs */}
```

### REVIEW Marker Placement Rules

1. Place REVIEW markers **immediately BEFORE the block being flagged** — never inline within prose.
2. For a flagged sentence within a paragraph: place the marker before the full paragraph, not mid-sentence.
3. For a flagged code block: place the marker immediately above the opening code fence.
4. For a flagged table row: place the marker above the table (not mid-table).
5. Never modify the content of the flagged claim — veracity pass adds markers, does not rewrite.
6. One REVIEW marker per flagged block. If multiple claims in one paragraph need flags, use a single REVIEW marker that lists all flagged claims: `{/* REVIEW: [claim A]; [claim B] — verify with: [source] */}`

---

## Phase 5 — Mixed-Type Page Handling

For pages with multiple information types across sections:

1. Apply each section's REVIEW markers independently — each section is assessed against its own type's standard.
2. Identify the worst-case section result:
   - `verified` — no open REVIEW markers in this section
   - `unverified` — has open REVIEW markers
   - `stale` — previously verified but staleness matrix indicates re-check required
3. The page-level `veracityStatus` is set to the worst-case section result.
4. In the Phase 6 summary, list which sections are at which confidence level.

**Example for a mixed page:**
- Intro (narrative) → verified (no specific claims)
- Concepts section (conceptual) → verified (architecture claims auto-resolved against whitepaper)
- Configuration section (technical/factual) → unverified (CLI default values flagged for release version check)
- Economics section (evaluative) → unverified (live pricing data flagged)

Page `veracityStatus` = `unverified` (worst case).

---

## Phase 6 — Set veracityStatus and Produce Output

### veracityStatus Values

| Status | Meaning | When to set |
|---|---|---|
| `verified` | All claims resolved; all REVIEW markers cleared | All sections pass their standard; zero open REVIEW markers |
| `unverified` | Has open REVIEW markers; acceptable for draft | Any open REVIEW marker in any section |
| `stale` | Was verified; staleness matrix now requires re-check | Page was `verified`; a staleness trigger has occurred (new LIP, new release, 90-day economic re-verify due) |

### Publishing Gate

| veracityStatus | Very high standard page | High standard page | Medium/Lower standard page |
|---|---|---|---|
| `verified` | Publish allowed | Publish allowed | Publish allowed |
| `unverified` | **BLOCKS publication** | Allowed with human review note | Allowed |
| `stale` | **BLOCKS publication** | **BLOCKS publication** | Allowed with human review note |

**Very high standard pages** = any page whose dominant information type is `factual`, `technical`, `procedural`, or `change`.
**High standard pages** = any page whose dominant information type is `evaluative` or `structural`.

### Setting veracityStatus in Frontmatter

Add or update the `veracityStatus` field in the page frontmatter:

```yaml
veracityStatus: unverified   # or verified / stale
```

If the field already exists, update it to reflect current pass results. Do not leave the old value if the pass changed the status.

### Phase 6 Summary (produce this at the end of every run)

```
PAGE: [path]
RUN DATE: [date]

SECTIONS ASSESSED:
  [Section title] — [information type] — [Very high/High/Medium/Lower] — [verified/unverified]
  ...

REVIEW MARKERS PLACED: [count]
CLAIMS AUTO-RESOLVED: [count]
GOVERNANCE FLAGS: [count — must be > 0 for any page with protocol parameter claims]

WORST-CASE STATUS: [verified / unverified / stale]
veracityStatus SET TO: [verified / unverified / stale]

OPEN ITEMS FOR HUMAN:
  1. [specific claim] — source to check: [named source]
  2. ...

STALENESS TRIGGERS TO MONITOR:
  - [claim] will need re-verification on [trigger event]
```

---

## Phase 7 — Glossary Update (Mandatory — runs every pass)

> **Purpose**: Route verified terminology back to the human-authored glossary. This closes the veracity → glossary feedback loop. Without this phase, `veracityStatus: verified` on a page does not update the canonical terminology record — the glossary and the page drift apart.

**Authoritative glossary file**: `v2/[tab]/resources/glossary.mdx` — human-made, reviewed. This is the file you update. Do NOT touch `resources/compendium/glossary.mdx` — that is AI-generated and unverified.

---

### Step 7.1 — Collect Verified Terminology from This Pass

For every claim in the Phase 6 summary that was either:
- Auto-resolved (inline, no REVIEW marker), OR
- Had a REVIEW marker placed AND the verification source confirms a specific canonical form

Identify terminology items: any named concept, role, product, protocol term, parameter name, or acronym expansion that this pass resolved to a specific form.

Produce a terminology update list:

```
TERM: [term as it appears in the page]
CANONICAL FORM: [the verified correct form — e.g. "Network-as-a-Product" not "Network as a Platform"]
DEFINITION: [verified definition from source — 1-2 sentences]
SOURCE: [named source from veracity-library.md]
STALENESS CATEGORY: [governance / cli-sdk / contract / economic / feature / conceptual]
ACTION: [UPDATE / ADD / FLAG-DEPRECATED / NO-CHANGE]
```

**ACTION rules**:
- `UPDATE` — term exists in glossary but definition or form differs from what this pass verified
- `ADD` — term is not in glossary but should be (was verifiable, has a clear definition)
- `FLAG-DEPRECATED` — term is a deprecated form; glossary should carry the canonical replacement
- `NO-CHANGE` — term is in glossary and the verified form matches exactly

---

### Step 7.2 — Disambiguate Using Veracity Sources

For any term where the correct form is UNCLEAR from primary sources — two sources conflict, a source is ambiguous, or no primary source covers the term — attempt disambiguation:

1. **Check all primary-tier sources** in `veracity-library.md` for the term
2. **Check secondary-tier sources** (acceptable tier) if primary sources conflict
3. If ONE consistent form is found across 2+ sources at any tier: treat as resolved. Use that form. Document the sources.
4. If sources still conflict after checking all tiers: this is **true ambiguity** — flag for human. Do NOT update the glossary with an ambiguous form.

Produce a disambiguation result for each ambiguous term:

```
TERM: [term]
AMBIGUITY: [describe the conflict — e.g. "Source A says X, Source B says Y"]
SOURCES CHECKED: [list all sources checked]
RESOLVED?: [Yes / No — true ambiguity]
  If Yes: CANONICAL FORM: [form] + ACTION (UPDATE/ADD)
  If No: HUMAN DECISION NEEDED: [specific question — e.g. "Is NaaP 'Network-as-a-Product' or 'Network as a Platform'? Style guide takes precedence."]
```

**Only true ambiguity** (cannot be resolved by checking any available veracity source) returns to human. Partial ambiguity (one source unclear, another definitive) is resolved using the more authoritative source.

---

### Step 7.3 — Execute Glossary Updates

For all items with `ACTION: UPDATE` or `ACTION: ADD`:

1. Open `v2/[tab]/resources/glossary.mdx`
2. For `UPDATE`: find the existing entry → update the definition to match verified form → add source citation in a comment or note field
3. For `ADD`: add a new entry with: term name, canonical form, definition, source citation
4. For `FLAG-DEPRECATED`: find the deprecated term entry (or add it if missing) → add a deprecation note pointing to the canonical replacement

**Format for source citations in glossary entries** (add as a comment if the glossary format has no citation field):
```
{/* veracity-verified: [source name] — [date of this pass] */}
```

Do NOT modify glossary entries for `NO-CHANGE` or for unresolved true-ambiguity terms.

---

### Step 7.4 — Phase 7 Summary (append to Phase 6 summary output)

```
GLOSSARY UPDATES:
  UPDATED: [count] entries
  ADDED: [count] entries
  DEPRECATED FLAGGED: [count] entries
  NO-CHANGE: [count] entries

TRUE AMBIGUITY — HUMAN DECISIONS NEEDED:
  1. [term] — [specific question for human] — [sources checked]
  2. ...

GLOSSARY FILE UPDATED: v2/[tab]/resources/glossary.mdx
```

If there are zero HUMAN DECISIONS NEEDED items, state: "No true ambiguity found. Glossary updated without human input required."

---

### Failure mode: Glossary update skipped

| Failure | Severity | Guard |
|---|---|---|
| Phase 7 skipped on verified pages | CRITICAL | Without Phase 7, the verified terminology on pages does not propagate back to the glossary. Over time pages and glossary diverge. Pack guide human checkpoint verifies Phase 7 ran and glossary was updated. |
| True ambiguity routed to human without checking all sources | HIGH | Step 7.2 requires checking ALL veracity library tiers before declaring true ambiguity. Premature escalation wastes human time. |
| Ambiguous terms written to glossary before human decision | HIGH | Step 7.2 explicitly blocks glossary updates for unresolved true ambiguity. Only resolved terms are written. |

---

## Staleness Matrix

### Per-Category Re-verification Schedule

| Category | Re-verify trigger | Notes |
|---|---|---|
| `governance` | Every 30 days AND on any new LIP or on-chain governance action | Inflation rate, bonding target, unbonding period, active set size, treasury parameters |
| `cli-sdk` | On every major go-livepeer release AND on every major SDK release | CLI flag names/defaults, API method signatures, protobuf field definitions |
| `contract` | On mainnet protocol upgrades AND on any new LIP that changes contract addresses | Contract addresses, ABI definitions |
| `economic` | Every 90 days OR on >20% change in network utilisation | Live pricing data, capacity metrics, treasury balance |
| `feature` | On every product release (go-livepeer release + AI docs update) | Feature availability, AI pipeline types, model IDs, BYOC status |
| `conceptual` | On major protocol version changes (new whitepaper, new architecture LIP) | Protocol architecture, role descriptions, mechanism explanations |
| `structural` | On any docs.json update affecting navigation | Site structure references, page paths, navigation CTAs |

---

## Context Block (What the Agent Receives)

The agent running this pass must have all of the following in context:

1. **The page file being verified** — full content including frontmatter
2. `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md` — 45 sources with tiers and update frequencies
3. `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` — locked framework (must be LOCKED status, not DRAFT)
4. **Tab-level terminology lock** — the Phase 3.5 terminology lock file for this tab (or note that it has not yet run)
5. **Canonical audience design output** — Phase 1 output for this tab (to verify claims match the audience's knowledge level — a conceptual claim that is too simplistic or too advanced for the audience is a veracity failure of a different kind)
6. **docs.json** — for structural claim verification

Do not load the full veracity library from memory. Load the file. Claim resolution depends on source tier, update frequency, and staleness risk values that are only accurate if read from the current file.

---

## Failure Mode Reference

These are the known ways this pass fails. The agent must actively guard against each.

| Failure mode | Severity | Description | Guard |
|---|---|---|---|
| Governance-controlled values auto-resolved | CRITICAL | Agent treats an on-chain governance parameter as a factual fact and resolves it without a REVIEW marker. This is the most dangerous failure — a published docs page with a stale governance parameter (e.g. wrong inflation rate) is actively misleading. | Confidence matrix explicitly marks all `governance` category claims as NEVER auto-resolvable. The pre-flight check requires human to confirm this rule is understood. |
| REVIEW markers placed inline in prose | HIGH | `{/* REVIEW: ... */}` comment placed mid-sentence instead of before the block. MDX renders comments differently when inline — this can cause rendering artefacts or orphaned markers. | Phase 4 placement rules explicitly require markers BEFORE the block, never inline. |
| Missing REVIEW markers on stale economic data | MEDIUM | Agent treats a utilisation metric or pricing claim as a stable architectural fact and resolves it. Stale economic data is published as current. | Confidence matrix marks all `economic` category as NEVER auto-resolvable on first pass. Phase 6 summary includes explicit staleness trigger list. |
| veracityStatus not updated in frontmatter | HIGH | Pass runs, markers are placed, but frontmatter still shows old `veracityStatus` value. Publication gate cannot function. | Phase 6 explicitly requires frontmatter update. Pack guide human checkpoint verifies this. |
| REVIEW markers orphaned after Phase 8 | HIGH | If Phase 8 (naming audit) runs AFTER Phase 7 and renames sections, REVIEW markers become detached from their context. | Pre-flight check explicitly blocks Phase 7 if Phase 8 has not run. |
| Embedded factual claims in narrative not flagged | MEDIUM | A `narrative` section contains a specific number (e.g. "50% target bonding rate") that is treated as narrative framing rather than a factual claim. | Phase 3 Rule 5 explicitly requires embedded factual claims in narrative sections to inherit Very high standard. |
