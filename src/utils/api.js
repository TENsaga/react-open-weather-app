import axios from 'axios';
import { OPENWEATHERAPIKEY } from './config';

export default function forecast(input) {
  const encodedURI = buildURI(formatInput(input));

  return axios
    .get(encodedURI)
    .then(response => response.data)
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1200)))
    .catch(error => handleError(error));
}

export function formatInput(input) {
  return input.split(/[,.]|\s/).filter(val => val);
}

export function buildURI(formattedInput) {
  return window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${ formattedInput }&APPID=${ OPENWEATHERAPIKEY }&cnt=5&units=metric`);
}

function handleError(error) {
  console.log(error.message);
  return null;
}
