/**
 * @script      mdx-validate-hook
 * @type        
 * @concern     
 * @niche       
 * @purpose     Validates MDX files after edit using the server-manager (port 3145)
 * @description PostToolUse hook for Edit/Write on .mdx files. Uses the shared
 * @mode        read-only
 * @pipeline    PostToolUse hook → reads stdin → checks if .mdx → hits server-manager → reports
 * @scope       .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 */

const path = require('path');
const http = require('http');
const { stdin } = process;

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolInput = data.tool_input || {};
    const fp = toolInput.file_path || '';

    // Only care about .mdx files in v2/
    if (!/\.mdx$/.test(fp) || !/\/v2\//.test(fp)) {
      process.exit(0);
    }

    // Extract the route from the file path
    // v2/about/resources/foo.mdx -> /v2/about/resources/foo
    const match = fp.match(/\/(v2\/.+)\.mdx$/);
    if (!match) { process.exit(0); }
    const route = '/' + match[1];

    // Try the server-manager port (3145) — if it's not running, skip silently
    const req = http.get(`http://localhost:3145${route}`, { timeout: 5000 }, (res) => {
      if (res.statusCode === 200) {
        // Page renders — all good
        process.exit(0);
      } else {
        console.log(JSON.stringify({
          systemMessage: `MDX VALIDATION: ${path.basename(fp)} returned HTTP ${res.statusCode} on localhost:3145${route}. Check for render errors before declaring done.`
        }));
        process.exit(0);
      }
    });

    req.on('error', () => {
      // Server not running — skip silently, don't block
      // Emit a light reminder instead
      console.log(JSON.stringify({
        systemMessage: `MDX file edited (${path.basename(fp)}). No Mintlify server detected on port 3145. Run verification manually when ready.`
      }));
      process.exit(0);
    });

    req.on('timeout', () => {
      req.destroy();
      process.exit(0);
    });
  } catch (e) {
    process.exit(0);
  }
});
