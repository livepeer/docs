#!/bin/bash
# Verification script for pre-commit hook
# Runs various validation checks on staged files

set -e

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$REPO_ROOT"

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

VIOLATIONS=0
WARNINGS=()

echo -e "${YELLOW}🔍 Running verification checks...${NC}"

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED_FILES" ]; then
    echo -e "${GREEN}✓ No files staged${NC}"
    exit 0
fi

# Check 1: MDX syntax validation (basic)
echo "Checking MDX syntax..."
MDX_FILES=$(echo "$STAGED_FILES" | grep -E '\.mdx$' || true)
if [ -n "$MDX_FILES" ]; then
    for file in $MDX_FILES; do
        if [ -f "$file" ]; then
            # Basic check: ensure frontmatter is valid YAML
            if head -n 20 "$file" | grep -q "^---$"; then
                # Check if frontmatter closes properly
                FRONTMATTER_LINES=$(head -n 50 "$file" | grep -n "^---$" | head -2 | cut -d: -f1)
                if [ -z "$FRONTMATTER_LINES" ] || [ "$(echo "$FRONTMATTER_LINES" | wc -l)" -lt 2 ]; then
                    WARNINGS+=("⚠️  $file: Frontmatter may be malformed")
                    VIOLATIONS=$((VIOLATIONS + 1))
                fi
            fi
        fi
    done
fi

# Check 2: JSON syntax validation
echo "Checking JSON syntax..."
JSON_FILES=$(echo "$STAGED_FILES" | grep -E '\.json$' || true)
if [ -n "$JSON_FILES" ]; then
    for file in $JSON_FILES; do
        if [ -f "$file" ]; then
            if ! node -e "JSON.parse(require('fs').readFileSync('$file'))" 2>/dev/null; then
                WARNINGS+=("❌ $file: Invalid JSON syntax")
                VIOLATIONS=$((VIOLATIONS + 1))
            fi
        fi
    done
fi

# Check 3: Shell script syntax
echo "Checking shell script syntax..."
SH_FILES=$(echo "$STAGED_FILES" | grep -E '\.sh$' || true)
if [ -n "$SH_FILES" ]; then
    for file in $SH_FILES; do
        if [ -f "$file" ]; then
            if ! bash -n "$file" 2>/dev/null; then
                WARNINGS+=("❌ $file: Shell script syntax error")
                VIOLATIONS=$((VIOLATIONS + 1))
            fi
        fi
    done
fi

# Check 4: JavaScript/JSX syntax (if node available)
if command -v node &>/dev/null; then
    echo "Checking JavaScript/JSX syntax..."
    JS_FILES=$(echo "$STAGED_FILES" | grep -E '\.(js|jsx)$' || true)
    if [ -n "$JS_FILES" ]; then
        for file in $JS_FILES; do
            if [ -f "$file" ]; then
                # Skip if it's a JSX file (node --check doesn't handle JSX well)
                if [[ "$file" == *.jsx ]]; then
                    # Basic check: ensure file is readable
                    if ! head -n 1 "$file" > /dev/null 2>&1; then
                        WARNINGS+=("⚠️  $file: Cannot read file")
                        VIOLATIONS=$((VIOLATIONS + 1))
                    fi
                else
                    if ! node --check "$file" 2>/dev/null; then
                        WARNINGS+=("❌ $file: JavaScript syntax error")
                        VIOLATIONS=$((VIOLATIONS + 1))
                    fi
                fi
            fi
        done
    fi
fi

# Check 5: Mintlify config validation (if mintlify available)
if command -v mintlify &>/dev/null; then
    echo "Checking Mintlify configuration..."
    if [ -f "docs.json" ] || [ -f "mint.json" ]; then
        CONFIG_FILE="docs.json"
        [ -f "mint.json" ] && CONFIG_FILE="mint.json"
        
        # Check if docs.json is valid JSON
        if ! node -e "JSON.parse(require('fs').readFileSync('$CONFIG_FILE'))" 2>/dev/null; then
            WARNINGS+=("❌ $CONFIG_FILE: Invalid JSON syntax")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
    fi
fi

# Check 6: Import path validation (absolute paths for snippets)
echo "Checking import paths..."
JSX_MDX_FILES=$(echo "$STAGED_FILES" | grep -E '\.(jsx|tsx|mdx)$' || true)
if [ -n "$JSX_MDX_FILES" ]; then
    for file in $JSX_MDX_FILES; do
        if [ -f "$file" ]; then
            # Check for snippets imports that aren't absolute
            if grep -E "from ['\"].*snippets" "$file" 2>/dev/null | grep -v "from ['\"]/snippets" > /dev/null; then
                WARNINGS+=("⚠️  $file: Snippets imports should be absolute (/snippets/...)")
                VIOLATIONS=$((VIOLATIONS + 1))
            fi
        fi
    done
fi

# Check 7: Browser validation (if Node.js and Puppeteer available)
if command -v node &>/dev/null; then
    # Check if puppeteer is available (installed or in node_modules)
    PUPPETEER_AVAILABLE=false
    if [ -f "node_modules/puppeteer/package.json" ]; then
        PUPPETEER_AVAILABLE=true
    elif npm list puppeteer &>/dev/null 2>&1; then
        PUPPETEER_AVAILABLE=true
    elif [ -f "package.json" ] && grep -q "puppeteer" package.json; then
        # Check if it's in devDependencies
        if grep -A 10 '"devDependencies"' package.json | grep -q "puppeteer"; then
            PUPPETEER_AVAILABLE=true
        fi
    fi
    
    if [ "$PUPPETEER_AVAILABLE" = true ] && [ -f ".githooks/verify-browser.js" ]; then
        echo "Running browser validation..."
        if node .githooks/verify-browser.js 2>&1; then
            echo -e "${GREEN}✓ Browser validation passed${NC}"
        else
            EXIT_CODE=$?
            if [ $EXIT_CODE -eq 0 ]; then
                # Server not running - skip (optional check)
                echo -e "${YELLOW}⚠️  Browser validation skipped (mint dev not running)${NC}"
            else
                WARNINGS+=("❌ Browser validation failed - pages don't render correctly")
                VIOLATIONS=$((VIOLATIONS + 1))
            fi
        fi
    else
        echo -e "${YELLOW}⚠️  Browser validation skipped (Puppeteer not available)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Browser validation skipped (Node.js not available)${NC}"
fi

# Report results
if [ $VIOLATIONS -eq 0 ]; then
    echo -e "${GREEN}✓ All verification checks passed!${NC}"
    exit 0
else
    echo ""
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  VERIFICATION FAILURES DETECTED                              ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    for warning in "${WARNINGS[@]}"; do
        echo -e "${RED}$warning${NC}"
    done
    echo ""
    exit 1
fi
