module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        category: DataTypes.STRING,
        image: DataTypes.STRING

    }, {
        tableName: 'users',
        timestamps: false
    });

    return User;
}