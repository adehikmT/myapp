const mongoose= require('mongoose');

const anggtaSchema=mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    nama : String,
    alamat : Text
});

module.exports=mongoose.model('Daftar',anggotaSchema);