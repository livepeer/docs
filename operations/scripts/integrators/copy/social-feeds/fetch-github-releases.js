/**
 * @script            fetch-github-releases
 * @category          integrator
 * @type              integrator
 * @concern           content
 * @niche             data/fetching
 * @purpose           infrastructure:data-feeds
 * @description       Fetches latest GitHub Releases via public REST API, writes per-product JSX data files.
 * @domain            docs
 * @needs             F-R1
 * @purpose-statement Fetches GitHub Releases for configured solutions and writes per-solution release data modules under snippets/data/social-feed-solutions/.
 * @mode              generate
 * @pipeline          config → GitHub REST API → snippets/data/social-feed-solutions/{product}/githubReleasesData.jsx
 * @scope             .github/scripts, snippets/data/social-feed-solutions/
 * @usage             node .github/scripts/fetch-github-releases.js
 * @policy            Public repos only. No auth needed for public repos. GITHUB_TOKEN optional for rate limits.
 */
const https = require("https");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.join(process.cwd(), "operations/scripts/config/mdx-sanitise"));

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const CONFIG_PATH =
  process.env.CONFIG_PATH || "operations/scripts/config/product-social-config.json";
const LIMIT = parseInt(process.env.LIMIT || "5", 10);

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

// escapeForJSX — uses shared escapeForJsx with entity stripping + newline collapsing
const escapeForJSX = (str) => escapeForJsx(str, { stripEntities: true }).replace(/\n/g, " ");

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function main() {
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  const products = config.products || {};

  for (const [productKey, productConfig] of Object.entries(products)) {
    const gh = productConfig.github;
    if (!gh || !gh.releasesActive) {
      console.log(`${productKey}: no active releases, skipping`);
      continue;
    }

    const owner = gh.org;
    const repo = gh.mainRepo;
    console.log(`Processing ${productKey} (${owner}/${repo})...`);

    try {
      const releases = await githubGet(
        `/repos/${owner}/${repo}/releases?per_page=${LIMIT}`
      );

      if (!Array.isArray(releases) || releases.length === 0) {
        console.log(`  No releases found`);
        continue;
      }

      console.log(`  Found ${releases.length} releases`);

      const items = releases.map((r) => ({
        tagName: r.tag_name,
        name: r.name || r.tag_name,
        href: r.html_url,
        author: `By @${r.author?.login || "unknown"}`,
        publishedDate: formatDate(r.published_at || r.created_at),
        body: (r.body || "").substring(0, 800),
        prerelease: r.prerelease,
        draft: r.draft,
      }));

      // Generate JSX export
      const exportName = `${productKey.replace(/-/g, "")}ReleasesData`;
      let jsx = `export const ${exportName} = [\n`;
      items.forEach((item, idx) => {
        jsx += `  {\n`;
        jsx += `    tagName: "${escapeForJSX(item.tagName)}",\n`;
        jsx += `    name: "${escapeForJSX(item.name)}",\n`;
        jsx += `    href: "${item.href}",\n`;
        jsx += `    author: "${escapeForJSX(item.author)}",\n`;
        jsx += `    publishedDate: "${item.publishedDate}",\n`;
        jsx += `    body: "${escapeForJSX(item.body)}...",\n`;
        jsx += `    prerelease: ${item.prerelease}\n`;
        jsx += `  }${idx < items.length - 1 ? "," : ""}\n`;
      });
      jsx += `];\n`;

      const outDir = `snippets/data/social-feed-solutions/${productKey}`;
      fs.mkdirSync(outDir, { recursive: true });
      const outPath = path.join(outDir, "githubReleasesData.jsx");
      fs.writeFileSync(outPath, jsx);
      console.log(`  Written to ${outPath}`);
    } catch (err) {
      console.error(`  Error fetching ${productKey}: ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
