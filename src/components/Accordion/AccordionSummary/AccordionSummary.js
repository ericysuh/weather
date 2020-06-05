/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from '../AccordionContext';

const AccordionSummary = ({ children }) => {
  const { toggleOpen } = useContext(AccordionContext);
  return (
    <div onClick={toggleOpen}>
      {children}
    </div>
  );
};

AccordionSummary.propTypes = {
  children: PropTypes.node.isRequired
};

export default AccordionSummary;
