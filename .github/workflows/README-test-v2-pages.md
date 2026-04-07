# Docs CI - V2 Browser Sweep

This GitHub Actions workflow automatically tests all v2 pages from `docs.json` using Puppeteer in a headless browser whenever code is pushed or a PR is created.

## What it does

1. **Extracts all v2 pages** from `docs.json` (currently ~263 pages)
2. **Starts a Mintlify dev server** in the background
3. **Visits each page** using Puppeteer headless Chrome
4. **Collects console errors**, warnings, and page errors
5. **Reports results**:
   - Workflow status (pass/fail)
   - Artifact with detailed JSON report
   - PR comment with summary (on pull requests)

## When it runs

- **On push** to `main`
- **On pull requests** targeting `main` or `docs-v2` branches

## Related workflows

- `.github/workflows/test-suite.yml` runs changed-file blocking checks and writes GitHub Step Summary output.
- This workflow (`test-v2-pages.yml`) owns PR comment updates and browser-sweep artifact uploads.
- `.github/workflows/codex-governance.yml` runs codex-only governance checks (task contract scope, PR body marker, issue readiness labels/state, and codex PR overlap gate).

## Workflow steps

1. Checkout repository
2. Set up Node.js 22
3. Install Mintlify globally
4. Install npm dependencies (including Puppeteer)
5. Start Mintlify dev server
6. Wait for server to be ready (up to 2 minutes)
7. Run the test script (`npm run test:v2-pages`)
8. Upload test report as artifact
9. Comment on PR with results (if PR)
10. Stop dev server

## Viewing results

### In the workflow run
- Check the workflow run status (green = all passed, red = some failed)
- Download the `v2-pages-test-report` artifact for detailed JSON report

### On Pull Requests
- A bot comment will be posted/updated with:
  - Total pages tested
  - Pass/fail counts
  - Pass rate percentage
  - List of failed pages (first 10)
  - Link to download full report

### Example PR comment

```
## 📊 V2 Pages Test Results

- **Total pages tested:** 263
- **✅ Passed:** 250
- **❌ Failed:** 13
- **Pass rate:** 95.1%

### Failed Pages

- `v2/about/livepeer-protocol/technical-architecture`
- `v2/pages/04_gateways/run-a-gateway/configure/ai-configuration`
...

📥 Download the full test report from the workflow artifacts.
```

## Test report format

The JSON report (`v2-page-test-report.json`) contains:

```json
{
  "timestamp": "2026-01-15T10:30:00.000Z",
  "baseUrl": "http://localhost:3000",
  "totalPages": 263,
  "passed": 250,
  "failed": 13,
  "results": [
    {
      "pagePath": "v2/home/mission-control",
      "url": "http://localhost:3000/home/mission-control",
      "success": true,
      "errors": [],
      "warnings": [],
      "logs": []
    },
    {
      "pagePath": "v2/about/livepeer-protocol/technical-architecture",
      "url": "http://localhost:3000/about/livepeer-protocol/technical-architecture",
      "success": false,
      "errors": [
        "Uncaught TypeError: Cannot read property 'map' of undefined"
      ],
      "warnings": [],
      "logs": []
    }
  ]
}
```

## Timeout and performance

- **Per page timeout:** 30 seconds
- **Server startup timeout:** 2 minutes
- **Total workflow time:** ~15-20 minutes for 263 pages (depending on page complexity)

## Troubleshooting

### Server fails to start
- Check the workflow logs for Mintlify dev server output
- May need to increase wait time or check for port conflicts

### Tests timeout
- Some pages may be slow to load
- Consider increasing per-page timeout in `operations/scripts/test-v2-pages.js`

### Puppeteer issues
- The workflow uses the system Chrome/Chromium
- If issues occur, may need to install additional dependencies

## Manual testing

To test locally before pushing:

```bash
# Start Mintlify dev
npx mintlify dev

# In another terminal
npm --prefix tools run test:v2-pages
```

## Customization

### Test specific pages only
Modify `operations/scripts/test-v2-pages.js` to filter pages:

```javascript
const pages = getV2Pages().filter(page => 
  page.includes('01_about') // Only test About section
);
```

### Change timeout
Update `TIMEOUT` constant in `operations/scripts/test-v2-pages.js`

### Skip on certain branches
Add conditions to workflow:

```yaml
if: github.ref != 'refs/heads/experimental'
```
