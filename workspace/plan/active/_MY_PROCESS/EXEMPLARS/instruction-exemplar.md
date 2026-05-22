# Exemplar: Instruction/Guide Page (Gateway Audience)

> Source: `v2/gateways/setup/prepare.mdx`
> Why this is gold-standard: Entity-led voice, concrete specs, single audience, clear next step, zero banned words

---

## Why This Works

This page succeeds because it:
1. Opens with what the reader NEEDS TO DO (prepare their environment), not what the page covers
2. Provides concrete hardware specs (2 cores / 4-8 cores, 4 GB / 16-32 GB RAM) — no "sufficient for most use cases"
3. Uses gateway voice register: peer-to-peer technical, assumes competence, imperative commands
4. Separates deployment modes immediately (off-chain vs on-chain) so the reader can filter
5. States what's NOT needed (GPU drivers) to prevent wasted effort

---

## Annotated Frontmatter

```yaml
---
title: "Prepare to Run a Livepeer Gateway"
# <!-- EXEMPLAR: Title names the task, not the concept. "Prepare" not "Understanding Gateway Requirements" -->
sidebarTitle: "Prepare"
# <!-- EXEMPLAR: Short sidebar label — action verb, not noun phrase -->
description: "Hardware, network, and software requirements for running a Livepeer Gateway. Choose off-chain or on-chain deployment and prepare your environment."
# <!-- EXEMPLAR: Description is outcome-first — lists what the reader will accomplish. No "This page covers..." -->
pageType: guide
audience: gateway
# <!-- EXEMPLAR: Single audience token. Not "gateway-operator" (old), not "general" -->
purpose: operate
status: current
lastVerified: 2026-04-07T00:00:00.000Z
# <!-- EXEMPLAR: Dated. Machine-parseable. Enables staleness checks -->
keywords: [livepeer, gateways, requirements, prepare, hardware, network, rpc, wallet, keystore, off-chain, on-chain]
# <!-- EXEMPLAR: Keywords include task verbs AND concepts. Mix of action + reference terms -->
---
```

## Annotated Opening

```mdx
# <Icon icon="clipboard-check" size={26} /> Prepare Your Environment
```
<!-- EXEMPLAR: Heading is imperative ("Prepare"), not descriptive ("Gateway Preparation Guide") -->

```
Before installing, confirm your system meets the requirements and choose a deployment mode.
This page covers hardware, network, OS compatibility, and on-chain wallet setup.
```
<!-- EXEMPLAR: First sentence is what the reader DOES. Second sentence scopes the page.
     Note: "This page covers" appears here but in a scoping context after the action sentence —
     acceptable when preceded by an action statement. The banned pattern is OPENING with it. -->

## Annotated Body Structure

```mdx
<BorderedBox variant="accent" accentBar="positive">
  **Deployment mode:**
  - **Off-chain** - direct Orchestrator connection, no blockchain interaction
  - **On-chain** - connects to the Livepeer protocol on Arbitrum

  **Node type (workload):**
  - transcoding
  - inference
  - both video and AI
</BorderedBox>
```
<!-- EXEMPLAR: Deployment modes presented IMMEDIATELY as a visual decision box.
     Reader can filter the rest of the page based on their chosen mode.
     No prose paragraphs explaining what modes are — just names + one-line descriptions. -->

```mdx
<Note>
  Gateway nodes do not require NVIDIA GPU drivers. Driver setup is only
  required on systems running GPU workloads (Orchestrators or AI workers).
</Note>
```
<!-- EXEMPLAR: States what's NOT needed to prevent wasted effort.
     Direct assertion: "do not require" — not "you may not need" or "in most cases" -->

```mdx
## Hardware Requirements

Gateways are lightweight routing nodes. Minimum specs are sufficient for
development and low-traffic deployments.
```
<!-- EXEMPLAR: First sentence is the key fact ("lightweight routing nodes").
     Second sentence contextualises the table that follows.
     No "Understanding the hardware requirements is essential for..." -->

## Common Failures This Avoids

| Failure pattern | How this page avoids it |
|---|---|
| "This page explains..." opening | Opens with imperative: "Before installing, confirm..." |
| Vague specs ("sufficient hardware") | Concrete table: 2 cores min, 4-8 recommended |
| Mixed audience | Single audience: `gateway`. No orchestrator, no developer content |
| Hedging on requirements | "do not require" — not "may not need" |
| No deployment decision | Deployment modes presented as first visual element |
| Generic heading | "Prepare Your Environment" — imperative, specific |
