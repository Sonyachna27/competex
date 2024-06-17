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

  // для блоків що складаються гармошкою

  const stikyElement = document.querySelectorAll(".scrolling_item");
  const resizeStikyElement = () => {
    windowInnerWidth = window.innerWidth; 

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

  const actionSliderInit = document.querySelector(".moveSlider");
  var slides = document.querySelectorAll(".move-slide");
  slides.forEach((slide, index) => {
    if (index % 2 === 0) {
      slide.classList.add("even");
    } else {
      slide.classList.add("odd");
    }
  });

  if (actionSliderInit) {
    const sliderAction = new Swiper(".moveSlider", {
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
  const galleryTabsBtn = document.querySelectorAll( ".gallery__container_btns-btn");

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
        galleryTabsBtn.forEach((tab, index) => {
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

            if (index === 0) {
                tab.classList.add("active-tab");
                if (tabsSlug === "all" || !tabsSlug) {
                    galleryNameImg.forEach((image) => {
                        image.style.display = "block";
                    });
                } else {
                    showImage(tabsSlug);
                }
            }

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
        });
    }

    activeTabs();
}



  //анімація при скролі для картинок
  const imgAnimated = document.querySelectorAll(".double__img-item:nth-of-type(odd) .double__img-item-images img:nth-child(1)");
  const reversImgAnimated = document.querySelectorAll(".double__img-item:nth-of-type(even) .double__img-item-images img:nth-child(1)");
  
  const options = {
	root: document,
	rootMargin: "0px",
	threshold: 0.8,
  };
  
  const callback = function (entries, observer) {
	entries.forEach((entry) => {
	  if (entry.isIntersecting) {
		if (Array.from(imgAnimated).includes(entry.target) && !entry.target.classList.contains("animated")) {
		  entry.target.classList.add("animated");
		} else if (Array.from(reversImgAnimated).includes(entry.target) && !entry.target.classList.contains("reverse-animated")) {
		  entry.target.classList.add("reverse-animated");
		}
	  }
	});
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  
  if (imgAnimated.length > 0) {
	imgAnimated.forEach((item) => observer.observe(item));
  }
  
  if (reversImgAnimated.length > 0) {
	reversImgAnimated.forEach((item) => observer.observe(item));
  }
  
  
// функція для форми, аби підіймався текст при введенні тексту


  const inputFields = document.querySelectorAll('.inputField');
  inputFields.forEach((inputField)=>{
	  const parentElement = inputField.parentNode;
	  const label = parentElement ? parentElement.querySelector('label') : null;
	  if (label) {
		  inputField.addEventListener('input', function() {
			  if (inputField.value.trim() !== '') {
				  label.classList.add('up');
			  } else {
				  label.classList.remove('up');
			  }
		  });
	  }
  }
  );

  const inputs = document.querySelectorAll('.inputField');
inputs.forEach((item=>{
    item.addEventListener('focus', ()=>item.parentNode.classList.add('focused'));
}
));
});
