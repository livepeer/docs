/**
 * @script      pipeline
 * @type        integrator
 * @concern     integrations
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: pipeline
 * @mode        integrate
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { keccak256 } = require("js-sha3");

const {
  ACTIVE_LIFECYCLES,
  BLOCKCHAIN_PAGE_DATA_JSON_PATH,
  BLOCKCHAIN_PAGE_DATA_JSX_PATH,
  BLOCKING_BRANCH_DIFF_TYPES,
  BRANCH_WATCH_STATE_PATH,
  CONTRACTS_PIPELINE_CADENCE,
  CONTROLLERS,
  DEFAULT_RPC_URLS,
  EXPLORER_URLS,
  FAILURE_CLASSES,
  GOVERNOR_FILE,
  GOVERNOR_REPO,
  HEALTH_CHECK_PATH,
  OUTPUT_JSX_PATH,
  OUTPUT_JSON_PATH,
  PUBLISHED_LIFECYCLES,
  REPO_ROOT,
  WATCHED_REPOS,
} = require("./constants");
const { diffBranchWatchState, loadBranchWatchState, writeBranchWatchState } = require("./branch-watch");
const { writeIncidentArtifacts, computeIncidentFingerprint } = require("./incidents");
const { buildContractProofCatalog } = require("./spec");
const { BLOCKCHAIN_CONTRACT_PAGE_SPEC } = require("./blockchain-page-spec");
const { extractContractMetadata } = require("./solidity-parser");

const REQUEST_TIMEOUT_MS = Number.parseInt(process.env.CONTRACTS_HTTP_TIMEOUT_MS || "15000", 10) || 15000;
const GET_CONTRACT_SELECTOR = `0x${keccak256("getContract(bytes32)").slice(0, 8)}`;
const TARGET_CONTRACT_ID_SELECTOR = `0x${keccak256("targetContractId()").slice(0, 8)}`;
const CONTROLLER_GETTER_SELECTOR = `0x${keccak256("controller()").slice(0, 8)}`;
const SET_CONTRACT_INFO_TOPIC = `0x${keccak256("SetContractInfo(bytes32,address,bytes20)")}`;
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || process.env.ETHERSCAN_API_KEY_2 || "";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const BRANCH_COMMIT_CACHE = new Map();
const REPO_PATH_CACHE = new Map();
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function httpsGet(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const request = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: "GET",
      timeout: REQUEST_TIMEOUT_MS,
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "livepeer-docs-bot",
        ...headers,
      },
    }, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => resolve({ status: response.statusCode, data }));
    });
    request.on("error", reject);
    request.on("timeout", () => request.destroy(new Error(`Request timed out after ${REQUEST_TIMEOUT_MS}ms: ${url}`)));
    request.end();
  });
}

function httpsPost(url, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const postData = typeof body === "string" ? body : JSON.stringify(body);
    const request = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: "POST",
      timeout: REQUEST_TIMEOUT_MS,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    }, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => resolve({ status: response.statusCode, data }));
    });
    request.on("error", reject);
    request.on("timeout", () => request.destroy(new Error(`Request timed out after ${REQUEST_TIMEOUT_MS}ms: ${url}`)));
    request.write(postData);
    request.end();
  });
}

async function ethCall(chain, to, data) {
  return ethRpc(chain, "eth_call", [{ to, data }, "latest"]);
}

async function ethRpc(chain, method, params) {
  const urls = DEFAULT_RPC_URLS[chain] || [];
  const failures = [];
  for (const rpcUrl of urls) {
    try {
      const rpcResponse = await httpsPost(rpcUrl, {
        jsonrpc: "2.0",
        method,
        params,
        id: 1,
      });
      const rpcData = JSON.parse(rpcResponse.data);
      if (!rpcData.error && rpcData.result != null && rpcData.result !== "0x") {
        return { result: rpcData.result, rpcUrl, failures };
      }
      failures.push({ rpcUrl, detail: rpcData.error?.message || "empty result" });
    } catch (error) {
      failures.push({ rpcUrl, detail: error.message });
    }
  }
  return { result: null, rpcUrl: null, failures };
}

function decodeAddressCallResult(result) {
  if (typeof result !== "string" || result.length < 42) return null;
  const address = `0x${result.slice(-40)}`;
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return null;
  if (/^0x0{40}$/i.test(address)) return null;
  return address;
}

function decodeBytes32CallResult(result) {
  if (typeof result !== "string" || !/^0x[a-fA-F0-9]{64}$/.test(result)) return null;
  if (/^0x0{64}$/i.test(result)) return null;
  return result;
}

function decodeGitCommitHashWord(word) {
  if (typeof word !== "string" || !/^[a-fA-F0-9]{64}$/.test(word)) return null;
  const commit = word.slice(0, 40);
  if (/^0{40}$/i.test(commit)) return null;
  return commit;
}

function normalizeAddress(value) {
  return typeof value === "string" ? value.toLowerCase() : null;
}

function addressesMatch(left, right) {
  return Boolean(left && right && normalizeAddress(left) === normalizeAddress(right));
}

function compareVersions(left, right) {
  const l = Number(String(left || "").replace(/^V/i, "")) || 0;
  const r = Number(String(right || "").replace(/^V/i, "")) || 0;
  return l - r;
}

function parseVersionNumber(version) {
  const value = Number(String(version || "").replace(/^V/i, ""));
  return Number.isFinite(value) && value > 0 ? value : null;
}

function formatVersion(versionNumber) {
  return Number.isFinite(versionNumber) && versionNumber > 0 ? `V${versionNumber}` : null;
}

function seriesGroupKey(entry) {
  return `${entry.category || "other"}:${entry.canonicalName || entry.name}`;
}

function seriesEntryKey(entry) {
  return `${entry.chain || ""}:${entry.type || entry.deploymentKind || "standalone"}:${normalizeAddress(entry.address) || ""}`;
}

function sortSeriesEntries(left, right) {
  const leftVersion = parseVersionNumber(left.version);
  const rightVersion = parseVersionNumber(right.version);
  if (leftVersion != null && rightVersion != null && leftVersion !== rightVersion) {
    return leftVersion - rightVersion;
  }
  if (leftVersion != null && rightVersion == null) return -1;
  if (leftVersion == null && rightVersion != null) return 1;
  const chainCompare = String(left.chain || "").localeCompare(String(right.chain || ""), "en", { sensitivity: "base" });
  if (chainCompare !== 0) return chainCompare;
  const typeRank = { target: 0, proxy: 1, standalone: 2 };
  const typeCompare = (typeRank[left.type] ?? 99) - (typeRank[right.type] ?? 99);
  if (typeCompare !== 0) return typeCompare;
  return String(left.address || "").localeCompare(String(right.address || ""), "en", { sensitivity: "base" });
}

function inferNextSeriesVersion(entries = [], explicitVersion = null) {
  if (explicitVersion) return explicitVersion;
  const maxVersion = entries.reduce((winner, entry) => {
    const parsed = parseVersionNumber(entry.version);
    return parsed != null && parsed > winner ? parsed : winner;
  }, 0);
  return formatVersion(maxVersion + 1);
}

function buildSeriesEntry(entry, overrides = {}) {
  if (!entry?.address) return null;
  const type = overrides.type || entry.type || entry.deploymentKind || "standalone";
  const chain = overrides.chain || entry.chain || null;
  const version = overrides.version ?? entry.version ?? entry.meta?.currentImplementationVersion ?? null;
  const address = overrides.address || entry.address;
  return {
    name: overrides.name || entry.name || entry.canonicalName,
    canonicalName: overrides.canonicalName || entry.canonicalName || entry.name,
    category: overrides.category || entry.category || "other",
    chain,
    type,
    deploymentKind: type,
    address,
    version,
    blockchainHref: overrides.blockchainHref || entry.blockchainHref || (address ? `${getExplorerAddressBase(chain)}${address}` : null),
    isCurrent: Boolean(overrides.isCurrent),
    status: null,
    replacedBy: null,
  };
}

function loadPreviousGeneratedContracts() {
  const candidates = [OUTPUT_JSON_PATH];
  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    try {
      const parsed = JSON.parse(fs.readFileSync(candidate, "utf8"));
      if (parsed?.arbitrumOne || parsed?.ethereumMainnet) {
        return parsed;
      }
    } catch (_error) {
      continue;
    }
  }
  return null;
}

function normalizeHistoricalSeriesMap(series = {}) {
  const map = new Map();
  Object.entries(series || {}).forEach(([category, groups]) => {
    if (!Array.isArray(groups)) return;
    groups.forEach((group) => {
      const canonicalName = group?.canonicalName || group?.name;
      if (!canonicalName) return;
      const key = `${category}:${canonicalName}`;
      const entries = Array.isArray(group.entries)
        ? group.entries
          .filter((entry) => !entry?.isCurrent && entry?.meta?.currentImplementation !== true && String(entry?.status || "").toLowerCase() !== "current")
          .map((entry) => buildSeriesEntry({
            ...entry,
            category,
            canonicalName,
            name: group.name || canonicalName,
          }, { isCurrent: false }))
          .filter(Boolean)
        : [];
      map.set(key, {
        category,
        name: group.name || canonicalName,
        canonicalName,
        entries,
      });
    });
  });
  return map;
}

function buildCurrentSeriesCandidate(entry) {
  if (!entry) return null;
  const deploymentKind = entry.type || entry.deploymentKind || "standalone";
  if (deploymentKind === "proxy") {
    const implementationAddress = entry.meta?.proxyTarget || entry.verification?.proxy?.implementationAddress || null;
    if (!implementationAddress) return null;
    return buildSeriesEntry(entry, {
      address: implementationAddress,
      type: "target",
      version: entry.meta?.currentImplementationVersion || entry.verification?.proxy?.implementationVersion || entry.version || null,
      blockchainHref: `${getExplorerAddressBase(entry.chain)}${implementationAddress}`,
      isCurrent: true,
    });
  }
  if (!entry.address) return null;
  return buildSeriesEntry(entry, { isCurrent: true });
}

function buildCurrentSeriesCandidates(entries = [], currentImplementations = []) {
  const candidates = new Map();
  const addCandidate = (entry) => {
    const candidate = buildCurrentSeriesCandidate(entry);
    if (!candidate) return;
    candidates.set(`${seriesGroupKey(candidate)}:${seriesEntryKey(candidate)}`, candidate);
  };

  currentImplementations.forEach(addCandidate);
  entries.forEach(addCandidate);

  return [...candidates.values()];
}

function bootstrapHistoricalSeriesMap(chainPayload = {}, currentLifecycleEntries = [], currentImplementations = []) {
  const normalizedCurrentEntries = currentLifecycleEntries.length > 0
    ? currentLifecycleEntries
    : [
      ...(Array.isArray(chainPayload.active) ? chainPayload.active : []),
      ...(Array.isArray(chainPayload.paused) ? chainPayload.paused : []),
      ...(Array.isArray(chainPayload.migration_residual) ? chainPayload.migration_residual : []),
      ...(Array.isArray(chainPayload.legacy_operational) ? chainPayload.legacy_operational : []),
    ];
  const normalizedCurrentImplementations = currentImplementations.length > 0
    ? currentImplementations
    : (Array.isArray(chainPayload.currentImplementations) ? chainPayload.currentImplementations : []);

  const normalizedExisting = normalizeHistoricalSeriesMap(chainPayload.historicalSeries);
  if (normalizedExisting.size > 0) {
    normalizedExisting.forEach((series) => {
      series.entries.forEach((entry) => {
        entry.isCurrent = false;
        entry.status = null;
        entry.replacedBy = null;
      });
    });
    return normalizedExisting;
  }

  const map = new Map();
  (Array.isArray(chainPayload.historical) ? chainPayload.historical : []).forEach((entry) => {
    const seriesEntry = buildSeriesEntry(entry);
    if (!seriesEntry) return;
    const key = seriesGroupKey(seriesEntry);
    if (!map.has(key)) {
      map.set(key, {
        category: seriesEntry.category,
        name: seriesEntry.name,
        canonicalName: seriesEntry.canonicalName,
        entries: [],
      });
    }
    const series = map.get(key);
    if (!series.entries.some((candidate) => seriesEntryKey(candidate) === seriesEntryKey(seriesEntry))) {
      series.entries.push(seriesEntry);
    }
  });

  buildCurrentSeriesCandidates(normalizedCurrentEntries, normalizedCurrentImplementations).forEach((candidate) => {
    const key = seriesGroupKey(candidate);
    if (!map.has(key)) {
      map.set(key, {
        category: candidate.category,
        name: candidate.name,
        canonicalName: candidate.canonicalName,
        entries: [],
      });
    }
    const series = map.get(key);
    const matches = series.entries.filter((entry) => entry.chain === candidate.chain && entry.type === candidate.type);
    const existing = matches.find((entry) => addressesMatch(entry.address, candidate.address));
    if (existing) {
      existing.isCurrent = true;
      existing.version = existing.version || candidate.version || inferNextSeriesVersion(matches);
      existing.blockchainHref = existing.blockchainHref || candidate.blockchainHref;
      return;
    }
    series.entries.push({
      ...candidate,
      version: inferNextSeriesVersion(matches, candidate.version),
      isCurrent: true,
    });
  });

  return map;
}

function pruneSeededHistoricalGroups(seriesMap = new Map(), seededHistoricalEntries = []) {
  const seededKeys = new Set(
    (Array.isArray(seededHistoricalEntries) ? seededHistoricalEntries : [])
      .map((entry) => buildSeriesEntry(entry))
      .filter(Boolean)
      .map((entry) => seriesGroupKey(entry))
  );
  seededKeys.forEach((key) => {
    seriesMap.delete(key);
  });
  return seriesMap;
}

function finalizeHistoricalSeriesMap(seriesMap = new Map()) {
  const categories = {};

  seriesMap.forEach((series) => {
    const entries = [...(series.entries || [])]
      .filter((entry) => entry?.address && !entry.isCurrent && entry?.meta?.currentImplementation !== true)
      .sort(sortSeriesEntries);

    const groups = new Map();
    entries.forEach((entry) => {
      const key = `${entry.chain}:${entry.type}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(entry);
    });

    groups.forEach((groupEntries) => {
      groupEntries.sort(sortSeriesEntries);
      groupEntries.forEach((entry, index) => {
        const nextEntry = groupEntries[index + 1] || null;
        entry.replacedBy = nextEntry?.version || null;
        entry.status = nextEntry?.version
          ? `Replaced by ${nextEntry.version}`
          : "Deprecated";
      });
    });

    const category = series.category || "other";
    if (!categories[category]) categories[category] = [];
    categories[category].push({
      category,
      name: series.name,
      canonicalName: series.canonicalName,
      entries,
    });
  });

  Object.values(categories).forEach((groups) => {
    groups.sort((left, right) => String(left.name || "").localeCompare(String(right.name || ""), "en", { sensitivity: "base" }));
  });

  return categories;
}

function flattenHistoricalSeries(historicalSeries = {}) {
  const rows = [];
  Object.values(historicalSeries || {}).forEach((groups) => {
    (groups || []).forEach((group) => {
      const includeGroup = (group.entries || []).some((entry) => !entry.isCurrent);
      if (!includeGroup) return;
      (group.entries || []).forEach((entry, index) => {
        rows.push({
          id: `${group.category}.${group.canonicalName}.historicalSeries.${index + 1}`.replace(/[^a-zA-Z0-9.]+/g, "-"),
          name: group.name,
          canonicalName: group.canonicalName,
          address: entry.address,
          type: entry.type,
          deploymentKind: entry.type,
          category: group.category,
          lifecycle: "historical",
          chain: entry.chain,
          proofChain: "historical-series",
          version: entry.version,
          addressAuthority: "historical-series",
          runtimeAuthority: "archive",
          repoSrc: null,
          contractCodeHref: null,
          blockchainHref: entry.blockchainHref || `${getExplorerAddressBase(entry.chain)}${entry.address}`,
          hasBytecode: null,
          sourceVerified: null,
          verified: null,
          verifiedAt: null,
          verifiedAtISO: null,
          isHistorical: true,
          meta: {
            statusLabel: entry.status,
            notes: "Historical version emitted from the contracts pipeline historical series model.",
            controllerSlot: null,
            controllerResolvedAddress: null,
            historicalSlotId: null,
            historicalSlotName: group.canonicalName,
            historicalProxyAddress: null,
          },
          addressSource: {
            kind: "historical-series",
            repo: null,
            path: null,
            refMode: "generated-state",
            resolvedCommit: null,
            key: `${group.category}:${group.canonicalName}`,
          },
          codeSource: null,
        });
      });
    });
  });

  return rows;
}

function buildHistoricalArtifacts({
  chain,
  entries = [],
  currentImplementations = [],
  previousChainPayload = null,
  seededHistoricalEntries = [],
  resetSeededGroups = false,
}) {
  const currentLifecycleEntries = (Array.isArray(entries) ? entries : [])
    .filter((entry) => entry?.address && entry.lifecycle !== "historical" && entry?.meta?.currentImplementation !== true);
  const previousSeriesMap = bootstrapHistoricalSeriesMap(
    previousChainPayload || {},
    currentLifecycleEntries,
    Array.isArray(currentImplementations) ? currentImplementations : []
  );
  if (resetSeededGroups) {
    pruneSeededHistoricalGroups(previousSeriesMap, seededHistoricalEntries);
  }
  const historicalEntries = [
    ...(Array.isArray(seededHistoricalEntries) ? seededHistoricalEntries : []),
    ...(Array.isArray(entries) ? entries : [])
      .filter((entry) => entry?.address && entry.lifecycle === "historical" && entry?.meta?.currentImplementation !== true && !entry?.isCurrent),
  ];

  historicalEntries.forEach((entry) => {
    const seriesEntry = buildSeriesEntry(entry);
    if (!seriesEntry) return;
    const key = seriesGroupKey(seriesEntry);
    if (!previousSeriesMap.has(key)) {
      previousSeriesMap.set(key, {
        category: seriesEntry.category,
        name: seriesEntry.name,
        canonicalName: seriesEntry.canonicalName,
        entries: [],
      });
    }
    const series = previousSeriesMap.get(key);
    if (!series.entries.some((candidate) => seriesEntryKey(candidate) === seriesEntryKey(seriesEntry))) {
      series.entries.push(seriesEntry);
    }
  });

  const historicalSeries = finalizeHistoricalSeriesMap(previousSeriesMap);
  const historical = flattenHistoricalSeries(historicalSeries)
    .filter((entry) => entry.chain === chain)
    .sort((left, right) =>
      String(left.category || "").localeCompare(String(right.category || ""), "en", { sensitivity: "base" })
      || String(left.name || "").localeCompare(String(right.name || ""), "en", { sensitivity: "base" })
      || compareVersions(left.version, right.version)
    );

  return { historicalSeries, historical };
}

function buildRootHistoricalChainPayload(historicalSeries = {}) {
  const grouped = {};

  Object.values(historicalSeries || {}).forEach((groups) => {
    (groups || []).forEach((group) => {
      const canonicalName = group?.canonicalName || group?.name;
      const entries = [...(group?.entries || [])]
        .filter((entry) => entry?.address && !entry.isCurrent && entry?.meta?.currentImplementation !== true)
        .sort(sortSeriesEntries)
        .map((entry) => ({
          address: entry.address,
          chain: entry.chain || null,
          type: entry.type || entry.deploymentKind || null,
          version: entry.version || null,
          blockchainHref: entry.blockchainHref || `${getExplorerAddressBase(entry.chain)}${entry.address}`,
          replacedBy: entry.replacedBy || null,
          status: entry.status || null,
        }));
      if (!canonicalName || entries.length === 0) return;
      grouped[canonicalName] = entries;
    });
  });

  return grouped;
}

const CHAIN_LABELS = {
  arbitrumOne: "Arbitrum One",
  ethereumMainnet: "Ethereum Mainnet",
};

const LIFECYCLE_LABELS = {
  active: "Active",
  paused: "Paused",
  migration_residual: "Migration",
  legacy_operational: "Legacy operational",
  historical: "Historical",
  source_only: "Source only",
};

const PROOF_CHAIN_LABELS = {
  controller: "Controller-managed",
  bridge: "Bridge-derived",
  detached: "Detached runtime-backed",
  "source-only": "Source-backed",
};

function getChainLabel(chain) {
  return CHAIN_LABELS[chain] || chain || null;
}

function getLifecycleLabel(lifecycle) {
  return LIFECYCLE_LABELS[lifecycle] || String(lifecycle || "").replaceAll("_", " ") || null;
}

function getProofChainLabel(proofChain) {
  return PROOF_CHAIN_LABELS[proofChain] || proofChain || null;
}

function toRawGitHubHref(href) {
  return href
    ? href.replace("https://github.com/", "https://raw.githubusercontent.com/").replace("/blob/", "/")
    : null;
}

function sanitizeCodeSource(codeSource) {
  if (!codeSource) return null;
  return {
    repo: codeSource.repo || null,
    branch: codeSource.branch || null,
    path: codeSource.path || null,
    href: codeSource.href || null,
    resolvedCommit: codeSource.resolvedCommit || null,
    exists: codeSource.exists !== false,
    resolutionError: codeSource.resolutionError || null,
  };
}

function buildPageResolutionIndex(resolutions = []) {
  const index = new Map();
  resolutions.forEach((item) => {
    const chain = item?.entry?.chain || item?.definition?.chain || null;
    const canonicalName = item?.entry?.canonicalName || item?.definition?.canonicalName || null;
    if (!chain || !canonicalName) return;
    index.set(`${chain}:${canonicalName}`, item?.resolution?.codeSource || null);
  });
  return index;
}

function getExactPublishedEntry(payload, chain, bucket, canonicalName, type = null) {
  if (!chain || !bucket || !canonicalName) return null;
  return (payload?.[chain]?.[bucket] || []).find((entry) =>
    entry?.canonicalName === canonicalName &&
    (type == null || (entry.type || entry.deploymentKind) === type)
  ) || null;
}

function getExactImplementationEntry(payload, chain, canonicalName) {
  if (!chain || !canonicalName) return null;
  return (payload?.[chain]?.currentImplementations || []).find((entry) =>
    entry?.canonicalName === canonicalName && (entry.type || entry.deploymentKind) === "target"
  ) || null;
}

function buildContractFacts(spec, entry, implementationEntry = null) {
  if (!entry || !spec) return [];

  const facts = [];
  const lifecycleLabel = getLifecycleLabel(entry.lifecycle);
  const isProxy = (entry.type || entry.deploymentKind) === "proxy";
  const implementationAddress = implementationEntry?.address || entry.verification?.proxy?.implementationAddress || null;
  const implementationVersion = implementationEntry?.version || entry.verification?.proxy?.implementationVersion || null;
  const controllerRegistered = entry.verification?.controller?.applicable && entry.verification.controller.controllerRegistered === true;
  const bridgeArtifactConfirmed = entry.verification?.bridge?.deploymentArtifactMatchesAddress === true;
  const runtimeConsumerConfirmed =
    entry.verification?.runtimeConsumer?.required && entry.verification.runtimeConsumer.exactAddressMatch === true;

  if (spec.slug === "controller") {
    facts.push("Controller registry");
    if (lifecycleLabel) facts.push(lifecycleLabel);
    return facts;
  }

  if (entry.proofChain === "controller") {
    if (controllerRegistered) facts.push("Controller registered");
    if (lifecycleLabel) facts.push(lifecycleLabel);
    if (isProxy && implementationAddress) facts.push("Proxy target resolved");
    if (isProxy && implementationVersion) facts.push(`Target ${implementationVersion}`);
    return facts;
  }

  if (entry.proofChain === "bridge") {
    facts.push("Bridge-derived");
    if (bridgeArtifactConfirmed) facts.push("Bridge artifact confirmed");
    if (lifecycleLabel) facts.push(lifecycleLabel);
    return facts;
  }

  if (entry.proofChain === "detached") {
    if (bridgeArtifactConfirmed) facts.push("Deployment artifact confirmed");
    if (runtimeConsumerConfirmed) facts.push("Runtime consumer confirmed");
    if (lifecycleLabel) facts.push(lifecycleLabel);
    return facts;
  }

  if (controllerRegistered) facts.push("Controller registered");
  if (bridgeArtifactConfirmed) facts.push("Deployment artifact confirmed");
  if (runtimeConsumerConfirmed) facts.push("Runtime consumer confirmed");
  if (lifecycleLabel) facts.push(lifecycleLabel);
  if (isProxy && implementationAddress) facts.push("Proxy target resolved");
  if (isProxy && implementationVersion) facts.push(`Target ${implementationVersion}`);

  return facts;
}

function buildBlockchainPageContractEntry({
  spec,
  registryEntry = null,
  implementationEntry = null,
  resolvedSource = null,
}) {
  const parsedSource = extractContractMetadata(resolvedSource?.content || "", spec.sourceContractName || spec.canonicalName || spec.name);
  const supported = Boolean(registryEntry) && !spec.sourceOnly;
  const proxyAddress = registryEntry && (registryEntry.type || registryEntry.deploymentKind) === "proxy"
    ? registryEntry.address
    : null;
  const targetAddress = proxyAddress
    ? (implementationEntry?.address || registryEntry?.verification?.proxy?.implementationAddress || null)
    : null;
  const currentAddress = registryEntry?.address || null;
  const sourceDisplayName = spec.sourceDisplayName || (resolvedSource?.path ? path.basename(resolvedSource.path) : null);
  const unsupportedNote = spec.sourceOnly
    ? spec.unsupportedNote
    : (!registryEntry ? `No canonical ${getLifecycleLabel(spec.bucket || spec.lifecycle || "published").toLowerCase()} entry resolved from the contracts pipeline.` : null);
  const subtitle = spec.sourceOnly
    ? spec.unsupportedNote || spec.subtitle || null
    : (spec.subtitle || registryEntry?.subtitle || null);

  return {
    slug: spec.slug,
    name: spec.name,
    canonicalName: spec.canonicalName,
    subtitle,
    category: spec.category || registryEntry?.category || null,
    chain: spec.chain || registryEntry?.chain || null,
    chainLabel: getChainLabel(spec.chain || registryEntry?.chain || null),
    lifecycle: registryEntry?.lifecycle || (spec.sourceOnly ? "source_only" : null),
    lifecycleLabel: getLifecycleLabel(registryEntry?.lifecycle || (spec.sourceOnly ? "source_only" : null)),
    proofChain: registryEntry?.proofChain || (spec.sourceOnly ? "source-only" : null),
    proofChainLabel: getProofChainLabel(registryEntry?.proofChain || (spec.sourceOnly ? "source-only" : null)),
    type: registryEntry?.type || spec.type || "standalone",
    currentAddress,
    proxyAddress,
    targetAddress,
    blockchainHref: registryEntry?.blockchainHref || null,
    proxyBlockchainHref: proxyAddress ? `${getExplorerAddressBase(spec.chain || registryEntry?.chain)}${proxyAddress}` : null,
    targetBlockchainHref: targetAddress ? `${getExplorerAddressBase(spec.chain || registryEntry?.chain)}${targetAddress}` : null,
    contractCodeHref: registryEntry?.contractCodeHref || resolvedSource?.href || null,
    rawContractCodeHref: toRawGitHubHref(registryEntry?.contractCodeHref || resolvedSource?.href || null),
    contractCodeLabel: sourceDisplayName,
    codeSource: sanitizeCodeSource(registryEntry?.codeSource || resolvedSource),
    addressSource: registryEntry?.addressSource || null,
    verification: registryEntry?.verification || null,
    supported,
    unsupportedNote,
    functions: parsedSource.functions,
    sourceContractName: spec.sourceContractName || spec.canonicalName || spec.name,
    sourceContractKind: parsedSource.contractKind,
    sourceInheritance: parsedSource.bases,
    sourceContractFound: parsedSource.contractFound,
    sourceParseError: parsedSource.error,
    facts: supported ? buildContractFacts(spec, registryEntry, implementationEntry) : [],
  };
}

async function buildBlockchainContractsPageData({
  payload,
  resolutions = [],
  meta = {},
}) {
  const resolutionIndex = buildPageResolutionIndex(resolutions);
  const contracts = {};

  for (const spec of BLOCKCHAIN_CONTRACT_PAGE_SPEC.contracts) {
    const registryEntry = spec.sourceOnly
      ? null
      : getExactPublishedEntry(payload, spec.chain, spec.bucket, spec.canonicalName, spec.type);
    const implementationEntry = registryEntry && (registryEntry.type || registryEntry.deploymentKind) === "proxy"
      ? getExactImplementationEntry(payload, spec.chain, spec.canonicalName)
      : null;
    const resolvedSource = spec.sourceOnly
      ? await resolveRepoPath(spec.codeAuthority)
      : (resolutionIndex.get(`${spec.chain}:${spec.canonicalName}`) || null);

    contracts[spec.slug] = buildBlockchainPageContractEntry({
      spec,
      registryEntry,
      implementationEntry,
      resolvedSource,
    });
  }

  return {
    meta: {
      lastUpdated: meta.lastUpdated || null,
      lastVerified: meta.lastVerified || null,
      verificationModel: meta.verificationModel || "contracts-proof-v2",
      sourceCommit: meta.sourceCommit || null,
      explorerUrls: meta.explorerUrls || EXPLORER_URLS,
    },
    sections: BLOCKCHAIN_CONTRACT_PAGE_SPEC.sections,
    contracts,
  };
}

function resolveGovernorSeries(governorChain, prefix) {
  return Object.entries(governorChain || {})
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, address]) => {
      const version = key.slice(prefix.length);
      if (!/^(\d+)$/.test(version)) return null;
      return { key, address, version: `V${version}` };
    })
    .filter(Boolean)
    .sort((a, b) => compareVersions(a.version, b.version));
}

function resolveAuthority(strategy, governorChain) {
  if (!strategy) return { address: null, version: null, authorityKind: "unknown", sourceKey: null };
  if (strategy.kind === "governor-key") {
    return {
      address: governorChain?.[strategy.key] || null,
      version: strategy.version || null,
      authorityKind: "governor-manifest",
      sourceKey: strategy.key,
    };
  }
  if (strategy.kind === "governor-versioned-latest") {
    const candidates = resolveGovernorSeries(governorChain || {}, strategy.prefix || "");
    const winner = candidates[candidates.length - 1] || null;
    return {
      address: winner?.address || governorChain?.[strategy.baseKey] || null,
      version: winner?.version || strategy.baseVersion || null,
      authorityKind: "governor-manifest",
      sourceKey: winner?.key || strategy.baseKey || null,
    };
  }
  if (strategy.kind === "proxy-meta") {
    return {
      address: null,
      version: null,
      authorityKind: "proxy-runtime",
      sourceKey: null,
    };
  }
  return { address: null, version: null, authorityKind: "unknown", sourceKey: null };
}

function githubCliGet(endpoint) {
  try {
    const output = execFileSync("gh", ["api", endpoint], {
      cwd: REPO_ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { status: 200, data: output };
  } catch (error) {
    const message = (error.stderr || error.stdout || error.message || "").toString();
    const statusMatch = message.match(/HTTP (\d{3})/i);
    return { status: statusMatch ? Number(statusMatch[1]) : 500, data: message };
  }
}

async function githubGet(endpoint) {
  const headers = {};
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  if (GITHUB_TOKEN) {
    const response = await httpsGet(`https://api.github.com${endpoint}`, headers);
    if (response.status === 200) return response;
  }
  return githubCliGet(endpoint);
}

async function resolveRepoPath(authority) {
  if (!authority?.repo || !authority?.branch || !authority?.path) return null;
  const cacheKey = `${authority.repo}@${authority.branch}:${authority.path}`;
  if (REPO_PATH_CACHE.has(cacheKey)) {
    return REPO_PATH_CACHE.get(cacheKey);
  }

  const branchKey = `${authority.repo}@${authority.branch}`;
  let resolvedCommit = BRANCH_COMMIT_CACHE.get(branchKey) || null;
  if (!resolvedCommit) {
    const commitResponse = await githubGet(`/repos/${authority.repo}/commits/${authority.branch}`);
    resolvedCommit = commitResponse.status === 200
      ? String(JSON.parse(commitResponse.data).sha || "").slice(0, 7) || null
      : null;
    BRANCH_COMMIT_CACHE.set(branchKey, resolvedCommit);
  }

  const contentsResponse = await githubGet(`/repos/${authority.repo}/contents/${authority.path}?ref=${authority.branch}`);
  const exists = contentsResponse.status === 200;
  const fileJson = exists ? JSON.parse(contentsResponse.data) : null;
  const content = fileJson?.content ? Buffer.from(fileJson.content, "base64").toString("utf8") : null;

  const resolved = {
    ...authority,
    resolvedCommit,
    href: resolvedCommit
      ? `https://github.com/${authority.repo}/blob/${resolvedCommit}/${authority.path}`
      : `https://github.com/${authority.repo}/blob/${authority.branch}/${authority.path}`,
    exists,
    content,
    blobSha: fileJson?.sha || null,
    resolutionError: exists ? null : `contents lookup returned ${contentsResponse.status}`,
  };
  REPO_PATH_CACHE.set(cacheKey, resolved);
  return resolved;
}

function getCompilationTargetPath(artifactJson) {
  const rawMetadata = artifactJson?.metadata;
  if (!rawMetadata) return null;

  try {
    const metadata = typeof rawMetadata === "string" ? JSON.parse(rawMetadata) : rawMetadata;
    const compilationTarget = metadata?.settings?.compilationTarget || {};
    const [sourcePath] = Object.keys(compilationTarget);
    return sourcePath || null;
  } catch (_error) {
    return null;
  }
}

async function resolveDeploymentArtifact(authority) {
  const repoPath = await resolveRepoPath(authority);
  if (!repoPath) return null;

  let artifactJson = null;
  try {
    artifactJson = repoPath.content ? JSON.parse(repoPath.content) : null;
  } catch (_error) {
    artifactJson = null;
  }

  return {
    ...repoPath,
    address: artifactJson?.address || artifactJson?.receipt?.contractAddress || null,
    compilationPath: artifactJson ? getCompilationTargetPath(artifactJson) : null,
    contractName: artifactJson?.contractName || null,
  };
}

async function fetchGovernorAddresses() {
  const response = await githubGet(`/repos/${GOVERNOR_REPO}/contents/${GOVERNOR_FILE}`);
  if (response.status !== 200) {
    throw new Error(`Unable to fetch ${GOVERNOR_REPO}/${GOVERNOR_FILE}: ${String(response.data).slice(0, 200)}`);
  }
  const json = JSON.parse(response.data);
  const content = Buffer.from(json.content, "base64").toString("utf8");
  const sha = json.sha.slice(0, 7);
  const match = content.match(/const ADDRESSES\s*=\s*(\{[\s\S]*?\});/);
  if (!match) throw new Error("Could not parse ADDRESSES from governor-scripts");
  const addresses = new Function(`return ${match[1]}`)();
  return { addresses, sha };
}

function getGovernorChain(governorAddresses, chain) {
  return chain === "arbitrumOne"
    ? (governorAddresses.arbitrumMainnet || {})
    : (governorAddresses.mainnet || {});
}

async function fetchRepoInventory(repoConfig) {
  const repoInfoResponse = await githubGet(`/repos/${repoConfig.repo}`);
  const repoInfo = repoInfoResponse.status === 200 ? JSON.parse(repoInfoResponse.data) : {};
  const branchesResponse = await githubGet(`/repos/${repoConfig.repo}/branches?per_page=100`);
  const branches = branchesResponse.status === 200 ? JSON.parse(branchesResponse.data).map((branch) => branch.name).sort() : [];
  return {
    repo: repoConfig.repo,
    role: repoConfig.role,
    defaultBranch: repoInfo.default_branch || repoConfig.preferredBranches?.[0] || null,
    branches,
  };
}

async function resolveCodeSource(codeAuthority) {
  if (!codeAuthority) return null;
  const resolved = await resolveRepoPath(codeAuthority);
  if (!resolved) return null;
  return {
    ...resolved,
    isPrivate: false,
  };
}

async function resolveControllerSlotAddress(chain, slotName) {
  if (!CONTROLLERS[chain] || !slotName) return { address: null, rpcUrl: null, failures: [] };
  const call = await ethCall(chain, CONTROLLERS[chain], `${GET_CONTRACT_SELECTOR}${keccak256(slotName)}`);
  return {
    address: decodeAddressCallResult(call.result),
    rpcUrl: call.rpcUrl,
    failures: call.failures,
  };
}

async function resolveProxyRuntimeVerification(chain, proxyAddress, canonicalName) {
  if (!proxyAddress) {
    return {
      controllerAddress: null,
      controllerMatchesExpected: null,
      targetContractId: null,
      targetContractName: null,
      implementationAddress: null,
      implementationSource: null,
    };
  }

  const controllerCall = await ethCall(chain, proxyAddress, CONTROLLER_GETTER_SELECTOR);
  const controllerAddress = decodeAddressCallResult(controllerCall.result) || CONTROLLERS[chain] || null;
  const targetIdCall = await ethCall(chain, proxyAddress, TARGET_CONTRACT_ID_SELECTOR);
  const targetContractId = decodeBytes32CallResult(targetIdCall.result);
  const targetContractName = targetContractId ? `${canonicalName}Target` : null;

  let implementationAddress = null;
  if (controllerAddress && targetContractId) {
    const implementationCall = await ethCall(
      chain,
      controllerAddress,
      `${GET_CONTRACT_SELECTOR}${targetContractId.slice(2)}`
    );
    implementationAddress = decodeAddressCallResult(implementationCall.result);
  }

  return {
    controllerAddress,
    controllerMatchesExpected: controllerAddress ? addressesMatch(controllerAddress, CONTROLLERS[chain]) : null,
    targetContractId,
    targetContractName,
    implementationAddress,
    implementationSource: implementationAddress ? "proxy-runtime-controller" : null,
  };
}

async function searchRepoForAddress(strategy) {
  if (!strategy?.repos?.length || !strategy.searchTerms?.length) {
    return { address: null, authorityKind: "repo-search", repo: null, path: null, refMode: "code-search", resolvedCommit: null, sourceKey: null };
  }

  for (const repo of strategy.repos) {
    for (const term of strategy.searchTerms) {
      const query = encodeURIComponent(`${term} repo:${repo}`);
      const response = await githubGet(`/search/code?q=${query}&per_page=5`);
      if (response.status !== 200) continue;
      const data = JSON.parse(response.data);
      for (const item of data.items || []) {
        const fileResponse = await githubGet(`/repos/${repo}/contents/${item.path}?ref=${item.repository.default_branch}`);
        if (fileResponse.status !== 200) continue;
        const fileJson = JSON.parse(fileResponse.data);
        const content = fileJson.content ? Buffer.from(fileJson.content, "base64").toString("utf8") : "";
        const addressMatch = content.match(/0x[a-fA-F0-9]{40}/);
        if (addressMatch) {
          return {
            address: addressMatch[0],
            authorityKind: "repo-search",
            repo,
            path: item.path,
            refMode: "code-search",
            resolvedCommit: String(fileJson.sha || "").slice(0, 7) || null,
            sourceKey: term,
          };
        }
      }
    }
  }

  return { address: null, authorityKind: "repo-search", repo: null, path: null, refMode: "code-search", resolvedCommit: null, sourceKey: null };
}

function getExplorerSiteBase(chain) {
  return chain === "arbitrumOne" ? "https://arbiscan.io" : "https://etherscan.io";
}

function normalizeWhitespace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function includesNormalized(haystack, needle) {
  return normalizeWhitespace(haystack).toLowerCase().includes(normalizeWhitespace(needle).toLowerCase());
}

function extractHtmlTitle(html) {
  const match = String(html || "").match(/<title>\s*([^<]+?)\s*<\/title>/i);
  return normalizeWhitespace(match?.[1] || null);
}

function extractExplorerContractName(html) {
  const patterns = [
    /Contract Name:<\/div>\s*<div[^>]*>\s*<span[^>]*>\s*([^<]+?)\s*<\/span>/i,
    /Contract Name<\/div>\s*<div[^>]*>\s*<span[^>]*>\s*([^<]+?)\s*<\/span>/i,
  ];
  for (const pattern of patterns) {
    const match = String(html || "").match(pattern);
    if (match?.[1]) {
      return normalizeWhitespace(match[1]);
    }
  }
  return null;
}

async function fetchExplorerSearchHandlerHits(chain, query) {
  if (!query) return [];
  const response = await httpsGet(`${getExplorerSiteBase(chain)}/searchHandler?term=${encodeURIComponent(query)}`, {
    Accept: "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0",
    "X-Requested-With": "XMLHttpRequest",
  });
  if (response.status !== 200) return [];
  try {
    const parsed = JSON.parse(response.data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    return [];
  }
}

async function fetchExplorerSearchPageAddresses(chain, query) {
  if (!query) return [];
  const response = await httpsGet(`${getExplorerSiteBase(chain)}/search?f=0&q=${encodeURIComponent(query)}`, {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "User-Agent": "Mozilla/5.0",
  });
  if (response.status !== 200) return [];
  const seen = new Set();
  const matches = String(response.data || "").match(/\/address\/(0x[a-fA-F0-9]{40})/g) || [];
  for (const match of matches) {
    const address = match.replace("/address/", "").toLowerCase();
    seen.add(address);
    if (seen.size >= 20) break;
  }
  return [...seen];
}

async function fetchExplorerAddressPage(chain, address) {
  if (!address) return null;
  const normalizedAddress = normalizeAddress(address);
  const response = await httpsGet(`${getExplorerSiteBase(chain)}/address/${normalizedAddress}`, {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "User-Agent": "Mozilla/5.0",
  });
  if (response.status !== 200) return null;
  return {
    address: normalizedAddress,
    html: response.data,
    title: extractHtmlTitle(response.data),
  };
}

function explorerHitMatches(hit, strategy) {
  if (!hit?.address) return false;
  const group = String(hit.group || "");
  const groupId = String(hit.groupid || "");
  if (group !== "Addresses" && groupId !== "2") return false;
  const title = normalizeWhitespace(hit.title);
  if (strategy.expectedSearchTitle && title !== normalizeWhitespace(strategy.expectedSearchTitle)) return false;
  if (strategy.searchTitleIncludes && !includesNormalized(title, strategy.searchTitleIncludes)) return false;
  return true;
}

function explorerAddressPageMatches(page, strategy) {
  if (!page?.html) return false;
  if (strategy.expectedPageTitle && page.title !== normalizeWhitespace(strategy.expectedPageTitle)) return false;
  if (strategy.expectedContractName) {
    const contractName = extractExplorerContractName(page.html);
    if (contractName !== normalizeWhitespace(strategy.expectedContractName)) return false;
  }
  if (strategy.requiredCreatorLabel && !includesNormalized(page.html, strategy.requiredCreatorLabel)) return false;
  return (strategy.pageMustInclude || []).every((needle) => includesNormalized(page.html, needle));
}

async function resolveExplorerSearchLabel(definition) {
  const strategy = definition?.addressStrategy || {};
  const searchTerms = [strategy.query, ...(strategy.fallbackQueries || [])].filter(Boolean);

  for (const query of searchTerms) {
    const searchHits = await fetchExplorerSearchHandlerHits(definition.chain, query);
    for (const hit of searchHits) {
      if (!explorerHitMatches(hit, strategy)) continue;
      const page = await fetchExplorerAddressPage(definition.chain, hit.address);
      if (!explorerAddressPageMatches(page, strategy)) continue;
      return {
        address: hit.address,
        authorityKind: "explorer-search",
        repo: null,
        path: hit.link || `/address/${hit.address}`,
        refMode: "search-handler",
        resolvedCommit: null,
        sourceKey: query,
        version: null,
      };
    }

    if (strategy.searchPageFallback === false) continue;
    const candidates = await fetchExplorerSearchPageAddresses(definition.chain, query);
    for (const candidate of candidates) {
      const page = await fetchExplorerAddressPage(definition.chain, candidate);
      if (!explorerAddressPageMatches(page, strategy)) continue;
      return {
        address: candidate,
        authorityKind: "explorer-search",
        repo: null,
        path: `/address/${candidate}`,
        refMode: "search-page",
        resolvedCommit: null,
        sourceKey: query,
        version: null,
      };
    }
  }

  return {
    address: null,
    authorityKind: "explorer-search",
    repo: null,
    path: null,
    refMode: "search-handler",
    resolvedCommit: null,
    sourceKey: strategy.query || null,
    version: null,
  };
}

async function resolveVerifiedSeedAddress(definition) {
  const strategy = definition?.addressStrategy || {};
  const address = normalizeAddress(strategy.address);
  const page = await fetchExplorerAddressPage(definition.chain, address);
  if (!explorerAddressPageMatches(page, strategy)) {
    return {
      address: null,
      authorityKind: "verified-seed-address",
      repo: null,
      path: null,
      refMode: "seed-address",
      resolvedCommit: null,
      sourceKey: address,
      version: null,
    };
  }
  return {
    address,
    authorityKind: "verified-seed-address",
    repo: null,
    path: `/address/${address}`,
    refMode: "seed-address",
    resolvedCommit: null,
    sourceKey: address,
    version: null,
  };
}

async function resolveRuntimeConsumerEvidence(strategy, address) {
  if (!strategy?.repo || !address) {
    return null;
  }

  if (strategy.path && strategy.branch) {
    const repoPath = await resolveRepoPath({
      repo: strategy.repo,
      branch: strategy.branch,
      path: strategy.path,
    });
    const exactAddressMatch = Boolean(
      repoPath?.content && repoPath.content.toLowerCase().includes(String(address).toLowerCase())
    );
    return {
      repo: strategy.repo,
      path: strategy.path,
      branch: strategy.branch,
      resolvedCommit: repoPath?.resolvedCommit || null,
      href: repoPath?.href || null,
      exactAddressMatch,
      resolutionError: repoPath?.resolutionError || (exactAddressMatch ? null : "address literal not found in runtime consumer file"),
    };
  }

  const query = encodeURIComponent(`${address} repo:${strategy.repo}`);
  const response = await githubGet(`/search/code?q=${query}&per_page=10`);
  if (response.status !== 200) {
    return {
      repo: strategy.repo,
      path: null,
      branch: strategy.branch || null,
      resolvedCommit: null,
      exactAddressMatch: false,
      resolutionError: `code search returned ${response.status}`,
    };
  }

  const data = JSON.parse(response.data);
  for (const item of data.items || []) {
    const repoPath = await resolveRepoPath({
      repo: strategy.repo,
      branch: strategy.branch || item.repository?.default_branch || "master",
      path: item.path,
    });
    if (repoPath?.content?.toLowerCase().includes(String(address).toLowerCase())) {
      return {
        repo: strategy.repo,
        path: item.path,
        branch: repoPath.branch,
        resolvedCommit: repoPath.resolvedCommit,
        href: repoPath.href,
        exactAddressMatch: true,
        resolutionError: null,
      };
    }
  }

  return {
    repo: strategy.repo,
    path: null,
    branch: strategy.branch || null,
    resolvedCommit: null,
    exactAddressMatch: false,
    resolutionError: "address literal not found in runtime consumer repo",
  };
}

async function resolveDeployment(definition, governorAddresses) {
  const governorChain = getGovernorChain(governorAddresses, definition.chain);
  const artifact = definition.artifactAuthority ? await resolveDeploymentArtifact(definition.artifactAuthority) : null;
  let resolved;

  if (definition.addressStrategy.kind === "controller-root") {
    resolved = {
      address: CONTROLLERS[definition.chain],
      authorityKind: "controller-runtime",
      repo: null,
      path: null,
      refMode: "onchain-root",
      resolvedCommit: null,
      sourceKey: definition.canonicalName,
      version: null,
    };
  } else if (definition.addressStrategy.kind === "controller-slot") {
    const slot = await resolveControllerSlotAddress(definition.chain, definition.addressStrategy.controllerSlot);
    resolved = {
      address: slot.address,
      authorityKind: "controller-runtime",
      repo: null,
      path: null,
      refMode: "onchain-controller",
      resolvedCommit: null,
      sourceKey: definition.addressStrategy.controllerSlot,
      version: null,
      rpcFailures: slot.failures || [],
    };
  } else if (definition.addressStrategy.kind === "governor-manifest") {
    const authority = resolveAuthority({ kind: "governor-key", key: definition.addressStrategy.governorKey }, governorChain);
    resolved = {
      address: authority.address,
      authorityKind: authority.authorityKind,
      repo: GOVERNOR_REPO,
      path: GOVERNOR_FILE,
      refMode: "default_branch",
      resolvedCommit: governorAddresses._sha || null,
      sourceKey: authority.sourceKey,
      version: authority.version,
    };
  } else if (definition.addressStrategy.kind === "deployment-artifact") {
    const artifactResolution = artifact || await resolveDeploymentArtifact(definition.addressStrategy);
    resolved = {
      address: artifactResolution?.address || null,
      authorityKind: "deployment-artifact",
      repo: artifactResolution?.repo || definition.addressStrategy.repo || null,
      path: artifactResolution?.path || definition.addressStrategy.path || null,
      refMode: "resolved-commit",
      resolvedCommit: artifactResolution?.resolvedCommit || null,
      sourceKey: artifactResolution?.path || definition.addressStrategy.path || null,
      version: null,
    };
  } else if (definition.addressStrategy.kind === "repo-search") {
    resolved = await searchRepoForAddress(definition.addressStrategy);
  } else if (definition.addressStrategy.kind === "explorer-search-label") {
    resolved = await resolveExplorerSearchLabel(definition);
  } else if (definition.addressStrategy.kind === "verified-seed-address") {
    resolved = await resolveVerifiedSeedAddress(definition);
  } else {
    resolved = {
      address: null,
      authorityKind: "unknown",
      repo: null,
      path: null,
      refMode: null,
      resolvedCommit: null,
      sourceKey: null,
      version: null,
    };
  }

  let codeSource = await resolveCodeSource(definition.codeAuthority);
  if ((!codeSource || codeSource.exists === false) && artifact?.compilationPath) {
    codeSource = await resolveCodeSource({
      repo: artifact.repo,
      branch: artifact.branch,
      path: artifact.compilationPath,
    });
  }
  const runtimeConsumerEvidence = definition.runtimeEvidence && resolved.address
    ? await resolveRuntimeConsumerEvidence(definition.runtimeEvidence, resolved.address)
    : null;

  return {
    definition,
    governorChain,
    resolved,
    codeSource,
    artifact,
    runtimeConsumerEvidence,
  };
}

function getExplorerAddressBase(chain) {
  return chain === "arbitrumOne" ? EXPLORER_URLS.arbiscanAddress : EXPLORER_URLS.etherscanAddress;
}

function getBlockscoutBase(chain) {
  return chain === "arbitrumOne" ? EXPLORER_URLS.blockscoutArbitrum : EXPLORER_URLS.blockscoutEthereum;
}

function sortLogsByBlockAndIndex(left, right) {
  const blockCompare = Number.parseInt(left.blockNumber || "0x0", 16) - Number.parseInt(right.blockNumber || "0x0", 16);
  if (blockCompare !== 0) return blockCompare;
  return Number.parseInt(left.logIndex || "0x0", 16) - Number.parseInt(right.logIndex || "0x0", 16);
}

function decodeSetContractInfoLog(log) {
  const words = String(log?.data || "").replace(/^0x/, "").match(/.{1,64}/g) || [];
  if (words.length < 3) return null;
  const id = `0x${words[0]}`;
  const address = decodeAddressCallResult(`0x${words[1]}`);
  const gitCommitHash = decodeGitCommitHashWord(words[2]);
  if (!id || !address) return null;
  return {
    id: id.toLowerCase(),
    address,
    gitCommitHash,
    blockNumber: log.blockNumber || "0x0",
    logIndex: log.logIndex || "0x0",
    transactionHash: log.transactionHash || null,
  };
}

async function fetchControllerSetContractInfoLogs(chain) {
  const controllerAddress = CONTROLLERS[chain];
  if (!controllerAddress) {
    return { logs: [], rpcUrl: null, failures: [{ detail: `No controller configured for ${chain}` }] };
  }
  const rpcResult = await ethRpc(chain, "eth_getLogs", [{
    address: controllerAddress,
    fromBlock: "0x0",
    toBlock: "latest",
    topics: [SET_CONTRACT_INFO_TOPIC],
  }]);
  return {
    logs: Array.isArray(rpcResult.result) ? rpcResult.result : [],
    rpcUrl: rpcResult.rpcUrl,
    failures: rpcResult.failures || [],
  };
}

function buildHistoricalEntriesFromEventLogs(chainEntries, logs = []) {
  const decodedLogs = (Array.isArray(logs) ? logs : [])
    .map(decodeSetContractInfoLog)
    .filter(Boolean)
    .sort(sortLogsByBlockAndIndex);

  const logsById = new Map();
  decodedLogs.forEach((log) => {
    const key = String(log.id || "").toLowerCase();
    if (!logsById.has(key)) logsById.set(key, []);
    logsById.get(key).push(log);
  });

  const historicalEntries = [];
  chainEntries.forEach(({ definition, entry }) => {
    if (definition.proofChain !== "controller" || definition.chain !== "arbitrumOne") return;

    const isProxy = (entry.deploymentKind || entry.type) === "proxy";
    const slotId = isProxy
      ? entry.meta?.proxyTargetContractId || null
      : (entry.meta?.controllerSlot ? `0x${keccak256(entry.meta.controllerSlot)}` : null);
    if (!slotId) return;

    const slotName = isProxy
      ? entry.meta?.proxyTargetContractName || `${entry.canonicalName}Target`
      : entry.meta?.controllerSlot || entry.canonicalName;
    const currentAddress = isProxy ? (entry.meta?.proxyTarget || null) : entry.address;
    const seriesLogs = logsById.get(String(slotId).toLowerCase()) || [];
    if (!seriesLogs.length) return;

    const ordered = [];
    const seenAddresses = new Set();
    seriesLogs.forEach((log) => {
      const normalized = normalizeAddress(log.address);
      if (!normalized || seenAddresses.has(normalized)) return;
      seenAddresses.add(normalized);
      ordered.push(log);
    });

    const historicalSeries = ordered.filter((log) => !addressesMatch(log.address, currentAddress));
    historicalSeries.forEach((log, index) => {
      const resolvedCommit = log.gitCommitHash || entry.codeSource?.resolvedCommit || null;
      const codeSource = entry.codeSource
        ? {
            ...entry.codeSource,
            resolvedCommit,
            href: resolvedCommit
              ? `https://github.com/${entry.codeSource.repo}/blob/${resolvedCommit}/${entry.codeSource.path}`
              : entry.codeSource.href,
          }
        : null;

      historicalEntries.push({
        id: `${definition.id}.historical.${index + 1}`,
        name: definition.canonicalName,
        canonicalName: definition.canonicalName,
        address: log.address,
        type: isProxy ? "target" : (entry.type || entry.deploymentKind || "standalone"),
        deploymentKind: isProxy ? "target" : (entry.deploymentKind || entry.type || "standalone"),
        category: definition.category,
        lifecycle: "historical",
        chain: definition.chain,
        proofChain: "controller-history",
        version: `V${index + 1}`,
        addressAuthority: "controller-event-history",
        runtimeAuthority: "controller",
        repoSrc: codeSource?.repo && resolvedCommit ? `${codeSource.repo}@${resolvedCommit}` : null,
        contractCodeHref: codeSource?.href || entry.contractCodeHref || null,
        blockchainHref: `${getExplorerAddressBase(definition.chain)}${log.address}`,
        hasBytecode: null,
        sourceVerified: null,
        verified: null,
        verifiedAt: null,
        verifiedAtISO: null,
        isHistorical: true,
        meta: {
          statusLabel: "Historical",
          notes: `Historical controller entry reconstructed from SetContractInfo for ${slotName}.`,
          keccakHash: `0x${keccak256(slotName)}`,
          registrationState: "unknown",
          registeredInController: null,
          controllerSlot: slotName,
          controllerResolvedAddress: null,
          governorKey: slotName,
          currentImplementation: false,
          currentImplementationVersion: null,
          proxyTarget: null,
          repoIsPrivate: false,
          onchainGitCommitHash: log.gitCommitHash || null,
          historicalSlotId: slotId,
          historicalSlotName: slotName,
          historicalProxyAddress: isProxy ? entry.address : null,
        },
        addressSource: {
          kind: "controller-event-history",
          repo: codeSource?.repo || null,
          path: codeSource?.path || null,
          refMode: "onchain-event",
          resolvedCommit,
          key: slotName,
        },
        codeSource,
      });
    });
  });

  return historicalEntries;
}

function getExplorerProfile(chain) {
  const addressBaseUrl = getExplorerAddressBase(chain);
  return {
    family: chain === "arbitrumOne" ? "etherscan" : "etherscan",
    host: new URL(addressBaseUrl).host,
    addressBaseUrl,
  };
}

function buildBaseEntry(definition, resolution) {
  const address = resolution.resolved.address || null;
  const codeSource = resolution.codeSource;
  return {
    id: definition.id,
    name: definition.canonicalName,
    canonicalName: definition.canonicalName,
    address,
    type: definition.deploymentKind,
    deploymentKind: definition.deploymentKind,
    category: definition.category,
    lifecycle: definition.lifecycle,
    chain: definition.chain,
    proofChain: definition.proofChain,
    version: resolution.resolved.version || null,
    addressAuthority: resolution.resolved.authorityKind,
    runtimeAuthority: definition.runtimeAuthority?.kind || "explorer",
    repoSrc: codeSource?.repo && (codeSource.resolvedCommit || codeSource.branch)
      ? `${codeSource.repo}@${codeSource.resolvedCommit || codeSource.branch}`
      : null,
    contractCodeHref: codeSource?.href || null,
    blockchainHref: address ? `${getExplorerAddressBase(definition.chain)}${address}` : null,
    hasBytecode: null,
    sourceVerified: null,
    verified: null,
    verifiedAt: null,
    verifiedAtISO: null,
    isHistorical: definition.lifecycle === "historical",
    meta: {
      statusLabel: definition.lifecycle === "active" ? "Active" : definition.lifecycle.replaceAll("_", " "),
      notes: definition.notes || null,
      keccakHash: `0x${keccak256(definition.canonicalName)}`,
      registrationState: definition.runtimeAuthority?.kind === "controller" ? "unknown" : "not_applicable",
      registeredInController: definition.runtimeAuthority?.kind === "controller" ? null : false,
      controllerSlot: definition.runtimeAuthority?.controllerSlot || null,
      controllerResolvedAddress: null,
      governorKey: resolution.resolved.sourceKey || null,
      currentImplementation: false,
      currentImplementationVersion: null,
      proxyTarget: null,
      repoIsPrivate: false,
      creatorAddress: null,
      blockscoutLabel: null,
      sourceResolvedCommit: codeSource?.resolvedCommit || null,
      sourceResolutionError: codeSource?.resolutionError || null,
      deploymentArtifactAddress: resolution.artifact?.address || null,
      deploymentArtifactRepo: resolution.artifact?.repo || null,
      deploymentArtifactPath: resolution.artifact?.path || null,
      deploymentArtifactResolvedCommit: resolution.artifact?.resolvedCommit || null,
      deploymentArtifactMatchesAddress: resolution.artifact?.address && address
        ? addressesMatch(resolution.artifact.address, address)
        : null,
      runtimeConsumerRepo: resolution.runtimeConsumerEvidence?.repo || null,
      runtimeConsumerPath: resolution.runtimeConsumerEvidence?.path || null,
      runtimeConsumerResolvedCommit: resolution.runtimeConsumerEvidence?.resolvedCommit || null,
      runtimeConsumerExactAddressMatch: resolution.runtimeConsumerEvidence?.exactAddressMatch ?? null,
      runtimeConsumerRequired: Boolean(definition.requiredRuntimeEvidence),
    },
    addressSource: {
      kind: resolution.resolved.authorityKind || "unknown",
      repo: resolution.resolved.repo || null,
      path: resolution.resolved.path || null,
      refMode: resolution.resolved.refMode || null,
      resolvedCommit: resolution.resolved.resolvedCommit || null,
      key: resolution.resolved.sourceKey || null,
    },
    codeSource: codeSource
      ? {
          repo: codeSource.repo,
          branch: codeSource.branch,
          path: codeSource.path,
          href: codeSource.href,
          isPrivate: false,
          resolvedCommit: codeSource.resolvedCommit || null,
          exists: codeSource.exists !== false,
          resolutionError: codeSource.resolutionError || null,
        }
      : null,
  };
}

async function verifyAddresses(entries, chain, skipVerify = false) {
  if (skipVerify) return entries;
  const baseUrl = chain === "arbitrumOne" ? "https://api.arbiscan.io" : "https://api.etherscan.io";
  const apiKey = chain === "arbitrumOne" ? ARBISCAN_API_KEY : ETHERSCAN_API_KEY;
  const now = new Date();
  const nowFormatted = now.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const nowISO = now.toISOString();
  const results = [];

  for (const entry of entries) {
    if (!entry.address) {
      results.push(entry);
      continue;
    }

    let hasBytecode = null;
    try {
      let url = `${baseUrl}/api?module=proxy&action=eth_getCode&address=${entry.address}&tag=latest`;
      if (apiKey) url += `&apikey=${apiKey}`;
      const response = await httpsGet(url);
      const data = JSON.parse(response.data);
      hasBytecode = Boolean(data.result && data.result !== "0x" && data.result.length > 2);
    } catch (_error) {
      hasBytecode = false;
    }

    results.push({
      ...entry,
      hasBytecode,
      verifiedAt: nowFormatted,
      verifiedAtISO: nowISO,
    });
    await sleep(apiKey ? 100 : 250);
  }

  return results;
}

async function enrichFromBlockscout(entry) {
  const addressResponse = await httpsGet(`${getBlockscoutBase(entry.chain)}/api/v2/addresses/${entry.address}`);
  if (addressResponse.status !== 200) {
    throw new Error(`Blockscout address lookup failed: ${addressResponse.status}`);
  }
  const data = JSON.parse(addressResponse.data);
  return {
    creatorAddress: data.creator_address_hash || null,
    blockscoutLabel: data.name || null,
    bsVerified: data.is_verified,
    isContract: data.is_contract,
    balance: data.coin_balance || null,
    compilerVersion: data.compiler_version || null,
    isProxy: data.proxy_type ? true : null,
  };
}

async function enrichMetadata(entries, skipVerify = false) {
  const results = [];
  const warnings = [];

  for (const entry of entries) {
    const next = { ...entry, meta: { ...(entry.meta || {}) } };
    if (!entry.address) {
      results.push(next);
      continue;
    }

    if (!skipVerify) {
      try {
        const blockscoutMeta = await enrichFromBlockscout(entry);
        Object.entries(blockscoutMeta).forEach(([key, value]) => {
          if (value != null) next.meta[key] = value;
        });
        next.sourceVerified = typeof blockscoutMeta.bsVerified === "boolean" ? blockscoutMeta.bsVerified : next.sourceVerified;
      } catch (error) {
        warnings.push({
          failureClass: FAILURE_CLASSES.truth,
          endpoint: "blockscout-enrichment",
          chain: entry.chain,
          contract: entry.name,
          detail: error.message,
        });
      }
    }

    if (entry.runtimeAuthority === "controller" && entry.meta.controllerSlot) {
      const controllerResolution = await resolveControllerSlotAddress(entry.chain, entry.meta.controllerSlot);
      next.meta.controllerResolvedAddress = controllerResolution.address;
      next.meta.registrationState = controllerResolution.address && addressesMatch(controllerResolution.address, entry.address)
        ? "registered"
        : "not_registered";
      next.meta.registeredInController = next.meta.registrationState === "registered";
    } else {
      next.meta.registrationState = "not_applicable";
      next.meta.registeredInController = false;
    }

    if (entry.deploymentKind === "proxy") {
      const proxyRuntime = await resolveProxyRuntimeVerification(entry.chain, entry.address, entry.canonicalName);
      next.meta.proxyControllerAddress = proxyRuntime.controllerAddress;
      next.meta.proxyControllerMatchesExpected = proxyRuntime.controllerMatchesExpected;
      next.meta.proxyTargetContractId = proxyRuntime.targetContractId;
      next.meta.proxyTargetContractName = proxyRuntime.targetContractName;
      next.meta.proxyTarget = proxyRuntime.implementationAddress;
      next.meta.proxyImplementationSource = proxyRuntime.implementationSource;
    }

    next.verified = next.sourceVerified;
    results.push(next);
  }

  results._warnings = warnings;
  return results;
}

function buildImplementationEntries(entries, governorAddresses) {
  const implementations = [];
  for (const entry of entries) {
    const strategy = entry.definition?.currentImplementationStrategy;
    if (!strategy) continue;
    let implementationAddress = null;
    let implementationVersion = null;
    let implementationSource = null;
    if (strategy.kind === "proxy-meta") {
      implementationAddress = entry.entry.meta.proxyTarget || null;
      implementationSource = entry.entry.meta.proxyImplementationSource || "proxy-runtime";
    } else {
      const authority = resolveAuthority(strategy, getGovernorChain(governorAddresses, entry.definition.chain));
      implementationAddress = authority.address;
      implementationVersion = authority.version || null;
      implementationSource = authority.authorityKind;
    }
    if (!implementationAddress) continue;
    implementations.push({
      id: `${entry.definition.id}.implementation`,
      name: entry.definition.canonicalName,
      canonicalName: entry.definition.canonicalName,
      address: implementationAddress,
      type: "target",
      deploymentKind: "target",
      category: entry.definition.category,
      lifecycle: "historical",
      chain: entry.definition.chain,
      version: implementationVersion,
      addressAuthority: implementationSource,
      runtimeAuthority: "explorer",
      repoSrc: entry.entry.repoSrc,
      contractCodeHref: entry.entry.contractCodeHref,
      blockchainHref: `${getExplorerAddressBase(entry.definition.chain)}${implementationAddress}`,
      hasBytecode: null,
      sourceVerified: null,
      verified: null,
      verifiedAt: null,
      verifiedAtISO: null,
      isHistorical: true,
      meta: {
        statusLabel: "Implementation target",
        notes: "Implementation behind the published proxy address.",
        keccakHash: `0x${keccak256(entry.definition.canonicalName)}`,
        registrationState: "not_applicable",
        registeredInController: false,
        controllerSlot: entry.definition.runtimeAuthority?.controllerSlot || null,
        controllerResolvedAddress: null,
        governorKey: strategy.key || null,
        currentImplementation: true,
        currentImplementationVersion: implementationVersion,
        proxyAddress: entry.entry.address,
        proxyTarget: implementationAddress,
        proxyImplementationSource: implementationSource,
        expectedProxyImplementationAddress: implementationAddress,
        expectedProxyImplementationSource: implementationSource,
        proxyImplementationMatchesExpected: true,
        repoIsPrivate: false,
      },
      addressSource: {
        kind: implementationSource || "proxy-runtime",
        repo: GOVERNOR_REPO,
        path: GOVERNOR_FILE,
        refMode: implementationSource === "proxy-runtime" ? "runtime" : "default_branch",
        resolvedCommit: governorAddresses._sha || null,
        key: strategy.key || null,
      },
      codeSource: entry.entry.codeSource,
    });
  }
  return implementations;
}

function deriveControllerRegistered(registrationState, legacyValue) {
  if (registrationState === "registered") return true;
  if (registrationState === "not_registered") return false;
  if (registrationState === "not_applicable") return null;
  if (typeof legacyValue === "boolean") return legacyValue;
  return null;
}

function buildVerificationStatus(entry, controllerRegistered, proxyVerification) {
  const bridgeArtifactMatch = entry.meta?.deploymentArtifactMatchesAddress;
  const runtimeConsumerMatch = entry.meta?.runtimeConsumerExactAddressMatch;
  const runtimeConsumerRequired = entry.meta?.runtimeConsumerRequired;

  if (entry.runtimeAuthority === "controller" && controllerRegistered === true && entry.hasBytecode === true) {
    return "strong";
  }
  if (proxyVerification.applicable && proxyVerification.implementationMatchesExpected === true && entry.hasBytecode === true) {
    return "strong";
  }
  if (entry.proofChain === "bridge" && bridgeArtifactMatch === true && entry.hasBytecode === true) {
    return "strong";
  }
  if (runtimeConsumerRequired && runtimeConsumerMatch === true && entry.hasBytecode === true) {
    return "strong";
  }
  if ((entry.hasBytecode === true || entry.sourceVerified === true) && entry.addressSource?.kind && entry.addressSource.kind !== "unknown") {
    return "partial";
  }
  if (entry.addressSource?.kind && entry.addressSource.kind !== "unknown") {
    return "partial";
  }
  return "unverified";
}

function decorateEntryForOutput(entry) {
  const meta = { ...(entry.meta || {}) };
  const controllerRegistered = deriveControllerRegistered(meta.registrationState || null, meta.registeredInController);
  meta.controllerRegistered = controllerRegistered;

  const isProxyEntry = (entry.deploymentKind || entry.type) === "proxy";
  const isImplementationEntry = Boolean(meta.currentImplementation);
  const proxyAddress = isImplementationEntry ? meta.proxyAddress || null : (isProxyEntry ? entry.address : null);
  const implementationAddress = isImplementationEntry ? entry.address || null : meta.proxyTarget || null;

  const proxyVerification = {
    applicable: Boolean(isProxyEntry || isImplementationEntry || meta.proxyTarget || meta.proxyAddress),
    proxyAddress,
    controllerAddress: meta.proxyControllerAddress || null,
    controllerMatchesExpected: typeof meta.proxyControllerMatchesExpected === "boolean" ? meta.proxyControllerMatchesExpected : null,
    targetContractId: meta.proxyTargetContractId || null,
    targetContractName: meta.proxyTargetContractName || null,
    implementationAddress,
    implementationName: isImplementationEntry ? entry.canonicalName : meta.proxyTargetName || null,
    implementationVersion: meta.currentImplementationVersion || null,
    implementationSource: meta.proxyImplementationSource || null,
    expectedImplementationAddress: meta.expectedProxyImplementationAddress || null,
    expectedImplementationSource: meta.expectedProxyImplementationSource || null,
    implementationMatchesExpected: typeof meta.proxyImplementationMatchesExpected === "boolean"
      ? meta.proxyImplementationMatchesExpected
      : (meta.expectedProxyImplementationAddress && implementationAddress
        ? addressesMatch(meta.expectedProxyImplementationAddress, implementationAddress)
        : null),
    controllerCurrentProxyMatches: proxyAddress && meta.controllerResolvedAddress
      ? addressesMatch(proxyAddress, meta.controllerResolvedAddress)
      : null,
  };

  return {
    ...entry,
    controllerRegistered,
    verification: {
      status: buildVerificationStatus(entry, controllerRegistered, proxyVerification),
      lastVerifiedAt: entry.verifiedAtISO || null,
      explorer: {
        ...getExplorerProfile(entry.chain),
        addressUrl: entry.blockchainHref || null,
      },
      controller: {
        applicable: entry.runtimeAuthority === "controller",
        controllerAddress: entry.runtimeAuthority === "controller" ? CONTROLLERS[entry.chain] || null : null,
        controllerSlot: meta.controllerSlot || null,
        registrationState: meta.registrationState || null,
        controllerRegistered,
        resolvedAddress: meta.controllerResolvedAddress || null,
        currentAddressMatches: meta.controllerResolvedAddress ? addressesMatch(entry.address, meta.controllerResolvedAddress) : null,
      },
      bridge: {
        applicable: entry.proofChain === "bridge",
        deploymentArtifactAddress: meta.deploymentArtifactAddress || null,
        deploymentArtifactRepo: meta.deploymentArtifactRepo || null,
        deploymentArtifactPath: meta.deploymentArtifactPath || null,
        deploymentArtifactResolvedCommit: meta.deploymentArtifactResolvedCommit || null,
        deploymentArtifactMatchesAddress: typeof meta.deploymentArtifactMatchesAddress === "boolean"
          ? meta.deploymentArtifactMatchesAddress
          : null,
      },
      runtimeConsumer: {
        applicable: Boolean(meta.runtimeConsumerRepo || meta.runtimeConsumerRequired),
        required: Boolean(meta.runtimeConsumerRequired),
        repo: meta.runtimeConsumerRepo || null,
        path: meta.runtimeConsumerPath || null,
        resolvedCommit: meta.runtimeConsumerResolvedCommit || null,
        exactAddressMatch: typeof meta.runtimeConsumerExactAddressMatch === "boolean"
          ? meta.runtimeConsumerExactAddressMatch
          : null,
      },
      proxy: proxyVerification,
    },
    meta,
  };
}

function buildChainPayload(entries, currentImplementations = [], historical = [], historicalSeriesOrGovernorSha = {}, governorSha = null) {
  const historicalSeries = typeof historicalSeriesOrGovernorSha === "string" || historicalSeriesOrGovernorSha == null
    ? {}
    : historicalSeriesOrGovernorSha;
  const resolvedGovernorSha = typeof historicalSeriesOrGovernorSha === "string" && governorSha == null
    ? historicalSeriesOrGovernorSha
    : governorSha;
  const decorate = (item) => {
    const entry = decorateEntryForOutput(item);
    if (entry.addressSource?.kind === "governor-manifest" && !entry.addressSource.resolvedCommit) {
      entry.addressSource.resolvedCommit = resolvedGovernorSha || null;
    }
    return entry;
  };
  const historicalEntries = Array.isArray(historical) ? historical : [];
  const inventory = [
    ...entries.map(decorate),
    ...currentImplementations.map(decorate),
    ...historicalEntries.map(decorate),
  ];
  const sortByCategoryThenName = (left, right) =>
    String(left.category || "").localeCompare(String(right.category || ""))
    || String(left.name || "").localeCompare(String(right.name || ""))
    || String(left.address || "").localeCompare(String(right.address || ""));
  const active = inventory.filter((entry) => entry.lifecycle === "active").sort(sortByCategoryThenName);
  const paused = inventory.filter((entry) => entry.lifecycle === "paused").sort(sortByCategoryThenName);
  const migrationResidual = inventory.filter((entry) => entry.lifecycle === "migration_residual").sort(sortByCategoryThenName);
  const legacyOperational = inventory.filter((entry) => entry.lifecycle === "legacy_operational").sort(sortByCategoryThenName);
  return {
    inventory,
    current: active,
    active,
    paused,
    migration_residual: migrationResidual,
    legacy_operational: legacyOperational,
    historical: historicalEntries.map(decorate).sort(sortByCategoryThenName),
    historicalSeries,
    currentImplementations: currentImplementations.map(decorate).sort(sortByCategoryThenName),
  };
}

function validateExplorerLink(entry) {
  if (!entry.blockchainHref) return null;
  const expectedHost = entry.chain === "arbitrumOne" ? "arbiscan.io" : "etherscan.io";
  const match = entry.blockchainHref.match(/^https:\/\/([^/]+)\/address\/(0x[a-fA-F0-9]{40})$/);
  if (!match) {
    return `${entry.name} has malformed explorer link ${entry.blockchainHref}`;
  }
  if (match[1] !== expectedHost) {
    return `${entry.name} uses ${match[1]} instead of ${expectedHost}`;
  }
  if (!addressesMatch(match[2], entry.address)) {
    return `${entry.name} explorer link address does not match entry address`;
  }
  return null;
}

function summarizeVerification(chainPayload) {
  const published = [
    ...chainPayload.active,
    ...chainPayload.paused,
    ...chainPayload.migration_residual,
    ...chainPayload.legacy_operational,
  ];
  return {
    total: published.length,
    bytecode: published.filter((entry) => entry.hasBytecode === true).length,
    verified: published.filter((entry) => entry.sourceVerified === true).length,
  };
}

function writeHealthChecks(checks, dryRun = false) {
  if (dryRun) return;
  fs.mkdirSync(path.dirname(HEALTH_CHECK_PATH), { recursive: true });
  fs.writeFileSync(HEALTH_CHECK_PATH, JSON.stringify({
    timestamp: new Date().toISOString(),
    checks,
  }, null, 2));
}

function normalizeComparableJsonPayload(value) {
  const clone = JSON.parse(JSON.stringify(value));
  const scrub = (node, parentKey = null) => {
    if (!node || typeof node !== "object") return;

    if (Array.isArray(node)) {
      node.forEach((item) => scrub(item, parentKey));
      return;
    }

    Object.entries(node).forEach(([key, child]) => {
      if (key === "_generated" && child && typeof child === "object" && child.at) {
        child.at = "__VOLATILE_GENERATED_AT__";
      }
      if (key === "meta" && child && typeof child === "object" && child.lastUpdated) {
        child.lastUpdated = "__VOLATILE_LAST_UPDATED__";
      }
      if (key === "verifiedAt" || key === "verifiedAtISO" || key === "lastVerifiedAt") {
        node[key] = "__VOLATILE_VERIFIED_AT__";
        return;
      }
      scrub(child, key);
    });
  };

  scrub(clone);
  if (clone._generated?.at) {
    clone._generated.at = "__VOLATILE_GENERATED_AT__";
  }
  if (clone.meta?.lastUpdated) {
    clone.meta.lastUpdated = "__VOLATILE_LAST_UPDATED__";
  }
  return JSON.stringify(clone, null, 2);
}

function normalizeComparableJsx(text) {
  return String(text)
    .replace(/^ \* Last updated: .+$/m, " * Last updated: __VOLATILE_LAST_UPDATED__")
    .replace(/"lastUpdated": "[^"]+"/g, '"lastUpdated": "__VOLATILE_LAST_UPDATED__"')
    .replace(/"verifiedAtISO": "[^"]+"/g, '"verifiedAtISO": "__VOLATILE_VERIFIED_AT__"')
    .replace(/"verifiedAt": "[^"]+"/g, '"verifiedAt": "__VOLATILE_VERIFIED_AT__"')
    .replace(/"lastVerifiedAt": "[^"]+"/g, '"lastVerifiedAt": "__VOLATILE_VERIFIED_AT__"');
}

function renderGeneratedDataModule(exportName, payload, metadata = {}) {
  return [
    "/**",
    " * Auto-generated by fetch-contract-addresses.js",
    ` * Source: ${GOVERNOR_REPO} (${metadata.governorSha || "unknown"})`,
    ` * Last updated: ${metadata.generatedAt || new Date().toISOString()}`,
    " * DO NOT EDIT MANUALLY",
    " */",
    "",
    `export const ${exportName} = ${JSON.stringify(payload, null, 2)};`,
    "",
    `export default ${exportName};`,
    "",
  ].join("\n");
}

function assertCanonicalOutputsMatch(expectedFiles) {
  const drift = [];

  for (const [filePath, descriptor] of Object.entries(expectedFiles)) {
    if (!fs.existsSync(filePath)) {
      drift.push(`${path.relative(REPO_ROOT, filePath)} is missing`);
      continue;
    }

    const current = fs.readFileSync(filePath, "utf8");
    const normalizedCurrent = descriptor.kind === "json"
      ? normalizeComparableJsonPayload(JSON.parse(current))
      : normalizeComparableJsx(current);
    const normalizedExpected = descriptor.kind === "json"
      ? normalizeComparableJsonPayload(descriptor.value)
      : normalizeComparableJsx(descriptor.value);

    if (normalizedCurrent !== normalizedExpected) {
      drift.push(`${path.relative(REPO_ROOT, filePath)} is out of date`);
    }
  }

  if (drift.length) {
    const error = new Error(`Contracts output drift detected:\n- ${drift.join("\n- ")}`);
    error.failures = drift.map((detail) => ({
      failureClass: FAILURE_CLASSES.output,
      endpoint: "output-check",
      chain: "multi",
      contract: "contracts-pipeline",
      detail,
    }));
    throw error;
  }
}

function buildDataArtifacts(data, blockchainPageData, governorSha, catalog) {
  const now = new Date();
  const nowISO = now.toISOString();
  const nowFormatted = now.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  const arbSummary = summarizeVerification(data.arbitrumOne);
  const ethSummary = summarizeVerification(data.ethereumMainnet);
  const payload = {
    arbitrumOne: data.arbitrumOne,
    ethereumMainnet: data.ethereumMainnet,
    historical: {
      arbitrumOne: buildRootHistoricalChainPayload(data.arbitrumOne?.historicalSeries || {}),
      ethereumMainnet: buildRootHistoricalChainPayload(data.ethereumMainnet?.historicalSeries || {}),
    },
    meta: {
      lastUpdated: nowISO,
      lastVerified: nowFormatted,
      sourceRepo: GOVERNOR_REPO,
      sourceCommit: governorSha,
      verificationSummary: `${arbSummary.verified}/${arbSummary.total} Arbitrum source-verified, ${ethSummary.verified}/${ethSummary.total} Mainnet source-verified`,
      bytecodeSummary: `${arbSummary.bytecode}/${arbSummary.total} Arbitrum with bytecode, ${ethSummary.bytecode}/${ethSummary.total} Mainnet with bytecode`,
      explorerUrls: EXPLORER_URLS,
      rpcUrls: DEFAULT_RPC_URLS,
      verificationModel: "contracts-proof-v2",
      watchedRepos: catalog._meta.watchedRepos,
      latestResolutionPolicy: catalog._meta.latestResolutionPolicy,
      cadence: CONTRACTS_PIPELINE_CADENCE,
    },
  };
  const blockchainPayload = {
    ...blockchainPageData,
    meta: {
      ...(blockchainPageData?.meta || {}),
      lastUpdated: nowISO,
      lastVerified: nowFormatted,
      verificationModel: "contracts-proof-v2",
      sourceCommit: governorSha,
      explorerUrls: EXPLORER_URLS,
    },
  };
  const jsonPayload = {
    _generated: {
      by: "fetch-contract-addresses.js",
      at: nowISO,
      source: `${GOVERNOR_REPO} (${governorSha})`,
    },
    ...payload,
  };
  const blockchainJsonPayload = {
    _generated: {
      by: "fetch-contract-addresses.js",
      at: nowISO,
      source: `${GOVERNOR_REPO} (${governorSha})`,
    },
    ...blockchainPayload,
  };
  const contractAddressesJsx = renderGeneratedDataModule("contractAddresses", payload, {
    generatedAt: nowISO,
    governorSha,
  });
  const blockchainContractsPageDataJsx = renderGeneratedDataModule("blockchainContractsPageData", blockchainPayload, {
    generatedAt: nowISO,
    governorSha,
  });
  return {
    contractAddresses: payload,
    blockchainContractsPageData: blockchainPayload,
    files: {
      [OUTPUT_JSON_PATH]: {
        kind: "json",
        value: jsonPayload,
      },
      [OUTPUT_JSX_PATH]: {
        kind: "jsx",
        value: contractAddressesJsx,
      },
      [BLOCKCHAIN_PAGE_DATA_JSON_PATH]: {
        kind: "json",
        value: blockchainJsonPayload,
      },
      [BLOCKCHAIN_PAGE_DATA_JSX_PATH]: {
        kind: "jsx",
        value: blockchainContractsPageDataJsx,
      },
    },
  };
}

function writeDataFiles(data, blockchainPageData, governorSha, catalog, options = {}) {
  const { dryRun = false, check = false } = options;
  const artifacts = buildDataArtifacts(data, blockchainPageData, governorSha, catalog);

  if (check) {
    assertCanonicalOutputsMatch(artifacts.files);
    return {
      contractAddresses: artifacts.contractAddresses,
      blockchainContractsPageData: artifacts.blockchainContractsPageData,
    };
  }

  if (dryRun) {
    return {
      contractAddresses: artifacts.contractAddresses,
      blockchainContractsPageData: artifacts.blockchainContractsPageData,
    };
  }

  fs.mkdirSync(path.dirname(OUTPUT_JSON_PATH), { recursive: true });
  fs.mkdirSync(path.dirname(OUTPUT_JSX_PATH), { recursive: true });
  fs.mkdirSync(path.dirname(BLOCKCHAIN_PAGE_DATA_JSON_PATH), { recursive: true });
  fs.mkdirSync(path.dirname(BLOCKCHAIN_PAGE_DATA_JSX_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(artifacts.files[OUTPUT_JSON_PATH].value, null, 2));
  fs.writeFileSync(OUTPUT_JSX_PATH, artifacts.files[OUTPUT_JSX_PATH].value);
  fs.writeFileSync(
    BLOCKCHAIN_PAGE_DATA_JSON_PATH,
    JSON.stringify(artifacts.files[BLOCKCHAIN_PAGE_DATA_JSON_PATH].value, null, 2),
  );
  fs.writeFileSync(BLOCKCHAIN_PAGE_DATA_JSX_PATH, artifacts.files[BLOCKCHAIN_PAGE_DATA_JSX_PATH].value);

  return {
    contractAddresses: artifacts.contractAddresses,
    blockchainContractsPageData: artifacts.blockchainContractsPageData,
  };
}

function buildValidationReport({
  catalog,
  payload,
  branchDiffs,
  resolutions,
}) {
  const failures = [];
  const warnings = [];
  const publishedEntries = [
    ...payload.arbitrumOne.inventory,
    ...payload.ethereumMainnet.inventory,
  ];

  for (const resolution of resolutions) {
    const entry = resolution.entry;
    const deploymentResolution = resolution.resolution || {};
    if (!entry.address) {
      failures.push({
        failureClass: FAILURE_CLASSES.truth,
        endpoint: "address-resolution",
        chain: entry.chain,
        contract: entry.name,
        detail: `${resolution.definition.id} did not resolve a publishable address`,
      });
    }
    if (!PUBLISHED_LIFECYCLES.has(entry.lifecycle)) {
      failures.push({
        failureClass: FAILURE_CLASSES.output,
        endpoint: "lifecycle-classification",
        chain: entry.chain,
        contract: entry.name,
        detail: `${entry.lifecycle} is not a supported lifecycle`,
      });
    }
    if (entry.codeSource && !entry.codeSource.resolvedCommit) {
      failures.push({
        failureClass: FAILURE_CLASSES.provenance,
        endpoint: "code-provenance",
        chain: entry.chain,
        contract: entry.name,
        detail: `Missing commit-specific provenance for ${entry.codeSource.repo}:${entry.codeSource.path}`,
      });
    }
    if (entry.codeSource && entry.codeSource.exists === false) {
      failures.push({
        failureClass: FAILURE_CLASSES.provenance,
        endpoint: "code-provenance",
        chain: entry.chain,
        contract: entry.name,
        detail: `Resolved source path does not exist: ${entry.codeSource.repo}:${entry.codeSource.path}`,
      });
    }
    if (resolution.definition.artifactAuthority && deploymentResolution.artifact?.address && entry.address
      && !addressesMatch(deploymentResolution.artifact.address, entry.address)) {
      failures.push({
        failureClass: FAILURE_CLASSES.truth,
        endpoint: "deployment-artifact",
        chain: entry.chain,
        contract: entry.name,
        detail: "Deployment artifact address does not match the published row",
      });
    }
    if (resolution.definition.requiredRuntimeEvidence && deploymentResolution.runtimeConsumerEvidence?.exactAddressMatch !== true) {
      failures.push({
        failureClass: FAILURE_CLASSES.truth,
        endpoint: "runtime-consumer",
        chain: entry.chain,
        contract: entry.name,
        detail: "Required runtime consumer evidence did not confirm the published address",
      });
    }
  }

  const activeTargets = publishedEntries.filter((entry) => entry.lifecycle === "active" && (entry.type || entry.deploymentKind) === "target");
  if (activeTargets.length) {
    failures.push({
      failureClass: FAILURE_CLASSES.output,
      endpoint: "active-surface-leak",
      chain: "multi",
      contract: "active-output",
      detail: `Found ${activeTargets.length} target rows in the active publish surface`,
    });
  }

  for (const entry of publishedEntries) {
    if (ACTIVE_LIFECYCLES.has(entry.lifecycle) && entry.runtimeAuthority === "controller" && entry.verification?.controller?.controllerRegistered !== true) {
      failures.push({
        failureClass: FAILURE_CLASSES.truth,
        endpoint: "controller-reconciliation",
        chain: entry.chain,
        contract: entry.name,
        detail: `Controller current address does not match the published row`,
      });
    }
    if ((entry.type || entry.deploymentKind) === "proxy" && entry.lifecycle === "active" && !entry.verification?.proxy?.implementationAddress) {
      failures.push({
        failureClass: FAILURE_CLASSES.truth,
        endpoint: "proxy-runtime",
        chain: entry.chain,
        contract: entry.name,
        detail: "Active proxy row is missing a runtime-resolved implementation address",
      });
    }
    const explorerIssue = validateExplorerLink(entry);
    if (explorerIssue) {
      failures.push({
        failureClass: FAILURE_CLASSES.link,
        endpoint: "explorer-link",
        chain: entry.chain,
        contract: entry.name,
        detail: explorerIssue,
      });
    }
  }

  for (const diff of branchDiffs) {
    const branchFailure = {
      failureClass: FAILURE_CLASSES.branch,
      endpoint: diff.type,
      chain: null,
      contract: diff.repo,
      detail: diff.detail,
    };
    if (BLOCKING_BRANCH_DIFF_TYPES.includes(diff.type)) {
      failures.push(branchFailure);
    } else {
      warnings.push(branchFailure);
    }
  }

  if (JSON.stringify(payload).includes("snippets/data/changelogs/contractAddressesData.jsx")) {
    failures.push({
      failureClass: FAILURE_CLASSES.output,
      endpoint: "historical-cutover",
      chain: "multi",
      contract: "historical-series",
      detail: "Generated contracts payload still references the archived historical changelog path",
    });
  }

  return { failures, warnings, catalog, payload };
}

async function runContractsPipeline(options = {}) {
  const { dryRun = false, check = false, skipVerify = false } = options;
  const noWrite = dryRun || check;
  const catalog = buildContractProofCatalog();
  const { addresses, sha } = await fetchGovernorAddresses();
  addresses._sha = sha;
  const previousPayload = loadPreviousGeneratedContracts();

  const previousBranchState = loadBranchWatchState();
  const nextBranchState = {
    generatedAt: new Date().toISOString(),
    repos: [],
  };
  for (const repo of WATCHED_REPOS) {
    nextBranchState.repos.push(await fetchRepoInventory(repo));
  }
  const branchDiffs = diffBranchWatchState(previousBranchState, nextBranchState);

  const resolutions = [];
  for (const definition of catalog.deployments) {
    const resolution = await resolveDeployment(definition, addresses);
    const entry = buildBaseEntry(definition, resolution);
    resolutions.push({ definition, entry, resolution });
  }

  const byChain = {
    arbitrumOne: resolutions.filter((item) => item.entry.chain === "arbitrumOne"),
    ethereumMainnet: resolutions.filter((item) => item.entry.chain === "ethereumMainnet"),
  };

  const arbVerified = await verifyAddresses(byChain.arbitrumOne.map((item) => item.entry), "arbitrumOne", skipVerify);
  const ethVerified = await verifyAddresses(byChain.ethereumMainnet.map((item) => item.entry), "ethereumMainnet", skipVerify);
  byChain.arbitrumOne = byChain.arbitrumOne.map((item, index) => ({ ...item, entry: arbVerified[index] }));
  byChain.ethereumMainnet = byChain.ethereumMainnet.map((item, index) => ({ ...item, entry: ethVerified[index] }));

  const arbEnriched = await enrichMetadata(byChain.arbitrumOne.map((item) => item.entry), skipVerify);
  const ethEnriched = await enrichMetadata(byChain.ethereumMainnet.map((item) => item.entry), skipVerify);
  byChain.arbitrumOne = byChain.arbitrumOne.map((item, index) => ({ ...item, entry: arbEnriched[index] }));
  byChain.ethereumMainnet = byChain.ethereumMainnet.map((item, index) => ({ ...item, entry: ethEnriched[index] }));

  const arbImplementations = await verifyAddresses(
    buildImplementationEntries(byChain.arbitrumOne, addresses),
    "arbitrumOne",
    skipVerify
  );
  const ethImplementations = await verifyAddresses(
    buildImplementationEntries(byChain.ethereumMainnet, addresses),
    "ethereumMainnet",
    skipVerify
  );
  const arbHistoricalLogResult = await fetchControllerSetContractInfoLogs("arbitrumOne");
  const arbHistoricalSeedEntries = buildHistoricalEntriesFromEventLogs(byChain.arbitrumOne, arbHistoricalLogResult.logs);
  const supplementalFailures = [];
  if (arbHistoricalLogResult.failures?.length && arbHistoricalSeedEntries.length === 0) {
    supplementalFailures.push({
      failureClass: FAILURE_CLASSES.rpc,
      endpoint: "controller-history",
      chain: "arbitrumOne",
      contract: "controller-history",
      detail: "Failed to recover authoritative Arbitrum controller event history",
    });
  }
  const arbHistoricalArtifacts = buildHistoricalArtifacts({
    chain: "arbitrumOne",
    entries: arbEnriched,
    currentImplementations: arbImplementations,
    previousChainPayload: previousPayload?.arbitrumOne || null,
    seededHistoricalEntries: arbHistoricalSeedEntries,
    resetSeededGroups: arbHistoricalSeedEntries.length > 0,
  });
  const ethHistoricalArtifacts = buildHistoricalArtifacts({
    chain: "ethereumMainnet",
    entries: ethEnriched,
    currentImplementations: ethImplementations,
    previousChainPayload: previousPayload?.ethereumMainnet || null,
    seededHistoricalEntries: ethEnriched.filter((entry) => entry.lifecycle === "historical"),
    resetSeededGroups: ethEnriched.some((entry) => entry.lifecycle === "historical"),
  });

  const payload = {
    arbitrumOne: buildChainPayload(arbEnriched, arbImplementations, arbHistoricalArtifacts.historical, arbHistoricalArtifacts.historicalSeries, sha),
    ethereumMainnet: buildChainPayload(ethEnriched, ethImplementations, ethHistoricalArtifacts.historical, ethHistoricalArtifacts.historicalSeries, sha),
  };
  const blockchainPageData = await buildBlockchainContractsPageData({
    payload,
    resolutions: [...byChain.arbitrumOne, ...byChain.ethereumMainnet],
    meta: {
      verificationModel: "contracts-proof-v2",
      sourceCommit: sha,
      explorerUrls: EXPLORER_URLS,
    },
  });

  const validation = buildValidationReport({
    catalog,
    payload,
    branchDiffs,
    resolutions: [...byChain.arbitrumOne, ...byChain.ethereumMainnet],
  });
  const supplementalWarnings = [];
  const allFailures = [...validation.failures, ...supplementalFailures];
  const allWarnings = [...validation.warnings, ...supplementalWarnings];
  const checks = [
    ...allFailures.map((failure) => ({
      endpoint: failure.endpoint,
      status: "FAIL",
      detail: failure.detail,
      affects: failure.contract || failure.chain || "contracts-pipeline",
    })),
    ...allWarnings.map((warning) => ({
      endpoint: warning.endpoint,
      status: "WARN",
      detail: warning.detail,
      affects: warning.contract || warning.chain || "contracts-pipeline",
    })),
  ];
  writeHealthChecks(checks, noWrite);

  if (allFailures.length) {
    writeIncidentArtifacts({
      incidents: allFailures,
      summary: {
        verificationModel: "contracts-proof-v2",
        branchWatchStatePath: path.relative(REPO_ROOT, BRANCH_WATCH_STATE_PATH),
      },
      dryRun: noWrite,
    });
    const error = new Error(`${allFailures.length} blocking validation failure(s)`);
    error.failures = allFailures;
    throw error;
  }

  const writtenPayload = writeDataFiles(payload, blockchainPageData, sha, catalog, { dryRun, check });
  writeBranchWatchState(nextBranchState, noWrite);
  return {
    payload: writtenPayload?.contractAddresses || payload,
    blockchainContractsPageData: writtenPayload?.blockchainContractsPageData || blockchainPageData,
    branchWatch: nextBranchState,
    warnings: allWarnings,
    sourceCommit: sha,
  };
}

module.exports = {
  buildBlockchainContractsPageData,
  buildChainPayload,
  buildDataArtifacts,
  buildHistoricalArtifacts,
  buildHistoricalEntriesFromEventLogs,
  buildRootHistoricalChainPayload,
  buildValidationReport,
  buildContractProofCatalog,
  computeIncidentFingerprint,
  decodeSetContractInfoLog,
  diffBranchWatchState,
  fetchControllerSetContractInfoLogs,
  resolveCodeSource,
  resolveDeploymentArtifact,
  resolveRepoPath,
  resolveRuntimeConsumerEvidence,
  resolveAuthority,
  resolveGovernorSeries,
  runContractsPipeline,
};
