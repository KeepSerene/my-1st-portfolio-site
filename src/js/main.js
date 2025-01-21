// CSS module imports
import "../css/style.css";
import "../css/components/header.css";
import "../css/components/home.css";
import "../css/components/about.css";
import "../css/components/services.css";
import "../css/components/projects.css";
import "../css/components/contact.css";
import "../css/components/footer.css";
import "../css/utils.css";

// JS module imports
import handleThemeToggle from "./theme";
import activateNavLinkOnScroll from "./active-nav-link-on-scroll";
import renderProjects from "./projects";
import sendEmail from "./email-js";

/*================== THEME =================== */
handleThemeToggle();

/*=============== SHOW MOBILE MENU ===============*/
const mobileMenuEl = document.querySelector("[data-mobile-menu]");
const hamburgerIconEl = document.querySelector("[data-hamburger-icon]");
const crossIconEl = document.querySelector("[data-cross-icon]");

if (hamburgerIconEl) {
  hamburgerIconEl.addEventListener("click", () => {
    mobileMenuEl.classList.add("show-menu");
  });
}

/*=============== HIDE MOBILE MENU ===============*/
const mobileNavLinkEls = document.querySelectorAll("[data-mobile-nav-link]");

if (crossIconEl) {
  crossIconEl.addEventListener("click", () =>
    mobileMenuEl.classList.remove("show-menu")
  );
}

mobileNavLinkEls.forEach((linkEl) =>
  linkEl.addEventListener("click", () =>
    mobileMenuEl.classList.remove("show-menu")
  )
);

/*=============== HEADER SHADOW ===============*/
const headerEl = document.getElementById("header");

// When we scroll past 50 viewport height, cast a header-shadow
window.addEventListener("scroll", function () {
  this.scrollY >= 50
    ? headerEl.classList.add("header-shadow")
    : headerEl.classList.remove("header-shadow");
});

/*================ HIGHLIGHT NAV-LINK ON SCROLL =============*/
window.addEventListener("scroll", activateNavLinkOnScroll);

/*=================== CONTACT FORM ============================*/
const contactFormEl = document.querySelector("[data-contact-form]");
contactFormEl.addEventListener("submit", sendEmail);

/*====================== PROJECTS ========================*/
renderProjects();

/*============= UPDATE FOOTER COPYRIGHT YEAR ===============*/
const copyrightYearEl = document.querySelector("[data-copyright-year]");
copyrightYearEl.innerText = `${new Date().getFullYear()}`;

/*=============== SCROLL TO TOP ARROW ===============*/
const scrollToTopArrowEl = document.querySelector("[data-scroll-to-top-arrow]");

// When we scroll past 350 viewport height, make the scroll-to-top arrow appear
window.addEventListener("scroll", function () {
  this.scrollY >= 350
    ? scrollToTopArrowEl.classList.add("show-scroll-to-top-arrow")
    : scrollToTopArrowEl.classList.remove("show-scroll-to-top-arrow");
});

scrollToTopArrowEl.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*=============== SCROLL TO REVEAL ANIMATIONS ===============*/
// The CDN is loaded in index.html
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true, // Repeats animations
});

scrollReveal.reveal(
  ".home__profile, .about__img-wrapper, .contact__form-wrapper",
  { origin: "right" }
);

scrollReveal.reveal(
  ".home__title, .home__info, .about__wrapper .section__title-1, .about__info, .contact__info, .contact__socials",
  { origin: "left" }
);

scrollReveal.reveal(".services__card, .projects__card", { interval: 100 });
