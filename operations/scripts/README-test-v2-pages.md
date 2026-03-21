# V2 Pages Browser Test

This script tests all v2 pages from `docs.json` in a headless browser using Puppeteer to check for console errors.

## Usage

### Option 1: Run with mint dev already running

1. Start mint dev in one terminal:
   ```bash
   mint dev
   ```

2. Wait for it to be ready (usually takes 30-60 seconds)

3. In another terminal, run the test:
   ```bash
   npm run test:v2-pages
   ```
   
   Or directly:
   ```bash
   node scripts/test-v2-pages.js
   ```

### Option 2: Use a different port

If mint dev is running on a different port, set the `MINT_BASE_URL` environment variable:

```bash
MINT_BASE_URL=http://localhost:3001 npm run test:v2-pages
```

## What it does

1. Extracts all v2 page paths from `docs.json`
2. Launches a headless Chrome browser using Puppeteer
3. Visits each page and waits for it to load
4. Collects console errors, warnings, and page errors
5. Generates a detailed report in `v2-page-test-report.json`

## Output

- Real-time progress showing which pages pass/fail
- Summary with total pages, passed, and failed counts
- Detailed list of all failed pages with their errors
- JSON report saved to `v2-page-test-report.json`

## Example Output

```
🔍 Extracting v2 pages from docs.json...
📄 Found 263 pages to test

🌐 Testing against: http://localhost:3000
⏱️  Timeout per page: 30000ms

✅ Server is accessible

🚀 Starting browser tests...

[1/263] Testing v2/home/mission-control... ✅
[2/263] Testing v2/home/user-journey... ✅
...

============================================================
📊 SUMMARY
============================================================
Total pages tested: 263
✅ Passed: 250
❌ Failed: 13
```

## Notes

- Each page has a 30 second timeout
- The script waits 2 seconds after page load for async rendering
- Network request failures are also reported
- The script exits with code 1 if any pages fail
