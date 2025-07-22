const mysql = require('mysql');
const config = require('../config/env');
const tablas = {
    id: 1,
    nombre: 'ejemplo',
    descripcion: 'tabla de ejemplo',
    precio: 100,
}
function oll(tabla) {
    return tablas;
}
function one(tabla, id) { }
function add(tabla, data) { }
function remove(tabla, id) { }
module.exports = {
    oll,
    one,
    add,
    remove
};