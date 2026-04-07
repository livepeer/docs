const test = require("node:test");
const assert = require("node:assert/strict");
const path = require("node:path");
const { keccak256 } = require("js-sha3");

const {
  loadContractProofCatalog,
  resolveAuthority,
  buildChainPayload,
  buildHistoricalArtifacts,
  buildHistoricalEntriesFromEventLogs,
  decodeSetContractInfoLog,
  diffBranchWatchState,
  computeIncidentFingerprint,
  resolveDeploymentArtifact,
  resolveRuntimeConsumerEvidence,
} = require(path.join(process.cwd(), ".github/scripts/fetch-contract-addresses.js"));

const addr = (hex) => `0x${hex.repeat(40)}`;

test("loadContractProofCatalog publishes repo watch inputs and no fixed address truth rules", () => {
  const catalog = loadContractProofCatalog();
  assert.ok(Array.isArray(catalog.deployments) && catalog.deployments.length > 0);
  assert.ok(Array.isArray(catalog._meta?.watchedRepos) && catalog._meta.watchedRepos.length === 4);
  assert.equal(
    catalog.deployments.some((deployment) => deployment.addressStrategy?.kind === "fixed"),
    false
  );
});

test("resolveAuthority picks the highest governor-managed version", () => {
  const resolved = resolveAuthority(
    {
      kind: "governor-versioned-latest",
      baseKey: "minter",
      baseVersion: "V1",
      prefix: "minterV",
    },
    {
      minter: addr("1"),
      minterV2: addr("2"),
      minterV10: addr("a"),
    }
  );

  assert.equal(resolved.address, addr("a"));
  assert.equal(resolved.version, "V10");
  assert.equal(resolved.sourceKey, "minterV10");
});

test("buildChainPayload groups lifecycle outputs and preserves current as the active alias", () => {
  const payload = buildChainPayload(
    [
      {
        name: "Controller",
        canonicalName: "Controller",
        category: "core",
        lifecycle: "active",
        chain: "arbitrumOne",
        address: addr("1"),
        type: "standalone",
        deploymentKind: "standalone",
        runtimeAuthority: "controller",
        addressAuthority: "controller-runtime",
        blockchainHref: `https://arbiscan.io/address/${addr("1")}`,
        hasBytecode: true,
        sourceVerified: true,
        meta: {
          controllerSlot: "Controller",
          registrationState: "registered",
          controllerResolvedAddress: addr("1"),
          keccakHash: `0x${"a".repeat(64)}`,
        },
        addressSource: { kind: "controller-runtime", resolvedCommit: null },
      },
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        lifecycle: "active",
        chain: "arbitrumOne",
        address: addr("2"),
        type: "proxy",
        deploymentKind: "proxy",
        runtimeAuthority: "controller",
        addressAuthority: "controller-runtime",
        blockchainHref: `https://arbiscan.io/address/${addr("2")}`,
        hasBytecode: true,
        sourceVerified: true,
        meta: {
          controllerSlot: "BondingManager",
          registrationState: "registered",
          controllerResolvedAddress: addr("2"),
          proxyTarget: addr("6"),
          proxyImplementationMatchesExpected: true,
          currentImplementationVersion: "V13",
          keccakHash: `0x${"b".repeat(64)}`,
        },
        addressSource: { kind: "controller-runtime", resolvedCommit: null },
      },
      {
        name: "L1Escrow",
        category: "bridge",
        lifecycle: "paused",
        chain: "ethereumMainnet",
        address: addr("3"),
        type: "standalone",
        deploymentKind: "standalone",
        runtimeAuthority: "explorer",
        blockchainHref: `https://etherscan.io/address/${addr("3")}`,
        hasBytecode: true,
        sourceVerified: true,
        meta: { keccakHash: `0x${"c".repeat(64)}` },
        addressSource: { kind: "governor-manifest", resolvedCommit: "abc1234" },
      },
      {
        name: "L2Migrator",
        category: "migration",
        lifecycle: "migration_residual",
        chain: "arbitrumOne",
        address: addr("4"),
        type: "proxy",
        deploymentKind: "proxy",
        runtimeAuthority: "controller",
        blockchainHref: `https://arbiscan.io/address/${addr("4")}`,
        hasBytecode: true,
        sourceVerified: true,
        meta: { keccakHash: `0x${"d".repeat(64)}` },
        addressSource: { kind: "controller-runtime", resolvedCommit: null },
      },
    ],
    [
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        lifecycle: "historical",
        chain: "arbitrumOne",
        address: addr("6"),
        type: "target",
        deploymentKind: "target",
        runtimeAuthority: "explorer",
        blockchainHref: `https://arbiscan.io/address/${addr("6")}`,
        hasBytecode: true,
        sourceVerified: true,
        meta: {
          currentImplementation: true,
          currentImplementationVersion: "V13",
          keccakHash: `0x${"e".repeat(64)}`,
        },
        addressSource: { kind: "governor-manifest", resolvedCommit: "abc1234" },
      },
    ],
    [
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        lifecycle: "historical",
        chain: "arbitrumOne",
        address: addr("7"),
        type: "target",
        deploymentKind: "target",
        runtimeAuthority: "controller",
        blockchainHref: `https://arbiscan.io/address/${addr("7")}`,
        hasBytecode: true,
        sourceVerified: true,
        meta: {
          controllerSlot: "BondingManagerTarget",
          registrationState: "not_registered",
          controllerResolvedAddress: addr("6"),
          keccakHash: `0x${"f".repeat(64)}`,
        },
        addressSource: { kind: "controller-event-history", resolvedCommit: "def5678" },
      },
    ],
    "abc1234"
  );

  assert.strictEqual(payload.current, payload.active);
  assert.deepEqual(payload.active.map((entry) => entry.type), ["proxy", "standalone"]);
  assert.deepEqual(payload.paused.map((entry) => entry.name), ["L1Escrow"]);
  assert.deepEqual(payload.migration_residual.map((entry) => entry.name), ["L2Migrator"]);
  assert.deepEqual(payload.historical.map((entry) => entry.address), [addr("7")]);
  assert.deepEqual(payload.currentImplementations.map((entry) => entry.type), ["target"]);
  assert.equal(payload.inventory.some((entry) => entry.address === addr("7")), true);
  assert.equal(payload.active.find((entry) => entry.name === "BondingManager").verification.explorer.host, "arbiscan.io");
});

test("decodeSetContractInfoLog decodes controller event payloads", () => {
  const slotId = `0x${"1".repeat(64)}`;
  const address = addr("2");
  const gitCommitHash = "3".repeat(40);
  const log = {
    data: `0x${slotId.slice(2)}${address.slice(2).padStart(64, "0")}${gitCommitHash.padEnd(64, "0")}`,
    blockNumber: "0x1",
    logIndex: "0x0",
    transactionHash: `0x${"4".repeat(64)}`,
  };

  assert.deepEqual(decodeSetContractInfoLog(log), {
    id: slotId,
    address,
    gitCommitHash,
    blockNumber: "0x1",
    logIndex: "0x0",
    transactionHash: `0x${"4".repeat(64)}`,
  });
});

test("buildHistoricalEntriesFromEventLogs reconstructs proxy target and standalone controller history", () => {
  const bondingManagerTargetId = `0x${"a".repeat(64)}`;
  const minterId = `0x${keccak256("Minter")}`;
  const makeLog = (id, address, git, blockNumber, logIndex) => ({
    data: `0x${id.slice(2)}${address.slice(2).padStart(64, "0")}${git.padEnd(64, "0")}`,
    blockNumber,
    logIndex,
    transactionHash: `0x${git.padEnd(64, "0")}`,
  });

  const historicalEntries = buildHistoricalEntriesFromEventLogs(
    [
      {
        definition: {
          id: "arbitrumOne.bondingManager",
          canonicalName: "BondingManager",
          chain: "arbitrumOne",
          category: "core",
          proofChain: "controller",
        },
        entry: {
          name: "BondingManager",
          canonicalName: "BondingManager",
          chain: "arbitrumOne",
          category: "core",
          address: addr("1"),
          type: "proxy",
          deploymentKind: "proxy",
          contractCodeHref: "https://github.com/livepeer/protocol/blob/current/contracts/bonding/BondingManager.sol",
          codeSource: {
            repo: "livepeer/protocol",
            path: "contracts/bonding/BondingManager.sol",
            href: "https://github.com/livepeer/protocol/blob/current/contracts/bonding/BondingManager.sol",
            resolvedCommit: "current",
          },
          meta: {
            proxyTargetContractId: bondingManagerTargetId,
            proxyTargetContractName: "BondingManagerTarget",
            proxyTarget: addr("4"),
          },
        },
      },
      {
        definition: {
          id: "arbitrumOne.minter",
          canonicalName: "Minter",
          chain: "arbitrumOne",
          category: "core",
          proofChain: "controller",
        },
        entry: {
          name: "Minter",
          canonicalName: "Minter",
          chain: "arbitrumOne",
          category: "core",
          address: addr("8"),
          type: "standalone",
          deploymentKind: "standalone",
          contractCodeHref: "https://github.com/livepeer/protocol/blob/current/contracts/token/Minter.sol",
          codeSource: {
            repo: "livepeer/protocol",
            path: "contracts/token/Minter.sol",
            href: "https://github.com/livepeer/protocol/blob/current/contracts/token/Minter.sol",
            resolvedCommit: "current",
          },
          meta: {
            controllerSlot: "Minter",
          },
        },
      },
    ],
    [
      makeLog(bondingManagerTargetId, addr("2"), "1".repeat(40), "0x1", "0x0"),
      makeLog(bondingManagerTargetId, addr("3"), "2".repeat(40), "0x2", "0x0"),
      makeLog(bondingManagerTargetId, addr("4"), "3".repeat(40), "0x3", "0x0"),
      makeLog(minterId, addr("7"), "4".repeat(40), "0x1", "0x1"),
      makeLog(minterId, addr("8"), "5".repeat(40), "0x2", "0x1"),
    ]
  );

  assert.deepEqual(
    historicalEntries.map((entry) => [entry.name, entry.version, entry.address, entry.type]),
    [
      ["BondingManager", "V1", addr("2"), "target"],
      ["BondingManager", "V2", addr("3"), "target"],
      ["Minter", "V1", addr("7"), "standalone"],
    ]
  );
  assert.equal(
    historicalEntries[0].addressSource.resolvedCommit,
    "1".repeat(40)
  );
});

test("buildHistoricalArtifacts bootstraps grouped history from the existing generated payload", () => {
  const previousChainPayload = {
    historical: [
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        chain: "arbitrumOne",
        address: addr("1"),
        type: "target",
        deploymentKind: "target",
        version: "V1",
        blockchainHref: `https://arbiscan.io/address/${addr("1")}`,
      },
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        chain: "arbitrumOne",
        address: addr("2"),
        type: "target",
        deploymentKind: "target",
        version: "V2",
        blockchainHref: `https://arbiscan.io/address/${addr("2")}`,
      },
    ],
    currentImplementations: [
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        chain: "arbitrumOne",
        address: addr("2"),
        type: "target",
        deploymentKind: "target",
        version: "V2",
        blockchainHref: `https://arbiscan.io/address/${addr("2")}`,
      },
    ],
    active: [
      {
        name: "BondingManager",
        canonicalName: "BondingManager",
        category: "core",
        chain: "arbitrumOne",
        address: addr("a"),
        type: "proxy",
        deploymentKind: "proxy",
        meta: { proxyTarget: addr("2"), currentImplementationVersion: "V2" },
      },
    ],
  };

  const historicalArtifacts = buildHistoricalArtifacts({
    chain: "arbitrumOne",
    entries: previousChainPayload.active,
    currentImplementations: previousChainPayload.currentImplementations,
    previousChainPayload,
  });

  assert.deepEqual(
    historicalArtifacts.historicalSeries.core[0].entries.map((entry) => [entry.version, entry.address, entry.isCurrent]),
    [
      ["V1", addr("1"), false],
      ["V2", addr("2"), true],
    ]
  );
  assert.equal(historicalArtifacts.historical.every((entry) => entry.addressSource?.kind === "historical-series"), true);
});

test("buildHistoricalArtifacts appends a new version when the current address changes", () => {
  const previousChainPayload = {
    historicalSeries: {
      core: [
        {
          name: "TicketBroker",
          canonicalName: "TicketBroker",
          entries: [
            {
              version: "V1",
              address: addr("3"),
              chain: "arbitrumOne",
              type: "target",
              blockchainHref: `https://arbiscan.io/address/${addr("3")}`,
              isCurrent: false,
            },
            {
              version: "V2",
              address: addr("4"),
              chain: "arbitrumOne",
              type: "target",
              blockchainHref: `https://arbiscan.io/address/${addr("4")}`,
              isCurrent: true,
            },
          ],
        },
      ],
    },
  };

  const currentEntries = [
    {
      name: "TicketBroker",
      canonicalName: "TicketBroker",
      category: "core",
      chain: "arbitrumOne",
      address: addr("b"),
      type: "proxy",
      deploymentKind: "proxy",
      meta: { proxyTarget: addr("5") },
    },
  ];

  const historicalArtifacts = buildHistoricalArtifacts({
    chain: "arbitrumOne",
    entries: currentEntries,
    currentImplementations: [],
    previousChainPayload,
  });

  assert.deepEqual(
    historicalArtifacts.historicalSeries.core[0].entries.map((entry) => [entry.version, entry.address, entry.isCurrent]),
    [
      ["V1", addr("3"), false],
      ["V2", addr("4"), false],
      ["V3", addr("5"), true],
    ]
  );
  assert.equal(historicalArtifacts.historical.some((entry) => entry.version === "V3"), true);
});

test("diffBranchWatchState detects new branches and default-branch changes", () => {
  const diffs = diffBranchWatchState(
    {
      repos: [
        { repo: "livepeer/protocol", defaultBranch: "delta", branches: ["delta", "master"] },
      ],
    },
    {
      repos: [
        { repo: "livepeer/protocol", defaultBranch: "streamflow", branches: ["delta", "master", "streamflow"] },
      ],
    }
  );

  assert.deepEqual(
    diffs.map((diff) => diff.type),
    ["default-branch-change", "new-branch"]
  );
});

test("computeIncidentFingerprint is stable for the same blocking failure", () => {
  const incident = {
    failureClass: "provenance-failure",
    endpoint: "code-provenance",
    chain: "arbitrumOne",
    contract: "BondingManager",
    detail: "Missing commit-specific provenance",
  };

  assert.equal(computeIncidentFingerprint(incident), computeIncidentFingerprint(incident));
});

test("proof catalog uses controller truth for ethereum livepeer token and requires runtime evidence for AI service registry", () => {
  const catalog = loadContractProofCatalog();
  const ethLivepeerToken = catalog.deployments.find((deployment) => deployment.id === "ethereumMainnet.livepeerToken");
  const aiServiceRegistry = catalog.deployments.find((deployment) => deployment.id === "arbitrumOne.aiServiceRegistry");

  assert.equal(ethLivepeerToken?.addressStrategy?.kind, "controller-slot");
  assert.equal(ethLivepeerToken?.addressStrategy?.controllerSlot, "LivepeerToken");
  assert.equal(aiServiceRegistry?.addressStrategy?.kind, "deployment-artifact");
  assert.equal(aiServiceRegistry?.requiredRuntimeEvidence, true);
  assert.equal(aiServiceRegistry?.runtimeEvidence?.path, "cmd/livepeer/starter/starter.go");
});

test("artifact and runtime consumer helpers resolve AI service registry from upstream sources", async () => {
  const artifact = await resolveDeploymentArtifact({
    repo: "livepeer/protocol",
    branch: "delta",
    path: "deployments/arbitrumMainnet/AIServiceRegistry.json",
  });

  assert.equal(artifact.address, "0x04C0b249740175999E5BF5c9ac1dA92431EF34C5");
  assert.equal(artifact.compilationPath, "contracts/ServiceRegistry.sol");
  assert.equal(typeof artifact.resolvedCommit, "string");

  const runtimeEvidence = await resolveRuntimeConsumerEvidence({
    repo: "livepeer/go-livepeer",
    branch: "master",
    path: "cmd/livepeer/starter/starter.go",
  }, artifact.address);

  assert.equal(runtimeEvidence.exactAddressMatch, true);
  assert.equal(runtimeEvidence.path, "cmd/livepeer/starter/starter.go");
  assert.equal(typeof runtimeEvidence.resolvedCommit, "string");
});
