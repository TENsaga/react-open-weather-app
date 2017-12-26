import React, { Component } from 'react';

import SearchContainer from '../containers/SearchContainer';

class Home extends Component {
  state = {
    city: null,
  };
  render() {
    return <SearchContainer title="Enter a City and State" titleClass="header" />;
  }
}

export default Home;
