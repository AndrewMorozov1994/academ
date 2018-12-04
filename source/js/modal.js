export const openModal = (el, selector) => {
  const btnClose = selector.querySelector('.modal__close');
  const overlay = document.querySelector('.overlay');

  el.forEach(element => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault;
      selector.classList.add('modal--open');
      overlay.classList.add('overlay--open');

      btnClose.addEventListener('click', () => {
        selector.classList.remove('modal--open');
        overlay.classList.remove('overlay--open');
      })
    })
  });
}