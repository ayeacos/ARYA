const authMiddleware = require('./middlewares/authMiddleware');
const guestMiddleware = require('./middlewares/guestMiddleware');
const multer = require('multer');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/users');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

const app = express();

const users = JSON.parse(
    fs.readFileSync('./data/users.json', 'utf-8')
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

const session = require('express-session');

app.use(session({
    secret: 'arya-secret',
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', guestMiddleware, (req, res) => {
    res.render('users/login');
});

app.post('/login', (req, res) => {

    let users = JSON.parse(
        fs.readFileSync('./data/users.json', 'utf-8')
    );

    let userToLogin = users.find(
        user => user.email == req.body.email
    );

    if (!userToLogin) {
        return res.redirect('/login');
    }

    let passwordOk = bcrypt.compareSync(
        req.body.password,
        userToLogin.password
    );

    if (!passwordOk) {
        return res.redirect('/login');
    }

    req.session.userLogged = userToLogin;

    res.redirect('/');

});

app.get('/register', guestMiddleware, (req, res) => {
    res.render('users/register');
});

app.post('/register', upload.single('image'), (req, res) => {

    let users = JSON.parse(
        fs.readFileSync('./data/users.json', 'utf-8')
    );

    let newUser = {
        id: users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        category: "user",
        image: req.file ? req.file.filename : "default-user.png"
    };

    users.push(newUser);

    fs.writeFileSync(
        './data/users.json',
        JSON.stringify(users, null, 2)
    );

    res.redirect('/login');

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

app.get('/productCreate', authMiddleware, (req, res) => {
    res.render('products/productCreate');
});

app.get('/products', (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    res.render('products/productList', { products });

});

app.post('/products', authMiddleware, (req, res) => {

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

app.get('/products/:id/edit', authMiddleware, (req, res) => {

    let products = JSON.parse(
        fs.readFileSync('./data/products.json', 'utf-8')
    );

    let product = products.find(
        p => p.id == req.params.id
    );

    res.render('products/productEdit', { product });

});

app.post('/products/:id/edit', authMiddleware, (req, res) => {

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

app.post('/products/:id/delete', authMiddleware, (req, res) => {

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

app.get('/profile',  authMiddleware, (req, res) => {

    res.render('users/profile', {
        user: req.session.userLogged
    });

});

app.get('/logout', (req, res) => {

    req.session.destroy();

    res.redirect('/');

});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});


