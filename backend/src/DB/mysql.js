const mysql = require('mysql');
const config = require('../config/env');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}
let connetion
function conMysql() {
    connetion = mysql.createConnection(dbconfig);
    connetion.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL');
    });
}
conMysql()
function oll(tabla) {
    return tabla
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