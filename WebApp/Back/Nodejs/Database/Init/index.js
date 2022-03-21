const sequelize = require('sequelize');

const post_sequelize = new sequelize('post_db', 'admin', 'admin', {
    host: 'postgres_db',
    dialect: 'postgres'
});

const db = {};
db.Sequelize = sequelize;
db.sequelize = post_sequelize;

db.accounts = require("./Model/account.model.js")(post_sequelize, sequelize);

module.exports = db;