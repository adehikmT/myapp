var express = require('express');
var router = express.Router();

var mongo= require('mongodb');
var assert=require('assert');
var url='mongodb://localhost:27017/madu';

// const Daftar=require('../myapp/models/anggota');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('umum/home', { title: 'Page Home', layout : 'umum/layout/index.hbs'});
});

router.get('/daftarPeternak', function(req, res, next) {
  res.render('umum/daftarPeternak', { title: 'Daftar Peternak', layout : 'umum/layout/index.hbs'});
});

router.get('/produk', function(req, res, next) {
  res.render('umum/produk', { title: 'Produk', layout : 'umum/layout/index.hbs'});
});

router.get('/kelompoktanihutan', function(req, res, next) {
  res.render('umum/kth', { title: 'Produk', layout : 'umum/layout/index.hbs'});
});
 
//home page kelompok

router.get('/kelompok',function(req,res,next){
  res.render('kelompok/home',{title: 'Kelompok Bina Lestari', layout : 'umum/layout/index2.hbs'});
})


// admin routes

router.get('/peternak', function(req, res, next) {
  res.render('admin/peternak/index', { title: 'Daftar Peternak', aktif : 1, layout : 'admin/layout/tamplate.hbs'});
});

router.get('/kth', function(req, res, next) {
  res.render('admin/kth/index', { title: 'Daftar Kelompok Tani Hutan', aktif : 2 , layout : 'admin/layout/tamplate.hbs'});
});

router.get('/stup', function(req, res, next) {
  res.render('admin/stup/index', { title: 'Daftar Stup', aktif : 3, layout : 'admin/layout/tamplate.hbs'});
});

router.get('/lebah', function(req, res, next) {
  res.render('admin/lebah/index', { title: 'Daftar Lebah', aktif : 4, layout : 'admin/layout/tamplate.hbs'});
});

router.get('/panen', function(req, res, next) {
  res.render('admin/panen/index', { title: 'Panen', aktif: 5, layout : 'admin/layout/tamplate.hbs'});
});

//post
router.post('/insert',function(req,rss,next){
   var item={nama : "ade", alamat : "panjalu"}
mongo.connect(url,function(err,db){
   assert.equal(null,err);
   db.collection('anggota').insertOne(item,function(err,rss){
    assert.equal(null,err);
    console.log('insert data berhasil');
    db.close();
    });
   });
  });

module.exports = router;

//model
