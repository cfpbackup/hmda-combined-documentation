function handleScroll() {
    const headings = document.querySelectorAll('.docs-version-2024 h2');
    const links = document.querySelectorAll('.docs-version-2024 .menu__link')
    const overview = document.querySelector(`.menu__link[href="/documentation/fig/overview"]`)
    


    headings.forEach((heading) => {
      const link = document.querySelector(`.menu__link[href="#${heading.id}"]`)

      if (link) {
        if (heading.id && isElementInViewport(heading)) {
          links.forEach((activeLink) => {
            activeLink.classList.remove('menu__link--active');
          })
          link.classList.add('menu__link--active');
        }
      } else if( window.scrollY == 0 ) {
        links.forEach((activeLink) => {
          activeLink.classList.remove('menu__link--active');
        })
        overview.classList.add('menu__link--active');
      }
    });
  }
  
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  document.addEventListener('scroll', handleScroll);
  document.addEventListener('DOMContentLoaded', handleScroll);