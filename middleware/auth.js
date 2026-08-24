const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'Akses ditolak, token tidak ditemukan'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: 'fail',
        message: 'Token tidak valid atau expired'
      });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyJWT;