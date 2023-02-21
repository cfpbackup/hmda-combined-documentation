let hostname =
  window.location.hostname === 'localhost' ? 'localhost:3000' : 'ffiec.beta.cfpb.gov'

let url =
  `http://${hostname}/documentation/category/frequently-asked-questions`

describe('General Checks', () => {
  it('Government banner is displayed and image is visible', () => {
    cy.visit(url)
    cy.get('.banner-inner').then(banner => {
      Cypress.dom.isVisible(banner)
    })
    // Images loads
    cy.get('.banner-inner > img')
      .should('be.visible')
      .and($img => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect(
          $img[0].naturalWidth,
          'image has natural width'
        ).to.be.greaterThan(0)
      })
  })
})

describe('Docusarus user interactions', () => {
  it('Redirect from "/documentation/" to the docs/faq page', () => {
    cy.visit(`http://${hostname}/documentation/`)
    cy.location().should(loc => {
      expect(loc.href).to.eq(url)
    })
  })
  it('Interaction with category card and category navbar', () => {
    cy.visit(url)
    cy.get(':nth-child(1) > .card').click()
    cy.wait(1000)
    cy.location().should(loc => {
      expect(loc.href).to.eq(
        `http://${hostname}/documentation/faq/data-collection-timelines`
      )
    })
    // Confirm user navigates to document
    cy.get('h1').contains('HMDA Data Collection Timelines')
    // Testing category navbar
    cy.get(':nth-child(2) > .breadcrumbs__link').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(url)
    })
  })
  it('Interacts with nested documentation via menu list', () => {
    cy.visit(url)
    cy.get(':nth-child(2) > .menu__list-item-collapsible > .clean-btn').click()
    cy.get(
      ':nth-child(2) > .menu__list > :nth-child(2) > .menu__list-item-collapsible > .clean-btn'
    ).click()
    cy.get(
      ':nth-child(2) > .menu__list > .theme-doc-sidebar-item-link > .menu__link'
    ).click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(
        `http://${hostname}/documentation/publications/aggregate-disclosure-reports/ad-changes`
      )
    })
  })
  it('Interacts with nested documentation via category selector', () => {
    cy.visit(url)
    cy.get(':nth-child(2) > .menu__list-item-collapsible > .menu__link').click()
    cy.get(':nth-child(2) > .card').click()
    cy.get('.card').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(
        `http://${hostname}/documentation/publications/aggregate-disclosure-reports/ad-changes`
      )
    })
  })
  it('Interacts with table of contents on single doc', () => {
    cy.visit(url)
    cy.get(':nth-child(1) > .card').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .table-of-contents__link').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(
        `http://${hostname}/documentation/faq/data-collection-timelines#annual-filing-period-dates`
      )
    })
    cy.get('#annual-filing-period-dates').contains('Annual Filing Period Dates')
  })
  it.skip('Navigates to Data Browser API and ensure CSV response image has loaded', () => {
    cy.visit(url)
    cy.get(':nth-child(4) > .menu__list-item-collapsible > .clean-btn').click()
    cy.get(':nth-child(4) > .menu__list > :nth-child(5) > .menu__link').click()
    cy.get(
      '.img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module'
    )
      .should('be.visible')
      .and($img => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect(
          $img[0].naturalWidth,
          'image has natural width'
        ).to.be.greaterThan(0)
      })
  })
})
