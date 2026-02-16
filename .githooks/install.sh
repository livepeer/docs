#!/bin/bash
# Install git hooks

HOOKS_DIR=".git/hooks"
SOURCE_DIR=".githooks"

if [ ! -d "$HOOKS_DIR" ]; then
    echo "Error: .git/hooks directory not found. Are you in the repository root?"
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

echo ""
echo "Git hooks installed successfully!"
echo ""
echo "The pre-commit hook will now check for style guide violations."
echo "See .githooks/README.md for details."
