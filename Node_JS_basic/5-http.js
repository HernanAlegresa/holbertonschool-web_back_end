const http = require('http');
const fs = require('fs').promises;

const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
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

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(response.trim());
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
