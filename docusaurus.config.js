// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Livepeer Docs",
  tagline: "The world's open video infrastructure",
  url: "https://livepeer.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "livepeer",
  projectName: "docs",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/livepeer/docs/blob/main",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-111259858-1",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "TIWEI9YB8Y",
        apiKey: "bee5caa76c6df12c16be24f2f04e7c7c",
        indexName: "2022-livepeer-org-docs",
        contextualSearch: true,
      },
      navbar: {
        title: "Livepeer Docs",
        logo: {
          alt: "Livepeer Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "/contributing",
            label: "Contributing",
            position: "left",
          },
          {
            href: "/installation",
            label: "Installation",
            position: "left",
          },
          {
            href: "/protocol",
            label: "Protocol",
            position: "left",
          },
          {
            href: "/video-miners",
            label: "Orchestrators",
            position: "left",
          },
          {
            href: "/developers",
            label: "Developers",
            position: "left",
          },
          {
            href: "/delegators",
            label: "Delegators",
            position: "left",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
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
                href: "https://medium.com/livepeer-blog",
              },
              {
                label: "Forum",
                href: "https://forum.livepeer.org/",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/livepeer/",
              },
            ],
          },
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
