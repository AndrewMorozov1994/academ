(function () {
  'use strict';

  var review = document.querySelector('.reviews__list');
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.reviews-open');

  review.addEventListener('click', function (evt) {
    var target = evt.target.closest('li');
    if (!target) {
      return;
    } else {
      popup.style.top = window.pageYOffset + 20 + 'px';
      popup.querySelector('img').src = target.querySelector('img').src;
      popup.classList.add('reviews-open--hide');
      console.log(target.querySelector('img').src);
      overlay.classList.add('overlay--open');
    }
  });

  overlay.addEventListener('click', function () {
    popup.classList.remove('reviews-open--hide');
    overlay.classList.remove('overlay--open');
  });

}());
