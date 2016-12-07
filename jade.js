var jade = require('jade');
var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('jade1', {
	options: 'here'});
}).listen(process.env.PORT);