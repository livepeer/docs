#!/usr/bin/env node
/**
 * @script           check-stale-issues
 * @category         validator
 * @purpose          governance:repo-health
 * @scope            external
 * @owner            docs
 * @needs            R-R14
 * @purpose-statement Flags open GitHub issues with no activity for 60+ days as stale, 90+ days as abandoned.
 * @pipeline         P5 (scheduled), manual
 * @usage            node tools/scripts/validators/structure/check-stale-issues.js [--stale-days <N>] [--abandoned-days <N>] [--label] [--json]
 */

const { spawnSync } = require('child_process');

const DEFAULT_STALE_DAYS = 60;
const DEFAULT_ABANDONED_DAYS = 90;
const DEFAULT_REPO = 'livepeer/docs';
const DAY_MS = 24 * 60 * 60 * 1000;

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/validators/structure/check-stale-issues.js [options]',
      '',
      'Options:',
      '  --stale-days <N>      Mark issues stale after this many inactive days (default: 60)',
      '  --abandoned-days <N>  Mark issues abandoned after this many inactive days (default: 90)',
      '  --label               Apply lifecycle: stale to stale issues that do not already have it',
      '  --json                Emit machine-readable JSON',
      '  --help, -h            Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    staleDays: DEFAULT_STALE_DAYS,
    abandonedDays: DEFAULT_ABANDONED_DAYS,
    label: false,
    json: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--label') {
      args.label = true;
      continue;
    }

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--stale-days') {
      args.staleDays = Number(argv[index + 1]);
      index += 1;
      continue;
    }

    if (token.startsWith('--stale-days=')) {
      args.staleDays = Number(token.slice('--stale-days='.length));
      continue;
    }

    if (token === '--abandoned-days') {
      args.abandonedDays = Number(argv[index + 1]);
      index += 1;
      continue;
    }

    if (token.startsWith('--abandoned-days=')) {
      args.abandonedDays = Number(token.slice('--abandoned-days='.length));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!Number.isInteger(args.staleDays) || args.staleDays <= 0) {
    throw new Error(`Invalid --stale-days value: ${args.staleDays}`);
  }

  if (!Number.isInteger(args.abandonedDays) || args.abandonedDays <= args.staleDays) {
    throw new Error(`Invalid --abandoned-days value: ${args.abandonedDays}`);
  }

  return args;
}

function runGh(args) {
  const result = spawnSync('gh', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  });

  return {
    ok: result.status === 0,
    status: result.status,
    stdout: String(result.stdout || ''),
    stderr: String(result.stderr || ''),
    error: result.error || null
  };
}

function ensureGitHubAccess() {
  const versionCheck = runGh(['--version']);
  if (!versionCheck.ok) {
    return {
      available: false,
      message: versionCheck.error ? versionCheck.error.message : 'gh CLI is unavailable'
    };
  }

  const authCheck = runGh(['auth', 'status']);
  if (!authCheck.ok) {
    return {
      available: false,
      message: authCheck.stderr.trim() || 'gh CLI is not authenticated'
    };
  }

  return { available: true, message: '' };
}

function fetchOpenIssues() {
  const result = runGh([
    'issue',
    'list',
    '--repo',
    DEFAULT_REPO,
    '--state',
    'open',
    '--limit',
    '200',
    '--json',
    'number,title,updatedAt,url,labels,assignees'
  ]);

  if (!result.ok) {
    throw new Error(result.stderr.trim() || 'Failed to fetch open issues');
  }

  return JSON.parse(result.stdout || '[]');
}

function classifyIssues(issues, staleDays, abandonedDays) {
  const now = Date.now();
  const stale = [];
  const abandoned = [];

  issues.forEach((issue) => {
    const updatedAtMs = Date.parse(issue.updatedAt);
    if (Number.isNaN(updatedAtMs)) return;
    const ageDays = Math.floor((now - updatedAtMs) / DAY_MS);
    const entry = {
      number: issue.number,
      title: issue.title,
      url: issue.url,
      updatedAt: issue.updatedAt,
      ageDays,
      labels: Array.isArray(issue.labels) ? issue.labels.map((label) => label.name) : []
    };

    if (ageDays >= abandonedDays) {
      abandoned.push(entry);
      return;
    }

    if (ageDays >= staleDays) {
      stale.push(entry);
    }
  });

  const sorter = (left, right) => right.ageDays - left.ageDays || left.number - right.number;
  stale.sort(sorter);
  abandoned.sort(sorter);

  return { stale, abandoned };
}

function applyStaleLabel(issues) {
  const applied = [];
  const skipped = [];
  const failures = [];

  issues.forEach((issue) => {
    if (issue.labels.includes('lifecycle: stale')) {
      skipped.push(issue.number);
      return;
    }

    const result = runGh([
      'issue',
      'edit',
      String(issue.number),
      '--repo',
      DEFAULT_REPO,
      '--add-label',
      'lifecycle: stale'
    ]);

    if (result.ok) {
      applied.push(issue.number);
    } else {
      failures.push({
        number: issue.number,
        message: result.stderr.trim() || 'Unable to apply lifecycle: stale label'
      });
    }
  });

  return { applied, skipped, failures };
}

function buildSummary(classified, labelResult, advisoryMessage) {
  return {
    advisory: advisoryMessage || '',
    stale: classified.stale.length,
    abandoned: classified.abandoned.length,
    labelled: labelResult ? labelResult.applied.length : 0
  };
}

function renderText(report) {
  const lines = [
    'Stale issue report',
    `Repo: ${DEFAULT_REPO}`,
    `Stale: ${report.summary.stale} | Abandoned: ${report.summary.abandoned} | Labelled: ${report.summary.labelled}`
  ];

  if (report.summary.advisory) {
    lines.push(`Advisory: ${report.summary.advisory}`);
  }

  lines.push('');

  if (report.classified.abandoned.length === 0) {
    lines.push('ABANDONED: none');
  } else {
    report.classified.abandoned.forEach((issue) => {
      lines.push(`ABANDONED #${issue.number} | ${issue.ageDays} day(s) inactive | ${issue.title}`);
    });
  }

  lines.push('');

  if (report.classified.stale.length === 0) {
    lines.push('STALE: none');
  } else {
    report.classified.stale.forEach((issue) => {
      lines.push(`STALE     #${issue.number} | ${issue.ageDays} day(s) inactive | ${issue.title}`);
    });
  }

  if (report.labelResult && report.labelResult.failures.length > 0) {
    lines.push('');
    report.labelResult.failures.forEach((failure) => {
      lines.push(`WARNING   failed to label #${failure.number}: ${failure.message}`);
    });
  }

  return lines.join('\n');
}

function buildJsonReport(report) {
  return {
    generatedAt: report.generatedAt,
    summary: report.summary,
    stale: report.classified.stale,
    abandoned: report.classified.abandoned,
    labelResult: report.labelResult || { applied: [], skipped: [], failures: [] }
  };
}

function run(args = parseArgs(process.argv.slice(2))) {
  const access = ensureGitHubAccess();
  if (!access.available) {
    return {
      generatedAt: new Date().toISOString(),
      summary: {
        advisory: access.message,
        stale: 0,
        abandoned: 0,
        labelled: 0
      },
      classified: { stale: [], abandoned: [] },
      labelResult: { applied: [], skipped: [], failures: [] },
      exitCode: 0
    };
  }

  const issues = fetchOpenIssues();
  const classified = classifyIssues(issues, args.staleDays, args.abandonedDays);
  const labelResult = args.label ? applyStaleLabel(classified.stale) : { applied: [], skipped: [], failures: [] };

  return {
    generatedAt: new Date().toISOString(),
    summary: buildSummary(classified, labelResult, ''),
    classified,
    labelResult,
    exitCode: 0
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const report = run(args);
    if (args.json) {
      process.stdout.write(`${JSON.stringify(buildJsonReport(report))}\n`);
    } else {
      process.stdout.write(`${renderText(report)}\n`);
    }
    process.exit(report.exitCode);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run,
  classifyIssues,
  buildJsonReport,
  renderText
};
