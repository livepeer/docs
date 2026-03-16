/**
 * @script            load-js-yaml
 * @category          utility
 * @purpose           tooling:dev-tools
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement YAML loader utility — resolves js-yaml from repo-local installs and falls back to a minimal parser for task-contract style files in bare worktrees
 * @pipeline          indirect — library module
 * @usage             node -e "require('./tools/lib/load-js-yaml')"
 */

const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..');

function tryRequire(candidate) {
  try {
    return require(candidate);
  } catch (_error) {
    return null;
  }
}

const yaml = tryRequire('js-yaml')
  || tryRequire(path.join(REPO_ROOT, 'tests', 'node_modules', 'js-yaml'))
  || tryRequire(path.join(REPO_ROOT, 'tools', 'node_modules', 'js-yaml'))
  || tryRequire(path.join(REPO_ROOT, 'node_modules', 'js-yaml'));

function parseScalar(raw) {
  const value = String(raw || '').trim();
  if (value === '[]') return [];
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+$/.test(value)) return Number(value);
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
    return value.slice(1, -1);
  }
  return value;
}

function stripKeyQuotes(value) {
  const key = String(value || '').trim();
  if (
    (key.startsWith('"') && key.endsWith('"'))
    || (key.startsWith('\'') && key.endsWith('\''))
  ) {
    return key.slice(1, -1);
  }
  return key;
}

function getIndent(line) {
  const match = String(line || '').match(/^(\s*)/);
  return match ? match[1].length : 0;
}

function loadSimpleYaml(source) {
  const result = {};
  let currentArrayKey = '';

  const lines = String(source || '').split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const arrayMatch = line.match(/^\s*-\s+(.*)$/);
    if (arrayMatch) {
      if (!currentArrayKey || !Array.isArray(result[currentArrayKey])) {
        throw new Error(`Unsupported YAML list item without parent key: ${line}`);
      }
      result[currentArrayKey].push(parseScalar(arrayMatch[1]));
      continue;
    }

    const keyMatch = line.match(/^(['"]?[A-Za-z0-9:_-]+['"]?):\s*(.*)$/);
    if (!keyMatch) {
      throw new Error(`Unsupported YAML syntax without js-yaml installed: ${line}`);
    }

    const [, rawKey, rawValue] = keyMatch;
    const key = stripKeyQuotes(rawKey);
    const trimmedValue = String(rawValue || '').trim();
    const currentIndent = getIndent(line);

    if (!trimmedValue) {
      result[key] = [];
      currentArrayKey = key;
      continue;
    }

    if (/^[>|][+-]?$/.test(trimmedValue)) {
      const blockStyle = trimmedValue[0];
      const blockLines = [];
      let blockIndent = null;
      let cursor = index + 1;

      while (cursor < lines.length) {
        const nextLine = lines[cursor];
        if (!nextLine.trim()) {
          blockLines.push('');
          cursor += 1;
          continue;
        }

        const nextIndent = getIndent(nextLine);
        if (nextIndent <= currentIndent) break;
        if (blockIndent === null) blockIndent = nextIndent;
        blockLines.push(nextLine.slice(blockIndent));
        cursor += 1;
      }

      index = cursor - 1;
      const normalized = blockStyle === '|'
        ? blockLines.map((entry) => entry.trimEnd()).join('\n').trim()
        : blockLines.join(' ').replace(/\s+/g, ' ').trim();

      result[key] = normalized;
      currentArrayKey = '';
      continue;
    }

    result[key] = parseScalar(trimmedValue);
    currentArrayKey = Array.isArray(result[key]) ? key : '';
  }

  return result;
}

module.exports = yaml || {
  load: loadSimpleYaml
};
