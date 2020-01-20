const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

const app = express();

app.use(allowCors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3200;

app.get('/', function (req, res) {
    res.send('Bem vindos, segunda aula React!');
})

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
})

module.exports = app;