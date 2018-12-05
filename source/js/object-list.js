import {getElem} from './moduls/inex-filters.js';

const filters = document.querySelectorAll('.object-list-filter__item');
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

const $specialItemSliders = $('.special__item-img-wrapper');

$specialItemSliders.each(function() {
  $(this).slick({
    arrows: true,
    draggable: false,
    swipe: false,
    appendArrows: $(this).parents('.object-list__item').find('.special__item-hover-wrapper'),
    prevArrow: '<button class="special__item-btn arrow-btn special__item-btn--back"><span class="visually-hidden">Назад</span></button>',
    nextArrow: '<button class="special__item-btn arrow-btn special__item-btn--next"><span class="visually-hidden">Вперел</span></button>'
  });
  const item = $(this).parents('.object-list__item').find('.special__item-number');
  const ite = $(this).parents('.object-list__item').find('.special__item-number1');
  sliderPagination($(this), item, ite);
});

const range = (wrap, min, max) => {
  wrap.slider({
    range: true,
    min: 0,
    max: 500000,
    values: [12345, 245678 ],
    slide: function( event, ui ) {
    //Поле минимального значения
    min.val(ui.values[ 0 ]);
    //Поле максимального значения
    max.val(ui.values[1]); }
    });
    //Записываем значения ползунков в момент загрузки страницы
    //То есть значения по умолчанию
    min.val(wrap.slider('values', 0 ));
    max.val(wrap.slider('values', 1 ));

  min.change(function() {
    var val = $(this).val();
    wrap.slider('values',0,val);
  });

  max.change(function() {
    var val = $(this).val();
    wrap.slider('values',1,val);
  });
}

const priceRange = $('#slider_price');
const priceMin = $('#minCost');
const maxCost = $('#maxCost');

range(priceRange, priceMin, maxCost);

const sqRange = $('#sq');
const sqMin = $('#sqMin');
const sqMax = $('#sqMax');

range(sqRange, sqMin, sqMax);
