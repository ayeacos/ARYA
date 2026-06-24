module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        aroma: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        category_id: DataTypes.INTEGER

    }, {
        tableName: 'products',
        timestamps: false
    });

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
    }

    return Product;
}