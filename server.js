const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", true);


mongoose.connect('mongodb://127.0.0.1:27017/app-react', {}, function (err){
    if(err){
        console.log(err)
    }else {
        console.log('MongoDB CONECTADO com sucesso')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
})