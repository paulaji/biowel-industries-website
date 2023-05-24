// Get references to the images
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

// Set the initial image sources
const initialImageSources = [
  "images/category-1.png",
  "images/category-2.png",
  "images/category-3.png",
];

// Set the replacement image sources
const replacementImageSources = [
  "figimages/Frame 20.png",
  "figimages/Frame 21.png",
  "figimages/Frame 22.png",
];

let currentIndex = 0; // Tracks the current index of the replacementImageSources array
let direction = 1; // Represents the direction of the image switch

function switchImages() {
  // Replace the image sources based on the current index
  image1.src =
    currentIndex % 2 === 0
      ? initialImageSources[0]
      : replacementImageSources[0];
  image2.src =
    currentIndex % 2 === 0
      ? initialImageSources[1]
      : replacementImageSources[1];
  image3.src =
    currentIndex % 2 === 0
      ? initialImageSources[2]
      : replacementImageSources[2];

  // Update the current index and direction
  currentIndex += direction;

  // Reverse the direction if reaching the start or end of the replacementImageSources array
  if (currentIndex === 0 || currentIndex === 2) {
    direction *= -1;
  }
}

// Call the switchImages function every 3 seconds
setInterval(switchImages, 5000);
