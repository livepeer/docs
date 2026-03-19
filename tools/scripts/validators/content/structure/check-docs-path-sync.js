#!/usr/bin/env node
/**
 * @script            check-docs-path-sync
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             staged
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Docs path sync validator — detects staged page moves that require docs.json or governed path reference rewrites.
 * @pipeline          P1, P6
 * @dualmode          --check (validator) | --json (machine-readable report)
 * @usage             node tools/scripts/validators/content/check-docs-path-sync.js --staged
 */

const sync = require('../../lib/docs-path-sync');

function parseArgs(argv) {
  const args = { staged: true, json: false, help: false, from: '', to: '' };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') args.help = true;
    else if (token === '--staged') args.staged = true;
    else if (token === '--json') args.json = true;
    else if (token === '--from') args.from = String(argv[index + 1] || '').trim(), index += 1;
    else if (token === '--to') args.to = String(argv[index + 1] || '').trim(), index += 1;
    else throw new Error(`Unknown argument: ${token}`);
  }
  if ((args.from && !args.to) || (!args.from && args.to)) throw new Error('--from and --to must be provided together');
  return args;
}

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/validators/content/check-docs-path-sync.js [--staged] [--json] [--from <old> --to <new>]',
      '',
      'Options:',
      '  --staged         Inspect staged rename/move inventory (default).',
      '  --from <path>    Explicit source file path for a single move.',
      '  --to <path>      Explicit target file path for a single move.',
      '  --json           Print machine-readable JSON summary.',
      '  --help           Show this help output.'
    ].join('\n')
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }
  const result = sync.runDocsPathSync({
    mode: 'check',
    explicitMoves: args.from && args.to ? [{ sourcePath: args.from, targetPath: args.to }] : []
  });
  const summary = {
    pairs: result.pairs,
    ambiguous: result.ambiguous,
    unmatchedAdds: result.unmatchedAdds,
    docsJsonChanges: result.docsJsonChanges.length,
    fileChanges: result.fileChanges.length,
    changedFiles: [...new Set(result.changedFiles)]
  };
  if (args.json) process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  else {
    console.log(`Pairs detected: ${summary.pairs.length}`);
    console.log(`Ambiguous staged moves: ${summary.ambiguous.length}`);
    console.log(`Planned docs.json rewrites: ${summary.docsJsonChanges}`);
    console.log(`Planned governed file rewrites: ${summary.fileChanges}`);
  }
  process.exit(summary.ambiguous.length > 0 || summary.docsJsonChanges > 0 || summary.fileChanges > 0 ? 1 : 0);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = { parseArgs };
