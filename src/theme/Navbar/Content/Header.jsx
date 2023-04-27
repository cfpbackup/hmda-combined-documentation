import React from 'react'

import '../uswds/css/styles.css'
import FFIEC_Logo from './images/ffiec-logo.svg'
import CloseBtn from '../uswds/img/usa-icons/close.svg'

import BannerUSA from './BannerUSA'


const Header = () => {
  return (
    <div>
      <BannerUSA />
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic" role="banner">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="logo">
              <a className="nav-link" href="/" aria-label="Home">
                <FFIEC_Logo className='logo' />
                <span className="usa-logo__text">Home Mortgage Disclosure Act</span>
              </a>
            </div>
            <button type="button" className="usa-menu-btn">Menu</button>
          </div>
          <nav className="usa-nav">
            <button type="button" className="usa-nav__close">
              <CloseBtn />
            </button>
            <ul class="usa-nav__primary usa-accordion">
              <li class="usa-nav__primary-item">
                <a class="usa-nav__link usa-current" href="/">Home</a>
              </li>
              <li class="usa-nav__primary-item">
                <a class="usa-nav__link" rel="noopener noreferrer" href="/filing/2023/">Filing</a>
              </li>
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="Data Browser">
                  <span>Data Browser</span>
                </button>
                <ul id="Data Browser" class="usa-nav__submenu" hidden>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-browser/">Overview</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-browser/data/2021">Datasets</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-browser/maps/2021">Maps</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-browser/graphs/quarterly/">Graphs</a>
                  </li>
                </ul>
              </li>
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="Data Publication">
                  <span>Data Publication</span>
                </button>
                <ul id="Data Publication" class="usa-nav__submenu" hidden>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/">Overview</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <div class="subMenuHeading">Dynamic Datasets</div>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/modified-lar/">Modified LAR</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/dynamic-national-loan-level-dataset/">Dynamic Dataset</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <div class="subMenuHeading">Static Datasets</div>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/snapshot-national-loan-level-dataset/">Snapshot Datasets</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/one-year-national-loan-level-dataset/">One-Year Datasets</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/three-year-national-loan-level-dataset/">Three-Year Datasets</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/aggregate-reports/">MSA/MD Datasets</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/data-publication/disclosure-reports/">Disclosure Reports</a>
                  </li>
                </ul>
              </li>
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="Tools">
                  <span>Tools</span>
                </button>
                <ul id="Tools" class="usa-nav__submenu" hidden>
                  <li class="usa-nav__submenu-item">
                    <a href="/tools/">Overview</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/tools/rate-spread">Rate Spread</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/tools/lar-formatting">LAR Formatting</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/tools/file-format-verification">File Verification</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/tools/check-digit">Check Digit</a>
                  </li>
                </ul>
              </li>
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="Documentation">
                  <span>Documentation</span>
                </button>
                <ul id="Documentation" class="usa-nav__submenu" hidden>
                  <li class="usa-nav__submenu-item">
                    <a href="/documentation/">FAQs</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="https://cfpb.github.io/hmda-platform/#hmda-api-documentation" target="_blank">Developer APIs</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="/updates-notes">Updates</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
