/**
 * @script      fetch-discord-announcements
 * @type        integrator
 * @concern     copy
 * @niche       social-feeds
 * @purpose     infrastructure:data-feeds
 * @description Fetches Discord announcements for product and shared community feeds, writing per-product outputs plus the shared social feed module under snippets/data/social-feeds/.
 * @mode        integrate
 * @pipeline    config → Discord API → snippets/data/social-feed-solutions/{product}/discordData.jsx
 * @scope       .github/scripts, snippets/data/social-feed-solutions/, snippets/data/social-feeds/
 * @usage       node .github/scripts/fetch-discord-announcements.js
 * @policy      F-R1
 */
const https = require("https");
const fs = require("fs");
const path = require("path");
const { escapeForJsx } = require(path.join(process.cwd(), "operations/scripts/config/mdx-sanitise"));

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

const escapeForJSX = (str) => escapeForJsx(str);

/**
 * Convert Discord markdown to HTML before JSX escaping.
 * Handles: bold, italic, underline, strikethrough, links, mentions, code blocks, line breaks.
 */
function discordMarkdownToHTML(text) {
  if (!text) return "";
  let result = text
    // Strip @everyone / @here mentions
    .replace(/@(everyone|here)/g, "")
    // Code blocks (```lang\n...\n```)
    .replace(/```\w*\n?([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Bold + italic (***text***)
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    // Bold (**text**)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic (*text*)
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Underline (__text__)
    .replace(/__(.+?)__/g, "<u>$1</u>")
    // Strikethrough (~~text~~)
    .replace(/~~(.+?)~~/g, "<s>$1</s>")
    // Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Bare URLs (not already in an href)
    .replace(/(?<!href="|>)(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
    // Discord list items (- item or • item) — must run BEFORE \n → <br />
    .replace(/^[-•]\s+(.+)$/gm, "<li>$1</li>");

  // Wrap consecutive <li> in <ul> — strip \n between list items
  result = result.replace(/(<li>[\s\S]*?<\/li>[\n]*)+/g, (match) => {
    const cleaned = match.replace(/\n/g, "");
    return "<ul>" + cleaned + "</ul>";
  });

  // Now convert remaining \n to <br /> (not inside lists)
  result = result.replace(/\n/g, "<br />");

  return result;
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

  return messages.map((msg) => {
    // Build content: prefer message content, then message_snapshots (forwarded messages), then embeds
    let rawContent = msg.content || "";
    let snapshotEmbeds = [];
    let snapshotAttachments = [];
    // Forwarded messages (flags 16384) have content in message_snapshots
    if (!rawContent && msg.message_snapshots && msg.message_snapshots.length > 0) {
      const snapshot = msg.message_snapshots[0].message;
      rawContent = snapshot?.content || "";
      snapshotEmbeds = snapshot?.embeds || [];
      snapshotAttachments = snapshot?.attachments || [];
    }
    // Fall back to message-level embeds
    if (!rawContent && msg.embeds && msg.embeds.length > 0) {
      snapshotEmbeds = msg.embeds;
    }
    // Fall back to attachment filenames if still empty
    if (!rawContent && !snapshotEmbeds.length && msg.attachments && msg.attachments.length > 0) {
      rawContent = msg.attachments.map((a) => `[${a.filename}](${a.url})`).join(", ");
    }

    // Convert Discord markdown to HTML
    let htmlContent = discordMarkdownToHTML(rawContent);

    // Append embed cards (title + description + image)
    for (const embed of snapshotEmbeds) {
      const parts = [];
      if (embed.title && embed.url) {
        parts.push(`<a href="${embed.url}" target="_blank" rel="noopener noreferrer"><strong>${embed.title}</strong></a>`);
      } else if (embed.title) {
        parts.push(`<strong>${embed.title}</strong>`);
      }
      if (embed.description) {
        parts.push(`<p>${discordMarkdownToHTML(embed.description)}</p>`);
      }
      if (embed.image?.url) {
        parts.push(`<img src="${embed.image.url}" alt="${embed.title || ''}" style="max-width:100%;border-radius:8px;margin-top:8px" />`);
      } else if (embed.thumbnail?.url) {
        parts.push(`<img src="${embed.thumbnail.url}" alt="${embed.title || ''}" style="max-width:300px;border-radius:8px;margin-top:8px" />`);
      }
      if (parts.length) {
        htmlContent += '<div style="border-left:3px solid var(--accent);padding:8px 12px;margin-top:12px;border-radius:4px">' + parts.join("") + "</div>";
      }
    }

    // Append attachments (images and videos from snapshot)
    for (const att of snapshotAttachments) {
      const ext = (att.filename || "").split(".").pop().toLowerCase();
      if (["mp4", "webm", "mov"].includes(ext)) {
        htmlContent += `<video src="${att.url}" controls width="100%" height="auto" style="border-radius:8px;margin-top:12px"></video>`;
      } else if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) {
        htmlContent += `<img src="${att.url}" alt="${att.filename}" width="100%" height="auto" style="border-radius:8px;margin-top:12px" />`;
      }
    }

    return {
      id: msg.id,
      content: escapeForJSX(htmlContent),
      author: msg.author?.username || "Unknown",
      timestamp: formatTimestamp(msg.timestamp),
      url: `https://discord.com/channels/${serverId}/${announcementsChannelId}/${msg.id}`,
    };
  }).filter((msg) => msg.content.length > 0);
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
    const outPath = path.join(`snippets/data/social-feed-solutions/${productKey}`, "discordData.jsx");
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
