# simple.node.mysql 
### nodejs ile mysql kullanarak standart ekleme , çıkarma , güncelleme gibi işlemleri .

```
npm install
npm install nodemon 
nodemon server.js 
```




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
