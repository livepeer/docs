const { WATCHED_REPOS } = require("./constants");

function controllerDeployment({
  id,
  canonicalName,
  chain,
  category,
  deploymentKind = "standalone",
  lifecycle = "active",
  controllerSlot = canonicalName,
  codeAuthority = null,
  currentImplementationStrategy = null,
  notes = null,
}) {
  return {
    id,
    canonicalName,
    chain,
    category,
    deploymentKind,
    lifecycle,
    proofChain: "controller",
    addressStrategy: {
      kind: canonicalName === "Controller" ? "controller-root" : "controller-slot",
      controllerSlot: canonicalName === "Controller" ? null : controllerSlot,
    },
    runtimeAuthority: {
      kind: canonicalName === "Controller" ? "explorer" : "controller",
      controllerSlot: canonicalName === "Controller" ? null : controllerSlot,
    },
    codeAuthority,
    currentImplementationStrategy,
    notes,
  };
}

function bridgeDeployment({
  id,
  canonicalName,
  chain,
  category = "bridge",
  lifecycle = "active",
  deploymentKind = "standalone",
  governorKey = null,
  artifactAuthority = null,
  codeAuthority = null,
  notes = null,
}) {
  return {
    id,
    canonicalName,
    chain,
    category,
    deploymentKind,
    lifecycle,
    proofChain: "bridge",
    addressStrategy: governorKey
      ? {
          kind: "governor-manifest",
          governorKey,
        }
      : {
          kind: "deployment-artifact",
          ...artifactAuthority,
        },
    runtimeAuthority: {
      kind: "bridge",
    },
    artifactAuthority,
    codeAuthority,
    notes,
  };
}

function detachedDeployment({
  id,
  canonicalName,
  chain,
  category,
  lifecycle = "active",
  artifactAuthority = null,
  codeAuthority = null,
  runtimeEvidence = null,
  requiredRuntimeEvidence = false,
  searchTerms = [],
  notes = null,
}) {
  return {
    id,
    canonicalName,
    chain,
    category,
    deploymentKind: "standalone",
    lifecycle,
    proofChain: "detached",
    addressStrategy: artifactAuthority
      ? {
          kind: "deployment-artifact",
          ...artifactAuthority,
        }
      : {
          kind: "repo-search",
          repos: ["livepeer/go-livepeer", "livepeer/protocol", "livepeer/arbitrum-lpt-bridge"],
          searchTerms: [canonicalName, ...searchTerms],
        },
    runtimeAuthority: {
      kind: "explorer",
    },
    artifactAuthority,
    codeAuthority,
    runtimeEvidence,
    requiredRuntimeEvidence,
    notes,
  };
}

function buildContractProofCatalog() {
  return {
    _meta: {
      watchedRepos: WATCHED_REPOS,
      latestResolutionPolicy: [
        "Current controller-managed addresses are recovered from live controller reads on every run.",
        "Bridge and detached families must resolve from watched upstream repositories or official manifests, then survive runtime and explorer validation.",
        "Branch names are discovery inputs only. Published code provenance must resolve to repo, commit, and file path.",
        "Docs-local files do not define publishable address truth, lifecycle truth, implementation truth, or code-source truth.",
        "Silent degradation is not a permitted outcome. Unresolved truth, provenance, or branch anomalies produce a blocking incident artifact.",
      ],
    },
    deployments: [
      controllerDeployment({
        id: "arbitrumOne.controller",
        canonicalName: "Controller",
        chain: "arbitrumOne",
        category: "core",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/Controller.sol",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.livepeerToken",
        canonicalName: "LivepeerToken",
        chain: "arbitrumOne",
        category: "token",
        controllerSlot: "LivepeerToken",
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L2/token/LivepeerToken.sol",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.minter",
        canonicalName: "Minter",
        chain: "arbitrumOne",
        category: "core",
        controllerSlot: "Minter",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/token/Minter.sol",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.bondingManager",
        canonicalName: "BondingManager",
        chain: "arbitrumOne",
        category: "core",
        deploymentKind: "proxy",
        controllerSlot: "BondingManager",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/bonding/BondingManager.sol",
        },
        currentImplementationStrategy: {
          kind: "governor-versioned-latest",
          baseKey: "bondingManagerTarget",
          prefix: "bondingManagerTargetV",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.ticketBroker",
        canonicalName: "TicketBroker",
        chain: "arbitrumOne",
        category: "core",
        deploymentKind: "proxy",
        controllerSlot: "TicketBroker",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/pm/TicketBroker.sol",
        },
        currentImplementationStrategy: { kind: "proxy-meta" },
      }),
      controllerDeployment({
        id: "arbitrumOne.roundsManager",
        canonicalName: "RoundsManager",
        chain: "arbitrumOne",
        category: "core",
        deploymentKind: "proxy",
        controllerSlot: "RoundsManager",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/rounds/RoundsManager.sol",
        },
        currentImplementationStrategy: { kind: "proxy-meta" },
      }),
      controllerDeployment({
        id: "arbitrumOne.serviceRegistry",
        canonicalName: "ServiceRegistry",
        chain: "arbitrumOne",
        category: "core",
        deploymentKind: "proxy",
        controllerSlot: "ServiceRegistry",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/ServiceRegistry.sol",
        },
        currentImplementationStrategy: { kind: "proxy-meta" },
      }),
      detachedDeployment({
        id: "arbitrumOne.aiServiceRegistry",
        canonicalName: "AIServiceRegistry",
        chain: "arbitrumOne",
        category: "core",
        artifactAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "deployments/arbitrumMainnet/AIServiceRegistry.json",
        },
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/ServiceRegistry.sol",
        },
        runtimeEvidence: {
          kind: "repo-address-literal",
          repo: "livepeer/go-livepeer",
          branch: "master",
          path: "cmd/livepeer/starter/starter.go",
        },
        requiredRuntimeEvidence: true,
        searchTerms: ["AI Service Registry", "ServiceRegistry"],
        notes: "Detached from Controller. Must resolve from watched repo/runtime evidence before publication.",
      }),
      detachedDeployment({
        id: "arbitrumOne.governor",
        canonicalName: "Governor",
        chain: "arbitrumOne",
        category: "governance",
        artifactAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "deployments/arbitrumMainnet/Governor.json",
        },
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/governance/Governor.sol",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.bondingVotes",
        canonicalName: "BondingVotes",
        chain: "arbitrumOne",
        category: "governance",
        deploymentKind: "proxy",
        controllerSlot: "BondingVotes",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/bonding/BondingVotes.sol",
        },
        currentImplementationStrategy: {
          kind: "governor-versioned-latest",
          baseKey: "bondingVotesTarget",
          prefix: "bondingVotesTargetV",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.livepeerGovernor",
        canonicalName: "LivepeerGovernor",
        chain: "arbitrumOne",
        category: "governance",
        deploymentKind: "proxy",
        controllerSlot: "LivepeerGovernor",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/treasury/LivepeerGovernor.sol",
        },
        currentImplementationStrategy: {
          kind: "governor-key",
          key: "livepeerGovernorTarget",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.treasury",
        canonicalName: "Treasury",
        chain: "arbitrumOne",
        category: "governance",
        controllerSlot: "Treasury",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/treasury/Treasury.sol",
        },
      }),
      bridgeDeployment({
        id: "arbitrumOne.l2LPTGateway",
        canonicalName: "L2LPTGateway",
        chain: "arbitrumOne",
        governorKey: "l2LPTGateway",
        artifactAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "deployments/arbitrumMainnet/L2LPTGateway.json",
        },
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L2/gateway/L2LPTGateway.sol",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.l2LPTDataCache",
        canonicalName: "L2LPTDataCache",
        chain: "arbitrumOne",
        category: "bridge",
        controllerSlot: "L2LPTDataCache",
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L2/gateway/L2LPTDataCache.sol",
        },
      }),
      controllerDeployment({
        id: "arbitrumOne.l2Migrator",
        canonicalName: "L2Migrator",
        chain: "arbitrumOne",
        category: "migration",
        lifecycle: "migration_residual",
        deploymentKind: "proxy",
        controllerSlot: "L2Migrator",
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L2/gateway/L2Migrator.sol",
        },
        currentImplementationStrategy: { kind: "proxy-meta" },
      }),
      controllerDeployment({
        id: "arbitrumOne.merkleSnapshot",
        canonicalName: "MerkleSnapshot",
        chain: "arbitrumOne",
        category: "migration",
        lifecycle: "migration_residual",
        controllerSlot: "MerkleSnapshot",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "delta",
          path: "contracts/snapshots/MerkleSnapshot.sol",
        },
        notes: "Migration proof registry retained for Confluence claim verification.",
      }),
      controllerDeployment({
        id: "ethereumMainnet.controller",
        canonicalName: "Controller",
        chain: "ethereumMainnet",
        category: "core",
        lifecycle: "paused",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "master",
          path: "contracts/Controller.sol",
        },
      }),
      controllerDeployment({
        id: "ethereumMainnet.livepeerToken",
        canonicalName: "LivepeerToken",
        chain: "ethereumMainnet",
        category: "token",
        controllerSlot: "LivepeerToken",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "master",
          path: "contracts/token/LivepeerToken.sol",
        },
      }),
      controllerDeployment({
        id: "ethereumMainnet.minter",
        canonicalName: "Minter",
        chain: "ethereumMainnet",
        category: "core",
        lifecycle: "paused",
        controllerSlot: "Minter",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "master",
          path: "contracts/token/Minter.sol",
        },
      }),
      bridgeDeployment({
        id: "ethereumMainnet.bridgeMinter",
        canonicalName: "BridgeMinter",
        chain: "ethereumMainnet",
        governorKey: "bridgeMinter",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "streamflow",
          path: "contracts/token/BridgeMinter.sol",
        },
      }),
      bridgeDeployment({
        id: "ethereumMainnet.l1LPTGateway",
        canonicalName: "L1LPTGateway",
        chain: "ethereumMainnet",
        governorKey: "l1LPTGateway",
        artifactAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "deployments/mainnet/L1LPTGateway.json",
        },
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L1/gateway/L1LPTGateway.sol",
        },
      }),
      bridgeDeployment({
        id: "ethereumMainnet.l1Escrow",
        canonicalName: "L1Escrow",
        chain: "ethereumMainnet",
        artifactAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "deployments/mainnet/L1Escrow.json",
        },
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L1/escrow/L1Escrow.sol",
        },
      }),
      bridgeDeployment({
        id: "ethereumMainnet.l1LPTDataCache",
        canonicalName: "L1LPTDataCache",
        chain: "ethereumMainnet",
        lifecycle: "legacy_operational",
        governorKey: "l1LPTDataCache",
        artifactAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "deployments/mainnet/L1LPTDataCache.json",
        },
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L1/gateway/L1LPTDataCache.sol",
        },
      }),
      bridgeDeployment({
        id: "ethereumMainnet.l1Migrator",
        canonicalName: "L1Migrator",
        chain: "ethereumMainnet",
        category: "migration",
        lifecycle: "migration_residual",
        governorKey: "l1Migrator",
        artifactAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "deployments/mainnet/L1Migrator.json",
        },
        codeAuthority: {
          repo: "livepeer/arbitrum-lpt-bridge",
          branch: "main",
          path: "contracts/L1/gateway/L1Migrator.sol",
        },
      }),
      controllerDeployment({
        id: "ethereumMainnet.bondingManager",
        canonicalName: "BondingManager",
        chain: "ethereumMainnet",
        category: "core",
        deploymentKind: "proxy",
        lifecycle: "paused",
        controllerSlot: "BondingManager",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "master",
          path: "contracts/bonding/BondingManager.sol",
        },
      }),
      controllerDeployment({
        id: "ethereumMainnet.ticketBroker",
        canonicalName: "TicketBroker",
        chain: "ethereumMainnet",
        category: "core",
        deploymentKind: "proxy",
        lifecycle: "paused",
        controllerSlot: "TicketBroker",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "streamflow",
          path: "contracts/pm/TicketBroker.sol",
        },
      }),
      controllerDeployment({
        id: "ethereumMainnet.roundsManager",
        canonicalName: "RoundsManager",
        chain: "ethereumMainnet",
        category: "core",
        deploymentKind: "proxy",
        lifecycle: "paused",
        controllerSlot: "RoundsManager",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "master",
          path: "contracts/rounds/RoundsManager.sol",
        },
      }),
      controllerDeployment({
        id: "ethereumMainnet.serviceRegistry",
        canonicalName: "ServiceRegistry",
        chain: "ethereumMainnet",
        category: "core",
        deploymentKind: "proxy",
        lifecycle: "paused",
        controllerSlot: "ServiceRegistry",
        codeAuthority: {
          repo: "livepeer/protocol",
          branch: "master",
          path: "contracts/ServiceRegistry.sol",
        },
      }),
    ],
  };
}

module.exports = {
  WATCHED_REPOS,
  buildContractProofCatalog,
};
