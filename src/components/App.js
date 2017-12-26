import React from 'react';

import Navbar from './Navbar';
import Main from './Main';

import '../style.scss';

// Parent: Entry - index.js, Children: Popular
const App = () => (
  <div className="app-container">
    <Navbar />
    <Main />
  </div>
);

export default App;
