(function () {
  'use strict';

  var menu = document.querySelector(".main-menu__list");
  var menuBtn = document.querySelector(".main-menu__btn");
  menu.classList.add("main-menu__list--hidden");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("main-menu__btn--open");
    menuBtn.classList.toggle("main-menu__btn--closed");
    menu.classList.toggle("main-menu__list--hidden");
  });

}());
