const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line !== '');
    
    if (lines.length <= 1) {
      throw new Error('No valid data found in the file');
    }

    const students = lines.slice(1);  // Ignorar encabezados
    let totalStudents = 0;
    const fields = {};

    students.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });

    let response = `Number of students: ${totalStudents}\n`;

    Object.keys(fields).forEach((field) => {
      const studentList = fields[field].join(', ');
      response += `Number of students in ${field}: ${fields[field].length}. List: ${studentList}\n`;
    });

    return response.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentList = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentList}`);
  } catch (error) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
