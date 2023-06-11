const http = require('http');

const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((request, response) => {
  const { url } = request;
  if (url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        response.end(data);
      })
      .catch((error) => {
        response.end(error.message);
      });
  }
});

app.listen(port);

module.exports = app;
