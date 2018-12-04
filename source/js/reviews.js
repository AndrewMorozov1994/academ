export const openReview = (reviews)=> {
  reviews.forEach(el => {
    el.addEventListener('click', () => {
      const img = el.querySelector('img');
      img.classList.toggle('reviews__item-img--full');
      console.log(img)
    })
  });
}