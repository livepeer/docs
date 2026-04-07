Correct. Let me check what the research actually captured on non-controller contracts before responding.Fair correction. The previous response overclaimed. Let me map the actual population clearly.

---

**The full contract set, by how they are actually discovered and verified:**

**Group 1 — Controller-registered (chain truth available)**

These are registered via `setContractInfo()` and readable via `getContractInfo()` / `getContract()`:

- Arbitrum: `BondingManager`, `TicketBroker`, `RoundsManager`, `ServiceRegistry`, `BondingVotes`, `LivepeerGovernor`, `L2Migrator`, `Minter`, `LivepeerToken`
- Ethereum: `LivepeerToken`, `Minter` (slot resolves to `BridgeMinter`)

Controller events and current state are the truth source here. Proxy deployment artefacts are a cross-check on the proxy address and target id binding. They are not how you discover or verify the current implementation — that requires the live Controller call, as discussed.

**Group 2 — Non-controller, bridge cluster (no Controller slot, but on-chain getter graph)**

`BridgeMinter`, `L1LPTGateway`, `L1Migrator`, `L1Escrow`, `L2LPTGateway` — these returned zero as direct controller keys on live RPC. They are not registered in the Controller. Their addresses come from:

- Official upstream deployment artefacts in `livepeer/arbitrum-lpt-bridge`
- Runtime cross-verification via on-chain getters (e.g. `BridgeMinter.l1LPTGatewayAddr()`, `L1LPTGateway.l1LPTEscrow()`)
- The getter graph is self-confirming: L2LPTGateway's `l1Counterpart()` must equal L1LPTGateway's address independently derived

No Controller event will ever confirm these. The source of truth is deployment artefact plus runtime getter cross-check.

**Group 3 — Fully detached (no Controller slot, no getter graph)**

`AIServiceRegistry`, `Governor`, `Treasury` — not in the Controller, no runtime getters pointing to them from the bridge cluster. Their addresses come from:

- Official upstream deployment artefacts (`livepeer/protocol` `delta` branch)
- Official runtime consumers (`go-livepeer` hardcodes AIServiceRegistry address)
- Explorer verification and deployer confirmation as supplementary signals

No chain event or getter graph covers these. Discovery and truth are entirely upstream-artefact-based.

---

**What this means for the architecture**

The previous response's Layer 2 framing implied "Controller plus bridge getters covers everything." It does not. The three groups need three distinct proof chains, and there is no single chain-based mechanism that handles all of them. The architecture is correct in having separate paths — the mistake was presenting Controller events as the dominant mechanism and treating the rest as edge cases. Groups 2 and 3 are not edge cases; `L1LPTGateway` and `L1Escrow` hold significant live value and are not Controller-managed.
