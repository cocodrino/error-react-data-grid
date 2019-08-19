import React from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../state/actions/calculator-actions';
import Sidebar from '../../../bitaComponents/Sidebar/Sidebar';

// Imagenes del sidebar
import index from '../../../static/img/Icons/Index.svg';
import users from '../../../static/img/Icons/Users.svg';
import cryptos from '../../../static/img/Icons/Crypto.svg';

const mapStateToProps = state => {
  return { sideBarSelected: state.dashboard.sideBarSelected };
};

const SidebarSectionComponent = props => {
  return (
    <Sidebar>
      <Sidebar.Button
        label="Index"
        image={index}
        onClick={() => props.dispatch(Action.selectIndices())}
      />
      <Sidebar.Button
        label="Cryptos"
        image={cryptos}
        onClick={() => props.dispatch(Action.selectCripto())}
      />
      <Sidebar.Button
        label="User"
        image={users}
        onClick={() => props.dispatch(Action.selectUsers())}
      />
    </Sidebar>
  );
};

const SidebarSection = connect(mapStateToProps)(SidebarSectionComponent);
export default SidebarSection;
