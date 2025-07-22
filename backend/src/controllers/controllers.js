const db = require('../DB/mysql');

const respuesta = require('../red/respusta');
const TABLE = "productos"
function oll() {
    return db.oll(TABLE)
}
module.exports = {
    oll,
    one: (id) => db.one(TABLE, id),
    add: (data) => db.add(TABLE, data),
    remove: (id) => db.remove(TABLE, id)
}