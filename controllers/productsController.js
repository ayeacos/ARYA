const db = require('../database/models');
const { Op } = require('sequelize');

const productsController = {

    list: async (req, res) => {

        let products = await db.Product.findAll();

        res.render('products/productList', { products });

    },

detail: async (req, res) => {

    let product = await db.Product.findByPk(req.params.id);

    console.log(product);

    if (!product) {
        return res.send('Producto no encontrado');
    }

    res.render('products/productDetail', { product });

},

    search: async (req, res) => {

        let keyword = req.query.keyword;

        let products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${keyword}%`
                }
            }
        });

        res.render('products/productList', { products });

    },

    create: (req, res) => {

        res.render('products/productCreate');

    },

    store: async (req, res) => {

        await db.Product.create({

            name: req.body.name,
            description: req.body.description,
            image: req.file ? req.file.filename : 'default-product.png',
            aroma: req.body.aroma,
            stock: req.body.stock,
            price: req.body.price,
            category_id: req.body.category_id

        });

        res.redirect('/products');

    },

    edit: async (req, res) => {

        let product = await db.Product.findByPk(req.params.id);

        if (!product) {
        return res.send('Producto no encontrado');
    }

        res.render('products/productEdit', { product });

    },

    update: async (req, res) => {

    let data = {

        name: req.body.name,
        description: req.body.description,
        aroma: req.body.aroma,
        price: req.body.price,
        stock: req.body.stock

    };

    if(req.file){
        data.image = req.file.filename;
    }

    await db.Product.update(data, {
        where: {
            id: req.params.id
        }
    });

    res.redirect('/products/' + req.params.id);

},

    destroy: async (req, res) => {

        await db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/products');

    }

}

module.exports = productsController;