var express = require('express');
var app = express();
var fs = require ('fs');

app.set('view engine', 'jade');

app.get('/', function (req, res) {

fs.readFile ('db.js', function(err, content){
    if (err) { console.log('eror');
        } else {
            var par = JSON.parse(content);
            res.render('jade1', {myData: par});
        }
});
}).listen(process.env.PORT);