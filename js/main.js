var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 100,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });