const express = require('express')

const respuesta = require('../red/respusta');
const controllers = require('../controllers/controllers');

const router = express.Router();

router.get('/', (req, res) => {
    const oll = controllers.oll();
    respuesta.success(res, { mensaje: 'Todo bien cccc', oll, ip: req.ip });
});
module.exports = router;