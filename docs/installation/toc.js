const toc = [
    {
        type: 'category',
        label: 'Guides',
        collapsible: true,
        collapsed: false,
        link: { type: "doc", id: "installation/index"},
        items: [
            {
                "Install Livepeer": [
                    "installation/install-livepeer/index", 
                    "installation/install-livepeer/binary-release", 
                    "installation/install-livepeer/docker", 
                    "installation/install-livepeer/installing-for-development"]
            },
            "installation/configuring-livepeer",
            "installation/connect-to-arbitrum",
        ]
    },
    "video-miners/terminology"
]

module.exports = toc 