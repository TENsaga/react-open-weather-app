import axios from 'axios';
import { APIKEY } from './config';

// export function fetchApiData() {
//   console.log('test');
// }

export default function forecast(city) {
  const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${ city }&type=accurate&APPID=${ APIKEY }&cnt=5&units=metric`);

  return axios
    .get(encodedURI)
    .then(response => response.data)
    .catch(error => handleError(error));
}

function handleError(error) {
  console.log(error.message);
  return null;
}

// CURRNET: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

// 5 DAY W: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

// Example: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=52a13c2fb2ddedfbfe235b78fc29414f
