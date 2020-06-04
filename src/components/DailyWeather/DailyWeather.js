import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { convertEpochToDay } from '../../utilities/timeUtils';
import { Accordion } from './Accordion/Accordion';
import Header from './Accordion/Header/Header';
import Panel from './Accordion/Panel/Panel';

import './DailyWeather.scss';

const mapState = (state) => ({
  DailyWeatherData: state.weatherData.daily
});

// const day = (index === 0) ? `${convertEpochToDay(data.dt)} Today` : convertEpochToDay(data.dt);

const DailyWeather = ({ DailyWeatherData }) => (
  <ul className="daily-weather">
    {DailyWeatherData.map((data) => (
      <li key={data.dt} className="daily-weather__list">
        <Accordion>
          <Header>
            Heading 1
          </Header>
          <Panel>
            info for panel
          </Panel>
        </Accordion>
      </li>
    ))}
  </ul>
);

DailyWeather.propTypes = {
  DailyWeatherData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default connect(mapState)(DailyWeather);
