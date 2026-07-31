/**
 * Canonical badge colour map for Livepeer docs.
 * Same pattern as icon-map.jsx — data backing a reference page + validators.
 *
 * DO NOT duplicate badge definitions here and in MDX.
 * This file is the single source of truth for badge semantics.
 */

export const badgeMapMethodology = {
  generatedOn: '2026-04-08',
  scope: 'Current English MDX under v2/ and docs-guide/ (locale copies and internal excluded)',
  exclusions: ['_archive', 'x-archived', 'v2/cn', 'v2/fr', 'v2/es', 'v2/internal'],
  notes: [
    'This is a canonical semantic map, not a hard validation contract.',
    'Scan counts reflect current repo usage.',
    'Badge colours are context-dependent — green means different things in solutions vs gateways.',
  ],
};

export const badgeColourSemantics = [
  {
    colour: 'green',
    scanCount: 273,
    contexts: [
      { context: 'Workload mode', meaning: 'Dual (AI & Video)', example: '<Badge color="green">Dual</Badge>' },
      { context: 'Solutions', meaning: 'Livepeer Product / Livepeer Inc.', example: '<Badge color="green">Livepeer Product</Badge>' },
      { context: 'Pricing', meaning: 'ETH currency', example: '<Badge color="green">ETH(wei)</Badge>' },
      { context: 'Status', meaning: 'Confirmed / active', example: '<Badge color="green">Active</Badge>' },
      { context: 'OS (stroke)', meaning: 'macOS', example: '<Badge stroke color="green" icon="apple" size="sm">macOS</Badge>' },
    ],
  },
  {
    colour: 'blue',
    scanCount: 145,
    contexts: [
      { context: 'Workload mode', meaning: 'Video', example: '<Badge color="blue">Video</Badge>' },
      { context: 'Status', meaning: 'Public', example: '<Badge color="blue">Public</Badge>' },
      { context: 'OS (stroke)', meaning: 'Windows', example: '<Badge stroke color="blue" icon="windows" size="sm">Windows</Badge>' },
    ],
  },
  {
    colour: 'purple',
    scanCount: 101,
    contexts: [
      { context: 'Workload mode', meaning: 'AI', example: '<Badge color="purple">AI</Badge>' },
      { context: 'Solutions', meaning: 'Commercial product', example: '<Badge color="purple">Commercial Product</Badge>' },
    ],
  },
  {
    colour: 'yellow',
    scanCount: 25,
    contexts: [
      { context: 'Status', meaning: 'Draft / conditional', example: '<Badge color="yellow">draft</Badge>' },
      { context: 'Solutions', meaning: 'SPE-funded', example: '<Badge color="yellow">SPE-funded</Badge>' },
      { context: 'OS (stroke)', meaning: 'Linux', example: '<Badge stroke color="yellow" icon="linux" size="sm">Linux</Badge>' },
    ],
  },
  {
    colour: 'gray',
    scanCount: 59,
    contexts: [
      { context: 'Reference', meaning: 'Configuration values, neutral metadata', example: '<Badge color="gray">value</Badge>' },
    ],
  },
  {
    colour: 'surface',
    scanCount: 28,
    contexts: [
      { context: 'Compound', meaning: 'Neutral state, metadata, icon containers', example: '<Badge color="surface"><Icon icon="link" /></Badge>' },
      { context: 'Deployment', meaning: 'On-chain / Off-chain / Solo / Pool Node', example: '<Badge color="surface">On-chain</Badge>' },
    ],
  },
  {
    colour: 'orange',
    scanCount: 13,
    contexts: [
      { context: 'Status', meaning: 'Warning / caution', example: '<Badge color="orange">Warning</Badge>' },
    ],
  },
  {
    colour: 'red',
    scanCount: 4,
    contexts: [
      { context: 'Status', meaning: 'Critical / destructive', example: '<Badge color="red">Agents</Badge>' },
    ],
  },
  {
    colour: 'surface-destructive',
    scanCount: 8,
    contexts: [
      { context: 'Status', meaning: 'Destructive operation', example: '<Badge color="surface-destructive">Delete</Badge>' },
    ],
  },
];

export const badgePatterns = [
  {
    id: 'workload-triad',
    title: 'Workload Type Triad',
    description: 'The primary badge vocabulary for distinguishing Video, AI, and Dual workloads across gateways and solutions.',
    entries: [
      { colour: 'blue', label: 'Video', usage: 'Video transcoding services', components: ['Card', 'Tab', 'Accordion', 'Table'] },
      { colour: 'purple', label: 'AI', usage: 'AI inference services', components: ['Card', 'Tab', 'Accordion', 'Table'] },
      { colour: 'green', label: 'Dual', usage: 'Combined AI & Video', components: ['Card', 'Tab', 'Accordion', 'Table'] },
    ],
  },
  {
    id: 'on-chain-off-chain',
    title: 'On-Chain / Off-Chain Markers',
    description: 'Icon pairs used to distinguish payment modes. These are NOT badges — they are inline Icon components, sometimes wrapped in a surface badge.',
    entries: [
      { icon: 'link', label: 'On-chain', usage: 'Blockchain connection, production payments via Arbitrum', components: ['Icon', 'Badge (surface)', 'Tab title', 'Step title'] },
      { icon: 'floppy-disk', label: 'Off-chain', usage: 'Local/dev mode, direct orchestrator connection', components: ['Icon', 'Badge (surface)', 'Tab title', 'Step title'] },
    ],
  },
  {
    id: 'os-badges',
    title: 'Operating System Badges',
    description: 'Stroke-variant badges with icons for platform indicators.',
    entries: [
      { colour: 'yellow', icon: 'linux', label: 'Linux', variant: 'stroke', size: 'sm' },
      { colour: 'green', icon: 'apple', label: 'macOS', variant: 'stroke', size: 'sm' },
      { colour: 'blue', icon: 'windows', label: 'Windows', variant: 'stroke', size: 'sm' },
    ],
  },
  {
    id: 'infra-tags',
    title: 'Infrastructure Tags',
    description: 'Icon + label pairs via IconBadgeWrapper for deployment/integration taxonomy.',
    entries: [
      { icon: 'torii-gate', label: 'gateway', usage: 'Deployment architecture' },
      { icon: 'server', label: 'self-hosted', usage: 'Installation model' },
      { icon: 'toolbox', label: 'sdk', usage: 'Developer tools' },
      { icon: 'plug', label: 'api', usage: 'Integration point' },
      { icon: 'cloud', label: 'saas', usage: 'Cloud/managed service' },
    ],
  },
  {
    id: 'product-ownership',
    title: 'Product Ownership',
    description: 'Badges indicating who operates or funds a product/project.',
    entries: [
      { colour: 'green', label: 'Livepeer Product', usage: 'Built and maintained by Livepeer Inc.' },
      { colour: 'yellow', label: 'SPE-funded', usage: 'Funded by Strategic Priority Expenditure' },
      { colour: 'purple', label: 'Commercial Product', usage: 'Third-party commercial offering' },
      { colour: 'blue', label: 'Public', usage: 'Open/public project' },
    ],
  },
];
