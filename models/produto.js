var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var produtoSchema = new Schema({
    identificador: {type: String, unique: true},
    lastUpdate: {type: Date, default: Date.now},
    nome: String,
    valor: ObjectId
});

module.exports = mongoose.model('Produto', produtoSchema);