/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
import { useRouter } from 'next/router';

const github = 'https://github.com/livepeer/docs';

const TITLE_WITH_TRANSLATIONS = {
  'en-US': 'Livepeer Documentation',
} as const;

const EDIT_LINK_WITH_TRANSLATIONS = {
  'en-US': 'Edit this page on GitHub →',
} as const;

import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs';

const Logo = ({ height, width }: { height: number; width: number }) => {
  const { theme } = useTheme();
  return (
    <div style={{ alignItems: 'center' }} className="flex items-center gap-2">
      <svg
        width={height || 18}
        height={width || 18}
        viewBox="0 0 64 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="52"
          y="40"
          width="12"
          height="12"
          transform="rotate(-90 52 40)"
          fill={theme === 'light' ? '#131418' : 'white'}
        />
        <rect
          x="26"
          y="26"
          width="12"
          height="12"
          transform="rotate(-90 26 26)"
          fill={theme === 'light' ? '#131418' : 'white'}
        />
        <rect
          x="26"
          y="54"
          width="12"
          height="12"
          transform="rotate(-90 26 54)"
          fill={theme === 'light' ? '#131418' : 'white'}
        />
        <rect
          y="68"
          width="12"
          height="12"
          transform="rotate(-90 0 68)"
          fill={theme === 'light' ? '#131418' : 'white'}
        />
        <rect
          y="40"
          width="12"
          height="12"
          transform="rotate(-90 0 40)"
          fill={theme === 'light' ? '#131418' : 'white'}
        />
        <rect
          y="12"
          width="12"
          height="12"
          transform="rotate(-90 0 12)"
          fill={theme === 'light' ? '#131418' : 'white'}
        />
      </svg>
      <span style={{ fontWeight: 'bold', fontSize: 18 }}>Livepeer Docs</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  docsRepositoryBase: `${github}/blob/main`,
  chat: {
    link: 'https://discord.gg/livepeer',
  },
  banner: {
    key: 'docs-launch',
    text: (
      <div className="flex justify-center items-center gap-2">
        Welcome to the new, unified Livepeer documentation! 👋
      </div>
    ),
  },
  toc: {
    float: true,
  },
  project: {
    link: github,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: {
    dark: 162,
    light: 212,
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Livepeer Inc.`,
  },
  logo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter();
    return (
      <div className="flex items-center gap-2">
        <Logo width={18} height={18} />
        <span
          className="font-extrabold hidden md:inline select-none"
          title={
            TITLE_WITH_TRANSLATIONS[
              (locale as keyof typeof TITLE_WITH_TRANSLATIONS) ?? 'en-US'
            ]
          }
        >
          livepeer
        </span>
      </div>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s - Livepeer Documentation`,
    };
  },
  head() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const config = useConfig();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme } = useTheme();
    const title = config?.frontMatter?.title || 'Build with Livepeer';
    const description =
      config?.frontMatter?.description ||
      'Explore guides and a variety of resources to help you get started adding live and on demand video experiences to your application using the open and decentralized Livepeer Protocol.';
    const image =
      config?.frontMatter?.image || 'https://docs.livepeer.org/og.png';
    const folder = theme === 'light' ? '/light' : '/dark';

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${folder}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${folder}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${folder}/favicon-16x16.png`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <link rel="manifest" href={`${folder}/site.webmanifest`} />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@livepeer" />
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={`${title} – Livepeer Documentation`} />
        <meta name="og:image" content={image} />
        <meta
          name="apple-mobile-web-app-title"
          content="Livepeer Documentation"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YNF68V1ND1"
        ></script>
        <script>
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
 
             gtag('config', 'G-YNF68V1ND1');
           `}
        </script>
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === 'separator' ? (
        <div className="flex items-center gap-2">
          <Logo height={10} width={10} />
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
  },
  editLink: {
    text() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter();
      return (
        <>
          {
            EDIT_LINK_WITH_TRANSLATIONS[
              (locale as keyof typeof EDIT_LINK_WITH_TRANSLATIONS) ?? 'en-US'
            ]
          }
        </>
      );
    },
  },
  i18n: [{ locale: 'en-US', text: 'English' }],
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
};

export default config;
