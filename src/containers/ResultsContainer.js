import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import queryString from 'query-string';

import Loading from '../components/Loading';
import Error from '../components/Error';
import ForecastContainer from './ForecastContainer';

import forecast from '../utils/api';

class ResultsContainer extends Component {
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
    this.updateData();
  };

  componentWillReceiveProps = (nextProps) => {
    const { city } = queryString.parse(nextProps.location.search);
    const { city: oldCity } = queryString.parse(this.props.location.search);
    if (city !== oldCity) {
      this.updateData({ city });
    }
  };

  updateData = ({ city } = queryString.parse(this.props.location.search)) => {
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
    const { loading, error, data } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }

    return <ForecastContainer data={data} />;
  }
}

export default ResultsContainer;
