const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // sequelize instance'ınızı buraya ekleyin
const Category  = require('./Category');
const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categories',
      key: 'category_id',
    },
  },
  menu_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  is_selected: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sira_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'products',
  timestamps: false,
});
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Product;
