#!/usr/bin/env node
/**
 * @script      run-solutions-social-fetch
 * @type        dispatch
 * @concern     integrations
 * @niche       data
 * @purpose     infrastructure:data-feeds
 * @description Local dispatcher for all social-feed integrators. Loads .env, runs selected fetchers with --dry-run support. Mirrors dispatch-copy-update-social-feeds.yml for local testing and upgrades.
 * @mode        dispatch
 * @pipeline    manual → .env + product-social-config.json → operations/scripts/integrators/copy/social-feeds/fetch-*.js → snippets/data/social-feeds/*.jsx + snippets/data/social-feed-solutions/{product}/*.jsx
 * @scope       operations/scripts/integrators/copy/social-feeds/, snippets/data/social-feeds/, snippets/data/social-feed-solutions/
 * @usage       node operations/scripts/dispatch/content/data/run-solutions-social-fetch.js [--mode forum,youtube] [--dry-run] [--env path/to/.env] [--skip discord]
 * @policy      F-R1
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ── Parse args ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);

function getFlag(name) {
  return args.includes(name);
}

function getFlagValue(name) {
  const idx = args.indexOf(name);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
}

const dryRun = getFlag("--dry-run");
const envPath = getFlagValue("--env") || ".env";

const modeFilter = getFlagValue("--mode");
const modeList = modeFilter
  ? modeFilter.split(",").map((s) => s.trim().toLowerCase())
  : [];

const skipValue = getFlagValue("--skip");
const skipList = skipValue
  ? skipValue.split(",").map((s) => s.trim().toLowerCase())
  : [];

if (getFlag("--help") || getFlag("-h")) {
  console.log(`
Usage: node run-solutions-social-fetch.js [options]

Options:
  --mode <list>   Comma-separated modes to run (default: all)
                  Values: forum, ghost-blog, youtube, github, discord, rss-blog
  --skip <list>   Comma-separated modes to skip
  --dry-run       Fetch data and print to stdout without writing files
  --env <path>    Path to .env file (default: .env)
  --help, -h      Show this help

Examples:
  node run-solutions-social-fetch.js --dry-run
  node run-solutions-social-fetch.js --mode forum,ghost-blog
  node run-solutions-social-fetch.js --mode youtube --dry-run
  node run-solutions-social-fetch.js --skip discord,youtube
`);
  process.exit(0);
}

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

const SCRIPT_DIR = "operations/scripts/integrators/copy/social-feeds";

const scripts = [
  {
    name: "forum",
    label: "Forum Topics",
    cmd: `node ${SCRIPT_DIR}/fetch-forum-data.js`,
    env: {},
    requires: [],
  },
  {
    name: "ghost-blog",
    label: "Ghost Blog (RSS)",
    cmd: `node ${SCRIPT_DIR}/fetch-ghost-blog-data.js`,
    env: {},
    requires: [],
  },
  {
    name: "youtube",
    label: "YouTube Videos",
    cmd: `node ${SCRIPT_DIR}/fetch-youtube-data.js`,
    env: {},
    requires: ["YOUTUBE_API_KEY"],
  },
  {
    name: "discord",
    label: "Discord Announcements",
    cmd: `node ${SCRIPT_DIR}/fetch-discord-announcements.js`,
    env: {},
    requires: ["DISCORD_BOT_TOKEN"],
  },
  {
    name: "github",
    label: "GitHub Discussions + Releases",
    cmds: [
      `node ${SCRIPT_DIR}/fetch-github-discussions.js`,
      `node ${SCRIPT_DIR}/fetch-github-releases.js`,
    ],
    env: {},
    requires: [],
  },
  {
    name: "rss-blog",
    label: "RSS Blog Data (per-product)",
    cmd: `node ${SCRIPT_DIR}/fetch-rss-blog-data.js`,
    env: {},
    requires: [],
  },
];

// ── Run ────────────────────────────────────────────────────────────────────

console.log("╔═══════════════════════════════════════════════════════╗");
console.log("║  Social Feeds — Local Dispatcher                      ║");
console.log("╚═══════════════════════════════════════════════════════╝");
console.log(`  .env:     ${envPath}`);
console.log(`  dry-run:  ${dryRun}`);
console.log(`  mode:     ${modeList.length ? modeList.join(", ") : "all"}`);
console.log(`  skip:     ${skipList.length ? skipList.join(", ") : "(none)"}`);
console.log("");

let passed = 0;
let failed = 0;
let skipped = 0;

for (const script of scripts) {
  // Filter by --mode if specified
  if (modeList.length > 0 && !modeList.includes(script.name)) {
    continue;
  }

  // Filter by --skip
  if (skipList.includes(script.name)) {
    console.log(`>>  ${script.label} — skipped (--skip)`);
    skipped++;
    continue;
  }

  // Check required env vars
  const missing = script.requires.filter((k) => !mergedEnv[k]);
  if (missing.length > 0) {
    console.log(`>>  ${script.label} — skipped (missing: ${missing.join(", ")})`);
    skipped++;
    continue;
  }

  console.log(`>>  ${script.label}...`);
  const scriptEnv = { ...mergedEnv, ...script.env };
  const dryRunFlag = dryRun ? " --dry-run" : "";

  // Support single cmd or multiple cmds (github mode runs two scripts)
  const cmds = script.cmds || [script.cmd];

  try {
    for (const cmd of cmds) {
      const fullCmd = `${cmd}${dryRunFlag}`;
      const output = execSync(fullCmd, {
        env: scriptEnv,
        stdio: ["pipe", "pipe", "pipe"],
        timeout: 60000,
      });
      const lines = output.toString().trim().split("\n");
      for (const line of lines) {
        console.log(`   ${line}`);
      }
    }
    console.log(`OK  ${script.label} — done\n`);
    passed++;
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString().trim() : err.message;
    console.error(`FAIL  ${script.label} — FAILED`);
    console.error(`   ${stderr.split("\n").join("\n   ")}\n`);
    failed++;
  }
}

// ── Write lastUpdated timestamp ────────────────────────────────────────────

if (passed > 0 && !dryRun) {
  const now = new Date();
  const formatted = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const lastUpdatedPath = "snippets/data/social-feeds/lastUpdated.jsx";
  const lastUpdatedContent = `export const socialFeedsLastUpdated = "${formatted}";\n`;
  fs.writeFileSync(lastUpdatedPath, lastUpdatedContent);
  console.log(`\nTimestamp written: ${formatted} → ${lastUpdatedPath}`);
}

console.log("────────────────────────────────────────────────────────");
console.log(`  OK ${passed} passed  FAIL ${failed} failed  >> ${skipped} skipped`);
console.log("────────────────────────────────────────────────────────");

process.exit(failed > 0 ? 1 : 0);
