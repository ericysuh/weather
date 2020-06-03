import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { kelvinToFahrenheit } from '../../utilities/weatherUtils';
import { convertEpochToHour } from '../../utilities/timeUtils';

import './HourlyWeather.scss';

const mapState = (state) => ({
  hourlyWeatherData: (state.weatherData.hourly).slice(0, 24)
});

const HourlyWeather = ({ hourlyWeatherData }) => (
  <ul className="hourly-weather">
    {hourlyWeatherData.map((data, index) => {
      const hour = (index === 0) ? 'Now' : convertEpochToHour(data.dt);
      return (
        <li key={data.dt} className="hourly-weather__list">
          {hour}&nbsp;
          {kelvinToFahrenheit(data.temp)}&deg;
          <img className="hourly-weather__list--image" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
        </li>
      );
    })}
  </ul>
);

HourlyWeather.propTypes = {
  hourlyWeatherData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default connect(mapState)(HourlyWeather);
