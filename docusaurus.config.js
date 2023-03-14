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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/category/frequently-asked-questions/',
            from: '/documentation',
          },
          {
            to: '/category/frequently-asked-questions/',
            from: [
              '/2017',
              '/2018',
              '/2019',
              '/2020',
              '/2021',
              '/2022',
              '/2023',
            ],
          },
          {
            to: '/faq/filing-faq',
            from: [
              '/2018/filing-faq/',
              '/2019/filing-faq/',
              '/2020/filing-faq/',
              '/2021/filing-faq/',
              '/2022/filing-faq/',
              '/2023/filing-faq/',
            ],
          },
          {
            to: '/faq/identifiers-faq',
            from: '/2022/identifiers-faq/',
          },
          {
            to: '/faq/static-dataset-faq',
            from: [
              '/2018/static-dataset-faq/',
              '/2019/static-dataset-faq/',
              '/2020/static-dataset-faq/',
              '/2021/static-dataset-faq/',
              '/2022/static-dataset-faq/',
              '/2023/static-dataset-faq/',
            ],
          },
          {
            to: '/faq/data-collection-timelines',
            from: [
              '/2021/quarterly-filing-dates/',
              '/2022/data-collection-timelines/',
              '/2023/annual-filing-dates/',
            ],
          },
          {
            to: '/publications/loan-level-datasets/lar-data-fields/',
            from: [
              '/2018/lar-data-fields/',
              '/2019/lar-data-fields/',
              '/2020/lar-data-fields/',
              '/2021/lar-data-fields/',
              '/2022/lar-data-fields/',
              '/2023/lar-data-fields/',
            ],
          },
          {
            to: '/publications/loan-level-datasets/public-lar-schema',
            from: [
              '/2018/public-lar-schema/',
              '/2019/public-lar-schema/',
              '/2020/public-lar-schema/',
              '/2021/public-lar-schema/',
              '/2022/public-lar-schema/',
              '/2023/public-lar-schema/',
            ],
          },
          {
            to: '/publications/loan-level-datasets/public-ts-schema',
            from: '/2021/public-ts-schema/',
          },
          {
            to: '/publications/loan-level-datasets/ts-data-fields',
            from: '/2022/ts-data-fields/',
          },
          {
            to: '/publications/modified-lar/modified-lar-schema',
            from: ['/2021/modified-lar-schema/', '/2022/modified-lar-schema/'],
          },
          {
            to: '/publications/loan-level-datasets/panel-data-fields',
            from: ['/2020/panel-data-fields/', '/2021/panel-data-fields/'],
          },
          {
            to: '/tools/lar-formatting/',
            from: [
              '/2021/lar-formatting/',
              '/2022/lar-formatting/',
              '/2022/tools/lar-formatting/',
            ],
          },
          {
            to: '/tools/data-browser/data-browser-filters',
            from: [
              '/2018/data-browser-filters/',
              '/2020/data-browser-filters/',
              '/2021/data-browser-filters/',
            ],
          },
          {
            to: '/tools/data-browser/data-browser-faq',
            from: '/2021/data-browser-faq',
          },
          {
            to: '/tools/data-browser/derived-data-fields',
            from: '/2022/derived-data-fields/',
          },
          // Plugin does not yet support sections of a page in the redirect url
          // Putting a pin in this to discuss how to link to the fig
          {
            to: '/faq/data-collection-timelines',
            from: ['/2021/fig/', '/2022/fig/', '/2023/fig/'],
          },
        ],
      },
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
