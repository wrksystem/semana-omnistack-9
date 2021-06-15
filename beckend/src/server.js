const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-9.4uprc.mongodb.net/Omnistack-9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route paramns (para edição, delete)
//req.body = Acessar corpo da requisição (tanto para criação quanto edição de registros)

app.use(express.json());
app.use(routes);


app.listen(3333);
