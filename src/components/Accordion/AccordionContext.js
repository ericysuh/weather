import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const AccordionContext = createContext();

const AccordionContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
      { children }
    </AccordionContext.Provider>
  );
};

AccordionContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { AccordionContext, AccordionContextProvider };
