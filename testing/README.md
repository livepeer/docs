# Testing Suite

## Installation

The testing suite uses dependencies that should be installed globally or via npx to avoid modifying the root `package.json`.

### Option 1: Install globally (Recommended)

```bash
npm install -g puppeteer @cspell/dict-en-gb cspell js-yaml
```

### Option 2: Use npx (No installation needed)

The scripts will use `npx` to run tools if they're not installed globally.

### Option 3: Install in v2/ directory

```bash
cd v2
npm install puppeteer @cspell/dict-en-gb cspell js-yaml --save-dev
```

Then run tests from v2 directory:
```bash
cd v2
npm test
```

## Running Tests

### All Tests
```bash
node tests/run-all.js
```

### Individual Test Suites
```bash
node tests/unit/style-guide.test.js
node tests/unit/mdx.test.js
node tests/unit/spelling.test.js
node tests/unit/quality.test.js
node tests/integration/browser.test.js
```

### Browser Tests (All Pages)
```bash
MINT_BASE_URL=http://localhost:3333 node scripts/test-all-pages-browser.js
```

## Note

The root `package.json` is NOT modified to avoid breaking Mintlify's setup. Dependencies are managed separately.
