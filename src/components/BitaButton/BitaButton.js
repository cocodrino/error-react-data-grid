import React from 'react';
import PropTypes from 'prop-types';

const classes = {
  button: color => `w-12 text-3xl text-gray-800 px-4 mx-2 rounded-full ${color}`,
};

const BitaButton = props => {
  const buttonClass = props.alternative
    ? classes.button('bg-alternative')
    : classes.button('bg-electricalblue');

  return (
    <button type="button" className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

BitaButton.propTypes = {
  onClick: PropTypes.isRequired,
  alternative: PropTypes.bool,
};

BitaButton.defaultProps = {
  alternative: false,
};

export default BitaButton;
