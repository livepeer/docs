#!/usr/bin/env node
/**
 * @script new-script
 * @summary Create a new script file prefilled with the required docs header template.
 * @owner docs
 * @scope tools/scripts, tests/unit/script-docs.test.js
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/new-script.js --path tests/integration/my-script.js
 *
 * @inputs
 *   --path <repo-relative-path> (required)
 *   --owner <value> (default: docs)
 *   --summary <value> (default: TODO placeholder)
 *   --scope <value> (default: script directory path)
 *
 * @outputs
 *   - Creates a new script file with template header and optional shebang
 *
 * @exit-codes
 *   0 = script file created
 *   1 = invalid args or target already exists
 *
 * @examples
 *   node tools/scripts/new-script.js --path tasks/scripts/foo.sh --owner docs --scope tasks/scripts
 *
 * @notes
 *   Generated files intentionally contain TODO placeholders so enforcement still requires completion.
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
    '# @summary ' + params.summary,
    '# @owner ' + params.owner,
    '# @scope ' + params.scope,
    '#',
    '# @usage',
    '#   ' + cmd,
    '#',
    '# @inputs',
    '#   TODO: --flag <description> (default: ...)',
    '#',
    '# @outputs',
    '#   - TODO: output file/path/side effect',
    '#',
    '# @exit-codes',
    '#   0 = success',
    '#   1 = failure',
    '#',
    '# @examples',
    '#   ' + cmd,
    '#',
    '# @notes',
    '#   TODO: caveats, constraints, safety notes',
    ''
  ];
  return lines.join('\n');
}

function blockTemplate(params) {
  const cmd = usageDefault(params.filePath);
  const lines = [
    '/**',
    ` * @script ${params.scriptName}`,
    ` * @summary ${params.summary}`,
    ` * @owner ${params.owner}`,
    ` * @scope ${params.scope}`,
    ' *',
    ' * @usage',
    ` *   ${cmd}`,
    ' *',
    ' * @inputs',
    ' *   TODO: --flag <description> (default: ...)',
    ' *',
    ' * @outputs',
    ' *   - TODO: output file/path/side effect',
    ' *',
    ' * @exit-codes',
    ' *   0 = success',
    ' *   1 = failure',
    ' *',
    ' * @examples',
    ` *   ${cmd}`,
    ' *',
    ' * @notes',
    ' *   TODO: caveats, constraints, safety notes',
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

