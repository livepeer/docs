/**
 * @script            fetch-github-discussions
 * @type              automation
 * @concern           content
 * @niche             data/fetching
 * @purpose           infrastructure:data-feeds
 * @description       Fetches latest GitHub Discussions via public GraphQL API, writes per-product JSX data files.
 * @mode              generate
 * @pipeline          config → GitHub GraphQL API → snippets/automations/{product}/githubDiscussionsData.jsx
 * @scope             .github/scripts, snippets/automations/
 * @usage             node .github/scripts/fetch-github-discussions.js
 * @policy            Public repos only. Uses GITHUB_TOKEN for rate limits (optional for public repos).
 */
const https = require("https");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.resolve(__dirname, "../../operations/scripts/config/mdx-sanitise"));

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const CONFIG_PATH =
  process.env.CONFIG_PATH || "operations/scripts/config/product-social-config.json";
const LIMIT = parseInt(process.env.LIMIT || "5", 10);

function graphqlQuery(query, variables) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query, variables });
    const headers = {
      "Content-Type": "application/json",
      "User-Agent": "livepeer-docs-bot",
    };
    if (GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
    }

    const options = {
      hostname: "api.github.com",
      path: "/graphql",
      method: "POST",
      headers,
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.errors) {
            reject(
              new Error(
                `GraphQL errors: ${JSON.stringify(parsed.errors)}`
              )
            );
          } else {
            resolve(parsed.data);
          }
        } catch (e) {
          reject(new Error(`Parse error: ${data.substring(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

const escapeForJSX = (str) => escapeForJsx(str, { stripEntities: true }).replace(/\n/g, " ");

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function fetchDiscussions(owner, repo, limit) {
  const query = `
    query($owner: String!, $repo: String!, $limit: Int!) {
      repository(owner: $owner, name: $repo) {
        discussions(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            title
            url
            author { login }
            createdAt
            updatedAt
            bodyText
            comments { totalCount }
            category { name emoji }
            upvoteCount
          }
        }
      }
    }
  `;

  const data = await graphqlQuery(query, { owner, repo, limit });
  const discussions = data?.repository?.discussions?.nodes || [];

  return discussions.map((d) => ({
    title: d.title,
    href: d.url,
    author: `By @${d.author?.login || "unknown"}`,
    content: (d.bodyText || "").substring(0, 500),
    datePosted: formatDate(d.createdAt),
    updatedDate: formatDate(d.updatedAt),
    commentCount: d.comments?.totalCount || 0,
    category: d.category?.name || "",
    categoryEmoji: d.category?.emoji || "",
    upvotes: d.upvoteCount || 0,
  }));
}

async function main() {
  if (!GITHUB_TOKEN) {
    console.warn(
      "Warning: GITHUB_TOKEN not set. Public repo access may be rate-limited."
    );
  }

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  const products = config.products || {};

  for (const [productKey, productConfig] of Object.entries(products)) {
    const gh = productConfig.github;
    if (!gh || !gh.discussionsEnabled) {
      console.log(`${productKey}: discussions not enabled, skipping`);
      continue;
    }

    const owner = gh.org;
    const repo = gh.mainRepo;
    console.log(`Processing ${productKey} (${owner}/${repo})...`);

    try {
      const discussions = await fetchDiscussions(owner, repo, LIMIT);
      console.log(`  Found ${discussions.length} discussions`);

      // Generate JSX export
      const exportName = `${productKey.replace(/-/g, "")}DiscussionsData`;
      let jsx = `export const ${exportName} = [\n`;
      discussions.forEach((item, idx) => {
        jsx += `  {\n`;
        jsx += `    title: "${escapeForJSX(item.title)}",\n`;
        jsx += `    href: "${item.href}",\n`;
        jsx += `    author: "${escapeForJSX(item.author)}",\n`;
        jsx += `    content: "${escapeForJSX(item.content)}...",\n`;
        jsx += `    datePosted: "${item.datePosted}",\n`;
        jsx += `    updatedDate: "${item.updatedDate}",\n`;
        jsx += `    commentCount: ${item.commentCount},\n`;
        jsx += `    category: "${escapeForJSX(item.category)}",\n`;
        jsx += `    upvotes: ${item.upvotes}\n`;
        jsx += `  }${idx < discussions.length - 1 ? "," : ""}\n`;
      });
      jsx += `];\n`;

      const outDir = `snippets/automations/solutions/${productKey}`;
      fs.mkdirSync(outDir, { recursive: true });
      const outPath = path.join(outDir, "githubDiscussionsData.jsx");
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
