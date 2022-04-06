const toc = [
    "video-miners/video-miners",
    { 
        type: 'category',
        label: 'Core Concepts',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id: "video-miners/core-concepts/core-concepts" },
        items: [
            "video-miners/core-concepts/selection",
            "video-miners/core-concepts/architecture",
            "video-miners/core-concepts/dual-mining",
            "video-miners/core-concepts/earnings",
            "video-miners/core-concepts/payments",
            "video-miners/core-concepts/pools",
        ]
    },
    {
        type: 'category',
        label: 'Getting Started',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"video-miners/getting-started/getting-started" },
        items:[
                "video-miners/getting-started/testnet",
                "video-miners/getting-started/activation",
                "video-miners/getting-started/discoverability",
                "video-miners/getting-started/reward-call",
            ]
        },
    {
        type: 'category',
        label: 'Guides',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"video-miners/guides/guides" },
        items:[
            "video-miners/guides/contract-wallet-migration",
            "video-miners/guides/l2-migration",
            "video-miners/guides/benchmarking",
            "video-miners/guides/session-limits",
            "video-miners/guides/metrics-monitoring",
            "video-miners/guides/pricing",
            "video-miners/guides/vote",
            "video-miners/guides/troubleshooting",
            "video-miners/guides/dual-mining",
            "video-miners/guides/o-t-split"        
            ]
    },
    {
        type: 'category',
        label: 'Reference',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id: "video-miners/reference/reference" },
        items:[
            "video-miners/reference/bandwidth",
            "video-miners/reference/concurrency-check",
             "video-miners/reference/configuration",
            "video-miners/reference/gpu-support",
            "video-miners/reference/hardware",
            "video-miners/reference/leaderboard",
            "video-miners/reference/metrics"
        ]
    },
    "video-miners/terminology"
]

module.exports = toc 