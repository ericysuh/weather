/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { weatherAPI } from '../constants/weatherConstants';

const fetchOneCallApi = async ({ lat, lon }) => {
  try {
    const apiURL = `${weatherAPI.baseURL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${weatherAPI.key}`;
    const data = await fetch(apiURL).then((res) => res.json());
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchCurrentWeatherData = createAsyncThunk(
  'weatherData/fetchCurrentWeather',
  // eslint-disable-next-line consistent-return
  async (zipcode) => {
    try {
      const apiURL = `${weatherAPI.baseURL}/weather?zip=${zipcode},us&appid=${weatherAPI.key}`;
      const data = await fetch(apiURL).then((res) => res.json());
      const { coord, name } = data;

      const fullData = await fetchOneCallApi(coord);
      fullData.city = name;

      return fullData;
    } catch (err) {
      return err;
    }
  }
);

const weatherData = createSlice({
  name: 'weatherData',
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchCurrentWeatherData.fulfilled]: (state, action) => action.payload
  }
});

export default weatherData.reducer;
export { fetchCurrentWeatherData };
