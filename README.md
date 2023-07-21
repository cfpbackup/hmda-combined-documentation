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