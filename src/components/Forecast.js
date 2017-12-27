import React, { Component } from 'react';

import Loading from './Loading';

class Forecast extends Component {
  state = {
    loading: false,
  };

  render() {
    return <div>{this.state.loading ? <Loading /> : 'Forecast'}</div>;
  }
}

export default Forecast;
