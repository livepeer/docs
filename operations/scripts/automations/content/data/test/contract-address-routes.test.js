const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = process.cwd();
const DOCS_JSON_PATH = path.join(REPO_ROOT, "docs.json");
const V2_ROOT = path.join(REPO_ROOT, "v2");
const IGNORE_DIRS = new Set(["_workspace", "archive", "TO-ADD", "x-deprecated", "internal"]);
const BAD_PATTERNS = [
  "https://docs.livepeer.org/references/contract-addresses",
  "/v2/about/resources/livepeer-contract-addresses",
  "/v2/about/resources/contract-addresses",
  "/v2/resources/references/contract-addresses",
  "/v2/gateways/resources/technical/contract-addresses",
  "https://docs.livepeer.org/gateways/resources/technical/contract-addresses",
];

function walkActiveV2Files(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "index.mdx") continue;
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walkActiveV2Files(path.join(dir, entry.name), results);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

test("docs.json redirects legacy contract-address routes to the canonical v2 page", () => {
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, "utf8"));
  const redirects = docsJson.redirects || [];
  const destinationFor = (source) => redirects.find((redirect) => redirect.source === source)?.destination || null;

  assert.equal(destinationFor("/references/contract-addresses"), "/v2/about/resources/reference/livepeer-contract-addresses");
  assert.equal(destinationFor("/v2/about/resources/contract-addresses"), "/v2/about/resources/reference/livepeer-contract-addresses");
});

test("active v2 pages do not reference legacy contract-address routes", () => {
  const offenders = [];

  for (const file of walkActiveV2Files(V2_ROOT)) {
    const content = fs.readFileSync(file, "utf8");
    for (const pattern of BAD_PATTERNS) {
      if (content.includes(pattern)) {
        offenders.push(`${path.relative(REPO_ROOT, file)} -> ${pattern}`);
      }
    }
  }

  assert.deepEqual(offenders, []);
});
