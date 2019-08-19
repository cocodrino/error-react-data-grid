import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import SidebarButton from './lib/SidebarButton';

const Sidebar = props => {
  const [activeButtonKey, setactiveButtonKey] = useState(null);

  const chldrns = React.Children.map(props.children, (child, k) => {
    return React.cloneElement(child, {
      isSelected: activeButtonKey === k,
      changeActiveButton: () => setactiveButtonKey(k),
    });
  });

  return (
    <ul
      className={`flex w-full shadow-md sm:flex-col sm:w-24 sidebar ${props.extraClass}`}
    >
      {chldrns}
    </ul>
  );
};

Sidebar.propTypes = {
  extraClass: PropTypes.string,
};

Sidebar.defaultProps = {
  extraClass: '',
};

Sidebar.Button = SidebarButton;

export default Sidebar;
