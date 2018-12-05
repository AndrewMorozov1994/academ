(function () {
  'use strict';

  // оставляю на твоей совести, сюда лезть не буду переделывать
  var listHeandler = document.querySelector(".object-list-radio");
  var radioList = document.querySelector("#object-radio-list-00");
  var radioListPhoto = document.querySelector("#object-radio-list-01");
  var radioListNoPhoto = document.querySelector("#object-radio-list-02");
  var infoList = document.querySelector(".object-list__info-list");
  var targetList = document.querySelector(".object-list__list");

  var changeList = function changeList() {
    if (radioList.checked) {
      targetList.classList.add("object-list__list--list");
      targetList.classList.remove("object-list__list--list-photo");
      targetList.classList.remove("object-list__list--list-no-photo");
      infoList.classList.add("object-list__info-list--hide");
    } else if (radioListPhoto.checked) {
      targetList.classList.add("object-list__list--list-photo");
      targetList.classList.remove("object-list__list--list");
      targetList.classList.remove("object-list__list--list-no-photo");
      infoList.classList.add("object-list__info-list--hide");
    } else if (radioListNoPhoto.checked) {
      targetList.classList.add("object-list__list--list-no-photo");
      targetList.classList.remove("object-list__list--list");
      targetList.classList.remove("object-list__list--list-photo");
      infoList.classList.remove("object-list__info-list--hide");
    } else {
      return;
    }
  };

  listHeandler.addEventListener("change", function () {
    changeList();
  });
  //

}());
