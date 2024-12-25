export function renderTableRows(data, tableBody) {
    tableBody.innerHTML = ''; // Clear existing rows
    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}
