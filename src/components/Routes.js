import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import ResultsContainer from '../containers/ResultsContainer';
import ForecastDetails from './ForecastDetails';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/forecast" component={ResultsContainer} />
      <Route path="/details" component={ForecastDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}
