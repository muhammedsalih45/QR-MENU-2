const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // sequelize instance'ınızı buraya ekleyin

const Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  sira_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'categories',
  timestamps: false,
});

module.exports = Category;
