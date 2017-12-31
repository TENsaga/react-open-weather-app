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

export default function Search(props) {
  const { input, onChange } = props;
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Victoria, CA"
        value={input}
        onChange={onChange}
      />
      <Link
        className={input ? 'btn' : 'btn btn-disable'}
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
  );
}
