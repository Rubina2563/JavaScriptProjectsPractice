const starContent = document.querySelector(".starContent");
const allStars = document.querySelectorAll(".fa-star");
let currentTotalStar = -1;

allStars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", mouseHover);
  star.addEventListener("mouseleave", mouseLeave);
  star.addEventListener("click", mouseClicked);
});

function mouseHover(event) {
  let currentStarsHover = event.target.dataset.rating;
  if (!currentStarsHover) return;
  else updateStars(currentStarsHover);
}

function mouseLeave() {
  updateStars(currentTotalStar);
}

function updateStars(currentRatingValue) {
  allStars.forEach((star, i) => {
    if (i < currentRatingValue) {
      star.classList.replace("fa-regular", "fa-solid"); // Filled star
    } else {
      star.classList.replace("fa-solid", "fa-regular"); // Empty star
    }
  });
  starContent.textContent = `Star selected: ${currentRatingValue}`;
}

function mouseClicked(event) {
  let currentStarsHover = event.target.dataset.rating;
  currentTotalStar = currentStarsHover;
  updateStars(currentTotalStar);
}
