import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('database.csv')
      .then((data) => {
        response.statusCode = 200;
        response.send(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'SWE' && major !== 'CS') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase('database.csv')
        .then((data) => {
          const lines = data.split('\n');
          for (const line of lines) {
            const fields = line.split(':');
            const list = fields[2].trimStart();
            const field = fields[0].split(' ')[4];
            if (major === field) {
              response.status(200).send(`List: ${list}`);
            }
          }
        })
        .catch((error) => {
          response.status(500).send(error.message);
        });
    }
  }
}

module.exports = StudentsController;
