/**
 * @script            fetch-contract-addresses
 * @type              automation
 * @concern           content
 * @niche             data/blockchain
 * @purpose           infrastructure:data-feeds
 * @description       Fetches, verifies, and enriches all Livepeer protocol contract addresses
 *                    across three source repos, two chains, and two explorer APIs. Writes an
 *                    enriched JSX data file consumed by all contract display pages.
 * @mode              generate
 * @scope             .github/scripts, snippets/data/contract-addresses/, v2/
 * @usage             node .github/scripts/fetch-contract-addresses.js [--dry-run] [--skip-verify] [--scan-fix]
 * @policy            Public APIs only. ETHERSCAN_API_KEY optional for higher rate limits.
 *
 * ── SOURCE REPOS ──────────────────────────────────────────────────────────────
 *
 *   1. livepeer/governor-scripts@master   Address registry (primary source of deployed addresses)
 *   2. livepeer/protocol@delta            Core protocol Solidity source (BondingManager, Controller, etc.)
 *   3. livepeer/protocol@streamflow       Legacy branch (BridgeMinter, deploy scripts)
 *   4. livepeer/protocol@master           Origin contracts (L1 LivepeerToken)
 *   5. livepeer/arbitrum-lpt-bridge@main  Bridge contracts (L1/L2 Gateways, L1Escrow, L2 LivepeerToken)
 *
 * ── PIPELINE ──────────────────────────────────────────────────────────────────
 *
 *   Fetch (governor-scripts)
 *     → Merge (supplement JSON for contracts not in governor-scripts)
 *       → Verify (Arbiscan + Etherscan: eth_getCode per address)
 *         → Enrich current (Blockscout + Etherscan V2: 15+ meta fields per contract)
 *           → Enrich historical (Blockscout: deployedAt, verified, replacedBy)
 *             → Validate sources (check contractCodeHref links, detect new .sol files)
 *               → Health check (Blockscout API shape, RPC eth_call, data integrity)
 *                 → Write JSX data file (preserves header/definitions above export const)
 *                 → Write companion JSON (SEO/AI crawlers)
 *                 → Write health check results
 *                 → Scan-fix stale addresses in v2/ MDX (optional)
 *
 * ── OUTPUT FILES ──────────────────────────────────────────────────────────────
 *
 *   snippets/data/contract-addresses/contractAddressesData.jsx   Main data file (JSX export)
 *   snippets/data/contract-addresses/contractAddressesData.json  Companion JSON (SEO/AI)
 *   snippets/data/contract-addresses/_health-checks.json         Health check + source validation
 *   snippets/composables/pages/reference/livepeer-contract-addresses-data.json  Public companion JSON
 *
 * ── ENRICHMENT SOURCES ────────────────────────────────────────────────────────
 *
 *   Blockscout (primary, no key required):
 *     /api/v2/addresses/{addr}              name, creator, verified, creation tx, balance, proxy
 *     /api/v2/addresses/{addr}/counters     transaction count, token transfers, validations
 *     /api/v2/addresses/{addr}/transactions last active date
 *     /api/v2/tokens/{addr}                 holder count, supply, symbol, decimals
 *     /api/v2/smart-contracts/{addr}        compiler version, optimisation, language
 *
 *   Etherscan V2 (fallback, ETHERSCAN_API_KEY for both chains via chainid param):
 *     module=account&action=txlist          deployed at, last active date
 *     module=proxy&action=eth_getTransactionCount  nonce-based tx count
 *     module=token&action=tokeninfo         holder count (tokens)
 *     module=contract&action=getsourcecode  proxy detection, implementation address, compiler
 *
 *   Arbitrum RPC (direct, no key):
 *     eth_call Controller.getContract(bytes32)  registeredInController check
 *     web3_sha3                                 keccak256 hash computation (replaced by js-sha3)
 *
 *   GitHub API (GITHUB_TOKEN):
 *     /repos/{repo}                         repo visibility (public/private)
 *     /repos/{repo}/contents/{path}         source file existence validation
 *
 * ── SELF-HEAL BEHAVIOUR ───────────────────────────────────────────────────────
 *
 *   Both Blockscout and Etherscan are called for every contract. Results merged
 *   (Blockscout preferred, Etherscan fills gaps). If both fail for a contract,
 *   previous run's data is preserved from .bak file. Stale fields tagged in
 *   meta._stale array. _warnings array written to output for workflow auto-issue.
 *
 * ── WORKFLOW TRIGGERS ─────────────────────────────────────────────────────────
 *
 *   Cron:                Weekly Monday 02:00 UTC
 *   Manual dispatch:     dry_run, skip_verify, scan_fix, use_test_branch
 *   Repository dispatch: governor-scripts-update, protocol-update, bridge-update
 *
 * ── ADDING A NEW CONTRACT ─────────────────────────────────────────────────────
 *
 *   If the contract is deployed via governance (governor-scripts):
 *     → Automatic. The script picks it up on next run.
 *
 *   If the contract is NOT in governor-scripts (e.g. AIServiceRegistry):
 *     1. Add entry to operations/scripts/config/contract-addresses-supplement.json
 *     2. Add entry to CONTRACT_REGISTRY in this script (repoSrc, solPath, meta)
 *     3. Run: node .github/scripts/fetch-contract-addresses.js --dry-run
 *     4. Verify the new contract appears in output with correct data
 *     5. Run without --dry-run to write
 *
 *   The validateSources() step will also flag new .sol files in source repos
 *   that aren't in the data — these appear in _health-checks.json and trigger
 *   a GitHub issue via the workflow.
 *
 * ── DEPENDENCIES ──────────────────────────────────────────────────────────────
 *
 *   js-sha3 (npm)          keccak256 hash computation for Controller registration checks
 *   Node.js built-ins      https, fs, path
 *
 * @requires            js-sha3
 */

const https = require("https");
const fs = require("fs");
const path = require("path");
const { keccak256 } = require("js-sha3");
const { sanitiseForMdx } = require(path.resolve(__dirname, "../../operations/scripts/config/mdx-sanitise"));

// ── Config ──────────────────────────────────────────────────────────────────
const REPO_ROOT = path.resolve(__dirname, "../..");
const SUPPLEMENT_PATH = path.join(REPO_ROOT, "operations/scripts/config/contract-addresses-supplement.json");
const OUTPUT_PATH = path.join(REPO_ROOT, "snippets/data/contract-addresses/contractAddressesData.jsx");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const ETHERSCAN_API_KEY_2 = process.env.ETHERSCAN_API_KEY_2 || "";
const DRY_RUN = process.argv.includes("--dry-run");
const SKIP_VERIFY = process.argv.includes("--skip-verify");
const SCAN_FIX = process.argv.includes("--scan-fix");

const GOVERNOR_REPO = "livepeer/governor-scripts";
const GOVERNOR_FILE = "updates/addresses.js";

// All contract source repos — the script validates contractCodeHref links and detects new contracts
const SOURCE_REPOS = [
  { repo: "livepeer/governor-scripts", branch: "master", role: "address-registry" },
  { repo: "livepeer/protocol", branch: "delta", role: "source", contractsPath: "contracts/" },
  { repo: "livepeer/protocol", branch: "streamflow", role: "source", contractsPath: "contracts/" },
  { repo: "livepeer/protocol", branch: "master", role: "source", contractsPath: "contracts/" },
  { repo: "livepeer/arbitrum-lpt-bridge", branch: "main", role: "source", contractsPath: "contracts/" },
];

// ── Static registry — editorial + repo data per contract ───────────────────
// Fields that cannot be derived from governor-scripts or explorer APIs.
// Key: contract name (must match camelToTitle output).
// New contracts not in this registry get sensible defaults.

const CONTRACT_REGISTRY = {
  Controller:        { repoSrc: "livepeer/protocol@delta", solPath: "contracts/Controller.sol",                          meta: { statusLabel: "Active", deployedBy: "Livepeer Deployer", notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/Controller.sol", meta: { statusLabel: "Paused", deployedBy: "Livepeer Deployer", notes: "Paused since Confluence migration (2022)" } } },
  BondingManager:    { repoSrc: "livepeer/protocol@delta", solPath: "contracts/bonding/BondingManager.sol",              meta: { statusLabel: "Active", deployedBy: null, notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/bonding/BondingManager.sol", meta: { statusLabel: "Paused", deployedBy: null, notes: "Paused since Confluence migration (2022)" } } },
  TicketBroker:      { repoSrc: "livepeer/protocol@delta", solPath: "contracts/pm/TicketBroker.sol",                     meta: { statusLabel: "Active", deployedBy: null, notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/pm/TicketBroker.sol", meta: { statusLabel: "Paused", deployedBy: null, notes: "Paused since Confluence migration (2022)" } } },
  RoundsManager:     { repoSrc: "livepeer/protocol@delta", solPath: "contracts/rounds/RoundsManager.sol",                meta: { statusLabel: "Active", deployedBy: null, notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/rounds/RoundsManager.sol", meta: { statusLabel: "Paused", deployedBy: null, notes: "Paused since Confluence migration (2022)" } } },
  Minter:            { repoSrc: "livepeer/protocol@delta", solPath: "contracts/token/Minter.sol",                        meta: { statusLabel: "Active", deployedBy: null, notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/token/Minter.sol", meta: { statusLabel: "Paused", deployedBy: null, notes: "Paused since Confluence migration (2022)" } } },
  ServiceRegistry:   { repoSrc: "livepeer/protocol@delta", solPath: "contracts/ServiceRegistry.sol",                     meta: { statusLabel: "Active", deployedBy: null, notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/ServiceRegistry.sol", meta: { statusLabel: "Paused", deployedBy: null, notes: "Paused since Confluence migration (2022)" } } },
  AIServiceRegistry: { repoSrc: "livepeer/protocol@delta", solPath: "contracts/AIServiceRegistry.sol",                   meta: { statusLabel: "Active", deployedBy: "AI subnet deployer", notes: "Detached from Controller" } },
  DelegatorPool:     { repoSrc: "livepeer/protocol@delta", solPath: "contracts/bonding/DelegatorPool.sol",               meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  LivepeerToken:     { repoSrc: "livepeer/arbitrum-lpt-bridge@main", solPath: "contracts/L2/token/LivepeerToken.sol",     meta: { statusLabel: "Active", deployedBy: "Livepeer Deployer", notes: null },
                       ethOverride: { repoSrc: "livepeer/protocol@master", solPath: "contracts/token/LivepeerToken.sol", meta: { statusLabel: "Active", deployedBy: "Livepeer Deployer", notes: "Origin token" } } },
  BridgeMinter:      { repoSrc: "livepeer/protocol@streamflow", solPath: "contracts/token/BridgeMinter.sol",             meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  BondingVotes:      { repoSrc: "livepeer/protocol@delta", solPath: "contracts/bonding/BondingVotes.sol",                meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  Governor:          { repoSrc: "livepeer/protocol@delta", solPath: "contracts/governance/Governor.sol",                  meta: { statusLabel: "Active", deployedBy: "Livepeer Deployer", notes: null } },
  LivepeerGovernor:  { repoSrc: "livepeer/protocol@delta", solPath: "contracts/treasury/LivepeerGovernor.sol",            meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  Treasury:          { repoSrc: "livepeer/protocol@delta", solPath: "contracts/treasury/Treasury.sol",                    meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  PollCreator:       { repoSrc: "livepeer/protocol@delta", solPath: "contracts/governance/PollCreator.sol",               meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  MerkleSnapshot:    { repoSrc: "livepeer/protocol@delta", solPath: "contracts/snapshots/MerkleSnapshot.sol",             meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  L2LPTGateway:      { repoSrc: "livepeer/arbitrum-lpt-bridge@main", solPath: "contracts/L2/gateway/L2LPTGateway.sol",   meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  L1LPTGateway:      { repoSrc: "livepeer/arbitrum-lpt-bridge@main", solPath: "contracts/L1/gateway/L1LPTGateway.sol",   meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  L1Escrow:          { repoSrc: "livepeer/arbitrum-lpt-bridge@main", solPath: "contracts/L1/escrow/L1Escrow.sol",         meta: { statusLabel: "Active", deployedBy: null, notes: "Holds bridged LPT" } },
  L2Migrator:        { repoSrc: null, solPath: null,                                                                     meta: { statusLabel: "Migration complete", deployedBy: null, notes: "Still processing pending claimStake calls. Source removed from repos after migration." } },
  L1Migrator:        { repoSrc: null, solPath: null,                                                                     meta: { statusLabel: "Migration complete", deployedBy: null, notes: "Source removed from repos after migration." } },
  L2LPTDataCache:    { repoSrc: null, solPath: null,                                                                     meta: { statusLabel: "Active", deployedBy: null, notes: "Source removed from repos. Verified on-chain only." } },
  L1LPTDataCache:    { repoSrc: null, solPath: null,                                                                     meta: { statusLabel: "Active", deployedBy: null, notes: "Source removed from repos. Verified on-chain only." } },
  SortedDoublyLL:    { repoSrc: "livepeer/protocol@delta", solPath: "contracts/libraries/SortedDoublyLL.sol",             meta: { statusLabel: "Active", deployedBy: null, notes: "Library" } },
  GenesisManager:    { repoSrc: "livepeer/protocol@master", solPath: "contracts/GenesisManager.sol",                      meta: { statusLabel: "Active", deployedBy: null, notes: "Genesis-era" } },
  MerkleMine:        { repoSrc: "livepeer/protocol@master", solPath: "contracts/token/MerkleMine.sol",                    meta: { statusLabel: "Active", deployedBy: null, notes: "Genesis-era" } },
  MultiMerkleMine:   { repoSrc: "livepeer/protocol@master", solPath: "contracts/token/MultiMerkleMine.sol",               meta: { statusLabel: "Active", deployedBy: null, notes: "Genesis-era" } },
  Refunder:          { repoSrc: "livepeer/protocol@master", solPath: "contracts/Refunder.sol",                            meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  LivepeerTokenFaucet: { repoSrc: "livepeer/protocol@delta", solPath: "contracts/token/LivepeerTokenFaucet.sol",          meta: { statusLabel: "Testnet only", deployedBy: null, notes: "Not deployed on mainnet or Arbitrum One" } },
};

function getRegistryEntry(name, network) {
  const entry = CONTRACT_REGISTRY[name];
  if (!entry) return { repoSrc: null, solPath: null, meta: { statusLabel: "Active", deployedBy: null, notes: null } };
  // LivepeerToken has different source on Ethereum vs Arbitrum
  if (entry.ethOverride && network === "mainnet") return entry.ethOverride;
  return entry;
}

function buildContractCodeHref(repoSrc, solPath) {
  if (!repoSrc || !solPath) return null;
  const [repo, branch] = repoSrc.split("@");
  return `https://github.com/${repo}/blob/${branch}/${solPath}`;
}

// ── HTTP helpers ────────────────────────────────────────────────────────────

function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const opts = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: "GET",
      headers: { "User-Agent": "livepeer-docs-bot", ...headers },
    };

    const req = https.request(opts, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, data }));
    });
    req.on("error", reject);
    req.end();
  });
}

function httpsPost(url, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const postData = typeof body === "string" ? body : JSON.stringify(body);
    const opts = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(postData) },
    };
    const req = https.request(opts, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, data }));
    });
    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

function githubGet(endpoint) {
  const headers = { Accept: "application/vnd.github+json" };
  if (GITHUB_TOKEN) headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
  return httpsGet(`https://api.github.com${endpoint}`, headers);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Fetch governor-scripts addresses ────────────────────────────────────────

async function fetchGovernorAddresses() {
  console.log(`Fetching ${GOVERNOR_FILE} from ${GOVERNOR_REPO}...`);
  const res = await githubGet(`/repos/${GOVERNOR_REPO}/contents/${GOVERNOR_FILE}`);
  if (res.status !== 200) {
    throw new Error(`GitHub API returned ${res.status}: ${res.data.substring(0, 200)}`);
  }

  const json = JSON.parse(res.data);
  const content = Buffer.from(json.content, "base64").toString("utf8");
  const sha = json.sha.substring(0, 7);

  // Parse the JS object — extract between `const ADDRESSES = {` and `};`
  const match = content.match(/const ADDRESSES\s*=\s*(\{[\s\S]*?\});/);
  if (!match) throw new Error("Could not parse ADDRESSES object from addresses.js");

  // Safe eval — this is a simple object literal with only string values
  let addresses;
  try {
    addresses = new Function(`return ${match[1]}`)();
  } catch (e) {
    throw new Error(`Failed to evaluate ADDRESSES object: ${e.message}`);
  }

  console.log(`  Parsed: ${Object.keys(addresses.mainnet || {}).length} mainnet, ${Object.keys(addresses.arbitrumMainnet || {}).length} arbitrum entries`);
  return { addresses, sha };
}

// ── Map governor-scripts keys to structured entries ─────────────────────────

function mapGovernorEntries(raw, network) {
  const current = [];
  const historical = {};

  for (const [key, address] of Object.entries(raw)) {
    const entry = mapKeyToEntry(key, address, network);
    if (entry.isHistorical) {
      const group = entry.historicalGroup;
      if (!historical[group]) historical[group] = { entries: [] };
      historical[group].entries.push({ version: entry.version, address });
    } else {
      current.push(entry);
    }
  }

  return { current, historical };
}

function mapKeyToEntry(key, address, network) {
  const chain = network === "arbitrumMainnet" ? "arbitrumOne" : "ethereumMainnet";
  const explorerBase = network === "arbitrumMainnet" ? "https://arbiscan.io/address/" : "https://etherscan.io/address/";

  // Versioned target pattern: bondingManagerTargetV2, ticketBrokerTargetV3, etc.
  const targetMatch = key.match(/^(\w+?)Target(?:V(\d+))?$/);
  if (targetMatch) {
    const name = camelToTitle(targetMatch[1]);
    const version = targetMatch[2] ? `V${targetMatch[2]}` : null;
    if (version) {
      return {
        isHistorical: true,
        historicalGroup: `${name} (Target)`,
        version,
        address,
      };
    }
    // No version suffix = current target
    const reg = getRegistryEntry(name, network);
    return { name, address, type: "target", category: categorise(name), isHistorical: false, chain, repoSrc: reg.repoSrc, contractCodeHref: buildContractCodeHref(reg.repoSrc, reg.solPath), blockchainHref: `${explorerBase}${address}`, meta: { ...reg.meta, holderCount: null, transactionCount: null, deployedAt: null, lastActiveDate: null, blockscoutLabel: null, registeredInController: null } };
  }

  // Versioned non-target: minterV2, etc.
  const versionedMatch = key.match(/^(\w+?)V(\d+)$/);
  if (versionedMatch && !key.includes("Target")) {
    const name = camelToTitle(versionedMatch[1]);
    const reg = getRegistryEntry(name, network);
    return { name, address, type: "standalone", category: categorise(name), version: `V${versionedMatch[2]}`, isHistorical: false, chain, repoSrc: reg.repoSrc, contractCodeHref: buildContractCodeHref(reg.repoSrc, reg.solPath), blockchainHref: `${explorerBase}${address}`, meta: { ...reg.meta, holderCount: null, transactionCount: null, deployedAt: null, lastActiveDate: null, blockscoutLabel: null, registeredInController: null } };
  }

  // Proxy pattern: bondingManager (no Target suffix) = proxy
  const proxyNames = ["bondingManager", "roundsManager", "l2Migrator", "bondingVotes", "livepeerGovernor"];
  if (proxyNames.includes(key)) {
    const name = camelToTitle(key);
    const reg = getRegistryEntry(name, network);
    return { name, address, type: "proxy", category: categorise(name), isHistorical: false, chain, repoSrc: reg.repoSrc, contractCodeHref: buildContractCodeHref(reg.repoSrc, reg.solPath), blockchainHref: `${explorerBase}${address}`, meta: { ...reg.meta, holderCount: null, transactionCount: null, deployedAt: null, lastActiveDate: null, blockscoutLabel: null, registeredInController: null } };
  }

  // Everything else: standalone
  const name = camelToTitle(key);
  const reg = getRegistryEntry(name, network);
  return { name, address, type: "standalone", category: categorise(name), isHistorical: false, chain, repoSrc: reg.repoSrc, contractCodeHref: buildContractCodeHref(reg.repoSrc, reg.solPath), blockchainHref: `${explorerBase}${address}`, meta: { ...reg.meta, holderCount: null, transactionCount: null, deployedAt: null, lastActiveDate: null, blockscoutLabel: null, registeredInController: null } };
}

function camelToTitle(key) {
  const map = {
    controller: "Controller",
    livepeerToken: "LivepeerToken",
    minter: "Minter",
    bridgeMinter: "BridgeMinter",
    bondingManager: "BondingManager",
    ticketBroker: "TicketBroker",
    roundsManager: "RoundsManager",
    bondingVotes: "BondingVotes",
    treasury: "Treasury",
    livepeerGovernor: "LivepeerGovernor",
    serviceRegistry: "ServiceRegistry",
    l1LPTGateway: "L1LPTGateway",
    l1Migrator: "L1Migrator",
    l1LPTDataCache: "L1LPTDataCache",
    l2LPTGateway: "L2LPTGateway",
    l2Migrator: "L2Migrator",
    l2LPTDataCache: "L2LPTDataCache",
  };
  return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function categorise(name) {
  const categories = {
    core: ["Controller", "BondingManager", "TicketBroker", "RoundsManager", "Minter", "ServiceRegistry", "AIServiceRegistry", "DelegatorPool"],
    token: ["LivepeerToken", "BridgeMinter"],
    governance: ["Governor", "BondingVotes", "LivepeerGovernor", "Treasury", "PollCreator", "MerkleSnapshot"],
    bridge: ["L1LPTGateway", "L1Migrator", "L1LPTDataCache", "L1Escrow", "L2LPTGateway", "L2Migrator", "L2LPTDataCache"],
    utility: ["SortedDoublyLL", "GenesisManager", "MerkleMine", "MultiMerkleMine", "Refunder", "MerkleProof"],
  };
  for (const [cat, names] of Object.entries(categories)) {
    if (names.includes(name)) return cat;
  }
  return "core";
}

// ── Merge governor-scripts + supplement ─────────────────────────────────────

function mergeData(governor, supplement) {
  const arbGov = mapGovernorEntries(governor.arbitrumMainnet || {}, "arbitrumMainnet");
  const ethGov = mapGovernorEntries(governor.mainnet || {}, "mainnet");

  // Merge supplement current entries (supplement adds, governor-scripts overrides where both exist)
  const arbCurrent = mergeCurrentEntries(arbGov.current, supplement.arbitrumOne?.current || []);
  const ethCurrent = mergeCurrentEntries(ethGov.current, supplement.ethereumMainnet?.current || []);

  // Merge historical (supplement adds entries governor-scripts doesn't track)
  const arbHistorical = mergeHistorical(arbGov.historical, supplement.historical?.arbitrumOne || {});
  const ethHistorical = mergeHistorical(ethGov.historical, supplement.historical?.ethereumMainnet || {});

  return {
    arbitrumOne: { current: arbCurrent, historical: arbHistorical },
    ethereumMainnet: { current: ethCurrent, historical: ethHistorical },
  };
}

function mergeCurrentEntries(govEntries, suppEntries) {
  const merged = [...govEntries];
  const govAddresses = new Set(govEntries.map((e) => e.address.toLowerCase()));

  for (const supp of suppEntries) {
    if (!govAddresses.has(supp.address.toLowerCase())) {
      merged.push(supp);
    }
  }

  // Sort: core → token → governance → bridge → utility, then by name
  const catOrder = { core: 0, token: 1, governance: 2, bridge: 3, utility: 4 };
  merged.sort((a, b) => (catOrder[a.category] || 9) - (catOrder[b.category] || 9) || a.name.localeCompare(b.name));
  return merged;
}

function mergeHistorical(govHist, suppHist) {
  const merged = { ...govHist };
  for (const [group, data] of Object.entries(suppHist)) {
    if (!merged[group]) {
      merged[group] = { entries: data.entries || [] };
    } else {
      const existingAddrs = new Set(merged[group].entries.map((e) => e.address.toLowerCase()));
      for (const entry of data.entries || []) {
        if (!existingAddrs.has(entry.address.toLowerCase())) {
          merged[group].entries.push(entry);
        }
      }
    }
    // Sort by version number
    merged[group].entries.sort((a, b) => {
      const av = parseInt((a.version || "").replace("V", ""), 10) || 0;
      const bv = parseInt((b.version || "").replace("V", ""), 10) || 0;
      return av - bv;
    });
  }
  return merged;
}

// ── Arbiscan / Etherscan verification ───────────────────────────────────────

async function verifyAddresses(entries, network) {
  if (SKIP_VERIFY) {
    return entries.map((e) => ({ ...e, verified: null, verifiedAt: null }));
  }

  const isArbiscan = network === "arbitrumOne";
  const baseUrl = isArbiscan ? "https://api.arbiscan.io" : "https://api.etherscan.io";
  const apiKey = isArbiscan ? ARBISCAN_API_KEY : ETHERSCAN_API_KEY;
  const label = isArbiscan ? "Arbiscan" : "Etherscan";

  let verified = 0;
  let failed = 0;
  const _now = new Date();
  const now = _now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const nowISO = _now.toISOString();

  const results = [];
  for (const entry of entries) {
    let url = `${baseUrl}/api?module=proxy&action=eth_getCode&address=${entry.address}&tag=latest`;
    if (apiKey) url += `&apikey=${apiKey}`;

    try {
      const res = await httpsGet(url);
      const data = JSON.parse(res.data);
      // eth_getCode returns "0x" for EOAs, bytecode for contracts
      const isVerified = data.result && data.result !== "0x" && data.result.length > 2;
      results.push({ ...entry, verified: isVerified, verifiedAt: now, verifiedAtISO: nowISO });
      if (isVerified) verified++;
      else {
        failed++;
        console.log(`  ⚠ ${entry.name} (${entry.address.substring(0, 10)}...) — not verified on ${label}`);
      }
    } catch (err) {
      console.log(`  ⚠ ${entry.name} — ${label} check failed: ${err.message}`);
      results.push({ ...entry, verified: false, verifiedAt: now, verifiedAtISO: nowISO });
      failed++;
    }

    // Rate limit: 5 calls/sec without key, higher with key
    await sleep(apiKey ? 100 : 250);
  }

  console.log(`  ${label}: ${verified}/${entries.length} verified${failed ? `, ${failed} failed` : ""}`);
  return results;
}

// ── Enrich metadata — Blockscout primary, Etherscan V2 fallback ────────────
// Self-healing: if primary fails, falls back. If both fail, logs warning and
// continues with null fields. Detects API version drift at startup.

async function checkApiHealth(blockscoutBase, etherscanV2Base) {
  const health = { blockscout: false, etherscan: false, _apiVersions: {} };

  try {
    // /api/v2/health doesn't exist on all Blockscout instances — probe with a known address instead
    const probeAddr = "0xD8E8328501E9645d16Cf49539efC04f734606ee4"; // Arbitrum Controller
    const bsRes = await httpsGet(`${blockscoutBase}/api/v2/addresses/${probeAddr}`);
    if (bsRes.status === 200) {
      health.blockscout = true;
      health._apiVersions.blockscout = "v2";
    }
  } catch (_) {}

  try {
    const esRes = await httpsGet(`${etherscanV2Base}?chainid=1&module=stats&action=ethprice`);
    if (esRes.status === 200) {
      health.etherscan = true;
      health._apiVersions.etherscan = "v2";
    }
  } catch (_) {}

  return health;
}

async function enrichFromBlockscout(addr, blockscoutBase, entry, apiKey) {
  const meta = {};
  const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const fmtShort = (d) => new Date(d).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });

  // ── 1. Address info (single call — name, creator, verified, creation_tx, balance, proxy, implementations)
  const addrRes = await httpsGet(`${blockscoutBase}/api/v2/addresses/${addr}`);
  if (addrRes.status !== 200) throw new Error(`Blockscout address ${addrRes.status}`);
  const addrData = JSON.parse(addrRes.data);

  if (addrData.name) meta.blockscoutLabel = addrData.name;
  if (addrData.creator_address_hash) meta.creatorAddress = addrData.creator_address_hash;
  if (addrData.is_verified !== undefined) meta.bsVerified = addrData.is_verified;
  if (addrData.is_contract !== undefined) meta.isContract = addrData.is_contract;
  if (addrData.coin_balance) meta.balance = addrData.coin_balance;
  if (addrData.proxy_type) meta.isProxy = true;
  if (addrData.implementations?.length > 0) {
    meta.proxyTarget = addrData.implementations[0].address;
    meta.proxyTargetName = addrData.implementations[0].name || null;
  }
  await sleep(150);

  // ── 2. Creation tx → deployedAt (full date + short date)
  if (addrData.creation_transaction_hash) {
    try {
      const txRes = await httpsGet(`${blockscoutBase}/api/v2/transactions/${addrData.creation_transaction_hash}`);
      if (txRes.status === 200) {
        const txData = JSON.parse(txRes.data);
        if (txData.timestamp) {
          meta.deployedAt = fmt(txData.timestamp);
          meta.deployedAtISO = new Date(txData.timestamp).toISOString();
        }
      }
    } catch (_) {}
  }
  await sleep(150);

  // ── 3. Counters → tx count, token transfers count, validations count
  try {
    const ctrRes = await httpsGet(`${blockscoutBase}/api/v2/addresses/${addr}/counters`);
    if (ctrRes.status === 200) {
      const ctrData = JSON.parse(ctrRes.data);
      if (ctrData.transactions_count) meta.transactionCount = parseInt(ctrData.transactions_count, 10);
      if (ctrData.token_transfers_count) meta.tokenTransferCount = parseInt(ctrData.token_transfers_count, 10);
      if (ctrData.validations_count) meta.validationsCount = parseInt(ctrData.validations_count, 10);
    }
  } catch (_) {}
  await sleep(150);

  // ── 4. Token info → holder count, total supply, decimals, symbol (any token contract, not just LPT)
  try {
    const tokRes = await httpsGet(`${blockscoutBase}/api/v2/tokens/${addr}`);
    if (tokRes.status === 200) {
      const tokData = JSON.parse(tokRes.data);
      const holders = tokData.holders_count || tokData.holders;
      if (holders) meta.holderCount = Number(holders).toLocaleString('en-GB');
      if (tokData.total_supply) meta.totalSupply = tokData.total_supply;
      if (tokData.decimals) meta.decimals = tokData.decimals;
      if (tokData.symbol) meta.symbol = tokData.symbol;
    }
  } catch (_) {}
  await sleep(150);

  // ── 5. Last activity — most recent transaction timestamp
  try {
    const txsRes = await httpsGet(`${blockscoutBase}/api/v2/addresses/${addr}/transactions`);
    if (txsRes.status === 200) {
      const txsData = JSON.parse(txsRes.data);
      const validTx = txsData.items?.find(item => item.timestamp);
      if (validTx) {
        meta.lastActiveDate = fmt(validTx.timestamp);
        meta.lastActiveDateISO = new Date(validTx.timestamp).toISOString();
      }
    }
  } catch (_) {}
  await sleep(150);

  // ── 6. Smart contract info → compiler, optimization, source
  try {
    const scRes = await httpsGet(`${blockscoutBase}/api/v2/smart-contracts/${addr}`);
    if (scRes.status === 200) {
      const scData = JSON.parse(scRes.data);
      if (scData.compiler_version) meta.compilerVersion = scData.compiler_version;
      if (scData.optimization_enabled !== undefined) meta.optimizationEnabled = scData.optimization_enabled;
      if (scData.language) meta.language = scData.language;
      if (scData.verified_at) meta.sourceVerifiedAt = fmt(scData.verified_at);
    }
  } catch (_) {}
  await sleep(150);

  // ── 7. Etherscan getsourcecode — proxy detection, implementation address, contract name
  // (Blockscout doesn't detect Livepeer's Controller-based proxies, but Etherscan does)
  if (apiKey) {
    try {
      const esBase = `https://api.etherscan.io/v2/api?chainid=${entry.chain === "arbitrumOne" ? 42161 : 1}`;
      const scRes = await httpsGet(`${esBase}&module=contract&action=getsourcecode&address=${addr}&apikey=${apiKey}`);
      if (scRes.status === 200) {
        const scData = JSON.parse(scRes.data);
        if (scData.status === "1" && scData.result?.[0]) {
          const sc = scData.result[0];
          if (sc.Proxy === "1" && sc.Implementation) meta.proxyTarget = sc.Implementation;
          if (sc.ContractName && !meta.blockscoutLabel) meta.blockscoutLabel = sc.ContractName;
          if (sc.CompilerVersion && !meta.compilerVersion) meta.compilerVersion = sc.CompilerVersion;
        }
      }
    } catch (_) {}
    await sleep(150);
  }

  return meta;
}

async function enrichFromEtherscan(addr, chainId, apiKey, entry) {
  const meta = {};
  const base = `https://api.etherscan.io/v2/api?chainid=${chainId}`;

  // First tx → deployedAt
  try {
    let url = `${base}&module=account&action=txlist&address=${addr}&page=1&offset=1&sort=asc&startblock=0&endblock=99999999`;
    if (apiKey) url += `&apikey=${apiKey}`;
    const res = await httpsGet(url);
    const data = JSON.parse(res.data);
    if (data.status === "1" && data.result?.length > 0) {
      const ts = parseInt(data.result[0].timeStamp, 10) * 1000;
      meta.deployedAt = new Date(ts).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    }
  } catch (_) {}
  await sleep(apiKey ? 150 : 300);

  // Last tx → lastActiveDate
  try {
    let url = `${base}&module=account&action=txlist&address=${addr}&page=1&offset=1&sort=desc&startblock=0&endblock=99999999`;
    if (apiKey) url += `&apikey=${apiKey}`;
    const res = await httpsGet(url);
    const data = JSON.parse(res.data);
    if (data.status === "1" && data.result?.length > 0) {
      const ts = parseInt(data.result[0].timeStamp, 10) * 1000;
      meta.lastActiveDate = new Date(ts).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    }
  } catch (_) {}
  await sleep(apiKey ? 150 : 300);

  // Nonce → transaction count
  try {
    let url = `${base}&module=proxy&action=eth_getTransactionCount&address=${addr}&tag=latest`;
    if (apiKey) url += `&apikey=${apiKey}`;
    const res = await httpsGet(url);
    const data = JSON.parse(res.data);
    if (data.result) meta.transactionCount = parseInt(data.result, 16);
  } catch (_) {}
  await sleep(apiKey ? 150 : 300);

  // Token holder count
  if (entry.category === "token" && entry.name === "LivepeerToken") {
    try {
      let url = `${base}&module=token&action=tokeninfo&contractaddress=${addr}`;
      if (apiKey) url += `&apikey=${apiKey}`;
      const res = await httpsGet(url);
      const data = JSON.parse(res.data);
      if (data.status === "1" && data.result?.length > 0) {
        const holders = data.result[0].holdersCount || data.result[0].holders;
        if (holders) meta.holderCount = Number(holders).toLocaleString('en-GB');
      }
    } catch (_) {}
    await sleep(apiKey ? 150 : 300);
  }

  // Contract source code — proxy detection, implementation, compiler
  try {
    let url = `${base}&module=contract&action=getsourcecode&address=${addr}`;
    if (apiKey) url += `&apikey=${apiKey}`;
    const res = await httpsGet(url);
    const data = JSON.parse(res.data);
    if (data.status === "1" && data.result?.[0]) {
      const sc = data.result[0];
      if (sc.Proxy === "1" && sc.Implementation) meta.proxyTarget = sc.Implementation;
      if (sc.ContractName) meta.blockscoutLabel = sc.ContractName;
      if (sc.CompilerVersion) meta.compilerVersion = sc.CompilerVersion;
    }
  } catch (_) {}
  await sleep(apiKey ? 150 : 300);

  return meta;
}

// Check if a GitHub repo is private
const _repoVisibilityCache = {};
async function checkRepoVisibility(repoSrc) {
  if (!repoSrc) return null;
  const repo = repoSrc.split("@")[0]; // "livepeer/protocol@delta" → "livepeer/protocol"
  if (_repoVisibilityCache[repo] !== undefined) return _repoVisibilityCache[repo];
  try {
    const res = await githubGet(`/repos/${repo}`);
    if (res.status === 200) {
      const data = JSON.parse(res.data);
      _repoVisibilityCache[repo] = data.private || false;
      return data.private;
    }
    if (res.status === 404) {
      _repoVisibilityCache[repo] = true; // 404 without auth = private
      return true;
    }
  } catch (_) {}
  _repoVisibilityCache[repo] = null;
  return null;
}

// Load previous data file for computing transactionsRecent (diff)
function loadPreviousData() {
  const bakPath = OUTPUT_PATH + ".bak";
  try {
    if (fs.existsSync(bakPath)) {
      const content = fs.readFileSync(bakPath, "utf8");
      const match = content.match(/export const contractAddresses\s*=\s*(\{[\s\S]*\});?\s*$/);
      if (match) return new Function(`return ${match[1]}`)();
    }
  } catch (_) {}
  return null;
}

async function enrichMetadata(entries, network) {
  if (SKIP_VERIFY) {
    console.log(`  Skipping metadata enrichment (--skip-verify)`);
    return entries;
  }

  const isArbitrum = network === "arbitrumOne";
  const chainId = isArbitrum ? 42161 : 1;
  const blockscoutBase = isArbitrum ? "https://arbitrum.blockscout.com" : "https://eth.blockscout.com";
  const etherscanV2Base = "https://api.etherscan.io/v2/api";
  // Etherscan V2 uses single key for all chains via chainid param
  const apiKey = ETHERSCAN_API_KEY || ETHERSCAN_API_KEY_2 || ARBISCAN_API_KEY || "";
  const label = isArbitrum ? "Arbitrum" : "Ethereum";
  const controllerAddress = isArbitrum
    ? "0xD8E8328501E9645d16Cf49539efC04f734606ee4"
    : "0xf96d54e490317c557a967abfa5d6e33006be69b3";

  // Health check — detect which APIs are responsive
  console.log(`\n  Health check for ${label} enrichment...`);
  const health = await checkApiHealth(blockscoutBase, etherscanV2Base);
  console.log(`    Blockscout: ${health.blockscout ? "UP" : "DOWN"} (${health._apiVersions.blockscout || "unreachable"})`);
  console.log(`    Etherscan V2: ${health.etherscan ? "UP" : "DOWN"} (${health._apiVersions.etherscan || "unreachable"})`);

  if (!health.blockscout && !health.etherscan) {
    console.log(`  ⚠ Both APIs down — skipping enrichment, data will have null meta fields`);
    return entries;
  }

  const usePrimary = health.blockscout ? "blockscout" : "etherscan";
  const useFallback = health.blockscout ? "etherscan" : "blockscout";
  console.log(`    Primary: ${usePrimary}, Fallback: ${useFallback}`);
  console.log(`  Enriching ${entries.length} ${label} entries...`);

  // Load previous run for transactionsRecent diff
  const prevData = loadPreviousData();
  const prevEntries = prevData?.[network]?.current || [];
  const prevByAddr = new Map(prevEntries.map(e => [e.address.toLowerCase(), e]));

  const results = [];
  const warnings = [];

  for (const entry of entries) {
    const meta = { ...entry.meta };
    const addr = entry.address;
    const sources = { blockscout: null, etherscan: null };

    // Try BOTH sources — merge best from each
    if (health.blockscout) {
      try {
        sources.blockscout = await enrichFromBlockscout(addr, blockscoutBase, entry, apiKey);
      } catch (err) {
        console.log(`    ⚠ ${entry.name} Blockscout failed: ${err.message}`);
        warnings.push({ contract: entry.name, address: addr, source: "blockscout", error: err.message });
      }
    }

    if (health.etherscan && apiKey) {
      try {
        sources.etherscan = await enrichFromEtherscan(addr, chainId, apiKey, entry);
      } catch (err) {
        console.log(`    ⚠ ${entry.name} Etherscan failed: ${err.message}`);
        warnings.push({ contract: entry.name, address: addr, source: "etherscan", error: err.message });
      }
    }

    // Merge: prefer Blockscout (richer data), fill gaps from Etherscan
    const bsMeta = sources.blockscout || {};
    const esMeta = sources.etherscan || {};
    for (const [k, v] of Object.entries(bsMeta)) {
      if (v != null) meta[k] = v;
    }
    for (const [k, v] of Object.entries(esMeta)) {
      if (v != null && meta[k] == null) meta[k] = v;
    }

    if (!sources.blockscout && !sources.etherscan) {
      warnings.push({ contract: entry.name, address: addr, source: "both", error: "Both APIs failed or unavailable" });
    }

    // keccakHash — used by ContractVerifier widget as bytes32 arg to Controller.getContract()
    const nameHash = keccak256Hex(entry.name);
    meta.keccakHash = "0x" + nameHash;

    // Controller registration check — direct RPC call
    // Function selector: 0xe16c7d98 = keccak256("getContract(bytes32)") — verified against Controller ABI
    if (!isArbitrum) {
      // Ethereum Mainnet — no Controller, always false
      meta.registeredInController = false;
    } else if (entry.name !== "Controller" && entry.type !== "target" && nameHash) {
      try {
        const rpcUrl = isArbitrum ? "https://arb1.arbitrum.io/rpc" : "https://eth.llamarpc.com";
        const rpcBody = JSON.stringify({ jsonrpc: "2.0", method: "eth_call", params: [{ to: controllerAddress, data: "0xe16c7d98" + nameHash }, "latest"], id: 1 });
        const regRes = await httpsPost(rpcUrl, rpcBody);
        const regData = JSON.parse(regRes.data);
        if (regData.result && regData.result !== "0x" && regData.result.length >= 42) {
          const returnedAddr = "0x" + regData.result.slice(-40);
          meta.registeredInController = returnedAddr.toLowerCase() === addr.toLowerCase();
        }
      } catch (_) { /* non-critical */ }
      await sleep(apiKey ? 100 : 250);
    }

    // Repo visibility check (cached per repo)
    if (entry.repoSrc) {
      const isPrivate = await checkRepoVisibility(entry.repoSrc);
      meta.repoIsPrivate = isPrivate;
    }

    // Transactions since last run (diff with .bak data)
    const prev = prevByAddr.get(addr.toLowerCase());
    if (prev?.meta?.transactionCount != null && meta.transactionCount != null) {
      meta.transactionsRecent = Math.max(0, meta.transactionCount - prev.meta.transactionCount);
    } else {
      meta.transactionsRecent = null;
    }

    results.push({ ...entry, meta });
  }

  const enrichedCount = results.filter(e => e.meta.deployedAt || e.meta.lastActiveDate || e.meta.holderCount).length;
  console.log(`  Enriched: ${enrichedCount}/${entries.length} entries`);
  if (warnings.length > 0) {
    console.log(`  ⚠ ${warnings.length} contracts had enrichment failures`);
  }

  // Fallback data preservation — keep previous run's values where current enrichment returned null
  // This ensures an ownerless repo never loses data it already had
  for (const result of results) {
    const prev = prevByAddr.get(result.address.toLowerCase());
    if (prev?.meta) {
      for (const [key, oldVal] of Object.entries(prev.meta)) {
        if (oldVal != null && result.meta[key] == null) {
          result.meta[key] = oldVal;
          result.meta._stale = result.meta._stale || [];
          if (!result.meta._stale.includes(key)) result.meta._stale.push(key);
        }
      }
    }
  }

  const staleCount = results.filter(e => e.meta._stale?.length > 0).length;
  if (staleCount > 0) {
    console.log(`  ℹ ${staleCount} contracts using stale data from previous run for some fields`);
  }

  // Store warnings for output
  results._warnings = warnings;
  results._apiVersions = health._apiVersions;
  return results;
}

// keccak256 helper for Controller.getContract(bytes32) calls.
// keccak256 via js-sha3 — computes hash for any contract name dynamically.
// No static lookup needed. New contracts automatically get hashes.
function keccak256Hex(name) {
  return keccak256(name);
}

// ── Write JSX data file ─────────────────────────────────────────────────────

function writeDataFile(data, sha) {
  const _now = new Date();
  const now = _now.toISOString();
  const nowFormatted = _now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const arbCount = data.arbitrumOne.current.length;
  const ethCount = data.ethereumMainnet.current.length;

  const arbVerified = data.arbitrumOne.current.filter((e) => e.verified === true).length;
  const ethVerified = data.ethereumMainnet.current.filter((e) => e.verified === true).length;
  const skipVerify = data.arbitrumOne.current[0]?.verified === null;

  const verifySummary = skipVerify
    ? "Verification skipped"
    : `${arbVerified}/${arbCount} Arbitrum, ${ethVerified}/${ethCount} Mainnet`;

  // Preserve everything above "export const contractAddresses" in the existing file (JSDoc typedef, comments, etc.)
  let header = "";
  if (fs.existsSync(OUTPUT_PATH)) {
    const existing = fs.readFileSync(OUTPUT_PATH, "utf8");
    const exportIdx = existing.indexOf("export const contractAddresses");
    if (exportIdx > 0) {
      header = existing.substring(0, exportIdx);
    }
  }

  // If no existing header, write a minimal one
  if (!header.trim()) {
    header = `/**\n * Auto-generated by fetch-contract-addresses.js\n * Source: ${GOVERNOR_REPO} (commit ${sha})\n * Last updated: ${now}\n * DO NOT EDIT MANUALLY\n */\n\n`;
  }

  let jsx = header;
  jsx += `export const contractAddresses = ${JSON.stringify({
    arbitrumOne: data.arbitrumOne,
    ethereumMainnet: data.ethereumMainnet,
    meta: {
      lastUpdated: now,
      lastVerified: skipVerify ? null : nowFormatted,
      sourceRepo: GOVERNOR_REPO,
      sourceCommit: sha,
      verificationSummary: verifySummary,
      explorerUrls: {
        arbiscan: "https://arbiscan.io",
        etherscan: "https://etherscan.io",
        blockscoutArbitrum: "https://arbitrum.blockscout.com",
        blockscoutEthereum: "https://eth.blockscout.com",
      },
      rpcUrls: {
        arbitrumOne: [
          "https://arb1.arbitrum.io/rpc",
          "https://arbitrum-one-rpc.publicnode.com",
          "https://arbitrum.drpc.org",
        ],
        ethereumMainnet: [
          "https://eth.llamarpc.com",
          "https://ethereum-rpc.publicnode.com",
          "https://eth.drpc.org",
        ],
      },
      _apiVersions: data.arbitrumOne.current._apiVersions || {},
      _warnings: [
        ...(data.arbitrumOne.current._warnings || []),
        ...(data.ethereumMainnet.current._warnings || []),
      ],
    },
  }, null, 2)};\n`;

  if (DRY_RUN) {
    console.log(`\n[DRY RUN] Would write to ${OUTPUT_PATH}`);
    console.log(`  Arbitrum One: ${arbCount} current entries`);
    console.log(`  Ethereum Mainnet: ${ethCount} current entries`);
    console.log(`  Verification: ${verifySummary}`);
    return;
  }

  // Write .bak before overwriting
  if (fs.existsSync(OUTPUT_PATH)) {
    fs.copyFileSync(OUTPUT_PATH, OUTPUT_PATH + ".bak");
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, jsx);
  console.log(`\nWritten to ${OUTPUT_PATH}`);
  console.log(`  Arbitrum One: ${arbCount} current entries`);
  console.log(`  Ethereum Mainnet: ${ethCount} current entries`);
  console.log(`  Verification: ${verifySummary}`);

  // Write companion JSON — static mirror for SEO/AI crawlers
  // Crawlers can't read client-rendered JSX; this plain JSON is crawlable at
  // Composable imports this; wrapper pages import the composable
  const companionPath = path.join(REPO_ROOT, "snippets/composables/pages/reference/livepeer-contract-addresses-data.json");
  const companionData = {
    _generated: { by: "fetch-contract-addresses.js", at: now, source: `${GOVERNOR_REPO} (${sha})` },
    arbitrumOne: {
      current: data.arbitrumOne.current.map(c => ({
        name: c.name,
        address: c.address,
        type: c.type,
        category: c.category,
        chain: c.chain || "arbitrumOne",
        verified: c.verified,
        verifiedAt: c.verifiedAt,
        contractCodeHref: c.contractCodeHref || null,
        blockchainHref: c.blockchainHref || null,
        meta: c.meta || {},
      })),
      historical: data.arbitrumOne.historical,
    },
    ethereumMainnet: {
      current: data.ethereumMainnet.current.map(c => ({
        name: c.name,
        address: c.address,
        type: c.type,
        category: c.category,
        chain: c.chain || "ethereumMainnet",
        verified: c.verified,
        verifiedAt: c.verifiedAt,
        contractCodeHref: c.contractCodeHref || null,
        blockchainHref: c.blockchainHref || null,
        meta: c.meta || {},
      })),
      historical: data.ethereumMainnet.historical,
    },
    meta: {
      lastUpdated: now,
      lastVerified: skipVerify ? null : nowFormatted,
      verificationSummary: verifySummary,
      explorerUrls: {
        arbiscan: "https://arbiscan.io",
        etherscan: "https://etherscan.io",
        blockscoutArbitrum: "https://arbitrum.blockscout.com",
        blockscoutEthereum: "https://eth.blockscout.com",
      },
    },
  };
  fs.writeFileSync(companionPath, JSON.stringify(companionData, null, 2));
  console.log(`  Companion JSON: ${companionPath}`);
}

// ── Scan-fix: find stale addresses in v2/ ───────────────────────────────────

function scanAndFix(data) {
  // Build lookup: address (lowercase) → { name, type, network, isCurrent }
  const lookup = new Map();

  for (const entry of data.arbitrumOne.current) {
    lookup.set(entry.address.toLowerCase(), { ...entry, network: "Arbitrum One", isCurrent: true });
  }
  for (const entry of data.ethereumMainnet.current) {
    lookup.set(entry.address.toLowerCase(), { ...entry, network: "Ethereum Mainnet", isCurrent: true });
  }
  for (const [group, hist] of Object.entries(data.arbitrumOne.historical || {})) {
    for (const entry of hist.entries || []) {
      lookup.set(entry.address.toLowerCase(), { name: group, version: entry.version, network: "Arbitrum One", isCurrent: false });
    }
  }
  for (const [group, hist] of Object.entries(data.ethereumMainnet.historical || {})) {
    for (const entry of hist.entries || []) {
      lookup.set(entry.address.toLowerCase(), { name: group, version: entry.version, network: "Ethereum Mainnet", isCurrent: false });
    }
  }

  // Build upgrade map: old target address → new target address (for unambiguous auto-fix)
  const upgradeMap = buildUpgradeMap(data);

  // Scan v2/ MDX files
  const v2Dir = path.join(REPO_ROOT, "v2");
  const files = globMdx(v2Dir);
  const addressRegex = /0x[a-fA-F0-9]{40}/g;

  let totalFound = 0;
  let staleFound = 0;
  let autoFixed = 0;
  let unknownFound = 0;
  const report = [];

  for (const filePath of files) {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    const relativePath = path.relative(REPO_ROOT, filePath);
    let match;

    // Reset regex
    addressRegex.lastIndex = 0;
    const fileMatches = [];

    while ((match = addressRegex.exec(content)) !== null) {
      const addr = match[0].toLowerCase();
      const info = lookup.get(addr);

      if (!info) {
        unknownFound++;
        totalFound++;
        continue;
      }

      totalFound++;

      if (!info.isCurrent) {
        staleFound++;
        const replacement = upgradeMap.get(addr);
        if (replacement && !DRY_RUN) {
          content = content.split(match[0]).join(replacement.address);
          modified = true;
          autoFixed++;
          fileMatches.push({
            old: match[0],
            new: replacement.address,
            name: info.name,
            oldVersion: info.version,
            newVersion: replacement.version,
          });
        } else {
          fileMatches.push({
            old: match[0],
            name: info.name,
            version: info.version,
            action: replacement ? "would auto-fix" : "manual review needed",
          });
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
    }

    if (fileMatches.length > 0) {
      report.push({ file: relativePath, matches: fileMatches });
    }
  }

  console.log(`\n── Stale Address Scan ──`);
  console.log(`  Files scanned: ${files.length}`);
  console.log(`  Addresses found: ${totalFound}`);
  console.log(`  Stale (deprecated): ${staleFound}`);
  console.log(`  Auto-fixed: ${autoFixed}`);
  console.log(`  Unknown (non-Livepeer): ${unknownFound}`);

  if (report.length > 0) {
    console.log(`\n  Details:`);
    for (const r of report) {
      console.log(`    ${r.file}:`);
      for (const m of r.matches) {
        if (m.new) {
          console.log(`      ✓ ${m.name} ${m.oldVersion} → ${m.newVersion} (auto-fixed)`);
        } else {
          console.log(`      ⚠ ${m.name} ${m.version || ""} — ${m.action}`);
        }
      }
    }
  }
}

function buildUpgradeMap(data) {
  const map = new Map();

  // For each historical group, map all old target addresses to the current target
  for (const [networkKey, networkLabel] of [["arbitrumOne", "Arbitrum One"], ["ethereumMainnet", "Ethereum Mainnet"]]) {
    const currentEntries = data[networkKey]?.current || [];
    const historicalGroups = data[networkKey]?.historical || {};

    for (const [group, hist] of Object.entries(historicalGroups)) {
      // Find the current target for this contract
      const contractName = group.replace(" (Target)", "");
      const currentTarget = currentEntries.find(
        (e) => e.name === contractName && e.type === "target"
      );

      if (currentTarget) {
        for (const entry of hist.entries || []) {
          map.set(entry.address.toLowerCase(), {
            address: currentTarget.address,
            version: currentTarget.version || "current",
          });
        }
      }
    }
  }

  return map;
}

function globMdx(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip _workspace, archive, dep- prefixed dirs
      if (entry.name.startsWith("_") || entry.name === "archive") continue;
      results.push(...globMdx(full));
    } else if (entry.name.endsWith(".mdx") && !entry.name.startsWith("dep-")) {
      results.push(full);
    }
  }
  return results;
}

// ── Validate source repos — check contractCodeHref links, detect new contracts ─

async function validateSources(data) {
  console.log("\n── Source Validation ──");
  const warnings = [];

  // 1. Validate every contractCodeHref actually exists on GitHub
  const allEntries = [
    ...data.arbitrumOne.current,
    ...data.ethereumMainnet.current,
  ];

  let validLinks = 0;
  let brokenLinks = 0;
  let unchecked = 0;

  for (const entry of allEntries) {
    if (!entry.contractCodeHref) { unchecked++; continue; }
    try {
      // Extract repo/branch/path from the GitHub URL
      const match = entry.contractCodeHref.match(/github\.com\/([^/]+\/[^/]+)\/blob\/([^/]+)\/(.+)/);
      if (!match) { unchecked++; continue; }
      const [, repo, branch, filePath] = match;
      const res = await githubGet(`/repos/${repo}/contents/${filePath}?ref=${branch}`);
      if (res.status === 200) {
        validLinks++;
      } else {
        brokenLinks++;
        warnings.push({ contract: entry.name, type: "broken-source-link", detail: `${entry.contractCodeHref} returned ${res.status}` });
        console.log(`  ✗ ${entry.name}: source link broken (${res.status})`);
      }
    } catch (err) {
      unchecked++;
    }
    await sleep(100);
  }
  console.log(`  Source links: ${validLinks} valid, ${brokenLinks} broken, ${unchecked} unchecked`);

  // 2. Scan source repos for Solidity files that might be new contracts not in data
  const knownNames = new Set(allEntries.map(e => e.name));
  const sourceRepos = SOURCE_REPOS.filter(r => r.role === "source");
  let newContracts = [];

  for (const src of sourceRepos) {
    try {
      const res = await githubGet(`/repos/${src.repo}/contents/${src.contractsPath}?ref=${src.branch}`);
      if (res.status === 200) {
        const files = JSON.parse(res.data);
        const solFiles = files.filter(f => f.name.endsWith(".sol") && f.type === "file");
        for (const sol of solFiles) {
          const contractName = sol.name.replace(".sol", "");
          if (!knownNames.has(contractName)) {
            newContracts.push({ name: contractName, repo: src.repo, branch: src.branch, path: `${src.contractsPath}${sol.name}` });
          }
        }
      }
    } catch (_) {}
    await sleep(200);

    // Also scan subdirectories (contracts/bonding/, contracts/token/, etc.)
    try {
      const res = await githubGet(`/repos/${src.repo}/contents/${src.contractsPath}?ref=${src.branch}`);
      if (res.status === 200) {
        const items = JSON.parse(res.data);
        const dirs = items.filter(f => f.type === "dir");
        for (const dir of dirs) {
          try {
            const subRes = await githubGet(`/repos/${src.repo}/contents/${dir.path}?ref=${src.branch}`);
            if (subRes.status === 200) {
              const subFiles = JSON.parse(subRes.data);
              const subSol = subFiles.filter(f => f.name.endsWith(".sol") && f.type === "file");
              for (const sol of subSol) {
                const contractName = sol.name.replace(".sol", "");
                if (!knownNames.has(contractName)) {
                  newContracts.push({ name: contractName, repo: src.repo, branch: src.branch, path: `${dir.path}/${sol.name}` });
                }
              }
            }
          } catch (_) {}
          await sleep(100);
        }
      }
    } catch (_) {}
  }

  if (newContracts.length > 0) {
    // Filter out known non-contract files (interfaces, libraries, test files)
    newContracts = newContracts.filter(c =>
      !c.name.startsWith("I") && // Interfaces (IBondingManager, etc.)
      !c.name.endsWith("Test") &&
      !c.name.endsWith("Mock") &&
      !c.path.includes("test") &&
      !c.path.includes("mock")
    );
  }

  if (newContracts.length > 0) {
    console.log(`  ⚠ ${newContracts.length} Solidity files in source repos not in contract data:`);
    for (const nc of newContracts) {
      console.log(`    - ${nc.name} (${nc.repo}@${nc.branch}: ${nc.path})`);
    }
    warnings.push({ type: "new-contracts-detected", contracts: newContracts });
  } else {
    console.log("  ✓ No unknown contracts detected in source repos");
  }

  return warnings;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  // Load supplement
  const supplement = JSON.parse(fs.readFileSync(SUPPLEMENT_PATH, "utf8"));

  // Fetch from governor-scripts
  const { addresses: governor, sha } = await fetchGovernorAddresses();

  // Merge
  const merged = mergeData(governor, supplement);

  // Verify against Arbiscan/Etherscan
  console.log("\nVerifying addresses...");
  merged.arbitrumOne.current = await verifyAddresses(merged.arbitrumOne.current, "arbitrumOne");
  merged.ethereumMainnet.current = await verifyAddresses(merged.ethereumMainnet.current, "ethereumMainnet");

  // Enrich with live metadata (Arbiscan/Etherscan + Blockscout)
  console.log("\nEnriching metadata...");
  merged.arbitrumOne.current = await enrichMetadata(merged.arbitrumOne.current, "arbitrumOne");
  merged.ethereumMainnet.current = await enrichMetadata(merged.ethereumMainnet.current, "ethereumMainnet");

  // Enrich historical entries (skip already-enriched via .bak diff)
  console.log("\nEnriching historical entries...");
  merged.arbitrumOne.historical = await enrichHistorical(merged.arbitrumOne.historical, "arbitrumOne");
  merged.ethereumMainnet.historical = await enrichHistorical(merged.ethereumMainnet.historical, "ethereumMainnet");

  // Validate: abort if suspiciously low count
  const arbCount = merged.arbitrumOne.current.length;
  const ethCount = merged.ethereumMainnet.current.length;
  if (arbCount < 20) {
    console.error(`ERROR: Only ${arbCount} Arbitrum entries parsed (expected 20+). Aborting to prevent data loss.`);
    process.exit(1);
  }
  if (ethCount < 15) {
    console.error(`ERROR: Only ${ethCount} Mainnet entries parsed (expected 15+). Aborting to prevent data loss.`);
    process.exit(1);
  }

  // Write data file
  writeDataFile(merged, sha);

  // Post-generation health check — validate widget-critical fields and API endpoints
  if (!DRY_RUN) {
    await runHealthCheck(merged);
  }

  // Validate source repos — check contractCodeHref links, detect new contracts
  if (!DRY_RUN && !SKIP_VERIFY) {
    const sourceWarnings = await validateSources(merged);
    if (sourceWarnings.length > 0) {
      // Append to health check file
      const checksPath = path.join(path.dirname(OUTPUT_PATH), "_health-checks.json");
      try {
        const existing = JSON.parse(fs.readFileSync(checksPath, "utf8"));
        existing.sourceValidation = sourceWarnings;
        fs.writeFileSync(checksPath, JSON.stringify(existing, null, 2));
      } catch (_) {
        fs.writeFileSync(checksPath, JSON.stringify({ sourceValidation: sourceWarnings }, null, 2));
      }
    }
  }

  // Scan-fix if requested
  if (SCAN_FIX) {
    scanAndFix(merged);
  }
}

// ── Post-generation health check ───────────────────────────────────────────
// Validates: Blockscout API shape, RPC eth_call, keccakHash presence,
// registeredInController consistency. Creates GitHub issue on failure.

// ── Historical entry enrichment ─────────────────────────────────────────────
// Enriches deprecated target implementations with on-chain data.
// Skips entries that already have enrichment data from a previous run (.bak diff).
// Only makes Blockscout address info + creation tx calls (lightweight).

async function enrichHistorical(historical, network) {
  if (SKIP_VERIFY || !historical || Object.keys(historical).length === 0) return historical;

  const isArbitrum = network === "arbitrumOne";
  const blockscoutBase = isArbitrum ? "https://arbitrum.blockscout.com" : "https://eth.blockscout.com";
  const explorerBase = isArbitrum ? "https://arbiscan.io/address/" : "https://etherscan.io/address/";
  const label = isArbitrum ? "Arbitrum" : "Ethereum";
  const fmt = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  // Load previous historical data for diff
  const prevData = loadPreviousData();
  const prevHistorical = prevData?.[network]?.historical || {};

  let total = 0;
  let enriched = 0;
  let skipped = 0;

  for (const [group, groupData] of Object.entries(historical)) {
    const prevGroup = prevHistorical[group];

    for (let i = 0; i < groupData.entries.length; i++) {
      const entry = groupData.entries[i];
      total++;

      // Skip if already enriched in previous run
      const prevEntry = prevGroup?.entries?.find(e => e.address.toLowerCase() === entry.address.toLowerCase());
      if (prevEntry?.deployedAt && prevEntry?.verified !== undefined) {
        // Copy previous enrichment data
        Object.assign(entry, { ...prevEntry, address: entry.address, version: entry.version });
        skipped++;
        continue;
      }

      // Enrich via Blockscout
      try {
        const addrRes = await httpsGet(`${blockscoutBase}/api/v2/addresses/${entry.address}`);
        if (addrRes.status === 200) {
          const d = JSON.parse(addrRes.data);
          entry.type = "target";
          entry.statusLabel = "Deprecated";
          entry.verified = d.is_verified || false;
          entry.blockchainHref = `${explorerBase}${entry.address}`;
          if (d.name) entry.blockscoutLabel = d.name;
          if (d.creator_address_hash) entry.creatorAddress = d.creator_address_hash;

          // Get deploy date from creation tx
          if (d.creation_transaction_hash) {
            try {
              const txRes = await httpsGet(`${blockscoutBase}/api/v2/transactions/${d.creation_transaction_hash}`);
              if (txRes.status === 200) {
                const txData = JSON.parse(txRes.data);
                if (txData.timestamp) entry.deployedAt = fmt(txData.timestamp);
              }
            } catch (_) {}
          }

          // Compute replacedBy from array position
          if (i < groupData.entries.length - 1) {
            entry.replacedBy = groupData.entries[i + 1].version;
          } else {
            entry.replacedBy = "current";
          }

          enriched++;
        }
      } catch (err) {
        console.log(`    ⚠ ${group} ${entry.version}: ${err.message}`);
      }
      await sleep(200);
    }
  }

  console.log(`  ${label} historical: ${enriched} enriched, ${skipped} cached, ${total} total`);
  return historical;
}

async function runHealthCheck(data) {
  console.log("\n── Health Check ──");
  const checks = [];

  // Known addresses for probing
  const LPT_ARB = "0x289ba1701C2F088cf0faf8B3705246331cB8A839";
  const BM_ARB = "0x35Bcf3c30594191d53231E4FF333E8A770453e40";
  const CONTROLLER_ARB = "0xD8E8328501E9645d16Cf49539efC04f734606ee4";

  // 1. Blockscout API shape — check required fields exist
  try {
    const bsRes = await httpsGet(`https://arbitrum.blockscout.com/api/v2/addresses/${LPT_ARB}`);
    if (bsRes.status === 200) {
      const bsData = JSON.parse(bsRes.data);
      const required = ["is_contract", "is_verified", "name", "creator_address_hash"];
      const missing = required.filter(f => !(f in bsData));
      if (missing.length > 0) {
        checks.push({ endpoint: "Blockscout /api/v2/addresses/", status: "FAIL", detail: `Missing fields: ${missing.join(", ")}`, affects: "ContractVerifier Mode 2, enrichment" });
      } else {
        console.log("  ✓ Blockscout API shape OK");
      }
    } else {
      checks.push({ endpoint: "Blockscout /api/v2/addresses/", status: "FAIL", detail: `HTTP ${bsRes.status}`, affects: "All Blockscout enrichment" });
    }
  } catch (err) {
    checks.push({ endpoint: "Blockscout /api/v2/addresses/", status: "FAIL", detail: err.message, affects: "All Blockscout enrichment" });
  }

  // 2. RPC eth_call — verify Controller responds
  try {
    const bmHash = keccak256Hex("BondingManager");
    const rpcBody = JSON.stringify({ jsonrpc: "2.0", method: "eth_call", params: [{ to: CONTROLLER_ARB, data: "0xe16c7d98" + bmHash }, "latest"], id: 1 });
    const rpcRes = await httpsPost("https://arb1.arbitrum.io/rpc", rpcBody);
    const rpcData = JSON.parse(rpcRes.data);
    if (rpcData.result && rpcData.result.length === 66) {
      const returned = "0x" + rpcData.result.slice(-40);
      if (returned.toLowerCase() === BM_ARB.toLowerCase()) {
        console.log("  ✓ RPC eth_call OK (Controller returns correct BondingManager)");
      } else {
        checks.push({ endpoint: "Arbitrum RPC eth_call", status: "WARN", detail: `Controller returned ${returned}, expected ${BM_ARB}`, affects: "registeredInController may be stale" });
      }
    } else {
      checks.push({ endpoint: "Arbitrum RPC eth_call", status: "FAIL", detail: `Unexpected result: ${JSON.stringify(rpcData).slice(0, 200)}`, affects: "ContractVerifier Mode 1, registeredInController" });
    }
  } catch (err) {
    checks.push({ endpoint: "Arbitrum RPC eth_call", status: "FAIL", detail: err.message, affects: "ContractVerifier Mode 1, registeredInController" });
  }

  // 3. Data integrity — every entry has keccakHash
  const missingHash = [
    ...data.arbitrumOne.current.filter(e => !e.meta?.keccakHash),
    ...data.ethereumMainnet.current.filter(e => !e.meta?.keccakHash),
  ];
  if (missingHash.length > 0) {
    checks.push({ endpoint: "Data integrity", status: "FAIL", detail: `${missingHash.length} entries missing keccakHash: ${missingHash.map(e => e.name).join(", ")}`, affects: "ContractVerifier widget lookup" });
  } else {
    console.log("  ✓ All entries have keccakHash");
  }

  // 4. Data integrity — Ethereum entries have explicit false (not null) for registeredInController
  const nullReg = data.ethereumMainnet.current.filter(e => e.meta?.registeredInController == null);
  if (nullReg.length > 0) {
    checks.push({ endpoint: "Data integrity", status: "WARN", detail: `${nullReg.length} ETH entries have null registeredInController: ${nullReg.map(e => e.name).join(", ")}`, affects: "ContractVerifier dropdown filtering" });
  } else {
    console.log("  ✓ All ETH entries have explicit registeredInController");
  }

  // Report
  if (checks.length === 0) {
    console.log("  ✓ All health checks passed");
  } else {
    const fails = checks.filter(c => c.status === "FAIL");
    const warns = checks.filter(c => c.status === "WARN");
    console.log(`  ${fails.length} FAIL, ${warns.length} WARN`);
    for (const c of checks) {
      console.log(`  ${c.status === "FAIL" ? "✗" : "⚠"} ${c.endpoint}: ${c.detail}`);
      console.log(`    → Affects: ${c.affects}`);
    }
  }

  // Store checks for workflow auto-issue step
  const checksPath = path.join(path.dirname(OUTPUT_PATH), "_health-checks.json");
  fs.writeFileSync(checksPath, JSON.stringify({ timestamp: new Date().toISOString(), checks }, null, 2));
  if (checks.length > 0) {
    console.log(`  Health check results written to ${checksPath}`);
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
