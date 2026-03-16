#!/usr/bin/env node
/**
 * @script            generate-ai-skills-indexes
 * @category          generator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, ai-tools/ai-skills, AGENTS.md, .github, .claude, .cursor, .windsurf, docs-guide/policies, contribute, v2
 * @owner             docs
 * @needs             R-R14, R-R18
 * @purpose-statement Generates ai-tools/ai-skills inventory.json and content-map.md from the canonical agent-governance surface manifest.
 * @pipeline          manual, ci
 * @dualmode          --check | --write
 * @usage             node tools/scripts/generate-ai-skills-indexes.js [--check|--write]
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../..');
const OUTPUTS = {
  inventory: 'ai-tools/ai-skills/inventory.json',
  contentMap: 'ai-tools/ai-skills/content-map.md'
};
const SECTION_ORDER = [
  'canonical-runtime',
  'contributor-docs',
  'setup-guides',
  'generated-supplemental',
  'source-content-snapshots',
  'retired-legacy'
];
const SECTION_TITLES = {
  'canonical-runtime': 'Canonical Runtime Governance',
  'contributor-docs': 'Contributor and Localized Documentation',
  'setup-guides': 'Agent Setup Guides',
  'generated-supplemental': 'Generated Supplemental Outputs',
  'source-content-snapshots': 'Source-Content Snapshots',
  'retired-legacy': 'Retired Legacy Surfaces'
};
const SURFACES = [
  {
    path: 'AGENTS.md',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines the canonical repo-wide baseline for all supported coding agents.'
  },
  {
    path: '.github/copilot-instructions.md',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines the thin GitHub Copilot adapter that points back to the canonical repo baseline.'
  },
  {
    path: '.claude/CLAUDE.md',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines the thin Claude Code adapter for the canonical repo baseline.'
  },
  {
    path: '.cursor/rules/repo-governance.mdc',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines the thin Cursor adapter for the canonical repo baseline.'
  },
  {
    path: '.windsurf/rules/repo-governance.md',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines the thin Windsurf adapter for the canonical repo baseline.'
  },
  {
    path: '.allowlist',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines the machine-readable allowlist of governed repo-root entries.'
  },
  {
    path: 'docs-guide/policies/agent-governance-framework.mdx',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Documents the canonical supported-agent layout, taxonomy, and retirement policy.'
  },
  {
    path: 'docs-guide/policies/root-allowlist-governance.mdx',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Documents root-entry policy, allowlist authoring rules, and parser constraints.'
  },
  {
    path: 'tools/scripts/validators/governance/check-agent-docs-freshness.js',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Validates the canonical agent runtime surfaces and governance docs for existence and freshness.'
  },
  {
    path: '.codex/README.md',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Documents Codex task isolation, lock lifecycle, and local operational conventions.'
  },
  {
    path: '.codex/task-contract.yaml',
    section: 'canonical-runtime',
    status: 'active',
    primary_purpose: 'Defines task-scope metadata and acceptance contracts for codex implementation branches.'
  },
  {
    path: 'README.md',
    section: 'contributor-docs',
    status: 'active',
    primary_purpose: 'Provides high-level repo orientation and links to the canonical governance surfaces.'
  },
  {
    path: 'contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'contributor-docs',
    status: 'active',
    primary_purpose: 'Provides contributor-facing agent workflow guidance and hook expectations.'
  },
  {
    path: 'v2/cn/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'contributor-docs',
    status: 'active',
    primary_purpose: 'Localized Chinese contributor guidance for the canonical agent workflow.'
  },
  {
    path: 'v2/es/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'contributor-docs',
    status: 'active',
    primary_purpose: 'Localized Spanish contributor guidance for the canonical agent workflow.'
  },
  {
    path: 'v2/fr/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'contributor-docs',
    status: 'active',
    primary_purpose: 'Localized French contributor guidance for the canonical agent workflow.'
  },
  {
    path: 'ai-tools/claude-code.mdx',
    section: 'setup-guides',
    status: 'active',
    primary_purpose: 'Documents Claude Code setup against the canonical repo governance layout.'
  },
  {
    path: 'ai-tools/cursor.mdx',
    section: 'setup-guides',
    status: 'active',
    primary_purpose: 'Documents Cursor setup against the canonical repo governance layout.'
  },
  {
    path: 'ai-tools/windsurf.mdx',
    section: 'setup-guides',
    status: 'active',
    primary_purpose: 'Documents Windsurf setup against the canonical repo governance layout.'
  },
  {
    path: 'ai-tools/agent-packs/README.md',
    section: 'generated-supplemental',
    status: 'generated',
    primary_purpose: 'Explains the generated cross-agent audit packs and their shared pipeline stages.'
  },
  {
    path: 'ai-tools/agent-packs/claude/CLAUDE.md',
    section: 'generated-supplemental',
    status: 'generated',
    primary_purpose: 'Generated Claude-oriented audit pack emitted by the cross-agent packager.'
  },
  {
    path: 'ai-tools/agent-packs/cursor/rules.md',
    section: 'generated-supplemental',
    status: 'generated',
    primary_purpose: 'Generated Cursor-oriented audit pack emitted by the cross-agent packager.'
  },
  {
    path: 'ai-tools/agent-packs/windsurf/rules.md',
    section: 'generated-supplemental',
    status: 'generated',
    primary_purpose: 'Generated Windsurf-oriented audit pack emitted by the cross-agent packager.'
  },
  {
    path: 'ai-tools/agent-packs/codex/skills-manifest.json',
    section: 'generated-supplemental',
    status: 'generated',
    primary_purpose: 'Generated Codex skills manifest emitted by the cross-agent packager.'
  },
  {
    path: 'ai-tools/ai-skills/source-content/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'source-content-snapshots',
    status: 'snapshot',
    primary_purpose: 'Stores the source-content snapshot for contributor agent instructions used by AI-skills inventories.'
  },
  {
    path: 'ai-tools/ai-skills/source-content/v2/cn/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'source-content-snapshots',
    status: 'snapshot',
    primary_purpose: 'Stores the Chinese source-content snapshot for localized contributor agent instructions.'
  },
  {
    path: 'ai-tools/ai-skills/source-content/v2/es/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'source-content-snapshots',
    status: 'snapshot',
    primary_purpose: 'Stores the Spanish source-content snapshot for localized contributor agent instructions.'
  },
  {
    path: 'ai-tools/ai-skills/source-content/v2/fr/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md',
    section: 'source-content-snapshots',
    status: 'snapshot',
    primary_purpose: 'Stores the French source-content snapshot for localized contributor agent instructions.'
  },
  {
    path: '.github/AGENTS.md',
    section: 'retired-legacy',
    status: 'retired',
    primary_purpose: 'Retired repo-wide agent baseline replaced by the canonical root AGENTS.md.'
  },
  {
    path: '.cursorrules',
    section: 'retired-legacy',
    status: 'retired',
    primary_purpose: 'Retired Cursor root rule file replaced by .cursor/rules/repo-governance.mdc.'
  },
  {
    path: 'ASSISTANT.md',
    section: 'retired-legacy',
    status: 'retired',
    primary_purpose: 'Retired assistant contract merged into the canonical root AGENTS.md.'
  },
  {
    path: '.github/augment-instructions.md',
    section: 'retired-legacy',
    status: 'retired',
    primary_purpose: 'Retired Augment-specific instruction file removed from the supported agent matrix.'
  }
];

function usage() {
  console.log('Usage: node tools/scripts/generate-ai-skills-indexes.js [--check|--write]');
}

function parseArgs(argv) {
  const args = { mode: 'check' };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--check') {
      args.mode = 'check';
      continue;
    }
    if (token === '--write') {
      args.mode = 'write';
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

function detectFormat(repoPath) {
  if (repoPath.endsWith('.mdx')) return 'mdx';
  if (repoPath.endsWith('.md')) return 'markdown';
  if (repoPath.endsWith('.mdc')) return 'vendor-specific';
  if (repoPath.endsWith('.json')) return 'json';
  if (repoPath.endsWith('.yaml') || repoPath.endsWith('.yml')) return 'yaml';
  if (repoPath.endsWith('.js')) return 'javascript';
  return 'text';
}

function countLines(content) {
  if (!content) return 0;
  return content.split(/\r?\n/).length;
}

function hasSkillFrontmatter(content) {
  return /^---[\s\S]*?\nname:/m.test(content);
}

function readUtf8(absPath) {
  return fs.existsSync(absPath) ? fs.readFileSync(absPath, 'utf8') : '';
}

function buildRecord(surface) {
  const absPath = path.join(REPO_ROOT, surface.path);
  const exists = fs.existsSync(absPath);
  const content = readUtf8(absPath);

  return {
    path: surface.path,
    section: surface.section,
    status: surface.status,
    exists,
    format: detectFormat(surface.path),
    line_count: countLines(content),
    has_skill_frontmatter: hasSkillFrontmatter(content),
    primary_purpose: surface.primary_purpose,
    discovery: 'manifest',
    unexpected: false,
    unexpected_reason: null
  };
}

function buildInventory() {
  return SURFACES.map(buildRecord);
}

function renderInventory(records) {
  return `${JSON.stringify(records, null, 2)}\n`;
}

function renderSectionTable(records) {
  const lines = [
    '| Path | Status | Exists | Format | Purpose |',
    '|---|---|---|---|---|'
  ];

  records.forEach((record) => {
    lines.push(
      `| \`${record.path}\` | ${record.status} | ${record.exists ? 'yes' : 'no'} | ${record.format} | ${record.primary_purpose} |`
    );
  });

  return lines;
}

function getStableGeneratedAt(records) {
  let latest = 0;

  records.forEach((record) => {
    if (!record.exists) return;
    const absPath = path.join(REPO_ROOT, record.path);
    const stat = fs.statSync(absPath);
    latest = Math.max(latest, stat.mtimeMs);
  });

  return new Date(latest || Date.UTC(1970, 0, 1)).toISOString();
}

function renderContentMap(records) {
  const generatedAt = getStableGeneratedAt(records);
  const lines = [
    '# Content Map',
    '',
    `- Generated: ${generatedAt}`,
    `- Inventory: \`${OUTPUTS.inventory}\``,
    `- Files catalogued: ${records.length}`,
    ''
  ];

  SECTION_ORDER.forEach((section) => {
    const sectionRecords = records.filter((record) => record.section === section);
    if (sectionRecords.length === 0) return;

    lines.push(`## ${SECTION_TITLES[section]}`);
    lines.push('');
    lines.push(...renderSectionTable(sectionRecords));
    lines.push('');

    if (section === 'retired-legacy') {
      lines.push('These paths are tracked for migration and audit history only. They must not be recreated as active governance sources.');
      lines.push('');
    }
  });

  return `${lines.join('\n')}\n`;
}

function writeFile(repoPath, content) {
  const absPath = path.join(REPO_ROOT, repoPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

function run(args) {
  const records = buildInventory();
  const nextInventory = renderInventory(records);
  const nextContentMap = renderContentMap(records);
  const outputs = [
    { path: OUTPUTS.inventory, content: nextInventory },
    { path: OUTPUTS.contentMap, content: nextContentMap }
  ];

  const drift = [];

  outputs.forEach((output) => {
    const current = readUtf8(path.join(REPO_ROOT, output.path));
    if (current !== output.content) {
      drift.push(output.path);
      if (args.mode === 'write') {
        writeFile(output.path, output.content);
      }
    }
  });

  if (drift.length === 0) {
    console.log(`AI-skills indexes ${args.mode === 'write' ? 'already current' : 'verified'}.`);
    return 0;
  }

  if (args.mode === 'write') {
    console.log(`Updated ${drift.length} AI-skills index file(s):`);
    drift.forEach((repoPath) => console.log(`  - ${repoPath}`));
    return 0;
  }

  console.error('AI-skills indexes are out of date:');
  drift.forEach((repoPath) => console.error(`  - ${repoPath}`));
  console.error('Run: node tools/scripts/generate-ai-skills-indexes.js --write');
  return 1;
}

if (require.main === module) {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  process.exit(run(args));
}

module.exports = {
  OUTPUTS,
  SURFACES,
  buildInventory,
  renderInventory,
  renderContentMap,
  run
};
