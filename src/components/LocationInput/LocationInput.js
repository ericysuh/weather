import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentWeatherData } from '../../redux/weatherDataSlice';

import './LocationInput.scss';

const mapState = (state) => ({ ...state.weatherData });

const LocationInput = ({ error, dispatch, className }) => {
  const fetchData = (event) => {
    if (event.key !== 'Enter') return;

    dispatch(fetchCurrentWeatherData(event.target.value));
  };

  const maybeRenderError = () => {
    if (!error.length) return null;
    return <span className="location-input__error">{error}</span>;
  };

  let localClassName = 'location-input';
  if (className.length) {
    localClassName += ` ${className}`;
  }

  return (
    <div className={localClassName}>
      <input className="location-input__field" type="text" placeholder="Enter Zipcode" onKeyUp={fetchData} />
      {maybeRenderError()}
    </div>
  );
};

LocationInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  className: PropTypes.string
};

LocationInput.defaultProps = {
  error: '',
  className: ''
};

export default connect(mapState)(LocationInput);
