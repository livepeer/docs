#!/usr/bin/env node
/**
 * @script rename-vscode-codex-chat
 * @category utility
 * @purpose tooling:dev-tools
 * @scope tools/scripts/dev/rename-vscode-codex-chat.js, .vscode/tasks.json, tools/package.json
 * @domain docs
 * @needs E-C1, R-R14
 * @purpose-statement VS Code Codex chat rename utility — finds recent VS Code chat session files, filters to Codex sessions, and updates the stored customTitle without manual JSON editing.
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 * @usage node tools/scripts/dev/rename-vscode-codex-chat.js --title "New title" [--workspace <path>]
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

const WORKSPACE_STORAGE_ROOT = path.join(
  os.homedir(),
  'Library',
  'Application Support',
  'Code',
  'User',
  'workspaceStorage'
);

function usage() {
  const lines = [
    'Usage:',
    '  node tools/scripts/dev/rename-vscode-codex-chat.js --title "New title" [--workspace <path>]',
    '  node tools/scripts/dev/rename-vscode-codex-chat.js --list [--workspace <path>] [--limit <n>]',
    '  node tools/scripts/dev/rename-vscode-codex-chat.js --session-id <uuid> --title "New title"',
    '',
    'Options:',
    '  --title <text>       New chat title. You can also pass the title as positional text.',
    '  --workspace <path>   Prefer chats associated with this VS Code workspace.',
    '  --session-id <uuid>  Rename an exact session instead of the latest matching one.',
    '  --list               List recent Codex chats instead of renaming.',
    '  --limit <n>          Max rows to print in list mode. Default: 10.',
    '  --help               Show this message.'
  ];
  console.log(lines.join('\n'));
}

function parseArgs(argv) {
  const args = {
    help: false,
    list: false,
    limit: 10,
    sessionId: '',
    title: '',
    workspace: ''
  };

  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--list') {
      args.list = true;
      continue;
    }
    if (token === '--title') {
      args.title = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token.startsWith('--title=')) {
      args.title = token.slice('--title='.length).trim();
      continue;
    }
    if (token === '--workspace') {
      args.workspace = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token.startsWith('--workspace=')) {
      args.workspace = token.slice('--workspace='.length).trim();
      continue;
    }
    if (token === '--session-id') {
      args.sessionId = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token.startsWith('--session-id=')) {
      args.sessionId = token.slice('--session-id='.length).trim();
      continue;
    }
    if (token === '--limit') {
      args.limit = Number.parseInt(String(argv[index + 1] || '').trim(), 10);
      index += 1;
      continue;
    }
    if (token.startsWith('--limit=')) {
      args.limit = Number.parseInt(token.slice('--limit='.length).trim(), 10);
      continue;
    }
    if (token.startsWith('--')) {
      throw new Error(`Unknown argument: ${token}`);
    }

    positional.push(token);
  }

  if (!args.title && positional.length) args.title = positional.join(' ').trim();
  if (!Number.isFinite(args.limit) || args.limit < 1) args.limit = 10;

  return args;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function tryReadJson(filePath) {
  try {
    return readJson(filePath);
  } catch {
    return null;
  }
}

function workspaceUriToPath(uri) {
  if (!uri || typeof uri !== 'string') return '';
  if (!uri.startsWith('file://')) return '';
  try {
    return path.normalize(decodeURIComponent(new URL(uri).pathname));
  } catch {
    return '';
  }
}

function getWorkspaceFolder(storageDir) {
  const workspaceConfigPath = path.join(storageDir, 'workspace.json');
  const workspaceConfig = tryReadJson(workspaceConfigPath);
  if (!workspaceConfig || typeof workspaceConfig !== 'object') return '';
  return workspaceUriToPath(workspaceConfig.folder);
}

function isCodexSession(rawContent, session) {
  if (/"details"\s*:\s*"[^"\n]*Codex[^"\n]*"/i.test(rawContent)) return true;
  if (/openai-codex/i.test(rawContent)) return true;

  const selectedModelDetails = session?.selectedModel?.metadata?.details;
  if (typeof selectedModelDetails === 'string' && /Codex/i.test(selectedModelDetails)) return true;

  return false;
}

function collectCodexSessions() {
  if (!fs.existsSync(WORKSPACE_STORAGE_ROOT)) {
    throw new Error(`VS Code workspace storage not found at ${WORKSPACE_STORAGE_ROOT}`);
  }

  const storageEntries = fs
    .readdirSync(WORKSPACE_STORAGE_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  const sessions = [];

  for (const entry of storageEntries) {
    const storageDir = path.join(WORKSPACE_STORAGE_ROOT, entry.name);
    const workspaceFolder = getWorkspaceFolder(storageDir);
    const chatSessionsDir = path.join(storageDir, 'chatSessions');

    if (!fs.existsSync(chatSessionsDir)) continue;

    const chatEntries = fs
      .readdirSync(chatSessionsDir, { withFileTypes: true })
      .filter((child) => child.isFile() && child.name.endsWith('.json'));

    for (const chatEntry of chatEntries) {
      const chatPath = path.join(chatSessionsDir, chatEntry.name);
      let rawContent = '';
      let session = null;

      try {
        rawContent = fs.readFileSync(chatPath, 'utf8');
        session = JSON.parse(rawContent);
      } catch {
        continue;
      }

      if (!isCodexSession(rawContent, session)) continue;

      const sessionId =
        typeof session.sessionId === 'string' && session.sessionId
          ? session.sessionId
          : path.basename(chatEntry.name, '.json');

      sessions.push({
        chatPath,
        creationDate: Number(session.creationDate || 0),
        customTitle: typeof session.customTitle === 'string' ? session.customTitle : '',
        lastMessageDate: Number(session.lastMessageDate || session.creationDate || 0),
        session,
        sessionId,
        storageDir,
        workspaceFolder
      });
    }
  }

  sessions.sort((left, right) => right.lastMessageDate - left.lastMessageDate);
  return sessions;
}

function normalizePath(inputPath) {
  if (!inputPath) return '';
  try {
    return path.resolve(inputPath);
  } catch {
    return '';
  }
}

function selectSession(sessions, args) {
  if (!sessions.length) return null;

  if (args.sessionId) {
    const exact = sessions.find((session) => session.sessionId === args.sessionId);
    if (!exact) throw new Error(`No Codex session found for session ID ${args.sessionId}`);
    return exact;
  }

  const workspacePath = normalizePath(args.workspace);
  if (workspacePath) {
    const exactWorkspace = sessions.filter(
      (session) => normalizePath(session.workspaceFolder) === workspacePath
    );
    if (exactWorkspace.length) return exactWorkspace[0];

    const nestedWorkspace = sessions.filter((session) => {
      const sessionWorkspace = normalizePath(session.workspaceFolder);
      if (!sessionWorkspace) return false;
      return (
        sessionWorkspace.startsWith(`${workspacePath}${path.sep}`) ||
        workspacePath.startsWith(`${sessionWorkspace}${path.sep}`)
      );
    });
    if (nestedWorkspace.length) return nestedWorkspace[0];
  }

  return sessions[0];
}

function formatDate(timestamp) {
  if (!timestamp) return 'unknown';
  return new Date(timestamp).toLocaleString();
}

function listSessions(sessions, limit) {
  if (!sessions.length) {
    console.log('No Codex VS Code chats found.');
    return;
  }

  for (const session of sessions.slice(0, limit)) {
    const title = session.customTitle || '<unset>';
    const workspace = session.workspaceFolder || '<unknown workspace>';
    console.log(`${session.sessionId}\t${title}\t${formatDate(session.lastMessageDate)}\t${workspace}`);
  }
}

function renameSession(target, newTitle) {
  target.session.customTitle = newTitle;
  fs.writeFileSync(target.chatPath, `${JSON.stringify(target.session, null, 2)}\n`, 'utf8');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    usage();
    return;
  }

  const sessions = collectCodexSessions();

  if (args.list) {
    listSessions(sessions, args.limit);
    return;
  }

  if (!args.title) {
    throw new Error('A new title is required. Pass --title "New title" or provide positional text.');
  }

  const target = selectSession(sessions, args);
  if (!target) {
    throw new Error('No Codex VS Code chats were found to rename.');
  }

  renameSession(target, args.title);

  console.log(`Renamed Codex chat: ${target.sessionId}`);
  console.log(`Title: ${args.title}`);
  console.log(`File: ${target.chatPath}`);
  if (target.workspaceFolder) console.log(`Workspace: ${target.workspaceFolder}`);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
