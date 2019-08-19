import React from 'react';
import PropTypes from 'prop-types';
import styles from '../SidebarButton.module.scss';

const SidebarButton = props => {
  // cuando se da click en un boton se cambia el boton activo y luego si se ejecuta el callback proporcionado
  // por el usuario
  const onclick = () => {
    props.changeActiveButton();
    props.onClick();
  };

  return (
    <li>
      <button
        className={`sidebarButton ${styles.button}${
          props.isSelected ? ' text-electricalblue' : ' '
        }`}
        onClick={onclick}
      >
        <img src={props.image} alt={props.label} className={styles.img} />
        {props.label}
      </button>
    </li>
  );
};

SidebarButton.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
};

SidebarButton.defaultProps = {
  label: '',
};

export default SidebarButton;
