# Livepeer contract address verification: File A is authoritative, File B is unreliable

**File A's addresses are correct in every disputed case.** Cross-referencing Arbiscan, Etherscan, the official Livepeer documentation at `docs.livepeer.org/references/contract-addresses`, and the `go-livepeer` codebase confirms that all six of File B's disputed addresses are either wrong, structurally invalid, or fabricated lookalikes. Several File B addresses share long hex prefixes with real contracts — a pattern suggesting corruption or generation errors rather than random mistakes. The BondingVotes and LivepeerGovernor addresses tested from File A are also incorrect, though the authoritative addresses are now confirmed below.

---

## The six disputed addresses all resolve clearly

Each discrepancy was checked against Arbiscan/Etherscan and the canonical contract list maintained in the Livepeer docs repo (`livepeer/docs`, file `v2/resources/references/contract-addresses.mdx`).

**1. Treasury on Arbitrum One** — File A is correct.
File A's `0xf82C1FF415F1fCf582554fDba790E27019c8E8C4` is the official Treasury contract, confirmed in the Livepeer docs and labeled on Arbiscan. It was deployed as part of the **Delta upgrade** (October 2023, LIP-91) to create a community-governed on-chain treasury funded by protocol inflation. File B's `0xf82C1FF415F1b63Ea3D7ee96c4e69ef6b98df95e` shares the first 12 hex characters with the real address but returns **zero results** across all sources — it appears to be a fabricated lookalike.

**2. ServiceRegistry (Proxy) on Arbitrum One** — File A is correct.
File A's `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431` is the official ServiceRegistry Proxy, labeled **"Livepeer: Proxy Service Registry"** on Arbiscan with approximately **600 transactions** and an implementation target at `0x38093CDca43aeCd7bb474983519A246e93A3b0a7`. File B's `0x351bd9b53C8f8b59E21e2895Fe7DC88Af0d92e89` is not found in any source.

**3. L2Migrator (Proxy) on Arbitrum One** — File A is correct.
File A's `0x148D5b6B4df9530c7C76A810bd1Cdf69EC4c2085` is the official L2Migrator Proxy, with its implementation target at `0x93BB030735747708b4D33093A98d4c804Cd6B58C`. File B's `0x148D5b6B4df9530c7C76A810bd1Cd8560be7863a` shares **30 hex characters** with the real address before diverging — another lookalike that does not exist in any indexed source.

**4. L1Migrator on Ethereum Mainnet** — File A is correct; File B is structurally invalid.
File A's `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A` is the verified L1Migrator contract on Etherscan, labeled **"Livepeer: L1 Migrator"**, compiled with Solidity v0.8.9, and deployed by the official Livepeer Deployer. It has **146 transactions**, with the most recent "Migrate Delegator" call on **December 17, 2025**. File B's address `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89` is only **41 characters** (0x + 39 hex) — Ethereum addresses require exactly 42 characters. It is File A's address with the trailing `A` truncated.

**5. "Verifier" on Arbitrum** — does not exist in the Livepeer protocol.
The address `0x0B9591D35C0aB7E84Eb61E2e90c9Fa79Ac01e7C0` is **not a recognized Livepeer contract**. Livepeer historically deployed `LivepeerVerifier` contracts on Ethereum Mainnet only (now deprecated). The official Arbitrum deployment has **no Verifier contract** of any kind. This entry in File B is entirely spurious.

**6. LivepeerTokenFaucet on Ethereum Mainnet** — invalid address, and faucets only exist on testnets.
File B's `0x3996b5F7E14A0b8Dc1eb8D41D9Da7E59Db0e4fE` is only **40 characters** (0x + 38 hex) — missing two hex digits, making it structurally invalid. Beyond the format error, **no LivepeerTokenFaucet has ever been deployed on Ethereum Mainnet or Arbitrum Mainnet**. Faucet contracts exist only on deprecated testnets (Rinkeby, Arbitrum Rinkeby).

---

## L1Escrow remains active and holds significant LPT

The L1Escrow at `0x6A23F4940BD5BA117Da261f98aae51A8BFfa210A` is **confirmed active** on Ethereum Mainnet. It is a verified contract labeled **"Livepeer: L1 Escrow"** on Etherscan, compiled with Solidity v0.8.9, and deployed by the official Livepeer Deployer. It holds approximately **5.9 million LPT** (roughly **$46.5 million**), making it the largest single holder of LPT tokens. The contract's role is to escrow LPT for the L1-to-L2 Arbitrum bridge. Despite having only 3 transactions (it primarily holds tokens rather than processing frequent calls), it is a critical piece of live infrastructure.

---

## BondingVotes and LivepeerGovernor: the tested addresses are wrong

The BondingVotes and LivepeerGovernor addresses provided for verification from File A do **not match** the official docs. Here are the correct, authoritative addresses:

| Contract | Correct Proxy Address | Correct Target Address |
|---|---|---|
| **BondingVotes** | `0x0B9C254837E72Ebe9Fe04960C43B69782E68169A` | `0x68AF80376Bc1CA0C25a83b28e5570E8c7bdD3119` |
| **LivepeerGovernor** | `0xcFE4E2879B786C3aa075813F0E364bb5acCb6aa0` | `0xd2Ce37BCB287CaDc40647f567C2D3C4220901634` |

The tested address `0x0B9C2127C5038E8f8CB05Da24b817bba15E01CF8` for BondingVotes shares the `0x0B9C` prefix with the real proxy but diverges immediately after. The tested address `0x54462B527992c3Ab78217DF2076824b268bdf637` for LivepeerGovernor does not match either the proxy or target. Arbiscan labels the real BondingVotes proxy as **"Livepeer: Proxy Bonding Votes"** with active `DelegatorBondedAmountChanged` events as recently as November 2025.

---

## Full authoritative Arbitrum One contract list

For reference, the complete set of current (Delta version) Livepeer contracts on Arbitrum One, sourced from the official docs and confirmed by `go-livepeer`:

| Contract | Address |
|---|---|
| Governor | `0xD9dEd6f9959176F0A04dcf88a0d2306178A736a6` |
| Controller | `0xD8E8328501E9645d16Cf49539efC04f734606ee4` |
| LivepeerToken | `0x289ba1701C2F088cf0faf8B3705246331cB8A839` |
| Minter | `0xc20DE37170B45774e6CD3d2304017fc962f27252` |
| BondingManager (Proxy) | `0x35Bcf3c30594191d53231E4FF333E8A770453e40` |
| TicketBroker (Proxy) | `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B` |
| RoundsManager (Proxy) | `0xdd6f56DcC28D3F5f27084381fE8Df634985cc39f` |
| BondingVotes (Proxy) | `0x0B9C254837E72Ebe9Fe04960C43B69782E68169A` |
| Treasury | `0xf82C1FF415F1fCf582554fDba790E27019c8E8C4` |
| LivepeerGovernor (Proxy) | `0xcFE4E2879B786C3aa075813F0E364bb5acCb6aa0` |
| ServiceRegistry (Proxy) | `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431` |
| L2Migrator (Proxy) | `0x148D5b6B4df9530c7C76A810bd1Cdf69EC4c2085` |
| L2LPTGateway | `0x6D2457a4ad276000A615295f7A80F79E48CcD318` |
| AIServiceRegistry (Target) | `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5` |

---

## Conclusion

The pattern across all six discrepancies is consistent: **File A draws from the canonical Livepeer documentation and matches Arbiscan/Etherscan records exactly**, while File B contains addresses that are either truncated, structurally invalid, or share suspicious hex prefixes with real contracts but resolve to nothing. The "Verifier" and "LivepeerTokenFaucet" entries in File B are entirely fabricated — these contracts do not exist on their claimed networks. A secondary finding is that the `livepeer/naap` repository's `addresses.ts` file also contains multiple discrepancies with official docs and should not be treated as authoritative. The only trustworthy sources for deployed Livepeer contract addresses are the **official docs page** (`docs.livepeer.org/references/contract-addresses`) and the **`go-livepeer` codebase** (`cmd/livepeer/starter/starter.go`), which cross-validate each other.