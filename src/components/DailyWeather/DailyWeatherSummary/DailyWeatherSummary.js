/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { convertEpochToDay } from '../../../utilities/timeUtils';
import { kelvinToFahrenheit, degToCompass } from '../../../utilities/weatherUtils';

import './DailyWeatherSummary.scss';

const DailyWeatherSummary = ({
  dt,
  temp,
  weather,
  wind_deg,
  wind_speed,
  index
}) => {
  const day = (index === 0) ? `${convertEpochToDay(dt)} Today` : convertEpochToDay(dt);
  return (
    <div className="daily-weather-summary">
      <span>{day}</span>
      <span>
        {kelvinToFahrenheit(temp.max)}&deg;/
        {kelvinToFahrenheit(temp.min)}&deg;
      </span>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <span>{weather[0].description}</span>
      </div>
      <span>{degToCompass(wind_deg)} {Math.round(wind_speed)} mph</span>
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
  })).isRequired,
  wind_deg: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default DailyWeatherSummary;
