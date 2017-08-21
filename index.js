const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

//listen for requests
app.listen(process.env.port || 6060, function () {
  console.log('Now listening for requests...');
});