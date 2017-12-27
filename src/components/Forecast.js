import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';
import queryString from 'query-string';

import Loading from './Loading';
import { forecast } from '../utils/api';

class Forecast extends Component {
  static propTypes = {
    location: shape({
      search: string.isRequired,
    }).isRequired,
  };

  state = {
    loading: true,
    error: null,
    data: null,
  };

  componentDidMount = () => {
    const { city } = queryString.parse(this.props.location.search);
    forecast(city).then((data) => {
      if (!data) {
        this.setState({
          error: 'Looks like there was an error with the search',
          loading: false,
        });
      } else {
        this.setState({
          data,
          loading: false,
          error: null,
        });
      }
    });
  };

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <div className="column">
          <h1 className="header">{error}</h1>
          <Link to="/" className="btn btn-failure">
            Reset
          </Link>
        </div>
      );
    }
    return <div>{JSON.stringify(this.state.data, null, 2)}</div>;
  }
}

export default Forecast;
