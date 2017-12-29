import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

Error.propTypes = {
  error: string.isRequired,
};

export default function Error({ error }) {
  return (
    <div className="main-container">
      <h1 className="header">{error}</h1>
      <Link to="/" className="btn btn-failure">
        Try another search
      </Link>
    </div>
  );
}
