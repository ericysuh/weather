/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from '../Accordion';

import './Header.scss';

const Header = ({ children }) => {
  const { clickHandler } = useContext(AccordionContext);
  return (
    <div className="header" onClick={clickHandler}>
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
