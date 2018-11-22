(function () {
  'use strict';

  // {
  //   "type": "Feature",
  //   "id" = 0,
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

  var map = document.querySelector('#map');

  ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
          center: [56.850388, 60.597307],
          zoom: 15
      }),
          objectManager = new ymaps.ObjectManager({
          clusterize: true,
          geoObjectOpenBalloonOnClick: false,
          clusterOpenBalloonOnClick: false,
          clusterBalloonContentLayoutWidth: 380,
          clusterBalloonContentLayoutHeight: 140,
          geoObjectBalloonContentLayoutWidth: 380,
          geoObjectBalloonContentLayoutHeight: 120
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
      myMap.geoObjects.add(objectManager);

      // Функция, эмулирующая запрос за данными на сервер.
      var loadBalloonData = function loadBalloonData(objectId) {
          var dataDeferred = ymaps.vow.defer();
          var resolveData = function resolveData() {
              dataDeferred.resolve('Данные балуна');
          };
          window.setTimeout(resolveData, 1000);
          return dataDeferred.promise();
      };

      function hasBalloonData(objectId) {
          return objectManager.objects.getById(objectId).properties.balloonContent;
      }

      objectManager.objects.events.add('click', function (e) {
          var objectId = e.get('objectId'),
              obj = objectManager.objects.getById(objectId);
          if (hasBalloonData(objectId)) {
              objectManager.objects.balloon.open(objectId);
          } else {
              obj.properties.balloonContent = "Идет загрузка данных...";
              objectManager.objects.balloon.open(objectId);
              loadBalloonData(objectId).then(function (data$$1) {
                  obj.properties.balloonContent = data$$1;
                  objectManager.objects.balloon.setData(obj);
              });
          }
      });
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

      objectManager.objects.events.add(['mouseenter', 'mousedown', 'mouseleave'], onObjectEvent);
      //

      // Нужно перепилить под загрузку с сервера
      $.ajax({
          url: "https://089ax.000webhostapp.com/data.json"
      }).done(function (data$$1) {
          objectManager.add(data$$1);
      });
  });

}());
