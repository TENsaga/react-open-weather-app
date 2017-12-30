import React from 'react';
import { string, instanceOf } from 'prop-types';
import Moment from 'react-moment';

Forecast.propTypes = {
  date: instanceOf(Date).isRequired,
  icon: string.isRequired,
};

export default function Forecast({ date, icon }) {
  return (
    <div className="forecast-item">
      <img className="weather-img" src={icon} alt="Weather Icon" />
      <h1 className="header">
        <Moment format="YYYY/MM/DD">{date}</Moment>
      </h1>
    </div>
  );
}
