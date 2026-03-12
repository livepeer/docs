#!/bin/bash
# @script            verify
# @category          utility
# @purpose           tooling:dev-tools
# @scope             .githooks
# @owner             docs
# @needs             E-C6, F-C1
# @purpose-statement Pre-commit sub-hook — verifies file-walker is available and runs structural checks on staged files
# @pipeline          manual — developer tool
# @usage             bash .githooks/verify.sh [flags]
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

get_staged_docs_pages() {
    if ! command -v node &>/dev/null || [ ! -f "tests/utils/file-walker.js" ]; then
        return 0
    fi

    node -e "const path = require('path'); const { getStagedDocsPageFiles } = require('./tests/utils/file-walker'); const root = process.cwd(); const files = getStagedDocsPageFiles(root).map((filePath) => path.relative(root, filePath).split(path.sep).join('/')); process.stdout.write(files.join('\n'));"
}

STAGED_DOCS_PAGES=$(get_staged_docs_pages)

if [ -z "$STAGED_FILES" ]; then
    echo -e "${GREEN}✓ No files staged${NC}"
    exit 0
fi

# Check 1: MDX syntax validation (basic)
echo "Checking MDX syntax..."
if [ -n "$STAGED_DOCS_PAGES" ]; then
    MDX_FILES=$(echo "$STAGED_DOCS_PAGES" | grep -E '\.mdx$' || true)
else
    MDX_FILES=$(echo "$STAGED_FILES" | grep -E '\.mdx$' || true)
fi
if [ -n "$MDX_FILES" ]; then
    for file in $MDX_FILES; do
        if [ -f "$file" ]; then
            # Basic check: ensure frontmatter is valid YAML
            if head -n 1 "$file" | grep -q "^---[[:space:]]*$"; then
                # Check if frontmatter closes properly
                FRONTMATTER_LINES=$(head -n 50 "$file" | grep -n "^---[[:space:]]*$" | head -2 | cut -d: -f1)
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
if [ -n "$STAGED_DOCS_PAGES" ]; then
    JSX_MDX_FILES=$(echo "$STAGED_DOCS_PAGES" | grep -E '\.mdx$' | grep -v "style-guide" || true)
else
    JSX_MDX_FILES=$(echo "$STAGED_FILES" | grep -E '\.(jsx|tsx|mdx)$' | grep -v "style-guide" || true)
fi
if [ -n "$JSX_MDX_FILES" ]; then
    for file in $JSX_MDX_FILES; do
        if [ -f "$file" ]; then
            # Skip style guide (it documents relative imports as examples of what NOT to do)
            if [[ "$file" == *"style-guide"* ]]; then
                continue
            fi
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
    # Check if puppeteer is available (tests/ first, then tools/, then legacy root node_modules)
    PUPPETEER_AVAILABLE=false
    if [ -f "tests/node_modules/puppeteer/package.json" ]; then
        PUPPETEER_AVAILABLE=true
        export NODE_PATH="$(pwd)/tests/node_modules:${NODE_PATH:-}"
    elif [ -f "tools/node_modules/puppeteer/package.json" ]; then
        PUPPETEER_AVAILABLE=true
        export NODE_PATH="$(pwd)/tools/node_modules:${NODE_PATH:-}"
    elif [ -f "node_modules/puppeteer/package.json" ]; then
        PUPPETEER_AVAILABLE=true
    elif [ -f "tests/package.json" ] && grep -q "puppeteer" tests/package.json; then
        PUPPETEER_AVAILABLE=true
        export NODE_PATH="$(pwd)/tests/node_modules:${NODE_PATH:-}"
    elif [ -f "tools/package.json" ] && grep -q "puppeteer" tools/package.json; then
        PUPPETEER_AVAILABLE=true
        export NODE_PATH="$(pwd)/tools/node_modules:${NODE_PATH:-}"
    elif [ -f "package.json" ] && grep -q "puppeteer" package.json; then
        PUPPETEER_AVAILABLE=true
    fi
    
    # If Puppeteer not available but package.json exists, try to install it
    if [ "$PUPPETEER_AVAILABLE" = false ]; then
        if [ -f "tools/package.json" ] && grep -q "puppeteer" tools/package.json; then
            echo -e "${YELLOW}⚠️  Puppeteer not found, attempting to install dependencies...${NC}"
            if cd tools && npm install --silent 2>&1; then
                cd "$REPO_ROOT"
                # Check again after install
                if [ -f "tools/node_modules/puppeteer/package.json" ]; then
                    PUPPETEER_AVAILABLE=true
                    export NODE_PATH="$(pwd)/tools/node_modules:${NODE_PATH:-}"
                    echo -e "${GREEN}✓ Puppeteer installed successfully${NC}"
                else
                    echo -e "${RED}❌ Puppeteer installation failed or incomplete${NC}"
                fi
            else
                cd "$REPO_ROOT"
                echo -e "${RED}❌ Failed to install dependencies${NC}"
            fi
        elif [ -f "tests/package.json" ] && grep -q "puppeteer" tests/package.json; then
            echo -e "${YELLOW}⚠️  Puppeteer not found, attempting to install dependencies...${NC}"
            if cd tests && npm install --silent 2>&1; then
                cd "$REPO_ROOT"
                # Check again after install
                if [ -f "tests/node_modules/puppeteer/package.json" ]; then
                    PUPPETEER_AVAILABLE=true
                    export NODE_PATH="$(pwd)/tests/node_modules:${NODE_PATH:-}"
                    echo -e "${GREEN}✓ Puppeteer installed successfully${NC}"
                else
                    echo -e "${RED}❌ Puppeteer installation failed or incomplete${NC}"
                fi
            else
                cd "$REPO_ROOT"
                echo -e "${RED}❌ Failed to install dependencies${NC}"
            fi
        fi
    fi
    
    if [ "$PUPPETEER_AVAILABLE" = true ] && [ -f ".githooks/verify-browser.js" ]; then
        echo "Running browser validation..."
        # Set NODE_PATH for verify-browser.js to find puppeteer
        if [ -d "tools/node_modules" ]; then
            export NODE_PATH="$(pwd)/tools/node_modules:${NODE_PATH:-}"
        elif [ -d "tests/node_modules" ]; then
            export NODE_PATH="$(pwd)/tests/node_modules:${NODE_PATH:-}"
        fi
        
        # Cross-platform timeout function (30 seconds max)
        # Uses 'timeout' on Linux, 'gtimeout' on macOS (if coreutils installed), or implements timeout in pure bash
        run_with_timeout() {
            local timeout_sec=30
            local cmd="$1"
            
            if command -v timeout &>/dev/null; then
                # Linux: use timeout command
                timeout "$timeout_sec" $cmd
            elif command -v gtimeout &>/dev/null; then
                # macOS with coreutils: use gtimeout
                gtimeout "$timeout_sec" $cmd
            else
                # Pure bash timeout implementation for macOS
                (
                    $cmd &
                    local cmd_pid=$!
                    (
                        sleep "$timeout_sec"
                        kill "$cmd_pid" 2>/dev/null && echo "Browser validation timed out after ${timeout_sec}s" >&2
                    ) &
                    local timeout_pid=$!
                    wait "$cmd_pid" 2>/dev/null
                    local exit_code=$?
                    kill "$timeout_pid" 2>/dev/null
                    exit $exit_code
                )
            fi
        }
        
        # Run browser validation with retries on timeout (2 retries max = 3 total attempts)
        MAX_RETRIES=2
        RETRY_COUNT=0
        EXIT_CODE=1
        BROWSER_OUTPUT=""
        
        set +e
        while [ $RETRY_COUNT -le $MAX_RETRIES ]; do
            if [ $RETRY_COUNT -eq 0 ]; then
                echo -e "${YELLOW}   Attempt 1/$(($MAX_RETRIES + 1)) (30s timeout)...${NC}"
            else
                echo -e "${YELLOW}   Retry attempt $(($RETRY_COUNT + 1))/$(($MAX_RETRIES + 1)) (30s timeout)...${NC}"
            fi
            
            BROWSER_OUTPUT=$(run_with_timeout "node .githooks/verify-browser.js" 2>&1)
            EXIT_CODE=$?
            
            # If not a timeout, break out of retry loop
            if [ $EXIT_CODE -ne 124 ] && [ $EXIT_CODE -ne 143 ] && ! echo "$BROWSER_OUTPUT" | grep -q "timed out\|Command timed out"; then
                break
            fi
            
            # If timeout, show message
            if [ $EXIT_CODE -eq 124 ] || [ $EXIT_CODE -eq 143 ] || echo "$BROWSER_OUTPUT" | grep -q "timed out\|Command timed out"; then
                if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
                    echo -e "${YELLOW}   ⚠️  Attempt $(($RETRY_COUNT + 1)) timed out, retrying...${NC}"
                fi
            fi
            
            # If timeout and we've reached max retries, break
            if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
                break
            fi
            
            RETRY_COUNT=$((RETRY_COUNT + 1))
            # Small delay before retry
            sleep 1
        done
        set -e
        
        if [ $EXIT_CODE -eq 0 ]; then
            # Check if it was a skip (server not available) - treat as failure
            if echo "$BROWSER_OUTPUT" | grep -q "Browser validation skipped\|server not available\|Failed to start server"; then
                echo -e "${RED}❌ Browser validation failed: Server not available${NC}"
                echo "$BROWSER_OUTPUT" | head -10
                WARNINGS+=("❌ Browser validation failed - server not available. Start mint dev or check server status")
                VIOLATIONS=$((VIOLATIONS + 1))
            else
                echo -e "${GREEN}✓ Browser validation passed${NC}"
            fi
        elif [ $EXIT_CODE -eq 124 ] || [ $EXIT_CODE -eq 143 ] || echo "$BROWSER_OUTPUT" | grep -q "timed out\|Command timed out"; then
            # Timeout after all retries (124 = Linux timeout, 143 = SIGTERM from bash timeout, or "timed out" in output)
            echo -e "${RED}❌ Browser validation timed out after ${MAX_RETRIES} retries (30 seconds each)${NC}"
            echo "$BROWSER_OUTPUT" | tail -10
            WARNINGS+=("❌ Browser validation timed out after ${MAX_RETRIES} retries - server may be slow or hung")
            VIOLATIONS=$((VIOLATIONS + 1))
        else
            # Non-zero exit means actual failure
            # Check if it was a script error vs validation failure
            if echo "$BROWSER_OUTPUT" | grep -q "SyntaxError\|ReferenceError\|Cannot find module\|ENOENT.*verify-browser"; then
                echo -e "${RED}❌ Browser validation script error:${NC}"
                echo "$BROWSER_OUTPUT" | head -10
                echo -e "${YELLOW}   Fix: cd tools && npm install${NC}"
                WARNINGS+=("❌ Browser validation script error - install dependencies: cd tools && npm install")
                VIOLATIONS=$((VIOLATIONS + 1))
            else
                # Actual validation failure
                echo "$BROWSER_OUTPUT" | head -20
                WARNINGS+=("❌ Browser validation failed - pages don't render correctly")
                VIOLATIONS=$((VIOLATIONS + 1))
            fi
        fi
    else
        echo -e "${RED}❌ Browser validation failed: Puppeteer not available${NC}"
        echo -e "${YELLOW}   Fix: cd tools && npm install${NC}"
        WARNINGS+=("❌ Browser validation failed - Puppeteer not available. Install dependencies: cd tools && npm install")
        VIOLATIONS=$((VIOLATIONS + 1))
    fi
else
    echo -e "${RED}❌ Browser validation failed: Node.js not available${NC}"
    WARNINGS+=("❌ Browser validation failed - Node.js not available")
    VIOLATIONS=$((VIOLATIONS + 1))
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
