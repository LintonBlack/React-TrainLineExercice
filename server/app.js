var express = require("express");

var app = new express();
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + './../app/'));
app.get('/', function(req, res){
    res.render('/');
});




app.listen(7777)

