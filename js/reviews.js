var reviews = (function (exports) {
  'use strict';

  var openReview = function openReview(reviews) {
    reviews.forEach(function (el) {
      el.addEventListener('click', function () {
        var img = el.querySelector('img');
        img.classList.toggle('reviews__item-img--full');
        console.log(img);
      });
    });
  };

  exports.openReview = openReview;

  return exports;

}({}));
