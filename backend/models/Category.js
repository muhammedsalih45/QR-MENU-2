const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Category = sequelize.define('kategoriler', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  category_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: 'kategoriler',
  timestamps: false,
  freezeTableName: true
});

module.exports = Category;
