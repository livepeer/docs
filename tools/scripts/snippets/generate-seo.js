#!/usr/bin/env node
/**
 * @script            generate-seo
 * @category          generator
 * @purpose           feature:seo
 * @scope             tools/scripts, v2, docs-guide, contribute, snippets/pages
 * @owner             docs
 * @needs             E-R1, R-R14
 * @purpose-statement Normalize authored MDX frontmatter to canonical OG image assets and backfill lightweight SEO metadata when missing.
 * @pipeline          manual — run after OG asset generation or when authored page metadata needs normalization
 * @usage             node tools/scripts/snippets/generate-seo.js [--dry-run] [--file <repo-path>] [--file=<repo-path>]
 */

const fs = require("fs");
const path = require("path");
const {
  parseMdxFileWithFrontmatter,
} = require("../i18n/lib/frontmatter");
const {
  collectAuthoredMdxFiles,
  createOgImagePolicyContext,
  getRepoRoot,
  isAuthoredMdxPage,
  resolveOgImageForFile,
  toPosix,
} = require("./lib/og-image-policy");

const FRONTMATTER_PRIORITY = [
  "mode",
  "title",
  "sidebarTitle",
  "description",
  "keywords",
  "og:image",
  "og:image:alt",
  "og:image:type",
  "og:image:width",
  "og:image:height",
];

function parseArgs(argv) {
  const args = {
    dryRun: false,
    file: "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (token === "--file") {
      args.file = String(argv[index + 1] || "").trim();
      index += 1;
      continue;
    }
    if (token.startsWith("--file=")) {
      args.file = token.slice("--file=".length).trim();
    }
  }

  return args;
}

function hasMeaningfulText(value) {
  if (Array.isArray(value)) {
    return value.some((entry) => hasMeaningfulText(entry));
  }
  return typeof value === "string" && value.trim().length > 0;
}

function generateKeywords(repoPath, frontmatter, body) {
  const keywords = new Set();
  keywords.add("livepeer");

  const normalizedPath = toPosix(repoPath)
    .replace(/\.mdx$/i, "")
    .split("/")
    .filter(Boolean);

  normalizedPath.forEach((segment) => {
    if (!segment || segment === "v2") return;
    if (["docs-guide", "contribute", "snippets", "pages"].includes(segment)) {
      keywords.add(segment.replace(/-/g, " "));
      return;
    }
    if (["cn", "es", "fr"].includes(segment)) return;
    const cleaned = segment
      .replace(/^\d+_/, "")
      .replace(/-/g, " ")
      .trim()
      .toLowerCase();
    if (cleaned.length > 2) {
      keywords.add(cleaned);
    }
  });

  [frontmatter.title, frontmatter.sidebarTitle, frontmatter.description].forEach(
    (candidate) => {
      if (!hasMeaningfulText(candidate)) return;
      String(candidate)
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")
        .split(/\s+/)
        .filter((part) => part.length > 3)
        .forEach((part) => keywords.add(part));
    },
  );

  const paragraph = String(body || "")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .find(
      (part) =>
        part &&
        !part.startsWith("#") &&
        !part.startsWith("import ") &&
        !part.startsWith("<"),
    );

  if (paragraph) {
    paragraph
      .replace(/[^\w\s]/g, " ")
      .toLowerCase()
      .split(/\s+/)
      .filter((part) => part.length > 4)
      .slice(0, 4)
      .forEach((part) => keywords.add(part));
  }

  return Array.from(keywords).slice(0, 10);
}

function generateDescription(body) {
  const cleaned = String(body || "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const firstParagraph = [];
  for (const line of cleaned) {
    if (
      line.startsWith("import ") ||
      line.startsWith("<") ||
      line.startsWith("#")
    ) {
      if (firstParagraph.length > 0) break;
      continue;
    }
    firstParagraph.push(line.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"));
    if (firstParagraph.join(" ").length >= 160) break;
  }

  if (firstParagraph.length === 0) return "";

  const description = firstParagraph.join(" ").replace(/\s+/g, " ").trim();
  if (description.length < 30) return "";
  if (description.length <= 160) return description;
  return `${description.slice(0, 157).trim()}...`;
}

function orderFrontmatter(data) {
  const ordered = {};
  FRONTMATTER_PRIORITY.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      ordered[key] = data[key];
    }
  });
  Object.keys(data).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(ordered, key)) {
      ordered[key] = data[key];
    }
  });
  return ordered;
}

function applyOgFields(frontmatter, ogFields) {
  const updated = { ...frontmatter };
  let hasChanges = false;

  Object.entries(ogFields).forEach(([key, value]) => {
    const nextValue = value;
    const currentValue = updated[key];
    if (String(currentValue) !== String(nextValue)) {
      updated[key] = nextValue;
      hasChanges = true;
    }
  });

  return { updated, hasChanges };
}

function processFile(filePath, context) {
  const rawContent = fs.readFileSync(filePath, "utf8");
  const parsed = parseMdxFileWithFrontmatter(rawContent);
  const repoPath = toPosix(path.relative(context.repoRoot, filePath));
  const frontmatter = parsed.data || {};
  let updated = { ...frontmatter };
  let hasChanges = false;
  const changeNotes = [];

  if (!hasMeaningfulText(updated.keywords)) {
    updated.keywords = generateKeywords(repoPath, updated, parsed.body);
    hasChanges = true;
    changeNotes.push("keywords");
  }

  if (!hasMeaningfulText(updated.description)) {
    const description = generateDescription(parsed.body);
    if (description) {
      updated.description = description;
      hasChanges = true;
      changeNotes.push("description");
    }
  }

  const assignment = resolveOgImageForFile(filePath, context);
  const ogUpdate = applyOgFields(updated, assignment.fields);
  updated = ogUpdate.updated;
  if (ogUpdate.hasChanges) {
    hasChanges = true;
    changeNotes.push("og");
  }

  const nextFrontmatter = orderFrontmatter(updated);
  const nextContent = parsed.stringify(parsed.body, nextFrontmatter);

  return {
    changed: hasChanges && nextContent !== rawContent,
    filePath,
    repoPath,
    nextContent,
    assignment,
    changeNotes,
  };
}

function resolveTargetFiles(repoRoot, context, args) {
  if (!args.file) {
    return collectAuthoredMdxFiles(repoRoot, context);
  }

  const candidate = path.isAbsolute(args.file)
    ? args.file
    : path.join(repoRoot, args.file);
  if (!fs.existsSync(candidate)) {
    throw new Error(`File not found: ${args.file}`);
  }

  const repoPath = toPosix(path.relative(repoRoot, candidate));
  if (!isAuthoredMdxPage(repoPath, context)) {
    throw new Error(`Unsupported file scope for SEO generator: ${repoPath}`);
  }

  return [candidate];
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = getRepoRoot();
  const context = createOgImagePolicyContext(repoRoot);
  const files = resolveTargetFiles(repoRoot, context, args);
  const results = {
    changed: 0,
    skipped: 0,
    errors: 0,
  };

  console.log("Livepeer SEO Generator\n");
  console.log(`Files: ${files.length}`);
  console.log(`Mode: ${args.dryRun ? "dry-run" : "write"}\n`);

  files.forEach((filePath) => {
    try {
      const result = processFile(filePath, context);
      if (!result.changed) {
        results.skipped += 1;
        return;
      }

      results.changed += 1;
      console.log(`OK ${result.repoPath}`);
      console.log(`  og:image -> ${result.assignment.fields["og:image"]}`);
      if (result.changeNotes.includes("keywords")) {
        console.log("  + keywords");
      }
      if (result.changeNotes.includes("description")) {
        console.log("  + description");
      }

      if (!args.dryRun) {
        fs.writeFileSync(filePath, result.nextContent, "utf8");
      }
    } catch (error) {
      results.errors += 1;
      console.error(`FAIL ${toPosix(path.relative(repoRoot, filePath))}: ${error.message}`);
    }
  });

  console.log("\nSummary");
  console.log(`Changed: ${results.changed}`);
  console.log(`Skipped: ${results.skipped}`);
  console.log(`Errors: ${results.errors}`);

  if (results.errors > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  generateDescription,
  generateKeywords,
  orderFrontmatter,
  processFile,
};
