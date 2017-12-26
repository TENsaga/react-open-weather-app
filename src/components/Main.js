import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import Forecast from './Forecast';

export default function Main() {
  return (
    <div className="home-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/details" />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}