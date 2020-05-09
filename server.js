//Sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('express_passport', 'postgres', 'pw', {
    host: 'localhost',
    dialect: 'postgres'
});