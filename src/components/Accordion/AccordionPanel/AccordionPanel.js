import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AccordionContext } from '../AccordionContext';

import './AccordionPanel.scss';

const AccordionPanel = ({ children }) => {
  const { isOpen } = useContext(AccordionContext);

  const panelClass = classNames('accordion-panel', {
    'accordion-panel--isOpen': isOpen
  });

  return (
    <div className={panelClass}>
      {children}
    </div>
  );
};

AccordionPanel.propTypes = {
  children: PropTypes.node.isRequired
};

export default AccordionPanel;
