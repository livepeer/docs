#!/usr/bin/env node
/**
 * @script      run-solutions-social-fetch
 * @type        dispatch
 * @concern     content
 * @niche       data
 * @purpose     infrastructure:data-feeds
 * @description Dispatches all solutions social data fetch scripts in sequence with env from a local .env file.
 * @mode        execute
 * @pipeline    manual → .env + product-social-config.json → .github/scripts/fetch-*.js → snippets/automations/solutions/{product}/*.jsx
 * @scope       .github/scripts/fetch-*.js, snippets/automations/solutions/
 * @usage       node operations/scripts/dispatch/content/data/run-solutions-social-fetch.js [--env path/to/.env] [--skip youtube,discord]
 * @policy      Requires API keys — see docs-guide/repo-ops/secrets/solutions-secrets.mdx
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ── Parse args ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const envFlag = args.indexOf("--env");
const envPath = envFlag !== -1 && args[envFlag + 1]
  ? args[envFlag + 1]
  : "workspace/plan/active/SOLUTIONS-SOCIAL-DATA/.env";

const skipFlag = args.indexOf("--skip");
const skipList = skipFlag !== -1 && args[skipFlag + 1]
  ? args[skipFlag + 1].split(",").map((s) => s.trim().toLowerCase())
  : [];

// ── Load .env ──────────────────────────────────────────────────────────────

function loadEnv(filePath) {
  const env = {};
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: .env file not found at ${filePath}`);
    return env;
  }
  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

const localEnv = loadEnv(envPath);
const mergedEnv = { ...process.env, ...localEnv };

// ── Script definitions ─────────────────────────────────────────────────────

const scripts = [
  {
    name: "youtube",
    label: "YouTube (all products)",
    cmd: "node .github/scripts/fetch-youtube-data.js",
    env: { PRODUCT_KEY: "all" },
    requires: ["YOUTUBE_API_KEY"],
  },
  {
    name: "releases",
    label: "GitHub Releases",
    cmd: "node .github/scripts/fetch-github-releases.js",
    env: {},
    requires: [],
  },
  {
    name: "discussions",
    label: "GitHub Discussions",
    cmd: "node .github/scripts/fetch-github-discussions.js",
    env: {},
    requires: [],
  },
  {
    name: "rss",
    label: "RSS Blog Data",
    cmd: "node .github/scripts/fetch-rss-blog-data.js",
    env: {},
    requires: [],
  },
  {
    name: "discord",
    label: "Discord Announcements",
    cmd: "node .github/scripts/fetch-discord-announcements.js",
    env: {},
    requires: ["DISCORD_BOT_TOKEN"],
  },
];

// ── Run ────────────────────────────────────────────────────────────────────

console.log("╔═══════════════════════════════════════════════════════╗");
console.log("║  Solutions Social Data — Manual Fetch Runner          ║");
console.log("╚═══════════════════════════════════════════════════════╝");
console.log(`  .env:  ${envPath}`);
console.log(`  skip:  ${skipList.length ? skipList.join(", ") : "(none)"}`);
console.log("");

let passed = 0;
let failed = 0;
let skipped = 0;

for (const script of scripts) {
  if (skipList.includes(script.name)) {
    console.log(`⏭  ${script.label} — skipped (--skip)`);
    skipped++;
    continue;
  }

  // Check required env vars
  const missing = script.requires.filter((k) => !mergedEnv[k]);
  if (missing.length > 0) {
    console.log(`⏭  ${script.label} — skipped (missing: ${missing.join(", ")})`);
    skipped++;
    continue;
  }

  console.log(`▶  ${script.label}...`);
  const scriptEnv = { ...mergedEnv, ...script.env };

  try {
    const output = execSync(script.cmd, {
      env: scriptEnv,
      stdio: ["pipe", "pipe", "pipe"],
      timeout: 60000,
    });
    const lines = output.toString().trim().split("\n");
    for (const line of lines) {
      console.log(`   ${line}`);
    }
    console.log(`✓  ${script.label} — done\n`);
    passed++;
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString().trim() : err.message;
    console.error(`✗  ${script.label} — FAILED`);
    console.error(`   ${stderr.split("\n").join("\n   ")}\n`);
    failed++;
  }
}

console.log("────────────────────────────────────────────────────────");
console.log(`  ✓ ${passed} passed  ✗ ${failed} failed  ⏭ ${skipped} skipped`);
console.log("────────────────────────────────────────────────────────");

process.exit(failed > 0 ? 1 : 0);
