# blockchain-contracts.mdx — Full Review Report
**Date:** 28 March 2026  
**Sources used:** Blockscout MCP (on-chain), GitHub livepeer/protocol delta branch (contract source), livepeer/governor-scripts

---

## Overall assessment

The page is structurally sound and architecturally correct. The contract interaction diagram is accurate. The proxy/target pattern is correctly explained. All addresses are dynamically sourced from `contractAddressesData` — meaning they are only as correct as that data file. The one hardcoded concern is that the `contractAddressesData` file must already be updated with the BondingManager V11 target address (`0x4bA7E7531Ab56bC8d78dB4FDc88D21F621f34BB4`).

---

## Errors and inaccuracies

### 1. Governor — wrong description of function signatures
**Location:** Governor accordion, Key functions  
**Current text:**
```
stage(Transaction[] calldata _transactions, uint256 _delay)
execute(Transaction[] calldata _transactions)
```
**Actual source (`Governor.sol`, delta branch):**
```solidity
function stage(Update memory _update, uint256 _delay) public onlyOwner
function execute(Update memory _update) public payable
function cancel(Update memory _update) public onlyOwner
```
The type is `Update` not `Transaction[]`. The struct is named `Update`, not `Transaction`. The page also omits `cancel()` which exists and is documented in the source.

**Also:** `owner()` is listed as a function — it is a **public state variable**, not a function. In Solidity, public variables auto-generate a getter, but it is technically not a defined function. This is a minor accuracy issue.

**Fix:** Correct `Transaction[]` → `Update memory`, add `cancel(Update memory _update)`, note that `owner` is a public variable.

---

### 2. Governor — stale "last active" date
**Location:** Governor accordion, verified line  
**Current text:** `_Verified · 18 transactions · Last active Aug 2025 · Deployed by Livepeer Deployer_`  
**On-chain reality (Blockscout):** Governor executed on:
- **19 March 2026** — BondingManager V11 upgrade
- **19 February 2026** — previous upgrade
- **23 January 2026**
- **23 August 2025**

The page claims "Last active Aug 2025" — this is now significantly out of date. The Governor was active as recently as 19 March 2026 (9 days ago from today).

**Fix:** Remove the static "Last active" date entirely from this copy — it will always go stale. The Blockscout link shows live activity. Or replace with "Active — see Arbiscan for latest transactions."

---

### 3. BondingManager — missing `checkpointBondingState` public function
**Location:** BondingManager key functions  
**Issue:** The page documents `checkpointBondingState` only in the BondingVotes section as an internal operation "not callable directly." However, `BondingManager.sol` (delta branch) exposes a **public** `checkpointBondingState(address _account)` function:
```solidity
function checkpointBondingState(address _account) external {
    _checkpointBondingState(_account, delegators[_account], transcoders[_account]);
}
```
This is intentional — it allows anyone to fix a stale checkpoint for any account without triggering a full bond/reward call. This is useful for operators and integrators. It should be documented under BondingManager key functions.

---

### 4. BondingManager — missing `transferBond` function
**Location:** BondingManager key functions  
**Issue:** `transferBond(address _delegator, uint256 _amount, ...)` is a public function in the contract. It transfers ownership of a bond to a new delegator. This is used in practice (documented in the Livepeer forum). Not listed in the page.

---

### 5. BondingManager — `claimEarnings` parameter note missing
**Location:** BondingManager key functions  
**Current text:** `claimEarnings(uint256 _endRound)` — Checkpoint and claim accumulated rewards and fees through a given round  
**Source code note:** The `_endRound` parameter is **unused** as of current implementation. The NatSpec says:
```
@param _endRound Unused, but used to represented the last round for which to claim...
Currently, the earnings are always claimed until the current round instead.
```
This is a subtle but important point — callers passing an `_endRound` value are not actually controlling the end round. The page implies they are.

---

### 6. TicketBroker — event name is wrong
**Location:** TicketBroker purpose section  
**Current text:** `Emits WinningTicketRedeemed events used for on-chain payment monitoring`  
**Actual event name in source:** `WinningTicketRedeemed` does not appear in the Livepeer delta source. The actual events in `TicketBroker.sol` are `WinningTicketTransfer` and related events. This needs verification against the actual TicketBroker source.

---

### 7. Badge colour typo — L1 LPTGateway
**Location:** L1 LPTGateway / L2 LPTGateway section  
**Current text:** `<Badge color="gren">` (line 740)  
**Fix:** `<Badge color="green">`

---

### 8. Intro copy — "decentralized" should be "decentralised" (UK English per project standards)
**Location:** Line 152  
**Current text:** `permissionlessly govern its decentralised network` — this one is correct  
**No issue here** — already UK English.

---

### 9. Controller — "20 transactions" is stale
**Location:** Controller accordion verified line  
**Current text:** `_Verified · Deployed by Livepeer Deployer · 20 transactions_`  
**On-chain reality:** Controller has far more than 20 interactions — it received a transaction in block 446524147 (today, 28 March 2026) with multiple internal calls. The "20 transactions" count referred to direct top-level transactions to the Controller specifically (not internal calls), which was accurate when written. However it may mislead readers into thinking the Controller is lightly used.

**Recommendation:** Remove the static transaction count. The Blockscout link makes this live. Or rephrase to "Verified · Active" without a count.

---

### 10. AIServiceRegistry — `-aiServiceRegistry` flag claim
**Location:** AIServiceRegistry purpose section  
**Current text:** `Used when a node is started with -aiServiceRegistry flag`  
**go-livepeer source (starter.go):** The flag is `-aiServiceRegistry` (boolean) which triggers use of the hardcoded address. This is correct. ✅

---

## What is fully correct

- All contract addresses resolve to live, verified, deployed contracts on Arbitrum One ✅
- `feeShare` definition is accurate — "% of fees paid to delegators by transcoder" ✅  
- Proxy/target architecture explanation is accurate ✅
- `treasuryBalanceCeiling` halting contributions — confirmed in BondingManager source ✅
- `treasuryRewardCutRate` being in BondingManager, not Minter — confirmed ✅  
- All GitHub source links point to valid files on the `delta` branch ✅
- All bridge contract descriptions are accurate ✅
- LivepeerGovernor functions are accurate against delta branch source ✅
- BondingVotes `checkpointBondingState` being called by BondingManager not users — confirmed ✅
- Treasury as TimelockController — confirmed ✅
- The Tip callout in Token section — accurate ✅
- `contractAddressesData` data-driven address approach — good architecture ✅
- governor-scripts as canonical source — confirmed and correct ✅

---

## Enhancement suggestions

1. **Add current protocol parameter values** — the page explains what functions exist but not what the current values are. A small callout or table showing current `unbondingPeriod` (rounds), `roundLength` (blocks), current `inflation` rate, `treasuryRewardCutRate`, and active orchestrator set size would make this page genuinely useful for operators and researchers. These can be queried live from the chain.

2. **Add slashing note to BondingManager** — `slashTranscoder()` exists in the source but is currently inoperative (Verifier role set to null address). A brief note that slashing exists in the protocol design but is currently disabled via governance would be informative for security-minded readers.

3. **Diagram improvement** — the governance flow diagram has `MINT[Minter] -.->|"treasury cut"| T[Treasury / Timelock]` but in reality the Minter sends LPT to the Treasury address, not through a separate treasury-timelock path. The arrow label could be more accurate: Minter calls `trustedTransferTokens(treasury, amount)` on each `reward()` call.

4. **Add `transferBond` to BondingManager** — used in practice for migrations and stake transfers between wallets. Missing from the key functions.

5. **Cross-link to contract-addresses page** — the final section already does this. Good.

6. **Note that BondingManagerTarget V11 source is unverified on Blockscout** — the current implementation (`0x4bA7E7531...`) was deployed 16 Feb 2026 and is not yet source-verified on Blockscout. Mention this in the accordion so readers know the `SolidityEmbed` shows the `delta` branch source (which should match, but is unconfirmed until verified).

---

## Summary of changes required for corrected MDX

| # | Type | Location | Change |
|---|---|---|---|
| 1 | ❌ Error | Governor functions | `Transaction[]` → `Update memory` throughout; add `cancel()` |
| 2 | ❌ Error | Governor verified line | Remove static "Last active Aug 2025" |
| 3 | ➕ Missing | BondingManager functions | Add public `checkpointBondingState(address _account)` |
| 4 | ➕ Missing | BondingManager functions | Add `transferBond()` |
| 5 | ⚠️ Misleading | BondingManager `claimEarnings` | Note that `_endRound` is unused; earnings always claimed to current round |
| 6 | ❌ Error | TicketBroker event name | Verify `WinningTicketRedeemed` — may be wrong event name |
| 7 | ❌ Typo | L1 Gateway Badge | `"gren"` → `"green"` |
| 8 | ⚠️ Stale | Controller verified line | Remove "20 transactions" count |
| 9 | ➕ Enhancement | BondingManager | Add slashing note (disabled) |
| 10 | ➕ Enhancement | All | Consider adding current param values callout |
