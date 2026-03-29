/**
 * @script            fetch-contract-addresses
 * @type              automation
 * @concern           content
 * @niche             data/blockchain
 * @purpose           infrastructure:data-feeds
 * @description       Fetches contract addresses from livepeer/governor-scripts, merges with
 *                    supplement config, verifies against Arbiscan/Etherscan, and writes a
 *                    structured JSX data file. With --scan-fix, scans v2/ MDX files for
 *                    stale hardcoded addresses and auto-corrects them.
 * @mode              generate
 * @pipeline          governor-scripts + supplement → Arbiscan verify → contractAddressesData.jsx
 * @scope             .github/scripts, snippets/data/changelogs/, v2/
 * @usage             node .github/scripts/fetch-contract-addresses.js [--dry-run] [--skip-verify] [--scan-fix]
 * @policy            Public APIs only. ARBISCAN_API_KEY/ETHERSCAN_API_KEY optional for higher rate limits.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// ── Config ──────────────────────────────────────────────────────────────────
const REPO_ROOT = path.resolve(__dirname, "../..");
const SUPPLEMENT_PATH = path.join(REPO_ROOT, "operations/scripts/config/contract-addresses-supplement.json");
const OUTPUT_PATH = path.join(REPO_ROOT, "snippets/data/contract-addresses/contractAddressesData.jsx");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const DRY_RUN = process.argv.includes("--dry-run");
const SKIP_VERIFY = process.argv.includes("--skip-verify");
const SCAN_FIX = process.argv.includes("--scan-fix");

const GOVERNOR_REPO = "livepeer/governor-scripts";
const GOVERNOR_FILE = "updates/addresses.js";

// ── Static registry — editorial + repo data per contract ───────────────────
// Fields that cannot be derived from governor-scripts or explorer APIs.
// Key: contract name (must match camelToTitle output).
// New contracts not in this registry get sensible defaults.

const CONTRACT_REGISTRY = {
  Controller:        { repoSrc: "livepeer/protocol@delta", solPath: "contracts/Controller.sol",                          meta: { statusLabel: "Active", deployedBy: "Livepeer Deployer", notes: null } },
  BondingManager:    { repoSrc: "livepeer/protocol@delta", solPath: "contracts/bonding/BondingManager.sol",              meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  TicketBroker:      { repoSrc: "livepeer/protocol@delta", solPath: "contracts/pm/TicketBroker.sol",                     meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  RoundsManager:     { repoSrc: "livepeer/protocol@delta", solPath: "contracts/rounds/RoundsManager.sol",                meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  Minter:            { repoSrc: "livepeer/protocol@delta", solPath: "contracts/token/Minter.sol",                        meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  ServiceRegistry:   { repoSrc: "livepeer/protocol@delta", solPath: "contracts/ServiceRegistry.sol",                     meta: { statusLabel: "Active", deployedBy: null, notes: null } },
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
  L2Migrator:        { repoSrc: "livepeer/protocol@delta", solPath: "contracts/L2/L2Migrator.sol",                       meta: { statusLabel: "Migration complete", deployedBy: null, notes: "Still processing pending claimStake calls" } },
  L1Migrator:        { repoSrc: "livepeer/protocol@delta", solPath: "contracts/L1/L1Migrator.sol",                       meta: { statusLabel: "Migration complete", deployedBy: null, notes: null } },
  L2LPTDataCache:    { repoSrc: "livepeer/arbitrum-lpt-bridge@main", solPath: "contracts/L2/L2LPTDataCache.sol",          meta: { statusLabel: "Active", deployedBy: null, notes: null } },
  L1LPTDataCache:    { repoSrc: "livepeer/arbitrum-lpt-bridge@main", solPath: "contracts/L1/L1LPTDataCache.sol",          meta: { statusLabel: "Active", deployedBy: null, notes: null } },
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

  const results = [];
  for (const entry of entries) {
    let url = `${baseUrl}/api?module=proxy&action=eth_getCode&address=${entry.address}&tag=latest`;
    if (apiKey) url += `&apikey=${apiKey}`;

    try {
      const res = await httpsGet(url);
      const data = JSON.parse(res.data);
      // eth_getCode returns "0x" for EOAs, bytecode for contracts
      const isVerified = data.result && data.result !== "0x" && data.result.length > 2;
      results.push({ ...entry, verified: isVerified, verifiedAt: now });
      if (isVerified) verified++;
      else {
        failed++;
        console.log(`  ⚠ ${entry.name} (${entry.address.substring(0, 10)}...) — not verified on ${label}`);
      }
    } catch (err) {
      console.log(`  ⚠ ${entry.name} — ${label} check failed: ${err.message}`);
      results.push({ ...entry, verified: false, verifiedAt: now });
      failed++;
    }

    // Rate limit: 5 calls/sec without key, higher with key
    await sleep(apiKey ? 100 : 250);
  }

  console.log(`  ${label}: ${verified}/${entries.length} verified${failed ? `, ${failed} failed` : ""}`);
  return results;
}

// ── Enrich metadata from Arbiscan/Etherscan + Blockscout ───────────────────

async function enrichMetadata(entries, network) {
  if (SKIP_VERIFY) {
    console.log(`  Skipping metadata enrichment (--skip-verify)`);
    return entries;
  }

  const isArbiscan = network === "arbitrumOne";
  const baseUrl = isArbiscan ? "https://api.arbiscan.io" : "https://api.etherscan.io";
  const blockscoutBase = isArbiscan ? "https://arbitrum.blockscout.com" : "https://eth.blockscout.com";
  const apiKey = isArbiscan ? ARBISCAN_API_KEY : ETHERSCAN_API_KEY;
  const label = isArbiscan ? "Arbiscan" : "Etherscan";
  const controllerAddress = isArbiscan
    ? "0xD8E8328501E9645d16Cf49539efC04f734606ee4"
    : "0xf96d54e490317c557a967abfa5d6e33006be69b3";

  console.log(`\n  Enriching ${entries.length} ${label} entries with metadata...`);
  const results = [];

  for (const entry of entries) {
    const meta = { ...entry.meta };
    const addr = entry.address;

    try {
      // 1. Transaction count + first/last tx dates via txlist
      let txUrl = `${baseUrl}/api?module=account&action=txlist&address=${addr}&page=1&offset=1&sort=asc`;
      if (apiKey) txUrl += `&apikey=${apiKey}`;
      const firstTxRes = await httpsGet(txUrl);
      const firstTxData = JSON.parse(firstTxRes.data);
      if (firstTxData.status === "1" && firstTxData.result?.length > 0) {
        const ts = parseInt(firstTxData.result[0].timeStamp, 10) * 1000;
        meta.deployedAt = new Date(ts).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
      }
      await sleep(apiKey ? 100 : 250);

      let lastTxUrl = `${baseUrl}/api?module=account&action=txlist&address=${addr}&page=1&offset=1&sort=desc`;
      if (apiKey) lastTxUrl += `&apikey=${apiKey}`;
      const lastTxRes = await httpsGet(lastTxUrl);
      const lastTxData = JSON.parse(lastTxRes.data);
      if (lastTxData.status === "1" && lastTxData.result?.length > 0) {
        const ts = parseInt(lastTxData.result[0].timeStamp, 10) * 1000;
        meta.lastActiveDate = new Date(ts).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
      }
      await sleep(apiKey ? 100 : 250);

      // 2. Transaction count via txlist count (use internal count endpoint)
      let countUrl = `${baseUrl}/api?module=proxy&action=eth_getTransactionCount&address=${addr}&tag=latest`;
      if (apiKey) countUrl += `&apikey=${apiKey}`;
      const countRes = await httpsGet(countUrl);
      const countData = JSON.parse(countRes.data);
      if (countData.result) {
        meta.transactionCount = parseInt(countData.result, 16);
      }
      await sleep(apiKey ? 100 : 250);

      // 3. Holder count (tokens only — LivepeerToken)
      if (entry.category === "token" && entry.name === "LivepeerToken") {
        let tokenUrl = `${baseUrl}/api?module=token&action=tokeninfo&contractaddress=${addr}`;
        if (apiKey) tokenUrl += `&apikey=${apiKey}`;
        const tokenRes = await httpsGet(tokenUrl);
        const tokenData = JSON.parse(tokenRes.data);
        if (tokenData.status === "1" && tokenData.result?.length > 0) {
          const holders = tokenData.result[0].holdersCount || tokenData.result[0].holders;
          if (holders) meta.holderCount = Number(holders).toLocaleString('en-GB');
        }
        await sleep(apiKey ? 100 : 250);
      }

      // 4. Blockscout label
      try {
        const bsRes = await httpsGet(`${blockscoutBase}/api/v2/addresses/${addr}`);
        const bsData = JSON.parse(bsRes.data);
        if (bsData.name) meta.blockscoutLabel = bsData.name;
      } catch (_) { /* Blockscout may not have every address */ }
      await sleep(200);

      // 5. Controller registration check (Arbitrum only, skip for Controller itself)
      const nameHash = keccak256Hex(entry.name);
      if (isArbiscan && entry.name !== "Controller" && entry.type !== "target" && nameHash) {
        try {
          // getContract(bytes32) selector = 0xbb5f747b, param = keccak256(name)
          const keccakUrl = `${baseUrl}/api?module=proxy&action=eth_call&to=${controllerAddress}&data=0xbb5f747b${nameHash}&tag=latest`;
          const regRes = await httpsGet(apiKey ? `${keccakUrl}&apikey=${apiKey}` : keccakUrl);
          const regData = JSON.parse(regRes.data);
          if (regData.result && regData.result !== "0x") {
            const returnedAddr = "0x" + regData.result.slice(-40);
            meta.registeredInController = returnedAddr.toLowerCase() === addr.toLowerCase();
          }
        } catch (_) { /* non-critical */ }
        await sleep(apiKey ? 100 : 250);
      }

    } catch (err) {
      console.log(`    ⚠ ${entry.name} metadata enrichment failed: ${err.message}`);
    }

    results.push({ ...entry, meta });
  }

  const enriched = results.filter(e => e.meta.deployedAt || e.meta.lastActiveDate || e.meta.holderCount).length;
  console.log(`  Enriched: ${enriched}/${entries.length} entries with live metadata`);
  return results;
}

// keccak256 helper for Controller.getContract(bytes32) calls.
// Node.js crypto doesn't support keccak256 natively (it has SHA-3, which is different).
// Pre-computed hashes for all known contract names registered in the Controller.
// Generated via: cast keccak "ContractName" (Foundry) or ethers.keccak256(ethers.toUtf8Bytes("ContractName"))
// Pre-computed via web3_sha3 RPC on Arbitrum One (arb1.arbitrum.io/rpc)
const KECCAK_HASHES = {
  BondingManager:    "2517d59a36a86548e38734e8ab416f42afff4bca78706a66ad65750dae7f9e37",
  TicketBroker:      "bd1aa3e8d2464256d7fd3dcf645c16418d5d8c51d971f1ad7d57e7b1b5eee239",
  RoundsManager:     "e8438ea868df48e3fc21f2f087b993c9b1837dc0f6135064161ce7d7a1701fe8",
  Minter:            "6e58ad548d72b425ea94c15f453bf26caddb061d82b2551db7fdd3cefe0e9940",
  ServiceRegistry:   "79c5d2a4a07754f4bacb0ffba18ac516030ee589ebc89db8627680c4d4cdb230",
  BondingVotes:      "2a1b465fbcae519904f0fb11f93e73dfbeb47ec54530ec444279610af8cf06b2",
  LivepeerGovernor:  "aea11c65571dd8b6188d3a5cf5e5d3d4695845e6f217cad0b453b4e276c6cdcd",
  Treasury:          "6efca2866b731ee4984990bacad4cde10f1ef764fb54a5206bdfd291695b1a9b",
  LivepeerToken:     "3443e257065fe41dd0e4d1f5a1b73a22a62e300962b57f30cddf41d0f8273ba7",
  L2Migrator:        "74b6d21e0d4650f622c903126d418c1a52bcc99ea7acb0db0809fc0eeae6c7c3",
  L2LPTGateway:      "07148fd8bd26d2f980f876cc40cea159d0cca6e6456a379f06f34fb338d35be5",
};

function keccak256Hex(name) {
  return KECCAK_HASHES[name] || null;
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

  let jsx = "";
  jsx += `/**\n`;
  jsx += ` * Auto-generated by fetch-contract-addresses.js\n`;
  jsx += ` * Source: ${GOVERNOR_REPO} (commit ${sha})\n`;
  jsx += ` * Last updated: ${now}\n`;
  jsx += ` * DO NOT EDIT MANUALLY\n`;
  jsx += ` */\n\n`;
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
        arbiscan: "https://arbiscan.io/address/",
        etherscan: "https://etherscan.io/address/",
      },
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

  // Scan-fix if requested
  if (SCAN_FIX) {
    scanAndFix(merged);
  }
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
