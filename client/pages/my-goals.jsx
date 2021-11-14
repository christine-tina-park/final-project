import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'parentId', headerName: 'Parent', width: 120 },
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'goal',
    headerName: 'Goal',
    width: 300
  },
  {
    field: 'due',
    headerName: 'Due Date',
    type: 'date',
    width: 120
  },
  {
    field: 'details',
    headerName: 'Details',
    width: 120
  },
  { field: 'export', headerName: 'Export', width: 120 }
];

const rows = [
  { parentId: null, id: 1, goal: 'Master javascript and React', due: '1/20', details: 'button', export: 'button' }
];

export default function MyGoals() {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
