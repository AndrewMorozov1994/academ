(function () {
  'use strict';

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

  var $her = $('.special__item-img-wrapper');

  $her.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

}());
