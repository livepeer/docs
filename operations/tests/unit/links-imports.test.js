#!/usr/bin/env node
/**
 * @script            links-imports.test
 * @category          validator
 * @type              validator
 * @concern           content
 * @niche             health
 * @purpose           qa:link-integrity
 * @description       Compatibility alias for links.test.js that preserves the legacy links-imports entrypoint while delegating to the link-only validator.
 * @mode              execute
 * @scope             tests
 * @domain            docs
 * @needs             E-R12, E-R14
 * @purpose-statement Compatibility alias for links.test.js — preserves the legacy entrypoint while delegating to the link-only validator.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/links-imports.test.js [--dry-run] [--scope routable-v2|repo] [--staged] [--files <paths>]
 * @policy            E-R12, E-R14
 */

const linksValidator = require('./links.test');

if (require.main === module) {
  process.exit(linksValidator.runCli(process.argv.slice(2), { scriptName: 'links-imports.test.js' }));
}

module.exports = linksValidator;
