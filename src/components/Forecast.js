import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Forecast = ({ date, icon }) => (
  <div className="forecast-item column">
    <img className="weather-img" src={icon} alt="Weather Icon" />
    <h1 className="header">
      <Moment format="YYYY/MM/DD">{date}</Moment>
    </h1>
  </div>
);

Forecast.propTypes = {};

export default Forecast;
