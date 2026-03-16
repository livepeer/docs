#!/usr/bin/env node
/**
 * @script            run-pr-checks
 * @category          orchestrator
 * @purpose           infrastructure:pipeline-orchestration
 * @scope             changed
 * @owner             docs
 * @needs             R-R29
 * @purpose-statement PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff.
 * @pipeline          P2, P3
 * @usage             node tests/run-pr-checks.js [flags]
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
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
const ownerlessGovernanceTests = require('./unit/ownerless-governance.test');
const checkAgentDocsFreshnessTests = require('./unit/check-agent-docs-freshness.test');
const rootAllowlistFormatTests = require('./unit/root-allowlist-format.test');
const exportPortableSkillsTests = require('./unit/export-portable-skills.test');
const docsGuideSotTests = require('./unit/docs-guide-sot.test');
const uiTemplateGeneratorTests = require('./unit/ui-template-generator.test');
const componentNamingTests = require('../tools/scripts/validators/components/check-naming-conventions');

const REPO_ROOT = getRepoRoot();
const SCRIPT_EXTENSIONS = new Set(GOVERNED_SCRIPT_EXTENSIONS);
const SCRIPT_SCOPES = GOVERNED_ROOTS;
const VALID_CATEGORY_SET = new Set(VALID_CATEGORIES);
const VALID_PURPOSE_SET = new Set(VALID_PURPOSES);
const LINK_AUDIT_REPORT = '/tmp/livepeer-link-audit-pr.md';
const CODEX_BRANCH_RE = /^codex\//;
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

function parseArgs(argv) {
  const args = { baseRef: process.env.GITHUB_BASE_REF || '' };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
    }
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

function pushSummary(lines) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${lines.join('\n')}\n`, 'utf8');
}

async function runUnitCheck(label, files, fn) {
  if (!files.length) {
    return { label, status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }
  const result = await fn({ files });
  return {
    label,
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
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

function runDocsJsonRedirectGuard(baseRef, changedFiles) {
  if (!changedFiles.includes('docs.json')) {
    return { label: 'docs.json /redirect Guard', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  try {
    const mergeBase = runGit(`merge-base origin/${baseRef} HEAD`);
    const diff = runGit(`diff --unified=0 ${mergeBase}..HEAD -- docs.json`);
    const violations = diff
      .split('\n')
      .map((line) => line.trimEnd())
      .filter((line) => /^[+-](?![+-])/.test(line) && line.includes('/redirect'));

    if (violations.length > 0) {
      console.error('\n❌ docs.json /redirect guard failed. Remove /redirect lines from docs.json changes.');
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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const changedFiles = getChangedFiles(args.baseRef);
  const groups = partitionFiles(changedFiles);
  const currentBranch = detectCurrentBranch();

  console.log('🧪 Running PR changed-file checks');
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
  console.log(`Changed docs-guide SoT files: ${groups.docsGuideSotFiles.length}`);
  console.log(`Changed UI-template files: ${groups.uiTemplateFiles.length}`);
  console.log(`Changed ownerless-governance files: ${groups.ownerlessGovernanceFiles.length}`);
  console.log(`Changed usefulness files: ${groups.usefulnessFiles.length}`);

  const checks = [];
  checks.push(runComponentNamingCheck(groups.componentJsx));
  checks.push(await runUnitCheck('Style Guide', groups.styleFiles, styleGuideTests.runTests));
  checks.push(await runUnitCheck('Copy Lint', groups.docsMdxAbs, copyLintTests.runTests));
  checks.push(await runUnitCheck('MDX Validation', groups.docsMdxAbs, mdxTests.runTests));
  checks.push(
    mdxSafeMarkdownValidator
      ? await runUnitCheck('MDX-safe Markdown', groups.repoMarkdownFilesAbs, mdxSafeMarkdownValidator.run)
      : { label: 'MDX-safe Markdown', status: 'skipped', files: 0, errors: 0, warnings: 0 }
  );
  checks.push(await runUnitCheck('Spelling', groups.docsMdxAbs, spellingTests.runTests));
  checks.push(await runUnitCheck('Quality', groups.docsMdxAbs, qualityTests.runTests));
  checks.push(await runUnitCheck('Links & Imports', groups.docsMdxAbs, linksImportsTests.runTests));
  checks.push(runGlobalCheck('MDX Guardrails', mdxGuardsTests.runTests));
  checks.push(runDocsNavigationCheck());
  checks.push(runDocsJsonRedirectGuard(args.baseRef, changedFiles));
  checks.push(runGeneratedBannerCheck(changedFiles));
  checks.push(runCodexTaskContractCheck(currentBranch, changedFiles, args.baseRef));
  checks.push(runCodexSkillSyncCheck());
  checks.push(runScriptGovernanceCheck(groups.governanceScriptFiles));
  checks.push(runScriptDocsCheck(groups.scriptFiles));
  checks.push(runSkillDocsCheck(groups.skillDocsFiles));
  checks.push(runOwnerlessGovernanceCheck(groups.ownerlessGovernanceFiles));
  checks.push(await runAgentDocsFreshnessCheck(groups.ownerlessGovernanceFiles));
  checks.push(runRootAllowlistFormatCheck(groups.ownerlessGovernanceFiles));
  checks.push(await runAsyncGlobalCheck('Portable Skill Export', groups.portableSkillFiles, exportPortableSkillsTests.runTests));
  checks.push(runDocsGuideSotCheck(groups.docsGuideSotFiles));
  checks.push(runUiTemplateGeneratorCheck(groups.uiTemplateFiles));
  checks.push(runUsefulnessChecks(groups.usefulnessFiles));
  checks.push(runLinkAuditCheck(groups.docsMdx));

  console.log('\n============================================================');
  console.log('PR Changed-File Checks Summary');
  console.log('============================================================');
  checks.forEach((check) => {
    console.log(
      `${rowResult(check.status)} ${check.label} (files: ${check.files}, errors: ${check.errors}, warnings: ${check.warnings})`
    );
  });

  pushSummary([
    '## PR Changed-File Checks',
    '',
    '| Check | Files | Result | Errors | Warnings |',
    '|---|---:|---|---:|---:|',
    ...checks.map(
      (check) =>
        `| ${check.label} | ${check.files} | ${rowResult(check.status)} | ${check.errors} | ${check.warnings} |`
    ),
    ''
  ]);

  const failed = checks.filter((check) => check.status === 'failed');
  if (failed.length > 0) {
    console.error(`\n❌ ${failed.length} changed-file check(s) failed`);
    process.exit(1);
  }

  console.log('\n✅ All applicable changed-file checks passed');
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`❌ Failed to run PR checks: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  isGeneratedSystemAffectingFile,
  shouldRunGeneratedBannerCheck
};
