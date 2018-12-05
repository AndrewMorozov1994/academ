(function () {
  'use strict';

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

  var map = document.querySelector('#map');

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [56.788598, 60.529014],
      zoom: 16
    }),
        myPlacemark = new ymaps.Placemark([56.788598, 60.529014], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/pin.png',
      iconImageSize: [63, 58],
      iconImageOffset: [-16, -52]
    });

    myMap.geoObjects.add(myPlacemark);
  });

  var callModal = document.querySelector('.modal--сall');
  var callLinks = document.querySelectorAll('.btn-call');

  openModal(callLinks, callModal);

}());
