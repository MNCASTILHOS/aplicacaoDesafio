const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_cliente:String,
    cpf_cliente: Number,
    email_cliente: String,
    telefone_cliente: Number,
    rua_cliente: String,
    numero_cliente: Number, 
    bairro_cliente: String, 
    cidade_cliente: String, 
    cep_cliente: Number

},{
    timestamps:true
});

const cliente = mongoose.model('clientes',DataSchema);
module.exports = cliente;