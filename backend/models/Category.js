const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Category = sequelize.define('categories', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  category_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  sira_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
}, {
  tableName: 'categories',
  timestamps: false,
  freezeTableName: true
});

module.exports = Category;
