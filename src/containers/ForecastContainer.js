import React, { Component } from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

import Forecast from '../components/Forecast';
import importAll from '../helpers/index';
import countryObj from '../data/a2-country-codes';
import SimpleMap from '../components/GoogleMap';

export default class ForecastContainer extends Component {
  static propTypes = {
    data: object.isRequired,
  };

  constructor(props) {
    super(props);
    const {
      city: { name, country: countryCode, coord: { lat, lon } },
      list: days,
    } = this.props.data;
    const country = this.getCountry(countryCode);
    this.state = {
      name,
      lat,
      lon,
      country,
      days,
    };
    this.icons = importAll(require.context('../images/weather-icons', false, /\.svg$/));
  }

  getCountry(countryCode) {
    return countryObj.find(country => country.code === countryCode).name;
  }

  generateIconURL = ({ iconId }) => this.icons[ `${ iconId }.svg` ];

  generateDate = utcSeconds => new Date(utcSeconds * 1000);

  buildForecastComponents() {
    const { name, country, days } = this.state;
    return days.map((day) => {
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
    const {
      name, country, lat, lon,
    } = this.state;
    const forecastDays = this.buildForecastComponents();
    return (
      <div className="forecast-container">
        <h1 className="header header-special">{name}</h1>
        <h2 className="header country-header">{country}</h2>
        <div className="map-top-container">
          <SimpleMap lat={lat} lon={lon} />
        </div>
        {forecastDays}
      </div>
    );
  }
}
