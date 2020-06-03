export const kelvinToFahrenheit = (k) => Math.floor(((k - 273.15) * 1.8) + 32);

export const kelvinToCelsius = (k) => Math.floor(k - 273.15);

export const degToCompass = (num) => {
  const val = Math.floor((num / 22.5) + 0.5);
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

  return arr[(val % 16)];
};
