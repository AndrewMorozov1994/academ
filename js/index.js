(function () {
  'use strict';

  var openSubMenu = function openSubMenu(it, value, i, subMenuArray) {
    var subMenu = it.querySelector('.slider__filter-sub-list');
    if (subMenu == null) return;

    for (var j = 0; j < subMenuArray.length; j++) {
      if (j == i) {
        j++;
      }

      if (j == subMenuArray.length) break;

      if (subMenuArray[j].classList.contains('slider__filter-sub-list--open')) {
        subMenuArray[j].classList.remove('slider__filter-sub-list--open');
      }
    }

    subMenu.classList.toggle('slider__filter-sub-list--open');
    changeValue(subMenu, value);
  };

  var changeValue = function changeValue(item, value) {
    var arrayOfValue = item.querySelectorAll('.slider__filter-sub-item');
    if (arrayOfValue == null) return;

    arrayOfValue.forEach(function (its) {
      its.addEventListener('click', function () {
        value.innerText = its.innerText;
      });
    });
  };

  var getElem = function getElem(filters, subMenuArray) {
    filters.forEach(function (it, i) {
      it.addEventListener('click', function () {
        var value = it.querySelector('span');
        if (value == null) return;
        openSubMenu(it, value, i, subMenuArray);
      });
    });
  };

  var openReview = function openReview(list) {
    var overlay = document.querySelector('.overlay');
    var popup = document.querySelector('.reviews-open');

    list.addEventListener('click', function (evt) {
      var target = evt.target.closest('li');
      if (!target) {
        return;
      } else {
        overlay.classList.add('overlay--open');
        popup.style.top = window.pageYOffset + 20 + 'px';
        popup.querySelector('img').src = target.querySelector('img').src;
        popup.classList.add('reviews-open--hide');
      }
    });

    overlay.addEventListener('click', function () {
      popup.classList.remove('reviews-open--hide');
      overlay.classList.remove('overlay--open');
    });
  };

  var openModal = function openModal(el, selector) {
    var btnClose = selector.querySelector('.modal__close');
    var overlay = document.querySelector('.overlay');
    var form = selector.querySelector('form');
    var inputName = form.querySelector('.name');
    var inputPhone = form.querySelector('.phone');
    var error = form.querySelector('.modal__error');
    var btnSubmit = form.querySelector('.modal__submit');

    var closePopup = function closePopup() {
      selector.classList.remove('modal--open');
      overlay.classList.remove('overlay--open');

      if (error.classList.contains('modal__error--open')) {
        error.classList.remove('modal__error--open');
      }
    };

    var validity = function validity() {
      if (!inputName.valueMissing || !inputPhone.valueMissing) {
        error.classList.add('modal__error--open');
      }
    };

    el.forEach(function (element) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();

        selector.classList.add('modal--open');
        overlay.classList.add('overlay--open');

        selector.style.left = document.documentElement.offsetWidth / 2 - selector.offsetWidth / 2 + "px";
        selector.style.top = window.pageYOffset + 50 + "px";

        btnClose.addEventListener('click', closePopup);

        overlay.addEventListener('click', function (evt) {
          if (evt.target == selector) return;
          closePopup();
        });

        btnSubmit.addEventListener('click', function () {
          validity();
        });

        form.addEventListener('submit', function (evt) {
          evt.preventDefault();
          closePopup();
          form.reset();
        });
      });
    });
  };

  var filters = document.querySelectorAll('.slider__filter-item');
  var subMenuArray = document.querySelectorAll('.slider__filter-sub-list');
  getElem(filters, subMenuArray);

  var sliderPagination = function sliderPagination(element, current, count) {
    element.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      current.text('0' + i);
      count.text('0' + slick.slideCount);
      return false;
    });
  };

  var her = document.querySelector('.special__list');

  var her2 = document.querySelector('.special__number-lenght');

  var getSliderLength = function getSliderLength(slider, length) {
    var sliderItem = slider.querySelectorAll('li');
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
  };
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
    centerPadding: '0',

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
        slidesToScroll: 1,
        centerPadding: '40px'
      }
    }]
  });

  var reviews = document.querySelector('.reviews__list');

  openReview(reviews);
  //

  // SLIDER-LIST SLIDER
  var $sliderList = $('.slider__list');

  $sliderList.slick({
    appendArrows: $('.slider__btn-wrapper'),
    prevArrow: '<button class="slider__btn arrow-btn slider__btn--back"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="slider__btn arrow-btn slider__btn--next"><span class="visually-hidden">Вперед</span></button>'
  });
  //


  // Accordion
  var catalogItemArray = document.querySelectorAll('.catalog__item');

  var resizeSlide = function resizeSlide(evt, i) {
    if (evt.type == 'mouseover') {
      catalogItemArray[i].classList.add('catalog__item--grow');
      switch (i) {
        case 0:
          catalogItemArray[1].classList.add('catalog__item--shrink');
          break;
        case 1:
          catalogItemArray[0].classList.add('catalog__item--shrink');
          break;
      }
    } else {
      catalogItemArray[i].classList.remove('catalog__item--grow');
      switch (i) {
        case 0:
          catalogItemArray[1].classList.remove('catalog__item--shrink');
          break;
        case 1:
          catalogItemArray[0].classList.remove('catalog__item--shrink');
          break;
      }
    }
  };

  var accordion = function accordion() {
    var _loop = function _loop(j) {
      catalogItemArray[j].addEventListener('mouseover', function (evt) {
        resizeSlide(evt, j);
      });
      catalogItemArray[j].addEventListener('mouseout', function (evt) {
        resizeSlide(evt, j);
      });
    };

    for (var j = 0; j < 2; j++) {
      _loop(j);
    }
  };
  accordion();

  // Модалки
  var propertyLinks = document.querySelectorAll('.property-link');
  var propertyModal = document.querySelector('.modal--property');

  openModal(propertyLinks, propertyModal);

  var callModal = document.querySelector('.modal--сall');
  var callLinks = document.querySelectorAll('.btn-call');

  openModal(callLinks, callModal);

  var mortgageLink = document.querySelectorAll('.mortgage-link');
  var mortgageModal = document.querySelector('.modal--mortgage');

  openModal(mortgageLink, mortgageModal);

  specialSlider();

}());
