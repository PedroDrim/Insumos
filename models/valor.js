var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var valorSchema = new Schema({
    empresa: {type: String, unique: true},
    lastUpdate: {type: Date, default: Date.now},
    preco: Number
});

module.exports = mongoose.model('Valor', valorSchema);