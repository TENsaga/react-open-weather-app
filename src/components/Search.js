import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

Search.propTypes = {
  input: string,
  onChange: func.isRequired,
  title: string,
  titleClass: string,
};

Search.defaultProps = {
  input: '',
  title: null,
  titleClass: null,
};

export default function Search({
  title, titleClass, input, onChange,
}) {
  return (
    <div>
      <h1 className={titleClass}>{title}</h1>
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
