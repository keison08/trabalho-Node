const configJogo = require('../config/configJogo');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(configJogo.DB, configJogo.USER, configJogo.PASSWORD, {
  host: configJogo.HOST,
  port: configJogo.PORT,
  dialect: configJogo.dialect,
  pool: {
    max: configJogo.pool.max,
    min: configJogo.pool.min,
    acquire: configJogo.pool.acquire,
    idle: configJogo.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.models')
    (sequelize, Sequelize);

module.exports = db;


