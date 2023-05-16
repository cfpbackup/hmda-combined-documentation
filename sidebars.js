/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ffiecDocs: [
    // FAQ
    {
      type: 'category',
      label: 'Frequently Asked Questions',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'faq/data-collection-timelines',
        'faq/identifiers-faq',
        'faq/downloading-datasets',
        'faq/filing-faq',
        'faq/data-browser-graphs-faq',
        'faq/data-browser-maps-faq',
        'faq/static-dataset-faq',
      ],
    },
    // Publications
    {
      type: 'category',
      label: 'Publications',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'General',
          link: {
            type: 'generated-index',
          },
          items: [
            'publications/general/arid2017-to-lei-schema',
            'publications/general/derived-data-fields',
          ],
        },
        {
          type: 'category',
          label: 'Aggregate Disclosure Reports',
          link: {
            type: 'generated-index',
          },
          items: ['publications/aggregate-disclosure-reports/ad-changes'],
        },
        {
          type: 'category',
          label: 'Loan Level Datasets',
          link: {
            type: 'generated-index',
            description:
              'Information regarding Snapshot, One Year, Three Year and Dynamic National Loan Level Datasets',
          },
          items: [
            'publications/loan-level-datasets/lar-data-fields',
            'publications/loan-level-datasets/ts-data-fields',
            'publications/loan-level-datasets/public-ts-schema',
            'publications/loan-level-datasets/public-panel-schema',
            'publications/loan-level-datasets/panel-data-fields',
            'publications/loan-level-datasets/public-lar-schema',
            'publications/loan-level-datasets/lar-data-fields-v1',
            'publications/loan-level-datasets/ts-data-fields-v1',
            'publications/loan-level-datasets/panel-data-fields-v1',
          ],
        },
        {
          type: 'category',
          label: 'Modified LAR',
          link: {
            type: 'generated-index',
          },
          items: ['publications/modified-lar/modified-lar-schema'],
        },
      ],
    },
    // Tools
    {
      type: 'category',
      label: 'Tools',
      collapsed: true,
      link: {
        type: 'generated-index',
        description:
          'This tool allows users to filter and download HMDA datasets.',
      },
      items: [
        {
          type: 'category',
          label: 'Data Browser',
          link: {
            type: 'generated-index',
          },
          items: [
            'tools/data-browser/data-browser-faq',
            'tools/data-browser/data-browser-filters',
            'tools/data-browser/data-browser-maps-faq',
            'tools/data-browser/derived-data-fields',
            'tools/data-browser/lar-data-fields',
          ],
        },
        'tools/rate-spread',
        'tools/check-digit',
        'tools/file-format-verification/file-format-verification',
        'tools/lar-formatting/lar-formatting',
        'tools/online-lar-formatting/online-lar-formatting',
      ],
    },
    // Developer APIs
    {
      type: 'category',
      label: 'Developer APIs',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'api/filing/platform',
        'api/filing/beta-platform',
        'api/public-verification/index',
        'api/file-serving/index',
        'api/data-browser/index',
        'api/rate-spread/index',
        'api/check-digit/index',
        'api/graphs/index',
      ],
    },
    // Filing Instructions Guide
    {
      type: 'category',
      label: 'Filing Instructions Guide',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {type: 'doc', id: 'fig/overview', label: '1. Overview'},
        {type: 'doc', id: 'fig/changes-2023', label: '2. Changes for 2023'},
        {type: 'doc', id: 'fig/file-specifications', label: '3. File Specifications'},
        {type: 'doc', id: 'fig/data-specifications', label: '4. Data Specifications'},
        {type: 'doc', id: 'fig/edit-specifications', label: '5. Edit Specifications'},
        {type: 'doc', id: 'fig/additional-info', label: '6. Additional Info'},
        {type: 'doc', id: 'fig/paperwork-reduction', label: 'Paperwork Reduction'},
        {type: 'doc', id: 'fig/test', label: 'Tables'},
      ],
    },
  ],
}

module.exports = sidebars
