import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DailyWeatherSummary from './DailyWeatherSummary/DailyWeatherSummary';
import DailyWeatherInfo from './DailyWeatherInfo/DailyWeatherInfo';
import Accordion from '../Accordion/Accordion';
import AccordionSummary from '../Accordion/AccordionSummary/AccordionSummary';
import AccordionPanel from '../Accordion/AccordionPanel/AccordionPanel';

import './DailyWeather.scss';

const mapState = (state) => ({
  DailyWeatherData: state.weatherData.daily
});

const DailyWeather = ({ DailyWeatherData }) => (
  <ul className="daily-weather">
    {DailyWeatherData.map((data, index) => (
      <li key={data.dt} className="daily-weather__list">
        <Accordion>
          <AccordionSummary>
            <DailyWeatherSummary {...data} index={index} />
          </AccordionSummary>
          <AccordionPanel>
            <DailyWeatherInfo {...data} />
          </AccordionPanel>
        </Accordion>
      </li>
    ))};
  </ul>
);

DailyWeather.propTypes = {
  DailyWeatherData: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default connect(mapState)(DailyWeather);
