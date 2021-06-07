const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/UseRouters');

const app = express();
app.use(bodyParser.json());

app.use('/api', routers);

module.exports = app;