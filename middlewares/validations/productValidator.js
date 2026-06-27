const { body } = require('express-validator');
const path = require('path');

module.exports = [

    body('name')
        .notEmpty().withMessage('Debes ingresar un nombre para el producto')
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

    body('description')
        .notEmpty().withMessage('Debes ingresar una descripción')
        .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),

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