const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>');
});

app.get('/patata', function (req, res) {
  res.send('<h1>Hello patata</h1>');
});

app.get('/about', function (req, res) {
  res.send('<h1>Hello soy Adam</h1><p>estoy estudiando desarrollo web</p>');
});

app.get('/hobbies', function (req, res) {
  res.send('<ul><li>Cocinar</li><li>Magic The Gatherin</li><li>Salir por ahí</li></ul>');
});
 
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});