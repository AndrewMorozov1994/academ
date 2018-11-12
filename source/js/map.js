import {data} from './data.js';

let arrayOfFeatures = [];
let map = document.querySelector(`#map`);

ymaps.ready(() => {
  let myMap = new ymaps.Map(`map`, {
    center: [56.850388, 60.597307],
    zoom: 15
  }),
  objectManager = new ymaps.ObjectManager({
    clusterize: true,
    geoObjectOpenBalloonOnClick: false,
    clusterOpenBalloonOnClick: false
  });

  // Кастомные иконки
  objectManager.objects.options.set({
    iconLayout: 'default#image',
    iconImageHref: './img/pin.png',
    iconImageSize: [63, 58]
  })
  //

  objectManager.clusters.options.set('preset', 'islands#darkgreenClusterIcons');

  // Отрисовка на карте
  objectManager.add(data);
  myMap.geoObjects.add(objectManager);
  //

  // hover для иконок
  const onObjectEvent = (evt) => {
    var objectId = evt.get('objectId');
    if (evt.get('type') == 'mouseenter') {
        // Метод setObjectOptions позволяет задавать опции объекта "на лету".
        objectManager.objects.setObjectOptions(objectId, {
          iconImageHref: './img/pin_active.png',
        });
    } else {
        objectManager.objects.setObjectOptions(objectId, {
          iconImageHref: './img/pin.png'
        });
    }
  }

  objectManager.objects.events.add(['mouseenter', 'mouseleave'], onObjectEvent);
  //

});
