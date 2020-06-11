import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDayOfWeek, getTime } from '../../utilities/timeUtils';

import './WeatherHeader.scss';

const mapState = (state) => ({
  city: state.weatherData.city,
  ...state.weatherData.current
});

const WeatherHeader = ({ city, dt }) => (
  <div className="weather-header">
    <p className="weather-header__city">{city}</p>
    <span className="weather-header__current-time">{getDayOfWeek(dt)} as of {getTime(dt)}</span>
  </div>
);

WeatherHeader.propTypes = {
  city: PropTypes.string.isRequired,
  dt: PropTypes.number.isRequired
};

export default connect(mapState)(WeatherHeader);
