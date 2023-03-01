// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HMDA Documentation',
  url: 'https://ffiec.beta.cfpb.gov',
  baseUrl: '/documentation/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/documentation/img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'documentation',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      announcementBar: {
        id: 'us-government-website',
        content:
          '<div class="banner"><header class="banner-header"><div class="banner-inner"><img src="/documentation/img/favicon-57.png" alt="U.S. flag" /><p>An official website of the United States government</p></div></header></div>',
        isCloseable: false,
      },
      navbar: {
        logo: {
          alt: 'hmda-logo',
          src: 'img/ffiec-logo.svg',
          href: 'https://ffiec.cfpb.gov/',
        },
        items: [
          {
            to: 'https://ffiec.cfpb.gov/',
            label: 'Home Mortgate Disclousure Act',
            position: 'left',
            target: '_self',
            className: 'hmda-name',
          },
          {
            to: 'https://ffiec.cfpb.gov/',
            label: 'HOME',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/filing/2022/',
            label: 'FILING',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/data-browser/',
            label: 'DATA BROWSER',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/data-publication/',
            label: 'DATA PUBLICATION',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/tools/',
            label: 'TOOLS',
            position: 'right',
            target: '_self',
          },
          {
            to: '/documentation/category/frequently-asked-questions',
            position: 'right',
            label: 'DOCUMENTATION',
          },
          {
            to: 'https://ffiec.cfpb.gov/updates-notes',
            label: 'UPDATES',
            position: 'right',
            target: '_self',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '69RTFLDVTR',
        // Public API key: it is safe to commit it
        apiKey: 'a9f10b8a29718f165720035309b65a46',
        indexName: 'ffiec-beta-cfpb',
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
