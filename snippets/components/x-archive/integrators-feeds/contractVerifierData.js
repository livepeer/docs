/**
 * @module contractVerifierData
 * @description Pure data helpers for ContractVerifier. Kept in plain JS so script-level tests can import them without a JSX transform.
 */

function buildContractVerifierChainData(data = {}, chainKey) {
  const chainData = (data && data[chainKey]) || {};
  const activeEntries = chainData.active || chainData.current || [];
  const inventoryEntries = chainData.inventory || [
    ...activeEntries,
    ...((chainData.currentImplementations) || []),
  ];
  const canonical = {};

  activeEntries.forEach((entry) => {
    if (!canonical[entry.name]) {
      canonical[entry.name] = entry;
    } else if ((entry.type || entry.deploymentKind) === "proxy") {
      canonical[entry.name] = entry;
    }
  });

  return { activeEntries, inventoryEntries, canonical };
}

function buildContractVerifierLookupData(data = {}) {
  const chainOrder = ["arbitrumOne", "ethereumMainnet"];
  const entriesByName = {};
  const primaryByName = {};

  chainOrder.forEach((chainKey) => {
    const { canonical } = buildContractVerifierChainData(data, chainKey);
    Object.values(canonical).forEach((entry) => {
      if (!entriesByName[entry.name]) {
        entriesByName[entry.name] = [];
      }
      entriesByName[entry.name].push(entry);
      if (!primaryByName[entry.name]) {
        primaryByName[entry.name] = entry;
      }
    });
  });

  Object.values(entriesByName).forEach((entries) => {
    entries.sort((a, b) => {
      const chainA = chainOrder.indexOf(a.chain || "");
      const chainB = chainOrder.indexOf(b.chain || "");
      if (chainA !== chainB) return chainA - chainB;
      return a.name.localeCompare(b.name);
    });
  });

  return {
    entriesByName,
    lookupEntries: Object.values(primaryByName),
  };
}

function buildContractVerifierGlobalInventory(data = {}) {
  const chainOrder = ["arbitrumOne", "ethereumMainnet"];
  const entries = [];

  chainOrder.forEach((chainKey) => {
    const chainData = buildContractVerifierChainData(data, chainKey);
    chainData.inventoryEntries.forEach((entry) => {
      entries.push(entry);
    });
  });

  return entries;
}

function normalizeContractVerifierAddress(address = "") {
  return String(address || "").trim().toLowerCase();
}

function findContractVerifierInventoryMatch(data = {}, address = "") {
  const needle = normalizeContractVerifierAddress(address);
  if (!needle) return null;

  return buildContractVerifierGlobalInventory(data).find(
    (entry) => normalizeContractVerifierAddress(entry?.address) === needle
  ) || null;
}

function buildContractVerifierVerifyChains(
  data = {},
  address = "",
  preferredChain = "arbitrumOne"
) {
  const chainOrder = ["arbitrumOne", "ethereumMainnet"];
  const pipelineMatch = findContractVerifierInventoryMatch(data, address);
  const ordered = [];

  if (pipelineMatch?.chain && chainOrder.includes(pipelineMatch.chain)) {
    ordered.push(pipelineMatch.chain);
  }
  if (chainOrder.includes(preferredChain) && !ordered.includes(preferredChain)) {
    ordered.push(preferredChain);
  }
  chainOrder.forEach((chainKey) => {
    if (!ordered.includes(chainKey)) {
      ordered.push(chainKey);
    }
  });

  return ordered;
}

function isContractVerifierControllerLookupEligible(entry, hasController) {
  const entryMeta = (entry && entry.meta) || {};
  const hash = entryMeta.keccakHash || null;
  const structuredRegistered = entry?.verification?.controller?.controllerRegistered;
  const topLevelRegistered = typeof entry?.controllerRegistered === "boolean" ? entry.controllerRegistered : null;
  const metaRegistered = typeof entryMeta.controllerRegistered === "boolean" ? entryMeta.controllerRegistered : null;
  const registrationState = entryMeta.registrationState || entry?.verification?.controller?.registrationState || null;
  let isRegistered = null;

  if (typeof structuredRegistered === "boolean") {
    isRegistered = structuredRegistered;
  } else if (typeof topLevelRegistered === "boolean") {
    isRegistered = topLevelRegistered;
  } else if (typeof metaRegistered === "boolean") {
    isRegistered = metaRegistered;
  } else if (registrationState === "registered") {
    isRegistered = true;
  } else if (registrationState && registrationState !== "unknown" && registrationState !== "not_applicable") {
    isRegistered = false;
  } else if (typeof entryMeta.registeredInController === "boolean") {
    isRegistered = entryMeta.registeredInController;
  }

  return Boolean(hasController && hash && isRegistered === true);
}

const contractVerifierHelpers = {
  buildContractVerifierChainData,
  buildContractVerifierGlobalInventory,
  buildContractVerifierLookupData,
  buildContractVerifierVerifyChains,
  findContractVerifierInventoryMatch,
  isContractVerifierControllerLookupEligible,
};

export {
  buildContractVerifierChainData,
  buildContractVerifierGlobalInventory,
  buildContractVerifierLookupData,
  buildContractVerifierVerifyChains,
  findContractVerifierInventoryMatch,
  isContractVerifierControllerLookupEligible,
}

export default contractVerifierHelpers

// Parser-safe plain-JS helper mirror kept for snippet discovery tooling.
// Node-based tests import the CommonJS sibling file: contractVerifierData.cjs.
void contractVerifierHelpers;
