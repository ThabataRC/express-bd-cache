const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); //
const secret = '1234'; // 

app.use(express.json()); // Middleware para analisar JSON no corpo da requisição
app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados urlencoded

const usersRouter = require('./routes/users');
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');
const loginRouter = require('./routes/login');

app.use('/users', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/login', loginRouter);

module.exports = app;
