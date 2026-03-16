/**
 * @script            resolve-scoped-docs-config
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts/dev/lib, tools/config/scoped-navigation
 * @domain            docs
 * @needs             E-C6, F-C1
 * @purpose-statement Scoped docs config resolver — resolves named scoped navigation configs and explicit docs config paths for mint-dev tooling
 * @pipeline          indirect -- library module
 * @usage             node -e "require('./tools/scripts/dev/lib/resolve-scoped-docs-config')"
 */
const fs = require('fs');
const path = require('path');

const SCOPED_NAVIGATION_RELATIVE_DIR = path.join('tools', 'config', 'scoped-navigation');

function normalizeInput(value) {
  return String(value || '').trim();
}

function isExplicitPath(value) {
  const input = normalizeInput(value);
  if (!input) return false;
  return path.isAbsolute(input) || input.startsWith('./') || input.startsWith('../') || /[\\/]/.test(input);
}

function buildDocsConfigCandidates(repoRoot, docsConfig) {
  const repoRootPath = path.resolve(repoRoot || process.cwd());
  const input = normalizeInput(docsConfig);
  if (!input) return [];

  if (path.isAbsolute(input)) {
    return [path.resolve(input)];
  }

  if (isExplicitPath(input)) {
    return [path.resolve(repoRootPath, input)];
  }

  return [
    path.join(repoRootPath, SCOPED_NAVIGATION_RELATIVE_DIR, input),
    path.join(repoRootPath, input)
  ];
}

function resolveDocsConfigPath(repoRoot, docsConfig) {
  const input = normalizeInput(docsConfig);
  if (!input) return '';

  const candidates = buildDocsConfigCandidates(repoRoot, input);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  const checkedList = candidates.join(', ');
  throw new Error(`Docs config "${input}" not found. Checked: ${checkedList}`);
}

module.exports = {
  SCOPED_NAVIGATION_RELATIVE_DIR,
  buildDocsConfigCandidates,
  isExplicitPath,
  resolveDocsConfigPath
};
