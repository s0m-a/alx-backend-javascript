const fs = require('fs');

/**
 *function that accept a path in argument and
 *attempt to read the database file synchronously
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const students = {};
  const dbNames = fileLines[0].split(',');
  const studentNames = dbNames.slice(0, dbNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentData = line.split(',');
    const studentValues = studentData.slice(0, studentData.length - 1);
    const field = studentData[studentData.length - 1];
    if (!Object.keys(students).includes(field)) {
      students[field] = [];
    }
    const studentEntries = studentNames
      .map((propName, idx) => [propName, studentValues[idx]]);
    students[field].push(Object.fromEntries(studentEntries));
  }

  const NUMBER_OF_STUDENTS = Object
    .values(students)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  for (const [field, group] of Object.entries(students)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
