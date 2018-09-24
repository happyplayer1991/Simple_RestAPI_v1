
const Sequelize = require('sequelize');

const config = require('./config.js');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host_db,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../app/model/user.model.js')(sequelize, Sequelize);

module.exports = db;