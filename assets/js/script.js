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

  const actionSliderInit = document.querySelector(".aboutSlider");
  var slides = document.querySelectorAll(".about-slide");
  slides.forEach((slide, index) => {
    if (index % 2 === 0) {
      slide.classList.add("even");
    } else {
      slide.classList.add("odd");
    }
  });

  if (actionSliderInit) {
    const sliderAction = new Swiper(".aboutSlider", {
      slidesPerView: 1,
      spaceBetween: 10,
      watchOverflow: true,
      loop: true,
      //   autoplay: {
      //     delay: 0,
      //     disableOnInteraction: false,
      //   },
      //   speed: 3000,
      breakpoints: {
        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1023: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      },
    });
  }
  // функція для аккордеону

  const accordionItemsProduct = document.querySelectorAll(".accord-item");
  if (accordionItemsProduct) {
    accordionItemsProduct.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    });
  }

  // функція для табів на сторінці галерея

  const galleryNameImg = document.querySelectorAll(".gallery-image");
  const galleryTabsBtn = document.querySelectorAll(
    ".gallery__container_btns-btn"
  );

  if (galleryTabsBtn) {
    function showImage(imageSlug) {
      galleryNameImg.forEach((image) => {
        let imageDataSlug = image.dataset.slug;
        if (imageDataSlug === imageSlug) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }

    function activeTabs() {
      galleryTabsBtn.forEach((tab) => {
        let tabsSlug = tab.dataset.slug;
        let hasImage = false;

        galleryNameImg.forEach((image) => {
          let imageDataSlug = image.dataset.slug;
          if (imageDataSlug === tabsSlug) {
            hasImage = true;
            return;
          }
        });

        if (hasImage || tabsSlug === "all") {
          tab.style.display = "flex";
        } else {
          tab.style.display = "none";
        }
        if (tab.length < 2) {
          galleryTabsBtn.classList.add("active-tab");
        } else {
          tab.addEventListener("click", () => {
            galleryTabsBtn.forEach((tabsBtn) =>
              tabsBtn.classList.remove("active-tab")
            );
            tab.classList.add("active-tab");
            if (tabsSlug === "all" || !tabsSlug) {
              galleryNameImg.forEach((image) => {
                image.style.display = "block";
              });
            } else {
              showImage(tab.dataset.slug);
            }
          });
        }
      });
    }

    activeTabs();
  }
});
