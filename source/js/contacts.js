import {openModal} from './moduls/modal.js';

let map = document.querySelector(`#map`);

ymaps.ready(() => {
  let myMap = new ymaps.Map(`map`, {
    center: [56.788598, 60.529014],
    zoom: 16
  }),
  myPlacemark = new ymaps.Placemark([56.788598, 60.529014], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/pin.png',
    iconImageSize: [63, 58],
    iconImageOffset: [-16, -52]
  });

  myMap.geoObjects.add(myPlacemark)
});

const callModal = document.querySelector('.modal--сall');
const callLinks = document.querySelectorAll('.btn-call');

openModal(callLinks, callModal);