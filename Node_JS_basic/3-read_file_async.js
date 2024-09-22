const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n').filter(line => line.trim() !== '');

    if (rows.length <= 1) {
      throw new Error('No data found in the file');
    }

    const students = rows.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      const [firstName, , , field] = student.split(',');
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstName);
      return acc;
    }, {});

    Object.keys(fields).forEach((field) => {
      const studentList = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${studentList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
