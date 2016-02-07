# simple.node.mysql 
### nodejs ile mysql kullanarak standart ekleme , çıkarma , güncelleme gibi işlemleri .
![alt tag](http://s15.postimg.org/n4wpga23f/localhost.png)

```
npm install
npm install nodemon 
nodemon server.js 
```
npm install ile package.json içerisindeki bütünv verileri yüklüyor sisteme ancak ek olarak nodemon'u yüklerseniz dosya üzerinde değişikilik yaparken kullanması daha rahat olur . 
```
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
```
sql queryi yapıp kullanıcılar tablosundaki verilerin hepsini rows listesine atıp index.ejs ye gönderiyor . 

```
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
        }});
       res.redirect('/');
    })
```
index.ejs den gelen verilerin hepsini top olarak alıyoruz ve query olarak gönderiyoruz . 

```
app.post('/sil',function(req,res){
        body = req.body;
        console.log(body);
        console.log(body.data);
        connection.query('delete from kullanicilar where id = ?',[body.data])
        res.redirect('/');
    })

```
yine aynı şekilde index.ejs den gelen verileri alıp query olarak gönderiyoruz 
