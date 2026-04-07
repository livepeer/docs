# Exemplary Scripts

> Pointer + analysis. Do not copy files — emulate the patterns.
> Read the script framework at `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` before writing any script.

---

### fetch-contract-addresses-v2.js (Gold Standard)

**File:** `.github/scripts/fetch-contract-addresses-v2.js`

**Why it's good:** Full 11-tag JSDoc header in correct order. Config-driven via CONTRACT_REGISTRY — adding a new contract is a registry entry, not a code change. Pipeline pattern clearly stated in @pipeline tag: "governor-scripts + supplement -> Arbiscan verify -> contractAddressesData.jsx". CLI flags (--dry-run, --skip-verify, --scan-fix) provide operational flexibility. Env vars for optional API keys with graceful fallback.

**Key patterns:**
- 11-tag JSDoc: @script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy
- @pipeline tag documents the full data flow in one line
- @usage shows exact CLI invocation with all flags
- @policy states constraints: "Public APIs only. ARBISCAN_API_KEY/ETHERSCAN_API_KEY optional for higher rate limits."
- CONFIG section at top: paths, env vars, CLI flag parsing — all before any logic
- CONTRACT_REGISTRY: static editorial metadata per contract that cannot be derived from APIs
- Network-aware overrides: `ethOverride` for contracts with different sources on different chains
- getRegistryEntry() with sensible defaults for unknown contracts
- Separation of concerns: fetching, verifying, and writing are distinct phases

**Watch out:** This script is ~400 lines. Most scripts should be shorter. The pattern to emulate is the JSDoc, config-driven design, and CLI flag approach — not the overall size.