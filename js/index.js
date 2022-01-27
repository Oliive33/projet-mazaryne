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
