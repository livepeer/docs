#!/usr/bin/env node
/**
 * @script            run-pr-checks
 * @category          orchestrator
 * @purpose           infrastructure:pipeline-orchestration
 * @scope             changed
 * @domain            docs
 * @needs             R-R29
 * @purpose-statement PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff.
 * @pipeline          P2, P3
 * @usage             node tests/run-pr-checks.js [flags]
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync, spawn, spawnSync } = require('child_process');
const { getDocsJsonRouteKeys, toDocsRouteKeyFromFileV2Aware } = require('./utils/file-walker');
const {
  AGGREGATE_INDEX_PATH,
  CATEGORY_ENUM: VALID_CATEGORIES,
  GOVERNED_ROOTS,
  GROUP_INDEX_PATHS,
  PURPOSE_ENUM: VALID_PURPOSES,
  SCRIPT_EXTENSIONS: GOVERNED_SCRIPT_EXTENSIONS,
  isDiscoveredScriptPath,
  isValidGovernanceScope,
  isWithinRoots
} = require('../tools/lib/script-governance-config');
const { extractLeadingScriptHeader, getTagValue } = require('../tools/lib/script-header-utils');

const styleGuideTests = require('./unit/style-guide.test');
const copyLintTests = require('./unit/copy-lint.test');
const mdxTests = require('./unit/mdx.test');
const mdxGuardsTests = require('./unit/mdx-guards.test');
const spellingTests = require('./unit/spelling.test');
const qualityTests = require('./unit/quality.test');
const linksImportsTests = require('./unit/links-imports.test');
const docsNavigationTests = require('./unit/docs-navigation.test');
const scriptDocsTests = require('./unit/script-docs.test');
const skillDocsTests = require('./unit/skill-docs.test');
const aiToolsRegistryTests = require('./unit/ai-tools-registry.test');
const ownerlessGovernanceTests = require('./unit/ownerless-governance.test');
const checkAgentDocsFreshnessTests = require('./unit/check-agent-docs-freshness.test');
const rootAllowlistFormatTests = require('./unit/root-allowlist-format.test');
const exportPortableSkillsTests = require('./unit/export-portable-skills.test');
const docsGuideSotTests = require('./unit/docs-guide-sot.test');
const uiTemplateGeneratorTests = require('./unit/ui-template-generator.test');
const componentNamingTests = require('../tools/scripts/validators/components/check-naming-conventions');
const { isAiToolsRegistryRelevantPath } = require('../tools/lib/ai-tools-registry');

const REPO_ROOT = getRepoRoot();
const SCRIPT_EXTENSIONS = new Set(GOVERNED_SCRIPT_EXTENSIONS);
const SCRIPT_SCOPES = GOVERNED_ROOTS;
const VALID_CATEGORY_SET = new Set(VALID_CATEGORIES);
const VALID_PURPOSE_SET = new Set(VALID_PURPOSES);
const LINK_AUDIT_REPORT = '/tmp/livepeer-link-audit-pr.md';
const CODEX_BRANCH_RE = /^codex\//;
const DEFAULT_LANE = 'branch-health';
const SUPPORTED_LANES = new Set([DEFAULT_LANE]);
const DEFAULT_CHECK_TIMEOUT_MS = 10 * 60 * 1000;
const LONG_CHECK_TIMEOUT_MS = 20 * 60 * 1000;
const HEARTBEAT_INTERVAL_MS = 30 * 1000;
const GENERATED_AFFECTING_PREFIXES = [
  'docs-guide/catalog/',
  'tools/scripts/generate-docs-guide-',
  'tools/scripts/generate-pages-index.js',
  'tools/scripts/enforce-generated-file-banners.js',
  'tools/scripts/i18n/lib/',
  'tools/lib/generated-file-banners.js'
];
const GENERATED_AFFECTING_EXACT = new Set([
  'tests/unit/script-docs.test.js',
  AGGREGATE_INDEX_PATH,
  ...GROUP_INDEX_PATHS,
  'v2/index.mdx',
  'v2/resources/documentation-guide/component-library/overview.mdx'
]);
const SKILL_SPEC_CONTRACT_PATH = 'ai-tools/ai-skills/skill-spec-contract.md';
const OWNERLESS_MANIFEST_PATH = 'tools/config/ownerless-governance-surfaces.json';
const OWNERLESS_POLICY_PATH = 'docs-guide/policies/ownerless-governance.mdx';

function fallbackIsEligibleRepoMarkdownPath(filePath) {
  return /\.(md|mdx)$/i.test(String(filePath || ''));
}

let isEligibleRepoMarkdownPath = fallbackIsEligibleRepoMarkdownPath;
try {
  ({ isEligibleRepoMarkdownPath } = require('../tools/lib/mdx-safe-markdown'));
} catch (_error) {
  isEligibleRepoMarkdownPath = fallbackIsEligibleRepoMarkdownPath;
}

let mdxSafeMarkdownValidator = null;
try {
  mdxSafeMarkdownValidator = require('../tools/scripts/validators/content/check-mdx-safe-markdown');
} catch (_error) {
  mdxSafeMarkdownValidator = null;
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function printUsage() {
  console.log(
    [
      'Usage:',
      '  node tests/run-pr-checks.js [--base-ref <branch>] [--lane branch-health]',
      '',
      'Supported lanes:',
      '  branch-health    Run the full changed-file PR validation suite.'
    ].join('\n')
  );
}

function parseArgs(argv, env = process.env) {
  const args = {
    baseRef: String(env.GITHUB_BASE_REF || '').trim(),
    lane: DEFAULT_LANE,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--help' || argv[i] === '-h') {
      args.help = true;
      continue;
    }

    if (argv[i] === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }

    if (argv[i] === '--lane') {
      args.lane = String(argv[i + 1] || '').trim() || DEFAULT_LANE;
      i += 1;
      continue;
    }

    if (argv[i].startsWith('--lane=')) {
      args.lane = String(argv[i].slice('--lane='.length) || '').trim() || DEFAULT_LANE;
      continue;
    }

    throw new Error(`Unknown argument: ${argv[i]}`);
  }

  if (!SUPPORTED_LANES.has(args.lane)) {
    throw new Error(`Unsupported lane "${args.lane}". Supported lanes: ${[...SUPPORTED_LANES].join(', ')}`);
  }

  return args;
}

function runGit(args) {
  return execSync(`git ${args}`, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
}

function ensureBaseRef(baseRef) {
  if (!baseRef) {
    throw new Error('Missing base ref. Provide --base-ref or set GITHUB_BASE_REF.');
  }

  try {
    runGit(`rev-parse --verify origin/${baseRef}`);
  } catch (_error) {
    throw new Error(
      `Could not resolve origin/${baseRef}. Ensure checkout uses fetch-depth: 0 and base ref is fetched.`
    );
  }
}

function detectCurrentBranch() {
  const headRef = String(process.env.GITHUB_HEAD_REF || '').trim();
  if (headRef) return headRef;

  try {
    return runGit('rev-parse --abbrev-ref HEAD');
  } catch (_error) {
    return '';
  }
}

function getChangedFiles(baseRef) {
  ensureBaseRef(baseRef);
  const mergeBase = runGit(`merge-base origin/${baseRef} HEAD`);
  if (!mergeBase) {
    throw new Error(`Failed to compute merge-base for origin/${baseRef} and HEAD.`);
  }

  const output = runGit(`diff --name-only --diff-filter=ACMR ${mergeBase}..HEAD`);
  if (!output) return [];
  return output
    .split('\n')
    .map((line) => toPosix(line.trim()))
    .filter(Boolean);
}

function relToAbs(relPath) {
  return path.join(REPO_ROOT, relPath);
}

function dedupe(values) {
  return [...new Set(values)];
}

function isGovernedSkillDocPath(filePath) {
  const normalized = toPosix(filePath);
  return (
    normalized === SKILL_SPEC_CONTRACT_PATH
    || /^ai-tools\/ai-skills\/[^/]+\/SKILL\.md$/.test(normalized)
    || /^ai-tools\/ai-skills\/templates\/[^/]+\.template\.md$/.test(normalized)
  );
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getGovernanceTagValue(header, tagName) {
  const directValue = getTagValue(header, tagName);
  if (directValue) return directValue;

  const pattern = new RegExp(
    `${escapeRegExp(tagName)}\\s+([\\s\\S]*?)(?=\\s+@[-\\w]+(?:\\s|$)|\\s*\\*/|$)`
  );
  const match = String(header || '').match(pattern);
  return match ? String(match[1] || '').replace(/\s+/g, ' ').trim() : '';
}

function partitionFiles(changedFiles) {
  const existingChangedFiles = changedFiles.filter((file) => fs.existsSync(relToAbs(file)));
  const docsRouteKeys = getDocsJsonRouteKeys(REPO_ROOT);
  const docsMdx = existingChangedFiles.filter((file) => {
    if (!file.endsWith('.mdx')) return false;
    const routeKey = toDocsRouteKeyFromFileV2Aware(file, REPO_ROOT);
    return Boolean(routeKey) && docsRouteKeys.has(routeKey);
  });
  const componentJsx = existingChangedFiles.filter(
    (file) => file.startsWith('snippets/components/') && file.endsWith('.jsx')
  );
  const repoMarkdownFiles = existingChangedFiles.filter((file) => isEligibleRepoMarkdownPath(file));

  const scriptFiles = existingChangedFiles.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return isWithinRoots(file, SCRIPT_SCOPES) && SCRIPT_EXTENSIONS.has(ext);
  });
  const governanceScriptFiles = existingChangedFiles.filter((file) => isDiscoveredScriptPath(file));

  const usefulnessFiles = existingChangedFiles.filter((file) =>
    file === 'tools/scripts/audit-v2-usefulness.js' ||
    file === 'tools/scripts/assign-purpose-metadata.js' ||
    file === 'tools/scripts/docs-quality-and-freshness-audit.js' ||
    file === '.gitignore' ||
    file === 'tools/package.json' ||
    file === 'tools/package-lock.json' ||
    file.startsWith('tools/lib/docs-usefulness/') ||
    file.startsWith('tools/config/usefulness-') ||
    file.startsWith('tests/unit/usefulness-')
  );
  const skillDocsFiles = existingChangedFiles.filter((file) => isGovernedSkillDocPath(file));
  const portableSkillFiles = existingChangedFiles.filter((file) =>
    file.startsWith('ai-tools/ai-skills/templates/') ||
    file.startsWith('ai-tools/agent-packs/skills/') ||
    file === 'tools/scripts/export-portable-skills.js' ||
    file === 'tools/lib/codex-skill-templates.js' ||
    file === 'tests/unit/export-portable-skills.test.js' ||
    file === 'tests/unit/codex-skill-sync.test.js'
  );
  const docsGuideSotFiles = existingChangedFiles.filter((file) =>
    file === 'README.md' ||
    file.startsWith('docs-guide/') ||
    file === 'tests/unit/docs-guide-sot.test.js' ||
    file.startsWith('tools/scripts/generate-docs-guide-') ||
    file === 'tools/scripts/generate-ui-templates.js' ||
    file === 'tests/unit/script-docs.test.js'
  );
  const uiTemplateFiles = existingChangedFiles.filter((file) =>
    file.startsWith('snippets/templates/') ||
    file.startsWith('v2/templates/') ||
    file.startsWith('.vscode/') ||
    file === 'docs-guide/catalog/ui-templates.mdx' ||
    file === 'docs-guide/features/ui-system.mdx' ||
    file === 'docs-guide/component-registry.json' ||
    file === 'tools/scripts/generate-ui-templates.js' ||
    file === 'tests/unit/ui-template-generator.test.js'
  );
  const ownerlessGovernanceFiles = existingChangedFiles.filter((file) =>
    file === OWNERLESS_MANIFEST_PATH ||
    file === OWNERLESS_POLICY_PATH ||
    file === 'tests/unit/ownerless-governance.test.js' ||
    file === 'tests/unit/check-agent-docs-freshness.test.js' ||
    file === 'tests/unit/root-allowlist-format.test.js' ||
    file === 'tools/scripts/repair-ownerless-language.js' ||
    file === 'tools/scripts/validators/governance/check-agent-docs-freshness.js' ||
    file === '.allowlist' ||
    file === 'AGENTS.md' ||
    file === '.github/copilot-instructions.md' ||
    file === '.claude/CLAUDE.md' ||
    file === '.cursor/rules/repo-governance.mdc' ||
    file === '.windsurf/rules/repo-governance.md' ||
    file === 'README.md' ||
    file === 'contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md' ||
    file === '.github/workflows/docs-v2-issue-indexer.yml' ||
    file.startsWith('.github/ISSUE_TEMPLATE/')
  );
  const aiToolsRegistryFiles = existingChangedFiles.filter((file) => isAiToolsRegistryRelevantPath(file));

  return {
    docsMdx,
    componentJsx,
    repoMarkdownFiles,
    styleFiles: dedupe([...docsMdx, ...componentJsx]).map(relToAbs),
    docsMdxAbs: docsMdx.map(relToAbs),
    repoMarkdownFilesAbs: dedupe(repoMarkdownFiles).map(relToAbs),
    governanceScriptFiles: dedupe(governanceScriptFiles),
    scriptFiles: dedupe(scriptFiles),
    skillDocsFiles: dedupe(skillDocsFiles),
    portableSkillFiles: dedupe(portableSkillFiles),
    aiToolsRegistryFiles: dedupe(aiToolsRegistryFiles),
    docsGuideSotFiles: dedupe(docsGuideSotFiles),
    uiTemplateFiles: dedupe(uiTemplateFiles),
    ownerlessGovernanceFiles: dedupe(ownerlessGovernanceFiles),
    usefulnessFiles: dedupe(usefulnessFiles)
  };
}

function rowResult(status) {
  if (status === 'passed') return '✅ Pass';
  if (status === 'failed') return '❌ Fail';
  return '⏭️ Skipped';
}

function formatCount(value) {
  return Number.isFinite(value) ? String(value) : '—';
}

function formatDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.round(Number(milliseconds || 0) / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds}s`;
  return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
}

function pushSummary(lines) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${lines.join('\n')}\n`, 'utf8');
}

function initializeSummary(context) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;

  fs.writeFileSync(
    summaryPath,
    [
      '## PR Changed-File Checks',
      '',
      `- Lane: \`${context.lane}\``,
      `- Base ref: \`${context.baseRef}\``,
      `- Branch: \`${context.branch || 'unknown'}\``,
      `- Changed files: \`${context.changedFiles}\``,
      '',
      '| Check | Files | Result | Errors | Warnings | Elapsed |',
      '|---|---:|---|---:|---:|---:|'
    ].join('\n') + '\n',
    'utf8'
  );
}

function appendSummaryRow(result) {
  pushSummary([
    `| ${result.label} | ${result.files} | ${rowResult(result.status)} | ${formatCount(result.errors)} | ${formatCount(result.warnings)} | ${formatDuration(result.elapsedMs)} |`
  ]);
}

function finalizeSummary(results) {
  const failed = results.filter((result) => result.status === 'failed').length;
  pushSummary([
    '',
    failed > 0
      ? `❌ ${failed} changed-file check(s) failed`
      : '✅ All applicable changed-file checks passed',
    ''
  ]);
}

function normalizeCliFiles(files) {
  return dedupe(
    (Array.isArray(files) ? files : [])
      .map((file) => {
        const normalized = path.isAbsolute(file) ? path.relative(REPO_ROOT, file) : file;
        return toPosix(normalized).trim();
      })
      .filter(Boolean)
  );
}

function buildFilesArgs(files) {
  const normalizedFiles = normalizeCliFiles(files);
  return normalizedFiles.length > 0 ? ['--files', normalizedFiles.join(',')] : [];
}

function countFiles(files) {
  if (Array.isArray(files)) return files.length;
  return Number.isFinite(files) ? Number(files) : 0;
}

function createSkippedResult(label) {
  return {
    label,
    status: 'skipped',
    files: 0,
    errors: 0,
    warnings: 0
  };
}

function createCommandCheck({ label, files, args, timeoutMs = DEFAULT_CHECK_TIMEOUT_MS }) {
  return {
    label,
    files: countFiles(files),
    timeoutMs,
    async run() {
      if (countFiles(files) === 0) {
        return createSkippedResult(label);
      }

      return runNodeCommandCheck(label, args, { files: countFiles(files), timeoutMs });
    }
  };
}

function createInlineCheck({ label, files, timeoutMs = DEFAULT_CHECK_TIMEOUT_MS, run }) {
  return {
    label,
    files: countFiles(files),
    timeoutMs,
    async run() {
      return run();
    }
  };
}

async function runNodeCommandCheck(label, args, options = {}) {
  const timeoutMs = Number(options.timeoutMs || DEFAULT_CHECK_TIMEOUT_MS);
  const fileCount = countFiles(options.files);
  const startedAt = Date.now();
  let timedOut = false;
  let finished = false;

  return new Promise((resolve) => {
    const child = spawn('node', args, {
      cwd: REPO_ROOT,
      env: {
        ...process.env,
        ...(options.env || {})
      },
      stdio: ['ignore', 'pipe', 'pipe']
    });

    const heartbeat = setInterval(() => {
      console.log(`⏱️  ${label} still running (${formatDuration(Date.now() - startedAt)})`);
    }, HEARTBEAT_INTERVAL_MS);

    const timeoutHandle = setTimeout(() => {
      timedOut = true;
      console.error(`\n❌ ${label} timed out after ${formatDuration(timeoutMs)}`);
      child.kill('SIGTERM');
      setTimeout(() => child.kill('SIGKILL'), 5000).unref();
    }, timeoutMs);

    const finalize = (result) => {
      if (finished) return;
      finished = true;
      clearInterval(heartbeat);
      clearTimeout(timeoutHandle);
      resolve({
        label,
        files: fileCount,
        errors: result.errors,
        warnings: result.warnings,
        status: result.status,
        note: result.note || ''
      });
    };

    child.stdout.on('data', (chunk) => process.stdout.write(chunk));
    child.stderr.on('data', (chunk) => process.stderr.write(chunk));

    child.on('error', (error) => {
      finalize({
        status: 'failed',
        errors: 1,
        warnings: 0,
        note: error.message
      });
    });

    child.on('close', (code, signal) => {
      if (timedOut) {
        finalize({
          status: 'failed',
          errors: 1,
          warnings: 0,
          note: signal ? `terminated by ${signal}` : 'timed out'
        });
        return;
      }

      finalize({
        status: code === 0 ? 'passed' : 'failed',
        errors: null,
        warnings: null,
        note: signal ? `terminated by ${signal}` : ''
      });
    });
  });
}

async function runCheckRegistry(checks) {
  const results = [];

  for (const check of checks) {
    const startedAt = Date.now();
    console.log(
      `\n▶ START ${check.label} (files: ${check.files}, timeout: ${formatDuration(check.timeoutMs)})`
    );

    let result;
    try {
      result = await check.run();
    } catch (error) {
      result = {
        label: check.label,
        status: 'failed',
        files: check.files,
        errors: 1,
        warnings: 0,
        note: error.message
      };
      console.error(`❌ ${check.label} crashed: ${error.message}`);
    }

    const normalized = {
      label: result.label || check.label,
      status: result.status || 'failed',
      files: Number.isFinite(result.files) ? result.files : check.files,
      errors: Number.isFinite(result.errors) ? result.errors : null,
      warnings: Number.isFinite(result.warnings) ? result.warnings : null,
      note: result.note || '',
      elapsedMs: Date.now() - startedAt
    };

    console.log(
      `${rowResult(normalized.status)} ${normalized.label} (${formatDuration(normalized.elapsedMs)})`
      + (normalized.note ? ` — ${normalized.note}` : '')
    );

    appendSummaryRow(normalized);
    results.push(normalized);
  }

  return results;
}

function runScriptGovernanceCheck(files) {
  if (!files.length) {
    return { label: 'Script Governance', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  console.log(`\n[Governance] ${files.length} script(s) changed`);

  const findings = [];

  for (const file of files) {
    const content = fs.readFileSync(relToAbs(file), 'utf8');
    const header = extractLeadingScriptHeader(content);
    const category = getGovernanceTagValue(header, '@category');
    const purpose = getGovernanceTagValue(header, '@purpose');
    const scope = getGovernanceTagValue(header, '@scope');

    if (!category) {
      findings.push({ file, message: 'Missing required @category header' });
    } else if (!VALID_CATEGORY_SET.has(category)) {
      findings.push({ file, message: `Invalid @category: "${category}"` });
    }

    if (!purpose) {
      findings.push({ file, message: 'Missing required @purpose header' });
    } else if (!VALID_PURPOSE_SET.has(purpose)) {
      findings.push({ file, message: `Invalid @purpose: "${purpose}"` });
    }

    if (!scope) {
      findings.push({ file, message: 'Missing required @scope header' });
    } else if (!isValidGovernanceScope(scope)) {
      findings.push({ file, message: `Invalid @scope: "${scope}"` });
    }
  }

  if (findings.length > 0) {
    console.error('\n❌ Script governance check failed:\n');
    findings.forEach((finding) => {
      console.error(`  ${finding.file}:1 - ${finding.message}`);
    });
  }

  return {
    label: 'Script Governance',
    status: findings.length === 0 ? 'passed' : 'failed',
    files: files.length,
    errors: findings.length,
    warnings: 0
  };
}

function runScriptDocsCheck(files) {
  if (!files.length) {
    return { label: 'Script Docs', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = scriptDocsTests.runTests({ files });
  return {
    label: 'Script Docs',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runSkillDocsCheck(files) {
  if (!files.length) {
    return { label: 'Skill Docs', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = skillDocsTests.runTests({ files });
  return {
    label: 'Skill Docs',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runAiToolsRegistryCheck(files) {
  if (!files.length) {
    return { label: 'AI-tools Registry', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = aiToolsRegistryTests.runTests({ files });
  return {
    label: 'AI-tools Registry',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runOwnerlessGovernanceCheck(files) {
  if (!files.length) {
    return { label: 'Ownerless Governance', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = ownerlessGovernanceTests.runTests({ files });
  return {
    label: 'Ownerless Governance',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

async function runAgentDocsFreshnessCheck(files) {
  if (!files.length) {
    return { label: 'Agent Docs Freshness', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = await checkAgentDocsFreshnessTests.runTests();
  return {
    label: 'Agent Docs Freshness',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runRootAllowlistFormatCheck(files) {
  if (!files.length) {
    return { label: 'Root Allowlist Format', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = rootAllowlistFormatTests.runTests();
  return {
    label: 'Root Allowlist Format',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runDocsGuideSotCheck(files) {
  if (!files.length) {
    return { label: 'Docs-guide SoT', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = docsGuideSotTests.runTests();
  return {
    label: 'Docs-guide SoT',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runUiTemplateGeneratorCheck(files) {
  if (!files.length) {
    return { label: 'UI Template Generator', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = uiTemplateGeneratorTests.runTests();
  return {
    label: 'UI Template Generator',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runComponentNamingCheck(files) {
  if (!files.length) {
    return { label: 'Component Naming', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = componentNamingTests.run({ files });
  result.findings.forEach((finding) => {
    console.error(`  ${componentNamingTests.formatFinding(finding)}`);
  });

  return {
    label: 'Component Naming',
    status: result.exitCode === 0 ? 'passed' : 'failed',
    files: files.length,
    errors: result.findings.length,
    warnings: 0
  };
}

function runUsefulnessChecks(files) {
  if (!files.length) {
    return { label: 'Usefulness Unit Tests', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const rubric = spawnSync('node', ['tests/unit/usefulness-rubric.test.js'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (rubric.stdout) process.stdout.write(rubric.stdout);
  if (rubric.stderr) process.stderr.write(rubric.stderr);

  const journey = spawnSync('node', ['tests/unit/usefulness-journey.test.js'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (journey.stdout) process.stdout.write(journey.stdout);
  if (journey.stderr) process.stderr.write(journey.stderr);

  const failures = (rubric.status === 0 ? 0 : 1) + (journey.status === 0 ? 0 : 1);
  return {
    label: 'Usefulness Unit Tests',
    status: failures === 0 ? 'passed' : 'failed',
    files: files.length,
    errors: failures,
    warnings: 0
  };
}

function runLinkAuditCheck(files) {
  if (!files.length) {
    return { label: 'V2 Link Audit (Strict)', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const cmd = spawnSync(
    'node',
    ['tests/integration/v2-link-audit.js', '--files', files.join(','), '--strict', '--report', LINK_AUDIT_REPORT],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );

  if (cmd.stdout) process.stdout.write(cmd.stdout);
  if (cmd.stderr) process.stderr.write(cmd.stderr);

  return {
    label: 'V2 Link Audit (Strict)',
    status: cmd.status === 0 ? 'passed' : 'failed',
    files: files.length,
    errors: cmd.status === 0 ? 0 : 1,
    warnings: 0
  };
}

function runGlobalCheck(label, fn) {
  const result = fn();
  return {
    label,
    status: result.passed ? 'passed' : 'failed',
    files: result.total || 1,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

async function runAsyncGlobalCheck(label, files, fn) {
  if (!files.length) {
    return { label, status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }
  const result = await fn();
  return {
    label,
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runDocsNavigationCheck() {
  const result = docsNavigationTests.runTests({ writeReport: false });
  return {
    label: 'Docs Navigation',
    status: result.passed ? 'passed' : 'failed',
    files: result.total || 1,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function collectDocsJsonRedirectEntries(docsJson) {
  const entries = [];
  const normalizeTabName = (tabName) => (tabName === 'GPU Nodes' ? 'Orchestrators' : tabName || '');
  const v2Version = Array.isArray(docsJson?.navigation?.versions)
    ? docsJson.navigation.versions.find((entry) => entry && entry.version === 'v2')
    : null;
  const english = Array.isArray(v2Version?.languages)
    ? v2Version.languages.find((entry) => entry && entry.language === 'en')
    : null;

  function visitPages(node, context = { tab: null, anchor: null, group: null }) {
    if (Array.isArray(node)) {
      node.forEach((item) => visitPages(item, context));
      return;
    }

    if (!node || typeof node !== 'object') return;

    const nextContext = { ...context };
    if (typeof node.tab === 'string') nextContext.tab = node.tab;
    if (typeof node.anchor === 'string') nextContext.anchor = node.anchor;
    if (typeof node.group === 'string') nextContext.group = node.group;

    if (Array.isArray(node.pages)) {
      node.pages.forEach((page) => {
        if (typeof page === 'string' && page.includes('/redirect')) {
          entries.push(
            `page|tab=${normalizeTabName(nextContext.tab)}|anchor=${nextContext.anchor || ''}|group=${nextContext.group || ''}|value=${page}`
          );
        } else {
          visitPages(page, nextContext);
        }
      });
    }

    if (Array.isArray(node.anchors)) visitPages(node.anchors, nextContext);
    if (Array.isArray(node.groups)) visitPages(node.groups, nextContext);
  }

  if (english) {
    visitPages(english.tabs);
  }

  (docsJson.redirects || []).forEach((entry) => {
    if (!entry || typeof entry !== 'object') return;
    if (typeof entry.source === 'string' && entry.source.includes('/redirect')) {
      entries.push(`redirect|source=${entry.source}|destination=${entry.destination || ''}`);
    }
    if (typeof entry.destination === 'string' && entry.destination.includes('/redirect')) {
      entries.push(`redirect-destination|source=${entry.source || ''}|destination=${entry.destination}`);
    }
  });

  return entries.sort();
}

function runDocsJsonRedirectGuard(baseRef, changedFiles) {
  if (!changedFiles.includes('docs.json')) {
    return { label: 'docs.json /redirect Guard', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  try {
    const mergeBase = runGit(`merge-base origin/${baseRef} HEAD`);
    const baseDocsJson = JSON.parse(runGit(`show ${mergeBase}:docs.json`));
    const currentDocsJson = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'docs.json'), 'utf8'));
    const baseEntries = collectDocsJsonRedirectEntries(baseDocsJson);
    const currentEntries = collectDocsJsonRedirectEntries(currentDocsJson);
    const baseSet = new Set(baseEntries);
    const currentSet = new Set(currentEntries);
    const removed = baseEntries.filter((entry) => !currentSet.has(entry));
    const added = currentEntries.filter((entry) => !baseSet.has(entry));
    const violations = removed
      .map((entry) => `- ${entry}`)
      .concat(added.map((entry) => `+ ${entry}`));

    if (violations.length > 0) {
      console.error('\n❌ docs.json /redirect guard failed. Redirect surfaces changed relative to base.');
      violations.forEach((line) => console.error(`  ${line}`));
      return {
        label: 'docs.json /redirect Guard',
        status: 'failed',
        files: 1,
        errors: violations.length,
        warnings: 0
      };
    }

    return { label: 'docs.json /redirect Guard', status: 'passed', files: 1, errors: 0, warnings: 0 };
  } catch (error) {
    console.error(`\n❌ docs.json /redirect guard failed to run: ${error.message}`);
    return { label: 'docs.json /redirect Guard', status: 'failed', files: 1, errors: 1, warnings: 0 };
  }
}

function isGeneratedSystemAffectingFile(file) {
  if (!file) return false;
  if (GENERATED_AFFECTING_EXACT.has(file)) return true;
  if (GENERATED_AFFECTING_PREFIXES.some((prefix) => file.startsWith(prefix))) return true;
  if (/^v2\/[a-z]{2}\//.test(file)) return true; // localized content can affect i18n parity enforcement
  if (/^v2\/[^/]+\/index\.mdx$/.test(file)) return true; // generated section indexes
  return false;
}

function shouldRunGeneratedBannerCheck(changedFiles) {
  return changedFiles.some((file) => isGeneratedSystemAffectingFile(file));
}

function runGeneratedBannerCheck(changedFiles) {
  if (!shouldRunGeneratedBannerCheck(changedFiles)) {
    return {
      label: 'Generated Banners',
      status: 'skipped',
      files: 0,
      errors: 0,
      warnings: 0
    };
  }

  const cmd = spawnSync('node', ['tools/scripts/enforce-generated-file-banners.js', '--check', '--staged'], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      LPD_STAGED_FILES_SNAPSHOT: changedFiles.join('\n')
    }
  });
  if (cmd.stdout) process.stdout.write(cmd.stdout);
  if (cmd.stderr) process.stderr.write(cmd.stderr);
  return {
    label: 'Generated Banners',
    status: cmd.status === 0 ? 'passed' : 'failed',
    files: 1,
    errors: cmd.status === 0 ? 0 : 1,
    warnings: 0
  };
}

function runCodexSkillSyncCheck() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codex-skill-sync-check-'));
  const syncArgs = ['tools/scripts/sync-codex-skills.js', '--dest', tmpDir];
  const checkArgs = ['tools/scripts/sync-codex-skills.js', '--dest', tmpDir, '--check'];

  const syncCmd = spawnSync('node', syncArgs, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (syncCmd.status !== 0) {
    if (syncCmd.stdout) process.stdout.write(syncCmd.stdout);
    if (syncCmd.stderr) process.stderr.write(syncCmd.stderr);
    fs.rmSync(tmpDir, { recursive: true, force: true });
    return {
      label: 'Codex Skill Sync (--check)',
      status: 'failed',
      files: 1,
      errors: 1,
      warnings: 0
    };
  }

  const checkCmd = spawnSync('node', checkArgs, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (checkCmd.stdout) process.stdout.write(checkCmd.stdout);
  if (checkCmd.stderr) process.stderr.write(checkCmd.stderr);
  fs.rmSync(tmpDir, { recursive: true, force: true });

  return {
    label: 'Codex Skill Sync (--check)',
    status: checkCmd.status === 0 ? 'passed' : 'failed',
    files: 1,
    errors: checkCmd.status === 0 ? 0 : 1,
    warnings: 0
  };
}

function runCodexTaskContractCheck(branch, changedFiles, baseRef) {
  if (!CODEX_BRANCH_RE.test(branch)) {
    return {
      label: 'Codex Task Contract',
      status: 'skipped',
      files: 0,
      errors: 0,
      warnings: 0
    };
  }

  const args = ['tools/scripts/validate-codex-task-contract.js', '--branch', branch];
  console.log('ℹ️ Codex issue-readiness enforcement is skipped for changed-file PR checks.');
  if (baseRef) {
    args.push('--base-ref', baseRef);
  }
  if (changedFiles.length > 0) {
    args.push('--files', changedFiles.join(','));
  }
  args.push('--require-pr-ready');
  if (process.env.GITHUB_EVENT_PATH || process.env.PULL_REQUEST_BODY) {
    args.push('--require-pr-body');
  }

  const cmd = spawnSync('node', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (cmd.stdout) process.stdout.write(cmd.stdout);
  if (cmd.stderr) process.stderr.write(cmd.stderr);

  return {
    label: 'Codex Task Contract',
    status: cmd.status === 0 ? 'passed' : 'failed',
    files: 1,
    errors: cmd.status === 0 ? 0 : 1,
    warnings: 0
  };
}

function createBranchHealthRegistry(context) {
  const { args, changedFiles, groups, currentBranch } = context;

  return [
    createCommandCheck({
      label: 'Component Naming',
      files: groups.componentJsx,
      args: [
        'tools/scripts/validators/components/check-naming-conventions.js',
        ...buildFilesArgs(groups.componentJsx)
      ]
    }),
    createCommandCheck({
      label: 'Style Guide',
      files: groups.styleFiles,
      args: ['tests/unit/style-guide.test.js', ...buildFilesArgs(groups.styleFiles)]
    }),
    createCommandCheck({
      label: 'Copy Lint',
      files: groups.docsMdxAbs,
      args: ['tests/unit/copy-lint.test.js', ...buildFilesArgs(groups.docsMdxAbs)]
    }),
    createCommandCheck({
      label: 'MDX Validation',
      files: groups.docsMdxAbs,
      args: ['tests/unit/mdx.test.js', ...buildFilesArgs(groups.docsMdxAbs)]
    }),
    createCommandCheck({
      label: 'MDX-safe Markdown',
      files: groups.repoMarkdownFilesAbs,
      args: ['tools/scripts/validators/content/check-mdx-safe-markdown.js', ...buildFilesArgs(groups.repoMarkdownFilesAbs)]
    }),
    createCommandCheck({
      label: 'Spelling',
      files: groups.docsMdxAbs,
      args: ['tests/unit/spelling.test.js', ...buildFilesArgs(groups.docsMdxAbs)]
    }),
    createCommandCheck({
      label: 'Quality',
      files: groups.docsMdxAbs,
      args: ['tests/unit/quality.test.js', ...buildFilesArgs(groups.docsMdxAbs)]
    }),
    createCommandCheck({
      label: 'Links & Imports',
      files: groups.docsMdxAbs,
      args: ['tests/unit/links-imports.test.js', ...buildFilesArgs(groups.docsMdxAbs)],
      timeoutMs: LONG_CHECK_TIMEOUT_MS
    }),
    createInlineCheck({
      label: 'MDX Guardrails',
      files: 1,
      run: () => runGlobalCheck('MDX Guardrails', mdxGuardsTests.runTests)
    }),
    createInlineCheck({
      label: 'Docs Navigation',
      files: 1,
      run: () => runDocsNavigationCheck()
    }),
    createInlineCheck({
      label: 'docs.json /redirect Guard',
      files: changedFiles.includes('docs.json') ? 1 : 0,
      run: () => runDocsJsonRedirectGuard(args.baseRef, changedFiles)
    }),
    createInlineCheck({
      label: 'Generated Banners',
      files: shouldRunGeneratedBannerCheck(changedFiles) ? 1 : 0,
      run: () => runGeneratedBannerCheck(changedFiles)
    }),
    createInlineCheck({
      label: 'Codex Task Contract',
      files: CODEX_BRANCH_RE.test(currentBranch) ? 1 : 0,
      run: () => runCodexTaskContractCheck(currentBranch, changedFiles, args.baseRef)
    }),
    createInlineCheck({
      label: 'Codex Skill Sync (--check)',
      files: 1,
      run: () => runCodexSkillSyncCheck(),
      timeoutMs: LONG_CHECK_TIMEOUT_MS
    }),
    createInlineCheck({
      label: 'Script Governance',
      files: groups.governanceScriptFiles,
      run: () => runScriptGovernanceCheck(groups.governanceScriptFiles)
    }),
    createInlineCheck({
      label: 'Script Docs',
      files: groups.scriptFiles,
      run: () => runScriptDocsCheck(groups.scriptFiles)
    }),
    createInlineCheck({
      label: 'Skill Docs',
      files: groups.skillDocsFiles,
      run: () => runSkillDocsCheck(groups.skillDocsFiles)
    }),
    createInlineCheck({
      label: 'AI-tools Registry',
      files: groups.aiToolsRegistryFiles,
      run: () => runAiToolsRegistryCheck(groups.aiToolsRegistryFiles)
    }),
    createInlineCheck({
      label: 'Ownerless Governance',
      files: groups.ownerlessGovernanceFiles,
      run: () => runOwnerlessGovernanceCheck(groups.ownerlessGovernanceFiles)
    }),
    createInlineCheck({
      label: 'Agent Docs Freshness',
      files: groups.ownerlessGovernanceFiles,
      run: () => runAgentDocsFreshnessCheck(groups.ownerlessGovernanceFiles)
    }),
    createInlineCheck({
      label: 'Root Allowlist Format',
      files: groups.ownerlessGovernanceFiles,
      run: () => runRootAllowlistFormatCheck(groups.ownerlessGovernanceFiles)
    }),
    createInlineCheck({
      label: 'Portable Skill Export',
      files: groups.portableSkillFiles,
      run: () => runAsyncGlobalCheck('Portable Skill Export', groups.portableSkillFiles, exportPortableSkillsTests.runTests),
      timeoutMs: LONG_CHECK_TIMEOUT_MS
    }),
    createInlineCheck({
      label: 'Docs-guide SoT',
      files: groups.docsGuideSotFiles,
      run: () => runDocsGuideSotCheck(groups.docsGuideSotFiles),
      timeoutMs: LONG_CHECK_TIMEOUT_MS
    }),
    createInlineCheck({
      label: 'UI Template Generator',
      files: groups.uiTemplateFiles,
      run: () => runUiTemplateGeneratorCheck(groups.uiTemplateFiles)
    }),
    createInlineCheck({
      label: 'Usefulness Unit Tests',
      files: groups.usefulnessFiles,
      run: () => runUsefulnessChecks(groups.usefulnessFiles)
    }),
    createCommandCheck({
      label: 'V2 Link Audit (Strict)',
      files: groups.docsMdx,
      args: [
        'tests/integration/v2-link-audit.js',
        '--files',
        groups.docsMdx.join(','),
        '--strict',
        '--report',
        LINK_AUDIT_REPORT
      ],
      timeoutMs: LONG_CHECK_TIMEOUT_MS
    })
  ];
}

function createCheckRegistry(context) {
  if (context.args.lane === DEFAULT_LANE) {
    return createBranchHealthRegistry(context);
  }

  throw new Error(`Unsupported lane "${context.args.lane}". Supported lanes: ${[...SUPPORTED_LANES].join(', ')}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printUsage();
    return;
  }

  const changedFiles = getChangedFiles(args.baseRef);
  const groups = partitionFiles(changedFiles);
  const currentBranch = detectCurrentBranch();

  console.log('🧪 Running PR changed-file checks');
  console.log(`Lane: ${args.lane}`);
  console.log(`Base ref: ${args.baseRef}`);
  console.log(`Branch: ${currentBranch || 'unknown'}`);
  console.log(`Changed files: ${changedFiles.length}`);
  console.log(`Changed docs pages: ${groups.docsMdx.length}`);
  console.log(`Changed repo markdown files: ${groups.repoMarkdownFiles.length}`);
  console.log(`Changed components: ${groups.componentJsx.length}`);
  console.log(`Changed governed scripts: ${groups.governanceScriptFiles.length}`);
  console.log(`Changed scripts: ${groups.scriptFiles.length}`);
  console.log(`Changed skill docs: ${groups.skillDocsFiles.length}`);
  console.log(`Changed portable-skill files: ${groups.portableSkillFiles.length}`);
  console.log(`Changed AI-tools registry files: ${groups.aiToolsRegistryFiles.length}`);
  console.log(`Changed docs-guide SoT files: ${groups.docsGuideSotFiles.length}`);
  console.log(`Changed UI-template files: ${groups.uiTemplateFiles.length}`);
  console.log(`Changed ownerless-governance files: ${groups.ownerlessGovernanceFiles.length}`);
  console.log(`Changed usefulness files: ${groups.usefulnessFiles.length}`);

  initializeSummary({
    lane: args.lane,
    baseRef: args.baseRef,
    branch: currentBranch,
    changedFiles: changedFiles.length
  });
  const checks = createCheckRegistry({ args, changedFiles, groups, currentBranch });
  const results = await runCheckRegistry(checks);

  console.log('\n============================================================');
  console.log('PR Changed-File Checks Summary');
  console.log('============================================================');
  results.forEach((check) => {
    console.log(
      `${rowResult(check.status)} ${check.label} (files: ${check.files}, errors: ${formatCount(check.errors)}, warnings: ${formatCount(check.warnings)}, elapsed: ${formatDuration(check.elapsedMs)})`
    );
  });

  finalizeSummary(results);

  const failed = results.filter((check) => check.status === 'failed');
  if (failed.length > 0) {
    console.error(`\n❌ ${failed.length} changed-file check(s) failed`);
    process.exit(1);
  }

  console.log('\n✅ All applicable changed-file checks passed');
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`❌ Failed to run PR checks: ${error.message}`);
    printUsage();
    process.exit(1);
  });
}

module.exports = {
  DEFAULT_LANE,
  createBranchHealthRegistry,
  createCheckRegistry,
  finalizeSummary,
  initializeSummary,
  isGeneratedSystemAffectingFile,
  parseArgs,
  runCheckRegistry,
  shouldRunGeneratedBannerCheck
};
