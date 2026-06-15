const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const users = JSON.parse(
    fs.readFileSync('./data/users.json', 'utf-8')
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('users/login');
});

app.get('/register', (req, res) => {
    res.render('users/register');
});

app.get('/products/:id', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    let product = products.find(
        p => p.id == req.params.id
    );

    res.render('products/productDetail', { product });

});

app.get('/productCart', (req, res) => {
    res.render('products/productCart');
});

app.get('/productCreate', (req, res) => {
    res.render('products/productCreate');
});

app.get('/products', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    res.render('products/productList', { products });

});

app.post('/products', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    let newProduct = {
        id: products.length + 1,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        aroma: req.body.aroma,
        stock: req.body.stock,
        price: req.body.price
    };

    products.push(newProduct);

    fs.writeFileSync(
        './data/products.json',
        JSON.stringify(products, null, 2)
    );

    res.redirect('/products');

});

app.get('/products/:id/edit', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    let product = products.find(
        p => p.id == req.params.id
    );

    res.render('products/productEdit', { product });

});

app.post('/products/:id/edit', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    let productIndex = products.findIndex(
        p => p.id == req.params.id
    );

    products[productIndex] = {
        ...products[productIndex],
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        aroma: req.body.aroma,
        price: req.body.price
    };

    fs.writeFileSync(
        './data/products.json',
        JSON.stringify(products, null, 2)
    );

    res.redirect('/products');

});

app.post('/products/:id/delete', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    let filteredProducts = products.filter(
        p => p.id != req.params.id
    );

    fs.writeFileSync(
        './data/products.json',
        JSON.stringify(filteredProducts, null, 2)
    );

    res.redirect('/products');

});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});


