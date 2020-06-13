import React from 'react';
import PropTypes from 'prop-types';

import './WeatherIcon.scss';

// Time is defaulted to night.
// TODO! Make time set to day/night based on sunset/sunrise times

const WeatherIcon = ({ description, id, category }) => (
  <span
    className={`weather-icon weather-icon-${category}-${id}`}
    aria-label={description}
  />
);

WeatherIcon.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default WeatherIcon;
