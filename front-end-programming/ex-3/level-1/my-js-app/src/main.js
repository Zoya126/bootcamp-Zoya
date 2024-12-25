document.addEventListener('DOMContentLoaded', () => {
  // Column definitions
  const columnDefs = [
      { field: 'ID', sortable: true, filter: true },
      { field: 'Name', sortable: true, filter: true },
      { field: 'Age', sortable: true, filter: true },
      { 
          field: 'Grade', 
          sortable: true, 
          filter: true,
          cellClassRules: {
              'ag-row-grade-a': (params) => params.value === 'A'
          }
      }
  ];

  // Grid options
  const gridOptions = {
      columnDefs: columnDefs,
      defaultColDef: {
          flex: 1,
          minWidth: 100,
          resizable: true
      },
      rowHeight: 40
  };

  // Create the grid
  const gridDiv = document.querySelector('#studentGrid');
  const grid = new agGrid.Grid(gridDiv, gridOptions);

  // Load student data from JSON
  fetch('/students.json')
      .then(response => response.json())
      .then(data => {
          gridOptions.api.setRowData(data);
      })
      .catch(error => {
          console.error('Error loading student data:', error);
      });
});

