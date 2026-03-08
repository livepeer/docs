# Agent Insertion Plan: Part 2 Content — B09 / B10 / B25 Batches

**Branch target:** `docs-v2`
**Worktree:** `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2`
**Execution model:** One batch branch per section group. Gate before moving to next.
**File source:** `/mnt/user-data/outputs/part2-mdx/**`

---

## Pre-Flight Checks

Before beginning any insertions, confirm:

```bash
# 1. Confirm working tree is clean on docs-v2
git status

# 2. Run full test suite (must be green before touching content)
node tests/run-all.js --skip-browser

# 3. Verify navigation is intact
node tests/unit/docs-navigation.test.js --strict-missing
```

If any tests fail pre-insertion, resolve before proceeding. Content insertions must not mask pre-existing failures.

---

## Batch A: Gateways — About Gateways (B09 scope)

**Branch:** `codex/b09-gateways-about-new-content`

### Files to Copy

```bash
# From outputs to repo
cp PART2_OUTPUT/gateways/about-gateways/payment-clearinghouse.mdx \
   v2/gateways/about-gateways/payment-clearinghouse.mdx

cp PART2_OUTPUT/gateways/about-gateways/naap-platform.mdx \
   v2/gateways/about-gateways/naap-platform.mdx
```

### docs.json Navigation Insertion

Locate the `about-gateways` group inside the `gateways` section. Insert after the last existing `about-gateways` page entry:

```json
// FIND (last item in about-gateways group):
"v2/gateways/about-gateways/gateway-operator-opportunities"

// INSERT AFTER:
,
"v2/gateways/about-gateways/payment-clearinghouse",
"v2/gateways/about-gateways/naap-platform"
```

### Repo Aesthetic Rules

- No trailing whitespace in MDX files.
- Frontmatter must be the first content in the file — no blank lines before `---`.
- Component imports must use `/snippets/components/` paths (not relative paths).
- `status: coming-soon` pages must not be deployed to `main` without a Callout banner present — both files comply.
- All internal links use `/v2/` prefix (not relative), verified against existing repo patterns.

### Gates

```bash
# After copy + nav edit:
node tests/run-pr-checks.js --base-ref docs-v2

node tests/integration/v2-link-audit.js \
  --files v2/gateways/about-gateways/payment-clearinghouse.mdx,v2/gateways/about-gateways/naap-platform.mdx \
  --strict \
  --report tasks/reports/ungenerated/v2-link-audit-B09-about-gateways-new.md

node tools/scripts/audit-v2-usefulness.js \
  --mode files \
  --files v2/gateways/about-gateways/payment-clearinghouse.mdx,v2/gateways/about-gateways/naap-platform.mdx \
  --accuracy-mode local-only \
  --out-dir tasks/reports/docs-usefulness/B09-about-new
```

**All three must pass before merging this batch branch.**

---

## Batch B: Gateways — Run a Gateway (B10 scope)

**Branch:** `codex/b10-gateways-run-new-content`

### Files to Copy

```bash
cp PART2_OUTPUT/gateways/run-a-gateway/how-payments-work.mdx \
   v2/gateways/run-a-gateway/how-payments-work.mdx

cp PART2_OUTPUT/gateways/run-a-gateway/remote-signers.mdx \
   v2/gateways/run-a-gateway/remote-signers.mdx
```

### docs.json Navigation Insertion

In the `run-a-gateway` group inside the gateways section:

```json
// FIND (last item in run-a-gateway group):
"v2/gateways/run-a-gateway/on-chain-setup"   // (or whatever the current last entry is)

// INSERT AFTER:
,
"v2/gateways/run-a-gateway/how-payments-work",
"v2/gateways/run-a-gateway/remote-signers"
```

### SME Review Flag

`remote-signers.mdx` contains a `<Callout type="warning">` noting that CLI flags require confirmation from `j0sh` or `eliteprox`. **Do not remove this callout before merging.** The page has `status: coming-soon` frontmatter and a top-level warning banner — both gate visible deployment.

The `remote-signers.mdx` page must remain on `coming-soon` status until:
1. CLI flags (`-signer`, `-signerAddr`) are confirmed against a released go-livepeer version.
2. j0sh or eliteprox sign off on the operational requirements section.

Create an exception entry if the page needs to be published before SME review:

```json
// tests/config/semantic-exceptions.json — add:
{
  "file": "v2/gateways/run-a-gateway/remote-signers.mdx",
  "rule": "status-must-not-be-coming-soon-on-main",
  "owner": "alison@wonderland.xyz",
  "expiry_date": "2026-04-30",
  "ticket": "GH-XXX",
  "created_at": "2026-03-01",
  "rationale": "Remote signer CLI flags require j0sh/eliteprox confirmation before status upgrade. Content is accurate but deployment flags are subject to change."
}
```

### Gates (same pattern as Batch A)

```bash
node tests/run-pr-checks.js --base-ref docs-v2

node tests/integration/v2-link-audit.js \
  --files v2/gateways/run-a-gateway/how-payments-work.mdx,v2/gateways/run-a-gateway/remote-signers.mdx \
  --strict \
  --report tasks/reports/ungenerated/v2-link-audit-B10-run-new.md

node tools/scripts/audit-v2-usefulness.js \
  --mode files \
  --files v2/gateways/run-a-gateway/how-payments-work.mdx,v2/gateways/run-a-gateway/remote-signers.mdx \
  --accuracy-mode local-only \
  --out-dir tasks/reports/docs-usefulness/B10-run-new
```

---

## Batch C: Gateways — Gateway Providers (B09 scope)

**Branch:** `codex/b09-gateways-providers-new-content`

### Files to Copy

```bash
cp PART2_OUTPUT/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx \
   v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx

cp PART2_OUTPUT/gateways/using-gateways/gateway-providers/daydream-gateway.mdx \
   v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx

cp PART2_OUTPUT/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx \
   v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx
```

**Note:** Confirm whether `v2/gateways/using-gateways/gateway-providers/` directory already exists. If not, create it:

```bash
mkdir -p v2/gateways/using-gateways/gateway-providers
```

### docs.json Navigation Insertion

In the `using-gateways` group, add a `gateway-providers` sub-group or add pages directly:

```json
// Option A: If gateway-providers already has a group:
// Add to its pages array:
"v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway",
"v2/gateways/using-gateways/gateway-providers/daydream-gateway",
"v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway"

// Option B: If no group exists, create one before the first existing using-gateways page:
{
  "group": "Gateway Providers",
  "pages": [
    "v2/gateways/using-gateways/gateway-providers/daydream-gateway",
    "v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway",
    "v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway"
  ]
}
```

**Ordering preference:** Daydream first (primary commercial option), Cloud SPE second (community public-good), Studio third (legacy/streaming).

### Gates (same pattern)

```bash
node tests/run-pr-checks.js --base-ref docs-v2

node tests/integration/v2-link-audit.js \
  --files v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx,v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx,v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx \
  --strict \
  --report tasks/reports/ungenerated/v2-link-audit-B09-providers.md
```

### Section Freeze Gate (run after all B09 + B10 batches merge)

```bash
node tests/unit/docs-navigation.test.js --strict-missing
node tests/integration/v2-link-audit.js --full --strict --report tasks/reports/ungenerated/v2-link-audit-section-freeze-gateways.md
node tests/run-all.js --skip-browser
```

---

## Batch D: Orchestrators — About Orchestrators (B25 scope)

**Branch:** `codex/b25-orchestrators-about-new-content`

### Files to Copy

```bash
cp PART2_OUTPUT/orchestrators/about-orchestrators/job-types.mdx \
   v2/orchestrators/about-orchestrators/job-types.mdx

cp PART2_OUTPUT/orchestrators/about-orchestrators/naap-platform.mdx \
   v2/orchestrators/about-orchestrators/naap-platform.mdx
```

**Check path:** Verify that `v2/orchestrators/about-orchestrators/` exists. It may currently live under `v2/x-pages/05_orchestrators/` (pre-B00b migration). Confirm the post-migration path before writing files.

### docs.json Navigation Insertion

In the `about-orchestrators` group:

```json
// INSERT at appropriate position within about-orchestrators pages:
"v2/orchestrators/about-orchestrators/job-types",
"v2/orchestrators/about-orchestrators/naap-platform"
```

`job-types` should appear early in the about-orchestrators section — before quickstart links but after high-level concept pages (e.g. overview, actors).

### Gates

```bash
node tests/run-pr-checks.js --base-ref docs-v2

node tests/integration/v2-link-audit.js \
  --files v2/orchestrators/about-orchestrators/job-types.mdx,v2/orchestrators/about-orchestrators/naap-platform.mdx \
  --strict \
  --report tasks/reports/ungenerated/v2-link-audit-B25-orch-about.md
```

---

## Batch E: Orchestrators — Quickstart (B25 scope)

**Branch:** `codex/b25-orchestrators-quickstart-new-content`

### Files

This batch includes one replacement and two new files.

#### index.mdx — REPLACE existing file

```bash
# Backup original
cp v2/orchestrators/quickstart/index.mdx \
   v2/orchestrators/quickstart/index.mdx.bak

# Replace with new three-card index
cp PART2_OUTPUT/orchestrators/quickstart/index.mdx \
   v2/orchestrators/quickstart/index.mdx
```

**Verify:** The original `index.mdx` may have been generated by `generate-pages-index.js`. Check for the generated banner comment at the top of the file:

```bash
head -5 v2/orchestrators/quickstart/index.mdx
```

If the file contains:
```
{/* This file is generated from script(s): tools/scripts/generate-pages-index.js */}
```

Then this file is under the generated-file carveout. **Do not replace it manually.** Instead, update the generator to produce the three-card format, or add the custom content as a separate `overview.mdx` page. Open a tracking issue for generator update if needed.

#### New quickstart files

```bash
cp PART2_OUTPUT/orchestrators/quickstart/realtime-ai.mdx \
   v2/orchestrators/quickstart/realtime-ai.mdx

cp PART2_OUTPUT/orchestrators/quickstart/batch-ai.mdx \
   v2/orchestrators/quickstart/batch-ai.mdx
```

### docs.json Navigation Insertion

```json
// In orchestrators quickstart group — add after existing transcoding entry (or replace group):
{
  "group": "Quickstart",
  "pages": [
    "v2/orchestrators/quickstart/index",
    "v2/orchestrators/quickstart/transcoding",
    "v2/orchestrators/quickstart/realtime-ai",
    "v2/orchestrators/quickstart/batch-ai"
  ]
}
```

### Gates

```bash
node tests/run-pr-checks.js --base-ref docs-v2

node tests/integration/v2-link-audit.js \
  --files v2/orchestrators/quickstart/index.mdx,v2/orchestrators/quickstart/realtime-ai.mdx,v2/orchestrators/quickstart/batch-ai.mdx \
  --strict \
  --report tasks/reports/ungenerated/v2-link-audit-B25-orch-quickstart.md

node tools/scripts/audit-v2-usefulness.js \
  --mode files \
  --files v2/orchestrators/quickstart/realtime-ai.mdx,v2/orchestrators/quickstart/batch-ai.mdx \
  --accuracy-mode local-only \
  --out-dir tasks/reports/docs-usefulness/B25-orch-quickstart
```

### Section Freeze Gate (run after all B25 batches merge)

```bash
node tests/unit/docs-navigation.test.js --strict-missing
node tests/integration/v2-link-audit.js --full --strict --report tasks/reports/ungenerated/v2-link-audit-section-freeze-orchestrators.md
node tests/run-all.js --skip-browser
```

---

## Cross-Link Verification

After all batches merge, verify that cross-links between gateways and orchestrators pages resolve correctly:

**Expected cross-links to verify:**
- `remote-signers.mdx` → `how-payments-work.mdx` ✓
- `remote-signers.mdx` → `payment-clearinghouse.mdx` ✓
- `payment-clearinghouse.mdx` → `naap-platform.mdx` (gateways) ✓
- `naap-platform.mdx` (gateways) → `naap-platform.mdx` (orchestrators) ✓
- `job-types.mdx` → all three quickstart pages ✓
- `realtime-ai.mdx` → `naap-platform.mdx` (orchestrators) ✓

Run full link audit:

```bash
node tests/integration/v2-link-audit.js \
  --full \
  --strict \
  --report tasks/reports/ungenerated/v2-link-audit-part2-final.md
```

---

## Exception Registry Entries Required

Create entries in `tests/config/semantic-exceptions.json` for pages with `status: coming-soon` that are being deployed:

```json
[
  {
    "file": "v2/gateways/run-a-gateway/remote-signers.mdx",
    "rule": "coming-soon-pre-publish",
    "owner": "alison@wonderland.xyz",
    "expiry_date": "2026-05-01",
    "ticket": "GH-REMOTE-SIGNER-FLAGS",
    "created_at": "2026-03-01",
    "rationale": "CLI flags require j0sh/eliteprox confirmation. Callout present in page. Safe to publish for awareness; flags marked as subject to change."
  },
  {
    "file": "v2/gateways/about-gateways/naap-platform.mdx",
    "rule": "coming-soon-pre-publish",
    "owner": "alison@wonderland.xyz",
    "expiry_date": "2026-07-01",
    "ticket": "NAAP-LAUNCH-2026",
    "created_at": "2026-03-01",
    "rationale": "NaaP MVP targeting 2026 launch. Page published as forward-looking reference with Callout. Update status to production at launch."
  },
  {
    "file": "v2/orchestrators/about-orchestrators/naap-platform.mdx",
    "rule": "coming-soon-pre-publish",
    "owner": "alison@wonderland.xyz",
    "expiry_date": "2026-07-01",
    "ticket": "NAAP-LAUNCH-2026",
    "created_at": "2026-03-01",
    "rationale": "Same as gateways NaaP page — orchestrator-specific view of same platform."
  },
  {
    "file": "v2/orchestrators/quickstart/batch-ai.mdx",
    "rule": "coming-soon-pre-publish",
    "owner": "alison@wonderland.xyz",
    "expiry_date": "2026-06-01",
    "ticket": "BATCH-AI-PROTOCOL-DESIGN",
    "created_at": "2026-03-01",
    "rationale": "Batch AI payment mechanics and stake routing TBD. Page published as stub with Callout. Upgrade to production when protocol is finalised."
  }
]
```

---

## SME Handover Requirements

Before `remote-signers.mdx` status can be upgraded from `coming-soon` to `production`:

| Item | Needs Confirmation From | Action |
|------|------------------------|--------|
| `-signer` mode startup flag name | j0sh (Livepeer Inc) | Confirm flag name in released go-livepeer binary |
| `-signerAddr` gateway flag name | j0sh / eliteprox | Confirm flag for pointing gateway at remote signer |
| Operational redundancy guidance | eliteprox | Validate that 2+ instance advice matches real deployment patterns |
| Port defaults | j0sh | Confirm default HTTP port for signer (page uses 7936 as placeholder) |

Tag j0sh and eliteprox on the relevant GitHub issue when the page is merged, requesting review of the CLI flags section only.

---

## Summary: All Files

| File | Destination | Batch | Status |
|------|-------------|-------|--------|
| `gateways/about-gateways/payment-clearinghouse.mdx` | `v2/gateways/about-gateways/` | A | coming-soon |
| `gateways/about-gateways/naap-platform.mdx` | `v2/gateways/about-gateways/` | A | coming-soon |
| `gateways/run-a-gateway/how-payments-work.mdx` | `v2/gateways/run-a-gateway/` | B | production |
| `gateways/run-a-gateway/remote-signers.mdx` | `v2/gateways/run-a-gateway/` | B | coming-soon ⚠️ SME |
| `gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx` | `v2/gateways/using-gateways/gateway-providers/` | C | production |
| `gateways/using-gateways/gateway-providers/daydream-gateway.mdx` | `v2/gateways/using-gateways/gateway-providers/` | C | production |
| `gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx` | `v2/gateways/using-gateways/gateway-providers/` | C | production |
| `orchestrators/about-orchestrators/job-types.mdx` | `v2/orchestrators/about-orchestrators/` | D | production |
| `orchestrators/about-orchestrators/naap-platform.mdx` | `v2/orchestrators/about-orchestrators/` | D | coming-soon |
| `orchestrators/quickstart/index.mdx` | `v2/orchestrators/quickstart/` | E | production ⚠️ generated-file check |
| `orchestrators/quickstart/realtime-ai.mdx` | `v2/orchestrators/quickstart/` | E | production |
| `orchestrators/quickstart/batch-ai.mdx` | `v2/orchestrators/quickstart/` | E | coming-soon |
