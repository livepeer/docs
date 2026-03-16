export const iconMapMethodology = {
  generatedOn: '2026-03-15',
  scope: 'Current English MDX under v2/ and docs-guide/',
  exclusions: [
    '_archive',
    'x-archived',
    'v2/cn',
    'v2/fr',
    'v2/es',
  ],
  notes: [
    'This is a proposed semantic map, not a hard validation contract.',
    'Counts are based on current repo usage and help show how overloaded each icon already is.',
    'The map is intended for Tabs, Accordions, Cards, portal entry points, and guide navigation.',
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
        scanCount: 40,
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
        scanCount: 41,
        useFor:
          'Orchestrator role labels, GPU-backed compute paths, hardware-oriented setup choices, and node runtime surfaces.',
        avoid:
          'Avoid for general AI product pages where the focus is workflows rather than node hardware or operator runtime.',
        components: ['Card', 'Tab', 'Step', 'Accordion'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/orchestrators/guides/feasibility-and-hardware/benchmarking.mdx',
          'v2/cn/about/livepeer-protocol/core-mechanisms.mdx',
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
          'v2/internal/rfp/aims.mdx',
        ],
      },
      {
        icon: 'coins',
        label: 'Delegator / economics / rewards',
        scanCount: 54,
        useFor:
          'Delegator-facing paths, rewards, pricing, fees, funding, and economics sections.',
        avoid:
          'Avoid when the page is specifically about balances or wallet actions rather than economics or incentives.',
        components: ['Card', 'Accordion', 'Tab', 'comparison row'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/developers/developer-journey.mdx',
          'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx',
        ],
      },
      {
        icon: 'wallet',
        label: 'Balances / funding / payout state',
        scanCount: 11,
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
        scanCount: 27,
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
          'v2/developers/guides/resources.mdx',
          'v2/developers/guides/developer-guides.mdx',
          'v2/gateways/setup/requirements/setup.mdx',
        ],
      },
      {
        icon: 'microchip-ai',
        label: 'AI node runtime / model support',
        scanCount: 8,
        useFor:
          'AI pipeline runtime pages, model-support references, and operator-facing AI workload configuration.',
        avoid:
          'Avoid as the top-level icon for AI product marketing or builder persona routing.',
        components: ['Card', 'Tab', 'reference CTA'],
        examples: [
          'v2/gateways/guides/node-pipelines/ai-pipelines.mdx',
          'v2/gateways/guides/node-pipelines/guide.mdx',
          'v2/orchestrators/quickstart/guide.mdx',
        ],
      },
      {
        icon: 'cube',
        label: 'BYOC / containerised workload',
        scanCount: 12,
        useFor:
          'BYOC, packaged runtimes, container-based integrations, and external compute packaging.',
        avoid:
          'Avoid for generic infrastructure or network topology pages.',
        components: ['Card', 'Tab', 'setup choice'],
        examples: [
          'v2/developers/get-started/comfystream-quickstart.mdx',
          'v2/developers/developer-journey.mdx',
        ],
      },
      {
        icon: 'network-wired',
        label: 'Network integration / SDK connectivity',
        scanCount: 14,
        useFor:
          'SDK collections, API connectivity, pools, or surfaces centred on integration into the network.',
        avoid:
          'Avoid when the page is about business relationships or abstract architecture diagrams.',
        components: ['Card', 'reference CTA'],
        examples: [
          'v2/developers/technical-references/sdks.mdx',
          'v2/developers/technical-references/apis.mdx',
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
        icon: 'film-canister',
        label: 'Video platform / gateway video route',
        scanCount: 4,
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
        scanCount: 14,
        useFor:
          'Video pipelines, transcoding workloads, and operator paths that are specifically about media processing.',
        avoid:
          'Avoid for top-level product hubs or viewer-facing watch actions.',
        components: ['Card', 'Accordion', 'path selector'],
        examples: [
          'v2/orchestrators/navigator.mdx',
          'v2/gateways/concepts/role.mdx',
          'v2/developers/guides/resources.mdx',
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
        scanCount: 16,
        useFor:
          'Demo entry points, featured video tutorials, player examples, and watch-first surfaces.',
        avoid:
          'Avoid as the default icon for all video pages when the content is really about processing or platform architecture.',
        components: ['BlinkingIcon', 'Card', 'featured link'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/gateways/portal.mdx',
          'v2/developers/guides/developer-guides.mdx',
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
        scanCount: 37,
        useFor:
          'General documentation links, learning resources, and broad reference destinations.',
        avoid:
          'Avoid when the destination is a specific guide collection or an open-book style reading path.',
        components: ['Card', 'Accordion', 'resource CTA'],
        examples: [
          'v2/developers/get-started/contributor-quickstart.mdx',
          'v2/orchestrators/portal.mdx',
          'v2/developers/concepts/oss-stack.mdx',
        ],
      },
      {
        icon: 'book-open',
        label: 'Guide collection / open reference',
        scanCount: 14,
        useFor:
          'Guide hubs, docs repositories, or reading-oriented references where the open-book metaphor fits better than generic docs.',
        avoid:
          'Avoid for every documentation link by default; keep a distinction from `book`.',
        components: ['Card', 'reference CTA'],
        examples: [
          'v2/developers/get-started/contributor-quickstart.mdx',
          'v2/developers/guides/resources.mdx',
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
          'v2/developers/opportunities/rfps-and-proposals.mdx',
          'v2/developers/opportunities/oss-contributions.mdx',
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
          'v2/resources/documentation-guide/contribute-to-the-docs.mdx',
        ],
      },
      {
        icon: 'layer-group',
        label: 'Page structure / layered system',
        scanCount: 11,
        useFor:
          'Page-structure inventories, middleware/layered architecture, and platform-build surfaces.',
        avoid:
          'Avoid for data or document-only references.',
        components: ['Accordion', 'Tab', 'Card'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'v2/gateways/navigator.mdx',
          'v2/gateways/guides/opportunities/naap-multi-tenancy.mdx',
        ],
      },
      {
        icon: 'database',
        label: 'Data source / dataset / subgraph',
        scanCount: 6,
        useFor:
          'Data references, subgraphs, datasets, and data-centric tooling.',
        avoid:
          'Avoid for general reference docs that are not data-oriented.',
        components: ['Accordion', 'Card', 'resource CTA'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'v2/developers/guides/resources.mdx',
          'v2/developers/guides/developer-guides.mdx',
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
        scanCount: 34,
        useFor:
          'Get-started routes, quickstart cards, launch paths, and first-run guidance.',
        avoid:
          'Avoid for all forward navigation; use only when the page really represents a start or launch path.',
        components: ['Card', 'Accordion', 'guide CTA'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/developers/portal.mdx',
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'terminal',
        label: 'CLI / shell / command execution',
        scanCount: 125,
        useFor:
          'CLI references, shell-based setup, command-heavy workflows, and terminal-first pages.',
        avoid:
          'Avoid for general tooling pages that are not command-centric.',
        components: ['Accordion', 'Card', 'code-adjacent CTA'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/orchestrators/portal.mdx',
          'v2/orchestrators/setup/rs-install.mdx',
        ],
      },
      {
        icon: 'gear',
        label: 'Settings / metadata / repo configuration',
        scanCount: 12,
        useFor:
          'Metadata, settings, hook configuration, and repo-level operational controls.',
        avoid:
          'Avoid as a synonym for troubleshooting or generic toolboxes.',
        components: ['Accordion', 'settings CTA'],
        examples: [
          'docs-guide/tooling/dev-tools.mdx',
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/resources/documentation-guide/contribute-to-the-docs.mdx',
        ],
      },
      {
        icon: 'sliders',
        label: 'Tuning / configuration knobs',
        scanCount: 20,
        useFor:
          'Runtime configuration, tuning, pricing/config surfaces, and adjustable operating parameters.',
        avoid:
          'Avoid for static metadata or install-only flows.',
        components: ['Card', 'config CTA'],
        examples: [
          'v2/orchestrators/setup/rs-install.mdx',
          'v2/developers/guides/resources.mdx',
          'v2/developers/guides/contribution-guide.mdx',
        ],
      },
      {
        icon: 'tools',
        label: 'Operational toolset / admin toolkit',
        scanCount: 10,
        useFor:
          'Collections of operational tools, admin utilities, or quick-access tooling hubs.',
        avoid:
          'Avoid when the page is specifically about fixing problems (`wrench`) or metadata/config (`gear`).',
        components: ['Card', 'portal CTA'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/gateways/portal.mdx',
          'v2/orchestrators/portal.mdx',
        ],
      },
      {
        icon: 'wrench',
        label: 'Troubleshooting / maintenance',
        scanCount: 6,
        useFor:
          'Troubleshooting pages, operational break-fix paths, and maintenance references.',
        avoid:
          'Avoid for general tool listings or initial setup guidance.',
        components: ['Accordion', 'Card', 'support CTA'],
        examples: [
          'docs-guide/tooling/lpd-cli.mdx',
          'v2/orchestrators/portal.mdx',
          'v2/developers/guides/resources.mdx',
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
          'v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx',
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
        scanCount: 22,
        useFor:
          'ETH funding, on-chain setup, contract tooling, and chain-specific references.',
        avoid:
          'Avoid for generic crypto concepts when the page is not actually chain- or ETH-specific.',
        components: ['Card', 'Accordion', 'funding reference'],
        examples: [
          'v2/developers/guides/resources.mdx',
          'v2/developers/guides/contribution-guide.mdx',
          'v2/gateways/guides/operator-considerations/x-deprecated/on-chain setup/on-chain.mdx',
        ],
      },
      {
        icon: 'diagram-project',
        label: 'Relationships / topology / delegation model',
        scanCount: 20,
        useFor:
          'Architecture relationships, staking/delegation models, and network topology surfaces.',
        avoid:
          'Avoid for generic flowcharts where another more specific domain icon exists.',
        components: ['Card', 'concept CTA', 'relationship view'],
        examples: [
          'v2/orchestrators/concepts/role.mdx',
          'v2/orchestrators/concepts/capabilities.mdx',
          'v2/orchestrators/navigator.mdx',
        ],
      },
      {
        icon: 'github',
        label: 'Source repo / issue tracker / code host',
        scanCount: 146,
        useFor:
          'GitHub repos, issue trackers, code sources, and open-source references.',
        avoid:
          'Avoid for generic external links. Keep it specific to GitHub destinations.',
        components: ['Card', 'portal CTA', 'external reference'],
        examples: [
          'v2/developers/portal.mdx',
          'v2/developers/technical-references/awesome-livepeer.mdx',
          'v2/orchestrators/portal.mdx',
        ],
      },
      {
        icon: 'discord',
        label: 'Discord community / chat support',
        scanCount: 17,
        useFor:
          'Discord join paths, live community help, and chat-based support destinations.',
        avoid:
          'Avoid for the forum or long-form discussions.',
        components: ['Card', 'community CTA'],
        examples: [
          'v2/developers/guides/developer-help.mdx',
          'v2/community/community-portal.mdx',
          'v2/orchestrators/resources/faq.mdx',
        ],
      },
      {
        icon: 'comments',
        label: 'Forum / discussion thread',
        scanCount: 18,
        useFor:
          'Forum links, community discussion threads, and long-form Q&A surfaces.',
        avoid:
          'Avoid for synchronous chat destinations like Discord.',
        components: ['Card', 'forum CTA'],
        examples: [
          'v2/developers/guides/developer-help.mdx',
          'v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx',
          'v2/developers/opportunities/rfps-and-proposals.mdx',
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
          'v2/developers/resources/deepwiki.mdx',
          'v2/developers/technical-references/deepwiki.mdx',
        ],
      },
      {
        icon: 'link',
        label: 'Connection / endpoint / path link',
        scanCount: 62,
        useFor:
          'RPC endpoints, on-chain gateway/payment-path distinctions, or simple connection references.',
        avoid:
          'Avoid as a generic external-link stand-in. It becomes too vague when overused.',
        components: ['Card', 'Tab', 'resource CTA'],
        examples: [
          'v2/developers/guides/resources.mdx',
          'v2/gateways/concepts/role.mdx',
          'v2/developers/guides/developer-guides.mdx',
        ],
      },
    ],
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
      'Keep `book` for non-technical guides and concepts. Use product or external-link icons for external docs, `laptop-file` for technical guides, tutorial-specific icons for tutorials, resource/reference icons for references, and `github` for GitHub destinations.',
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
      'Use `tools` for tool collections, `gear` for settings/config metadata, and `wrench` for troubleshooting or maintenance.',
  },
  {
    icon: 'coins',
    issue:
      'Used for delegator concepts, rewards, fees, and some funding contexts.',
    recommendation:
      'Use `coins` for economics/rewards and `wallet` for balance/funding/payout state where the user action is wallet-centric.',
  },
  {
    icon: 'link',
    issue:
      'Very high usage makes it a catch-all icon with weak semantics.',
    recommendation:
      'Prefer it only for connection, routing, endpoint, or path concepts. Use brand or domain-specific icons when the destination is otherwise clear.',
  },
];
