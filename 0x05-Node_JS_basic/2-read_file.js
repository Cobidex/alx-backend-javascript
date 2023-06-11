const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8').toString();
    const validLines = content.split('\n');
    const students = validLines.slice(1, validLines.length - 1);
    console.log(`Number of students: ${students.length}`);
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
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
