const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// Importar rutas
const clientesRoutes = require('./models/router');

// Usar rutas
app.use('/api/clientes', clientesRoutes);

module.exports = app;
