// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Livepeer Docs",
  tagline: "The world's open video infrastructor",
  url: "https://livepeer.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "livepeer", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/livepeer/docs/tree/main/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: "TIWEI9YB8Y",
      //   apiKey: "7030b10ebe1bfc5913762385f6f1b6c7",
      //   indexName: "livepeer-org-docs",
      //   contextualSearch: true,
      // },
      navbar: {
        title: "Livepeer Docs",
        logo: {
          alt: "Livepeer Logo",
          src: "img/logo.svg",
        },
      },
      colorMode: {
        defaultMode: 'light'
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/uaPhtyrWsF",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/LivepeerOrg",
              },
              {
                label: "Blog",
                href: "https://medium.com/livepeer-blog"
              },
              {
                label: "Forum",
                href: "https://forum.livepeer.org/"
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/livepeer/"
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Livepeer, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
