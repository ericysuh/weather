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
  view: PropTypes.oneOf(['front', 'back']).isRequired
};

export default WeatherCard;
