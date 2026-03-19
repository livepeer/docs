#!/usr/bin/env node
/**
 * @script            orchestrator-guides-research-review
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts, tasks/reports/orchestrator-guides-review, tools/config/scoped-navigation/docs-gate-work.json, tasks/research, tests/unit/orchestrator-guides-research-review.test.js
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Orchestrator guides research review packet wrapper — delegates to the generic docs-research-packet engine with the live Orchestrators Guides nav scope and legacy default output root.
 * @pipeline          manual — packet generator compatibility wrapper
 * @usage             node tools/scripts/orchestrator-guides-research-review.js [flags]
 */

const packet = require('./docs-research-packet');

const DEFAULT_NAV = 'tools/config/scoped-navigation/docs-gate-work.json';
const DEFAULT_OUTPUT_ROOT = 'tasks/reports/orchestrator-guides-review/research-guides-review';
const DEFAULT_REGISTRY = 'tasks/research/claims';
const DEFAULT_LEDGER = 'tasks/research/adjudication/page-content-research-outcomes.json';

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/orchestrator-guides-research-review.js [options]',
      '',
      'Options:',
      `  --nav <path>            Navigation JSON path (default: ${DEFAULT_NAV})`,
      `  --out <path>            Output report root (default: ${DEFAULT_OUTPUT_ROOT})`,
      `  --registry <path>       Fact registry path (default: ${DEFAULT_REGISTRY})`,
      `  --ledger <path>         Adjudication ledger path (default: ${DEFAULT_LEDGER})`,
      '  --tranche <a,b,c>       Optional tranche slug or title filter',
      '  --quiet                 Suppress success logs',
      '  --help                  Show help'
    ].join('\n')
  );
}

function parseWrapperArgs(argv) {
  const args = {
    nav: DEFAULT_NAV,
    out: DEFAULT_OUTPUT_ROOT,
    registry: DEFAULT_REGISTRY,
    ledger: DEFAULT_LEDGER,
    tranche: [],
    quiet: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--nav') {
      args.nav = String(argv[index + 1] || '').trim() || args.nav;
      index += 1;
      continue;
    }
    if (token.startsWith('--nav=')) {
      args.nav = token.slice('--nav='.length).trim() || args.nav;
      continue;
    }
    if (token === '--out') {
      args.out = String(argv[index + 1] || '').trim() || args.out;
      index += 1;
      continue;
    }
    if (token.startsWith('--out=')) {
      args.out = token.slice('--out='.length).trim() || args.out;
      continue;
    }
    if (token === '--registry') {
      args.registry = String(argv[index + 1] || '').trim() || args.registry;
      index += 1;
      continue;
    }
    if (token.startsWith('--registry=')) {
      args.registry = token.slice('--registry='.length).trim() || args.registry;
      continue;
    }
    if (token === '--ledger') {
      args.ledger = String(argv[index + 1] || '').trim() || args.ledger;
      index += 1;
      continue;
    }
    if (token.startsWith('--ledger=')) {
      args.ledger = token.slice('--ledger='.length).trim() || args.ledger;
      continue;
    }
    if (token === '--tranche') {
      args.tranche = String(argv[index + 1] || '')
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean);
      index += 1;
      continue;
    }
    if (token.startsWith('--tranche=')) {
      args.tranche = token
        .slice('--tranche='.length)
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean);
      continue;
    }
    if (token === '--quiet') {
      args.quiet = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function findOrchestratorGuidesGroups(nav) {
  return packet.buildNavTranches(nav, {
    version: 'v2',
    language: 'en',
    tab: 'Orchestrators',
    group: 'Guides'
  });
}

function runWrapper(wrapperArgs) {
  return packet.runPacket({
    nav: wrapperArgs.nav,
    version: 'v2',
    language: 'en',
    tab: 'Orchestrators',
    group: 'Guides',
    section: [],
    manifest: '',
    files: [],
    folders: [],
    splitBy: '',
    out: wrapperArgs.out,
    registry: wrapperArgs.registry,
    ledger: wrapperArgs.ledger,
    tranche: wrapperArgs.tranche,
    quiet: wrapperArgs.quiet
  });
}

function main() {
  const args = parseWrapperArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    process.exit(0);
  }

  try {
    runWrapper(args);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildMasterPacket: packet.buildMasterPacket,
  buildTrancheResearchMarkdown: packet.buildTrancheResearchMarkdown,
  collectCoverageGaps: packet.collectCoverageGaps,
  collectRegistryDrift: packet.collectRegistryDrift,
  comparePageAndPr: packet.comparePageAndPr,
  filterRepeatedCounts: packet.filterRepeatedCounts,
  findOrchestratorGuidesGroups,
  formatCountLines: packet.formatCountLines,
  parseWrapperArgs,
  runWrapper,
  summarizeCounts: packet.summarizeCounts
};
