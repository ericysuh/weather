import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import { convertEpochtoHour } from '../../../utilities/timeUtils';

import './HourlyInfo.scss';

const HourlyInfo = ({
  temp,
  dt,
  index,
  weather,
  minMax
}) => {
  const hour = (index === 0) ? 'Now' : convertEpochtoHour(dt);

  const weatherIcon = weather[0];

  const currentTemp = temp;

  const { minTemp, maxTemp } = minMax;

  const percentage = ((temp - minTemp) / (maxTemp - minTemp)) * 100;

  const graphPosition = () => `${percentage.toString()}%`;

  return (
    <>
      <div className="hourly-info__graph" key={dt}>
        <div
          className="hourly-info__weather"
          style={{
            bottom: graphPosition()
          }}
        >
          <WeatherIcon {...weatherIcon} category="owm-night" />
          <span className="hourly-info__temp">{currentTemp}&deg;</span>
        </div>
      </div>
      <span>{hour}</span>
    </>
  );
};

HourlyInfo.propTypes = {
  temp: PropTypes.number.isRequired,
  dt: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  weather: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  minMax: PropTypes.shape({
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number
  }).isRequired,
};

export default HourlyInfo;
