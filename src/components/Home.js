import React from 'react';

import SearchContainer from '../containers/SearchContainer';

const Home = () => (
  <div className="main-container">
    <SearchContainer title="Enter a City and State" titleClass="header" />
  </div>
);

export default Home;
