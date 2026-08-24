const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./models'); // Menggunakan instance dari models
require('dotenv').config();

const app = express();

app.use(express.json());

// Endpoint Tes Root
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CampusVehicle SaaS API Service' });
});

// Mounting router dengan prefix /api
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

// Jalankan listen & sync HANYA di environment lokal
if (process.env.NODE_ENV !== 'production') {
  sequelize.sync().then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  }).catch((err) => {
    console.error('Database connection error:', err);
  });
}

// Export app agar bisa dibaca Vercel Serverless
module.exports = app;