/**
 * @script      fetch-forum-data
 * @type        integrator
 * @concern     copy
 * @niche       social-feeds
 * @purpose     infrastructure:data-feeds
 * @description Fetches latest topics from Livepeer Forum API with category metadata, writes multiple sorted exports to snippets/data/social-feeds/forumData.jsx
 * @mode        integrate
 * @pipeline    manual
 * @scope       operations/scripts/integrators/copy/social-feeds
 * @usage       node operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js [--dry-run]
 * @policy      F-R1
 */
const https = require("https");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.join(process.cwd(), "operations/scripts/config/mdx-sanitise"));

const dryRun = process.argv.includes("--dry-run");
const TOPIC_LIMIT = 20;

const escapeStr = (str) => (str || "")
  .replace(/\\/g, "\\\\")
  .replace(/"/g, '\\"')
  .replace(/\n/g, " ");

// Fetch JSON from URL
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => { data += chunk; });
        res.on("end", () => {
          try { resolve(JSON.parse(data)); }
          catch (e) { reject(e); }
        });
      })
      .on("error", reject);
  });
}

// Check if topic is old pinned
function isOldPinned(topic) {
  const pinned = topic.pinned === true || topic.pinned_globally === true;
  if (!pinned) return false;
  const created = new Date(topic.created_at);
  const now = new Date();
  const ageDays = (now - created) / (1000 * 60 * 60 * 24);
  return ageDays > 30;
}

// Clean and format HTML
function cleanAndFormatHTML(html) {
  let cleanHTML = html;

  // Remove anchor navigation links
  cleanHTML = cleanHTML.replace(/<a[^>]*name="[^"]*"[^>]*class="anchor"[^>]*>.*?<\/a>/g, "");

  // Clean up headings
  cleanHTML = cleanHTML.replace(/<h1[^>]*>(.*?)<\/h1>/g, "<h3>$1</h3>");
  cleanHTML = cleanHTML.replace(/<h2[^>]*>(.*?)<\/h2>/g, "<h4>$1</h4>");
  cleanHTML = cleanHTML.replace(/<h3[^>]*>(.*?)<\/h3>/g, "<h5>$1</h5>");
  cleanHTML = cleanHTML.replace(/<h[4-6][^>]*>(.*?)<\/h[4-6]>/g, "<h6>$1</h6>");

  // Clean up images and their references
  cleanHTML = cleanHTML.replace(/<a[^>]*class="lightbox"[^>]*>.*?<\/a>/g, "");
  cleanHTML = cleanHTML.replace(/<div[^>]*class="lightbox-wrapper"[^>]*>.*?<\/div>/g, "");
  cleanHTML = cleanHTML.replace(/<img[^>]*>/g, "");
  cleanHTML = cleanHTML.replace(/\[!\[.*?\]\(.*?\)\]\(.*?\)/g, "");
  cleanHTML = cleanHTML.replace(/image\d+×\d+\s+[\d.]+\s*[KM]B/gi, "");

  // Simplify links
  cleanHTML = cleanHTML.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '<a href="$1" target="_blank">$2</a>');

  // Decode HTML entities
  cleanHTML = cleanHTML.replace(/&amp;/g, "&");
  cleanHTML = cleanHTML.replace(/&lt;/g, "<");
  cleanHTML = cleanHTML.replace(/&gt;/g, ">");
  cleanHTML = cleanHTML.replace(/&quot;/g, '"');
  cleanHTML = cleanHTML.replace(/&#39;/g, "'");
  cleanHTML = cleanHTML.replace(/&nbsp;/g, " ");

  // Clean up whitespace
  cleanHTML = cleanHTML.replace(/\s+/g, " ");
  cleanHTML = cleanHTML.replace(/<p>\s*<\/p>/g, "");

  return cleanHTML.trim();
}

function formatDate(isoStr) {
  if (!isoStr) return "";
  return new Date(isoStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function serializeItem(item) {
  return `  {
    title: "${escapeStr(item.title)}",
    href: "${item.href}",
    author: "${escapeStr(item.author)}",
    content: "${escapeStr(item.content)}",
    replyCount: ${item.replyCount},
    views: ${item.views},
    likeCount: ${item.likeCount},
    datePosted: "${item.datePosted}",
    lastActivity: "${item.lastActivity}",
    categoryId: ${item.categoryId},
    categoryName: "${escapeStr(item.categoryName)}",
    categoryColor: "${item.categoryColor}"
  }`;
}

function serializeArray(exportName, items) {
  return `export const ${exportName} = [\n${items.map(serializeItem).join(",\n")}\n];\n`;
}

async function main() {
  // Step 1: Fetch categories
  console.log("Fetching categories...");
  const catData = await fetchJSON("https://forum.livepeer.org/categories.json");
  const categoryMap = {};
  for (const cat of (catData.category_list?.categories || [])) {
    categoryMap[cat.id] = { name: cat.name, color: `#${cat.color}` };
  }
  console.log(`Found ${Object.keys(categoryMap).length} categories`);

  // Step 2: Fetch latest topics (sorted by last activity — Discourse default)
  console.log("Fetching latest topics...");
  const latestData = await fetchJSON("https://forum.livepeer.org/latest.json");

  const topics = latestData.topic_list?.topics || [];
  console.log(`Found ${topics.length} topics`);

  // Filter out old pinned topics
  const filteredTopics = topics.filter((t) => !isOldPinned(t));
  console.log(`After filtering: ${filteredTopics.length} topics`);

  // Take top N
  const topN = filteredTopics.slice(0, TOPIC_LIMIT);
  console.log(`Processing ${topN.length} topics...`);

  const processedTopics = [];

  for (const topic of topN) {
    console.log(`  ${topic.id}: ${topic.title}`);

    // Fetch full topic data for first post content
    const topicData = await fetchJSON(`https://forum.livepeer.org/t/${topic.id}.json`);
    const firstPost = topicData.post_stream?.posts?.find((p) => p.post_number === 1);

    if (!firstPost) {
      console.log(`    No first post found, skipping`);
      continue;
    }

    const htmlContent = cleanAndFormatHTML(firstPost.cooked || "");
    const cat = categoryMap[topic.category_id] || { name: "Uncategorized", color: "#808281" };

    processedTopics.push({
      title: topic.title,
      href: `https://forum.livepeer.org/t/${topic.id}`,
      author: `By ${firstPost.name || firstPost.username || "Unknown"} (@${firstPost.username || "unknown"})`,
      content: htmlContent,
      replyCount: (topic.posts_count || 1) - 1,
      views: topic.views || 0,
      likeCount: topic.like_count || 0,
      datePosted: formatDate(topic.created_at),
      lastActivity: formatDate(topic.bumped_at || topic.last_posted_at),
      categoryId: topic.category_id || 0,
      categoryName: cat.name,
      categoryColor: cat.color,
    });
  }

  console.log(`Processed ${processedTopics.length} topics`);

  // Step 3: Build sorted views
  const byActivity = [...processedTopics]; // already sorted by activity from API
  const byNewest = [...processedTopics].sort((a, b) =>
    new Date(b.datePosted) - new Date(a.datePosted)
  );
  const byViews = [...processedTopics].sort((a, b) => b.views - a.views);
  const byReplies = [...processedTopics].sort((a, b) => b.replyCount - a.replyCount);

  // Step 4: Serialize category map
  const catEntries = Object.entries(categoryMap)
    .map(([id, c]) => `  ${id}: { name: "${escapeStr(c.name)}", color: "${c.color}" }`)
    .join(",\n");
  const catExport = `export const forumCategories = {\n${catEntries}\n};\n`;

  // Step 5: Generate output
  let jsExport = "";
  jsExport += catExport + "\n";
  jsExport += serializeArray("forumData", byActivity) + "\n";
  jsExport += serializeArray("forumByActivity", byActivity) + "\n";
  jsExport += serializeArray("forumByNewest", byNewest) + "\n";
  jsExport += serializeArray("forumByViews", byViews) + "\n";
  jsExport += serializeArray("forumByReplies", byReplies) + "\n";

  // Step 6: Write
  const outputPath = "snippets/data/social-feeds/forumData.jsx";
  if (dryRun) {
    console.log(`[dry-run] Would write to ${outputPath} (${jsExport.length} bytes)`);
    console.log(jsExport);
  } else {
    fs.mkdirSync("snippets/data/social-feeds", { recursive: true });
    fs.writeFileSync(outputPath, jsExport);
    console.log(`Written to ${outputPath}`);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
