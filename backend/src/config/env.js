require('dotenv').config();
module.exports = {
    app: {
        port: process.env.PORT,
        host: process.env.HOST || 'localhost',
    },
}