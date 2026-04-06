/**
 * @script            load-minimatch
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Glob matcher loader — resolves minimatch from repo-local installs and falls back to a simple glob matcher for bare worktrees
 * @pipeline          indirect — library module
 * @usage             node -e "require('./tools/lib/load-minimatch')"
 */

const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');

function tryRequire(candidate) {
  try {
    return require(candidate);
  } catch (_error) {
    return null;
  }
}

function escapeRegexChar(value) {
  return String(value || '').replace(/[|\\{}()[\]^$+?.]/g, '\\$&');
}

function globToRegex(pattern, nocase = false) {
  const input = String(pattern || '');
  let source = '^';

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (char === '*') {
      if (input[i + 1] === '*') {
        source += '.*';
        i += 1;
      } else {
        source += '[^/]*';
      }
      continue;
    }
    if (char === '?') {
      source += '.';
      continue;
    }
    source += escapeRegexChar(char);
  }

  source += '$';
  return new RegExp(source, nocase ? 'i' : '');
}

function fallbackMinimatch(input, pattern, options = {}) {
  const re = globToRegex(pattern, Boolean(options && options.nocase));
  return re.test(String(input || ''));
}

const loaded = tryRequire('minimatch')
  || tryRequire(path.join(REPO_ROOT, 'tests', 'node_modules', 'minimatch'))
  || tryRequire(path.join(REPO_ROOT, 'tools', 'node_modules', 'minimatch'))
  || tryRequire(path.join(REPO_ROOT, 'node_modules', 'minimatch'));

module.exports = loaded || {
  minimatch: fallbackMinimatch
};
