# Connect Page — Research Collation

> Sources gathered for the holistic `connect.mdx` page at `v2/gateways/setup/connect.mdx`.

---

## What "connect" means for a Gateway

After install + configure, the Gateway needs to discover and connect to Orchestrators before it can route jobs. The connect step bridges the gap between a configured node and a live, job-routing node.

Connect covers three concerns:
1. **Orchestrator discovery** — how the Gateway finds Orchestrators (on-chain automatic vs off-chain manual)
2. **Orchestrator selection** — how the Gateway chooses which Orchestrators to route to (pinning, scoring, blocklists)
3. **Service publication** — making the Gateway itself reachable and discoverable (service URI, DNS, AI registry)

---

## Source Inventory

### 1. Existing `setup/connect/` child pages

| File | Content | Disposition |
|---|---|---|
| `connect-with-offerings.mdx` | Discovery process (4 steps), `/getNetworkCapabilities` API, NetworkCapabilities data structure, offerings breakdown (models, pipelines, pricing, regions, reliability) | Extract: discovery process, API endpoint |
| `discover-offerings.mdx` | Near-duplicate of connect-with-offerings with StyledSteps format | Superseded by connect-with-offerings |
| `lp-marketplace.mdx` | Marketplace concept, Mermaid flow diagrams, OrchestratorInfo protobuf, offering details | Extract: marketplace concept, protobuf structure |

### 2. Quickstart — Docker on-chain tab (Step 4: "Connect Gateway")

**Source:** `quickstart/views/docker/dockerOnChainTab.mdx`

Key content:
- On-chain discovery is automatic
- Verify discovery: `curl http://localhost:5935/getOrchestrators`
- On-chain discovery requires ETH
- Livepeer Explorer leaderboard link
- Expandable tips: "Connecting to Orchestrators", "Automatic Orchestrator Discovery System"
  - `DBOrchestratorPoolCache` polls blockchain every 25 minutes
  - BondingManager contract query
  - Capability matching (discovery.go:160-174)

### 3. Quickstart — Docker off-chain tab (Step 6: "Gateway Tips")

**Source:** `quickstart/views/docker/dockerOffChainTab.mdx`

Key content:
- `-orchAddr` flag required for off-chain
- Points to running orchestrator

### 4. Quickstart — Linux/Windows on-chain/off-chain tabs

**Source:** `quickstart/views/{linux,windows}/{On,Off}ChainTab.mdx`

Key content: Stub pages with step titles only (Install, Configure, Run, Connect, Test, Monitor, Tips). No actual connect content to extract.

### 5. Advanced Operations — Orchestrator Selection

**Source:** `guides/advanced-operations/orchestrator-selection.mdx`

Key content:
- Selection algorithm: query → filter → blocklist → score → dispatch
- Scoring factors: randomness, stake, price, price sensitivity (with flags)
- Workload criteria table (Video/AI/Dual)
- Orchestrator settings tabs:
  - **Pinning** (`-orchAddr`) — recommended for production AI
  - **Dynamic Discovery** (`-orchWebhookUrl`) — webhook-based
  - **Performance Scoring** (`-orchPerfStatsUrl`, `-minPerfScore`)
  - **Blocklisting** (`-orchBlocklist`)
- Tiering strategy (multiple gateway instances)
- Failover: automatic swaps, reducing swaps, discovery timeout (`-discoveryTimeout`)
- AI capability matching: `/getNetworkCapabilities`, `-maxPricePerCapability`, `-ignoreMaxPriceIfNeeded`

### 6. Advanced Operations — Gateway Discoverability

**Source:** `guides/advanced-operations/gateway-discoverability.mdx`

Key content:
- Service URI: `-serviceAddr`, `-gatewayHost`
- DNS setup
- HTTPS required
- Capability advertising (models, pricing, auth, SLAs)
- Discovery methods: Community, Livepeer Tools, Providers directory, Direct integration
- On-chain discovery: AI Registry (`-aiServiceRegistry`), Video Registry (planned)
- Video gateway `-serviceAddr` difference (Orchestrator callback)

### 7. Setup — On-Chain Setup

**Source:** `setup/on-chain-setup.mdx`

Key content:
- Ethereum node access (`-ethUrl`)
- Network specification (`-network`)
- Account credentials (`-ethAcctAddr`, `-ethPassword`, `-ethKeystorePath`)
- Smart contract controller (`-ethController`)

### 8. Setup — Publish / Connect with Offerings

**Source:** `setup/publish/connect-with-offerings.mdx`

Key content: WIP page with marketplace concept, discovery process, offerings — same content as `setup/connect/` pages. Not used.

---

## Content Architecture for connect.mdx

### Scope

The connect page answers: "My Gateway is installed and configured. How do I connect it to the Livepeer network so it can discover Orchestrators and start routing jobs?"

This is distinct from:
- **Configure** (previous step) — sets up workload config, pricing files
- **Verify** (next step) — confirms the Gateway is routing correctly
- **Orchestrator Selection** (advanced guide) — fine-tuning selection algorithms
- **Discoverability** (advanced guide) — making the Gateway itself discoverable

### OS-Specific Concerns

| Concern | Docker | Linux | Windows |
|---|---|---|---|
| Off-chain: set `-orchAddr` | In `docker-compose.yml` | In startup command | In startup command |
| On-chain: auto-discovery | Network flags in compose | Network flags in command | Network flags in command |
| AI registry | `-aiServiceRegistry` flag | Same | Same |
| Verify discovery | `curl` from host | `curl` direct | `Invoke-WebRequest` or `curl.exe` |
| Service URI (public) | `-serviceAddr` in compose | In command | In command |

### Sections for each OS tab

1. **Off-chain connection** — manual Orchestrator list via `-orchAddr`
2. **On-chain connection** — automatic discovery via `-network` + blockchain
3. **Verify connection** — confirm Orchestrators are discovered
4. **Service publication** — make the Gateway reachable (serviceAddr, DNS)
5. **AI-specific** — `-aiServiceRegistry` for on-chain AI discovery

### Key flags referenced

| Flag | Purpose |
|---|---|
| `-orchAddr` | Comma-separated Orchestrator URIs (off-chain) |
| `-orchWebhookUrl` | External webhook returning Orchestrator list |
| `-network` | Blockchain network for on-chain mode |
| `-ethUrl` | Arbitrum RPC endpoint |
| `-serviceAddr` | Advertised service address |
| `-gatewayHost` | External hostname |
| `-aiServiceRegistry` | Register with AI service registry on-chain |
| `-orchPerfStatsUrl` | External performance scoring service |
| `-minPerfScore` | Minimum acceptable performance score |
| `-orchBlocklist` | Exclude specific Orchestrators |
| `-discoveryTimeout` | Discovery timeout duration |
| `-maxPricePerCapability` | Per-capability price cap (AI) |
| `-maxPricePerUnit` | Per-unit price cap (video) |

---

## Decision: Page Structure

The connect page follows the install.mdx / verify.mdx / monitor.mdx pattern:
- Parent page at `v2/gateways/setup/connect.mdx` with Docker/Linux/Windows tabs in `<BorderedBox>`
- OS-specific view files at `v2/gateways/custom/views/setup/connect/{docker,linux,windows}-connect-content.mdx`
- Imports `iconItems.jsx` for workload badges
- Uses `StyledSteps` for the connection journey within each OS tab
- Covers both off-chain and on-chain within each OS (not separate tabs — the OS is the primary axis, mode is secondary within each)
