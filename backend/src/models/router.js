const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

// Ruta para GET /api/clientes
router.get('/', controllers.getAllClientes);

module.exports = router;
