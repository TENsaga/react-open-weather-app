import React, { Component } from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

import Forecast from '../components/Forecast';
import importAll from '../helpers/index';
import countryObj from '../data/country-codes';

export default class ForecastContainer extends Component {
  static propTypes = {
    data: object.isRequired,
  };

  constructor(props) {
    super(props);
    const { city: { name, country: countryCode }, list: days } = this.props.data;
    const country = this.getCountry(countryCode);
    this.state = {
      name,
      country,
      days,
    };
    this.icons = importAll(require.context('../images/weather-icons', false, /\.svg$/));
  }

  getCountry(countryCode) {
    return countryObj.find(country => country.code === countryCode).name;
  }

  generateIconURL({ iconId }) {
    return this.icons[ `${ iconId }.svg` ];
  }

  generateDate(utcSeconds) {
    return new Date(utcSeconds * 1000);
  }

  generateForecast() {
    const { name, country } = this.state;
    return this.state.days.map((day) => {
      const utcSeconds = day.dt;
      const date = this.generateDate(utcSeconds);
      const icon = this.generateIconURL({ iconId: day.weather[ 0 ].icon });
      return (
        <Link
          key={`link-${ utcSeconds }`}
          to={{
            pathname: `/details/${ name }`,
            state: {
              day,
              date,
              icon,
              name,
              country,
            },
          }}
        >
          <Forecast key={utcSeconds} date={date} icon={icon} />
        </Link>
      );
    });
  }

  render() {
    const { name, country } = this.state;
    const days = this.generateForecast();
    return (
      <div className="forecast-container">
        <h1 className="header header-special">{name}</h1>
        <h2 className="header country-header">{country}</h2>
        {days}
      </div>
    );
  }
}
