#!/usr/bin/env node
/**
 * @script            contracts-view-model.test
 * @category          validator
 * @purpose           qa:contracts-registry
 * @scope             tests/unit, snippets/data/contract-addresses/
 * @purpose-statement Focused regression tests for the shared contracts view-model helper surface.
 * @pipeline          manual, P3
 * @usage             node operations/tests/unit/contracts-view-model.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO_ROOT = path.resolve(__dirname, '../../..');
const VIEW_MODEL_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'view-model.js'
);
const CONTRACTS_JSON_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'contractAddressesData.json'
);
const BLOCKCHAIN_JSON_PATH = path.join(
  REPO_ROOT,
  'snippets',
  'data',
  'contract-addresses',
  'blockchainContractsPageData.json'
);

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function loadViewModel() {
  const source = fs.readFileSync(VIEW_MODEL_PATH, 'utf8');
  const exportNames = [...source.matchAll(/export const (\w+)\s*=/g)].map((match) => match[1]);
  const transformed = `${source.replace(/export const /g, 'const ')}\nmodule.exports = { ${exportNames.join(', ')} };`;
  const context = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(transformed, context, { filename: VIEW_MODEL_PATH });
  return context.module.exports;
}

function run() {
  const contractAddresses = loadJson(CONTRACTS_JSON_PATH);
  const blockchainPageData = loadJson(BLOCKCHAIN_JSON_PATH);
  const viewModel = loadViewModel();

  const activeRows = viewModel.getActiveTableItems(contractAddresses);
  const proxyRows = viewModel.getProxyTableItems(contractAddresses);
  const nonActiveGroups = viewModel.getNonActiveGroups(contractAddresses);
  const bindings = viewModel.getBlockchainContractBindings(blockchainPageData);
  const sorted = viewModel.sortContractsForDisplay([
    { Name: 'Treasury', Chain: 'Arbitrum One', Category: 'governance', Version: '—', _categoryKey: 'governance' },
    { Name: 'BridgeMinter', Chain: 'Ethereum Mainnet', Category: 'bridge', Version: '—', _categoryKey: 'bridge' },
    { Name: 'Controller', Chain: 'Arbitrum One', Category: 'core', Version: '—', _categoryKey: 'core' },
  ]);

  assert.ok(activeRows.length > 0, 'active rows should not be empty');
  assert.strictEqual(
    activeRows.some((row) => row.Type === 'proxy'),
    false,
    'active table rows should exclude proxy entries'
  );
  assert.ok(
    activeRows.some((row) => row.Name === 'BondingManager' && row.Type === 'target' && row.Version === 'V13'),
    'active rows should include current implementation targets'
  );

  assert.ok(proxyRows.length > 0, 'proxy rows should not be empty');
  const bondingManagerProxy = proxyRows.find((row) => row.Name === 'BondingManager');
  assert.ok(bondingManagerProxy, 'BondingManager proxy row should exist');
  assert.strictEqual(bondingManagerProxy.Proxy, 'proxy');
  assert.strictEqual(bondingManagerProxy.Target, 'target');
  assert.ok(/^0x[0-9a-fA-F]{40}$/.test(bondingManagerProxy['Proxy Address']), 'proxy row should expose a proxy address');
  assert.ok(/^0x[0-9a-fA-F]{40}$/.test(bondingManagerProxy['Target Address']), 'proxy row should expose a target address');

  assert.strictEqual(
    nonActiveGroups.map((group) => group.key).join(','),
    'paused,migration_residual,legacy_operational',
    'non-active groups should preserve lifecycle ordering'
  );
  assert.ok(
    nonActiveGroups.find((group) => group.key === 'paused')?.items.some((row) => row.Name === 'Controller'),
    'paused group should include paused controller-era contracts'
  );

  assert.strictEqual(
    sorted.map((row) => row.Name).join(','),
    'BridgeMinter,Controller,Treasury',
    'sorted rows should follow category ordering before name ordering'
  );

  assert.ok(bindings.controller, 'blockchain bindings should expose the controller address');
  assert.ok(bindings.l2Migrator, 'blockchain bindings should expose the L2Migrator proxy address');

  console.log('✅ contracts-view-model.test passed');
}

run();
