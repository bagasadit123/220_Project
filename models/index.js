'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js');
const db = {};

let sequelize;

// Jika berjalan di Vercel / Production menggunakan DATABASE_URL
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  });
} else {
  // Jika berjalan di Lokal (Development)
  const currentConfig = config[env] || config.development;
  sequelize = new Sequelize(
    process.env.DB_DATABASE || currentConfig.database,
    process.env.DB_USER || currentConfig.username,
    process.env.DB_PASS || currentConfig.password,
    {
      host: process.env.DB_HOST || currentConfig.host,
      port: process.env.DB_PORT || currentConfig.port,
      dialect: process.env.DB_DIALECT || currentConfig.dialect || 'postgres',
      logging: false
    }
  );
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;