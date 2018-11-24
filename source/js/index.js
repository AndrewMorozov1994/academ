const sliderPagination = (element, current, count) => {
  element.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    current.text('0' + i + '/ ');
    count.text('0' + slick.slideCount);
  });
}

var her = document.querySelector('.special__list');

var her2 = document.querySelector('.special__number-lenght');


const getSliderLength = (slider, length) => {
  const sliderItem = slider.querySelectorAll('li');
  console.log(sliderItem.length);
  if (sliderItem.length <= 9) {
    length.innerHTML = '0' + sliderItem.length;
  } else {
    length.innerHTML = sliderItem.length;
  }
};
getSliderLength(her, her2);

// SPECIAL SLIDER
const $slickElement = $('.special__list');
const $current = $('.special__number-active');
const $count = $('.special__number-lenght');

$('.special__list').slick({
  arrows: true,
  appendArrows: $('.special__btn-wrapper'),
  nextArrow: '<button class="special__btn arrow-btn special__btn--next"><span class="visually-hidden">Вперед</span></button>',
  prevArrow: '<button class="special__btn arrow-btn special__btn--back"><span class="visually-hidden">Назад</span></button>',
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]

});

sliderPagination($slickElement, $current, $count);
//

// PEOPLE LIST SLIDER
const $peopleList = $('.people__list');
const $peopleCurrent = $('.people__number-active');
const $peopleCount = $('.people__number-lenght');

$peopleList.slick({
  arrows: true,
  appendArrows: $('.people__btn-wrapper'),
  nextArrow: '<button class="people__btn arrow-btn people__btn--next"><span class="visually-hidden">Вперед</span></button>',
  prevArrow: '<button class="people__btn arrow-btn people__btn--back"><span class="visually-hidden">Назад</span></button>',
});

sliderPagination($peopleList, $peopleCurrent, $peopleCount);
//

// NEWS LIST SLIDER
const $newsList = $('.news__list');
const $newsCurrent = $('.news__number-active');
const $newsCount = $('.news__number-lenght');

$newsList.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  appendArrows: $('.news__btn-wrapper'),
  prevArrow: '<button class="news__btn arrow-btn news__btn--back"><span class="visually-hidden">Назад</span></button>',
  nextArrow: '<button class="news__btn arrow-btn news__btn--next"><span class="visually-hidden">Вперед</span></button>',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
})

sliderPagination($newsList, $newsCurrent, $newsCount);
//

// REVIEWS SLIDER
const $reviewsList = $('.reviews__list');

$reviewsList.slick({
  centerMode: true,
  arrows: false,
  slidesToShow: 4,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1070,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
})
//

// SLIDER-LIST SLIDER
const $sliderList = $('.slider__list');

$sliderList.slick({
  appendArrows: $('.slider__btn-wrapper'),
  prevArrow: '<button class="slider__btn arrow-btn slider__btn--back"><span class="visually-hidden">Назад</span></button>',
  nextArrow: '<button class="slider__btn arrow-btn slider__btn--next"><span class="visually-hidden">Вперед</span></button>',
})
//