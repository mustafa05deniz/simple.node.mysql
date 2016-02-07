var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);


module.exports = function(app) {
    app.get('/', function(req, res) {
     var row = [];
     connection.query('select * from kullanicilar', function (err, rows) {
        if (err) {
            console.log(err);
        } else {
            if (rows.length) {
                for (var i = 0, len = rows.length; i < len; i++) {
                    row[i] = rows[i];
                    
                }  
            }
        }
        res.render('index.ejs', {rows : row });
    })
    });

    app.get('/ekle',function(req,res){
        res.redirect('/');
    })

    app.post('/ekle',function(req,res){
        top = req.body;
        adi = top.adi;
        soyadi = top.soyad;
        kuladi = top.kuladi;
        

       connection.query('insert into kullanicilar(adi,soyad,kuladi) value("'+adi+'","'+soyadi+'","'+kuladi+'") ',function(err,rows){
        if(!err){
            console.log(err);
        }else{
            console.log('tamamdir');
        }

       });

        
        res.redirect('/');
    })

    app.get('/sil',function(req,res){
        res.redirect('/');
    })
    app.post('/sil',function(req,res){
        body = req.body;
        console.log(body);
        console.log(body.data);
        connection.query('delete from kullanicilar where id = ?',[body.data])
        res.redirect('/');
    })
};

