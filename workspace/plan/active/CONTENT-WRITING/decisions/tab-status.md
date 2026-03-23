# Tab Status Board

A tab is only "open" for a phase when its gate is **explicitly unlocked by human sign-off**. A gate does not open automatically when the preceding phase runs — it opens when a named human reviews the required artefact and records approval.

Agents may not proceed past a locked gate without explicit human authorisation recorded in `decision-registry.md`.

---

## Status Table

| Tab | IA Approved | Terminology Locked | Content Scan Done | Structure Approved | Content Pass Open | Veracity Done | Layout Done |
|---|---|---|---|---|---|---|---|
| Gateways | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Orchestrators | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Delegators | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| About | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| Developers | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

---

## Gate Definitions

Each gate requires a specific artefact AND explicit human sign-off. Artefact existence alone does not open a gate.

| Gate | Artefact required | Sign-off required |
|---|---|---|
| **IA Approved** | Canonical audience design output (collated) reviewed and approved | Human explicitly approves per tab before Phase 2+ runs |
| **Terminology Locked** | All BLOCKING items resolved and recorded in `decision-registry.md` | Human confirms all BLOCKING items resolved |
| **Content Scan Done** | `context-packs/[tab]-content-scan.md` exists and is complete | Human reviews scan output |
| **Structure Approved** | `v2/[tab]/_workspace/tab-map.md` approved + persona journey smoke-test passed (trace each primary persona through tab-map: first page answers arriving question, each page hands off correctly, no required JTBD served only by on-demand positions) | Human approves IA audit output |
| **Content Pass Open** | Tab map exists + terminology locked + voice rules confirmed + feedback routing map exists (`decisions/feedback-routing-map.md`) | Human confirms all dependencies met |
| **Veracity Done** | All `REVIEW:` markers resolved; `veracityStatus` set in frontmatter | Human clears all veracity flags |
| **Layout Done** | All pages pass layout-pass.md; frontmatter complete; render validates | Human approves layout output |

---

## Legend

| Symbol | Meaning |
|---|---|
| ⬜ | Not started — gate has not been assessed |
| 🔄 | In progress — artefact being produced or under review |
| ✅ | Human-approved — gate is open; phase may proceed |
| ❌ | Blocked — artefact exists but review found issues; cannot open until resolved |

---

## Update Protocol

When updating this table:
1. Record the gate change in `decision-registry.md` with the approver name and date.
2. Update the symbol in this table.
3. If a gate moves to ❌, log the blocking item in `blocking-items.md`.

Do not update gate status based on agent self-reporting. Only human review opens or blocks a gate.
