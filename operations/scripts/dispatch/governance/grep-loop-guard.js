/**
 * @script      grep-loop-guard
 * @type        
 * @concern     
 * @niche       
 * @purpose     Detects repeated empty Grep results and fires a circuit-breaker warning
 * @description Tracks consecutive Grep calls that return no results. At 3 in a row,
 * @mode        read-only
 * @pipeline    PostToolUse hook → reads stdin tool result → tracks empty Greps → warns at 3
 * @scope       .claude/settings.json PostToolUse hook (Grep matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolName = data.tool_name || '';

    if (toolName !== 'Grep') {
      process.exit(0);
    }

    const sessionId = process.env.CLAUDE_SESSION_ID || 'default';
    const trackerPath = path.join('/tmp', `claude-grep-loop-${sessionId}`);

    // Check if result is empty — tool_response is the raw output string
    const result = data.tool_response || data.tool_result || '';
    const resultStr = typeof result === 'string' ? result : JSON.stringify(result);
    const isEmpty = !resultStr || resultStr.trim() === '' || /no matches found/i.test(resultStr);

    if (isEmpty) {
      // Increment empty counter
      let count = 0;
      try {
        count = parseInt(fs.readFileSync(trackerPath, 'utf8').trim(), 10) || 0;
      } catch (_) { /* file doesn't exist yet */ }
      count += 1;
      fs.writeFileSync(trackerPath, String(count));

      if (count >= 3) {
        console.log(JSON.stringify({
          systemMessage: `SEARCH LOOP WARNING: ${count} consecutive Grep calls returned no results. STOP searching with the same pattern. State what you have found so far, then propose a DIFFERENT investigation approach (different tool, different path, different strategy). Do not run another Grep with a similar pattern without first explaining why it will find something the previous searches did not.`
        }));
      }
    } else {
      // Reset counter on a successful result
      try { fs.unlinkSync(trackerPath); } catch (_) { /* already gone */ }
    }

    process.exit(0);
  } catch (e) {
    // Parse failure — allow through
    process.exit(0);
  }
});
