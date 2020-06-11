import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { kelvinToFahrenheit } from '../../utilities/weatherUtils';

import './CurrentWeather.scss';

const mapState = (state) => ({
  currentWeather: state.weatherData.current.weather[0].main,
  currentTemp: kelvinToFahrenheit(state.weatherData.current.temp),
});

const CurrentWeather = ({
  currentWeather, currentTemp
}) => (
  <div className="current-weather">
    <p>{currentWeather}</p>
    <p>{currentTemp}&deg;</p>
  </div>
);

CurrentWeather.propTypes = {
  currentWeather: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
};

export default connect(mapState)(CurrentWeather);
