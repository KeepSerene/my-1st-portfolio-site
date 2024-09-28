const sectionEls = document.querySelectorAll("[data-section]");

/**
 * The function highlights the navigation link
 * corresponding to the section currently visible on the page. It iterates
 * through each section, checks if the section is in the viewport based on the
 * scroll position, and updates the navigation link by adding or removing
 * the 'highlighted-link' class (see: 'header.css').
 */

export default function activateNavLinkOnScroll() {
  const currentScrollPos = window.scrollY;

  sectionEls.forEach((secElem) => {
    const sectionHeight = secElem.offsetHeight,
      sectionTopOffset = secElem.offsetTop - 58,
      sectionID = secElem.getAttribute("id"),
      correspondingNavLinkEl = document.querySelector(
        ".nav__menu a[href*=" + sectionID + "]"
      );

    if (
      currentScrollPos > sectionTopOffset &&
      currentScrollPos <= sectionTopOffset + sectionHeight
    ) {
      correspondingNavLinkEl.classList.add("highlighted-link");
    } else {
      correspondingNavLinkEl.classList.remove("highlighted-link");
    }
  });
}
