const reviewList = document.querySelector('.page-reviews__list');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.reviews-open');




reviewList.addEventListener('click', (evt) => {
  const target = evt.target.closest('li');
  if (!target) {
    return;
  } else {
    overlay.classList.add('overlay--open');
    popup.style.top = window.pageYOffset + 20 + 'px';
    popup.querySelector('img').src = target.querySelector('img').src;
    popup.classList.add('reviews-open--hide');

  }
});




overlay.addEventListener('click', () => {
  popup.classList.remove('reviews-open--hide');
  overlay.classList.remove('overlay--open');
});