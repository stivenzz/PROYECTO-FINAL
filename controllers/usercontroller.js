const User = require('../models/user');
const api = require('../routes/UseRouters');
const { use } = require('../routes/UseRouters');

function create(req, res) {
    var user = new User();
    var params = req.body;

    user.firstName = params.firstName;
    user.lastNmae = params.lastName;
    user.email = params.email;
    user.age = params.age;

    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "error en el servidor"
            })
        } else {
            if (!useCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "error al insertar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario ingresado correctamente",
                    dataUser: userCreated
                })
            }
        }
    })
}

module.exports = api;