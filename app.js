const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('users/login');
});

app.get('/register', (req, res) => {
    res.render('users/register');
});

app.get('/productDetail', (req, res) => {
    res.render('products/productDetail');
});

app.get('/productCart', (req, res) => {
    res.render('products/productCart');
});

app.get('/productCreate', (req, res) => {
    res.render('products/productCreate');
});

app.get('/productEdit', (req, res) => {
    res.render('products/productEdit');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});

