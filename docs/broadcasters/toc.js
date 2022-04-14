const toc = [
    "broadcasters/index",
    { 
        type: 'category',
        label: 'Core Concepts',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"broadcasters/core-concepts/index", },
        items: [     
            "broadcasters/core-concepts/payments",
            "broadcasters/core-concepts/use-cases"
        ]
    },
    {
        type: 'category',
        label: 'Getting Started',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"broadcasters/getting-started/index", },
        items:[
            "broadcasters/getting-started/index",
            "broadcasters/getting-started/install",
            "broadcasters/getting-started/run-broadcaster",
            "broadcasters/getting-started/deposit-broadcasting-funds",
            "broadcasters/getting-started/create-livestream",
            "broadcasters/getting-started/playback-livestream",
        ]
    },
    {
        type: 'category',
        label: 'Guides',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"broadcasters/how-to-guides/index", },
        items:[
            {
                type: 'category',
                label: 'Managing Broadcasters',
                collapsible: true,
                collapsed: true,
                items:[
                "broadcasters/how-to-guides/managing-broadcasters/broadcasting-preferences",
                "broadcasters/how-to-guides/managing-broadcasters/troubleshooting",
                "broadcasters/how-to-guides/managing-broadcasters/verification",
                "broadcasters/how-to-guides/managing-broadcasters/withdrawing-broadcaster-funds",
                ]
            },
        "broadcasters/how-to-guides/choose-orchestrator",
        "broadcasters/how-to-guides/grafana",
        "broadcasters/how-to-guides/low-funds-alert",
        "broadcasters/how-to-guides/recording-stream",
        "broadcasters/how-to-guides/cdn-integration",
    ],
    },
    {
        type: 'category',
        label: 'Reference',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id: "broadcasters/reference/index",},
        items:[
            "broadcasters/reference/ingest"
        ]
    },
    "video-miners/terminology"
]

module.exports = toc 