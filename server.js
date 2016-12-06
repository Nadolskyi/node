var express = require('express');
var app = express();

app.get('/',function(req, res) {
   res.send('hhhexpress');
}).listen(process.env.PORT);
console.log('Server has started!');