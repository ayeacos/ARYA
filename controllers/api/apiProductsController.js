const db = require('../../database/models');

const apiProductsController = {

    list: async (req, res) => {

        let products = await db.Product.findAll({
            include: ['category']
        });

        let countByCategory = {};

        products.forEach(product => {

            let category = product.category.name;

            if (countByCategory[category]) {
                countByCategory[category]++;
            } else {
                countByCategory[category] = 1;
            }

        });

        let response = {

            count: products.length,

            countByCategory,

            products: products.map(product => ({
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category.name,
                detail: `/api/products/${product.id}`
            }))

        };

        res.json(response);

    },

    detail: async (req, res) => {

    let product = await db.Product.findByPk(req.params.id, {
        include: ['category']
    });

    if (!product) {
        return res.status(404).json({
            error: 'Producto no encontrado'
        });
    }

    let response = {

        id: product.id,
        name: product.name,
        description: product.description,
        aroma: product.aroma,
        stock: product.stock,
        price: product.price,
        category: product.category.name,
        image: `http://localhost:3000/img/${product.image}`

    };

    res.json(response);

}

};

module.exports = apiProductsController;
