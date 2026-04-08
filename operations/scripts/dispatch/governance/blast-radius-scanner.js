/**
 * @script      blast-radius-scanner
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description PostToolUse hook for Edit/Write. When a file in snippets/components/,
 * @mode        dispatch
 * @pipeline    PostToolUse hook → reads stdin → path check → grep consumers → emit list
 * @scope       .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 */

const { execSync } = require('child_process');
const path = require('path');
const { stdin } = process;

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolName = data.tool_name || '';
    const toolInput = data.tool_input || {};

    if (toolName !== 'Edit' && toolName !== 'Write') {
      process.exit(0);
    }

    const fp = toolInput.file_path || '';
    if (!fp) { process.exit(0); }

    // Only scan for shared files — components, templates, key configs
    const isComponent = /snippets\/components\//.test(fp);
    const isTemplate = /snippets\/templates\//.test(fp);
    const isConfig = /(docs\.json|product-social-config\.json)$/.test(fp);

    // --- DEBRIS DETECTION: runs on EVERY edit, not just shared files ---
    // Flag files that look like test/scratch/temp debris as they're created
    const basename = path.basename(fp);
    const debrisPatterns = /^(test-|temp-|scratch-|debug-|tmp-|_test|_temp)/i;
    const debrisLocations = /(^|\/)_?test[^/]*\.(mdx|jsx|js)$|constraints-test|smoke-test-page/i;
    if (debrisPatterns.test(basename) || debrisLocations.test(fp)) {
      console.log(JSON.stringify({
        systemMessage: `DEBRIS WARNING: ${basename} looks like a test/scratch file. Log it for cleanup at /close. Do not leave test files in the repo.`
      }));
    }

    if (!isComponent && !isTemplate && !isConfig) {
      process.exit(0);
    }

    // Extract the filename/import path to search for
    const basename = path.basename(fp, path.extname(fp));
    const relPath = fp.replace(/^.*?(snippets\/)/, '$1');

    // Build search patterns
    const patterns = [];

    if (isComponent) {
      // Search for import of the component file
      patterns.push(basename);
      // Search for the snippets path reference
      if (relPath) patterns.push(relPath.replace(/\\/g, '/'));
    } else if (isTemplate) {
      patterns.push(basename);
      if (relPath) patterns.push(relPath.replace(/\\/g, '/'));
    } else if (isConfig) {
      // For config files, just report that it's a config edit
      console.log(JSON.stringify({
        systemMessage: `BLAST RADIUS: You edited ${path.basename(fp)}. This is a repo-wide config file. Changes affect ALL pages/tabs/navigation. Verify the full impact before declaring done.`
      }));
      process.exit(0);
    }

    // Run grep for each pattern, collect unique consumer files
    const consumers = new Set();
    const repoRoot = process.cwd();

    for (const pattern of patterns) {
      try {
        const result = execSync(
          `grep -rl --include='*.mdx' --include='*.jsx' --include='*.js' --include='*.json' --include='*.txt' "${pattern}" "${repoRoot}" 2>/dev/null || true`,
          { encoding: 'utf8', timeout: 10000 }
        );
        const files = result.trim().split('\n').filter(Boolean);
        for (const f of files) {
          // Don't list the edited file itself, worktrees, archives, or noise
          if (f !== fp &&
              !f.includes('node_modules') &&
              !f.includes('.git/') &&
              !f.includes('.claude/worktrees') &&
              !f.includes('_workspace/archive') &&
              !f.includes('_dep-docs') &&
              !f.includes('session-log.txt') &&
              !f.includes('SCRIPT_INVENTORY') &&
              !f.includes('link-audit') &&
              !f.includes('css-rule-catalogue')) {
            // Make path relative for readability
            consumers.add(f.replace(repoRoot + '/', ''));
          }
        }
      } catch (_) {
        // grep timeout or error — skip
      }
    }

    if (consumers.size === 0) {
      process.exit(0);
    }

    const consumerList = Array.from(consumers).sort();
    const label = isComponent ? 'COMPONENT' : 'TEMPLATE';
    const msg = [
      `BLAST RADIUS: You edited ${label} ${path.basename(fp)}. ${consumerList.length} file(s) reference it:`,
      '',
      ...consumerList.map(f => `  - ${f}`),
      '',
      `Check each consumer for breakage before declaring done. If you changed props, exports, or structure, verify every consumer still works.`
    ].join('\n');

    console.log(JSON.stringify({ systemMessage: msg }));

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
