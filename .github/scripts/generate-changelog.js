/**
 * @script            generate-changelog
 * @type              automation
 * @concern           content
 * @niche             data/changelog
 * @purpose           infrastructure:data-feeds
 * @description       Unified changelog generator for all changelog targets (solutions, contracts, resources).
 *                    Fetches GitHub/GitLab releases (mode: releases) or commit history (mode: commits).
 *                    Config-driven via product-social-config.json changelogs{} section. With --enhance,
 *                    uses an LLM to summarise release notes. With --contract, fetches governor-scripts
 *                    commits and verifies deployed addresses on-chain via Arbiscan/Etherscan.
 *                    Falls back to raw extraction on LLM failure. Supports dual-source (GitHub + GitLab)
 *                    with deduplication by tag_name. Backwards-compatible: falls back to legacy
 *                    products{} scanning if changelogs{} section is absent from config.
 * @mode              generate
 * @pipeline          config → GitHub/GitLab REST API → [LLM optional] → [on-chain verify optional] → changelog.mdx
 * @scope             .github/scripts, v2/solutions/, v2/resources/changelog/
 * @usage             CHANGELOG_KEY=contracts node .github/scripts/generate-changelog.js [--dry-run] [--enhance] [--contract]
 *                    CHANGELOG_CATEGORY=solutions node .github/scripts/generate-changelog.js [--dry-run] [--enhance]
 *                    PRODUCT_KEY=daydream node .github/scripts/generate-changelog.js [--dry-run] [--enhance]
 * @policy            Public repos only. GITHUB_TOKEN optional (rate limits). No secrets in output.
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

// ── Shared utilities ───────────────────────────────────────────────────────
const REPO_ROOT = path.resolve(__dirname, "../..");
const { sanitiseForMdx } = require(path.join(REPO_ROOT, "operations/scripts/config/mdx-sanitise"));

// ── Config ──────────────────────────────────────────────────────────────────
const CONFIG_PATH =
  process.env.CONFIG_PATH || path.join(REPO_ROOT, "operations/scripts/config/product-social-config.json");
// CHANGELOG_KEY takes precedence; PRODUCT_KEY kept for backward compat
const CHANGELOG_KEY = process.env.CHANGELOG_KEY || process.env.PRODUCT_KEY || "";
const CHANGELOG_CATEGORY = process.env.CHANGELOG_CATEGORY || "";
const CONTRACT = process.argv.includes("--contract");
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITLAB_TOKEN = process.env.GITLAB_TOKEN || "";
const LIMIT = parseInt(process.env.LIMIT || "10", 10);
const DRY_RUN = process.argv.includes("--dry-run");
const ENHANCE = process.argv.includes("--enhance");
const REGENERATE = process.argv.includes("--regenerate");

// Resolve product config
function hasActiveReleases(product) {
  return (
    (product.github && product.github.releasesActive) ||
    (product.gitlab && product.gitlab.releasesActive)
  );
}

/**
 * Legacy fallback: load from products{} section (pre-changelogs config).
 * Used when changelogs{} section is absent from config.
 */
function loadProductConfigLegacy(key) {
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  const products = config.products || {};

  if (key) {
    const product = products[key];
    if (!product) {
      console.error(`Product "${key}" not found in config.`);
      process.exit(1);
    }
    if (!hasActiveReleases(product)) {
      console.log(`${key}: releases not active, skipping.`);
      process.exit(0);
    }
    return [{ key, mode: "releases", outputPath: `v2/solutions/${key}/changelog.mdx`, ...product }];
  }

  // No key specified — run for all products with active releases
  return Object.entries(products)
    .filter(([, p]) => hasActiveReleases(p))
    .map(([k, p]) => ({ key: k, mode: "releases", outputPath: `v2/solutions/${k}/changelog.mdx`, ...p }));
}

/**
 * Load changelog targets from the changelogs{} section of config.
 * Falls back to loadProductConfigLegacy() if changelogs{} is absent.
 *
 * @param {string} key - Specific changelog key (e.g. "contracts", "daydream")
 * @param {string} category - Filter by category ("solutions" | "resources")
 * @returns {Array} Array of resolved target objects
 */
function loadChangelogTargets(key, category) {
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));

  // Backward compat: no changelogs section
  if (!config.changelogs) {
    console.log("No changelogs{} section in config — falling back to legacy products{} scanning.");
    return loadProductConfigLegacy(key);
  }

  const changelogs = config.changelogs;
  const products = config.products || {};

  // Build resolved entries (skip _meta)
  const entries = Object.entries(changelogs)
    .filter(([k]) => k !== "_meta")
    .map(([k, entry]) => {
      if (entry.productRef) {
        const product = products[entry.productRef];
        if (!product) {
          console.error(`changelogs.${k}: productRef "${entry.productRef}" not found in products.`);
          process.exit(1);
        }
        // Merge: entry fields override product fields (productRef is metadata only)
        const { productRef, ...entryWithoutRef } = entry;
        return { key: k, ...product, ...entryWithoutRef };
      }
      return { key: k, ...entry };
    });

  // Filter by specific key
  if (key) {
    const target = entries.find((e) => e.key === key);
    if (!target) {
      console.error(`Changelog "${key}" not found in config.changelogs.`);
      process.exit(1);
    }
    return [target];
  }

  // Filter by category (e.g. --category=solutions)
  let filtered = category
    ? entries.filter((e) => e.category === category)
    : entries;

  // Exclude unmanaged entries unless explicitly targeted by key
  filtered = filtered.filter((e) => e.managed !== false);

  if (filtered.length === 0) {
    console.log("No changelog targets matched the given filters.");
    process.exit(0);
  }

  return filtered;
}

// LLM config
const LLM_PROVIDER = process.env.LLM_PROVIDER || "openrouter"; // "openrouter" | "copilot"
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const OPENROUTER_MODEL =
  process.env.OPENROUTER_MODEL || "openrouter/free";
const COPILOT_TOKEN = process.env.COPILOT_TOKEN || GITHUB_TOKEN;
const COPILOT_MODEL = process.env.COPILOT_MODEL || "gpt-4o";
const LLM_TIMEOUT_MS = 30000;

// ── GitHub API ──────────────────────────────────────────────────────────────
function githubGet(endpoint) {
  return new Promise((resolve, reject) => {
    const headers = {
      "User-Agent": "livepeer-docs-bot",
      Accept: "application/vnd.github+json",
    };
    if (GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
    }

    const options = {
      hostname: "api.github.com",
      path: endpoint,
      method: "GET",
      headers,
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Parse error: ${data.substring(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

// ── GitLab API ────────────────────────────────────────────────────────────
function gitlabGet(instanceUrl, endpoint) {
  return new Promise((resolve, reject) => {
    const url = new URL(instanceUrl);
    const headers = {
      "User-Agent": "livepeer-docs-bot",
      Accept: "application/json",
    };
    if (GITLAB_TOKEN) {
      headers["PRIVATE-TOKEN"] = GITLAB_TOKEN;
    }

    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === "https:" ? 443 : 80),
      path: `/api/v4${endpoint}`,
      method: "GET",
      headers,
    };

    const transport = url.protocol === "https:" ? https : http;
    const req = transport.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`GitLab parse error: ${data.substring(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

/**
 * Fetch releases from a GitLab project and normalise to GitHub-like shape.
 */
async function fetchGitLabRepoReleases(instanceUrl, projectId, repoLabel) {
  try {
    const releases = await gitlabGet(
      instanceUrl,
      `/projects/${projectId}/releases?per_page=${LIMIT}`
    );

    if (!Array.isArray(releases) || releases.length === 0) {
      return [];
    }

    // Filter: skip upcoming (GitLab's equivalent of prerelease)
    const versioned = releases.filter(
      (r) => !r.upcoming_release && r.tag_name !== "preview"
    );

    // Normalise to GitHub-like shape
    return versioned.map((r) => ({
      tag_name: r.tag_name,
      name: r.name || r.tag_name,
      body: r.description || "",
      published_at: r.released_at || r.created_at,
      created_at: r.created_at,
      html_url: (r._links && r._links.self) || `${instanceUrl}/${repoLabel ? "" : ""}streamplace/streamplace/-/releases/${r.tag_name}`,
      prerelease: r.upcoming_release || false,
      draft: false,
      _repo: String(projectId),
      _repoLabel: repoLabel,
      _source: "gitlab",
    }));
  } catch (err) {
    console.log(`  Error fetching GitLab project ${projectId}: ${err.message}`);
    return [];
  }
}

/**
 * Fetch commit titles between two tags from GitLab for LLM context.
 */
async function fetchGitLabCommitsBetweenTags(instanceUrl, projectId, prevTag, currentTag) {
  try {
    const compare = await gitlabGet(
      instanceUrl,
      `/projects/${projectId}/repository/compare?from=${encodeURIComponent(prevTag)}&to=${encodeURIComponent(currentTag)}`
    );

    if (!compare.commits || !Array.isArray(compare.commits)) {
      return [];
    }

    return compare.commits
      .map((c) => c.title || (c.message && c.message.split("\n")[0]) || "")
      .filter(
        (msg) =>
          !msg.startsWith("Merge branch") &&
          msg !== currentTag &&
          msg.length > 5
      )
      .slice(0, 25);
  } catch (err) {
    console.log(`  Could not fetch GitLab commits: ${err.message}`);
    return [];
  }
}

/**
 * Merge releases from GitHub and GitLab, deduplicating by tag_name.
 * When both sources have the same tag, the primary source wins.
 */
function mergeReleases(githubReleases, gitlabReleases, gitlabIsPrimary) {
  const byTag = new Map();

  // Add the non-primary source first
  const first = gitlabIsPrimary ? githubReleases : gitlabReleases;
  const second = gitlabIsPrimary ? gitlabReleases : githubReleases;

  for (const r of first) {
    byTag.set(r.tag_name, r);
  }
  // Primary source overwrites duplicates
  for (const r of second) {
    byTag.set(r.tag_name, r);
  }

  return Array.from(byTag.values());
}

// ── LLM providers ───────────────────────────────────────────────────────────

/**
 * Generic HTTPS POST helper for LLM API calls.
 */
function httpsPost(hostname, path, headers, body, timeoutMs) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname,
      path,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`LLM parse error: ${data.substring(0, 300)}`));
        }
      });
    });

    req.on("error", reject);
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      reject(new Error("LLM request timed out"));
    });

    req.write(JSON.stringify(body));
    req.end();
  });
}

/**
 * Call OpenRouter chat completions API (free tier).
 * Docs: https://openrouter.ai/docs/api-reference/chat-completion
 */
async function callOpenRouter(prompt) {
  if (!OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY not set");
  }

  console.log(`  LLM: OpenRouter (${OPENROUTER_MODEL})`);

  const res = await httpsPost(
    "openrouter.ai",
    "/api/v1/chat/completions",
    {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "HTTP-Referer": "https://docs.livepeer.org",
      "X-Title": "Livepeer Docs Changelog",
    },
    {
      model: OPENROUTER_MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.3,
    },
    LLM_TIMEOUT_MS
  );

  if (res.error) {
    throw new Error(`OpenRouter error: ${res.error.message || JSON.stringify(res.error)}`);
  }

  const content = res.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("OpenRouter returned empty content");
  }

  return content.trim();
}

/**
 * Call GitHub Copilot / GitHub Models API.
 * Docs: https://docs.github.com/en/github-models
 */
async function callCopilot(prompt) {
  if (!COPILOT_TOKEN) {
    throw new Error("COPILOT_TOKEN / GITHUB_TOKEN not set");
  }

  console.log(`  LLM: GitHub Copilot (${COPILOT_MODEL})`);

  const res = await httpsPost(
    "models.github.ai",
    "/inference/chat/completions",
    {
      Authorization: `Bearer ${COPILOT_TOKEN}`,
    },
    {
      model: COPILOT_MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.3,
    },
    LLM_TIMEOUT_MS
  );

  if (res.error) {
    throw new Error(`Copilot error: ${res.error.message || JSON.stringify(res.error)}`);
  }

  const content = res.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("Copilot returned empty content");
  }

  return content.trim();
}

/**
 * Route to the configured LLM provider.
 */
const LLM_MAX_RETRIES = parseInt(process.env.LLM_MAX_RETRIES || "3", 10);
const LLM_RETRY_DELAY_MS = 2000;

async function callLLMOnce(prompt) {
  switch (LLM_PROVIDER) {
    case "openrouter":
      return callOpenRouter(prompt);
    case "copilot":
      return callCopilot(prompt);
    default:
      throw new Error(`Unknown LLM_PROVIDER: ${LLM_PROVIDER}`);
  }
}

/**
 * Call LLM with retries. Retries on empty content or transient errors.
 * Backs off with increasing delay between attempts.
 */
async function callLLM(prompt) {
  let lastError;
  for (let attempt = 1; attempt <= LLM_MAX_RETRIES; attempt++) {
    try {
      const result = await callLLMOnce(prompt);
      if (result && result.length >= 10) {
        return result;
      }
      lastError = new Error(`LLM returned empty or too-short content (attempt ${attempt}/${LLM_MAX_RETRIES})`);
    } catch (err) {
      lastError = err;
    }

    if (attempt < LLM_MAX_RETRIES) {
      const delay = LLM_RETRY_DELAY_MS * attempt;
      console.log(`    Retry ${attempt}/${LLM_MAX_RETRIES} in ${delay}ms...`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError;
}

// ── Prompt ───────────────────────────────────────────────────────────────────

function isPlaceholderBody(body) {
  if (!body) return true;
  const trimmed = body.trim();
  return trimmed.length < 30 || trimmed.includes("didn't work");
}

function buildPrompt(release, prTitles, productName) {
  const hasPlaceholder = isPlaceholderBody(release.body);
  const commitSection =
    prTitles.length > 0
      ? `\nCommit log for this release:\n${prTitles.map((t) => `- ${t}`).join("\n")}\n`
      : "";

  const releaseNotesSection = hasPlaceholder
    ? "(No release notes provided. Use the commit log as the primary source.)"
    : `Release notes from the maintainer:\n${release.body}`;

  return `You are a technical changelog writer for ${productName}, an open-source software product.

Task: Summarise a software release into 3-6 concise, structured markdown bullets that describe what shipped. The audience is developers and operators who use this product. The output will be published on a documentation site.

Release: ${release.tag_name} (${formatDate(release.published_at || release.created_at)})

${releaseNotesSection}
${commitSection}
Rules:
- Product-facing changes only. No internal implementation details, private file paths, directory structures, code snippets, or function names.
- Organise under headings: #### New Features, #### Updates, #### Bug Fixes. Omit empty sections. Use #### (h4) not ### (h3). Capitalise Every Word In The Heading.
- Format: \`- **Short name** - One-sentence description.\` under each heading.
- Use UK English throughout (e.g. "organised" not "organized", "colour" not "color", "behaviour" not "behavior").
- Never use em dashes. Use a hyphen (-) instead.
- Be polite and terse. The changelog must be skimmable and quick to read.
- Do not include PR/MR numbers, author names, commit hashes, or repository links.
- Maximum 6 bullets total. Skip trivial changes (typos, version bumps, CI config).
- If only fixes shipped, use a single #### Bug Fixes section.
- Output ONLY the markdown sections. No preamble, no summary sentence, no sign-off.

Example output:
#### New Features

- **Pinned messages** - Messages in chat can now be pinned by moderators.

#### Bug Fixes

- **Stream reconnection** - Fixed an issue where streams would not reconnect after a brief network drop.`;
}

/**
 * Fetch PR titles between two tags for richer LLM context.
 */
async function fetchPRTitlesBetweenTags(owner, repo, prevTag, currentTag) {
  try {
    const compare = await githubGet(
      `/repos/${owner}/${repo}/compare/${prevTag}...${currentTag}`
    );

    if (!compare.commits || !Array.isArray(compare.commits)) {
      return [];
    }

    // Extract PR titles from merge commit messages
    const prTitles = compare.commits
      .map((c) => c.commit?.message || "")
      .filter((msg) => msg.startsWith("Merge pull request") || msg.includes("(#"))
      .map((msg) => {
        // "Merge pull request #NNN from ...\n\nTitle" → "Title"
        const lines = msg.split("\n").filter(Boolean);
        return lines.length > 1 ? lines[lines.length - 1].trim() : lines[0];
      })
      .filter(Boolean)
      .slice(0, 20); // Cap to avoid bloating the prompt

    return prTitles;
  } catch (err) {
    console.log(`  Could not fetch PR titles: ${err.message}`);
    return [];
  }
}

// ── Markdown processing ─────────────────────────────────────────────────────

/**
 * Extract the Highlights section from a GitHub release body.
 * Falls back to the full body (trimmed) if no Highlights heading found.
 */
function extractHighlights(body) {
  if (!body) return "";

  // Try to extract ## Highlights section
  const highlightsMatch = body.match(
    /## Highlights\s*\n([\s\S]*?)(?=\n## |\n---|\n\*\*Full Changelog\*\*|$)/i
  );

  if (highlightsMatch) {
    return highlightsMatch[1].trim();
  }

  // Fallback: use everything before "## What's Changed" or "**Full Changelog**"
  const beforeChangelog = body.match(
    /^([\s\S]*?)(?=\r?\n#+ What'?s Changed|\r?\n\*\*Full Changelog\*\*)/i
  );

  if (beforeChangelog && beforeChangelog[1].trim()) {
    return beforeChangelog[1].trim();
  }

  // Last resort: first paragraph only (up to first double newline)
  const firstPara = body.split(/\n\s*\n/)[0];
  return (firstPara || body).trim();
}

/**
 * Convert GitHub Markdown to MDX-safe content for Mintlify <Update> blocks.
 * - Strips PR links like "by @user in https://..." suffixes
 * - Converts bold (**text**) — kept as-is (MDX supports it)
 * - Cleans up GH-specific markdown patterns
 */
// cleanForMdx — thin alias for shared sanitiseForMdx (backward compat for internal references)
const cleanForMdx = sanitiseForMdx;

/**
 * Classify a release into tags based on its content.
 */
function classifyTags(body) {
  const tags = [];
  const lower = (body || "").toLowerCase();

  if (
    lower.includes("new") ||
    lower.includes("add") ||
    lower.includes("support") ||
    lower.includes("feat")
  ) {
    tags.push("Features");
  }
  if (lower.includes("fix") || lower.includes("regression")) {
    tags.push("Fixes");
  }
  if (lower.includes("performance") || lower.includes("optimiz")) {
    tags.push("Performance");
  }
  if (lower.includes("breaking")) {
    tags.push("Breaking");
  }

  return tags.length > 0 ? tags : ["Release"];
}

/**
 * Format an ISO date string to "Month YYYY" for display labels.
 */
function formatDateLabel(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

/**
 * Format an ISO date string to "YYYY-MM-DD" for internal use.
 */
function formatDate(iso) {
  return iso.split("T")[0];
}

/**
 * Extract a one-line summary from release body for RSS description.
 */
function extractRssSummary(body) {
  if (!body) return "";
  // Use the first sentence/line of the body
  const firstLine = body.split(/\n/).find((l) => l.trim() && !l.startsWith("#"));
  if (!firstLine) return "";
  // Trim to ~120 chars, strip markdown formatting
  const clean = firstLine
    .replace(/\*\*/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
  return clean.length > 120 ? clean.substring(0, 117) + "..." : clean;
}

// ── Update block generation ─────────────────────────────────────────────────

function buildUpdateBlock(tag, date, tags, content, rawNotes, releaseUrl, rssSummary, productName, repoLabel, source) {
  const tagsStr = tags.map((t) => `"${t}"`).join(", ");
  const rssTitle = `${productName} ${tag}`;
  const rssDesc = rssSummary || `${tag} release`;
  // Escape quotes in prop strings
  const esc = (s) => s.replace(/"/g, '\\"');
  // For multi-repo, prefix the heading with the repo label
  const heading = repoLabel ? `${repoLabel}: ${tag}` : tag;

  let block = "";
  block += `<Update label="${heading}" tags={[${tagsStr}]} rss={{ title: "${esc(rssTitle)}", description: "${esc(rssDesc)}" }} description={<div style={{fontSize: "0.8rem", fontWeight: 700, color: "var(--hero-text)"}}>${date}</div>}>\n`;
  block += `  ## ${heading}\n\n`;

  // LLM summary with icon label + divider line underneath
  if (content) {
    const indented = content
      .split("\n")
      .map((line) => (line ? `  ${line}` : ""))
      .join("\n");
    block += `  <span style={{display: "inline-flex", alignItems: "center", gap: "0.35rem"}}><Icon icon="user-robot" size={14} /> _AI Summary_</span>\n\n`;
    block += `${indented}\n\n`;
    block += `  <span style={{display: "block", borderBottom: "1px solid var(--border)", margin: "1rem 0 1rem 0"}} />\n\n`;
  }

  // Full release notes from the maintainer in ScrollBox (when they exist and aren't placeholder)
  if (rawNotes) {
    const rawIndented = rawNotes
      .split("\n")
      .map((line) => (line ? `    ${line}` : ""))
      .join("\n");
    block += `  <span style={{display: "inline-flex", alignItems: "center", gap: "0.35rem", marginBottom: "1.5rem"}}><Icon icon="pen-to-square" size={14} /> _Release Notes_</span>\n\n`;
    block += `  <ScrollBox maxHeight="250px" showHint={true}>\n`;
    block += `${rawIndented}\n`;
    block += `  </ScrollBox>\n\n`;
  }

  const icon = source === "gitlab" ? "gitlab" : "github";
  const platform = source === "gitlab" ? "GitLab" : "GitHub";
  block += `  <DoubleIconLink label="View release on ${platform}" href="${releaseUrl}" iconLeft="${icon}" />\n`;
  block += `</Update>\n`;

  return block;
}

/**
 * Generate an Update block using raw extraction (Option B).
 */
function generateUpdateBlockRaw(release, productName, repoLabel) {
  const tag = release.tag_name;
  const date = formatDateLabel(release.published_at || release.created_at);
  const tags = classifyTags(release.body);
  if (repoLabel) tags.push(repoLabel);
  const placeholder = isPlaceholderBody(release.body);
  const highlights = placeholder ? "" : cleanForMdx(extractHighlights(release.body || ""));
  const rssSummary = placeholder ? `${tag} release` : extractRssSummary(release.body || "");
  // Raw mode: highlights go in primary content, no separate raw notes (they'd be the same)
  return buildUpdateBlock(tag, date, tags, highlights, null, release.html_url, rssSummary, productName, repoLabel, release._source);
}

/**
 * Generate an Update block using LLM enhancement (Option A).
 * Falls back to raw extraction on any LLM failure.
 */
async function generateUpdateBlockEnhanced(release, prevTag, owner, repo, productName, repoLabel, gitlabConfig) {
  const tag = release.tag_name;
  const date = formatDateLabel(release.published_at || release.created_at);
  const tags = classifyTags(release.body);
  if (repoLabel) tags.push(repoLabel);

  try {
    // Fetch PR/commit titles for richer context — use correct provider
    let prTitles = [];
    if (prevTag) {
      if (release._source === "gitlab" && gitlabConfig) {
        prTitles = await fetchGitLabCommitsBetweenTags(
          gitlabConfig.instanceUrl,
          gitlabConfig.projectId,
          prevTag,
          tag
        );
      } else {
        prTitles = await fetchPRTitlesBetweenTags(owner, repo, prevTag, tag);
      }
    }

    console.log(
      `  Enhancing ${tag} with LLM (${prTitles.length} commits/PRs for context)...`
    );

    const prompt = buildPrompt(release, prTitles, productName);
    const llmContent = await callLLM(prompt);

    // Validate: LLM should return markdown bullets, not HTML or code
    if (!llmContent || llmContent.length < 10) {
      throw new Error("LLM output too short");
    }

    console.log(`  ✓ LLM returned ${llmContent.length} chars`);
    const placeholder = isPlaceholderBody(release.body);
    const rssSummary = placeholder ? `${tag} release` : extractRssSummary(release.body || "");
    // Include raw release notes in accordion when they exist and aren't placeholder
    const rawNotes = placeholder ? null : cleanForMdx(release.body || "");
    return buildUpdateBlock(tag, date, tags, llmContent, rawNotes, release.html_url, rssSummary, productName, repoLabel, release._source);
  } catch (err) {
    console.log(`  ✗ LLM failed for ${tag}: ${err.message}`);
    console.log(`  → Falling back to raw extraction`);
    return generateUpdateBlockRaw(release, productName, repoLabel);
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

// ── Commit-mode fetching ─────────────────────────────────────────────────────

/**
 * Fetch commits from a GitHub repo filtered by path(s), normalised to release-like shape.
 * Used for mode: "commits" targets (e.g. governor-scripts, docs).
 *
 * @param {object} target - Changelog target with github.org, github.repo, github.branch, github.trackedPaths
 * @returns {Array} Normalised commit entries
 */
async function fetchCommitEntries(target) {
  const { org, repo, branch = "main", trackedPaths = [] } = target.github;
  // GitHub commits API: filter by path (first tracked path only — API supports one path param)
  const pathParam = trackedPaths.length > 0
    ? `&path=${encodeURIComponent(trackedPaths[0])}`
    : "";
  const endpoint = `/repos/${org}/${repo}/commits?sha=${encodeURIComponent(branch)}&per_page=${LIMIT}${pathParam}`;

  try {
    const commits = await githubGet(endpoint);
    if (!Array.isArray(commits) || commits.length === 0) return [];

    return commits.map((c) => {
      const sha = c.sha;
      const shortSha = sha.substring(0, 7);
      const message = c.commit?.message || "";
      const firstLine = message.split("\n")[0].trim();
      const date = c.commit?.author?.date || c.commit?.committer?.date || new Date().toISOString();

      return {
        tag_name: shortSha,
        sha,
        name: firstLine,
        body: message,
        published_at: date,
        created_at: date,
        html_url: c.html_url || `https://github.com/${org}/${repo}/commit/${sha}`,
        prerelease: false,
        draft: false,
        _repo: repo,
        _repoLabel: null,
        _source: "github",
        _isCommit: true,
      };
    });
  } catch (err) {
    console.log(`  Error fetching commits from ${org}/${repo}: ${err.message}`);
    return [];
  }
}

// ── On-chain contract verification ───────────────────────────────────────────

/**
 * Make a simple HTTPS GET request and return parsed JSON.
 * Used for block explorer API calls (Arbiscan, Etherscan).
 */
function explorerGet(hostname, path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname,
      path,
      method: "GET",
      headers: { "User-Agent": "livepeer-docs-bot" },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`Explorer parse error: ${data.substring(0, 200)}`)); }
      });
    });
    req.on("error", reject);
    req.end();
  });
}

/**
 * Verify an address on-chain: eth_getCode returns "0x" for EOAs, code for contracts.
 * Returns { address, network, deployed, codeSize } or null on API failure.
 *
 * @param {string} address - 0x-prefixed address
 * @param {"arbitrum"|"ethereum"} network
 * @returns {object|null}
 */
async function verifyAddress(address, network) {
  const hostname = network === "arbitrum" ? "api.arbiscan.io" : "api.etherscan.io";
  const apiKey = network === "arbitrum" ? ARBISCAN_API_KEY : ETHERSCAN_API_KEY;
  const keyParam = apiKey ? `&apikey=${apiKey}` : "";
  const path = `/api?module=proxy&action=eth_getCode&address=${address}&tag=latest${keyParam}`;

  try {
    const res = await explorerGet(hostname, path);
    if (res.status === "0" && res.message !== "OK") {
      console.log(`    ${network} verify failed for ${address}: ${res.message}`);
      return null;
    }
    const code = res.result || "0x";
    const deployed = code !== "0x" && code.length > 2;
    return { address, network, deployed, codeSize: Math.floor((code.length - 2) / 2) };
  } catch (err) {
    console.log(`    ${network} verify error for ${address}: ${err.message}`);
    return null;
  }
}

/**
 * For a commit entry on a contract target, fetch the diff and verify any new addresses found.
 * Returns an array of verification results to attach to the changelog entry.
 *
 * @param {object} commit - Normalised commit entry (_isCommit: true)
 * @param {object} target - Changelog target (contract: true, github: {...})
 * @returns {Array} Verification results
 */
async function verifyContractChanges(commit, target) {
  if (!commit._isCommit || !target.contract) return [];

  const { org, repo } = target.github;
  try {
    const diff = await githubGet(`/repos/${org}/${repo}/commits/${commit.sha}`);
    if (!diff.files || !Array.isArray(diff.files)) return [];

    // Extract Ethereum addresses from changed files
    const addressPattern = /0x[0-9a-fA-F]{40}/g;
    const addresses = new Set();

    for (const file of diff.files) {
      const patch = file.patch || "";
      // Only look at added lines (lines starting with +)
      const addedLines = patch.split("\n").filter((l) => l.startsWith("+"));
      for (const line of addedLines) {
        const found = line.match(addressPattern) || [];
        for (const addr of found) addresses.add(addr);
      }
    }

    if (addresses.size === 0) return [];

    console.log(`  Verifying ${addresses.size} address(es) from commit ${commit.tag_name}...`);
    const results = [];
    for (const address of addresses) {
      // Check both networks — governance contracts span Arbitrum + Ethereum
      const arbResult = await verifyAddress(address, "arbitrum");
      const ethResult = await verifyAddress(address, "ethereum");
      if (arbResult) results.push(arbResult);
      if (ethResult) results.push(ethResult);
    }
    return results;
  } catch (err) {
    console.log(`  Could not verify contract changes for ${commit.sha}: ${err.message}`);
    return [];
  }
}

/**
 * Build a commit-style Update block (mode: commits).
 * No release notes ScrollBox — commit messages are the primary content.
 * Contract verifications rendered as a verification table when present.
 */
function buildCommitUpdateBlock(commit, verifications, target) {
  const displayName = target.displayName || target.key;
  const shortSha = commit.tag_name;
  const date = formatDateLabel(commit.published_at);
  const tags = commit._isCommit ? ["Commit"] : classifyTags(commit.body);
  const tagsStr = tags.map((t) => `"${t}"`).join(", ");
  const esc = (s) => s.replace(/"/g, '\\"');
  const commitMessage = cleanForMdx(commit.body || commit.name || shortSha);

  // Use first line of commit message as the label (truncate at 60 chars), SHA as fallback
  // Strip quotes from labels — MDX JSX attributes cannot contain escaped quotes
  const firstLine = (commit.name || commit.body || shortSha).split("\n")[0].trim();
  const stripped = firstLine.replace(/"/g, "'");
  const label = stripped.length > 60 ? stripped.substring(0, 57) + "..." : stripped;
  const cleanLabel = cleanForMdx(label);
  const rssTitle = `${displayName}: ${cleanLabel}`;

  let block = "";
  block += `<Update label="${esc(cleanLabel)}" tags={[${tagsStr}]} rss={{ title: "${esc(rssTitle)}", description: "${esc(commit.name || shortSha)}" }} description={<div style={{fontSize: "0.8rem", fontWeight: 700, color: "var(--hero-text)"}}>${date}</div>}>\n`;
  block += `  ## ${cleanLabel}\n\n`;

  // Commit message in a ScrollBox if multi-line
  const lines = commitMessage.split("\n").filter(Boolean);
  if (lines.length > 1) {
    const indented = lines.map((l) => `    ${l}`).join("\n");
    block += `  <ScrollBox maxHeight="150px" showHint={false}>\n${indented}\n  </ScrollBox>\n\n`;
  } else {
    block += `  ${commitMessage}\n\n`;
  }

  // Contract verification table
  if (verifications && verifications.length > 0) {
    block += `  <span style={{display: "inline-flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.5rem"}}><Icon icon="shield-check" size={14} /> _On-chain verification_</span>\n\n`;
    const deployed = verifications.filter((v) => v && v.deployed);
    const notFound = verifications.filter((v) => v && !v.deployed);
    if (deployed.length > 0) {
      block += `  **Verified contracts:** ${deployed.map((v) => `\`${v.address}\` (${v.network})`).join(", ")}\n\n`;
    }
    if (notFound.length > 0) {
      block += `  **Not deployed:** ${notFound.map((v) => `\`${v.address}\` (${v.network})`).join(", ")}\n\n`;
    }
  }

  const icon = commit._source === "gitlab" ? "gitlab" : "github";
  const platform = commit._source === "gitlab" ? "GitLab" : "GitHub";
  block += `  <DoubleIconLink label="View commit on ${platform}" href="${commit.html_url}" iconLeft="${icon}" />\n`;
  block += `</Update>\n`;

  return block;
}

/**
 * Fetch releases from one repo, annotating each with repo metadata.
 */
async function fetchRepoReleases(owner, repoName, repoLabel) {
  try {
    const releases = await githubGet(
      `/repos/${owner}/${repoName}/releases?per_page=${LIMIT}`
    );

    if (!Array.isArray(releases) || releases.length === 0) {
      return [];
    }

    // Filter: skip prereleases, drafts, and the "preview" tag
    const versioned = releases.filter(
      (r) => !r.prerelease && !r.draft && r.tag_name !== "preview"
    );

    // Annotate each release with repo context
    return versioned.map((r) => ({
      ...r,
      _repo: repoName,
      _repoLabel: repoLabel,
      _source: "github",
    }));
  } catch (err) {
    console.log(`  Error fetching ${owner}/${repoName}: ${err.message}`);
    return [];
  }
}

/**
 * Process a single changelog target. Branches on target.mode:
 *   "releases" → existing GitHub/GitLab release fetching (default behaviour)
 *   "commits"  → fetchCommitEntries() + optional verifyContractChanges()
 *
 * @param {object} target - Resolved changelog target from loadChangelogTargets()
 */
async function processTarget(target) {
  const displayName = target.displayName || target.key;
  // Use outputPath from config — no longer hardcoded to v2/solutions/
  const changelogPath = path.join(REPO_ROOT, target.outputPath);
  const mode = target.mode || "releases";

  // Build source description for logging
  const sources = [];
  if (target.github) sources.push(`GitHub: ${target.github.org}/${target.github.repo || target.github.mainRepo}`);
  if (target.gitlab) sources.push(`GitLab: ${target.gitlab.projectPath}`);
  console.log(`\n═══ ${displayName} [${mode}] (${sources.join(" + ")}) ═══`);

  if (!fs.existsSync(changelogPath)) {
    console.log(`  Changelog file not found: ${changelogPath} — skipping.`);
    return;
  }

  // --regenerate: wipe all entries, keep the template header up to the automation zone marker
  if (REGENERATE) {
    const marker = "────────────────────────────────────────────── */}";
    const existingContent = fs.readFileSync(changelogPath, "utf8");
    const markerIdx = existingContent.indexOf(marker);
    if (markerIdx !== -1) {
      const truncated = existingContent.slice(0, markerIdx + marker.length) + "\n";
      if (!DRY_RUN) {
        fs.writeFileSync(changelogPath, truncated);
        console.log(`  --regenerate: wiped existing entries, kept template header.`);
      } else {
        console.log(`  --regenerate (dry-run): would wipe existing entries.`);
      }
    }
  }

  // ── Mode: commits ────────────────────────────────────────────────────────────────
  if (mode === "commits") {
    if (!target.github) {
      console.error(`  ERROR: mode:commits requires github config in changelogs.${target.key}`);
      return;
    }

    const commits = await fetchCommitEntries(target);
    console.log(`  Fetched ${commits.length} commit(s)`);

    if (commits.length === 0) {
      console.log("  No commits found.");
      return;
    }

    const existing = fs.readFileSync(changelogPath, "utf8");
    const newCommits = commits.filter((c) => !existing.includes(`## ${c.tag_name}`));

    if (newCommits.length === 0) {
      console.log("  All commits already in changelog. Nothing to do.");
      return;
    }

    console.log(`  ${newCommits.length} new commit(s) to add.`);

    const blocks = [];
    for (const commit of newCommits) {
      let verifications = [];
      if (target.contract || CONTRACT) {
        verifications = await verifyContractChanges(commit, target);
      }
      blocks.push(buildCommitUpdateBlock(commit, verifications, target));
    }

    const output = blocks.join("\n");
    const marker = "────────────────────────────────────────────── */}";
    const markerIdx = existing.indexOf(marker);

    if (markerIdx === -1) {
      console.error(`  ERROR: Could not find automation zone marker in ${changelogPath}`);
      return;
    }

    const insertAt = markerIdx + marker.length;
    const updated = existing.slice(0, insertAt) + "\n\n" + output + "\n" + existing.slice(insertAt);

    if (DRY_RUN) {
      console.log(`\n  ── DRY RUN ── Would write to ${changelogPath}:\n`);
      console.log(output);
      console.log(`\n  ── ${newCommits.length} block(s) would be added.`);
      return;
    }

    fs.writeFileSync(changelogPath, updated);
    console.log(`  Written ${newCommits.length} new commit(s) to ${changelogPath}`);
    return;
  }

  // ── Mode: releases (default) ─────────────────────────────────────────────────────────────────────────
  const hasGitHub = target.github && (target.github.releasesActive || target.github.mainRepo || target.github.repo);
  const hasGitLab = target.gitlab && target.gitlab.releasesActive;
  const gitlabIsPrimary = hasGitLab && target.gitlab.primary;

  // Fetch releases from GitHub
  let githubReleases = [];
  if (hasGitHub) {
    const owner = target.github.org;
    const changelogRepos = target.github.changelogRepos || [
      { repo: target.github.mainRepo || target.github.repo, label: target.github.mainRepo || target.github.repo },
    ];
    for (const { repo, label } of changelogRepos) {
      const releases = await fetchRepoReleases(owner, repo, label);
      console.log(`  GitHub ${repo}: ${releases.length} versioned release(s)`);
      githubReleases.push(...releases);
    }
  }

  // Fetch releases from GitLab
  let gitlabReleases = [];
  if (hasGitLab) {
    const changelogRepos = target.gitlab.changelogRepos || [
      { projectId: target.gitlab.projectId, projectPath: target.gitlab.projectPath, label: displayName },
    ];
    for (const { projectId, label } of changelogRepos) {
      const releases = await fetchGitLabRepoReleases(
        target.gitlab.instanceUrl,
        projectId,
        label
      );
      console.log(`  GitLab ${projectId}: ${releases.length} versioned release(s)`);
      gitlabReleases.push(...releases);
    }
  }

  // Merge and deduplicate if both sources active
  let allReleases;
  if (hasGitHub && hasGitLab) {
    allReleases = mergeReleases(githubReleases, gitlabReleases, gitlabIsPrimary);
    console.log(`  Merged: ${allReleases.length} unique release(s) (${githubReleases.length} GitHub + ${gitlabReleases.length} GitLab, deduplicated)`);
  } else {
    allReleases = [...githubReleases, ...gitlabReleases];
  }

  if (allReleases.length === 0) {
    console.log("  No releases found across any source.");
    return;
  }

  // Sort by date (newest first)
  allReleases.sort(
    (a, b) =>
      new Date(b.published_at || b.created_at) -
      new Date(a.published_at || a.created_at)
  );

  // Read existing changelog — use repo:tag as unique key to avoid collisions
  const existing = fs.readFileSync(changelogPath, "utf8");
  const newReleases = allReleases.filter((r) => {
    const uniqueHeading = `## ${r._repoLabel}: ${r.tag_name}`;
    const legacyHeading = `## ${r.tag_name}`;
    return !existing.includes(uniqueHeading) && !existing.includes(legacyHeading);
  });

  if (newReleases.length === 0) {
    console.log("  All releases already in changelog. Nothing to do.");
    return;
  }

  console.log(`  ${newReleases.length} new release(s) to add.`);

  // Determine if this is a multi-repo product (GitHub side)
  const githubChangelogRepos = (hasGitHub && target.github.changelogRepos) || [];
  const isMultiRepo = githubChangelogRepos.length > 1;
  const owner = hasGitHub ? target.github.org : "";

  // Generate Update blocks
  const blocks = [];
  for (const release of newReleases) {
    const repo = release._repo;
    const repoLabel = release._repoLabel;
    const releaseDisplayName = isMultiRepo
      ? `${displayName} ${repoLabel}`
      : displayName;
    const labelForBlock = isMultiRepo ? repoLabel : null;

    // Find previous tag within the same source for commit comparison
    const sameSourceReleases = allReleases.filter(
      (r) => r._source === release._source && r._repo === repo
    );
    const currentIdx = sameSourceReleases.indexOf(release);
    const prevTag =
      currentIdx < sameSourceReleases.length - 1
        ? sameSourceReleases[currentIdx + 1].tag_name
        : null;

    // Pass GitLab config for commit fetching when source is GitLab
    const gitlabConfig = release._source === "gitlab" ? target.gitlab : null;

    if (ENHANCE) {
      blocks.push(
        await generateUpdateBlockEnhanced(
          release,
          prevTag,
          owner,
          repo,
          releaseDisplayName,
          labelForBlock,
          gitlabConfig
        )
      );
    } else {
      blocks.push(generateUpdateBlockRaw(release, releaseDisplayName, labelForBlock));
    }
  }

  const output = blocks.join("\n");

  // Find insertion point: after the automation zone comment
  const marker = "────────────────────────────────────────────── */}";
  const markerIdx = existing.indexOf(marker);

  if (markerIdx === -1) {
    console.error(
      `  ERROR: Could not find automation zone marker in ${changelogPath}`
    );
    return;
  }

  const insertAt = markerIdx + marker.length;
  // Wrap all entries in LazyLoad for deferred rendering on long changelogs
  const wrappedOutput = `<LazyLoad height="600px">\n\n${output}\n</LazyLoad>\n`;
  const updated =
    existing.slice(0, insertAt) + "\n\n" + wrappedOutput + existing.slice(insertAt);

  if (DRY_RUN) {
    console.log(`\n  ── DRY RUN ── Would write to ${changelogPath}:\n`);
    console.log(output);
    console.log(`\n  ── ${newReleases.length} block(s) would be added.`);
    return;
  }

  fs.writeFileSync(changelogPath, updated);
  console.log(
    `  Written ${newReleases.length} new release(s) to ${changelogPath}`
  );
}


async function main() {
  const targets = loadChangelogTargets(CHANGELOG_KEY, CHANGELOG_CATEGORY);

  console.log(
    `Processing ${targets.length} changelog target(s) (limit: ${LIMIT} entries each)`
  );
  if (ENHANCE) {
    console.log(`LLM enhancement enabled (provider: ${LLM_PROVIDER})`);
  }
  if (CONTRACT) {
    console.log(`Contract mode: on-chain verification enabled`);
  }

  for (const target of targets) {
    await processTarget(target);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
