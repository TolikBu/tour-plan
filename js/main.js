const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "coverflow",

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
  });
};