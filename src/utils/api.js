import axios from 'axios';
import { OPENWEATHERAPIKEY } from './config';

// Added timeout to Keep Loading visible longer than a milisecond, replace with animation in future
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
  return window.encodeURI(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${ formattedInput }&APPID=${ OPENWEATHERAPIKEY }&cnt=5&units=metric`);
}

function handleError(error) {
  console.log(error.message);
  return null;
}
