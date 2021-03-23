$(document).ready(function () {
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
      center: [55.15, 61.42],
      zoom: 7,
    });
  }

  // Скрипт для паралакса
  // $(document).scroll(function () {
  //   var pos = $(window).scrollTop();
  //   $(".newsletter").css("background-image", pos * 0.7 + "px");
  // });

  // $(window).on("load resize scroll", function () {
  //   $(".parallax").parlx({
  //     speed: 0.3,
  //     mobile: true,
  //     direction: "vertical",
  //   });
  // });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    console.log("Click");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    console.log($(this).attr("data-href"));
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // $(document).on('keydown', function(event){
  //   if(event.which === 27){
  //     elements.removeClass('modal__overlay--visible');
  //     var home = $.Event("keydown", {keyCode: 36});
  //       $(document).trigger(home);
  //       event.preventDefault();
  //       return false;
  //   }
});
