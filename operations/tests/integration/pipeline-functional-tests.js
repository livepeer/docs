#!/usr/bin/env node
/**
 * @script      pipeline-functional-tests
 * @type        validator
 * @concern     governance
 * @niche       pipeline-tests
 * @purpose     Functional detect-repair-verify tests for foundational governance/content pipelines (D-GOV-03 proof)
 * @description Runs synthetic-violation cycles against the 10 foundational pipeline dispatchers. Each test drops a known-bad fixture, runs detect, asserts the violation is found, runs repair (where supported), asserts the violation is gone, re-runs detect to verify clean. Honest exit codes — non-zero if any pipeline cannot prove its lifecycle.
 * @mode        check
 * @pipeline    P3 (PR-time gate), P5 (scheduled CI verification)
 * @scope       operations/scripts/dispatch/governance/, operations/scripts/dispatch/content/
 * @usage       node operations/tests/integration/pipeline-functional-tests.js [--only <name>] [--json]
 * @policy      D-GOV-03 (every pipeline proves its detect-repair-verify cycle); D-GOV-07 (local CLI equivalence)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { runBatch, runDispatcher, REPO_ROOT } = require(path.resolve(__dirname, '../../../tools/lib/governance/pipeline-test-harness'));

const DISPATCH_DIR = path.join(REPO_ROOT, 'operations/scripts/dispatch');
const GOV_DIR = path.join(DISPATCH_DIR, 'governance');
const CONTENT_DIR = path.join(DISPATCH_DIR, 'content');

const TESTS = [
  // 1. EM-DASHES (brand) — file with em-dash → detect → repair → verify clean
  {
    name: 'em-dashes',
    dispatcherPath: path.join(CONTENT_DIR, 'brand/dispatch-em-dashes.js'),
    fixtureContent: '---\ntitle: "Em test"\n---\n\nThis sentence has an em-dash — right here.\n',
    detectAssertion: /[1-9]\d*\s+em-dashes\s+in\s+[1-9]/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    repairArgs: ['--mode', 'manual', '--write', '--verify'],
    fixtureClean: (content) => !content.includes('—'),
  },

  // 2. BANNED-WORDS (brand) — detect-only (no auto-repair by design)
  {
    name: 'banned-words',
    dispatcherPath: path.join(CONTENT_DIR, 'brand/dispatch-banned-words.js'),
    fixtureContent: '---\ntitle: "Banned test"\n---\n\nThis is obviously a test page that essentially works.\n',
    detectAssertion: /obviously|essentially|banned/i,
    detectArgs: ['--mode', 'pr'],
    verifyClean: false, // detect-only; no auto-repair
  },

  // 3. SPELLING (brand) — US → UK conversion
  {
    name: 'spelling',
    dispatcherPath: path.join(CONTENT_DIR, 'brand/dispatch-spelling.js'),
    fixtureContent: '---\ntitle: "Spelling test"\n---\n\nThe color of the favorite organization.\n',
    detectAssertion: /Proposed repairs:\s*[1-9]|[1-9]\d*\s+replacements?\s+in\s+[1-9]/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    repairArgs: ['--mode', 'manual', '--write', '--verify'],
    fixtureClean: (content) => !/\b(color|favorite|organization)\b/i.test(content),
  },

  // 4. VOICE-REGISTER (brand) — prohibited phrase detection
  {
    name: 'voice-register',
    dispatcherPath: path.join(CONTENT_DIR, 'brand/dispatch-voice-register.js'),
    fixtureContent: '---\ntitle: "Voice test"\n---\n\nThis section covers our amazing transformative platform.\n',
    detectAssertion: /voice|register|covers|amazing|transformative/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    verifyClean: false, // detect may be advisory
  },

  // 5. GRAMMAR-EN-GB (brand)
  {
    name: 'grammar-en-gb',
    dispatcherPath: path.join(CONTENT_DIR, 'brand/dispatch-grammar-en-gb.js'),
    fixtureContent: '---\ntitle: "Grammar test"\n---\n\nWe will analyze the behavior of this feature.\n',
    detectAssertion: /analyze|behavior|grammar|en-gb/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    verifyClean: false,
  },

  // 6. PAGE-INTEGRITY (health) — broken internal link detection
  {
    name: 'page-integrity',
    dispatcherPath: path.join(CONTENT_DIR, 'health/dispatch-page-integrity.js'),
    fixtureContent: '---\ntitle: "Integrity test"\n---\n\nSee [missing page](/v2/this/page/does/not/exist) for details.\n',
    detectAssertion: /broken|missing|integrity|404|link/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    verifyClean: false,
  },

  // 7. PAGE-STRUCTURE (health) — lint-structure violation (trailing whitespace + double blank)
  {
    name: 'page-structure',
    dispatcherPath: path.join(CONTENT_DIR, 'health/dispatch-page-structure.js'),
    fixtureContent: '---\ntitle: "Structure test"\n---\n\n## Heading with trailing space   \n\n\n\nParagraph after triple blank lines.\n',
    detectAssertion: /structure|whitespace|blank|lint/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    verifyClean: false,
  },

  // 8. JSDOC-HEADERS (governance) — JS script missing JSDoc
  {
    name: 'jsdoc-headers',
    dispatcherPath: path.join(GOV_DIR, 'dispatch-jsdoc-headers.js'),
    fixtureContent: "#!/usr/bin/env node\n'use strict';\n\n// No JSDoc — should be flagged.\nfunction noop() {}\nnoop();\n",
    fixtureExt: '.js',
    fixtureDir: 'operations/scripts/audits/content/_fixtures',
    detectAssertion: /jsdoc|@script|@type|@concern|header/i,
    detectArgs: ['--mode', 'pr'],
    verifyClean: false,
  },

  // 9. FOLDER-ALLOWLIST (governance) — file not on .github/.allowlist
  {
    name: 'folder-allowlist',
    dispatcherPath: path.join(GOV_DIR, 'dispatch-folder-allowlist.js'),
    fixtureContent: '# drift fixture — must not survive\n',
    fixtureExt: '.md',
    fixtureDir: '.github',
    detectAssertion: /FAIL.*\.github|drift/i,
    detectArgs: ['--mode', 'pr', '--folder', '.github'],
    repairArgs: ['--mode', 'manual', '--write', '--verify', '--folder', '.github'],
    // After repair, the fixture is moved to .github/x-archive/, so the original location is gone.
    fixtureClean: () => true,
    teardown: ({ REPO_ROOT: root, fixturePath }) => {
      if (!fixturePath) return;
      const archivedName = path.basename(fixturePath);
      const archivedPath = path.join(root, '.github', 'x-archive', archivedName);
      if (fs.existsSync(archivedPath)) fs.unlinkSync(archivedPath);
    },
    verifyClean: false,
  },

  // 10. EM-DASHES in frontmatter (proves remediator handles user-facing frontmatter keys)
  {
    name: 'em-dashes-frontmatter',
    dispatcherPath: path.join(CONTENT_DIR, 'brand/dispatch-em-dashes.js'),
    fixtureContent: '---\ntitle: "Frontmatter em — test"\ndescription: "Has an em-dash — in description"\n---\n\nNormal body.\n',
    detectAssertion: /[1-9]\d*\s+em-dashes\s+in\s+[1-9]/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    repairArgs: ['--mode', 'manual', '--write', '--verify'],
    fixtureClean: (content) => !content.includes('—'),
  },

  // 11. OWNERLESS-LANGUAGE (copy) — exact-phrase ownerless drift detection
  {
    name: 'ownerless-language',
    dispatcherPath: path.join(CONTENT_DIR, 'copy/dispatch-ownerless-language.js'),
    fixtureContent: '---\ntitle: "Owner test"\n---\n\nThis template has Awaiting maintainer triage as the default state.\n',
    detectAssertion: /drift found in [1-9]/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    verifyClean: false,
  },

  // 12. PAGE-INTEGRITY (imports) — broken import path
  {
    name: 'page-integrity-imports',
    dispatcherPath: path.join(CONTENT_DIR, 'health/dispatch-page-integrity.js'),
    fixtureContent: '---\ntitle: "Import test"\n---\n\nimport { Missing } from \'/snippets/does-not-exist.mdx\';\n\n<Missing />\n',
    detectAssertion: /missing-import|non-existent file/i,
    detectArgs: ['--mode', 'pr', '--dry-run'],
    verifyClean: false,
  },
];

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--help') || argv.includes('-h')) {
    console.log('Usage: node operations/tests/integration/pipeline-functional-tests.js [--only <name>] [--json]');
    console.log('');
    console.log('Runs synthetic-violation detect-repair-verify cycles against foundational pipelines.');
    console.log('Exits 0 if all tests pass, 1 if any fail.');
    process.exit(0);
  }
  const onlyIdx = argv.indexOf('--only');
  const only = onlyIdx >= 0 ? argv[onlyIdx + 1] : null;
  const json = argv.includes('--json');
  const tests = only ? TESTS.filter((t) => t.name === only) : TESTS;
  if (tests.length === 0) {
    console.error(`No tests matched ${only}`);
    process.exit(2);
  }
  const result = runBatch(tests);
  if (json) console.log(JSON.stringify(result, null, 2));
  process.exit(result.failed > 0 ? 1 : 0);
}

if (require.main === module) main();
module.exports = { TESTS };
