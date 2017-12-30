import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

Search.propTypes = {
  input: string,
  onChange: func.isRequired,
};

Search.defaultProps = {
  input: '',
};

export default function Search({
  input, onChange,
}) {
  return (
    <div>
      <div className="zipcode-container">
        <input
          type="text"
          className="form-control"
          placeholder="St. George, Utah"
          value={input}
          onChange={onChange}
        />
        <Link
          className="btn btn-success"
          to={
            input && {
              pathname: '/forecast',
              search: `?city=${ input }`,
            }
          }
        >
          Get Weather
        </Link>
      </div>
    </div>
  );
}
