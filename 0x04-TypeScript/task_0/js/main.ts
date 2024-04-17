export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
 
  const studentA: Student = {
    firstName: "soma",
    lastName: "anita",
    age: 122,
    location: "lagos, nigeria",
  };

  const studentB: Student = {
    firstName: "water",
    lastName: "fish",
    age: 12,
    location: "open, ocean",
  };
  
  const studentC: Student = {
    firstName: "john",
    lastName: "doe",
    age: 42,
    location: "paris, france",
  };

  const studentsList: Array<Student> = [
    studentA,
    studentB,
  ];
  const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  
  table {
    border-collapse: collapse;
    width: 80%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  thead {
    background-color: #f0f0f0;
    font-weight: bold;
  }
  
  td {
    padding: 12px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  td:hover {
    background-color: #e0e0e0;
  }
  
  td:nth-child(1) {
    text-align: center;
  }
  
  `;
  
  /**
   * Displays information about students in a table.
   * @param students students to display.
   */
  export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const row = document.createElement('tr');
    const tBody = document.createElement('tbody');
    row.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    row.insertAdjacentHTML('beforeend', '<td>Location</td');
    head.insertAdjacentElement('beforeend', row);
  
    for (const student of students) {
      const bRow = document.createElement('tr');
      bRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      bRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      tBody.insertAdjacentElement('beforeend', bRow);
    }
  
    table.insertAdjacentElement('beforeend', head);
    table.insertAdjacentElement('beforeend', tBody);
    document.body.insertAdjacentElement('beforeend', table);
  };
  
  displayStudents(studentsList);
  const styleSheetElement = document.createElement('style');
  styleSheetElement.innerHTML = styleSheet;
  document.head.insertAdjacentElement('beforeend', styleSheetElement);
  document.title = 'Task_0';
