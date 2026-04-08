/**
 * @script      check-workflow-governance
 * @type        validator
 * @concern     governance
 * @niche       pr
 * @purpose     Validates all workflow YAML files have required governance headers and docs pages
 * @description Checks every .github/workflows/*.yml for: (1) governance comment headers
 * @mode        check
 * @pipeline    manual
 * @scope       .github/workflows/
 * @usage       node operations/scripts/validators/governance/pr/check-workflow-governance.js [--check|--json|--fix-audit]
 * @policy      D-ACT-04 (naming), D-ACT-08 (dispatchers), D-GOV-04 (tooling makes correct the default)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const WORKFLOWS_DIR = path.join(REPO_ROOT, '.github', 'workflows');
const ACTIONS_LIBRARY = path.join(REPO_ROOT, '.github', 'workspace', 'actions-library');
const AUDIT_PATH = path.join(ACTIONS_LIBRARY, 'actions-audit.json');

const VALID_TYPES = ['audit', 'generator', 'validator', 'remediator', 'dispatch', 'integrator', 'interface'];
const VALID_CONCERNS = ['copy', 'health', 'maintenance', 'discoverability', 'governance', 'brand', 'integrations'];
const VALID_PIPELINES = ['P2', 'P3', 'P4', 'P5', 'P5-auto', 'P6', 'P7', 'manual', 'event-driven'];

const TYPE_FOLDERS = {
  integrator: 'integrators',
  generator: 'generators',
  validator: 'validators',
  audit: 'auditors',
  remediator: 'remediators',
  dispatch: 'dispatchers',
  interface: 'interfaces',
};

function parseWorkflowHeaders(content) {
  const get = (key) => {
    const match = content.match(new RegExp(`^#\\s*${key}:\\s*(.+)$`, 'm'));
    return match ? match[1].trim() : null;
  };
  return { type: get('type'), concern: get('concern'), pipeline: get('pipeline') };
}

function findDocsPage(workflowFile, type) {
  const slug = workflowFile.replace(/\.ya?ml$/, '');
  const typeFolder = TYPE_FOLDERS[type];
  if (!typeFolder) return null;

  // Search all concern subdirs
  const typePath = path.join(ACTIONS_LIBRARY, typeFolder);
  if (!fs.existsSync(typePath)) return null;

  const concerns = fs.readdirSync(typePath).filter(d =>
    fs.statSync(path.join(typePath, d)).isDirectory()
  );

  for (const concern of concerns) {
    const pagePath = path.join(typePath, concern, slug + '.mdx');
    if (fs.existsSync(pagePath)) return pagePath;
  }
  return null;
}

function checkWorkflow(file) {
  const filePath = path.join(WORKFLOWS_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const violations = [];

  // 1. Governance headers
  const headers = parseWorkflowHeaders(content);

  if (!headers.type) {
    violations.push({ rule: 'missing-type', message: 'Missing # type: comment header' });
  } else if (!VALID_TYPES.includes(headers.type)) {
    violations.push({ rule: 'invalid-type', message: `Invalid type: "${headers.type}". Valid: ${VALID_TYPES.join(', ')}` });
  }

  if (!headers.concern) {
    violations.push({ rule: 'missing-concern', message: 'Missing # concern: comment header' });
  } else if (!VALID_CONCERNS.includes(headers.concern)) {
    violations.push({ rule: 'invalid-concern', message: `Invalid concern: "${headers.concern}". Valid: ${VALID_CONCERNS.join(', ')}` });
  }

  if (!headers.pipeline) {
    violations.push({ rule: 'missing-pipeline', message: 'Missing # pipeline: comment header' });
  } else if (!VALID_PIPELINES.includes(headers.pipeline)) {
    violations.push({ rule: 'invalid-pipeline', message: `Invalid pipeline: "${headers.pipeline}". Valid: ${VALID_PIPELINES.join(', ')}` });
  }

  // 2. Docs page exists
  if (headers.type && VALID_TYPES.includes(headers.type)) {
    const docsPage = findDocsPage(file, headers.type);
    if (!docsPage) {
      violations.push({ rule: 'missing-docs-page', message: `No actions-library page found for ${file}` });
    }
  }

  // 3. Concurrency on generators
  if (headers.type === 'generator' && !content.includes('concurrency:')) {
    violations.push({ rule: 'missing-concurrency', message: 'Generator workflow missing concurrency: block' });
  }

  // 4. In actions-audit.json
  if (fs.existsSync(AUDIT_PATH)) {
    const audit = JSON.parse(fs.readFileSync(AUDIT_PATH, 'utf8'));
    const inAudit = audit.workflows.some(w => w.file === file);
    if (!inAudit) {
      violations.push({ rule: 'missing-from-audit', message: `Not registered in actions-audit.json` });
    }
  }

  return { file, headers, violations };
}

// Main
const mode = process.argv.includes('--json') ? 'json' : 'text';
const files = fs.readdirSync(WORKFLOWS_DIR).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));

const results = files.map(checkWorkflow);
const withViolations = results.filter(r => r.violations.length > 0);

if (mode === 'json') {
  console.log(JSON.stringify({ total: files.length, clean: files.length - withViolations.length, violations: withViolations }, null, 2));
} else {
  console.log(`Workflow governance check: ${files.length} workflows scanned\n`);

  if (withViolations.length === 0) {
    console.log('All workflows compliant.');
  } else {
    console.log(`${withViolations.length} workflow(s) with violations:\n`);
    for (const r of withViolations) {
      console.log(`  ${r.file}:`);
      for (const v of r.violations) {
        console.log(`    - [${v.rule}] ${v.message}`);
      }
    }
  }
}

process.exit(withViolations.length > 0 ? 1 : 0);
