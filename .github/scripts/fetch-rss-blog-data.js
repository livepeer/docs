/**
 * @script            fetch-rss-blog-data
 * @type              automation
 * @concern           content
 * @niche             data/fetching
 * @purpose           infrastructure:data-feeds
 * @description       Generic RSS blog fetcher. Reads product config, fetches RSS feeds (Ghost, Leaflet, etc.), writes per-product JSX data files.
 * @mode              generate
 * @pipeline          config → RSS feed → snippets/automations/{product}/blogData.jsx
 * @scope             .github/scripts, snippets/automations/
 * @usage             node .github/scripts/fetch-rss-blog-data.js
 * @policy            PUBLIC APIs / RSS only. No API keys for platforms we don't own.
 */
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

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

function escapeForJSX(str) {
  return (str || "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/"/g, '\\"')
    .replace(/\$/g, "\\$")
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201C|\u201D/g, '\\"')
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    .replace(/\u2022/g, "-")
    .replace(/\u2192/g, "->")
    .replace(/[\u00A0]/g, " ")
    .replace(/&[#\w]+;/g, "")
    .replace(/\n/g, " ")
    .replace(/\r/g, "")
    .replace(/\t/g, " ");
}

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

function parseRSSItem(xml) {
  return {
    title: extractTag(xml, "title"),
    href: extractTag(xml, "link"),
    author: extractTag(xml, "dc:creator") || extractTag(xml, "author") || "",
    content: stripHTML(
      extractTag(xml, "content:encoded") || extractTag(xml, "description") || ""
    ).substring(0, 500),
    datePosted: formatDate(
      extractTag(xml, "pubDate") || extractTag(xml, "dc:date") || ""
    ),
    img: extractEnclosureUrl(xml) || "",
  };
}

function parseAtomEntry(xml) {
  return {
    title: extractTag(xml, "title"),
    href: extractAttr(xml, 'link[^>]*rel="alternate"', "href") || extractAttr(xml, "link", "href"),
    author: extractTag(xml, "name") || "",
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

      // Generate JSX export
      const exportName = `${productKey.replace(/-/g, "")}BlogData`;
      let jsx = `export const ${exportName} = [\n`;
      items.forEach((item, idx) => {
        jsx += `  {\n`;
        jsx += `    title: "${escapeForJSX(item.title)}",\n`;
        jsx += `    href: "${escapeForJSX(item.href)}",\n`;
        jsx += `    author: "${escapeForJSX(item.author ? `By ${item.author}` : "")}",\n`;
        jsx += `    content: "${escapeForJSX(item.content)}...",\n`;
        jsx += `    datePosted: "${item.datePosted}",\n`;
        jsx += `    img: "${escapeForJSX(item.img)}"\n`;
        jsx += `  }${idx < items.length - 1 ? "," : ""}\n`;
      });
      jsx += `];\n`;

      const outDir = `snippets/automations/solutions/${productKey}`;
      fs.mkdirSync(outDir, { recursive: true });
      const outPath = path.join(outDir, "blogData.jsx");
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
