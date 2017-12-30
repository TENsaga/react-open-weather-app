import React from 'react';

import SearchContainer from '../containers/SearchContainer';

const Home = () => (
  <div className="home-container">
    <h1 className="header">Enter a City and State</h1>
    <SearchContainer />
  </div>
);

export default Home;
