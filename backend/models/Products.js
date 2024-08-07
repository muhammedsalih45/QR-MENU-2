const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./Category');
const Products = sequelize.define('products', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  product_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DOUBLE(10, 2),
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  menu_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  is_selected: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  sira_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue:0
  }
}, {
  tableName: 'products', // Tablo adınızı burada belirtin
  timestamps: false ,// createdAt ve updatedAt sütunları yoksa
  freezeTableName: true 
});

Products.belongsTo(Category,{foreignKey:'category_id'});
Category.hasMany(Products,{foreignKey:'category_id'});

module.exports = Products;
