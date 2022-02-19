const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
// tablet & phone categories
let sideMenu = document.querySelector("#side-menu");
let sideBar = document.querySelector(".side-bar");

sideMenu.onclick = () => {
  sideMenu.classList.toggle("fa-times");
  sideBar.classList.toggle("active");
};

let categoryBtn = document.querySelectorAll(".category .btn-categorie");

categoryBtn.forEach((btn) => {
  btn.onclick = () => {
    categoryBtn.forEach((remove) => remove.classList.remove("active"));
    btn.classList.add("active");
  };
});

let typeBtn = document.querySelectorAll(".type .btn-categorie");

typeBtn.forEach((btn) => {
  btn.onclick = () => {
    typeBtn.forEach((remove) => remove.classList.remove("active"));
    btn.classList.add("active");
  };
});
// ===================accordeon menu left====================//
const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_btns.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

document.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
  }
};
