

const { DataTypes ,Sequelize} = require('sequelize');
const db = require("../db");
const { FORCE } = require('sequelize/lib/index-hints');

const Products = db.define("Products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
}, {timestamps: true});


module.exports = Products;