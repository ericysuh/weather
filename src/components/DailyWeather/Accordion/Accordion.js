import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import './Accordion.scss';

const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <AccordionContext.Provider value={{ clickHandler, isOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired
};

export { Accordion, AccordionContext };
