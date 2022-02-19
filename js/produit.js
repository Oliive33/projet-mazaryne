const imgs = document.querySelectorAll(".img-select .shoe-img");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
    console.log(imgItem);
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}
