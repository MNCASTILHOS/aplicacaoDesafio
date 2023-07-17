const mongoose = require('mongoose');
const User = require('../models/usuario.model');

mongoose.set("strictQuery", true);
mongoose.connect('mongodb://127.0.0.1:27017/app-react', {}, function (err){
    if(err){
        console.log(err)
    }else {
        console.log('MongoDB CONECTADO com sucesso')
    }
})

const seedUser = {
    nome_usuario: "AplicacaoDesafio",
    email_usuario: "Aplicacao@desafio",
    senha_usuario: "desafio123"
};

const seedDB = async () => {
    await User.create(seedUser);
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log('Seed executada com sucesso!');
});