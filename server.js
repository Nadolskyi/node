var express = require('express');
var app = express();

app.get('/', function (req, res, next) {

   res.sendfile('./forExpress/index.html', function(err) {
    if (err) {
        console.log('pomylka');
    }
});

}).listen(process.env.PORT);
console.log('Server has started!');