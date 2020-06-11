import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HourlyInfo from './HourlyInfo/HourlyInfo';

import './HourlyWeather.scss';

const mapState = (state) => ({
  hourlyWeatherData: (state.weatherData.hourly).slice(0, 24)
});

const HourlyWeather = ({ hourlyWeatherData }) => (
  <ul className="hourly-weather">
    {hourlyWeatherData.map((data, index) => <HourlyInfo {...data} key={data.dt} index={index} />)}
  </ul>
);

HourlyWeather.propTypes = {
  hourlyWeatherData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default connect(mapState)(HourlyWeather);
