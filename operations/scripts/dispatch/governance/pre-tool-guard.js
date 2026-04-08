/**
 * @script      pre-tool-guard
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description Mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes.
 * @mode        dispatch
 * @pipeline    PreToolUse hook → reads stdin tool input → decision (allow/block/warn)
 * @scope       .claude/settings.json PreToolUse hook
 * @usage       Called automatically by Claude Code PreToolUse hook. Not invoked directly.
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
    const toolInput = data.tool_input || {};

    // --- AGENT: block execution agents, allow research/audit/read-only ---
    // "write" and "create" are allowed when the agent has audit intent and
    // targets review/report output (e.g. _workspace/reviews/). Only hard-block
    // keywords that indicate source-code modification.
    if (toolName === 'Agent') {
      const prompt = (toolInput.prompt || '').toLowerCase();
      const subtype = (toolInput.subagent_type || '').toLowerCase();
      const hasAuditIntent = /\b(research|audit|investigate|analyse|analyze|scan|find|search|check|review|read|plan)\b/.test(prompt);
      const hasSourceModifyIntent = /\b(edit|fix|implement|refactor|move|rename|delete)\b/.test(prompt);
      const writesAuditOutput = /(_workspace\/reviews|write.*review|write.*report|write.*summary|write.*audit)/i.test(prompt);
      const isReadOnly = subtype === 'explore' || subtype === 'plan' ||
        (hasAuditIntent && !hasSourceModifyIntent) ||
        (hasAuditIntent && writesAuditOutput);

      if (!isReadOnly) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: 'BLOCKED: Execution agent requires explicit approval. Research/audit/read-only agents are pre-approved.'
        }));
        process.exit(2);
      }
    }

    // --- BASH COMMANDS ---
    if (toolName === 'Bash') {
      const cmd = toolInput.command || '';

      // Block ad-hoc mintlify dev — use server-lifecycle instead
      if (/(?:^|[;&|]\s*)(?:mintlify\s+dev|npx\s+mintlify|mint\s+dev)/i.test(cmd) && !/server-lifecycle/i.test(cmd)) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: 'BLOCKED: Do not run mintlify dev directly. Use: node operations/scripts/dispatch/governance/server-lifecycle.js restart (to start/restart) or server-lifecycle.js health (to check status). Ad-hoc mintlify dev leaves zombie processes on port 3333+.'
        }));
        process.exit(2);
      }

      // Block commands that would bind to human-reserved ports while occupied
      const reservedPorts = [3000, 3333];
      const portBindPattern = /--port\s+(\d+)|-p\s+(\d+)|:(\d{4})\b|PORT[=\s]+(\d+)/g;
      let portMatch;
      const requestedPorts = new Set();
      while ((portMatch = portBindPattern.exec(cmd)) !== null) {
        const port = parseInt(portMatch[1] || portMatch[2] || portMatch[3] || portMatch[4], 10);
        if (reservedPorts.includes(port)) requestedPorts.add(port);
      }
      // Catch tools that default to these ports even without explicit flags
      if (/\b(next\s+dev|vite|webpack-dev-server|http-server|live-server)\b/i.test(cmd) &&
          !/--port|-p\s+\d/i.test(cmd)) {
        requestedPorts.add(3000);
      }
      for (const port of requestedPorts) {
        try {
          const { execSync } = require('child_process');
          const result = execSync(`lsof -i :${port} -sTCP:LISTEN -t 2>/dev/null`, { encoding: 'utf8' }).trim();
          if (result) {
            console.log(JSON.stringify({
              decision: 'block',
              reason: `BLOCKED: Port ${port} is already in use (PID: ${result.split('\n')[0]}). Human-reserved ports (3000, 3333) must not be hijacked. Use a different port or check with the user.`
            }));
            process.exit(2);
          }
        } catch (_) { /* port is free — allow */ }
      }

      // Root allowlist check for mkdir/touch/cat-redirect in Bash
      const repoRoot = path.resolve(__dirname, '../../../..');
      const mkdirMatch = cmd.match(/mkdir\s+(?:-p\s+)?["']?([^\s"']+)/);
      const touchMatch = cmd.match(/touch\s+["']?([^\s"']+)/);
      const catRedirect = cmd.match(/cat\s*>+\s*["']?([^\s"']+)/);
      const targetPath = mkdirMatch?.[1] || touchMatch?.[1] || catRedirect?.[1];
      if (targetPath) {
        const absTarget = path.isAbsolute(targetPath) ? targetPath : path.resolve(repoRoot, targetPath);
        const rel = path.relative(repoRoot, absTarget);
        if (rel && !rel.startsWith('..') && !rel.startsWith('/')) {
          const topSegment = rel.split(path.sep)[0];
          try {
            const allowlist = fs.readFileSync(path.join(repoRoot, '.allowlist'), 'utf8')
              .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
            if (!allowlist.includes(topSegment)) {
              console.log(JSON.stringify({
                decision: 'block',
                reason: `BLOCKED: Bash command would create "${topSegment}/" which is not in .allowlist. Allowed root dirs: ${allowlist.filter(a => !a.includes('.')).join(', ')}.`
              }));
              process.exit(2);
            }
          } catch (_) { /* allowlist missing — allow */ }
        }
      }

      // Browser test commands: warn about cleanup
      if (/puppeteer|playwright|headless|smoke.*test|verify.*page/i.test(cmd)) {
        console.log(JSON.stringify({
          systemMessage: 'BROWSER TEST: If this test times out or you interrupt it, run: pkill -f "chrome.*--headless" to clean up zombie processes. Do not leave headless browsers running.'
        }));
      }

      // Allow branch creation
      if (/git\s+checkout\s+-b/.test(cmd)) {
        process.exit(0);
      }

      // Block destructive git
      if (/git\s+(checkout|clean|reset\s+--hard|push\s+--force|push\s+-f|branch\s+-D)/.test(cmd)) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: 'BLOCKED: Destructive git command. Run manually if needed.'
        }));
        process.exit(2);
      }

      // Block deletion of tracked files/directories (D2: no deletions policy)
      // ALLOWED to delete: anything in .gitignore (untracked/ignored), /tmp/ scratch
      // BLOCKED: any tracked file or directory. Must use git mv to x-archive/ instead.
      const isRm = /\brm\b/.test(cmd);
      const isGitRm = /git\s+rm\b/.test(cmd);
      // Safe targets: /tmp/, node_modules, .DS_Store, .env, .cache, package-lock, yarn.lock,
      // pnpm-lock, debug logs, *.code-workspace — all are gitignored or scratch
      const isGitignored = /\brm\s+(-[rfdi]+\s+)*.*(\b\/tmp\/|\/tmp$|node_modules|\.DS_Store|\.env|\.cache|package-lock|yarn\.lock|pnpm-lock|debug\.log|\.code-workspace|client_secret|\.playwright-cli)/.test(cmd);
      if ((isRm && !isGitignored) || isGitRm) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: 'BLOCKED: Do not delete tracked files or directories. Use git mv to x-archive/ instead. Per D2 (no deletions policy): all superseded files must be archived, never deleted. Gitignored files (.env, node_modules, .cache, /tmp/, etc.) can be deleted freely. Example: git mv old-file.yml x-archive/old-file.yml'
        }));
        process.exit(2);
      }

      // Block raw curl to external services (gh CLI is allowed)
      if (/curl.*(api\.github|hooks\.slack)/i.test(cmd)) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: 'BLOCKED: Raw curl to external service. Use gh CLI instead.'
        }));
        process.exit(2);
      }
    }

    // --- FROZEN DIRECTORIES: block all writes to v1/ ---
    if ((toolName === 'Write' || toolName === 'Edit') && toolInput.file_path) {
      const repoRoot = path.resolve(__dirname, '../../../..');
      const rel = path.relative(repoRoot, toolInput.file_path);
      if (rel && !rel.startsWith('..') && rel.startsWith('v1' + path.sep)) {
        console.log(JSON.stringify({
          decision: 'block',
          reason: 'BLOCKED: v1/ is FROZEN. No changes allowed — no exceptions.'
        }));
        process.exit(2);
      }
    }

    // --- ROOT ALLOWLIST: block writes to unauthorised root directories ---
    if ((toolName === 'Write' || toolName === 'Edit') && toolInput.file_path) {
      const fp = toolInput.file_path;
      const repoRoot = path.resolve(__dirname, '../../../..');
      const allowlistPath = path.join(repoRoot, '.allowlist');
      try {
        const rel = path.relative(repoRoot, fp);
        if (rel && !rel.startsWith('..') && !rel.startsWith('/')) {
          const topSegment = rel.split(path.sep)[0];
          const allowlist = fs.readFileSync(allowlistPath, 'utf8')
            .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
          if (!allowlist.includes(topSegment)) {
            console.log(JSON.stringify({
              decision: 'block',
              reason: `BLOCKED: "${topSegment}/" is not an allowed root directory. Place files in the correct location:\n  Scripts → operations/scripts/<type>/<concern>/<niche>/\n  Components → snippets/components/<category>/\n  Docs pages → v2/<tab>/\n  Governance → docs-guide/frameworks/ or docs-guide/policies/\n  Standards → docs-guide/standards/\n  Plans/reports → workspace/\n  AI skills → ai-tools/ai-skills/\nSee docs-guide/frameworks/file-placement.mdx and docs-guide/frameworks/repo-structure.mdx`
            }));
            process.exit(2);
          }
        }
      } catch (_) { /* allowlist missing or unreadable — allow through */ }
    }

    // --- NEW FILE GOVERNANCE GUIDANCE ---
    if (toolName === 'Write' && toolInput.file_path) {
      const repoRoot = path.resolve(__dirname, '../../../..');
      const fp = toolInput.file_path;
      const isNew = !fs.existsSync(fp);
      if (isNew) {
        const rel = path.relative(repoRoot, fp);
        if (rel.endsWith('.js') && !rel.includes('test')) {
          console.log(JSON.stringify({
            systemMessage: 'NEW SCRIPT: Ensure 11-tag JSDoc header (@script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage). Place in operations/scripts/<type>/<concern>/<niche>/. See docs-guide/frameworks/script-framework.mdx'
          }));
        } else if (rel.endsWith('.jsx')) {
          console.log(JSON.stringify({
            systemMessage: 'NEW COMPONENT: Ensure 7-tag JSDoc header. Place in snippets/components/<category>/<sub-niche>/. See docs-guide/frameworks/component-framework-canonical.mdx'
          }));
        } else if (rel.endsWith('.mdx') && rel.startsWith('v2' + path.sep)) {
          console.log(JSON.stringify({
            systemMessage: 'NEW DOCS PAGE: Ensure required frontmatter (title, description, keywords, audience). See docs-guide/standards/frontmatter.mdx'
          }));
        } else if (rel.endsWith('.yml') && rel.startsWith('.github' + path.sep + 'workflows')) {
          console.log(JSON.stringify({
            systemMessage: 'NEW WORKFLOW: Add governance header (# type: / # concern: / # pipeline:). See docs-guide/frameworks/github-actions.mdx'
          }));
        }
      }
    }

    // --- WRITE/EDIT: context gate (read-before-write + broader context) ---
    if ((toolName === 'Write' || toolName === 'Edit') && toolInput.file_path) {
      const fp = toolInput.file_path;

      // Session ID — used by edit-loop block and context gate below
      const sessionId = process.env.CLAUDE_SESSION_ID || 'default';

      // Edit loop block — check if a file has been edited too many times
      const loopBlockPath = path.join('/tmp', `claude-edit-loop-block-${sessionId}.json`);
      try {
        const blockState = JSON.parse(fs.readFileSync(loopBlockPath, 'utf8'));
        if (blockState.file === fp) {
          // Check if verification has passed since the block was set
          const verifyStatePath = path.join('/tmp', `claude-mdx-verification-${sessionId}.json`);
          let verifyPassedAfterBlock = false;
          try {
            const verifyState = JSON.parse(fs.readFileSync(verifyStatePath, 'utf8'));
            verifyPassedAfterBlock = verifyState.status === 'passed' &&
              verifyState.file === fp &&
              new Date(verifyState.timestamp) > new Date(blockState.timestamp);
          } catch (_) { /* no verify state */ }

          if (!verifyPassedAfterBlock) {
            console.log(JSON.stringify({
              decision: 'block',
              reason: `BLOCKED: Edit loop — ${path.basename(fp)} has been edited ${blockState.count}+ times without verification passing. Run /diagnose or verify the file first.`
            }));
            process.exit(2);
          } else {
            // Verification passed — clear the block
            try { fs.unlinkSync(loopBlockPath); } catch (_) { /* already gone */ }
          }
        }
      } catch (_) { /* no block file — proceed */ }

      // Auto-generated file block — check first 512 bytes for markers
      try {
        const fd = fs.openSync(fp, 'r');
        const buf = Buffer.alloc(512);
        const bytesRead = fs.readSync(fd, buf, 0, 512, 0);
        fs.closeSync(fd);
        const header = buf.toString('utf8', 0, bytesRead);
        if (/DO\s*NOT\s*EDIT|(?:^|\/\/|\/\*|<!--)\s*AUTO[- ]GENERATED/im.test(header)) {
          console.log(JSON.stringify({
            decision: 'block',
            reason: 'BLOCKED: Auto-generated file (header marker detected in first 512 bytes). Edit the generator script or put derived logic in a separate file.'
          }));
          process.exit(2);
        }
      } catch (_) { /* new file or unreadable — allow through */ }

      const readLogPath = path.join('/tmp', `claude-reads-${sessionId}`);

      let readFiles = [];
      try {
        readFiles = fs.readFileSync(readLogPath, 'utf8').trim().split('\n').filter(Boolean);
      } catch (_) { /* no reads logged yet */ }

      const targetRead = readFiles.some(f => f === fp);
      const targetDir = path.dirname(fp);
      const siblingReads = readFiles.filter(f => f !== fp && path.dirname(f) === targetDir);
      const totalDistinctReads = new Set(readFiles).size;

      // Cross-session collision check
      const registryPath = '/tmp/claude-session-registry';
      try {
        const reg = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
        const otherSessions = Object.entries(reg)
          .filter(([sid]) => sid !== sessionId)
          .filter(([, entry]) => Date.now() - entry.lastSeen < 4 * 60 * 60 * 1000);
        for (const [sid, entry] of otherSessions) {
          if (entry.files && entry.files.includes(fp)) {
            const ago = Math.round((Date.now() - entry.lastSeen) / 60000);
            console.log(JSON.stringify({
              systemMessage: `COLLISION WARNING: Another session (${sid.slice(0, 8)}..., active ${ago}m ago) has edited this same file. Check with the user before overwriting — your changes may conflict.`
            }));
            break;
          }
        }
      } catch (_) { /* no registry yet */ }

      // Hard warning: editing a file you haven't read
      if (!targetRead && !/session-log\.txt/.test(fp) && !/\.json$/.test(fp)) {
        console.log(JSON.stringify({
          systemMessage: 'CONTEXT GATE: You are editing a file you have not Read in this session. Read the file first, understand its current state and purpose, then edit. Do not edit blind.'
        }));
      }

      // Soft warning: only read the target file, nothing around it
      if (targetRead && siblingReads.length === 0 && totalDistinctReads <= 2 &&
          !/session-log\.txt/.test(fp) && !/settings\.json/.test(fp)) {
        console.log(JSON.stringify({
          systemMessage: 'CONTEXT WARNING: You have only read the target file and nothing else. Before editing, consider: who calls this? Who consumes it? Are there related files, tests, or templates that this change affects? Check broader context before proceeding.'
        }));
      }

      // Em-dash check — block on authored MDX content, including prop text.
      // Only code fences, inline code, and JSX comments are exempt.
      if (/\.mdx$/.test(fp)) {
        const content = toolInput.new_string || toolInput.content || '';
        const stripped = content
          .replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // JSX comments
          .replace(/`[^`]*`/g, '')              // inline code
          .replace(/```[\s\S]*?```/g, '');      // code blocks
        if (stripped.includes('\u2014')) {
          console.log(JSON.stringify({
            decision: 'block',
            reason: 'BLOCKED: Em-dash (\u2014) detected in MDX content. Use a comma, semicolon, colon, or rewrite the sentence. No em-dashes.'
          }));
          process.exit(2);
        }
      }

      // MDX/JSX: verify rendering
      if (/\.(mdx|jsx)$/.test(fp)) {
        console.log(JSON.stringify({
          systemMessage: 'MDX/JSX file modified. Verify rendering before declaring done: node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/relevant-path'
        }));
      }

      // Scripts: run the script
      if (/operations\/scripts\/.*\.js$/.test(fp)) {
        console.log(JSON.stringify({
          systemMessage: 'Script modified. Run this script and confirm it executes without errors before declaring done.'
        }));
      }

      // Template vs page check
      if (/snippets\/templates\//.test(fp)) {
        console.log(JSON.stringify({
          systemMessage: 'This is a TEMPLATE file. Confirm you intend to edit the template, not an individual page.'
        }));
      }
      if (/v2\/.*\.(mdx|md)$/.test(fp) && !/templates\//.test(fp)) {
        console.log(JSON.stringify({
          systemMessage: 'This is a PAGE file in v2/. Confirm you intend to edit this page directly, not a template in snippets/templates/. If unsure, check snippets/templates/ for a matching template before proceeding.'
        }));
      }
    }

    // --- BASH: file move/rename stale reference reminder ---
    if (toolName === 'Bash') {
      const cmd = toolInput.command || '';
      if (/git\s+mv|mv\s+/.test(cmd) || /rename/i.test(cmd)) {
        console.log(JSON.stringify({
          systemMessage: 'File move detected. After completing moves, scan ALL file types for stale references: .mdx, .jsx, .json, .txt, sitemap, llms.txt, docs.json. Do not declare done until residual scan is clean.'
        }));
      }
    }

    process.exit(0);
  } catch (e) {
    // Parse failure — allow through, don't block work
    process.exit(0);
  }
});
