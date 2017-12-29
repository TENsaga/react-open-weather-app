import React, { Component } from 'react';
import { object } from 'prop-types';

import Forecast from '../components/Forecast';

export default class ForecastContainer extends Component {
  static propTypes = {
    data: object.isRequired,
  };

  generateDate(utcSeconds) {
    return new Date(utcSeconds * 1000);
  }

  generateIconURL(icon) {
    const image = require(`../images/weather-icons/${ icon }.svg`);
    return image;
  }

  constructor(props) {
    super(props);
    const { city: { name }, list: days } = this.props.data;
    this.state = {
      name,
      days,
    };
  }

  generateForecast() {
    console.log(this.state);
    const { days } = this.state;
    return days.map((day) => {
      console.log(`DT: ${ day.dt }`);
      console.log(`ICON: ${ day.weather[ 0 ].icon }`);
      return (
        <Forecast
          key={day.dt}
          date={this.generateDate(day.dt)}
          icon={this.generateIconURL(day.weather[ 0 ].icon)}
        />
      );
    });
  }

  render() {
    const { name } = this.state;
    const days = this.generateForecast();
    console.log(days);
    return (
      <div>
        <div className="forecast-container">
          <h1 className="header header-special">{name}</h1>
          {days}
          {JSON.stringify(this.state.data, null, 2)}
        </div>
      </div>
    );
  }
}
