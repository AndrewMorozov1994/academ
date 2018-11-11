import {data} from './data.js';

let arrayOfFeatures = [];
let map = document.querySelector(`#map`);

ymaps.ready(() => {
  let myMap = new ymaps.Map(`map`, {
    center: [56.850388, 60.597307],
    zoom: 15
  }),
  objectManager = new ymaps.ObjectManager({
    // Чтобы метки начали кластеризоваться, выставляем опцию.
    clusterize: true,
    geoObjectOpenBalloonOnClick: false,
    clusterOpenBalloonOnClick: false
});
objectManager.add(data);

myMap.geoObjects.add(objectManager);
});
