# Task 1 — Persona/infra mapping reconciliation

**Date:** 2026-05-11
**Inputs read:**
- `v2/developers/concepts/diagrams.mdx` (413 lines, 16 KB, last modified May 7)
- `v2/developers/concepts/diagrams2.mdx` (1,512 lines, 64 KB, modified-uncommitted May 11)
- `v2/developers/concepts/notes.mdx` (modified-uncommitted)
- `v2/developers/_workspace/canonical/review/02-personas.md` (April 7, 2026)
- `v2/developers/_workspace/consolidate.md` (Wonderland's plan)
- `snippets/assets/media/diagrams/developers/persona-paths/persona-infra-maps.md` (**corrupt — see §A**)

## A. Brief-named source-of-truth file is corrupt

`snippets/assets/media/diagrams/developers/persona-paths/persona-infra-maps.md` contains a single line of HTML from a Cloudflare bot-challenge interstitial. `wc -l` returns 0 (one long line, no newlines). The file is not Markdown, contains zero diagram content, and cannot serve as a reference.

The five `.svg` files in the same folder are intact (`persona_1_ai_inference_api.svg` through `persona_5_protocol_persona.svg`) and presumably correspond to the five locked personas, but their source Markdown was never recovered.

**The actual canonical persona-infra-maps content lives in `v2/developers/concepts/diagrams.mdx`.** That file matches the locked 5-persona model identically.

**Recommendation A:** delete `persona-infra-maps.md` (corrupt) and update any downstream references to point at `diagrams.mdx` instead, OR repopulate `persona-infra-maps.md` from `diagrams.mdx` so the snippets path is the canonical source.

## B. File-existence status

| File | Exists | Lines | KB | Status |
|---|---|---|---|---|
| `concepts/diagrams.mdx` | YES | 413 | 16 | Matches locked 5-persona model |
| `concepts/diagrams2.mdx` | YES | 1,512 | 64 | Modified-uncommitted today. Contains TWO persona models within one file |
| `concepts/notes.mdx` | YES | 305 | — | Modified-uncommitted. Contains full locked IA tree + persona narratives + scratch questions. Workspace doc misfiled as published page |
| `snippets/.../persona-infra-maps.md` | YES (corrupt) | 0 | — | Cloudflare HTML — see §A |
| `_workspace/canonical/review/02-personas.md` | YES | 356 | — | Older 5-persona model (April 7), superseded |
| `_workspace/consolidate.md` | YES | 202 | — | Wonderland's consolidation plan — references locked model in prose |

## C. Three persona models found

This is the central finding of Task 1. Three different persona models exist across the inputs.

### Model 1 — Locked 5-persona model (current canonical)

Source: `diagrams.mdx`, brief itself, `notes.mdx` Navigator section, `consolidate.md` references.

1. **AI Persona** — "OpenAI for video AI" — inference API. Activation: first API call.
2. **Video Platform Persona** — "Mux with AI bolted on" — ingest/transcoding/player/VOD. Activation: stream live with playback URL.
3. **Compute Primitives Persona** — "Modal/RunPod, but cheaper" — BYOC, per-GPU-second. Activation: BYOC container running.
4. **Live-Video-First Persona** — "real-time streaming backend" — low-latency streaming. Activation: sub-3s glass-to-glass.
5. **Protocol Persona** — "crypto network contributor" — protocol/contracts. Routes OUT to About + Community.

### Model 2 — April-7 5-persona model (superseded)

Source: `_workspace/canonical/review/02-personas.md`. Timestamp April 7, 2026. Marked "Verdict: APPROVE / AMEND / REJECT" — review status never closed.

1. AI Application Builder *(ranked 9/9, unanimous across 4 research runs)*
2. Video Transcoding Developer *(7/9)*
3. OSS Protocol Contributor *(6/9)*
4. Hackathon Participant *(5/9)* — **NO analog in locked model**
5. Infrastructure Evaluator *(4/9)* — **NO analog in locked model**

Compared to Model 1: AI / Video Transcoding / Protocol map roughly to AI / Video Platform / Protocol in the locked model. Hackathon Participant and Infrastructure Evaluator have no slots in the locked model. **Compute Primitives** and **Live-Video-First** (locked) have no slots here.

### Model 3 — Alt 6+ persona model (in `diagrams2.mdx` Part 1)

Source: `diagrams2.mdx` lines 906–1154 (Part 1 — Persona routing). Document timestamp: April 27, 2026.

The same `diagrams2.mdx` file contains the locked 5-persona model in lines 1–414 (identical to `diagrams.mdx`), then introduces a different model in Part 1:

- **Persona A** — Rapid Integrator (Studio/Daydream)
- **Persona B1** — Gateway Runner (graduated from A)
- **Persona B2** — ComfyStream/Pipeline Developer
- **Persona C** — ComfyUI Creative / VTuber Builder
- (Implied D omitted)
- **Persona E** — SDK / Alt-Gateway Builder *(Part 3 §3.1 explicitly argues for adding)*
- **Persona F** — Agent-Runtime Developer *(Part 3 §3.1 explicitly argues for adding)*

Part 3 §3.4 ends with: *"Personas E and F need to be added to the persona model with documented entry surfaces, navigator paths, and concept pages — or explicitly subsumed under existing personas with documented reasoning."*

This is unresolved persona-model work, parked inside a file titled "More Diagrams". Live in the published `concepts/` zone, not in `_workspace/`.

## D. Persona-by-persona diff: locked model vs. each file

### vs. `diagrams.mdx`

| Locked persona | `diagrams.mdx` content | Divergence |
|---|---|---|
| AI Persona | Persona 1 — identical narrative, identical infra surfaces (Cloud SPE/SelfGW/AIJS/AIPY/REST/Pipelines/Models/GoLP/AIWorker/AIRunner/TicketBroker/5 guides) | **Identical** |
| Video Platform Persona | Persona 2 — identical narrative, identical boundary statement, identical infra (SelfGW/Frameworks/UIKit/WebRTMP/LJS/Ingest/Playback/Codecs/GoLP/LPMS/TicketBroker/6 guides + Studio routing) | **Identical** |
| Compute Primitives Persona | Persona 3 — identical narrative, identical infra (CommGW/SelfGW/ByocSDK/PyTrickle/CSDocker/StreamPack/ComfyRTC/Trickle/DataChan/BYOCPipes/ByocExamples/GoLP/AIRunner/Container/NaaP/per-second compute/8 guides) | **Identical** |
| Live-Video-First Persona | Persona 4 — identical narrative, identical activation, identical infra (SelfGW/Frameworks/Player/Broadcast/WebRTMP/LJSServer/Ingest/ABR/Playback/Codecs/LowLat/GoLP/LPMS/Catalyst/TicketBroker/Streamplace/7 guides + Studio routing) | **Identical** |
| Protocol Persona | Persona 5 — identical narrative, identical boundary statement, identical infra (livepeer.org/whitepaper/Protocol/GoLP/AIWorker/AIRunner/LPMS/Coordination/6 contracts/3 observability/3 governance/4 cross-tab routes) | **Identical** |

**Classification: identical.** `diagrams.mdx` IS the locked 5-persona model expressed as MDX with Mermaid. No drift.

### vs. `diagrams2.mdx` (treating it as a whole)

The first 414 lines of `diagrams2.mdx` are byte-identical to `diagrams.mdx` and match the locked model exactly. The remaining 1,098 lines diverge.

| Locked persona | `diagrams2.mdx` content | Divergence |
|---|---|---|
| AI Persona | Lines 1–102 (Persona 1, identical) AND lines 906–948 (Persona A "Rapid Integrator", Studio/Daydream-centric — **violates project rule 3** by routing AI persona to Studio) | **Structural mismatch within one file** |
| Video Platform Persona | Lines 105–167 (Persona 2, identical) AND no clear Part 1 analog (closest is the SelfGW infra in B1) | **Partial coverage** |
| Compute Primitives Persona | Lines 171–249 (Persona 3, identical) AND lines 980–1006 (Persona B2 — narrower, ComfyStream-only, drops BYOC/NaaP/payments density) | **Minor drift (B2 is a subset)** |
| Live-Video-First Persona | Lines 253–332 (Persona 4, identical) AND no clear Part 1 analog | **Partial coverage in Part 1** |
| Protocol Persona | Lines 336–411 (Persona 5, identical) AND no Part 1 analog | **Identical in Part A, absent from Part 1** |
| (no locked slot) | Lines 950–977 (Persona B1 Gateway Runner) — graduation persona, novel | **New persona** |
| (no locked slot) | Persona C "ComfyUI Creative / VTuber Builder" | **New persona** |
| (no locked slot) | Persona E "SDK / Alt-Gateway Builder" — Part 3 argues for adding | **New persona — proposed** |
| (no locked slot) | Persona F "Agent-Runtime Developer" — Part 3 argues for adding | **New persona — proposed** |

**Classification: structural mismatch within one file.** `diagrams2.mdx` contains the locked model AND a competing, more granular model. Part 3's explicit call to amend the persona model is unresolved.

### vs. `_workspace/canonical/review/02-personas.md`

| Locked persona | 02-personas.md content | Divergence |
|---|---|---|
| AI Persona | Persona #1 "AI Application Builder" — same role, narrower scope (no real-time AI explicit, no graduation-to-Persona-3 mention) | **Minor drift** |
| Video Platform Persona | Persona #2 "Video Transcoding Developer" — same target audience, narrower scope (transcoding-only, omits player/VOD/webhooks/recording) | **Minor drift (narrower)** |
| Compute Primitives Persona | No analog | **Missing** |
| Live-Video-First Persona | No analog | **Missing** |
| Protocol Persona | Persona #3 "OSS Protocol Contributor" — same role, narrower scope (contribution-only, omits node-op + delegator + LIP authoring) | **Minor drift (narrower)** |
| (no locked slot) | Persona #4 "Hackathon Participant" | **Extra persona** |
| (no locked slot) | Persona #5 "Infrastructure Evaluator" | **Extra persona** |

**Classification: different model entirely.** Earlier research output. Two locked personas missing, two non-locked personas present. Document carries an unresolved "APPROVE/AMEND/REJECT" verdict — review never closed.

### vs. `notes.mdx`

The "Navigator" section of `notes.mdx` (lines 200–235) narrates the five locked personas with identical names and identical mental-model framings ("OpenAI or Replicate, but for video AI" etc.). The IA tree at the top of `notes.mdx` (lines 8–197) slots persona content at `concepts/infra-stack.mdx`.

**Classification: identical.** `notes.mdx`'s persona narrative aligns with the locked model.

### vs. `consolidate.md`

References "the five personas in narrative form" as the content of `concepts/landscape.mdx` (Codex task 2.2). References `persona-infra-maps.md` as the source for `concepts/infra-stack.mdx` (Codex task 2.3).

**Classification: identical (by reference).** Consolidation plan is aligned with the locked model.

## E. Per-divergence specific list

1. **Three persona models exist in the repository simultaneously.** Locked 5-persona (in `diagrams.mdx`, `notes.mdx`, `consolidate.md`, brief). April-7 5-persona (in `02-personas.md`, two personas don't match). Alt 6+ persona model (in `diagrams2.mdx` Part 1 — A/B1/B2/C/E/F, with Part 3 §3.1 explicitly proposing E and F additions). The April-7 model has an unclosed APPROVE/AMEND/REJECT verdict.
2. **`diagrams.mdx` and the first 414 lines of `diagrams2.mdx` are duplicate content** — same five persona Mermaid blocks, same narrative, same cross-persona observations.
3. **`diagrams2.mdx` is two documents merged in one file:** Part A (lines 1–423) the locked persona model identical to `diagrams.mdx`, plus a one-line empty Mermaid block; Part B (lines 424–1512) infrastructure inventory, verification log, alternative Part 1/2/3 persona routing and missing-component analysis. Part B does not belong in the same file.
4. **Persona A in `diagrams2.mdx` Part 1 routes Studio/Daydream as the primary infra surface.** That violates project rule 3 (Studio is a routing destination only, never a Build target). The locked AI Persona routes Cloud SPE community gateway as primary with Studio acknowledged via routing only.
5. **Persona B2 in `diagrams2.mdx` Part 1 is a subset of the locked Compute Primitives Persona** — drops BYOC, NaaP, payments, and gateways-as-developer surfaces. Reduces a dense map to ComfyStream-only.
6. **`diagrams2.mdx` Part 3 §3.4 contains unresolved IA work:** "Personas E and F need to be added to the persona model — or explicitly subsumed under existing personas." This decision has not been made. If E and F are added, the locked 5-persona model becomes a 7-persona model.
7. **Persona-infra-maps.md at the brief-named path is a Cloudflare bot-challenge HTML page (corrupt).** The brief's source-of-truth reference is unusable. The actual content lives in `diagrams.mdx`.
8. **`_workspace/canonical/review/02-personas.md` carries an unclosed APPROVE/AMEND/REJECT verdict** dated April 7. Two of its five personas (Hackathon Participant, Infrastructure Evaluator) do not appear in any later model — they were either rejected without being marked rejected, or silently dropped.
9. **`02-personas.md` references file paths that have since been moved:** `portal.mdx`, `build/workload-fit.mdx`, `concepts/oss-stack.mdx`, `build/byoc.mdx`, `build/model-support.mdx`, `concepts/video-on-livepeer.mdx`. All absent from the live tree (see Task 0 §8). The review references are stale.
10. **`diagrams.mdx` carries an inconsistent H1** — line 6 reads `# Personas`, line 7 reads `# Persona infrastructure maps — Livepeer Developers tab`. Two H1s, mid-page reset of document structure.
11. **`diagrams2.mdx` Part 1 §1.4 is incomplete in this audit's read window.** Persona C "ComfyUI Creative / VTuber Builder" introduced at line 1008 — its diagram and Persona D (if any) are between lines 1008 and 1154 (audit read window not consumed). Wonderland should review for additional drift.
12. **`notes.mdx` contains a full IA tree, a Navigator narrative, and a scratch Questions section** — all in a single live published file under `concepts/`. The IA tree duplicates the brief's locked tree (in a `<Tree>` component); the Navigator restates the persona model; the Questions section is open scratch with unresolved bullets. The page sits in published navigation but reads as a workspace document.

## F. Recommendation

Three actions, sequenced.

### F.1 Settle the persona model

Lock the 5-persona model (Model 1) as the only canonical model. Either:

- **Option A — close at 5.** Mark Personas E and F (from `diagrams2.mdx` Part 3) as explicitly subsumed: E (SDK / Alt-Gateway Builder) under Persona 3 Compute Primitives plus a Build-side `alt-gateways/` subgroup; F (Agent-Runtime Developer) under Persona 1 AI plus a Build-side `agents/` subgroup. The locked IA already contains both subgroups (`build/alt-gateways/`, `build/ai-and-agents/agents/`). Recording the subsumption explicitly resolves Part 3 §3.4.
- **Option B — promote to 7.** Add E and F as full personas with their own infra maps. Expands the locked IA accordingly. Adds two infra maps to `concepts/infra-stack.mdx`. Adds two routing pages to `learn/where-to-find/`.

Recommendation: **Option A.** Personas E and F are graduation/role variations of locked personas 3 and 1 respectively; the locked IA's Build subgroup structure already serves them. Promoting them would over-fragment the entry-point story without adding navigation value. Mark the subsumption explicitly in the persona-locked decision record.

### F.2 Consolidate the persona/infra files

Three files, three roles:

| File | Action | Target |
|---|---|---|
| `concepts/diagrams.mdx` | **MOVE + rename** | `concepts/infra-stack.mdx` (per the locked IA in `notes.mdx`). Strip the duplicate `# Personas` H1 line so only one H1 remains. |
| `concepts/diagrams2.mdx` | **SPLIT** | Lines 1–414: discard as duplicate of `diagrams.mdx`. Lines 424–887: move to `_workspace/infra-inventory.md` — research-grade content, used as source for `concepts/repo-map.mdx` and Part 2 work. Lines 889–1154 + 1447–1512: keep as `_workspace/persona-model-research.md` for the persona-lock decision record. Lines 1155–1446: review for net-new content not captured elsewhere; move to `_workspace/` accordingly. |
| `concepts/notes.mdx` | **MOVE** | `_workspace/notes.mdx`. Not a published page. |
| `snippets/.../persona-infra-maps.md` | **DELETE or REPOPULATE** | Cloudflare junk. Either delete and update SVG references, or repopulate from `diagrams.mdx`. |
| `_workspace/canonical/review/02-personas.md` | **KEEP + annotate** | Add a header line at top: "Superseded by 5-persona model in `concepts/diagrams.mdx` (May 7, 2026)." Close the APPROVE/AMEND/REJECT verdict as "Superseded — Hackathon Participant and Infrastructure Evaluator merged into existing personas." |

### F.3 Lock the decision

Write a single decision record to `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`:

```
D-DEV-PERSONAS-01 | 5-persona model locked for Developers tab |
P1 AI · P2 Video Platform · P3 Compute Primitives · P4 Live-Video-First · P5 Protocol |
Personas E (SDK/Alt-Gateway) and F (Agent-Runtime) explicitly subsumed under P3 and P1 |
Source: concepts/diagrams.mdx (renamed to concepts/infra-stack.mdx) |
Decided: 2026-05-11 | Unblocks: concepts/landscape.mdx authoring, concepts/infra-stack.mdx publication, navigator.mdx persona routing
```

After this, Task 2 classifies `diagrams.mdx`/`diagrams2.mdx`/`notes.mdx` cleanly and Task 3 grades the surviving published files.

STOP — awaiting Wonderland confirmation before Task 2.
