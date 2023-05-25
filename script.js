////////////////////////////////////////////////////////////////
const words = [`"Hygienic"`];
let index = 0;

function animateWords() {
  let wordElement = document.getElementById("word");
  const currentWord = words[index];
  const nextWord = words[(index + 1) % words.length];

  wordElement.textContent = currentWord;

  setTimeout(() => {
    wordElement.textContent = nextWord;
    index = (index + 1) % words.length;
    animateWords();
  }, 2500);
}

animateWords();

/////////////////////////////////////////////////////
//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
////////////////////////////////////////////////////
//changing names to 1, 2, 3, 4 when screensize is small
// Get the span elements
var hkButton = document.querySelector(".hk-button");
var dButton = document.querySelector(".d-button");
var kButton = document.querySelector(".k-button");
var lButton = document.querySelector(".l-button");

// Function to change the text content
function updateTextContent() {
  if (window.matchMedia("(max-width: 950px)").matches) {
    hkButton.textContent = "1";
    dButton.textContent = "2";
    kButton.textContent = "3";
    lButton.textContent = "4";
  } else {
    hkButton.textContent = "housekeeping";
    dButton.textContent = "disinfection";
    kButton.textContent = "kitchenclean";
    lButton.textContent = "laundrycare";
  }
}

// Initial call to update text content
updateTextContent();

// Add resize event listener to update text content
window.addEventListener("resize", updateTextContent);
///////////////////////////////////////////////////
//navbar collapse
var MenuItems = document.getElementById("MenuItemsNB");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
////////////////////////////////////////////////////