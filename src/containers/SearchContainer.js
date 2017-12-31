import React, { Component } from 'react';

import Search from '../components/Search';

export default class SearchContainer extends Component {
  state = {
    input: '',
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return <Search onChange={this.handleChange} input={this.state.input} />;
  }
}
