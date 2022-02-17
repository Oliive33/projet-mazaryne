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
      spaceBetween: 80,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== Zoom img swiper ===============*/
const lightboxBg = document.createElement("div");
lightboxBg.id = "lightboxBg";
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll(".zoom-img");
images.forEach((images) => {
  images.addEventListener("click", (e) => {
    lightboxBg.classList.add("active");
    const lightboxImg = document.createElement("img");
    lightboxImg.src = images.src;
    lightboxImg.id = "lightboxImg";
    while (lightboxBg.firstChild) {
      lightboxBg.removeChild(lightboxBg.firstChild);
    }
    lightboxBg.appendChild(lightboxImg);
  });
});
lightboxBg.addEventListener("click", (e) => {
  lightboxBg.classList.remove("active");
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
navLink = document.querySelector(".nav-below-link");
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
    navHeader.style.background = "white";
    navIcons.style.visibility = "visible";
    navBtn.style.visibility = "visible";
    navSearch.style.visibility = "visible";
    navTrigger.style.visibility = "visible";
    navbar.style.height = "190px";
    navElements.style.height = "90px";
  } else {
    navbar.style.top = "0px";
    navTitle.style.color = "white";
    navLink.style.color = "white";
    navLinks.style.color = "white";
    navFemme.style.color = "white";
    navHomme.style.color = "white";
    navJournal.style.color = "white";
    navbar.style.background = "transparent";
    navHeader.style.background = "transparent";
    navIcons.style.visibility = "hidden";
    navBtn.style.visibility = "hidden";
    navSearch.style.visibility = "hidden";
    navTrigger.style.visibility = "hidden";
    navbar.style.height = "150px";
    navElements.style.height = "150px";
  }
});
