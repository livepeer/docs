const toc = [
    "video-developers/index",
    { 
        type: 'category',
        label: 'Core Concepts',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"video-developers/core-concepts/index", },
        items: [     
            "video-developers/core-concepts/payments",
            "video-developers/core-concepts/use-cases"
        ]
    },
    {
        type: 'category',
        label: 'Getting Started',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"video-developers/getting-started/index", },
        items:[
            "video-developers/getting-started/index",
            "video-developers/getting-started/create-livestream",
            "video-developers/getting-started/deposit-broadcasting-funds",
            "video-developers/getting-started/run-broadcaster",
            "video-developers/getting-started/playback-livestream",
        ]
    },
    {
        type: 'category',
        label: 'Guides',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id:"video-developers/how-to-guides/index", },
        items:[
            "video-developers/how-to-guides/broadcasting-preferences",
            "video-developers/how-to-guides/cdn-integration",
            "video-developers/how-to-guides/troubleshooting",
            "video-developers/how-to-guides/verification",
            "video-developers/how-to-guides/withdrawing-broadcaster-funds",
        ]
    },
    {
        type: 'category',
        label: 'Reference',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id: "video-developers/reference/index",},
        items:[
            "video-developers/reference/ingest"
        ]
    },
    "video-miners/terminology"
]

module.exports = toc 