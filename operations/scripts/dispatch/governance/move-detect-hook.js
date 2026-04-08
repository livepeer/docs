/**
 * @script      move-detect-hook
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description PostToolUse hook on Bash. Detects mv/git mv commands targeting v2/ paths,
 * @mode        dispatch
 * @pipeline    PostToolUse hook (Bash) -> parse command -> store moves -> dry-run -> systemMessage
 * @scope       .claude/settings.json PostToolUse hook (Bash matcher)
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
    const toolInput = data.tool_input || {};
    const command = (toolInput.command || '').trim();

    if (!command) {
      process.exit(0);
    }

    // Skip if lpd move-page — it already handles propagation
    if (/lpd\s+move[-_]?page/i.test(command)) {
      process.exit(0);
    }

    // Detect move commands
    const movePairs = extractMovePairs(command);
    if (movePairs.length === 0) {
      process.exit(0);
    }

    // Filter to v2/ paths only
    const v2Pairs = movePairs.filter((p) => p.source.startsWith('v2/') || p.dest.startsWith('v2/'));
    if (v2Pairs.length === 0) {
      process.exit(0);
    }

    // Store moves in session-scoped temp file
    const sessionId = process.env.CLAUDE_SESSION_ID || 'default';
    const movesPath = path.join('/tmp', `claude-moves-${sessionId}`);
    const lines = v2Pairs.map((p) => JSON.stringify({
      source: p.source,
      dest: p.dest,
      timestamp: Date.now(),
      command: command.substring(0, 200)
    }));
    fs.appendFileSync(movesPath, lines.join('\n') + '\n');

    // Run dry-run via docs-path-sync
    let dryRunSummary = '';
    try {
      const sync = require(path.join(process.cwd(), 'operations/scripts/config/docs-path-sync'));
      const result = sync.runDocsPathSync({
        mode: 'check',
        explicitMoves: v2Pairs.map((p) => ({ sourcePath: p.source, targetPath: p.dest }))
      });
      const docsJsonCount = result.docsJsonChanges.length;
      const fileCount = result.fileChanges.length;
      const uniqueFiles = new Set(result.fileChanges.map((c) => c.file)).size;
      dryRunSummary = `Dry-run: ${docsJsonCount} docs.json changes, ${fileCount} reference changes across ${uniqueFiles} files.`;
    } catch (_err) {
      dryRunSummary = 'Dry-run could not be executed — run /propagate to check manually.';
    }

    // Emit systemMessage
    const moveDescriptions = v2Pairs.map((p) => `  ${p.source} -> ${p.dest}`).join('\n');
    const message = [
      'FILE MOVE DETECTED:',
      moveDescriptions,
      dryRunSummary,
      'Run /propagate to see the full report and apply changes with approval.'
    ].join('\n');

    console.log(JSON.stringify({ systemMessage: message }));
    process.exit(0);
  } catch (_e) {
    // Never block work due to hook failure
    process.exit(0);
  }
});

/**
 * Split a shell argument string respecting double quotes, single quotes, and backslash escapes.
 * Returns an array of unquoted argument tokens.
 */
function splitShellArgs(argString) {
  const args = [];
  let current = '';
  let inDouble = false;
  let inSingle = false;
  let escaped = false;

  for (let i = 0; i < argString.length; i++) {
    const ch = argString[i];

    if (escaped) {
      current += ch;
      escaped = false;
      continue;
    }

    if (ch === '\\' && !inSingle) {
      escaped = true;
      continue;
    }

    if (ch === '"' && !inSingle) {
      inDouble = !inDouble;
      continue;
    }

    if (ch === "'" && !inDouble) {
      inSingle = !inSingle;
      continue;
    }

    if (/\s/.test(ch) && !inDouble && !inSingle) {
      if (current) {
        args.push(current);
        current = '';
      }
      continue;
    }

    current += ch;
  }

  if (current) args.push(current);
  return args;
}

/**
 * Normalise a path: strip leading ./ and trailing /, convert to posix.
 */
function normalisePath(p) {
  return p.replace(/\\/g, '/').replace(/^\.\//, '').replace(/\/+$/, '');
}

/**
 * Extract move pairs from a shell command string.
 * Handles: git mv src dest, mv [-flags] src dest, mv src1 src2 destDir/
 * Also handles chained commands separated by && or ;
 */
function extractMovePairs(command) {
  const pairs = [];

  // Split on && and ; to handle chained commands
  const subCommands = command.split(/\s*(?:&&|;)\s*/);

  for (const subCmd of subCommands) {
    const trimmed = subCmd.trim();

    // Match git mv
    const gitMvMatch = trimmed.match(/^git\s+mv\s+(.*)/);
    if (gitMvMatch) {
      const args = splitShellArgs(gitMvMatch[1]);
      // Filter out flags (start with -)
      const paths = args.filter((a) => !a.startsWith('-'));
      pairs.push(...buildPairsFromArgs(paths));
      continue;
    }

    // Match mv (not git mv)
    const mvMatch = trimmed.match(/^mv\s+(.*)/);
    if (mvMatch) {
      const args = splitShellArgs(mvMatch[1]);
      // Filter out flags (start with -)
      const paths = args.filter((a) => !a.startsWith('-'));
      pairs.push(...buildPairsFromArgs(paths));
      continue;
    }
  }

  return pairs;
}

/**
 * Given an array of path arguments, produce source->dest pairs.
 * 2 args: simple rename. 3+ args: last arg is dest directory, others are sources.
 */
function buildPairsFromArgs(paths) {
  const pairs = [];
  if (paths.length < 2) return pairs;

  if (paths.length === 2) {
    pairs.push({
      source: normalisePath(paths[0]),
      dest: normalisePath(paths[1])
    });
  } else {
    // Last arg is destination directory
    const destDir = normalisePath(paths[paths.length - 1]);
    for (let i = 0; i < paths.length - 1; i++) {
      const source = normalisePath(paths[i]);
      const basename = path.basename(source);
      pairs.push({
        source,
        dest: `${destDir}/${basename}`
      });
    }
  }

  return pairs;
}
