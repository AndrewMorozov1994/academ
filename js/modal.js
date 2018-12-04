var modal = (function (exports) {
  'use strict';

  var openModal = function openModal(el, selector) {
    var btnClose = selector.querySelector('.modal__close');
    var overlay = document.querySelector('.overlay');

    el.forEach(function (element) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault;
        selector.classList.add('modal--open');
        overlay.classList.add('overlay--open');

        btnClose.addEventListener('click', function () {
          selector.classList.remove('modal--open');
          overlay.classList.remove('overlay--open');
        });
      });
    });
  };

  exports.openModal = openModal;

  return exports;

}({}));
