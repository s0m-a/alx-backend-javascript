import fs from 'fs';

/**
 * Read the database asynchronously
 * @param {String} path The path to the CSV data file.
 * @returns Promise
 *   String: {firstname: String, lastname: String, age: number}
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbNames = fileLines[0].split(',');
        const studentPropNames = dbNames
          .slice(0, dbNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentData = line.split(',');
          const studentValues = studentData
            .slice(0, studentData.length - 1);
          const field = studentData[studentData.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentInput = studentPropNames
            .map((propName, idx) => [propName, studentValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentInput));
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
