import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

app.use(express.json());
app.use('/', router);

app.listen(port);

module.exports = app;