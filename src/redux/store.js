import { configureStore } from '@reduxjs/toolkit';
import weatherDataReducer from './weatherDataSlice';

const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer
  }
});

export default store;
