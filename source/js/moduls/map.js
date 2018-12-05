let map = document.querySelector(`#map`);

ymaps.ready(() => {
  let myMap = new ymaps.Map(`map`, {
    center: [56.850388, 60.597307],
    zoom: 15
  }),
  objectManager = new ymaps.ObjectManager({
    clusterize: true,
    geoObjectOpenBalloonOnClick: false
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
    const loadBalloonData = (objectId) => {
      let dataDeferred = ymaps.vow.defer();
      let resolveData = () => {
          dataDeferred.resolve('Данные балуна');
      }
      window.setTimeout(resolveData, 1000);
      return dataDeferred.promise();
  }

  function hasBalloonData (objectId) {
      return objectManager.objects.getById(objectId).properties.balloonContent;
  }

  objectManager.objects.events.add('click', function (e) {
      var objectId = e.get('objectId'),
          obj = objectManager.objects.getById(objectId);
      if (hasBalloonData(objectId)) {
          objectManager.objects.balloon.open(objectId);
          // objectManager.clusters.balloon.open(objectId);
      } else {
          obj.properties.balloonContent = "Идет загрузка данных...";
          objectManager.objects.balloon.open(objectId);
          loadBalloonData(objectId).then(function (data) {
              obj.properties.balloonContent = data;
              objectManager.objects.balloon.setData(obj);
          });
      }
    })
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

  objectManager.objects.events.add(['mouseenter', 'mousedown', 'mouseleave'], onObjectEvent);
  //

  // Нужно перепилить под загрузку с сервера
  $.ajax({
    url: "data.json"
  }).done((data) => {
      objectManager.add(data);
    });

});
