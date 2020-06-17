/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// import LocationInput from '../LocationInput/LocationInput';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherHeader from '../WeatherHeader/WeatherHeader';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

import './App.scss';

const mapState = (state) => ({ ...state.weatherData });

const App = ({ city }) => {
  const maybeRenderFirstTimeUser = () => {
    if (city.length) return null;

    return (
      <WeatherCard>
        <input className="weather-input" type="text" placeholder="Enter Zipcode" />
      </WeatherCard>
    );
  };

  const maybeRenderWeather = () => {
    if (!city.length) return null;

    return (
      <>
        <WeatherCard view="front">
          <WeatherHeader />
          <div className="weather-app__main">
            <CurrentWeather />
          </div>
          <HourlyWeather />
        </WeatherCard>

        <WeatherCard view="back">
          <WeatherDetail />
          <DailyWeather />
        </WeatherCard>
      </>
    );
  };

  return (
    <div className="weather-app">
      {maybeRenderFirstTimeUser()}
      {maybeRenderWeather()}
    </div>
  );
};

App.propTypes = {
  city: PropTypes.string.isRequired
};

App.defaultProps = {
  city: ''
};

export default connect(mapState)(App);
