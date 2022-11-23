const swiper = new Swiper(".swiper", {
  // Optional paraslider
  loop: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});
