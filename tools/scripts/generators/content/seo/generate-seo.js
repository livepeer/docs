#!/usr/bin/env node
/**
 * @script            generate-seo
 * @category          generator
 * @purpose           feature:seo
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-R19, F-R7
 * @purpose-statement SEO generator — generates SEO metadata (title, description, keywords) for v2 pages from content analysis
 * @pipeline          P6 (on-demand, SEO refresh)
 * @usage             node tools/scripts/snippets/generate-seo.js [flags]
 */
/**
 * SEO Generator for Livepeer Documentation
 *
 * Automatically generates and updates SEO and AEO (Answer Engine Optimization)
 * metadata for MDX documentation pages:
 * - keywords: Generated from file path, title, and content
 * - description: Generated from first paragraph when missing (AEO: helps LLMs/snippets)
 * - og:image / twitter:image: Uses default or domain-specific images
 *
 * AEO = optimizing for AI/answer engines (structured metadata, clear summaries).
 *
 * Usage: node tools/scripts/snippets/generate-seo.js [--dry-run] [--file=path/to/file.mdx]
 */

const fs = require("fs");
const path = require("path");

// Configuration
const PAGES_DIRS = [
  path.join(__dirname, "../../v2/pages"),
  path.join(__dirname, "../../v2"),
].filter((candidate) => fs.existsSync(candidate));
const DEFAULT_SOCIAL_IMAGE =
  "/snippets/assets/social/livepeer-social-preview.jpg";

// Domain-specific images (can be expanded)
const DOMAIN_IMAGES = {
  home: "/snippets/assets/domain/00_HOME/social-preview-home.jpg",
  about: "/snippets/assets/domain/01_ABOUT/social-preview-about.jpg",
  community: "/snippets/assets/domain/03_COMMUNITY/social-preview-community.jpg",
  developers:
    "/snippets/assets/domain/02_DEVELOPERS/social-preview-developers.jpg",
  gateways:
    "/snippets/assets/domain/04_GATEWAYS/social-preview-gateways.jpg",
  orchestrators:
    "/snippets/assets/domain/05_ORCHESTRATORS/social-preview-orchestrators.jpg",
  lpt: "/snippets/assets/domain/06_DELEGATORS/social-preview-delegators.jpg",
  resources: "/snippets/assets/domain/07_RESOURCES/social-preview-resources.jpg",
  internal: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg",
  solutions: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg",
  deprecated: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg",
  experimental: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg",
  notes: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg",
  "00_home": "/snippets/assets/domain/00_HOME/social-preview-home.jpg",
  "01_about": "/snippets/assets/domain/01_ABOUT/social-preview-about.jpg",
  "02_community":
    "/snippets/assets/domain/03_COMMUNITY/social-preview-community.jpg",
  "03_developers":
    "/snippets/assets/domain/02_DEVELOPERS/social-preview-developers.jpg",
  "04_gateways":
    "/snippets/assets/domain/04_GATEWAYS/social-preview-gateways.jpg",
  "05_orchestrators":
    "/snippets/assets/domain/05_ORCHESTRATORS/social-preview-orchestrators.jpg",
  "06_lptoken":
    "/snippets/assets/domain/06_DELEGATORS/social-preview-delegators.jpg",
  "07_resources":
    "/snippets/assets/domain/07_RESOURCES/social-preview-resources.jpg",
};

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const specificFile = args
  .find((arg) => arg.startsWith("--file="))
  ?.split("=")[1];

/**
 * Extract frontmatter from MDX content
 * Handles broken YAML like og: 'image': '' by skipping invalid lines
 */
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, content, hasYaml: false };

  const yamlContent = match[1];
  const restContent = content.slice(match[0].length);

  // Parse YAML-like frontmatter
  const frontmatter = {};
  const lines = yamlContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Skip broken YAML lines like: og: 'image': '' or 'og:image': ''
    // Check for multiple colons that aren't part of a valid quoted key
    const colonCount = (line.match(/:/g) || []).length;
    if (colonCount > 1) {
      // Valid format: "og:image": "value" or "twitter:image": "value"
      const validQuotedKey = line.match(/^"([^"]+)":\s*"([^"]*)"/);
      if (!validQuotedKey) {
        console.log(`⚠️  Skipping invalid YAML line: ${line}`);
        continue; // Skip this broken line
      }
      // Parse the valid quoted key
      const [, key, value] = validQuotedKey;
      frontmatter[key] = value;
      continue;
    }

    // Handle key: value or key: [array]
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line
      .slice(0, colonIndex)
      .trim()
      .replace(/^["']|["']$/g, "");
    let value = line.slice(colonIndex + 1).trim();

    // Handle arrays
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""));
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }

    frontmatter[key] = value;
  }

  return { frontmatter, content: restContent, hasYaml: true, yamlContent };
}

/**
 * Generate keywords from file path and content
 */
function generateKeywords(filePath, frontmatter, content) {
  const keywords = new Set();

  // Add 'livepeer' as base keyword
  keywords.add("livepeer");

  // Extract from path - only use meaningful parts
  const pathParts = filePath.split("/").filter((p) => {
    // Filter out system paths and keep only meaningful directory/file names
    const lower = p.toLowerCase();
    return (
      p &&
      !lower.includes("users") &&
      !lower.includes("documents") &&
      !lower.includes("livepeer-docs") &&
      !lower.includes("current") &&
      p !== "v2" &&
      p !== "pages" &&
      p !== "tests"
    );
  });
  pathParts.forEach((part) => {
    // Remove number prefixes and file extensions
    const cleaned = part
      .replace(/^\d+_/, "")
      .replace(/\.mdx?$/, "")
      .replace(/-/g, " ")
      .toLowerCase();
    // Skip common words and user-specific paths
    if (
      cleaned &&
      cleaned.length > 2 &&
      !["readme", "summary"].includes(cleaned)
    ) {
      keywords.add(cleaned);
    }
  });

  // Extract from title
  if (frontmatter.title) {
    const titleWords = frontmatter.title
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(
        (w) =>
          w.length > 3 && !["this", "that", "with", "from", "have"].includes(w),
      );
    titleWords.forEach((w) => keywords.add(w));
  }

  // Extract from description
  if (frontmatter.description) {
    const descWords = frontmatter.description
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(
        (w) =>
          w.length > 4 &&
          !["this", "that", "with", "from", "have", "about"].includes(w),
      );
    descWords.slice(0, 3).forEach((w) => keywords.add(w));
  }

  // Limit to 10 keywords
  return Array.from(keywords).slice(0, 10);
}

/**
 * Generate AEO-friendly description from content when missing.
 * Uses first paragraph or first heading + following text; keeps to 50–160 chars for SEO/AEO.
 */
function generateDescription(content) {
  if (!content || typeof content !== "string") return null;
  // Strip frontmatter
  const withoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n?/, "");
  // First block of text: lines that are not empty and not starting with # or < or import
  const lines = withoutFrontmatter.split("\n");
  const textParts = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith("import ") || t.startsWith("#") || t.startsWith("<")) break;
    textParts.push(t.replace(/\s+/g, " "));
    if (textParts.join(" ").length >= 100) break;
  }
  let desc = textParts.join(" ").trim();
  if (!desc) return null;
  // Strip markdown links but keep text: [text](url) -> text
  desc = desc.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Target 50–160 chars for SEO/AEO
  if (desc.length > 157) desc = desc.slice(0, 154).trim() + "...";
  return desc.length >= 30 ? desc : null;
}

/**
 * Get appropriate social image for a file
 */
function getSocialImage(filePath) {
  const normalizedPath = String(filePath || "").replace(/\\/g, "/");
  const v2Index = normalizedPath.indexOf("/v2/");
  const relative = v2Index >= 0 ? normalizedPath.slice(v2Index + 4) : normalizedPath;
  const parts = relative.split("/").filter(Boolean);
  const domainFolder = parts[0] === "pages" ? parts[1] : parts[0];

  if (domainFolder && DOMAIN_IMAGES[domainFolder]) {
    return DOMAIN_IMAGES[domainFolder];
  }

  return DEFAULT_SOCIAL_IMAGE;
}

/**
 * Update frontmatter with SEO metadata
 */
function updateFrontmatter(frontmatter, filePath, content) {
  const updated = { ...frontmatter };
  let hasChanges = false;

  // Add keywords if missing
  if (
    !updated.keywords ||
    (Array.isArray(updated.keywords) && updated.keywords.length === 0)
  ) {
    updated.keywords = generateKeywords(filePath, frontmatter, content);
    hasChanges = true;
  }

  // Add og:image if missing (and no twitter:image)
  if (!updated["og:image"] && !updated["twitter:image"]) {
    updated["og:image"] = getSocialImage(filePath);
    hasChanges = true;
  }

  // AEO: add description when missing (helps AI/answer engines and snippets)
  const rawDescription = updated.description;
  const hasDescription =
    rawDescription &&
    (typeof rawDescription === "string"
      ? rawDescription.trim().length > 0
      : Array.isArray(rawDescription)
        ? rawDescription.some((v) => v && String(v).trim())
        : false);
  if (!hasDescription) {
    const generated = generateDescription(content);
    if (generated) {
      updated.description = generated;
      hasChanges = true;
    }
  }

  return { updated, hasChanges };
}

/**
 * Serialize frontmatter back to YAML
 */
function serializeFrontmatter(frontmatter) {
  const lines = [];

  for (const [key, value] of Object.entries(frontmatter)) {
    if (Array.isArray(value)) {
      // Format arrays with double quotes
      const formattedArray = value.map((v) => `"${v}"`).join(", ");
      lines.push(`${key}: [${formattedArray}]`);
    } else if (key.includes(":")) {
      // Quote keys with colons (like og:image) - use double quotes for both key and value
      lines.push(`"${key}": "${value}"`);
    } else {
      // Regular keys don't need quotes, but values do
      lines.push(`${key}: "${value}"`);
    }
  }

  return lines.join("\n");
}

/**
 * Process a single MDX file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const {
    frontmatter,
    content: restContent,
    hasYaml,
  } = extractFrontmatter(content);

  if (!hasYaml) {
    console.log(`⚠️  Skipping ${filePath} - no frontmatter found`);
    return { processed: false };
  }

  // Use relative path for keyword generation - strip absolute path
  let relativePath = filePath;
  if (filePath.includes("/v2/pages/")) {
    relativePath = filePath.split("/v2/pages/")[1];
  } else if (filePath.includes("/v2/tests/")) {
    relativePath = filePath.split("/v2/tests/")[1];
  } else if (filePath.includes("/v2/")) {
    relativePath = filePath.split("/v2/")[1];
  }

  const { updated, hasChanges } = updateFrontmatter(
    frontmatter,
    relativePath,
    content,
  );

  if (!hasChanges) {
    return { processed: false };
  }

  // Build new content
  const newFrontmatter = serializeFrontmatter(updated);
  const newContent = `---\n${newFrontmatter}\n---${restContent}`;

  return {
    processed: true,
    filePath,
    oldContent: content,
    newContent,
    changes: {
      addedKeywords: !frontmatter.keywords && updated.keywords,
      addedImage:
        !frontmatter["og:image"] &&
        !frontmatter["twitter:image"] &&
        updated["og:image"],
      addedDescription:
        !frontmatter.description && updated.description,
    },
  };
}

/**
 * Find all MDX files in directory
 */
function findMdxFiles(dir) {
  const files = [];

  function walk(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

/**
 * Main execution
 */
function main() {
  console.log("🔍 Livepeer SEO Generator\n");

  if (isDryRun) {
    console.log("🏃 Running in DRY RUN mode - no files will be modified\n");
  }

  let files;
  if (specificFile) {
    const fullPath = path.resolve(specificFile);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ File not found: ${specificFile}`);
      process.exit(1);
    }
    files = [fullPath];
    console.log(`📄 Processing single file: ${specificFile}\n`);
  } else {
    const dedupedFiles = new Set();
    for (const pagesDir of PAGES_DIRS) {
      for (const mdxFile of findMdxFiles(pagesDir)) {
        dedupedFiles.add(path.resolve(mdxFile));
      }
    }
    files = Array.from(dedupedFiles);
    console.log(`📚 Found ${files.length} MDX files\n`);
  }

  const results = {
    processed: 0,
    skipped: 0,
    errors: 0,
    changes: [],
  };

  for (const file of files) {
    try {
      const result = processFile(file);

      if (result.processed) {
        results.processed++;
        const relativePath = path.relative(process.cwd(), file);

        console.log(`✅ ${relativePath}`);
        if (result.changes.addedKeywords) {
          console.log(
            `   + Added keywords: ${result.changes.addedKeywords.join(", ")}`,
          );
        }
        if (result.changes.addedImage) {
          console.log(`   + Added og:image: ${result.changes.addedImage}`);
        }
        if (result.changes.addedDescription) {
          console.log(`   + Added description (AEO): ${result.changes.addedDescription}`);
        }

        results.changes.push(result);

        // Write file if not dry run
        if (!isDryRun) {
          fs.writeFileSync(file, result.newContent, "utf8");
        }
      } else {
        results.skipped++;
      }
    } catch (error) {
      results.errors++;
      console.error(`❌ Error processing ${file}: ${error.message}`);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 Summary:");
  console.log(`   Total files: ${files.length}`);
  console.log(`   Processed: ${results.processed}`);
  console.log(`   Skipped: ${results.skipped}`);
  console.log(`   Errors: ${results.errors}`);

  if (isDryRun && results.processed > 0) {
    console.log("\n💡 Run without --dry-run to apply changes");
  }

  console.log("=".repeat(60));
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  processFile,
  generateKeywords,
  generateDescription,
  getSocialImage,
};
