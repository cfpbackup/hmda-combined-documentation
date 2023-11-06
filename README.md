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

To create properly formatted .json files for each table in the FIG (/fig_versioned_docs/version-2024/tables/):

1. Convert each table from the .docx file into .html with: https://word2cleanhtml.com/
2. Convert the html table to markdown with: https://johnbeech.github.io/html-table-to-markdown-converter/index.html
3. Convert the markdown table into json with: https://tableconvert.com/markdown-to-json
