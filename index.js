const express = require('express');

//set up express app
const app = express();

//listen for requests
app.listen(process.env.port || 6060, function() {
  console.log('Now listening for requests...');
});