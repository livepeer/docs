/**
 * @script      mdx-render-gate
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description PreToolUse hook for Write/Edit. Reads the verification state written by
 * @mode        dispatch
 * @pipeline    PreToolUse hook → read state → allow or block
 * @scope       .claude/settings.json PreToolUse hook (Write|Edit matcher)
 * @usage       Called automatically by Claude Code PreToolUse hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { stdin } = process;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STALE_THRESHOLD_MS = 60 * 60 * 1000; // 1 hour — stale state doesn't block forever

// Paths that are always writable regardless of verification state
const EXEMPT_PATTERNS = [
  /\/workspace\//,
  /\/_workspace\//,
  /\/\.claude\//,
  /session-log\.txt/,
  /phase-gate\.jsonl/,
  /flags\.jsonl/,
  /message-backup\.jsonl/,
  /\/tmp\//
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSessionId() {
  return process.env.CLAUDE_SESSION_ID || 'default';
}

function getStatePath() {
  return path.join('/tmp', `claude-mdx-verification-${getSessionId()}.json`);
}

function isExempt(filePath) {
  return EXEMPT_PATTERNS.some((pattern) => pattern.test(filePath));
}

function readState() {
  try {
    return JSON.parse(fs.readFileSync(getStatePath(), 'utf8'));
  } catch (_) {
    return null;
  }
}

const VALID_TABS = ['home', 'about', 'gateways', 'orchestrators', 'developers', 'delegators', 'solutions', 'resources'];

function extractTab(filePath) {
  const match = filePath.match(/\/?v2\/([^/]+)/);
  const tab = match ? match[1] : '';
  return VALID_TABS.includes(tab) ? `v2/${tab}` : null;
}

// ---------------------------------------------------------------------------
// Remediation lookup — scan repo for scripts that can fix the error class
// ---------------------------------------------------------------------------

const REMEDIATOR_DIR = path.join(
  __dirname, '..', '..', '..', '..',
  'operations', 'scripts', 'remediators'
);

const ERROR_TO_REMEDIATOR = [
  {
    pattern: /frontmatter|duplicate.*key|yaml.*syntax/i,
    script: 'operations/scripts/dispatch/governance/mdx-frontmatter-sanitise.js',
    label: 'Frontmatter auto-fix (duplicate keys)',
    usage: 'Runs automatically as PostToolUse hook on next edit'
  },
  {
    pattern: /import|unused.*import|cannot.*find.*module/i,
    script: 'operations/scripts/remediators/content/repair/repair-page-imports.js',
    label: 'Unused import remediator',
    usage: 'node operations/scripts/remediators/content/repair/repair-page-imports.js --dry-run --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /markdown|html.*comment|br.*tag|angle.*bracket/i,
    script: 'operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js',
    label: 'MDX-safe markdown repair',
    usage: 'node operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js --dry-run --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /href|link|relative.*path|page.*not.*found/i,
    script: 'operations/scripts/remediators/content/repair/repair-page-links.js',
    label: 'Page link repair',
    usage: 'node operations/scripts/remediators/content/repair/repair-page-links.js --dry-run --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /spell|typo/i,
    script: 'operations/scripts/remediators/content/repair/repair-spelling.js',
    label: 'Spelling repair',
    usage: 'node operations/scripts/remediators/content/repair/repair-spelling.js --dry-run --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /governance|GOVERNANCE\.md|lastVerified/i,
    script: 'operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js',
    label: 'Governance artifact repair',
    usage: 'node operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js --dry-run (add --verify for post-repair validation)'
  },
  // --- Remediators added 2026-04-08 (render-gate-remediation-gap-report.md Gap A) ---
  {
    pattern: /relative.*href|\.\/|\.\.\/|href.*relative/i,
    script: 'operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js',
    label: 'Relative href canonicalisation',
    usage: 'node operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js (add --verify for post-repair validation)'
  },
  {
    pattern: /docs-path|moved|renamed|stale.*path/i,
    script: 'operations/scripts/remediators/content/repair/sync-docs-paths.js',
    label: 'Docs-path sync after file moves',
    usage: 'node operations/scripts/remediators/content/repair/sync-docs-paths.js --staged --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /mintlify.*consumer|registry.*drift|canonical.*sync/i,
    script: 'operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js',
    label: 'Mintlify consumer registry sync',
    usage: 'node operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js --check (add --verify for post-repair validation)'
  },
  {
    pattern: /ownerless|passive.*voice|unclear.*ownership/i,
    script: 'operations/scripts/remediators/content/style/repair-ownerless-language.js',
    label: 'Ownerless language repair',
    usage: 'node operations/scripts/remediators/content/style/repair-ownerless-language.js --check --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /accessibility|wcag|aria|alt.*text|contrast/i,
    script: 'operations/scripts/remediators/content/style/wcag-repair-common.js',
    label: 'WCAG accessibility repair',
    usage: 'node operations/scripts/remediators/content/style/wcag-repair-common.js --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /seo|og:image|meta.*description|open.*graph/i,
    script: 'operations/scripts/remediators/content/seo/generate-seo.js',
    label: 'SEO metadata generation',
    usage: 'node operations/scripts/remediators/content/seo/generate-seo.js --dry-run --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /component.*registry|component.*metadata|export.*not.*found/i,
    script: 'operations/scripts/remediators/components/library/repair-component-metadata.js',
    label: 'Component metadata repair',
    usage: 'node operations/scripts/remediators/components/library/repair-component-metadata.js --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /framework.*header|missing.*classification/i,
    script: 'operations/scripts/remediators/content/classification/add-framework-headers.js',
    label: 'Framework classification header repair',
    usage: 'node operations/scripts/remediators/content/classification/add-framework-headers.js --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /pageType|missing.*frontmatter.*type/i,
    script: 'operations/scripts/remediators/content/classification/add-pagetype-mechanical.js',
    label: 'pageType frontmatter repair',
    usage: 'node operations/scripts/remediators/content/classification/add-pagetype-mechanical.js --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /purpose|missing.*metadata|classification/i,
    script: 'operations/scripts/remediators/content/classification/assign-purpose-metadata.js',
    label: 'Purpose metadata assignment',
    usage: 'node operations/scripts/remediators/content/classification/assign-purpose-metadata.js --dry-run --files <file> (add --verify for post-repair validation)'
  },
  {
    pattern: /workflow.*header|workflow.*governance/i,
    script: 'operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js',
    label: 'Workflow governance header repair',
    usage: 'node operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /jsdoc|script.*header|missing.*@script/i,
    script: 'operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js',
    label: 'JSDoc header repair',
    usage: 'node operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /usage.*path|scaffold|broken.*reference/i,
    script: 'operations/scripts/remediators/governance/scaffold/fix-usage-paths.js',
    label: 'Usage path repair',
    usage: 'node operations/scripts/remediators/governance/scaffold/fix-usage-paths.js (add --verify for post-repair validation)'
  },
  {
    pattern: /script.*inventory|registry.*mismatch/i,
    script: 'operations/scripts/remediators/governance/scripts/repair-script-inventory.js',
    label: 'Script inventory repair',
    usage: 'node operations/scripts/remediators/governance/scripts/repair-script-inventory.js --dry-run (add --verify for post-repair validation)'
  },
  {
    pattern: /quarantine|deprecated|cleanup.*risk/i,
    script: 'operations/scripts/remediators/content/repair/quarantine-manager.js',
    label: 'Quarantine manager (safe cleanup)',
    usage: 'node operations/scripts/remediators/content/repair/quarantine-manager.js (add --verify for post-repair validation)'
  }
];

// ---------------------------------------------------------------------------
// Validator lookup — suggest diagnostic scripts to understand error scope
// ---------------------------------------------------------------------------

const ERROR_TO_VALIDATOR = [
  {
    pattern: /frontmatter|pageType|purpose|missing.*field|stale.*content/i,
    script: 'operations/scripts/validators/content/structure/lint-structure.js',
    label: 'Structure linter (frontmatter, staleness, structural issues)',
    usage: 'node operations/scripts/validators/content/structure/lint-structure.js <file>'
  },
  {
    pattern: /banned.*word|prohibited|copy.*quality/i,
    script: 'operations/scripts/validators/content/copy/lint-copy.js',
    label: 'Copy linter (banned words, prohibited phrases)',
    usage: 'node operations/scripts/validators/content/copy/lint-copy.js <file>'
  },
  {
    pattern: /conditional|negation|weakened|pattern/i,
    script: 'operations/scripts/validators/content/copy/lint-patterns.js',
    label: 'Copy pattern linter (tier 2 patterns)',
    usage: 'node operations/scripts/validators/content/copy/lint-patterns.js <file>'
  },
  {
    pattern: /component.*import|component.*export|component.*error/i,
    script: 'operations/scripts/validators/components/library/check-component-health.js',
    label: 'Component health check',
    usage: 'node operations/scripts/validators/components/library/check-component-health.js'
  },
  {
    pattern: /markdown|mdx.*unsafe|html.*comment|angle.*bracket/i,
    script: 'operations/scripts/validators/content/structure/check-mdx-safe-markdown.js',
    label: 'MDX-safe markdown check',
    usage: 'node operations/scripts/validators/content/structure/check-mdx-safe-markdown.js <file>'
  },
  {
    pattern: /react.*error|console.*error|hydration|minified/i,
    script: 'operations/scripts/validators/content/structure/sweep-console-errors.js',
    label: 'Console error sweep (all pages)',
    usage: 'node operations/scripts/validators/content/structure/sweep-console-errors.js'
  },
  {
    pattern: /duplicate.*h1|duplicate.*h2|double.*header|heading/i,
    script: 'operations/scripts/validators/content/structure/check-double-headers.js',
    label: 'Double header check',
    usage: 'node operations/scripts/validators/content/structure/check-double-headers.js <file>'
  },
  {
    pattern: /anchor|broken.*anchor|hash.*link/i,
    script: 'operations/scripts/validators/content/structure/check-anchor-usage.js',
    label: 'Anchor usage check',
    usage: 'node operations/scripts/validators/content/structure/check-anchor-usage.js <file>'
  },
  {
    pattern: /truncated|malformed.*end|page.*ending/i,
    script: 'operations/scripts/validators/content/structure/check-page-endings.js',
    label: 'Page endings check',
    usage: 'node operations/scripts/validators/content/structure/check-page-endings.js <file>'
  },
  {
    pattern: /description.*quality|meta.*description|seo.*description/i,
    script: 'operations/scripts/validators/content/structure/check-description-quality.js',
    label: 'Description quality check',
    usage: 'node operations/scripts/validators/content/structure/check-description-quality.js <file>'
  },
  {
    pattern: /docs.*path|path.*sync|route.*mismatch/i,
    script: 'operations/scripts/validators/content/structure/check-docs-path-sync.js',
    label: 'Docs path sync check',
    usage: 'node operations/scripts/validators/content/structure/check-docs-path-sync.js'
  },
  {
    pattern: /grammar|en-gb|british.*english/i,
    script: 'operations/scripts/validators/content/grammar/check-grammar-en-gb.js',
    label: 'EN-GB grammar check',
    usage: 'node operations/scripts/validators/content/grammar/check-grammar-en-gb.js <file>'
  },
  {
    pattern: /proper.*noun|capitalisation|capitalization/i,
    script: 'operations/scripts/validators/content/grammar/check-proper-nouns.js',
    label: 'Proper noun check',
    usage: 'node operations/scripts/validators/content/grammar/check-proper-nouns.js <file>'
  },
  {
    pattern: /voice.*register|tone|audience.*mismatch/i,
    script: 'operations/scripts/validators/content/copy/check-voice-register.js',
    label: 'Voice register check',
    usage: 'node operations/scripts/validators/content/copy/check-voice-register.js <file>'
  }
];

// ---------------------------------------------------------------------------
// Workflow references — suggest GitHub Actions for batch operations
// ---------------------------------------------------------------------------

const WORKFLOW_REFERENCES = [
  // Remediator workflows
  {
    pattern: /voice|copy|spell|en-gb|grammar|style/i,
    workflow: 'remediator-brand-repair-en-gb-style.yml',
    label: 'EN-GB style homogenisation (creates PR)',
    usage: 'gh workflow run remediator-brand-repair-en-gb-style.yml -f scope=changed'
  },
  {
    pattern: /governance|GOVERNANCE\.md|lastVerified|marker/i,
    workflow: 'remediator-governance-repair-pipelines.yml',
    label: 'Governance pipeline repair (creates PR)',
    usage: 'gh workflow run remediator-governance-repair-pipelines.yml -f mode=dry-run'
  },
  {
    pattern: /seo|og:image|meta.*description|open.*graph/i,
    workflow: 'remediator-discoverability-repair-seo-metadata.yml',
    label: 'SEO metadata refresh (creates PR)',
    usage: 'gh workflow run remediator-discoverability-repair-seo-metadata.yml -f dry_run=true'
  },
  // Validator workflows
  {
    pattern: /banned.*word|copy.*standard|grammar|proper.*noun/i,
    workflow: 'validator-brand-check-copy-standards.yml',
    label: 'Copy standards suite (lint-copy + patterns + grammar + nouns)',
    usage: 'gh workflow run validator-brand-check-copy-standards.yml'
  },
  {
    pattern: /content.*quality|browser.*test|pr.*check/i,
    workflow: 'validator-copy-check-content-quality-suite.yml',
    label: 'Content quality suite (P2 hard gate + browser tests)',
    usage: 'gh workflow run validator-copy-check-content-quality-suite.yml'
  },
  {
    pattern: /ai.*sitemap|sitemap.*ai/i,
    workflow: 'validator-discoverability-check-ai-sitemap.yml',
    label: 'AI sitemap verification',
    usage: 'gh workflow run validator-discoverability-check-ai-sitemap.yml'
  },
  {
    pattern: /companion|ai.*companion|manifest/i,
    workflow: 'validator-discoverability-check-companions.yml',
    label: 'AI companion files check',
    usage: 'gh workflow run validator-discoverability-check-companions.yml'
  },
  {
    pattern: /llms\.txt|llm.*file/i,
    workflow: 'validator-discoverability-check-llms-files.yml',
    label: 'llms.txt verification',
    usage: 'gh workflow run validator-discoverability-check-llms-files.yml'
  },
  {
    pattern: /codex|codex.*branch|task.*contract/i,
    workflow: 'validator-governance-check-codex-compliance.yml',
    label: 'Codex governance check',
    usage: 'gh workflow run validator-governance-check-codex-compliance.yml'
  },
  {
    pattern: /governance.*map|governance.*marker|governance.*sync/i,
    workflow: 'validator-governance-check-governance-map.yml',
    label: 'Governance map validation',
    usage: 'gh workflow run validator-governance-check-governance-map.yml'
  },
  {
    pattern: /broken.*link|dead.*link|404/i,
    workflow: 'validator-health-check-broken-links.yml',
    label: 'Broken links check (mintlify CLI)',
    usage: 'gh workflow run validator-health-check-broken-links.yml'
  },
  {
    pattern: /openapi|api.*spec|swagger/i,
    workflow: 'validator-health-check-openapi-reference.yml',
    label: 'OpenAPI reference audit',
    usage: 'gh workflow run validator-health-check-openapi-reference.yml'
  },
  {
    pattern: /render|browser|react.*error|console.*error|hydration/i,
    workflow: 'validator-health-check-page-rendering.yml',
    label: 'Full browser rendering sweep (all pages)',
    usage: 'gh workflow run validator-health-check-page-rendering.yml'
  },
  {
    pattern: /structure|header|anchor|ending|description/i,
    workflow: 'validator-health-check-page-structure.yml',
    label: 'Page structure suite (6 validators)',
    usage: 'gh workflow run validator-health-check-page-structure.yml'
  },
  {
    pattern: /catalog|docs.*guide.*catalog/i,
    workflow: 'validator-maintenance-check-catalogs.yml',
    label: 'Docs guide catalog check',
    usage: 'gh workflow run validator-maintenance-check-catalogs.yml'
  },
  {
    pattern: /docs.*index|index.*json/i,
    workflow: 'validator-maintenance-check-docs-index.yml',
    label: 'Docs index check',
    usage: 'gh workflow run validator-maintenance-check-docs-index.yml'
  }
];

// ---------------------------------------------------------------------------
// Pipeline doc references — link to docs-guide pipeline documentation
// ---------------------------------------------------------------------------

const PIPELINE_DOC_REFERENCES = [
  {
    pattern: /component|registry|export|import.*component/i,
    doc: 'docs-guide/docs-library/pipelines/component-health.mdx',
    label: 'Component Health Pipeline'
  },
  {
    pattern: /content.*quality|freshness|staleness|quality.*gate/i,
    doc: 'docs-guide/docs-library/pipelines/content-quality.mdx',
    label: 'Content Quality Pipeline'
  },
  {
    pattern: /copy|voice|brand|grammar|banned.*word|en-gb/i,
    doc: 'docs-guide/docs-library/pipelines/copy-brand.mdx',
    label: 'Copy and Brand Pipeline'
  },
  {
    pattern: /data.*integration|social.*feed|discord|youtube|rss|changelog/i,
    doc: 'docs-guide/docs-library/pipelines/data-integration.mdx',
    label: 'Data Integration Pipeline'
  },
  {
    pattern: /discover|seo|ai.*sitemap|llms\.txt|companion|crawl/i,
    doc: 'docs-guide/docs-library/pipelines/discoverability.mdx',
    label: 'Discoverability Pipeline'
  },
  {
    pattern: /governance|compliance|GOVERNANCE\.md|codex|marker/i,
    doc: 'docs-guide/docs-library/pipelines/governance-compliance.mdx',
    label: 'Governance and Compliance Pipeline'
  }
];

function matchRegistry(registry, errorText, failedFile, pathKey) {
  const matches = [];
  for (const entry of registry) {
    if (entry.pattern.test(errorText) || entry.pattern.test(failedFile)) {
      if (pathKey && entry[pathKey]) {
        try {
          const absPath = path.resolve(__dirname, '..', '..', '..', '..', entry[pathKey]);
          if (!fs.existsSync(absPath)) continue;
        } catch (_) {
          continue;
        }
      }
      matches.push(entry);
    }
  }
  return matches;
}

function findRemediation(failedFile, errors) {
  const errorText = errors.join(' ');
  const sections = [];

  // Layer 1: Remediator scripts (fix the problem)
  const remediators = matchRegistry(ERROR_TO_REMEDIATOR, errorText, failedFile, 'script');
  if (remediators.length === 0 && failedFile.endsWith('.mdx')) {
    try {
      if (fs.existsSync(REMEDIATOR_DIR)) {
        remediators.push({
          label: 'Manual inspection',
          usage: 'ls operations/scripts/remediators/ — check for applicable fix scripts'
        });
      }
    } catch (_) {}
  }
  if (remediators.length > 0) {
    sections.push('Remediators (fix):\n' + remediators.map((m) => `  → ${m.label}: ${m.usage}`).join('\n'));
  }

  // Layer 2: Validator scripts (diagnose scope)
  const validators = matchRegistry(ERROR_TO_VALIDATOR, errorText, failedFile, 'script');
  if (validators.length > 0) {
    sections.push('Validators (diagnose):\n' + validators.map((m) => `  → ${m.label}: ${m.usage}`).join('\n'));
  }

  // Layer 3: GitHub Actions workflows (batch operations)
  const workflows = matchRegistry(WORKFLOW_REFERENCES, errorText, failedFile, null);
  if (workflows.length > 0) {
    sections.push('Workflows (batch/CI):\n' + workflows.slice(0, 3).map((m) => `  → ${m.label}: ${m.usage}`).join('\n'));
  }

  // Layer 4: Pipeline docs (context)
  const pipelines = matchRegistry(PIPELINE_DOC_REFERENCES, errorText, failedFile, null);
  if (pipelines.length > 0) {
    sections.push('Pipeline docs:\n' + pipelines.map((m) => `  → ${m.label}: ${m.doc}`).join('\n'));
  }

  if (sections.length === 0) return '';
  return '\n\n' + sections.join('\n\n');
}

// ---------------------------------------------------------------------------
// Main hook logic
// ---------------------------------------------------------------------------

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolName = data.tool_name || '';
    const toolInput = data.tool_input || {};
    const filePath = toolInput.file_path || '';

    // Only gate Write and Edit
    if (toolName !== 'Write' && toolName !== 'Edit') {
      process.exit(0);
    }

    // Exempt paths — always allow
    if (isExempt(filePath)) {
      process.exit(0);
    }

    // Read verification state
    const state = readState();

    // No state file — nothing to enforce
    if (!state) {
      process.exit(0);
    }

    // Check staleness — don't block forever on old state
    if (state.timestamp) {
      const age = Date.now() - new Date(state.timestamp).getTime();
      if (age > STALE_THRESHOLD_MS) {
        console.log(JSON.stringify({
          systemMessage: 'RENDER GATE: Stale verification state (>1 hour old). Allowing edit. Run verification manually to confirm page health.'
        }));
        process.exit(0);
      }
    }

    // Passed or server-failed — allow through
    if (state.status === 'passed') {
      process.exit(0);
    }

    if (state.status === 'server-failed') {
      // Derive scope from the file that triggered the failure — must be a real tab
      const VALID_TABS = ['home', 'about', 'gateways', 'orchestrators', 'developers', 'delegators', 'solutions', 'resources'];
      const failedRoute = state.route || state.file || '';
      const scopeMatch = failedRoute.match(/\/?v2\/([^/]+)/);
      const tab = scopeMatch ? scopeMatch[1] : '';
      const scope = VALID_TABS.includes(tab) ? `v2/${tab}` : 'v2/home';

      // Try scoped auto-restart before allowing unverified edits
      try {
        execSync(`node operations/scripts/dispatch/governance/server-lifecycle.js restart ${scope}`, {
          timeout: 120000,
          stdio: 'pipe',
          cwd: process.cwd()
        });
        console.log(JSON.stringify({
          systemMessage: `RENDER GATE: Server was down. Scoped restart (${scope}) succeeded. Allowing edit — verification will run after.`
        }));
        process.exit(0);
      } catch (_) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: `BLOCKED: Mintlify dev server is down and scoped restart (${scope}) failed. Check build errors: tail -50 /tmp/mint-dev-test-*.log. Fix the build error, then run: node operations/scripts/dispatch/governance/server-lifecycle.js restart ${scope}`
        }));
        process.exit(2);
      }
    }

    if (state.status === 'pending') {
      console.log(JSON.stringify({
        systemMessage: 'RENDER GATE: Verification still in progress from previous edit. Allowing edit — results will be checked on the next tool call.'
      }));
      process.exit(0);
    }

    // FAILED — this is where we enforce
    if (state.status === 'failed') {
      const failedFile = state.file || '';
      const failedRoute = state.route || '';
      const newErrors = state.newErrors || [];

      // Allow editing the same file that failed (agent is fixing it)
      if (filePath === failedFile) {
        console.log(JSON.stringify({
          systemMessage: `RENDER GATE: Editing the file that failed verification (${path.basename(failedFile)}). Will re-verify after this edit.`
        }));
        process.exit(0);
      }

      // Scope check — only block edits within the same v2/{tab} as the failure.
      // Files outside v2/ (docs-guide/, snippets/, operations/) are never blocked
      // by a v2/ render failure. Files in a different v2/ tab are also allowed.
      const failedTab = extractTab(failedFile);
      const editTab = extractTab(filePath);

      if (!editTab || editTab !== failedTab) {
        console.log(JSON.stringify({
          systemMessage: `RENDER GATE: ${path.basename(failedFile)} has render errors on ${failedRoute}, but ${path.basename(filePath)} is in a different scope (${editTab || 'non-v2'}). Allowing edit. Fix ${path.basename(failedFile)} when you return to ${failedTab || 'that tab'}.`
        }));
        process.exit(0);
      }

      // BLOCK — agent is editing within the same tab as the failure
      const errorList = newErrors.slice(0, 5).map((e) => `  - ${e}`).join('\n');
      const truncated = newErrors.length > 5 ? `\n  ... and ${newErrors.length - 5} more` : '';

      // Look for applicable remediation scripts
      const remediation = findRemediation(failedFile, newErrors);

      console.log(JSON.stringify({
        decision: 'block',
        reason: `BLOCKED: Your last edit to ${path.basename(failedFile)} introduced console errors on ${failedRoute}:\n${errorList}${truncated}\n\nFix ${path.basename(failedFile)} before editing other files in ${failedTab}. The render gate will clear when ${failedRoute} renders clean.${remediation}`
      }));
      process.exit(2);
    }

    // Unknown status — allow through, don't block on unexpected state
    process.exit(0);
  } catch (_) {
    // Parse failure or other error — allow through, don't block work
    process.exit(0);
  }
});
