/**
 * @script      message-backup
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description UserPromptSubmit hook. If a message is longer than 200 chars, saves it to
 * @mode        dispatch
 * @pipeline    UserPromptSubmit hook → reads stdin → saves long messages → exits
 * @scope       .claude/settings.json UserPromptSubmit hook
 * @usage       Called automatically by Claude Code UserPromptSubmit hook. Not invoked directly.
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
    const message = data.message || data.content || '';

    // Only back up substantial messages (200+ chars = real content, not "ok" or "go")
    if (!message || message.length < 200) {
      process.exit(0);
    }

    const logPath = path.join(
      process.cwd(),
      'workspace/thread-outputs/sessions/message-backup.jsonl'
    );

    const entry = {
      timestamp: new Date().toISOString(),
      session: process.env.CLAUDE_SESSION_ID || 'unknown',
      length: message.length,
      content: message
    };

    fs.appendFileSync(logPath, JSON.stringify(entry) + '\n');
    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
