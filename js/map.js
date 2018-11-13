(function () {
  'use strict';

  var min = 56.82;
  var max = 56.9;
  var minLet = 60.5;
  var maxLet = 60.6;

  var qtyFeatures = 50;

  var arrayOfFeatures = [];

  var getRandom = function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  };

  var featuresTemplate = function featuresTemplate(i) {
    return {
      "type": "Feature",
      "id": i,
      "geometry": {
        "type": "Point",
        "coordinates": [getRandom(min, max), getRandom(minLet, maxLet)],
        "properties": {
          "balloonContent": "Содержимое балуна",
          "clusterCaption": "Еще одна метка",
          "hintContent": "Текст подсказки"
        }
      }
    };
  };

  var fillArray = function fillArray() {
    for (var i = 0; i < qtyFeatures; i++) {
      arrayOfFeatures.push(featuresTemplate(i));
    }
    return arrayOfFeatures;
  };

  // {
  //   "type": "Feature",
  //   id = 0,
  //   "geometry": {
  //     "type": "Point",
  //     "coordinates": [55.858585, 37.48498],
  //     "properties": {
  //       "balloonContent": "Содержимое балуна",
  //       "clusterCaption": "Еще одна метка",
  //       "hintContent": "Текст подсказки"
  //     }
  //   }
  // };

  // временный мок, взят с яндекса(переработан под автозаполнение)

  var data = {
    "type": "FeatureCollection",
    "features": fillArray()
  };

  var map = document.querySelector('#map');

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
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
    });
    //

    objectManager.clusters.options.set('preset', 'islands#darkgreenClusterIcons');

    // Отрисовка на карте
    objectManager.add(data);
    myMap.geoObjects.add(objectManager);
    //

    // hover для иконок
    var onObjectEvent = function onObjectEvent(evt) {
      var objectId = evt.get('objectId');
      if (evt.get('type') == 'mouseenter') {
        // Метод setObjectOptions позволяет задавать опции объекта "на лету".
        objectManager.objects.setObjectOptions(objectId, {
          iconImageHref: './img/pin_active.png'
        });
      } else {
        objectManager.objects.setObjectOptions(objectId, {
          iconImageHref: './img/pin.png'
        });
      }
    };

    objectManager.objects.events.add(['mouseenter', 'mouseleave'], onObjectEvent);
    //
  });

}());
