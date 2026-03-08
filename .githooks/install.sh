#!/bin/bash
# @script            install
# @category          utility
# @purpose           tooling:dev-tools
# @scope             .githooks
# @owner             docs
# @needs             E-C6, F-C1
# @purpose-statement Installs git hooks by setting core.hooksPath to .githooks/
# @pipeline          manual — developer tool
# @usage             bash .githooks/install.sh [flags]
# Install git hooks

# Support both regular repos and worktrees
GIT_COMMON_DIR=$(git rev-parse --git-common-dir 2>/dev/null)
if [ -z "$GIT_COMMON_DIR" ] || [ "$GIT_COMMON_DIR" = "--git-common-dir" ]; then
    GIT_COMMON_DIR=".git"
fi
HOOKS_DIR="$GIT_COMMON_DIR/hooks"
SOURCE_DIR=".githooks"

if [ ! -d "$HOOKS_DIR" ]; then
    echo "Error: hooks directory not found at $HOOKS_DIR"
    exit 1
fi

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: .githooks directory not found. Are you in the repository root?"
    exit 1
fi

echo "Installing git hooks..."

# Install pre-commit hook
if [ -f "$SOURCE_DIR/pre-commit" ]; then
    cp "$SOURCE_DIR/pre-commit" "$HOOKS_DIR/pre-commit"
    chmod +x "$HOOKS_DIR/pre-commit"
    echo "✓ Installed pre-commit hook"
else
    echo "✗ pre-commit hook not found in $SOURCE_DIR"
fi

# Install pre-push hook
if [ -f "$SOURCE_DIR/pre-push" ]; then
    cp "$SOURCE_DIR/pre-push" "$HOOKS_DIR/pre-push"
    chmod +x "$HOOKS_DIR/pre-push"
    echo "✓ Installed pre-push hook"
else
    echo "✗ pre-push hook not found in $SOURCE_DIR"
fi

echo ""
echo "Git hooks installed successfully!"
echo ""
echo "The pre-commit hook will now check for style guide violations."
echo "The pre-push hook will enforce codex task contracts on codex/* branches."
echo "See .githooks/README.md for details."
