import React from 'react';
import { connect } from 'react-redux';
import styles from './TitleSection.module.scss';

const mapStateToProps = state => {
  return {
    sideBarSelected: state.dashboard.sideBarSelected,
  };
};

const TitleSectionComponent = props => {
  let title = ' ';
  if (props.sideBarSelected === 'SB_INDICES') {
    title = 'INDEX';
  }
  if (props.sideBarSelected === 'SB_CRYPTOS') {
    title = 'CRYPTOS';
  }
  if (props.sideBarSelected === 'SB_USERS') {
    title = 'USERS';
  }

  return <div className={styles.title}>{title}</div>;
};

const TitleSection = connect(mapStateToProps)(TitleSectionComponent);
export default TitleSection;
