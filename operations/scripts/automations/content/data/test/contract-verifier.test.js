const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");

const {
  buildContractVerifierChainData,
  buildContractVerifierVerifyChains,
  buildContractVerifierLookupData,
  findContractVerifierInventoryMatch,
  isContractVerifierControllerLookupEligible,
} = require(path.join(process.cwd(), "snippets/components/integrators/feeds/contractVerifierData.cjs"));

const addr = (hex) => `0x${hex.repeat(40)}`;

test("buildContractVerifierChainData keeps lookup options active-only and prefers proxy entries", () => {
  const proxy = { name: "BondingManager", type: "proxy", address: addr("1"), category: "core" };
  const standalone = { name: "BondingManager", type: "standalone", address: addr("2"), category: "core" };
  const controller = { name: "Controller", type: "standalone", address: addr("3"), category: "core" };
  const implementation = { name: "BondingManager", type: "target", address: addr("4"), category: "core" };

  const result = buildContractVerifierChainData(
    {
      arbitrumOne: {
        active: [standalone, proxy, controller],
        inventory: [standalone, proxy, controller, implementation],
        currentImplementations: [implementation],
      },
    },
    "arbitrumOne"
  );

  assert.deepEqual(Object.keys(result.canonical).sort(), ["BondingManager", "Controller"]);
  assert.equal(result.canonical.BondingManager.address, proxy.address);
  assert.equal(result.activeEntries.some((entry) => entry.address === implementation.address), false);
  assert.equal(result.inventoryEntries.some((entry) => entry.address === implementation.address), true);
});

test("isContractVerifierControllerLookupEligible prefers structured controller registration over deprecated fields", () => {
  const keccakHash = `0x${"a".repeat(64)}`;

  assert.equal(
    isContractVerifierControllerLookupEligible(
      {
        verification: { controller: { controllerRegistered: false } },
        controllerRegistered: true,
        meta: { keccakHash, registrationState: "registered", registeredInController: true },
      },
      true
    ),
    false
  );

  assert.equal(
    isContractVerifierControllerLookupEligible(
      {
        controllerRegistered: true,
        meta: { keccakHash, registrationState: "not_registered", registeredInController: false },
      },
      true
    ),
    true
  );

  assert.equal(
    isContractVerifierControllerLookupEligible(
      { meta: { keccakHash, registeredInController: true } },
      true
    ),
    true
  );

  assert.equal(
    isContractVerifierControllerLookupEligible(
      { meta: { keccakHash, registrationState: "not_applicable", registeredInController: false } },
      true
    ),
    false
  );
});

test("buildContractVerifierLookupData preserves active cross-chain duplicates under one lookup name", () => {
  const result = buildContractVerifierLookupData({
    arbitrumOne: {
      active: [
        { name: "LivepeerToken", chain: "arbitrumOne", address: addr("1"), type: "standalone", category: "token" },
      ],
    },
    ethereumMainnet: {
      active: [
        { name: "LivepeerToken", chain: "ethereumMainnet", address: addr("2"), type: "standalone", category: "token" },
        { name: "L1Escrow", chain: "ethereumMainnet", address: addr("3"), type: "standalone", category: "bridge" },
      ],
    },
  });

  assert.deepEqual(
    result.lookupEntries.map((entry) => entry.name).sort(),
    ["L1Escrow", "LivepeerToken"]
  );
  assert.deepEqual(
    result.entriesByName.LivepeerToken.map((entry) => entry.chain),
    ["arbitrumOne", "ethereumMainnet"]
  );
});

test("verify helpers prefer an exact pipeline match chain before fallback explorer order", () => {
  const data = {
    arbitrumOne: {
      inventory: [
        { name: "BondingManager", chain: "arbitrumOne", address: addr("1"), type: "proxy", category: "core" },
      ],
    },
    ethereumMainnet: {
      inventory: [
        { name: "LivepeerToken", chain: "ethereumMainnet", address: addr("2"), type: "standalone", category: "token" },
      ],
    },
  };

  const match = findContractVerifierInventoryMatch(data, addr("2").toUpperCase());
  assert.equal(match?.chain, "ethereumMainnet");
  assert.equal(match?.name, "LivepeerToken");

  const chainOrder = buildContractVerifierVerifyChains(data, addr("2"), "arbitrumOne");
  assert.deepEqual(chainOrder, ["ethereumMainnet", "arbitrumOne"]);
});
