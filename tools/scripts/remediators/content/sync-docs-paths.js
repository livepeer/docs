#!/usr/bin/env node
/**
 * @script            sync-docs-paths
 * @category          remediator
 * @purpose           qa:repo-health
 * @scope             staged
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Docs path sync remediator — applies deterministic docs.json and governed reference rewrites for moved docs pages.
 * @pipeline          P1, P6
 * @dualmode          --dry-run (validator) | --write (remediator)
 * @usage             node tools/scripts/remediators/content/sync-docs-paths.js --staged --dry-run
 */

const sync = require('../../lib/docs-path-sync');

function parseArgs(argv) {
  const args = { mode: 'dry-run', staged: true, stage: false, json: false, help: false, from: '', to: '' };
  let explicitModeCount = 0;
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') args.help = true;
    else if (token === '--dry-run') args.mode = 'dry-run', explicitModeCount += 1;
    else if (token === '--write') args.mode = 'write', explicitModeCount += 1;
    else if (token === '--staged') args.staged = true;
    else if (token === '--stage') args.stage = true;
    else if (token === '--json') args.json = true;
    else if (token === '--from') args.from = String(argv[index + 1] || '').trim(), index += 1;
    else if (token === '--to') args.to = String(argv[index + 1] || '').trim(), index += 1;
    else throw new Error(`Unknown argument: ${token}`);
  }
  if (explicitModeCount > 1) throw new Error('Choose only one mode: --dry-run or --write');
  if ((args.from && !args.to) || (!args.from && args.to)) throw new Error('--from and --to must be provided together');
  if (args.stage && args.mode !== 'write') throw new Error('--stage requires --write');
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const result = sync.runDocsPathSync({
    mode: args.mode === 'write' ? 'write' : 'check',
    stage: args.stage,
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
    const verb = args.mode === 'write' ? 'Applied' : 'Planned';
    console.log(`${verb} docs path sync changes for ${summary.pairs.length} move(s).`);
    console.log(`  - ambiguous move pairs: ${summary.ambiguous.length}`);
    console.log(`  - docs.json rewrites: ${summary.docsJsonChanges}`);
    console.log(`  - governed file rewrites: ${summary.fileChanges}`);
    summary.changedFiles.forEach((filePath) => console.log(`    ${filePath}`));
  }
  if (summary.ambiguous.length > 0) process.exit(1);
  if (args.mode !== 'write' && (summary.docsJsonChanges > 0 || summary.fileChanges > 0)) process.exit(1);
  process.exit(0);
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
