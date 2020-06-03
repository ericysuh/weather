import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { kelvinToFahrenheit } from '../../utilities/weatherUtils';

import './CurrentWeather.scss';

const mapState = (state) => ({
  city: state.weatherData.city,
  currentWeather: state.weatherData.current.weather[0].main,
  currentTemp: kelvinToFahrenheit(state.weatherData.current.temp),
});

const CurrentWeather = ({
  city, currentWeather, currentTemp
}) => (
  <div className="current-weather">
    <p>{city}</p>
    <p>{currentWeather}</p>
    <p>{currentTemp}&deg;</p>
  </div>
);

CurrentWeather.propTypes = {
  city: PropTypes.string.isRequired,
  currentWeather: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
};

export default connect(mapState)(CurrentWeather);
