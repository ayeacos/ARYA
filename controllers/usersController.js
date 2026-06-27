const { validationResult } = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

const usersController = {

    login: (req, res) => {
    res.render('users/login', {
        old: {},
        errors: {}
    });
},

    processLogin: async (req, res) => {

        let errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.render('users/login', {
                errors: errors.mapped(),
                old: req.body
            });

        }

        let userToLogin = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });

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
    },

    register: (req, res) => {
        res.render('users/register', {
            errors: {},
            old: {}
        });
    },
    
    processRegister: async (req, res) => {

        let errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.render('users/register', {
                errors: errors.mapped(),
                old: req.body
            });

        }

        await db.User.create({

            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category: "user",
            image: req.file ? req.file.filename : "default-user.png"

        });

        res.redirect('/login');
    },

    profile: async (req, res) => {

        let user = await db.User.findByPk(
            req.session.userLogged.id
        );

        console.log(user.image);

        res.render('users/profile', { user });

    },

    editProfile: async (req, res) => {

        let user = await db.User.findByPk(
            req.session.userLogged.id
        );

        res.render('users/profileEdit', { user });

    },

    updateProfile: async (req, res) => {

        await db.User.update({

            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email

        }, {
            where: {
                id: req.session.userLogged.id
            }
        });

        res.redirect('/profile');

    },

    logout: (req, res) => {

        req.session.destroy();

        res.redirect('/');

    }

}

module.exports = usersController;