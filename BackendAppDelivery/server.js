const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

/**
 * AQUI IMPORTAMOS LAS RUTAS
 */
const usersRoutes = require('./routes/userRoutes');



const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



app.disable('x-powered-by');

app.set('port', port);
/**
 * EN ESTA PARTE LLAMAMOS LAS RUTAS
 */
usersRoutes(app); //ruta del modulo usuarios

server.listen(port, '192.168.1.36' || 'localhost', function() {
    console.log('Aplicación de NodeJS ' + port + ' iniciada');
});

//MANEJO DE ERRORES
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

app.get('/', (req, res) => {
    res.send('ruta raíz del backend')
})

module.exports = {
    app,
    server
}

// 200 - RSPTA EXITOSA
// 404 - URL NO EXISTE
// 500 - ERROR DE SERVIDOR
