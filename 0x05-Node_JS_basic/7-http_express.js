const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2])
    .then((data) => {
      response.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      response.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port);

module.exports = app;
