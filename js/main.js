// Scroll up
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Mega menu navbar below
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};
//Apparition Pop up user
const userConnection = document.querySelector(".user-connection");
const formConnection = document.querySelector(".form-connection");
function UserPopUp() {
  userConnection.addEventListener("click", () => {
    if (formConnection.classList.contains("apparition")) {
      formConnection.classList.remove("apparition");
    } else {
      formConnection.classList.toggle("apparition");
    }
  });
}
UserPopUp();
// Btn vendre  effet hover nav below
function btnVendreHover() {
  document.getElementById("button").addEventListener("mousemove", (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  });
}
btnVendreHover();

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
