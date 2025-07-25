const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// Importar rutas
const clientesRoutes = require('./models/router'); // o controllers/routes según cómo lo organizaste

// Usar rutas
app.use('/api/productos', clientesRoutes);

module.exports = app;
