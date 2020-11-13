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
import { fetchCurrentWeatherData } from '../../redux/weatherDataSlice';

import './App.scss';

const mapState = (state) => ({ ...state.weatherData });

const App = ({
  city, dispatch, current, zipcode, isLoading, error
}) => {
  const maybeRenderFirstTimeUser = () => {
    if (city.length) return null;

    return (
      <WeatherCard>
        <LocationInput className="weather-app__input" />
      </WeatherCard>
    );
  };

  const maybeRenderWeather = () => {
    if (!city.length) return null;

    const savedTime = current.dt;
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const tenMinutes = 60 * 10;

    if (savedTime + tenMinutes < currentTime && !isLoading && !error) {
      dispatch(fetchCurrentWeatherData(zipcode));
      return null;
    }
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
  city: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  current: PropTypes.shape,
  zipcode: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

App.defaultProps = {
  city: ''
};

export default connect(mapState)(App);
