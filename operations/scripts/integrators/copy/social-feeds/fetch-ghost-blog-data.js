/**
 * @script      fetch-ghost-blog-data
 * @type        integrator
 * @concern     copy
 * @niche       social-feeds
 * @purpose     Fetch Livepeer blog posts from the Ghost blog public RSS feed and emit a JSX module the Community pages render as the live blog feed
 * @description Reads RSS XML from the public Livepeer Ghost blog endpoint, parses entries (title, link, pubDate, excerpt, author), writes a sorted JSX export to snippets/data/social-feeds/ghostBlogData.jsx. No auth required.
 * @mode        integrate
 * @pipeline    P5 (scheduled) via dispatch-social-feeds.js
 * @scope       Livepeer Ghost RSS feed (read-only) → snippets/data/social-feeds/ghostBlogData.jsx
 * @usage       node operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js [--dry-run]
 * @policy      F-R1 (data freshness)
 */
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.join(process.cwd(), "operations/scripts/config/mdx-sanitise"));

const dryRun = process.argv.includes("--dry-run");

const RSS_URL = process.env.GHOST_RSS_URL || "https://blog.livepeer.org/rss/";
const LIMIT = parseInt(process.env.LIMIT || "4", 10);
const OUTPUT_PATH = "snippets/data/social-feeds/ghostBlogData.jsx";

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "livepeer-docs-bot" } }, (res) => {
        // Follow redirects — resolve relative locations (e.g. `/path`) against the request URL.
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = new URL(res.headers.location, url).toString();
          return fetchUrl(next).then(resolve).catch(reject);
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

const escapeForJSX = (str) => escapeForJsx(str, { stripEntities: true }).replace(/\n/g, " ");

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function extractTag(xml, tag) {
  const cdataRegex = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`,
    "i"
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const m = xml.match(regex);
  return m ? m[1].trim() : "";
}

function extractEnclosureUrl(xml) {
  // Ghost RSS puts feature images in <media:content> or <enclosure>
  const media = xml.match(/<media:content[^>]*url="([^"]*)"/i);
  if (media) return media[1];
  const enc = xml.match(/<enclosure[^>]*url="([^"]*)"/i);
  return enc ? enc[1] : "";
}

function stripHTML(html) {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function parseRSS(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const description = extractTag(item, "description");
    const contentEncoded = extractTag(item, "content:encoded");
    const excerpt = stripHTML(description || contentEncoded).substring(0, 500);

    items.push({
      title: extractTag(item, "title"),
      href: extractTag(item, "link"),
      author: extractTag(item, "dc:creator") || extractTag(item, "author") || "",
      datePosted: formatDate(extractTag(item, "pubDate")),
      img: extractEnclosureUrl(item),
      excerpt,
    });
  }
  return items;
}

async function main() {
  console.log(`Fetching Ghost RSS: ${RSS_URL}`);
  const xml = await fetchUrl(RSS_URL);
  const items = parseRSS(xml).slice(0, LIMIT);

  if (items.length === 0) {
    // KNOWN GAP (2026-05-25): the Livepeer Ghost blog migrated from blog.livepeer.org to
    // livepeer.org/blog (Next.js site) — the new site does not expose RSS. The fetch above
    // follows redirects to a 404 HTML page, parseRSS finds 0 items.
    // Skip cleanly (exit 0) so the dispatcher doesn't fail; preserve the existing
    // snippets/data/social-feeds/ghostBlogData.jsx (consumed by Home → Trending page).
    // TODO: find new RSS endpoint OR replace with a scraper for livepeer.org/blog.
    console.log(`fetch-ghost-blog-data: SKIP — source returned 0 items (Ghost blog migrated; existing data preserved)`);
    process.exit(0);
  }
  console.log(`Parsed ${items.length} posts`);

  let jsx = "export const ghostData = [\n";
  items.forEach((item, idx) => {
    jsx += "  {\n";
    jsx += `    title: "${escapeForJSX(item.title)}",\n`;
    jsx += `    href: "${escapeForJSX(item.href)}",\n`;
    jsx += `    author: "${escapeForJSX(item.author ? `By ${item.author}` : "By Livepeer Team")}",\n`;
    jsx += `    datePosted: "${item.datePosted}",\n`;
    jsx += `    img: "${escapeForJSX(item.img)}",\n`;
    jsx += `    excerpt: "${escapeForJSX(item.excerpt)}"\n`;
    jsx += `  }${idx < items.length - 1 ? "," : ""}\n`;
  });
  jsx += "];\n";

  if (dryRun) {
    console.log(`[dry-run] Would write to ${OUTPUT_PATH} (${jsx.length} bytes)`);
    console.log(jsx);
  } else {
    fs.mkdirSync("snippets/data/social-feeds", { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, jsx);
    console.log(`Written to ${OUTPUT_PATH}`);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
