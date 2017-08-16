const express = require('express');

//set up express app
const app = express();

//get request
app.get('/api', function(req, res) {
  console.log('GET request');
  res.send({name: 'Beatrix'});
});

//listen for requests
app.listen(process.env.port || 6060, function() {
  console.log('Now listening for requests...');
});