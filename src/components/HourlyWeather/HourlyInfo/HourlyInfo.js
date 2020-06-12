import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import { kelvinToFahrenheit } from '../../../utilities/weatherUtils';
import { convertEpochtoHour } from '../../../utilities/timeUtils';

const HourlyInfo = ({
  temp,
  dt,
  index,
  weather,
  minMax
}) => {
  const hour = (index === 0) ? 'Now' : convertEpochtoHour(dt);

  const weatherIcon = weather[0];

  const currentTemp = kelvinToFahrenheit(temp);

  const { minTemp, maxTemp } = minMax;

  const percentage = ((temp - minTemp) / (maxTemp - minTemp)) * 100;

  const graphPosition = () => `${percentage.toString()}%`;

  return (
    <li key={dt}>
      <div
        style={{
          bottom: graphPosition()
        }}
      >
        <WeatherIcon {...weatherIcon} />
        <p>{currentTemp}&deg;</p>
      </div>
      <span>{hour}</span>

    </li>
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
