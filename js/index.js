/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 20,
  loop: "true",
  slidesPerView: "auto",
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// change height header homepage
navbar = document.getElementById("nav-fix");
navElements = document.getElementById("nav-top");
navTitle = document.querySelector(".nav-top h1");
navIcons = document.querySelector(".icons-home");
navBtn = document.querySelector(".btn-vendre");
navSearch = document.querySelector(".search-box");
navHeader = document.querySelector(".header");
navTrigger = document.querySelector(".header .mobile-menu-trigger");
navLink = document.querySelector(".exception-link");
navLinks = document.querySelector(".design-link");
navFemme = document.querySelector(".femme-link");
navHomme = document.querySelector(".homme-link");
navJournal = document.querySelector(".journal-link");

window.addEventListener("scroll", function () {
  const scroll = this.document.documentElement.scrollTop;

  if (scroll > 200) {
    navbar.style.top = "0px";
    navTitle.style.color = "black";
    navLink.style.color = "black";
    navLinks.style.color = "black";
    navFemme.style.color = "black";
    navHomme.style.color = "black";
    navJournal.style.color = "black";
    navbar.style.background = "white";
    navLink.style.textShadow = "none";
    navLinks.style.textShadow = "none";
    navFemme.style.textShadow = "none";
    navHomme.style.textShadow = "none";
    navJournal.style.textShadow = "none";
    navbar.style.boxShadow = "0px 3px 9px 0px rgba(143, 143, 143, 0.45)";
    navHeader.style.background = "white";
    navIcons.style.visibility = "visible";
    navBtn.style.visibility = "visible";
    navSearch.style.visibility = "visible";
    navTrigger.style.visibility = "visible";
    navbar.style.height = "160px";
    navElements.style.height = "70px";
    navbar.style.transition = "all 0.1s ease";
  } else {
    navbar.style.top = "0px";
    navTitle.style.color = "white";
    navLink.style.color = "white";
    navLinks.style.color = "white";
    navFemme.style.color = "white";
    navHomme.style.color = "white";
    navJournal.style.color = "white";
    navLink.style.textShadow = "1px 0px 3px rgba(0,0,0,0.4)";
    navLinks.style.textShadow = "1px 0px 3px rgba(0,0,0,0.4)";
    navFemme.style.textShadow = "1px 0px 3px rgba(0,0,0,0.4)";
    navHomme.style.textShadow = "1px 0px 3px rgba(0,0,0,0.4)";
    navJournal.style.textShadow = "1px 0px 3px rgba(0,0,0,0.4)";
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
    navHeader.style.background = "transparent";
    navIcons.style.visibility = "hidden";
    navBtn.style.visibility = "hidden";
    navSearch.style.visibility = "hidden";
    navTrigger.style.visibility = "hidden";
    navbar.style.height = "140px";
    navElements.style.height = "140px";
    navbar.style.transition = "all 0.1s ease";
  }
});
