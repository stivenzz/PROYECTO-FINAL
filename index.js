const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;



mongoose.connect('mongodb://localhost:27017/libros', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.log("conexion fallida", error);
    } else {
        console.log("conexion exitosa");
        app.listen(port, () => {
            console.log('escuchando el puerto', port);
        })
    }

})