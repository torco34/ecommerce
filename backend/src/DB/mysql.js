const mysql = require('mysql2');

const config = require('../config/env'); // Aquí tomas los datos del .env

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection;

function conMysql() {
    connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
        if (err) {
            console.error('❌ Error al conectar a MySQL:', err);
            return;
        }
        console.log('✅ Conectado a MySQL');
    });

    return connection;
}


conMysql();

// Obtener todos los registros de una tabla
function oll(tabla) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla}`, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}
function one(tabla, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla} WHERE id = ?`, [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
}
// Agregar un nuevo registro
function add(tabla, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${tabla} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
// Eliminar un registro por ID
function remove(tabla, id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${tabla} WHERE id = ?`, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
module.exports = {
    oll,
    one,
    add,
    remove
};
