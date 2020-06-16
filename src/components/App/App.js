import React from 'react';
// import LocationInput from '../LocationInput/LocationInput';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyWeather from '../DailyWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherHeader from '../WeatherHeader/WeatherHeader';
import WeatherDetail from '../WeatherDetail/WeatherDetail';

import './App.scss';


const App = () => (
  <div className="weather-app">
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
  </div>
);

export default App;
