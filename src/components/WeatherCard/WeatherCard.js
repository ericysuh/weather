/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import backgroundType from '../../utilities/backgroundType';

import './WeatherCard.scss';

const mapState = (state) => ({ ...state.weatherData });

const WeatherCard = ({ children, view, current }) => {
  const background = backgroundType(current);

  return (
    <div className={`weather-card weather-card--${view} weather-card--${background}`}>
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
