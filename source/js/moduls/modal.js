export const openModal = (el, selector) => {
  const btnClose = selector.querySelector('.modal__close');
  const overlay = document.querySelector('.overlay');
  const form = selector.querySelector('form');
  const inputName = form.querySelector('.name');
  const inputPhone = form.querySelector('.phone');
  const error = form.querySelector('.modal__error');
  const btnSubmit = form.querySelector('.modal__submit');

  const closePopup = () => {
    selector.classList.remove('modal--open');
    overlay.classList.remove('overlay--open');

    if (error.classList.contains('modal__error--open')) {
      error.classList.remove('modal__error--open');
    }
  };

  const validity = () => {
    if (!inputName.valueMissing || !inputPhone.valueMissing) {
      error.classList.add('modal__error--open');
    }
  }

  el.forEach(element => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();

      selector.classList.add('modal--open');
      overlay.classList.add('overlay--open');

      selector.style.left = document.documentElement.offsetWidth / 2 - selector.offsetWidth / 2 + "px";
      selector.style.top = window.pageYOffset + 50 + "px";

      btnClose.addEventListener('click', closePopup);

      overlay.addEventListener('click', (evt) => {
        if (evt.target == selector) return;
        closePopup();
      });

      btnSubmit.addEventListener('click', () => {
        validity();
      })

      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        closePopup();
        form.reset();
      })
    })

  });
}


