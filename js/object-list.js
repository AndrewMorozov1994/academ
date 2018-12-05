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

  var filters = document.querySelectorAll('.object-list-filter__item');
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

  var $specialItemSliders = $('.special__item-img-wrapper');

  $specialItemSliders.each(function () {
    $(this).slick({
      arrows: true,
      draggable: false,
      swipe: false,
      appendArrows: $(this).parents('.object-list__item').find('.special__item-hover-wrapper'),
      prevArrow: '<button class="special__item-btn arrow-btn special__item-btn--back"><span class="visually-hidden">Назад</span></button>',
      nextArrow: '<button class="special__item-btn arrow-btn special__item-btn--next"><span class="visually-hidden">Вперел</span></button>'
    });
    var item = $(this).parents('.object-list__item').find('.special__item-number');
    var ite = $(this).parents('.object-list__item').find('.special__item-number1');
    sliderPagination($(this), item, ite);
  });

  var range = function range(wrap, min, max) {
    wrap.slider({
      range: true,
      min: 0,
      max: 500000,
      values: [12345, 245678],
      slide: function slide(event, ui) {
        //Поле минимального значения
        min.val(ui.values[0]);
        //Поле максимального значения
        max.val(ui.values[1]);
      }
    });
    //Записываем значения ползунков в момент загрузки страницы
    //То есть значения по умолчанию
    min.val(wrap.slider('values', 0));
    max.val(wrap.slider('values', 1));

    min.change(function () {
      var val = $(this).val();
      wrap.slider('values', 0, val);
    });

    max.change(function () {
      var val = $(this).val();
      wrap.slider('values', 1, val);
    });
  };

  var priceRange = $('#slider_price');
  var priceMin = $('#minCost');
  var maxCost = $('#maxCost');

  range(priceRange, priceMin, maxCost);

  var sqRange = $('#sq');
  var sqMin = $('#sqMin');
  var sqMax = $('#sqMax');

  range(sqRange, sqMin, sqMax);

}());
