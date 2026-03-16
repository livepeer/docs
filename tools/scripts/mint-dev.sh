#!/usr/bin/env bash
# @script            mint-dev
# @category          utility
# @purpose           tooling:dev-tools
# @scope             full-repo
# @owner             docs
# @needs             E-C6, F-C1
# @purpose-statement Mintlify dev server launcher — starts mint dev with correct configuration
# @pipeline          manual — developer tool
# @usage             bash tools/scripts/mint-dev.sh [flags]
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
MINT_WORKDIR="$REPO_ROOT"
SCOPE_GENERATOR="$REPO_ROOT/tools/scripts/dev/generate-mint-dev-scope.js"
SCOPED_MODE="${LPD_SCOPED_MINT_DEV:-0}"
DOCS_CONFIG="${LPD_MINT_DOCS_CONFIG:-}"
SCOPE_INTERACTIVE="${LPD_MINT_SCOPE_INTERACTIVE:-0}"
SCOPE_FILE="${LPD_MINT_SCOPE_FILE:-}"
SCOPE_VERSIONS="${LPD_MINT_SCOPE_VERSIONS:-}"
SCOPE_LANGUAGES="${LPD_MINT_SCOPE_LANGUAGES:-}"
SCOPE_TABS="${LPD_MINT_SCOPE_TABS:-}"
SCOPE_PREFIXES="${LPD_MINT_SCOPE_PREFIXES:-}"
DISABLE_OPENAPI="${LPD_MINT_DISABLE_OPENAPI:-0}"
MINT_LOCK_FILE=""

# chokidar treats glob metacharacters in watch paths as patterns. If the repo
# path includes brackets (common in worktree names), change events can be lost.
path_has_glob_meta() {
    local path="$1"
    case "$path" in
        *'['*|*']'*|*'{'*|*'}'*|*'*'*|*'?'*|*'!'*)
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

if [ "$SCOPED_MODE" != "1" ] && path_has_glob_meta "$REPO_ROOT"; then
    REPO_HASH="$(printf '%s' "$REPO_ROOT" | cksum | awk '{print $1}')"
    WATCH_SAFE_LINK="/tmp/mint-dev-${REPO_HASH}"
    ln -sfn "$REPO_ROOT" "$WATCH_SAFE_LINK"
    MINT_WORKDIR="$WATCH_SAFE_LINK"
    echo "Using watcher-safe path for mint dev: $MINT_WORKDIR"
fi

mint_lock_file_path() {
    local repo_hash
    repo_hash="$(printf '%s' "$REPO_ROOT" | cksum | awk '{print $1}')"
    echo "/tmp/lpd-mint-dev-lock-${repo_hash}.pid"
}

ensure_no_active_mint_dev() {
    local lock_file="$1"
    if [ ! -f "$lock_file" ]; then
        return 0
    fi

    local existing_pid existing_workdir
    existing_pid="$(sed -n '1p' "$lock_file" 2>/dev/null || true)"
    existing_workdir="$(sed -n '2p' "$lock_file" 2>/dev/null || true)"

    if [ -n "$existing_pid" ] && kill -0 "$existing_pid" 2>/dev/null; then
        echo "Error: mint dev is already running for this repository." >&2
        echo "  pid: $existing_pid" >&2
        if [ -n "$existing_workdir" ]; then
            echo "  workspace: $existing_workdir" >&2
        fi
        echo "Stop the existing process before launching another dev session." >&2
        exit 1
    fi

    rm -f "$lock_file"
}

cleanup_lock_file() {
    if [ -n "$MINT_LOCK_FILE" ]; then
        rm -f "$MINT_LOCK_FILE"
    fi
}

run_scoped_workspace_session() {
    if ! command -v node >/dev/null 2>&1; then
        echo "Error: node is required for --scoped dev profile generation." >&2
        exit 1
    fi

    if [ ! -f "$SCOPE_GENERATOR" ]; then
        echo "Error: scoped profile generator not found: $SCOPE_GENERATOR" >&2
        exit 1
    fi

    local -a scope_cmd
    scope_cmd=(node "$SCOPE_GENERATOR" --repo-root "$REPO_ROOT" --run-scoped-session)

    if [ -n "$DOCS_CONFIG" ]; then
        scope_cmd+=(--docs-config "$DOCS_CONFIG")
    fi
    if [ "$SCOPE_INTERACTIVE" = "1" ]; then
        scope_cmd+=(--interactive)
    fi
    if [ -n "$SCOPE_FILE" ]; then
        scope_cmd+=(--scope-file "$SCOPE_FILE")
    fi
    if [ -n "$SCOPE_VERSIONS" ]; then
        scope_cmd+=(--versions "$SCOPE_VERSIONS")
    fi
    if [ -n "$SCOPE_LANGUAGES" ]; then
        scope_cmd+=(--languages "$SCOPE_LANGUAGES")
    fi
    if [ -n "$SCOPE_TABS" ]; then
        scope_cmd+=(--tabs "$SCOPE_TABS")
    fi
    if [ -n "$SCOPE_PREFIXES" ]; then
        scope_cmd+=(--prefixes "$SCOPE_PREFIXES")
    fi
    if [ "$DISABLE_OPENAPI" = "1" ]; then
        scope_cmd+=(--disable-openapi)
    fi

    if [ "$#" -gt 0 ]; then
        scope_cmd+=(-- "$@")
    fi

    "${scope_cmd[@]}"
}

cd "$REPO_ROOT"

# Support both regular repos and worktrees
GIT_COMMON_DIR=$(git rev-parse --git-common-dir 2>/dev/null)
if [ -z "$GIT_COMMON_DIR" ] || [ "$GIT_COMMON_DIR" = "--git-common-dir" ]; then
    GIT_COMMON_DIR=".git"
fi

HOOK_SOURCE=".githooks/pre-commit"
HOOK_TARGET="$GIT_COMMON_DIR/hooks/pre-commit"

if [ -f "$HOOK_SOURCE" ]; then
    if [ ! -x "$HOOK_TARGET" ] || ! cmp -s "$HOOK_SOURCE" "$HOOK_TARGET"; then
        echo "Installing git hooks..."
        ./.githooks/install.sh
        echo ""
    fi
else
    echo "Warning: $HOOK_SOURCE not found. Skipping hook installation."
fi

if ! command -v mint >/dev/null 2>&1; then
    echo "Error: mint CLI not found."
    echo "Install it with: npm i -g mintlify"
    exit 1
fi

echo "Checking Mint watcher patch..."
if bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply; then
    echo "Mint watcher patch preflight complete."
else
    echo "Warning: Mint watcher patch preflight failed."
    echo "Run manually: bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply"
    echo "Continuing with repo-local watcher-safe launcher path fallback."
fi

echo "Fetching external snippets..."
bash tools/scripts/snippets/fetch-external-docs.sh

if [ "$SCOPED_MODE" != "1" ] && [ "$DISABLE_OPENAPI" = "1" ]; then
    echo "Warning: --disable-openapi has no effect without --scoped."
fi

MINT_LOCK_FILE="$(mint_lock_file_path)"
ensure_no_active_mint_dev "$MINT_LOCK_FILE"
{
    echo "$$"
    if [ "$SCOPED_MODE" = "1" ]; then
        echo "scoped-session"
    else
        echo "$MINT_WORKDIR"
    fi
} > "$MINT_LOCK_FILE"
trap cleanup_lock_file EXIT INT TERM

if [ "$SCOPED_MODE" = "1" ]; then
    run_scoped_workspace_session "$@"
else
    cd "$MINT_WORKDIR"
    mint dev "$@"
fi
