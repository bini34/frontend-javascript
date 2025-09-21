interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'London' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Paris' };

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
table.border = '1';

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);