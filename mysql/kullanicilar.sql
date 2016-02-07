create database if not exists db1;
use db1;
create table if not exists kullanicilar(
       id int auto_increment not null,
       adi varchar(20) not null ,
       soyad varchar(20) not null ,
       kuladi varchar(20) not null unique,
       primary key(id)
       
)