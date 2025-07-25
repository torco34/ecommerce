// require('dotenv').config();

// module.exports = {
//     mysql: {
//         host: process.env.MYSQL_HOST,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASSWORD,
//         database: process.env.MYSQL_DATABASE,
//     },
//     app: {
//         port: process.env.APP_PORT,
//         host: process.env.APP_HOST,
//     }
// };


require('dotenv').config();

module.exports = {
    app: {
        port: process.env.APP_PORT || 4000,
        host: process.env.APP_HOST || 'localhost',
    },
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
};
