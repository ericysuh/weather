import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utilities/localStorage';
import weatherDataReducer from './weatherDataSlice';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (result.type.includes('weatherData/')) {
    saveState(store.getState().weatherData, 'weatherData');
  }
  return result;
};

const middleware = [...getDefaultMiddleware(), localStorageMiddleware];

const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer
  },
  middleware,
  preloadedState: {
    weatherData: loadState('weatherData')
  }
});

export default store;
