/**
 * @script            fetch-discord-announcements
 * @type              automation
 * @concern           content
 * @niche             data/fetching
 * @purpose           infrastructure:data-feeds
 * @description       Fetches announcements from Discord channels via bot token. Writes per-product
 *                    JSX data files from config.products[].discord and per-channel JSX files from
 *                    config.globals.discord[]. Each entry produces a specific output file.
 * @mode              generate
 * @pipeline          config → Discord API → snippets/automations/{product}/discordData.jsx
 *                                        → snippets/automations/discord/discordAnnouncementsData.jsx
 * @scope             .github/scripts, snippets/automations/
 * @usage             node .github/scripts/fetch-discord-announcements.js
 * @policy            Announcements channel only. No general chat. Requires DISCORD_BOT_TOKEN.
 */
const https = require("https");
const fs = require("fs");
const path = require("path");

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const CONFIG_PATH =
  process.env.CONFIG_PATH || "operations/scripts/config/product-social-config.json";
const LIMIT = parseInt(process.env.LIMIT || "10", 10);

function discordGet(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "discord.com",
      path: `/api/v10${endpoint}`,
      method: "GET",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Discord API parse error: ${data.substring(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    req.end();
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
    .replace(/[\u{10000}-\u{10FFFF}]/gu, "")
    .replace(/[\uD800-\uDFFF]/g, "")
    .replace(/[^\x20-\x7E\u00A0-\u00FF<>]/g, "")
    .replace(/\n/g, "<br />")
    .replace(/\r/g, "");
}

function formatTimestamp(isoStr) {
  return new Date(isoStr).toISOString();
}

async function fetchForProduct(productKey, discordConfig) {
  const { serverId, announcementsChannelId } = discordConfig;

  if (!serverId || !announcementsChannelId) {
    console.log(
      `  Skipping ${productKey}: missing serverId or announcementsChannelId`
    );
    return null;
  }

  console.log(
    `  Fetching from channel ${announcementsChannelId} in server ${serverId}...`
  );

  const messages = await discordGet(
    `/channels/${announcementsChannelId}/messages?limit=${LIMIT}`
  );

  if (!Array.isArray(messages) || messages.length === 0) {
    console.log(`  No messages found (or access denied)`);
    return [];
  }

  return messages.map((msg) => ({
    id: msg.id,
    content: escapeForJSX(msg.content),
    author: msg.author?.username || "Unknown",
    timestamp: formatTimestamp(msg.timestamp),
    url: `https://discord.com/channels/${serverId}/${announcementsChannelId}/${msg.id}`,
  }));
}

function writeJSX(exportName, announcements, outPath) {
  let jsx = `export const ${exportName} = [\n`;
  announcements.forEach((item, idx) => {
    jsx += `  {\n`;
    jsx += `    id: "${item.id}",\n`;
    jsx += `    content: "${item.content}",\n`;
    jsx += `    author: "${escapeForJSX(item.author)}",\n`;
    jsx += `    timestamp: "${item.timestamp}",\n`;
    jsx += `    url: "${item.url}"\n`;
    jsx += `  }${idx < announcements.length - 1 ? "," : ""}\n`;
  });
  jsx += `];\n`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, jsx);
  console.log(`  Written to ${outPath}`);
}

async function main() {
  if (!DISCORD_BOT_TOKEN) {
    throw new Error(
      "DISCORD_BOT_TOKEN environment variable is not set."
    );
  }

  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));

  // Per-product feeds
  const products = config.products || {};
  for (const [productKey, productConfig] of Object.entries(products)) {
    const discord = productConfig.discord;
    if (!discord) {
      console.log(`${productKey}: no discord config, skipping`);
      continue;
    }

    console.log(`Processing ${productKey}...`);
    const announcements = await fetchForProduct(productKey, discord);
    if (announcements === null) continue;

    const exportName = `${productKey.replace(/-/g, "")}DiscordData`;
    const outPath = path.join(`snippets/automations/solutions/${productKey}`, "discordData.jsx");
    writeJSX(exportName, announcements, outPath);
  }

  // Global channel feeds (explicit outputPath + exportName per entry)
  const globalChannels = config.globals?.discord || [];
  for (const channel of globalChannels) {
    const { key, serverId, announcementsChannelId, outputPath, exportName } = channel;
    if (!serverId || !announcementsChannelId || !outputPath || !exportName) {
      console.log(`globals.discord[${key}]: missing required fields, skipping`);
      continue;
    }

    console.log(`Processing global channel ${key}...`);
    const announcements = await fetchForProduct(key, { serverId, announcementsChannelId });
    if (announcements === null) continue;

    writeJSX(exportName, announcements, outputPath);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
