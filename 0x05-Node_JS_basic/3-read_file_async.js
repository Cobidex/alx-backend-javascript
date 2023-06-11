const fs = require('fs');

function countStudents(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const log = [];
      const validLines = data.split('\n');
      const students = validLines.slice(1, validLines.length - 1);
      console.log(`Number of students: ${students.length}`);
      log.push(`Number of students: ${students.length}`);
      const fieldCount = {};
      for (const student of students) {
        const stud = student.split(',');
        const field = stud[3];
        if (!(fieldCount[field])) fieldCount[field] = [];
        fieldCount[field].push(stud[0]);
      }
      for (const field in fieldCount) {
        if (field) {
          const s = fieldCount[field].join(', ');
          const c = fieldCount[field].length;
          console.log(`Number of students in ${field}: ${c}. List: ${s}`);
          log.push(`Number of students in ${field}: ${c}. List: ${s}`);
        }
      }
      resolve(log.join('\n'));
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
