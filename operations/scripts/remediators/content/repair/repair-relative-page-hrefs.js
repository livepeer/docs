#!/usr/bin/env node
/**
 * @script      repair-relative-page-hrefs
 * @category    remediator
 * @type        remediator
 * @concern     content
 * @niche       repair
 * @purpose     qa:link-integrity
 * @description Compatibility shim for repair-page-links.js — preserves the legacy relative-href repair entrypoint while delegating to the canonical page-links remediator.
 * @mode        edit
 * @domain      docs
 * @needs       E-R12, E-R14
 * @purpose-statement Preserve the legacy relative-href repair command while the canonical implementation lives under repair-page-links.js.
 * @pipeline    manual
 * @scope       operations/scripts/remediators/content/repair, operations/reports/health/page-links
 * @usage       node operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js [flags]
 * @policy      E-R12, E-R14
 */

const canonical = require('./repair-page-links');

if (require.main === module) {
  try {
    const args = canonical.parseArgs(process.argv.slice(2));
    if (args.help) {
      canonical.printHelp();
      process.exit(0);
    }
    const result = canonical.run({ parsedArgs: args, quiet: false });
    if (args.json) {
      process.stdout.write(`${JSON.stringify(result.jsonReport, null, 2)}\n`);
    }
    process.exit(0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = canonical;
