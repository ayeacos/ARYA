const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');
const productValidator = require('../middlewares/validations/productValidator');
const multer = require('multer');

const productStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/img');
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploadProduct = multer({
    storage: productStorage
});

router.get('/', productsController.list);

router.get('/search', productsController.search);

router.get('/create', authMiddleware, productsController.create);

router.post('/', uploadProduct.single('image'), productValidator, productsController.store);

router.get('/:id', productsController.detail);

router.get('/:id/edit', authMiddleware, productsController.edit);

router.post('/:id/edit', uploadProduct.single('image'), productValidator, productsController.update);

router.post('/:id/delete', productsController.destroy);

module.exports = router;