const db = require('../../database/models');

const apiUsersController = {

    list: async (req, res) => {

        let users = await db.User.findAll();

        let response = {
            count: users.length,
            users: users.map(user => ({
                id: user.id,
                name: user.first_name + ' ' + user.last_name,
                email: user.email,
                detail: `/api/users/${user.id}`
            }))
        };

        res.json(response);

    },

    detail: async (req, res) => {

        let user = await db.User.findByPk(req.params.id);

        let response = {

            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            image: `http://localhost:3000/images/users/${user.image}`

        };

        res.json(response);

    }

};

module.exports = apiUsersController;