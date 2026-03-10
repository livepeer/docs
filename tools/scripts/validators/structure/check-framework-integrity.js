#!/usr/bin/env node
/**
 * @script            check-framework-integrity
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts/validators/structure, tests/unit, .githooks, .github/scripts, tools/scripts, tasks/scripts
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Checks that all repo scripts carry valid governance framework metadata headers and that script indexes are current
 * @pipeline          scheduled advisory only - do not add to commit or PR checks
 * @usage             node tools/scripts/validators/structure/check-framework-integrity.js [--strict]
 */

const { runTests } = require('../../../../tests/unit/script-docs.test.js');

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/validators/structure/check-framework-integrity.js [options]',
      '',
      'Options:',
      '  --strict    Exit 1 when any framework integrity issues are found (default: advisory, always exits 0)',
      '  --help, -h  Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const options = { strict: false, help: false };
  for (const token of argv) {
    if (token === '--strict') { options.strict = true; continue; }
    if (token === '--help' || token === '-h') { options.help = true; continue; }
    throw new Error(`Unknown argument: ${token}`);
  }
  return options;
}

function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    console.error('Run with --help to see usage.');
    process.exit(1);
  }

  if (options.help) {
    usage();
    process.exit(0);
  }

  console.log('Framework integrity check');
  console.log('Scanning all scoped scripts for valid governance framework metadata headers...\n');

  let result;
  try {
    result = runTests({ enforceExisting: true, checkIndexes: true });
  } catch (err) {
    console.error(`Framework integrity check: runTests failed — ${err.message}`);
    console.error(err.stack);
    process.exit(1);
  }

  if (!result || !Array.isArray(result.errors)) {
    console.error('Framework integrity check: runTests returned an unexpected result format. Cannot continue.');
    process.exit(1);
  }

  const totalScripts = typeof result.total === 'number' ? result.total : 0;
  const errorCount = result.errors.length;

  if (errorCount > 0) {
    console.error(`\n❌ Framework integrity issues found (${errorCount} error(s) across ${totalScripts} scripts):\n`);
    result.errors.forEach((err) => {
      console.error(`  ${err.file}:${err.line} — ${err.message}`);
    });
    console.error(
      '\nRun `node tests/unit/script-docs.test.js --autofill` to inject placeholder headers, then fill values before commit.'
    );
    console.error('Run `node tests/unit/script-docs.test.js --write --rebuild-indexes` to regenerate stale script indexes.\n');
  } else {
    console.log(`\n✅ Framework integrity check passed (${totalScripts} scripts checked, all indexes current)\n`);
  }

  if (options.strict && errorCount > 0) {
    process.exit(1);
  }

  process.exit(0);
}

try {
  main();
} catch (err) {
  console.error(`Framework integrity check failed unexpectedly: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
}
