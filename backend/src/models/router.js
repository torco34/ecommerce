const express = require('express')

const respuesta = require('../red/respusta');
const router = express.Router();

router.get('/', (req, res) => {
    respuesta.success(res, { mensaje: 'Todo bien', ip: req.ip });
});
module.exports = router;