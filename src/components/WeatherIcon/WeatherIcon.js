import React from 'react';
import PropTypes from 'prop-types';

import './WeatherIcon.scss';

const WeatherIcon = ({ description, id, category }) => (
  <span
    className={`weather-icon weather-icon-${category}-${id}`}
    aria-label={description}
  />
);

WeatherIcon.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  category: PropTypes.string.isRequired
};

export default WeatherIcon;
