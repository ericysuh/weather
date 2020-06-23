export const storageKey = {
  currWeather: 'currentWeatherData',
  dailyWeater: 'dailyWeatherData'
};
export const weatherAPI = {
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  key: '2c40af73a52b23160708ffb085d745cc'
};
export const postalCodeRegex = {
  EN_US: /^\d{5}$/,
  CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  INTERNATIONAL: /^[a-zA-Z0-9\-\s]*$/
};
