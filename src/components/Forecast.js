import React from 'react';
import { string, instanceOf, object } from 'prop-types';
import Moment from 'react-moment';

Forecast.propTypes = {
  date: instanceOf(Date).isRequired,
  icon: string.isRequired,
  children: object,
};

Forecast.defaultProps = {
  children: null,
};

export default function Forecast({ date, icon, children }) {
  return (
    <div className="forecast-item">
      <img className="weather-img" src={icon} alt="Weather Icon" />
      <h1 className="header sub-header">
        <Moment format="dddd, MMM Do">{date}</Moment>
      </h1>
      {children}
    </div>
  );
}
