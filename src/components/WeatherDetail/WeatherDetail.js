/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { kelvinToFahrenheit } from '../../utilities/weatherUtils';
import { getTime } from '../../utilities/timeUtils';

import './WeatherDetail.scss';

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
  <div className="weather-detail">
    <h2 className="weather-app__sub-heading">DETAILS</h2>
    <ul className="weather-detail__current">
      <li className="weather-detail__list">
        <WeatherIcon description="thermometer" category="misc" id="thermometer" />
        <span className="weather-detail__list-label">Feels like</span>
        { kelvinToFahrenheit(feels_like) }&deg;
      </li>
      <li className="weather-detail__list">
        <WeatherIcon description="sunrise" category="misc" id="sunrise" />
        <span className="weather-detail__list-label">Sunrise</span>
        { getTime(sunrise) };
      </li>
      <li className="weather-detail__list">
        <WeatherIcon description="sunset" category="misc" id="sunset" />
        <span className="weather-detail__list-label">Sunset</span>
        { getTime(sunset) };
      </li>
      <li className="weather-detail__list">
        <WeatherIcon description="humidity" category="misc" id="humidity" />
        <span className="weather-detail__list-label">Humidity</span>
        { humidity }%;
      </li>
      <li className="weather-detail__list">
        <WeatherIcon description="strong-wind" category="misc" id="strong-wind" />
        <span className="weather-detail__list-label">Wind</span>
        { wind_speed }MPH;
      </li>
      <li className="weather-detail__list">
        <WeatherIcon description="barometer" category="misc" id="barometer" />
        <span className="weather-detail__list-label">Pressure</span>
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
