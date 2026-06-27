const { body } = require('express-validator');
const db = require('../../database/models');
const path = require('path');

module.exports = [

    body('firstName')
        .notEmpty().withMessage('Debes ingresar un nombre')
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),

    body('lastName')
        .notEmpty().withMessage('Debes ingresar un apellido')
        .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),

    body('email')
        .notEmpty().withMessage('Debes ingresar un email')
        .isEmail().withMessage('Debes ingresar un email válido')
        .custom(async (value) => {

            let user = await db.User.findOne({
                where: {
                    email: value
                }
            });

            if (user) {
                throw new Error('Este email ya está registrado');
            }

            return true;
        }),

    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),

    body('image').custom((value, { req }) => {

    if (!req.file) {
        return true;
    }

    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

    let fileExtension = path.extname(req.file.originalname).toLowerCase();

    if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error('La imagen debe ser JPG, JPEG, PNG o GIF');
    }

    return true;

})    
];