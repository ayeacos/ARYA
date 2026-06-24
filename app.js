const usersRoutes = require('./routes/usersRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const guestMiddleware = require('./middlewares/guestMiddleware');
const multer = require('multer');
const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require('./database/models');
const { Op } = require('sequelize');
const productsRoutes = require('./routes/productsRoutes');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/users');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const uploadProduct = multer({
    storage: productStorage
});

const upload = multer({ storage });

const app = express();

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

app.use('/products', productsRoutes);

app.use('/', usersRoutes);

app.get('/', async (req, res) => {

    let products = await db.Product.findAll({
        limit: 4
    });

    res.render('home', {
        products
    });

});

app.get('/productCart', (req, res) => {
    res.render('products/productCart');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});


