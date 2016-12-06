var express = require('express');
var app = express();

app.get('/', function (req, res, next) {

   res.sendfile('./forExpress/index.html', function(err) {
    if (err) {
        next(err);
    } else {
        console.log('transferred %s', path);
    }
});

}).listen(process.env.PORT);
console.log('Server has started!');