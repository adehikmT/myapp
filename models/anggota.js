const mongoose= require('mongoose');

const anggotaSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    nama : String,
    alamat : String,
});

module.exports=mongoose.model('daftar',anggotaSchema);