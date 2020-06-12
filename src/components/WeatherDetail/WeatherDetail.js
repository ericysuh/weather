/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { kelvinToFahrenheit } from '../../utilities/weatherUtils';
import { getTime } from '../../utilities/timeUtils';

const useState = (state) => ({
  ...state.weatherData.current
});

const WeatherDetail = ({
  feels_like,
  sunrise,
  sunset,
  humidity,
  wind_speed,
  pressure
}) => (
  <div>
    <p>DETAILS</p>
    <ul>
      <li>
        <span>icon</span>
        <span>Feels like</span>
        { kelvinToFahrenheit(feels_like) }&deg;
      </li>
      <li>
        <span>icon</span>
        <span>Sunrise</span>
        { getTime(sunrise) };
      </li>
      <li>
        <span>icon</span>
        <span>Sunset</span>
        { getTime(sunset) };
      </li>
      <li>
        <span>icon</span>
        <span>Humidity</span>
        { humidity }%;
      </li>
      <li>
        <span>icon</span>
        <span>Wind</span>
        { wind_speed }MPH;
      </li>
      <li>
        <span>icon</span>
        <span>Pressure</span>
        { pressure } hPa;
      </li>
    </ul>
  </div>
);

WeatherDetail.propTypes = {
  feels_like: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default connect(useState)(WeatherDetail);
