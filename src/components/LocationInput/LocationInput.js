import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentWeatherData } from '../../redux/weatherDataSlice';

import './LocationInput.scss';

const mapState = (state) => ({ ...state.weatherData });

const LocationInput = ({ error, dispatch }) => {
  const fetchData = (event) => {
    if (event.key !== 'Enter') return;

    dispatch(fetchCurrentWeatherData(event.target.value));
  };

  const maybeRenderError = () => {
    if (!error.length) return null;
    return <span className="location-input__error">{error}</span>;
  };

  return (
    <div className="location-input">
      <input className="location-input__field" type="text" placeholder="Enter Zipcode" onKeyUp={fetchData} />
      {maybeRenderError()}
    </div>
  );
};

LocationInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string
};

LocationInput.defaultProps = {
  error: ''
};

export default connect(mapState)(LocationInput);
