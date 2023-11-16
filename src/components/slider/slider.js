import Swiper from 'swiper/bundle';

function initSwiper(slider) {
  const sliderParams = JSON.parse(slider.getAttribute('data-slider'));
  const sliderPagination = slider.querySelector('.swiper-pagination');
  const sliderBtnNext = slider.querySelector('.swiper-button-next');
  const sliderBtnPrev = slider.querySelector('.swiper-button-prev'); 

  const swiper = new Swiper(slider, {
    pagination: {
      el: sliderPagination,
    },
    navigation: {
      nextEl: sliderBtnNext,
      prevEl: sliderBtnPrev,
    },
    on: {
      slideChange: function () {
        swiper.slides.forEach(el => el.classList.remove('prevSlide','nextActive','prevActive'))
        swiper.slides[swiper.previousIndex].classList.add('prevSlide')
        swiper.previousIndex < swiper.activeIndex ? swiper.slides[swiper.activeIndex].classList.add('nextActive') : swiper.slides[swiper.activeIndex].classList.add('prevActive')
        setTimeout(() => {
          swiper.slides[swiper.previousIndex].classList.remove('prevSlide')
        }, 300);
      }
    },

    ...sliderParams,
  });
}

const slider = document.querySelector('.js-slider');

slider && initSwiper(slider);

