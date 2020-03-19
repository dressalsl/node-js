const express = require('express');
const app = express();

const rotas = require('../app/routes/route')
rotas(app);

module.exports = app;