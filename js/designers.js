// let suggestions = [
//   "Balenciaga",
//   "Bottega Veneta",
//   "Burberry",
//   "Céline",
//   "Chanel",
//   "Dolce & Gabbana",
//   "Dior",
//   "Fendi",
//   "Giorgio Armani",
//   "Gucci",
//   "Hermès",
//   "Louis Vuitton",
//   "Prada",
//   "Ralph Lauren",
//   "Salvatore ferragamo",
//   "Tod's",
//   "Tom Ford",
//   "Valentino",
//   "Versace",
//   "Vera Wang",
//   "Yves Saint Laurent",
// ];
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;
// // if user press any key and release
// inputBox.onkeyup = (e) => {
//   let userData = e.target.value; //user enetered data
//   let emptyArray = [];
//   if (userData) {
//     icon.onclick = () => {
//       webLink = `https://www.google.com/search?q=${userData}`;
//       linkTag.setAttribute("href", webLink);
//       linkTag.click();
//     };
//     emptyArray = suggestions.filter((data) => {
//       //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     });
//     emptyArray = emptyArray.map((data) => {
//       // passing return data inside li tag
//       return (data = `<li>${data}</li>`);
//     });
//     searchWrapper.classList.add("active"); //show autocomplete box
//     showSuggestions(emptyArray);
//     let allList = suggBox.querySelectorAll("li");
//     for (let i = 0; i < allList.length; i++) {
//       //adding onclick attribute in all li tag
//       allList[i].setAttribute("onclick", "select(this)");
//     }
//   } else {
//     searchWrapper.classList.remove("active"); //hide autocomplete box
//   }
// };
// function select(element) {
//   let selectData = element.textContent;
//   inputBox.value = selectData;
//   icon.onclick = () => {
//     webLink = `https://www.google.com/search?q=${selectData}`;
//     linkTag.setAttribute("href", webLink);
//     linkTag.click();
//   };
//   searchWrapper.classList.remove("active");
// }
// function showSuggestions(list) {
//   let listData;
//   if (!list.length) {
//     userValue = inputBox.value;
//     listData = `<li>${userValue}</li>`;
//   } else {
//     listData = list.join("");
//   }
//   suggBox.innerHTML = listData;
// }
// letters array
filterObjects("all");

function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("box-brand");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
