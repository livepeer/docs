# Browser Validation Script

This script validates that staged MDX files actually render correctly in a headless browser.

## Purpose

MDX files can pass syntax checks but still fail to render in the browser due to:
- Invalid component imports
- Missing dependencies
- Runtime errors in components
- Invalid props
- Import path issues

This script catches these issues before they reach the repository.

## How It Works

1. **Extracts staged MDX files** from git
2. **Converts file paths to URLs** (e.g., `v2/pages/guide.mdx` → `/guide`)
3. **Tests in Puppeteer** - Visits each page in headless Chrome
4. **Checks for errors**:
   - Console errors
   - Page errors (JavaScript exceptions)
   - Render failures (empty pages)
   - Request failures (failed imports)

## Requirements

- **Node.js** - Must be installed
- **Puppeteer** - Must be in `package.json` devDependencies
- **Mintlify server** - `mint dev` must be running (or set `MINT_BASE_URL`)

## Usage

### Automatic (Pre-commit Hook)

The script runs automatically when you commit if:
- Puppeteer is available
- `mint dev` is running

### Manual

```bash
# Start mint dev first
mint dev

# In another terminal, run validation
node .githooks/verify-browser.js
```

### Environment Variables

```bash
# Use different port
MINT_BASE_URL=http://localhost:3001 node .githooks/verify-browser.js
```

## Configuration

Edit `.githooks/verify-browser.js` to customize:

- `TIMEOUT` - Timeout per page (default: 15 seconds)
- `MAX_PAGES` - Maximum pages to test (default: 10)
- Error filtering - What errors to ignore

## Performance

- **Fast** - Only tests staged files (not all pages)
- **Limited** - Maximum 10 pages per commit
- **Timeout** - 15 seconds per page

For full site testing, use: `npm run test:v2-pages`

## Output

### Success

```
🌐 Browser validation: Testing 3 staged MDX file(s)...
✅ Server accessible at http://localhost:3000

  Testing v2/pages/guide.mdx... ✅
  Testing v2/pages/tutorial.mdx... ✅

✅ All 2 page(s) rendered successfully in browser
```

### Failure

```
🌐 Browser validation: Testing 1 staged MDX file(s)...
✅ Server accessible at http://localhost:3000

  Testing v2/pages/broken.mdx... ❌
     Error: Failed to resolve import: /snippets/components/Missing.jsx

❌ 1 of 1 page(s) failed browser validation:

  v2/pages/broken.mdx:
    - Failed to resolve import: /snippets/components/Missing.jsx

💡 Fix errors and try committing again.
```

## Troubleshooting

### "Server not accessible"

Start `mint dev` or set `MINT_BASE_URL`:

```bash
mint dev
# Or
MINT_BASE_URL=http://localhost:3000 node .githooks/verify-browser.js
```

### "Puppeteer not available"

Install Puppeteer:

```bash
npm install --save-dev puppeteer
```

### False Positives

Some errors may be non-critical (e.g., favicon 404). The script filters common non-critical errors, but you can customize the filtering in the script.

## Integration

The script is called automatically by:
- `.githooks/verify.sh` - Pre-commit verification script
- `.git/hooks/pre-commit` - Git pre-commit hook

## Related

- [Full Git Hooks Documentation](../docs/CONTRIBUTING/GIT-HOOKS.md)
- [Full Site Testing](../scripts/README-test-v2-pages.md) - Test all pages, not just staged
