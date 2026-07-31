#!/usr/bin/env node
/**
 * @script            v2-link-audit
 * @category          validator
 * @type              validator
 * @concern           content
 * @niche             health
 * @purpose           qa:link-integrity
 * @description       Compatibility wrapper for page-links-audit.js that preserves the legacy v2-link-audit entrypoint while delegating to the canonical operations audit.
 * @mode              execute
 * @scope             tests/integration, operations/scripts/audits/content/health
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Compatibility wrapper for page-links-audit.js — preserves the legacy v2-link-audit entrypoint while delegating to the canonical operations audit.
 * @pipeline          P1, P5, P6
 * @usage             node operations/tests/integration/v2-link-audit.js [flags]
 * @policy            E-R12, E-R14
 */

const canonical = require('../../scripts/audits/content/health/page-links-audit');

if (require.main === module) {
  canonical.runAudit({ argv: process.argv.slice(2) })
    .then((result) => process.exit(result.exitCode || 0))
    .catch((error) => {
      console.error(`v2-link-audit failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = canonical;
