#!/bin/bash
# @script      install
# @type        dispatch
# @concern     governance
# @niche       hooks
# @purpose     tooling:dev-tools
# @description Installs git hooks by routing this worktree to .githooks via worktree-local core.hooksPath
# @mode        execute
# @pipeline    manual — developer tool
# @scope       .githooks
# @usage       bash .githooks/install.sh [flags]
# @policy      E-C6, F-C1
# Install git hooks

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
SOURCE_DIR="$REPO_ROOT/.githooks"

cd "$REPO_ROOT"

if ! git rev-parse --git-dir >/dev/null 2>&1; then
    echo "Error: this command must run inside a git worktree."
    exit 1
fi

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: .githooks directory not found at $SOURCE_DIR"
    exit 1
fi

if [ ! -f "$SOURCE_DIR/pre-commit" ] || [ ! -f "$SOURCE_DIR/pre-push" ]; then
    echo "Error: required hook entrypoints are missing from $SOURCE_DIR"
    exit 1
fi

echo "Installing git hooks for this worktree..."

git config extensions.worktreeConfig true

SHARED_HOOKS_PATH=$(git config --local --get-all core.hooksPath 2>/dev/null || true)
if [ -n "$SHARED_HOOKS_PATH" ]; then
    git config --local --unset-all core.hooksPath || true
    echo "✓ Cleared shared core.hooksPath override"
fi

git config --worktree core.hooksPath .githooks
chmod +x "$SOURCE_DIR/pre-commit" "$SOURCE_DIR/pre-push"

RESOLVED_HOOKS_PATH=$(git config --worktree --path --get core.hooksPath 2>/dev/null || true)
if [ -z "$RESOLVED_HOOKS_PATH" ]; then
    echo "Error: failed to resolve worktree-local core.hooksPath"
    exit 1
fi
if [[ "$RESOLVED_HOOKS_PATH" != /* ]]; then
    RESOLVED_HOOKS_PATH="$REPO_ROOT/$RESOLVED_HOOKS_PATH"
fi

echo "✓ Using worktree-local core.hooksPath: $RESOLVED_HOOKS_PATH"
echo "✓ Hook entrypoints are executable"

echo ""
echo "Git hooks installed successfully!"
echo ""
echo "The pre-commit hook now runs directly from .githooks/pre-commit."
echo "The pre-push hook now runs directly from .githooks/pre-push."
echo "See .githooks/README.md for details."
