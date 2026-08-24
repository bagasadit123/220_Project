'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const pg = require('pg');
const process = require('process');
const basename = path.basename(__filename);
const db = {};

let sequelize;

// Ambil URL Supabase / Vercel
const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (dbUrl) {
  // --- JALUR VERCEL / SUPABASE CLOUD ---
  // Bersihkan query string agar tidak konflik dengan opsi Sequelize
  const cleanUrl = dbUrl.split('?')[0];

  sequelize = new Sequelize(cleanUrl, {
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Mematikan validasi SSL self-signed Supabase
      }
    },
    logging: false
  });
} else {

  const dbPassword = String(process.env.DB_PASS ?? process.env.DB_PASSWORD ?? '');

  sequelize = new Sequelize(
    process.env.DB_DATABASE || process.env.DB_NAME || 'emisi',
    process.env.DB_USER || process.env.DB_USERNAME || 'postgres',
    dbPassword,
    {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      dialectModule: pg,
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