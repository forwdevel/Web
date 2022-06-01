// For Top-Container
// Implementing a swiper that automatically switches
// the screen after time passes

// [ testing ]

const progress = document.querySelector(".progress");

const swiper = new Swiper(".mySwiper", {
  loop: true,
  loopedSlides: 6,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      progress.classList.remove("animate");
      progress.classList.add("animate");
    },
    slideChangeTransitionStart: function () {
      progress.classList.remove("animate");
    },
    slideChangeTransitionEnd: function () {
      progress.classList.add("animate");
    },
  },
});

// //Implemeting a swiper that switches the screen
// // when text is pressed

// let secondSwiper = [
//       'second-slide1','second-slide2','second-slide3',
//       'second-slide4','second-slide5','second-slide6'
// ]
