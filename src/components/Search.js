import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

Search.propTypes = {
  input: string,
  onChange: func.isRequired,
  title: string,
  containerClass: string,
  titleClass: string,
};

Search.defaultProps = {
  input: '',
  title: null,
  containerClass: null,
  titleClass: null,
};

export default function Search({
  title, containerClass, titleClass, input, onChange,
}) {
  return (
    <div className={containerClass}>
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
// <Link
// className="button"
// to={{
//   pathname: `${ match.url }/results`,
//   search: `?playerOneName=${ playerOneName }&playerTwoName=${ playerTwoName }`,
// }}
// >

// <Link to="/forecast">
//           <button type="button" className="btn btn-success">
//             Get Weather
//           </button>
//         </Link>
