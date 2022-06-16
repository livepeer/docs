const toc = [
  "delegators/index",
  {
    type: "category",
    label: "Reference",
    collapsible: true,
    collapsed: false,
    link: { type: "doc", id: "delegators/how-to-guides/index" },
    items: [
      "delegators/how-to-guides/bridge-lpt",
      "delegators/how-to-guides/l2-migration",
    ],
  },
  {
    type: "category",
    label: "Guides",
    collapsible: true,
    collapsed: true,
    link: { type: "doc", id: "delegators/reference/index" },
    items: ["delegators/reference/yield-calculation"],
  },
  "video-miners/terminology",
];

module.exports = toc;
