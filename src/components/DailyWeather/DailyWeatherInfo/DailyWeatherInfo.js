/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { convertEpochToHour } from '../../../utilities/timeUtils';
import { degToCompass } from '../../../utilities/weatherUtils';

import './DailyWeatherInfo.scss';

const DailyWeatherInfo = ({
  wind_deg,
  wind_speed,
  humidity,
  sunrise,
  sunset
}) => (
  <div>
    <ul className="daily-weather-info">
      <li className="panel__wind">
        <span>Wind</span>
        <span>{degToCompass(wind_deg)} {Math.round(wind_speed)}mph</span>
      </li>
      <li>Humidity</li>
      <li className="daily-weather-info__wind">{degToCompass(wind_deg)} {Math.round(wind_speed)}mph</li>
      <li>{humidity}</li>
      <li className="panel__sunrise">Sunrise {convertEpochToHour(sunrise)}</li>
      <li className="panel__sunset">Sunset {convertEpochToHour(sunset)}</li>
    </ul>
  </div>
);

DailyWeatherInfo.propTypes = {
  wind_deg: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired
};

export default DailyWeatherInfo;
