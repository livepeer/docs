/**
 * @script            fetch-youtube-data
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             .github/scripts
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement Fetches video data from YouTube Data API, writes to snippets/automations/youtube/
 * @pipeline          P5 (scheduled, daily)
 * @usage             node .github/scripts/fetch-youtube-data.js [flags]
 */
const https = require("https");
const fs = require("fs");

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID || "UCzfHtZnmUzMbJDxGCwIgY2g";

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

function escapeForJSX(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ")
    .replace(/\r/g, "")
    .replace(/\t/g, " ");
}

async function main() {
  // Step 1: Get recent videos
  console.log("Fetching recent videos...");
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${YOUTUBE_API_KEY}`;
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

    // Check if it's a livestream
    const isLivestream =
      snippet.liveBroadcastContent === "live" ||
      snippet.liveBroadcastContent === "upcoming" ||
      duration === "PT0S" ||
      snippet.title.toLowerCase().includes("watercooler") ||
      snippet.title.toLowerCase().includes("fireside");

    // Filter out Shorts (≤60 seconds and not livestreams)
    const isShort =
      durationSeconds <= 60 && durationSeconds > 0 && !isLivestream;

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

  // Step 4: Generate JSX content
  const jsxContent = `export const youtubeData = [
${videos
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
  fs.writeFileSync("snippets/automations/youtube/youtubeData.jsx", jsxContent);
  console.log("Successfully wrote youtubeData.jsx");
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
