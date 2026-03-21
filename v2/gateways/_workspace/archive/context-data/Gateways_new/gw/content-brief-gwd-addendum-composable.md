# GW-D Addendum — Composable Quickstart Component Structure
**Applies to:** `v2/gateways/get-started/ai-gateway-quickstart.mdx`  
**Status:** Correction to original GW-D brief — read this before finalising the quickstart draft

---

## What changed and why

The original GW-D brief described the AI gateway quickstart as a standalone linear tutorial. This is incorrect.

The `get-started/` section uses a **composable component architecture**. The quickstart page is assembled from shared MDX blocks — not written as a single monolithic file. Writing the quickstart and writing the setup configure pages are the same authoring task: the same MDX content appears in both contexts via the component system.

This addendum supersedes Section 2.6 of the GW-D brief (Page B — Content Specification) for the AI gateway quickstart draft only. All other sections of GW-D are unchanged.

---

## The component architecture

### Folder structure

The `get-started/` subfolder contains component parts, not separate content pages:

```
v2/gateways/get-started/
├── ai-gateway-quickstart.mdx     ← assembles the components
├── components/                   ← reusable MDX blocks
├── data/                         ← shared data (e.g. version numbers, image tags)
├── groups/                       ← grouped component sets
└── views/                        ← OS-scoped view variants
```

`[//]: # (REVIEW: Verify this exact folder structure against the docs-v2 branch before writing. Path names above are from planning documents. If the structure differs, update annotations accordingly.)`

### Three composition axes

The quickstart is assembled from three independent selection dimensions:

| Component | Selector | Variants |
|-----------|----------|---------|
| `<View>` | Operating system | Linux · macOS · Windows |
| `<Tabs>` | Chain mode | On-chain · Off-chain |
| `<Steps>` | Node type | AI node · Video node · Dual node |

The off-chain AI gateway path this brief covers is:

```
View  = Linux (primary)
Tabs  = Off-chain
Steps = AI node
```

Other paths (e.g. on-chain AI, video gateway) reuse some of the same blocks with different selections. Content shared across paths must be written once and annotated.

---

## What this means for the draft

### Do not write a monolithic linear tutorial

The draft must be structured as **composable blocks** that slot into the View × Tabs × Steps matrix. The assembled result for the off-chain AI path should be shown clearly, with annotations distinguishing path-specific content from shared content.

### Annotate shared vs path-specific content

Every content block must be tagged with one of the following comments:

```mdx
<!-- SHARED: used in [list of paths that reuse this block] -->
<!-- PATH-SPECIFIC: off-chain AI only -->
```

**Examples of expected shared content:**
- Binary download step — shared across Linux / AI node / on-chain and off-chain paths (same binary)
- Docker pull command — shared across node types; tag variant may differ
- Port verification check — likely shared across AI and video paths
- Startup log confirmation pattern — may be shared; flag if uncertain

**Examples of expected path-specific content:**
- The off-chain mode flag in the startup command — off-chain AI path only
- The orchestrator address placeholder — shared across solo paths, not pool paths
- The test AI inference request — AI node paths only, not video

### Show the assembled result for the off-chain AI path

Deliver the draft as the fully assembled quickstart for the Linux × Off-chain × AI node path — the primary persona (Graduate, offboarding from Daydream) lands here. The assembled result must be coherent as a standalone readable tutorial, not a fragment.

Within that assembled result, annotate each block according to the rules above.

### Reference, don't duplicate

Content that is shared across paths should be written once in the draft with a `[//]: # (SHARED:)` comment. Do not copy the block into each path's section. The agent writing the video gateway quickstart will use these annotations to identify reusable blocks.

---

## Revised content specification for the quickstart draft

*Replaces Section 2.6 of GW-D. Research questions, frontmatter, and quality gates from GW-D are unchanged.*

### Block inventory — off-chain AI path (Linux primary)

Deliver each block as a named, annotated MDX section. The assembled page shows them in sequence.

**Block 1 — Goal statement**  
Path-specific or shared: `[//]: # (SHARED: goal statement pattern shared; wording is path-specific)`  
Content: First line of page. "By the end of this guide, your AI gateway will be running in off-chain mode and routing AI inference requests to the Livepeer network."

**Block 2 — Prerequisites checklist**  
`[//]: # (PATH-SPECIFIC: off-chain AI only (no ETH, no Arbitrum in checklist\))`  
Three items with links:
- Requirements confirmed → `setup/requirements/off-chain.mdx`
- go-livepeer installed (version ≥ [verified minimum]) → install page
- At least one orchestrator address → orchestrator discovery section on `setup/requirements/off-chain.mdx`

**Block 3 — OS View wrapper (Linux primary)**  
`[//]: # (SHARED: View component wraps all install paths; Linux variant is primary for AI gateway)`  
`<View>` component with Linux selected. Note macOS and Windows variants exist for other quickstarts. If macOS is supported for the off-chain AI gateway binary, include a macOS variant; if not, add a `<Note>` explaining Linux-only constraint. Verify OS support against go-livepeer releases.

**Block 4 — Install: Docker / Binary tabs**  
`[//]: # (SHARED: install tabs used across AI, video, and dual node paths — Docker image is the same; startup command differs)`  

`<Tabs>` with Docker and Binary tabs:

*Docker tab:*
- `docker pull [image:tag]` — exact, verified
- Note: same image as orchestrator; role determined by startup flags
- `[//]: # (SHARED: docker pull command shared across node types; tag must match current release)`

*Binary tab:*
- `curl` or `wget` download command — exact Linux amd64 URL from releases page
- `chmod +x` make executable
- `[//]: # (SHARED: binary download command shared across AI and video node Linux paths)`

**Block 5 — Off-chain mode tab**  
`[//]: # (PATH-SPECIFIC: off-chain Tabs variant — this block does not appear in the on-chain path)`  

`<Tabs>` outer wrapper: Off-chain tab selected. On-chain tab exists but points to the on-chain quickstart — do not duplicate on-chain content here. A brief `<Note>` on the off-chain tab explaining what off-chain means and linking to `concepts/gateway-types.mdx` for detail.

**Block 6 — Start the gateway: Steps (AI node, off-chain)**  
`[//]: # (PATH-SPECIFIC: off-chain AI node startup — flags differ from on-chain and from video node)`  

`<Steps>`:

| Step | Action | What to show |
|------|--------|-------------|
| 1 | Start command | Complete copy-pasteable startup command. Off-chain mode flag explicit. `-orchAddr` (or equivalent) with a placeholder and comment. All required flags, no optional flags. Exact syntax — verified against source. |
| 2 | Confirm off-chain mode in logs | Specific log line that appears on off-chain startup. State exactly what to look for. |
| 3 | Confirm orchestrator connection | Log line confirming gateway reached the orchestrator address. |

`<Warning>` after step 1: the single most common startup error at this point — exact error text (sourced from Discord research) and the one-line fix.

`[//]: # (REVIEW: All flag names, exact startup command, and log messages must be verified against go-livepeer source and Discord before publishing.)`

**Block 7 — Test the gateway: Steps**  
`[//]: # (PATH-SPECIFIC: AI inference test — endpoint and payload are AI-specific; not reused by video gateway path)`  

`<Steps>`:

| Step | Action | What to show |
|------|--------|-------------|
| 1 | Health check | `curl http://localhost:[port]/[health path]` — exact command and expected response |
| 2 | Test AI inference request | Exact `curl` with endpoint path and minimal valid payload. What a successful routing response looks like. |
| 3 | Confirm routing in logs | What to look for in gateway logs confirming the request was forwarded. |

`[//]: # (REVIEW: AI inference endpoint path and payload format must be verified against go-livepeer source or DeepWiki. Do not guess the API path.)`

**Block 8 — Troubleshooting**  
`[//]: # (SHARED: troubleshooting accordion pattern shared; individual entries are path-specific)`  

`<AccordionGroup>` with three entries. Each: symptom as title (what the operator sees), brief cause, exact fix.

| # | Accordion title (symptom) | Source requirement |
|---|--------------------------|-------------------|
| 1 | Gateway starts but no requests route | Exact error + fix sourced from Discord `#local-gateways` |
| 2 | Connection refused to orchestrator | Exact error + fix sourced from Discord |
| 3 | Gateway starts in on-chain mode | Flag error — show the correct flag and common omission; sourced from Discord |

`[//]: # (REVIEW: All three troubleshooting entries must use exact error text from Discord/Forum research. Replace placeholder titles above with the real symptoms found during research.)`

**Block 9 — Next steps**  
`[//]: # (PATH-SPECIFIC: off-chain AI path next steps — links differ from video and on-chain paths)`  

`<CardGroup>` with three `<Card>` components:

| Card title | Target path | One-sentence description |
|------------|------------|--------------------------|
| Configure your gateway | `setup/configure/ai-configuration.mdx` | Set flags for multiple orchestrators, pricing, and middleware |
| Add video transcoding | `setup/configure/dual-configuration.mdx` | Run transcoding and AI inference from the same gateway node |
| Set up a remote signer | `advanced/remote-signers.mdx` | Separate key custody from your gateway process |

`[//]: # (REVIEW: Verify all three target paths exist in the docs-v2 IA before publishing.)`

---

## Assembled result — what the draft should look like

The draft delivers the full assembled page for the Linux × Off-chain × AI node path, in sequence, with annotations. It must read as a coherent tutorial. Annotations appear as HTML comments — they do not interrupt the reader's flow.

Skeleton:

```mdx
---
[frontmatter — unchanged from GW-D]
---

By the end of this guide, your AI gateway will be running in off-chain mode and routing AI inference requests to the Livepeer network.
<!-- PATH-SPECIFIC: goal statement wording -->

## Prerequisites
<!-- PATH-SPECIFIC: off-chain AI only -->
...

## Install go-livepeer
<!-- SHARED: install tabs shared across AI, video, and dual node paths -->

<View>
  {/* Linux — primary */}
  <Tabs>
    <Tab title="Docker">
      <!-- SHARED: docker pull command shared across node types -->
      ...
    </Tab>
    <Tab title="Binary">
      <!-- SHARED: binary download command shared across Linux AI and video paths -->
      ...
    </Tab>
  </Tabs>
</View>

## Start the gateway
<!-- PATH-SPECIFIC: off-chain AI node startup flags -->

<Tabs>
  <Tab title="Off-chain">
    <!-- PATH-SPECIFIC: off-chain tab content -->
    <Steps>
      ...
    </Steps>
  </Tab>
  <Tab title="On-chain">
    <Note>
      For on-chain gateway setup, see [on-chain quickstart link].
    </Note>
  </Tab>
</Tabs>

## Test the gateway
<!-- PATH-SPECIFIC: AI inference test endpoint -->

<Steps>
  ...
</Steps>

## Troubleshooting
<!-- SHARED: accordion pattern; PATH-SPECIFIC: individual entries -->

<AccordionGroup>
  ...
</AccordionGroup>

## Next steps
<!-- PATH-SPECIFIC: off-chain AI path links -->

<CardGroup>
  ...
</CardGroup>
```

---

## Additional quality gate (addendum-specific)

Add this check to the GW-D quality gates for the quickstart draft:

- [ ] Every content block annotated as `[//]: # (SHARED: ...)` or `[//]: # (PATH-SPECIFIC: ...)`
- [ ] Shared blocks written once — not duplicated across path variants
- [ ] Docker pull and binary download steps annotated as shared
- [ ] Startup command and test request annotated as path-specific
- [ ] Assembled page reads as a coherent tutorial without consulting annotations
- [ ] On-chain tab present but defers to on-chain quickstart — no on-chain content duplicated here

---

## What this addendum does NOT change

| Section | Status |
|---------|--------|
| Research questions (2.2 and 2.5 of GW-D) | **Unchanged** |
| Frontmatter (2.7b of GW-D) | **Unchanged** |
| Quality gates from original GW-D (2.8) | **Unchanged** — addendum quality gate adds to, not replaces |
| Success condition | **Unchanged** — off-chain AI gateway running and routing a test request |
| Page A (off-chain.mdx requirements page) | **Unchanged** — this addendum applies to Page B only |
| Part 3 research report structure | **Unchanged** |
