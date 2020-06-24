import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './CurrentWeather.scss';

const mapState = (state) => ({
  ...state.weatherData.current,
  dailyTemp: state.weatherData.daily[0].temp,
});

const CurrentWeather = ({
  temp, weather, dailyTemp
}) => (
  <div className="current-weather">
    <span className="current-weather__description">
      <WeatherIcon {...weather[0]} category="owm-night" />
      <span className="current-weather__text">{weather[0].description}</span>
    </span>
    <p className="current-weather__now">{temp}&deg;</p>
    <span className="current-weather__range">
      <span className="current-weather__range-temp">{dailyTemp.min}&deg; F</span>
      <span className="current-weather__range-temp">{dailyTemp.max}&deg; F</span>
    </span>

  </div>
);

CurrentWeather.propTypes = {
  temp: PropTypes.number.isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string
    })
  ).isRequired,
  dailyTemp: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  }).isRequired
};

export default connect(mapState)(CurrentWeather);
