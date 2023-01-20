const Cliente = require('../models/cliente.model');

module.exports = {
    async index(req, res) {
        const client = await Cliente.find();
        res.json(client)
    },
    async create(req,res) {
        const {nome_cliente, cpf_cliente, email_cliente, telefone_cliente, rua_cliente, numero_cliente, 
            bairro_cliente, cidade_cliente, cep_cliente} = req.body;
        let data = {};
        let client = await Cliente.findOne({nome_cliente});

        if(!client){
            data = {nome_cliente, cpf_cliente, email_cliente, telefone_cliente, rua_cliente, numero_cliente, 
                bairro_cliente, cidade_cliente, cep_cliente};
            client = await Cliente.create(data);
            return res.status(200).json(client);
        }else{
            return res.status(500).json(client);
        }
    },
    async details(req, res) {
        const {_id} = req.params;
        const client = await Cliente.findOne({_id});
        res.json(client)
    },
    async delete(req, res) {
        const {_id} = req.params;
        const client = await Cliente.findByIdAndDelete({_id});
        return res.json(client)
    },
    async getByEmail(req, res) {
        const {email} = req.params;
        const client = await Cliente.findOne({email_cliente: email});
        return res.json(client)
    },
    async update(req, res) {
        const {_id, nome_cliente, cpf_cliente, email_cliente, telefone_cliente, rua_cliente, numero_cliente, 
            bairro_cliente, cidade_cliente, cep_cliente } = req.body;
        const data = {nome_cliente, cpf_cliente, email_cliente, telefone_cliente, rua_cliente, numero_cliente, 
            bairro_cliente, cidade_cliente, cep_cliente};
        const client = await Cliente.findOneAndUpdate({_id}, data,{new:true});
        res.json(client);
    }
}