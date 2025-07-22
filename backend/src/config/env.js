require('dotenv').config();
module.exports = {
    app: {
        port: process.env.PORT || '3000',
        host: process.env.HOST || 'localhost',
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'ejemplo',
    }
}