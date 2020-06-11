import React from 'react';
import PropTypes from 'prop-types';

import './WeatherIcon.scss';

// Time is defaulted to night.
// TODO! Make time set to day/night based on sunset/sunrise times

const WeatherIcon = ({ description, id }) => (
  <span
    className={`weather-icon weather-icon-owm-night-${id}`}
    aria-label={description}
  />
);

WeatherIcon.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default WeatherIcon;
