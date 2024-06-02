document.addEventListener("DOMContentLoaded", function () {
  const htmlElement = document.querySelector("html");

  const burgerMenu = document.querySelector(".burgerBtn");
  const headerNav = document.querySelector(".header__nav");
  const navLinks = document.querySelectorAll("nav a");

  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });

  const stikyElement = document.querySelectorAll(".advantages__scrolling_item");
  const resizeStikyElement = () => {
    windowInnerWidth = window.innerWidth; // Оновлення глобальної константи

    if (windowInnerWidth >= 1024 && stikyElement) {
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(100px + ${50 * index}px)`;
      });
    } else if (windowInnerWidth <= 1023 && stikyElement) {
      stikyElement.forEach((stiky, index) => {
        stiky.style.top = `calc(50px + ${50 * index}px)`;
      });
    }
  };
  resizeStikyElement();
  window.addEventListener("resize", resizeStikyElement);

  //функція для слайдеру з фото на весь екран

  const actionSliderInit = document.querySelector(".gallerySlider");
  if (actionSliderInit) {
    const sliderAction = new Swiper(".gallerySlider", {
      slidesPerView: 1,
      spaceBetween: 10,
      watchOverflow: true,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 3000,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1023: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
      },
    });
  }
});
