document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#data-table tbody');

    const data = [
        { id: 15, name: 'Shreeya goyal', age: 20, city: 'jaipur' },
        { id: 16, name: 'Shreya agrawal', age: 20, city: 'bokaro' },
        { id: 11, name: 'Sanya gupta', age: 22, city: 'sikar' },
        { id: 4, name: 'Shreshtha goyal', age: 17, city: 'Houston' }
    ];

    data.forEach(item => {
        const row = document.createElement('tr');
        
        Object.values(item).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});
