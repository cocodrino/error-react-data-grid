import React from 'react';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import TreeMenu from 'react-simple-tree-menu';
import { connect } from 'react-redux';

import * as Action from '../../../state/actions/calculator-actions';

import styles from './ListPanelSection.module.scss';

const mapStateToProps = state => {
  return {
    sideBarSelected: state.dashboard.sideBarSelected,
    optionPanelData: state.dashboard.optionPanelData.data,
    optionLoading: state.dashboard.optionLoading,
  };
};

const ListPanelSectionComponent = props => {
  const list =
    props.optionPanelData && props.optionPanelData.length > 0 ? (
      <TreeMenu
        initialActiveKey="no"
        onClickItem={({ key, label, ...data }) => {
          console.log(`presionado ${label} con ${data}`);
          // eslint-disable-next-line no-param-reassign
          data.label = label;
          props.dispatch(Action.storeClickedOptionPanel(data));
        }}
        hasSearch={false}
        data={props.optionPanelData}
      />
    ) : (
      <></>
    );

  const component = props.optionLoading ? <h2>Cargando</h2> : list;

  return (
    <div
      className="w-3/12 px-4 pt-2 treeview max-h-screen overflow-auto full-heigh-less-navbar background-gray1"
      data-simplebar
    >
      <div className={styles.treeview}>{component}</div>
    </div>
  );
};

const ListPanelSection = connect(mapStateToProps)(ListPanelSectionComponent);
export default ListPanelSection;
