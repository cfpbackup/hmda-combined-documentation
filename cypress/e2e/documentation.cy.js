const { HOST } = Cypress.env()

let url = `${HOST}/documentation/category/frequently-asked-questions`

describe('General Checks', () => {
  it('Government banner is displayed and image is visible', () => {
    cy.visit(url)
    cy.get('.usa-banner__header').then(banner => {
      Cypress.dom.isVisible(banner)
    })
    // Images loads
    cy.get('.usa-banner__header-flag')
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
    cy.visit(`${HOST}/documentation/`)
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
        `${HOST}/documentation/faq/data-collection-timelines`
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
        `${HOST}/documentation/publications/aggregate-disclosure-reports/ad-changes`
      )
    })
  })
  it('Interacts with nested documentation via category selector', () => {
    cy.visit(url)
    cy.get(':nth-child(2) > .menu__list-item-collapsible > .menu__link').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .card').click()
    cy.wait(1000)
    cy.get('.card').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(
        `${HOST}/documentation/publications/aggregate-disclosure-reports/ad-changes`
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
        `${HOST}/documentation/faq/data-collection-timelines#filing-instructions-guide-fig`
      )
    })
    cy.get('#annual-filing-period-dates').contains('Annual Filing Period Dates')
  })
  it.skip('Navigates to Data Browser API and ensure CSV response image has loaded', () => {
    cy.visit(url)
    cy.get(':nth-child(4) > .menu__list-item-collapsible > .clean-btn').click()
    cy.get(':nth-child(4) > .menu__list > :nth-child(5) > .menu__link').click()
    cy.wait(1000)
    cy.get(':nth-child(4) > .table-of-contents__link').click()
    cy.wait(1000)
    cy.get('img[src*="DataBrowserCsvExample.png"]')
      // .should('be.visible')
      .should($img => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect(
          $img[0].naturalWidth,
          'image has natural width'
        ).to.be.greaterThan(0)
      })
  })
})

describe('Algolia user interactions', () => {
  beforeEach(() => {
    cy.viewport(1025, 1000)
  })

  it('Opens Algolia search box and looks up documentation on HMDA Filing', () => {
    cy.visit(url)
    cy.get('.DocSearch').click()
    cy.get('#docsearch-input').type('hmda filing')
    cy.get('#docsearch-item-0 > a').contains('HMDA Filing')
    cy.get('#docsearch-item-0 > a').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${HOST}/documentation/faq/filing-faq`)
    })
    cy.get('h1').contains('HMDA Filing')
  })
  it('Visits sub section of the HMDA Filing document', () => {
    cy.visit(url)
    cy.get('.DocSearch').click()
    cy.get('#docsearch-input').type('hmda filing')
    cy.get('#docsearch-item-3 > a').contains('Submission')
    cy.get('#docsearch-item-3 > a').click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${HOST}/documentation/faq/filing-faq#submission`)
    })
    cy.get('#submission').contains('Submission')
  })
  it('Visit the more results page provived by Algolia', () => {
    cy.visit(url)
    cy.get('.DocSearch').click()
    cy.get('#docsearch-input').type('hmda filing')
    cy.get('.DocSearch-HitsFooter > a').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > [class^=searchResultItemHeading] a').first().click()
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${HOST}/documentation/faq/filing-faq`)
    })
    cy.get('h1').contains('HMDA Filing')
  })
})
