
const slider = document.querySelector(".main__slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll(".slide"));
const slideCount = slides.length;
let slideIndex = 0;
const mediaQuery = window.matchMedia("(max-width: 743px)");

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}


function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  if (mediaQuery.matches) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }
  // else {
  //   slide.style.display = "block";
  // }
}

// Инициализация слайдера
updateSlider();

// const resizeObserver = new ResizeObserver((entries) => {
//   if(mediaQuery.matches) return;
//   checkSlidesVisibility()

//   console.log("Slide visible");
// });

// resizeObserver.observe(document.body);

// function checkSlidesVisibility() {
//   slides.forEach(slide => {
//     if(slide.style.display === 'none') {
//       slide.style.display = 'block'
//     }
//   })
// }