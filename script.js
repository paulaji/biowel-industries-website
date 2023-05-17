const words = ["Safe", "Hygienic", "Protected", "Sanitary"];
let index = 0;

function animateWords() {
  const wordElement = document.getElementById("word");
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
