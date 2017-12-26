import React, { Component } from 'react';

import Search from '../components/Search';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return <Search {...this.props} onChange={this.handleChange} input={this.state.input} />;
  }
}
