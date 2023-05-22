////////////////////////////////////////////////////////////////
// const words = [`Hygienic`];
const words = ["Safe", "Protected", "Hygienic", "Sanitary"];
// const words = ["Hygienic", "Sanitary", "Protected"];
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

//////////////////////////////////////////////////////////////////

// // JavaScript to handle carousel functionality
// const carousel = document.querySelector(".carousel");
// const row = carousel.querySelector(".row-carousel");

// // Button event listeners
// document.querySelector(".prev-btn").addEventListener("click", () => {
//   slideCarousel("left");
// });

// document.querySelector(".next-btn").addEventListener("click", () => {
//   slideCarousel("right");
// });

// function slideCarousel(direction) {
//   const cardWidth = carousel.querySelector(".col-4-carousel").offsetWidth;
//   const cardMargin = parseInt(
//     window.getComputedStyle(carousel.querySelector(".col-4-carousel"))
//       .marginRight
//   );
//   const rowWidth = (cardWidth + cardMargin) * row.childElementCount;
//   const visibleCards = Math.floor(
//     carousel.offsetWidth / (cardWidth + cardMargin)
//   );
//   const shiftAmount =
//     direction === "left" ? cardWidth + cardMargin : -(cardWidth + cardMargin);

//   row.style.transform = `translateX(${shiftAmount}px)`;

//   if (direction === "left") {
//     row.appendChild(row.firstElementChild);
//   } else {
//     row.prepend(row.lastElementChild);
//   }

//   row.addEventListener(
//     "transitionend",
//     () => {
//       row.style.transition = "none";
//       row.style.transform = "translateX(0)";

//       if (direction === "left") {
//         row.prepend(row.lastElementChild);
//       } else {
//         row.appendChild(row.firstElementChild);
//       }

//       setTimeout(() => {
//         row.style.transition = "transform 0.5s";
//       });
//     },
//     { once: true }
//   );
// }

// ------------------------- for explore now ---------------------
document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault();

  // Scroll to the target section
  const targetSection = document.querySelector("#section");
  targetSection.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////////////////////////////////////////////
