const { Sequelize } = require('sequelize');
require('dotenv').config();

// Inisialisasi koneksi menggunakan variabel environment dari .env
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'postgres',
    logging: false
  }
);

// Fungsi untuk mengetes koneksi database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database PostgreSQL berhasil terhubung!');
  } catch (error) {
    console.error('Gagal terhubung ke database:', error.message);
  }
};

connectDB();

module.exports = sequelize;