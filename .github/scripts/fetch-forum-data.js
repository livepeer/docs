/**
 * @script            fetch-forum-data
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             .github/scripts
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement Fetches latest topics and posts from Livepeer Forum API, writes to snippets/automations/forum/
 * @pipeline          P5, P6
 * @usage             node .github/scripts/fetch-forum-data.js [flags]
 */
const https = require("https");
const fs = require("fs");

// Fetch JSON from URL
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
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
  cleanHTML = cleanHTML.replace(
    /<a[^>]*name="[^"]*"[^>]*class="anchor"[^>]*>.*?<\/a>/g,
    ""
  );

  // Clean up headings
  cleanHTML = cleanHTML.replace(/<h1[^>]*>(.*?)<\/h1>/g, "<h3>$1</h3>");
  cleanHTML = cleanHTML.replace(/<h2[^>]*>(.*?)<\/h2>/g, "<h4>$1</h4>");
  cleanHTML = cleanHTML.replace(/<h3[^>]*>(.*?)<\/h3>/g, "<h5>$1</h5>");
  cleanHTML = cleanHTML.replace(/<h[4-6][^>]*>(.*?)<\/h[4-6]>/g, "<h6>$1</h6>");

  // Clean up images and their references
  cleanHTML = cleanHTML.replace(/<a[^>]*class="lightbox"[^>]*>.*?<\/a>/g, "");
  cleanHTML = cleanHTML.replace(
    /<div[^>]*class="lightbox-wrapper"[^>]*>.*?<\/div>/g,
    ""
  );
  cleanHTML = cleanHTML.replace(/<img[^>]*>/g, "");
  cleanHTML = cleanHTML.replace(/\[!\[.*?\]\(.*?\)\]\(.*?\)/g, "");
  cleanHTML = cleanHTML.replace(/image\d+×\d+\s+[\d.]+\s*[KM]B/gi, "");

  // Keep paragraphs, lists, emphasis, code
  cleanHTML = cleanHTML.replace(/<p>/g, "<p>");
  cleanHTML = cleanHTML.replace(/<\/p>/g, "</p>");
  cleanHTML = cleanHTML.replace(/<ul>/g, "<ul>");
  cleanHTML = cleanHTML.replace(/<\/ul>/g, "</ul>");
  cleanHTML = cleanHTML.replace(/<ol>/g, "<ol>");
  cleanHTML = cleanHTML.replace(/<\/ol>/g, "</ol>");
  cleanHTML = cleanHTML.replace(/<li>/g, "<li>");
  cleanHTML = cleanHTML.replace(/<\/li>/g, "</li>");
  cleanHTML = cleanHTML.replace(
    /<strong>(.*?)<\/strong>/g,
    "<strong>$1</strong>"
  );
  cleanHTML = cleanHTML.replace(/<em>(.*?)<\/em>/g, "<em>$1</em>");
  cleanHTML = cleanHTML.replace(/<code>(.*?)<\/code>/g, "<code>$1</code>");

  // Simplify links
  cleanHTML = cleanHTML.replace(
    /<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g,
    '<a href="$1" target="_blank">$2</a>'
  );

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

async function main() {
  console.log("Fetching latest topics...");
  const latestData = await fetchJSON("https://forum.livepeer.org/latest.json");

  const topics = latestData.topic_list?.topics || [];
  console.log(`Found ${topics.length} topics`);

  // Filter out old pinned topics
  const filteredTopics = topics.filter((t) => !isOldPinned(t));
  console.log(`After filtering: ${filteredTopics.length} topics`);

  // Get top 4
  const top4 = filteredTopics.slice(0, 4);
  console.log(`Processing top 4 topics...`);

  const processedTopics = [];

  for (const topic of top4) {
    console.log(`Processing topic ${topic.id}: ${topic.title}`);

    // Fetch full topic data
    const topicData = await fetchJSON(
      `https://forum.livepeer.org/t/${topic.id}.json`
    );

    // Extract first post
    const firstPost = topicData.post_stream?.posts?.find(
      (p) => p.post_number === 1
    );

    if (!firstPost) {
      console.log(`  No first post found, skipping`);
      continue;
    }

    const htmlContent = cleanAndFormatHTML(firstPost.cooked || "");
    const datePosted = topic.created_at
      ? new Date(topic.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

    processedTopics.push({
      title: topic.title,
      href: `https://forum.livepeer.org/t/${topic.id}`,
      author: `By ${firstPost.name || firstPost.username || "Unknown"} (@${
        firstPost.username || "unknown"
      })`,
      content: htmlContent,
      replyCount: (topic.posts_count || 1) - 1,
      datePosted: datePosted,
    });
  }

  console.log(`Processed ${processedTopics.length} topics`);

  // Generate JavaScript export with exact formatting
  let jsExport = "export const forumData = [\n";

  processedTopics.forEach((item, index) => {
    jsExport += "  {\n";
    jsExport += `    title: "${item.title
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')}",\n`;
    jsExport += `    href: "${item.href}",\n`;
    jsExport += `    author: "${item.author
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')}",\n`;

    // Content with proper escaping and indentation
    const escapedContent = item.content
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\n/g, " ");

    jsExport += `    content:\n      "${escapedContent}",\n`;
    jsExport += `    replyCount: ${item.replyCount},\n`;
    jsExport += `    datePosted: "${item.datePosted}",\n`;
    jsExport += "  }";

    if (index < processedTopics.length - 1) {
      jsExport += ",";
    }
    jsExport += "\n";
  });

  jsExport += "];\n";

  // Write to file
  const outputPath = "snippets/automations/forum/forumData.jsx";
  fs.mkdirSync("snippets/automations/forum", { recursive: true });
  fs.writeFileSync(outputPath, jsExport);
  console.log(`Written to ${outputPath}`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
