/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { militaryTime } from '../../utilities/timeUtils';

import './WeatherCard.scss';

const mapState = (state) => ({ ...state.weatherData });

const WeatherCard = ({ children, view, current }) => {
  function backgroundType() {
    const currentTime = militaryTime(current.dt);
    const sunriseTime = militaryTime(current.sunrise);
    const sunsetTime = militaryTime(current.sunset);

    if (currentTime > sunriseTime && currentTime < sunsetTime) {
      if (current.weather.description === 'cloudy') {
        return 'cloudy';
      } if (current.weather.description === 'rain') {
        return 'rain';
      } if (current.weather.description === 'fog') {
        return 'fog';
      } if (current.weather.description === 'snow') {
        return 'snow';
      } if (current.weather.description === 'hot') {
        return 'hot';
      } if (current.weather.description === 'sand') {
        return 'sand';
      } if (current.weather.description === 'tornado') {
        return 'tornado';
      } return 'day';
    } return 'night';
  }

  return (
    <div className={`weather-card weather-card--${view} weather-card--${backgroundType()}`}>
      {children}
    </div>
  );
};

WeatherCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  view: PropTypes.oneOf(['generic', 'front']),
  current: PropTypes.shape,
};

WeatherCard.defaultProps = {
  view: 'generic',
};

export default connect(mapState)(WeatherCard);
