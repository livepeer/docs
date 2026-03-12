#!/usr/bin/env node
/**
 * @script            new-script
 * @category          generator
 * @purpose           qa:repo-health
 * @scope             tools/scripts, tests/unit/script-docs.test.js
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Script scaffolder — creates a new script file prefilled with the required docs header template
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/new-script.js [flags]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const ROOT = process.cwd();

function argValue(name) {
  const idx = args.indexOf(name);
  if (idx === -1) return '';
  return args[idx + 1] || '';
}

function usage() {
  console.log('Usage: node tools/scripts/new-script.js --path <repo-relative-path> [--owner <value>] [--summary <value>] [--scope <value>]');
}

function usageDefault(filePath) {
  if (filePath.endsWith('.sh') || filePath.endsWith('.bash')) return `bash ${filePath}`;
  if (filePath.endsWith('.py')) return `python3 ${filePath}`;
  return `node ${filePath}`;
}

function hashTemplate(params) {
  const cmd = usageDefault(params.filePath);
  const lines = [
    '# @script ' + params.scriptName,
    '# @category utility',
    '# @purpose tooling:dev-tools',
    '# @needs TODO: requirement-id',
    '# @owner ' + params.owner,
    '# @scope ' + params.scope,
    '# @purpose-statement ' + params.summary,
    '# @pipeline manual — interactive developer tool, not suited for automated pipelines',
    '# @usage ' + cmd + ' [flags]',
    ''
  ];
  return lines.join('\n');
}

function blockTemplate(params) {
  const cmd = usageDefault(params.filePath);
  const lines = [
    '/**',
    ` * @script ${params.scriptName}`,
    ' * @category utility',
    ' * @purpose tooling:dev-tools',
    ' * @needs TODO: requirement-id',
    ` * @owner ${params.owner}`,
    ` * @scope ${params.scope}`,
    ` * @purpose-statement ${params.summary}`,
    ' * @pipeline manual — interactive developer tool, not suited for automated pipelines',
    ` * @usage ${cmd} [flags]`,
    ' */',
    ''
  ];
  return lines.join('\n');
}

function createContent(filePath, owner, summary, scope) {
  const ext = path.extname(filePath).toLowerCase();
  const scriptName = path.basename(filePath, ext);
  const params = { filePath, owner, summary, scope, scriptName };
  const hashStyle = ext === '.sh' || ext === '.bash' || ext === '.py';

  let shebang = '';
  if (ext === '.sh' || ext === '.bash') shebang = '#!/usr/bin/env bash\n';
  if (ext === '.py') shebang = '#!/usr/bin/env python3\n';
  if (ext === '.js' || ext === '.mjs' || ext === '.cjs') shebang = '#!/usr/bin/env node\n';

  const template = hashStyle ? hashTemplate(params) : blockTemplate(params);
  return `${shebang}${template}`;
}

function main() {
  const filePath = argValue('--path');
  if (!filePath) {
    usage();
    process.exit(1);
  }

  const normalized = filePath.split(path.sep).join('/');
  const fullPath = path.join(ROOT, normalized);
  if (fs.existsSync(fullPath)) {
    console.error(`❌ File already exists: ${normalized}`);
    process.exit(1);
  }

  const owner = argValue('--owner') || 'docs';
  const summary = argValue('--summary') || 'TODO: one-line purpose';
  const scope = argValue('--scope') || path.dirname(normalized);
  const content = createContent(normalized, owner, summary, scope);

  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');

  console.log(`✅ Created ${normalized}`);
  console.log('Fill all TODO values before committing.');
}

main();
