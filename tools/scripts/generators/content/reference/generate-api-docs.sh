#!/bin/bash
# @script            generate-api-docs
# @category          generator
# @purpose           tooling:dev-tools
# @scope             tools/scripts
# @owner             docs
# @needs             E-C6, F-C1
# @purpose-statement API docs generator — generates API reference pages from OpenAPI specs
# @pipeline          manual — not yet in pipeline
# @usage             bash tools/scripts/snippets/generate-api-docs.sh [flags]
# Generate API documentation from OpenAPI spec
# Creates: landing page + individual endpoint pages + navigation JSON
#
# Usage: ./generate-api-docs.sh <openapi-spec> <output-dir> <api-name>
# Example: ./generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/AI-API "AI API"
#

set -e

OPENAPI_SPEC="$1"
OUTPUT_DIR="$2"
API_NAME="$3"
GITHUB_REPO="$4"

if [ -z "$OPENAPI_SPEC" ] || [ -z "$OUTPUT_DIR" ] || [ -z "$API_NAME" ]; then
  echo "Usage: $0 <openapi-spec> <output-dir> <api-name> [github-repo-url]"
  echo "Example: $0 ai/worker/api/openapi.yaml v2/pages/04_gateways/api-reference/AI-API \"AI\" \"https://github.com/livepeer/ai-worker\""
  exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Convert YAML to JSON if needed, then generate pages
if [[ "$OPENAPI_SPEC" == *.yaml ]] || [[ "$OPENAPI_SPEC" == *.yml ]]; then
  TEMP_JSON=$(mktemp)
  npx js-yaml "$OPENAPI_SPEC" > "$TEMP_JSON"
  SPEC_FILE="$TEMP_JSON"
else
  SPEC_FILE="$OPENAPI_SPEC"
fi

# Generate the endpoint pages and landing page using Node.js
node - "$SPEC_FILE" "$OUTPUT_DIR" "$API_NAME" "$OPENAPI_SPEC" "$GITHUB_REPO" << 'NODEJS_SCRIPT'
const fs = require('fs');
const path = require('path');

const [,, specPath, outputDir, apiName, originalSpecPath, githubRepo] = process.argv;

// Read and parse OpenAPI spec (already converted to JSON)
const specContent = fs.readFileSync(specPath, 'utf8');
const spec = JSON.parse(specContent);

// Icon mapping for endpoint types
const iconMap = {
  'text-to-image': 'image',
  'image-to-image': 'wand-magic-sparkles',
  'image-to-video': 'video',
  'video-to-video': 'film',
  'live-video-to-video': 'film',
  'upscale': 'up-right-and-down-left-from-center',
  'audio-to-text': 'microphone',
  'text-to-speech': 'volume-high',
  'segment-anything': 'object-group',
  'llm': 'brain',
  'image-to-text': 'message-image',
  'health': 'heart-pulse',
  'hardware': 'microchip',
  'info': 'circle-info',
  'stats': 'chart-line',
  'default': 'code'
};

function getIcon(endpointName) {
  for (const [key, icon] of Object.entries(iconMap)) {
    if (endpointName.toLowerCase().includes(key)) return icon;
  }
  return iconMap.default;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const endpoints = [];
const groups = {};

// Process each path in the spec
for (const [pathUrl, methods] of Object.entries(spec.paths || {})) {
  for (const [method, details] of Object.entries(methods)) {
    if (['get', 'post', 'put', 'patch', 'delete'].includes(method)) {
      const tag = details.tags?.[0] || 'Other';
      const summary = details.summary || pathUrl;
      const description = details.description || '';
      const slug = slugify(pathUrl.replace(/\//g, '-'));
      
      const endpoint = { pathUrl, method, summary, description, slug, tag };
      endpoints.push(endpoint);
      
      if (!groups[tag]) groups[tag] = [];
      groups[tag].push(endpoint);
      
      // Generate individual endpoint MDX file
      const mdxContent = `---
openapi: ${method} ${pathUrl}
---
`;
      fs.writeFileSync(path.join(outputDir, `${slug}.mdx`), mdxContent);
    }
  }
}

// Generate landing page
let landingContent = `---
title: '${apiName} API Portal'
sidebarTitle: '${apiName} API Portal'
description: '${apiName} API Reference Portal - find all API endpoints and try them out here'
tag: 'API Index'
---

`;

// Add GitHub repo card if provided
if (githubRepo) {
  landingContent += `<Card title="View on GitHub" icon="github" href="${githubRepo}" horizontal arrow>
  Source code and OpenAPI specification
</Card>

`;
}

// Add base URLs if available (styled table)
if (spec.servers && spec.servers.length > 0) {
  landingContent += `## Base URLs

<div style={{ overflowX: 'auto', marginBottom: '24px' }}>
<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#2d9a67', color: '#fff' }}>
      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #2d9a67' }}>Environment</th>
      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', borderBottom: '2px solid #2d9a67' }}>URL</th>
    </tr>
  </thead>
  <tbody>
`;
  spec.servers.forEach((server, index) => {
    const bgColor = index % 2 === 0 ? '#1a1a1a' : 'transparent';
    landingContent += `    <tr style={{ borderBottom: '1px solid #333', backgroundColor: '${bgColor}' }}>
      <td style={{ padding: '10px 16px', color: '#2d9a67', fontWeight: '500' }}>${server.description || 'Server'}</td>
      <td style={{ padding: '10px 16px', fontFamily: 'monospace' }}><code>${server.url}</code></td>
    </tr>
`;
  });
  landingContent += `  </tbody>
</table>
</div>

---

`;
}

// Add endpoint cards grouped by tag
for (const [tag, tagEndpoints] of Object.entries(groups)) {
  // Capitalize tag name, skip "generate" tag name, add "Endpoints" suffix
  const tagLower = tag.toLowerCase();
  const tagTitle = tagLower === 'generate' ? 'Endpoints' : (tag.charAt(0).toUpperCase() + tag.slice(1) + ' Endpoints');

  landingContent += `## ${tagTitle}

<CardGroup cols={2}>
`;
  for (const ep of tagEndpoints) {
    const icon = getIcon(ep.slug);
    const cardDesc = ep.description.split('.')[0] || ep.summary;
    landingContent += `  <Card title="${ep.summary}" icon="${icon}" href="${ep.slug}" horizontal arrow>
    ${cardDesc}
  </Card>
`;
  }
  landingContent += `</CardGroup>

`;
}

fs.writeFileSync(path.join(outputDir, `${slugify(apiName)}.mdx`), landingContent);

// Generate navigation JSON snippet
const navPages = [`${outputDir}/${slugify(apiName)}`];
for (const ep of endpoints) {
  navPages.push(`${outputDir}/${ep.slug}`);
}

console.log('\n✅ Generated files in:', outputDir);
console.log('\n📋 Add this to docs.json navigation:\n');
console.log(JSON.stringify({
  group: apiName,
  pages: navPages
}, null, 2));

NODEJS_SCRIPT

echo ""
echo "Done! Check $OUTPUT_DIR for generated files."

