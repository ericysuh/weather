/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import './WeatherCard.scss';

const WeatherCard = ({ children, view }) => {
  const backgroundType = 'night'; // hard coding it to night for now

  return (
    <div className={`weather-card weather-card--${view} weather-card--${backgroundType}`}>
      {children}
    </div>
  );
};

WeatherCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  view: PropTypes.oneOf(['generic', 'front'])
};

WeatherCard.defaultProps = {
  view: 'generic'
};

export default WeatherCard;
