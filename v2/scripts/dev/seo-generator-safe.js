const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

/**
 * SAFE SEO Generator Script
 *
 * This script ONLY modifies:
 * 1. keywords field - adds if missing, updates if present
 * 2. og:image field - fixes broken syntax, adds if missing
 *
 * It PRESERVES:
 * - All other frontmatter fields (title, description, sidebarTitle, etc.)
 * - All content below frontmatter
 * - Original formatting and structure
 */

// Configuration
const DRY_RUN = true; // Set to false to actually write files
const VERBOSE = true;

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return null;
  }
  return {
    frontmatter: match[1],
    body: match[2],
    fullMatch: match[0],
  };
}

function generateKeywords(filePath, currentKeywords) {
  // Extract meaningful keywords from file path and name
  const parts = filePath.split("/").filter((p) => p && !p.match(/^\d+_/));
  const fileName = path.basename(filePath, ".mdx");

  const keywords = new Set();

  // Add existing keywords if any
  if (currentKeywords && Array.isArray(currentKeywords)) {
    currentKeywords.forEach((k) => keywords.add(k));
  }

  // Add path-based keywords
  parts.forEach((part) => {
    const cleaned = part.replace(/[-_]/g, " ").toLowerCase();
    if (cleaned && cleaned !== "pages" && cleaned !== "mdx") {
      keywords.add(cleaned);
    }
  });

  // Add filename keywords
  const fileKeywords = fileName.replace(/[-_]/g, " ").toLowerCase();
  if (fileKeywords && fileKeywords !== "readme" && fileKeywords !== "index") {
    keywords.add(fileKeywords);
  }

  return Array.from(keywords).slice(0, 10); // Limit to 10 keywords
}

function getOgImagePath(filePath) {
  // Determine og:image based on directory structure
  const pathParts = filePath.split("/");

  if (pathParts.includes("00_home")) {
    return "/snippets/assets/domain/00_HOME/social-preview-home.jpg";
  } else if (pathParts.includes("01_about")) {
    return "/snippets/assets/domain/01_ABOUT/social-preview-about.jpg";
  } else if (pathParts.includes("02_community")) {
    return "/snippets/assets/domain/02_COMMUNITY/social-preview-community.jpg";
  } else if (pathParts.includes("03_developers")) {
    return "/snippets/assets/domain/03_DEVELOPERS/social-preview-developers.jpg";
  } else if (pathParts.includes("04_gateways")) {
    return "/snippets/assets/domain/04_GATEWAYS/social-preview-gateways.jpg";
  } else if (pathParts.includes("05_orchestrators")) {
    return "/snippets/assets/domain/05_ORCHESTRATORS/social-preview-orchestrators.jpg";
  } else if (pathParts.includes("06_delegators")) {
    return "/snippets/assets/domain/06_DELEGATORS/social-preview-delegators.jpg";
  } else if (pathParts.includes("07_resources")) {
    return "/snippets/assets/domain/07_RESOURCES/social-preview-resources.jpg";
  }

  return "/snippets/assets/domain/social-preview-default.jpg";
}

function parseFrontmatterFields(frontmatter) {
  const fields = {};
  const lines = frontmatter.split("\n");
  let currentField = null;
  let currentValue = [];
  let inMultiLine = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this is a new field
    const fieldMatch = line.match(/^([a-zA-Z_-]+|["']?og:image["']?):\s*(.*)$/);

    if (fieldMatch && !inMultiLine) {
      // Save previous field
      if (currentField) {
        fields[currentField] = currentValue.join("\n");
      }

      currentField = fieldMatch[1].replace(/["']/g, "");
      const value = fieldMatch[2];

      // Check if it's a multi-line value
      if (value.includes("[") && !value.includes("]")) {
        inMultiLine = true;
        currentValue = [value];
      } else {
        currentValue = [value];
        inMultiLine = false;
      }
    } else if (currentField) {
      currentValue.push(line);
      if (line.includes("]")) {
        inMultiLine = false;
      }
    }
  }

  // Save last field
  if (currentField) {
    fields[currentField] = currentValue.join("\n");
  }

  return fields;
}

function rebuildFrontmatter(fields, newKeywords, newOgImage) {
  const lines = [];

  // Add all fields EXCEPT keywords and og:image variants
  for (const [key, value] of Object.entries(fields)) {
    if (key === "keywords" || key === "og:image" || key === "og") {
      continue; // Skip, we'll add these at the end
    }
    lines.push(`${key}: ${value}`);
  }

  // Add keywords in proper format
  if (newKeywords && newKeywords.length > 0) {
    const keywordsJson = JSON.stringify(newKeywords);
    lines.push(`keywords: ${keywordsJson}`);
  }

  // Add og:image in proper format (no quotes on key)
  if (newOgImage) {
    lines.push(`og:image: '${newOgImage}'`);
  }

  return lines.join("\n");
}

function processFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    return { success: false, error: "File not found" };
  }

  const content = fs.readFileSync(fullPath, "utf8");
  const extracted = extractFrontmatter(content);

  if (!extracted) {
    return { success: false, error: "No frontmatter found" };
  }

  // Parse existing frontmatter
  const fields = parseFrontmatterFields(extracted.frontmatter);

  // Extract current keywords if they exist
  let currentKeywords = [];
  if (fields.keywords) {
    try {
      const keywordsStr = fields.keywords.trim();
      if (keywordsStr.startsWith("[")) {
        currentKeywords = JSON.parse(keywordsStr);
      }
    } catch (e) {
      // Ignore parse errors
    }
  }

  // Generate new keywords
  const newKeywords = generateKeywords(filePath, currentKeywords);

  // Get og:image path
  const newOgImage = getOgImagePath(filePath);

  // Rebuild frontmatter
  const newFrontmatter = rebuildFrontmatter(fields, newKeywords, newOgImage);
  const newContent = `---\n${newFrontmatter}\n---\n${extracted.body}`;

  // Write file if not dry run
  if (!DRY_RUN) {
    fs.writeFileSync(fullPath, newContent, "utf8");
  }

  return {
    success: true,
    filePath,
    oldKeywords: currentKeywords,
    newKeywords,
    ogImage: newOgImage,
    changed: JSON.stringify(currentKeywords) !== JSON.stringify(newKeywords),
  };
}

if (require.main === module) {
  // Command line usage
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(
      "Usage: node seo-generator-safe.js <file1.mdx> [file2.mdx] ...",
    );
    console.log("");
    console.log("Options:");
    console.log("  DRY_RUN=false - Actually write files (default: true)");
    console.log("");
    console.log("Example:");
    console.log(
      "  node seo-generator-safe.js v2/pages/00_home/mission-control.mdx",
    );
    process.exit(1);
  }

  console.log(`Processing ${args.length} file(s)...`);
  console.log(
    `DRY RUN: ${DRY_RUN ? "YES (no files will be modified)" : "NO (files will be modified)"}\n`,
  );

  let processed = 0;
  let errors = 0;
  let changed = 0;

  args.forEach((file) => {
    const result = processFile(file);

    if (result.success) {
      processed++;
      if (result.changed) changed++;

      if (VERBOSE) {
        console.log(`✓ ${result.filePath}`);
        console.log(`  Keywords: ${JSON.stringify(result.newKeywords)}`);
        console.log(`  og:image: ${result.ogImage}`);
        console.log("");
      }
    } else {
      errors++;
      console.error(`✗ ${file}: ${result.error}`);
    }
  });

  console.log(`\n========== SUMMARY ==========`);
  console.log(`Processed: ${processed}`);
  console.log(`Changed: ${changed}`);
  console.log(`Errors: ${errors}`);
  console.log(`DRY RUN: ${DRY_RUN ? "YES" : "NO"}`);
  console.log(`=============================`);
}

module.exports = {
  extractFrontmatter,
  generateKeywords,
  getOgImagePath,
  parseFrontmatterFields,
  rebuildFrontmatter,
  processFile,
  DRY_RUN,
  VERBOSE,
};
