import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import * as Action from '../state/actions/task-actions';
import ConfigPanel from '../components/Config_Panel';

const mapStateToProps = state => ({
  metrics: state.metrics.list,
  data: state.metrics.data,
});

const mapDispatchToProps = dispatch => ({
  saveTask: task => dispatch(Action.saveTask(task)),
});

const Grid = ({ initialData, columns }) => {
  const [rows, setRows] = useState(initialData);

  const sortRows = (_initialRows, sortColumn, sortDirection) => _rows => {
    // eslint-disable-next-line consistent-return
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      }
      if (sortDirection === 'DESC') {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    return sortDirection === 'NONE' ? _initialRows : [..._rows].sort(comparer);
  };

  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      minHeight={150}
      onGridSort={(sortColumn, sortDirection) =>
        setRows(sortRows(initialData, sortColumn, sortDirection))
      }
    />
  );
};

const Dashboard = props => {
  // metric is like  { name: 'Week Close', active: true }
  let columns = props.metrics
    .filter(metric => metric.active === true)
    .map(metric => ({
      key: metric.name
        .toLowerCase()
        .replace(' ', '_')
        .replace('.', ''),
      name: metric.name,
    }));

  const sortableProperties = {
    sortable: true,
    width: 120,
  };

  // we append the stock column and add
  // the sortable properties to every column so we can sort them...
  columns = [{ key: 'stock', name: 'stock' }, ...columns].map(column => ({
    ...column,
    ...sortableProperties,
  }));

  return (
    <div>
      hola
      <div>
        <ConfigPanel />
        {props.data && <Grid initialData={props.data} columns={columns} />}
      </div>
    </div>
  );
};

const Home = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Home;
