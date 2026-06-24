const db = require('../database/models');
const bcrypt = require('bcryptjs');

const usersController = {

    login: (req, res) => {
        res.render('users/login');
    },

    processLogin: async (req, res) => {

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
        res.render('users/register');
    },

    processRegister: async (req, res) => {

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