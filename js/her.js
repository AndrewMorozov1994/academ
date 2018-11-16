(function () {
  'use strict';

  var sliderSpecial = document.getElementById('peppermint');

  var sliderSpecialWidth = document.querySelector('.special__list.peppermint.peppermint-active');
  var changeWidthSlider = function changeWidthSlider(slider, sliderWidth) {
    slider.recalcWidth();
    sliderWidth.style.paddingRight = 50 + '%';
  };

  window.addEventListener('resize', function () {
    changeWidthSlider(sliderSpecial, sliderSpecialWidth);
  });

  window.addEventListener('orientationchange', function () {
    changeWidthSlider(sliderSpecial, sliderSpecialWidth);
    console.log('her');
  });

}());
