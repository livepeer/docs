const docsJsonFr = {
  language: 'fr',
  tabs: [
    {
      tab: 'Home',
      icon: 'house-heart',
      anchors: [
        {
          anchor: 'Home',
          icon: 'house-heart',
          groups: [
            {
              group: 'Home',
              icon: 'house-heart',
              pages: [
                'v2/fr/home/mission-control',
                'v2/fr/home/get-started',
                'v2/fr/home/primer',
              ],
            },
            {
              group: 'Livepeer',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg',
              pages: [
                'v2/fr/home/about-livepeer/vision',
                'v2/fr/home/about-livepeer/evolution',
                'v2/fr/home/about-livepeer/benefits',
                'v2/fr/home/about-livepeer/ecosystem',
                'v2/fr/home/about-livepeer/roadmap',
              ],
            },
            {
              group: 'Showcase',
              icon: 'clapperboard-play',
              pages: [
                'v2/fr/home/solutions/showcase',
                'v2/fr/home/solutions/verticals',
                'v2/fr/home/solutions/applications',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'About',
      icon: 'camera-movie',
      anchors: [
        {
          anchor: 'About Livepeer',
          icon: 'play',
          groups: [
            {
              group: 'About Livepeer',
              icon: 'graduation-cap',
              pages: [
                'v2/fr/about/portal',
                'v2/fr/about/livepeer-overview',
                'v2/fr/about/core-concepts',
                'v2/fr/about/mental-model',
              ],
            },
            {
              group: 'Livepeer Protocol',
              icon: 'cube',
              pages: [
                'v2/fr/about/livepeer-protocol/overview',
                'v2/fr/about/livepeer-protocol/core-mechanisms',
                'v2/fr/about/livepeer-protocol/livepeer-token',
                'v2/fr/about/livepeer-protocol/governance-model',
                'v2/fr/about/livepeer-protocol/treasury',
                'v2/fr/about/livepeer-protocol/economics',
                'v2/fr/about/livepeer-protocol/technical-architecture',
              ],
            },
            {
              group: 'Livepeer Network',
              icon: 'circle-nodes',
              pages: [
                'v2/fr/about/livepeer-network/overview',
                'v2/fr/about/livepeer-network/actors',
                'v2/fr/about/livepeer-network/job-lifecycle',
                'v2/fr/about/livepeer-network/marketplace',
                'v2/fr/about/livepeer-network/technical-architecture',
                'v2/fr/about/livepeer-network/interfaces',
              ],
            },
            {
              group: 'Resources',
              icon: 'books',
              pages: [
                'v2/fr/about/resources/livepeer-whitepaper',
                'v2/fr/about/resources/livepeer-glossary',
                'v2/fr/about/resources/blockchain-contracts',
                'v2/fr/about/resources/technical-roadmap',
                'v2/fr/about/resources/gateways-vs-orchestrators',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Platforms',
      icon: 'film-canister',
      anchors: [
        {
          anchor: 'Products',
          icon: 'display-code',
          groups: [
            {
              group: 'Use Livepeer',
              icon: 'play',
              pages: [
                'v2/fr/solutions/portal',
                'v2/fr/solutions/product-hub',
                'v2/fr/solutions/solution-providers',
              ],
            },
            {
              group: 'Daydream',
              icon: 'camera-movie',
              pages: ['v2/fr/solutions/daydream/overview'],
            },
            {
              group: 'Livepeer Studio',
              icon: 'film-canister',
              pages: [
                'v2/fr/solutions/livepeer-studio/overview',
                'v2/fr/solutions/livepeer-studio/client-use-cases',
                {
                  group: 'Get started',
                  pages: [
                    'v2/fr/solutions/livepeer-studio/get-started/overview',
                    'v2/fr/solutions/livepeer-studio/quickstart',
                    'v2/fr/solutions/livepeer-studio/get-started/authentication',
                    'v2/fr/solutions/livepeer-studio/get-started/studio-cli',
                  ],
                },
                {
                  group: 'Livestream',
                  pages: [
                    'v2/fr/solutions/livepeer-studio/livestream/overview',
                    'v2/fr/solutions/livepeer-studio/livestream/create-livestream',
                    'v2/fr/solutions/livepeer-studio/livestream/playback-livestream',
                    'v2/fr/solutions/livepeer-studio/livestream/stream-via-obs',
                    'v2/fr/solutions/livepeer-studio/livestream/livestream-from-browser',
                    'v2/fr/solutions/livepeer-studio/livestream/multistream',
                    'v2/fr/solutions/livepeer-studio/livestream/clip-livestream',
                    'v2/fr/solutions/livepeer-studio/livestream/stream-health',
                    'v2/fr/solutions/livepeer-studio/livestream/optimize-latency',
                  ],
                },
                {
                  group: 'Video on demand',
                  pages: [
                    'v2/fr/solutions/livepeer-studio/video-on-demand/overview',
                    'v2/fr/solutions/livepeer-studio/video-on-demand/upload-asset',
                    'v2/fr/solutions/livepeer-studio/video-on-demand/playback-asset',
                    'v2/fr/solutions/livepeer-studio/video-on-demand/encrypted-assets',
                    'v2/fr/solutions/livepeer-studio/video-on-demand/thumbnails-vod',
                    'v2/fr/solutions/livepeer-studio/video-on-demand/transcode-video',
                  ],
                },
                {
                  group: 'Access control & security',
                  pages: [
                    'v2/fr/solutions/livepeer-studio/access-control/overview',
                    'v2/fr/solutions/livepeer-studio/access-control/webhooks',
                    'v2/fr/solutions/livepeer-studio/access-control/jwt',
                  ],
                },
                {
                  group: 'Events & analytics',
                  pages: [
                    'v2/fr/solutions/livepeer-studio/analytics/webhooks',
                    'v2/fr/solutions/livepeer-studio/analytics/listen-to-events',
                    'v2/fr/solutions/livepeer-studio/analytics/overview',
                  ],
                },
                {
                  group: 'Player & embed',
                  pages: ['v2/fr/solutions/livepeer-studio/player'],
                },
                {
                  group: 'Reference',
                  pages: [
                    'v2/fr/solutions/livepeer-studio/reference/api',
                    'v2/fr/solutions/livepeer-studio/reference/overview',
                    'v2/fr/solutions/livepeer-studio/reference/sdks',
                    'v2/fr/solutions/livepeer-studio/reference/managing-projects',
                  ],
                },
                {
                  group: 'API Reference',
                  pages: [
                    {
                      group: 'Assets',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/upload',
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/upload-via-url',
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/update',
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/delete',
                        'v2/fr/solutions/livepeer-studio/api-reference/assets/get-all',
                      ],
                    },
                    {
                      group: 'Streams',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/create',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/get-all',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/update',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/terminate',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/create-clip',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/get-clip',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/add-multistream-target',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/delete-multistream-target',
                        'v2/fr/solutions/livepeer-studio/api-reference/streams/delete',
                      ],
                    },
                    {
                      group: 'Multistream',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/multistream/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/multistream/create',
                        'v2/fr/solutions/livepeer-studio/api-reference/multistream/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/multistream/get-all',
                        'v2/fr/solutions/livepeer-studio/api-reference/multistream/update',
                        'v2/fr/solutions/livepeer-studio/api-reference/multistream/delete',
                      ],
                    },
                    {
                      group: 'Playback',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/playback/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/playback/get',
                      ],
                    },
                    {
                      group: 'Sessions',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/sessions/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/sessions/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/sessions/get-all',
                        'v2/fr/solutions/livepeer-studio/api-reference/sessions/get-clip',
                      ],
                    },
                    {
                      group: 'Tasks',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/tasks/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/tasks/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/tasks/get-all',
                      ],
                    },
                    {
                      group: 'Transcode',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/transcode/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/transcode/create',
                      ],
                    },
                    {
                      group: 'Signing Keys',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/signing-keys/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/signing-keys/create',
                        'v2/fr/solutions/livepeer-studio/api-reference/signing-keys/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/signing-keys/get-all',
                        'v2/fr/solutions/livepeer-studio/api-reference/signing-keys/update',
                        'v2/fr/solutions/livepeer-studio/api-reference/signing-keys/delete',
                      ],
                    },
                    {
                      group: 'Webhooks',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/webhooks/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/webhooks/create',
                        'v2/fr/solutions/livepeer-studio/api-reference/webhooks/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/webhooks/get-all',
                        'v2/fr/solutions/livepeer-studio/api-reference/webhooks/update',
                        'v2/fr/solutions/livepeer-studio/api-reference/webhooks/delete',
                      ],
                    },
                    {
                      group: 'Rooms',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/create',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/get',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/delete',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/create-user',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/get-user',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/update-user',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/remove-user',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/start-egress',
                        'v2/fr/solutions/livepeer-studio/api-reference/rooms/stop-egress',
                      ],
                    },
                    {
                      group: 'Viewership',
                      pages: [
                        'v2/fr/solutions/livepeer-studio/api-reference/viewership/overview',
                        'v2/fr/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics',
                        'v2/fr/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics',
                        'v2/fr/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics',
                        'v2/fr/solutions/livepeer-studio/api-reference/viewership/get-public-total-views',
                        'v2/fr/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: 'Stream.place',
              icon: 'projector',
              pages: [
                'v2/fr/solutions/streamplace/overview',
                {
                  group: 'Stream.place',
                  pages: [
                    'v2/fr/solutions/streamplace/introduction/streamplace-guide',
                    'v2/fr/solutions/streamplace/introduction/streamplace-architecture',
                    'v2/fr/solutions/streamplace/introduction/streamplace-integration',
                    'v2/fr/solutions/streamplace/introduction/streamplace-provenance',
                    'v2/fr/solutions/streamplace/introduction/streamplace-funding-model',
                  ],
                },
              ],
            },
            {
              group: 'Embody Avatars',
              icon: 'user-robot',
              pages: ['v2/fr/solutions/embody/overview'],
            },
            {
              group: 'Frameworks',
              icon: 'clapperboard-play',
              pages: ['v2/fr/solutions/frameworks/overview'],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Developers',
      icon: 'display-code',
      anchors: [
        {
          anchor: 'Developers',
          icon: 'display-code',
          groups: [
            {
              group: 'Building on Livepeer',
              icon: 'code',
              pages: [
                'v2/fr/developers/portal',
                'v2/fr/developers/developer-guide',
                'v2/fr/developers/guides-and-tools/developer-guides',
                'v2/fr/developers/developer-journey',
              ],
            },
            {
              group: 'Quickstart',
              icon: 'fast-forward',
              pages: [
                {
                  group: 'Video & Transcoding',
                  pages: [
                    'v2/fr/developers/quickstart/video/video-streaming',
                    'v2/fr/developers/quickstart/video/transcoding-jobs',
                    'v2/fr/developers/quickstart/video/video-streaming',
                  ],
                },
                {
                  group: 'AI Jobs & Pipelines',
                  pages: [
                    'v2/fr/developers/quickstart/ai/ai-pipelines',
                    'v2/fr/developers/quickstart/ai/ai-jobs',
                  ],
                },
              ],
            },
            {
              group: 'AI Pipelines',
              icon: 'user-robot',
              pages: [
                'v2/fr/developers/ai-pipelines/overview',
                'v2/fr/developers/ai-pipelines/byoc',
                'v2/fr/developers/ai-pipelines/comfystream',
              ],
            },
            {
              group: 'Guides & Tutorials',
              icon: 'laptop-file',
              pages: [
                'v2/fr/developers/guides-and-tools/developer-guides',
                'v2/fr/developers/guides-and-tools/resources',
                'v2/fr/developers/guides-and-tools/developer-help',
                'v2/fr/developers/guides-and-tools/contribution-guide',
              ],
            },
            {
              group: 'Builder Opportunities',
              icon: 'lightbulb',
              pages: [
                'v2/fr/developers/builder-opportunities/dev-programs',
                'v2/fr/developers/builder-opportunities/livepeer-rfps',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [
            {
              group: 'Developer Tools',
              icon: 'tools',
              pages: [
                'v2/fr/developers/developer-tools/tooling-hub',
                'v2/fr/developers/developer-tools/livepeer-explorer',
                'v2/fr/developers/developer-tools/livepeer-cloud',
                'v2/fr/developers/developer-tools/dashboards',
              ],
            },
            {
              group: 'Technical References',
              icon: 'books',
              pages: [
                {
                  group: 'SDKs & APIs',
                  pages: [
                    'v2/fr/developers/technical-references/sdks',
                    'v2/fr/developers/technical-references/apis',
                  ],
                },
                'v2/fr/developers/technical-references/awesome-livepeer',
                'v2/fr/developers/technical-references/wiki',
                'v2/fr/developers/technical-references/deepwiki',
              ],
            },
            {
              group: 'Changelog & Migrations',
              icon: 'swap',
              pages: [
                'v2/fr/resources/changelog/changelog',
                'v2/fr/resources/changelog/migration-guide',
              ],
            },
          ],
        },
      ],
    },
    {
      tab: 'Gateways',
      icon: 'torii-gate',
      anchors: [
        {
          anchor: 'Gateways',
          icon: 'torii-gate',
          groups: [
            {
              group: 'Gateway Knowledge Hub',
              icon: 'graduation-cap',
              pages: [
                'v2/fr/gateways/gateways-portal',
                'v2/fr/gateways/about/explainer',
                'v2/fr/gateways/about/functions',
                'v2/fr/gateways/about/architecture',
                'v2/fr/gateways/about/economics',
              ],
            },
            {
              group: 'Quickstart ⚡',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg',
              pages: [
                'v2/fr/gateways/quickstart/gateway-setup',
                'v2/fr/gateways/quickstart/AI-prompt',
              ],
            },
            {
              group: 'Gateway Services & Providers',
              icon: 'wand-magic-sparkles',
              pages: [
                'v2/fr/gateways/using-gateways/choosing-a-gateway',
                'v2/fr/gateways/using-gateways/gateway-providers',
                {
                  group: 'Provider Docs',
                  pages: [
                    'v2/fr/gateways/using-gateways/gateway-providers/daydream-gateway',
                    'v2/fr/gateways/using-gateways/gateway-providers/livepeer-studio-gateway',
                    'v2/fr/gateways/using-gateways/gateway-providers/cloud-spe-gateway',
                    'v2/fr/solutions/streamplace/overview',
                  ],
                },
              ],
            },
            {
              group: 'Run A Gateway',
              icon: 'sign-posts-wrench',
              pages: [
                {
                  group: 'Quickstart',
                  icon: 'fast-forward',
                  pages: [
                    'v2/fr/gateways/quickstart/gateway-setup',
                    'v2/fr/gateways/quickstart/AI-prompt',
                  ],
                },
                {
                  group: 'Gateway Setup Guide',
                  expanded: true,
                  pages: [
                    'v2/fr/gateways/run-a-gateway/why-run-a-gateway',
                    'v2/fr/gateways/run-a-gateway/run-a-gateway',
                    {
                      group: 'Setup Checklist',
                      pages: [
                        'v2/fr/gateways/run-a-gateway/requirements/setup',
                        'v2/fr/gateways/run-a-gateway/requirements/on-chain setup/on-chain',
                        'v2/fr/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway',
                      ],
                    },
                    {
                      group: 'Installation',
                      pages: [
                        'v2/fr/gateways/run-a-gateway/install/install-overview',
                        'v2/fr/gateways/run-a-gateway/install/docker-install',
                        'v2/fr/gateways/run-a-gateway/install/linux-install',
                        'v2/fr/gateways/run-a-gateway/install/windows-install',
                        'v2/fr/gateways/run-a-gateway/install/community-projects',
                      ],
                    },
                    {
                      group: 'Configuration',
                      pages: [
                        'v2/fr/gateways/run-a-gateway/configure/configuration-overview',
                        'v2/fr/gateways/run-a-gateway/configure/video-configuration',
                        'v2/fr/gateways/run-a-gateway/configure/ai-configuration',
                        'v2/fr/gateways/run-a-gateway/configure/dual-configuration',
                        'v2/fr/gateways/run-a-gateway/configure/pricing-configuration',
                      ],
                    },
                    {
                      group: 'Testing',
                      pages: [
                        'v2/fr/gateways/quickstart/gateway-setup',
                        'v2/fr/gateways/quickstart/gateway-setup',
                        'v2/fr/gateways/quickstart/gateway-setup',
                      ],
                    },
                    {
                      group: 'Network Connect',
                      tag: 'Go Live!',
                      pages: [
                        'v2/fr/gateways/run-a-gateway/connect/lp-marketplace',
                        'v2/fr/gateways/run-a-gateway/connect/discover-offerings',
                        'v2/fr/gateways/run-a-gateway/connect/connect-with-offerings',
                      ],
                    },
                    {
                      group: 'Monitor & Optimise',
                      pages: [
                        'v2/fr/gateways/run-a-gateway/monitor/monitor-and-optimise',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: 'Gateway Tools & Resources',
              icon: 'tools',
              pages: [
                'v2/fr/gateways/gateway-tools/explorer',
                'v2/fr/gateways/gateway-tools/livepeer-tools',
                'v2/fr/gateways/guides-and-tools/community-guides',
                'v2/fr/gateways/guides-and-tools/community-projects',
                'v2/fr/gateways/guides-and-tools/faq',
              ],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Gateways',
                  pages: [
                    'v2/fr/gateways/references/technical-architecture',
                    'v2/fr/gateways/references/configuration-flags',
                    'v2/fr/gateways/references/configuration-flags',
                    'v2/fr/gateways/references/cli-commands',
                  ],
                },
                {
                  group: 'API Reference',
                  pages: [
                    {
                      group: 'AI API',
                      pages: [
                        'v2/fr/gateways/references/api-reference/AI-API/ai',
                        'v2/fr/gateways/references/api-reference/AI-API/text-to-image',
                        'v2/fr/gateways/references/api-reference/AI-API/image-to-image',
                        'v2/fr/gateways/references/api-reference/AI-API/image-to-video',
                        'v2/fr/gateways/references/api-reference/AI-API/upscale',
                        'v2/fr/gateways/references/api-reference/AI-API/audio-to-text',
                        'v2/fr/gateways/references/api-reference/AI-API/segment-anything-2',
                        'v2/fr/gateways/references/api-reference/AI-API/llm',
                        'v2/fr/gateways/references/api-reference/AI-API/image-to-text',
                        'v2/fr/gateways/references/api-reference/AI-API/live-video-to-video',
                        'v2/fr/gateways/references/api-reference/AI-API/text-to-speech',
                        'v2/fr/gateways/references/api-reference/AI-API/health',
                        'v2/fr/gateways/references/api-reference/AI-API/hardware-info',
                        'v2/fr/gateways/references/api-reference/AI-API/hardware-stats',
                      ],
                    },
                    {
                      group: 'CLI HTTP API',
                      pages: [
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/cli-http-api',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/unbond',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/rebond',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/activateorchestrator',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/reward',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/transfertokens',
                        'v2/fr/gateways/references/api-reference/CLI-HTTP/signmessage',
                      ],
                    },
                  ],
                },
                {
                  group: 'Exchanges & RPCs',
                  pages: [
                    'v2/fr/gateways/references/livepeer-exchanges',
                    'v2/fr/gateways/references/arbitrum-exchanges',
                    'v2/fr/gateways/references/arbitrum-rpc',
                  ],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'GPU Nodes',
      icon: 'microchip',
      anchors: [
        {
          anchor: 'GPU Nodes',
          icon: 'microchip',
          groups: [
            {
              group: 'Orchestrator Knowledge Hub',
              icon: 'graduation-cap',
              pages: [
                'v2/fr/orchestrators/orchestrators-portal',
                'v2/fr/orchestrators/about-orchestrators/overview',
                'v2/fr/orchestrators/about-orchestrators/orchestrator-functions',
                'v2/fr/orchestrators/about-orchestrators/architecture',
                'v2/fr/orchestrators/about-orchestrators/economics',
              ],
            },
            {
              group: 'Quickstart ⚡',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg',
              pages: [
                'v2/fr/orchestrators/quickstart/overview',
                'v2/fr/orchestrators/quickstart/join-a-pool',
                'v2/fr/orchestrators/quickstart/orchestrator-setup',
              ],
            },
            {
              group: 'Run an Orchestrator',
              icon: 'gear-code',
              pages: [
                {
                  group: 'Orchestrator Setup Guide',
                  pages: [
                    'v2/fr/orchestrators/setting-up-an-orchestrator/overview',
                    {
                      group: 'Setup Checklist',
                      pages: [
                        'v2/fr/orchestrators/setting-up-an-orchestrator/hardware-requirements',
                      ],
                    },
                    {
                      group: 'Installation',
                      pages: [
                        'v2/fr/orchestrators/setting-up-an-orchestrator/orchestrator-stats',
                      ],
                    },
                    {
                      group: 'Configuration',
                      pages: [
                        'v2/fr/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer',
                      ],
                    },
                    {
                      group: 'Testing',
                      pages: [
                        'v2/fr/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                    {
                      group: 'Network Integration',
                      pages: [
                        'v2/fr/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                    {
                      group: 'Monitor & Optimise',
                      pages: [
                        'v2/fr/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: 'Advanced Orchestrator Information',
              icon: 'gamepad',
              pages: [
                'v2/fr/orchestrators/advanced-setup/staking-LPT',
                'v2/fr/orchestrators/advanced-setup/rewards-and-fees',
                'v2/fr/orchestrators/advanced-setup/delegation',
                'v2/fr/orchestrators/advanced-setup/ai-pipelines',
                'v2/fr/orchestrators/advanced-setup/run-a-pool',
              ],
            },
            {
              group: 'Orchestrator Tools & Resources',
              icon: 'laptop-file',
              pages: [
                'v2/fr/orchestrators/orchestrator-tools-and-resources/orchestrator-tools',
                'v2/fr/orchestrators/orchestrator-tools-and-resources/community-pools',
                'v2/fr/orchestrators/orchestrator-tools-and-resources/orchestrator-guides',
                'v2/fr/orchestrators/orchestrator-tools-and-resources/orchestrator-resources',
                'v2/fr/orchestrators/orchestrator-tools-and-resources/orchestrator-community-and-help',
              ],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Orchestrators',
                  pages: ['v2/fr/orchestrators/references/faq'],
                },
                {
                  group: 'API & CLI Reference',
                  pages: ['v2/fr/orchestrators/references/cli-flags'],
                },
                {
                  group: 'On-Chain Reference',
                  pages: ['v2/fr/orchestrators/references/faq'],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'LP Token',
      icon: 'hand-holding-dollar',
      anchors: [
        {
          anchor: 'Delegators & LPT',
          icon: 'hand-holding-dollar',
          groups: [
            {
              group: 'About LPT',
              icon: 'graduation-cap',
              pages: [
                'v2/fr/lpt/token-portal',
                'v2/fr/lpt/about/overview',
                'v2/fr/lpt/about/purpose',
                'v2/fr/lpt/about/tokenomics',
                'v2/fr/lpt/about/mechanics',
              ],
            },
            {
              group: 'Delegating LPT',
              icon: 'money-bill-transfer',
              pages: [
                'v2/fr/lpt/delegation/overview',
                'v2/fr/lpt/delegation/about-delegators',
                'v2/fr/lpt/delegation/delegation-guide',
              ],
            },
            {
              group: 'Livepeer Governance',
              icon: 'box-ballot',
              pages: [
                'v2/fr/lpt/governance/overview',
                'v2/fr/lpt/governance/model',
                'v2/fr/lpt/governance/processes',
              ],
            },
            {
              group: 'Livepeer Treasury',
              pages: [
                'v2/fr/lpt/treasury/overview',
                'v2/fr/lpt/treasury/proposals',
                'v2/fr/lpt/treasury/allocations',
              ],
            },
            {
              group: 'Guides & Resources',
              icon: 'books',
              pages: [
                'v2/fr/lpt/resources/exchanges',
                'v2/fr/lpt/resources/lpt-eth-usage',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Community',
      icon: 'people-group',
      anchors: [
        {
          anchor: 'Community',
          icon: 'people-group',
          groups: [
            {
              group: 'Livepeer Community',
              icon: 'people-group',
              pages: [
                'v2/fr/community/community-portal',
                'v2/fr/community/livepeer-community/trending-topics',
                'v2/fr/community/livepeer-community/roadmap',
              ],
            },
            {
              group: 'Livepeer Connect',
              icon: 'hashtag',
              pages: [
                'v2/fr/community/livepeer-community/community-guidelines',
                'v2/fr/community/livepeer-connect/news-and-socials',
                'v2/fr/community/livepeer-connect/events-and-community-streams',
                'v2/fr/community/livepeer-connect/forums-and-discussions',
              ],
            },
            {
              group: 'Livepeer Contribute',
              icon: 'door-open',
              pages: [
                'v2/fr/community/livepeer-contribute/contribute',
                'v2/fr/community/livepeer-contribute/opportunities',
                'v2/fr/community/livepeer-contribute/build-livepeer',
              ],
            },
            {
              group: '[MOVE HERE] Help Center',
              icon: 'comments-question-check',
              hidden: true,
              pages: ['v2/fr/community/livepeer-community/trending-topics'],
            },
            {
              group: 'Resources',
              icon: 'books',
              pages: [
                'v2/fr/resources/media-kit',
                'v2/fr/community/livepeer-community/trending-topics',
                'v2/fr/community/livepeer-community/livepeer-latest-topics',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Resource HUB',
      hidden: false,
      icon: 'books',
      anchors: [
        {
          anchor: 'Reference & Help HUB',
          icon: 'books',
          groups: [
            {
              group: 'Home',
              icon: 'house',
              pages: ['v2/resources/redirect'],
            },
            {
              group: 'Documentation Guide',
              icon: 'book-open',
              pages: [
                'v2/fr/resources/documentation-guide/documentation-overview',
                'v2/fr/resources/documentation-guide/documentation-guide',
                'v2/fr/resources/documentation-guide/docs-features-and-ai-integrations',
                'v2/fr/resources/documentation-guide/style-guide',
                'v2/fr/resources/documentation-guide/snippets-inventory',
                'v2/fr/resources/documentation-guide/contribute-to-the-docs',
                'v2/fr/resources/documentation-guide/automations-workflows',
                {
                  group: 'Component Library',
                  icon: 'puzzle-piece',
                  pages: [
                    'v2/fr/resources/documentation-guide/component-library/component-library',
                    'v2/fr/resources/documentation-guide/component-library/primitives',
                    'v2/fr/resources/documentation-guide/component-library/layout',
                    'v2/fr/resources/documentation-guide/component-library/content',
                    'v2/fr/resources/documentation-guide/component-library/data',
                    'v2/fr/resources/documentation-guide/component-library/page-structure',
                  ],
                },
              ],
            },
            {
              group: 'Livepeer Concepts',
              icon: 'graduation-cap',
              pages: [
                'v2/fr/about/core-concepts',
                'v2/fr/resources/livepeer-glossary',
                'v2/fr/about/livepeer-network/actors',
              ],
            },
            {
              group: 'Developer References',
              icon: 'book',
              pages: ['v2/fr/resources/livepeer-glossary'],
            },
            {
              group: 'Gateway References',
              icon: 'wand-magic-sparkles',
              pages: [
                'v2/gateways/guides-and-tools/gateway-job-pipelines/overview',
              ],
            },
            {
              group: 'Orchestrator References',
              icon: 'microchip',
              pages: ['v2/fr/resources/livepeer-glossary'],
            },
            {
              group: 'LPT & Delegator References',
              icon: 'hand-holding-dollar',
              pages: ['v2/fr/resources/livepeer-glossary'],
            },
            {
              group: 'Community Resources',
              icon: '',
              pages: ['v2/fr/resources/livepeer-glossary'],
            },
            {
              group: 'Partner Resources',
              icon: 'handshake',
              pages: ['v2/fr/resources/livepeer-glossary'],
            },
            {
              group: 'Help Center',
              icon: 'comments-question-check',
              pages: ['v2/fr/resources/livepeer-glossary'],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Protocol References',
                  pages: [' '],
                },
              ],
            },
            {
              group: 'Changelog',
              icon: 'swap',
              pages: [
                'v2/fr/resources/changelog/changelog',
                'v2/fr/resources/changelog/migration-guide',
              ],
            },
          ],
        },
        {
          anchor: 'Help Center',
          icon: 'comments-question-check',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          href: ' ',
        },
      ],
    },
    {
      tab: 'Internal Hub',
      hidden: true,
      icon: 'info-circle',
      anchors: [
        {
          anchor: 'Internal Hub',
          icon: 'info-circle',
          groups: [
            {
              group: 'RFP',
              pages: [
                'v2/internal/rfp/aims',
                'v2/internal/rfp/problem-statements',
                'v2/internal/rfp/outcomes',
                'v2/internal/rfp/deliverables',
                'v2/internal/rfp/report',
              ],
            },
            {
              group: 'Internal Hub',
              pages: [
                'v2/internal/internal-overview',
                'v2/internal/overview/governance',
                'v2/internal/overview/strategic-alignment',
                'v2/internal/docs-philosophy',
                'v2/internal/definitions',
                'v2/internal/overview/personas',
                'v2/internal/ecosystem',
                'v2/internal/references',
              ],
            },
            {
              group: 'Reports: Navigation & Links',
              pages: [
                'v2/internal/reports/navigation-links/docs-navigation',
                'v2/internal/reports/navigation-links/v2-link-audit',
              ],
            },
            {
              group: 'Reports: Quality & Accessibility',
              pages: [
                'v2/internal/reports/quality-accessibility/v2-wcag-audit',
                'v2/internal/reports/quality-accessibility/wcag-repair-common',
              ],
            },
            {
              group: 'Reports: Page Audits',
              pages: ['v2/internal/reports/page-audits/domain-pages-audit'],
            },
            {
              group: 'Reports: Repo Ops',
              pages: ['v2/internal/reports/repo-ops/audit-scripts'],
            },
          ],
        },
      ],
    },
  ],
}

const docsJsonCn = {
  language: 'cn',
  tabs: [
    {
      tab: 'Home',
      icon: 'house-heart',
      anchors: [
        {
          anchor: 'Home',
          icon: 'house-heart',
          groups: [
            {
              group: 'Home',
              icon: 'house-heart',
              pages: [
                'v2/cn/home/mission-control',
                'v2/cn/home/get-started',
                'v2/cn/home/primer',
              ],
            },
            {
              group: 'Livepeer',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg',
              pages: [
                'v2/cn/home/about-livepeer/vision',
                'v2/cn/home/about-livepeer/evolution',
                'v2/cn/home/about-livepeer/benefits',
                'v2/cn/home/about-livepeer/ecosystem',
                'v2/cn/home/about-livepeer/roadmap',
              ],
            },
            {
              group: 'Showcase',
              icon: 'clapperboard-play',
              pages: [
                'v2/cn/home/solutions/showcase',
                'v2/cn/home/solutions/verticals',
                'v2/cn/home/solutions/applications',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'About',
      icon: 'camera-movie',
      anchors: [
        {
          anchor: 'About Livepeer',
          icon: 'play',
          groups: [
            {
              group: 'About Livepeer',
              icon: 'graduation-cap',
              pages: [
                'v2/cn/about/portal',
                'v2/cn/about/livepeer-overview',
                'v2/cn/about/core-concepts',
                'v2/cn/about/mental-model',
              ],
            },
            {
              group: 'Livepeer Protocol',
              icon: 'cube',
              pages: [
                'v2/cn/about/livepeer-protocol/overview',
                'v2/cn/about/livepeer-protocol/core-mechanisms',
                'v2/cn/about/livepeer-protocol/livepeer-token',
                'v2/cn/about/livepeer-protocol/governance-model',
                'v2/cn/about/livepeer-protocol/treasury',
                'v2/cn/about/livepeer-protocol/economics',
                'v2/cn/about/livepeer-protocol/technical-architecture',
              ],
            },
            {
              group: 'Livepeer Network',
              icon: 'circle-nodes',
              pages: [
                'v2/cn/about/livepeer-network/overview',
                'v2/cn/about/livepeer-network/actors',
                'v2/cn/about/livepeer-network/job-lifecycle',
                'v2/cn/about/livepeer-network/marketplace',
                'v2/cn/about/livepeer-network/technical-architecture',
                'v2/cn/about/livepeer-network/interfaces',
              ],
            },
            {
              group: 'Resources',
              icon: 'books',
              pages: [
                'v2/cn/about/resources/livepeer-whitepaper',
                'v2/cn/about/resources/livepeer-glossary',
                'v2/cn/about/resources/blockchain-contracts',
                'v2/cn/about/resources/technical-roadmap',
                'v2/cn/about/resources/gateways-vs-orchestrators',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Solutions',
      icon: 'film-canister',
      hidden: true,
      anchors: [
        {
          anchor: 'Solutions',
          icon: 'display-code',
          groups: [
            {
              group: 'Use Livepeer',
              icon: 'play',
              pages: [
                'v2/cn/solutions/portal',
                'v2/cn/solutions/product-hub',
                'v2/cn/solutions/solution-providers',
              ],
            },
            {
              group: 'Daydream',
              icon: 'camera-movie',
              pages: ['v2/cn/solutions/daydream/overview'],
            },
            {
              group: 'Livepeer Studio',
              icon: 'film-canister',
              pages: [
                'v2/cn/solutions/livepeer-studio/overview',
                'v2/cn/solutions/livepeer-studio/client-use-cases',
              ],
            },
            {
              group: 'Stream.place',
              icon: 'projector',
              pages: [
                'v2/cn/solutions/streamplace/overview',
                {
                  group: 'Stream.place',
                  pages: [
                    'v2/cn/solutions/streamplace/introduction/streamplace-guide',
                    'v2/cn/solutions/streamplace/introduction/streamplace-architecture',
                    'v2/cn/solutions/streamplace/introduction/streamplace-integration',
                    'v2/cn/solutions/streamplace/introduction/streamplace-provenance',
                    'v2/cn/solutions/streamplace/introduction/streamplace-funding-model',
                  ],
                },
              ],
            },
            {
              group: 'Embody Avatars',
              icon: 'user-robot',
              pages: ['v2/cn/solutions/embody/overview'],
            },
            {
              group: 'Frameworks',
              icon: 'clapperboard-play',
              pages: ['v2/cn/solutions/frameworks/overview'],
            },
          ],
        },
        {
          anchor: 'Livepeer Studio Docs',
          icon: 'film-canister',
          pages: [
            'v2/cn/solutions/livepeer-studio/overview',
            {
              group: 'Get started',
              pages: [
                'v2/cn/solutions/livepeer-studio/get-started/overview',
                'v2/cn/solutions/livepeer-studio/quickstart',
                'v2/cn/solutions/livepeer-studio/get-started/authentication',
                'v2/cn/solutions/livepeer-studio/get-started/studio-cli',
              ],
            },
            {
              group: 'Livestream',
              pages: [
                'v2/cn/solutions/livepeer-studio/livestream/overview',
                'v2/cn/solutions/livepeer-studio/livestream/create-livestream',
                'v2/cn/solutions/livepeer-studio/livestream/playback-livestream',
                'v2/cn/solutions/livepeer-studio/livestream/stream-via-obs',
                'v2/cn/solutions/livepeer-studio/livestream/livestream-from-browser',
                'v2/cn/solutions/livepeer-studio/livestream/multistream',
                'v2/cn/solutions/livepeer-studio/livestream/clip-livestream',
                'v2/cn/solutions/livepeer-studio/livestream/stream-health',
                'v2/cn/solutions/livepeer-studio/livestream/optimize-latency',
              ],
            },
            {
              group: 'Video on demand',
              pages: [
                'v2/cn/solutions/livepeer-studio/video-on-demand/overview',
                'v2/cn/solutions/livepeer-studio/video-on-demand/upload-asset',
                'v2/cn/solutions/livepeer-studio/video-on-demand/playback-asset',
                'v2/cn/solutions/livepeer-studio/video-on-demand/encrypted-assets',
                'v2/cn/solutions/livepeer-studio/video-on-demand/thumbnails-vod',
                'v2/cn/solutions/livepeer-studio/video-on-demand/transcode-video',
              ],
            },
            {
              group: 'Access control & security',
              pages: [
                'v2/cn/solutions/livepeer-studio/access-control/overview',
                'v2/cn/solutions/livepeer-studio/access-control/webhooks',
                'v2/cn/solutions/livepeer-studio/access-control/jwt',
              ],
            },
            {
              group: 'Events & analytics',
              pages: [
                'v2/cn/solutions/livepeer-studio/analytics/webhooks',
                'v2/cn/solutions/livepeer-studio/analytics/listen-to-events',
                'v2/cn/solutions/livepeer-studio/analytics/overview',
              ],
            },
            {
              group: 'Player & embed',
              pages: ['v2/cn/solutions/livepeer-studio/player'],
            },
            {
              group: 'Reference',
              pages: [
                'v2/cn/solutions/livepeer-studio/reference/api',
                'v2/cn/solutions/livepeer-studio/reference/overview',
                'v2/cn/solutions/livepeer-studio/reference/sdks',
                'v2/cn/solutions/livepeer-studio/reference/managing-projects',
              ],
            },
            {
              group: 'API Reference',
              pages: [
                {
                  group: 'Assets',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/upload',
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/upload-via-url',
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/update',
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/delete',
                    'v2/cn/solutions/livepeer-studio/api-reference/assets/get-all',
                  ],
                },
                {
                  group: 'Streams',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/create',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/get-all',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/update',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/terminate',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/create-clip',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/get-clip',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/add-multistream-target',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/delete-multistream-target',
                    'v2/cn/solutions/livepeer-studio/api-reference/streams/delete',
                  ],
                },
                {
                  group: 'Multistream',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/multistream/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/multistream/create',
                    'v2/cn/solutions/livepeer-studio/api-reference/multistream/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/multistream/get-all',
                    'v2/cn/solutions/livepeer-studio/api-reference/multistream/update',
                    'v2/cn/solutions/livepeer-studio/api-reference/multistream/delete',
                  ],
                },
                {
                  group: 'Playback',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/playback/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/playback/get',
                  ],
                },
                {
                  group: 'Sessions',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/sessions/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/sessions/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/sessions/get-all',
                    'v2/cn/solutions/livepeer-studio/api-reference/sessions/get-clip',
                    'v2/cn/solutions/livepeer-studio/api-reference/sessions/get-clip',
                  ],
                },
                {
                  group: 'Tasks',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/tasks/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/tasks/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/tasks/get-all',
                  ],
                },
                {
                  group: 'Transcode',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/transcode/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/transcode/create',
                  ],
                },
                {
                  group: 'Signing Keys',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/signing-keys/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/signing-keys/create',
                    'v2/cn/solutions/livepeer-studio/api-reference/signing-keys/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/signing-keys/get-all',
                    'v2/cn/solutions/livepeer-studio/api-reference/signing-keys/update',
                    'v2/cn/solutions/livepeer-studio/api-reference/signing-keys/delete',
                  ],
                },
                {
                  group: 'Webhooks',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/webhooks/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/webhooks/create',
                    'v2/cn/solutions/livepeer-studio/api-reference/webhooks/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/webhooks/get-all',
                    'v2/cn/solutions/livepeer-studio/api-reference/webhooks/update',
                    'v2/cn/solutions/livepeer-studio/api-reference/webhooks/delete',
                  ],
                },
                {
                  group: 'Rooms',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/create',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/get',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/update-user',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/delete',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/create-user',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/get-user',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/update-user',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/remove-user',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/start-egress',
                    'v2/cn/solutions/livepeer-studio/api-reference/rooms/stop-egress',
                  ],
                },
                {
                  group: 'Viewership',
                  pages: [
                    'v2/cn/solutions/livepeer-studio/api-reference/viewership/overview',
                    'v2/cn/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics',
                    'v2/cn/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics',
                    'v2/cn/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics',
                    'v2/cn/solutions/livepeer-studio/api-reference/viewership/get-public-total-views',
                    'v2/cn/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership',
                  ],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Developers',
      icon: 'display-code',
      anchors: [
        {
          anchor: 'Developers',
          icon: 'display-code',
          groups: [
            {
              group: 'Building on Livepeer',
              icon: 'code',
              pages: [
                'v2/cn/developers/portal',
                'v2/cn/developers/developer-guide',
                'v2/cn/developers/guides-and-tools/developer-guides',
                'v2/cn/developers/developer-journey',
              ],
            },
            {
              group: 'Quickstart',
              icon: 'fast-forward',
              pages: [
                {
                  group: 'Video & Transcoding',
                  pages: [
                    'v2/cn/developers/quickstart/video/video-streaming',
                    'v2/cn/developers/quickstart/video/transcoding-jobs',
                    'v2/cn/developers/quickstart/video/video-streaming',
                  ],
                },
                {
                  group: 'AI Jobs & Pipelines',
                  pages: [
                    'v2/cn/developers/quickstart/ai/ai-pipelines',
                    'v2/cn/developers/quickstart/ai/ai-jobs',
                  ],
                },
              ],
            },
            {
              group: 'AI Pipelines',
              icon: 'user-robot',
              pages: [
                'v2/cn/developers/ai-pipelines/overview',
                'v2/cn/developers/ai-pipelines/byoc',
                'v2/cn/developers/ai-pipelines/comfystream',
              ],
            },
            {
              group: 'Guides & Tutorials',
              icon: 'laptop-file',
              pages: [
                'v2/cn/developers/guides-and-tools/developer-guides',
                'v2/cn/developers/guides-and-tools/resources',
                'v2/cn/developers/guides-and-tools/developer-help',
                'v2/cn/developers/guides-and-tools/contribution-guide',
              ],
            },
            {
              group: 'Builder Opportunities',
              icon: 'lightbulb',
              pages: [
                'v2/cn/developers/builder-opportunities/dev-programs',
                'v2/cn/developers/builder-opportunities/livepeer-rfps',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [
            {
              group: 'Developer Tools',
              icon: 'tools',
              pages: [
                'v2/cn/developers/developer-tools/tooling-hub',
                'v2/cn/developers/developer-tools/livepeer-explorer',
                'v2/cn/developers/developer-tools/livepeer-cloud',
                'v2/cn/developers/developer-tools/dashboards',
              ],
            },
            {
              group: 'Technical References',
              icon: 'books',
              pages: [
                {
                  group: 'SDKs & APIs',
                  pages: [
                    'v2/cn/developers/technical-references/sdks',
                    'v2/cn/developers/technical-references/apis',
                  ],
                },
                'v2/cn/developers/technical-references/awesome-livepeer',
                'v2/cn/developers/technical-references/wiki',
                'v2/cn/developers/technical-references/deepwiki',
              ],
            },
            {
              group: 'Changelog & Migrations',
              icon: 'swap',
              pages: [
                'v2/cn/resources/changelog/changelog',
                'v2/cn/resources/changelog/migration-guide',
              ],
            },
          ],
        },
      ],
    },
    {
      tab: 'Gateways',
      icon: 'torii-gate',
      anchors: [
        {
          anchor: 'Gateways',
          icon: 'torii-gate',
          groups: [
            {
              group: 'Gateway Knowledge Hub',
              icon: 'graduation-cap',
              pages: [
                'v2/cn/gateways/gateways-portal',
                'v2/cn/gateways/about/explainer',
                'v2/cn/gateways/about/functions',
                'v2/cn/gateways/about/architecture',
                'v2/cn/gateways/about/economics',
              ],
            },
            {
              group: 'Public Gateways',
              icon: 'wand-magic-sparkles',
              pages: [
                'v2/cn/gateways/using-gateways/choosing-a-gateway',
                'v2/cn/gateways/using-gateways/gateway-providers',
                {
                  group: 'Provider Docs',
                  pages: [
                    'v2/cn/gateways/using-gateways/gateway-providers/daydream-gateway',
                    'v2/cn/gateways/using-gateways/gateway-providers/livepeer-studio-gateway',
                    'v2/cn/gateways/using-gateways/gateway-providers/cloud-spe-gateway',
                    'v2/cn/solutions/streamplace/overview',
                  ],
                },
              ],
            },
            {
              group: 'Quickstart ⚡',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg',
              pages: [
                'v2/cn/gateways/quickstart/gateway-setup',
                'v2/cn/gateways/quickstart/AI-prompt',
              ],
            },
            {
              group: 'Run A Gateway',
              icon: 'sign-posts-wrench',
              pages: [
                {
                  group: 'Quickstart',
                  icon: 'fast-forward',
                  pages: [
                    'v2/cn/gateways/quickstart/gateway-setup',
                    'v2/cn/gateways/quickstart/AI-prompt',
                  ],
                },
                {
                  group: 'Gateway Setup Guide',
                  expanded: true,
                  pages: [
                    'v2/cn/gateways/run-a-gateway/why-run-a-gateway',
                    'v2/cn/gateways/run-a-gateway/run-a-gateway',
                    {
                      group: 'Setup Checklist',
                      pages: [
                        'v2/cn/gateways/run-a-gateway/requirements/setup',
                        'v2/cn/gateways/run-a-gateway/requirements/on-chain setup/on-chain',
                        'v2/cn/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway',
                      ],
                    },
                    {
                      group: 'Installation',
                      pages: [
                        'v2/cn/gateways/run-a-gateway/install/install-overview',
                        'v2/cn/gateways/run-a-gateway/install/docker-install',
                        'v2/cn/gateways/run-a-gateway/install/linux-install',
                        'v2/cn/gateways/run-a-gateway/install/windows-install',
                        'v2/cn/gateways/run-a-gateway/install/community-projects',
                      ],
                    },
                    {
                      group: 'Configuration',
                      pages: [
                        'v2/cn/gateways/run-a-gateway/configure/configuration-overview',
                        'v2/cn/gateways/run-a-gateway/configure/video-configuration',
                        'v2/cn/gateways/run-a-gateway/configure/ai-configuration',
                        'v2/cn/gateways/run-a-gateway/configure/dual-configuration',
                        'v2/cn/gateways/run-a-gateway/configure/pricing-configuration',
                      ],
                    },
                    {
                      group: 'Testing',
                      pages: [
                        'v2/cn/gateways/quickstart/gateway-setup',
                        'v2/cn/gateways/quickstart/gateway-setup',
                        'v2/cn/gateways/quickstart/gateway-setup',
                      ],
                    },
                    {
                      group: 'Network Connect',
                      tag: 'Go Live!',
                      pages: [
                        'v2/cn/gateways/run-a-gateway/connect/lp-marketplace',
                        'v2/cn/gateways/run-a-gateway/connect/discover-offerings',
                        'v2/cn/gateways/run-a-gateway/connect/connect-with-offerings',
                      ],
                    },
                    {
                      group: 'Monitor & Optimise',
                      pages: [
                        'v2/cn/gateways/run-a-gateway/monitor/monitor-and-optimise',
                      ],
                    },
                  ],
                },
                {
                  group: 'Payment Layer Integrations',
                  pages: [
                    'v2/cn/gateways/run-a-gateway/run-a-gateway',
                    'v2/cn/gateways/run-a-gateway/run-a-gateway',
                  ],
                },
              ],
            },
            {
              group: 'Gateway Tools & Guides',
              icon: 'tools',
              pages: [
                'v2/cn/gateways/gateway-tools/explorer',
                'v2/cn/gateways/gateway-tools/livepeer-tools',
                'v2/cn/gateways/guides-and-tools/community-guides',
                'v2/cn/gateways/guides-and-tools/community-projects',
                'v2/gateways/guides-and-tools/faq',
              ],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Gateways',
                  pages: [
                    'v2/cn/gateways/references/technical-architecture',
                    'v2/cn/gateways/references/configuration-flags',
                    'v2/cn/gateways/references/configuration-flags',
                    'v2/cn/gateways/references/cli-commands',
                  ],
                },
                {
                  group: 'API Reference',
                  pages: [
                    {
                      group: 'AI API',
                      pages: [
                        'v2/cn/gateways/references/api-reference/AI-API/ai',
                        'v2/cn/gateways/references/api-reference/AI-API/text-to-image',
                        'v2/cn/gateways/references/api-reference/AI-API/image-to-image',
                        'v2/cn/gateways/references/api-reference/AI-API/image-to-video',
                        'v2/cn/gateways/references/api-reference/AI-API/upscale',
                        'v2/cn/gateways/references/api-reference/AI-API/audio-to-text',
                        'v2/cn/gateways/references/api-reference/AI-API/segment-anything-2',
                        'v2/cn/gateways/references/api-reference/AI-API/llm',
                        'v2/cn/gateways/references/api-reference/AI-API/image-to-text',
                        'v2/cn/gateways/references/api-reference/AI-API/live-video-to-video',
                        'v2/cn/gateways/references/api-reference/AI-API/text-to-speech',
                        'v2/cn/gateways/references/api-reference/AI-API/health',
                        'v2/cn/gateways/references/api-reference/AI-API/hardware-info',
                        'v2/cn/gateways/references/api-reference/AI-API/hardware-stats',
                      ],
                    },
                    {
                      group: 'CLI HTTP API',
                      pages: [
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/cli-http-api',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/unbond',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/rebond',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/activateorchestrator',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/reward',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/transfertokens',
                        'v2/cn/gateways/references/api-reference/CLI-HTTP/signmessage',
                      ],
                    },
                  ],
                },
                {
                  group: 'Exchanges & RPCs',
                  pages: [
                    'v2/cn/gateways/references/livepeer-exchanges',
                    'v2/cn/gateways/references/arbitrum-exchanges',
                    'v2/cn/gateways/references/arbitrum-rpc',
                  ],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'GPU Nodes',
      icon: 'microchip',
      anchors: [
        {
          anchor: 'GPU Nodes',
          icon: 'microchip',
          groups: [
            {
              group: 'Orchestrator Knowledge Hub',
              icon: 'graduation-cap',
              pages: [
                'v2/cn/orchestrators/orchestrators-portal',
                'v2/cn/orchestrators/about-orchestrators/overview',
                'v2/cn/orchestrators/about-orchestrators/orchestrator-functions',
                'v2/cn/orchestrators/about-orchestrators/architecture',
                'v2/cn/orchestrators/about-orchestrators/economics',
              ],
            },
            {
              group: 'Quickstart ⚡',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg',
              pages: [
                'v2/cn/orchestrators/quickstart/overview',
                'v2/cn/orchestrators/quickstart/join-a-pool',
                'v2/cn/orchestrators/quickstart/orchestrator-setup',
              ],
            },
            {
              group: 'Run an Orchestrator',
              icon: 'gear-code',
              pages: [
                {
                  group: 'Orchestrator Setup Guide',
                  pages: [
                    'v2/cn/orchestrators/setting-up-an-orchestrator/overview',
                    {
                      group: 'Setup Checklist',
                      pages: [
                        'v2/cn/orchestrators/setting-up-an-orchestrator/hardware-requirements',
                      ],
                    },
                    {
                      group: 'Installation',
                      pages: [
                        'v2/cn/orchestrators/setting-up-an-orchestrator/orchestrator-stats',
                      ],
                    },
                    {
                      group: 'Configuration',
                      pages: [
                        'v2/cn/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer',
                      ],
                    },
                    {
                      group: 'Testing',
                      pages: [
                        'v2/cn/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                    {
                      group: 'Network Integration',
                      pages: [
                        'v2/cn/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                    {
                      group: 'Monitor & Optimise',
                      pages: [
                        'v2/cn/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: 'Advanced Orchestrator Information',
              icon: 'gamepad',
              pages: [
                'v2/cn/orchestrators/advanced-setup/staking-LPT',
                'v2/cn/orchestrators/advanced-setup/rewards-and-fees',
                'v2/orchestrators/advanced-setup/delegation',
                'v2/cn/orchestrators/advanced-setup/ai-pipelines',
                'v2/cn/orchestrators/advanced-setup/run-a-pool',
              ],
            },
            {
              group: 'Orchestrator Tools & Resources',
              icon: 'laptop-file',
              pages: [
                'v2/cn/orchestrators/orchestrator-tools-and-resources/orchestrator-tools',
                'v2/cn/orchestrators/orchestrator-tools-and-resources/community-pools',
                'v2/cn/orchestrators/orchestrator-tools-and-resources/orchestrator-guides',
                'v2/cn/orchestrators/orchestrator-tools-and-resources/orchestrator-resources',
                'v2/cn/orchestrators/orchestrator-tools-and-resources/orchestrator-community-and-help',
              ],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Orchestrators',
                  pages: ['v2/cn/orchestrators/references/faq'],
                },
                {
                  group: 'API & CLI Reference',
                  pages: ['v2/cn/orchestrators/references/cli-flags'],
                },
                {
                  group: 'On-Chain Reference',
                  pages: ['v2/cn/orchestrators/references/faq'],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'LP Token',
      icon: 'hand-holding-dollar',
      anchors: [
        {
          anchor: 'Delegators & LPT',
          icon: 'hand-holding-dollar',
          groups: [
            {
              group: 'About LPT',
              icon: 'graduation-cap',
              pages: [
                'v2/cn/lpt/token-portal',
                'v2/cn/lpt/about/overview',
                'v2/cn/lpt/about/purpose',
                'v2/cn/lpt/about/tokenomics',
                'v2/cn/lpt/about/mechanics',
              ],
            },
            {
              group: 'Delegating LPT',
              icon: 'money-bill-transfer',
              pages: [
                'v2/cn/lpt/delegation/overview',
                'v2/cn/lpt/delegation/about-delegators',
                'v2/cn/lpt/delegation/delegation-guide',
              ],
            },
            {
              group: 'Livepeer Governance',
              icon: 'box-ballot',
              pages: [
                'v2/cn/lpt/governance/overview',
                'v2/cn/lpt/governance/model',
                'v2/cn/lpt/governance/processes',
              ],
            },
            {
              group: 'Livepeer Treasury',
              pages: [
                'v2/cn/lpt/treasury/overview',
                'v2/cn/lpt/treasury/proposals',
                'v2/cn/lpt/treasury/allocations',
              ],
            },
            {
              group: 'Guides & Resources',
              icon: 'books',
              pages: [
                'v2/cn/lpt/resources/exchanges',
                'v2/cn/lpt/resources/lpt-eth-usage',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Community',
      icon: 'people-group',
      anchors: [
        {
          anchor: 'Community',
          icon: 'people-group',
          groups: [
            {
              group: 'Livepeer Community',
              icon: 'people-group',
              pages: [
                'v2/cn/community/community-portal',
                'v2/cn/community/livepeer-community/trending-topics',
                'v2/cn/community/livepeer-community/roadmap',
              ],
            },
            {
              group: 'Livepeer Connect',
              icon: 'hashtag',
              pages: [
                'v2/cn/community/livepeer-community/community-guidelines',
                'v2/cn/community/livepeer-connect/news-and-socials',
                'v2/cn/community/livepeer-connect/events-and-community-streams',
                'v2/cn/community/livepeer-connect/forums-and-discussions',
              ],
            },
            {
              group: 'Livepeer Contribute',
              icon: 'door-open',
              pages: [
                'v2/cn/community/livepeer-contribute/contribute',
                'v2/cn/community/livepeer-contribute/opportunities',
                'v2/cn/community/livepeer-contribute/build-livepeer',
              ],
            },
            {
              group: '[MOVE HERE] Help Center',
              icon: 'comments-question-check',
              hidden: true,
              pages: ['v2/cn/community/livepeer-community/trending-topics'],
            },
            {
              group: 'Resources',
              icon: 'books',
              pages: [
                'v2/cn/resources/media-kit',
                'v2/cn/community/livepeer-community/trending-topics',
                'v2/cn/community/livepeer-community/livepeer-latest-topics',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Resource HUB',
      hidden: false,
      icon: 'books',
      anchors: [
        {
          anchor: 'Reference & Help HUB',
          icon: 'books',
          groups: [
            {
              group: 'Home',
              icon: 'house',
              pages: ['v2/resources/redirect'],
            },
            {
              group: 'Documentation Guide',
              icon: 'book-open',
              pages: [
                'v2/cn/resources/documentation-guide/documentation-overview',
                'v2/cn/resources/documentation-guide/documentation-guide',
                'v2/cn/resources/documentation-guide/docs-features-and-ai-integrations',
                'v2/cn/resources/documentation-guide/style-guide',
                'v2/cn/resources/documentation-guide/snippets-inventory',
                'v2/cn/resources/documentation-guide/contribute-to-the-docs',
                'v2/cn/resources/documentation-guide/automations-workflows',
                {
                  group: 'Component Library',
                  icon: 'puzzle-piece',
                  pages: [
                    'v2/cn/resources/documentation-guide/component-library/component-library',
                    'v2/cn/resources/documentation-guide/component-library/primitives',
                    'v2/cn/resources/documentation-guide/component-library/layout',
                    'v2/cn/resources/documentation-guide/component-library/content',
                    'v2/cn/resources/documentation-guide/component-library/data',
                    'v2/cn/resources/documentation-guide/component-library/page-structure',
                  ],
                },
              ],
            },
            {
              group: 'Livepeer Concepts',
              icon: 'graduation-cap',
              pages: [
                'v2/cn/about/core-concepts',
                'v2/cn/resources/livepeer-glossary',
                'v2/cn/about/livepeer-network/actors',
              ],
            },
            {
              group: 'Developer References',
              icon: 'book',
              pages: ['v2/cn/resources/livepeer-glossary'],
            },
            {
              group: 'Gateway References',
              icon: 'wand-magic-sparkles',
              pages: [
                'v2/gateways/guides-and-tools/gateway-job-pipelines/overview',
              ],
            },
            {
              group: 'Orchestrator References',
              icon: 'microchip',
              pages: ['v2/cn/resources/livepeer-glossary'],
            },
            {
              group: 'LPT & Delegator References',
              icon: 'hand-holding-dollar',
              pages: ['v2/cn/resources/livepeer-glossary'],
            },
            {
              group: 'Community Resources',
              icon: '',
              pages: ['v2/cn/resources/livepeer-glossary'],
            },
            {
              group: 'Partner Resources',
              icon: 'handshake',
              pages: ['v2/cn/resources/livepeer-glossary'],
            },
            {
              group: 'Help Center',
              icon: 'comments-question-check',
              pages: ['v2/cn/resources/livepeer-glossary'],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Protocol References',
                  pages: [' '],
                },
              ],
            },
            {
              group: 'Changelog',
              icon: 'swap',
              pages: [
                'v2/cn/resources/changelog/changelog',
                'v2/cn/resources/changelog/migration-guide',
              ],
            },
          ],
        },
        {
          anchor: 'Help Center',
          icon: 'comments-question-check',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          href: ' ',
        },
      ],
    },
    {
      tab: 'Internal Hub',
      hidden: true,
      icon: 'info-circle',
      anchors: [
        {
          anchor: 'Internal Hub',
          icon: 'info-circle',
          groups: [
            {
              group: 'RFP',
              pages: [
                'v2/internal/rfp/aims',
                'v2/internal/rfp/problem-statements',
                'v2/internal/rfp/outcomes',
                'v2/internal/rfp/deliverables',
                'v2/internal/rfp/report',
              ],
            },
            {
              group: 'Internal Hub',
              pages: [
                'v2/internal/internal-overview',
                'v2/internal/overview/governance',
                'v2/internal/overview/strategic-alignment',
                'v2/internal/docs-philosophy',
                'v2/internal/definitions',
                'v2/internal/overview/personas',
                'v2/internal/ecosystem',
                'v2/internal/references',
              ],
            },
            {
              group: 'Reports: Navigation & Links',
              pages: [
                'v2/internal/reports/navigation-links/docs-navigation',
                'v2/internal/reports/navigation-links/v2-link-audit',
              ],
            },
            {
              group: 'Reports: Quality & Accessibility',
              pages: [
                'v2/internal/reports/quality-accessibility/v2-wcag-audit',
                'v2/internal/reports/quality-accessibility/wcag-repair-common',
              ],
            },
            {
              group: 'Reports: Page Audits',
              pages: ['v2/internal/reports/page-audits/domain-pages-audit'],
            },
            {
              group: 'Reports: Repo Ops',
              pages: ['v2/internal/reports/repo-ops/audit-scripts'],
            },
          ],
        },
        {
          anchor: ' ',
          icon: '-',
          href: ' ',
        },
      ],
    },
  ],
}

const docsJsonEs = {
  language: 'es',
  tabs: [
    {
      tab: 'Home',
      icon: 'house-heart',
      hidden: true,
      anchors: [
        {
          anchor: 'Home',
          icon: 'house-heart',
          groups: [
            {
              group: 'Home',
              icon: 'house-heart',
              pages: [
                'v2/es/home/mission-control',
                'v2/es/home/get-started',
                'v2/es/home/primer',
              ],
            },
            {
              group: 'Livepeer',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg',
              pages: [
                'v2/es/home/about-livepeer/vision',
                'v2/es/home/about-livepeer/evolution',
                'v2/es/home/about-livepeer/benefits',
                'v2/es/home/about-livepeer/ecosystem',
                'v2/es/home/about-livepeer/roadmap',
              ],
            },
            {
              group: 'Showcase',
              icon: 'clapperboard-play',
              pages: [
                'v2/es/home/solutions/showcase',
                'v2/es/home/solutions/verticals',
                'v2/es/home/solutions/applications',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'About',
      icon: 'camera-movie',
      anchors: [
        {
          anchor: 'About Livepeer',
          icon: 'play',
          groups: [
            {
              group: 'About Livepeer',
              icon: 'graduation-cap',
              pages: [
                'v2/es/about/portal',
                'v2/es/about/livepeer-overview',
                'v2/es/about/core-concepts',
                'v2/es/about/mental-model',
              ],
            },
            {
              group: 'Livepeer Protocol',
              icon: 'cube',
              pages: [
                'v2/es/about/livepeer-protocol/overview',
                'v2/es/about/livepeer-protocol/core-mechanisms',
                'v2/es/about/livepeer-protocol/livepeer-token',
                'v2/es/about/livepeer-protocol/governance-model',
                'v2/es/about/livepeer-protocol/treasury',
                'v2/es/about/livepeer-protocol/economics',
                'v2/es/about/livepeer-protocol/technical-architecture',
              ],
            },
            {
              group: 'Livepeer Network',
              icon: 'circle-nodes',
              pages: [
                'v2/es/about/livepeer-network/overview',
                'v2/es/about/livepeer-network/actors',
                'v2/es/about/livepeer-network/job-lifecycle',
                'v2/es/about/livepeer-network/marketplace',
                'v2/es/about/livepeer-network/technical-architecture',
                'v2/es/about/livepeer-network/interfaces',
              ],
            },
            {
              group: 'Resources',
              icon: 'books',
              pages: [
                'v2/es/about/resources/livepeer-whitepaper',
                'v2/es/about/resources/livepeer-glossary',
                'v2/es/about/resources/blockchain-contracts',
                'v2/es/about/resources/technical-roadmap',
                'v2/es/about/resources/gateways-vs-orchestrators',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Developers',
      icon: 'display-code',
      anchors: [
        {
          anchor: 'Developers',
          icon: 'display-code',
          groups: [
            {
              group: 'Building on Livepeer',
              icon: 'code',
              pages: [
                'v2/es/developers/portal',
                'v2/es/developers/developer-guide',
                'v2/es/developers/guides-and-tools/developer-guides',
                'v2/es/developers/developer-journey',
              ],
            },
            {
              group: 'Quickstart',
              icon: 'fast-forward',
              pages: [
                {
                  group: 'Video & Transcoding',
                  pages: [
                    'v2/es/developers/quickstart/video/video-streaming',
                    'v2/es/developers/quickstart/video/transcoding-jobs',
                  ],
                },
                {
                  group: 'AI Jobs & Pipelines',
                  pages: [
                    'v2/es/developers/quickstart/ai/ai-pipelines',
                    'v2/es/developers/quickstart/ai/ai-jobs',
                  ],
                },
              ],
            },
            {
              group: 'AI Pipelines',
              icon: 'user-robot',
              pages: [
                'v2/es/developers/ai-pipelines/overview',
                'v2/es/developers/ai-pipelines/byoc',
                'v2/es/developers/ai-pipelines/comfystream',
              ],
            },
            {
              group: 'Guides & Tutorials',
              icon: 'laptop-file',
              pages: [
                'v2/es/developers/guides-and-tools/developer-guides',
                'v2/es/developers/guides-and-tools/resources',
                'v2/es/developers/guides-and-tools/developer-help',
                'v2/es/developers/guides-and-tools/contribution-guide',
              ],
            },
            {
              group: 'Builder Opportunities',
              icon: 'lightbulb',
              pages: [
                'v2/es/developers/builder-opportunities/grants-and-programmes',
                'v2/es/developers/builder-opportunities/rfps-and-proposals',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [
            {
              group: 'Developer Tools',
              icon: 'tools',
              pages: [
                'v2/es/developers/developer-tools/tooling-hub',
                'v2/es/developers/developer-tools/livepeer-explorer',
                'v2/es/developers/developer-tools/livepeer-cloud',
                'v2/es/developers/developer-tools/dashboards',
              ],
            },
            {
              group: 'Technical References',
              icon: 'books',
              pages: [
                {
                  group: 'SDKs & APIs',
                  pages: [
                    'v2/es/developers/technical-references/sdks',
                    'v2/es/developers/technical-references/apis',
                  ],
                },
                'v2/es/developers/technical-references/awesome-livepeer',
                'v2/es/developers/technical-references/wiki',
                'v2/es/developers/technical-references/deepwiki',
              ],
            },
            {
              group: 'Changelog & Migrations',
              icon: 'swap',
              pages: [
                'v2/es/resources/changelog/changelog',
                'v2/es/resources/changelog/migration-guide',
              ],
            },
          ],
        },
      ],
    },
    {
      tab: 'Gateways',
      icon: 'torii-gate',
      anchors: [
        {
          anchor: 'Gateways',
          icon: 'torii-gate',
          groups: [
            {
              group: 'Gateway Knowledge Hub',
              icon: 'graduation-cap',
              pages: [
                'v2/es/gateways/gateways-portal',
                'v2/es/gateways/about/explainer',
                'v2/es/gateways/about/architecture',
                'v2/es/gateways/about/economics',
              ],
            },
            {
              group: 'Quickstart ⚡',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg',
              pages: [
                'v2/es/gateways/quickstart/gateway-setup',
                'v2/es/gateways/quickstart/AI-prompt',
              ],
            },
            {
              group: 'Gateway Services & Providers',
              icon: 'wand-magic-sparkles',
              pages: [
                'v2/es/gateways/using-gateways/choosing-a-gateway',
                'v2/es/gateways/using-gateways/gateway-providers',
                {
                  group: 'Provider Docs',
                  pages: [
                    'v2/es/gateways/using-gateways/gateway-providers/daydream-gateway',
                    'v2/es/gateways/using-gateways/gateway-providers/livepeer-studio-gateway',
                    'v2/es/gateways/using-gateways/gateway-providers/cloud-spe-gateway',
                    'v2/es/solutions/streamplace/overview',
                  ],
                },
              ],
            },
            {
              group: 'Run A Gateway',
              icon: 'sign-posts-wrench',
              pages: [
                {
                  group: 'Quickstart',
                  icon: 'fast-forward',
                  pages: [
                    'v2/es/gateways/quickstart/gateway-setup',
                    'v2/es/gateways/quickstart/AI-prompt',
                  ],
                },
                {
                  group: 'Gateway Setup Guide',
                  expanded: true,
                  pages: [
                    'v2/es/gateways/run-a-gateway/why-run-a-gateway',
                    'v2/es/gateways/run-a-gateway/run-a-gateway',
                    {
                      group: 'Setup Checklist',
                      pages: [
                        'v2/es/gateways/run-a-gateway/requirements/setup',
                        'v2/es/gateways/run-a-gateway/requirements/on-chain setup/on-chain',
                        'v2/es/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway',
                      ],
                    },
                    {
                      group: 'Installation',
                      pages: [
                        'v2/es/gateways/run-a-gateway/install/install-overview',
                        'v2/es/gateways/run-a-gateway/install/docker-install',
                        'v2/es/gateways/run-a-gateway/install/linux-install',
                        'v2/es/gateways/run-a-gateway/install/windows-install',
                        'v2/es/gateways/run-a-gateway/install/community-projects',
                      ],
                    },
                    {
                      group: 'Configuration',
                      pages: [
                        'v2/es/gateways/run-a-gateway/configure/configuration-overview',
                        'v2/es/gateways/run-a-gateway/configure/video-configuration',
                        'v2/es/gateways/run-a-gateway/configure/ai-configuration',
                        'v2/es/gateways/run-a-gateway/configure/dual-configuration',
                        'v2/es/gateways/run-a-gateway/configure/pricing-configuration',
                      ],
                    },
                    {
                      group: 'Testing',
                      pages: [
                        'v2/es/gateways/quickstart/gateway-setup',
                        'v2/es/gateways/quickstart/gateway-setup',
                        'v2/es/gateways/quickstart/gateway-setup',
                      ],
                    },
                    {
                      group: 'Network Connect',
                      tag: 'Go Live!',
                      pages: [
                        'v2/es/gateways/run-a-gateway/connect/lp-marketplace',
                        'v2/es/gateways/run-a-gateway/connect/discover-offerings',
                        'v2/es/gateways/run-a-gateway/connect/connect-with-offerings',
                      ],
                    },
                    {
                      group: 'Monitor & Optimise',
                      pages: [
                        'v2/es/gateways/run-a-gateway/monitor/monitor-and-optimise',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: 'Gateway Tools & Resources',
              icon: 'tools',
              pages: [
                'v2/es/gateways/gateway-tools/explorer',
                'v2/es/gateways/gateway-tools/livepeer-tools',
                'v2/es/gateways/guides-and-tools/community-guides',
                'v2/es/gateways/guides-and-tools/community-projects',
                'v2/es/gateways/guides-and-tools/faq',
              ],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Gateways',
                  pages: [
                    'v2/es/gateways/references/technical-architecture',
                    'v2/es/gateways/references/configuration-flags',
                    'v2/es/gateways/references/configuration-flags',
                    'v2/es/gateways/references/cli-commands',
                  ],
                },
                {
                  group: 'API Reference',
                  pages: [
                    {
                      group: 'AI API',
                      pages: [
                        'v2/es/gateways/references/api-reference/AI-API/ai',
                        'v2/es/gateways/references/api-reference/AI-API/text-to-image',
                        'v2/es/gateways/references/api-reference/AI-API/image-to-image',
                        'v2/es/gateways/references/api-reference/AI-API/image-to-video',
                        'v2/es/gateways/references/api-reference/AI-API/upscale',
                        'v2/es/gateways/references/api-reference/AI-API/audio-to-text',
                        'v2/es/gateways/references/api-reference/AI-API/segment-anything-2',
                        'v2/es/gateways/references/api-reference/AI-API/llm',
                        'v2/es/gateways/references/api-reference/AI-API/image-to-text',
                        'v2/es/gateways/references/api-reference/AI-API/live-video-to-video',
                        'v2/es/gateways/references/api-reference/AI-API/text-to-speech',
                        'v2/es/gateways/references/api-reference/AI-API/health',
                        'v2/es/gateways/references/api-reference/AI-API/hardware-info',
                        'v2/es/gateways/references/api-reference/AI-API/hardware-stats',
                      ],
                    },
                    {
                      group: 'CLI HTTP API',
                      pages: [
                        'v2/es/gateways/references/api-reference/CLI-HTTP/cli-http-api',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/unbond',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/rebond',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/activateorchestrator',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/setbroadcastconfig',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/setmaxpriceforcapability',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/reward',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/transfertokens',
                        'v2/es/gateways/references/api-reference/CLI-HTTP/signmessage',
                      ],
                    },
                  ],
                },
                {
                  group: 'Exchanges & RPCs',
                  pages: [
                    'v2/es/gateways/references/livepeer-exchanges',
                    'v2/es/gateways/references/arbitrum-exchanges',
                    'v2/es/gateways/references/arbitrum-rpc',
                  ],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'GPU Nodes',
      icon: 'microchip',
      anchors: [
        {
          anchor: 'GPU Nodes',
          icon: 'microchip',
          groups: [
            {
              group: 'Orchestrator Knowledge Hub',
              icon: 'graduation-cap',
              pages: [
                'v2/es/orchestrators/orchestrators-portal',
                'v2/es/orchestrators/about-orchestrators/overview',
                'v2/es/orchestrators/about-orchestrators/orchestrator-functions',
                'v2/es/orchestrators/about-orchestrators/architecture',
                'v2/es/orchestrators/about-orchestrators/economics',
              ],
            },
            {
              group: 'Quickstart ⚡',
              icon: '/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg',
              pages: [
                'v2/es/orchestrators/quickstart/overview',
                'v2/es/orchestrators/quickstart/join-a-pool',
                'v2/es/orchestrators/quickstart/orchestrator-setup',
              ],
            },
            {
              group: 'Run an Orchestrator',
              icon: 'gear-code',
              pages: [
                {
                  group: 'Orchestrator Setup Guide',
                  pages: [
                    'v2/es/orchestrators/setting-up-an-orchestrator/overview',
                    {
                      group: 'Setup Checklist',
                      pages: [
                        'v2/es/orchestrators/setting-up-an-orchestrator/hardware-requirements',
                      ],
                    },
                    {
                      group: 'Installation',
                      pages: [
                        'v2/es/orchestrators/setting-up-an-orchestrator/orchestrator-stats',
                      ],
                    },
                    {
                      group: 'Configuration',
                      pages: [
                        'v2/es/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer',
                      ],
                    },
                    {
                      group: 'Testing',
                      pages: [
                        'v2/es/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                    {
                      group: 'Network Integration',
                      pages: [
                        'v2/es/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                    {
                      group: 'Monitor & Optimise',
                      pages: [
                        'v2/es/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              group: 'Advanced Orchestrator Information',
              icon: 'gamepad',
              pages: [
                'v2/es/orchestrators/advanced-setup/staking-LPT',
                'v2/es/orchestrators/advanced-setup/rewards-and-fees',
                'v2/es/orchestrators/advanced-setup/delegation',
                'v2/es/orchestrators/advanced-setup/ai-pipelines',
                'v2/es/orchestrators/advanced-setup/run-a-pool',
              ],
            },
            {
              group: 'Orchestrator Tools & Resources',
              icon: 'laptop-file',
              pages: [
                'v2/es/orchestrators/orchestrator-tools-and-resources/orchestrator-tools',
                'v2/es/orchestrators/orchestrator-tools-and-resources/community-pools',
                'v2/es/orchestrators/orchestrator-tools-and-resources/orchestrator-guides',
                'v2/es/orchestrators/orchestrator-tools-and-resources/orchestrator-resources',
                'v2/es/orchestrators/orchestrator-tools-and-resources/orchestrator-community-and-help',
              ],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Orchestrators',
                  pages: ['v2/es/orchestrators/references/faq'],
                },
                {
                  group: 'API & CLI Reference',
                  pages: ['v2/es/orchestrators/references/cli-flags'],
                },
                {
                  group: 'On-Chain Reference',
                  pages: ['v2/es/orchestrators/references/faq'],
                },
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'LP Token',
      icon: 'hand-holding-dollar',
      anchors: [
        {
          anchor: 'Delegators & LPT',
          icon: 'hand-holding-dollar',
          groups: [
            {
              group: 'About LPT',
              icon: 'graduation-cap',
              pages: [
                'v2/es/lpt/token-portal',
                'v2/es/lpt/about/overview',
                'v2/es/lpt/about/purpose',
                'v2/es/lpt/about/tokenomics',
                'v2/es/lpt/about/mechanics',
              ],
            },
            {
              group: 'Delegating LPT',
              icon: 'money-bill-transfer',
              pages: [
                'v2/es/lpt/delegation/overview',
                'v2/es/lpt/delegation/about-delegators',
                'v2/es/lpt/delegation/delegation-guide',
              ],
            },
            {
              group: 'Livepeer Governance',
              icon: 'box-ballot',
              pages: [
                'v2/es/lpt/governance/overview',
                'v2/es/lpt/governance/model',
                'v2/es/lpt/governance/processes',
              ],
            },
            {
              group: 'Livepeer Treasury',
              pages: [
                'v2/es/lpt/treasury/overview',
                'v2/es/lpt/treasury/proposals',
                'v2/es/lpt/treasury/allocations',
              ],
            },
            {
              group: 'Guides & Resources',
              icon: 'books',
              pages: [
                'v2/es/lpt/resources/exchanges',
                'v2/es/lpt/resources/lpt-eth-usage',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Community',
      icon: 'people-group',
      anchors: [
        {
          anchor: 'Community',
          icon: 'people-group',
          groups: [
            {
              group: 'Livepeer Community',
              icon: 'people-group',
              pages: [
                'v2/es/community/community-portal',
                'v2/es/community/livepeer-community/trending-topics',
                'v2/es/community/livepeer-community/roadmap',
              ],
            },
            {
              group: 'Livepeer Connect',
              icon: 'hashtag',
              pages: [
                'v2/es/community/livepeer-community/community-guidelines',
                'v2/es/community/livepeer-connect/news-and-socials',
                'v2/es/community/livepeer-connect/events-and-community-streams',
                'v2/es/community/livepeer-connect/forums-and-discussions',
              ],
            },
            {
              group: 'Livepeer Contribute',
              icon: 'door-open',
              pages: [
                'v2/es/community/livepeer-contribute/contribute',
                'v2/es/community/livepeer-contribute/opportunities',
                'v2/es/community/livepeer-contribute/build-livepeer',
              ],
            },
            {
              group: '[MOVE HERE] Help Center',
              icon: 'comments-question-check',
              hidden: true,
              pages: ['v2/es/community/livepeer-community/trending-topics'],
            },
            {
              group: 'Resources',
              icon: 'books',
              pages: [
                'v2/es/resources/media-kit',
                'v2/es/community/livepeer-community/trending-topics',
                'v2/es/community/livepeer-community/livepeer-latest-topics',
              ],
            },
          ],
        },
        {
          anchor: 'Resource HUB',
          icon: 'books',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          pages: [' '],
        },
      ],
    },
    {
      tab: 'Resource HUB',
      hidden: false,
      icon: 'books',
      anchors: [
        {
          anchor: 'Reference & Help HUB',
          icon: 'books',
          groups: [
            {
              group: 'Home',
              icon: 'house',
              pages: ['v2/resources/redirect'],
            },
            {
              group: 'Documentation Guide',
              icon: 'book-open',
              pages: [
                'v2/es/resources/documentation-guide/documentation-overview',
                'v2/es/resources/documentation-guide/documentation-guide',
                'v2/es/resources/documentation-guide/docs-features-and-ai-integrations',
                'v2/es/resources/documentation-guide/style-guide',
                'v2/es/resources/documentation-guide/snippets-inventory',
                'v2/es/resources/documentation-guide/contribute-to-the-docs',
                'v2/es/resources/documentation-guide/automations-workflows',
                {
                  group: 'Component Library',
                  icon: 'puzzle-piece',
                  pages: [
                    'v2/es/resources/documentation-guide/component-library/component-library',
                    'v2/es/resources/documentation-guide/component-library/primitives',
                    'v2/es/resources/documentation-guide/component-library/layout',
                    'v2/es/resources/documentation-guide/component-library/content',
                    'v2/es/resources/documentation-guide/component-library/data',
                    'v2/es/resources/documentation-guide/component-library/page-structure',
                  ],
                },
              ],
            },
            {
              group: 'Livepeer Concepts',
              icon: 'graduation-cap',
              pages: [
                'v2/es/about/core-concepts',
                'v2/es/resources/livepeer-glossary',
                'v2/es/about/livepeer-network/actors',
              ],
            },
            {
              group: 'Developer References',
              icon: 'book',
              pages: ['v2/es/resources/livepeer-glossary'],
            },
            {
              group: 'Gateway References',
              icon: 'wand-magic-sparkles',
              pages: [
                'v2/gateways/guides-and-tools/gateway-job-pipelines/overview',
              ],
            },
            {
              group: 'Orchestrator References',
              icon: 'microchip',
              pages: ['v2/es/resources/livepeer-glossary'],
            },
            {
              group: 'LPT & Delegator References',
              icon: 'hand-holding-dollar',
              pages: ['v2/es/resources/livepeer-glossary'],
            },
            {
              group: 'Community Resources',
              icon: '',
              pages: ['v2/es/resources/livepeer-glossary'],
            },
            {
              group: 'Partner Resources',
              icon: 'handshake',
              pages: ['v2/es/resources/livepeer-glossary'],
            },
            {
              group: 'Help Center',
              icon: 'comments-question-check',
              pages: ['v2/es/resources/livepeer-glossary'],
            },
            {
              group: 'Technical References',
              icon: 'code',
              pages: [
                {
                  group: 'Protocol References',
                  pages: [' '],
                },
              ],
            },
            {
              group: 'Changelog',
              icon: 'swap',
              pages: [
                'v2/es/resources/changelog/changelog',
                'v2/es/resources/changelog/migration-guide',
              ],
            },
          ],
        },
        {
          anchor: 'Help Center',
          icon: 'comments-question-check',
          pages: ['v2/resources/redirect'],
        },
        {
          anchor: ' ',
          icon: 'horizontal-rule',
          href: ' ',
        },
      ],
    },
    {
      tab: 'Internal Hub',
      hidden: true,
      icon: 'info-circle',
      anchors: [
        {
          anchor: 'Internal Hub',
          icon: 'info-circle',
          groups: [
            {
              group: 'RFP',
              pages: [
                'v2/internal/rfp/aims',
                'v2/internal/rfp/problem-statements',
                'v2/internal/rfp/outcomes',
                'v2/internal/rfp/deliverables',
                'v2/internal/rfp/report',
              ],
            },
            {
              group: 'Internal Hub',
              pages: [
                'v2/internal/internal-overview',
                'v2/internal/overview/governance',
                'v2/internal/overview/strategic-alignment',
                'v2/internal/docs-philosophy',
                'v2/internal/definitions',
                'v2/internal/overview/personas',
                'v2/internal/ecosystem',
                'v2/internal/references',
              ],
            },
            {
              group: 'Reports: Navigation & Links',
              pages: [
                'v2/internal/reports/navigation-links/docs-navigation',
                'v2/internal/reports/navigation-links/v2-link-audit',
              ],
            },
            {
              group: 'Reports: Quality & Accessibility',
              pages: [
                'v2/internal/reports/quality-accessibility/v2-wcag-audit',
                'v2/internal/reports/quality-accessibility/wcag-repair-common',
              ],
            },
            {
              group: 'Reports: Page Audits',
              pages: ['v2/internal/reports/page-audits/domain-pages-audit'],
            },
            {
              group: 'Reports: Repo Ops',
              pages: ['v2/internal/reports/repo-ops/audit-scripts'],
            },
          ],
        },
      ],
    },
  ],
}

const docsJsonV1 = {
  version: 'v1',
  default: true,
  languages: [
    {
      language: 'en',
      dropdowns: [
        {
          dropdown: 'Developers',
          icon: 'code',
          anchors: [
            {
              anchor: 'Documentation',
              icon: 'code',
              groups: [
                {
                  group: 'Getting Started',
                  pages: [
                    'v1/developers/introduction',
                    'v1/developers/quick-start',
                    'v1/developers/livepeer-studio-cli',
                  ],
                },
                {
                  group: 'Guides',
                  pages: [
                    'v1/developers/guides/overview',
                    {
                      group: 'Assets',
                      icon: 'video',
                      pages: [
                        'v1/developers/guides/upload-video-asset',
                        'v1/developers/guides/playback-an-asset',
                        'v1/developers/guides/listen-to-asset-events',
                        'v1/developers/guides/encrypted-asset',
                        'v1/developers/guides/thumbnails-vod',
                      ],
                    },
                    {
                      group: 'Livestream',
                      icon: 'camera',
                      pages: [
                        'v1/developers/guides/create-livestream',
                        'v1/developers/guides/playback-a-livestream',
                        'v1/developers/guides/stream-via-obs',
                        'v1/developers/guides/livestream-from-browser',
                        'v1/developers/guides/optimize-latency-of-a-livestream',
                        'v1/developers/guides/monitor-stream-health',
                        'v1/developers/guides/listen-to-stream-events',
                        'v1/developers/guides/multistream',
                        'v1/developers/guides/clip-a-livestream',
                        'v1/developers/guides/thumbnails-live',
                      ],
                    },
                    {
                      group: 'Access control',
                      icon: 'lock',
                      pages: [
                        'v1/developers/guides/access-control-webhooks',
                        'v1/developers/guides/access-control-jwt',
                      ],
                    },
                    {
                      group: 'Webhooks',
                      icon: 'bell',
                      pages: [
                        'v1/developers/guides/setup-and-listen-to-webhooks',
                      ],
                    },
                    {
                      group: 'Transcode API',
                      icon: 'photo-film',
                      pages: [
                        'v1/developers/guides/transcode-video-storj',
                        'v1/developers/guides/transcode-video-w3s',
                      ],
                    },
                    {
                      group: 'Viewership Metrics',
                      icon: 'chart-bar',
                      pages: [
                        'v1/developers/guides/get-engagement-analytics-via-api',
                        'v1/developers/guides/get-engagement-analytics-via-grafana',
                        'v1/developers/guides/get-engagement-analytics-via-timeplus',
                      ],
                    },
                    {
                      group: 'Projects',
                      icon: 'folder-open',
                      pages: ['v1/developers/guides/managing-projects'],
                    },
                    {
                      group: 'Integrations',
                      icon: 'puzzle-piece',
                      pages: [
                        'v1/developers/tutorials/decentralized-app-with-fvm',
                        'v1/developers/tutorials/token-gate-videos-with-lit',
                        {
                          group: 'Storage Provider Integration',
                          pages: [
                            'v1/developers/tutorials/upload-playback-videos-4everland',
                            'v1/developers/tutorials/upload-playback-videos-on-arweave',
                            'v1/developers/tutorials/upload-playback-videos-on-ipfs',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  group: 'References',
                  pages: [
                    'v1/references/api-support-matrix',
                    {
                      group: 'Livepeer Node Software',
                      icon: 'golang',
                      pages: [
                        'v1/references/go-livepeer/bandwidth-requirements',
                        'v1/references/go-livepeer/cli-reference',
                        'v1/references/go-livepeer/gpu-support',
                        'v1/references/go-livepeer/hardware-requirements',
                        'v1/references/go-livepeer/prometheus-metrics',
                      ],
                    },
                    'v1/references/contract-addresses',
                    'v1/references/example-applications',
                    'v1/references/awesome-livepeer',
                    {
                      group: 'FAQs',
                      icon: 'book',
                      pages: [
                        'v1/references/knowledge-base/livestream',
                        'v1/references/knowledge-base/playback',
                        'v1/references/knowledge-base/vod',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'API Reference',
              icon: 'rectangle-terminal',
              groups: [
                {
                  group: 'Overview',
                  pages: [
                    'v1/api-reference/overview/introduction',
                    'v1/api-reference/overview/authentication',
                  ],
                },
                {
                  group: 'APIs',
                  pages: [
                    {
                      group: 'Asset',
                      icon: 'video',
                      pages: [
                        'v1/api-reference/asset/overview',
                        'v1/api-reference/asset/upload',
                        'v1/api-reference/asset/upload-via-url',
                        'v1/api-reference/asset/get',
                        'v1/api-reference/asset/update',
                        'v1/api-reference/asset/delete',
                        'v1/api-reference/asset/get-all',
                      ],
                    },
                    {
                      group: 'Livestream',
                      icon: 'camera',
                      pages: [
                        'v1/api-reference/stream/overview',
                        'v1/api-reference/stream/create',
                        'v1/api-reference/stream/get',
                        'v1/api-reference/stream/update',
                        'v1/api-reference/stream/terminate',
                        'v1/api-reference/stream/add-multistream-target',
                        'v1/api-reference/stream/delete-multistream-target',
                        'v1/api-reference/stream/delete',
                        'v1/api-reference/stream/get-all',
                        'v1/api-reference/stream/create-clip',
                        'v1/api-reference/stream/get-clip',
                      ],
                    },
                    {
                      group: 'Generate',
                      icon: 'microchip-ai',
                      pages: [
                        'v1/api-reference/generate/overview',
                        'v1/api-reference/generate/audio-to-text',
                        'v1/api-reference/generate/text-to-image',
                        'v1/api-reference/generate/image-to-image',
                        'v1/api-reference/generate/image-to-video',
                        'v1/api-reference/generate/llm',
                        'v1/api-reference/generate/segment-anything-2',
                        'v1/api-reference/generate/upscale',
                      ],
                    },
                    {
                      group: 'Multistream target',
                      icon: 'arrows-split-up-and-left',
                      pages: [
                        'v1/api-reference/multistream/overview',
                        'v1/api-reference/multistream/create',
                        'v1/api-reference/multistream/get',
                        'v1/api-reference/multistream/update',
                        'v1/api-reference/multistream/delete',
                        'v1/api-reference/multistream/get-all',
                      ],
                    },
                    {
                      group: 'Session',
                      icon: 'film',
                      pages: [
                        'v1/api-reference/session/overview',
                        'v1/api-reference/session/get',
                        'v1/api-reference/session/get-all',
                        'v1/api-reference/session/get-recording',
                        'v1/api-reference/session/get-clip',
                      ],
                    },
                    {
                      group: 'Access control',
                      icon: 'lock',
                      pages: [
                        'v1/api-reference/signing-key/overview',
                        'v1/api-reference/signing-key/create',
                        'v1/api-reference/signing-key/get',
                        'v1/api-reference/signing-key/update',
                        'v1/api-reference/signing-key/delete',
                        'v1/api-reference/signing-key/get-all',
                      ],
                    },
                    {
                      group: 'Webhook',
                      icon: 'bell',
                      pages: [
                        'v1/api-reference/webhook/overview',
                        'v1/api-reference/webhook/create',
                        'v1/api-reference/webhook/get',
                        'v1/api-reference/webhook/update',
                        'v1/api-reference/webhook/delete',
                        'v1/api-reference/webhook/get-all',
                      ],
                    },
                    {
                      group: 'Task',
                      icon: 'gear',
                      pages: [
                        'v1/api-reference/task/overview',
                        'v1/api-reference/task/get-all',
                        'v1/api-reference/task/get',
                      ],
                    },
                    {
                      group: 'Playback',
                      icon: 'play',
                      pages: [
                        'v1/api-reference/playback/overview',
                        'v1/api-reference/playback/get',
                      ],
                    },
                    {
                      group: 'Transcode',
                      icon: 'photo-film',
                      pages: [
                        'v1/api-reference/transcode/overview',
                        'v1/api-reference/transcode/create',
                      ],
                    },
                    {
                      group: 'Viewership',
                      icon: 'chart-bar',
                      pages: [
                        'v1/api-reference/viewership/get-realtime-viewership',
                        'v1/api-reference/viewership/get-viewership-metrics',
                        'v1/api-reference/viewership/get-usage-metrics',
                        'v1/api-reference/viewership/get-public-total-views',
                        'v1/api-reference/viewership/get-creators-metrics',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'SDKs',
              icon: 'brackets-curly',
              groups: [
                {
                  group: 'Overview',
                  pages: ['v1/sdks/introduction'],
                },
                {
                  group: 'Server-side SDKs',
                  pages: ['v1/sdks/javascript', 'v1/sdks/go', 'v1/sdks/python'],
                },
                {
                  group: 'React Components',
                  icon: 'circle-play',
                  pages: [
                    'v1/sdks/react/getting-started',
                    {
                      group: 'Player',
                      icon: 'circle-play',
                      pages: [
                        'v1/sdks/react/player/Root',
                        'v1/sdks/react/player/Container',
                        'v1/sdks/react/player/Video',
                        'v1/sdks/react/player/Error',
                        'v1/sdks/react/player/Loading',
                        'v1/sdks/react/player/Portal',
                        'v1/sdks/react/player/Poster',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/player/Controls',
                            'v1/sdks/react/player/Clip',
                            'v1/sdks/react/player/Fullscreen',
                            'v1/sdks/react/player/Live',
                            'v1/sdks/react/player/PictureInPicture',
                            'v1/sdks/react/player/Play',
                            'v1/sdks/react/player/RateSelect',
                            'v1/sdks/react/player/Seek',
                            'v1/sdks/react/player/Time',
                            'v1/sdks/react/player/VideoQualitySelect',
                            'v1/sdks/react/player/Volume',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/player/get-src',
                            'v1/sdks/react/player/useMediaContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Broadcast',
                      icon: 'signal-stream',
                      pages: [
                        'v1/sdks/react/broadcast/Root',
                        'v1/sdks/react/broadcast/Container',
                        'v1/sdks/react/broadcast/Video',
                        'v1/sdks/react/broadcast/Enabled',
                        'v1/sdks/react/broadcast/Error',
                        'v1/sdks/react/broadcast/Loading',
                        'v1/sdks/react/broadcast/Portal',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/broadcast/Controls',
                            'v1/sdks/react/broadcast/Audio',
                            'v1/sdks/react/broadcast/Camera',
                            'v1/sdks/react/broadcast/Fullscreen',
                            'v1/sdks/react/broadcast/PictureInPicture',
                            'v1/sdks/react/broadcast/Screenshare',
                            'v1/sdks/react/broadcast/Source',
                            'v1/sdks/react/broadcast/Status',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/broadcast/get-ingest',
                            'v1/sdks/react/broadcast/useBroadcastContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Examples',
                      icon: 'clipboard',
                      pages: [
                        'v1/sdks/react/Player',
                        'v1/sdks/react/Broadcast',
                      ],
                    },
                    {
                      group: 'Migration',
                      icon: 'right-left',
                      pages: [
                        'v1/sdks/react/migration/migration-4.x',
                        {
                          group: 'Livepeer React (3.x and below)',
                          pages: [
                            'v1/sdks/react/migration/3.x/getting-started',
                            'v1/sdks/react/migration/3.x/client',
                            'v1/sdks/react/migration/3.x/LivepeerConfig',
                            'v1/sdks/react/migration/3.x/Player',
                            'v1/sdks/react/migration/3.x/Broadcast',
                            {
                              group: 'Asset',
                              pages: [
                                'v1/sdks/react/migration/3.x/asset/useCreateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAsset',
                                'v1/sdks/react/migration/3.x/asset/useUpdateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAssetMetrics',
                              ],
                            },
                            {
                              group: 'Stream',
                              pages: [
                                'v1/sdks/react/migration/3.x/stream/useCreateStream',
                                'v1/sdks/react/migration/3.x/stream/useStream',
                                'v1/sdks/react/migration/3.x/stream/useUpdateStream',
                                'v1/sdks/react/migration/3.x/stream/useStreamSession',
                                'v1/sdks/react/migration/3.x/stream/useStreamSessions',
                              ],
                            },
                            {
                              group: 'Playback',
                              pages: [
                                'v1/sdks/react/migration/3.x/playback/usePlaybackInfo',
                              ],
                            },
                            {
                              group: 'Constants',
                              pages: [
                                'v1/sdks/react/migration/3.x/constants/abis',
                                'v1/sdks/react/migration/3.x/constants/contract-addresses',
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'AI Video (Beta)',
              icon: {
                name: 'microchip-ai',
                style: 'regular',
              },
              groups: [
                {
                  group: 'AI Video',
                  pages: [
                    'v1/ai/introduction',
                    'v1/ai/whats-new',
                    {
                      group: 'AI Pipelines',
                      icon: {
                        name: 'wand-magic-sparkles',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/pipelines/overview',
                        'v1/ai/pipelines/audio-to-text',
                        'v1/ai/pipelines/image-to-image',
                        'v1/ai/pipelines/image-to-text',
                        'v1/ai/pipelines/image-to-video',
                        'v1/ai/pipelines/llm',
                        'v1/ai/pipelines/segment-anything-2',
                        'v1/ai/pipelines/text-to-image',
                        'v1/ai/pipelines/text-to-speech',
                        'v1/ai/pipelines/upscale',
                      ],
                    },
                    {
                      group: 'Setup an AI Orchestrator',
                      icon: {
                        name: 'robot',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/orchestrators/get-started',
                        'v1/ai/orchestrators/models-config',
                        'v1/ai/orchestrators/models-download',
                        'v1/ai/orchestrators/start-orchestrator',
                        'v1/ai/orchestrators/ai-worker',
                        'v1/ai/orchestrators/benchmarking',
                        'v1/ai/orchestrators/onchain',
                      ],
                    },
                    {
                      group: 'Setup an AI Gateway',
                      icon: {
                        name: 'signal-stream',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/gateways/get-started',
                        'v1/ai/gateways/start-gateway',
                        'v1/ai/gateways/onchain',
                      ],
                    },
                    {
                      group: 'AI Builders',
                      icon: {
                        name: 'screwdriver-wrench',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/builders/get-started',
                        'v1/ai/builders/gateways',
                        'v1/ai/builders/showcase',
                      ],
                    },
                    {
                      group: 'How to Contribute',
                      icon: {
                        name: 'heart',
                        style: 'solid',
                      },
                      pages: ['v1/ai/contributors/coming-soon'],
                    },
                    {
                      group: 'SDKs',
                      icon: 'brackets-curly',
                      pages: [
                        'v1/ai/sdks/overview',
                        'v1/ai/sdks/go',
                        'v1/ai/sdks/javascript',
                        'v1/ai/sdks/python',
                      ],
                    },
                    {
                      group: 'AI API Reference',
                      icon: 'rectangle-terminal',
                      pages: [
                        'v1/ai/api-reference/overview',
                        'v1/ai/api-reference/audio-to-text',
                        'v1/ai/api-reference/image-to-image',
                        'v1/ai/api-reference/image-to-text',
                        'v1/ai/api-reference/image-to-video',
                        'v1/ai/api-reference/llm',
                        'v1/ai/api-reference/segment-anything-2',
                        'v1/ai/api-reference/text-to-image',
                        'v1/ai/api-reference/text-to-speech',
                        'v1/ai/api-reference/upscale',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: ' ',
              icon: 'horizontal-rule',
              href: ' ',
            },
            {
              anchor: 'Livepeer Studio            ➚',
              href: 'https://livepeer.studio',
              icon: 'clapperboard-play',
            },
            {
              anchor: "What's New                  ➚",
              href: 'https://livepeer.canny.io/changelog',
              icon: 'rocket',
            },
            {
              anchor: 'Community                   ➚',
              href: 'https://discord.gg/livepeer',
              icon: {
                name: 'discord',
                style: 'brands',
              },
            },
          ],
        },
        {
          dropdown: 'Delegators',
          icon: 'coins',
          anchors: [
            {
              anchor: 'Documentation',
              icon: 'code',
              groups: [
                {
                  group: 'Getting Started',
                  pages: [
                    'v1/delegators/introduction',
                    'v1/delegators/quick-start',
                    'v1/delegators/livepeer-studio-cli',
                  ],
                },
                {
                  group: 'Guides',
                  pages: [
                    'v1/delegators/guides/bridge-lpt-to-arbitrum',
                    'v1/delegators/guides/migrate-stake-to-arbitrum',
                    'v1/delegators/guides/yield-calculation',
                  ],
                },
                {
                  group: 'References',
                  pages: [
                    'v1/references/api-support-matrix',
                    {
                      group: 'Livepeer Node Software',
                      icon: 'golang',
                      pages: [
                        'v1/references/go-livepeer/bandwidth-requirements',
                        'v1/references/go-livepeer/cli-reference',
                        'v1/references/go-livepeer/gpu-support',
                        'v1/references/go-livepeer/hardware-requirements',
                        'v1/references/go-livepeer/prometheus-metrics',
                      ],
                    },
                    'v1/references/contract-addresses',
                    'v1/references/example-applications',
                    'v1/references/awesome-livepeer',
                    {
                      group: 'FAQs',
                      icon: 'book',
                      pages: [
                        'v1/references/knowledge-base/livestream',
                        'v1/references/knowledge-base/playback',
                        'v1/references/knowledge-base/vod',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'API Reference',
              icon: 'rectangle-terminal',
              groups: [
                {
                  group: 'Overview',
                  pages: [
                    'v1/api-reference/overview/introduction',
                    'v1/api-reference/overview/authentication',
                  ],
                },
                {
                  group: 'APIs',
                  pages: [
                    {
                      group: 'Asset',
                      icon: 'video',
                      pages: [
                        'v1/api-reference/asset/overview',
                        'v1/api-reference/asset/upload',
                        'v1/api-reference/asset/upload-via-url',
                        'v1/api-reference/asset/get',
                        'v1/api-reference/asset/update',
                        'v1/api-reference/asset/delete',
                        'v1/api-reference/asset/get-all',
                      ],
                    },
                    {
                      group: 'Livestream',
                      icon: 'camera',
                      pages: [
                        'v1/api-reference/stream/overview',
                        'v1/api-reference/stream/create',
                        'v1/api-reference/stream/get',
                        'v1/api-reference/stream/update',
                        'v1/api-reference/stream/terminate',
                        'v1/api-reference/stream/add-multistream-target',
                        'v1/api-reference/stream/delete-multistream-target',
                        'v1/api-reference/stream/delete',
                        'v1/api-reference/stream/get-all',
                        'v1/api-reference/stream/create-clip',
                        'v1/api-reference/stream/get-clip',
                      ],
                    },
                    {
                      group: 'Generate',
                      icon: 'microchip-ai',
                      pages: [
                        'v1/api-reference/generate/overview',
                        'v1/api-reference/generate/audio-to-text',
                        'v1/api-reference/generate/text-to-image',
                        'v1/api-reference/generate/image-to-image',
                        'v1/api-reference/generate/image-to-video',
                        'v1/api-reference/generate/llm',
                        'v1/api-reference/generate/segment-anything-2',
                        'v1/api-reference/generate/upscale',
                      ],
                    },
                    {
                      group: 'Multistream target',
                      icon: 'arrows-split-up-and-left',
                      pages: [
                        'v1/api-reference/multistream/overview',
                        'v1/api-reference/multistream/create',
                        'v1/api-reference/multistream/get',
                        'v1/api-reference/multistream/update',
                        'v1/api-reference/multistream/delete',
                        'v1/api-reference/multistream/get-all',
                      ],
                    },
                    {
                      group: 'Session',
                      icon: 'film',
                      pages: [
                        'v1/api-reference/session/overview',
                        'v1/api-reference/session/get',
                        'v1/api-reference/session/get-all',
                        'v1/api-reference/session/get-recording',
                        'v1/api-reference/session/get-clip',
                      ],
                    },
                    {
                      group: 'Access control',
                      icon: 'lock',
                      pages: [
                        'v1/api-reference/signing-key/overview',
                        'v1/api-reference/signing-key/create',
                        'v1/api-reference/signing-key/get',
                        'v1/api-reference/signing-key/update',
                        'v1/api-reference/signing-key/delete',
                        'v1/api-reference/signing-key/get-all',
                      ],
                    },
                    {
                      group: 'Webhook',
                      icon: 'bell',
                      pages: [
                        'v1/api-reference/webhook/overview',
                        'v1/api-reference/webhook/create',
                        'v1/api-reference/webhook/get',
                        'v1/api-reference/webhook/update',
                        'v1/api-reference/webhook/delete',
                        'v1/api-reference/webhook/get-all',
                      ],
                    },
                    {
                      group: 'Task',
                      icon: 'gear',
                      pages: [
                        'v1/api-reference/task/overview',
                        'v1/api-reference/task/get-all',
                        'v1/api-reference/task/get',
                      ],
                    },
                    {
                      group: 'Playback',
                      icon: 'play',
                      pages: [
                        'v1/api-reference/playback/overview',
                        'v1/api-reference/playback/get',
                      ],
                    },
                    {
                      group: 'Transcode',
                      icon: 'photo-film',
                      pages: [
                        'v1/api-reference/transcode/overview',
                        'v1/api-reference/transcode/create',
                      ],
                    },
                    {
                      group: 'Viewership',
                      icon: 'chart-bar',
                      pages: [
                        'v1/api-reference/viewership/get-realtime-viewership',
                        'v1/api-reference/viewership/get-viewership-metrics',
                        'v1/api-reference/viewership/get-usage-metrics',
                        'v1/api-reference/viewership/get-public-total-views',
                        'v1/api-reference/viewership/get-creators-metrics',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'SDKs',
              icon: 'brackets-curly',
              groups: [
                {
                  group: 'Overview',
                  pages: ['v1/sdks/introduction'],
                },
                {
                  group: 'Server-side SDKs',
                  pages: ['v1/sdks/javascript', 'v1/sdks/go', 'v1/sdks/python'],
                },
                {
                  group: 'React Components',
                  icon: 'circle-play',
                  pages: [
                    'v1/sdks/react/getting-started',
                    {
                      group: 'Player',
                      icon: 'circle-play',
                      pages: [
                        'v1/sdks/react/player/Root',
                        'v1/sdks/react/player/Container',
                        'v1/sdks/react/player/Video',
                        'v1/sdks/react/player/Error',
                        'v1/sdks/react/player/Loading',
                        'v1/sdks/react/player/Portal',
                        'v1/sdks/react/player/Poster',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/player/Controls',
                            'v1/sdks/react/player/Clip',
                            'v1/sdks/react/player/Fullscreen',
                            'v1/sdks/react/player/Live',
                            'v1/sdks/react/player/PictureInPicture',
                            'v1/sdks/react/player/Play',
                            'v1/sdks/react/player/RateSelect',
                            'v1/sdks/react/player/Seek',
                            'v1/sdks/react/player/Time',
                            'v1/sdks/react/player/VideoQualitySelect',
                            'v1/sdks/react/player/Volume',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/player/get-src',
                            'v1/sdks/react/player/useMediaContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Broadcast',
                      icon: 'signal-stream',
                      pages: [
                        'v1/sdks/react/broadcast/Root',
                        'v1/sdks/react/broadcast/Container',
                        'v1/sdks/react/broadcast/Video',
                        'v1/sdks/react/broadcast/Enabled',
                        'v1/sdks/react/broadcast/Error',
                        'v1/sdks/react/broadcast/Loading',
                        'v1/sdks/react/broadcast/Portal',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/broadcast/Controls',
                            'v1/sdks/react/broadcast/Audio',
                            'v1/sdks/react/broadcast/Camera',
                            'v1/sdks/react/broadcast/Fullscreen',
                            'v1/sdks/react/broadcast/PictureInPicture',
                            'v1/sdks/react/broadcast/Screenshare',
                            'v1/sdks/react/broadcast/Source',
                            'v1/sdks/react/broadcast/Status',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/broadcast/get-ingest',
                            'v1/sdks/react/broadcast/useBroadcastContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Examples',
                      icon: 'clipboard',
                      pages: [
                        'v1/sdks/react/Player',
                        'v1/sdks/react/Broadcast',
                      ],
                    },
                    {
                      group: 'Migration',
                      icon: 'right-left',
                      pages: [
                        'v1/sdks/react/migration/migration-4.x',
                        {
                          group: 'Livepeer React (3.x and below)',
                          pages: [
                            'v1/sdks/react/migration/3.x/getting-started',
                            'v1/sdks/react/migration/3.x/client',
                            'v1/sdks/react/migration/3.x/LivepeerConfig',
                            'v1/sdks/react/migration/3.x/Player',
                            'v1/sdks/react/migration/3.x/Broadcast',
                            {
                              group: 'Asset',
                              pages: [
                                'v1/sdks/react/migration/3.x/asset/useCreateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAsset',
                                'v1/sdks/react/migration/3.x/asset/useUpdateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAssetMetrics',
                              ],
                            },
                            {
                              group: 'Stream',
                              pages: [
                                'v1/sdks/react/migration/3.x/stream/useCreateStream',
                                'v1/sdks/react/migration/3.x/stream/useStream',
                                'v1/sdks/react/migration/3.x/stream/useUpdateStream',
                                'v1/sdks/react/migration/3.x/stream/useStreamSession',
                                'v1/sdks/react/migration/3.x/stream/useStreamSessions',
                              ],
                            },
                            {
                              group: 'Playback',
                              pages: [
                                'v1/sdks/react/migration/3.x/playback/usePlaybackInfo',
                              ],
                            },
                            {
                              group: 'Constants',
                              pages: [
                                'v1/sdks/react/migration/3.x/constants/abis',
                                'v1/sdks/react/migration/3.x/constants/contract-addresses',
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'AI Video (Beta)',
              icon: {
                name: 'microchip-ai',
                style: 'regular',
              },
              groups: [
                {
                  group: 'AI Video',
                  pages: [
                    'v1/ai/introduction',
                    'v1/ai/whats-new',
                    {
                      group: 'AI Pipelines',
                      icon: {
                        name: 'wand-magic-sparkles',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/pipelines/overview',
                        'v1/ai/pipelines/audio-to-text',
                        'v1/ai/pipelines/image-to-image',
                        'v1/ai/pipelines/image-to-text',
                        'v1/ai/pipelines/image-to-video',
                        'v1/ai/pipelines/llm',
                        'v1/ai/pipelines/segment-anything-2',
                        'v1/ai/pipelines/text-to-image',
                        'v1/ai/pipelines/text-to-speech',
                        'v1/ai/pipelines/upscale',
                      ],
                    },
                    {
                      group: 'Setup an AI Orchestrator',
                      icon: {
                        name: 'robot',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/orchestrators/get-started',
                        'v1/ai/orchestrators/models-config',
                        'v1/ai/orchestrators/models-download',
                        'v1/ai/orchestrators/start-orchestrator',
                        'v1/ai/orchestrators/ai-worker',
                        'v1/ai/orchestrators/benchmarking',
                        'v1/ai/orchestrators/onchain',
                      ],
                    },
                    {
                      group: 'Setup an AI Gateway',
                      icon: {
                        name: 'signal-stream',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/gateways/get-started',
                        'v1/ai/gateways/start-gateway',
                        'v1/ai/gateways/onchain',
                      ],
                    },
                    {
                      group: 'AI Builders',
                      icon: {
                        name: 'screwdriver-wrench',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/builders/get-started',
                        'v1/ai/builders/gateways',
                        'v1/ai/builders/showcase',
                      ],
                    },
                    {
                      group: 'How to Contribute',
                      icon: {
                        name: 'heart',
                        style: 'solid',
                      },
                      pages: ['v1/ai/contributors/coming-soon'],
                    },
                    {
                      group: 'SDKs',
                      icon: 'brackets-curly',
                      pages: [
                        'v1/ai/sdks/overview',
                        'v1/ai/sdks/go',
                        'v1/ai/sdks/javascript',
                        'v1/ai/sdks/python',
                      ],
                    },
                    {
                      group: 'AI API Reference',
                      icon: 'rectangle-terminal',
                      pages: [
                        'v1/ai/api-reference/overview',
                        'v1/ai/api-reference/audio-to-text',
                        'v1/ai/api-reference/image-to-image',
                        'v1/ai/api-reference/image-to-text',
                        'v1/ai/api-reference/image-to-video',
                        'v1/ai/api-reference/llm',
                        'v1/ai/api-reference/segment-anything-2',
                        'v1/ai/api-reference/text-to-image',
                        'v1/ai/api-reference/text-to-speech',
                        'v1/ai/api-reference/upscale',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: ' ',
              icon: 'horizontal-rule',
              href: ' ',
            },
            {
              anchor: 'Livepeer Studio            ➚',
              href: 'https://livepeer.studio',
              icon: 'clapperboard-play',
            },
            {
              anchor: "What's New                  ➚",
              href: 'https://livepeer.canny.io/changelog',
              icon: 'rocket',
            },
            {
              anchor: 'Community                   ➚',
              href: 'https://discord.gg/livepeer',
              icon: {
                name: 'discord',
                style: 'brands',
              },
            },
          ],
        },
        {
          dropdown: 'Orchestrators',
          icon: 'microchip',
          anchors: [
            {
              anchor: 'Documentation',
              icon: 'code',
              groups: [
                {
                  group: 'Getting Started',
                  pages: [
                    'v1/orchestrators/introduction',
                    'v1/orchestrators/quick-start',
                    'v1/orchestrators/livepeer-studio-cli',
                  ],
                },
                {
                  group: 'Guides',
                  pages: [
                    'v1/orchestrators/guides/get-started',
                    'v1/orchestrators/guides/install-go-livepeer',
                    'v1/orchestrators/guides/connect-to-arbitrum',
                    'v1/orchestrators/guides/configure-reward-calling',
                    'v1/orchestrators/guides/set-session-limits',
                    'v1/orchestrators/guides/set-pricing',
                    'v1/orchestrators/guides/benchmark-transcoding',
                    'v1/orchestrators/guides/assess-capabilities',
                    'v1/orchestrators/guides/monitor-metrics',
                    'v1/orchestrators/guides/vote',
                    'v1/orchestrators/guides/dual-mine',
                    'v1/orchestrators/guides/o-t-split',
                    'v1/orchestrators/guides/migrate-to-arbitrum',
                    'v1/orchestrators/guides/migrate-from-contract-wallet',
                    'v1/orchestrators/guides/gateway-introspection',
                    'v1/orchestrators/guides/troubleshoot',
                  ],
                },
                {
                  group: 'References',
                  pages: [
                    'v1/references/api-support-matrix',
                    {
                      group: 'Livepeer Node Software',
                      icon: 'golang',
                      pages: [
                        'v1/references/go-livepeer/bandwidth-requirements',
                        'v1/references/go-livepeer/cli-reference',
                        'v1/references/go-livepeer/gpu-support',
                        'v1/references/go-livepeer/hardware-requirements',
                        'v1/references/go-livepeer/prometheus-metrics',
                      ],
                    },
                    'v1/references/contract-addresses',
                    'v1/references/example-applications',
                    'v1/references/awesome-livepeer',
                    {
                      group: 'FAQs',
                      icon: 'book',
                      pages: [
                        'v1/references/knowledge-base/livestream',
                        'v1/references/knowledge-base/playback',
                        'v1/references/knowledge-base/vod',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'API Reference',
              icon: 'rectangle-terminal',
              groups: [
                {
                  group: 'Overview',
                  pages: [
                    'v1/api-reference/overview/introduction',
                    'v1/api-reference/overview/authentication',
                  ],
                },
                {
                  group: 'APIs',
                  pages: [
                    {
                      group: 'Asset',
                      icon: 'video',
                      pages: [
                        'v1/api-reference/asset/overview',
                        'v1/api-reference/asset/upload',
                        'v1/api-reference/asset/upload-via-url',
                        'v1/api-reference/asset/get',
                        'v1/api-reference/asset/update',
                        'v1/api-reference/asset/delete',
                        'v1/api-reference/asset/get-all',
                      ],
                    },
                    {
                      group: 'Livestream',
                      icon: 'camera',
                      pages: [
                        'v1/api-reference/stream/overview',
                        'v1/api-reference/stream/create',
                        'v1/api-reference/stream/get',
                        'v1/api-reference/stream/update',
                        'v1/api-reference/stream/terminate',
                        'v1/api-reference/stream/add-multistream-target',
                        'v1/api-reference/stream/delete-multistream-target',
                        'v1/api-reference/stream/delete',
                        'v1/api-reference/stream/get-all',
                        'v1/api-reference/stream/create-clip',
                        'v1/api-reference/stream/get-clip',
                      ],
                    },
                    {
                      group: 'Generate',
                      icon: 'microchip-ai',
                      pages: [
                        'v1/api-reference/generate/overview',
                        'v1/api-reference/generate/audio-to-text',
                        'v1/api-reference/generate/text-to-image',
                        'v1/api-reference/generate/image-to-image',
                        'v1/api-reference/generate/image-to-video',
                        'v1/api-reference/generate/llm',
                        'v1/api-reference/generate/segment-anything-2',
                        'v1/api-reference/generate/upscale',
                      ],
                    },
                    {
                      group: 'Multistream target',
                      icon: 'arrows-split-up-and-left',
                      pages: [
                        'v1/api-reference/multistream/overview',
                        'v1/api-reference/multistream/create',
                        'v1/api-reference/multistream/get',
                        'v1/api-reference/multistream/update',
                        'v1/api-reference/multistream/delete',
                        'v1/api-reference/multistream/get-all',
                      ],
                    },
                    {
                      group: 'Session',
                      icon: 'film',
                      pages: [
                        'v1/api-reference/session/overview',
                        'v1/api-reference/session/get',
                        'v1/api-reference/session/get-all',
                        'v1/api-reference/session/get-recording',
                        'v1/api-reference/session/get-clip',
                      ],
                    },
                    {
                      group: 'Access control',
                      icon: 'lock',
                      pages: [
                        'v1/api-reference/signing-key/overview',
                        'v1/api-reference/signing-key/create',
                        'v1/api-reference/signing-key/get',
                        'v1/api-reference/signing-key/update',
                        'v1/api-reference/signing-key/delete',
                        'v1/api-reference/signing-key/get-all',
                      ],
                    },
                    {
                      group: 'Webhook',
                      icon: 'bell',
                      pages: [
                        'v1/api-reference/webhook/overview',
                        'v1/api-reference/webhook/create',
                        'v1/api-reference/webhook/get',
                        'v1/api-reference/webhook/update',
                        'v1/api-reference/webhook/delete',
                        'v1/api-reference/webhook/get-all',
                      ],
                    },
                    {
                      group: 'Task',
                      icon: 'gear',
                      pages: [
                        'v1/api-reference/task/overview',
                        'v1/api-reference/task/get-all',
                        'v1/api-reference/task/get',
                      ],
                    },
                    {
                      group: 'Playback',
                      icon: 'play',
                      pages: [
                        'v1/api-reference/playback/overview',
                        'v1/api-reference/playback/get',
                      ],
                    },
                    {
                      group: 'Transcode',
                      icon: 'photo-film',
                      pages: [
                        'v1/api-reference/transcode/overview',
                        'v1/api-reference/transcode/create',
                      ],
                    },
                    {
                      group: 'Viewership',
                      icon: 'chart-bar',
                      pages: [
                        'v1/api-reference/viewership/get-realtime-viewership',
                        'v1/api-reference/viewership/get-viewership-metrics',
                        'v1/api-reference/viewership/get-usage-metrics',
                        'v1/api-reference/viewership/get-public-total-views',
                        'v1/api-reference/viewership/get-creators-metrics',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'SDKs',
              icon: 'brackets-curly',
              groups: [
                {
                  group: 'Overview',
                  pages: ['v1/sdks/introduction'],
                },
                {
                  group: 'Server-side SDKs',
                  pages: ['v1/sdks/javascript', 'v1/sdks/go', 'v1/sdks/python'],
                },
                {
                  group: 'React Components',
                  icon: 'circle-play',
                  pages: [
                    'v1/sdks/react/getting-started',
                    {
                      group: 'Player',
                      icon: 'circle-play',
                      pages: [
                        'v1/sdks/react/player/Root',
                        'v1/sdks/react/player/Container',
                        'v1/sdks/react/player/Video',
                        'v1/sdks/react/player/Error',
                        'v1/sdks/react/player/Loading',
                        'v1/sdks/react/player/Portal',
                        'v1/sdks/react/player/Poster',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/player/Controls',
                            'v1/sdks/react/player/Clip',
                            'v1/sdks/react/player/Fullscreen',
                            'v1/sdks/react/player/Live',
                            'v1/sdks/react/player/PictureInPicture',
                            'v1/sdks/react/player/Play',
                            'v1/sdks/react/player/RateSelect',
                            'v1/sdks/react/player/Seek',
                            'v1/sdks/react/player/Time',
                            'v1/sdks/react/player/VideoQualitySelect',
                            'v1/sdks/react/player/Volume',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/player/get-src',
                            'v1/sdks/react/player/useMediaContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Broadcast',
                      icon: 'signal-stream',
                      pages: [
                        'v1/sdks/react/broadcast/Root',
                        'v1/sdks/react/broadcast/Container',
                        'v1/sdks/react/broadcast/Video',
                        'v1/sdks/react/broadcast/Enabled',
                        'v1/sdks/react/broadcast/Error',
                        'v1/sdks/react/broadcast/Loading',
                        'v1/sdks/react/broadcast/Portal',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/broadcast/Controls',
                            'v1/sdks/react/broadcast/Audio',
                            'v1/sdks/react/broadcast/Camera',
                            'v1/sdks/react/broadcast/Fullscreen',
                            'v1/sdks/react/broadcast/PictureInPicture',
                            'v1/sdks/react/broadcast/Screenshare',
                            'v1/sdks/react/broadcast/Source',
                            'v1/sdks/react/broadcast/Status',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/broadcast/get-ingest',
                            'v1/sdks/react/broadcast/useBroadcastContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Examples',
                      icon: 'clipboard',
                      pages: [
                        'v1/sdks/react/Player',
                        'v1/sdks/react/Broadcast',
                      ],
                    },
                    {
                      group: 'Migration',
                      icon: 'right-left',
                      pages: [
                        'v1/sdks/react/migration/migration-4.x',
                        {
                          group: 'Livepeer React (3.x and below)',
                          pages: [
                            'v1/sdks/react/migration/3.x/getting-started',
                            'v1/sdks/react/migration/3.x/client',
                            'v1/sdks/react/migration/3.x/LivepeerConfig',
                            'v1/sdks/react/migration/3.x/Player',
                            'v1/sdks/react/migration/3.x/Broadcast',
                            {
                              group: 'Asset',
                              pages: [
                                'v1/sdks/react/migration/3.x/asset/useCreateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAsset',
                                'v1/sdks/react/migration/3.x/asset/useUpdateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAssetMetrics',
                              ],
                            },
                            {
                              group: 'Stream',
                              pages: [
                                'v1/sdks/react/migration/3.x/stream/useCreateStream',
                                'v1/sdks/react/migration/3.x/stream/useStream',
                                'v1/sdks/react/migration/3.x/stream/useUpdateStream',
                                'v1/sdks/react/migration/3.x/stream/useStreamSession',
                                'v1/sdks/react/migration/3.x/stream/useStreamSessions',
                              ],
                            },
                            {
                              group: 'Playback',
                              pages: [
                                'v1/sdks/react/migration/3.x/playback/usePlaybackInfo',
                              ],
                            },
                            {
                              group: 'Constants',
                              pages: [
                                'v1/sdks/react/migration/3.x/constants/abis',
                                'v1/sdks/react/migration/3.x/constants/contract-addresses',
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'AI Video (Beta)',
              icon: {
                name: 'microchip-ai',
                style: 'regular',
              },
              groups: [
                {
                  group: 'AI Video',
                  pages: [
                    'v1/ai/introduction',
                    'v1/ai/whats-new',
                    {
                      group: 'AI Pipelines',
                      icon: {
                        name: 'wand-magic-sparkles',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/pipelines/overview',
                        'v1/ai/pipelines/audio-to-text',
                        'v1/ai/pipelines/image-to-image',
                        'v1/ai/pipelines/image-to-text',
                        'v1/ai/pipelines/image-to-video',
                        'v1/ai/pipelines/llm',
                        'v1/ai/pipelines/segment-anything-2',
                        'v1/ai/pipelines/text-to-image',
                        'v1/ai/pipelines/text-to-speech',
                        'v1/ai/pipelines/upscale',
                      ],
                    },
                    {
                      group: 'Setup an AI Orchestrator',
                      icon: {
                        name: 'robot',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/orchestrators/get-started',
                        'v1/ai/orchestrators/models-config',
                        'v1/ai/orchestrators/models-download',
                        'v1/ai/orchestrators/start-orchestrator',
                        'v1/ai/orchestrators/ai-worker',
                        'v1/ai/orchestrators/benchmarking',
                        'v1/ai/orchestrators/onchain',
                      ],
                    },
                    {
                      group: 'Setup an AI Gateway',
                      icon: {
                        name: 'signal-stream',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/gateways/get-started',
                        'v1/ai/gateways/start-gateway',
                        'v1/ai/gateways/onchain',
                      ],
                    },
                    {
                      group: 'AI Builders',
                      icon: {
                        name: 'screwdriver-wrench',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/builders/get-started',
                        'v1/ai/builders/gateways',
                        'v1/ai/builders/showcase',
                      ],
                    },
                    {
                      group: 'How to Contribute',
                      icon: {
                        name: 'heart',
                        style: 'solid',
                      },
                      pages: ['v1/ai/contributors/coming-soon'],
                    },
                    {
                      group: 'SDKs',
                      icon: 'brackets-curly',
                      pages: [
                        'v1/ai/sdks/overview',
                        'v1/ai/sdks/go',
                        'v1/ai/sdks/javascript',
                        'v1/ai/sdks/python',
                      ],
                    },
                    {
                      group: 'AI API Reference',
                      icon: 'rectangle-terminal',
                      pages: [
                        'v1/ai/api-reference/overview',
                        'v1/ai/api-reference/audio-to-text',
                        'v1/ai/api-reference/image-to-image',
                        'v1/ai/api-reference/image-to-text',
                        'v1/ai/api-reference/image-to-video',
                        'v1/ai/api-reference/llm',
                        'v1/ai/api-reference/segment-anything-2',
                        'v1/ai/api-reference/text-to-image',
                        'v1/ai/api-reference/text-to-speech',
                        'v1/ai/api-reference/upscale',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: ' ',
              icon: 'horizontal-rule',
              href: ' ',
            },
            {
              anchor: 'Livepeer Studio            ➚',
              href: 'https://livepeer.studio',
              icon: 'clapperboard-play',
            },
            {
              anchor: "What's New                  ➚",
              href: 'https://livepeer.canny.io/changelog',
              icon: 'rocket',
            },
            {
              anchor: 'Community                   ➚',
              href: 'https://discord.gg/livepeer',
              icon: {
                name: 'discord',
                style: 'brands',
              },
            },
          ],
        },
        {
          dropdown: 'Gateways',
          icon: 'torii-gate',
          anchors: [
            {
              anchor: 'Documentation',
              icon: 'code',
              groups: [
                {
                  group: 'Getting Started',
                  pages: [
                    'v1/gateways/introduction',
                    'v1/gateways/quick-start',
                    'v1/gateways/livepeer-studio-cli',
                  ],
                },
                {
                  group: 'Guides',
                  pages: [
                    'v1/gateways/guides/gateway-overview',
                    'v1/gateways/guides/docker-install',
                    'v1/gateways/guides/linux-install',
                    'v1/gateways/guides/windows-install',
                    'v1/gateways/guides/transcoding-options',
                    'v1/gateways/guides/fund-gateway',
                    'v1/gateways/guides/publish-content',
                    'v1/gateways/guides/playback-content',
                  ],
                },
                {
                  group: 'References',
                  pages: [
                    'v1/references/api-support-matrix',
                    {
                      group: 'Livepeer Node Software',
                      icon: 'golang',
                      pages: [
                        'v1/references/go-livepeer/bandwidth-requirements',
                        'v1/references/go-livepeer/cli-reference',
                        'v1/references/go-livepeer/gpu-support',
                        'v1/references/go-livepeer/hardware-requirements',
                        'v1/references/go-livepeer/prometheus-metrics',
                      ],
                    },
                    'v1/references/contract-addresses',
                    'v1/references/example-applications',
                    'v1/references/awesome-livepeer',
                    {
                      group: 'FAQs',
                      icon: 'book',
                      pages: [
                        'v1/references/knowledge-base/livestream',
                        'v1/references/knowledge-base/playback',
                        'v1/references/knowledge-base/vod',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'API Reference',
              icon: 'rectangle-terminal',
              groups: [
                {
                  group: 'Overview',
                  pages: [
                    'v1/api-reference/overview/introduction',
                    'v1/api-reference/overview/authentication',
                  ],
                },
                {
                  group: 'APIs',
                  pages: [
                    {
                      group: 'Asset',
                      icon: 'video',
                      pages: [
                        'v1/api-reference/asset/overview',
                        'v1/api-reference/asset/upload',
                        'v1/api-reference/asset/upload-via-url',
                        'v1/api-reference/asset/get',
                        'v1/api-reference/asset/update',
                        'v1/api-reference/asset/delete',
                        'v1/api-reference/asset/get-all',
                      ],
                    },
                    {
                      group: 'Livestream',
                      icon: 'camera',
                      pages: [
                        'v1/api-reference/stream/overview',
                        'v1/api-reference/stream/create',
                        'v1/api-reference/stream/get',
                        'v1/api-reference/stream/update',
                        'v1/api-reference/stream/terminate',
                        'v1/api-reference/stream/add-multistream-target',
                        'v1/api-reference/stream/delete-multistream-target',
                        'v1/api-reference/stream/delete',
                        'v1/api-reference/stream/get-all',
                        'v1/api-reference/stream/create-clip',
                        'v1/api-reference/stream/get-clip',
                      ],
                    },
                    {
                      group: 'Generate',
                      icon: 'microchip-ai',
                      pages: [
                        'v1/api-reference/generate/overview',
                        'v1/api-reference/generate/audio-to-text',
                        'v1/api-reference/generate/text-to-image',
                        'v1/api-reference/generate/image-to-image',
                        'v1/api-reference/generate/image-to-video',
                        'v1/api-reference/generate/llm',
                        'v1/api-reference/generate/segment-anything-2',
                        'v1/api-reference/generate/upscale',
                      ],
                    },
                    {
                      group: 'Multistream target',
                      icon: 'arrows-split-up-and-left',
                      pages: [
                        'v1/api-reference/multistream/overview',
                        'v1/api-reference/multistream/create',
                        'v1/api-reference/multistream/get',
                        'v1/api-reference/multistream/update',
                        'v1/api-reference/multistream/delete',
                        'v1/api-reference/multistream/get-all',
                      ],
                    },
                    {
                      group: 'Session',
                      icon: 'film',
                      pages: [
                        'v1/api-reference/session/overview',
                        'v1/api-reference/session/get',
                        'v1/api-reference/session/get-all',
                        'v1/api-reference/session/get-recording',
                        'v1/api-reference/session/get-clip',
                      ],
                    },
                    {
                      group: 'Access control',
                      icon: 'lock',
                      pages: [
                        'v1/api-reference/signing-key/overview',
                        'v1/api-reference/signing-key/create',
                        'v1/api-reference/signing-key/get',
                        'v1/api-reference/signing-key/update',
                        'v1/api-reference/signing-key/delete',
                        'v1/api-reference/signing-key/get-all',
                      ],
                    },
                    {
                      group: 'Webhook',
                      icon: 'bell',
                      pages: [
                        'v1/api-reference/webhook/overview',
                        'v1/api-reference/webhook/create',
                        'v1/api-reference/webhook/get',
                        'v1/api-reference/webhook/update',
                        'v1/api-reference/webhook/delete',
                        'v1/api-reference/webhook/get-all',
                      ],
                    },
                    {
                      group: 'Task',
                      icon: 'gear',
                      pages: [
                        'v1/api-reference/task/overview',
                        'v1/api-reference/task/get-all',
                        'v1/api-reference/task/get',
                      ],
                    },
                    {
                      group: 'Playback',
                      icon: 'play',
                      pages: [
                        'v1/api-reference/playback/overview',
                        'v1/api-reference/playback/get',
                      ],
                    },
                    {
                      group: 'Transcode',
                      icon: 'photo-film',
                      pages: [
                        'v1/api-reference/transcode/overview',
                        'v1/api-reference/transcode/create',
                      ],
                    },
                    {
                      group: 'Viewership',
                      icon: 'chart-bar',
                      pages: [
                        'v1/api-reference/viewership/get-realtime-viewership',
                        'v1/api-reference/viewership/get-viewership-metrics',
                        'v1/api-reference/viewership/get-usage-metrics',
                        'v1/api-reference/viewership/get-public-total-views',
                        'v1/api-reference/viewership/get-creators-metrics',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'SDKs',
              icon: 'brackets-curly',
              groups: [
                {
                  group: 'Overview',
                  pages: ['v1/sdks/introduction'],
                },
                {
                  group: 'Server-side SDKs',
                  pages: ['v1/sdks/javascript', 'v1/sdks/go', 'v1/sdks/python'],
                },
                {
                  group: 'React Components',
                  icon: 'circle-play',
                  pages: [
                    'v1/sdks/react/getting-started',
                    {
                      group: 'Player',
                      icon: 'circle-play',
                      pages: [
                        'v1/sdks/react/player/Root',
                        'v1/sdks/react/player/Container',
                        'v1/sdks/react/player/Video',
                        'v1/sdks/react/player/Error',
                        'v1/sdks/react/player/Loading',
                        'v1/sdks/react/player/Portal',
                        'v1/sdks/react/player/Poster',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/player/Controls',
                            'v1/sdks/react/player/Clip',
                            'v1/sdks/react/player/Fullscreen',
                            'v1/sdks/react/player/Live',
                            'v1/sdks/react/player/PictureInPicture',
                            'v1/sdks/react/player/Play',
                            'v1/sdks/react/player/RateSelect',
                            'v1/sdks/react/player/Seek',
                            'v1/sdks/react/player/Time',
                            'v1/sdks/react/player/VideoQualitySelect',
                            'v1/sdks/react/player/Volume',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/player/get-src',
                            'v1/sdks/react/player/useMediaContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Broadcast',
                      icon: 'signal-stream',
                      pages: [
                        'v1/sdks/react/broadcast/Root',
                        'v1/sdks/react/broadcast/Container',
                        'v1/sdks/react/broadcast/Video',
                        'v1/sdks/react/broadcast/Enabled',
                        'v1/sdks/react/broadcast/Error',
                        'v1/sdks/react/broadcast/Loading',
                        'v1/sdks/react/broadcast/Portal',
                        {
                          group: 'Controls',
                          pages: [
                            'v1/sdks/react/broadcast/Controls',
                            'v1/sdks/react/broadcast/Audio',
                            'v1/sdks/react/broadcast/Camera',
                            'v1/sdks/react/broadcast/Fullscreen',
                            'v1/sdks/react/broadcast/PictureInPicture',
                            'v1/sdks/react/broadcast/Screenshare',
                            'v1/sdks/react/broadcast/Source',
                            'v1/sdks/react/broadcast/Status',
                          ],
                        },
                        {
                          group: 'Functions',
                          pages: [
                            'v1/sdks/react/broadcast/get-ingest',
                            'v1/sdks/react/broadcast/useBroadcastContext',
                          ],
                        },
                      ],
                    },
                    {
                      group: 'Examples',
                      icon: 'clipboard',
                      pages: [
                        'v1/sdks/react/Player',
                        'v1/sdks/react/Broadcast',
                      ],
                    },
                    {
                      group: 'Migration',
                      icon: 'right-left',
                      pages: [
                        'v1/sdks/react/migration/migration-4.x',
                        {
                          group: 'Livepeer React (3.x and below)',
                          pages: [
                            'v1/sdks/react/migration/3.x/getting-started',
                            'v1/sdks/react/migration/3.x/client',
                            'v1/sdks/react/migration/3.x/LivepeerConfig',
                            'v1/sdks/react/migration/3.x/Player',
                            'v1/sdks/react/migration/3.x/Broadcast',
                            {
                              group: 'Asset',
                              pages: [
                                'v1/sdks/react/migration/3.x/asset/useCreateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAsset',
                                'v1/sdks/react/migration/3.x/asset/useUpdateAsset',
                                'v1/sdks/react/migration/3.x/asset/useAssetMetrics',
                              ],
                            },
                            {
                              group: 'Stream',
                              pages: [
                                'v1/sdks/react/migration/3.x/stream/useCreateStream',
                                'v1/sdks/react/migration/3.x/stream/useStream',
                                'v1/sdks/react/migration/3.x/stream/useUpdateStream',
                                'v1/sdks/react/migration/3.x/stream/useStreamSession',
                                'v1/sdks/react/migration/3.x/stream/useStreamSessions',
                              ],
                            },
                            {
                              group: 'Playback',
                              pages: [
                                'v1/sdks/react/migration/3.x/playback/usePlaybackInfo',
                              ],
                            },
                            {
                              group: 'Constants',
                              pages: [
                                'v1/sdks/react/migration/3.x/constants/abis',
                                'v1/sdks/react/migration/3.x/constants/contract-addresses',
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: 'AI Video (Beta)',
              icon: {
                name: 'microchip-ai',
                style: 'regular',
              },
              groups: [
                {
                  group: 'AI Video',
                  pages: [
                    'v1/ai/introduction',
                    'v1/ai/whats-new',
                    {
                      group: 'AI Pipelines',
                      icon: {
                        name: 'wand-magic-sparkles',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/pipelines/overview',
                        'v1/ai/pipelines/audio-to-text',
                        'v1/ai/pipelines/image-to-image',
                        'v1/ai/pipelines/image-to-text',
                        'v1/ai/pipelines/image-to-video',
                        'v1/ai/pipelines/llm',
                        'v1/ai/pipelines/segment-anything-2',
                        'v1/ai/pipelines/text-to-image',
                        'v1/ai/pipelines/text-to-speech',
                        'v1/ai/pipelines/upscale',
                      ],
                    },
                    {
                      group: 'Setup an AI Orchestrator',
                      icon: {
                        name: 'robot',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/orchestrators/get-started',
                        'v1/ai/orchestrators/models-config',
                        'v1/ai/orchestrators/models-download',
                        'v1/ai/orchestrators/start-orchestrator',
                        'v1/ai/orchestrators/ai-worker',
                        'v1/ai/orchestrators/benchmarking',
                        'v1/ai/orchestrators/onchain',
                      ],
                    },
                    {
                      group: 'Setup an AI Gateway',
                      icon: {
                        name: 'signal-stream',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/gateways/get-started',
                        'v1/ai/gateways/start-gateway',
                        'v1/ai/gateways/onchain',
                      ],
                    },
                    {
                      group: 'AI Builders',
                      icon: {
                        name: 'screwdriver-wrench',
                        style: 'solid',
                      },
                      pages: [
                        'v1/ai/builders/get-started',
                        'v1/ai/builders/gateways',
                        'v1/ai/builders/showcase',
                      ],
                    },
                    {
                      group: 'How to Contribute',
                      icon: {
                        name: 'heart',
                        style: 'solid',
                      },
                      pages: ['v1/ai/contributors/coming-soon'],
                    },
                    {
                      group: 'SDKs',
                      icon: 'brackets-curly',
                      pages: [
                        'v1/ai/sdks/overview',
                        'v1/ai/sdks/go',
                        'v1/ai/sdks/javascript',
                        'v1/ai/sdks/python',
                      ],
                    },
                    {
                      group: 'AI API Reference',
                      icon: 'rectangle-terminal',
                      pages: [
                        'v1/ai/api-reference/overview',
                        'v1/ai/api-reference/audio-to-text',
                        'v1/ai/api-reference/image-to-image',
                        'v1/ai/api-reference/image-to-text',
                        'v1/ai/api-reference/image-to-video',
                        'v1/ai/api-reference/llm',
                        'v1/ai/api-reference/segment-anything-2',
                        'v1/ai/api-reference/text-to-image',
                        'v1/ai/api-reference/text-to-speech',
                        'v1/ai/api-reference/upscale',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              anchor: ' ',
              icon: 'horizontal-rule',
              href: ' ',
            },
            {
              anchor: 'Livepeer Studio            ➚',
              href: 'https://livepeer.studio',
              icon: 'clapperboard-play',
            },
            {
              anchor: "What's New                  ➚",
              href: 'https://livepeer.canny.io/changelog',
              icon: 'rocket',
            },
            {
              anchor: 'Community                   ➚',
              href: 'https://discord.gg/livepeer',
              icon: {
                name: 'discord',
                style: 'brands',
              },
            },
          ],
        },
      ],
    },
  ],
}
