const imageContainer = document.querySelector(".image-container");
const dotContainer = document.querySelector(".dot-container");

async function fetchImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10",
      {
        method: "GET",
      }
    );

    const imageList = await response.json();

    if (imageList && imageList.length > 0) {
      displayImage(imageList);

      // Call the sliding functionality after images are displayed
    }
  } catch (error) {
    console.log(error);
  }
}

function displayImage(images) {
  imageContainer.innerHTML = images
    .map(
      (item) =>
        `<div class="slide"><img src=${item.download_url} alt=${item.id}></div>`
    )
    .join(" ");

  dotContainer.innerHTML = images
    .map(
      (item, index) =>
        `<div class="dot ${
          index === 0 ? "active" : ""
        }" data-slide=${index}></div>`
    )
    .join(" ");
}

fetchImages();
setTimeout(() => {
  const allSlides = document.querySelectorAll(".slide");
  const allDots = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".btn-nxt");
  const prevBtn = document.querySelector(".btn-prev");
  let currentSlide = 0;

  function changeActiveDot(currentSlide) {
    allDots.forEach((dotItem) => dotItem.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${currentSlide}"]`)
      .classList.add("active");
  }

function changeSlidePosition(currentSlide) {
  allSlides.forEach((slideItem, index) => {
    const translateXValue = 100 * (index - currentSlide);
    slideItem.style.transform = `translateX(${translateXValue}%)`;

   
  });
}
  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide > allSlides.length - 1) {
      currentSlide = 0;
    }
    changeActiveDot(currentSlide);
    changeSlidePosition(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = allSlides.length - 1;
    }
    changeActiveDot(currentSlide);
    changeSlidePosition(currentSlide);
  });
  
  dotContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {
      currentSlide=event.target.dataset.slide;
    }
     changeActiveDot(currentSlide);
     changeSlidePosition(currentSlide); 
  });
}, 1000);
