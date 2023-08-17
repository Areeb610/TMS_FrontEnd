import '../styles/deptTable.css';

function DepartmentTable() {
    const departments = ['Operations', 'TST', 'HR', 'Admin', 'Store', 'Store Admin'];
    const statuses = ['Initiated', 'In Progress', 'Pending', 'Forwarded', 'Rejected', 'Closed'];
    
    const data = [
      [15, 10, 5, 3, 2, 20],
      [10, 5, 2, 1, 1, 10],
      [8, 4, 3, 2, 1, 15],
      [20, 15, 5, 4, 3, 30],
      [5, 2, 1, 0, 1, 7],
    ];
    

  const getTotal = (column) => {
    return data.reduce((total, row) => total + row[column], 0);
  };

  return (
    <div className="department-table">
      <table>
        <thead>
          <tr>
            <th>Department</th>
            {statuses.map((status) => (
              <th key={status}>{status}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
  {departments.map((department, rowIndex) => (
    <tr key={department}>
      <td>{department}</td>
      {statuses.map((_, columnIndex) => (
        <td key={columnIndex}>{data[rowIndex][columnIndex]}</td>
      ))}
      <td>{getTotal(rowIndex)}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default DepartmentTable;
