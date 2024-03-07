// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github')
// const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HMDA Documentation',
  url: 'https://ffiec.cfpb.gov',
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
  staticDirectories: ['static'],

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
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-TSFHVV1M7J',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  scripts: [
    {
      src: '/documentation/js/uswds-init.min.js',
      defer: true,
    },
    {
      src: '/documentation/js/uswds.min.js',
      defer: true,
    },
    {
      src: '/documentation/js/scrollspy.js',
      defer: true,
    },
  ],

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fig',
        path: 'fig',
        routeBasePath: '/fig',
        //sidebarPath: './sidebarsFig.js',
        lastVersion: '2024',
        includeCurrentVersion: false,
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
      algolia: {
        // The application ID provided by Algolia
        appId: '69RTFLDVTR',
        // Public API key: it is safe to commit it
        apiKey: 'a9f10b8a29718f165720035309b65a46',
        indexName: 'ffiec-beta-cfpb',
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      docker_tag: process.env.DOCKER_TAG || 'dev',
    }),
}

module.exports = config
