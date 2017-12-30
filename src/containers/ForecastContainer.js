import React, { Component } from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

import Forecast from '../components/Forecast';
import importAll from '../helpers/index';

export default class ForecastContainer extends Component {
  static propTypes = {
    data: object.isRequired,
  };

  constructor(props) {
    super(props);
    const { city: { name }, list: days } = this.props.data;
    this.state = {
      name,
      days,
    };
    this.icons = importAll(require.context('../images/weather-icons', false, /\.svg$/));
  }

  generateDate({ utcSeconds }) {
    return new Date(utcSeconds * 1000);
  }

  generateIconURL({ iconId }) {
    return this.icons[ `${ iconId }.svg` ];
  }

  generateForecast() {
    console.log(this.state);
    const { days } = this.state;
    return days.map(day => (
      <Link
        key={`link-${ day.dt }`}
        to={{
          pathname: `/details/${ this.state.name }`,
          state: {
            day,
          },
        }}
      >
        <Forecast
          key={day.dt}
          date={this.generateDate({ utcSeconds: day.dt })}
          icon={this.generateIconURL({ iconId: day.weather[ 0 ].icon })}
        />
      </Link>
    ));
  }

  render() {
    const { name } = this.state;
    const days = this.generateForecast();
    console.log(days);
    return (
      <div className="forecast-container">
        <h1 className="header header-special">{name}</h1>
        {days}
        {JSON.stringify(this.state.data, null, 2)}
      </div>
    );
  }
}
