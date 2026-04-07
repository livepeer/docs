#!/usr/bin/env node
/**
 * @script            contracts-addresses-pipeline.test
 * @category          validator
 * @purpose           qa:contracts-registry
 * @scope             tests/unit, .github/scripts/fetch-contract-addresses.js, operations/scripts/automations/content/data/contracts/, .github/workflows/update-contract-addresses*.yml, operations/scripts/generators/content/seo/generate-ai-sitemap.js, snippets/components/integrators/feeds/ContractVerifier.jsx, snippets/data/contract-addresses/, v2/about
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Regression tests for the contracts proof catalog, generated registry output, shared contracts surface wiring, blocking anomaly behavior, workflow cadence alignment, and route freshness dependencies.
 * @pipeline          P1 (commit, via run-all)
 * @usage             node operations/tests/unit/contracts-addresses-pipeline.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const {
  loadContractProofCatalog,
  resolveAuthority,
  buildChainPayload,
} = require('../../../.github/scripts/fetch-contract-addresses.js');
const {
  buildValidationReport,
} = require('../../../operations/scripts/automations/content/data/contracts/pipeline.js');
const {
  BLOCKING_BRANCH_DIFF_TYPES,
  CONTRACTS_PIPELINE_CADENCE,
} = require('../../../operations/scripts/automations/content/data/contracts/constants.js');
const {
  buildBlockchainContractPageSpec,
} = require('../../../operations/scripts/automations/content/data/contracts/spec.js');
const {
  buildContractVerifierChainData,
  isContractVerifierControllerLookupEligible,
} = require('../../../snippets/components/integrators/feeds/contractVerifierData.cjs');
const {
  ROUTE_DEPENDENCIES,
} = require('../../../operations/scripts/generators/content/seo/generate-ai-sitemap.js');

const REPO_ROOT = path.resolve(__dirname, '../../..');
const GENERATED_JSON_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'contractAddressesData.json'
);
const GENERATED_JSX_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'contractAddressesData.jsx'
);
const BLOCKCHAIN_PAGE_JSON_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'blockchainContractsPageData.json'
);
const BLOCKCHAIN_PAGE_JSX_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'blockchainContractsPageData.jsx'
);
const CONTRACTS_DATA_ADAPTER_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'index.jsx'
);
const VIEW_MODEL_ADAPTER_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'view-model.jsx'
);
const BLOCKCHAIN_PAGE_SPEC_PATH = path.join(
  REPO_ROOT,
  'operations',
  'scripts',
  'automations',
  'content',
  'data',
  'contracts',
  'blockchain-page-spec.js'
);
const CANONICAL_ROUTE_PATH = path.join(
  REPO_ROOT,
  'v2',
  'about',
  'resources',
  'reference',
  'livepeer-contract-addresses.mdx'
);
const CANONICAL_COMPOSABLE_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'composables',
  'pages',
  'canonical',
  'livepeer-contract-addresses.mdx'
);
const CANONICAL_PAGE_DATA_HELPER_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'composables',
  'pages',
  'canonical',
  'data',
  'livepeer-contract-addresses-page-data.jsx'
);
const CANONICAL_PAGE_MODEL_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'composables',
  'pages',
  'canonical',
  'data',
  'livepeer-contract-addresses-page-model.jsx'
);
const BLOCKCHAIN_PAGE_PATH = path.join(
  REPO_ROOT,
  'v2',
  'about',
  'protocol',
  'blockchain-contracts.mdx'
);
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const CONTRACTS_CONSTANTS_PATH = path.join(
  REPO_ROOT,
  'operations',
  'scripts',
  'automations',
  'content',
  'data',
  'contracts',
  'constants.js'
);
const MAIN_WORKFLOW_PATH = path.join(
  REPO_ROOT,
  '.github',
  'workflows',
  'update-contract-addresses.yml'
);
const SHADOW_WORKFLOW_PATH = path.join(
  REPO_ROOT,
  '.github',
  'workflows',
  'update-contract-addresses-shadow.yml'
);

const STALE_ARBITRUM_MINTER_V1 = '0x4969dcCF5186e1c49411638fc8A2a020Fdab752E'.toLowerCase();
const STALE_BONDING_VOTES_TARGET = '0x1561fC5F7Efc049476224005DFf38256dccfc509'.toLowerCase();
const EXPECTED_ETH_LEGACY_UTILITY_NAMES = [
  'GenesisManager',
  'MerkleMine',
  'MultiMerkleMine',
  'Refunder',
  'SortedDoublyLL',
];
const EXPECTED_ETH_HISTORICAL_GENESIS_ADDRESS = '0x289ba1701c2f088cf0faf8b3705246331cb8a839';

let errors = [];
let total = 0;

function runCase(name, fn) {
  total += 1;
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'operations/tests/unit/contracts-addresses-pipeline.test.js',
      line: 1,
      rule: 'contracts-addresses-pipeline',
      message: `${name}: ${error.message}`,
    });
  }
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function readJson(filePath) {
  return JSON.parse(readText(filePath));
}

function loadGeneratedJson() {
  assert.ok(fs.existsSync(GENERATED_JSON_PATH), 'generated contractAddressesData.json is missing');
  return readJson(GENERATED_JSON_PATH);
}

function loadBlockchainPageJson() {
  assert.ok(fs.existsSync(BLOCKCHAIN_PAGE_JSON_PATH), 'generated blockchainContractsPageData.json is missing');
  return readJson(BLOCKCHAIN_PAGE_JSON_PATH);
}

function runTests() {
  errors = [];
  total = 0;

  console.log('🧪 Contracts Addresses Pipeline Unit Tests');

  runCase('proof catalog loads and excludes docs-local fixed address truth', () => {
    const catalog = loadContractProofCatalog();
    assert.ok(Array.isArray(catalog.deployments) && catalog.deployments.length > 0, 'catalog should contain deployments');
    assert.ok(
      Array.isArray(catalog._meta?.latestResolutionPolicy) && catalog._meta.latestResolutionPolicy.length > 0,
      'catalog should publish latest-resolution policy'
    );
    assert.strictEqual(
      catalog.deployments.some((deployment) => deployment.addressStrategy?.kind === 'fixed'),
      false,
      'proof catalog must not contain fixed local address truth'
    );
  });

  runCase('resolveAuthority selects the latest governor version instead of the base key', () => {
    const governorChain = {
      minter: '0x1111111111111111111111111111111111111111',
      minterV2: '0x2222222222222222222222222222222222222222',
      minterV10: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    };

    const resolved = resolveAuthority(
      {
        kind: 'governor-versioned-latest',
        baseKey: 'minter',
        baseVersion: 'V1',
        prefix: 'minterV',
      },
      governorChain
    );

    assert.strictEqual(resolved.address, governorChain.minterV10);
    assert.strictEqual(resolved.version, 'V10');
    assert.strictEqual(resolved.authorityKind, 'governor-manifest');
    assert.strictEqual(resolved.sourceKey, 'minterV10');
  });

  runCase('buildChainPayload keeps current implementations out of the active table', () => {
    const payload = buildChainPayload(
      [
        {
          name: 'BondingManager',
          address: '0x1000000000000000000000000000000000000001',
          category: 'core',
          lifecycle: 'active',
          type: 'proxy',
        },
        {
          name: 'L2Migrator',
          address: '0x2000000000000000000000000000000000000002',
          category: 'migration',
          lifecycle: 'migration_residual',
          type: 'proxy',
        },
        {
          name: 'Controller',
          address: '0x3000000000000000000000000000000000000003',
          category: 'core',
          lifecycle: 'paused',
          type: 'standalone',
        },
      ],
      [
        {
          name: 'BondingManager',
          address: '0x4000000000000000000000000000000000000004',
          category: 'core',
          lifecycle: 'historical',
          type: 'target',
        },
      ],
      {},
      {},
      'deadbeef'
    );

    assert.strictEqual(payload.current, payload.active, 'current should remain an alias of active');
    assert.strictEqual(payload.active.some((entry) => (entry.type || entry.deploymentKind) === 'target'), false);
    assert.strictEqual(payload.currentImplementations.length, 1);
    assert.strictEqual(payload.currentImplementations[0].address, '0x4000000000000000000000000000000000000004');
    assert.strictEqual(payload.migration_residual[0].name, 'L2Migrator');
    assert.strictEqual(payload.paused[0].name, 'Controller');
  });

  runCase('generated registry publishes stable root historical payloads without transient diagnostics', () => {
    const data = loadGeneratedJson();
    const serialized = JSON.stringify(data);

    assert.ok(data.historical && typeof data.historical === 'object', 'generated registry should publish root historical');
    assert.ok(data.historical.arbitrumOne && typeof data.historical.arbitrumOne === 'object', 'arbitrumOne root historical should be present');
    assert.ok(
      Array.isArray(data.historical.ethereumMainnet?.MerkleProof) && data.historical.ethereumMainnet.MerkleProof.length > 0,
      'ethereumMainnet root historical should publish externally revalidated MerkleProof history'
    );
    assert.strictEqual(
      String(data.historical.ethereumMainnet.MerkleProof[0].address || '').toLowerCase(),
      EXPECTED_ETH_HISTORICAL_GENESIS_ADDRESS,
      'ethereumMainnet root historical should preserve the canonical MerkleProof address'
    );
    assert.strictEqual(
      serialized.includes('"rpcFailures"'),
      false,
      'published contracts payload must not serialize transient rpcFailures diagnostics'
    );
  });

  runCase('generated registry excludes stale active rows and target rows from arbitrumOne.active', () => {
    const data = loadGeneratedJson();
    const active = data.arbitrumOne?.active || [];
    const implementations = data.arbitrumOne?.currentImplementations || [];

    assert.ok(active.length > 0, 'arbitrumOne.active should not be empty');
    assert.strictEqual(
      active.some((entry) => String(entry.address || '').toLowerCase() === STALE_ARBITRUM_MINTER_V1),
      false,
      'stale Arbitrum Minter V1 must not appear in active'
    );
    assert.strictEqual(
      active.some((entry) => String(entry.address || '').toLowerCase() === STALE_BONDING_VOTES_TARGET),
      false,
      'stale BondingVotes target must not appear in active'
    );
    assert.strictEqual(
      active.some((entry) => (entry.type || entry.deploymentKind) === 'target'),
      false,
      'active table must not contain target rows'
    );
    assert.strictEqual(
      active.some((entry) => entry.name === 'L2Migrator'),
      false,
      'migration-residual contracts must not appear in active'
    );
    assert.ok(
      implementations.some((entry) => entry.name === 'BondingVotes' && (entry.type || entry.deploymentKind) === 'target'),
      'currentImplementations should retain BondingVotes target entry'
    );
  });

  runCase('generated blockchain page companion resolves explicit contract entries and bans stale copy drifts', () => {
    const pageData = loadBlockchainPageJson();
    const serialized = JSON.stringify(pageData);
    const contractSlugs = Object.keys(pageData.contracts || {});
    const l2Migrator = pageData.contracts['l2-migrator'];
    const merkleSnapshot = pageData.contracts['merkle-snapshot'];
    const faucet = pageData.contracts['livepeer-token-faucet'];
    const sections = pageData.sections || [];
    const expectedContracts = [
      'controller',
      'bonding-manager',
      'ticket-broker',
      'rounds-manager',
      'minter',
      'service-registry',
      'ai-service-registry',
      'livepeer-token-arbitrum',
      'livepeer-token-ethereum',
      'bridge-minter',
      'l2-lpt-gateway',
      'l1-lpt-gateway',
      'l1-escrow',
      'livepeer-token-faucet',
      'bonding-votes',
      'governor',
      'livepeer-governor',
      'treasury',
      'l2-migrator',
      'merkle-snapshot',
    ];

    assert.ok(Array.isArray(sections) && sections.length >= 4, 'blockchain page companion should publish section metadata');
    assert.deepStrictEqual(contractSlugs.sort(), expectedContracts.sort(), 'blockchain page companion should cover the full accordion roster');
    assert.strictEqual(l2Migrator.type, 'proxy', 'L2Migrator should remain a proxy entry');
    assert.ok(l2Migrator.proxyAddress, 'L2Migrator should expose proxyAddress');
    assert.ok(l2Migrator.targetAddress, 'L2Migrator should expose targetAddress');
    assert.notStrictEqual(l2Migrator.proxyAddress.toLowerCase(), l2Migrator.targetAddress.toLowerCase(), 'L2Migrator proxy and target must stay distinct');
    assert.strictEqual(l2Migrator.currentAddress.toLowerCase(), l2Migrator.proxyAddress.toLowerCase(), 'currentAddress should equal proxyAddress for proxy rows');
    assert.strictEqual(merkleSnapshot.supported, true, 'MerkleSnapshot should be a supported canonical page contract');
    assert.ok(Array.isArray(merkleSnapshot.functions) && merkleSnapshot.functions.length > 0, 'MerkleSnapshot should expose generated functions');
    assert.strictEqual(faucet.supported, false, 'LivepeerTokenFaucet should remain unsupported as a deployed canonical contract');
    assert.ok(faucet.unsupportedNote, 'unsupported contracts should expose an explicit note');
    assert.deepStrictEqual(pageData.contracts.controller.facts, ['Controller registry', 'Active']);
    assert.deepStrictEqual(
      pageData.contracts['bonding-manager'].facts,
      ['Controller registered', 'Active', 'Proxy target resolved', 'Target V13']
    );
    assert.deepStrictEqual(
      pageData.contracts['ai-service-registry'].facts,
      ['Deployment artifact confirmed', 'Runtime consumer confirmed', 'Active']
    );
    assert.deepStrictEqual(pageData.contracts.governor.facts, ['Deployment artifact confirmed', 'Active']);
    assert.deepStrictEqual(pageData.contracts['livepeer-token-faucet'].facts, []);
    assert.strictEqual(pageData.contracts['livepeer-token-faucet'].unsupportedNote, 'Local development utility contract.');
    assert.deepStrictEqual(
      pageData.contracts['l2-migrator'].facts,
      ['Controller registered', 'Migration', 'Proxy target resolved']
    );
    assert.strictEqual(
      serialized.includes('snippets/data/changelogs/contractAddressesData.jsx'),
      false,
      'blockchain page companion must not reference archived changelog data'
    );
    assert.strictEqual(serialized.includes('"weak"'), false, 'generated blockchain data must not emit weak verification language');
    assert.strictEqual(serialized.includes('Last active'), false, 'generated blockchain data must not emit stale last-active claims');
    assert.strictEqual(serialized.includes('transactions'), false, 'generated blockchain data must not emit stale transaction-count claims');
    assert.strictEqual(serialized.includes('residual ETH'), false, 'generated blockchain data must not emit stale residual-ETH claims');
    assert.strictEqual(serialized.includes('claimDelegatorStake'), false, 'generated blockchain data must not revive stale L2Migrator function names');
  });

  runCase('blockchain page spec is derived from the canonical contracts catalog', () => {
    const pageSpec = buildBlockchainContractPageSpec();
    const pageSpecSource = readText(BLOCKCHAIN_PAGE_SPEC_PATH);
    const expectedContracts = [
      'controller',
      'bonding-manager',
      'ticket-broker',
      'rounds-manager',
      'minter',
      'service-registry',
      'ai-service-registry',
      'livepeer-token-arbitrum',
      'livepeer-token-ethereum',
      'bridge-minter',
      'l2-lpt-gateway',
      'l1-lpt-gateway',
      'l1-escrow',
      'livepeer-token-faucet',
      'bonding-votes',
      'governor',
      'livepeer-governor',
      'treasury',
      'l2-migrator',
      'merkle-snapshot',
    ];

    assert.deepStrictEqual(
      pageSpec.contracts.map((contract) => contract.slug).sort(),
      expectedContracts.sort(),
      'derived blockchain page spec should cover the full accordion roster'
    );
    assert.ok(
      pageSpecSource.includes('buildBlockchainContractPageSpec'),
      'blockchain page spec wrapper should derive from the canonical catalog builder'
    );
  });

  runCase('generated registry emits historicalSeries without archived changelog references', () => {
    const data = loadGeneratedJson();
    const serialized = JSON.stringify(data);

    assert.ok(data.arbitrumOne?.historicalSeries?.core?.length > 0, 'arbitrumOne historicalSeries.core should be present');
    assert.ok(data.ethereumMainnet?.historicalSeries?.core?.length > 0, 'ethereumMainnet historicalSeries.core should be present');
    assert.ok(
      data.arbitrumOne.historicalSeries.core.some((series) => series.canonicalName === 'BondingManager'),
      'historicalSeries should retain BondingManager history'
    );
    assert.ok(
      data.ethereumMainnet.historicalSeries.genesis.some((series) => series.canonicalName === 'MerkleProof'),
      'historicalSeries should retain genesis history'
    );
    assert.strictEqual(
      serialized.includes('snippets/data/changelogs/contractAddressesData.jsx'),
      false,
      'generated contracts data must not reference the archived changelog path'
    );
  });

  runCase('generated registry keeps historical rows out of current state and bans weak verification language', () => {
    const data = loadGeneratedJson();
    const historicalRows = [
      ...(data.arbitrumOne?.historical || []),
      ...(data.ethereumMainnet?.historical || []),
    ];
    const serialized = JSON.stringify(data);

    assert.ok(historicalRows.length > 0, 'generated registry should publish historical rows');
    assert.strictEqual(
      historicalRows.some((entry) => entry.meta?.currentImplementation === true),
      false,
      'historical rows must not retain currentImplementation=true'
    );
    assert.strictEqual(
      historicalRows.some((entry) => entry.meta?.statusLabel === 'Current'),
      false,
      'historical rows must not publish Current status labels'
    );
    assert.strictEqual(
      historicalRows.some((entry) => entry.verification?.status === 'weak'),
      false,
      'historical rows must not expose weak verification status'
    );
    assert.strictEqual(
      serialized.includes('"weak"'),
      false,
      'generated contracts data must not emit weak verification language anywhere in the published payload'
    );
  });

  runCase('generated registry publishes externally proven ethereum legacy utility families and genesis history', () => {
    const data = loadGeneratedJson();
    const legacyOperational = data.ethereumMainnet?.legacy_operational || [];
    const legacyByName = new Map(legacyOperational.map((entry) => [entry.name, entry]));
    const missing = EXPECTED_ETH_LEGACY_UTILITY_NAMES.filter((name) => !legacyByName.has(name));
    const genesisSeries = data.ethereumMainnet?.historicalSeries?.genesis || [];
    const merkleProofGroup = genesisSeries.find((group) => group?.canonicalName === 'MerkleProof');

    assert.deepStrictEqual(
      missing,
      [],
      'ethereumMainnet.legacy_operational should retain the externally proven legacy utility families'
    );
    for (const name of EXPECTED_ETH_LEGACY_UTILITY_NAMES) {
      assert.strictEqual(
        legacyByName.get(name)?.addressSource?.kind,
        'explorer-search',
        `${name} should resolve from explorer-backed external proof`
      );
      assert.strictEqual(
        legacyByName.get(name)?.proofChain,
        'detached',
        `${name} should remain a detached external-proof contract`
      );
    }
    assert.ok(merkleProofGroup, 'ethereumMainnet historicalSeries.genesis should include MerkleProof');
    assert.ok(Array.isArray(merkleProofGroup.entries) && merkleProofGroup.entries.length > 0, 'MerkleProof genesis group should contain entries');
    assert.strictEqual(
      String(merkleProofGroup.entries[0]?.address || '').toLowerCase(),
      EXPECTED_ETH_HISTORICAL_GENESIS_ADDRESS,
      'MerkleProof genesis group should preserve the canonical address'
    );
  });

  runCase('ContractVerifier helper consumes lifecycle-safe groups and explicit controller registration', () => {
    const data = loadGeneratedJson();
    const { activeEntries, inventoryEntries, canonical } = buildContractVerifierChainData(data, 'arbitrumOne');

    assert.ok(activeEntries.length > 0, 'widget should receive active entries');
    assert.ok(inventoryEntries.length >= activeEntries.length, 'widget inventory should include at least the active entries');
    assert.strictEqual(
      activeEntries.some((entry) => (entry.type || entry.deploymentKind) === 'target'),
      false,
      'widget active set must not contain target rows'
    );
    assert.strictEqual(canonical.BondingManager?.type || canonical.BondingManager?.deploymentKind, 'proxy');
    assert.strictEqual(
      isContractVerifierControllerLookupEligible(canonical.BondingManager, true),
      true,
      'controller-managed active contracts should stay RPC-eligible'
    );
    assert.strictEqual(
      isContractVerifierControllerLookupEligible(canonical.AIServiceRegistry, true),
      false,
      'non-controller contracts must not be treated as controller lookups'
    );
    assert.strictEqual(canonical.BondingManager?.verification?.controller?.controllerRegistered, true);
    assert.strictEqual(canonical.BondingManager?.verification?.explorer?.host, 'arbiscan.io');
    assert.ok(
      canonical.BondingManager?.verification?.proxy?.implementationMatchesExpected !== false,
      'active proxy rows should not contradict expected implementation metadata'
    );
    assert.ok(canonical.BondingManager?.addressSource?.kind, 'generated entries should expose structured address source metadata');
  });

  runCase('active proxy rows expose runtime-resolved implementation addresses that match expected targets', () => {
    const data = loadGeneratedJson();
    const activeProxies = (data.arbitrumOne?.active || []).filter((entry) => (entry.type || entry.deploymentKind) === 'proxy');

    assert.ok(activeProxies.length > 0, 'arbitrumOne should publish active proxy rows');
    assert.strictEqual(
      activeProxies.some((entry) => !entry.verification?.proxy?.implementationAddress),
      false,
      'every active proxy should expose a runtime implementation address'
    );
    assert.strictEqual(
      activeProxies.some((entry) => entry.verification?.proxy?.controllerMatchesExpected === false),
      false,
      'active proxy controller pointers should match the expected chain controller'
    );
    assert.strictEqual(
      activeProxies.some((entry) =>
        entry.verification?.proxy?.expectedImplementationAddress
        && entry.verification?.proxy?.implementationMatchesExpected !== true
      ),
      false,
      'runtime proxy implementations should match expected targets where an expected target is defined'
    );
  });

  runCase('generated outputs preserve the existing named export contract for current consumers', () => {
    assert.ok(fs.existsSync(GENERATED_JSX_PATH), 'generated contractAddressesData.jsx is missing');
    assert.ok(fs.existsSync(BLOCKCHAIN_PAGE_JSX_PATH), 'generated blockchainContractsPageData.jsx is missing');

    const contractsJsx = readText(GENERATED_JSX_PATH);
    const blockchainJsx = readText(BLOCKCHAIN_PAGE_JSX_PATH);

    assert.ok(
      contractsJsx.includes('export const contractAddresses ='),
      'contractAddressesData.jsx must continue exporting contractAddresses'
    );
    assert.ok(
      blockchainJsx.includes('export const blockchainContractsPageData ='),
      'blockchainContractsPageData.jsx must continue exporting blockchainContractsPageData'
    );
  });

  runCase('contracts pages consume the shared contracts view-model and stable table stack', () => {
    const canonicalRoute = readText(CANONICAL_ROUTE_PATH);
    const canonicalComposable = readText(CANONICAL_COMPOSABLE_PATH);
    const pageDataHelper = readText(CANONICAL_PAGE_DATA_HELPER_PATH);
    const blockchainPage = readText(BLOCKCHAIN_PAGE_PATH);
    const contractsAdapter = readText(CONTRACTS_DATA_ADAPTER_PATH);
    const viewModelAdapter = readText(VIEW_MODEL_ADAPTER_PATH);
    const registryDataModule = readText(GENERATED_JSX_PATH);
    const blockchainDataModule = readText(BLOCKCHAIN_PAGE_JSX_PATH);

    assert.ok(canonicalRoute.includes('/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx'), 'canonical route should delegate rendering to the canonical composable');
    assert.ok(canonicalComposable.includes('/snippets/data/contract-addresses/view-model.jsx'), 'canonical composable should import the shared contracts view-model adapter');
    assert.ok(canonicalComposable.includes('/snippets/data/contract-addresses/contractAddressesData.jsx'), 'canonical composable should import the canonical contracts data module');
    assert.ok(!canonicalComposable.includes('/snippets/composables/pages/canonical/data/livepeer-contract-addresses-page-model.jsx'), 'canonical composable should not import the retired page-local selector layer');
    assert.ok(canonicalComposable.includes('getNonActiveGroups(contractAddresses).map'), 'canonical composable should build non-active sections from shared lifecycle groups');
    assert.ok(canonicalComposable.includes('getHistoricalCategories(contractAddresses).map'), 'canonical composable should build historical sections from shared category metadata');
    assert.ok(canonicalComposable.includes('getHistoricalCategoryMeta(group.key)'), 'canonical composable should resolve historical titles and descriptions from the shared view-model');

    assert.ok(!pageDataHelper.includes("from './livepeer-contract-addresses-page-model.jsx'"), 'page-local helper should not import the retired page-local selector layer');
    assert.strictEqual(
      /getEthereumActiveNameList|getActiveTableItems|getProxyTableItems|getPausedTableItems|getMigrationResidualTableItems|getLegacyOperationalTableItems|historicalCategoryTitle|historicalCategoryDescription/.test(pageDataHelper),
      false,
      'page-local helper should not re-export or retain shared selector bindings'
    );
    assert.ok(pageDataHelper.includes('export const buildCategoryAccordionRows ='), 'page-local helper should keep the render-only accordion row helper');
    assert.ok(pageDataHelper.includes('export const historicalCategoryIcon ='), 'page-local helper should keep the render-only historical icon helper');
    assert.strictEqual(fs.existsSync(CANONICAL_PAGE_MODEL_PATH), false, 'page-local selector layer should be removed');

    assert.ok(!blockchainPage.includes('/snippets/data/changelogs/contractAddressesData.jsx'), 'blockchain page should not import archived historical changelog data');
    assert.ok(!blockchainPage.includes('/snippets/composables/pages/canonical/data/blockchain-contracts-data.jsx'), 'blockchain page must not depend on the composable helper data layer');
    assert.ok(blockchainPage.includes('/snippets/data/contract-addresses/view-model.jsx'), 'blockchain page should import the shared contracts view-model adapter');
    assert.ok(blockchainPage.includes('/snippets/data/contract-addresses/blockchainContractsPageData.jsx'), 'blockchain page should import the blockchain contracts data module');
    assert.ok(!blockchainPage.includes('export const '), 'blockchain page should not own data/helper exports in MDX');
    assert.ok(!blockchainPage.includes('.current.find('), 'blockchain page should not use raw current.find lookups');
    assert.ok(!blockchainPage.includes('/v2/about/resources/contract-addresses'), 'blockchain page should link to the canonical route');
    assert.ok(blockchainPage.includes('contractsRoutes.reference'), 'blockchain page should link to the canonical reference page through the shared routes helper');
    assert.ok(blockchainPage.includes('contractsRoutes.verifier'), 'blockchain page should link to the verifier route through the shared routes helper');

    assert.ok(contractsAdapter.includes("from './contractAddressesData.jsx'"), 'contracts index should re-export the canonical contracts data module');
    assert.ok(contractsAdapter.includes("from './blockchainContractsPageData.jsx'"), 'contracts index should re-export the blockchain page data module');
    assert.ok(contractsAdapter.includes("export * from './view-model.jsx'"), 'contracts index should re-export the shared view-model adapter');
    assert.ok(registryDataModule.includes('export const contractAddresses ='), 'contracts data module should export the canonical registry data');
    assert.ok(blockchainDataModule.includes('export const blockchainContractsPageData ='), 'blockchain data module should export the blockchain contracts data');
    assert.ok(viewModelAdapter.includes('export const contractsRoutes ='), 'view-model adapter should define the shared contracts helpers directly');
  });

  runCase('docs navigation exposes the verifier route next to the contracts reference page', () => {
    const docsJson = readText(DOCS_JSON_PATH);

    assert.ok(docsJson.includes('v2/about/resources/reference/livepeer-contract-addresses'), 'docs.json should keep the canonical contracts route');
    assert.ok(docsJson.includes('v2/about/resources/verify-contract-addresses'), 'docs.json should include the verifier route');
  });

  runCase('AI sitemap freshness tracks generated contracts data for all contracts routes', () => {
    const canonicalDependencies = ROUTE_DEPENDENCIES['v2/about/resources/reference/livepeer-contract-addresses'] || [];
    const verifierDependencies = ROUTE_DEPENDENCIES['v2/about/resources/verify-contract-addresses'] || [];
    const blockchainDependencies = ROUTE_DEPENDENCIES['v2/about/protocol/blockchain-contracts'] || [];

    assert.ok(canonicalDependencies.includes('snippets/data/contract-addresses/contractAddressesData.json'));
    assert.strictEqual(
      canonicalDependencies.includes('snippets/composables/pages/canonical/livepeer-contract-addresses-data.json'),
      false,
      'route dependencies must not include the stale companion JSON path'
    );
    assert.ok(verifierDependencies.includes('snippets/data/contract-addresses/contractAddressesData.json'));
    assert.ok(blockchainDependencies.includes('snippets/data/contract-addresses/blockchainContractsPageData.json'));
  });

  runCase('buildValidationReport blocks provenance-affecting branch anomalies instead of downgrading them to warnings', () => {
    const payload = {
      arbitrumOne: { inventory: [] },
      ethereumMainnet: { inventory: [] },
    };
    const branchDiffs = BLOCKING_BRANCH_DIFF_TYPES.map((type) => ({
      type,
      repo: 'livepeer/protocol',
      detail: `${type} detected`,
    }));

    const report = buildValidationReport({
      catalog: { _meta: {} },
      payload,
      branchDiffs,
      resolutions: [],
    });

    assert.strictEqual(report.warnings.length, 0, 'blocking branch anomalies must not remain warnings');
    assert.deepStrictEqual(
      report.failures.map((failure) => failure.endpoint).sort(),
      [...BLOCKING_BRANCH_DIFF_TYPES].sort(),
      'all blocking branch anomaly types should become failures'
    );
  });

  runCase('workflow cadence and publish staging align with the pipeline output contract', () => {
    const mainWorkflow = readText(MAIN_WORKFLOW_PATH);
    const shadowWorkflow = readText(SHADOW_WORKFLOW_PATH);
    const constantsText = readText(CONTRACTS_CONSTANTS_PATH);

    assert.ok(
      mainWorkflow.includes(`- cron: \"${CONTRACTS_PIPELINE_CADENCE.mainScheduleCron}\"`),
      'main workflow cron must match the canonical cadence contract'
    );
    assert.ok(
      shadowWorkflow.includes(`- cron: \"${CONTRACTS_PIPELINE_CADENCE.shadowScheduleCron}\"`),
      'shadow workflow cron must match the canonical cadence contract'
    );
    assert.ok(
      mainWorkflow.includes('FLAGS="--check"'),
      'main workflow should keep the canonical --check validation contract'
    );
    assert.ok(
      shadowWorkflow.includes('FLAGS="--check"'),
      'shadow workflow should keep the canonical --check validation contract'
    );
    assert.strictEqual(
      constantsText.includes('livepeer-contract-addresses-data.json'),
      false,
      'pipeline constants must not publish the stale companion output path'
    );
    assert.strictEqual(
      mainWorkflow.includes('git add snippets/composables/pages/canonical/livepeer-contract-addresses-data.json'),
      false,
      'workflow staging must not add the stale companion output path'
    );
    assert.strictEqual(
      mainWorkflow.includes('git add snippets/data/contract-addresses/contractAddressesData.jsx'),
      true,
      'workflow staging should add the generated registry JSX artifact'
    );
    assert.strictEqual(
      mainWorkflow.includes('git add snippets/data/contract-addresses/blockchainContractsPageData.jsx'),
      true,
      'workflow staging should add the generated blockchain page JSX artifact'
    );
    assert.ok(constantsText.includes('contractAddressesData.jsx'), 'pipeline constants should publish the registry JSX output path');
    assert.ok(constantsText.includes('blockchainContractsPageData.jsx'), 'pipeline constants should publish the blockchain page JSX output path');
    assert.strictEqual(fs.existsSync(GENERATED_JSX_PATH), true, 'generated contractAddressesData.jsx should exist');
    assert.strictEqual(fs.existsSync(BLOCKCHAIN_PAGE_JSX_PATH), true, 'generated blockchainContractsPageData.jsx should exist');
  });

  return {
    errors,
    passed: errors.length === 0,
    total,
  };
}

if (require.main === module) {
  const result = runTests();

  if (result.errors.length > 0) {
    console.error('\n❌ Contracts addresses pipeline unit test failures:\n');
    result.errors.forEach((error) => {
      console.error(`  ${error.file}:${error.line} - ${error.rule}: ${error.message}`);
    });
  } else {
    console.log(`\n✅ Contracts addresses pipeline unit tests passed (${result.total} checks)`);
  }

  process.exit(result.passed ? 0 : 1);
}

module.exports = { runTests };
