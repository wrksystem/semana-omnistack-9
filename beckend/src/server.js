const express = require('express');

const app = express();

// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route paramns (para edição, delete)
//req.body = Acessar corpo da requisição (tanto para criação quanto edição de registros)

app.use(express.json());


app.listen(3333);
