# Veracity Library

**Status**: TEMPLATE — to be completed by agent
**Purpose**: Map every significant Livepeer documentation source to its information type and veracity standard
**Owner**: Content pipeline — used at runtime by the review skill (Step 18) to verify claims per section

---

## Agent Instructions

You are being asked to build the Livepeer veracity source library. This is a structured registry of every significant source of information used in Livepeer documentation, mapped to its information type and veracity standard.

**What you are building**: A lookup table the review pipeline uses to know: for a given section of content, what sources should claims be verified against, and how strictly?

**Read these files first — in this order**:

1. [index.md](index.md) — full governance index, context for the pipeline
2. [information-type.md](information-type.md) — the 9 information types and what each means
3. [veracity.md](veracity.md) — veracity standards and source tiers per information type
4. [research.md](research.md) — external research references already identified

**Use the terminology collation as your primary source material**:

The terminology team has already done a comprehensive scan of all Livepeer documentation sources across every tab. This is your richest input — it contains identified terms, definitions, and the sources they came from.

Definition collations (by domain):
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-livepeer.md` — Livepeer-specific definitions
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-ai.md` — AI domain definitions
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-video.md` — video domain definitions
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/definitions-web3-economic-technical-ops.md` — web3/economics/ops definitions

Tab-level scans (per site section):
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-home.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-about.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-solutions.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-developers.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-gateways.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-orchestrators.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-lpt.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-community.md`
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-results/agent-resources.md`

Summary and classification:
- `tasks/plan/active/TERMINOLOGY-COLLATE/research.md` — research overview
- `tasks/plan/active/TERMINOLOGY-COLLATE/classified-by-tag.md` — terms classified by tag
- `tasks/plan/active/TERMINOLOGY-COLLATE/classified-by-tab.md` — terms classified by tab
- `tasks/plan/active/TERMINOLOGY-COLLATE/harvest.md` — harvested terminology with sources
- `tasks/plan/active/TERMINOLOGY-COLLATE/scan-summary.md` — scan summary

**Also use the source-verification skill for methodology**:
- `ai-tools/ai-skills/templates/33-docs-source-verification.references/source-priority.md`
- `ai-tools/ai-skills/templates/33-docs-source-verification.references/claim-ledger.md`

---

## What to produce per source entry

For each source you identify, complete one entry in the format below:

```
### [Source Name]

1. **URL / Path**: [full URL or repo path]
2. **Type**: [internal repo / external URL / on-chain / GitHub / official doc / community]
3. **Authoritative for**: [what specific content/claims this source is the ground truth for]
4. **Information types**: [which of the 9 types this source covers — factual / technical / procedural / etc.]
5. **Veracity tier**: [primary / acceptable / not-permitted — from veracity.md definitions]
6. **Update frequency**: [static / versioned / live / irregular]
7. **Staleness risk**: [low / medium / high — how quickly does this go out of date?]
8. **Notes**: [anything important about how to use or interpret this source]
```

---

## Source Categories to Cover

Work through these categories. Each should yield multiple source entries:

### 1. Protocol and on-chain
- Smart contracts (GitHub)
- On-chain data explorers
- Protocol spec documents
- Governance proposals (LIPs/SPEs)

### 2. Code repositories
- `go-livepeer` (node software)
- `livepeer-js` / `livepeer-kit` (SDK)
- `protocol` repo (contracts)
- Any other active repos

### 3. Official documentation
- Current Livepeer docs (v2 — this repo)
- API reference
- SDK documentation
- Developer guides

### 4. Foundation and ecosystem
- Foundation blog / announcements
- Official product positioning
- Partnership announcements
- Shtuka Research `livepeer-data-geography` v1 (see research.md)

### 5. Community and operator sources
- Livepeer Forum
- Discord (as secondary only — not primary)
- Community-maintained tools / dashboards
- Operator reports and benchmarks

### 6. External domain sources
- AI infrastructure benchmarks
- Video streaming standards (HLS, WebRTC)
- Web3 / DeFi reference sources
- GPU hardware specs

---

## Completed Entries

<!-- Agent: add entries below this line, one per source, using the format above -->

---

## Source Priority Summary

Once all entries are complete, add a summary table here:

| Source | Information types | Veracity tier | Staleness risk |
|---|---|---|---|
| _(to be filled)_ | | | |
