import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AccordionContext } from '../Accordion';

import './Panel.scss';

const Panel = ({ children }) => {
  const { isOpen } = useContext(AccordionContext);

  const panelClass = classNames('panel', {
    'panel-isOpen': isOpen
  });

  return (
    <div className={panelClass}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Panel;
