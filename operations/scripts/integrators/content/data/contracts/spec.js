/**
 * @script      spec
 * @type        integrator
 * @concern     integrations
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: spec
 * @mode        integrate
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const { WATCHED_REPOS } = require("./constants");
const {
  BLOCKCHAIN_PAGE_SECTIONS,
  BLOCKCHAIN_PAGE_SOURCE_ONLY_CONTRACTS,
  CONTRACT_DEFINITIONS,
  LATEST_RESOLUTION_POLICY,
} = require("./catalog-config");

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
  addressStrategyOverride = null,
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
    addressStrategy: addressStrategyOverride || (artifactAuthority
      ? {
          kind: "deployment-artifact",
          ...artifactAuthority,
        }
      : {
          kind: "repo-search",
          repos: ["livepeer/go-livepeer", "livepeer/protocol", "livepeer/arbitrum-lpt-bridge"],
          searchTerms: [canonicalName, ...searchTerms],
        }),
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

function materializeDeployment(definition = {}) {
  if (definition.kind === "controller") {
    return controllerDeployment(definition);
  }

  if (definition.kind === "bridge") {
    return bridgeDeployment(definition);
  }

  if (definition.kind === "detached") {
    return detachedDeployment(definition);
  }

  throw new Error(`Unsupported contract definition kind: ${definition.kind || "unknown"}`);
}

function buildBlockchainContractPageSpec() {
  const sectionOrder = new Map(BLOCKCHAIN_PAGE_SECTIONS.map((section, index) => [section.slug, index]));
  const pageContracts = [
    ...CONTRACT_DEFINITIONS
      .filter((definition) => definition?.page?.slug && definition?.page?.section)
      .map((definition) => ({
        slug: definition.page.slug,
        name: definition.page.name || definition.canonicalName,
        canonicalName: definition.canonicalName,
        subtitle: definition.page.subtitle || null,
        category: definition.category,
        chain: definition.chain || null,
        bucket: definition.lifecycle || "active",
        type: definition.deploymentKind || "standalone",
        sourceContractName: definition.page.sourceContractName || definition.canonicalName,
        sourceDisplayName: definition.page.sourceDisplayName || null,
        codeAuthority: definition.codeAuthority || null,
        __section: definition.page.section,
        __order: definition.page.order || 0,
      })),
    ...BLOCKCHAIN_PAGE_SOURCE_ONLY_CONTRACTS.map((contract) => ({
      ...contract,
      __section: contract.section,
      __order: contract.order || 0,
    })),
  ].sort((left, right) => {
    const sectionCompare = (sectionOrder.get(left.__section) ?? Number.MAX_SAFE_INTEGER)
      - (sectionOrder.get(right.__section) ?? Number.MAX_SAFE_INTEGER);
    if (sectionCompare !== 0) return sectionCompare;
    if ((left.__order || 0) !== (right.__order || 0)) {
      return (left.__order || 0) - (right.__order || 0);
    }
    return String(left.canonicalName || left.name || "").localeCompare(
      String(right.canonicalName || right.name || ""),
      "en",
      { sensitivity: "base" },
    );
  });

  return {
    sections: BLOCKCHAIN_PAGE_SECTIONS
      .map((section) => ({
        slug: section.slug,
        title: section.title,
        contracts: pageContracts
          .filter((contract) => contract.__section === section.slug)
          .map((contract) => contract.slug),
      }))
      .filter((section) => section.contracts.length > 0),
    contracts: pageContracts.map(({ __section, __order, section, order, ...contract }) => contract),
  };
}

function buildContractProofCatalog() {
  return {
    _meta: {
      watchedRepos: WATCHED_REPOS,
      latestResolutionPolicy: LATEST_RESOLUTION_POLICY,
      blockchainPageSections: BLOCKCHAIN_PAGE_SECTIONS,
    },
    deployments: CONTRACT_DEFINITIONS.map(materializeDeployment),
  };
}

module.exports = {
  WATCHED_REPOS,
  buildBlockchainContractPageSpec,
  buildContractProofCatalog,
};
