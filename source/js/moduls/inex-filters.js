const openSubMenu = (it, value, i, subMenuArray) => {
  const subMenu = it.querySelector('.slider__filter-sub-list');
  if(subMenu == null) return;

  for (let j = 0; j < subMenuArray.length; j++) {
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
}

const changeValue = (item, value) => {
  const arrayOfValue = item.querySelectorAll('.slider__filter-sub-item');
      if (arrayOfValue == null) return;

      arrayOfValue.forEach((its) => {
        its.addEventListener('click', () => {
          value.innerText = its.innerText;
        })
      })
}

export const getElem = (filters, subMenuArray) => {
  filters.forEach((it, i) => {
    it.addEventListener('click', () => {
      const value = it.querySelector('span');
      if (value == null) return;
      openSubMenu(it, value, i, subMenuArray);

    })


  })
}