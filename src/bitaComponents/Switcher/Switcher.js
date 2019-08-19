import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './lib/Switcher.scss';
import _Switch from './lib/_Switch';

const Switcher = props => {
  const [switches, setSwitches] = useState([]);

  function getKey(child) {
    return child.props._key || child.props.children || child.props.label;
  }

  if (props.children.length !== switches.length) {
    const keys = React.Children.map(props.children, child => {
      const key = getKey(child);
      return { key, isActive: Boolean(child.props.active) };
    });
    setSwitches(keys);
  }

  const onChange = key => {
    return isActive => {
      let state = [...switches];

      // si no se permiten activar multiples, desactivamos todos...
      if (props['allow-multiples-actives'] === false)
        state = state.map(swtch => ({ ...swtch, isActive: false }));

      // ...y activamos o desactivamos el switch marcado
      state = state.map(swtch => {
        if (swtch.key === key) return { ...swtch, isActive };
        return swtch;
      });

      // ejecutamos el callback pasandole un arreglo de los activos
      // preferimos retornar un objeto tipo {"key1":true} en vez de [{"key":"key1",isActive:true}]
      const rsp = {};

      // eslint-disable-next-line no-restricted-syntax
      for (const switcher of state) {
        rsp[switcher.key] = switcher.isActive;
      }

      props.onChange(rsp);

      // guardando el estado
      setSwitches(state);
    };
  };

  const chldrns =
    props.children.length !== switches.length ? (
      <></>
    ) : (
      React.Children.map(props.children, child => {
        const key = getKey(child);
        const checked = switches.find(s => s.key === key).isActive;

        return React.cloneElement(child, {
          classSwitch: child.props.classSwitch || props.classSwitch,
          onChange: onChange(key),
          checked,
        });
      })
    );

  return <ul className={`BitaSwitcher ${props.className}`}>{chldrns}</ul>;
};

Switcher.Switch = _Switch;

Switcher.propTypes = {
  'allow-multiples-actives': PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  classSwitch: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  _key: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Switcher.defaultProps = {
  'allow-multiples-actives': true,
  classSwitch: '',
  _key: false,
};

export default Switcher;
