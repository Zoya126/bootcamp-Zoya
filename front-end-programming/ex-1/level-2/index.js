import { loadStudentData } from './data-loader.js';
import { renderTableRows } from './table-renderer.js';

document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.querySelector('#studentTable tbody');
    const studentData = await loadStudentData();
    renderTableRows(studentData, tableBody);
});
