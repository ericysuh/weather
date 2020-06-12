import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HourlyInfo from './HourlyInfo/HourlyInfo';

import './HourlyWeather.scss';

const mapState = (state) => ({
  hourlyWeatherData: (state.weatherData.hourly).slice(0, 24)
});

const HourlyWeather = ({ hourlyWeatherData }) => {
  let minTemp = Number.MAX_SAFE_INTEGER;
  let maxTemp = Number.MIN_SAFE_INTEGER;

  hourlyWeatherData.forEach((hour) => {
    minTemp = Math.min(minTemp, hour.temp);
    maxTemp = Math.max(maxTemp, hour.temp);
  });

  return (
    <ul className="hourly-weather">
      {hourlyWeatherData.map((data, index) => (
        <HourlyInfo {...data} key={data.dt} index={index} minMax={{ minTemp, maxTemp }} />
      ))}
    </ul>
  );
};

HourlyWeather.propTypes = {
  hourlyWeatherData: PropTypes.arrayOf(
    PropTypes.shape
  ).isRequired
};

export default connect(mapState)(HourlyWeather);
