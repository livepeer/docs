#!/usr/bin/env node
/**
 * @script            docs-page-research-pr-report
 * @category          orchestrator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, tasks/research/claims, tasks/reports/repo-ops, tests/unit/docs-page-research-pr-report.test.js
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Docs page research PR report — runs the fact-check research runner on changed docs pages and emits an advisory PR artifact summarizing claim families, contradictions, unresolved factual risk, and propagation follow-up.
 * @pipeline          manual — experimental advisory PR integration, non-blocking
 * @usage             node tools/scripts/docs-page-research-pr-report.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync, execSync } = require('child_process');

const DEFAULT_REGISTRY = 'tasks/research/claims';

function repoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = repoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/docs-page-research-pr-report.js [options]',
      '',
      'Options:',
      '  --registry <path>       Registry path (default: tasks/research/claims)',
      '  --base-ref <branch>     Compute changed files from origin/<branch>...HEAD',
      '  --files <a,b,c>         Explicit changed-file list',
      '  --staged                Use staged files instead of git range',
      '  --report-md <path>      Write markdown report',
      '  --report-json <path>    Write JSON report',
      '  --quiet                 Suppress success logs',
      '  --help                  Show help'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    registry: DEFAULT_REGISTRY,
    baseRef: '',
    files: [],
    staged: false,
    reportMd: '',
    reportJson: '',
    quiet: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--registry') {
      args.registry = String(argv[i + 1] || '').trim() || args.registry;
      i += 1;
      continue;
    }
    if (token.startsWith('--registry=')) {
      args.registry = token.slice('--registry='.length).trim() || args.registry;
      continue;
    }
    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
      continue;
    }
    if (token === '--files') {
      args.files = String(argv[i + 1] || '')
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      i += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      args.files = token
        .slice('--files='.length)
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      continue;
    }
    if (token === '--staged') {
      args.staged = true;
      continue;
    }
    if (token === '--report-md') {
      args.reportMd = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-md=')) {
      args.reportMd = token.slice('--report-md='.length).trim();
      continue;
    }
    if (token === '--report-json') {
      args.reportJson = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-json=')) {
      args.reportJson = token.slice('--report-json='.length).trim();
      continue;
    }
    if (token === '--quiet') {
      args.quiet = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  const selectors = [args.baseRef ? 1 : 0, args.files.length ? 1 : 0, args.staged ? 1 : 0].reduce((a, b) => a + b, 0);
  if (selectors !== 1) {
    throw new Error('Use exactly one of --base-ref, --files, or --staged');
  }

  return args;
}

function ensureDirForFile(filePath) {
  if (!filePath) return;
  fs.mkdirSync(path.dirname(path.resolve(REPO_ROOT, filePath)), { recursive: true });
}

function tryExecGit(args) {
  try {
    return execSync(`git ${args.join(' ')}`, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch (_error) {
    return '';
  }
}

function resolveBaseRef(baseRef) {
  const remoteRef = `origin/${baseRef}`;
  if (tryExecGit(['rev-parse', '--verify', remoteRef])) return remoteRef;
  if (tryExecGit(['rev-parse', '--verify', baseRef])) return baseRef;
  return '';
}

function getChangedFiles(args) {
  if (args.files.length) return [...new Set(args.files)];
  if (args.staged) {
    const output = tryExecGit(['diff', '--cached', '--name-only', '--diff-filter=ACMR']);
    return output ? [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))] : [];
  }

  const baseRef = resolveBaseRef(args.baseRef);
  if (!baseRef) {
    throw new Error(`Unable to resolve base ref for ${args.baseRef}`);
  }
  const mergeBase = tryExecGit(['merge-base', baseRef, 'HEAD']);
  if (!mergeBase) {
    throw new Error(`Unable to compute merge-base for ${baseRef}`);
  }
  const output = tryExecGit(['diff', '--name-only', '--diff-filter=ACMR', `${mergeBase}..HEAD`]);
  return output ? [...new Set(output.split('\n').map((line) => toPosix(line.trim())).filter(Boolean))] : [];
}

function isDocsPage(file) {
  return /^v2\/.+\.(md|mdx)$/i.test(file);
}

function buildSummary(report, changedFiles, targetFiles, reportMd, reportJson) {
  const matchedFamilies = [
    ...report.verified_claims,
    ...report.conflicted_claims,
    ...report.time_sensitive_claims,
    ...report.unverified_or_historical_claims
  ];
  const unresolvedItems = [
    ...report.conflicted_claims,
    ...report.time_sensitive_claims,
    ...report.unverified_or_historical_claims
  ];
  return {
    generated_at: report.generated_at,
    changed_files: changedFiles,
    target_files: targetFiles,
    matched_claim_families: matchedFamilies.map((entry) => ({
      claim_id: entry.claim_id,
      claim_family: entry.claim_family,
      status: entry.status,
      canonical_owner: entry.canonical_owner,
      freshness_class: entry.freshness_class,
      confidence: entry.confidence
    })),
    summary: {
      matched_claim_families: matchedFamilies.length,
      verified_claims: report.verified_claims.length,
      conflicted_claims: report.conflicted_claims.length,
      time_sensitive_claims: report.time_sensitive_claims.length,
      unresolved_claims: unresolvedItems.length,
      contradiction_groups: report.cross_page_contradictions.length,
      propagation_queue_items: report.propagation_queue.length,
      evidence_sources: report.evidence_sources.length
    },
    contradictions: report.cross_page_contradictions,
    unresolved_items: unresolvedItems.map((entry) => ({
      claim_id: entry.claim_id,
      claim_family: entry.claim_family,
      status: entry.status,
      confidence: entry.confidence,
      canonical_owner: entry.canonical_owner,
      summary: entry.summary
    })),
    propagation_queue: report.propagation_queue,
    evidence_sources: report.evidence_sources,
    notes: [],
    markdown_artifact: reportMd ? toPosix(reportMd) : '',
    json_artifact: reportJson ? toPosix(reportJson) : ''
  };
}

function buildMarkdown(summary) {
  const lines = [];
  lines.push('# Advisory Research PR Report');
  lines.push('');
  lines.push('- Status: experimental, non-blocking');
  lines.push(`- Generated: ${summary.generated_at}`);
  lines.push('');
  lines.push('## Scope');
  lines.push('');
  lines.push('- Changed files:');
  if (summary.changed_files.length === 0) {
    lines.push('  - none');
  } else {
    summary.changed_files.forEach((file) => lines.push(`  - \`${file}\``));
  }
  lines.push('- Target docs pages:');
  if (summary.target_files.length === 0) {
    lines.push('  - none');
  } else {
    summary.target_files.forEach((file) => lines.push(`  - \`${file}\``));
  }
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Matched claim families: ${summary.summary.matched_claim_families}`);
  lines.push(`- Verified claims: ${summary.summary.verified_claims}`);
  lines.push(`- Conflicted claims: ${summary.summary.conflicted_claims}`);
  lines.push(`- Time-sensitive claims: ${summary.summary.time_sensitive_claims}`);
  lines.push(`- Unresolved claims: ${summary.summary.unresolved_claims}`);
  lines.push(`- Contradiction groups: ${summary.summary.contradiction_groups}`);
  lines.push(`- Propagation queue items: ${summary.summary.propagation_queue_items}`);
  lines.push(`- Evidence sources checked: ${summary.summary.evidence_sources}`);
  if (Array.isArray(summary.notes) && summary.notes.length > 0) {
    summary.notes.forEach((note) => lines.push(`- Note: ${note}`));
  }
  lines.push('');
  lines.push('## Claim Families');
  lines.push('');
  if (summary.matched_claim_families.length === 0) {
    lines.push('- none');
  } else {
    summary.matched_claim_families.forEach((entry) => {
      lines.push(
        `- \`${entry.claim_id}\` (${entry.claim_family}) — ${entry.status}, ${entry.confidence} confidence, owner: \`${entry.canonical_owner}\``
      );
    });
  }
  lines.push('');
  lines.push('## Unresolved Items');
  lines.push('');
  if (summary.unresolved_items.length === 0) {
    lines.push('- none');
  } else {
    summary.unresolved_items.forEach((entry) => {
      lines.push(`- \`${entry.claim_id}\` (${entry.status}) — ${entry.summary}`);
    });
  }
  lines.push('');
  lines.push('## Propagation Queue');
  lines.push('');
  if (summary.propagation_queue.length === 0) {
    lines.push('- none');
  } else {
    summary.propagation_queue.slice(0, 20).forEach((entry) => {
      lines.push(`- \`${entry.claim_id}\` → \`${entry.file}\` [${entry.action}]`);
    });
    if (summary.propagation_queue.length > 20) {
      lines.push(`- ... ${summary.propagation_queue.length - 20} more item(s)`);
    }
  }
  lines.push('');
  return `${lines.join('\n').trimEnd()}\n`;
}

function writeJson(filePath, value) {
  ensureDirForFile(filePath);
  fs.writeFileSync(path.resolve(REPO_ROOT, filePath), `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeText(filePath, value) {
  ensureDirForFile(filePath);
  fs.writeFileSync(path.resolve(REPO_ROOT, filePath), value, 'utf8');
}

function runResearch(args, targetFiles, reportMd, reportJson) {
  const scriptAbs = path.resolve(REPO_ROOT, 'tools/scripts/docs-page-research.js');
  const command = [
    scriptAbs,
    '--registry',
    path.resolve(REPO_ROOT, args.registry),
    '--files',
    targetFiles.join(','),
    '--report-md',
    path.resolve(REPO_ROOT, reportMd),
    '--report-json',
    path.resolve(REPO_ROOT, reportJson),
    '--quiet'
  ];

  const result = spawnSync('node', command, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    throw new Error(String(result.stderr || result.stdout || 'docs-page-research failed').trim());
  }

  return JSON.parse(fs.readFileSync(path.resolve(REPO_ROOT, reportJson), 'utf8'));
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const changedFiles = getChangedFiles(args);
    const targetFiles = changedFiles.filter((file) => isDocsPage(file) && fs.existsSync(path.resolve(REPO_ROOT, file)));
    const reportMd = args.reportMd || '.codex/pr-research.generated.md';
    const reportJson = args.reportJson || '.codex/pr-research.generated.json';

    let summary;
    if (targetFiles.length === 0) {
      summary = {
        generated_at: new Date().toISOString(),
        changed_files: changedFiles,
        target_files: [],
        matched_claim_families: [],
        summary: {
          matched_claim_families: 0,
          verified_claims: 0,
          conflicted_claims: 0,
          time_sensitive_claims: 0,
          unresolved_claims: 0,
          contradiction_groups: 0,
          propagation_queue_items: 0,
          evidence_sources: 0
        },
        contradictions: [],
        unresolved_items: [],
        propagation_queue: [],
        evidence_sources: [],
        notes: ['No tracked docs pages were present in the changed-file set.'],
        markdown_artifact: toPosix(reportMd),
        json_artifact: toPosix(reportJson)
      };
    } else {
      const report = runResearch(args, targetFiles, reportMd, reportJson);
      summary = buildSummary(report, changedFiles, targetFiles, reportMd, reportJson);
    }

    writeJson(reportJson, summary);
    writeText(reportMd, buildMarkdown(summary));

    if (!args.quiet) {
      console.log(
        `✅ docs-page-research-pr-report: ${summary.summary.matched_claim_families} claim family/families, ${summary.summary.contradiction_groups} contradiction group(s), ${summary.summary.evidence_sources} evidence source(s)`
      );
    }
    process.exit(0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
