const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile(process.argv[2], 'utf-8');
    const rows = data.split('\n').filter(line => line.trim() !== '');

    if (rows.length <= 1) {
      throw new Error('No data found in the file');
    }

    const students = rows.slice(1);
    let response = `Number of students: ${students.length}\n`;

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
      response += `Number of students in ${field}: ${fields[field].length}. List: ${studentList}\n`;
    });

    res.send(response.trim());
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
