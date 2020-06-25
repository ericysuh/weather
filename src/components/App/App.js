/* eslint-disable import/named */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// import LocationInput from '../LocationInput/LocationInput';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import WeatherCard from '../WeatherCard/WeatherCard';
import LocationInput from '../LocationInput/LocationInput';
import WeatherHeader from '../WeatherHeader/WeatherHeader';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

import './App.scss';

const mapState = (state) => ({ ...state.weatherData });

const App = ({ city }) => {
  const maybeRenderFirstTimeUser = () => {
    if (city.length) return null;

    return (
      <WeatherCard>
        <LocationInput />
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

        <WeatherCard>
          <WeatherDetail />
          <DailyWeather />
        </WeatherCard>
      </>
    );
  };

  const classes = classNames('weather-app', {
    'weather-app--single': !city.length
  });

  return (
    <div className={classes}>
      {maybeRenderFirstTimeUser()}
      {maybeRenderWeather()}
    </div>
  );
};

App.propTypes = {
  city: PropTypes.string
};

App.defaultProps = {
  city: ''
};

export default connect(mapState)(App);
