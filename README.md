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

#### Search

Search feature is powered by [Algolia](https://www.algolia.com/) via the [DocSearch](https://docsearch.algolia.com/) program.


### Swizzled Components

The following components have been [swizzled](https://docusaurus.io/docs/swizzling) and are now manually maintained:
- Navbar (./src/theme/Navbar)
- SearchBar (./src/theme/SearchBar)
- Footer (./src/theme/Footer)

The ```Navbar``` and ```Footer``` components are from the USWDS and are independent from the Docusaurus theme. They can be edited manually and updating docusaurus shouldn't affect these components.

To update links in the Navbar, edit the ```links.js``` (./src/theme/Navbar/Content/links.js) file.

To update the styling of the ```Navbar``` and ```Footer```:
1. Run ```npx gulp watch``` in a new terminal window
1. Edit the ```_uswds-theme-custom-styles.scss``` (src/theme/Navbar/uswds/scss/_uswds-theme-custom-styles.scss)
1. Every time you save the scss file it will automatically be compiled

The ```SearchBar``` component has a slightly modified CSS (./src/theme/SearchBar/styles.css) file and may need to be "re-swizzled" when upgrading docusaurus to a new version.
