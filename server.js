var express = require('express');
var app = express();

app.get('/',function(req, res) {
   res.write('hhhexpress');
})
app.listen(process.env.PORT);
console.log('Server has started!');