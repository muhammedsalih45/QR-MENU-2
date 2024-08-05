const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Category = require('./Category');
const Dish = sequelize.define('yemekler', {
  dish_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  dish_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  menu_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_avaliable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  is_selected: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'yemekler', // Tablo adınızı burada belirtin
  timestamps: false ,// createdAt ve updatedAt sütunları yoksa
  freezeTableName: true 
});

Dish.belongsTo(Category,{foreignKey:'category_id'});
Category.hasMany(Dish,{foreignKey:'category_id'});

module.exports = Dish;
