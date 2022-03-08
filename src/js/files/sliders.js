/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

const planSwiper = () => {
  const swiper = document.querySelector(".plan__swiper");
  new Swiper(swiper, {
    modules: [Pagination],
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 500,
    speed: 400,
    grabCursor: true,

    effect: "flip",

    pagination: {
      el: ".swiper-pagination",
      bulletClass: "plan__swiper-pag-bullet",
      bulletActiveClass: "plan__swiper-pag-bullet--active",
      clickable: false,
    },

    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
};

const reviewSwiper = () => {
  const swiper = document.querySelector(".reviews__swiper");
  new Swiper(swiper, {
    modules: [Pagination, Navigation],
    autoHeight: true,
    spaceBetween: 50,
    speed: 400,
    grabCursor: true,
    slidesPerView: "auto",

    effect: "flip",

    slideActiveClass: "reviews__swiper-slide--active",

    pagination: {
      el: ".swiper-pagination",
      bulletClass: "reviews__swiper-pag-bullet",
      bulletActiveClass: "reviews__swiper-pag-bullet--active",
      clickable: false,
    },

    navigation: {
      prevEl: ".reviews__swiper-btn-prev",
      nextEl: ".reviews__swiper-btn-next",
      disabledClass: "reviews__swiper-btn--disabled",
    },
  });
};

// Инициализация слайдеров
function initSliders() {
  if (document.querySelector(".swiper")) {
    planSwiper();
    reviewSwiper();
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
