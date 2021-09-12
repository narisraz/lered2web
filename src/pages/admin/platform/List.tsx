import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { Data } from "react-data-grid-addons";

const columns = [
  { key: 'id', name: 'ID', editable: true },
  { key: 'title', name: 'Titre', editable: true },
  { key: 'complete', name: 'Complete', editable: true },
];

const rows = [
  { id: 0, title: 'Task 1', complete: 20 },
  { id: 1, title: 'Task 2', complete: 40 },
  { id: 2, title: 'Task 3', complete: 60 },
];

function PlatformList() {
  const groupBy = ['title'];
  const groupedRows = Data.Selectors.getRows({rows, groupBy});
  
  return (
    <>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => groupedRows[i]}
        rowsCount={groupedRows.length}
        minHeight={650}
      />
    </>
  );
}

export default PlatformList;
