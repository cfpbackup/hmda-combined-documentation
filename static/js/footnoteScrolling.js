/**
 * Footnote Navigation Fix
 *
 * Previous Issue: When a user selected a footnote link, they were navigated to the footnote,
 * but it was hidden behind the fixed navbar.
 *
 * Resolution: This script adds additional Y-offset when clicking a footnote link.
 * It ensures the footnote is fully visible by scrolling to a position that accounts for the navbar height.
 */

document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.querySelector('.main-wrapper') || document.body
  const navbarHeight = 110

  mainContent.addEventListener('click', function (e) {
    if (
      e.target.tagName === 'A' &&
      (e.target.href.includes('#user-content-fn') ||
        e.target.href.includes('#user-content-fnref'))
    ) {
      e.preventDefault()

      const targetId = e.target.getAttribute('href').split('#')[1]
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const offsetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight
        window.scrollTo(0, offsetPosition)
      }
    }
  })
})
