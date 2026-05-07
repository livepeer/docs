const devs2 = {
  tab: 'Developers2',
  icon: 'display-code',
  groups: [
    {
      group: 'Start Here',
      icon: 'display-code',
      pages: [
        'v2/developers2/portal',
        'v2/developers2/navigator',
        'v2/developers2/get-started/setup-paths',
      ],
    },
    {
      group: 'Concepts',
      icon: 'lightbulb',
      pages: [
        'v2/developers2/concepts/overview',
        'v2/developers2/concepts/mental-model',
        'v2/developers2/concepts/architecture',
        'v2/developers2/concepts/integrations',
        {
          group: 'Legacy concepts',
          pages: [
            'v2/developers2/concepts/builders',
            'v2/developers2/concepts/developer-stack',
            'v2/developers2/concepts/oss-stack',
            'v2/developers2/concepts/ecosystem-map',
            'v2/developers2/concepts/spe-ecosystem',
          ],
        },
      ],
    },
    {
      group: 'Get Started',
      icon: 'fast-forward',
      pages: [
        'v2/developers2/get-started/setup-paths',
        'v2/developers2/get-started/application-developer',
        'v2/developers2/get-started/ai-developer',
        'v2/developers2/get-started/video-developer',
        'v2/developers2/get-started/agent-developer',
        {
          group: 'Legacy get-started',
          pages: [
            'v2/developers2/get-started/ai-on-livepeer',
            'v2/developers2/get-started/video-on-livepeer',
            'v2/developers2/get-started/tooling/explorer',
          ],
        },
      ],
    },
    {
      group: 'Build',
      icon: 'tools',
      pages: [
        {
          group: 'Application',
          pages: [
            'v2/developers2/build/application/overview',
            'v2/developers2/build/application/ai-quickstart',
            'v2/developers2/build/application/transcoding-quickstart',
            'v2/developers2/build/application/choose-a-gateway',
            'v2/developers2/build/application/local-gateway',
            'v2/developers2/build/application/workload-fit',
            'v2/developers2/build/application/sdk-gateway',
            'v2/developers2/build/application/frontend-react-player',
            'v2/developers2/build/application/frontend-react-broadcast',
            'v2/developers2/build/application/frontend-core-web',
            'v2/developers2/build/application/ai-authentication',
            'v2/developers2/build/application/production-checklist',
            'v2/developers2/build/application/troubleshooting',
          ],
        },
        {
          group: 'AI',
          pages: [
            'v2/developers2/build/ai/overview',
            'v2/developers2/build/ai/byoc-architecture',
            'v2/developers2/build/ai/byoc-quickstart',
            'v2/developers2/build/ai/byoc-production',
            'v2/developers2/build/ai/pytrickle',
            'v2/developers2/build/ai/trickle-protocol',
            'v2/developers2/build/ai/comfystream-platform',
            'v2/developers2/build/ai/comfystream-authoring',
            'v2/developers2/build/ai/comfyui-stream-pack',
            'v2/developers2/build/ai/realtime-lv2v',
            'v2/developers2/build/ai/ai-pipelines',
            'v2/developers2/build/ai/ai-orchestration',
            'v2/developers2/build/ai/model-support',
            'v2/developers2/build/ai/ai-worker-vs-ai-runner',
            'v2/developers2/build/ai/scope-runner',
          ],
        },
        {
          group: 'Video',
          pages: [
            'v2/developers2/build/video/overview',
            'v2/developers2/build/video/ingest-and-playback',
            'v2/developers2/build/video/gpu-transcoding',
            'v2/developers2/build/video/codec-support',
            'v2/developers2/build/video/live-events',
            'v2/developers2/build/video/vod-workflows',
            'v2/developers2/build/video/storage-and-archival',
            'v2/developers2/build/video/catalyst-stack',
            'v2/developers2/build/video/lpms-integration',
          ],
        },
        {
          group: 'Agents',
          pages: [
            'v2/developers2/build/agents/overview',
            'v2/developers2/build/agents/agent-sdk',
            'v2/developers2/build/agents/creative-kit',
            'v2/developers2/build/agents/storyboard-as-template',
            'v2/developers2/build/agents/reference-agents',
            'v2/developers2/build/agents/eliza-integration',
            'v2/developers2/build/agents/eip-8004-agents',
            'v2/developers2/build/agents/llm-providers',
          ],
        },
        {
          group: 'Tutorials',
          pages: [
            'v2/developers2/build/tutorials/build-an-ai-agent-on-livepeer',
            'v2/developers2/build/tutorials/ipfs-video-integration',
            'v2/developers2/build/tutorials/token-gated-video',
            'v2/developers2/build/tutorials/comfystream-quickstart',
          ],
        },
        {
          group: 'Legacy build',
          pages: [
            'v2/developers2/build/video/video-quickstart',
            'v2/developers2/build/video/transcoding-quickstart',
            {
              group: 'Custom AI (legacy)',
              pages: [
                'v2/developers2/build/custom-ai/ai-quickstart',
                'v2/developers2/build/custom-ai/model-support',
                'v2/developers2/build/custom-ai/workload-fit',
                'v2/developers2/build/custom-ai/pytrickle',
                'v2/developers2/build/custom-ai/ai-runner',
                'v2/developers2/build/custom-ai/comfystream-quickstart',
                'v2/developers2/build/custom-ai/comfystream',
                'v2/developers2/build/custom-ai/byoc',
              ],
            },
            {
              group: 'Beta Platforms (legacy)',
              pages: [
                'v2/developers2/build/beta-projects/naap',
                'v2/developers2/build/beta-projects/pymthouse',
                'v2/developers2/build/beta-projects/data-mcp',
                'v2/developers2/build/beta-projects/storyboard',
              ],
            },
          ],
        },
      ],
    },
    {
      group: 'Reference',
      icon: 'code',
      pages: [
        'v2/developers2/reference/overview',
        'v2/developers2/reference/apis',
        'v2/developers2/reference/pricing-rate-limits',
        'v2/developers2/reference/sdks',
        'v2/developers2/reference/pytrickle-reference',
        'v2/developers2/reference/ai-gateway-api',
        'v2/developers2/reference/livepeer-ai-js',
        'v2/developers2/reference/livepeer-ai-python',
        'v2/developers2/reference/livepeer-ai-go',
        'v2/developers2/reference/ui-kit',
        'v2/developers2/reference/byoc-sdk',
        'v2/developers2/reference/livepeer-python-gateway',
        'v2/developers2/reference/go-livepeer-http',
      ],
    },
    {
      group: 'Routing',
      icon: 'route',
      pages: [
        'v2/developers2/routing/solutions-integrators',
        'v2/developers2/routing/protocol-extenders',
        'v2/developers2/routing/operating-a-gateway',
        'v2/developers2/routing/observability',
      ],
    },
    {
      group: 'Resources',
      icon: 'books',
      pages: [
        'v2/developers2/resources/glossary',
        {
          group: 'Compendium',
          pages: [
            'v2/developers2/resources/compendium/developer-help',
            'v2/developers2/resources/compendium/example-applications',
            'v2/developers2/resources/compendium/resources',
          ],
        },
        {
          group: 'Knowledge Hub',
          pages: [
            'v2/developers2/resources/knowledge-hub/awesome-livepeer',
            'v2/developers2/resources/knowledge-hub/deepwiki',
            'v2/developers2/resources/knowledge-hub/wiki',
          ],
        },
      ],
    },
  ],
}

const devs = {
  tab: 'Developers',
  icon: 'display-code',
  groups: [
    {
      group: 'Start Here',
      icon: 'display-code',
      pages: ['v2/developers/portal', 'v2/developers/navigator'],
    },
    {
      group: 'Concepts',
      icon: 'lightbulb',
      pages: [
        {
          group: 'Merge REPO & PROJECT Landscape',
          pages: [
            'v2/developers/concepts/builders-guide',
            'v2/developers/concepts/developer-landscape',
            'v2/developers/concepts/ecosystem-map',
          ],
        },
        {
          group: 'Merge: Architecture',
          pages: [
            'v2/developers/concepts1/oss-stack',
            'v2/developers/concepts/developer-stack',
          ],
        },
        {
          group: 'Move: to Learn',
          pages: [
            'v2/developers/concepts1/ai-on-livepeer',
            'v2/developers/concepts1/video-on-livepeer',
            'v2/developers/concepts1/running-a-gateway',
          ],
        },
        {
          group: 'Move: to Guides/Opportunities',
          pages: ['v2/developers/concepts/spe-ecosystem'],
        },
        {
          group: 'Move to Learn as Overview?',
          pages: ['v2/developers/get-started/setup-paths'],
        },
      ],
    },
    {
      group: 'Learn',
      icon: 'tools',
      pages: [
        'v2/developers/learn/setup-paths',
        'v2/developers/learn/ai-on-livepeer',
        'v2/developers/learn/video-on-livepeer',
        'v2/developers/learn/applications-on-livepeer',
        {
          group: 'Quickstarts',
          pages: [
            'v2/developers/get-started/ai-quickstart',
            'v2/developers/get-started/comfystream-quickstart',
            'v2/developers/get-started/transcoding-quickstart',
            'v2/developers/get-started/video-quickstart',
          ],
        },
      ],
    },
    {
      group: 'Build',
      icon: 'tools',
      pages: [
        {
          group: 'AI',
          pages: [
            {
              group: 'Custom AI Workflows (Guides)',
              icon: 'user-robot',
              pages: [
                'v2/developers/build1/workload-fit',
                'v2/developers/build1/model-support',
                'v2/developers/resources/reference/pytrickle',
                'v2/developers/resources/reference/ai-runner',
              ],
            },
          ],
        },
        {
          group: 'Video',
          pages: [],
        },
        {
          group: 'Applications',
          pages: [],
        },
        {
          group: 'Platforms',
          pages: [
            'v2/developers/build1/byoc',
            'v2/developers/build1/comfystream',
            'v2/developers/guides/beta-projects/naap',
            'v2/developers/guides/beta-projects/pymthouse',
            'v2/developers/guides/beta-projects/storyboard',
            'v2/developers/guides/beta-projects/data-mcp',
          ],
        },
        {
          group: 'Tutorials',
          pages: [
            'v2/developers/build/tutorials/ipfs-video-integration',
            'v2/developers/build/tutorials/token-gated-video',
            'v2/developers/get-started/comfystream-quickstart',
            'v2/developers/build/tutorials/build-an-ai-agent-on-livepeer',
            'v2/developers/build/tutorials/huggingface-to-livepeer',
            'v2/developers/build/tutorials/huggingface-to-livepeer-advanced',
            {
              group: 'Get Started',
              icon: 'fast-forward',
              pages: [
                'v2/developers/get-started/setup-paths',
                'v2/developers/get-started/comfystream-quickstart',
                'v2/developers/get-started/transcoding-quickstart',
                'v2/developers/get-started/contributor-quickstart',
              ],
            },
          ],
        },
        {
          group: 'Local Setup',
          pages: ['v2/developers/guides/local-testnet-deployment'],
        },
      ],
    },
    {
      group: 'Guides',
      icon: 'laptop-file',
      pages: [
        'v2/developers/guides/developer-guides',
        {
          group: 'AI',
          pages: [],
        },
        {
          group: 'Video',
          pages: [],
        },
        {
          group: 'Payments',
          pages: [],
        },
        {
          group: 'Platforms',
          pages: [],
        },
        {
          group: 'Data',
          pages: [],
        },
        {
          group: 'Tooling',
          pages: [],
        },
        {
          group: 'Production Applications',
          pages: [],
        },
        {
          group: 'Local Setup',
          pages: ['v2/developers/guides/local-testnet-deployment'],
        },
        {
          group: 'Contributing',
          pages: [
            'v2/developers/get-started/contributor-quickstart',
            'v2/developers/guides/contribution-guide',
            'v2/developers/guides/opportunities/oss-contributions',
          ],
        },
        {
          group: 'Opportunities',
          pages: [
            'v2/developers/guides/opportunities/overview',
            'v2/developers/guides/opportunities/grants-and-programmes',
            'v2/developers/guides/opportunities/rfps-and-proposals',
            'v2/developers/guides/opportunities/bug-bounties',
          ],
        },
      ],
    },
    {
      group: 'Resources',
      icon: 'books',
      pages: [
        'v2/developers/resources/glossary',
        {
          group: 'Reference',
          pages: [
            'v2/developers/resources/reference/sdks',
            'v2/developers/resources/reference/apis',
            'v2/developers/resources/reference/pricing-rate-limits',
            'v2/developers/resources/reference/pytrickle',
          ],
        },
        {
          group: 'Compendium',
          pages: [
            'v2/developers/resources/compendium/resources',
            'v2/developers/resources/compendium/developer-help',
            'v2/developers/resources/compendium/example-applications',
          ],
        },
        {
          group: 'Knowledge Hub',
          pages: [
            'v2/developers/resources/knowledge-hub/awesome-livepeer',
            'v2/developers/resources/knowledge-hub/wiki',
            'v2/developers/resources/knowledge-hub/deepwiki',
          ],
        },
      ],
    },
  ],
}

const devsDraft = {
  tab: 'Developers',
  icon: 'display-code',
  groups: [
    {
      group: 'Start Here',
      icon: 'display-code',
      pages: ['v2/developers/portal', 'v2/developers/navigator'],
    },
    {
      group: 'Concepts',
      icon: 'lightbulb',
      pages: [
        'v2/developers/concepts/notes',
        'v2/developers/concepts/builders-guide',
        'v2/developers/concepts/developer-landscape',
        'v2/developers/concepts/developer-stack',
        {
          group: 'DEP0',
          pages: [
            'v2/developers/concepts/ecosystem-map',
            'v2/developers/concepts/spe-ecosystem',
          ],
        },
        {
          group: 'DEP1',
          pages: [
            'v2/developers/get-started/setup-paths',
            'v2/developers/concepts1/builders',
            'v2/developers/concepts1/developer-stack',
            'v2/developers/concepts1/oss-stack',
          ],
        },
        {
          group: 'Concepts1',
          pages: [
            'v2/developers/concepts1/ai-on-livepeer',
            'v2/developers/concepts1/video-on-livepeer',
            'v2/developers/concepts1/running-a-gateway',
          ],
        },
      ],
    },
    {
      group: 'Learn',
      icon: 'tools',
      pages: [
        'v2/developers/learn/setup-paths',
        'v2/developers/learn/ai-on-livepeer',
        'v2/developers/learn/video-on-livepeer',
        'v2/developers/learn/applications-on-livepeer',
        {
          group: 'Quickstarts',
          pages: [
            'v2/developers/get-started/ai-quickstart',
            'v2/developers/get-started/comfystream-quickstart',
            'v2/developers/get-started/transcoding-quickstart',
            'v2/developers/get-started/video-quickstart',
          ],
        },
      ],
    },
    {
      group: 'Build',
      icon: 'tools',
      pages: [
        {
          group: 'AI',
          pages: [
            {
              group: 'Custom AI Workflows (Guides)',
              icon: 'user-robot',
              pages: [
                'v2/developers/build1/workload-fit',
                'v2/developers/build1/model-support',
                'v2/developers/resources/reference/pytrickle',
                'v2/developers/resources/reference/ai-runner',
              ],
            },
          ],
        },
        {
          group: 'Video',
          pages: [],
        },
        {
          group: 'Applications',
          pages: [],
        },
        {
          group: 'Platforms',
          pages: [
            'v2/developers/build1/byoc',
            'v2/developers/build1/comfystream',
            'v2/developers/guides/beta-projects/naap',
            'v2/developers/guides/beta-projects/pymthouse',
            'v2/developers/guides/beta-projects/storyboard',
            'v2/developers/guides/beta-projects/data-mcp',
          ],
        },
        {
          group: 'Tutorials',
          pages: [
            'v2/developers/build/tutorials/ipfs-video-integration',
            'v2/developers/build/tutorials/token-gated-video',
            'v2/developers/get-started/comfystream-quickstart',
            'v2/developers/build/tutorials/build-an-ai-agent-on-livepeer',
            'v2/developers/build/tutorials/huggingface-to-livepeer',
            'v2/developers/build/tutorials/huggingface-to-livepeer-advanced',
            {
              group: 'Get Started',
              icon: 'fast-forward',
              pages: [
                'v2/developers/get-started/setup-paths',
                'v2/developers/get-started/comfystream-quickstart',
                'v2/developers/get-started/transcoding-quickstart',
                'v2/developers/get-started/contributor-quickstart',
              ],
            },
          ],
        },
        {
          group: 'Local Setup',
          pages: ['v2/developers/guides/local-testnet-deployment'],
        },
      ],
    },
    {
      group: 'Guides',
      icon: 'laptop-file',
      pages: [
        'v2/developers/guides/developer-guides',
        {
          group: 'AI',
          pages: [],
        },
        {
          group: 'Video',
          pages: [],
        },
        {
          group: 'Payments',
          pages: [],
        },
        {
          group: 'Platforms',
          pages: [],
        },
        {
          group: 'Data',
          pages: [],
        },
        {
          group: 'Tooling',
          pages: [],
        },
        {
          group: 'Production Applications',
          pages: [],
        },
        {
          group: 'Local Setup',
          pages: ['v2/developers/guides/local-testnet-deployment'],
        },
        {
          group: 'Contributing',
          pages: [
            'v2/developers/get-started/contributor-quickstart',
            'v2/developers/guides/contribution-guide',
            'v2/developers/guides/opportunities/oss-contributions',
          ],
        },
        {
          group: 'Opportunities',
          pages: [
            'v2/developers/guides/opportunities/overview',
            'v2/developers/guides/opportunities/grants-and-programmes',
            'v2/developers/guides/opportunities/rfps-and-proposals',
            'v2/developers/guides/opportunities/bug-bounties',
          ],
        },
      ],
    },
    {
      group: 'Resources',
      icon: 'books',
      pages: [
        'v2/developers/resources/glossary',
        {
          group: 'Reference',
          pages: [
            'v2/developers/resources/reference/sdks',
            'v2/developers/resources/reference/apis',
            'v2/developers/resources/reference/pricing-rate-limits',
            'v2/developers/resources/reference/pytrickle',
          ],
        },
        {
          group: 'Compendium',
          pages: [
            'v2/developers/resources/compendium/resources',
            'v2/developers/resources/compendium/developer-help',
            'v2/developers/resources/compendium/example-applications',
          ],
        },
        {
          group: 'Knowledge Hub',
          pages: [
            'v2/developers/resources/knowledge-hub/awesome-livepeer',
            'v2/developers/resources/knowledge-hub/wiki',
            'v2/developers/resources/knowledge-hub/deepwiki',
          ],
        },
      ],
    },
  ],
}
