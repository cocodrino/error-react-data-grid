import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import 'react-table/react-table.css';

const mapStateToProps = state => {
  return {
    tablePanelData: state.dashboard.tablePanelData,
  };
};

const ResultPanelComponent = props => {
  const columns = [
    {
      Header: 'Date',
      accessor: 'timestamp', // String-based value accessors!
    },
    {
      Header: 'Value',
      accessor: 'value',
      Cell: _props => <span className="number">{_props.value}</span>, // Custom cell components!
    },
  ];

  const tableOrEmpty =
    props.tablePanelData && props.tablePanelData.length > 0 ? (
      <ReactTable data={props.tablePanelData} columns={columns} defaultPageSize={10} />
    ) : (
      <></>
    );

  return (
    <div className="w-4/12 treeview full-heigh-less-navbar overflow-auto resultpanel">
      {tableOrEmpty}
    </div>
  );
};

const ResultPanel = connect(mapStateToProps)(ResultPanelComponent);
export default ResultPanel;
