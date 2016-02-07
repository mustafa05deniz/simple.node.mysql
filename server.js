var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection); // mysql bağlantısını yapıyoruz .


var express  = require('express');


var bodyParser = require('body-parser');
var app      = express();
var port     = process.env.PORT || 80;

app.use(bodyParser.json());  // body kısmından gelen parametreleri almak için kullanıyoruz . 
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static(__dirname + '/views')); // static dosyalarının saklandığı yeri belirliyoruz . 

app.set('view engine', 'ejs');  // express in template masterini ejs seçiyoruz aynı şekilde hbs veya jade de seçebiliriz 

require('./app/routes.js')(app);  // routes.js deki fonksiyonları çağırıyoruz .

app.listen(port);
console.log('Dinleniyor :  ' + port);
