import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { kelvinToFahrenheit, degToCompass } from '../../utilities/weatherUtils';
import { convertEpochToDay } from '../../utilities/timeUtils';

import './DailyWeather.scss';

const mapState = (state) => ({
  DailyWeatherData: state.weatherData.daily
});

const DailyWeather = ({ DailyWeatherData }) => (
  <ul className="daily-weather">
    {DailyWeatherData.map((data, index) => {
      const day = (index === 0) ? `${convertEpochToDay(data.dt)} Today` : convertEpochToDay(data.dt);
      return (
        <li key={data.dt} className="daily-weather__list">
          <span>{day}</span>
          <span>
            {kelvinToFahrenheit(data.temp.max)}&deg;/
            {kelvinToFahrenheit(data.temp.min)}&deg;
          </span>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
            <span>{data.weather[0].description}</span>
          </div>
          <span>{degToCompass(data.wind_deg)} {Math.round(data.wind_speed)} mph</span>
        </li>
      );
    })}
  </ul>
);

DailyWeather.propTypes = {
  DailyWeatherData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default connect(mapState)(DailyWeather);