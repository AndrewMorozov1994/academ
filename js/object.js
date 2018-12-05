(function () {
  'use strict';

  var sliderPagination = function sliderPagination(element, current, count) {
    element.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text('0' + i);
      count.text('0' + slick.slideCount);
      return false;
    });
  };

  var $objectSlide = $('.object__slide');
  var $objectSlideList = $('.object__slide-list');

  $objectSlide.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.object__slide-list'
  });
  $objectSlideList.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.object__slide',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  var specialSlider = function specialSlider() {
    var $slickElement = $('.special__list');
    var $current = $('.special__number-active');
    var $count = $('.special__number-lenght');

    $('.special__list').slick({
      arrows: true,
      appendArrows: $('.special__btn-wrapper'),
      nextArrow: '<button class="special__btn arrow-btn special__btn--next"><span class="visually-hidden">Вперед</span></button>',
      prevArrow: '<button class="special__btn arrow-btn special__btn--back"><span class="visually-hidden">Назад</span></button>',
      dots: false,
      infinite: true,
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
  };

  specialSlider();

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

}());
