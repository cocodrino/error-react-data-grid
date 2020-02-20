import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' },
];

const initialDataRows = [
  { id: 0, title: 'row1', count: 20 },
  { id: 1, title: 'row1', count: 40 },
  { id: 2, title: 'row1', count: 60 },
];

const Grid = ({ initialData, columns: gridColumns }) => {
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
      columns={gridColumns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      minHeight={150}
      onGridSort={(sortColumn, sortDirection) =>
        setRows(sortRows(initialData, sortColumn, sortDirection))
      }
    />
  );
};

const sortableProperties = {
  sortable: true,
  width: 120,
};

const Prueba = () => {
  const columnsSortables = columns.map(column => ({ ...column, ...sortableProperties }));
  return <Grid columns={columnsSortables} initialData={initialDataRows} />;
};

export default Prueba;
