import React from 'react';
import LocationInput from '../LocationInput/LocationInput';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import DailyWeather from '../DailyWeather/DailyWeather';

import './App.scss';

const App = () => (
  <div className="app">
    <LocationInput />
    <CurrentWeather />
    <HourlyWeather />
    <DailyWeather />
  </div>
);

export default App;
