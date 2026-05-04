/**
 * @script      fetch-rss-blog-data
 * @type        integrator
 * @concern     copy
 * @niche       social-feeds
 * @purpose     infrastructure:data-feeds
 * @description Fetches product RSS feeds from config and writes per-solution blog data modules under snippets/data/social-feed-solutions/.
 * @mode        integrate
 * @pipeline    config → RSS feed → snippets/data/social-feed-solutions/{product}/blogData.jsx
 * @scope       .github/scripts, snippets/data/social-feed-solutions/
 * @usage       node operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js [--dry-run]
 * @policy      F-R1
 */
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.join(process.cwd(), "operations/scripts/config/mdx-sanitise"));

const dryRun = process.argv.includes("--dry-run");

const CONFIG_PATH =
  process.env.CONFIG_PATH || "operations/scripts/config/product-social-config.json";
const LIMIT = parseInt(process.env.LIMIT || "4", 10);

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "livepeer-docs-bot" } }, (res) => {
        // Follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchUrl(res.headers.location).then(resolve).catch(reject);
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

/**
 * Minimal RSS/Atom XML parser. Extracts items from <item> (RSS 2.0) or <entry> (Atom) tags.
 * Does NOT use a full XML library — intentionally lightweight for CI.
 */
function parseRSS(xml) {
  const items = [];

  // Try RSS 2.0 <item> tags first
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    items.push(parseRSSItem(match[1]));
  }

  // If no RSS items, try Atom <entry> tags
  if (items.length === 0) {
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/gi;
    while ((match = entryRegex.exec(xml)) !== null) {
      items.push(parseAtomEntry(match[1]));
    }
  }

  return items;
}

function extractTag(xml, tag) {
  // Handle CDATA
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

function extractAttr(xml, tag, attr) {
  const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, "i");
  const m = xml.match(regex);
  return m ? m[1] : "";
}

function extractFirstImage(xml, contentHtml) {
  // Priority: media:content > enclosure > first <img> in content HTML
  const mediaContent = xml.match(/<media:content[^>]*url="([^"]*)"/i);
  if (mediaContent) return mediaContent[1];
  const enclosure = extractEnclosureUrl(xml);
  if (enclosure) return enclosure;
  const imgInContent = contentHtml.match(/<img[^>]*src="([^"]*)"/i);
  if (imgInContent) return imgInContent[1];
  return "";
}

function estimateReadingTime(text) {
  const words = text.split(/\s+/).filter(w => w.length > 0).length;
  return Math.max(1, Math.round(words / 200));
}

function stripFirstImage(html, imgUrl) {
  if (!imgUrl || !html) return html;
  // Remove the first <img> (or <figure> wrapping it) that matches the extracted hero image
  const escaped = imgUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Try removing <figure> containing the image first
  const figureRemoved = html.replace(new RegExp(`<figure[^>]*>\\s*<img[^>]*src="${escaped}"[^>]*/?>\\s*(?:<figcaption[\\s\\S]*?</figcaption>)?\\s*</figure>`, "i"), "");
  if (figureRemoved !== html) return figureRemoved;
  // Fall back to removing the bare <img> tag
  return html.replace(new RegExp(`<img[^>]*src="${escaped}"[^>]*/?>`, "i"), "");
}

function parseRSSItem(xml) {
  const contentHtml = extractTag(xml, "content:encoded") || extractTag(xml, "description") || "";
  const img = extractFirstImage(xml, contentHtml);
  const plainText = stripHTML(contentHtml);
  return {
    title: extractTag(xml, "title"),
    href: extractTag(xml, "link"),
    author: extractTag(xml, "dc:creator") || extractTag(xml, "author") || "",
    content: contentHtml,
    excerpt: plainText.substring(0, 500),
    datePosted: formatDate(
      extractTag(xml, "pubDate") || extractTag(xml, "dc:date") || ""
    ),
    img: img,
    readingTime: estimateReadingTime(plainText),
  };
}

function parseAtomEntry(xml) {
  return {
    title: extractTag(xml, "title"),
    href: extractAttr(xml, 'link[^>]*rel="alternate"', "href") || extractAttr(xml, "link", "href"),
    author: extractTag(xml, "name") || "",
    contentHtml: extractTag(xml, "content") || extractTag(xml, "summary") || "",
    content: stripHTML(
      extractTag(xml, "content") || extractTag(xml, "summary") || ""
    ).substring(0, 500),
    datePosted: formatDate(
      extractTag(xml, "published") || extractTag(xml, "updated") || ""
    ),
    img: "",
  };
}

function extractEnclosureUrl(xml) {
  const m = xml.match(/<enclosure[^>]*url="([^"]*)"/i);
  return m ? m[1] : "";
}

function stripHTML(html) {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

async function main() {
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  const products = config.products || {};

  for (const [productKey, productConfig] of Object.entries(products)) {
    const blog = productConfig.blog;
    if (!blog || !blog.rssUrl) {
      console.log(`${productKey}: no RSS feed configured, skipping`);
      continue;
    }

    // Skip products that use the existing Ghost API fetch (livepeer-studio)
    if (blog.fetchMethod === "ghost-api") {
      console.log(
        `${productKey}: uses Ghost API (existing script), skipping RSS fetch`
      );
      continue;
    }

    console.log(`Processing ${productKey} (${blog.rssUrl})...`);

    try {
      const xml = await fetchUrl(blog.rssUrl);
      const items = parseRSS(xml).slice(0, LIMIT);
      console.log(`  Parsed ${items.length} items`);

      if (items.length === 0) {
        console.log(`  No items found in RSS feed`);
        continue;
      }

      // Strip hero image from content if configured (avoids duplicate with card header)
      if (blog.stripHeroFromContent) {
        items.forEach((item) => {
          if (item.img) item.content = stripFirstImage(item.content, item.img);
        });
      }

      // Generate JSX export — Ghost-compatible shape (HTML content, backtick literals)
      const exportName = `${productKey.replace(/-/g, "")}BlogData`;
      const escapeBacktick = (s) => (s || "").replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
      let jsx = `export const ${exportName} = [\n`;
      items.forEach((item, idx) => {
        jsx += `{\n`;
        jsx += `  title: \`${escapeBacktick(item.title)}\`,\n`;
        jsx += `  href: \`${escapeBacktick(item.href)}\`,\n`;
        jsx += `  author: \`By ${escapeBacktick(item.author)}\`,\n`;
        jsx += `  content: \`${escapeBacktick(item.content)}\`,\n`;
        jsx += `  datePosted: \`${item.datePosted}\`,\n`;
        jsx += `  img: \`${escapeBacktick(item.img)}\`,\n`;
        jsx += `  excerpt: \`${escapeBacktick(item.excerpt)}\`,\n`;
        jsx += `  readingTime: ${item.readingTime}\n`;
        jsx += `}${idx < items.length - 1 ? "," : ""}\n`;
      });
      jsx += `];\n`;

      const outDir = `snippets/data/social-feed-solutions/${productKey}`;
      const outPath = path.join(outDir, "blogData.jsx");
      if (dryRun) {
        console.log(`[dry-run] Would write to ${outPath} (${jsx.length} bytes)`);
        console.log(jsx);
      } else {
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outPath, jsx);
        console.log(`  Written to ${outPath}`);
      }
    } catch (err) {
      console.error(`  Error fetching ${productKey}: ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
