# Gateways tab: audience analysis and gap report

Tab path: `v2/gateways/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The Gateway Infrastructure Operator

**Who they are:** An operator who wants to run their own Livepeer gateway — either as the infrastructure layer for an application they're building, or as a public/commercial gateway that third-party developers access. They have strong DevOps skills. They have made a deliberate decision not to use the managed Studio API — they want direct network access, custom routing logic, pricing control, and the ability to keep fees rather than paying a third party.

This is a smaller and more technically sophisticated audience than the Developers tab persona. The key distinguishing question is: "Am I building an application that uses a gateway, or am I the one running the gateway?" The Gateways tab owns the latter.

The typical arrival path: a developer in the Developers tab reads `concepts/running-a-gateway.mdx`, decides they want their own gateway, and crosses into the Gateways tab. Or an existing operator searches directly for gateway configuration.

**What they need (in order):**
1. Confirmation this is the right path for them (vs Studio API) — the decision boundary
2. What a gateway actually does at a technical level — role, responsibilities, payment mechanics
3. Installation and initial configuration
4. Network registration and ETH deposit mechanics
5. Pricing and pipeline selection configuration
6. Production operations: monitoring, uptime, upgrading, incident response
7. How their gateway relates to the orchestrators it selects and pays

---

## 2. Secondary visitor personas

**Developers evaluating** whether to run their own gateway or use Studio. They arrive at the Gateways portal or concepts pages to understand the trade-offs, then return to the Developers tab or commit to staying here. The `concepts/` section must be clear enough to facilitate this decision quickly.

**Orchestrators understanding demand-side mechanics.** Want to understand what gateways need from them: pricing expectations, capability broadcasts, ticket acceptance, job routing logic. They cross-reference from the Orchestrators tab.

**Protocol researchers and analysts.** Want to understand how the gateway layer works as part of the broader network architecture. Will read concepts and may cross-reference with the About tab.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` (12.5KB) — ✅ substantial tab index
- `portal.mdx` (5.5KB) — ✅ tab entry point
- `navigator.mdx` (19.1KB) — ✅ the most comprehensive navigator in the entire v2 site

### concepts/
- Directory confirmed
- Expected: gateway role in the network, relationship to orchestrators, fee and ticket flow, gateway vs Studio API distinction
- Live docs MCP confirms `concepts/role` is live: "The Gateway Role in the Livepeer Network"

### quickstart/
- Directory confirmed
- Expected: first gateway up and running, first job routed

### setup/
- Directory confirmed
- Expected: go-livepeer gateway mode installation, ETH deposit, capability configuration, pricing flags, network activation

### guides/
- Directory confirmed
- Live docs MCP confirms the following are live:
  - `guides/operator-considerations/production-gateways` — public and commercial gateway operation
  - `guides/operator-considerations/operator-impact` (cross-reference from Orchestrators) — how governance applies
- Expected additional: pricing configuration, pipeline selection, monitoring

### resources/
- Directory confirmed
- Expected: troubleshooting reference, RPC endpoints, performance references

---

## 4. Gap analysis

### 4.1 The developer-to-gateway handoff needs to be explicit

The Developers tab has `concepts/running-a-gateway.mdx` (5.7KB) — a page that explains running a gateway from a developer's perspective. This is a routing page that should end with a clear handoff: "If you're ready to set up your own gateway, continue in the Gateways tab."

The Gateways tab's `portal.mdx` must reciprocally acknowledge the developer arriving from this route — it should not assume the reader has only ever been in the Gateways tab. The welcome framing should acknowledge: "You may be here because you're a developer who decided to run your own gateway."

Currently unclear whether either page makes this handoff explicit. Both should be audited.

### 4.2 Gateway SDK documentation — cross-tab gap

`build/sdk-gateway.mdx` in the Developers tab is 1.8KB — critically thin for the page that explains the gateway SDK used by developers to interact with self-hosted gateways. This is not the Gateways tab's responsibility to fix (it lives in Developers), but the Gateways tab's `resources/` section should reference the SDK documentation so that operators who are also developers know it exists.

### 4.3 ETH deposit mechanics — confirm depth

The gateway's economic model requires ETH deposits to fund probabilistic micropayments to orchestrators. This is a non-trivial operational requirement that confuses new gateway operators. The setup section must cover:
- How much ETH to deposit initially
- How deposits are drawn down by jobs
- How to monitor deposit balance
- What happens when a deposit runs out (jobs start failing)
- How to top up

Without clear deposit mechanics documentation, new gateway operators will run into unexpected job failures that they don't understand.

### 4.4 Public vs private gateway modes — confirm coverage

The live docs MCP confirms `production-gateways` covers "Public and Commercial Gateways Operating on Livepeer." Confirm this page adequately distinguishes between:
- A private gateway (serving only the operator's own application)
- A public gateway (accessible to third-party developers, listed in the network)
- A commercial gateway (charging for access, managing revenue)

These three modes have meaningfully different operational considerations and the page should address each.

### 4.5 Content currency — go-livepeer v0.8.9 and v0.8.10 changes

go-livepeer v0.8.9 (January 2026) added a gateway-native WHEP server for real-time AI video playback, and merged BYOC streaming workload processing. v0.8.10 (March 2026) implemented the AI/Live Remote Signer. Both of these are gateway-affecting changes. The setup and guides sections need to reflect these additions.

REVIEW flag needed on any setup page referencing go-livepeer configuration. SME: Rick.

---

## 5. IA status summary

```
v2/gateways/
├── portal.mdx                                        ✅ exists — audit developer handoff framing
├── navigator.mdx                                     ✅ exists — most comprehensive in site
├── index.mdx                                         ✅ exists — substantial (12.5KB)
│
├── concepts/
│   └── role.mdx                                      ✅ confirmed live
│   └── [other concepts pages]                        ⚠️  confirm ETH/payment mechanics coverage
│
├── quickstart/                                       ✅ exists — confirm currency vs v0.8.10
│
├── setup/                                            ✅ exists
│   └── [ETH deposit mechanics]                       ⚠️  confirm depth — critical for new operators
│   └── [WHEP server config]                          ⚠️  needs v0.8.9 update
│   └── [Remote Signer config]                        ⚠️  needs v0.8.10 update
│
├── guides/
│   ├── operator-considerations/production-gateways   ✅ confirmed live
│   └── [public vs private vs commercial modes]       ⚠️  confirm all three modes are covered
│
└── resources/                                        ✅ exists — confirm contents
    └── [SDK cross-reference]                         ⚠️  add reference to Developers sdk-gateway.mdx
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
