const developerOld = {
  pages: [
    'v2/developers/journey-mapping',
    'v2/developers/developer-guide',
    'v2/developers/developer-journey',
  ],
}

const platformsIntab = {
  group: 'Developer Platforms',
  icon: 'laptop-code',
  pages: [
    'v2/solutions/portal',
    'v2/solutions/product-hub',
    {
      group: 'Daydream',
      icon: 'camera-movie',
      pages: ['v2/solutions/daydream/overview'],
    },
    {
      group: 'Livepeer Studio',
      icon: 'film-canister',
      pages: [
        'v2/solutions/livepeer-studio/overview',
        'v2/solutions/livepeer-studio/client-use-cases',
        {
          group: 'Get started',
          pages: [
            'v2/solutions/livepeer-studio/get-started/overview',
            'v2/solutions/livepeer-studio/quickstart',
            'v2/solutions/livepeer-studio/get-started/authentication',
            'v2/solutions/livepeer-studio/get-started/studio-cli',
          ],
        },
        {
          group: 'Livestream',
          pages: [
            'v2/solutions/livepeer-studio/livestream/overview',
            'v2/solutions/livepeer-studio/livestream/create-livestream',
            'v2/solutions/livepeer-studio/livestream/playback-livestream',
            'v2/solutions/livepeer-studio/livestream/stream-via-obs',
            'v2/solutions/livepeer-studio/livestream/livestream-from-browser',
            'v2/solutions/livepeer-studio/livestream/multistream',
            'v2/solutions/livepeer-studio/livestream/clip-livestream',
            'v2/solutions/livepeer-studio/livestream/stream-health',
            'v2/solutions/livepeer-studio/livestream/optimize-latency',
          ],
        },
        {
          group: 'Video on demand',
          pages: [
            'v2/solutions/livepeer-studio/video-on-demand/overview',
            'v2/solutions/livepeer-studio/video-on-demand/upload-asset',
            'v2/solutions/livepeer-studio/video-on-demand/playback-asset',
            'v2/solutions/livepeer-studio/video-on-demand/encrypted-assets',
            'v2/solutions/livepeer-studio/video-on-demand/thumbnails-vod',
            'v2/solutions/livepeer-studio/video-on-demand/transcode-video',
          ],
        },
        {
          group: 'Access control & security',
          pages: [
            'v2/solutions/livepeer-studio/access-control/overview',
            'v2/solutions/livepeer-studio/access-control/webhooks',
            'v2/solutions/livepeer-studio/access-control/jwt',
          ],
        },
        {
          group: 'Events & analytics',
          pages: [
            'v2/solutions/livepeer-studio/analytics/webhooks',
            'v2/solutions/livepeer-studio/analytics/listen-to-events',
            'v2/solutions/livepeer-studio/analytics/overview',
          ],
        },
        {
          group: 'Player & embed',
          pages: ['v2/solutions/livepeer-studio/player'],
        },
        {
          group: 'Reference',
          pages: [
            'v2/solutions/livepeer-studio/reference/api',
            'v2/solutions/livepeer-studio/reference/overview',
            'v2/solutions/livepeer-studio/reference/sdks',
            'v2/solutions/livepeer-studio/reference/managing-projects',
          ],
        },
        {
          group: 'API Reference',
          pages: [
            {
              group: 'Assets',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/assets/overview',
                'v2/solutions/livepeer-studio/api-reference/assets/upload',
                'v2/solutions/livepeer-studio/api-reference/assets/upload-via-url',
                'v2/solutions/livepeer-studio/api-reference/assets/get',
                'v2/solutions/livepeer-studio/api-reference/assets/update',
                'v2/solutions/livepeer-studio/api-reference/assets/delete',
                'v2/solutions/livepeer-studio/api-reference/assets/get-all',
              ],
            },
            {
              group: 'Streams',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/streams/overview',
                'v2/solutions/livepeer-studio/api-reference/streams/create',
                'v2/solutions/livepeer-studio/api-reference/streams/get',
                'v2/solutions/livepeer-studio/api-reference/streams/get-all',
                'v2/solutions/livepeer-studio/api-reference/streams/update',
                'v2/solutions/livepeer-studio/api-reference/streams/terminate',
                'v2/solutions/livepeer-studio/api-reference/streams/create-clip',
                'v2/solutions/livepeer-studio/api-reference/streams/get-clip',
                'v2/solutions/livepeer-studio/api-reference/streams/add-multistream-target',
                'v2/solutions/livepeer-studio/api-reference/streams/delete-multistream-target',
                'v2/solutions/livepeer-studio/api-reference/streams/delete',
              ],
            },
            {
              group: 'Multistream',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/multistream/overview',
                'v2/solutions/livepeer-studio/api-reference/multistream/create',
                'v2/solutions/livepeer-studio/api-reference/multistream/get',
                'v2/solutions/livepeer-studio/api-reference/multistream/get-all',
                'v2/solutions/livepeer-studio/api-reference/multistream/update',
                'v2/solutions/livepeer-studio/api-reference/multistream/delete',
              ],
            },
            {
              group: 'Playback',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/playback/overview',
                'v2/solutions/livepeer-studio/api-reference/playback/get',
              ],
            },
            {
              group: 'Sessions',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/sessions/overview',
                'v2/solutions/livepeer-studio/api-reference/sessions/get',
                'v2/solutions/livepeer-studio/api-reference/sessions/get-all',
                'v2/solutions/livepeer-studio/api-reference/sessions/get-clip',
                'v2/solutions/livepeer-studio/api-reference/sessions/get-recording',
              ],
            },
            {
              group: 'Tasks',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/tasks/overview',
                'v2/solutions/livepeer-studio/api-reference/tasks/get',
                'v2/solutions/livepeer-studio/api-reference/tasks/get-all',
              ],
            },
            {
              group: 'Transcode',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/transcode/overview',
                'v2/solutions/livepeer-studio/api-reference/transcode/create',
              ],
            },
            {
              group: 'Signing Keys',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/signing-keys/overview',
                'v2/solutions/livepeer-studio/api-reference/signing-keys/create',
                'v2/solutions/livepeer-studio/api-reference/signing-keys/get',
                'v2/solutions/livepeer-studio/api-reference/signing-keys/get-all',
                'v2/solutions/livepeer-studio/api-reference/signing-keys/update',
                'v2/solutions/livepeer-studio/api-reference/signing-keys/delete',
              ],
            },
            {
              group: 'Webhooks',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/webhooks/overview',
                'v2/solutions/livepeer-studio/api-reference/webhooks/create',
                'v2/solutions/livepeer-studio/api-reference/webhooks/get',
                'v2/solutions/livepeer-studio/api-reference/webhooks/get-all',
                'v2/solutions/livepeer-studio/api-reference/webhooks/update',
                'v2/solutions/livepeer-studio/api-reference/webhooks/delete',
              ],
            },
            {
              group: 'Rooms',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/rooms/overview',
                'v2/solutions/livepeer-studio/api-reference/rooms/create',
                'v2/solutions/livepeer-studio/api-reference/rooms/get',
                'v2/solutions/livepeer-studio/api-reference/rooms/update',
                'v2/solutions/livepeer-studio/api-reference/rooms/delete',
                'v2/solutions/livepeer-studio/api-reference/rooms/create-user',
                'v2/solutions/livepeer-studio/api-reference/rooms/get-user',
                'v2/solutions/livepeer-studio/api-reference/rooms/update-user',
                'v2/solutions/livepeer-studio/api-reference/rooms/remove-user',
                'v2/solutions/livepeer-studio/api-reference/rooms/start-egress',
                'v2/solutions/livepeer-studio/api-reference/rooms/stop-egress',
              ],
            },
            {
              group: 'Viewership',
              pages: [
                'v2/solutions/livepeer-studio/api-reference/viewership/overview',
                'v2/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics',
                'v2/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics',
                'v2/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics',
                'v2/solutions/livepeer-studio/api-reference/viewership/get-public-total-views',
                'v2/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership',
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
        'v2/solutions/streamplace/overview',
        {
          group: 'Stream.place',
          pages: [
            'v2/solutions/streamplace/introduction/streamplace-guide',
            'v2/solutions/streamplace/introduction/streamplace-architecture',
            'v2/solutions/streamplace/introduction/streamplace-integration',
            'v2/solutions/streamplace/introduction/streamplace-provenance',
            'v2/solutions/streamplace/introduction/streamplace-funding-model',
          ],
        },
      ],
    },
    {
      group: 'Frameworks',
      icon: 'clapperboard-play',
      pages: ['v2/solutions/frameworks/overview'],
    },
    {
      group: 'Ecosystem',
      icon: 'puzzle-piece',
      pages: ['v2/developers/guides/partner-integrations'],
    },
  ],
}

const platformsTab = {
  tab: 'Platforms [MOVED]',
  icon: 'film-canister',
  hidden: true,
  anchors: [
    {
      anchor: 'Platforms',
      icon: 'display-code',
      groups: [
        {
          group: 'Use Livepeer',
          icon: 'play',
          pages: [
            'v2/solutions/portal',
            'v2/solutions/product-hub',
            'v2/solutions/solution-providers',
          ],
        },
        {
          group: 'Daydream',
          icon: 'camera-movie',
          pages: ['v2/solutions/daydream/overview'],
        },
        {
          group: 'Livepeer Studio',
          icon: 'film-canister',
          pages: [
            'v2/solutions/livepeer-studio/overview',
            'v2/solutions/livepeer-studio/client-use-cases',
            {
              group: 'Get started',
              pages: [
                'v2/solutions/livepeer-studio/get-started/overview',
                'v2/solutions/livepeer-studio/quickstart',
                'v2/solutions/livepeer-studio/get-started/authentication',
                'v2/solutions/livepeer-studio/get-started/studio-cli',
              ],
            },
            {
              group: 'Livestream',
              pages: [
                'v2/solutions/livepeer-studio/livestream/overview',
                'v2/solutions/livepeer-studio/livestream/create-livestream',
                'v2/solutions/livepeer-studio/livestream/playback-livestream',
                'v2/solutions/livepeer-studio/livestream/stream-via-obs',
                'v2/solutions/livepeer-studio/livestream/livestream-from-browser',
                'v2/solutions/livepeer-studio/livestream/multistream',
                'v2/solutions/livepeer-studio/livestream/clip-livestream',
                'v2/solutions/livepeer-studio/livestream/stream-health',
                'v2/solutions/livepeer-studio/livestream/optimize-latency',
              ],
            },
            {
              group: 'Video on demand',
              pages: [
                'v2/solutions/livepeer-studio/video-on-demand/overview',
                'v2/solutions/livepeer-studio/video-on-demand/upload-asset',
                'v2/solutions/livepeer-studio/video-on-demand/playback-asset',
                'v2/solutions/livepeer-studio/video-on-demand/encrypted-assets',
                'v2/solutions/livepeer-studio/video-on-demand/thumbnails-vod',
                'v2/solutions/livepeer-studio/video-on-demand/transcode-video',
              ],
            },
            {
              group: 'Access control & security',
              pages: [
                'v2/solutions/livepeer-studio/access-control/overview',
                'v2/solutions/livepeer-studio/access-control/webhooks',
                'v2/solutions/livepeer-studio/access-control/jwt',
              ],
            },
            {
              group: 'Events & analytics',
              pages: [
                'v2/solutions/livepeer-studio/analytics/webhooks',
                'v2/solutions/livepeer-studio/analytics/listen-to-events',
                'v2/solutions/livepeer-studio/analytics/overview',
              ],
            },
            {
              group: 'Player & embed',
              pages: ['v2/solutions/livepeer-studio/player'],
            },
            {
              group: 'Reference',
              pages: [
                'v2/solutions/livepeer-studio/reference/api',
                'v2/solutions/livepeer-studio/reference/overview',
                'v2/solutions/livepeer-studio/reference/sdks',
                'v2/solutions/livepeer-studio/reference/managing-projects',
              ],
            },
            {
              group: 'API Reference',
              pages: [
                {
                  group: 'Assets',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/assets/overview',
                    'v2/solutions/livepeer-studio/api-reference/assets/upload',
                    'v2/solutions/livepeer-studio/api-reference/assets/upload-via-url',
                    'v2/solutions/livepeer-studio/api-reference/assets/get',
                    'v2/solutions/livepeer-studio/api-reference/assets/update',
                    'v2/solutions/livepeer-studio/api-reference/assets/delete',
                    'v2/solutions/livepeer-studio/api-reference/assets/get-all',
                  ],
                },
                {
                  group: 'Streams',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/streams/overview',
                    'v2/solutions/livepeer-studio/api-reference/streams/create',
                    'v2/solutions/livepeer-studio/api-reference/streams/get',
                    'v2/solutions/livepeer-studio/api-reference/streams/get-all',
                    'v2/solutions/livepeer-studio/api-reference/streams/update',
                    'v2/solutions/livepeer-studio/api-reference/streams/terminate',
                    'v2/solutions/livepeer-studio/api-reference/streams/create-clip',
                    'v2/solutions/livepeer-studio/api-reference/streams/get-clip',
                    'v2/solutions/livepeer-studio/api-reference/streams/add-multistream-target',
                    'v2/solutions/livepeer-studio/api-reference/streams/delete-multistream-target',
                    'v2/solutions/livepeer-studio/api-reference/streams/delete',
                  ],
                },
                {
                  group: 'Multistream',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/multistream/overview',
                    'v2/solutions/livepeer-studio/api-reference/multistream/create',
                    'v2/solutions/livepeer-studio/api-reference/multistream/get',
                    'v2/solutions/livepeer-studio/api-reference/multistream/get-all',
                    'v2/solutions/livepeer-studio/api-reference/multistream/update',
                    'v2/solutions/livepeer-studio/api-reference/multistream/delete',
                  ],
                },
                {
                  group: 'Playback',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/playback/overview',
                    'v2/solutions/livepeer-studio/api-reference/playback/get',
                  ],
                },
                {
                  group: 'Sessions',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/sessions/overview',
                    'v2/solutions/livepeer-studio/api-reference/sessions/get',
                    'v2/solutions/livepeer-studio/api-reference/sessions/get-all',
                    'v2/solutions/livepeer-studio/api-reference/sessions/get-clip',
                    'v2/solutions/livepeer-studio/api-reference/sessions/get-recording',
                  ],
                },
                {
                  group: 'Tasks',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/tasks/overview',
                    'v2/solutions/livepeer-studio/api-reference/tasks/get',
                    'v2/solutions/livepeer-studio/api-reference/tasks/get-all',
                  ],
                },
                {
                  group: 'Transcode',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/transcode/overview',
                    'v2/solutions/livepeer-studio/api-reference/transcode/create',
                  ],
                },
                {
                  group: 'Signing Keys',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/signing-keys/overview',
                    'v2/solutions/livepeer-studio/api-reference/signing-keys/create',
                    'v2/solutions/livepeer-studio/api-reference/signing-keys/get',
                    'v2/solutions/livepeer-studio/api-reference/signing-keys/get-all',
                    'v2/solutions/livepeer-studio/api-reference/signing-keys/update',
                    'v2/solutions/livepeer-studio/api-reference/signing-keys/delete',
                  ],
                },
                {
                  group: 'Webhooks',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/webhooks/overview',
                    'v2/solutions/livepeer-studio/api-reference/webhooks/create',
                    'v2/solutions/livepeer-studio/api-reference/webhooks/get',
                    'v2/solutions/livepeer-studio/api-reference/webhooks/get-all',
                    'v2/solutions/livepeer-studio/api-reference/webhooks/update',
                    'v2/solutions/livepeer-studio/api-reference/webhooks/delete',
                  ],
                },
                {
                  group: 'Rooms',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/rooms/overview',
                    'v2/solutions/livepeer-studio/api-reference/rooms/create',
                    'v2/solutions/livepeer-studio/api-reference/rooms/get',
                    'v2/solutions/livepeer-studio/api-reference/rooms/update',
                    'v2/solutions/livepeer-studio/api-reference/rooms/delete',
                    'v2/solutions/livepeer-studio/api-reference/rooms/create-user',
                    'v2/solutions/livepeer-studio/api-reference/rooms/get-user',
                    'v2/solutions/livepeer-studio/api-reference/rooms/update-user',
                    'v2/solutions/livepeer-studio/api-reference/rooms/remove-user',
                    'v2/solutions/livepeer-studio/api-reference/rooms/start-egress',
                    'v2/solutions/livepeer-studio/api-reference/rooms/stop-egress',
                  ],
                },
                {
                  group: 'Viewership',
                  pages: [
                    'v2/solutions/livepeer-studio/api-reference/viewership/overview',
                    'v2/solutions/livepeer-studio/api-reference/viewership/get-usage-metrics',
                    'v2/solutions/livepeer-studio/api-reference/viewership/get-viewership-metrics',
                    'v2/solutions/livepeer-studio/api-reference/viewership/get-creators-metrics',
                    'v2/solutions/livepeer-studio/api-reference/viewership/get-public-total-views',
                    'v2/solutions/livepeer-studio/api-reference/viewership/get-realtime-viewership',
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
            'v2/solutions/streamplace/overview',
            {
              group: 'Stream.place',
              pages: [
                'v2/solutions/streamplace/introduction/streamplace-guide',
                'v2/solutions/streamplace/introduction/streamplace-architecture',
                'v2/solutions/streamplace/introduction/streamplace-integration',
                'v2/solutions/streamplace/introduction/streamplace-provenance',
                'v2/solutions/streamplace/introduction/streamplace-funding-model',
              ],
            },
          ],
        },
        {
          group: 'Embody Avatars',
          icon: 'user-robot',
          pages: ['v2/solutions/embody/overview'],
        },
        {
          group: 'Frameworks',
          icon: 'clapperboard-play',
          pages: ['v2/solutions/frameworks/overview'],
        },
      ],
    },
    {
      anchor: 'Resource HUB',
      icon: 'books',
      pages: ['/v2/resources/redirect'],
    },
    {
      anchor: ' ',
      icon: 'horizontal-rule',
      pages: [' '],
    },
  ],
}
