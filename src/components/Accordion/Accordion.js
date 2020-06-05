import React from 'react';
import PropTypes from 'prop-types';
import { AccordionContextProvider } from './AccordionContext';

const Accordion = ({ children }) => (
  <AccordionContextProvider>
    { children }
  </AccordionContextProvider>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired
};

export default Accordion;
