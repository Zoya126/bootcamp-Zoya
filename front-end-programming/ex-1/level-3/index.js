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

    // Load CSV using PapaParse
    Papa.parse('students.csv', {
        download: true,
        header: true,
        complete: function(results) {
            gridOptions.api.setRowData(results.data);
        },
        error: function(error) {
            console.error('Error parsing CSV:', error);
        }
    });
});