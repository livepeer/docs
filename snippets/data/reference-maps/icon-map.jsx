export const iconMapMethodology = {
  generatedOn: '2026-03-21',
  scope: 'Current English MDX under v2/ and docs-guide/ (locale copies and internal excluded)',
  exclusions: [
    '_archive',
    'x-archived',
    'v2/cn',
    'v2/fr',
    'v2/es',
    'v2/internal',
  ],
  notes: [
    'This is a canonical semantic map, not a hard validation contract.',
    'Scan counts reflect current repo usage and indicate overload risk.',
    'The map covers all icons with 10+ occurrences in the corpus.',
    'Use audit-icon-usage.js to check compliance against this map.',
    'The map feeds validators, authoring helpers, and generated reference pages.',
  ],
};

export const iconMapSections = [
  {
    id: 'actors',
    title: 'Actors And Personas',
    description:
      'Use these when the icon is standing in for a role, operator path, or reader persona.',
    entries: [
      {
        icon: 'server',
        label: 'Gateway / self-managed infra',
        scanCount: 78,
        useFor:
          'Gateway actor labels, direct-node deployment paths, self-hosted infrastructure, and fleet-oriented setup choices.',
        avoid:
          'Avoid for generic configuration or any page that is really about hardware acceleration.',
        components: ['Card', 'Tab', 'Accordion', 'path selector'],
        examples: [
          'v2/developers/concepts/running-a-gateway.mdx',
          'v2/orchestrators/guides/advanced-operations/orchestrator-transcoder-setup.mdx',
          'v2/orchestrators/guides/setup-paths/find-your-path.mdx',
        ],
      },
      {
        icon: 'microchip',
        label: 'Orchestrator / compute node',
        scanCount: 91,
        useFor:
          'Orchestrator role labels, GPU-backed compute paths, hardware-oriented setup choices, and node runtime surfaces.',
        avoid:
          'Avoid for general AI product pages where the focus is workflows rather than node hardware or operator runtime.',
        components: ['Card', 'Tab', 'Step', 'Accordion'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/orchestrators/guides/feasibility-and-hardware/benchmarking.mdx',
        ],
      },
      {
        icon: 'user-robot',
        label: 'AI builder persona',
        scanCount: 13,
        useFor:
          'AI-native builder paths, AI persona tabs, and product-entry surfaces aimed at developers building with AI workloads.',
        avoid:
          'Avoid as the default icon for infrastructure operators or model-runtime internals.',
        components: ['Card', 'Tab', 'portal card'],
        examples: [
          'v2/developers/portal.mdx',
        ],
      },
      {
        icon: 'coins',
        label: 'Delegator / economics / rewards',
        scanCount: 86,
        useFor:
          'Delegator-facing paths, rewards, pricing, fees, funding, and economics sections.',
        avoid:
          'Avoid when the page is specifically about balances or wallet actions rather than economics or incentives.',
        components: ['Card', 'Accordion', 'Tab', 'comparison row'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/developers/navigator.mdx',
          'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx',
        ],
      },
      {
        icon: 'wallet',
        label: 'Balances / funding / payout state',
        scanCount: 8,
        useFor:
          'Funding guides, payout references, exchange/funding steps, and wallet-state concepts.',
        avoid:
          'Avoid as the default icon for broader rewards or token-economics pages.',
        components: ['Card', 'Accordion', 'guide CTA'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/gateways/resources/technical/new-contract-addresses.mdx',
        ],
      },
    ],
  },
  {
    id: 'ai-compute',
    title: 'AI And Compute',
    description:
      'Reserve these for AI-specific workload, inference, BYOC, and compute-routing surfaces.',
    entries: [
      {
        icon: 'wand-magic-sparkles',
        label: 'AI hub / AI preview / AI jump pad',
        scanCount: 28,
        useFor:
          'High-level AI entry points, AI jump-pad sections, preview badges, and AI-first navigation surfaces.',
        avoid:
          'Avoid for generic novelty, general announcements, or low-level runtime/config pages.',
        components: ['Badge', 'Card', 'portal section', 'section header'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/orchestrators/portal.mdx',
          'v2/developers/get-started/contributor-quickstart.mdx',
        ],
      },
      {
        icon: 'brain-circuit',
        label: 'AI SDK / AI workflow logic',
        scanCount: 4,
        useFor:
          'AI SDKs, AI pipeline explainers, and workflow-building surfaces where the focus is model logic rather than infrastructure.',
        avoid:
          'Avoid for node hardware, GPU sizing, or general developer docs that are not AI-specific.',
        components: ['Card', 'Step', 'resource listing'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
          'v2/developers/guides/developer-guides.mdx',
        ],
      },
      {
        icon: 'brain',
        label: 'AI model / machine learning concept',
        scanCount: 17,
        useFor:
          'AI model references, machine learning concepts, and content specifically about model selection or capabilities.',
        avoid:
          'Avoid for infrastructure or SDK pages — prefer `brain-circuit` for AI pipeline logic or `microchip-ai` for model runtime.',
        components: ['Card', 'Accordion', 'concept reference'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
          'v2/solutions/frameworks/overview.mdx',
        ],
      },
      {
        icon: 'microchip-ai',
        label: 'AI node runtime / model support',
        scanCount: 10,
        useFor:
          'AI pipeline runtime pages, model-support references, and operator-facing AI workload configuration.',
        avoid:
          'Avoid as the top-level icon for AI product marketing or builder persona routing.',
        components: ['Card', 'Tab', 'reference CTA'],
        examples: [
          'v2/gateways/guides/node-pipelines/ai-pipelines.mdx',
          'v2/orchestrators/quickstart/guide.mdx',
        ],
      },
      {
        icon: 'cube',
        label: 'BYOC / containerised workload',
        scanCount: 15,
        useFor:
          'BYOC, packaged runtimes, container-based integrations, and external compute packaging.',
        avoid:
          'Avoid for generic infrastructure or network topology pages.',
        components: ['Card', 'Tab', 'setup choice'],
        examples: [
          'v2/developers/get-started/comfystream-quickstart.mdx',
          'v2/developers/navigator.mdx',
        ],
      },
      {
        icon: 'network-wired',
        label: 'Network integration / SDK connectivity',
        scanCount: 15,
        useFor:
          'SDK collections, API connectivity, pools, or surfaces centred on integration into the network.',
        avoid:
          'Avoid when the page is about business relationships or abstract architecture diagrams.',
        components: ['Card', 'reference CTA'],
        examples: [
          'v2/developers/resources/reference/sdks.mdx',
          'v2/orchestrators/navigator.mdx',
        ],
      },
    ],
  },
  {
    id: 'video-media',
    title: 'Video And Media',
    description:
      'Use these when the content is distinctly about video workloads, playback, or media-facing product paths.',
    entries: [
      {
        icon: 'video',
        label: 'Video concept / video product page',
        scanCount: 45,
        useFor:
          'Video product sections, video-specific concepts, and pages primarily about video processing as a topic.',
        avoid:
          'Avoid where the focus is a specific workload type (use `film` for transcoding pipelines) or creator-facing app (use `video-camera`).',
        components: ['Card', 'Tab', 'Accordion'],
        examples: [
          'v2/solutions/livepeer-studio/docs/reference/overview.mdx',
          'v2/about/concepts/livepeer-overview.mdx',
        ],
      },
      {
        icon: 'film-canister',
        label: 'Video platform / gateway video route',
        scanCount: 6,
        useFor:
          'Gateway video navigation, product-level video surfaces, and media-routing entry points.',
        avoid:
          'Avoid for generic playback actions or individual tutorials about watching content.',
        components: ['Card', 'Tab', 'portal CTA'],
        examples: [
          'v2/gateways/portal.mdx',
          'v2/gateways/setup/configure/configuration-overview.mdx',
        ],
      },
      {
        icon: 'film',
        label: 'Video workload / transcoding',
        scanCount: 12,
        useFor:
          'Video pipelines, transcoding workloads, and operator paths that are specifically about media processing.',
        avoid:
          'Avoid for top-level product hubs or viewer-facing watch actions.',
        components: ['Card', 'Accordion', 'path selector'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/gateways/concepts/role.mdx',
        ],
      },
      {
        icon: 'video-camera',
        label: 'Video app / creator-facing surface',
        scanCount: 6,
        useFor:
          'Video app-builder paths, creator use cases, or pages framed around live/video experiences rather than backend pipelines.',
        avoid:
          'Avoid for lower-level transcoding or node-operation pages.',
        components: ['Card', 'portal CTA', 'hero callout'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/home/about-livepeer/benefits.mdx',
        ],
      },
      {
        icon: 'circle-play',
        label: 'Watch / demo / start-with-video',
        scanCount: 17,
        useFor:
          'Demo entry points, featured video tutorials, player examples, and watch-first surfaces.',
        avoid:
          'Avoid as the default icon for all video pages when the content is really about processing or platform architecture.',
        components: ['BlinkingIcon', 'Card', 'featured link'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/gateways/portal.mdx',
        ],
      },
    ],
  },
  {
    id: 'docs-ia',
    title: 'Docs And Information Architecture',
    description:
      'These are best for documentation structure, reference collections, and authored-content building blocks.',
    entries: [
      {
        icon: 'book',
        label: 'General docs / learning resource',
        scanCount: 44,
        useFor:
          'General documentation links, learning resources, and broad reference destinations.',
        avoid:
          'Avoid when the destination is a specific guide collection or an open-book style reading path.',
        components: ['Card', 'Accordion', 'resource CTA'],
        examples: [
          'v2/developers/get-started/contributor-quickstart.mdx',
          'v2/orchestrators/portal.mdx',
        ],
      },
      {
        icon: 'book-open',
        label: 'Guide collection / open reference',
        scanCount: 1237,
        useFor:
          'Guide hubs, docs repositories, or reading-oriented references where the open-book metaphor fits. Also the default accordion icon across the codebase — this is why the count is very high.',
        avoid:
          'Avoid for every documentation link by default; keep a distinction from `book`.',
        components: ['Card', 'reference CTA', 'Accordion (default)'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
          'v2/orchestrators/rc-navigator.mdx',
        ],
      },
      {
        icon: 'file-lines',
        label: 'Templates / documents / written artefacts',
        scanCount: 9,
        useFor:
          'Proposal templates, content blocks, document examples, or other text-first artefacts.',
        avoid:
          'Avoid for broader documentation libraries where `book` or `book-open` is clearer.',
        components: ['Card', 'Accordion'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'v2/developers/guides/opportunities/rfps-and-proposals.mdx',
        ],
      },
      {
        icon: 'table-columns',
        label: 'Table / layout block library',
        scanCount: 3,
        useFor:
          'Table snippets, layout-block collections, and content-structure references.',
        avoid:
          'Avoid for general data references when the content is really about datasets or backends.',
        components: ['Accordion', 'tooling reference'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
        ],
      },
      {
        icon: 'layer-group',
        label: 'Page structure / layered system',
        scanCount: 26,
        useFor:
          'Page-structure inventories, middleware/layered architecture, and platform-build surfaces.',
        avoid:
          'Avoid for data or document-only references.',
        components: ['Accordion', 'Tab', 'Card'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'v2/gateways/navigator.mdx',
        ],
      },
      {
        icon: 'database',
        label: 'Data source / dataset / subgraph',
        scanCount: 7,
        useFor:
          'Data references, subgraphs, datasets, and data-centric tooling.',
        avoid:
          'Avoid for general reference docs that are not data-oriented.',
        components: ['Accordion', 'Card', 'resource CTA'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'v2/developers/resources/compendium/resources.mdx',
        ],
      },
    ],
  },
  {
    id: 'ops-tooling',
    title: 'Operations And Tooling',
    description:
      'Use these for setup flow, CLI surfaces, configuration, validation, and troubleshooting.',
    entries: [
      {
        icon: 'rocket',
        label: 'Quickstart / launch path',
        scanCount: 36,
        useFor:
          'Get-started routes, quickstart cards, launch paths, and first-run guidance.',
        avoid:
          'Avoid for all forward navigation; use only when the page really represents a start or launch path. Prefer `bolt` for speed-cue quickstart cards.',
        components: ['Card', 'Accordion', 'guide CTA'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/developers/portal.mdx',
        ],
      },
      {
        icon: 'terminal',
        label: 'CLI / shell / command execution',
        scanCount: 1135,
        useFor:
          'CLI references, shell-based setup, command-heavy workflows, and terminal-first pages. Also used as the default tab icon for OS/platform tabs — this accounts for the very high count.',
        avoid:
          'Avoid for general tooling pages that are not command-centric.',
        components: ['Accordion', 'Card', 'code-adjacent CTA', 'Tab (default)'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'gear',
        label: 'Settings / metadata / repo configuration',
        scanCount: 17,
        useFor:
          'Metadata, settings, hook configuration, and repo-level operational controls.',
        avoid:
          'Avoid as a synonym for troubleshooting or generic toolboxes.',
        components: ['Accordion', 'settings CTA'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'docs-guide/tooling/lpd-cli.mdx',
        ],
      },
      {
        icon: 'gears',
        label: 'Advanced config / multi-component settings',
        scanCount: 11,
        useFor:
          'Advanced or multi-part configuration, compound settings surfaces, and system-level tuning.',
        avoid:
          'Avoid as a synonym for single-setting or metadata pages (use `gear` for those).',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/orchestrators/guides/advanced-operations/orchestrator-transcoder-setup.mdx',
          'v2/gateways/setup/configure/configuration-overview.mdx',
        ],
      },
      {
        icon: 'sliders',
        label: 'Tuning / configuration knobs',
        scanCount: 29,
        useFor:
          'Runtime configuration, tuning, pricing/config surfaces, and adjustable operating parameters.',
        avoid:
          'Avoid for static metadata or install-only flows.',
        components: ['Card', 'config CTA'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
          'v2/developers/resources/compendium/resources.mdx',
        ],
      },
      {
        icon: 'tools',
        label: 'Operational toolset / admin toolkit',
        scanCount: 9,
        useFor:
          'Collections of operational tools, admin utilities, or quick-access tooling hubs.',
        avoid:
          'Avoid when the page is specifically about fixing problems (`wrench`) or metadata/config (`gear`).',
        components: ['Card', 'portal CTA'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/orchestrators/portal.mdx',
        ],
      },
      {
        icon: 'wrench',
        label: 'Troubleshooting / maintenance',
        scanCount: 5,
        useFor:
          'Troubleshooting pages, operational break-fix paths, and maintenance references.',
        avoid:
          'Avoid for general tool listings or initial setup guidance.',
        components: ['Accordion', 'Card', 'support CTA'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/orchestrators/portal.mdx',
        ],
      },
      {
        icon: 'check-circle',
        label: 'Validation / expected result',
        scanCount: 2,
        useFor:
          'Validation and CI sections, expected-results accordions, and pass/fail verification points.',
        avoid:
          'Avoid as a generic success icon on overview pages.',
        components: ['Accordion', 'validation callout'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
        ],
      },
    ],
  },
  {
    id: 'network-external',
    title: 'Network, On-Chain, And External',
    description:
      'Use these for protocol relationships, external sources, and community surfaces.',
    entries: [
      {
        icon: 'ethereum',
        label: 'ETH / on-chain / smart contracts',
        scanCount: 14,
        useFor:
          'ETH funding, on-chain setup, contract tooling, and chain-specific references.',
        avoid:
          'Avoid for generic crypto concepts when the page is not actually chain- or ETH-specific.',
        components: ['Card', 'Accordion', 'funding reference'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
          'v2/gateways/guides/payments-and-pricing/funding-guide.mdx',
        ],
      },
      {
        icon: 'diagram-project',
        label: 'Relationships / topology / delegation model',
        scanCount: 32,
        useFor:
          'Architecture relationships, staking/delegation models, and network topology surfaces.',
        avoid:
          'Avoid for generic flowcharts where another more specific domain icon exists.',
        components: ['Card', 'concept CTA', 'relationship view'],
        examples: [
          'v2/orchestrators/concepts/role.mdx',
          'v2/orchestrators/navigator.mdx',
        ],
      },
      {
        icon: 'github',
        label: 'Source repo / issue tracker / code host',
        scanCount: 147,
        useFor:
          'GitHub repos, issue trackers, code sources, and open-source references.',
        avoid:
          'Avoid for generic external links. Keep it specific to GitHub destinations.',
        components: ['Card', 'portal CTA', 'external reference'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/developers/resources/knowledge-hub/awesome-livepeer.mdx',
        ],
      },
      {
        icon: 'discord',
        label: 'Discord community / chat support',
        scanCount: 16,
        useFor:
          'Discord join paths, live community help, and chat-based support destinations.',
        avoid:
          'Avoid for the forum or long-form discussions.',
        components: ['Card', 'community CTA'],
        examples: [
          'v2/developers/resources/compendium/developer-help.mdx',
          'v2/community/community-portal.mdx',
        ],
      },
      {
        icon: 'comments',
        label: 'Forum / discussion thread',
        scanCount: 20,
        useFor:
          'Forum links, community discussion threads, and long-form Q&A surfaces.',
        avoid:
          'Avoid for synchronous chat destinations like Discord.',
        components: ['Card', 'forum CTA'],
        examples: [
          'v2/developers/resources/compendium/developer-help.mdx',
          'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx',
        ],
      },
      {
        icon: 'globe-pointer',
        label: 'External docs / knowledge map',
        scanCount: 2,
        useFor:
          'External documentation sites, discovery maps, or third-party knowledge portals.',
        avoid:
          'Avoid when a more specific brand or platform icon exists.',
        components: ['Card', 'reference CTA'],
        examples: [
          'v2/developers/resources/knowledge-hub/deepwiki.mdx',
        ],
      },
      {
        icon: 'link',
        label: 'Connection / endpoint / path link',
        scanCount: 71,
        useFor:
          'RPC endpoints, on-chain gateway/payment-path distinctions, or simple connection references.',
        avoid:
          'Avoid as a generic external-link stand-in. It becomes too vague when overused.',
        components: ['Card', 'Tab', 'resource CTA'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
          'v2/gateways/concepts/role.mdx',
        ],
      },
    ],
  },
  // --- New sections ---
  {
    id: 'platform-env',
    title: 'Platform And Environment',
    description:
      'Use these when the icon signals an operating system, deployment environment, or distribution format.',
    entries: [
      {
        icon: 'docker',
        label: 'Docker / containerised deployment',
        scanCount: 62,
        useFor:
          'Docker-based setup paths, container runtime tabs, and pages specifically about containerised deployments.',
        avoid:
          'Avoid as a generic cloud or infra icon. Reserve for container-specific steps.',
        components: ['Tab', 'Card', 'Step'],
        examples: [
          'v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx',
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'linux',
        label: 'Linux / server OS',
        scanCount: 37,
        useFor:
          'Linux-specific setup tabs, server OS instructions, and binary deployment paths targeting Linux.',
        avoid:
          'Avoid for general OS-agnostic setup guides.',
        components: ['Tab', 'Card'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
          'v2/gateways/setup/requirements/setup.mdx',
        ],
      },
      {
        icon: 'windows',
        label: 'Windows / desktop OS',
        scanCount: 31,
        useFor:
          'Windows-specific setup tabs and instructions targeting Windows deployments.',
        avoid:
          'Avoid for server or container paths where Linux or Docker is more appropriate.',
        components: ['Tab', 'Card'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'apple',
        label: 'macOS / Apple platform',
        scanCount: 10,
        useFor:
          'macOS-specific setup tabs, developer-workstation instructions, and Apple-platform paths.',
        avoid:
          'Avoid for server or production deployment contexts.',
        components: ['Tab', 'Card'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'cloud',
        label: 'Managed / hosted / cloud platform',
        scanCount: 24,
        useFor:
          'Managed platform options, cloud-hosted deployments, and hosted-service entry points.',
        avoid:
          'Avoid for self-hosted or on-premise paths (use `server`) or for generic infrastructure diagrams.',
        components: ['Card', 'Tab', 'setup choice'],
        examples: [
          'v2/gateways/guides/deployment-details/setup-options.mdx',
          'v2/developers/portal.mdx',
        ],
      },
      {
        icon: 'box',
        label: 'Package / bundle / distribution',
        scanCount: 15,
        useFor:
          'Package references, software bundles, distribution archives, and release artefacts.',
        avoid:
          'Avoid for Docker containers (use `docker`) or runtime environments.',
        components: ['Card', 'Accordion', 'resource CTA'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
    ],
  },
  {
    id: 'code-dev',
    title: 'Code And Development',
    description:
      'Use these for code-facing surfaces, SDK and API references, developer integrations, and metrics.',
    entries: [
      {
        icon: 'code',
        label: 'Code snippet / developer surface',
        scanCount: 148,
        useFor:
          'Code examples, inline code references, developer-oriented pages, and any surface where the primary output is code.',
        avoid:
          'Avoid as a generic icon for all developer content. Reserve for code-first pages and snippets.',
        components: ['Card', 'Accordion', 'Tab'],
        examples: [
          'v2/developers/guides/developer-guides.mdx',
          'v2/developers/resources/reference/apis.mdx',
        ],
      },
      {
        icon: 'brackets-curly',
        label: 'JSON / config / structured data',
        scanCount: 10,
        useFor:
          'JSON configuration references, structured data files, and config-schema documentation.',
        avoid:
          'Avoid for general developer pages — prefer `code` for code surfaces and `database` for data storage.',
        components: ['Accordion', 'reference CTA'],
        examples: [
          'v2/developers/resources/reference/apis.mdx',
        ],
      },
      {
        icon: 'python',
        label: 'Python SDK / Python-specific reference',
        scanCount: 11,
        useFor:
          'Python SDK references, Python code examples, and Python-specific integration paths.',
        avoid:
          'Avoid for general code surfaces; use `code` for language-agnostic examples.',
        components: ['Card', 'Tab', 'SDK reference'],
        examples: [
          'v2/developers/resources/reference/sdks.mdx',
          'v2/gateways/guides/node-pipelines/ai-pipelines.mdx',
        ],
      },
      {
        icon: 'puzzle-piece',
        label: 'Integration / plugin / extension',
        scanCount: 13,
        useFor:
          'Third-party integrations, plugin surfaces, framework extensions, and composable additions.',
        avoid:
          'Avoid for SDK or API references (use `network-wired` or `code`) where the focus is connectivity.',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
          'v2/solutions/frameworks/overview.mdx',
        ],
      },
      {
        icon: 'code-branch',
        label: 'Version / branch / fork',
        scanCount: 12,
        useFor:
          'Version references, branching strategies, fork guides, and release-branch documentation.',
        avoid:
          'Avoid for general code surfaces; this is specifically for versioning and branching concepts.',
        components: ['Card', 'Accordion', 'version CTA'],
        examples: [
          'v2/resources/documentation-guide/contribute-to-the-docs.mdx',
          'v2/developers/guides/opportunities/oss-contributions.mdx',
        ],
      },
      {
        icon: 'chart-line',
        label: 'Metrics / analytics / performance chart',
        scanCount: 62,
        useFor:
          'Performance dashboards, analytics surfaces, metrics references, and data visualisation entry points.',
        avoid:
          'Avoid for static benchmark tables or hardware specs (use `gauge` for throughput/speed contexts).',
        components: ['Card', 'Accordion', 'dashboard CTA'],
        examples: [
          'v2/orchestrators/guides/feasibility-and-hardware/benchmarking.mdx',
          'v2/developers/resources/compendium/resources.mdx',
        ],
      },
      {
        icon: 'gauge',
        label: 'Performance benchmark / throughput indicator',
        scanCount: 22,
        useFor:
          'Hardware performance pages, throughput references, GPU benchmark results, and speed-oriented setup guides.',
        avoid:
          'Avoid for metrics dashboards (use `chart-line`) or general analytics.',
        components: ['Card', 'Accordion', 'benchmark reference'],
        examples: [
          'v2/orchestrators/guides/feasibility-and-hardware/benchmarking.mdx',
          'v2/gateways/setup/requirements/setup.mdx',
        ],
      },
      {
        icon: 'gauge-high',
        label: 'High-throughput / peak performance',
        scanCount: 15,
        useFor:
          'Peak-performance references, high-throughput capability callouts, and top-tier benchmarking sections.',
        avoid:
          'Use `gauge` for general performance pages and `gauge-high` only when the content specifically emphasises peak or maximum throughput.',
        components: ['Card', 'Accordion', 'benchmark reference'],
        examples: [
          'v2/orchestrators/guides/feasibility-and-hardware/benchmarking.mdx',
        ],
      },
      {
        icon: 'floppy-disk',
        label: 'Save / persist / export artefact',
        scanCount: 14,
        useFor:
          'Save-state references, export steps, persisted configuration, and output-artefact pages.',
        avoid:
          'Avoid for general data storage (use `database`) or package distribution (use `box`).',
        components: ['Card', 'Step', 'action CTA'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
          'v2/gateways/setup/configure/configuration-overview.mdx',
        ],
      },
    ],
  },
  {
    id: 'protocol-economics',
    title: 'Protocol, Economics, And Governance',
    description:
      'Use these for on-chain governance, ecosystem economics, institutional references, and partnership surfaces.',
    entries: [
      {
        icon: 'hand-holding-dollar',
        label: 'Grant / subsidy / financial support',
        scanCount: 28,
        useFor:
          'Grant programmes, subsidised infrastructure, ecosystem funding, and financial-support entry points.',
        avoid:
          'Avoid for general rewards or staking pages (use `coins`) or wallet-funding steps (use `wallet`).',
        components: ['Card', 'Accordion', 'programme CTA'],
        examples: [
          'v2/developers/guides/opportunities/grants-and-programmes.mdx',
          'v2/gateways/guides/opportunities/community-ecosystem.mdx',
        ],
      },
      {
        icon: 'building-columns',
        label: 'Protocol governance / treasury / institutional',
        scanCount: 27,
        useFor:
          'Protocol governance pages, treasury discussions, voting surfaces, and institutional-level references.',
        avoid:
          'Avoid for general blockchain or on-chain pages (use `ethereum` for ETH-specific).',
        components: ['Card', 'Accordion', 'governance CTA'],
        examples: [
          'v2/about/protocol/overview.mdx',
          'v2/community/livepeer-community/livepeer-latest-topics.mdx',
        ],
      },
      {
        icon: 'scale-balanced',
        label: 'Policy / fairness / compliance',
        scanCount: 14,
        useFor:
          'Policy documents, fairness references, compliance guides, and balance-of-terms surfaces.',
        avoid:
          'Avoid for general governance — `building-columns` is the better fit for voting and treasury.',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/gateways/guides/operator-considerations/policies.mdx',
        ],
      },
      {
        icon: 'handshake',
        label: 'Partnership / collaboration / agreement',
        scanCount: 12,
        useFor:
          'Partnership pages, collaboration surfaces, and agreement or terms-of-service references.',
        avoid:
          'Avoid for community chat or forum surfaces (use `discord` or `comments`).',
        components: ['Card', 'Accordion', 'partner CTA'],
        examples: [
          'v2/solutions/frameworks/overview.mdx',
          'v2/developers/guides/opportunities/grants-and-programmes.mdx',
        ],
      },
      {
        icon: 'tag',
        label: 'Category / label / tier',
        scanCount: 20,
        useFor:
          'Category labels, pricing tiers, classification tags, and tier-based comparison surfaces.',
        avoid:
          'Avoid for general metadata or settings pages.',
        components: ['Card', 'Tab', 'comparison row'],
        examples: [
          'v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx',
          'v2/orchestrators/guides/staking-and-rewards/earnings.mdx',
        ],
      },
      {
        icon: 'building',
        label: 'Organisation / company / entity',
        scanCount: 16,
        useFor:
          'Organisation-level references, company profiles, and entity-facing content.',
        avoid:
          'Avoid for protocol governance — `building-columns` is more specific to that context.',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/about/concepts/livepeer-overview.mdx',
          'v2/community/livepeer-community/ecosystem.mdx',
        ],
      },
      {
        icon: 'file-contract',
        label: 'Contract / terms / formal document',
        scanCount: 11,
        useFor:
          'Smart contract references, terms of service, formal legal or protocol documents.',
        avoid:
          'Avoid for general documentation (use `file-lines`) or governance voting (use `building-columns`).',
        components: ['Card', 'Accordion', 'reference CTA'],
        examples: [
          'v2/gateways/resources/technical/new-contract-addresses.mdx',
          'v2/about/protocol/core-mechanisms.mdx',
        ],
      },
    ],
  },
  {
    id: 'content-signals',
    title: 'Content Signals And Callouts',
    description:
      'Use these for callout semantics, urgency cues, checklists, time signals, and navigation aids within page content.',
    entries: [
      {
        icon: 'bolt',
        label: 'Quickstart / fast path / speed-optimised',
        scanCount: 28,
        useFor:
          'Quickstart cards, fast-path options, speed-optimised setup choices, and first-run shortcuts.',
        avoid:
          'Avoid for general forward navigation. This should feel like a speed cue.',
        components: ['Card', 'Tab', 'hero CTA'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/orchestrators/quickstart/guide.mdx',
        ],
      },
      {
        icon: 'bolt-lightning',
        label: 'High-power / instant / accelerated',
        scanCount: 14,
        useFor:
          'GPU-accelerated contexts, instant-activation surfaces, and high-throughput capability callouts.',
        avoid:
          'Avoid as a synonym for general quickstarts — use `bolt` for those.',
        components: ['Card', 'Accordion', 'capability badge'],
        examples: [
          'v2/orchestrators/guides/feasibility-and-hardware/benchmarking.mdx',
        ],
      },
      {
        icon: 'triangle-exclamation',
        label: 'Warning / prerequisite / caution',
        scanCount: 26,
        useFor:
          'Warning callouts, prerequisite blocks, and caution notices that must appear before the reader proceeds.',
        avoid:
          'Avoid as a decoration. Use only when there is a genuine caution or prerequisite.',
        components: ['Accordion', 'Callout', 'warning block'],
        examples: [
          'v2/orchestrators/setup/dep-config.mdx',
          'v2/gateways/setup/requirements/setup.mdx',
        ],
      },
      {
        icon: 'circle-question',
        label: 'FAQ / help / unclear term',
        scanCount: 51,
        useFor:
          'FAQ accordions, help sections, clarifying callouts, and "what is X?" reference surfaces.',
        avoid:
          'Avoid for general reference pages that are not explicitly question-and-answer in structure.',
        components: ['Accordion', 'Card', 'FAQ block'],
        examples: [
          'v2/orchestrators/resources/faq.mdx',
          'v2/gateways/resources/reference/faq.mdx',
        ],
      },
      {
        icon: 'lightbulb',
        label: 'Tip / insight / recommendation',
        scanCount: 12,
        useFor:
          'Tip callouts, non-obvious insights, and recommendation blocks that add value beyond the main flow.',
        avoid:
          'Avoid for warnings (use `triangle-exclamation`) or general notes.',
        components: ['Accordion', 'Callout', 'tip block'],
        examples: [
          'v2/orchestrators/guides/advanced-operations/orchestrator-transcoder-setup.mdx',
        ],
      },
      {
        icon: 'warning',
        label: 'Deprecation / breaking change / critical issue',
        scanCount: 12,
        useFor:
          'Deprecation notices, breaking-change callouts, and critical status indicators where something is no longer recommended.',
        avoid:
          'Avoid as a synonym for `triangle-exclamation`. Use `warning` for status, `triangle-exclamation` for instruction-level cautions.',
        components: ['Callout', 'status badge'],
        examples: [
          'v2/orchestrators/guides/advanced-operations/orchestrator-transcoder-setup.mdx',
        ],
      },
      {
        icon: 'clock',
        label: 'Time-bound / scheduled / freshness indicator',
        scanCount: 12,
        useFor:
          'Time-sensitive content, scheduled processes (cron), freshness indicators, and deadline-adjacent references.',
        avoid:
          'Avoid for general history or changelog pages.',
        components: ['Callout', 'Accordion', 'status indicator'],
        examples: [
          'v2/developers/guides/opportunities/grants-and-programmes.mdx',
        ],
      },
      {
        icon: 'clipboard-check',
        label: 'Requirements checklist / pre-flight',
        scanCount: 19,
        useFor:
          'Pre-flight checklists, system requirements lists, and setup prerequisite summaries.',
        avoid:
          'Avoid for general to-do or task surfaces not framed as explicit requirements.',
        components: ['Accordion', 'Card', 'requirements block'],
        examples: [
          'v2/gateways/setup/requirements/setup.mdx',
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'list-check',
        label: 'Step checklist / verification list',
        scanCount: 12,
        useFor:
          'Step-by-step verification lists, post-setup confirmation checklists, and ordered task references.',
        avoid:
          'Avoid for general documentation lists that do not carry a verification or completion meaning.',
        components: ['Accordion', 'Step', 'checklist block'],
        examples: [
          'v2/orchestrators/guides/advanced-operations/orchestrator-transcoder-setup.mdx',
        ],
      },
      {
        icon: 'key',
        label: 'API key / access credential / authentication',
        scanCount: 19,
        useFor:
          'API key setup, authentication credential steps, and access-control surfaces.',
        avoid:
          'Avoid for general security pages (use `shield-check`) or smart contract references.',
        components: ['Card', 'Accordion', 'auth step'],
        examples: [
          'v2/gateways/setup/requirements/setup.mdx',
          'v2/developers/resources/reference/apis.mdx',
        ],
      },
      {
        icon: 'shield-halved',
        label: 'Partial security / in-progress hardening',
        scanCount: 13,
        useFor:
          'Partial security coverage, in-progress hardening steps, and security configurations that are functional but not fully locked down.',
        avoid:
          'Avoid when the security is fully verified — use `shield-check` for that state.',
        components: ['Callout', 'status badge', 'Accordion'],
        examples: [
          'v2/orchestrators/guides/advanced-operations/production-hardening.mdx',
        ],
      },
      {
        icon: 'shield-check',
        label: 'Security / hardening / trust verification',
        scanCount: 15,
        useFor:
          'Security hardening guides, trust-verification steps, and production-security references.',
        avoid:
          'Avoid for key or credential setup (use `key`) or partial/in-progress security states.',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/orchestrators/guides/advanced-operations/production-hardening.mdx',
          'v2/gateways/guides/advanced-operations/production-hardening.mdx',
        ],
      },
    ],
  },
  {
    id: 'community-discovery',
    title: 'Community, Discovery, And People',
    description:
      'Use these for community surfaces, people-oriented content, navigation aids, external destinations, and announcements.',
    entries: [
      {
        icon: 'users',
        label: 'Community / team / group of people',
        scanCount: 29,
        useFor:
          'Community portal entries, team-facing content, and group-oriented sections.',
        avoid:
          'Avoid for individual persona routing (use `user-robot` or role-specific icons).',
        components: ['Card', 'Tab', 'community CTA'],
        examples: [
          'v2/community/community-portal.mdx',
          'v2/about/concepts/livepeer-overview.mdx',
        ],
      },
      {
        icon: 'robot',
        label: 'Bot / agent / automated process',
        scanCount: 16,
        useFor:
          'Bot references, AI agent surfaces, and automated pipeline descriptions.',
        avoid:
          'Avoid for the AI builder persona (use `user-robot`) or AI models (use `brain`).',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/developers/resources/compendium/resources.mdx',
        ],
      },
      {
        icon: 'compass',
        label: 'Navigator / orientation / path selection',
        scanCount: 17,
        useFor:
          'Navigator pages, orientation hubs, and path-selection surfaces where the reader is choosing a direction.',
        avoid:
          'Avoid for individual guides or topic pages that are not genuinely orientation-level.',
        components: ['Card', 'portal CTA'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/gateways/navigator.mdx',
          'v2/developers/navigator.mdx',
        ],
      },
      {
        icon: 'globe',
        label: 'Global / multilingual / external web',
        scanCount: 13,
        useFor:
          'Multilingual content pointers, global-reach references, and general external web destinations.',
        avoid:
          'Avoid for specific external docs sites (use `globe-pointer`) or GitHub (use `github`).',
        components: ['Card', 'language selector'],
        examples: [
          'v2/resources/documentation-guide/contribute-to-the-docs.mdx',
        ],
      },
      {
        icon: 'arrow-up-right',
        label: 'External link / leaves current context',
        scanCount: 14,
        useFor:
          'Links that open in a new tab or navigate outside the docs. A general-purpose external-link cue.',
        avoid:
          'Avoid when a more specific icon exists for the destination (github, discord, etc.).',
        components: ['Card', 'reference CTA'],
        examples: [
          'v2/developers/guides/opportunities/grants-and-programmes.mdx',
        ],
      },
      {
        icon: 'newspaper',
        label: 'News / blog / announcement',
        scanCount: 13,
        useFor:
          'Blog post links, news sections, ecosystem announcements, and changelog entries.',
        avoid:
          'Avoid for technical reference pages or governance documents.',
        components: ['Card', 'Accordion'],
        examples: [
          'v2/community/livepeer-community/livepeer-latest-topics.mdx',
          'v2/home/about-livepeer/benefits.mdx',
        ],
      },
      {
        icon: 'pencil-line',
        label: 'Authoring / contribution / edit surface',
        scanCount: 10,
        useFor:
          'Contribution guides, editing references, and authoring-workflow surfaces.',
        avoid:
          'Avoid for general documentation links — this signals an action (write or edit), not a reading destination.',
        components: ['Card', 'Accordion', 'contribute CTA'],
        examples: [
          'v2/resources/documentation-guide/contribute-to-the-docs.mdx',
          'docs-guide/tooling/dev-tools.mdx',
        ],
      },
    ],
  },
];

/**
 * Page-type canonical default icons.
 * When a page uses a component icon (Card, Accordion, Tab) and no specific
 * semantic icon fits the destination, fall back to the default for the page type
 * the card or accordion is *pointing to*.
 */
export const iconMapPageTypeDefaults = [
  {
    pageType: 'quickstart',
    icon: 'bolt',
    rationale: 'Speed cue. Prefer over `rocket` for quick-start cards. `rocket` is reserved for launch/portal pages.',
  },
  {
    pageType: 'tutorial',
    icon: 'circle-play',
    rationale: 'Watch-first, interactive learning. Matches the play/demo metaphor.',
  },
  {
    pageType: 'concept',
    icon: 'book',
    rationale: 'Reading/learning. Non-technical concepts and foundational explainers.',
  },
  {
    pageType: 'reference',
    icon: 'file-lines',
    rationale: 'Document artefact. Technical references, spec pages, parameter lists.',
  },
  {
    pageType: 'guide-technical',
    icon: 'laptop-file',
    rationale: 'Code-heavy, developer-facing guides. Distinct from `book-open` which is for reading paths.',
  },
  {
    pageType: 'guide-general',
    icon: 'book-open',
    rationale: 'Reading-oriented guide hubs and non-technical how-to guides.',
  },
  {
    pageType: 'glossary',
    icon: 'table-columns',
    rationale: 'Structured reference. Glossary = lookup table.',
  },
  {
    pageType: 'faq',
    icon: 'circle-question',
    rationale: 'Question-answer format. Use consistently for all FAQ accordion or card links.',
  },
  {
    pageType: 'troubleshooting',
    icon: 'wrench',
    rationale: 'Fix/maintenance metaphor. Not `tools` (which is for tool collections).',
  },
  {
    pageType: 'navigator',
    icon: 'compass',
    rationale: 'Orientation hub. Reserve for tab/section-level navigators, not individual topic pages.',
  },
  {
    pageType: 'overview',
    icon: 'layer-group',
    rationale: 'Structural overview. Conveys layered/stacked content.',
  },
  {
    pageType: 'portal',
    icon: 'rocket',
    rationale: 'Launch/entry point. Top-level portal pages (orchestrators/portal, developers/portal).',
  },
  {
    pageType: 'changelog',
    icon: 'newspaper',
    rationale: 'Announcement/update log.',
  },
  {
    pageType: 'external-link',
    icon: 'arrow-up-right',
    rationale: 'Fallback for external destinations when no specific brand icon is available.',
  },
];

export const iconMapReviewQueue = [
  {
    icon: 'wand-magic-sparkles',
    issue:
      'Overloaded across AI entry surfaces, product cards, quickstarts, badges, and managed-platform choices.',
    recommendation:
      'Keep `wand-magic-sparkles` for AI entry surfaces only. Use product icons for named solutions, `bolt` for quickstarts, a badge-specific icon set for badges, and `cloud` for managed or hosted platforms.',
  },
  {
    icon: 'book',
    issue:
      'Overloaded across generic guides, external docs, technical guides, references, tutorials, and GitHub links.',
    recommendation:
      'Keep `book` for non-technical guides and concepts. Use `laptop-file` for technical guides, `circle-play` for tutorials, `file-lines` for references, and `github` for GitHub destinations.',
  },
  {
    icon: 'book-open',
    issue:
      'Very high count (1237) because it is the default accordion icon across the codebase. This makes scan count meaningless as an overload signal for this icon specifically.',
    recommendation:
      'Accept `book-open` as the accordion default. For card/CTA uses, keep the distinction from `book` (open-book = guide hub, book = learning resource).',
  },
  {
    icon: 'terminal',
    issue:
      'Very high count (1135) because it is the default tab icon for OS/platform installation tabs.',
    recommendation:
      'Accept `terminal` as the platform/CLI tab default. For non-CLI pages using `terminal` as a generic icon, migrate to the appropriate section or page-type default.',
  },
  {
    icon: 'server',
    issue:
      'Sometimes used for Gateway, sometimes for generic infrastructure, sometimes for node software.',
    recommendation:
      'Use `server` for Gateway, self-hosted infra, and direct-node paths. Use `microchip` for hardware/operator compute and `cube` for packaged runtimes.',
  },
  {
    icon: 'tools',
    issue:
      'Overlaps with `gear` and `wrench` in operational docs.',
    recommendation:
      'Use `tools` for tool collections, `gear` for settings/config metadata, `gears` for advanced multi-part config, and `wrench` for troubleshooting or maintenance.',
  },
  {
    icon: 'coins',
    issue:
      'Used for delegator concepts, rewards, fees, and some funding contexts.',
    recommendation:
      'Use `coins` for economics/rewards and `wallet` for balance/funding/payout state where the user action is wallet-centric.',
  },
  {
    icon: 'bolt',
    issue:
      'Used interchangeably with `rocket` for quickstart and first-run surfaces.',
    recommendation:
      'Use `bolt` as the canonical quickstart/fast-path icon. Reserve `rocket` for portal launch pages (orchestrators/portal, developers/portal).',
  },
  {
    icon: 'link',
    issue:
      'Very high usage makes it a catch-all icon with weak semantics.',
    recommendation:
      'Prefer it only for connection, routing, endpoint, or path concepts. Use `arrow-up-right` for generic external links and brand or domain-specific icons when the destination is otherwise clear.',
  },
];
