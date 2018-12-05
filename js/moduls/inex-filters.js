var inexFilters = (function (exports) {
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

  exports.getElem = getElem;

  return exports;

}({}));
