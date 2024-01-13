import Swiper from "swiper";
import "swiper/css";

// ------------------------
// SELECTORS
// ------------------------

const hamburgerButton = document.querySelector(".btn-toggler");
const icons = document.querySelectorAll(".btn-toggler > .icon");
const navBar = document.querySelector(".primary-nav");
const overlay = document.querySelector(".overlay");

const buttonContainer = document.querySelectorAll(".slider-links");
const mobileButtonContainer = document.querySelector(".mobile-slider-links");
const mobileSLideLinks = mobileButtonContainer.querySelectorAll(".link-name");

const searchButton = document.querySelector(".search-icon");
const searchModel = document.querySelector(".search-modal");
const cancelSearch = document.querySelector(".cancel-button");

const swiperNext = document.querySelector(".swiper-next");
const swiperPrev = document.querySelector(".swiper-prev");
// ------------------------
// MOBILE MENUE TOGGLER
// ------------------------

function handleClickButton() {
  icons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
  navBar.toggleAttribute("data-visible");
  overlay.classList.toggle("show-overlay");
  document.body.classList.toggle("overflow");
}

overlay.addEventListener("click", handleClickButton);

hamburgerButton.addEventListener("click", handleClickButton);

function toggleModel() {
  document.body.classList.toggle("prevent-scrolling");
  searchModel.classList.toggle("show-search");
}

searchButton.addEventListener("click", toggleModel);

cancelSearch.addEventListener("click", toggleModel);

// ------------------------
// Slider
// ------------------------

const swiperConfig = {
  // to disable dragging
  allowTouchMove: false,
};

const swiper = new Swiper(".hero-swiper", swiperConfig);

function moveSlides(index) {
  swiper.slideTo(index, 500);
}

buttonContainer.forEach((buttons) =>
  buttons.addEventListener("click", (e) => {
    const target = e.target.closest(".btn");

    if (!target) return;

    const targetIndex = target.dataset.index;
    moveSlides(targetIndex);
  })
);

mobileButtonContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".link-name");

  if (!target) return;

  const targetIndex = target.dataset.index;

  mobileSLideLinks.forEach((link) => {
    if (link.dataset.index === targetIndex) {
      link.classList.add("highlight");
    } else {
      link.classList.remove("highlight");
    }
  });

  moveSlides(targetIndex);
});

// ------------------------
// Section Slider
// ------------------------

const sectionSliderConfig = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
};

const sectionSlider = new Swiper(".section-swiper", sectionSliderConfig);

// ------------------------
// Dark mode
// ------------------------

// const switchMode = document.querySelector(".moon-icon");
// let darkMode = localStorage.getItem("darkMode");
// const body = document.body;

// if (darkMode === "enabled") {
//   enableDarkMode();
// }

// function enableDarkMode() {
//   body.classList.add("dark-mode");
//   localStorage.setItem("darkMode", "enabled");
// }

// function disableDarkMode() {
//   body.classList.remove("dark-mode");
//   localStorage.setItem("darkMode", "disabled");
// }

// switchMode.addEventListener("click", () => {
//   darkMode = localStorage.getItem("darkMode");

//   if (darkMode === "enabled") {
//     disableDarkMode();
//   } else {
//     enableDarkMode();
//   }
// });
