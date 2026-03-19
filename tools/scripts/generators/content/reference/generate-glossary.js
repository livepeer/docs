#!/usr/bin/env node
/**
 * @script            generate-glossary
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Glossary generator — produces glossary data file from terminology sources
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/snippets/generate-data/scripts/generate-glossary.js [flags]
 */

/**
 * Glossary Generation Script
 * 
 * Scans all MDX pages in v1 & v2 for terminology that:
 * - May not be commonly recognized by laypeople
 * - Is Livepeer-specific
 * - Is domain-specific (video, blockchain/crypto, AI)
 * - Is used frequently in the docs
 * 
 * Outputs a JSON data file with:
 * - Term Name (full form with acronyms/abbreviations)
 * - Page(s) the term is used on
 * - Clear Definition
 * - Category (web3, video, AI, Livepeer protocol, technical, etc.)
 * - Tags (for searchability)
 * - External Verification (link to external source)
 * - Context/Usage Notes
 * 
 * Usage: node generate-glossary.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const REPO_ROOT = getRepoRoot();
const V1_PAGES_DIR = path.join(REPO_ROOT, 'v1');
const V2_PAGES_DIRS = [
  'v2/pages',
  'v2/home',
  'v2/solutions',
  'v2/about',
  'v2/community',
  'v2/developers',
  'v2/gateways',
  'v2/orchestrators',
  'v2/lpt',
  'v2/resources',
  'v2/internal',
  'v2/deprecated',
  'v2/experimental',
  'v2/notes'
]
  .map((dir) => path.join(REPO_ROOT, dir))
  .filter((dir) => fs.existsSync(dir));
const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'glossary-terms.json');

const isDryRun = process.argv.includes('--dry-run');

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

// Known terminology patterns and categories
const TERM_PATTERNS = {
  livepeer: {
    category: 'Livepeer Protocol',
    terms: [
      'Livepeer', 'LPT', 'Livepeer Token', 'Livepeer Network', 'Livepeer Protocol',
      'Livepeer Studio', 'Livepeer Foundation', 'Livepeer Inc', 'Livepeer DAO',
      'Orchestrator', 'Delegator', 'Gateway', 'Broadcaster', 'Transcoder',
      'go-livepeer', 'livepeer-ai', 'AI Worker', 'AI Gateway', 'AI Subnet',
      'SPE', 'Special Purpose Entity', 'On-chain Treasury', 'Reward Cut', 'Fee Cut',
      'Probabilistic Micropayments', 'Payment Ticket', 'Ticket', 'Rounds',
      'Staking', 'Delegation', 'Slashing', 'Inflation', 'Reputation',
      'Daydream', 'Streamplace'
    ]
  },
  web3: {
    category: 'Web3 / Blockchain',
    terms: [
      'Ethereum', 'ETH', 'Arbitrum', 'ARB', 'Layer 2', 'L2', 'Mainnet', 'Testnet',
      'Smart Contract', 'DAO', 'Decentralized Autonomous Organization',
      'DePIN', 'Decentralized Physical Infrastructure Network',
      'Wallet', 'Private Key', 'Public Key', 'Address', 'Transaction', 'Gas',
      'Block', 'Blockchain', 'Consensus', 'Proof of Stake', 'PoS',
      'Token', 'ERC-20', 'NFT', 'Bridge', 'Bridging', 'Rollup', 'Rollups',
      'On-chain', 'Off-chain', 'Tokenomics', 'Game Theory', 'Governance'
    ]
  },
  video: {
    category: 'Video Engineering',
    terms: [
      'Transcoding', 'Transcode', 'Ingest', 'Delivery', 'Streaming', 'Stream',
      'RTMP', 'HLS', 'WebRTC', 'SRT', 'DASH', 'Codec', 'H.264', 'H.265', 'HEVC',
      'VP9', 'AV1', 'Bitrate', 'Resolution', 'Frame Rate', 'FPS', 'Keyframe',
      'Segment', 'Manifest', 'Playlist', 'ABR', 'Adaptive Bitrate',
      'CDN', 'Content Delivery Network', 'Latency', 'Buffering',
      'Rendition', 'Quality Ladder', 'Encoding', 'Decoding', 'Muxing',
      'Live Stream', 'VOD', 'Video on Demand', 'Playback'
    ]
  },
  ai: {
    category: 'AI / Machine Learning',
    terms: [
      'Inference', 'Model', 'Pipeline', 'GPU', 'CUDA', 'TensorRT',
      'Diffusion', 'Stable Diffusion', 'ControlNet', 'LoRA', 'ComfyUI',
      'LLM', 'Large Language Model', 'Transformer', 'Neural Network',
      'Real-Time AI', 'World Model', 'Agent', 'Embedding', 'Vector',
      'Image-to-Image', 'Text-to-Image', 'Image-to-Video', 'Text-to-Video',
      'Upscaling', 'Super Resolution', 'Depth Estimation', 'Segmentation',
      'Object Detection', 'Face Detection', 'Pose Estimation',
      'Prompt', 'Negative Prompt', 'CFG Scale', 'Steps', 'Seed', 'Batch'
    ]
  },
  technical: {
    category: 'Technical',
    terms: [
      'API', 'REST', 'GraphQL', 'WebSocket', 'HTTP', 'HTTPS', 'JSON', 'YAML',
      'SDK', 'CLI', 'Docker', 'Container', 'Kubernetes', 'Node', 'Server',
      'Endpoint', 'Request', 'Response', 'Authentication', 'Authorization',
      'JWT', 'OAuth', 'Webhook', 'Callback', 'Polling', 'Rate Limit',
      'Timeout', 'Retry', 'Cache', 'Load Balancer', 'Proxy', 'Reverse Proxy',
      'SSL', 'TLS', 'Certificate', 'DNS', 'IP Address', 'Port', 'Protocol'
    ]
  }
};

/**
 * Find all MDX files in a directory recursively
 */
function findMdxFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Extract text content from MDX file (strip JSX/imports)
 */
function extractTextContent(content) {
  // Remove frontmatter
  content = content.replace(/^---[\s\S]*?---/, '');
  // Remove import statements
  content = content.replace(/^import\s+.*$/gm, '');
  // Remove JSX tags but keep text content
  content = content.replace(/<[^>]+>/g, ' ');
  // Remove code blocks
  content = content.replace(/```[\s\S]*?```/g, '');
  content = content.replace(/`[^`]+`/g, '');
  // Remove markdown links but keep text
  content = content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Remove markdown formatting
  content = content.replace(/[*_#]+/g, '');
  return content;
}

/**
 * Count term occurrences in content
 */
function countTermOccurrences(content, term) {
  const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
  const matches = content.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Scan files for terms and build term index
 */
function scanFilesForTerms(files) {
  const termIndex = {};

  // Initialize term index with all known terms
  for (const [categoryKey, categoryData] of Object.entries(TERM_PATTERNS)) {
    for (const term of categoryData.terms) {
      const termKey = term.toLowerCase();
      if (!termIndex[termKey]) {
        termIndex[termKey] = {
          termName: term,
          category: categoryData.category,
          pages: [],
          totalOccurrences: 0,
          definition: '',
          tags: [categoryKey],
          externalVerification: '',
          contextNotes: ''
        };
      }
    }
  }

  // Scan each file
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const textContent = extractTextContent(content);
    const relativePath = path.relative(REPO_ROOT, file);

    for (const [termKey, termData] of Object.entries(termIndex)) {
      const count = countTermOccurrences(textContent, termData.termName);
      if (count > 0) {
        termData.pages.push({
          path: relativePath,
          occurrences: count
        });
        termData.totalOccurrences += count;
      }
    }
  }

  return termIndex;
}

/**
 * Load existing definitions from glossary file
 */
function loadExistingDefinitions() {
  const glossaryPathCandidates = [
    path.join(REPO_ROOT, 'v2/resources/livepeer-glossary.mdx'),
    path.join(REPO_ROOT, 'v2/resources/livepeer-glossary.mdx')
  ];
  const glossaryPath = glossaryPathCandidates.find((candidate) => fs.existsSync(candidate));
  if (!glossaryPath) return {};

  const content = fs.readFileSync(glossaryPath, 'utf-8');
  const definitions = {};

  // Parse ### headings and their content
  const sections = content.split(/^###\s+/gm);
  for (const section of sections) {
    if (!section.trim()) continue;
    const lines = section.split('\n');
    const termLine = lines[0].trim().replace(/\*\*/g, '');
    const term = termLine.replace(/\s*\([^)]*\)\s*$/, '').trim();
    const definition = lines.slice(1).join('\n').trim();
    if (term && definition) {
      definitions[term.toLowerCase()] = definition;
    }
  }

  return definitions;
}

/**
 * Generate default definitions for common terms
 */
function getDefaultDefinition(term, category) {
  const defaults = {
    'lpt': 'Livepeer Token (LPT) is the native governance and staking token of the Livepeer network, used for orchestrator selection, delegation, reward distribution, and protocol security.',
    'eth': 'Ethereum (ETH) is the native cryptocurrency of the Ethereum blockchain, used to pay for transaction fees and computational services.',
    'arb': 'Arbitrum (ARB) is the native token of the Arbitrum Layer 2 network, used for governance and transaction fees.',
    'orchestrator': 'An Orchestrator is a supply-side operator that contributes GPU resources to the Livepeer network, receiving jobs, performing transcoding or AI inference, and earning LPT rewards plus ETH fees.',
    'delegator': 'A Delegator is a token holder who stakes their LPT to an orchestrator to help secure the network and earn a share of rewards.',
    'gateway': 'A Gateway is a Livepeer node operated by a user or organization to interact directly with the Livepeer protocol, submitting jobs, routing work to orchestrators, and managing payment flows.',
    'transcoding': 'Transcoding is the process of converting video from one format, resolution, or bitrate to another, enabling efficient distribution across different devices and network conditions.',
    'inference': 'Inference is the process of running a machine learning model to generate outputs (such as images, video frames, or predictions) from given inputs.',
    'rtmp': 'Real-Time Messaging Protocol (RTMP) is a communication protocol for streaming audio, video, and data over the Internet, commonly used for live stream ingest.',
    'hls': 'HTTP Live Streaming (HLS) is an adaptive bitrate streaming protocol developed by Apple, widely used for delivering video content to end-users.',
    'dao': 'A Decentralized Autonomous Organization (DAO) is an organization managed by decentralized computer programs, with voting and finances handled through blockchain technology.',
    'depin': 'Decentralized Physical Infrastructure Network (DePIN) refers to networks where physical or computational resources are coordinated through crypto-economic incentives.',
  };

  return defaults[term.toLowerCase()] || '';
}

/**
 * Generate external verification links
 */
function getExternalLink(term, category) {
  const links = {
    'ethereum': 'https://ethereum.org/',
    'arbitrum': 'https://arbitrum.io/',
    'rtmp': 'https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol',
    'hls': 'https://developer.apple.com/streaming/',
    'dao': 'https://en.wikipedia.org/wiki/Decentralized_autonomous_organization',
    'depin': 'https://messari.io/report/state-of-depin-2023',
    'livepeer': 'https://livepeer.org/',
    'lpt': 'https://livepeer.org/primer',
    'stable diffusion': 'https://stability.ai/',
    'controlnet': 'https://github.com/lllyasviel/ControlNet',
    'tensorrt': 'https://developer.nvidia.com/tensorrt',
  };

  return links[term.toLowerCase()] || '';
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Livepeer Glossary Generator\n');

  if (isDryRun) {
    console.log('🏃 Running in DRY RUN mode - no files will be written\n');
  }

  // Find all MDX files
  const v1Files = findMdxFiles(V1_PAGES_DIR);
  const v2FileSet = new Set();
  for (const pagesDir of V2_PAGES_DIRS) {
    for (const filePath of findMdxFiles(pagesDir)) {
      v2FileSet.add(filePath);
    }
  }
  const v2Files = Array.from(v2FileSet);
  const allFiles = [...v1Files, ...v2Files];

  console.log(`📚 Found ${v1Files.length} v1 files and ${v2Files.length} v2 files\n`);

  // Scan files for terms
  console.log('🔎 Scanning files for terminology...\n');
  const termIndex = scanFilesForTerms(allFiles);

  // Load existing definitions
  const existingDefs = loadExistingDefinitions();
  console.log(`📖 Loaded ${Object.keys(existingDefs).length} existing definitions\n`);

  // Enrich term data
  const glossaryTerms = [];
  for (const [termKey, termData] of Object.entries(termIndex)) {
    // Skip terms with no occurrences
    if (termData.totalOccurrences === 0) continue;

    // Add definition from existing glossary or defaults
    termData.definition = existingDefs[termKey] || getDefaultDefinition(termData.termName, termData.category);

    // Add external verification link
    termData.externalVerification = getExternalLink(termData.termName, termData.category);

    // Sort pages by occurrence count
    termData.pages.sort((a, b) => b.occurrences - a.occurrences);

    glossaryTerms.push(termData);
  }

  // Sort by total occurrences
  glossaryTerms.sort((a, b) => b.totalOccurrences - a.totalOccurrences);

  console.log(`✅ Found ${glossaryTerms.length} terms with occurrences\n`);

  // Output results
  const output = {
    generatedAt: new Date().toISOString(),
    totalTerms: glossaryTerms.length,
    terms: glossaryTerms
  };

  if (isDryRun) {
    console.log('📋 Top 20 terms by occurrence:\n');
    glossaryTerms.slice(0, 20).forEach((term, i) => {
      console.log(`  ${i + 1}. ${term.termName} (${term.totalOccurrences} occurrences, ${term.pages.length} pages)`);
    });
  } else {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`💾 Saved glossary data to ${path.relative(REPO_ROOT, OUTPUT_FILE)}\n`);
  }

  console.log('✨ Done!\n');
}

main();
