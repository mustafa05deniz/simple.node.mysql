var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);


var express  = require('express');


var bodyParser = require('body-parser');
var app      = express();
var port     = process.env.PORT || 80;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs'); 

require('./app/routes.js')(app); 

app.listen(port);
console.log('Dinleniyor :  ' + port);
