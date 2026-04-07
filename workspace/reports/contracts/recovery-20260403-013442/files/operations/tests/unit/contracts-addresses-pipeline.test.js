#!/usr/bin/env node
/**
 * @script            contracts-addresses-pipeline.test
 * @category          validator
 * @purpose           qa:contracts-registry
 * @scope             tests/unit, .github/scripts/fetch-contract-addresses.js, operations/scripts/automations/content/data/contracts/, snippets/components/integrators/feeds/ContractVerifier.jsx, snippets/data/contract-addresses/contractAddressesData.json
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Regression tests for the contracts proof catalog, lifecycle grouping, generated registry output, and widget data-consumption contract.
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
const BLOCKCHAIN_PAGE_JSON_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'blockchainContractsPageData.json'
);
const CANONICAL_PAGE_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'composables',
  'pages',
  'canonical',
  'livepeer-contract-addresses.mdx'
);
const BLOCKCHAIN_PAGE_PATH = path.join(
  REPO_ROOT,
  'v2',
  'about',
  'livepeer-protocol',
  'blockchain-contracts.mdx'
);

const STALE_ARBITRUM_MINTER_V1 = '0x4969dcCF5186e1c49411638fc8A2a020Fdab752E'.toLowerCase();
const STALE_BONDING_VOTES_TARGET = '0x1561fC5F7Efc049476224005DFf38256dccfc509'.toLowerCase();

let errors = [];

function runCase(name, fn) {
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

function loadGeneratedJson() {
  assert.ok(fs.existsSync(GENERATED_JSON_PATH), 'generated contractAddressesData.json is missing');
  return JSON.parse(readText(GENERATED_JSON_PATH));
}

function loadBlockchainPageJson() {
  assert.ok(fs.existsSync(BLOCKCHAIN_PAGE_JSON_PATH), 'generated blockchainContractsPageData.json is missing');
  return JSON.parse(readText(BLOCKCHAIN_PAGE_JSON_PATH));
}

function runTests() {
  errors = [];

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
      governorChain,
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
    );

    assert.strictEqual(payload.current, payload.active, 'current should remain an alias of active');
    assert.strictEqual(payload.active.some((entry) => (entry.type || entry.deploymentKind) === 'target'), false);
    assert.strictEqual(payload.currentImplementations.length, 1);
    assert.strictEqual(payload.currentImplementations[0].address, '0x4000000000000000000000000000000000000004');
    assert.strictEqual(payload.migration_residual[0].name, 'L2Migrator');
    assert.strictEqual(payload.paused[0].name, 'Controller');
  });

  runCase('generated registry excludes stale active rows and target rows from arbitrumOne.active', () => {
    const data = loadGeneratedJson();
    const active = data.arbitrumOne?.active || [];
    const implementations = data.arbitrumOne?.currentImplementations || [];

    assert.ok(active.length > 0, 'arbitrumOne.active should not be empty');
    assert.strictEqual(
      active.some((entry) => String(entry.address || '').toLowerCase() === STALE_ARBITRUM_MINTER_V1),
      false,
      'stale Arbitrum Minter V1 must not appear in active',
    );
    assert.strictEqual(
      active.some((entry) => String(entry.address || '').toLowerCase() === STALE_BONDING_VOTES_TARGET),
      false,
      'stale BondingVotes target must not appear in active',
    );
    assert.strictEqual(
      active.some((entry) => (entry.type || entry.deploymentKind) === 'target'),
      false,
      'active table must not contain target rows',
    );
    assert.strictEqual(
      active.some((entry) => entry.name === 'L2Migrator'),
      false,
      'migration-residual contracts must not appear in active',
    );
    assert.ok(
      implementations.some((entry) => entry.name === 'BondingVotes' && (entry.type || entry.deploymentKind) === 'target'),
      'currentImplementations should retain BondingVotes target entry',
    );
  });

  runCase('generated blockchain page companion resolves explicit contract entries and source-backed fallbacks', () => {
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
    assert.deepStrictEqual(
      pageData.contracts.governor.facts,
      ['Deployment artifact confirmed', 'Active']
    );
    assert.deepStrictEqual(
      pageData.contracts['livepeer-token-faucet'].facts,
      []
    );
    assert.strictEqual(
      pageData.contracts['livepeer-token-faucet'].unsupportedNote,
      'Local development utility contract.'
    );
    assert.strictEqual(
      serialized.includes('snippets/data/changelogs/contractAddressesData.jsx'),
      false,
      'blockchain page companion must not reference archived changelog data'
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

  runCase('ContractVerifier helper consumes lifecycle-safe groups and explicit controller registration', () => {
    const data = loadGeneratedJson();
    const { activeEntries, inventoryEntries, canonical } = buildContractVerifierChainData(data, 'arbitrumOne');

    assert.ok(activeEntries.length > 0, 'widget should receive active entries');
    assert.ok(inventoryEntries.length >= activeEntries.length, 'widget inventory should include at least the active entries');
    assert.strictEqual(
      activeEntries.some((entry) => (entry.type || entry.deploymentKind) === 'target'),
      false,
      'widget active set must not contain target rows',
    );
    assert.strictEqual(canonical.BondingManager?.type || canonical.BondingManager?.deploymentKind, 'proxy');
    assert.strictEqual(
      isContractVerifierControllerLookupEligible(canonical.BondingManager, true),
      true,
      'controller-managed active contracts should stay RPC-eligible',
    );
    assert.strictEqual(
      isContractVerifierControllerLookupEligible(canonical.AIServiceRegistry, true),
      false,
      'non-controller contracts must not be treated as controller lookups',
    );
    assert.strictEqual(canonical.BondingManager?.verification?.controller?.controllerRegistered, true);
    assert.strictEqual(canonical.BondingManager?.verification?.explorer?.host, 'arbiscan.io');
    assert.ok(
      canonical.BondingManager?.verification?.proxy?.implementationMatchesExpected !== false,
      'active proxy rows should not contradict expected implementation metadata',
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
      'every active proxy should expose a runtime implementation address',
    );
    assert.strictEqual(
      activeProxies.some((entry) => entry.verification?.proxy?.controllerMatchesExpected === false),
      false,
      'active proxy controller pointers should match the expected chain controller',
    );
    assert.strictEqual(
      activeProxies.some((entry) =>
        entry.verification?.proxy?.expectedImplementationAddress
        && entry.verification?.proxy?.implementationMatchesExpected !== true
      ),
      false,
      'runtime proxy implementations should match expected targets where an expected target is defined',
    );
  });

  runCase('contracts pages are rewired away from raw current lookups and legacy routes', () => {
    const canonicalPage = readText(CANONICAL_PAGE_PATH);
    const blockchainPage = readText(BLOCKCHAIN_PAGE_PATH);

    assert.ok(!canonicalPage.includes('scan_fix'), 'canonical page should not mention removed scan_fix workflow input');
    assert.ok(canonicalPage.includes("/snippets/composables/pages/canonical/data/livepeer-contract-addresses-page-data.jsx"), 'canonical page should import the canonical contracts page data module');
    assert.ok(!canonicalPage.includes('export const '), 'canonical page should not own data/helper exports in MDX');
    assert.ok(!canonicalPage.includes('/snippets/data/changelogs/contractAddressesData.jsx'), 'canonical page should not import archived historical changelog data');
    assert.ok(canonicalPage.includes('HistoricalContractTable category="core" sourceData={contractAddresses}'), 'canonical page should consume generated historical data through the table component');
    assert.ok(!blockchainPage.includes('/snippets/data/changelogs/contractAddressesData.jsx'), 'blockchain page should not import archived historical changelog data');
    assert.ok(blockchainPage.includes('/snippets/composables/pages/canonical/data/blockchain-contracts-data.jsx'), 'blockchain page should import the canonical blockchain page data module');
    assert.ok(!blockchainPage.includes('export const '), 'blockchain page should not own data/helper exports in MDX');
    assert.ok(!blockchainPage.includes("/snippets/data/contract-addresses/contractAddressesData.jsx"), 'blockchain page should not import the raw registry page-side');
    assert.ok(!blockchainPage.includes('.current.find('), 'blockchain page should not use raw current.find lookups');
    assert.ok(!blockchainPage.includes('getExplorerHref('), 'blockchain page should not use legacy explorer helper lookups');
    assert.ok(!blockchainPage.includes('getCodeHref('), 'blockchain page should not use legacy source helper lookups');
    assert.ok(!blockchainPage.includes('FunctionField name='), 'blockchain page should not hardcode contract function lists');
    assert.ok(!blockchainPage.includes('/v2/about/resources/contract-addresses'), 'blockchain page should link to the canonical route');
  });

  runCase('AI sitemap freshness tracks generated contracts data for both contracts routes', () => {
    const canonicalDependencies = ROUTE_DEPENDENCIES['v2/about/resources/livepeer-contract-addresses'] || [];
    const blockchainDependencies = ROUTE_DEPENDENCIES['v2/about/livepeer-protocol/blockchain-contracts'] || [];

    assert.ok(canonicalDependencies.includes('snippets/data/contract-addresses/contractAddressesData.json'));
    assert.ok(canonicalDependencies.includes('snippets/composables/pages/canonical/livepeer-contract-addresses-data.json'));
    assert.ok(blockchainDependencies.includes('snippets/data/contract-addresses/blockchainContractsPageData.json'));
    assert.ok(blockchainDependencies.includes('snippets/data/contract-addresses/blockchainContractsPageData.jsx'));
  });

  return {
    errors,
    passed: errors.length === 0,
    total: 10,
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
