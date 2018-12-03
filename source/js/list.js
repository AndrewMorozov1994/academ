const listHeandler = document.querySelector(`.object-list-radio`);
const radioList = document.querySelector(`#object-radio-list-00`);
const radioListPhoto = document.querySelector(`#object-radio-list-01`);
const radioListNoPhoto = document.querySelector(`#object-radio-list-02`);
const infoList = document.querySelector(`.object-list__info-list`);
const targetList = document.querySelector(`.object-list__list`);

var changeList = () => {
  if (radioList.checked) {
    targetList.classList.add(`object-list__list--list`)
    targetList.classList.remove(`object-list__list--list-photo`)
    targetList.classList.remove(`object-list__list--list-no-photo`)
    infoList.classList.add(`object-list__info-list--hide`)
  } else if (radioListPhoto.checked) {
    targetList.classList.add(`object-list__list--list-photo`)
    targetList.classList.remove(`object-list__list--list`)
    targetList.classList.remove(`object-list__list--list-no-photo`)
    infoList.classList.add(`object-list__info-list--hide`)
  } else if (radioListNoPhoto.checked) {
    targetList.classList.add(`object-list__list--list-no-photo`)
    targetList.classList.remove(`object-list__list--list`)
    targetList.classList.remove(`object-list__list--list-photo`)
    infoList.classList.remove(`object-list__info-list--hide`)
  } else {
    return;
  }
};

listHeandler.addEventListener(`change`, () => {
  changeList();
});

