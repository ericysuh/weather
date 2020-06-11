import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import { kelvinToFahrenheit } from '../../../utilities/weatherUtils';
import { convertEpochtoHour } from '../../../utilities/timeUtils';

const mapState = (state) => ({
  minTemp: state.weatherData.daily[0].dt,
  maxTemp: state.weatherData.daily[0].temp.max
});

const HourlyInfo = ({
  temp,
  dt,
  index,
  weather,
}) => {
  const hour = (index === 0) ? 'Now' : convertEpochtoHour(dt);

  const weatherIcon = weather[0];

  const currentTemp = kelvinToFahrenheit(temp);

  return (
    <li key={dt} className="hourly-weather__list">
      <WeatherIcon {...weatherIcon} />
      <p>{currentTemp}&deg;</p>
      <span>{hour}</span>

    </li>
  );
};

HourlyInfo.propTypes = {
  temp: PropTypes.number.isRequired,
  dt: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  weather: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired
};

export default connect(mapState)(HourlyInfo);
