import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import ResultsContainer from '../containers/ResultsContainer';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/forecast" component={ResultsContainer} />
      <Route path="/details" />
      <Route component={NotFound} />
    </Switch>
  );
}
