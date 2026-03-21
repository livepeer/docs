#!/usr/bin/env node
/**
 * @script   update-jsdoc-headers.js
 * @type      remediator
 * @concern   governance
 * @niche     scaffold
 * @purpose   Rewrite JSDoc headers in all scripts to the 11-tag standard
 * @description One-time migration script that reads JSDoc headers across all
 *   type folders, derives @type/@concern/@niche from folder path, and writes
 *   the new 11-tag header format. Dry-run by default.
 * @mode      edit
 * @pipeline  governance-pipeline
 * @scope     all
 * @usage     node tools/scripts/remediators/governance/scaffold/update-jsdoc-headers.js [--write]
 * @policy    dry-run by default; --write to apply changes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WRITE = process.argv.includes('--write');
const REPO = process.cwd();

// Map from path segments to taxonomy values
const TYPE_MAP = {
  audits: 'audit',
  generators: 'generator',
  validators: 'validator',
  remediators: 'remediator',
  dispatch: 'dispatch',
  automations: 'automation',
};

const CONCERN_LIST = ['content', 'components', 'governance', 'ai'];

const MODE_HEURISTICS = {
  audit: 'read-only',
  validator: 'read-only',
  generator: 'generate',
  remediator: 'edit',
  dispatch: 'execute',
  automation: 'execute',
};

// Discover all scripts
function findScripts() {
  const dirs = [
    'operations/scripts/audits',
    'operations/scripts/generators',
    'operations/scripts/validators',
    'operations/scripts/remediators',
    'operations/scripts/dispatch',
    'operations/scripts/automations',
    'operations/scripts/config',
    '.githooks',
    'tools/dev',
  ];

  const scripts = [];
  for (const dir of dirs) {
    const full = path.join(REPO, dir);
    if (!fs.existsSync(full)) continue;
    const files = execSync(
      `find "${full}" -type f \\( -name "*.js" -o -name "*.sh" -o -name "*.py" \\) | grep -v node_modules | grep -v x-archive | grep -v "/test/" | grep -v "/lib/" | grep -v ".test."`,
      { encoding: 'utf8' }
    ).trim().split('\n').filter(Boolean);
    scripts.push(...files);
  }
  return scripts;
}

// Extract taxonomy from file path
function getTaxonomy(filePath) {
  const rel = path.relative(REPO, filePath);
  const parts = rel.split(path.sep);

  // tools/scripts/<type>/<concern>/<niche>/script.js
  // tools/dev/script.js
  // .githooks/script.js
  // tools/scripts/config/script.js

  if (parts[0] === '.githooks') {
    return { type: 'dispatch', concern: 'governance', niche: 'hooks', location: 'hooks' };
  }
  if (parts[0] === 'tools' && parts[1] === 'dev') {
    return { type: 'automation', concern: 'governance', niche: 'dev-tools', location: 'dev' };
  }
  if (parts[0] === 'tools' && parts[1] === 'scripts' && parts[2] === 'config') {
    return { type: 'generator', concern: 'governance', niche: 'config', location: 'config' };
  }

  // tools/scripts/<type>/<concern>/[<niche>/]script.js
  if (parts[0] === 'tools' && parts[1] === 'scripts') {
    const typeDir = parts[2];
    const type = TYPE_MAP[typeDir] || typeDir;
    const concern = CONCERN_LIST.includes(parts[3]) ? parts[3] : '';
    // Niche is the folder after concern, or empty
    const fileName = parts[parts.length - 1];
    const nicheIndex = concern ? 4 : 3;
    const niche = parts.length > nicheIndex + 1 ? parts[nicheIndex] : '';
    return { type, concern, niche, location: 'scripts' };
  }

  return { type: '', concern: '', niche: '', location: 'unknown' };
}

// Extract existing tag values from file content
function extractOldTags(content) {
  const tags = {};
  const re = /\*\s*@(\w[\w-]*)\s+(.*)/g;
  // Also handle shell-style: # @tag value
  const reShell = /#\s*@(\w[\w-]*)\s+(.*)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    tags[m[1]] = m[2].trim();
  }
  while ((m = reShell.exec(content)) !== null) {
    if (!tags[m[1]]) tags[m[1]] = m[2].trim();
  }
  return tags;
}

// Build new header block
function buildNewHeader(filePath, oldTags, taxonomy) {
  const ext = path.extname(filePath);
  const basename = path.basename(filePath, ext);
  const isShell = ext === '.sh';
  const isPython = ext === '.py';

  const scriptName = oldTags.script || basename;
  const type = taxonomy.type;
  const concern = taxonomy.concern;
  const niche = taxonomy.niche;
  const purpose = oldTags.purpose || '';
  const desc = oldTags['purpose-statement'] || oldTags.description || '';
  const mode = MODE_HEURISTICS[type] || 'read-only';
  const scope = oldTags.scope || '';
  const usage = oldTags.usage || '';
  const policy = oldTags.needs || '';

  // Build pipeline from old pipeline tag or infer
  let pipeline = oldTags.pipeline || 'manual';
  // Clean up old P1/P5 style
  pipeline = pipeline
    .replace(/^P\d+\s*[,(]\s*/i, '')
    .replace(/^P\d+/i, 'manual')
    .replace(/indirect/i, 'manual');

  const pad = (tag, len) => tag.padEnd(len);

  if (isShell || isPython) {
    const comment = isShell ? '#' : '#';
    const lines = [
      `${comment} @script      ${scriptName}`,
      `${comment} @type        ${type}`,
      `${comment} @concern     ${concern}`,
      `${comment} @niche       ${niche}`,
      `${comment} @purpose     ${purpose}`,
      `${comment} @description ${desc}`,
      `${comment} @mode        ${mode}`,
      `${comment} @pipeline    ${pipeline}`,
      `${comment} @scope       ${scope}`,
      `${comment} @usage       ${usage}`,
    ];
    if (policy) lines.push(`${comment} @policy      ${policy}`);
    return lines;
  }

  const lines = [
    ` * @script      ${scriptName}`,
    ` * @type        ${type}`,
    ` * @concern     ${concern}`,
    ` * @niche       ${niche}`,
    ` * @purpose     ${purpose}`,
    ` * @description ${desc}`,
    ` * @mode        ${mode}`,
    ` * @pipeline    ${pipeline}`,
    ` * @scope       ${scope}`,
    ` * @usage       ${usage}`,
  ];
  if (policy) lines.push(` * @policy      ${policy}`);
  return lines;
}

// Replace the header block in file content
function replaceHeader(content, filePath, newHeaderLines) {
  const ext = path.extname(filePath);
  const isShell = ext === '.sh';
  const isPython = ext === '.py';

  if (isShell || isPython) {
    // Find block of consecutive # @tag lines
    const lines = content.split('\n');
    let start = -1;
    let end = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/^#\s*@\w/.test(lines[i])) {
        if (start === -1) start = i;
        end = i;
      } else if (start !== -1 && !/^#/.test(lines[i])) {
        break;
      }
    }
    if (start === -1) return null; // no header found
    const before = lines.slice(0, start);
    const after = lines.slice(end + 1);
    return [...before, ...newHeaderLines, ...after].join('\n');
  }

  // JS: find the /** ... */ block containing @script
  const jsDocRe = /\/\*\*[\s\S]*?\*\//;
  const match = content.match(jsDocRe);
  if (!match) return null;

  const oldBlock = match[0];
  if (!/@script/.test(oldBlock)) return null;

  // Build new block
  const newBlock = `/**\n${newHeaderLines.join('\n')}\n */`;
  return content.replace(oldBlock, newBlock);
}

// Main
const scripts = findScripts();
let updated = 0;
let skipped = 0;
const errors = [];

for (const filePath of scripts) {
  const rel = path.relative(REPO, filePath);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const oldTags = extractOldTags(content);
    const taxonomy = getTaxonomy(filePath);

    if (!oldTags.script && !oldTags['purpose-statement']) {
      skipped++;
      continue;
    }

    const newLines = buildNewHeader(filePath, oldTags, taxonomy);
    const newContent = replaceHeader(content, filePath, newLines);

    if (!newContent) {
      skipped++;
      continue;
    }

    if (WRITE) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`  ✓ ${rel}`);
    } else {
      console.log(`  [dry-run] ${rel}`);
      console.log(`    type=${taxonomy.type} concern=${taxonomy.concern} niche=${taxonomy.niche}`);
    }
    updated++;
  } catch (e) {
    errors.push(`${rel}: ${e.message}`);
  }
}

console.log(`\n${WRITE ? 'Updated' : 'Would update'}: ${updated} scripts`);
console.log(`Skipped (no header): ${skipped}`);
if (errors.length) {
  console.log(`Errors: ${errors.length}`);
  errors.forEach(e => console.log(`  ✗ ${e}`));
}
