
const Sequelize = require('sequelize');

const sequelize = new Sequelize('qrmenuapp', 'root', 'Promaster1234.', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
