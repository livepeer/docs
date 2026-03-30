/**
 * @script            fetch-youtube-data
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             .github/scripts
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement Fetches video data from YouTube Data API, writes to snippets/automations/youtube/
 * @pipeline          P5, P6
 * @usage             node .github/scripts/fetch-youtube-data.js [flags]
 */
const https = require("https");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.resolve(__dirname, "../../operations/scripts/config/mdx-sanitise"));

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID || "UCzfHtZnmUzMbJDxGCwIgY2g";
const PRODUCT_KEY = process.env.PRODUCT_KEY || "";
const CONFIG_PATH =
  process.env.CONFIG_PATH || "operations/scripts/config/product-social-config.json";

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", reject);
  });
}

function parseDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);

  return hours * 3600 + minutes * 60 + seconds;
}

const escapeForJSX = (str) => escapeForJsx(str, { stripEntities: true }).replace(/\n/g, " ");

/**
 * Resolve which channels to fetch. If PRODUCT_KEY is set, fetch only that product.
 * If PRODUCT_KEY is "all", iterate the config. Otherwise, use CHANNEL_ID env var (legacy).
 */
function resolveChannels() {
  if (PRODUCT_KEY && PRODUCT_KEY !== "all" && PRODUCT_KEY !== "") {
    try {
      const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
      const product = config.products?.[PRODUCT_KEY];
      if (product?.youtube?.channelId) {
        return [{ key: PRODUCT_KEY, channelId: product.youtube.channelId }];
      }
    } catch {}
    console.log(`Product ${PRODUCT_KEY} has no YouTube channelId, skipping`);
    return [];
  }

  if (PRODUCT_KEY === "all") {
    try {
      const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
      const channels = [];
      for (const [key, product] of Object.entries(config.products || {})) {
        if (product.youtube?.channelId) {
          channels.push({ key, channelId: product.youtube.channelId });
        }
      }
      return channels;
    } catch {}
    return [];
  }

  // Legacy: single channel via env var
  return [{ key: "", channelId: CHANNEL_ID }];
}

async function fetchChannel(channelId, outputPath) {
  // Step 1: Get recent videos
  console.log(`Fetching recent videos for channel ${channelId}...`);
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${YOUTUBE_API_KEY}`;
  const searchResults = await httpsGet(searchUrl);

  if (!searchResults.items || searchResults.items.length === 0) {
    console.log("No videos found");
    return;
  }

  // Step 2: Get video details for each video
  console.log(
    `Found ${searchResults.items.length} videos, fetching details...`
  );
  const videoIds = searchResults.items.map((item) => item.id.videoId).join(",");
  const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
  const detailsResults = await httpsGet(detailsUrl);

  // Step 3: Process and filter videos
  const videos = [];
  for (const video of detailsResults.items) {
    const duration = video.contentDetails.duration;
    const durationSeconds = parseDuration(duration);
    const snippet = video.snippet;

    // Skip upcoming/currently live streams — only show completed content
    const isUpcomingOrLive =
      snippet.liveBroadcastContent === "live" ||
      snippet.liveBroadcastContent === "upcoming";

    if (isUpcomingOrLive) continue;

    // Past livestreams are fine — check if it was one (for Shorts filter exemption)
    const isPastLivestream =
      duration === "P0D" ||
      duration === "PT0S" ||
      snippet.title.toLowerCase().includes("watercooler") ||
      snippet.title.toLowerCase().includes("fireside");

    // Filter out Shorts and short clips (under 3 minutes, not past livestreams)
    const isShort =
      durationSeconds < 180 && durationSeconds > 0 && !isPastLivestream;

    if (!isShort) {
      videos.push({
        title: snippet.title,
        href: `https://www.youtube.com/watch?v=${video.id}`,
        author: `By ${snippet.channelTitle || "Livepeer"}`,
        content: (snippet.description || "").substring(0, 500),
        publishedDate: new Date(snippet.publishedAt).toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric", year: "numeric" }
        ),
        duration: duration,
        thumbnailUrl: snippet.thumbnails.high.url,
      });
    }
  }

  console.log(`Filtered to ${videos.length} non-Short videos`);

  // Step 3b: Deduplicate by title (keep most recent — list is already date-sorted)
  const seenTitles = new Set();
  const deduped = [];
  for (const v of videos) {
    const normTitle = v.title.toLowerCase().trim();
    if (!seenTitles.has(normTitle)) {
      seenTitles.add(normTitle);
      deduped.push(v);
    }
  }
  if (deduped.length < videos.length) {
    console.log(`Deduplicated: ${videos.length} → ${deduped.length} (removed ${videos.length - deduped.length} title duplicates)`);
  }

  // Step 4: Generate JSX content
  const exportName = outputPath.includes("/")
    ? path.basename(outputPath, ".jsx")
    : "youtubeData";
  const jsxContent = `export const ${exportName} = [
${deduped
  .map(
    (v) => `  {
    title: '${escapeForJSX(v.title)}',
    href: '${v.href}',
    author: '${v.author}',
    content: '${escapeForJSX(v.content)}...',
    publishedDate: '${v.publishedDate}',
    duration: '${v.duration}',
    thumbnailUrl: '${v.thumbnailUrl}'
  }`
  )
  .join(",\n")}
];
`;

  // Step 5: Write to file
  const dir = path.dirname(outputPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outputPath, jsxContent);
  console.log(`Successfully wrote ${outputPath}`);
}

async function main() {
  const channels = resolveChannels();
  if (channels.length === 0) {
    console.log("No channels to fetch");
    return;
  }

  for (const { key, channelId } of channels) {
    const outputPath = key
      ? `snippets/automations/solutions/${key}/youtubeData.jsx`
      : "snippets/automations/youtube/youtubeData.jsx";
    await fetchChannel(channelId, outputPath);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
