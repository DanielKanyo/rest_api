const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago', {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api', routes);

//listen for requests
app.listen(process.env.port || 6060, function () {
  console.log('Now listening for requests...');
});