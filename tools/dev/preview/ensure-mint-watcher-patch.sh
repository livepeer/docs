#!/usr/bin/env bash
# @script      ensure-mint-watcher-patch
# @type        automation
# @concern     governance
# @niche       dev-tools
# @purpose     tooling:dev-tools
# @description Mint watcher patcher — applies patch to fix Mintlify file watcher issues in dev mode
# @mode        execute
# @pipeline    manual — interactive developer tool, not suited for automated pipelines
# @scope       tools/dev
# @usage       bash tools/dev/preview/ensure-mint-watcher-patch.sh [flags]
set -euo pipefail

MODE="apply"
if [ "${1:-}" = "--check" ]; then
    MODE="check"
elif [ "${1:-}" = "--apply" ] || [ "${1:-}" = "" ]; then
    MODE="apply"
elif [ "${1:-}" = "--help" ] || [ "${1:-}" = "-h" ]; then
    cat <<'EOF'
Usage:
  bash tools/dev/preview/ensure-mint-watcher-patch.sh --check
  bash tools/dev/preview/ensure-mint-watcher-patch.sh --apply
EOF
    exit 0
else
    echo "Error: Unknown option: $1" >&2
    exit 2
fi

if ! command -v mint >/dev/null 2>&1; then
    echo "Error: mint CLI not found in PATH." >&2
    exit 2
fi

MINT_BIN="$(command -v mint)"
MINT_ENTRY_REALPATH="$(node -e 'const fs=require("fs"); console.log(fs.realpathSync(process.argv[1]));' "$MINT_BIN")"
MINT_ROOT="$(cd "$(dirname "$MINT_ENTRY_REALPATH")" && pwd)"
LISTENER_PATH="$MINT_ROOT/node_modules/@mintlify/previewing/dist/local-preview/listener/index.js"
MINT_CLIENT_CHUNKS_DIR="$HOME/.mintlify/mint/apps/client/.next/server/chunks"
MINT_CLIENT_PROPS_DIR="$HOME/.mintlify/mint/apps/client/src/_props"

pattern_in_file() {
    local pattern="$1"
    local file_path="$2"

    if command -v rg >/dev/null 2>&1; then
        rg -q "$pattern" "$file_path"
        return
    fi

    grep -Eq "$pattern" "$file_path"
}

if [ ! -f "$LISTENER_PATH" ]; then
    echo "Error: Mint listener file not found at: $LISTENER_PATH" >&2
    exit 2
fi

watcher_patch_present=0
if pattern_in_file "disableGlobbing:[[:space:]]*true" "$LISTENER_PATH"; then
    watcher_patch_present=1
fi

runtime_patch_present=0
if [ -d "$MINT_CLIENT_CHUNKS_DIR" ] && rg -q "$MINT_CLIENT_PROPS_DIR" "$MINT_CLIENT_CHUNKS_DIR"/*.js 2>/dev/null; then
    runtime_patch_present=1
fi

if [ "$watcher_patch_present" = "1" ] && [ "$runtime_patch_present" = "1" ]; then
    echo "Mint watcher/runtime patch present: $LISTENER_PATH"
    exit 0
fi

if [ "$MODE" = "check" ]; then
    if [ "$watcher_patch_present" != "1" ]; then
        echo "Mint watcher patch missing: $LISTENER_PATH" >&2
    fi
    if [ "$runtime_patch_present" != "1" ]; then
        echo "Mint runtime props patch missing under: $MINT_CLIENT_CHUNKS_DIR" >&2
    fi
    exit 1
fi

if ! pattern_in_file "^[[:space:]]*ignoreInitial:[[:space:]]*true," "$LISTENER_PATH"; then
    echo "Error: Could not find expected watcher option in listener file." >&2
    exit 2
fi

if ! node -e '
const fs = require("fs");
const path = process.argv[1];
const src = fs.readFileSync(path, "utf8");
if (src.includes("disableGlobbing: true")) {
  process.exit(0);
}
const needle = "        ignoreInitial: true,\n";
const injected = "        ignoreInitial: true,\n        disableGlobbing: true,\n";
if (!src.includes(needle)) {
  console.error("Unsupported listener format: ignoreInitial block not found.");
  process.exit(2);
}
const next = src.replace(needle, injected);
if (next === src) {
  console.error("Patch was not applied.");
  process.exit(2);
}
try {
  fs.writeFileSync(path, next, "utf8");
} catch (err) {
  console.error(err && err.message ? err.message : String(err));
  process.exit(3);
}
' "$LISTENER_PATH"; then
    echo "Error: Failed to apply Mint watcher patch at: $LISTENER_PATH" >&2
    exit 3
fi

if [ -d "$MINT_CLIENT_CHUNKS_DIR" ]; then
    if ! node - <<'NODE' "$MINT_CLIENT_CHUNKS_DIR" "$MINT_CLIENT_PROPS_DIR"; then
const fs = require("fs");
const path = require("path");

const chunksDir = process.argv[2];
const propsDir = process.argv[3];

const replacements = [
  {
    needle: "`src/_props/${a}.mdx`",
    replacement: `\`${propsDir}/\${a}.mdx\``,
  },
  {
    needle: "`src/_props/${a}.md`",
    replacement: `\`${propsDir}/\${a}.md\``,
  },
  {
    needle: "`src/_props/${a}.json`",
    replacement: `\`${propsDir}/\${a}.json\``,
  },
];

const files = fs.readdirSync(chunksDir)
  .filter((entry) => entry.endsWith(".js"))
  .map((entry) => path.join(chunksDir, entry));

let touched = 0;
for (const filePath of files) {
  let source = fs.readFileSync(filePath, "utf8");
  let next = source;
  for (const { needle, replacement } of replacements) {
    if (next.includes(needle)) {
      next = next.split(needle).join(replacement);
    }
  }

  if (next !== source) {
    fs.writeFileSync(filePath, next, "utf8");
    touched += 1;
  }
}

console.log(
  touched > 0
    ? `Mint runtime props patch applied to ${touched} chunk file(s): ${chunksDir}`
    : `Mint runtime props patch already satisfied: ${chunksDir}`
);
NODE
        echo "Error: Failed to apply Mint runtime props patch under: $MINT_CLIENT_CHUNKS_DIR" >&2
        exit 3
    fi
fi

echo "Mint watcher patch applied: $LISTENER_PATH"
exit 0
