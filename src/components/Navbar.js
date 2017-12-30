import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from '../containers/SearchContainer';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <h1 className="nav-header">Open Weather Forecast</h1>
    </Link>
    <SearchContainer title="Open Weather Forecast" />
  </div>
);

export default Navbar;
