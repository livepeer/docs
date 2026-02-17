# Diff Report: docs-v2-test vs upstream/docs-v2-preview

Generated: $(date)

## Summary

- **Files Added:** 240
- **Files Modified:** 77  
- **Files Deleted:** 8
- **Total Changes:** 325 files

## Key Changes

### Testing Infrastructure (NEW)
- Complete test suite in `tests/` directory
- Browser testing scripts
- Style guide validation
- MDX validation
- UK English spelling checks
- Quality checks

### Git Hooks (NEW)
- Pre-commit hooks in `.githooks/`
- Browser validation
- Style guide enforcement
- Syntax validation

### CI/CD (NEW)
- GitHub Actions workflows
- Test suite automation
- Browser test workflows

### Scripts (NEW)
- Multiple audit and verification scripts
- Component usage tracking
- Page verification tools

### Components
- Component library updates
- New examples
- Improved documentation

## To Run Browser Tests on All Pages

```bash
# Make sure mint dev is running on port 3333
MINT_BASE_URL=http://localhost:3333 node scripts/test-all-pages-browser.js
```

This will:
- Test all 264 pages from docs.json
- Generate JSON and text reports
- Show progress in real-time
- Test 5 pages concurrently for speed

## Diff Files Generated

- `diff-report-stat.txt` - Statistics of all changes
- `diff-report-files.txt` - List of all changed files
