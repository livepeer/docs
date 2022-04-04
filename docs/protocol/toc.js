const toc = [
    "protocol/index",
    { 
        type: 'category',
        label: 'Core Concepts',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id: "protocol/core-concepts/index", },
        items: [
            "protocol/core-concepts/network",
            "protocol/core-concepts/ecosystem-participants",
            "protocol/core-concepts/governance",
            "protocol/core-concepts/token",
            "protocol/core-concepts/lpms"
        ]
    },
    {
        type: 'category',
        label: 'Reference',
        collapsible: true,
        collapsed: true,
        link: { type: "doc", id: "protocol/reference/index", },
        items:[
            "protocol/reference/deployed",
            "protocol/reference/api",
            "protocol/reference/entities"
        ]
    },
    "video-miners/terminology"
]

module.exports = toc 