const app = require('./app');
const { app: config } = require('./config/env');

app.listen(config.port, () => {
    console.log(`🚀 Servidor corriendo en http://${config.host}:${config.port}`);
    console.log(process.env.MYSQL_HOST);
});
