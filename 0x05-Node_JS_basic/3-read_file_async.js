const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbNames = fLines[0].split(',');
      const studentNames = dbNames
        .slice(0, dbNames.length - 1);

      for (const line of fLines.slice(1)) {
        const studentData = line.split(',');
        const studentValues = studentData
          .slice(0, studentData.length - 1);
        const field = studentData[studentData.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentInput = studentNames
          .map((names, idx) => [propName, studentValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentInput));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
