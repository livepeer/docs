const toc = [
  "developers/index",
  {
    type: "category",
    label: "Core Concepts",
    collapsible: true,
    collapsed: true,
    link: { type: "doc", id: "developers/core-concepts/index" },
    items: [
      "developers/core-concepts/payments",
      "developers/core-concepts/use-cases",
    ],
  },
  {
    type: "category",
    label: "Getting Started",
    collapsible: true,
    collapsed: false,
    link: { type: "doc", id: "developers/getting-started/index" },
    items: [
      "developers/getting-started/index",
      "developers/getting-started/install",
      "developers/getting-started/run-broadcaster",
      "developers/getting-started/deposit-broadcasting-funds",
      "developers/getting-started/create-livestream",
      "developers/getting-started/playback-livestream",
    ],
  },
  {
    type: "category",
    label: "Guides",
    collapsible: true,
    collapsed: true,
    link: { type: "doc", id: "developers/how-to-guides/index" },
    items: [
      {
        type: "category",
        label: "Managing Catalyst",
        collapsible: true,
        collapsed: true,
        items: [
          "developers/how-to-guides/managing-broadcasters/broadcasting-preferences",
          "developers/how-to-guides/managing-broadcasters/troubleshooting",
          "developers/how-to-guides/managing-broadcasters/verification",
          "developers/how-to-guides/managing-broadcasters/withdrawing-broadcaster-funds",
        ],
      },
      "developers/how-to-guides/choose-orchestrator",
      "developers/how-to-guides/recording-stream",
      "developers/how-to-guides/cdn-integration",
    ],
  },
  "video-miners/terminology",
];

module.exports = toc;
