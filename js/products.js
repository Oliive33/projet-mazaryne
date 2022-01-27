const container = document.querySelector(".box-container");
const loading = document.querySelector(".loading");
let index = 15;

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  //   console.log(scrollTop, scrollHeight, clientHeight);

  if (clientHeight + scrollTop - 20) {
    // console.log("Création !");
    loading.classList.add("visible");
    addStuff(3);
  }
});

function showLoading() {
  loading.classList.add("show");

  setTimeout(1000);
}
function addStuff(nb) {
  for (let i = 0; i < nb; i++) {
    index++;
    const newItem = document.createElement("div");
    newItem.className = "box";
    const newImg = document.createElement("img");
    newImg.src = `../ressources/images/${index}`;
    newItem.appendChild(newImg);
    container.appendChild(newItem);
  }
  loading.classList.remove("visible");
}
