# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Testing - Cypress

[Cypress](https://www.cypress.io/) is used to perform end-to-end testing for all interactions a user will experience when browsing HMDA documentation. It mimicks a user's interaction with the site and allows for rapid, automated system validation of project deployments.

#### End-to-End Testing

Run tests via cli: `yarn run cypress run`
<br />
Run tests via Cypress UI: `yarn run cypress open`

### Search + Newely Added/Updating Documentation

Search feature is powered by [Algolia](https://www.algolia.com/) via the [DocSearch](https://docsearch.algolia.com/) program.

#### Adding new documentation or updating existing documentation

Section explains how to properly update the Algolia crawler to pick up documentation changes.

1. Navigate to https://crawler.algolia.com/admin/users/login and Login
2. Head over to the `Overview` navigation tab, once there click the `Restart Crawling` button and that will trigger a re-crawl and update the searchable documentation for Algolia

### Swizzled Components

The following components have been [swizzled](https://docusaurus.io/docs/swizzling) and are now manually maintained:
- Navbar (./src/theme/Navbar)
- SearchBar (./src/theme/SearchBar)
- Footer (./src/theme/Footer)
- DocVersionBanner (./src/theme/DocVersionBanner)

The ```Navbar``` and ```Footer``` components are from the [USWDS v3.0](https://designsystem.digital.gov/whats-new/updates/2022/04/28/introducing-uswds-3-0/) and are independent from the Docusaurus theme. They can be edited manually and updating docusaurus shouldn't affect these components.

To update links in the Navbar, edit the ```links.js``` (./src/theme/Navbar/Content/links.js) file.

To update the styling of the ```Navbar``` and ```Footer```:
1. Run ```npx gulp watch``` in a new terminal window
1. Edit the ```_uswds-theme-custom-styles.scss``` (src/theme/Navbar/uswds/scss/_uswds-theme-custom-styles.scss)
1. Every time you save the scss file it will automatically be compiled

The ```SearchBar``` component has a slightly modified CSS (./src/theme/SearchBar/styles.css) file and may need to be "re-swizzled" when upgrading docusaurus to a new version.

### Filing Instructions Guide (FIG)

#### To create properly formatted .json files for each table in the FIG (/fig_versioned_docs/version-{year}/tables/):

1. Convert each table from the .docx file into .html with: https://word2cleanhtml.com/
2. Convert the html table to markdown with: https://johnbeech.github.io/html-table-to-markdown-converter/index.html
3. Convert the markdown table into json with: https://tableconvert.com/markdown-to-json

#### To add a new version/year of the FIG:

1. Go to /fig_versioned_docs and duplicate the folder of the most recent version (version-2024). Name this new folder with the current year (version-2025)
2. Go to /fig_versioned_sidebars and duplicate the .json file for the most recent version (version-2024-sidebards.json). Name this new file with the same year used in step 1 (version-2025-sidebars.json)
3. Go to /fig_versions.json and add the year for the new FIG to the top of the array ("2025").
4. Update the content in the following:
> - FIG: /fig_versioned_docs/version-2025/overview.mdx
> - Sidebar: /fig_versioned_sidebars/version-2025-sidebars.json
5. Update the Algolia Search Crawler
> - Go to https://crawler.algolia.com/ and select the 'Editor'
> - In the Actions array, update the 'pathsToMatch' of the entry with 'pageRank: "100"' to be the the URL of the FIG version you want ranked the highest. 
> - All other FIGs ( >2022 ) should be listed in the entry with 'pageRank: "5"'.
> > - The path for the most recent FIG is always https://ffiec.cfpb.gov/documentation/fig/overview . 
> > - Older FIG versions have the year in the URL: https://ffiec.cfpb.gov/documentation/fig/{year}/overview . 
> - Go to the 'Overview' page and click the 'Restart Crawling' button to re-index the site. All new search results should be displayed in Algolia Search form on the frontend.
