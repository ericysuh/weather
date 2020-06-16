/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { getDayOfWeek } from '../../../utilities/timeUtils';
import { kelvinToFahrenheit } from '../../../utilities/weatherUtils';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';

import './DailyWeatherSummary.scss';

const DailyWeatherSummary = ({
  dt,
  temp,
  weather,
}) => {
  const day = getDayOfWeek(dt);
  return (
    <div className="daily-weather-summary">
      <span>{day}</span>
      <WeatherIcon {...weather[0]} category="owm-night" />
      <span>
        {kelvinToFahrenheit(temp.max)}&deg;
        {kelvinToFahrenheit(temp.min)}&deg;
      </span>
    </div>
  );
};

DailyWeatherSummary.propTypes = {
  dt: PropTypes.number.isRequired,
  temp: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired
  }).isRequired,
  weather: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })).isRequired
};

export default DailyWeatherSummary;
