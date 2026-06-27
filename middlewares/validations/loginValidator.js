const { body } = require('express-validator');

module.exports = [

    body('email')
        .notEmpty().withMessage('Debes ingresar un email')
        .isEmail().withMessage('Debes ingresar un email válido'),

    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')

];