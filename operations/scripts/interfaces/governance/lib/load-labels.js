/**
 * @script            load-labels
 * @type              utility
 * @concern           governance
 * @niche             issue-lifecycle
 * @purpose           Loads the canonical label taxonomy from .github/config/labels.json
 * @description       Returns the labels object and managed_prefixes from the central config.
 *                    All interface scripts MUST use this instead of hardcoding label metadata.
 * @mode              integrate
 * @scope             operations/scripts/interfaces/governance/
 * @usage             const { labels, managedPrefixes } = require('./lib/load-labels.js');
 * @policy            D-GOV-04 (tooling makes correct the default)
 */

'use strict';

const path = require('path');
const fs = require('fs');

const LABELS_PATH = path.resolve(process.cwd(), '.github', 'config', 'labels.json');

let _cache = null;

function load() {
  if (_cache) return _cache;
  const raw = JSON.parse(fs.readFileSync(LABELS_PATH, 'utf8'));
  _cache = {
    labels: raw.labels,
    managedPrefixes: raw._meta.managed_prefixes || [],
    /**
     * Get label metadata by name. Returns { color, description } or a default.
     */
    getMeta: (name) => raw.labels[name] || { color: 'ededed', description: `Managed label: ${name}` },
  };
  return _cache;
}

module.exports = load;
