import axios from 'axios';
import { APIKEY } from './config';

export function fetchApiData() {
  console.log('test');
}

export function forecast() {
  const cityName = 'Comox';
  const apiCall = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${ cityName }&type=accurate&APPID=${ APIKEY }&cnt=5&units=metric`;

  axios
    .get(apiCall)
    .then((response) => {
      console.log(JSON.stringify(response, null, 2));
    });
}

// CURRNET: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

// 5 DAY W: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

// Example: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=52a13c2fb2ddedfbfe235b78fc29414f
