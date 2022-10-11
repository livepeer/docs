const toc = [
  "protocol/index",
  {
    type: "category",
    label: "Core Concepts",
    collapsible: true,
    collapsed: true,
    link: { type: "doc", id: "protocol/core-concepts/index" },
    items: [
      "protocol/core-concepts/network",
      "protocol/core-concepts/network-roles",
      "protocol/core-concepts/governance",
      "protocol/core-concepts/token",
      "protocol/core-concepts/lpms",
    ],
  },
  {
    type: "category",
    label: "Reference",
    collapsible: true,
    collapsed: true,
    link: { type: "doc", id: "protocol/reference/index" },
    items: [
      "protocol/reference/deployed",
      "protocol/reference/api",
      "protocol/reference/entities",
      "protocol/reference/query-examples",
    ],
  },
  "video-miners/terminology",
];

module.exports = toc;
