const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nama, email, password } = req.body;

    if (!nama || !email || !password) {
      return res.status(400).json({ status: 'fail', message: 'Semua field wajib diisi' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ status: 'fail', message: 'Email sudah terdaftar' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      nama,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      status: 'success',
      message: 'Registrasi berhasil',
      data: {
        id: newUser.id,
        nama: newUser.nama,
        email: newUser.email
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: 'fail', message: 'Email dan password wajib diisi' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ status: 'fail', message: 'User tidak ditemukan' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ status: 'fail', message: 'Password salah' });
    }

    // Menggunakan JWT_SECRET dan JWT_EXPIRES sesuai .env
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || '1d' }
    );

    res.json({
      status: 'success',
      message: 'Login berhasil',
      token
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};