import {getElem} from './moduls/inex-filters.js';
import {openReview} from './moduls/review-open.js';
import {openModal} from './moduls/modal.js';

const filters = document.querySelectorAll('.slider__filter-item');
const subMenuArray = document.querySelectorAll('.slider__filter-sub-list');
getElem(filters, subMenuArray);

const sliderPagination = (element, current, count) => {
  element.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    current.text('0' + i);
    count.text('0' + slick.slideCount);
    return false;
  });
}

var her = document.querySelector('.special__list');

var her2 = document.querySelector('.special__number-lenght');


const getSliderLength = (slider, length) => {
  const sliderItem = slider.querySelectorAll('li');
  if (sliderItem.length <= 9) {
    length.innerHTML = '0' + sliderItem.length;
  } else {
    length.innerHTML = sliderItem.length;
  }
};
getSliderLength(her, her2);

// Блок Special, слайдеры внутри слайдера

const $specialItemSliders = $('.special__item-img-wrapper');

$specialItemSliders.each(function() {
  $(this).slick({
    arrows: true,
    draggable: false,
    swipe: false,
    appendArrows: $(this).parents('.special__item').find('.special__item-hover-wrapper'),
    prevArrow: '<button class="special__item-btn arrow-btn special__item-btn--back"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="special__item-btn arrow-btn special__item-btn--next"><span class="visually-hidden">Вперел</span></button>'
  });
  const item = $(this).parents('.special__item').find('.special__item-number');
  const ite = $(this).parents('.special__item').find('.special__item-number1');
  sliderPagination($(this), item, ite);
})

//

// SPECIAL SLIDER
const specialSlider = () => {
  const $slickElement = $('.special__list');
  const $current = $('.special__number-active');
  const $count = $('.special__number-lenght');

  $('.special__list').slick({
    arrows: true,
    appendArrows: $('.special__btn-wrapper'),
    nextArrow: '<button class="special__btn arrow-btn special__btn--next"><span class="visually-hidden">Вперед</span></button>',
    prevArrow: '<button class="special__btn arrow-btn special__btn--back"><span class="visually-hidden">Назад</span></button>',
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }]

  });

  sliderPagination($slickElement, $current, $count);
}
//

// PEOPLE LIST SLIDER
const $peopleList = $('.people__list');
const $peopleCurrent = $('.people__number-active');
const $peopleCount = $('.people__number-lenght');

$peopleList.slick({
  arrows: true,
  appendArrows: $('.people__btn-wrapper'),
  nextArrow: '<button class="people__btn arrow-btn people__btn--next"><span class="visually-hidden">Вперед</span></button>',
  prevArrow: '<button class="people__btn arrow-btn people__btn--back"><span class="visually-hidden">Назад</span></button>',
});

sliderPagination($peopleList, $peopleCurrent, $peopleCount);
//

// NEWS LIST SLIDER
const $newsList = $('.news__list');
const $newsCurrent = $('.news__number-active');
const $newsCount = $('.news__number-lenght');

$newsList.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  appendArrows: $('.news__btn-wrapper'),
  prevArrow: '<button class="news__btn arrow-btn news__btn--back"><span class="visually-hidden">Назад</span></button>',
  nextArrow: '<button class="news__btn arrow-btn news__btn--next"><span class="visually-hidden">Вперед</span></button>',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
})

sliderPagination($newsList, $newsCurrent, $newsCount);
//

// REVIEWS SLIDER
const $reviewsList = $('.reviews__list');

$reviewsList.slick({
  centerMode: true,
  arrows: false,
  slidesToShow: 4,
  focusOnSelect: true,
  centerPadding: '0',

  responsive: [
    {
      breakpoint: 1070,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '40px'
      }
    }]
});

const reviews = document.querySelector('.reviews__list');

openReview(reviews);
//

// SLIDER-LIST SLIDER
const $sliderList = $('.slider__list');

$sliderList.slick({
  appendArrows: $('.slider__btn-wrapper'),
  prevArrow: '<button class="slider__btn arrow-btn slider__btn--back"><span class="visually-hidden">Назад</span></button>',
  nextArrow: '<button class="slider__btn arrow-btn slider__btn--next"><span class="visually-hidden">Вперед</span></button>',
})
//



// Accordion
const catalogItemArray = document.querySelectorAll('.catalog__item');

const resizeSlide = (evt, i) => {
  if (evt.type == 'mouseover') {
    catalogItemArray[i].classList.add('catalog__item--grow');
    switch (i) {
      case 0: catalogItemArray[1].classList.add('catalog__item--shrink');
        break;
      case 1: catalogItemArray[0].classList.add('catalog__item--shrink');
        break;
    }
  } else {
    catalogItemArray[i].classList.remove('catalog__item--grow');
    switch (i) {
      case 0: catalogItemArray[1].classList.remove('catalog__item--shrink');
        break;
      case 1: catalogItemArray[0].classList.remove('catalog__item--shrink');
        break;
    }
  }
}

const accordion = () => {
  for (let j = 0; j < 2; j++) {
    catalogItemArray[j].addEventListener('mouseover', (evt) => {
      resizeSlide(evt, j);
    });
    catalogItemArray[j].addEventListener('mouseout', (evt) => {
      resizeSlide(evt, j);
    })
  }
};
accordion();


// Модалки
const propertyLinks = document.querySelectorAll('.property-link');
const propertyModal = document.querySelector('.modal--property');

openModal(propertyLinks, propertyModal);

const callModal = document.querySelector('.modal--сall');
const callLinks = document.querySelectorAll('.btn-call');

openModal(callLinks, callModal);

const mortgageLink = document.querySelectorAll('.mortgage-link');
const mortgageModal = document.querySelector('.modal--mortgage');

openModal(mortgageLink, mortgageModal);

specialSlider();
