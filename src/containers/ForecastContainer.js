import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Forecast from '../components/Forecast';
import importAll from '../helpers/index';
import countryObj from '../data/a2-country-codes';
import GoogleMap from '../components/GoogleMap';

export default class ForecastContainer extends Component {
  state = {
    name: null,
    lat: null,
    lon: null,
    country: null,
    days: null,
  };

  componentWillMount() {
    this.updateData(this.props);
    this.icons = importAll(require.context('../images/weather-icons', false, /\.svg$/));
  }

  componentWillReceiveProps(nextProps) {
    this.updateData(nextProps);
  }

  getCountry(countryCode) {
    return countryObj.find(country => country.code === countryCode).name;
  }

  updateData({ data }) {
    const { city: { name, country: countryCode, coord: { lat, lon } }, list: days } = data;
    const country = this.getCountry(countryCode);
    this.setState({
      name,
      lat,
      lon,
      country,
      days,
    });
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
          <GoogleMap lat={lat} lon={lon} />
        </div>
        {forecastDays}
      </div>
    );
  }
}
