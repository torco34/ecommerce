// const { app: { port, host } } = require('./config/env');

// const express = require('express');
// const app = express();

// app.listen(port, () => {
//     console.log(`🚀 Servidor escuchando en http://${host}:${port}`);
// });
// src/app.js
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Rutas
const productosRoutes = require('./models/router');
app.use('/api/productos', productosRoutes);

// Middleware de error (opcional)
// app.use((err, req, res, next) => {
//     console.error('❌ Error:', err.message);
//     res.status(500).json({ error: 'Error interno del servidor' });
// });
const response = require('./models/router');

exports.obtenerProductos = (req, res) => {
    Producto.obtenerTodos((err, resultados) => {
        if (err) {
            return response.error(res, 'Error al obtener productos');
        }
        response.success(res, resultados);
    });
};

module.exports = app;
