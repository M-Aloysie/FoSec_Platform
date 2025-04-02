const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, {
  dialect: 'postgres',
  logging: false,
});

const models = {
  User: require('./user')(sequelize),
  Product: require('./product')(sequelize),
  Training: require('./training')(sequelize),
  Loan: require('./loan')(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = { sequelize, models };