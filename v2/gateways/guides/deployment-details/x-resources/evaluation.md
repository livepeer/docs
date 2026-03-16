# Setup Paths Section — Journey Evaluation and Gap Analysis

**Date:** 2026-03-13
**Section scope:** 4 stubs in `guides/setup-paths/` — `gateway-setup-paths.mdx`, `on-chain-vs-off-chain.mdx`, `sdk-alt-gateways.mdx`, `dual-gateway-config.mdx`
**Evaluation method:** Score each page against the specific questions each persona brings when deciding which gateway path to take. Not UI or spelling; journey completeness only.

---

## Scoring method

Each page is scored against the questions a reader at this position would bring. Possible answers per question: ✅ answered, ⚠️ partially answered, ❌ not answered.

---

## Page scores

### `gateway-setup-paths.mdx` — "Gateway Setup Paths"

**Purpose:** Route operators to the right path. Answer: "Which gateway type fits me?"

| Persona question                                              | Score | Finding                                                                      |
| ------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------- |
| "Is my use case video, AI, or both?"                          | ❌    | Bullet list names paths but gives no basis for choosing                      |
| "Do I need ETH/crypto for AI?"                                | ❌    | Off-chain path mentioned but ETH requirement not addressed                   |
| "How long does each path take to set up?"                     | ❌    | No time estimates, no complexity indicator                                   |
| "What OS do I need?"                                          | ❌    | Not mentioned                                                                |
| "Is there a path that doesn't need the Go binary?"            | ❌    | SDK path listed but no meaningful distinction                                |
| "What is the off-chain path — do I need my own orchestrator?" | ❌    | Existing docs actively mislead on this (WRONG warning about needing own GPU) |

**Score: 0/6 — the stub is functionally empty. It names 5 paths but provides no basis for choosing between them.**

---

### `on-chain-vs-off-chain.mdx` — "On-Chain vs Off-Chain Gateways"

**Purpose:** Explain the on-chain/off-chain distinction. Answer: "Do I need to engage with crypto?"

| Persona question                                               | Score | Finding                                                                                                 |
| -------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------- |
| "What does 'on-chain' actually mean for me practically?"       | ❌    | 4 bullet points with no explanatory prose                                                               |
| "Can I run an AI gateway without ETH?"                         | ❌    | Not addressed                                                                                           |
| "What is a remote signer and do I need one?"                   | ❌    | Not mentioned                                                                                           |
| "Is off-chain only for dev/testing or is it production-ready?" | ❌    | The existing docs imply off-chain is only for local dev — this is WRONG and a critical accuracy failure |
| "What is the decision matrix between the two modes?"           | ❌    | No matrix exists                                                                                        |

**Score: 0/5 — bare stub with a wrong implicit framing (off-chain = dev-only). The production off-chain AI path via remote signer is completely absent.**

**Critical accuracy error:** The existing `ai-configuration.mdx` warning — "If you run your gateway off-chain you will need to run your own Orchestrator node" — is factually incorrect. Off-chain AI gateways can connect directly to on-chain orchestrators using the community remote signer. This error must not be repeated here.

---

### `sdk-alt-gateways.mdx` — "SDK & Alternative Gateways"

**Purpose:** Cover non-Go gateway implementations. Answer: "Can I build a gateway in Python/browser/mobile?"

| Persona question                                                              | Score | Finding       |
| ----------------------------------------------------------------------------- | ----- | ------------- |
| "What is livepeer-python-gateway and is it production-ready?"                 | ❌    | Not covered   |
| "Do I need the Go binary for Python integration?"                             | ❌    | Not addressed |
| "How does orchestrator discovery work without the on-chain registry?"         | ❌    | Not mentioned |
| "What do I need to implement vs what does the remote signer handle?"          | ❌    | No coverage   |
| "What are the state management rules I must follow to avoid invalid tickets?" | ❌    | No coverage   |

**Score: 0/5 — bare stub. The remote signer protocol, Python gateway, BYOC, and discovery methods are all absent.**

---

### `dual-gateway-config.mdx` — "Dual Gateway Configuration"

**Purpose:** Guide running AI and video together. Answer: "Can I run both on one node and how?"

| Persona question                                           | Score | Finding       |
| ---------------------------------------------------------- | ----- | ------------- |
| "Can I run AI and video on the same machine?"              | ❌    | Not answered  |
| "Do I need two separate binaries?"                         | ❌    | Not mentioned |
| "What ports does each service need — are there conflicts?" | ❌    | Not covered   |
| "What are the resource implications of dual mode?"         | ❌    | Not covered   |
| "What OS is required for dual mode?"                       | ❌    | Not mentioned |
| "Is there a Docker Compose configuration for this?"        | ❌    | Not covered   |

**Score: 0/6 — bare stub. Dual gateway is the most complex path and has zero content.**

---

## Section-level gap analysis

### Structural problem: 4 pages covering overlapping or thin ground

The current 4 stubs have overlapping territory (on-chain vs off-chain is a sub-question within the path decision, not its own page) and leave major technical ground uncovered. The consolidation proposal in the project doc is correct.

**Decision: consolidate to 2 pages.**

| Original stub               | Disposition                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| `gateway-setup-paths.mdx`   | Rewrite → Page 1 "Choose Your Gateway Path"                              |
| `on-chain-vs-off-chain.mdx` | Absorb into Page 1 as a decision dimension, not a standalone page        |
| `sdk-alt-gateways.mdx`      | Absorb into Page 2 as an SDK/alternative tab with full technical content |
| `dual-gateway-config.mdx`   | Absorb into Page 2 as a Dual path tab with confirmed technical content   |

### Critical gaps vs persona journeys

| Gap                                                                  | Severity    | Affects          |
| -------------------------------------------------------------------- | ----------- | ---------------- |
| Off-chain = dev-only framing is WRONG and must be corrected          | 🔴 Critical | Personas A, C, E |
| No decision matrix with OS, ETH requirement, time-to-start, best-for | 🔴 Critical | All personas     |
| Community remote signer (`signer.eliteencoder.net`) not mentioned    | 🔴 Critical | Personas A, C    |
| No coverage of Python gateway (livepeer-python-gateway)              | 🔴 Critical | Persona C        |
| No orchestrator discovery methods documented for off-chain           | 🔴 Critical | Personas A, C    |
| Dual gateway OS requirement (Linux only) not documented              | 🟡 High     | Persona A, E     |
| ETH amounts for on-chain not in this section                         | 🟡 High     | Persona D        |
| `-broadcaster` → `-gateway` rename confusion not addressed           | 🟡 High     | Persona D        |
| Remote signer state management rules absent                          | 🟡 High     | Persona C        |
| BYOC vs LV2V vs batch AI difference not addressed                    | 🟢 Medium   | Persona C        |
| No video tutorial links                                              | 🟢 Medium   | All              |

### Persona journey completeness verdict

| Persona                                     | Current score | Blocker                                                  |
| ------------------------------------------- | ------------- | -------------------------------------------------------- |
| A — App Developer graduating to self-hosted | 0/6           | No path to off-chain AI gateway without own orchestrator |
| B — Gateway-as-Service Provider             | 0/4           | No dual/platform path guidance                           |
| C — SDK Builder                             | 0/5           | No Python gateway, no remote signer, no discovery        |
| D — Video Broadcaster                       | 0/4           | No on-chain walkthrough, no ETH clarity                  |
| E — Platform Builder                        | 0/5           | No dual or NaaP path                                     |

**All 5 personas have zero usable content in this section. This is the highest-priority section gap in the Gateways tab.**

---

## Page structure decision

### Page 1: `gateway-setup-paths.mdx` → "Choose Your Gateway Path"

Replaces: gateway-setup-paths.mdx, on-chain-vs-off-chain.mdx

Must contain:

- Quick comparison table: all 5 paths vs OS / ETH needed / time-to-start / best-for
- Per-path decision cards (AI off-chain, Video on-chain, Dual, GaaS/Platform, SDK)
- On-chain vs off-chain callout (the off-chain = dev-only correction)
- Persona self-routing ("I am building an app, not infra" escape hatch)
- "Not sure?" accordion with direct questions
- Forward links to requirements and quickstart

### Page 2: `requirements-by-path.mdx` → "Requirements by Path"

Replaces: sdk-alt-gateways.mdx, dual-gateway-config.mdx (and adds SDK/dual to tabbed requirements)

Must contain:

- Tabbed structure: AI Off-chain / Video On-chain / Dual AI+Video / SDK Alternative
- Per tab: "what you need" AND "what you do NOT need"
- Hardware specs (4-8 CPU, 16-32GB RAM — consistent across paths)
- OS compatibility table (confirmed from setup.mdx)
- Off-chain orchestrator discovery: all 3 methods
- On-chain ETH amounts (0.065 deposit + 0.03 reserve for testing; 0.36 recommended production reserve)
- Dual gateway specifics (Linux only, port assignments, Docker Compose pattern)
- SDK/alternative prereqs (remote signer endpoint, Python env, no Go binary required)

---

## Key technical facts confirmed for writing

All facts below are verified against source files before writing. REVIEW flags noted inline.

| Fact                                                                        | Source                                  | Status                        |
| --------------------------------------------------------------------------- | --------------------------------------- | ----------------------------- |
| Off-chain AI gateway: no ETH required                                       | Remote_signers.md, research report      | ✅ Confirmed                  |
| Off-chain AI gateway: Linux only (Windows/macOS binaries not yet available) | ai-configuration.mdx upload Warning     | ✅ Confirmed                  |
| Community remote signer: signer.eliteencoder.net                            | Discord, research report                | ⚠️ REVIEW: confirm still live |
| On-chain deposit: 0.065 ETH (minimum testing)                               | fund-gateway.mdx upload                 | ✅ Confirmed                  |
| On-chain reserve: 0.03 ETH (minimum), 0.36 ETH (production recommended)     | fund-gateway.mdx upload                 | ✅ Confirmed                  |
| Gateway port 8937 = HTTP/AI interface                                       | ai-configuration.mdx, startup log       | ✅ Confirmed                  |
| Gateway port 1935 = RTMP (video ingest)                                     | ai-configuration.mdx startup log        | ✅ Confirmed                  |
| `-gateway` flag (replaces old `-broadcaster`)                               | research report, multiple sources       | ✅ Confirmed                  |
| `-httpIngest` enables HTTP ingestion                                        | ai-configuration.mdx                    | ✅ Confirmed                  |
| Dual gateway: Linux only                                                    | setup.mdx OS table (AI or Dual = Linux) | ✅ Confirmed                  |
| Video-only gateway: Linux, Windows, Docker                                  | setup.mdx OS table                      | ✅ Confirmed                  |
| livepeer-python-gateway: github.com/j0sh/livepeer-python-gateway            | research report, Discord                | ✅ Confirmed                  |
| Remote signing: PRs #3791 and #3822                                         | Remote_signers.md                       | ✅ Confirmed                  |
| Stateless signer: state must be carried forward by client                   | Remote_signers.md                       | ✅ Confirmed                  |
| Off-chain discovery method 1: explicit orchAddr list                        | research report                         | ✅ Confirmed                  |
| Off-chain discovery method 2: discovery URL (webhook format)                | research report                         | ✅ Confirmed                  |
| Off-chain discovery method 3: remote signer GetOrchestrators endpoint       | research report                         | ⚠️ REVIEW: merged to main?    |
| BYOC uses HTTP not gRPC for discovery                                       | research report                         | ✅ Confirmed                  |
| NaaP repo: github.com/livepeer/naap                                         | research report                         | ✅ Confirmed                  |
| Issue #3744: reduce reserve requirement (open)                              | fund-gateway.mdx                        | ✅ Confirmed                  |
