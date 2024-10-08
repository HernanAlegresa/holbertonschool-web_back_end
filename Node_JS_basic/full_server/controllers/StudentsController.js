const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';

      const fields = Object.keys(students).sort();  // Ordena alfabéticamente
      fields.forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      const { major } = req.params;

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentList = students[major] || [];
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
