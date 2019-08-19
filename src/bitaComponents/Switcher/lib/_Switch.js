import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

const _Switch = props => {
  return (
    <div className={`BitaSwitch ${props.label} ${props.classSwitch}`}>
      <Switch
        onChange={props.onChange}
        offColor="#5c5c5c"
        onColor="#50C1FB"
        handleDiameter={20}
        height={20}
        width={42}
        checked={props.checked}
      />
      <span className={props.classLabel}>{props.label}</span>
    </div>
  );
};

_Switch.propTypes = {
  classSwitch: PropTypes.string,
  classLabel: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  label: PropTypes.string,
};

_Switch.defaultProps = {
  classSwitch: '',
  classLabel: '',
};

export default _Switch;
