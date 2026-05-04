/**
 * @script      fetch-youtube-data
 * @type        integrator
 * @concern     copy
 * @niche       social-feeds
 * @purpose     infrastructure:data-feeds
 * @description Fetches video data from YouTube Data API, writes to snippets/data/social-feeds/
 * @mode        integrate
 * @pipeline    manual
 * @scope       .github/scripts
 * @usage       node operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js [--dry-run]
 * @policy      F-R1
 */
const https = require("https");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.join(process.cwd(), "operations/scripts/config/mdx-sanitise"));

const dryRun = process.argv.includes("--dry-run");

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

const escapeForJSX = (str) => escapeForJsx(str, { stripEntities: true }).replace(/\n/g, " ").replace(/'/g, "\\'" );

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

const SERIES_PATTERNS = [/watercooler/i, /fireside/i];
const isSeries = (v) => SERIES_PATTERNS.some((p) => p.test(v.title));
const MIN_NON_SERIES = 4;
const MAX_PAGES = 5;

async function fetchChannel(channelId, outputPath) {
  // Step 1: Paginate until we have enough non-series videos
  const videos = [];
  let pageToken = "";
  let page = 0;

  while (page < MAX_PAGES) {
    page++;
    const tokenParam = pageToken ? `&pageToken=${pageToken}` : "";
    console.log(`Fetching videos (page ${page})...`);
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${YOUTUBE_API_KEY}${tokenParam}`;
    const searchResults = await httpsGet(searchUrl);

    if (!searchResults.items || searchResults.items.length === 0) break;

    // Step 2: Get video details for this page
    const videoIds = searchResults.items.map((item) => item.id.videoId).join(",");
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
    const detailsResults = await httpsGet(detailsUrl);

    // Step 3: Process and filter videos
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
        isSeries({ title: snippet.title });

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

    const nonSeriesCount = videos.filter((v) => !isSeries(v)).length;
    console.log(`  Page ${page}: ${videos.length} total videos (${nonSeriesCount} non-series)`);

    // Stop if we have enough non-series videos or no more pages
    if (nonSeriesCount >= MIN_NON_SERIES || !searchResults.nextPageToken) break;
    pageToken = searchResults.nextPageToken;
  }

  console.log(`Fetched ${videos.length} videos across ${page} page(s)`);

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

  // Step 3c: Partition into series and non-series
  const seriesVideos = deduped.filter(isSeries);
  const nonSeriesVideos = deduped.filter((v) => !isSeries(v));
  console.log(`Split: ${nonSeriesVideos.length} videos + ${seriesVideos.length} series`);

  // Step 4: Generate JSX content
  const formatVideo = (v) => `  {
    title: '${escapeForJSX(v.title)}',
    href: '${v.href}',
    author: '${v.author}',
    content: '${escapeForJSX(v.content)}...',
    publishedDate: '${v.publishedDate}',
    duration: '${v.duration}',
    thumbnailUrl: '${v.thumbnailUrl}'
  }`;

  const exportName = outputPath.includes("/")
    ? path.basename(outputPath, ".jsx")
    : "youtubeData";
  const seriesExportName = outputPath.includes("/")
    ? path.basename(outputPath, ".jsx") + "Series"
    : "youtubeSeriesData";

  const jsxContent = `export const ${exportName} = [
${nonSeriesVideos.map(formatVideo).join(",\n")}
];

export const ${seriesExportName} = [
${seriesVideos.map(formatVideo).join(",\n")}
];
`;

  // Step 5: Write to file
  if (dryRun) {
    console.log(`[dry-run] Would write to ${outputPath} (${jsxContent.length} bytes)`);
    console.log(jsxContent);
  } else {
    const dir = path.dirname(outputPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(outputPath, jsxContent);
    console.log(`Successfully wrote ${outputPath}`);
  }
}

async function main() {
  const channels = resolveChannels();
  if (channels.length === 0) {
    console.log("No channels to fetch");
    return;
  }

  for (const { key, channelId } of channels) {
    const outputPath = key
      ? `snippets/data/social-feed-solutions/${key}/youtubeData.jsx`
      : "snippets/data/social-feeds/youtubeData.jsx";
    await fetchChannel(channelId, outputPath);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
