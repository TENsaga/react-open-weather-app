import React from 'react';
import { string, instanceOf, object, shape } from 'prop-types';

import Forecast from './Forecast';

ForecastDetails.propTypes = {
  location: shape({
    state: shape({
      day: object.isRequired,
      date: instanceOf(Date).isRequired,
      icon: string.isRequired,
      name: string.isRequired,
      country: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default function ForecastDetails(props) {
  const {
    day, date, icon, name, country,
  } = props.location.state;
  const details = (
    <div className="details-container">
      <ul className="details-list-container">
        <li>{name}, {country}</li>
        <li>{day.weather[ 0 ].description}</li>
        <li>min temp: {day.temp.min} ºC</li>
        <li>max temp: {day.temp.max} ºC</li>
        <li>humidity: {day.humidity}</li>
      </ul>
    </div>
  );
  return (
    <div className="forecast-container">
      <Forecast key={date} date={date} icon={icon}>
        {details}
      </Forecast>
    </div>
  );
}
