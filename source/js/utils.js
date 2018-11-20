const min = 56.82;
const max = 56.9;
const minLet = 60.5;
const maxLet = 60.6;

const qtyFeatures = 50;

let arrayOfFeatures = [];

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
}

const featuresTemplate = (i) => {
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
  }
}

export const fillArray = () => {
  for (let i = 0; i < qtyFeatures; i++) {
    arrayOfFeatures.push(featuresTemplate(i));
  }
  return arrayOfFeatures;
}


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