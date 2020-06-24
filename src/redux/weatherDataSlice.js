/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { weatherAPI } from '../constants/weatherConstants';
import handleErrors from '../utilities/fetch';

const updateTempData = (data) => {
  // Update current weather
  data.current.temp = Math.round(data.current.temp);
  data.current.feels_like = Math.round(data.current.feels_like);
  // Update daily weather
  data.daily = data.daily.slice(1, 8);
  data.daily = data.daily.map((day) => {
    day.temp.min = Math.round(day.temp.min);
    day.temp.max = Math.round(day.temp.max);

    return day;
  });
  // Update hourly weather
  data.hourly = data.hourly.slice(0, 24);
  data.hourly = data.hourly.map((hour) => {
    hour.temp = Math.round(hour.temp);

    return hour;
  });
};

const fetchOneCallApi = async ({ lat, lon }) => {
  try {
    const apiURL = `${weatherAPI.baseURL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${weatherAPI.key}`;
    const data = await fetch(apiURL)
      .then((res) => handleErrors(res))
      .then((res) => res.json());

    return data;
  } catch (err) {
    throw Error(err);
  }
};

const fetchCurrentWeatherData = createAsyncThunk(
  'weatherData/fetchCurrentWeather',
  async (zipcode) => {
    try {
      const apiURL = `${weatherAPI.baseURL}/weather?zip=${zipcode},us&appid=${weatherAPI.key}`;
      // Get current weather
      const data = await fetch(apiURL)
        .then((res) => handleErrors(res))
        .then((res) => res.json());

      const { coord, name } = data;

      // Get current/hourly/daily weather
      const fullData = await fetchOneCallApi(coord);
      fullData.city = name;
      updateTempData(fullData);

      return fullData;
    } catch (err) {
      throw Error(err);
    }
  }
);

const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchCurrentWeatherData.pending]: (state) => {
      state.isLoading = true;
      state.error = {};
    },
    [fetchCurrentWeatherData.fulfilled]: (state, action) => {
      action.payload.isLoading = false;
      action.payload.error = {};
      return action.payload;
    },
    [fetchCurrentWeatherData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    }
  }
});

export default weatherDataSlice.reducer;
export { fetchCurrentWeatherData };
