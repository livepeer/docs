#!/usr/bin/env node
/**
 * @script            generate-docs-guide-indexes
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, docs-guide, .github/workflows, .github/ISSUE_TEMPLATE
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Generates docs-guide workflow/template catalogs and optionally verifies freshness
 * @pipeline          manual — not yet in pipeline
 * @dualmode          dual-mode (document flags)
 * @usage             node tools/scripts/generate-docs-guide-indexes.js [flags]
 */

const fs = require('fs');
const path = require('path');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

let yaml = null;
try {
  yaml = require('../lib/load-js-yaml');
} catch (_err) {
  yaml = null;
}

const REPO_ROOT = process.cwd();
const WORKFLOWS_DIR = '.github/workflows';
const ISSUE_TEMPLATE_DIR = '.github/ISSUE_TEMPLATE';
const PR_TEMPLATE_FILES = ['.github/pull-request-template-v2.md', '.github/pull_request_template.md'];

const OUTPUT_FILES = {
  workflows: 'docs-guide/catalog/workflows-catalog.mdx',
  templates: 'docs-guide/catalog/templates-catalog.mdx'
};

const LEGACY_OUTPUT_FILES = Object.fromEntries(
  Object.entries(OUTPUT_FILES).map(([key, repoPath]) => [key, buildLegacyDocsGuideOutputs(repoPath)])
);

const WORKFLOWS_INDEX_FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Workflows Catalog',
  sidebarTitle: 'Workflows Catalog',
  description: 'Aggregate catalog of repository GitHub workflows',
  keywords: ['livepeer', 'workflows catalog', 'aggregate inventory', 'repository', 'github', 'workflows'],
  keywordsStyle: 'multiline'
});

const TEMPLATES_INDEX_FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Templates Catalog',
  sidebarTitle: 'Templates Catalog',
  description: 'Aggregate catalog of repository templates',
  keywords: ['livepeer', 'templates catalog', 'aggregate inventory', 'repository', 'templates'],
  keywordsStyle: 'multiline'
});

function buildLegacyDocsGuideOutputs(repoPath) {
  const legacyMdxPath = String(repoPath || '')
    .replace('/catalog/', '/indexes/')
    .replace(/-catalog\.mdx$/i, () => ['-', 'index', '.mdx'].join(''));
  return [legacyMdxPath, legacyMdxPath.replace(/\.mdx$/i, '.md')];
}

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/');
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_err) {
    return '';
  }
}

function fileExists(repoPath) {
  const full = path.join(REPO_ROOT, repoPath);
  return fs.existsSync(full) && fs.statSync(full).isFile();
}

function listFiles(dirRepoPath, predicate) {
  const full = path.join(REPO_ROOT, dirRepoPath);
  if (!fs.existsSync(full) || !fs.statSync(full).isDirectory()) return [];

  return fs
    .readdirSync(full)
    .filter((name) => (predicate ? predicate(name) : true))
    .map((name) => normalizeRepoPath(path.join(dirRepoPath, name)))
    .sort();
}

function parseYaml(content) {
  if (!yaml) return null;
  try {
    return yaml.load(content);
  } catch (_err) {
    return null;
  }
}

function mdEscape(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function inferWorkflowTriggers(doc, content) {
  const tags = [];
  const triggerMap = {
    pull_request: 'pull_request',
    push: 'push',
    schedule: 'schedule',
    workflow_dispatch: 'workflow_dispatch',
    repository_dispatch: 'repository_dispatch'
  };

  const onValue = doc && Object.prototype.hasOwnProperty.call(doc, 'on') ? doc.on : null;

  if (typeof onValue === 'string' && triggerMap[onValue]) {
    tags.push(triggerMap[onValue]);
  } else if (Array.isArray(onValue)) {
    onValue.forEach((name) => {
      if (triggerMap[name]) tags.push(triggerMap[name]);
    });
  } else if (onValue && typeof onValue === 'object') {
    Object.keys(onValue).forEach((name) => {
      if (triggerMap[name]) tags.push(triggerMap[name]);
    });
  }

  if (tags.length === 0) {
    const raw = String(content || '');
    Object.keys(triggerMap).forEach((key) => {
      const re = new RegExp(`\\b${key}\\b`);
      if (re.test(raw)) tags.push(triggerMap[key]);
    });
  }

  return [...new Set(tags)].sort();
}

function inferWorkflowOutputs(content) {
  const outputs = [];
  const raw = String(content || '');

  if (/upload-artifact/i.test(raw)) outputs.push('artifact upload');
  if (/GITHUB_STEP_SUMMARY/.test(raw)) outputs.push('step summary');
  if (/gh\s+pr\s+comment|pull-requests:\s*write/i.test(raw)) outputs.push('PR comments/metadata');
  if (/git\s+push/i.test(raw)) outputs.push('repository commits');

  if (outputs.length === 0) outputs.push('workflow logs');
  return outputs.join(', ');
}

function inferWorkflowBlocking(content) {
  const raw = String(content || '');
  if (/continue-on-error:\s*true/.test(raw)) {
    return 'advisory or partial-advisory';
  }
  return 'blocking by default (subject to branch protection)';
}

function firstSentence(value) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  const idx = text.indexOf('. ');
  if (idx > 0) return text.slice(0, idx + 1).trim();
  return text;
}

function inferWorkflowPurpose(doc, workflowPath) {
  const name = doc && doc.name ? String(doc.name).trim() : path.basename(workflowPath);
  return firstSentence(name) || `Workflow for ${workflowPath}.`;
}

function buildWorkflowsIndex() {
  const workflowFiles = listFiles(WORKFLOWS_DIR, (name) => /\.(yml|yaml)$/i.test(name));

  const rows = workflowFiles.map((workflowPath) => {
    const content = readFileSafe(workflowPath);
    const doc = parseYaml(content) || {};
    const workflowName = String(doc.name || path.basename(workflowPath));
    const triggers = inferWorkflowTriggers(doc, content);
    const purpose = inferWorkflowPurpose(doc, workflowPath);
    const outputs = inferWorkflowOutputs(content);
    const blocking = inferWorkflowBlocking(content);

    return {
      workflowName,
      workflowPath,
      triggers: triggers.length ? triggers.join(', ') : 'unknown',
      purpose,
      blocking,
      outputs,
      owner: 'docs'
    };
  });

  const lines = [];
  const bannerDetails = {
    script: 'tools/scripts/generate-docs-guide-indexes.js',
    purpose: 'Workflow inventory for docs-guide maintenance.',
    runWhen: 'GitHub workflows are added, removed, or changed.',
    runCommand: 'node tools/scripts/generate-docs-guide-indexes.js --write'
  };
  WORKFLOWS_INDEX_FRONTMATTER_LINES.forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedHiddenBannerLines(bannerDetails).forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedNoteLines(bannerDetails).forEach((line) => lines.push(line));
  lines.push('');
  lines.push('| Workflow | File | Triggers | Purpose | Blocking Policy | Outputs | Owner |');
  lines.push('|---|---|---|---|---|---|---|');

  rows.forEach((row) => {
    lines.push(
      `| ${mdEscape(row.workflowName)} | \`${mdEscape(row.workflowPath)}\` | ${mdEscape(row.triggers)} | ${mdEscape(row.purpose)} | ${mdEscape(row.blocking)} | ${mdEscape(row.outputs)} | ${mdEscape(row.owner)} |`
    );
  });

  lines.push('');
  return `${lines.join('\n')}`;
}

function inferTemplatePurposeFromMarkdown(content, fallback) {
  const lines = String(content || '').split('\n').map((line) => line.trim());
  const firstParagraph = lines.find((line) => {
    if (!line) return false;
    if (line === '---') return false;
    if (line.startsWith('#')) return false;
    if (line.startsWith('- [ ]')) return false;
    if (line.startsWith('<!--') || line.endsWith('-->')) return false;
    return true;
  });
  return firstSentence(firstParagraph || fallback) || fallback;
}

function inferTemplateUsage(repoPath) {
  const base = path.basename(repoPath).toLowerCase();
  if (base.includes('bug')) return 'Bug reports';
  if (base.includes('feature')) return 'Feature requests';
  if (base.includes('tooling')) return 'Tooling/CI issues';
  if (base.includes('question')) return 'Questions/clarifications';
  if (base.includes('docs_page') || base.includes('docs-page')) return 'Page-scoped docs issues';
  if (base.includes('content')) return 'Content requests';
  if (base.includes('pull') || base.includes('pr')) return 'Pull requests';
  return 'Repository issue/PR intake';
}

function buildTemplatesIndex() {
  const templateFiles = [];

  listFiles(ISSUE_TEMPLATE_DIR, (name) => /\.(yml|yaml|md)$/i.test(name)).forEach((repoPath) => {
    if (repoPath.includes('/deprecated/')) return;
    if (path.basename(repoPath).toLowerCase() === 'config.yml') return;
    templateFiles.push(repoPath);
  });

  PR_TEMPLATE_FILES.forEach((repoPath) => {
    if (fileExists(repoPath)) templateFiles.push(repoPath);
  });

  const rows = templateFiles
    .map((repoPath) => {
      const content = readFileSafe(repoPath);
      const ext = path.extname(repoPath).toLowerCase();

      if (ext === '.yml' || ext === '.yaml') {
        const doc = parseYaml(content) || {};
        const title = String(doc.name || path.basename(repoPath));
        const purpose = firstSentence(String(doc.description || inferTemplateUsage(repoPath)));
        const labels = Array.isArray(doc.labels) ? doc.labels.join(', ') : '';
        return {
          title,
          type: 'Issue',
          file: repoPath,
          purpose: purpose || inferTemplateUsage(repoPath),
          usage: inferTemplateUsage(repoPath),
          autoLabels: labels || 'n/a',
          owner: 'docs'
        };
      }

      const heading = String(content.match(/^#\s+(.+)$/m)?.[1] || path.basename(repoPath));
      return {
        title: heading,
        type: 'PR',
        file: repoPath,
        purpose: inferTemplatePurposeFromMarkdown(content, inferTemplateUsage(repoPath)),
        usage: inferTemplateUsage(repoPath),
        autoLabels: 'n/a',
        owner: 'docs'
      };
    })
    .sort((a, b) => a.file.localeCompare(b.file));

  const lines = [];
  const bannerDetails = {
    script: 'tools/scripts/generate-docs-guide-indexes.js',
    purpose: 'Issue and PR template inventory for docs-guide maintenance.',
    runWhen: 'Issue templates or PR templates are added, removed, or changed.',
    runCommand: 'node tools/scripts/generate-docs-guide-indexes.js --write'
  };
  TEMPLATES_INDEX_FRONTMATTER_LINES.forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedHiddenBannerLines(bannerDetails).forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedNoteLines(bannerDetails).forEach((line) => lines.push(line));
  lines.push('');
  lines.push('| Template | Type | File | Purpose | When To Use | Labels/Automation | Owner |');
  lines.push('|---|---|---|---|---|---|---|');

  rows.forEach((row) => {
    lines.push(
      `| ${mdEscape(row.title)} | ${mdEscape(row.type)} | \`${mdEscape(row.file)}\` | ${mdEscape(row.purpose)} | ${mdEscape(row.usage)} | ${mdEscape(row.autoLabels)} | ${mdEscape(row.owner)} |`
    );
  });

  lines.push('');
  return `${lines.join('\n')}`;
}

function writeIfChanged(repoPath, nextContent, shouldWrite) {
  const current = readFileSafe(repoPath);
  const normalizedNext = `${String(nextContent || '').trim()}\n`;
  const changed = current !== normalizedNext;

  if (changed && shouldWrite) {
    fs.mkdirSync(path.dirname(path.join(REPO_ROOT, repoPath)), { recursive: true });
    fs.writeFileSync(path.join(REPO_ROOT, repoPath), normalizedNext, 'utf8');
  }

  return { changed, path: repoPath };
}

function removeLegacyOutputs(shouldWrite) {
  const removed = [];
  const existing = [];

  Object.values(LEGACY_OUTPUT_FILES).flat().forEach((repoPath) => {
    if (!fileExists(repoPath)) return;
    existing.push(repoPath);
    if (!shouldWrite) return;
    fs.unlinkSync(path.join(REPO_ROOT, repoPath));
    removed.push(repoPath);
  });

  return { removed, existing };
}

function parseArgs(argv) {
  const hasCheck = argv.includes('--check');
  const hasWrite = argv.includes('--write');

  return {
    check: hasCheck,
    write: hasWrite || !hasCheck
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  const workflowsContent = buildWorkflowsIndex();
  const templatesContent = buildTemplatesIndex();

  const results = [
    writeIfChanged(OUTPUT_FILES.workflows, workflowsContent, args.write),
    writeIfChanged(OUTPUT_FILES.templates, templatesContent, args.write)
  ];
  const legacy = removeLegacyOutputs(args.write);

  const changed = results.filter((result) => result.changed);

  if (args.check) {
    if (legacy.existing.length > 0) {
      console.error('Legacy docs-guide generated index files detected:');
      legacy.existing.forEach((repoPath) => console.error(`  - ${repoPath}`));
      console.error('Run: node tools/scripts/generate-docs-guide-indexes.js --write');
      process.exit(1);
    }
    if (changed.length > 0) {
      console.error('Docs-guide generated catalogs are out of date:');
      changed.forEach((result) => console.error(`  - ${result.path}`));
      console.error('Run: node tools/scripts/generate-docs-guide-indexes.js --write');
      process.exit(1);
    }
    console.log('Docs-guide generated catalogs are up to date.');
    return;
  }

  if (changed.length === 0) {
    console.log('No changes. Docs-guide generated catalogs already current.');
  } else {
    changed.forEach((result) => console.log(`Updated ${result.path}`));
  }

  legacy.removed.forEach((repoPath) => console.log(`Removed legacy ${repoPath}`));
}

main();
