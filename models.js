const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  id:String,
  titulo:String,
  subtitulo:String,
  categoria:String,
  articulo:String,
  imagen:String,

},{timestamps: true}

);

const Data = mongoose.model('Data', dataSchema);

module.exports = { Data };
