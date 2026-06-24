module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('Category', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'categories',
        timestamps: false
    });

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            foreignKey: 'category_id',
            as: 'products'
        });
    }

    return Category;
}