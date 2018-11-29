(function () {
  'use strict';

  var sliderPagination = function sliderPagination(element, current, count) {
    element.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text('0' + i + '/ ');
      count.text('0' + slick.slideCount);
      return false;
    });
  };

  var her = document.querySelector('.special__list');

  var her2 = document.querySelector('.special__number-lenght');

  var getSliderLength = function getSliderLength(slider, length) {
    var sliderItem = slider.querySelectorAll('li');
    console.log(sliderItem.length);
    if (sliderItem.length <= 9) {
      length.innerHTML = '0' + sliderItem.length;
    } else {
      length.innerHTML = sliderItem.length;
    }
  };
  getSliderLength(her, her2);

  // Блок Special, слайдеры внутри слайдера

  var $specialItemSliders = $('.special__item-img-wrapper');

  $specialItemSliders.each(function () {
    $(this).slick({
      arrows: true,
      draggable: false,
      swipe: false,
      appendArrows: $(this).parents('.special__item').find('.special__item-hover-wrapper'),
      prevArrow: '<button class="special__item-btn arrow-btn special__item-btn--back"><span class="visually-hidden">Назад</span></button>',
      nextArrow: '<button class="special__item-btn arrow-btn special__item-btn--next"><span class="visually-hidden">Вперел</span></button>'
    });
    var item = $(this).parents('.special__item').find('.special__item-number');
    var ite = $(this).parents('.special__item').find('.special__item-number1');
    sliderPagination($(this), item, ite);
  });

  //

  // SPECIAL SLIDER
  var $slickElement = $('.special__list');
  var $current = $('.special__number-active');
  var $count = $('.special__number-lenght');

  $('.special__list').slick({
    arrows: true,
    appendArrows: $('.special__btn-wrapper'),
    nextArrow: '<button class="special__btn arrow-btn special__btn--next"><span class="visually-hidden">Вперед</span></button>',
    prevArrow: '<button class="special__btn arrow-btn special__btn--back"><span class="visually-hidden">Назад</span></button>',
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]

  });

  sliderPagination($slickElement, $current, $count);
  //

  // PEOPLE LIST SLIDER
  var $peopleList = $('.people__list');
  var $peopleCurrent = $('.people__number-active');
  var $peopleCount = $('.people__number-lenght');

  $peopleList.slick({
    arrows: true,
    appendArrows: $('.people__btn-wrapper'),
    nextArrow: '<button class="people__btn arrow-btn people__btn--next"><span class="visually-hidden">Вперед</span></button>',
    prevArrow: '<button class="people__btn arrow-btn people__btn--back"><span class="visually-hidden">Назад</span></button>'
  });

  sliderPagination($peopleList, $peopleCurrent, $peopleCount);
  //

  // NEWS LIST SLIDER
  var $newsList = $('.news__list');
  var $newsCurrent = $('.news__number-active');
  var $newsCount = $('.news__number-lenght');

  $newsList.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.news__btn-wrapper'),
    prevArrow: '<button class="news__btn arrow-btn news__btn--back"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="news__btn arrow-btn news__btn--next"><span class="visually-hidden">Вперед</span></button>',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  sliderPagination($newsList, $newsCurrent, $newsCount);
  //

  // REVIEWS SLIDER
  var $reviewsList = $('.reviews__list');

  $reviewsList.slick({
    centerMode: true,
    arrows: false,
    slidesToShow: 4,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1070,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  //

  // SLIDER-LIST SLIDER
  var $sliderList = $('.slider__list');

  $sliderList.slick({
    appendArrows: $('.slider__btn-wrapper'),
    prevArrow: '<button class="slider__btn arrow-btn slider__btn--back"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="slider__btn arrow-btn slider__btn--next"><span class="visually-hidden">Вперед</span></button>'
  });
  //

}());
