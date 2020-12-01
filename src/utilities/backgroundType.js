const backgroundType = (objWeather) => {
  const {
    dt,
    sunrise,
    sunset,
    temp
  } = objWeather;
  const { description } = objWeather.weather[0];

  if (dt < sunrise && dt > sunset) return 'night';
  if (temp >= 90) return 'hot';

  switch (true) {
  /* Using includes() to map descriptions that have multiple variances into one value.
  For example, 'clouds' have variances of 'few clouds', 'scattered clouds', 'broken clouds', etc. */
    case description.includes('clouds'):
      return 'cloudy';
    case description.includes('rain'):
      return 'rain';
    case description.includes('fog' || 'mist'):
      return 'fog';
    case description.includes('snow'):
      return 'snow';
    case description.includes('sand'):
      return 'sand';
    case description.includes('tornado'):
      return 'tornado';
    default:
      return 'day';
  }
};

export default backgroundType;
