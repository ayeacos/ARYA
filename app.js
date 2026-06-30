const usersRoutes = require('./routes/usersRoutes');
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./database/models');
const productsRoutes = require('./routes/productsRoutes');
const usersApiRoutes = require('./routes/api/usersApiRoutes');
const productsApiRoutes = require('./routes/api/productsApiRoutes');

const app = express();

app.use(cors()); 

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
app.use('/api/users', usersApiRoutes);
app.use('/api/products', productsApiRoutes);

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

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});


