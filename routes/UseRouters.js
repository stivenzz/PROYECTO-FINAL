const express = require('express');
const api = require('../controllers/usercontroller');
const userController = require('../controllers/usercontroller');
const api = express.Router();

/**
 * POST= ALMACENAR INFORMACION(COONTRASEÑAS ECT datos sencibles)
 * GET=para obtener datos.
 * PUT= modificar datos.
 * DELETE:eliminar informacion
 */

api.get('saludar', (req, res) => {
    console.log('llego a la ruta saludar...');
});

api.post('/', UserController.create);
module.exports = api;