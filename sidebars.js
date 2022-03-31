const videoMinerToc = require("./docs/video-miners/toc")
const protocolToc = require("./docs/protocol/toc")
const videoDeveloperToc = require("./docs/video-developers/toc")
const contributingToc = require("./docs/contributing/toc")
const installationToc = require("./docs/installation/toc")
const delegatorToc = require("./docs/delegators/toc")

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  contributing: contributingToc,
  installation: installationToc,
  protocol: protocolToc,
  orchestrators: videoMinerToc,
  video_devs: videoDeveloperToc,
  delegators: delegatorToc
};

module.exports = sidebars;
