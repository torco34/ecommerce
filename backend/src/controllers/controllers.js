const db = require('../DB/mysql');

async function getAllClientes(req, res) {
    try {
        const clientes = await db.oll('products');
        res.status(200).json({
            success: true,
            data: clientes
        });
    } catch (error) {
        console.error('❌ Error al obtener clientes:', error);
        res.status(500).json({ success: false, error: 'Error en el servidor' });
    }
}

module.exports = {
    getAllClientes
};
